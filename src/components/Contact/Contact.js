import React from 'react';
import { SectionTitle, ContactContainer, ContactText, EmailLink } from './Contact.styles';

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-container">
        <ContactContainer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <SectionTitle>ESTABLISH_COMMS</SectionTitle>
          <ContactText>
            Feel free to reach out anytime @chaithanyainaganti@gmail.com — whether you have a question, an opportunity to collaborate, or just want to connect. I’m always happy to chat and will get back to you as soon as I can!
          </ContactText>
          <EmailLink href="mailto:chaithanyainaganti@gmail.com">
            Transmit Message
          </EmailLink>
        </ContactContainer>
      </div>
    </section>
  );
};

export default Contact;