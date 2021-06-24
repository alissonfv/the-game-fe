import { getToken } from "../../../utils/auth";

export async function rankingRequest(option) {
    const url = `http://localhost:8060/v1/rankings/${option}`;
    const token = getToken();
    const options = {
        method: 'get',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    let ranking = [];

    let res = await fetch(url, options);
    let data = await res.json();

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
    return ranking;
}