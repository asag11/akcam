
import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    projectItem: null,

}

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {

        setProjectItem: (state, action) => {
            state.projectItem = action.payload
        }

    },
})


export const {
    setProjectItem,

} = projectSlice.actions

export default projectSlice.reducer