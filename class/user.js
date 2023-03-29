export default class User {
    constructor(data) {
        this.user_id = data[ 'polar-user-id' ],
            this.member_id = data[ 'member-id' ],
            this.registration_date = data[ 'registration-date' ],
            this.first_name = data[ 'first-name' ],
            this.last_name = data[ 'last-name' ],
            this.birthdate = data.birthdate,
            this.gender = data.gender,
            this.weight = data.weight,
            this.height = data.height,
            this.extra_info = data[ 'extra-info' ]
    }

    getAll() {
        return {
            'polar-user-id': this.user_id,
            'member-id': this.member_id,
            'registration-date': this.registration_date,
            'first-name': this.first_name,
            'last-name': this.last_name,
            birthdate: this.birthdate,
            gender: this.gender,
            weight: this.weight,
            height: this.height,
            'extra-info': this.extra_info
        }
    }
}