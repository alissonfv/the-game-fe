import { getToken } from "../../../utils/auth";

export function rankingRequest() {
    let option = 1;

    const url = `http://localhost:8060/v1/rankings/${option}`;
    const token = getToken();
    const options = {
        method: 'get',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    let ranking = [];

    fetch(url, options).then(res => {
        return res.json();
    }).then(data => {
        let name;
        let points;
        let newState;

        data.elements.forEach(element => {
            name = element.user.name;
            points = element.points;

            newState = {
                name: name,
                points: points
            }

            ranking.push(newState);
        });
        console.log(ranking);
        return ranking;
    }).catch(err => {
        console.log("[ERRO]\n", err);
    });
}