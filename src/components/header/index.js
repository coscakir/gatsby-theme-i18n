import React from "react"
import Container from "../container"
import LanguageSwitcher from "../language-switcher"
import { LocalizedLink } from "gatsby-theme-i18n"
import { useIntl } from "react-intl"
import styles from "./header.module.scss"

export default function Header() {
  const { formatMessage } = useIntl()
  const t = id => formatMessage({ id })

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <LocalizedLink to="/">
          <strong>Logo</strong>
        </LocalizedLink>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li>
              <LocalizedLink to="/" activeClassName={styles.active}>
                {t("home")}
              </LocalizedLink>
            </li>
            <li>
              <LocalizedLink to="/about" activeClassName={styles.active}>
                {t("about")}
              </LocalizedLink>
            </li>
          </ul>
        </nav>
        <LanguageSwitcher />
      </Container>
    </header>
  )
}
