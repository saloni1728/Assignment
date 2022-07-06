import NavLink from "./NavLink";

const NavBar=()=>{
    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between ">
            <div class="collapse navbar-collapse">
            <img class="mx-3" src="https://cdn.vectorstock.com/i/1000x1000/87/37/home-icon-logo-design-simple-house-logo-icon-vector-36658737.webp" alt="..." width="30" height="30"/>
            <a class="navbar-brand col-md-5" href="#" >housing.com</a>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control my-sm-2 " type="search" placeholder="Search" aria-label="Search"/>
            </form>
            <ul class="navbar-nav me-auto">
                <NavLink/>
            </ul>
            
            </div>
        </nav>
    </div>
    );
};
export default NavBar;