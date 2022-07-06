const CardInfo=(props)=>{
    return (
        <div className="card flex-col m-2" style={{width:"30%",height:"30%"}}>
            <img className="card-img w-100 h-100"  src={props.imageUrl} alt="..." />
            <div className="card-body">
                <p className="card-text font-weight-bold" style={{margin:"0.5%"}}>{props.size}</p>
                <p className="card-text" style={{margin:"0.5%"}}>{props.loc}</p>
                <p className="card-text" style={{margin:"0.5%"}}>{props.price}</p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                <button className="btn btn-success float-right" style={{color:"black", margin:"1%"}} href="#">View</button>
                <button className="btn btn-light float-right" style={{color:"black",borderColor:"blue", margin:"1%"}} href="#">Contact</button>
                </div>
            </div>
        </div>
    );
};
export default CardInfo;