import React from 'react';
import {connect} from 'react-redux';
import {incId} from '../actions/nextId';
import {addEntry} from '../actions/entries';

// Class because the form will have state
class EntryForm extends React.Component {
  state = {
    title: '',
    description: ''
  }

  onTitleChange = (e) => {
    this.setState({title: e.target.value});
  }
  
  onDescriptionChange = (e) => {
    this.setState({description: e.target.value});
  }
  
  onChange = (e) => {
    this.setState({title: e.target.value});
  }
  
  handleSubmit = (e) => {
    // stop the form from behaving as a form, and use the below JS instead.
    e.preventDefault();
    // Get title from input
    let title = this.state.title;
    let description = this.state.description;
    let {dispatch, id} = this.props;
    let entry = {
      title,
      description,
      id,
      complete: false
    }
    // Update redux store
    dispatch(addEntry(entry));
    dispatch(incId())
    // Clear input
    this.setState({title: '', description: ''}) 
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value ={this.state.title} onChange={this.onTitleChange} placeholder={'Title'}/>
        <br/>
        <input value ={this.state.description} onChange={this.onDescriptionChange} placeholder={'Body'}/>
        <input type = "submit" value = "Submit"/>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {id: state.nextId}
}

export default connect(mapStateToProps)(EntryForm);