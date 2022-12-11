import { createContext, Dispatch, useReducer } from 'react'
import { ChildrenProps, IDispatch } from '../../../types'
import postReducer from './reducer'
import { InitialUserStateProps } from './types'

export const initialUserState: InitialUserStateProps = {
  data: {
    firstName: '',
    lastName: '',
    maidenName: '',
    age: null,
    gender: '',
    email: '',
    phone: '',
    username: '',
    birthDate: '',
    image: '',
    company: {
      title: '',
      name: '',
      department: '',
    },
  },
  loading: false,
  error: null,
}

export const UserContext = createContext<{
  state: InitialUserStateProps | any
  dispatch: Dispatch<IDispatch>
}>({
  state: initialUserState,
  dispatch: () => null,
})

export const UserProvider = ({ children }: ChildrenProps) => {
  const [state, dispatch] = useReducer<any>(postReducer, initialUserState)

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}
