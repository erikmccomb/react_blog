import React from 'react';
// List needs to subscribe to store, so we bring in connect
import {connect} from 'react-redux';
import Entry from './Entry';

// When all active or completed are selected, return the proper output
const viewable = (entries, currentFilter) => {
  switch (currentFilter) {
    case 'All':
      return entries;
    case 'Active':
      return entries.filter(t => !t.complete)
    case 'Completed':
      return entries.filter(t => t.complete)
    default:
     return entries;
  }
}

// We need to pass {entries} props, and they will be passed in and rendered.
const EntryList = ({entries, filter}) => (
  <ul>
    {viewable(entries, filter).map(t => <Entry {...t} key={t.id}/>)}
  </ul>
)

const mapStateToProps = (state) => {
  return {entries: state.entries, filter: state.filter}
}

export default connect(mapStateToProps)(EntryList);