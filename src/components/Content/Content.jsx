import {Routes, Route} from "react-router-dom";
import ProfileContainer from "./Profile/ProfileContainer";
import UsersContainer from "./Users/UsersContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";
import Login from "../Login/Login";

const Content = () => {
    return (
        <div>
            <Routes>
                <Route path='/profile' element={<ProfileContainer/>}/>
                <Route path="/users" element={<UsersContainer/>}/>
                <Route path="/dialogs" element={<DialogsContainer/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    )
}

export default Content;