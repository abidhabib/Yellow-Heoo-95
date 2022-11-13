import React from 'react'
import css from '../header/Header.module.css'
import Logo from '../../assets/logo.png'
import {CgShoppingBag} from 'react-icons/cg'
const Header = () => {
    return (
        <>
            <div className={css.container}>

                <div className={css.Logo}>
                    <img src={Logo} alt="" />
                    <span>Amazon</span>
                </div>
                <div className={css.right}>

                    <div className={css.menu}>
                        <ul className={css.menu}>
                            <li>Collections</li>
                            <li>Brands</li>
                            <li>New</li>
                            <li>Sales</li>
                            <li>En-</li>
                        </ul>
                    </div>
                    <input className={css.search} type="" placeholder='Search'/>
<CgShoppingBag className={css.cart}/>
                </div>

                

               

            </div>

        </>

    )
}

export default Header