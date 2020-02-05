<?php

namespace App\Http\Controllers;

use Auth;
use App\Post;
use App\Story;
use App\Question;
use App\Answer;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Mews\Purifier\Purifier;

class PostsController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function index() {
        $posts = Post::where('user_id', Auth::user()->id)->get();
        return view('pages.posts',['posts'=>$posts]);
    }

    public function tellAStory($id) {
        return view('pages.post.story');
    }

    public function respondToQuestions() {
        return view('pages.post.questions');
    }

    public function publishStory(Request $request) {
        return $this->saveStory($request);
    }

    public function saveStory(Request $request) {

        $msg = 'História publicada!';
        $time = Carbon::now()->toDateTimeString();
        $res = response()->json(
            [
                'result'=>false, 
                'msg'=>'Ha ocurrido en error, refresca la página y vuelve a intentar'
            ]
        );

        $validatedPostData = $request->validate([
            'uuid' => 'required',
            'title' => 'required',
            'body' => 'required',
            'bodyjson' => 'required',
            'anonymous' => 'required|boolean',
            'published' => 'required|boolean',
            'action' => 'required|boolean', // false = guardar; true = publicar
        ]);

        $updatedValues = [
            'title' => $validatedPostData['title'],
            'last_saved' => $time,
            'anonymous' => $validatedPostData['anonymous'],
            'slug' => Str::slug($request->input('title')),
            'published' => $validatedPostData['published']
        ];

        // create a post retrive the id
        $post = Post::where('uuid',$validatedPostData['uuid'])->first();

        if (!is_null($post)) {

            // create the story
            $story = Story::updateOrCreate(
                ['post_id' => $post->id],
                ['body' => clean($validatedPostData['body']), 'bodyjson' => $validatedPostData['bodyjson']]
            );

            if (!is_null($story)) {
                $post->update($updatedValues);
                $res = response()->json([
                        'result'=>true, 
                        'msg'=>  $validatedPostData['action'] ? $msg : $time
                    ]);
            }
        }
        return $res;
    }

    public function getQuestions() {
        $questions = Question::All();
        return response()->json($questions);
    }

    public function getAnswers($uuid) {
        $post = Post::where(['uuid'=>$uuid,'user_id'=>Auth::user()->id])->with('answers')->first();
        $questions = Question::All();
        return response()->json(['post'=>$post, 'questions'=>$questions]);
    }

    public function getStoryFromUUID($uuid) {
        $post = Post::where(['uuid'=>$uuid,'user_id'=>Auth::user()->id])->with('story')->first();
        return response()->json($post);
    }

    public function publishAnswers(Request $request) {
        return $this->saveAnswers($request);
    }

    public function saveAnswers(Request $request) {
        $msg = 'História publicada!';
        $time = Carbon::now()->toDateTimeString();
        $res = response()->json(
            [
                'result'=>false, 
                'msg'=>'Ha ocurrido en error, refresca la página y vuelve a intentar'
            ]
        );
        $validatedPostData = $request->validate([
            'uuid' => 'required',
            'anonymous' => 'required|boolean',
            'published' => 'required|boolean',
            'answers' =>   'required|array'
        ]);

        $updatedValues = [
            'title' => 'Preguntas: '.$time,
            'anonymous' => $validatedPostData['anonymous'],
            'published' => $validatedPostData['published'],
            'slug' => Str::slug('Preguntas: '.$time),
            'last_saved' => $time,
        ];

        $post = Post::where('uuid',$validatedPostData['uuid'])->first();
        if (!is_null($post)) 
        {
            //save the questions
            foreach($validatedPostData['answers'] as $answer) 
            {
                if(!empty($answer['body']))
                {
                    $answer = Answer::updateOrCreate(
                        ['post_id' => $post->id, 'question_id' => $answer['question_id']],
                        ['body' => $answer['body']]
                    );

                    // exit if one of the answers fails
                    if(is_null($answer)) {return $res;}

                } else {
                    Answer::where(['post_id' => $post->id, 'question_id' => $answer['question_id']])->delete();
                }

            }

            // save post data
            if($post->update($updatedValues)) 
            {
                $res = response()->json([
                    'result'=>true, 
                    'msg'=> $validatedPostData['published'] ? $msg : $time
                ]);
            }
        }
        return $res;
    }
    
}
