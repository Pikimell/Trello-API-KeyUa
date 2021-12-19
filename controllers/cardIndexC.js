import {deleteColumnServ} from "../services/columnS";

const {getIndexesCardS,pushIndexesCardS,updateIndexesCardS,getIndexesForColS,deleteIndexCardS} = require('../services/cardIndexS')
const {fetchDB} = require('../helpers/index')

const getIndexes = async (event, context, callback) => {
    const fetch = fetchDB(callback);
    try {
        const res = await getIndexesCardS();
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
};

const getIndexesForCol = async (event, context, callback) => {
    const fetch = fetchDB(callback);
    try {
        const res = await getIndexesForColS(event);
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
};

const pushIndexes = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    const fetch = fetchDB(callback);
    try {
        const res = await pushIndexesCardS(data);
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
}

const updateIndexes = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    const fetch = fetchDB(callback);
    try {
        const res = await updateIndexesCardS({event: event, data:data});
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
}

const deleteIndexCard = async (event, context, callback) => {
    const fetch = fetchDB(callback);
    try {
        const res = await deleteIndexCardS(event);
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
}

export {
    getIndexes,
    pushIndexes,
    updateIndexes,
    getIndexesForCol,
    deleteIndexCard,
}