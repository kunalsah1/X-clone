import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './features/modalSlicer';
import loginModal from './features/loginModal';
export const store = configureStore({
    reducer: {
        modal: modalReducer,
        login: loginModal,
    },
});
