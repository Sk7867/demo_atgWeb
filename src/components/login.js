import CancelIcon from '@material-ui/icons/Cancel';
import modal_img from '../img/modal_img.png';
import { useState } from 'react';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
const eye = <FontAwesomeIcon icon={faEye} />;
const fb = <FontAwesomeIcon icon={faFacebook} />;
const google = <FontAwesomeIcon icon={faGoogle} />;

const Login = ({
  buttonPopup,
  setButtonPopup,
  join,
  isJoin,
  login,
  setLogin,
}) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <>
      <div className='tagline'>
        <p>
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </p>
      </div>
      <div className='popup_wrapper'>
        <div className='content_wrapper'>
          <div className='popup_header'>
            <h3>Create Account</h3>
            <div className='signin_text'>
              <p>
                Already have an account? <span onClick={setLogin}>Sign In</span>
              </p>
            </div>
            <button
              className='close_btn'
              onClick={() => {
                setButtonPopup(false);
                isJoin('join');
              }}
            >
              <CancelIcon />
            </button>
          </div>
          <div className='popup_form_login'>
            <input type='text' id='fname' placeholder='First Name' />
            <input type='text' id='lname' placeholder='Last Name' />
            <input type='text' id='email' placeholder='Email' />
            <input
              type={passwordShown ? 'text' : 'password'}
              id='password'
              placeholder='Password'
            />
            <i onClick={togglePasswordVisiblity}>{eye}</i>
            <input
              type='password'
              id='cpassword'
              placeholder='Confirm Password'
            />
          </div>
          <div className='popup_btns'>
            <div className='btn_set_1'>
              <button
                onClick={() => {
                  setButtonPopup(false);
                  isJoin('leave');
                }}
              >
                Create Account
              </button>
              <div onClick={setLogin}>or,Sign In</div>
            </div>
            <div className='btn_set_2'>
              <button>
                <i className='facebook_icon'>{fb}</i> Sign up with Facebook
              </button>
              <button>
                <i className='google_icon'>{google}</i>Sign up with Google
              </button>
            </div>
          </div>
          <div className='agreement'>
            <p>
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          </div>
        </div>
        <div className='image_wrapper'>
          <img src={modal_img} alt='' />
        </div>
      </div>
    </>
  );
};

export default Login;
