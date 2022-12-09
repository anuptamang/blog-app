import { HandleChangeProps } from '../../types/general'
import { S } from './styles'

const SearchForm = ({ handleChange }: HandleChangeProps) => {
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
