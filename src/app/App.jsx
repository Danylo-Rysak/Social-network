import s from './App.module.css';
import Content from "../components/Content/Content";
import HeaderContainer from "../components/Header/HeaderContainer";
import Navbar from "../components/Navbar/Navbar";
import Login from "../components/Login/Login";
import Footer from "../components/Footer/Footer";
import Preloader from "../common/Preloader/Preloader";
import {Routes, Route} from "react-router-dom";
import preloader from "../assets/preloader.gif";

const LoginNavigate = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    )
};

const App = (props) => {
    if (!props.initialized) {
        return <Preloader preloader={preloader}/>
    }

    if (!props.isAuth) return <LoginNavigate/>

    return (
        <div className={s.app}>
            <HeaderContainer/>
            <div className={s.app__content}>
                <Navbar/>
                <Content/>
            </div>
            <Footer/>
        </div>
    )
};

export default App;
