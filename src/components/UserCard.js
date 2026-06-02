import React from "react";

class UserCard extends React.Component {

  render() {

    const { avatar_url, name, login } =
      this.props.userInfo;

    return (

      <div className="User-container">

        <img
          src={avatar_url}
          alt="user"
          width="200"
        />

        <h2>Name: {name}</h2>

        <h3>Login: {login}</h3>

      </div>
    );
  }
}

export default UserCard;