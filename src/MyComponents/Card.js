import React,{useState} from 'react'
import './Products.css'
import { Spinner } from './Spinner';

function Card(props) {
    const [loading,setloading]=useState(true);
    return (
        <div className="card">
            <div className="card-img">
                <img src={props.image} alt={props.alt} width="100%"/>
            </div>
            <div className="card-details">
                <h4>{props.price}</h4>
                <h3>{props.title}</h3>
            </div>
        </div>
    )
}
export default Card