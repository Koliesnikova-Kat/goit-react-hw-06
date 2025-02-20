import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const nameFilter = useSelector((state) => state.filters.name.toLowerCase());

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter)
  );

  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={styles.item}>
          <Contact
            id={contact.id}
            contactName={contact.name}
            contactPhone={contact.number}
          />
        </li>
      ))}
    </ul>
  );
}
