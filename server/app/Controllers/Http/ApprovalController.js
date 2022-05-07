'use strict'
//import Database from '@ioc:Adonis/Lucid/Database'
const User = use('App/Models/User');
const Database = use('Database')
class ApprovalController {
    //display a list of requests for approval
    async listRequests({request}){
        const users = await Database
            .query()
            .from('request_ques')
            .select('username', 'email')
        return {
            users,
            message: 'listRequest v2 test'
        }
    }

    //Todo: gotta somehow have the root user change 'is_revoked' to true if denying
    //Todo: gotta have root user input a role value for user
    //Todo: gotta make sure we have a way to break this down into one at a time or some shit?
    // Idea is to have a page displaying list of requests with a simple 'Approve' or 'Deny' button, not sure how to backend that
    //Todo: Gotta implement some kinda conditional for 'is_revoked' == false -> register user to database

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
