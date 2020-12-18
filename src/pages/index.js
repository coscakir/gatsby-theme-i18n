import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import Title from "../components/title"
import Button from "../components/button"
import { useLocalization, LocalesList } from "gatsby-theme-i18n"
import { useIntl } from "react-intl"
import Language from "../components/language"

export default function Home() {
  const intl = useIntl()

  const { locale, config, defaultLang } = useLocalization()

  return (
    <>
      <SEO />
      <Layout>
        <Container>
          <Title headingLevel="h1">Hello world!</Title>
          <Language />
          <Button>Hello</Button>
          <div>Current locale: {locale}</div>
          <div>Current defaultLang: {defaultLang}</div>
          <pre>{JSON.stringify(config, null, 2)}</pre>
          <LocalesList />
          {intl.formatMessage({ id: "home" })}
        </Container>
      </Layout>
    </>
  )
}
