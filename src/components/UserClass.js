import React from "react";
import UserCard from "./UserCard";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const usernames = ["ganeshwalse08", "anaghaaaa24", "Himani-Yeole"];
    const userData = await Promise.all(
      usernames.map(async (user) => {
        const data = await fetch(`https://api.github.com/users/${user}`);

        const json = await data.json();

        return json;

        
      }),
    );

    this.setState({
          users: userData,
        })
  }

  render() {

  return (
    <div className="User-cont">

      {
        this.state.users.map((user) => (

          <UserCard
            key={user.login}
            userInfo={user}
          />

        ))
      }

    </div>
  );
}
}

export default UserClass;
