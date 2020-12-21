import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import Title from "../components/title"
import Button from "../components/button"
import { useLocalization, LocalizedLink } from "gatsby-theme-i18n"
import { useIntl } from "react-intl"

export default function Home() {
  const intl = useIntl()
  const { locale, defaultLang } = useLocalization()

  return (
    <>
      <SEO />
      <Layout>
        <Container>
          <Title headingLevel="h1">Hello world!</Title>
          <Button>Hello</Button>
          <div>Current locale: {locale}</div>
          <div>Current defaultLang: {defaultLang}</div>
          {intl.formatMessage({ id: "home" })}
          <br />
          <LocalizedLink to="/about">
            {intl.formatMessage({ id: "about" })}
          </LocalizedLink>
        </Container>
      </Layout>
    </>
  )
}
