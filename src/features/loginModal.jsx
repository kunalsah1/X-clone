import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginModalOpen: false,
}

const loginModal = createSlice({
    name: 'loginModal',
    initialState,
    reducers: {
        openLoginModal: (state, action) => {
            state.loginModalOpen = true
        },
        closeLoginModal: (state, action) => {
            state.loginModalOpen = false
        },

    }
})

export const { openLoginModal, closeLoginModal } = loginModal.actions
export default loginModal.reducer