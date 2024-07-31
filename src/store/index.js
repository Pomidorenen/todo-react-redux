import {configureStore} from "@reduxjs/toolkit";
import todoReduce from './todoSlice.js';
export default configureStore({
    reducer:{
        todos:todoReduce
    }
});