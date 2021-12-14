const {getColumnsServ,getColumnServ,pushColumnServ,deleteColumnServ,updateColumnServ} = require('../services/columnS')
const COLUMNS_TABLE = 'pashchenko-columns'

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
    const params = {
        TableName: COLUMNS_TABLE,
    };
    const fetch = fetchDB(callback);
    try {
        const res = await getColumnsServ(params);
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
};

const getColumn = async (event, context, callback) => {
    const params = {
        TableName: COLUMNS_TABLE,
        Key: {
            idColumn: event.pathParameters.idColumn,
        },
    };
    const fetch = fetchDB(callback);
    try {
        const res = await getColumnServ(params);
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
}

const pushColumn = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    const params = {
        TableName: COLUMNS_TABLE,
        Item: {
            idColumn: data.idColumn,
            title: data.title,
        }
    };
    const fetch = fetchDB(callback);
    try {
        const res = await pushColumnServ(params);
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
}

const deleteColumn = async (event, context, callback) => {
    const params = {
        TableName: COLUMNS_TABLE,
        Key: {
            idColumn: event.pathParameters.idColumn,
        }
    };

    console.log(`\n\n\n${event.pathParameters.idColumn}\n\n\n`);
    const fetch = fetchDB(callback);
    try {
        const res = await deleteColumnServ(params);
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
}

const updateColumn = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    const params = {
        TableName: COLUMNS_TABLE,
        Key: {
            idColumn: event.pathParameters.idColumn,
        },
        UpdateExpression:
            "set title = :title",
        ExpressionAttributeValues: {
            ":title": data.title
        },

        ReturnValues: "ALL_NEW"
    };
    const fetch = fetchDB(callback);
    try {
        const res = await updateColumnServ(params);
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
    updateColumn
}