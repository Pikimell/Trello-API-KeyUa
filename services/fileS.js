import {getFiles,pushFile,deleteFile} from "../repositories/fileR";

export const getFilesServ = () => {
    return getFiles();
};

export const pushFileServ = (params) => {
    return pushFile(params);
};

export const deleteFileServ = (params) => {
    return deleteFile(params);
};


const validateParamsForPushFile = ({id_file, idCard}) => {
    return !(typeof id_file !== 'string' || typeof idCard !== 'string' || id_file.includes(' '));
};


export default {
    getFilesServ,
    pushFileServ,
    deleteFileServ,
    validateParamsForPushFile
};