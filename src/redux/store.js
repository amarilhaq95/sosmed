/**
 * create store with global reducers and global services
 */

 import { configureStore } from "@reduxjs/toolkit";
 import globalReducers from "./globalReducers";
 import globalServices from "./globalServices";
 
 export const store = configureStore({
   reducer: globalReducers,
   middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().concat(globalServices),
 });
 