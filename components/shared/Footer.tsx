'use client'
import React from 'react'
import styles from '@/styles/footer.module.css'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import { LiaHandPointRightSolid } from 'react-icons/lia'

export default function Footer() {

    return (
        <footer className={styles.footer__container}>
            <div className={styles.buy__today__container}>
                <div className={styles.buy__container__left__contents}>
                    <div className={styles.buy__container__left__single__content}>
                        <span>Accessories</span>
                        <span className={styles.left__check}><LiaHandPointRightSolid />buy from here</span>
                    </div>
                    <div className={styles.buy__container__left__single__content}>
                        <span>Gadget</span>
                        <span className={styles.left__check}><LiaHandPointRightSolid />buy from here</span>
                    </div>
                    <div className={styles.buy__container__left__single__content}>
                        <span>Laptops</span>
                        <span className={styles.left__check}><LiaHandPointRightSolid />buy from here</span>
                    </div>
                </div>
                <div className={styles.buy__container__right__contents}>
                    <button>Subscrive <span><BsArrowRight /></span></button>
                    <button>More <span><BsArrowRight /></span></button>
                </div>
            </div>
            <div className={styles.logo__content__container}>
                <div className={`${styles.single__footer__item} ${styles.branding__module}`}>
                    <Link href='/' className={styles.brand}>Innova XI</Link>
                </div>
                <div className={styles.content__container}>
                    <div className={styles.single__footer__item}>
                        <h2 className={styles.footer__content__heading}>Gallery</h2>
                        <ul>
                            <li><Link href='/'>Community</Link></li>
                            <li><Link href='/'>Trending</Link></li>
                            <li><Link href='/'>Picks</Link></li>
                            <li><Link href='/'>Latest</Link></li>
                        </ul>
                    </div>
                    <div className={styles.single__footer__item}>
                        <h2 className={styles.footer__content__heading}>Gallery</h2>
                        <ul>
                            <li><Link href='/'>Community</Link></li>
                            <li><Link href='/'>Trending</Link></li>
                            <li><Link href='/'>Picks</Link></li>
                            <li><Link href='/'>Latest</Link></li>
                            <li><Link href='/'>Latest</Link></li>
                            <li><Link href='/'>Latest</Link></li>
                        </ul>
                    </div>
                    <div className={styles.single__footer__item}>
                        <h2 className={styles.footer__content__heading}>Gallery</h2>
                        <ul>
                            <li><Link href='/'>Community</Link></li>
                            <li><Link href='/'>Trending</Link></li>
                            <li><Link href='/'>Picks</Link></li>
                            <li><Link href='/'>Latest</Link></li>
                            <li><Link href='/'>Latest</Link></li>
                        </ul>
                    </div>
                    <div className={styles.single__footer__item}>
                        <h2 className={styles.footer__content__heading}>Gallery</h2>
                        <ul>
                            <li><Link href='/'>Community</Link></li>
                            <li><Link href='/'>Trending</Link></li>
                            <li><Link href='/'>Picks</Link></li>
                            <li><Link href='/'>Latest</Link></li>
                        </ul>
                    </div>
                    <div className={styles.single__footer__item}>
                        <h2 className={styles.footer__content__heading}>Gallery</h2>
                        <ul>
                            <li><Link href='/'>Community</Link></li>
                            <li><Link href='/'>Trending</Link></li>
                            <li><Link href='/'>Picks</Link></li>
                            <li><Link href='/'>Latest</Link></li>
                        </ul>
                    </div>
                    <div className={styles.single__footer__item}>
                        <h2 className={styles.footer__content__heading}>Gallery</h2>
                        <ul>
                            <li><Link href='/'>Community</Link></li>
                            <li><Link href='/'>Trending</Link></li>
                            <li><Link href='/'>Picks</Link></li>
                            <li><Link href='/'>Latest</Link></li>
                            <li><Link href='/'>Latest</Link></li>
                            <li><Link href='/'>Latest</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.footer__last__container}>
                <div className={styles.footer__last__container__first}>
                    <span>&copy {new Date().getFullYear()}</span>
                    <span>Innova XI</span>
                    <span>shopping</span>
                </div>
                <button className={styles.location__btn}>Explore All Items</button>
            </div>
        </footer >
    )
}
