export const getUsers = () => {
  return {
    type: "USERS_LIST",
    payload: [
      {
        id: 1,
        name: "andrew",
        age: 25,
      },
      {
        id: 1,
        name: "hany",
        age: 25,
      },
    ],
  };
};
