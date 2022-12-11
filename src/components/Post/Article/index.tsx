import { Link } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { dummyImage } from '../../../data/static'
import { PostDataProps } from '../../../types/general'
import { getExcerpt } from '../../../utils/getExcerpt'
import { Button } from '../../UI/Button'
import { Col, Row } from '../../UI/Grid'
import { Heading } from '../../UI/Heading/Heading'
import { Icon } from '../../UI/Icon'
import List from '../../UI/List'
import { Paragraph } from '../../UI/Paragraph'
import { S } from './styles'

const Article = ({
  data: {
    id,
    title,
    body,
    postImageUrl,
    views,
    reactions,
    limitText,
    layoutType,
  },
}: PostDataProps) => {
  const theme = useTheme()

  return (
    <S.Article>
      {layoutType === 'HORIZONTAL' ? (
        <S.Row alignItems='center'>
          <Col md={6}>
            <S.Img>
              <img src={dummyImage} alt={title} />
            </S.Img>
          </Col>
          <Col md={6}>
            <S.TextHolder>
              <Heading color={theme.colors.text} level='2'>
                {title}
              </Heading>
              <Paragraph>{getExcerpt(body, limitText as number)}</Paragraph>
              <S.PostPanel>
                <Row alignItems='center'>
                  <Col md={5}>
                    <Link to={`/post/${id}`}>
                      <Button variant={'primary'}>
                        Read more{' '}
                        <S.Icon icon='arrow-right, right, next' size={16} />
                      </Button>
                    </Link>
                  </Col>
                  <Col md={7}>
                    <List type='inline' justifyContent='end'>
                      <li>
                        <Icon size={16} icon='eye' /> {views ? views : '4'}
                      </li>
                      <li>
                        <Icon size={16} icon='chat_bubble_outline' />{' '}
                        {reactions}
                      </li>
                    </List>
                  </Col>
                </Row>
              </S.PostPanel>
            </S.TextHolder>
          </Col>
        </S.Row>
      ) : (
        <>
          <S.Img>
            <img src={dummyImage} alt={title} />
          </S.Img>
          <S.TextHolder>
            <Heading color={theme.colors.text} level='2'>
              {title}
            </Heading>
            <Paragraph>{getExcerpt(body, limitText as number)}</Paragraph>
            <S.PostPanel>
              <Row alignItems='center'>
                <Col md={5}>
                  <Link to={`/post/${id}`}>
                    <Button variant={'primary'}>
                      Read more{' '}
                      <S.Icon icon='arrow-right, right, next' size={16} />
                    </Button>
                  </Link>
                </Col>
                <Col md={7}>
                  <List type='inline' justifyContent='end'>
                    <li>
                      <Icon size={16} icon='eye' /> {views ? views : '4'}
                    </li>
                    <li>
                      <Icon size={16} icon='chat_bubble_outline' /> {reactions}
                    </li>
                  </List>
                </Col>
              </Row>
            </S.PostPanel>
          </S.TextHolder>
        </>
      )}
    </S.Article>
  )
}

export default Article
