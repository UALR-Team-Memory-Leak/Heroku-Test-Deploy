'use strict'

const User = use('App/Models/User');

class ApprovalController {
    //display a list of requests for approval
    async listRequests({ request }){
        // const {id, email, username} = request.all();
        // console.log(id, email, username)
        return{
            // id,
            // email,
            // username,
            message: 'Testing listRequest endpoint'
        };
    }

    async approveRegistration({request}) {
        // const {email, username, password, role} = request.all();
        // console.log(email, username, password, role) //prints data to console
        // const user = await User.create({ //creates user profile in database
        //     email,
        //     username, //can set this to email if we want: username: email,
        //     password,
        //     role,
        // });
        return{ 
          //  user,
            message: 'Mic check, approval working?',
        };
    }
}


module.exports = ApprovalController
