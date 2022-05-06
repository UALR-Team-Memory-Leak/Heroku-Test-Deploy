'use strict'

const User = use('App/Models/User');
class UserController {
    //Login method
    async login({request, auth }) {
        const { email, password } = request.all();
        const token = await auth.attempt(email, password);
        return token;
    }

    //Register method
    async register({request}) {
        const {email, username, password, role} = request.all();
        console.log(email, username, password, role) //prints data to console
        const user = await User.create({
            email,
            username, //can set this to email if we want: username: email,
            password,
            role,
        });
        return{ 
            user,
            message: 'Yup this is returning',
        };
    }
}

module.exports = UserController
