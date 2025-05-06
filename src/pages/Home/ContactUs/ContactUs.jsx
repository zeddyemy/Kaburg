import React from "react";

import ContactCard from "./ContactCard";

import "./ContactUs.css";

const ContactUs = ({ title, description="" }) => {
    const contactList = [
        {
            type: 'phone',
            icon: 'bx bxs-phone',
            label: 'Phone',
            value: '+254 123 456 789',
            href: 'tel:+254123456789'
        },
        {
            type: 'email',
            icon: 'bx bxs-envelope',
            label: 'Email',
            value: 'contact@example.com',
            href: 'mailto:contact@example.com'
        },
        {
            type: 'address',
            icon: 'bx bxs-map',
            label: 'Address',
            value: '123 Street Name, City, Country',
            href: 'https://maps.google.com/?q=123+Street+Name+City'
        }
    ];
    return (
		<section id="contact-us" className="contact-us">
			<div className="container">
				<div className="section-info col-12">
					<h2 className="title" style={{ textAlign: "center" }}> {title} </h2>
					{description && (
						<p className="description">{description}</p>
					)}
				</div>

				<div className="contact-list flex flex-center col-12">
					{contactList.map((contact, index) => (
						<ContactCard contact={contact} key={index} />
					))}
				</div>
			</div>
		</section>
	);
};

export default ContactUs;
