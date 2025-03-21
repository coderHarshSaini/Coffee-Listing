import starFill from './assets/Star_fill.svg' 
import star from './assets/Star.svg'
import "./Card.css"
function Card({details,index}){

    return(
        <div className='card'>
            {index<2?<p className='popular'>Popular</p>:null}
            <img src={details.img} alt="" />
            <h4>{details.name}<span className='price'>${details.price}</span></h4>
            <p>
                <img src={(index==5)?star:starFill} alt=""/> &nbsp;{details.rating} &nbsp; 
                <span style={{color:"#6F757C"}}> {details.votes}</span> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span style={{color:"salmon"}}>{details.status}</span>
            </p>
        </div>
    )
}
export default Card