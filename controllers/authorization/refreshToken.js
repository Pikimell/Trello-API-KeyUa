import {CognitoRefreshToken} from "amazon-cognito-identity-js";

const {getCognitoUser} = require('./userConst');


const refreshToken = (event) => {
    const data = JSON.parse(event.body);
    const {username, refreshToken} = data;
    const token = new CognitoRefreshToken({RefreshToken: refreshToken});
    let cognitoUser = getCognitoUser(username);

    return new Promise((resolve) => {
        cognitoUser.refreshSession(token, (err, session) => {
            if (err) {
                resolve({
                    statusCode: 400,
                    headers: {"Access-Control-Allow-Origin": "*"},
                    body: err.toString()
                });
            } else {
                resolve({
                    statusCode: 200,
                    headers: {"Access-Control-Allow-Origin": "*"},
                    body: JSON.stringify(session)
                });
            }
        });
    });
};


export {
    refreshToken
};