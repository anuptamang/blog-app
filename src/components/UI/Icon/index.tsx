import IcoMoon from 'react-icomoon'
import iconSet from '../../../assets/fonts/icomoon.json'

interface IconProps {
  icon: string
  size?: number
}

const Icon = (props: IconProps) => <IcoMoon iconSet={iconSet} {...props} />

export { Icon }
