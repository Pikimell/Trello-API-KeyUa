const dynamoDb = require("./connection");

const getColumns = (params) => {
    return dynamoDb.scan(params).promise();
}

const getColumn = (params) => {
    return dynamoDb.get(params).promise();
}

const pushColumn = (params) => {
    return dynamoDb.put(params).promise();
}

const deleteColumn = (params) => {
    return dynamoDb.delete(params).promise();
}

const updateColumn = (params) => {
    return dynamoDb.update(params).promise();
}

export {
    getColumns,
    getColumn,
    pushColumn,
    deleteColumn,
    updateColumn
}