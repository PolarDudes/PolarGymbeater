import { BASE_URL, ACESS_TOKEN, USER_ID } from '@env';

class Router {

    async getUser() {
        try {
            return await fetch(`${BASE_URL}users/${USER_ID}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${ACESS_TOKEN}`,
                }
            })
                .then((response) => response.json())
                .then((json) => json)
        }
        catch (error) {
            return error;
        }
    }
}

export default new Router;