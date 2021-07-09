import { login } from '../utils/auth'
import Config from '../utils/config'

export function loginRequest(username, password) {
        const config = new Config();
        if (username === null || password === null) {
                alert("Os campos são obrigatórios!");
                window.location.href = '/';
        } else {
                const bodyRequest = {
                        login: username,
                        password: password
                };
                const url = `${config.URL}:${config.PORT}/v1/login`;
                const options = {
                        method: 'post',
                        headers: {
                                'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(bodyRequest)
                };

                console.log(options);

                fetch(url, options).then(res => {
                        if (!res.ok) {
                                res.json().then(data => {
                                        alert(data.message);
                                        window.location.href = '/';
                                }).catch(err => {
                                        console.log(err);
                                });
                        } else {
                                return res.json();
                        }
                }).then(data => {
                        login(data.token, data.id);
                        window.location.href = '/ranking';
                }).catch(err => {
                        console.log(err);
                });
        }
}