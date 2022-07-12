import {useEffect, useState} from "react";
import s from "./ProfileInfo.module.css";

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.target.value);
    }

    return (
        <div className={s.info__status}>
            {!editMode && <span onDoubleClick={activateEditMode}>{props.status || "None"}</span>}
            {editMode && <input className={s.profile_input} onChange={onStatusChange} onBlur={deactivateEditMode}
                                autoFocus={true} value={status}/>}
        </div>
    )
};

export default ProfileStatus;