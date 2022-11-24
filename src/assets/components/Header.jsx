const Header=()=>{
    return(
        <header>
           <nav class="navbar navbar-expand-lg bg-light">
  <section class="container-fluid">
    <a class="navbar-brand" href="#">Sobre mi</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <section class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Los servicios que deseo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Lo que estoy dispuesto a dar</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contacto</a>
        </li>
      </ul>
    </section>
  </section>
</nav>
        </header>
        
    )
    
}
export default Header;