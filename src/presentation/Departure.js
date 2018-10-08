import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Time from './Time';


const Line = styled.small`
    font-size: 0.75rem;
    font-style: italic;
`;

const Departure = ({time, lines}) => (
    <React.Fragment>
        <Time value={time} /><Line>{lines.join()}</Line>
    </React.Fragment>
);

Departure.propTypes = {
    time: PropTypes.number.isRequired,
    lines: PropTypes.array.isRequired
};

export default Departure;