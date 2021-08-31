import React from 'react';
import Layout from 'components/Layout';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

import './App.module.scss';

function App() {
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Layout>
  );
}

export default App;
