import { BASE_URL, ACESS_TOKEN, USER_ID } from '@env';
import axiox from 'axios';

class router {
    constructor() {
        this.url = BASE_URL;
        this.token = ACESS_TOKEN;
        this.user_id = USER_ID;
    }

    get_user_information() {
        // axiox({
        //     method: 'get',
        //     url: `${this.url}/v3/users/${this.user_id}`,
        // }).then((response) => {
        //     return response.data;
        // })

        const config = {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.token}`
            }
        }

        axiox.get(`${this.url}/v3/users/${this.user_id}`, config)
            .then((response) => {
                return response.data;
            }
            )
    }
}

export default new router;