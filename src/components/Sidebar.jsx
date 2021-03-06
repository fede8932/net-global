import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <CDBSidebar
      textColor="#fff"
      backgroundColor="#333"
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      //className="wrapper"
    >
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
        <a
          href="/"
          className="text-decoration-none"
          style={{ color: "inherit" }}
        >
          Menu
        </a>
      </CDBSidebarHeader>

      <CDBSidebarContent className="sidebar-content">
        <CDBSidebarMenu>
          <NavLink exact to="/clients" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="columns">Clientes</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/search/securities" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="columns">Vigiladores</CDBSidebarMenuItem>
          </NavLink>
          <NavLink
            exact
            to="/search/branchoffice"
            activeClassName="activeClicked"
          >
            <CDBSidebarMenuItem icon="columns">Sucursales</CDBSidebarMenuItem>
          </NavLink>

          <NavLink exact to="/set/client" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="table">Calendario</CDBSidebarMenuItem>
          </NavLink>


          <NavLink exact to="/assign" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="columns">Asignar Vigiladores</CDBSidebarMenuItem>
          </NavLink>

          <NavLink exact to="/states" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="columns">Estados de pedidos <br/> de ausencia</CDBSidebarMenuItem>
          </NavLink>
        
          {/* <NavLink exact to="/analytics" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="chart-line">Reportes</CDBSidebarMenuItem>
          </NavLink> */}

          <NavLink exact to="/register" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="columns">Registro</CDBSidebarMenuItem>
          </NavLink>
       
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  );
};

export default Sidebar;
