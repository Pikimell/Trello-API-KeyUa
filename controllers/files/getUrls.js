const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2' });
const s3 = new AWS.S3();

// Change this value to adjust the signed URL's expiration
const URL_EXPIRATION_SECONDS = 300;

const getUploadURL = async function(event) {
    const randomID = parseInt(Math.random() * 10000000);
    const Key = `${randomID}.jpg`;

    // Get signed URL from S3
    const s3Params = {
        Bucket: 'volodka-trello-files',
        Key,
        Expires: URL_EXPIRATION_SECONDS,
        ContentType: 'image/jpeg',

        // This ACL makes the uploaded object publicly readable. You must also uncomment
        // the extra permission for the Lambda function in the SAM template.

        // ACL: 'public-read'
    };

    console.log('Params: ', s3Params);
    const uploadURL = await s3.getSignedUrlPromise('putObject', s3Params);

    return new Promise((resolve) => {
        resolve({
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify({uploadURL: uploadURL,Key})
        });
    });

};

export {
    getUploadURL
};
