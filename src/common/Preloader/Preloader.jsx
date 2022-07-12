import s from "./Preloader.module.css";

const Preloader = ({preloader}) => {
    return(
        <div className={s.preloader__wrapper}>
            <img className={s.preloader} src={preloader} alt="preloader"/>
        </div>
    )
};

export default Preloader;