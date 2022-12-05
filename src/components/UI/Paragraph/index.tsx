import styled from 'styled-components'
import { color, compose, space, typography } from 'styled-system'
import { styles } from './styles'

const Paragraph = styled('p')(
  { ...styles.global },
  compose(space, color, typography)
)

export { Paragraph }
