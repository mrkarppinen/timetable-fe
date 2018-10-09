import { connect } from 'react-redux';
import DisplaySchedule from '../presentation/Display';

const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    let loaded = false;
    let stop = {title: '', timetable: [], id: ''};
    if (state.timetable.list && state.timetable.list.length > 0){
        stop = state.timetable.list[id];
        loaded = true;

    }
    return { 
        title: stop.title,
        timetable: stop.timetable,
        loaded: loaded,
        id: stop.id
     }
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplaySchedule);