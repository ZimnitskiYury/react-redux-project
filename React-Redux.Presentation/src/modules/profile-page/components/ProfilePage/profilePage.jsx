import EditInput from 'Common/components/EditInput/editInput';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';


import styles from './profilePage.css';


function ProfilePage() {
  const user = useSelector((state) => state.auth.user);
  const [
    isEditMode,
    setMode,
  ] = useState(false);
  function clickHandler() {
    setMode(!isEditMode);
  }

  return (
    <section>
      <div className={styles['profile-info']}>
        <h1>Profile Page</h1>
        <EditInput
          isEditMode={isEditMode}
          value={user.username}
          label="Username"
        />
        <EditInput
          isEditMode={isEditMode}
          value={user.email}
          label="Email"
        />
        <EditInput
          isEditMode={isEditMode}
          value={user.firstName}
          label="First Name"
        />
        <EditInput
          isEditMode={isEditMode}
          value={user.lastName}
          label="Last Name"
        />
        <EditInput
          isEditMode={isEditMode}
          value={user.birthDate}
          label="Birth Date"
        />
        <EditInput
          isEditMode={false}
          value={user.token}
          label="Token"
        />
        <button
          type="button"
          onClick={clickHandler}
        >
          {isEditMode
            ? 'Cancel'
            : 'Edit'}
        </button>
      </div>
    </section>
  );
}

export default ProfilePage;
