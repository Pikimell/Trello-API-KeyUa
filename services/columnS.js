const {getColumns,getColumn,pushColumn,deleteColumn,updateColumn } = require("../repositories/columnsR");

const getColumnsServ = () => {
    return getColumns();
};

const getColumnServ = (params) => {
    let type = validateGetColumnParams(params.pathParameters.idColumn);
    if(type === 'string') return getColumn(params);
    else return null;
};

const pushColumnServ = (params) => {
    if(validatePushColumnParams(params.data))
        return pushColumn(params);
    return null;
};

const deleteColumnServ = (params) => {
    return deleteColumn(params);
};

const updateColumnServ = (params) => {
    return updateColumn(params);
};

const validateGetColumnParams = (idColumn) => {
    return typeof idColumn;
};

const validatePushColumnParams = ({idColumn,title}) => {
    return typeof idColumn === 'string' && typeof title === 'string';
};

module.exports = {
    getColumnsServ,
    getColumnServ,
    pushColumnServ,
    deleteColumnServ,
    updateColumnServ,
    validateGetColumnParams,
    validatePushColumnParams
};