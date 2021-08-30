import React, {Fragment} from 'react';
import logo from '../Images/logo.jpg';
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
                   value={props.value}
                   className={classes.searchInput}
                   onChange={props.onChange}/>
        </Fragment>
    )
}
export default Banner;