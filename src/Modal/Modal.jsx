import React from 'react';
import classes from './Modal.module.css';
import PropTypes from "prop-types";
import scull from '../Images/scull.jpg';
import medical_cross from '../Images/medicalСross.jpg';
import heart from '../Images/heart.png';



class Modal extends React.Component {

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        const {country} = this.props;
        if (!this.props.show) {
            return null;
        }
        console.log('country1111', country)
        return (
            <div className={classes.modal} id="modal">
                <div className={classes.content}>
                    <ul className={classes.infoAboutCountry}>
                        <li className={classes.nameOfCountry}> {country.Country}</li>
                        <li><img src={heart} className={classes.totalConfirmed} alt={'heart'}/>TotalConfirmed {country.TotalConfirmed}</li>
                        <li><img src={scull} alt={'scull'}/> TotalDeaths {country.TotalDeaths}</li>
                        <li><img src={medical_cross} alt={'medical_cross'}/>TotalRecovered {country.TotalRecovered}</li>
                    </ul>
                </div>
                <div className={classes.actions}>
                    <button className={classes.toggleButton} onClick={this.onClose}>
                        OK
                    </button>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};

export default Modal;