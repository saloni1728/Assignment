const NavLink=()=>{
    var Items=["Home","Features","Pricing","About"];
    return(
            Items.map((n)=>{return <li class="nav-item">
                <a class="nav-link" href="#">{n}</a>
            </li>})
        );
};
export default NavLink;