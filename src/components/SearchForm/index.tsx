import { S } from './styles'

type Props = {}

const SearchForm = (props: Props) => {
  return (
    <S.Form>
      <S.IconHolder
        icon='search, magnifier, magnifying-glass, inspect, find'
        size={20}
      />
      <S.Input placeholder='Search Article' />
    </S.Form>
  )
}

export default SearchForm
