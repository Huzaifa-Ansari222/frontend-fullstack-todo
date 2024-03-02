import React, { useContext,useEffect } from 'react';
import { Context } from '../main';
import Loader from '../components/Loader';

const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);
  // console.log(user.name);
  // console.log(user.email);
  // console.log(isAuthenticated);



  return (
    <div style={{ height: '100%' }}>
      {loading ? (
        <Loader />
      ) : isAuthenticated ? ( // Check if user is authenticated
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column', textAlign: 'center', height: '90vh' }}>
      <br /> <br /> <br /> <br />
          <h1>{user.name}</h1>
          <br />
          <h2>{user.email}</h2>
        </div>
      ) : (
        // If user is not authenticated, show appropriate message or redirect to login page
        <div style={{display:'flex',alignItems:'center',justifyContent:'center', textAlign: 'center', height: '90vh' }}>
          <br /><br /><br />
          <h1>Please Login to view profile</h1>
        </div>
      )}
    </div>
  );
};

export default Profile;
