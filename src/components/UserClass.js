import { GIT_HUB_USER_URL } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'Dummy Name',
        location: 'Dummy Location',
      }
    };
  }

  async componentDidMount() {
    const data = await fetch(GIT_HUB_USER_URL);
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    })
    this.timer = setInterval(()=>{
      console.log('Hello world!')
    },1000)
  }
  componentDidUpdate(){
    console.log('Component did update');
  }
  componentWillUnmount(){
    console.log('Component will unmount');
    clearInterval(this.timer);
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: kumarthakurneeraj@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
