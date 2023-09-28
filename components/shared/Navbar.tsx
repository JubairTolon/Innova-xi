'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from '@/styles/nav.module.css'
import { HiMenu } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import { BsCartCheck } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { navLinks } from '../../types/Model';
import { usePathname } from 'next/navigation';


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();
    const navLinks: navLinks[] = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Shop',
            path: '/shop'
        },
        {
            title: 'Blog',
            path: '/blog'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
    ]
    return (
        <nav className={styles.nav__container}>
            {/* dropdown navbar */}
            <button
                className={styles.menu__btn}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? < RxCross2 /> : <HiMenu />}
            </button>
            <div className={menuOpen ? `${styles.dropdown__menu__container} ${styles.active}` : styles.dropdown__menu__container}>
                {navLinks.map((item, index) =>
                    <Link
                        href={item.path}
                        key={index}
                        className={pathname === item.path ? styles.single__navLink__active : styles.single__navLink__deactive}
                        onClick={() => { setMenuOpen(!menuOpen) }}
                    >
                        {item.title}
                    </Link>

                )}
            </div>

            {/* main navbar start */}
            <div className={styles.branding__module}>
                <div><Link href='/' className={styles.brand}>Innova XI</Link></div>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.nav__menus__module}>
                {navLinks.map((item, index) =>
                    <Link
                        href={item.path}
                        key={index}
                        // passHref
                        // legacyBehavior
                        className={pathname === item.path ? styles.single__navLink__active : styles.single__navLink__deactive}
                    >
                        {item.title}
                    </Link>
                )}
                {/* <Link href='/about/us'>About Us</Link> */}
                {/* <Link href='/about/someone'>About Someone</Link> */}
            </div>
            <div className={styles.user__module}>
                <span className='text-2xl'><AiFillHeart /></span>
                <span className='text-2xl'><BsCartCheck /></span>
                <button>Sign Up</button>
            </div>
        </nav>
    )
}