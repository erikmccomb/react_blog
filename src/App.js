import React, {Component} from 'react';
import EntryForm from './components/EntryForm';
import EntryList from './components/EntryList';
import Footer from './components/Footer';

// app will not hold state here, state will be held in redux. app can be a
// function
const App = () => (
  <div>
    <EntryForm />
    <EntryList />
    <Footer />
  </div>
)

// No functions arrays or state passed down

export default App;