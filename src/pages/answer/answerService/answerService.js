import { getToken, getId } from "../../../utils/auth";

export function createAnswer(id) {
    console.log(id);
    const url = `http://localhost:8060/v1/answers`;
    const token = getToken();
    const body = {
        id_alternative: id,
        id_user: getId()
    }
    const options = {
        method: "post",
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body)
    }

    fetch(url, options).then(res => {
        if (!res.ok) {
            res.json().then(data => {
                alert(data.message);
            }).catch(err => {
                console.log(err);
            });
        } else {
            return res.json();
        }
    });
}