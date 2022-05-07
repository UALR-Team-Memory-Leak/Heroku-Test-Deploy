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

//All users can use these controllers
Route.group(() => {
  Route.post('auth/register', 'UserController.register');
  Route.post('auth/login', 'UserController.login');
})
  .prefix('api/v0');

  //Routes all authenticated users can access
  Route.group(() => {
    Route.get("/assistant", "AssistantController.generate"); //don't know what route.xxx should be
    Route.post("/assistant", "AssistantController.edit"); //check what route.xxx should be 
  }).middleware("auth");
  
  //Routes admin and root users can access
  Route.group(() => {
    Route.post("/assistant", "AssistantController.setup"); //check what route.xxx should be
  }).middleware(["auth", "admin"])
    .prefix('api/v0');

  //Routes ROOT can access  
  Route.group(() => {
    Route.post("/approval", "ApprovalController.approval"); //check what route.xxx should be
    Route.post("/assistant", "AssistantController.setup"); //check what route.xxx should be
  }).middleware("root")
    .prefix('api/v0');  