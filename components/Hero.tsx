'use client'
import React, { useState, useEffect, useMemo } from 'react'
import styles from '../styles/modules/hero.module.css'
import Image from 'next/image'
import image1 from '../public/assets/1.png'
import image2 from '../public/assets/2.png'
import image3 from '../public/assets/3.png'
import image4 from '../public/assets/4.png'
import image5 from '../public/assets/5.png'

const Hero = () => {
    const [counter, setCounter] = useState<number>(0);
    const temp = [image1, image2, image3, image4, image5];

    setTimeout(() => {
        counter === 4 ? setCounter(0) : setCounter(counter + 1);
    }, 3000);


    return (
        <div className={styles.hero__container}>
            <div className={styles.text__wrapper}>
                <h2>We picked some <span className={styles.cool__text}>cool things</span> for you!</h2>
            </div>
            <div className={styles.slide__wrapper}>
                {temp && <div className={styles.image__container}>
                    <Image
                        className={styles.image}
                        src={temp[counter]}
                        layout='fill'
                        sizes='100vw'
                        alt='headphone'
                        quality={100}
                        blurDataURL="blur" />
                    <div className={styles.pentagon}></div>
                </div>}
            </div>
        </div>
    )
}

export default Hero