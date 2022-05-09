'use strict'

const Instructor = use('App/Modes/Instructor');
const Request = use('App/Models/AddInstructor');

class SetupController {
    async setup({request}) {
        return 'Some test';
    }

    async addInstructor({request}) 
    {
        const {Last_Name, Max_Course_Load} = request.all();
        console.log(Last_Name, Max_Course_Load);
        const insertRequest = await Request.create(
        {
            Last_Name,
            Max_Course_Load,
        });
        return{ insertRequest, message: 'New Instructor'};  
    }

    async addSection({}) {
        const {
            Course_Reference_Number, 
            
        } = request.all();

    }
}

module.exports = SetupController
