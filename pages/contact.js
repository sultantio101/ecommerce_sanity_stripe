import React from 'react';
import Image from 'next/image';

const contact = () => {
  return (
    <div className="products-heading">
      <h2>Contact & Help</h2>
        <p>Karena website Shelf Store bukan untuk ecommerce sungguhan, kita dapat mengetes transaksi stripe menggunakan</p>
        <p>kartu test yang disediakan stripe. Yaitu dengan memasukan 4242 4242 4242 4242, lalu bulan dan tahunnya tekan 424,</p>
        <p>dan untuk CVC-nya 424. Seperti pada gambar dibawah ini</p>
        <div className="maylike-products-container">
          <div className="product-card">
            <Image 
              src="/card-info.JPG"
              width={400}
              height={150}
              className="product-image"
            />
          </div>
        </div>
        <p className="description">Jika anda mempunyai pertanyaan, anda dapat menghubungi
          <a className="email" href="mailto:shelfstore@example.com"> shelfstore@example.com</a>
        </p>
    </div>
  )
}

export default contact
