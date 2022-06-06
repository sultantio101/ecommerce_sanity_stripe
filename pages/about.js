import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <>
      <div className="products-heading">
        <h2>About Us</h2>
        <p>Shelf Store ini adalah sebuah website toko online (e-commerce) yang dibuat dengan Next.js sebagai backend,</p>
        <p>React.js sebagai frontend, Sanity CMS, dan Stripe API untuk menangani transaksi. Shelf store ini dibuat untuk memenuhi</p>
        <p>tugas proyek mata kuliah Interaksi Manusia dan Komputer. Here at Shelf Store, we are dedicated to things</p>
      </div>

      <div className="maylike-products-wrapper">
        <h2>Anggota kelompok kami</h2>
        <div className="marquee">
          <div className="maylike-products-container">
            <div className="product-card">
              <Image 
                src="/image.png"
                width={250}
                height={250}
                className="product-image"
              />
              <p className="nama-kelompok">Anak Agung Icha Antika</p>
              <p className="npm-kelompok">50419674</p>
            </div>

            <div className="product-card">
              <Image 
                src="/image.png"
                width={250}
                height={250}
                className="product-image"
              />
              <p className="nama-kelompok">Muhammad Elmansya Darryl Fatha</p>
              <p className="npm-kelompok">54419099</p>
            </div>

            <div className="product-card">
              <Image 
                src="/image.png"
                width={250}
                height={250}
                className="product-image"
              />
              <p className="nama-kelompok">Sekar Muthia Kamillah</p>
              <p className="npm-kelompok">55419951</p>
            </div>

            <div className="product-card">
              <Image 
                src="/image1.jpg"
                width={250}
                height={250}
                className="product-image"
              />
              <p className="nama-kelompok">Sultantio Bagus Sajiwo</p>
              <p className="npm-kelompok">56419194</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About