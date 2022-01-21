import {getFiles,pushFile,deleteFile} from "../repositories/fileR";

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


export {
    getFilesServ,
    pushFileServ,
    deleteFileServ,
    validateParamsForPushFile
};