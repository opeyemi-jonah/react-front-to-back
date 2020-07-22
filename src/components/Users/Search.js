import React, { Component } from 'react'

class Search extends Component {
    state = {
        text: ''
    };

    // static propTypes = {
    //     searchUsers: this.propTypes.func.isRequired
    // };

    onChange =(e)=> this.setState({ [e.target.name]: e.target.value});
    
    onSubmit =(e)=> {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text: ''})

    };
    
    render() {
        return (
            <div>
                <form className ="form" onSubmit={this.onSubmit}>
                    <input onChange={this.onChange}
                    type= "text" 
                    name = "text" 
                    placeholder="Search Users..."
                     value={this.state.text} 
                      />

                    <input 
                    type = "submit" 
                    value="Search"
                    className='btn btn-dark btn-block'/>
                </form>
            </div>
        )
    }
}

export default Search
