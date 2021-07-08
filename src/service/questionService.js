import { getToken } from "../utils/auth";
import Queue from "../utils/queue";
import Config from '../utils/config'


export async function questionRequest (){
    const config = new Config();
    const url = `${config.URL}:${config.PORT}/v1/questions`;
    const token = getToken();
    const options = {
        method: 'get',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    let res = await fetch(url, options);
    let data = await res.json();
    let queue = new Queue();

    for (let i= 0; i < data.length;i++) {
        queue.inserting(data[i]);
    };
    console.log(queue);

    return queue;
}