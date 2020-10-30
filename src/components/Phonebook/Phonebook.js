import React from "react";
import PropTypes from "prop-types";

import PhonebookItem from "./PhonebookItem.container";

import s from "./Phonebook.module.css";

const Phonebook = ({ contacts }) => {
  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <li className={s.item} key={contact.id}>
          <PhonebookItem id={contact.id} />
        </li>
      ))}
    </ul>
  );
};
Phonebook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};

export default Phonebook;
