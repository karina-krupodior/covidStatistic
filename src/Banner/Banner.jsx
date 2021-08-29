import React, {Fragment} from 'react';
import logo from '../logo.jpg';
import classes from './Banner.module.css';



const Banner = (props) => {

    return (
        <Fragment>
            <header className={classes.header} >
                <img
                    src={logo}
                    alt={'covidLogo'}
                />
                <span  className={classes.title}>STATISTIC</span>
            </header>
            <input type='search'
                   placeholder={props.placeholder}
                   className={classes.searchInput}
                   onChange={props.handleChange}/>
        </Fragment>
    )
}
export default Banner;