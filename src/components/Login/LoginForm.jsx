import s from './LoginForm.module.css';
import {useFormik} from "formik";
import {useEffect} from "react";

const validate = (values) => {
    const email = "rysak.d.2002@gmail.com";
    const password = "C5235tt6r";
    const errors = {};
    if (values.email !== email) {
        errors.email = "Email or password are not correct"
    }
    if (values.password !== password) {
        errors.password = "Email or password are not correct"
    }
    return errors;
}

const LoginForm = (props) => {
    useEffect(() => {
        return () => props.deleteCaptchaUrl();
    }, []);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: ''
        },
        validate,
        onSubmit: values => {
            props.login(values.email, values.password, values.rememberMe, values.captcha);
        }
    });

    return (
        <form className={s.login} onSubmit={formik.handleSubmit}>
            <div className={s.login__header}>
                <h3 className={s.header__title}>LOGIN</h3>
            </div>

            <div className={s.login__body}>
                <input className={s.body__input} name="email" id="email" type="email"
                       onChange={formik.handleChange} value={formik.values.email}
                       placeholder={'Email'}/>
                <input className={s.body__input} name="password" id="password" type="password"
                       onChange={formik.handleChange} value={formik.values.password}
                       placeholder={'Password'}/>
            </div>

            <div className={s.login_captcha}>
                {props.captchaUrl && <img className={s.captcha} src={props.captchaUrl} alt="captcha"/>}
                {props.captchaUrl &&
                    <input className={s.captcha__input} name="captcha" id="captcha" type="text"
                           onChange={formik.handleChange} value={formik.values.captcha}/>}
            </div>

            {(formik.touched.email && formik.errors.email) || (formik.touched.password && formik.errors.password) ?
                <div className={s.form__error}>{(formik.errors.email) || (formik.errors.password)}</div> : null}

            <div className={s.login__footer}>
                <div className={s.footer__checkbox}>
                    <input className={s.footer__button} name="rememberMe" id="rememberMe" type="checkbox"
                           onChange={formik.handleChange} defaultChecked={formik.values.rememberMe}/>
                    <span>remember me</span>
                </div>
                <button className={s.footer__submit} type="submit">Login</button>
            </div>
        </form>
    )
};

export default LoginForm;