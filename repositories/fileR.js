const {dynamoDb} = require("./connection");
const FILES_TABLE = 'pashchenko-files';

const getFiles = () => {
    const params = {
        TableName: FILES_TABLE,
    };
    return dynamoDb.scan(params).promise();
};

const pushFile = (data) => {
    const params = {
        TableName: FILES_TABLE, Item: {
            id_file: data.id_file, idCard: data.idCard
        }
    };
    return dynamoDb.put(params).promise();
};

const deleteFile = (event) => {
    const params = {
        TableName: FILES_TABLE, Key: {
            id_file: event.pathParameters.id_file,
        }
    };
    return dynamoDb.delete(params).promise();
};


export {
    getFiles, pushFile, deleteFile
};