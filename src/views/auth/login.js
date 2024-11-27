import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Images from '../../constants/images';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import routes from '../../constants/routes';

function Login() {
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showTpinModal, setShowTpinModal] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState([]);
  const handleOtpModalClose = () => setShowOtpModal(false);
  const handleOtpModalShow = () => setShowOtpModal(true);
  const handleTpinModalClose = () => setShowTpinModal(false);
  const handleTpinModalShow = () => setShowTpinModal(true);
  const navigate = useNavigate();

  // Validation schema for login form
  const validationSchema = Yup.object({
    userId: Yup.string()
      .required('User ID is required')
      .matches(/^\d{10}$/, 'User ID must be exactly 10 digits'),
    password: Yup.string().required('Password is required'),
  });

  // Validation schema for OTP form
  const otpValidationSchema = Yup.object({
    otp: Yup.array()
      .of(
        Yup.string()
          .matches(/^\d$/, 'Must be a number')
          .required('Required')
      )
      .length(6, 'Must be 6 digits'),
  });


  // tpin validation
  const tpinValidationSchema = Yup.object({
    tpin: Yup.array()
      .of(
        Yup.string()
          .matches(/^\d$/, 'Must be a number')
          .required('Required')
      )
      .length(4, 'Must be 4 digits'),
  });

  // login
  const handleSignIn = async (loginid, password) => {
    const requestBodySignIn = {
      method: 'webloginba',
      loginid,
      password,
      pid: '1',
    };

    try {
      const signInResponse = await axios.post("http://api.payimps.in/recApiFinal/service.aspx", requestBodySignIn, {
        headers: {
          aksom: 'bebdc5f462e19958af91dd728d97a0c8',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (signInResponse.status === 200) {
        setStoredCredentials({
          loginid,
          password,
        });
        const { Id } = signInResponse.data;

        if (Id === "N") {
          toast.error("Invalid credentials. Please try again.");
        } else if (!isNaN(Id) && Id !== "N") {
          toast.success('Almost there! Please provide your valid T-PIN to proceed.');
          handleTpinModalShow();
        }
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
      throw new Error('An error occurred. Please try again.');
    }
  };

  // tpin
  const handleSubmitTpin = async (values) => {
    const tpin = values.tpin.join(''); 
    const { loginid, password } = storedCredentials;

    const loginParams = {
      method: "validatepin",
      loginid: loginid,
      password: password,
      tpin: tpin,
    };

    try {
      const response = await axios.post(
        "http://api.payimps.in/recApiFinal/service.aspx",
        loginParams,
        {
          headers: {
            aksom: 'bebdc5f462e19958af91dd728d97a0c8',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      const { status, statuscode, message } = response.data;

      if (status === true && statuscode == 200) {
        toast.success('Login successful!');
        Cookies.set('user', loginid, { expires: 1 }); // Expires in 1 day
        Cookies.set('sessionToken', 'Retailer', { expires: 1 });
        navigate(routes.dashbaord); 
      } else if (status === false && statuscode == 201) {
        toast.error(message || 'Invalid TPIN. Please try again.');
      } else {
        toast.error('Unexpected response from the server. Please try again later.');
      }
    } catch (error) {
      toast.error('Login failed. Please check your connection or try again later.');
    }
  };

  
  const handleSendOtp = async () => {
    const { loginid } = storedCredentials;
    const otpParams = {
      method: "appsendotp",
      loginid: loginid,
    };

    try {
      const response = await axios.post(
        "http://api.payimps.in/recApiFinal/service.aspx",
        otpParams,
        {
          headers: {
            aksom: "bebdc5f462e19958af91dd728d97a0c8",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log("OTP sent successfully:", response.data);
    } catch (error) {
      console.error("Error while sending OTP:", error);
    }
  };
  

  return (
    <>
      <section className="login-page">
        <Container fluid className="p-0">
          <Row className="g-0">
            <Col xl={6} className="d-none d-lg-block">
              <img src={Images.login} alt="login" className="img-fluid" />
            </Col>
            <Col xl={6}>
              <div className="login-form">
                <img src={Images.logo} alt="app-logo" />
                <Formik
                  initialValues={{ userId: '', password: '' }}
                  validationSchema={validationSchema}
                  onSubmit={async (values, actions) => {
                    try {
                      const response = await handleSignIn(values.userId, values.password);
                      if (response && response.Id && !isNaN(response.Id) && response.Id !== "N") {
                        handleTpinModalShow();

                      }
                    } catch (error) {

                      console.error("Error during sign-in:", error);
                    } finally {
                      actions.setSubmitting(false);
                    }
                  }}
                >
                  {({ values, touched, errors, isSubmitting }) => (
                    <FormikForm noValidate>
                      <div className="mb-3">
                        <label htmlFor="userId">
                          User ID <span>*</span>
                        </label>
                        <Field
                          name="userId"
                          type="text"
                          className={`form-control ${touched.userId && errors.userId ? 'is-invalid' : ''}`}
                          maxLength="10"
                        />
                        <ErrorMessage
                          name="userId"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password">
                          Password <span>*</span>
                        </label>
                        <Field
                          name="password"
                          type="password"
                          className={`form-control ${touched.password && errors.password ? 'is-invalid' : ''}`}
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-100"
                        disabled={isSubmitting || !values.userId || !values.password || errors.userId || errors.password}
                      >
                        Login
                      </Button>
                      <Button
                        type="button"
                        className="w-100 otp-login"
                        onClick={handleSendOtp}
                        disabled={isSubmitting || !values.userId || !values.password || errors.userId || errors.password}
                      >
                        Login With OTP
                      </Button>
                    </FormikForm>
                  )}
                </Formik>
                <p>
                  You have forgotten your password? <Link to="#">Reset it here</Link>
                </p>
                <p>
                  ---------------------------------------------- For Support
                  ----------------------------------------------
                </p>
                <ul>
                  <li>
                    <i className="bx bxs-phone-call me-2"></i>+91-9289877959,
                    +91-9289545506
                  </li>
                  <li>
                    <i className="bx bxs-envelope me-2"></i>
                    <a href="mailto:support@pedhapay.com">support@pedhapay.com</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          {/* OTP Modal */}
          <Modal show={showOtpModal} onHide={handleOtpModalClose} backdrop="static" keyboard={false}>
            <Modal.Body>
              <img src={Images.otp} alt="otp" />
              <h5>OTP Sent Successfully</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum inventore libero illo.</p>
              <Formik
                initialValues={{ otp: Array(6).fill('') }}
                validationSchema={otpValidationSchema}
                // onSubmit={handleSubmitOtp}
              >
                {({ values, setFieldValue, isValid }) => (
                  <FormikForm>
                    <div className="d-flex justify-content-center">
                      {values.otp.map((_, index) => (
                        <div key={index} className="mx-1">
                          <Field
                            name={`otp[${index}]`}
                            type="password"
                            maxLength="1"
                            className="form-control text-center"
                            id={`otp-${index}`}
                            onChange={(e) => {
                              const value = e.target.value;
                              if (/^\d?$/.test(value)) {
                                setFieldValue(`otp[${index}]`, value);
                                if (value && index < 5) {
                                  // Move focus to the next input field
                                  document.getElementById(`otp-${index + 1}`).focus();
                                }
                              }
                            }}
                            onKeyDown={(e) => {
                              // Handle Backspace to move focus to the previous field
                              if (e.key === "Backspace" && !values.otp[index] && index > 0) {
                                document.getElementById(`otp-${index - 1}`).focus();
                              }
                            }}
                          />
                          <ErrorMessage
                            name={`otp[${index}]`}
                            component="div"
                            className="text-danger small"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 modal-bottom">
                      <Button
                        type="submit"
                        className="w-100 mb-2"
                        disabled={values.otp.some((digit) => digit === '')}
                      >
                        Verify OTP
                      </Button>
                      <p onClick={handleOtpModalClose}>
                        Close
                      </p>
                    </div>
                  </FormikForm>
                )}
              </Formik>
            </Modal.Body>
          </Modal>
          {/* TPIN Modal */}
          <Modal show={showTpinModal} onHide={handleTpinModalClose} backdrop="static" keyboard={false}>
            <Modal.Body>
              <img src={Images.otp} alt="otp" />
              <h5>Enter TPIN</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil inventore veniam.</p>
              <Formik
                initialValues={{ tpin: Array(4).fill('') }}
                validationSchema={tpinValidationSchema}
                onSubmit={handleSubmitTpin}
              >
                {({ values, setFieldValue, isValid }) => (
                  <FormikForm>
                    <div className="d-flex justify-content-center">
                      {values.tpin.map((_, index) => (
                        <div key={index} className="mx-1">
                          <Field
                            name={`tpin[${index}]`}
                            type="password"
                            maxLength="1"
                            className="form-control text-center"
                            id={`tpin-${index}`}
                            onChange={(e) => {
                              const value = e.target.value;
                              if (/^\d?$/.test(value)) {
                                setFieldValue(`tpin[${index}]`, value);
                                if (value && index < 3) {
                                  document.getElementById(`tpin-${index + 1}`).focus();
                                }
                              }
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Backspace" && !values.tpin[index] && index > 0) {
                                document.getElementById(`tpin-${index - 1}`).focus();
                              }
                            }}
                          />
                          <ErrorMessage
                            name={`tpin[${index}]`}
                            component="div"
                            className="text-danger small"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 modal-bottom">
                      <Button
                        type="submit"
                        className="w-100 mb-2"
                        disabled={!isValid || values.tpin.some((digit) => digit === '')}
                      >
                        Verify TPIN
                      </Button>
                      <p onClick={handleTpinModalClose}>
                        Close
                      </p>
                    </div>
                  </FormikForm>
                )}
              </Formik>
            </Modal.Body>
          </Modal>
        </Container>
      </section>
    </>
  );
}

export default Login;
