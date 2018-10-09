import React from 'react';
import Departure from './Departure';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
h1 {
    text-align: center;
}

div {
    width: 50px;
    margin: auto;
}
`;


const DisplaySchedule = ({title, loaded, timetable, id}) => (
    <div>
    {!loaded && <div>Loading...</div> }
    {loaded && <Container>
        <h1>{title} ({id})</h1>
        {timetable.map( item => <div key={item.time}><Departure time={item.time} lines={item.lines} /></div>) }
    </Container> }
    </div>
);

export default DisplaySchedule;