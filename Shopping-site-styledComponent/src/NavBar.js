import React from 'react'
import { FaEarthAmericas } from "react-icons/fa6";
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
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
`;

const NavbarSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => props.justify || 'flex-start'};
    width: 33%;
`;

const NavbarNav = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
`;

const NavItem = styled.li`
    margin: 0 0.5rem;
    border-right: ${props => props.noBorder ? 'none' : '1px solid #ddd'};
    padding-right: ${props => props.noBorder ? '0' : '0.5rem'};
    
    &:last-child {
        border-right: none;
    }
`;

const NavLink = styled.a`
    text-decoration: none;
    color: #000;
    
    &:hover {
        text-decoration: underline;
    }
`;

const Message = styled.p`
    margin: 0;
    padding: 0 0.5rem;
`;

const CallUs = styled.div`
    display: flex;
    align-items: center;
    border-right: 1px solid #ddd;
    padding-right: 0.5rem;
`;

const LangDropdown = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0.5rem;
    border-right: 1px solid #ddd;
    padding-right: 0.5rem;
`;

const Dropdown = styled.div`
    position: relative;
    display: inline-block;
`;

const DropdownContent = styled.ul`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 0.5rem 0;
    z-index: 1;
    list-style: none;

    ${Dropdown}:hover & {
        display: block;
    }
`;

const DropdownItem = styled.li`
    padding: 0.5rem 1rem;
`;

const DropdownLink = styled.a`
    text-decoration: none;
    color: #000;

    &:hover {
        background-color: #ddd;
    }
`;

function NavBar() {
    return (
        <ContainerFluid>
            <Row>
                <Navbar>
                    <NavbarSection>
                        <NavbarNav>
                            <NavItem>
                                <NavLink href="about">About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="account">My Account</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="wishlist">Wishlist</NavLink>
                            </NavItem>
                            <NavItem noBorder>
                                <NavLink href="order-tracking">Order Tracking</NavLink>
                            </NavItem>
                        </NavbarNav>
                    </NavbarSection>

                    <NavbarSection justify="center">
                        <Message>Get great devices up to 50% off</Message>
                        <NavLink href="view-details" className="text-success">View Details</NavLink>
                    </NavbarSection>

                    <NavbarSection justify="flex-end">
                        <CallUs>
                            <Message>Need help? Call Us:<span className='text-success'>+ 1800 900</span></Message>
                        </CallUs>

                        <LangDropdown>
                            <FaEarthAmericas />
                            <Dropdown>
                                <NavLink href="Usd">English</NavLink>
                                <DropdownContent>
                                    <DropdownItem><DropdownLink href="francais">Francais</DropdownLink></DropdownItem>
                                    <DropdownItem><DropdownLink href="deutsche">Deutsche</DropdownLink></DropdownItem>
                                    <DropdownItem><DropdownLink href="hindi">Hindi</DropdownLink></DropdownItem>
                                </DropdownContent>
                            </Dropdown>
                        </LangDropdown>

                        <Dropdown>
                            <NavLink href="Usd">USD</NavLink>
                            <DropdownContent>
                                <DropdownItem><DropdownLink href="a">INR</DropdownLink></DropdownItem>
                                <DropdownItem><DropdownLink href="s">MBP</DropdownLink></DropdownItem>
                                <DropdownItem><DropdownLink href="d">EU</DropdownLink></DropdownItem>
                            </DropdownContent>
                        </Dropdown>
                    </NavbarSection>
                </Navbar>
            </Row>
        </ContainerFluid>
    );
}

export default NavBar;
