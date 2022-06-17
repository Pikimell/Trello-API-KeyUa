const {dynamoDb} = require("./connection");
const INDEX_TABLE = 'pashchenko-columnIndexes';

const getIndexesCardsR= () => {
    const params = {
        TableName: INDEX_TABLE,
    };
    return dynamoDb.scan(params).promise();
};

const getIndexesForColR = (event) => {
    const params = {
        TableName: INDEX_TABLE,
        Key: {
            idIndex: event.pathParameters.idColumn,
        },
    };
    return dynamoDb.get(params).promise();
};

const pushIndexesCardsR = (data) => {
    const params = {
        TableName: INDEX_TABLE,
        Item: {
            idIndex: data.idColumn,
            colIndexes: data.colIndexes
        }
    };
    return dynamoDb.put(params).promise();
};

const updateIndexesCardR = ({event, data}) => {
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


const deleteIndexCardR = (event) => {
    const params = {
        TableName: INDEX_TABLE,
        Key: {
            idIndex: event.pathParameters.idColumn,
        }
    };
    return dynamoDb.delete(params).promise();
};

export {
    getIndexesCardsR,
    pushIndexesCardsR,
    updateIndexesCardR,
    deleteIndexCardR,
    getIndexesForColR
};