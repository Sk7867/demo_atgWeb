import Login from './Login';
import Signin from './Signin';

import { motion, AnimatePresence } from 'framer-motion';

import { useState } from 'react';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: {
    y: '100vh',
    opacity: 0,
    transition: { delay: 0.3 },
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

export default function Popup({ buttonPopup, setButtonPopup, join, isJoin }) {
  const [login, setlogin] = useState(false);

  function setLogin() {
    setlogin(!login);
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {buttonPopup && (
        <motion.div
          className='backdrop'
          onClick={() => {
            isJoin('join');
          }}
          variants={backdrop}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          <motion.div className='popup_container' variants={modal}>
            {login ? (
              <Signin
                buttonPopup={buttonPopup}
                setButtonPopup={setButtonPopup}
                join={join}
                isJoin={isJoin}
                login={login}
                setLogin={setLogin}
              />
            ) : (
              <Login
                buttonPopup={buttonPopup}
                setButtonPopup={setButtonPopup}
                join={join}
                isJoin={isJoin}
                login={login}
                setLogin={setLogin}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
