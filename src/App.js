//import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from './shared/dishes';
import { Component } from 'react';
import Menu from './components/MenuComponent';
import DishDetail from './components/DishdetailComponent ';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES
    }
    console.log('Menu constructor is invoked');  
  }

  componentDidMount(){
    console.log('Menu componentDidMount is invoked');
  }

  render(){
    console.log('Menu render is invoked');
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Home</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;
