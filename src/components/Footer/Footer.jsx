import s from './Footer.module.css';
import telegram from '../../assets/telegram.png';
import gmail from '../../assets/gmail.png';
import github from '../../assets/github.png';

const Footer = () => {
    return (
        <div className={s.footer}>
           <div className={s.footer__copyright}>
              Copyright &copy; 2022
           </div>

            <div className={s.footer__icons}>
                <a href="tg://resolve?domain=<@rysak_d>"><img className={s.icons__icon} src={telegram} alt="telegram"/></a>
                <a href="mailto:rysak.d.2002@gmail.com"><img className={s.icons__icon} src={gmail} alt="gmail"/></a>
                <a href="https://github.com/Danylo-Rysak"><img className={s.icons__icon} src={github} alt="github"/></a>
            </div>
        </div>
    )
};

export default Footer;

