import { ReactNode } from 'react'
import { S } from './styles'

export interface FormProps {
  children: ReactNode
  handleSubmit?: () => void
  values: { [key: string]: [val: string | string[]] }
  setValues: () => void
}

const Form = ({ children, handleSubmit, values, setValues }: FormProps) => {
  return (
    <>
      <S.Form
        onSubmit={handleSubmit}
        setValues={setValues}
        values={values}
        noValidate
        autoComplete='off'
      >
        {children}
      </S.Form>
    </>
  )
}

export default Form
