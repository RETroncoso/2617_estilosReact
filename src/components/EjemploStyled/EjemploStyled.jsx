import React from 'react'
import { PHeredado, StyledButton, StyledContainer, StyledH4, StyledP } from './EjemploStyledStyles'

const EjemploStyled = () => {
  return (
    <StyledContainer>
        <StyledH4>Soy un H4 con styled components</StyledH4>
        <StyledP>Soy un p con styled components</StyledP>
        <PHeredado>Soy un P con estilos heredados</PHeredado>
        <h3>Holis</h3>
        <StyledButton>Soy un botón</StyledButton>
        <StyledButton color width={"200px"}>Soy un botón con props</StyledButton>
    </StyledContainer>
  )
}

export default EjemploStyled