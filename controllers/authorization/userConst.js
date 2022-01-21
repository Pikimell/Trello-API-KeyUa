const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const poolData = {
    UserPoolId: "us-east-2_dtSlpb6U3",//process.env.USER_POOL_ID,
    ClientId: "6orqho1ubfhu8s0j0uge4mk3js"//process.env.CLIENT_ID
};

export const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);


export const getCognitoUser = (login) => {
    let userData = {
        Username: login,
        Pool: userPool
    };
    return new AmazonCognitoIdentity.CognitoUser(userData);
};

export const getAuthDetails = (login, password) => {
    let userData = {
        Username: login,
        Password: password
    };
    return new AmazonCognitoIdentity.AuthenticationDetails(userData);
};


export default {
    poolData,
    userPool,
    getCognitoUser,
    getAuthDetails
};