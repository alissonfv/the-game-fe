import { login } from '../../../utils/auth'

export function loginRequest(username, password) {
        if (username === null || password === null) {
                window.location.href = '/';
        } else {
                const bodyRequest = {
                        login: username,
                        password: password
                };
                const url = 'http://localhost:8060/v1/login';
                const options = {
                        method: 'post',
                        headers: {
                                'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(bodyRequest)
                };

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
                        login(data.token);
                        window.location.href = '/ranking';
                }).catch(err => {
                        console.log(err);
                });
        }
}