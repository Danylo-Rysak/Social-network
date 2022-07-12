import {useEffect, useState} from "react";
import s from './ProfileInfo.module.css';


const ProfileName = ({fullName, updateFullName}) => {
    let [editMode, setEditMode] = useState(false);
    let [name, setName] = useState(fullName);

    useEffect(() => {
        setName(fullName);
    }, [fullName]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        updateFullName(name);
    };

    const onNameChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            {!editMode && <span onDoubleClick={activateEditMode}>{name || "Danylo Rysak"}</span>}
            {editMode && <input className={s.profile_input} onChange={onNameChange} onBlur={deactivateEditMode}
                                autoFocus={true} value={name}/>}
        </div>
    )
}

export default ProfileName;