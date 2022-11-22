import { StyledMain } from './styles'

const Main = () => {
  return (
    <StyledMain>
      <h2>Criacao de uma base com light e dark mode.</h2>
      <ul>
        <h2>Tecnologias utilizadas</h2>
        <li>Typescript</li>
        <li>ReactJS</li>
        <li>ViteJS</li>
        <li>Styled-components</li>
      </ul>
      <p>Utilizado uma lib externa de switch button.</p>
      <p>
        O estado do tema e armazenado no localStorage para que permaneca na
        atulizacao de pagina.
      </p>
    </StyledMain>
  )
}

export default Main
