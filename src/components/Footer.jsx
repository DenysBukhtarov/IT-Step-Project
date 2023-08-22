import { Container, Row, Col } from 'react-bootstrap';
import { MailchimpForm } from './MailchimpForm';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="http://www.linkedin.com/in/denys-bukhtarov">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100001128823871">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://instagram.com/bukhtarov?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
