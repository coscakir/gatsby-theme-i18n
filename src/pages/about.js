import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import Title from "../components/title"
import { useIntl } from "react-intl"
import { LocalizedLink } from "gatsby-theme-i18n"

export default function About() {
  const intl = useIntl()

  return (
    <>
      <SEO />
      <Layout>
        <Container>
          <Title headingLevel="h1">{intl.formatMessage({ id: "about" })}</Title>
          <LocalizedLink to="/">
            {intl.formatMessage({ id: "home" })}
          </LocalizedLink>
        </Container>
      </Layout>
    </>
  )
}
