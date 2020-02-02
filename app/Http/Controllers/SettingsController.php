<?php

namespace App\Http\Controllers;

use Auth;
use App\User;
use App\Data;
use Illuminate\Http\Request;

class SettingsController extends Controller
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
    
    public function index()
    {
        return view('pages.settings');
    }

    public function getData(Request $request)
    {
        return User::where('id', Auth::user()->id)->with('data')->first()->data;
    }

    public function saveData(Request $request)
    {
        $res = response()->json(
            [
                'result'=>false, 
                'msg'=>'Ha ocurrido en error, refresca la página y vuelve a intentar'
            ]
        );

        $validatedData = $request->validate([
            'name' => 'required',
            'surname' => 'required',
            'nationality' => 'required',
            'city' => 'required',
            'arrival_year' => 'required|integer',
            'age_year' => 'required|integer',
        ]);

        $formValues = [
            'name' => $validatedData['name'],
            'surname' => $validatedData['surname'],
            'nationality' => $validatedData['nationality'],
            'city' => $validatedData['city'],
            'arrival_year' => $validatedData['arrival_year'],
            'age_year' => $validatedData['age_year'],
        ];

        $user = User::where('id', Auth::user()->id)->with('data')->first();

        if(is_null($user)) return $res;
        
        if(is_null($user->data_id)) {
            // create data record
            $data = Data::Create($formValues);
            $user->data_id = $data->id;
            if($user->save()) {
                $res = response()->json(['result'=>true, 'msg'=> 'Datos Guardados!']);
            }
        } else {
            // update data record
            $data = Data::where('id',$user->data_id);
            if($data->update($formValues)) {
                $res = response()->json(['result'=>true, 'msg'=> 'Datos Actualizados!']);
            }
        }
        
        return $res;
    }
}
