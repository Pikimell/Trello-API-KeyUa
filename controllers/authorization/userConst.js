const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const poolData = {
    UserPoolId: process.env.USER_POOL_ID,
    ClientId: process.env.CLIENT_ID
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);


const getCognitoUser = (login) => {
    let userData = {
        Username: login,
        Pool: userPool
    };
    return new AmazonCognitoIdentity.CognitoUser(userData);
};

const getAuthDetails = (login,password) => {
    let userData = {
        Username: login,
        Password: password
    };
    return new AmazonCognitoIdentity.AuthenticationDetails(userData);
};


export {
    poolData,
    userPool,
    getCognitoUser,
    getAuthDetails
};