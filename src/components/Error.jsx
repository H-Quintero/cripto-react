import styled from "@emotion/styled";

const Texto = styled.div`
  background-color: #B7322C;
  color: #fff;
  padding: 15px;
  font-size: 20px;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
`


const Error = ({ children }) => {
  return <Texto>{children}</Texto>;
};

export default Error;
