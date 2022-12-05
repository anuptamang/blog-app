import { S } from './styles'

type Props = {
  data: {
    bannerUrl: string
  }
}

const BannerBlock = ({ data: { bannerUrl } }: Props) => {
  return (
    <S.Banner>
      <img src={bannerUrl} alt='description' />
    </S.Banner>
  )
}

export default BannerBlock
