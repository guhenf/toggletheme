import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background: ${(props) => props.theme.colors.header};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`

export const Title = styled.div`
  display: flex;
`
