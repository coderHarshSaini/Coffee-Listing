import { useState } from "react";
import CardList from "./CardList";
import "./ListingPage.css";
import bg from './assets/bg-cafe.jpg';
import vector from './assets/vector.svg';

export default function ListingPage(){
    let [styles,setStyles]=useState({backgroundColor:"#4D5562"});
    let [styles1,setStyles1]=useState({backgroundColor:"transparent"})
    
    function show(value){
       
        if(value=='all'){
            setStyles(()=>{
                return {backgroundColor:"#4D5562"}
            })

            setStyles1(()=>{
                return {backgroundColor:"transparent"}
            })
        }
        else{
            setStyles(()=>{
                return {backgroundColor:"transparent"}
            })

            setStyles1(()=>{
                return {backgroundColor:"#6F757C"}
            })
            

        }
    
    }

    return(
        <div className="main">
            <div className="bg-image">
            <img src={bg} alt="" /> 
            </div>
            <div className="container">
                <div className="top-div">
                    <h1>Our Collection</h1>
                    <img  className="vector" src={vector} alt="" />
                    <p className="para">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
                    <div className="buttons">
                    <button style={styles} className="btn all" onClick={()=>show('all')}>All Products</button>
                    <button style={styles1} className="btn available" onClick={()=>show('available')}>Available Now</button>
                    </div>
                </div>
                <CardList/>
            </div>

        </div>
    )
}