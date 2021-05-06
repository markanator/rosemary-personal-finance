import React from 'react';
import '../../../common/message/loading-spinner';
// import LoadingSpinner from '../../../common/message/loading-spinner';
// import ErrorMessage from '../../../common/message/error-message';
import useUserData from '../../../../data/hooks/use-user-data';

function UserListing(props) {
  // const userId = props.user.uid;
  // const [banks, transactions ] = useUserData(userId);

  // if (users.status === 'loading') return <LoadingSpinner />;
  // if (users.status === 'error')
  //   return <ErrorMessage>Please Try Again.</ErrorMessage>;
  // if (users.isEmpty) return <p>No User Found</p>;

  return <ul></ul>;
}

export default UserListing;
