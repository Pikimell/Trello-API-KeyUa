const {getCardsServ,getCardServ,pushCardServ,deleteCardServ,updateCardServ} = require('../services/cardS')


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

const getCards = async (event, context, callback) => {
    const fetch = fetchDB(callback);
    try {
        const res = await getCardsServ();
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
};

const getCard = async (event, context, callback) => {

    const fetch = fetchDB(callback);
    try {
        const res = await getCardServ(event);
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
}

const pushCard = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    const fetch = fetchDB(callback);
    try {
        const res = await pushCardServ(data);
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
}

const deleteCard = async (event, context, callback) => {

    const fetch = fetchDB(callback);
    try {
        const res = await deleteCardServ(event);
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
}

const updateCard = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    const fetch = fetchDB(callback);
    try {
        const res = await updateCardServ({event:event, data:data});
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
}



export {
    getCards,
    getCard,
    pushCard,
    deleteCard,
    updateCard
}