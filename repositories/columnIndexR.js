const {dynamoDb} = require("./connection");
const INDEX_TABLE = 'pashchenko-columnIndexes';

const getIndexes= () => {
    const params = {
        TableName: INDEX_TABLE,
    };
    return dynamoDb.scan(params).promise();
};

const pushIndexes = (data) => {
    const params = {
        TableName: INDEX_TABLE,
        Item: {
            idIndex: data.idIndex,
            colIndexes: data.colIndexes
        }
    };
    return dynamoDb.put(params).promise();
};

const updateIndexes = ({event, data}) => {
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

export {
    getIndexes,
    pushIndexes,
    updateIndexes
};