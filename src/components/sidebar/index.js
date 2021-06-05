import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarMenu,SideBtnWrap, SidebarRoute} from './sidebarElements';

 const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick = {toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="portada" onClick={toggle}>Portada</SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>Acerca de mi</SidebarLink>
                    <SidebarLink to="proyectos" onClick={toggle}>Proyectos</SidebarLink>
                    <SidebarLink to="contacto" onClick={toggle}>Contacto</SidebarLink>
                </SidebarMenu>
                

            </SidebarWrapper>
        </SidebarContainer>
    );
};
export default Sidebar;
