import Card from "./Card";
import "./CardList.css"
function CardList(){
    let cards=[
        {
            img:"https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg",
            name:"Cappuccino",
            price:"5.20",
            rating:"4.7",
            votes:"(65 votes)"
        },
        {
            img:"https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/house-coffee.jpg",
            name:"House Coffee",
            price:"3.50",
            rating:"4.85",
            votes:"(14 votes)"
        },
        {
            img:"https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/espresso.jpg",
            name:"Espresso",
            price:"2.50",
            rating:"4.9",
            votes:"(55 votes)"
        },
        {
            img:"https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/coffee-latte.jpg",
            name:"Coffee Latte",
            price:"4.50",
            rating:"5.0",
            votes:"(23 votes)"
        },
        {
            img:"https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/chocolate-coffee.jpg",
            name:"Chocolate Coffee",
            price:"4.00",
            rating:"4.65",
            votes:"(122 votes)",
            status:"Sold Out"
        },
        {
            img:"https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/valentine-special.jpg",
            name:"Valentine Special",
            price:"5.50",
            votes: "No Rating"
        }
    ];

    return (
        <div className="cardList">
            {cards.map((card,idx)=>{
                return <Card details={card} key={idx} index={idx}/>
            })}
        </div>
    )
}
export default CardList