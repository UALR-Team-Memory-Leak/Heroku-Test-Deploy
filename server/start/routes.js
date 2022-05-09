'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Dev requests for importing test data
Route.post('import','ImportController.import')
Route.post('import/multi','ImportMultiController.importMulti')
Route.post('auth/dev-register', 'UserController.devRegister')

//All users can use these controllers
Route.group(() => {
  Route.post('auth/register', 'UserController.register');
  Route.post('auth/login', 'UserController.login');
})
  .prefix('api/v0');

  //Routes all authenticated users can access
  Route.group(() => {
    Route.get("/assistant/gen", "AssistantController.generate"); //don't know what route.xxx should be
    Route.post("/assistant/edit", "AssistantController.edit"); //check what route.xxx should be 
  }).middleware("auth");
  
  //Routes admin and root users can access
  Route.group(() => {
    Route.post("/assistant/setup", "AssistantController.setup"); //check what route.xxx should be
  }).middleware(["auth", "admin"])
    .prefix('api/v0');

  //Routes ROOT can access  
  Route.group(() => {
    Route.get("/requests", "ApprovalController.listRequests"); //Endpoint to grab list of requests
    Route.post("/approval/:id", "ApprovalController.approveRegistration"); //Endpoint to post approve/deny requests
    Route.post("/assistant/setup", "AssistantController.setup"); //check what route.xxx should be
  }).middleware("auth", "root")
    .prefix('api/v0');  