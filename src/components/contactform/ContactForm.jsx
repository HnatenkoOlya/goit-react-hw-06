import css from './ContactForm.module.css'
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ContactForm ({onAdd}) {
    const contactSchema = Yup.object().shape({
        name:Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number:Yup.string().min(3, "Too Short!").max(80, "Too Long!").required("Required"),
    });

    const nameId = useId ();
    const numberId = useId ();

    const handleSubmit = (values, actions) => {
        onAdd(values);
        actions.resetForm();
    }
        /*{
        evt.preventDefault();
        onAdd({
            name:evt.target.elements.name.value,
            number:evt.target.elements.number.value,
        })
        evt.targer.reset();
    }*/
    return (
        <Formik initialValues={{name:"", number:""}} onSubmit={handleSubmit} validationSchema={contactSchema}>
            <Form className={css.form}>
             <label htmlFor={nameId} className={css.formLabel}>Name</label>   
             <Field type="text" name="name" id={nameId} className={css.formField}/>
             <ErrorMessage name="name" component="span" className={css.formError}/>
             <label htmlFor={numberId} className={css.formLabel}>Number</label>
			 <Field type="tel" name="number" id={numberId} className={css.formField}/>
             <ErrorMessage name="number" component="span" className={css.formError}/>
            <button type="submit" className={css.formBtn}>Add Contact</button>
            </Form>
        </Formik>
    )
}