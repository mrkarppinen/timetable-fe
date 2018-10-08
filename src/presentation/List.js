import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import AddNewContainer from '../containers/AddNewContainer';
import styled from 'styled-components';

const ListDiv = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
`;

const List = ({loading, timetables}) => {
    
    return (
        <ListDiv className="list" >   
            { loading && <div id="loading" >Loading....</div>}
            { !loading && timetables.map( (timetable, index) => <ListItem key={timetable.title} {...timetable} index={index} /> ) }
            <AddNewContainer />
        </ListDiv>
    );
};

List.propTypes = {
    timetables: PropTypes.arrayOf(PropTypes.shape({title: PropTypes.string, timetable: PropTypes.array })),
    loading: PropTypes.bool.isRequired
};

export default List;
