'use strict'
<<<<<<< HEAD

const Instructor = use('App/Modes/Instructor');
const Request = use('App/Models/AddInstructor');

=======
const AddSection = use('App/Models/AddSection');
>>>>>>> d3f8a6e3e850395f576fbf4d60952212733639bd
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

    async addSection({request}) {
        const {
            Course_Reference_Number, 
            Section_Number,

            Meeting_Period_1_Days,
            Meeting_Period_1_Start,
            Meeting_Period_1_End,

            Meeting_Period_2_Days,
            Meeting_Period_2_Start,
            Meeting_Period_2_End,

            Meeting_Period_3_Days,
            Meeting_Period_3_Start,
            Meeting_Period_3_End
        } = request.all();

        //prints data to console
        console.log( Course_Reference_Number, Section_Number, Meeting_Period_1_Days, Meeting_Period_1_Start, Meeting_Period_1_End,
                     Meeting_Period_2_Days,Meeting_Period_2_Start,Meeting_Period_2_End, 
                     Meeting_Period_3_Days, Meeting_Period_3_Start, Meeting_Period_3_End) 

        const userSection = await AddSection.create({ //instead of creating a User, create a Request
            Course_Reference_Number, 
            Section_Number,

            Meeting_Period_1_Days,
            Meeting_Period_1_Start,
            Meeting_Period_1_End,

            Meeting_Period_2_Days,
            Meeting_Period_2_Start,
            Meeting_Period_2_End,

            Meeting_Period_3_Days,
            Meeting_Period_3_Start,
            Meeting_Period_3_End
        });
        return{ 
            userSection,
            message: 'Thank you for your input',
        };

    }
}

module.exports = SetupController
