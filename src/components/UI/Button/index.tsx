import styled from 'styled-components'
import { color, compose, space, typography, variant } from 'styled-system'
import { styles } from './styles'

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'success' | 'danger'
}

const Button = styled('button').attrs(({ variant }: ButtonProps) => ({
  variant: variant,
}))(
  { ...styles.global },
  variant({
    variants: {
      primary: styles.primary,
      secondary: styles.secondary,
      success: styles.success,
      danger: styles.danger,
    },
  }),
  compose(space, color, typography)
)

export { Button }
