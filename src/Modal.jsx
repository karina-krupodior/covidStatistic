import React from 'react';
import classes from  './Modal.module.css';
import PropTypes from "prop-types";

class Modal extends React.Component {

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        const { country } = this.props;
      if (!this.props.show) {
            return null;
        }

      console.log('country1111', country)
        return (
            <div className={classes.modal} id="modal">
                <div className={classes.content}>Modal{country.Country}</div>
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