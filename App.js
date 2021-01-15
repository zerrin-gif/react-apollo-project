// import logo from './logo.svg';
import './App.css';
import React from 'react';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {  }
}
  render(){
  return (
    <div className="App">

<h1>Apollo Project</h1>

<SearchBar />

<BusinessList />

</div>
  );
}
}
export default App;
