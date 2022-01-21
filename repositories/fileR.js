const {dynamoDb} = require("./connection");
const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2' });
const s3 = new AWS.S3();
const FILES_TABLE = 'pashchenko-files';

export const getFiles = () => {
    const params = {
        TableName: FILES_TABLE,
    };
    return dynamoDb.scan(params).promise();
};

export const pushFile = (data) => {
    const params = {
        TableName: FILES_TABLE, Item: {
            id_file: data.id_file, idCard: data.idCard
        }
    };
    return dynamoDb.put(params).promise();
};

export const deleteFile = (event) => {
    let s3Params = {  Bucket: 'volodka-trello-files', Key: event.pathParameters.id_file};

    s3.deleteObject(s3Params, function(err, data) {
        if (err){
            return new Promise(resolve => {
                resolve({
                    statusCode: 200,
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        'Access-Control-Allow-Credentials': true
                    },
                    body: JSON.stringify({err})
                });
            });
        }
        else {
            const params = {
                TableName: FILES_TABLE, Key: {
                    id_file: event.pathParameters.id_file,
                }
            };
            return dynamoDb.delete(params).promise();
        }
    });

};

export default {
    getFiles, pushFile, deleteFile
};