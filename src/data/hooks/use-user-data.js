import { useEffect, useState } from 'react';
// import { db } from '../firebase';
import { usersCollection } from '../firebase';

function useUserData(userId) {
  const [userData, setUserData] = useState({
    status: 'loading',
    snapshot: null,
    error: null,
  });

  useEffect(() => {
    async function getUserData() {
      setUserData({ status: 'loading', snapshot: null, error: null });
      try {
        const snapshot = await usersCollection
          // .collection('users')
          .doc(userId)
          .get();

        setUserData({ status: 'success', snapshot, error: null });
      } catch (error) {
        console.error(error);
        setUserData({ status: 'error', snapshot: null, error });
      }
    }
    getUserData();
  }, []);

  const { status, snapshot, error } = userData;

  let data;
  if (snapshot) {
    data = snapshot.data();
  }

  return {
    status,
    error,
    data,
  };
}

export default useUserData;
