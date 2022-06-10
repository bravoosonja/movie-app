import React from "react";
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Footer.styles";
// Logos
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="logo" />
        </Link>
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Content>
    </Wrapper>
  );
};

export default Footer;
