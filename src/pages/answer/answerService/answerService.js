import { getToken } from "../../../utils/auth";

export async function createAnswer(){
    const url = `http://localhost:8060/v1/answers`;
    const token = getToken();
    const corpodaREquest = {
        "id_alternative" : 2,
        "id_user" : 2
    }
    const options = {
        method: 'post',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body : corpodaREquest
    }

    console.log(options);

    let res = await fetch(url, options);

    let data = await res.json();

    console.log(data);

return data;


}