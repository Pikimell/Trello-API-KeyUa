const {getFiles,pushFile,deleteFile} = require("../repositories/fileR");

const getFilesServ = () => {
    return getFiles();
};


const pushFileServ = (params) => {
    return pushFile(params);
};

const deleteFileServ = (params) => {
    return deleteFile(params);
};


export {
    getFilesServ,
    pushFileServ,
    deleteFileServ
};