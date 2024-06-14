import { useQuery } from "@tanstack/react-query";
import { userSchema } from "../_types/types";
import { z } from "zod";

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  const validatedUsers = z.array(userSchema).safeParse(users);

  if (!validatedUsers.success) {
    console.error(validatedUsers.error);
    throw new Error('Invalid data from API.');
  }

  return validatedUsers.data;
}

export const useUsersQuery = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryFn: fetchUsers,
    queryKey: ['users']
  });

  return {
    users,
    isLoading,
    error,
  }
}
