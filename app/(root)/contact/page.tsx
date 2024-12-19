import ContactForm from "@/components/forms/ContactForm";
import PageLayout from "@/components/PageLayout";
import { contactData } from "@/config/constants";
import React from "react";

function ContactPage() {
  const details = contactData.detailsData.map((detail) => {
    return (
      <div key={detail.title.en} className="contact-detail-container">
        <span className="contact-detail-icon">
          <detail.icon />
        </span>
        <div>
          <h3 className="contact-detail-title">{detail.title.en}</h3>
          <p>{detail.description}</p>
        </div>
      </div>
    );
  });
  return (
    <PageLayout>
      <div className="contact">
        <div className="contact-form-container">
          <ContactForm />
        </div>
        <div className="contact-details-container">{details}</div>
      </div>
    </PageLayout>
  );
}

export default ContactPage;
