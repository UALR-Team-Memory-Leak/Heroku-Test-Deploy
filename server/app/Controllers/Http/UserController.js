'use strict'

const User = use('App/Models/User');
const Request = use('App/Models/Request');
class UserController {
    //Login method
    async login({request, auth }) {
        const { email, password } = request.all();
        const token = await auth.attempt(email, password);
        return token;
    }

    //Register method
    async register({request}) {
        const {email, username, password} = request.all();
        console.log(email, username, password) //prints data to console
        const userRequest = await Request.create({ //instead of creating a User, create a Request
            email,
            username, //can set this to email if we want: username: email,
            password,
            //role,
        });
        return{ 
            userRequest,
            message: 'Yup this is returning',
        };
    }
}

module.exports = UserController
