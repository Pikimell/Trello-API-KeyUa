const fetchDB = (callback) => {
    return (error, result) => {
        if (error) {
            console.error(error);
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: {"Content-Type": "text/plain"},
                body: error.toString()
            });
        }

        // create a response
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "text/plain"
            },
            body: JSON.stringify(result),
        };
        callback(null, response);
    };
};

export {
    fetchDB
};