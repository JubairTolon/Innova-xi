import React from 'react'
import styles from '@/styles/search.module.css'
import { IoLocationOutline } from 'react-icons/io5';
import { BsSearch } from 'react-icons/bs';

function SearchSection() {
    return (
        <div className={styles.search__container}>
            <div className={styles.location__container}>
                <button className={styles.location__btn}><span className={styles.signIn__icon}><IoLocationOutline /></span>Dhaka, 1212</button>
            </div>
            <div className={styles.search__input__container}>
                <input className={styles.search__input}
                    placeholder="search"
                    type="text"
                    // value={search}
                    // onChange={getSearachTerm}
                    id="simple-search"
                />
                <span className={styles.search__icon}><BsSearch /></span>
            </div>
        </div>

    )
}

export default SearchSection