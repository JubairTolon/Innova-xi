'use client'
import React, { useState } from 'react'
import { navLinks } from './Model'
import styles from '@/styles/category.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Categories() {
    const pathname = usePathname();
    const [categoryActive, setCategoryActive] = useState<boolean>(false)
    const categoriesLinks: navLinks[] = [
        {
            name: 'Fresh',
            link: '/fresh'
        },
        {
            name: 'Today’s Deals',
            link: '/todaysDeals'
        },
        {
            name: 'Mobiles',
            link: '/mobiles'
        },
        {
            name: 'Gift Cards',
            link: '/giftCards'
        },
        {
            name: 'Women Clothing',
            link: '/womenClothing'
        },
        {
            name: 'Men Clothing',
            link: '/menClothing'
        },
        {
            name: 'Kids Clothing',
            link: '/kidsClothing'
        },
        {
            name: 'Health',
            link: '/health'
        },
        {
            name: 'Pet corner',
            link: '/petCorner'
        },
        {
            name: 'Cloth Booksing',
            link: '/clothBooksing'
        },
        {
            name: 'Beauty',
            link: '/beauty'
        },
        {
            name: 'Kitchen',
            link: '/kitchen'
        },
        {
            name: 'Bed Room',
            link: '/bedRoom'
        },
        {
            name: 'Sport',
            link: '/sport'
        },
        {
            name: 'Bags',
            link: '/bags'
        },
    ]
    return (
        <div className={styles.category__container}>
            {categoriesLinks.map((link) => {
                const isActive = pathname === link.link;
                return (
                    <Link
                        onClick={() => setCategoryActive(!categoryActive)}
                        // className={categoryActive ? styles.single__NavLink__Active : styles.single__NavLink__Deactive}
                        className={isActive ? styles.single__NavLink__Active : styles.single__NavLink__Deactive}
                        href={link.link}
                        key={link.name}
                    >
                        {link.name}
                    </Link>
                )
            })}
            {/* <Link href='/about/us'>About Us</Link> */}
            {/* <Link href='/about/someone'>About Someone</Link> */}
        </div>
    )
}

export default Categories