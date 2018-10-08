import List from '../presentation/List';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        loading: state.timetable.loading,
        timetables: state.timetable.list
    };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(List);