'use strict'

class SetupController {
    async setup({request}) {
        return 'Some test';
    }

    async addInstructor({request}) 
    {
        
    }

    async addSection({}) {
        const {
            Course_Reference_Number, 
            
        } = request.all();
    }
}

module.exports = SetupController
