import React from "react"
import { useLocalization, LocalizedLink } from "gatsby-theme-i18n"
import cn from "classnames"
import styles from "./language-switcher.module.scss"

export default function LanguageSwitcher() {
  const { locale, config } = useLocalization()

  // set original path
  let path = typeof window !== "undefined" ? window.location.pathname : ""
  config.forEach(item => (path = path.replace(`${item.code}/`, "")))

  return (
    <>
      {config.map(lang => (
        <LocalizedLink
          to={path}
          className={cn(
            styles.language,
            locale === lang.code ? styles.active : null
          )}
          key={lang.code}
          language={lang.code}
        >
          {lang.code.toUpperCase()}
        </LocalizedLink>
      ))}
    </>
  )
}
