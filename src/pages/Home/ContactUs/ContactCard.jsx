import React from 'react'

const ContactCard = ({ contact }) => {
    return (
		<a href={contact.href}>
			<div className="contact-card card flex">
				<span className="contact-ico flex">
					<i className={`bx ${contact.icon}`}></i>
				</span>
				<div className="contact-info">
					<h4 className="contact-label">{contact.label}</h4>
					<p className="contact-value">{contact.value}</p>
				</div>
			</div>
		</a>
	);
}

export default ContactCard