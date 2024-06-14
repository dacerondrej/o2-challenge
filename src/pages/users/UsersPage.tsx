import { useState } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { useUsersQuery } from './_queries/useUsersQuery'
import { UserCard } from './_components/userCard/UserCard';
import './UsersPage.css';

export const UsersPage = () => {
  const [searchInput, setSearchInput] = useState('');
  const {
    users,
    isLoading,
    error
  } = useUsersQuery();

  let pageContent: JSX.Element;
  if (isLoading) {
    pageContent = <Loader />;
  } else if (error) {
    pageContent = <pre>{error.message}</pre>
  } else {
    const filteredUsers = users?.filter((user) => user.name.toLocaleLowerCase().includes(searchInput));
    pageContent = (
      <>
        <div className='search-input-field'>
          <label htmlFor="users-search">Filter users:&nbsp;</label>
          <input
            id="users-search"
            onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
            value={searchInput}
            type="search"
          />
        </div>
        <div className="user-card-container">
          {(filteredUsers && filteredUsers.length > 0)
            ? filteredUsers.map((filteredUser) => <UserCard key={filteredUser.id} user={filteredUser} />)
            : "No results"}
        </div>
      </>
    );
  }

  return (
    <>
      <h2>Users</h2>
      {pageContent}
    </>
  )
};
