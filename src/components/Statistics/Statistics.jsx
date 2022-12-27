import React from 'react'
import './Statistics.scss'
import Brand from "../../images/icon-brand-recognition.svg"
import Detailed from "../../images/icon-detailed-records.svg"
import Fully from "../../images/icon-fully-customizable.svg"
import {Shorter} from '../../components/Shorter/Shorter'


export const Statistics = () => {
  return (  
    <>
        <div className='container-Statistics'>
            <Shorter />
            <div className="container">
                <div className='Statistics'>
                    <h2>Advanced Statistcs</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dicta id at impedit atque saepe beatae dolorem ad provident</p>
                </div>
                <hr className='blueLine' />
                <div className="Statistics-details">
                    <div className="details">
                        <img src={Brand} alt="Brand" />
                        <h3>Brand Recognition</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod natus delectus, laudantium atque odio aliqu</p>
                        </div>
                    <div className="details two">
                        <img src={Detailed} alt="Detailed" />
                        <h3>Detailed Records</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus at numquam voluptate omnis officiis eo</p>
                        </div>
                    <div className="details three">
                        <img src={Fully} alt="Fully" />
                        <h3>Fully Customizable</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda omnis nisi voluptas exercitationem </p>
                    </div>
                </div>
            </div>
            <div className="boots">
                <h1>Boost your links today</h1>
                <button className='bStart get'>Get Started</button>
            </div>
        </div>
    </>
  ) 
}


