import { ReactNode } from "react";
import { Button } from "../shared/Button";
import { Heading } from "../shared/Heading";

import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <div className="footer-left">
        <h3>Get updates on your favourite games</h3>
        <div>
          <p>Ready to explore?</p>
          <Button txt="Get Started" />
        </div>

        <div>
          <a href="#home">Terms & Conditions</a>
          <a href="#home">Privacy Policy</a>
        </div>
      </div>
      <div className="footer-right">
        <details open>
          <summary>Services</summary>
          <ul>
            <li>
              <a href="#home">Our Stores</a>
            </li>
            <li>
              <a href="#home">Campaigns</a>
            </li>
            <li>
              <a href="#home">Tournaments</a>
            </li>
            <li>
              <a href="#home">Offline</a>
            </li>
          </ul>
        </details>

        <details open>
          <summary>About</summary>
          <ul>
            <li>
              <a href="#home">Our Story</a>
            </li>
            <li>
              <a href="#home">Benefits</a>
            </li>
            <li>
              <a href="#home">Teams</a>
            </li>
            <li>
              <a href="#home">Careers</a>
            </li>
          </ul>
        </details>

        <details open>
          <summary>Help</summary>
          <ul>
            <li>
              <a href="#home">FAQs</a>
            </li>
            <li>
              <a href="#home">Contact Us</a>
            </li>
          </ul>
        </details>
      </div>
    </Container>
  );
}
