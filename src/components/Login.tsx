import { useEffect, useState } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { AppContext } from '../store/AppContext';
import React from 'react';

export type Profile = {
  picture: string;
  name: string;
  email: string;
};

const Login = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const { user, setUser } = React.useContext(AppContext);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error),
    scope: 'https://www.googleapis.com/auth/photoslibrary.readonly',
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json',
            },
          },
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };
  return (
    <>
      {profile ? (
        <div className="flex ">
          <img src={profile.picture} alt="user " />
          <h3>User Logged in</h3>
          <p> Name:{profile.name}</p>
          <p>Email Adress:{profile.email}</p>
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button onClick={() => login()}>Sign in With Google</button>
      )}
    </>
  );
};

export default Login;
