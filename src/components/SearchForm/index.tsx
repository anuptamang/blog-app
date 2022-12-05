import { eProps } from '../../types/general'
import { S } from './styles'

type Props = {
  handleChange: (e: eProps) => void
}

const SearchForm = ({ handleChange }: Props) => {
  return (
    <S.Form>
      <S.IconHolder
        icon='search, magnifier, magnifying-glass, inspect, find'
        size={20}
      />
      <S.Input
        name='search'
        onChange={(e) => handleChange(e)}
        placeholder='Search Article'
      />
    </S.Form>
  )
}

export default SearchForm
