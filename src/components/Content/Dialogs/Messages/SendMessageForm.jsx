import {useFormik} from "formik";
import s from '../../Profile/Posts/Posts.module.css';

const validate = (values) => {
    const errors = {};
    if (!values.newMessageBody) {
        errors.newMessageBody = 'Required';
    } else if (values.newMessageBody.length > 30) {
        errors.newMessageBody = 'Must be 30 characters or less';
    }
    return errors;
};

const SendMessageForm = (props) => {
    const formik = useFormik({
        initialValues: {
            newMessageBody: '',
        },
        validate,
        onSubmit: values => {
            props.sendMessage(values.newMessageBody);
            values.newMessageBody = '';
        }
    })

    return (
        <div className={s.form__wrapper}>
            <form className={s.form} onSubmit={formik.handleSubmit}>
            <textarea
                className={s.form__textarea}
                id="newMessageBody"
                name="newMessageBody"
                placeholder="Write something..."
                onChange={formik.handleChange}
                value={formik.values.newMessageBody}
            ></textarea>
                <button  className={s.form__submit} type="submit">Send</button>
                {formik.touched.newMessageBody && formik.errors.newMessageBody ?
                    <div className={s.form__error}>{formik.errors.newMessageBody}</div> : null}
            </form>
        </div>
    )
};

export default SendMessageForm;