<div class="navbar">
    <div class="navbar-inner">
        <a id="logo" href="/">Logo</a>
        <ul class="nav">
            <li><a href="/">Contar mi historia</a></li>
            <li><a href="/mis-historias">Mis historias</a></li>
            <li><a href="/mis-datos">Mis Datos</a></li>
            <li><a href="{{ route('logout') }}"
                    onclick="event.preventDefault(); 
                    document.getElementById('logout-form').submit();">
                    {{ __('Logout') }}
                </a>
            </li>
        </ul>
    </div>
</div>
<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
    @csrf
</form>