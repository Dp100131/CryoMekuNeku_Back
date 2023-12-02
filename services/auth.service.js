const boom = require('@hapi/boom');
const nodemailer = require('nodemailer');

const { hashPassword, comparePassword } = require('../util/security/password.security.js');
const { signJwt, verifyJwt } = require('../util/security/jwt.security.js');

const { config } = require('../config/config.js');

const UserService = require('./user.service.js');
const service = new UserService();

class AuthService {

  async getUser(email, password) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      throw boom.unauthorized();;
    }
    delete user.dataValues.password;
    return user;
  }

  signToken(user) {
    const payload = {
      sub: user.userId,
      typeId: user.typeId
    }
    console.log(payload);
    const token = signJwt(payload, config.jwtSecret);
    return {
      user,
      token
    };
  }

  async changePassword(token, newPassword) {
    try {
      const payload = verifyJwt(token, config.jwtSecret);
      const user = await service.findOne(payload.sub);
      if (user.recoveryToken !== token) {
        throw boom.unauthorized();
      }
      const hash = await hashPassword(newPassword, 10);
      await service.update(user.id, {recoveryToken: null, password: hash});
      return { message: 'password changed' };
    } catch (error) {
      throw boom.unauthorized();
    }
  }

  async sendRecovery(email) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const payload = { sub: user.id };
    const token = signJwt(payload, config.tokenSecret, {expiresIn: '15min'});
    const link = ` http://localhost:3000/recovery?token=${token}`;
    await service.update(user.id, {recoveryToken: token});
    const info = {
      from: '"cryomekuneku👻" <cryomekuneku@cryomekuneku.com>',
      to: `${user.email}`,
      subject: "Email para recuperar contraseña",
      html: `<b>Ingresa a este link => ${link}</b>`,
    }
    const rta = await this.sendMail(email, info);
    return rta;
  }

  async sendMail(email, info) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: true, // true for 465, false for other ports
      port: 465,
      auth: {
        user: config.smtpEmail,
        pass: config.smtpPassword
      }
    });
    await transporter.sendMail({
      from: info.from,
      to: `${user.email}`,
      subject: info.subject,
      html: info.html
    });
    return {  message: 'mail sent' };
  }
}

module.exports = AuthService;