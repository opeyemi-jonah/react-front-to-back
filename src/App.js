import React, {Component} from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/Users/Users';
import Search from './components/Users/Search';
import axios from 'axios';


class App extends Component{
  state = {
    users: [],
    loading: false
  }
  
  // async componentDidMount(){
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
  //   //we change the part of the state we want to change in the setState method
  //   this.setState({loading: true});
    
  //   const res = await axios
  //   .get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
  //   client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   /**After getting data we then change the state again to what we want it to be in this case from 
  //   loading true to false
  //    and adding the data received to the state which was an empty array*/
  //   this.setState({users: res.data,loading: false});
    
  //   // console.log(res.data);
  // }

  searchUsers = async text=> {
    this.setState({ loading: true});
    
    const res = await axios
    .get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users: res.data.items,loading: false});
console.log(text)
        };

  render(){
    return (
    <div className="App">
      <Navbar />
      <div className="container">
      <Search searchUsers = {this.searchUsers} />
      <Users loading={this.state.loading} users={this.state.users}/>
      </div>
      
    </div>
  );
  }


  
}

export default App;
