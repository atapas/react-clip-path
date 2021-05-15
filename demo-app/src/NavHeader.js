import React, { useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Aperture, Plus } from "react-feather";
import styled from "styled-components";
import IconLink from "./IconLink";
import CreateShape from "./CreateShape";

import github from "./icons/github.png";
import npm from "./icons/npm.png";

const Heading = styled.span`
  vertical-align: middle;
  text-transform: uppercase;
`;

const CreateLink = styled.a`
  cursor: pointer;
`;

const iconLinks = [
  {
    link: "https://github.com/atapas/react-clip-path/tree/master/demo-app",
    icon: github,
    height: "50px",
    title: "Source Code",
  },
  {
    link: "https://www.npmjs.com/package/react-clip-path",
    icon: npm,
    height: "40px",
    title: "Download the NPM Package",
  },
];

const NavHeader = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const create = () => {
    console.log("Create");
    setShowCreateModal(true);
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <Aperture /> <Heading>React Clip Path</Heading>
      </Navbar.Brand>
      <Nav className="mr-auto" />
      <CreateLink onClick={create}>
        <Plus size={35} color="#FFFFFF" />
      </CreateLink>
      {iconLinks.map((item, index) => (
        <IconLink key={index} info={item} />
      ))}
      <CreateShape show={showCreateModal} 
        handleClose={() => {
          setShowCreateModal(false); 
        }}/>
    </Navbar>
  );
};

export default NavHeader;
