import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import Title from "../components/title"
import { useIntl } from "react-intl"

export default function Home() {
  const { formatMessage } = useIntl()
  const t = id => formatMessage({ id })

  return (
    <>
      <SEO title={t("home")} />
      <Layout>
        <Container>
          <Title headingLevel="h1">{t("home")}</Title>
          <Title headingLevel="h3">{t("heroTitle")}</Title>
          <p>{t("heroDescription")}</p>
        </Container>
      </Layout>
    </>
  )
}
