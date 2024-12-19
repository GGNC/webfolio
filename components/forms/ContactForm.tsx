import { contactData } from "@/config/constants";
import Title from "../Title";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

function ContactForm() {
  return (
    <div className="space-y-4">
      <Title className="text-2xl md:text-4xl">
        {contactData.formData.title.en}
      </Title>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veniam
        quibusdam optio ipsam fugiat illo officiis eaque aliquam nisi ad minus
        officia, voluptas sed cumque! Explicabo odio a sequi reprehenderit?
      </p>
      <form className="contact-form">
        <div className="contact-form-input-container">
          <Input type="text" placeholder={contactData.formData.name.en} />
          <Input type="text" placeholder={contactData.formData.email.en} />
        </div>
      </form>
      <Textarea placeholder={contactData.formData.message.en} rows={5} />
      <Button className="contact-form-button">
        {contactData.formData.button.en}
      </Button>
    </div>
  );
}

export default ContactForm;
