import { useContext } from "react";
import user_avatar from "../../../assets/images/user_avatar.jpg"
import { AuthContext } from "../../../providers/AuthProvider";

const UserAvatar = () => {
    const {user} =useContext(AuthContext)
    return (
        <div>
            <img className="rounded-full" src={user && user.photoURL? user.photoURL : user_avatar} alt="user_photo" width="30" />
        </div>
    );
};

export default UserAvatar;