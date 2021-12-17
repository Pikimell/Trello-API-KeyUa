const {getColumns,getColumn,pushColumn,deleteColumn,updateColumn,updateColumnIndex } = require("../repositories/columnsR");

const getColumnsServ = () => {
    return getColumns();
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

const updateColumnIndexServ = (params) => {
    return updateColumnIndex(params);
}

export {
    getColumnsServ,
    getColumnServ,
    pushColumnServ,
    deleteColumnServ,
    updateColumnServ,
    updateColumnIndexServ
}