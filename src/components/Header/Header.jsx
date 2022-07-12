import s from './Header.module.css';
import Login from "../Login/Login";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.header__inscription}>
                <h1>Social-Network</h1>
            </div>
            <div className={s.header__logout}>
                {props.isAuth
                    ? <div><span className={s.logout__login}>{props.login}</span>
                        <button className={s.logout__submit} onClick={props.logout}>Log out</button>
                    </div>
                    : <Login/>
                }
            </div>
        </header>
    )
}

export default Header;