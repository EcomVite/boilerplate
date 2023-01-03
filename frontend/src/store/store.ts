import { configureStore } from "@reduxjs/toolkit";
import settingsSliceReducer from "../reducers/SettingsSlice";
import userSliceReducer from "../reducers/UserSlice";

const store = configureStore({
	reducer: {
		settings: settingsSliceReducer,
		user: userSliceReducer,
	},
});

export default store;
