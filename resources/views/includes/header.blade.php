<div class="ms-Grid" dir="ltr">
  <div class="ms-Grid-row navbar">
    <div class="ms-Grid-col ms-sm6 ms-md4 ms-lg3 ms-xl3 ms-xxl2">
        <a class="logo" href="/">Miembros del Brown Comite de Barcelona</a>
    </div>
    <div class="ms-Grid-col ms-sm6 ms-md8 ms-lg8 ms-lgPush1 ms-xl6 ms-xlPush3 ms-xxl5 ms-xxlPush5 nav">
        <div class="ms-Grid-col ms-sm3 item {{ ( request()->is('/') || request()->is('contar-mi-historia*') || request()->is('responder-a-preguntas*') ) ? 'active' : '' }}"><a href="/">Contar mi historia</a></div>
        <div class="ms-Grid-col ms-sm3 item {{ (request()->is('mis-historias')) ? 'active' : '' }}"><a href="/mis-historias">Mis historias</a></div>
        <div class="ms-Grid-col ms-sm3 item {{ (request()->is('mis-datos')) ? 'active' : '' }}"><a href="/mis-datos">Mis Datos</a></div>
        <div class="ms-Grid-col ms-sm3 item"><a href="{{ route('logout') }}"
                    onclick="event.preventDefault(); 
                    document.getElementById('logout-form').submit();">
                    {{ __('Logout') }}
                </a>
        </div>
    </div>
  </div>
</div>

<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
    @csrf
</form>