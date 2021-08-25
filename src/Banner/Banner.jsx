import React, {Fragment} from 'react';
import logo from '../logo.jpg';
import classes from './Banner.module.css';


const Banner = () => {
    return (
        <Fragment>
            <header className={classes.header} >
                <img
                    src={logo}
                    alt={'covidLogo'}
                />
                <span  className={classes.title}>STATISTIC</span>
            </header>
            <input placeholder={"Search..."} className={classes.searchInput}  />
        </Fragment>
    )
}
export default Banner;