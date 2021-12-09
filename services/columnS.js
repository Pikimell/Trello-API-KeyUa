const {getColumns,getColumn,pushColumn,deleteColumn,updateColumn } = require("../repositories/columnsR");

const getColumnsServ = (params) => {
    return getColumns(params);
}

const getColumnServ = (params) => {
    return getColumn(params);
}

const pushColumnServ = (params) => {
    return pushColumn(params);
}

const deleteColumnServ = (params) => {
    return deleteColumn(params);
}

const updateColumnServ = (params) => {
    return updateColumn(params);
}


export {
    getColumnsServ,
    getColumnServ,
    pushColumnServ,
    deleteColumnServ,
    updateColumnServ
}