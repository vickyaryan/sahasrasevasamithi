import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function WhatsappButton() {
  return (
      <a className="whats-app" rel="noreferrer noopener" href="https://wa.me/919133233473?text=I want to know more about your foundation." target="_blank">
    <div className="whatsapp-button position-fixed d-flex justify-content-center align-items-center">
      <FontAwesomeIcon icon={["fab", "whatsapp"]} color="white" size="2x" />
      <span className="sr-only">Whatsapp Button</span>
    </div>
    </a>
  );
}

export default WhatsappButton;
