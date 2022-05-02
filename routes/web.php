<?php

use Illuminate\Support\Facades\Route;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

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

Route::get('/', function () {
    return view('welcome');
});

// Route::get('{any}', function () {
//     return view('welcome');
// })->where('any', '.*');

Auth::routes();
// Route::post("/login", function (Request $request) {
//     // dd($request::all());
//     $user = User::where('email',$request['email']);
//     dd($user);
    
// });
Route::get("/check", function() {
    dd(config('cors'));
});

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');