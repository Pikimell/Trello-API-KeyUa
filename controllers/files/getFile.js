const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2' });
const s3 = new AWS.S3();


const getFileUrl = async (idFile) => {
    const s3Params = {
        Bucket: 'volodka-trello-files',
        Key: idFile
    };
    const signedUrl = await s3.getSignedUrlPromise('getObject', s3Params);
    return signedUrl;

};

const downloadFile = async (event) => {
    const key = event.pathParameters.idFile;
    let url = getFileUrl(key);
    return new Promise((resolve) => {
        resolve({
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify({url,key})
        });
    });
};


export {
    downloadFile,
    getFileUrl
};