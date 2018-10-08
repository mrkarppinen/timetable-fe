import React from 'react';
import PropTypes from 'prop-types';
import ReactInterval from 'react-interval';
import Departure from './Departure';
import { withRouter } from 'react-router-dom'

class ListItem extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired
    };

    constructor(props){
        super(props);

        this.state = {
            departures: this.props.timetable ? this.getDepartures(this.props.timetable, new Date(), 3) : []
        }
    }

    update(){
        this.setState({
            departures: this.props.timetable ? this.getDepartures(this.props.timetable, new Date(), 3) : []
        });
    }
     
    
      render(){
          const {departures} = this.state;

        return(
            <div className="list-item">
                <h2 onClick={ () => { this.props.history.push('/stop/'+this.props.index)  } } style={{cursor: 'pointer'}} >{this.props.title}</h2>
                <div style={{display: 'flex', justifyContent: 'space-evenly' }} >
                    { departures.length>0 && departures.map( item => <div key={item.time} ><Departure time={item.time} lines={item.lines} /></div> )}
                </div>
                <ReactInterval timeout={1000} enabled={true}
                callback={() => this.update() } />
            </div>
        )

    }


    getDepartures(timetable, date, count) {
        let now =  ( (date.getHours() * 60 ) + date.getMinutes() ) * 60;
    
        let departures = timetable
        .filter( (item) => {
          return item.time > now;
        });
    
    
        return departures.slice(0, count);
      }
    
 
      
}    

export {ListItem};
export default withRouter(ListItem);
