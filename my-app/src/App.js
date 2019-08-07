import React from "react";
import "./App.css";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      follower: []
    };
  }

  componentDidMount() {
   fetch('https://api.github.com/users/lavonmejia')
   .then(res => res.json())
   .then(data =>this.setState({user:data}))
   fetch('https://api.github.com/users/lavonmejia/followers')
   .then(res => res.json())
   .then(data =>this.setState({follower:data}));
  }

 


  render() {
    console.log(this.state)
    return (
      <div>
        <img src={this.state.user.avatar_url} alt='github avatar'/>
        <h3>Name: {this.state.user.name}</h3>
        <h5>Bio: {this.state.user.bio}</h5>
        <h5>Location: {this.state.user.location}</h5>      
<div> <h5>Followers: </h5> {this.state.follower.map(follower => 
  ( 
    <div key={follower.id}> 
    {follower.login} 
    </div> 
  ))}
</div>     
      
      </div>
    );
  };

}

export default App;
