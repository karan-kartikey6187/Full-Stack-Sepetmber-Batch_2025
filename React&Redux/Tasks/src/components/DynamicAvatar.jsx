import UserDefaultImg from '../assets/images/user-default.png'

export const DynamicAvatar = ({ avatarImg = UserDefaultImg }) => {
    return (
        <img src={avatarImg} alt="" width="110" />
    )
}