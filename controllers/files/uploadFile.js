const axios = require('axios');
const {getUploadURL} = require("./getUrls");

const uploadFile = async (event) => {

    console.log('\n\n\n\n\n\n\n');
    console.log(JSON.parse(event.body));
    console.log('\n\n\n\n\n\n\n');

    const file = JSON.parse(event.body).file;
    let params = {
        fileName: `${file.name}`,
        fileType: `${file.type}`,
    };

    const url = await getUploadURL(params);
    axios.put(url, file)
        .then(response => {
            //console.log(response); // TODO write to database
        });
};

export {
    uploadFile
};