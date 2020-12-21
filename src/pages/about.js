import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import Title from "../components/title"
import { useIntl } from "react-intl"

export default function About() {
  const { formatMessage } = useIntl()
  const t = id => formatMessage({ id })

  return (
    <>
      <SEO title={t("about")} />
      <Layout>
        <Container>
          <Title headingLevel="h1">{t("about")}</Title>
          <Title headingLevel="h3">{t("heroTitle")}</Title>
          <p>{t("heroDescription")}</p>
        </Container>
      </Layout>
    </>
  )
}
