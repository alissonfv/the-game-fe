import { getToken } from "../../../utils/auth";
import Queue from "../../../utils/queue";

export async function questionRequest (){
    const url = `http://localhost:8060/v1/questions`;
    const token = getToken();
    const options = {
        method: 'get',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    let res = await fetch(url, options);
    let data = await res.json();
    let idQueue = new Queue(); 
    
    for (let i= 0; i < data.length;i++) {
        idQueue.inserting(data[i].id);
    };
    return idQueue;
}

export async function questionRequestById (id){
    const url = `http://localhost:8060/v1/questions/${id}`;
    const token = getToken();
    const options = {
        method: 'get',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    let res = await fetch(url, options);
    let data = await res.json();
    
    console.log(data);
    return data;
}

