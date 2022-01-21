const {dynamoDb} = require("./connection");
const COLUMNS_TABLE = 'pashchenko-columns';

export const getColumns = () => {
    const params = {
        TableName: COLUMNS_TABLE,
    };
    return dynamoDb.scan(params).promise();
};

export const getColumn = (event) => {
    const params = {
        TableName: COLUMNS_TABLE,
        Key: {
            idColumn: event.pathParameters.idColumn,
        },
    };
    return dynamoDb.get(params).promise();
};

export const pushColumn = (data) => {
    const params = {
        TableName: COLUMNS_TABLE,
        Item: {
            idColumn: data.idColumn,
            title: data.title
        }
    };
    return dynamoDb.put(params).promise();
};

export const deleteColumn = (event) => {
    const params = {
        TableName: COLUMNS_TABLE,
        Key: {
            idColumn: event.pathParameters.idColumn,
        }
    };
    return dynamoDb.delete(params).promise();
};

export const updateColumn = ({event, data}) => {
    const params = {
        TableName: COLUMNS_TABLE,
        Key: {
            idColumn: event.pathParameters.idColumn,
        },
        UpdateExpression:
            "set title = :title",
        ExpressionAttributeValues: {
            ":title": data.title
        },
        ReturnValues: "ALL_NEW"
    };
    return dynamoDb.update(params).promise();
};

export default {
    getColumns,
    getColumn,
    pushColumn,
    deleteColumn,
    updateColumn
};