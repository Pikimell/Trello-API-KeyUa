import {deleteColumn} from "../repositories/columnsR";

const {getIndexesCardsR, pushIndexesCardsR, updateIndexesCardR,getIndexesForColR,deleteIndexCardR} = require("../repositories/cardIndexR");

const getIndexesCardS = () => {
    return getIndexesCardsR();
}
const getIndexesForColS = (params) => {
    return getIndexesForColR(params);
}

const pushIndexesCardS = (params) => {
    return pushIndexesCardsR(params);
}

const updateIndexesCardS = (params) => {
    return updateIndexesCardR(params);
}

const deleteIndexCardS = (params) => {
    return deleteIndexCardR(params);
}

export{
    getIndexesCardS,
    pushIndexesCardS,
    updateIndexesCardS,
    getIndexesForColS,
    deleteIndexCardS
}