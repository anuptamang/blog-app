import { v4 as uuidv4 } from 'uuid'
import { S } from './styles'

type Props = {
  data: string[]
  defaultValue?: string
  initialValue?: string
  handleChange: (e: any) => void
  name: string
  value: string
}

const Select = ({ data, name, handleChange, value }: Props) => {
  return (
    <S.SelectHolder>
      <S.Select value={value} name={name} onChange={handleChange}>
        {data?.map((item) => (
          <S.Option key={uuidv4()}>{item}</S.Option>
        ))}
      </S.Select>
    </S.SelectHolder>
  )
}

export default Select
