import React, { useState, useEffect } from "react";

export const FriendsContext = React.createContext();

export const FriendsProvider = (props) => {
  const [friends, setFriends] = useState([]);

  const getFriends = () => {
    return fetch("http://localhost:8088/friends")
      .then((res) => res.json())
      .then(setFriends);
  };

  const addFriend = (friend) => {
    return fetch("http://localhost:8088/friends", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(friend),
    }).then(getFriends);
  };
  const deleteFriend = (friend) => {
    return fetch(`http://localhost:8088/friends/${friend}`, {
      method: "DELETE",
    }).then(getFriends);
  };

  useEffect(() => {
    getFriends();
  }, []);

  useEffect(() => {
    console.log("****  Friends APPLICATION STATE CHANGED  ****");
  }, [friends]);

  return (
    <FriendsContext.Provider
      value={{
        friends,
        addFriend,
        deleteFriend,
      }}
    >
      {props.children}
    </FriendsContext.Provider>
  );
};
