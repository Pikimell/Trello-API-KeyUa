const {dynamoDb} = require("./connection");

const getCards = (params) => {
    return dynamoDb.scan(params).promise();
}

const getCard = (params) => {
    return dynamoDb.get(params).promise();
}

const pushCard = (params) => {
    return dynamoDb.put(params).promise();
}

const deleteCard = (params) => {
    return dynamoDb.delete(params).promise();
}

const updateCard = (params) => {
    return dynamoDb.update(params).promise();
}

export {
    getCards,
    getCard,
    pushCard,
    deleteCard,
    updateCard
}