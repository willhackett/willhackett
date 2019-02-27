import React, { Component } from 'react';
import { styled } from 'reakit';
import ReCAPTCHA from 'react-google-recaptcha';
import FluidContainer from '../../components/FluidContainer';

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;

const Label = styled('label')`
  display: block;
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const Input = styled('input')`
  display: block;
  font-size: 2rem;
  border: 0;
  border-bottom: 2px solid grey;
  margin-bottom: 1rem;
`;

const TextArea = styled('textarea')`
  display: block;
  font-size: 2rem;
  border: 0;
  border-bottom: 2px solid grey;
  margin-bottom: 1rem;
`;

const Button = styled('button')`
  display: block;
  padding: 0.5rem 4rem;
  background: white;
  align-self: flex-start;
  border: 2px solid grey;
  font-size: 1.5rem;
`;

const recaptchaRef = React.createRef();

class ContactForm extends Component {
  state = {
    submitting: false,
    error: false
  };
  submitForm = async e => {
    e.preventDefault();
    this.setState({ submitting: true });
    try {
      await recaptchaRef.current.execute();
      const recaptchaRes = recaptchaRef.current.getValue();

      await fetch('/contact', {
        method: 'POST',
        body: {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          phone: document.getElementById('phone').value,
          message: document.getElementById('message').value,
          'g-recaptcha-response': recaptchaRes
        }
      });
      document.querySelectorAll('input,textarea').forEach(node => {
        node.value = '';
      });
    } catch (e) {
      console.log(e, e.message);
      this.setState({ error: 'Something went wrong - please try again.' });
    }
  };
  render() {
    return (
      <Form onSubmit={this.submitForm}>
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey="6LexSZQUAAAAAI4BGV59tsDCQ8V-gitEdLfBnpQU"
        />
        <Label htmlFor="name">Name</Label>
        <Input id="name" type="text" required />
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" required />
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" type="number" />
        <Label htmlFor="message">Message</Label>
        <TextArea id="message" />
        <Button type="submit" disabled={this.state.submitting}>
          Send
        </Button>
      </Form>
    );
  }
}

const Contact = () => (
  <FluidContainer>
    <h1>Contact me</h1>
    <h2>Best ways to get in touch</h2>
    <p>
      For recruitment or networking, the best way to get in touch is via{' '}
      <a href="https://www.linkedin.com/in/willhackett">LinkedIn</a>.
    </p>
    <h2>Something else</h2>
    <p>For anything else, please use this form.</p>
    <ContactForm />
  </FluidContainer>
);

export default Contact;
