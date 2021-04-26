import { useEffect, useState } from 'react';
import { db } from '../firebase';

function useUsersOnce() {
  const [users, setUsers] = useState({
    status: 'loading',
    snapshot: null,
    error: null,
  });

  useEffect(() => {
    async function getCollection() {
      setUsers({ status: 'loading', snapshot: null, error: null });
      try {
        const snapshot = await db.collection('users').get();
        setUsers({ status: 'success', snapshot, error: null });
      } catch (error) {
        console.error(error);
        setUsers({ status: 'error', snapshot: null, error });
      }
    }
    getCollection();
  }, []);

  const { status, snapshot, error } = users;

  let results = [];
  if (snapshot) {
    results = snapshot.docs.map((docSnapshot) => {
      return {
        id: docSnapshot.id,
        data: docSnapshot.data(),
      };
    });
  }

  return {
    status,
    error,
    results,
    isEmpty: results.length === 0,
  };
}

export default useUsersOnce;
