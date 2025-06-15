
import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    isHomepage: true,

    isProjectPage: false,

    isMobileTopDropdownOpen: false

}

const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {

        setIsHomepage: (state,action) => {
            state.isHomepage = action.payload
        },

        setIsProjectPage: (state,action) => {
            state.isProjectPage = action.payload
        },

        setMobileTopDropdownOpen: (state, action) => {
            state.isMobileTopDropdownOpen = action.payload
        },

        clearLayoutState: (state)=> {
            return initialState
        }
    },
})


export const {
    setIsHomepage,
    setIsProjectPage,
    setMobileTopDropdownOpen

} = layoutSlice.actions

export default layoutSlice.reducer