const {dynamoDb} = require("./connection");
const INDEX_TABLE = 'pashchenko-columnIndexes';

export const getIndexesCardsR= () => {
    const params = {
        TableName: INDEX_TABLE,
    };
    return dynamoDb.scan(params).promise();
};

export const getIndexesForColR = (event) => {
    const params = {
        TableName: INDEX_TABLE,
        Key: {
            idIndex: event.pathParameters.idColumn,
        },
    };
    return dynamoDb.get(params).promise();
};

export const pushIndexesCardsR = (data) => {
    const params = {
        TableName: INDEX_TABLE,
        Item: {
            idIndex: data.idColumn,
            colIndexes: data.colIndexes
        }
    };
    return dynamoDb.put(params).promise();
};

export const updateIndexesCardR = ({event, data}) => {
    const params = {
        TableName: INDEX_TABLE,
        Key: {
            idIndex: event.pathParameters.idIndex,
        },
        UpdateExpression:
            "set colIndexes = :colIndexes",
        ExpressionAttributeValues: {
            ":colIndexes": data.colIndexes
        },
        ReturnValues: "ALL_NEW"
    };
    return dynamoDb.update(params).promise();
};


export const deleteIndexCardR = (event) => {
    const params = {
        TableName: INDEX_TABLE,
        Key: {
            idIndex: event.pathParameters.idColumn,
        }
    };
    return dynamoDb.delete(params).promise();
};

export default {
    getIndexesCardsR,
    pushIndexesCardsR,
    updateIndexesCardR,
    deleteIndexCardR,
    getIndexesForColR
};