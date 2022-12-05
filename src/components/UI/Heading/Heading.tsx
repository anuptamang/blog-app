import React from 'react'
import styled from 'styled-components'
import { color, compose, space, typography, variant } from 'styled-system'
import { styles } from './styles'

const HeadingBase = ({ level, as: Component = `h${level}`, ...props }: any) => (
  <Component {...props} />
)

const Heading = styled(HeadingBase)(
  { ...styles.global },
  variant({
    prop: 'level',
  }),
  compose(space, color, typography)
)

export { Heading }
