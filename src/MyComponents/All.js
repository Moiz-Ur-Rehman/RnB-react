import React from 'react'
import Card from './Card'
import './Products.css'
import { ProductsData } from './Data'
import { Link } from 'react-router-dom'

function All() {
    return (
        <div className="all-products">
            <div className="all-wrap">
                {ProductsData.map((item,index)=>{
                    return(
                        <Link to="/Apitesting" key={index} style={{textDecoration: 'none'}}>
                            <Card image={item.img} alt={item.alt} title={item.title} price={item.price} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default All
