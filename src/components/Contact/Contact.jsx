import s from "./Contact.module.css";
import { RiContactsFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ id, contactName, contactPhone }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={s.contact}>
      <div className={s.info}>
        <span className={s.name}>
          <RiContactsFill /> {contactName}
        </span>
        <span className={s.phone}>
          <FaPhoneAlt /> {contactPhone}
        </span>
      </div>
      <button
        type='button'
        className={s.button}
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}
