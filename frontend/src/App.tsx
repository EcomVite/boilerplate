import Router from "./routes/Router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import { getUser } from "./reducers/UserSlice";

const App: React.FC = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUser());
	}, []);

	return (
		<>
			<Router />
			<ToastContainer autoClose={2000} theme="colored" />
		</>
	);
};

export default App;
