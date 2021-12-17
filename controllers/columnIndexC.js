const {getIndexesS, pushIndexesS, updateIndexesS} = require('../services/columnIndexS')
const {fetchDB} = require('../helpers/index')

const getIndexes = async (event, context, callback) => {
    const fetch = fetchDB(callback);
    try {
        const res = await getIndexesS();
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
};

const pushIndexes = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    const fetch = fetchDB(callback);
    try {
        const res = await pushIndexesS(data);
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
}

const updateIndexes = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    const fetch = fetchDB(callback);
    try {
        const res = await updateIndexesS({event: event, data:data});
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
}

export {
    getIndexes,
    pushIndexes,
    updateIndexes
}