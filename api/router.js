import { BASE_URL, ACESS_TOKEN, USER_ID } from '@env';
import User from '../class/user';

class Router {

    async getUser() {
        return await fetch(`${BASE_URL}users/${USER_ID}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${ACESS_TOKEN}`,
            }
        })
            .then((response) => response.json())
            .then((json) => {
                // console.log(json)
                return json
            })
            .catch((error) => console.error(error));
    }
}

export default new Router;