import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  margin: 0px 5px;
  padding: 0px 5px;
`;

function Image(props) {
  return <StyledImage src={props.src}></StyledImage>
}

export default Image;
