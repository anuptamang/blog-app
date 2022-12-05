import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav'
import { Col, Container, Row } from '../UI/Grid'
import { S } from './styles'

const Header = () => {
  const [navActive, setNavActive] = useState(false)

  return (
    <S.Header className={navActive && 'nav-active'}>
      <Container>
        <Row alignItems='center' justifyContent='between'>
          <Col md={3}>
            <S.Logo>
              <Link to='/'>My App</Link>
            </S.Logo>
          </Col>
          <Col md={9}>
            <Nav navActive={navActive} setNavActive={setNavActive} />
          </Col>
        </Row>
      </Container>
    </S.Header>
  )
}

export default Header
