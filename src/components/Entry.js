import React from 'react';
import {connect} from 'react-redux';
import {toggleEntry} from '../actions/entries';

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'gray'
  },
  entry: {
    cursor: 'pointer'
  }
}

const Entry = ( {id, name, complete, dispatch} ) => (
  <li onClick={ () => dispatch(toggleEntry(id)) } 
  // if complete true, it will combine styles.entry with styles.complete,
  // otherwise, just a regular styling will be used.
  style={complete
    ? {
      ...styles.complete,
      ...styles.entry
    }
    : styles.entry}>
    {name}
  </li>
)

export default connect()(Entry);
