const Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "Add":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 10000),
          firstName: payload.firstName,
          familyName: payload.firstName,
          number: payload.number,
          email: payload.email,
          category: payload.category,
          favorite: payload.favorite,
          image: payload.image,
        },
      ];
    case "Edit":
      return state.map((oldPerson) =>
        oldPerson.id === payload.id
          ? {
              firstName: payload.firstName,
              familyName: payload.firstName,
              number: payload.number,
              email: payload.email,
              category: payload.category,
              favorite: payload.favorite,
              image: payload.image,
            }
          : oldPerson
      );
    case "Delete":
      return state.filter((item) => item.id !== payload.ID);
    case "Favorite":
      return state.map((item) =>
        item.id === payload.ID ? { ...item, favorite: payload.checked } : item
      );
    default:
      return state;
  }
};
export default Reducer;
