// import ContactItem from './ContactsListItem';
import PropTypes from 'prop-types';
import style from './ContactsList.module.css';

const ContactsList = ({ children }) => (
  <ul className={style.contactList}>
    {children}
    {/* {findContact().map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        );
      })} */}
  </ul>
);

ContactsList.prototype = {
  children: PropTypes.node,
};

export default ContactsList;
