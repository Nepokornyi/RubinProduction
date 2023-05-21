import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./i18n"
import { AutoplayProvider } from './components/Autoplay/AutoplayContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<AutoplayProvider>
			<App />
		</AutoplayProvider>
	</React.StrictMode>
);

