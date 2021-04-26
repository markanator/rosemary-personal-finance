import React from 'react';
import '../../../common/message/loading-spinner';
import LoadingSpinner from '../../../common/message/loading-spinner';
import ErrorMessage from '../../../common/message/error-message';
import useUsersOnce from '../../../../data/hooks/use-users-once';

function UserListing() {
  const users = useUsersOnce();

  // console.log(users.status);
  // console.log(users.snapshot);
  // console.log(users.error);

  if (users.status === 'loading') return <LoadingSpinner />;
  if (users.status === 'error')
    return <ErrorMessage>Please Try Again.</ErrorMessage>;
  if (users.isEmpty) return <p>No User Found</p>;

  return (
    <ul>
      {users.results.map((user) => (
        <li key={user.id}>
          {user.id} -{user.data.name}
          {/* <SmallTable id={user.id} data={user.data.name} /> */}
        </li>
      ))}
    </ul>
  );
}

export default UserListing;
