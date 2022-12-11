import React from 'react'
import { dummyImage } from '../../../data/static'
import { PostDataProps } from '../../../types'
import BannerHolder from '../../UI/BannerHolder'
import CoverImage from '../../UI/CoverImage'
import { Heading } from '../../UI/Heading/Heading'
import { Icon } from '../../UI/Icon'
import List from '../../UI/List'

const Banner = ({ data }: PostDataProps) => {
  return (
    <BannerHolder>
      <CoverImage imageUrl={dummyImage} imageAlt={data.title} />
      <Heading fontSize={50} level={1} color={'#fff'}>
        {data.title}
      </Heading>
      <List type='inline' justifyContent='center'>
        <li>
          <Icon size={16} icon='eye' /> {data.views ? data.views : '4'}
        </li>
        <li>
          <Icon size={16} icon='chat_bubble_outline' /> {data.reactions}
        </li>
      </List>
    </BannerHolder>
  )
}

export default Banner
