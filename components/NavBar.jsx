import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { MdOutlineContactSupport} from 'react-icons/md';

import { Cart } from '.';
import { useStateContext } from '../context/StateContext';

const NavBar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Shelf Store</Link>
      </p>

      <button type="button" className="cart-icon">
        <Link href="/contact">
          <a>
            <MdOutlineContactSupport />
          </a>
        </Link>
      </button>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div> 
  )
}

export default NavBar