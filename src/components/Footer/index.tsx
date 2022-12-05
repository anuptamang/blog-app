import { Link } from 'react-router-dom'
import { FOOTER } from '../../data/static'
import { Col, Container, Row } from '../UI/Grid'
import { Heading } from '../UI/Heading/Heading'
import List from '../UI/List'
import { S } from './styles'

const Footer = () => {
  return (
    <S.Footer>
      <Container>
        <Row justifyContent='between'>
          <Col lg={3}>
            <S.FooterLogo>My-app</S.FooterLogo>
            <S.FooterInfo>{FOOTER.info}</S.FooterInfo>
            <S.Copyright>©My-app 2022. All rights reserved</S.Copyright>
          </Col>
          <Col lg={7}>
            <Row>
              {FOOTER.nav.map((nav, key) => (
                <Col key={key} md={4}>
                  <S.FooterNav>
                    <Heading color='#fff' level='h4'>
                      {nav.title}
                    </Heading>
                    <List>
                      {nav.links.map((link) => (
                        <li>
                          <Link to={link.to}>{link.title}</Link>
                        </li>
                      ))}
                    </List>
                  </S.FooterNav>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </S.Footer>
  )
}

export default Footer
