import {getCognitoUser} from './userConst';

const signOut = (event) => {
    const data = JSON.parse(event.body);
    const {username} = data;
    let cognitoUser = getCognitoUser(username);
    return new Promise((resolve) => {
        cognitoUser.signOut(() => {
            resolve({headers: {"Access-Control-Allow-Origin":"*"},body: 'signOut Ok!'});
        });
    });
};

export {
    signOut
};