import { createContext, useContext } from 'react';
import useUser from './use-user';

const AppContext = createContext(null);

// Context Provider
function RosemaryContextProvider({ children }) {
  // TODO: apply useFirestore hook here
  const userState = useUser();

  return (
    <AppContext.Provider value={{ ...userState }}>
      {children}
    </AppContext.Provider>
  );
}

//react-hook to access context
function useAppContext() {
  const userState = useContext(AppContext);
  if (!userState) {
    throw new Error(
      'useRosemary needs to have a RosemaryProvider component as a parent on the React Tree.'
    );
  }
  return userState;
}

export default useAppContext;

export { AppContext, RosemaryContextProvider };
