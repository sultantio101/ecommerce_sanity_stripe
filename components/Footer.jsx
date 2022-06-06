import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook, AiFillInfoCircle } from 'react-icons/ai';

import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Shelf Store All rights reserved</p>
      <button type="button" className="info-icon">
        <Link href="/about">About Us</Link>
      </button>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillFacebook />
      </p>
    </div>
  )
}

export default Footer