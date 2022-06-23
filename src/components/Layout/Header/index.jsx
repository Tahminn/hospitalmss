import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, Form, Input, Button, Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";
import Notifications from "../Header/Notifications";
import ProfileMenu from "../Header/ProfileMenu";



//will be deleted
import logoSm from "../../../assets/images/logo-sm.png";
import logoDark from "../../../assets/images/logo-dark.png";
import logoLight from "../../../assets/images/logo-light.png";
// import github from "../../assets/images/brands/github.png";
// import bitbucket from "../../assets/images/brands/bitbucket.png";
// import dribbble from "../../assets/images/brands/dribbble.png";
// import dropbox from "../../assets/images/brands/dropbox.png";
// import mail_chimp from "../../assets/images/brands/mail_chimp.png";
// import slack from "../../assets/images/brands/slack.png";
// import Background from "../../assets/images/megamenu-img.png";



function toggleFullscreen() {
  if (
    !document.fullscreenElement &&
    /* alternative standard method */ !document.mozFullScreenElement &&
    !document.webkitFullscreenElement
  ) {
    // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(
        Element.ALLOW_KEYBOARD_INPUT
      );
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}

function tToggle() {
  var body = document.body;
  if (window.screen.width <= 768) {
    body.classList.toggle("sidebar-enable");
  } else {
    body.classList.toggle("vertical-collpsed");
    body.classList.toggle("sidebar-enable");
  }
}

function Header() {
  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <Container fluid>
            <div className="float-end">
              <Dropdown
                className="d-inline-block d-lg-none ms-2"
                onClick={() => {
                  // setsearch(!search);
                }}
                type="button"
              >
                <DropdownToggle
                  className="btn header-item noti-icon waves-effect"
                  id="page-header-search-dropdown"
                  tag="button"
                >
                  <i className="mdi mdi-magnify"></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
                  <Form className="p-3">
                    <div className="m-0">
                      <div className="input-group">
                        <Input
                          type="text"
                          className="form-control"
                          placeholder="Search ..."
                          aria-label="Recipient's username"
                        />
                        <div className="input-group-append">
                          <Button className="btn btn-primary" type="submit">
                            <i className="mdi mdi-magnify"></i>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Form>
                </DropdownMenu>
              </Dropdown>
              {/* <LanguageDropdown /> */}
              <Dropdown className="d-none d-lg-inline-block ms-1">
                <button
                  type="button"
                  onClick={() => {
                    toggleFullscreen();
                  }}
                  className="btn header-item noti-icon waves-effect"
                  data-toggle="fullscreen"
                >
                  <i className="mdi mdi-fullscreen"></i>
                </button>
              </Dropdown>
              <Notifications/> <ProfileMenu />
            </div>
            <div>
              <div className="navbar-brand-box">
                <Link to="/" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src={logoLight} alt="" height="20" />
                  </span>
                  <span className="logo-lg">
                    <img src={logoLight} alt="" height="19" />
                  </span>
                </Link>

                <Link to="/" className="logo logo-light">
                  <span className="logo-sm">
                    <img src={logoLight} alt="" height="20" />
                  </span>
                  <span className="logo-lg">
                    <img src={logoLight} alt="" height="19" />
                  </span>
                </Link>
              </div>
              <button
                type="button"
                className="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light"
                data-toggle="collapse"
                onClick={() => {
                  tToggle()
                }}
                data-target="#topnav-menu-content"
              >
                <i className="fa fa-fw fa-bars"></i>
              </button>
              <Form className="app-search d-none d-lg-inline-block">
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <span className="bx bx-search-alt"></span>
                </div>
              </Form>
            </div>
          </Container>
        </div>
      </header>
    </React.Fragment>

  )
}

export default Header