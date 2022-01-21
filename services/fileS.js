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


const validateParamsForPushFile = ({id_file, idCard}) => {
    return !(typeof id_file !== 'string' || typeof idCard !== 'string' || id_file.includes(' '));
};


module.exports = {
    getFilesServ,
    pushFileServ,
    deleteFileServ,
    validateParamsForPushFile
};