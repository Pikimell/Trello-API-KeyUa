import {dynamoDb} from "./connection";
const CARDS_TABLE = 'pashchenko-cards';

export const getCards = () => {
    const params = {
        TableName: CARDS_TABLE,
    };
    return dynamoDb.scan(params).promise();
};

export const getCard = (event) => {
    const params = {
        TableName: CARDS_TABLE,
        Key: {
            idCard: event.pathParameters.idCard,
        },
    };
    return dynamoDb.get(params).promise();
};

export const pushCard = (data) => {
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

export const deleteCard = (event) => {
    const params = {
        TableName: CARDS_TABLE,
        Key: {
            idCard: event.pathParameters.idCard,
        }
    };
    return dynamoDb.delete(params).promise();
};

export const updateCard = ({event,data}) => {
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

export default {
    getCards,
    getCard,
    pushCard,
    deleteCard,
    updateCard
};