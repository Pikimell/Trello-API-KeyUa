const {dynamoDb} = require("./connection");
const COLUMNS_TABLE = 'pashchenko-columns'

const getColumns = () => {
    const params = {
        TableName: COLUMNS_TABLE,
    };
    return dynamoDb.scan(params).promise();
}

const getColumn = (event) => {
    const params = {
        TableName: COLUMNS_TABLE,
        Key: {
            idColumn: event.pathParameters.idColumn,
        },
    }
    return dynamoDb.get(params).promise();
}

const pushColumn = (data) => {
    const params = {
        TableName: COLUMNS_TABLE,
        Item: {
            idColumn: data.idColumn,
            title: data.title,
            indexColumn: data.indexColumn
        }
    };
    return dynamoDb.put(params).promise();
}

const deleteColumn = (event) => {
    const params = {
        TableName: COLUMNS_TABLE,
        Key: {
            idColumn: event.pathParameters.idColumn,
        }
    };
    return dynamoDb.delete(params).promise();
}

const updateColumn = ({event, data}) => {
    const params = {
        TableName: COLUMNS_TABLE,
        Key: {
            idColumn: event.pathParameters.idColumn,
        },
        UpdateExpression:
            "set title = :title, indexColumn = :index",
        ExpressionAttributeValues: {
            ":title": data.title,
            ":index": data.index
        },
        ReturnValues: "ALL_NEW"
    };
    return dynamoDb.update(params).promise();
}

const updateColumnIndex = ({event, data}) => {
    const params = {
        TableName: COLUMNS_TABLE,
        Key: {
            idColumn: event.pathParameters.idColumn,
        },
        UpdateExpression:
            "set indexColumn = :indexCol",
        ExpressionAttributeValues: {
            ":indexCol": data.indexColumn
        },
        ReturnValues: "ALL_NEW"
    };
    return dynamoDb.update(params).promise();
}



export {
    getColumns,
    getColumn,
    pushColumn,
    deleteColumn,
    updateColumn,
    updateColumnIndex
}