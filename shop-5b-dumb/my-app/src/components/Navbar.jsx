/************************************/
/*******Created by : AliSwilam*******/
/************************************/
import { Badge } from '@material-ui/core'; // To Get Logo of Badge "Number "
import { Search, ShoppingCartOutlined } from '@material-ui/icons'; // to Get Logo of Search & Cart
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom';


const Container = styled.div`
    height:60px ;
    ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-item: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}

`;
// flex :1 to make the width equal between them "it divide them by presantage"
// Component of Left side
const Left = styled.div`
    flex :1 ;
    display : flex; 
    align-item: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    margin: 10px 0px;
    ${mobile({ display: "none" })}

`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

`;

const Input = styled.input`
    border : none ;
    ${mobile({ width: "50px" })}

`;
// Component of Center side
const Center = styled.div`
    flex :1 ;
    text-align: center; 
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "20px" })}
    text-decoration: none;

`;
// Component of Right side
const Right = styled.div`
    flex :1 ; 
    display : flex ;
    align-item: center;
    justify-content:flex-end;
    ${mobile({flex:2, justifyContent: "center" })}


`;
    /// MenuBar Component
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "8px", marginLeft:"10px" })}

  `;

const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)

  return (
    <Container>
        <Wrapper>

        <Left>
            <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search' />
                    <Search style={{color: "grey", fontSize:16}}/>
                </SearchContainer>

        </Left>


        <Center>
        <Link to="../admin/home/Home">
            <Logo >A7LAWY</Logo>
            </Link>
            </Center>


        <Right>
            <Link to="/register">
                <MenuItem>REGISTER</MenuItem>
            </Link>
            <Link to="/login">
                <MenuItem>SIGN IN</MenuItem>
            </Link>
            <Link to="/cart">
            <MenuItem>
            <Badge badgeContent={quantity} color="primary"> 
                <ShoppingCartOutlined />
             </Badge>
            </MenuItem>
            </Link>
        </Right>

        </Wrapper> 
    </Container>
  )
}

export default Navbar
