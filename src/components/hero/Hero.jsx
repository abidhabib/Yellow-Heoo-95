import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import { BsBagCheckFill, BsArrowRightSquare } from 'react-icons/bs'
const Hero = () => {
    return (
        <>
            <div className={css.container}>
                <div className={css.h_sides}>
                    <span className={css.text1}>Skin Protection  Cream</span>
                    <div className={css.text2}>
                        <span>Trendy Collection
                        </span>
                        <span>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.

                        </span>
                    </div>
                </div>

                <div className={css.wraper}>
                    <div className={css.blueCircle}>
                        <img src={HeroImg} alt="" width={490} />

                    </div>
                    <div className={css.cart2}>
                                                   <BsBagCheckFill />     
                        <div className={css.signup}>
                            <span>Best Offers</span>
                            <div className={css.right}>
                                <BsArrowRightSquare />
                            </div>
                        </div>
                    </div>


                </div>
                <div className={css.h_sides}>
                    <div className={css.tarfic}><span>1.5M</span>
                        <span>Monthly Traffic
                        </span>
                    </div>
                    <div className={css.customers}>
                        <span>100k
                        </span>
                        <span>Happy Customers </span>
                    </div>
                </div>






            </div>
        </>
    )
}

export default Hero