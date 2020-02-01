<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();

Route::get('/', 'HomePageController@index');

Route::get('/mis-historias', 'PostsController@index');
Route::get('/contar-mi-historia')->middleware('post.create:story');
Route::get('/contar-mi-historia/{id?}', 'PostsController@tellAStory')->name('post.story')->middleware('post.filter');

Route::get('/responder-a-preguntas')->middleware('post.create:question');
Route::get('/responder-a-preguntas/{id?}', 'PostsController@respondToQuestions')->name('post.question')->middleware('post.filter');

Route::get('/mis-datos', 'SettingsController@index');

Route::get('api/historia/{uuid}', 'PostsController@getStoryFromUUID');
Route::post('api/historia/guardar', 'PostsController@saveStory');
Route::post('api/historia/publicar', 'PostsController@publishStory');

Route::get('api/preguntas/', 'PostsController@getQuestions');
Route::get('api/respuestas/{uuid}', 'PostsController@getAnswers');
Route::post('api/respuestas/guardar', 'PostsController@saveAnswers');
Route::post('api/respuestas/publicar', 'PostsController@saveAnswers');

//Route::get('/home', 'HomeController@index')->name('home');

Route::group(['middleware' => 'admin'], function () {
    Route::get('/backend', 'admin\DashboardController@index');
    
    Route::get('/backend/questions', 'admin\QuestionsController@index')->name('backend.questions');
    Route::post('/api/backend/questions/add', 'admin\QuestionsController@addQuestions');
    Route::post('/api/backend/questions/delete', 'admin\QuestionsController@deleteQuestions');
    Route::post('/api/backend/questions/edit', 'admin\QuestionsController@editQuestions');
    
    Route::get('/backend/users', 'admin\UsersController@index')->name('backend.users');
    Route::post('/api/backend/users', 'admin\UsersController@getUsers');
    Route::post('/api/backend/users/toggleactive', 'admin\UsersController@toggleActiveUsers');
    
    Route::get('/backend/settings', 'admin\DashboardController@getQuestions')->name('backend.settings');
    Route::get('/backend/stories', 'admin\DashboardController@getQuestions')->name('backend.stories');
});