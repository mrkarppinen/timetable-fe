import TimetableClient from 'timetable-client';
 
const timeTableclient = new TimetableClient();

const loadTimetable = (id) => {
    return fetch(`http://localhost:3001/api/line?stop=${id}`)
    .then( res => res.json() );
};


const loadFromApi = (id) => {
    const promises = typeof id === 'string' ? [Promise.resolve(timeTableclient.get(id, formattedDate()))] : id.map( id => Promise.resolve(timeTableclient.get(id, formattedDate())) );
    return Promise.all(promises).then( arr => ({timetables: arr}) );
};


const formattedDate = (date = new Date()) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    day = ('0' + day).substr(-2);
    month = ('0'+month).substr(-2); 

    return `${year}${month}${day}`;
};



export {loadFromApi as loadTimetable};