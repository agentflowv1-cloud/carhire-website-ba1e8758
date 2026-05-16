import React, { useState } from 'react';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [Submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    setSubmitting(false);
  };

  return (
    <div className="container mx-auto p-4 pt-6 mt-10">
      <h1 className="text-3xl font-bold mb-4">Get in touch</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="email">
          Email
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="message">
          Message
        </label>
        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit" disabled={Submitting} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">{Submitting ? 'Submitting...' : 'Send'}</button>
      </form>
    </div>
  );
};

export default ContactPage;