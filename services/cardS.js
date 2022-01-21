const {getCards,getCard,pushCard,deleteCard,updateCard } = require("../repositories/cardR");

const getCardsServ = () => {
    return getCards();
};

const getCardServ = (params) => {
    if(validateGetCardParams(params.pathParameters.idCard) === 'string')
        return getCard(params);
    else return null;
};

const pushCardServ = (params) => {
    if(validatePushCardParams(params))
        return pushCard(params);
    else return null;
};

const deleteCardServ = (params) => {
    return deleteCard(params);
};

const updateCardServ = (params) => {
    return updateCard(params);
};

const validateGetCardParams = (idCard) => {
    return typeof idCard;
};

const validatePushCardParams = ({idColumn,title, idCard, description}) => {
    return typeof idColumn === 'string' && typeof title === 'string' && typeof idCard === 'string' && typeof description === 'string';
};

module.exports =  {
    getCardsServ,
    getCardServ,
    pushCardServ,
    deleteCardServ,
    updateCardServ,
    validateGetCardParams,
    validatePushCardParams
};