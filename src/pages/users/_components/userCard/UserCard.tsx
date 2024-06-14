import { useState } from "react"
import type { User } from "../../_types/types";
import './UserCard.css';

type UserCardProps = {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  const [showAllInfo, setShowAllInfo] = useState(false);

  return (
    <div className="user-card">
      <h3
        className="user-card-title"
        onClick={() => setShowAllInfo((prev) => !prev)}>
          {user.name}
      </h3>
      <p><strong>Email:</strong> <a href={`mailto:${user.email}`}>{user.email}</a></p>
      <p><strong>Address:</strong> {`${user.address.street} ${user.address.suite}, ${user.address.city} ${user.address.zipcode}`}</p>
      {showAllInfo && (
        <>
          <p>
            <strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank">{user.website}</a></p>
          <p><strong>Company:</strong> {`${user.company.name}`}</p>
        </>
      )}
    </div>
  );
}
