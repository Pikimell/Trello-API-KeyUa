const {getFilesServ,pushFileServ,deleteFileServ} = require('../../services/fileS');
const {fetchDB} = require('../../helpers/index');

const getFiles = async (event, context, callback) => {
    const fetch = fetchDB(callback);
    try {
        const res = await getFilesServ();
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
};

const pushFile = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    const fetch = fetchDB(callback);
    try {
        const res = await pushFileServ(data);
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
};

const deleteFile = async (event, context, callback) => {
    const fetch = fetchDB(callback);
    try {
        const res = await deleteFileServ(event);
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
};


export {
    getFiles,
    pushFile,
    deleteFile
};