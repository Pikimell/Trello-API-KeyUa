const {dynamoDb} = require("./connection");
const CARDS_TABLE = 'pashchenko-cards';

const getCards = () => {
    const params = {
        TableName: CARDS_TABLE,
    };
    return dynamoDb.scan(params).promise();
};

const getCard = (event) => {
    const params = {
        TableName: CARDS_TABLE,
        Key: {
            idCard: event.pathParameters.idCard,
        },
    };
    return dynamoDb.get(params).promise();
};

const pushCard = (data) => {
    const params = {
        TableName: CARDS_TABLE,
        Item: {
            idCard: data.idCard,
            idColumn: data.idColumn,
            title: data.title,
            description: data.description,
        }
    };
    return dynamoDb.put(params).promise();
};

const deleteCard = (event) => {
    const params = {
        TableName: CARDS_TABLE,
        Key: {
            idCard: event.pathParameters.idCard,
        }
    };
    return dynamoDb.delete(params).promise();
};

const updateCard = ({event,data}) => {
    const params = {
        TableName: CARDS_TABLE,
        Key: {
            idCard: event.pathParameters.idCard,
        },
        UpdateExpression:
            "set title = :title, description = :description, idColumn = :idColumn",
        ExpressionAttributeValues: {
            ":title": data.title,
            ":description": data.description,
            ":idColumn": data.idColumn
        },

        ReturnValues: "ALL_NEW"
    };
    return dynamoDb.update(params).promise();
};

module.exports = {
    getCards,
    getCard,
    pushCard,
    deleteCard,
    updateCard
};