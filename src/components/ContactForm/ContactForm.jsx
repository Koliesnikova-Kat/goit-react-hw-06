import { useId } from "react";
import styles from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const ContactSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  userNumber: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
      name: values.username,
      number: values.userNumber,
      id: nanoid(5),
    })
    )

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: "",
        userNumber: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={styles.form}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={styles.input}
            type='text'
            name='username'
            id={nameFieldId}
          />
          <ErrorMessage
            className={styles.error}
            name='username'
            component='span'
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={styles.input}
            type='text'
            name='userNumber'
            id={numberFieldId}
          />
          <ErrorMessage
            className={styles.error}
            name='userNumber'
            component='span'
          />
        </div>
        <button className={styles.button} type='submit'>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
