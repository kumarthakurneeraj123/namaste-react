import React from 'react';
import UserClass from './UserClass';
class AboutUs extends React.Component {
  constructor(props){
    super(props);
    // console.log('Parent constructor');
  }
  // UNSAFE_componentWillMount(){
  //   console.log('Component will mount');
  // }
  // componentDidMount(){
  //   console.log('Parent componentdidmount');
  // }
  render(){
    // console.log('Parent render');
    return (
      <div>
          <h1>About Us</h1>
          <h2>I am learning through namaste react</h2>
          <UserClass name={"First "} location="Samastipur" />
      </div>
    )
  }
}

export default AboutUs;