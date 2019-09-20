//RequestApi.js

const baseUrl = 'http://api.openweathermap.org/data/2.5/';
const apiKey = 'a4587650306f462244036f8a3656017d';

export function requestGet(endPoint, query = '') {
    const headers = {
        Accept: 'application/json',
        'Content-type': 'application/json',
    };

    endPoint = `${endPoint}?${query}&units=metric&APPID=${apiKey}`;

    return fetch(baseUrl + endPoint, {
        method: 'GET',
        headers,
    }).then(response => {
        if (response.status === 200) {
            return response
                .json()
                .then(json => {
                    return json !== undefined ? json : {};
                })
                .catch(e => ({}));
        }
        return response.status;
    });
}
