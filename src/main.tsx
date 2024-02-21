import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import i18next from "i18next";
import global_en from "./translations/en/global.json";
import global_pt from "./translations/pt/global.json";
import { I18nextProvider } from "react-i18next";

i18next.init({
	lng: "en", // if you're using a language detector, do not define the lng option
	debug: true,
	resources: {
		en: {
			global: global_en,
		},
		pt: {
			global: global_pt,
		},
	},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<I18nextProvider i18n={i18next}>
			<App />
		</I18nextProvider>
	</React.StrictMode>
);
