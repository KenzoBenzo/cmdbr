import React from "react";
import { IdProvider } from "@radix-ui/react-id";
import { AppProps } from "next/app";

const CustomApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<IdProvider>
				<Component {...pageProps} />
			</IdProvider>
		</>
	);
};

export default CustomApp;
