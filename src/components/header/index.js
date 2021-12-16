import styles from './header.module.scss'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import { ReactComponent as ArrowDownIcon } from '../../assets/icons/arrow_down_icon.svg'
import { lang, menu } from '../../data/header'
import { useCallback, useMemo, useState } from 'react'
import i18n from '../../lang';
import { useTranslation } from 'react-i18next'

export const Header = () => {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('ru')
  const {t} = useTranslation()

  const langTitle = useMemo(() => {
    return lang.find(item => item.id === currentLang).title
  }, [currentLang])

  const handleClick = useCallback((lang) => {
    i18n.changeLanguage(lang)
      .then(() => {
        setCurrentLang(lang)
      })
  }, [])

  return (
    <header className={styles.header}>
      <div>
        <div className='container'>
          <div className={styles.header_wrapper}>
            <a href='/'>
              <Logo />
            </a>
            <ul className={styles.menu}>
              {
                menu.map(item => (
                  <li
                    key={item.id}
                    onClick={() => setActive(item.id)}
                    className={`${styles.menu_item}${active === item.id ? ` ${styles.active}` : ''}`}
                  >
                    <a href={`#${item.id}`}>
                      {t(item.title)}
                    </a>
                  </li>
                ))
              }
            </ul>
            <div className={styles.dropdown}>
              <button className={styles.dropdown_btn} onClick={() => setOpen(!open)}>
                {langTitle}
                <ArrowDownIcon />
              </button>
              <ul className={`${styles.dropdown_menu}${open ? ` ${styles.active}` : ''}`}>
                {
                  lang.map(item => (
                    <li key={item.id} onClick={() => handleClick(item.id)}>
                      {item.title}
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}