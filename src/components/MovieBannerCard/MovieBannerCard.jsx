import './MovieBannerCard.scss'
import {Image} from "minista";
import Button from "@/components/Button";
import classNames from "classnames";

const MovieBannerCard = (props) => {
  const {
    title,
    TitleTag = 'h2',
    titleId,
    description,
    imgSrc,
    isSmallPaddingY = false,
  } = props

  return (
    <div
      className='movie-banner-card'
    >
      <Image
        className={`movie-banner-card__image`}
        src={imgSrc}
      />
      <div
        className={classNames('movie-banner-card__inner', {
          'movie-banner-card__inner--small-padding-y': isSmallPaddingY
        })}
      >
        <div className="movie-banner-card__body">
          <TitleTag
            className="movie-banner-card__title h3"
            id={titleId}
          >
            {title}
          </TitleTag>
          <dev className="movie-banner-card__description hidden-mobile">
            <p>{description}</p>
          </dev>
        </div>
        <footer className="movie-banner-card__footer">
          <Button
            className='movie-banner-card__play-button'
            iconName='play'
            hasFillIcon
            label='Play Now'
          />
          <div className="movie-banner-card__actions">
            <Button
              iconName='plus'
              label='Add to playlist'
              isLabelHidden
              mode={'black-06'}
            />
            <Button
              iconName='like'
              label='Like'
              isLabelHidden
              mode={'black-06'}
            />
            <Button
              iconName='volume'
              label='Mute'
              isLabelHidden
              mode={'black-06'}
            />
          </div>
        </footer>
      </div>
    </div>
  )
}

export default MovieBannerCard