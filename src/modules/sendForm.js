'use strict'

export const sendData = (body, outputSucces, outputError) => {
    return fetch('./server.php', {
        method: `POST`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        credentials: `include`
    }).then((response) => {
        if(response.status !== 200) {
            throw outputError;
        }
        outputSucces();
    }).catch(outputError);
};
