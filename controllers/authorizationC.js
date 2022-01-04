const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const jwt_decode = require('jwt-decode');

const poolData = {
    UserPoolId: 'us-east-2_dtSlpb6U3',
    ClientId: '5ptet6oq1th1i3cpdjaf7no20f'
};
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);


function getCognitoUser(login){
    let userData = {
        Username: login,
        Pool: userPool
    };

    return new AmazonCognitoIdentity.CognitoUser(userData);
}

function getAuthDetails(login,password){
    let userData = {
        Username: login,
        Password: password
    };

    return new AmazonCognitoIdentity.AuthenticationDetails(userData);
}


function getJWT(token){
    let {email,exp,auth_time,token_use,sub} = jwt_decode(token.idToken);
    return {token, email, exp, auth_time, token_use, sub};
}

const signIn = async (event) => {
    const data = JSON.parse(event.body);
    const {email,password} = data;

    return new Promise((resolve) => {
        getCognitoUser(email).authenticateUser(getAuthDetails(email,password),{

            onSuccess: (result) => {
                const token = {
                    accessToken: result.getAccessToken(),
                    idToken: result.getIdToken(),
                    refreshToken: result.getRefreshToken()
                };

                resolve({
                    statusCode: 200,
                    headers: {"Access-Control-Allow-Origin":"*"},
                    body: JSON.stringify(getJWT(token))
                });
            },
            onFailure: function() {
                resolve({
                    statusCode: 400,
                    body: JSON.stringify(getAuthDetails(email,password))
                });
            }
        });
    });
};

export {
    signIn
};