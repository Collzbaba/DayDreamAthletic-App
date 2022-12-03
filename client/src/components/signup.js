import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import LoginIcon from '../assets/img/loginicon.svg'
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import {ADD_USER} from '../utils/mutations';
import Auth from '../utils/auth';
import Login from './login';

const Signup = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    setErrMsg('');
    e.preventDefault();
    console.log(formState);
    if(formState.email === '' || formState.password === ''){
      setErrMsg("Invalid email or password");
    }else{
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      console.log(data.addUser.token);
      Auth.login(data.addUser.token);
      window.location.reload(false);
    } catch (err) {
      console.error(err);
    }
  };
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
        <Button variant="primary login-icon-modal" onClick={handleShow}>
          <img src={LoginIcon} className="nav-btn-icons"></img>
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          {Auth.loggedIn
          ? <button onClick={Auth.logout}>logout</button>
          : <div>
          
          <div className='signup-info'>
            <h2>YOUR DAY DREAM CLUB BENEFITS AWAIT!</h2>
          </div>
          <div className='signup-discount'>
            <p>Sign up now and get 10% off on select products!</p>
          </div>

          <div className='modal-login-signup-form-container'>
            <div>
              <Modal.Header closeButton>
                <Modal.Title className='signup-title-modal'>SIGN UP</Modal.Title>

              </Modal.Header>
              <Form  onSubmit={handleSubmit} className="d-flex">
              <Modal.Body>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className="m-2 modal-login-signup-form "
                    aria-label="Search"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="m-2 modal-login-signup-form "
                    aria-label="Search"
                    name="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary modal-bottom-btn" type="submit">SUBMIT</Button>
              </Modal.Footer>
              </Form>
            </div>
            
          </div>
          <div className='forgot-password'>
          <p style={{color: '#ff2d2d'}} ref={errRef} aria-live="assertive">{errMsg}</p>
            <Login/>
          </div>
          </div>
          }
        </Modal>
      </section>
    </>
  );
}

export default Signup;