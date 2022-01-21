import {getColumns,getColumn,pushColumn,deleteColumn,updateColumn } from "../repositories/columnsR";

export const getColumnsServ = () => {
    return getColumns();
};

export const getColumnServ = (params) => {
    let type = validateGetColumnParams(params.pathParameters.idColumn);
    if(type === 'string') return getColumn(params);
    else return null;
};

export const pushColumnServ = (params) => {
    if(validatePushColumnParams(params.data))
        return pushColumn(params);
    return null;
};

export const deleteColumnServ = (params) => {
    return deleteColumn(params);
};

export const updateColumnServ = (params) => {
    return updateColumn(params);
};

const validateGetColumnParams = (idColumn) => {
    return typeof idColumn;
};

const validatePushColumnParams = ({idColumn,title}) => {
    return typeof idColumn === 'string' && typeof title === 'string';
};

export default {
    getColumnsServ,
    getColumnServ,
    pushColumnServ,
    deleteColumnServ,
    updateColumnServ,
    validateGetColumnParams,
    validatePushColumnParams
};