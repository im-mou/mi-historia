<?php

namespace App\Http\Controllers\admin;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UsersController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('admin');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('admin.users');
    }

    public function getUsers() {
        $users = User::All();
        return response()->json($users);
    
    }

    // Active or block a user 
    public function toggleActiveUsers(Request $request) {
        $validatedData = $request->validate([
            'id' => 'required|integer',
            'active' => 'required'
        ]);

        $user= User::find($validatedData['id']);
        $user->active = $request->input('active');

        if ($user->save()) {
            return response()->json(['result'=>true]);
        } else {
            return response()->json(['result'=>false]);
        }
    }
}