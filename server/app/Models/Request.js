'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Request extends Model {
    static get table() {
        return 'request_ques' // or whatever your name is
      }
}

module.exports = Request
