import React from "react";

import ServiceCard from "./ServiceCard";

import "./Services.css";

const Services = () => {
    return (
        <section id="services-section" className="services-section">
            <div className="container">
                <div className="section-info col-12">
                    <h2 className="title"> What sets us apart? </h2>
                    <p className="description">
                        Our team of experts is dedicated to ensuring that your
                        needs are met and that you are satisfied with the
                        results.
                    </p>
                </div>

                <div className="col-12 grid services">
                    <ServiceCard
                        title={"Fast Delivery"}
                        description={
                            "Swift and reliable delivery service ensuring your items reach you on time, every time"
                        }
                        bxIcon={"bx-cloud-lightning"}
                    />

                    <ServiceCard
                        title={"Fast Shipping"}
                        description={
                            "Efficient shipping process with real-time tracking and nationwide coverage"
                        }
                        bxIcon={"bxs-package"}
                    />

                    <ServiceCard
                        title={"Item Warranty"}
                        description={
                            "Comprehensive warranty coverage protecting your purchases for complete peace of mind"
                        }
                        bxIcon={"bxs-badge-check"}
                    />

                    <ServiceCard
                        title={"Quality"}
                        description={
                            "Premium quality products meeting the highest standards of excellence and durability"
                        }
                        bxIcon={"bx-run"}
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;
