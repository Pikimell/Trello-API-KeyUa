import {getUploadURL} from "./getUrls";

const uploadFile = async (event) => {

    let body = JSON.parse(event.body);
    const file = body.file;
    let params = {
        fileName: `${file.name}`,
        fileType: `${file.type}`,
    };

    const url = await getUploadURL(params);

    return new Promise(resolve => {
        resolve({
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify({url})
        });
    });
};

export default  {
    uploadFile
};