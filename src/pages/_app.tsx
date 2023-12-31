import Layout from "@/components/layouts/main";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import "../../styles/global.css";

const MyApp = ({ Component, pageProps, router }: AppProps) => {
	return (
		<Layout router={router}>
			<Component {...pageProps} key={router.route} />
			<Analytics />
		</Layout>
	);
};

export default MyApp;
