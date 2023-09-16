"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/hotDeals.module.css";
// import { useGlobalContext } from '@/context/useContext'
import Image from "next/image";
// import getAllUser from "@/hooks/useGetAllUser";
// import getAllProduct from "@/hooks/useGetAllProducts copy";

export const HotDeals = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  //for call context api
  // const { getAllProductData } = useGlobalContext();
  // console.log(getAllUser());

  useEffect(() => {
    fetch("demoData.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!products) return <p>No profile data</p>;
  console.log(products);

  //for call customm hooks
  // const allProduct = await getAllProduct();
  // console.log(allProduct)

  return (
    <div className={styles.hotDeal__contianer}>
      <div className={styles.product__container}>
        <div className={styles.hotDeal__heading}>
          <h1>Hot deals for you</h1>
          <div className={styles.dashed__underline}></div>
        </div>
        <div className={styles.products__wrapper}>
          {products?.map((product: any) =>
            product.product_type === "hotdeals" && (
              <div
                className={styles.single__product__container}
                key={product._id}
              >
                <div>
                  <Image
                    className={styles.product__image}
                    src={product.product_img}
                    width={350}
                    height={350}
                    quality={100}
                    // placeholder="blur"
                    blurDataURL={product.product_img}
                    alt={product.product_name}
                  />
                </div>
                <h1 className={styles.product__name}>{product.product_name}</h1>
                <div className={styles.product__details}>
                  <p>${product.product_price}</p>
                  <p className={styles.discount}>-{product.product_discount}% OFF</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className={styles.text__container}>
        <h1>
          <span>Here</span> check and enjoy your quality <span>hot deal</span>{" "}
          products.
        </h1>
      </div>
    </div>
  );
}