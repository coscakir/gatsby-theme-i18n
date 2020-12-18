import React from "react"
import { useLocalization } from "gatsby-theme-i18n"

import {} from "react-intl"

export default function Language() {
  const { locale, config } = useLocalization()
  console.log(changeLocale)
  return (
    <>
      {config.map(lang => (
        <button
          className={locale === lang.code ? "active" : null}
          key={lang.code}
          onClick={e => changeLocale(lang.code)}
        >
          {lang.name}
        </button>
      ))}
    </>
  )
}
