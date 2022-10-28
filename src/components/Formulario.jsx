import React from 'react'
import styled from '@emotion/styled'

const ImputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .5s ease;
  
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`

const Formulario = () => {
  return (
    <forma>
      
      <ImputSubmit 
        type='submit' 
        value='cotizar'
      />
    </forma>
  )
}

export default Formulario