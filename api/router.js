import { BASE_URL, ACESS_TOKEN, USER_ID } from '@env';
import axiox from 'axios';

// Set autorization header for all requests, could be usefull
// axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;

class router {
    constructor() {
        this.url = BASE_URL;
        this.token = ACESS_TOKEN;
        this.id = USER_ID;
        this.config = {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.token}`
            }
        }
    }

    async get_user_information() {
        let info = ''

        // return await axiox.get(`${this.url}users/${this.id}`, this.config).then((response) => {
        //     return response.data
        // }).catch((error) => {
        //     console.log(error)
        // })

        await axiox.get(`${this.url}users/${this.id}`, this.config).then((response) => {
            info = response.data
        })

        return info

    }
}

export default new router;