import React, { useState, useEffect } from 'react'
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import Header from './Navbar/Header';


const GoogleSignin = () => {
    const navigate = useNavigate();
    const clientId = "366179201607-v28snk31ertrhd5frai56heosiprpgue.apps.googleusercontent.com";
    const [profile ,setProfile] = useState(undefined);
    useEffect(()=>{
        async function getProfile(){
            if(!sessionStorage.getItem('google-SignIn')){
                navigate('/login')
            }else{
                setProfile(await JSON.parse(sessionStorage.getItem('google-SignIn'))) 
            }
        }
        getProfile();
},[])
    console.log(profile)
    const logOut = () => {
        setProfile(null);
        sessionStorage.clear();
        navigate('/login')
    };
    navigator.geolocation.getCurrentPosition(function(position){
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
    })
    return (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            {profile &&(
                <div>
                    <Header />
                    <img src={profile.imageUrl} alt="user image" referrerpolicy="no-referrer" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
                </div>
                )}
        </div>
    );
}

export default GoogleSignin