const {getCardsServ,getCardServ,pushCardServ,deleteCardServ,updateCardServ} = require('../services/cardS')
const CARDS_TABLE = 'pashchenko-cards'

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
    const params = {
        TableName: CARDS_TABLE,
    };
    const fetch = fetchDB(callback);
    try {
        const res = await getCardsServ(params);
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
};

const getCard = async (event, context, callback) => {
    const params = {
        TableName: CARDS_TABLE,
        Key: {
            idCard: +event.pathParameters.idCard,
        },
    };
    const fetch = fetchDB(callback);
    try {
        const res = await getCardServ(params);
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
}

const pushCard = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    const params = {
        TableName: CARDS_TABLE,
        Item: {
            idCard: +Date.now(),
            idColumn: data.idColumn,
            title: data.title,
            description: data.description
        }
    };
    const fetch = fetchDB(callback);
    try {
        const res = await pushCardServ(params);
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
}

const deleteCard = async (event, context, callback) => {
    const params = {
        TableName: CARDS_TABLE,
        Key: {
            idCard: +event.pathParameters.idCard,
        }
    };
    const fetch = fetchDB(callback);
    try {
        const res = await deleteCardServ(params);
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
}

const updateCard = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    const params = {
        TableName: CARDS_TABLE,
        Key: {
            idCard: +event.pathParameters.idCard,
        },
        UpdateExpression:
            "set title = :title, description = :description",
        ConditionExpression: "idCard = :idCard",
        ExpressionAttributeValues: {
            ":idCard": data.idCard,
            ":title": data.title,
            "description": data.description
        },

        ReturnValues: "Card_NEW"
    };
    const fetch = fetchDB(callback);
    try {
        const res = await updateCardServ(params);
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