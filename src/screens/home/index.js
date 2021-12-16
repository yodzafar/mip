import styles from './home.module.scss'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { homeFeatures, homeSlider } from '../../data/home'
import { useTranslation } from 'react-i18next'
import { Col, Row } from 'ant-design-layout'
import {ReactComponent as ArrowRightIcon} from '../../assets/icons/arrow_right_icon.svg'

export const Home = () => {
  const {t} = useTranslation()
  return (
    <div className={styles.home}>
      <Splide
        options={{
          lazyLoad: true,
          arrows: false,
          autoplay: true,
          speed: 5000
        }}
        onPaginationMounted={(_, {items}) => {
          items.forEach(function(item) {
            item.button.textContent = `0${item.page + 1}`
          })
        }}
      >
        {
          homeSlider.map((item, idx) => (
            <SplideSlide key={`${idx + 1}`}>
              <div className={styles.slider_item} style={{backgroundImage: `url("${item.image}")`}}>
                <div className={`container ${styles.container}`}>
                  <div className={styles.heading}>
                    <p>
                      {`0${idx + 1}`}
                    </p>
                    <h2>
                      {t(item.title)}
                    </h2>
                    <a href='/'>
                      {t('more_detail')}
                      <ArrowRightIcon />
                    </a>
                  </div>
                  <Row style={{marginTop: 'auto'}} gutter={24}>
                    {
                      homeFeatures.map((feature, x) => {
                        const Icon = feature.icon
                        return (
                          <Col span={8} key={`${x + 1}`}>
                            <div className={styles.feature_item}>
                              <Icon />
                              <div>
                                <h6>
                                  {t(feature.title)}
                                </h6>
                                <p>
                                  {t(feature.text)}
                                </p>
                              </div>
                            </div>
                          </Col>
                        )
                      })
                    }
                  </Row>
                </div>
              </div>
            </SplideSlide>
          ))
        }
      </Splide>
    </div>
  )
}