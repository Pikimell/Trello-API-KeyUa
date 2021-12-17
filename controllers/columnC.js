const {getColumnsServ,getColumnServ,pushColumnServ,deleteColumnServ,updateColumnServ,updateColumnIndexServ} = require('../services/columnS')

const fetchDB = (callback) => {
    return (error, result) => {
        if (error) {
            console.error(error);
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: {"Content-Type": "text/plain"},
                body: "Couldn't fetch."
            });
        }

        // create a response
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(result),
        };
        callback(null, response);
    }
}

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
}

const pushColumn = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    const fetch = fetchDB(callback);
    try {
        const res = await pushColumnServ(data);
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
}

const deleteColumn = async (event, context, callback) => {
    const fetch = fetchDB(callback);
    try {
        const res = await deleteColumnServ(event);
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
}

const updateColumn = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    const fetch = fetchDB(callback);
    try {
        const res = await updateColumnServ({event: event, data:data});
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
}

const updateColumnIndex = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    const fetch = fetchDB(callback);
    try {
        const res = await updateColumnIndexServ({event: event, data:data});
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
}

export {
    getColumns,
    getColumn,
    pushColumn,
    deleteColumn,
    updateColumn,
    updateColumnIndex
}