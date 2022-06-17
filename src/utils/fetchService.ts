const BASE_URL = 'https://62286b649fd6174ca82321f1.mockapi.io/case-study/';

export function fetchService(url: string, method: string, body?: object) {
    return new Promise((resolve, reject) => {
        fetch(BASE_URL + url, {
            method: method,
            body: method == 'POST' ? JSON.stringify(body) : null,
            headers: {'Content-type': 'application/json; charset=UTF-8'},
        })
            .then(response => {
                // eslint-disable-next-line @typescript-eslint/no-shadow
                response.text().then(body => {
                    if (response.ok) {
                        resolve(JSON.parse(body));
                    } else {
                        reject(JSON.parse(body));
                    }
                });
            })
            .catch(error => {
                reject(JSON.parse(error));
            });
    });
}
