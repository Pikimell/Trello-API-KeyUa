import {getColumnsServ,getColumnServ,pushColumnServ,deleteColumnServ,updateColumnServ} from '../services/columnS';
const {fetchDB} = require('../helpers/index');

const getColumns = async (event, context, callback) => {
    const fetch = fetchDB(callback);
    try {
        const res = await getColumnsServ();
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
};

const getColumn = async (event, context, callback) => {
    const fetch = fetchDB(callback);
    try {
        const res = await getColumnServ(event);
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
};

const pushColumn = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    const fetch = fetchDB(callback);
    try {
        const res = await pushColumnServ(data);
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
};

const deleteColumn = async (event, context, callback) => {
    const fetch = fetchDB(callback);
    try {
        const res = await deleteColumnServ(event);
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
};

const updateColumn = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    const fetch = fetchDB(callback);
    try {
        const res = await updateColumnServ({event: event, data:data});
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
};


export default  {
    getColumns,
    getColumn,
    pushColumn,
    deleteColumn,
    updateColumn
};