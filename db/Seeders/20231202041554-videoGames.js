'use strict';

const { VIDEO_GAME_TABLE } = require('../Models/videoGame.model')

const games = [
  {
    id: 1,
    name: "Among us",
    price: 10800,
    imgUrl: "http://localhost:4200/images/amongus.jpg"
  },
  {
    id: 2,
    name: "Baldur's gate 3",
    price: 199900,
    imgUrl: "http://localhost:4200/images/baldurs.jpg"
  },
  {
    id: 3,
    name: "Resident Evil 4",
    price: 229900,
    imgUrl: "http://localhost:4200/images/resident.jpg"
  },
  {
    id: 4,
    name: "The Legend of Zelda Breath of the wild",
    price: 269900,
    imgUrl: "http://localhost:4200/images/botw.jpg"
  },
  {
      id: 5,
      name: "Cuphead",
      price: 39900,
      imgUrl: "http://localhost:4200/images/cuphead.avif"
  },
  {
      id: 6,
      name: "Spiderman 2",
      price: 309900,
      imgUrl: "http://localhost:4200/images/spiderman.avif"
  },
  {
      id: 7,
      name: "The Legend of Zelda Tears of the kingdom",
      price: 300000,
      imgUrl: "http://localhost:4200/images/TloZ.jpg"
  },
  {
      id: 8,
      name: "Mortal Kombat",
      price: 199900,
      imgUrl: "http://localhost:4200/images/mk.jpg"
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface ) {

    for (let i = 0; i < games.length; i++) {

      await queryInterface.bulkInsert(VIDEO_GAME_TABLE, [{
        game_name: games[i].name,
        price: games[i].price,
        url: games[i].imgUrl
      }])

    }
  },

  async down (queryInterface ) {

    await queryInterface.bulkDelete(VIDEO_GAME_TABLE, null, {});

  }
};
