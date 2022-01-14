const {getCognitoUser,getAuthDetails} = require('./userConst');

const signIn = async (event) => {
    const data = JSON.parse(event.body);
    const {email, password} = data;


    return new Promise((resolve) => {
        try{
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
                        body: JSON.stringify(token)
                    });
                },
                onFailure: function(err) {
                    resolve({
                        statusCode: 400,
                        headers: {"Content-Type": "text/plain"},
                        body: err.toString()
                    });
                }
            });
        }catch (err){
            resolve({
                statusCode: 400,
                body: err.toString()
            });
        }
    });
};

export {
    signIn
};