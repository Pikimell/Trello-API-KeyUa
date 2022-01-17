const {dynamoDb} = require("./connection");
const FILES_TABLE = 'pashchenko-files';
const {getFileUrl} = require('../controllers/files/getFile');

const getFiles = () => {
    const params = {
        TableName: FILES_TABLE,
    };
    return dynamoDb.scan(params).promise();
};

const getFile = (event) => {
    let filename = JSON.parse(event.body).filename;

    const URL = getFileUrl(filename).then((response) => {
        return new Promise((resolve, reject) => {
            resolve({
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                    'Access-Control-Allow-Credentials': true
                },
                body: JSON.stringify({URL})
            });
        });
    });
};

const pushFile = (data) => {
    const params = {
        TableName: FILES_TABLE, Item: {
            id_file: data.idFile, idCard: data.idCard
        }
    };
    return dynamoDb.put(params).promise();
};

const deleteFile = (event) => {
    const params = {
        TableName: FILES_TABLE, Key: {
            id_file: event.pathParameters.idFile,
        }
    };
    return dynamoDb.delete(params).promise();
};


export {
    getFiles, getFile, pushFile, deleteFile
};