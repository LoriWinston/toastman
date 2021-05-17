const deleteRequest = (url) => {
    return fetch(url, {
        method: 'DELETE'
    })
    .then(res => res.json());
};

const getRequest = (url) => {
    return fetch(url, {
        method: 'GET'
    })
    .then(res => res.json());
};

const postRequest = (url, body) => {
    return fetch (url, {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'application.json'
        }
    })
    .then(res => res.json());
};

const updateRequest = (url, body) => {
    return fetch (url, {
        method: 'PUT',
        body: body,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json());
};

export { deleteRequest, getRequest, postRequest, updateRequest };
