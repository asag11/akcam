import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import layoutReducer from "../features/layout/layoutSlice"
import projectReducer from "../features/project/projectSlice"

const store = configureStore({
  reducer: {
    layout: layoutReducer,
    project: projectReducer,
    
  
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
  devTools: process.env.NODE_ENV === 'development'
});

export default store;