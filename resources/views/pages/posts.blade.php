@extends('layouts.default')
@section('content')
    
    <h3>Mis historias</h3>
    <div class="row">
        @foreach ($posts as $post)
            <div class="col-12">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">{{ $post->title }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{ $post->type }}</h6>
                        <p class="card-text"> 
                            {!! $post->story->body !!} 
                        </p>
                        <a href="/responder-a-preguntas/{{ $post->uuid }}" class="card-link">Edit</a>
                    </div>
                </div>
            </div>
        @endforeach
    </div>

@stop