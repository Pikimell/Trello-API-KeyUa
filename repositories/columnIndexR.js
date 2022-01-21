import {dynamoDb} from "./connection";
const INDEX_TABLE = 'pashchenko-columnIndexes';

export const getIndexes= () => {
    const params = {
        TableName: INDEX_TABLE,
    };
    return dynamoDb.scan(params).promise();
};

export const pushIndexes = (data) => {
    const params = {
        TableName: INDEX_TABLE,
        Item: {
            idIndex: data.idIndex,
            colIndexes: data.colIndexes
        }
    };
    return dynamoDb.put(params).promise();
};

export const updateIndexes = ({event, data}) => {
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

export default {
    getIndexes,
    pushIndexes,
    updateIndexes
};