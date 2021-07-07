import { getToken, getId } from "../../../utils/auth";
import axios from "axios";

export async function createAnswer(id) {

    const url = `http://localhost:8060/v1/answers`;

    const token = getToken();
    const body = {
        id_alternative: id,
        id_user : parseInt(getId())
    }

    let request = await axios
        .post(url, body,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        ).then(res => {
            if (res.status !== 200) {
                alert("houve algum erro ao responder sua pergunta tenten novamente..");
                return res;
            }
            return res;
        }).catch(err => {
            alert("houve algum erro ao responder sua pergunta tente novamente..");
            return err;
        });

    return request;

}