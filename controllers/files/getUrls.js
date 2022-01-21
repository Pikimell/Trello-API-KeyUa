const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2' });
const s3 = new AWS.S3();
const URL_EXPIRATION_SECONDS = 300;

export const getUploadURL = async function(file) {
    const {fileName,fileType} = file;
    const s3Params = {
        Bucket: 'volodka-trello-files',
        Key:fileName,
        Expires: URL_EXPIRATION_SECONDS,
        ContentType:fileType
    };
    return await s3.getSignedUrlPromise('putObject', s3Params);
};

const getFile = async (event) => {
    let filename = event.pathParameters.id_file;
    const s3Params = {
        Bucket: 'volodka-trello-files',
        Key: filename
    };

    const uploadURL = await s3.getSignedUrlPromise('getObject', s3Params);

    return new Promise((resolve) => {
        resolve({
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify({uploadURL})
        });
    });
};

export default {
    getUploadURL,getFile
};
