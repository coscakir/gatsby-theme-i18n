import React from "react"
import Container from "../container"
import LanguageSwitcher from "../language-switcher"

export default function Header() {
  return (
    <header>
      <Container>
        <LanguageSwitcher />
      </Container>
    </header>
  )
}
