import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import avatar from 'url:../../../public/avatar.png';

import { themeContext } from '../Context/themeContext';
import {
  Dropdown,
  DropdownButton,
  DropdownContent,
  DropdownLink,
} from '../Dropdown';
import { BottomArrow } from '../Svg/BottomArrow';
import { Bell } from '../Svg/Bell';

export const Navbar = () => {
  const { colors } = useContext(themeContext);

  return (
    <Container theme={colors}>

      <NavLeft>
        <Logo>
          <img
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
            alt="Workflow"
          />
        </Logo>
        <NavList>
          <NavLink to="/" theme={colors}>
            Home
          </NavLink>
          <Dropdown>
            <DropdownButton theme={colors}>
              Save &nbsp;
              <BottomArrow />
            </DropdownButton>
            <DropdownContent>
              <DropdownLink to="/" theme={colors}>
                Test 1
              </DropdownLink>
              <DropdownLink to="/" theme={colors}>
                Test 2
              </DropdownLink>
            </DropdownContent>
          </Dropdown>
        </NavList>
      </NavLeft>

    </Container>
  );
};

/*
<AccountInfos>
<Bell />
<Avatar src={avatar} alt="Avatar" className="avatar" />
</AccountInfos>
*/

const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 0;
`;

const NavLink = styled(Link)`
  padding: 0.6rem 1rem;
  margin: 0 0.6rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    color: white;
  }
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
`;

const AccountInfos = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 2rem;
`;

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  color: ${({ theme }) => theme.text};
  border-bottom: 1px solid #343e4e;
  margin-bottom: 3.5rem;
`;
