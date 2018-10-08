import {connect } from 'react-redux';
import AddNew from '../presentation/AddNew';
import { fetchOneTimetable } from '../actions';

const mapStateToProps = state => ({ });
const mapDispatchToProps = dispatch => {
    return {
        onAdd: (id) =>  { dispatch(fetchOneTimetable(id)) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNew);