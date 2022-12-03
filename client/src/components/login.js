import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import {LOGIN_USER} from '../utils/mutations';
import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ 
    email: '',
    password: ''
  });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  function refreshPage() {
    window.location.reload(false);
  }
  // submit form
  const handleSubmit = async (event) => {
    setErrMsg('');
    event.preventDefault();
    console.log(formState);
    if(formState.email === '' || formState.password === ''){
      setErrMsg("Invalid email or password");
    }else{
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  }
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const userRef = useRef();
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState('false');

  return (
    <>

      <section className='login-btn-container-nav'>
        <a onClick={handleShow}>Already have an acoount? Login</a>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <div className='signup-info'>
            <h2>YOUR DAY DREAM CLUB BENEFITS AWAIT!</h2>
          </div>
          <div className='signup-discount'>
            <p>Sign up now and get 10% off on select products!</p>
          </div>

          <div className='modal-login-signup-form-container'>
              <Modal.Header closeButton>
                <Modal.Title>LOGIN</Modal.Title>

              </Modal.Header>
          <Form onSubmit={handleSubmit} className="d-flex">
              <Modal.Body>
                  <Form.Control
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={handleChange}
                    value={formState.email}
                    required
                    name="email"
                    label="username"
                    placeholder="Email"
                    className="m-2 modal-login-signup-form "
                    aria-label="email"
                  />
                  <Form.Control
                    type="password"
                    id="password"
                    autoComplete="off"
                    onChange={handleChange}
                    value={formState.password}
                    required
                    placeholder="Password"
                    name="password"
                    className="m-2 modal-login-signup-form "
                    aria-label="Search"
                  />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary modal-bottom-btn" type="submit">SUBMIT</Button>
              </Modal.Footer>
            </Form>
          </div>
          <div className='forgot-password'>
            <p style={{color: '#ff2d2d'}} ref={errRef} aria-live="assertive">{errMsg}</p>
            <a href="#">Forgot your password?</a>
          </div>
        </Modal>
      </section>
    </>
  );
}

export default Login;