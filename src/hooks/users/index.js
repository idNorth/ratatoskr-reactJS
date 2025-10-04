import { useQuery } from "@tanstack/react-query";

// api
import { getUsersAPI } from "api/users";

const QUERY_KEY = "users";

export const useUsers = ({ queryOptions, ...options }) => {
  return useQuery([QUERY_KEY, options], getUsersAPI, queryOptions);
};
