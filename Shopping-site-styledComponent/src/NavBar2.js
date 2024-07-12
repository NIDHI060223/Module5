import React from 'react'
import LogoImage from './assets/logo.png';
import { IoSearch, IoCartOutline } from "react-icons/io5";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsFire } from "react-icons/bs";
import { TbHeadset } from "react-icons/tb";
import styled from 'styled-components';

const ContainerFluid = styled.div`
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Navbar = styled.nav`
  width: 100%;
  display: flex;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
  padding: 1rem;
`;

const NavbarSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.justify || 'flex-start'};
  width: 100%;

  @media (min-width: 768px) {
    width: ${props => props.mdWidth || '33%'};
  }
`;

const NavbarBrand = styled.a`
  display: flex;
  align-items: center;
`;

const NavbarToggler = styled.button`
  display: block;
  background: none;
  border: none;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavbarCollapse = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Form = styled.form`
  display: flex;
  border: 3px solid #28a745;
  height: 60px;

  @media (max-width: 767px) {
    display: none;
  }
`;

const Select = styled.select`
  width: 200px;
  font-size: 23px;
  border: none;
`;

const Input = styled.input`
  flex: 1;
  font-size: 20px;
  border: none;
`;

const IconWrapper = styled.span`
  font-size: 24px;
  margin-top: 8px;
  margin-right: 16px;
`;

const NavbarNav = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 0 0.5rem;
  position: relative;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #000;
  display: flex;
  align-items: center;
  padding-left:43px;
  font-size:18px;

  &:hover {
    text-decoration: underline;
  }
`;

const Icon = styled.span`
  font-size: 30px;
`;

const Badge = styled.span`
  position: absolute;
  top: 0;
  right: -8px;
  transform: translate(-50%, -50%);
  padding: 2px;
  background: #28a745;
  border: 2px solid #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dropdown = styled.div`
  position: relative;
`;

const DropdownToggle = styled.a`
  display: flex;
  align-items: center;
  background: #3bb77e;
  color: #fff;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 0.25rem;
`;

const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  background: #fff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  padding: 0.5rem 0;
  list-style: none;
  z-index: 1;

  ${Dropdown}:hover & {
    display: block;
  }
`;

const DropdownItem = styled.li`
  padding: 0.5rem 1rem;
`;

const SupportWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SupportIcon = styled.span`
  font-size: 50px;
`;

const SupportText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
`;

const SupportNumber = styled.span`
  font-weight: bold;
  color: #3bb77e;
  font-size: 28px;
`;

const SupportDescription = styled.span`
  font-size: 14px;
`;

function NavBar2() {
    return (
        <ContainerFluid>
            <Row>
                <Navbar>
                    <NavbarSection>
                        <NavbarBrand href="w">
                            <img src={LogoImage} style={{ width: "200px" }} alt="logo" />
                        </NavbarBrand>
                    </NavbarSection>
                    <NavbarToggler type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </NavbarToggler>
                    <NavbarCollapse id="navbarTogglerDemo01">
                        <NavbarSection mdWidth="auto">
                            <Form>
                                <Select>
                                    <option>All Categories</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </Select>
                                <Input type="search" placeholder="Search" aria-label="Search" />
                                <IconWrapper><IoSearch /></IconWrapper>
                            </Form>
                        </NavbarSection>
                        <NavbarSection mdWidth="auto">
                            <NavbarNav>
                                <NavItem>
                                    <NavLink href="e">
                                        <Icon><IoIosGitCompare /></Icon>
                                        <Badge>0</Badge>
                                        <span className='ms-2' style={{ fontSize: "20px" }}>Compare</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="e">
                                        <Icon><FaRegHeart /></Icon>
                                        <Badge>0</Badge>
                                        <span className='ms-2' style={{ fontSize: "20px" }}>Wishlist</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="e">
                                        <Icon><IoCartOutline /></Icon>
                                        <Badge>0</Badge>
                                        <span className='ms-2' style={{ fontSize: "20px" }}>Cart</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="e">
                                        <Icon><FaRegUser /></Icon>
                                        <span className='ms-2' style={{ fontSize: "20px" }}>Account</span>
                                    </NavLink>
                                </NavItem>
                            </NavbarNav>
                        </NavbarSection>
                    </NavbarCollapse>
                </Navbar>
            </Row>
            <Row>
                <Navbar>
                    <NavbarSection mdWidth="auto">
                        <Dropdown>
                            <DropdownToggle href="categories-drop">
                                <AiOutlineAppstore style={{ fontSize: "23px" }} /> Browser All Categories
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem><a href="h">Action</a></DropdownItem>
                                <DropdownItem><a href="a">Another action</a></DropdownItem>
                                <DropdownItem><a href="d">Something else here</a></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarSection>
                    <NavbarSection mdWidth="auto" justify="center">
                        <NavbarNav>
                            <NavItem>
                                <NavLink href="hot-deal"><BsFire style={{ fontSize: "23px" }} />Hot Deals</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="home">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="shop">Shop</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="vendors">Vendors</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="mega-menu">Mega menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="blog">Blog</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="pages">Pages</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="contact">Contact</NavLink>
                            </NavItem>
                        </NavbarNav>
                    </NavbarSection>
                    <NavbarSection mdWidth="auto" justify="flex-end">
                        <SupportWrapper>
                            <SupportIcon><TbHeadset /></SupportIcon>
                            <SupportText>
                                <SupportNumber>1900-888</SupportNumber>
                                <SupportDescription>24/7 Support center</SupportDescription>
                            </SupportText>
                        </SupportWrapper>
                    </NavbarSection>
                </Navbar>
            </Row>
        </ContainerFluid>
    );
}

export default NavBar2;
