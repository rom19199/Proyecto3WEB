import React,{useState, useEffect} from 'react'
import {Link as LinkR, NavLink} from 'react-router-dom';
import {Link as Links} from 'react-scroll';
import {FaBars} from 'react-icons/fa'
import {Nav,NavbarContainer,MobileIcon,NavMenu,NavItem,NavLinks,NavLogo} from './navbarElement';

 const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(()=> {
        window.addEventListener('scroll', changeNav)
    },[])
    return (
        <>
        <Nav scrollNav = {scrollNav}>
            <NavbarContainer>
                <NavLogo to='/'>Portafolio</NavLogo>
               <MobileIcon onClick={toggle}>
                   <FaBars/>
               </MobileIcon>
               <NavMenu>
                   <NavItem>
                       <NavLinks 
                       activeClass="active"
                       to="portada"
                       spy={true}
                       smooth={true}
                       offset={-70}
                       duration={100}
                       >Portada
                       </NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks 
                       activeClass="active"
                       to="about"
                       spy={true}
                       smooth={true}
                       offset={-70}
                       duration={100}
                       >Acerca de mi
                       </NavLinks>
                   </NavItem>

                   
                   <NavItem>
                       <NavLinks 
                       activeClass="active"
                       to="experiencia"
                       spy={true}
                       smooth={true}
                       offset={-70}
                       duration={100}
                       >Experiencia
                       </NavLinks>
                   </NavItem>

                   <NavItem>
                       <NavLinks 
                       activeClass="active"
                       to="Proyectos"
                       spy={true}
                       smooth={true}
                       offset={-70}
                       duration={100}
                       >Proyectos
                       </NavLinks>
                   </NavItem>

                   <NavItem>
                       <NavLinks 
                       activeClass="active"
                       to="contacto"
                       spy={true}
                       smooth={true}
                       offset={-70}
                       duration={100}
                       >Contáctame
                       </NavLinks>
                   </NavItem>
                  
               </NavMenu>
            </NavbarContainer>
        </Nav>
            
        </>
    );
};

export default Navbar;
