import React from 'react';
import PropTypes from 'prop-types';

const Time = ({value}) => {
    const hour = _parseHour(value);
    const minute = _parseMinute(value);
    return (
        <React.Fragment>
            {hour}:{minute}
        </React.Fragment>    
    );
};

Time.propTypes = {
    value: PropTypes.number
}

const _parseHour = (time) => {
        let hour = Math.floor(time / 60 / 60);
        hour = (hour >= 24) ? hour-24 : hour;
        return (`0${hour}`).slice(-2);
      }
    
const _parseMinute = (time) => {
        return (`0${Math.floor((time / 60) % 60)}`).slice(-2);
      }



export default Time;