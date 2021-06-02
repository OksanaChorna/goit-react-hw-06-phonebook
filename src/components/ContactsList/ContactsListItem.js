import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';
import style from './ContactsListItem.module.css';

const ContactItem = ({ onDeleteContact, contacts }) => (
  <>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={style.contactItem}>
        {name}: {number}
        <button
          className={style.buttonDel}
          type="submit"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </>
);

ContactItem.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func,
};

const findContact = (filter, contacts) => {
  const normalizedFilter = filter.toLocaleLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: items, filter }) => ({
  contacts: findContact(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
