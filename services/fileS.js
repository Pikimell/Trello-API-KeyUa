const {getFiles,getFile,pushFile,deleteFile} = require("../repositories/fileR");

const getFilesServ = () => {
    return getFiles();
};

const getFileServ = (params) => {
    return getFile(params);
};

const pushFileServ = (params) => {
    return pushFile(params);
};

const deleteFileServ = (params) => {
    return deleteFile(params);
};


export {
    getFileServ,
    getFilesServ,
    pushFileServ,
    deleteFileServ
};