import React, { Component } from 'react'
import { BASE_URL, ACESS_TOKEN, USER_ID } from '@env';

export default class Router extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            isLoading: true,
        }
    }

    async getUser() {
        try {
            const response = await fetch(`${BASE_URL}/users/${USER_ID}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${ACESS_TOKEN}`,
                },
            })
            const json = await response.json()
            this.setState({ data: json })
            console.log(this.state.data)
        } catch (error) {
            console.log(error)
        } finally {
            console.log('finally')
        }
    }
}