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
    Route.post("/assistant/scheduler", "AssistantController.scheduler"); //don't know what route.xxx should be
    Route.post("/assistant/edit", "AssistantController.edit"); //check what route.xxx should be 
  }).middleware("auth")
    .prefix('api/v0');
  
  //Routes admin and root users can access
  Route.group(() => {
    Route.post("/setup/add", "SetupController.setup"); //check what route.xxx should be
    Route.post("/setup/addInstructor", "SetupController.addInstructor");
    Route.post("/setup/addSection", "SetupController.addSection");
    Route.post("/setup/delete-section/:id", "SetupController.deleteSection");
    Route.post("/setup/delete-instructor/:id", "SetupController.deleteInstructor");
    Route.get("/setup/sections/", "SetupController.listSections");
    Route.get("/setup/instructors/", "SetupController.listInstructors");
  }).middleware(["auth", "admin"])
    .prefix('api/v0');

  //Routes ROOT can access  
  Route.group(() => {
    Route.get("/requests", "ApprovalController.listRequests"); //Endpoint to grab list of requests
    Route.post("/approval/:id", "ApprovalController.approveRegistration"); //Endpoint to post approve/deny requests
    Route.post("/setup/root-add", "SetupController.setup"); //check what route.xxx should be
  }).middleware("auth", "root")
    .prefix('api/v0');
