import React from "react";
import './card.css'
import {BsBoxArrowInUpRight} from 'react-icons/bs'
import Tag from "../tag/tag";

const Card = ({id, data}) =>{

    return(
        <div className="Card" id={id}>
            <div className="Card__image">
                <img src={data.image} alt="" />
            </div>
            <div className="Card__content">
                <h1 className="content__title"> {data?.name}</h1>
                <p className="content__description">{data?.description} </p>
                <div className="content__tag">
                    {data.techno.map((techno)=>{
                        return(
                            <Tag name={techno} key={techno.id}/>
                        )
                    })}
                </div>

                <a className="content__link" href={data?.link} target="_blank">
                    <p>Open in github</p>
                    <BsBoxArrowInUpRight />
                </a>

            </div>
        </div>
    )
}


export default Card;