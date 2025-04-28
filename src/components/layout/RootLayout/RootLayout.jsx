import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const RootLayout = ({ children, params }) => {
	return (
		<>
            <Header />

            <section className="wrapper">
                {children}
            </section>
            
            <Footer />
		</>
	);
};

export default RootLayout;
