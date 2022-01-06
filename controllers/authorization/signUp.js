const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const {userPool} = require('./userConst');

const signUp = async (event) => {
    const myData = JSON.parse(event.body);
    const {email, password} = myData;

    const attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute({
        Name: 'email',
        Value: email// your email here
    });

    let attributeList = [];
    attributeList.push(attributeEmail);
    return new Promise((resolve) => {
        userPool.signUp(email, password, attributeList, null,
            function (err, result) {
                if (err) {
                    return resolve({statusCode: 422, body: JSON.stringify(err)});
                }
                return resolve({statusCode: 201, body: JSON.stringify(result)});
            });
    });
};


export {
    signUp
};