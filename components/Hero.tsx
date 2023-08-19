import React from 'react'
import styles from '../styles/modules/hero.module.css'
import Image from 'next/image'
import headphone from '../public/assets/1.png'

const Hero = () => {
    return (
        <div className={styles.hero__container}>
            <div className={styles.text__wrapper}>
                <h2>We picked some <span className={styles.cool__text}>cool things</span> for you!</h2>
            </div>
            <div className={styles.slide__wrapper}>
                <Image
                    src={headphone}
                    height={400}
                    width={450}
                    sizes='100vw'
                    alt='headphone'
                    placeholder="blur" />
                <div className={styles.pentagon}></div>
            </div>
        </div>
    )
}

export default Hero