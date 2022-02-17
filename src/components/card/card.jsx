import React from "react";
import './card.css'
import breast from '../../assets/breast.jpg'
import {BsBoxArrowInUpRight} from 'react-icons/bs'
import Tag from "../tag/tag";

const Card = ({id}) =>{
    return(
        <div className="Card" id={id}>
            <div className="Card__image">
                <img src={breast} alt="" />
            </div>
            <div className="Card__content">
                <h1 className="content__title"> Breast Cancer</h1>
                <p className="content__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi deserunt libero tempore at, iste ex laborum ipsum velit iure.
                </p>
                <div className="content__tag">
                    <Tag name={"Python"}/>
                    <Tag name={"React"}/>
                    <Tag name={"FastAPI"}/>
                    <Tag name={"Docker"}/>
                </div>

                <a className="content__link" href="https://github.com/ArilessTir/breast-pred" target="_blank">
                    <p>Open in github</p>
                    <BsBoxArrowInUpRight />
                </a>

            </div>
        </div>
    )
}


export default Card;