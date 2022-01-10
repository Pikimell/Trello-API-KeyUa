import {CognitoRefreshToken, CognitoAccessToken, CognitoIdToken, CognitoUserSession} from "amazon-cognito-identity-js";

const {getCognitoUser} = require('./userConst');


const getSessionsData = (tokens) => {
    const AccessToken = new CognitoAccessToken({AccessToken: tokens.accessToken.jwtToken});
    const IdToken = new CognitoIdToken({IdToken: tokens.idToken.jwtToken});
    const RefreshToken = new CognitoRefreshToken({RefreshToken: tokens.refreshToken.token});

    const sessionData = {
        IdToken: IdToken,
        AccessToken: AccessToken,
        RefreshToken: RefreshToken
    };

    return new CognitoUserSession(sessionData);
};

const refreshToken = (event) => {
    const data = JSON.parse(event.body);
    const {username, tokens} = data;
    const token = new CognitoRefreshToken({RefreshToken: tokens.refreshToken});
    let cognitoUser = getCognitoUser(username);
    cognitoUser.setSignInUserSession(getSessionsData(tokens));

    return new Promise((resolve, reject) => {
        cognitoUser.getSession(function (err, session) {
            if(session.isValid()){
                resolve({
                    statusCode: 200,
                    headers: {"Content-Type": "json/plain"},
                    body: JSON.stringify(session)
                });
            }else{
                cognitoUser.refreshSession(token, (err, session) => {
                    resolve({
                        statusCode: 200,
                        headers: {"Content-Type": "json/plain"},
                        body: JSON.stringify(session)
                    });
                });
            }
        });
    });
};


export {
    refreshToken
};