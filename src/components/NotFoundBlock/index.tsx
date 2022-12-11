import { Link } from 'react-router-dom'
import { dummyImage } from '../../data/static'
import BannerHolder from '../UI/BannerHolder'
import { Button } from '../UI/Button'
import CoverImage from '../UI/CoverImage'
import { Heading } from '../UI/Heading/Heading'
const NotFoundBlock = () => {
  return (
    <BannerHolder>
      <CoverImage imageUrl={dummyImage} imageAlt={'description'} />
      <Heading fontSize={72} level={1} color={'#fff'}>
        404
      </Heading>
      <Link to='/'>
        <Button variant='primary'>Go to Homepage</Button>
      </Link>
    </BannerHolder>
  )
}

export default NotFoundBlock
