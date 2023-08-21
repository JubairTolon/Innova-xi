import React from 'react'
import styles from '../styles/modules/footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer__container}>
            <div className={styles.buy__today__container}></div>
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
        </footer>
    )
}
