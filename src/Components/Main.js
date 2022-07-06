import CardInfo from "./Card";
import content from "../data/Content";

const SideNav=()=>{
    return(
    <div class="container float-left mt-1">
    <div class="row">
    <div class="col-2 h-100">
    <div class="list-group" >
      <a class="list-group-item"  data-toggle="list" href="#list-home" >Home</a>
      <a class="list-group-item" data-toggle="list" href="#list-profile" >Profile</a>
      <a class="list-group-item" data-toggle="list" href="#list-messages">Messages</a>
      <a class="list-group-item" data-toggle="list" href="#list-settings">Settings</a>
      <a class="list-group-item"  href="#list-settings" disabled></a>
      <a class="list-group-item"  href="#list-settings"></a>
      <a class="list-group-item"  href="#list-settings"></a>
      <a class="list-group-item"  href="#list-settings"></a>
      <a class="list-group-item"  href="#list-settings"></a>
      <a class="list-group-item"  href="#list-settings"></a>
      <a class="list-group-item"  href="#list-settings"></a>
      <a class="list-group-item"  href="#list-settings"></a>
      <a class="list-group-item" href="#list-settings"></a>
      <a class="list-group-item"  href="#list-settings"></a>
      <a class="list-group-item" href="#list-settings"></a>
      <a class="list-group-item"  href="#list-settings"></a>
      <a class="list-group-item" href="#list-settings"></a>
      <a class="list-group-item" href="#list-settings"></a>
      <a class="list-group-item" href="#list-settings"></a>
      <a class="list-group-item" href="#list-settings"></a>
      <a class="list-group-item" href="#list-settings"></a>
      <a class="list-group-item" href="#list-settings"></a>
      <a class="list-group-item" href="#list-settings"></a>
      <a class="list-group-item" href="#list-settings"></a>
      <a class="list-group-item" href="#list-settings"></a>
      <a class="list-group-item" href="#list-settings"></a>
      <a class="list-group-item" href="#list-settings"></a>
      <a class="list-group-item" href="#list-settings"></a>
    </div>
  </div>
  <div class="col-10">
  <div className="d-flex flex-wrap align-items-center">
        {content.map((item)=>{return <CardInfo imageUrl={item.imageUrl}
        size={item.size}
        price={item.price}
        loc={item.loc}
        />})}
      </div>
  </div>
</div>

    </div>
    );
};
export default SideNav;