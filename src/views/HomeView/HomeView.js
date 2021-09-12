import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import phonebookIcon from '../../images/phone-book-2.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { variantsScale } from '../../variables/motionVariable';

import styles from './HomeView.module.scss';

const HomeView = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div className={styles.HomeView}>
      <h1 className={styles.Title}>
        Welcome to our application{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>

      <p className={styles.IconPhonebook}>
        Use the app to create your own Phonebook{' '}
        {/* <span role="img" aria-label="Phonebook icon">
          📒
        </span> */}
      </p>

      {!isLoggedIn && (
        <p className={styles.IconPhonebookAct}>
          <span className={styles.act}>sign up</span> and{' '}
          <span className={styles.act}>log in</span> and use all the features of
          the app.
        </p>
      )}
      <AnimatePresence>
        <motion.img
          initial="initial"
          animate="animate"
          exit="exit"
          transition="transition"
          variants={variantsScale}
          src={phonebookIcon}
          alt="phonebookIcon"
          width="300"
          className={styles.PhoneIcon}
        />
      </AnimatePresence>
    </div>
  );
};

export default HomeView;
