const AWS = require("aws-sdk");

AWS.config.update({
    region: "us-east-2",
});

export const dynamoDb = new AWS.DynamoDB.DocumentClient();

export default {
    dynamoDb
};