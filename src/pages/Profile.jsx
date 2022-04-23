import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import HttpService from '../service/HttpService';
import UserService from './../service/UserService';

const Profile = () => {

    const [profile, setProfile] = useState()

    const handleGetProfile = async () => {
        let profile = await UserService.profile()
        setProfile(profile)
    }

    useEffect(handleGetProfile, [])

    return (
        <div className='container'>
            <p>{profile?.name}</p>
            <p>{profile?.age}</p>
        </div>
    );
}

export default Profile;