const {getCards,getCard,pushCard,deleteCard,updateCard } = require("../repositories/cardR");

const getCardsServ = () => {
    return getCards();
}

const getCardServ = (params) => {
    return getCard(params);
}

const pushCardServ = (params) => {
    return pushCard(params);
}

const deleteCardServ = (params) => {
    return deleteCard(params);
}

const updateCardServ = (params) => {
    return updateCard(params);
}


export {
    getCardsServ,
    getCardServ,
    pushCardServ,
    deleteCardServ,
    updateCardServ
}