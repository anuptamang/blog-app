import { ActionMap, Author } from "../../../types";

export interface InitialUserStateProps {
  data: Author
  error: {} | null
  loading: boolean
}

export enum Types {
  GetUserById = 'GET_USER_BY_ID',
  GetUserByIdSuccess = 'GET_USER_BY_ID_SUCCESS',
  GetUserByIdFailed = 'GET_USER_BY_ID_FAILED',
}

export type UserPayload = {
  [Types.GetUserById]: {
    loading: boolean
  };
  [Types.GetUserByIdSuccess]: {
    limit: number;
    loading: boolean
    data: []
  };
  [Types.GetUserByIdFailed]: {
    error: {}
  };
}

export type UserActions = ActionMap<UserPayload>[keyof ActionMap<UserPayload>];