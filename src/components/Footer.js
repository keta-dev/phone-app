import React from 'react';
import styled from "styled-components";

function Footer() {
  return (
    <NavWrapper>
      <p>Created 2021 by keta-dev</p>
    </NavWrapper>
  )
}

export default Footer;


const NavWrapper = styled.nav`
    background: var(--mainBlue);
    color: #ffffff;
    text-align: center;
`;
