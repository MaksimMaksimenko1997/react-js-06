import React from "react";
import PropTypes from "prop-types";

import s from "./Phonebook.module.css";

const PhonebookItem = ({ contacts, id, onDelete }) => {
  const {name, number} = contacts.find(item => item.id === id);
  return (
    <>
      <span>
        {name} : {number}
      </span>
      <button type="button" className={s.close} onClick={() => onDelete(id)}>
        +
      </button>
    </>
  );
};

PhonebookItem.propTypes = {
  contacts: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PhonebookItem;
