import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import s from './App.module.css'

export default function App() {
  return (
    <>
      <h1 className={s.h1}>PhoneBook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}
