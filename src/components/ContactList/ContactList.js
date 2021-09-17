import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { variantsOpacity } from '../../variables/motionVariable';

import IconButton from '../IconButton';
import LoaderSpinner from '../LoaderSpinner';
// import { ReactComponent as IconDelete } from '../icons/icon-close-delete.svg';
import { HiOutlineTrash } from 'react-icons/hi';

import styles from './ContactList.module.scss';

const ContactItem = ({ name, number, onDeleteContact }) => {
  return (
    <motion.li
      className={styles.ContactItem}
      initial="initial"
      animate="animate"
      exit="exit"
      transition="transition"
      variants={variantsOpacity}
    >
      <p className={styles.Contact}>
        <span className={styles.ContactName}>{name}:</span> {number}
      </p>
      <IconButton onDeleteContact={onDeleteContact} aria-label="Delete contact">
        <HiOutlineTrash width={15} height={15} />
      </IconButton>
    </motion.li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getContacts);
  const visibleContacts = useSelector(
    contactsSelectors.getVisibleContactsSortByName,
  );
  const value = useSelector(contactsSelectors.getFilter);
  const isLoading = useSelector(contactsSelectors.getLoading);
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  // if (contacts.length === 0) {
  //   return <p>There are no contacts in the list</p>;
  // }

  return (
    <>
      {isLoading && <LoaderSpinner />}

      {contacts.length > 0 && (
        <motion.ul className={styles.ContactList}>
          <AnimatePresence>
            {visibleContacts.map(({ id, name, number }) => (
              <ContactItem
                key={id}
                name={name}
                number={number}
                onDeleteContact={() => onDeleteContact(id)}
              />
            ))}
          </AnimatePresence>
        </motion.ul>
      )}

      {!contacts.length && (
        <AnimatePresence>
          <motion.p
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            variants={variantsOpacity}
          >
            There are no contacts in the list
          </motion.p>
        </AnimatePresence>
      )}

      {contacts.length > 0 && !visibleContacts.length && (
        <AnimatePresence>
          <motion.p
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            variants={variantsOpacity}
          >
            There are no contacts "{value}" in this list
          </motion.p>
        </AnimatePresence>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
