import {CognitoRefreshToken} from "amazon-cognito-identity-js";
const {getCognitoUser} = require('./userConst');


const refreshToken = (event) => {
    const data = JSON.parse(event.body);
    const {username, tokens} = data;
    const token = new CognitoRefreshToken({RefreshToken: tokens.refreshToken.token});
    let cognitoUser = getCognitoUser(username);
    //cognitoUser.setSignInUserSession(getSessionsData(tokens));

    return new Promise((resolve) => {
        cognitoUser.refreshSession(token, (err, session) => {
            if(err){
                resolve({
                    statusCode: 400,
                    body: JSON.stringify(err)
                });
            }else{
                resolve({
                    statusCode: 200,
                    body: JSON.stringify(session)
                });
            }
        });
    });
};


export {
    refreshToken
};