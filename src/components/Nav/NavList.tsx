import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { NAV } from '../../data/static'
import { Icon } from '../UI/Icon'
import { NavItem } from './NavItem'
import { S } from './styles'

type NavProps = {
  navActive: boolean
  setNavActive: (props: boolean) => void
}

const Nav = ({ navActive, setNavActive }: NavProps) => {
  const { theme, themeToggler } = useContext(ThemeContext)

  return (
    <>
      <S.NavOpener onClick={() => setNavActive(!navActive)}>
        <span>Nav Opener</span>
      </S.NavOpener>

      <S.NavDrop>
        <S.NavList>
          {NAV.map((item, key) => (
            <S.NavListItem key={key}>
              <NavItem to={item.to}>{item.title}</NavItem>
            </S.NavListItem>
          ))}
        </S.NavList>
        <S.HeaderList>
          <S.HeaderListItem>
            <S.ThemeToggle onClick={themeToggler}>
              {theme?.toUpperCase() === 'DARK' ? (
                <Icon icon='moon' size={20} />
              ) : (
                <Icon icon='sun' size={20} />
              )}
            </S.ThemeToggle>
          </S.HeaderListItem>
        </S.HeaderList>
      </S.NavDrop>
    </>
  )
}

export default Nav
