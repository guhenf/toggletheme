import React, { useContext } from 'react'
import ReactSwitch from 'react-switch'
import { Container, Title } from './styles'
import { ThemeContext } from 'styled-components'

interface Props {
  toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)

  return (
    <Container>
      <Title>
        <h1>Switch theme com Styled components!</h1>
      </Title>
      <ReactSwitch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        onColor={colors.secundary}
        offColor='#f5f5f5'
      />
    </Container>
  )
}

export default Header
