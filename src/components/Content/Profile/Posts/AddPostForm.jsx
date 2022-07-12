import {useFormik} from "formik";
import s from './Posts.module.css';

const validate = (values) => {
    const errors = {};
    if (!values.newPostBody) {
        errors.newPostBody = 'Required';
    } else if (values.newPostBody.length > 30) {
        errors.newPostBody = 'Must be 30 characters or less';
    }
    return errors;
};

const AddPostForm = (props) => {
    const formik = useFormik({
        initialValues: {
            newPostBody: '',
        },
        validate,
        onSubmit: values => {
            props.addPost(values.newPostBody);
            values.newPostBody = '';
        }
    });

    return (
        <div className={s.form__wrapper}>
            <form className={s.form} onSubmit={formik.handleSubmit}>
                <textarea className={s.form__textarea}
                          name="newPostBody"
                          id="newPostBody"
                          placeholder="Write something..."
                          onChange={formik.handleChange}
                          value={formik.values.newPostBody}
                />
                <button className={s.form__submit} type='submit'>Add</button>
                {formik.touched.newPostBody && formik.errors.newPostBody ?
                    <div className={s.form__error}>{formik.errors.newPostBody}</div> : null}
            </form>
        </div>
    )
}

export default AddPostForm;
