module.exports = (sequelize, Sequelize) => {

    const Cryptoinfos = sequelize.define("cryptoinfos", {
    name: {
    type: Sequelize.STRING
    },
    date: {
    type: Sequelize.DATE
    },
    begin_price: {
    type: Sequelize.BOOLEAN
    },
    end_price: {
      type: Sequelize.DOUBLE
    },
    max_price: {
      type: Sequelize.DOUBLE
    },
    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    }
    });
    return Cryptoinfos;
    };