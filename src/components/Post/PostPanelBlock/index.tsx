import { ChangeEvent } from 'react'
import SearchForm from '../../SearchForm'
import Select from '../../UI/Form/Select'
import { Col, Row } from '../../UI/Grid'
import { S } from './styles'

type Props = {
  categories: string[]
  tags: string[]
  values: {
    categories: string
    tags: string
  }
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const PostPanelBlock = ({ values, categories, tags, handleChange }: Props) => {
  return (
    <S.PostPanel>
      <Row alignItems='center'>
        <Col md={6}>
          <Row>
            <Col md={4}>
              <Select
                name='categories'
                handleChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
                data={categories}
                value={values.categories}
              />
            </Col>
            <Col md={4}>
              <Select
                name='tags'
                handleChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
                data={tags}
                value={values.tags}
              />
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <SearchForm handleChange={handleChange} />
        </Col>
      </Row>
    </S.PostPanel>
  )
}

export default PostPanelBlock
