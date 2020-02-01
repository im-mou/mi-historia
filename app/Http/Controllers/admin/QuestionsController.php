<?php

namespace App\Http\Controllers\admin;

use Auth;
use App\Question;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QuestionsController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');
    }

    public function index()
    {
        return view('admin.questions');
    }

    // CREATE A NEW QUESTION
    public function addQuestions(Request $request) {
        $validatedData = $request->validate([
            'body' => 'required',
        ]);

        // create a post retrive the id
        $question = Question::create([
            'body' => $validatedData['body'],
        ]);

        if (!is_null($question)) {
            return response()->json(['result'=>$question->id]);
        } else {
            return response()->json(['result'=>false]);
        }
    }

    // DELETE A QUESTION
    public function deleteQuestions(Request $request) {
        $validatedData = $request->validate([
            'id' => 'required|integer',
        ]);

        // create a post retrive the id
        $question = Question::find($validatedData['id']);

        if ($question->delete()) {
            return response()->json(['result'=>true]);
        } else {
            return response()->json(['result'=>false]);
        }
    }    

    // EDIT A QUESTION 
    public function editQuestions(Request $request) {
        $validatedData = $request->validate([
            'id' => 'required|integer',
        ]);

        $question = Question::find($validatedData['id']);
        $question->body = $request->input('body');

        if ($question->save()) {
            return response()->json(['result'=>true]);
        } else {
            return response()->json(['result'=>false]);
        }
    }
}
