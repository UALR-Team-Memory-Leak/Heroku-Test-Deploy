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
            .select('id', 'username', 'email')
        return {
            users,
            message: 'listRequest v2 test'
        }
    }

    async approveRegistration({request, params}) {
        const requestUser = await Database
            .query()
            .from('request_ques')
            .where('id', params.id)
            .select('username', 'email', 'password')
        const {approve, role} = request.all();
        
        //checking to see if array is populated
        if(requestUser.length !== 1) {
            return {
            message: 'Not found',
            status: 404
            }    
        }
        const user = requestUser[0]

        let newUser;
        if(approve){
            newUser = await User.create({ //creates user profile in database
                email: user.email,
                username: user.username, //can set this to email if we want: username: email,
                password: user.password,
                role
            });
        }
        await Database
            .query()
            .from('request_ques')
            .where('id', params.id)
            .delete()
        return{ 
            user: newUser,
            //message: 'Mic check, approval working?',
        };
    }
    
}

    

module.exports = ApprovalController
