import { login } from '../../../utils/auth'

export function loginRequest(username, password) {
        if (username === null || password === null) {
                window.location.href = '/';
        } else {
                const url = 'http://localhost:8060/v1/login';
                const options = {
                        method: 'post',
                        body: {
                                user: username,
                                password: password
                        }
                };

                fetch(url, options).then(res => {
                        if (!res.ok) {
                                console.log(res.status);
                                alert(res.statusText);
                        }
                        return res.json();
                }).then(data => {
                        login(data.token);
                        window.location.href = '/ranking';
                }).catch(err => {
                        console.log(err);
                });
        }
}