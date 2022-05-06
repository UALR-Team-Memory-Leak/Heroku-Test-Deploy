'use strict'

const User = use('App/Models/User');
class UserController {
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
            message: 'hello world',
        };
    }
}

module.exports = UserController
