import React from 'react';
import Banner from "../Banner/Banner";
import classes from './Home.module.css';
import StatisticTable from "../StatisticTable/StatisticTable";



const Home = () => {
    return(
        <div className={classes.home}>
            <Banner/>
            <StatisticTable/>
        </div>
    )
}
export default Home;