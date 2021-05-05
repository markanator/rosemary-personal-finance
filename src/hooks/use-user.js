import { useEffect, useState } from 'react';
import { auth, db, provider } from '../data/firebase';

function useUser() {
  const [userState, setUserState] = useState({
    user: auth.currentUser,
    isLoading: auth.currentUser === null ? true : false,
    error: null,
  });

  useEffect(() => {
    const onChange = (currentUser) => {
      setUserState({ user: currentUser, isLoading: false, error: null });
    };
    const onError = (error) => {
      console.error(error);
      setUserState({ user: null, isLoading: false, error });
    };
    const unsubscribe = auth.onAuthStateChanged(onChange, onError);

    return unsubscribe;
  }, []);

  const signIn = async () => {
    setUserState({ user: null, isLoading: true, error: null });
    try {
      const { user } = await auth.signInWithPopup(provider);
      // check to see if this user already exsists
      const userDoc = await db.collection('users').doc(user.uid).get();
      // letes create a temporary user object template
      const userObj = {
        ...user.providerData[0],
        uid: user.uid,
        balance: 0,
        banks: [],
        transactions: [],
      };

      if (!userDoc.exists) {
        // create a new doc from federated provider, if nothing found
        await db.collection('users').doc(user.uid).set(userObj);
        console.log('Created new DB Doc');
      } else {
        // otherwise, we're good to go
        console.log('User from DB found');
      }
      // for context state => we want the firestore data for exsisting users, not auth user
      let finaluser = userDoc.exists ? userDoc.data() : userObj;

      // console.log('Final User', finaluser);
      setUserState({ user: finaluser, isLoading: false, error: null });
    } catch (error) {
      console.error(error);
      setUserState({ user: null, isLoading: false, error });
    }
  };

  const signOut = async () => {
    setUserState({ user: userState.user, isLoading: true, error: null });
    try {
      await auth.signOut();
      setUserState({ user: null, isLoading: false, error: null });
    } catch (error) {
      console.error(error);
      setUserState({ user: userState.user, isLoading: false, error });
    }
  };

  const { user, isLoading, error } = userState;
  const isSignedIn = user !== null;

  return {
    user,
    isLoading,
    isSignedIn,
    error,
    signIn,
    signOut,
  };
}

export default useUser;
