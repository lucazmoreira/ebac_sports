import * as S from './styles'

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear()
  }

  return (
    <S.Footer>
      <p>
        {getYear()} - &copy;
        <a href="https://github.com/lucazmoreira">
          <strong> Lucas Moreira</strong>
        </a>{' '}
        - Todos os direitos reservados
      </p>
    </S.Footer>
  )
}

export default Footer
