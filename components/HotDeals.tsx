import React from 'react'
import styles from '@/styles/hotDeals.module.css'
// import { useGlobalContext } from '@/context/useContext'
import Image from 'next/image';
import getServerSideProps from '@/hooks/useGetAllProducts copy';



async function HotDeals() {
    // const { allProduct, getHotProductData } = useGlobalContext();
    const allProduct = await getServerSideProps();
    console.log(allProduct)

    return (
        <div className={styles.hotDeal__contianer}>
            <div className={styles.product__container}>
                <div className={styles.hotDeal__heading}>
                    <h1>Hot deals for you</h1>
                    <div className={styles.dashed__underline}></div>
                </div>

                {/* {allProduct.products[0].productData?.map((product: any) => {
                    return (
                        <div
                            className={styles.single__product__container}
                            key={product._id}>
                            <div>
                                <Image src={product.product_img} width={100} height={100} alt={product.product_name} />
                            </div>
                            <h1>{product.product_name}</h1>
                            <div>
                                <p>{product.product_price}</p>
                                <p>{product.product_discount}</p>
                            </div>
                        </div>
                    )
                })} */}

            </div>
            <div className={styles.text__container}>
                <h1><span>Here</span> check and enjoy your quality <span>hot deal</span> products.</h1>
            </div>
        </div>
    )
}

export default HotDeals