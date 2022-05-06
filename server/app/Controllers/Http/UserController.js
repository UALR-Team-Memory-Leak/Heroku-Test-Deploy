'use strict'

class UserController {
    register({request}) {
        const {email, username, password, role} = request.all();
        console.log(email, username, password, role)
        return{ 
            message: 'hello world',
        };
    }
}

module.exports = UserController
