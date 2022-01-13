const {getCognitoUser} = require('./userConst');

const signOut = (event) => {
    const data = JSON.parse(event.body);
    const {username} = data;
    let cognitoUser = getCognitoUser(username);
    return new Promise((resolve) => {
        cognitoUser.signOut(() => {
            resolve({body: 'signOut Ok!'});
        });
    });
};

export {
    signOut
};