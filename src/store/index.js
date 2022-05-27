import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./user";
// import projectsReducer from "./projectsSlice";

const store = configureStore({
  reducer: {
    user: usersReducer,
    // projects: projectsReducer
  }
});

export default store;