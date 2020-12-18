import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import Title from "../components/title"
import Button from "../components/button"
import { useLocalization, LocalesList } from "gatsby-theme-i18n"

export default function Home() {
  const { locale, config, defaultLang } = useLocalization()

  return (
    <>
      <SEO />
      <Layout>
        <Container>
          <Title headingLevel="h1">Hello world!</Title>
          <Button>Hello</Button>
          <div>Current locale: {locale}</div>
          <div>Current defaultLang: {defaultLang}</div>
          <pre>{JSON.stringify(config, null, 2)}</pre>
          <LocalesList />
        </Container>
      </Layout>
    </>
  )
}
