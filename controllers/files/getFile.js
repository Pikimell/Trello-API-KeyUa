const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2' });
const s3 = new AWS.S3();



async function downloadFile(presignedGETURL) {

    const url = presignedGETURL
    //alert(url + " this is the url in download file function")
    try {
        //alert("TRY: " + url)

        const response = await axios({
            url: url,
            method: 'GET',
            responseType: 'arraybuffer',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/pdf'
            }
        })
        //console.log(response.data)
        //alert(response.data)
        //alert(response)
        console.log("response.data from s3 object...>", response.data)
        //alert(response.data + " this is the resonse in donwload file function")
        return response.data;
    }catch (err) {
        console.log("error in axios call", err)
        //alert(err + " error in axios call")
        throw err
    }
}







const getFile = async(event) => {
    const key = event.pathParameters.idFile;
    let params = {Bucket: 'volodka-trello-files', Key: key};
    let file = require('fs').createWriteStream(`C:\\Users\\PC\\Pictures\\${key}`);
    let myFile = await s3.getObject(params);
    myFile.createReadStream().pipe(file);


    downloadFile();
    /*return new Promise(resolve => {
        resolve({
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify(myFile.service)
        });
    })*/
};

export {
    getFile
};