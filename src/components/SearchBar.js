import React, {Component} from 'react';


class  SearchBar extends Component{
    
    render(){
        let searchBar = (
          <div className='search-bar-container'>
              <input type='text' name='search-bar' placeholder='Search your To Do' onChange={this.props.onChange} id='search-key' />
          </div>  
        );
        return searchBar;
    }
}

export default SearchBar;