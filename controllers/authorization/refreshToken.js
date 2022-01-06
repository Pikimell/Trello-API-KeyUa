import {CognitoRefreshToken} from "amazon-cognito-identity-js";
const {getCognitoUser} = require('./userConst');

const refreshToken = function (event) {
    const data = JSON.parse(event.body);
    const {username, tokens} = data;
    const RefreshToken = new CognitoRefreshToken({ RefreshToken: tokens.refreshToken });
    let cognitoUser = getCognitoUser(username);

    try {
        cognitoUser.refreshSession(RefreshToken, (err, session) => {
            return new Promise((resolve) => {
                resolve({
                    statusCode: 201,
                    headers: {"Access-Control-Allow-Origin": "*"},
                    body: JSON.stringify(session)
                });
            });
        });
    } catch (err) {
        return new Promise((resolve) => {
            resolve({
                statusCode: 400,
                headers: {"Access-Control-Allow-Origin": "*"},
                body: err.toString()
                //body:JSON.stringify(tokens)
            });
        });
    }


};


export {
    refreshToken
};