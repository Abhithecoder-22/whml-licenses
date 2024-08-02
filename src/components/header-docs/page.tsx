import React from 'react';

const HeaderDocs = () => {``
  return (
    <header id="header" className="sticky-top">
      <nav className="primary-menu navbar navbar-expand-lg navbar-dropdown-dark">
        <div className="container-fluid">
          <button id="sidebarCollapse" className="navbar-toggler d-block d-md-none" type="button">
            <span></span><span className="w-75"></span><span className="w-50"></span>
          </button>
          <a className="logoz" href="index.html" title="iDocs Template">
            <img src="assets/images/slogo.png" alt="iDocs Template" />
          </a>
          <span className="text-2 ml-2">v2.0</span>
          <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#header-nav">
            <span></span><span></span><span></span>
          </button>
          <div id="header-nav" className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li><a className="dropdown-toggle" href="#">Home</a></li>
              <li className="dropdown">
                <a className="dropdown-toggle" href="#">Packages</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" target="_blank" href="#">Buy Licenses</a></li>
                  <li><a className="dropdown-item" target="_blank" href="#">Get Resellers</a></li>
                </ul>
              </li>
              <li><a target="_blank" href="#">TOS</a></li>
              <li><a className="nav-linkspp" href="#SysLic_support">Support</a></li>
            </ul>
          </div>
          <ul className="social-icons social-icons-sm ml-lg-2 mr-2">
            <li className="social-icons-facebook"><a data-toggle="tooltip" href="#" target="_blank" title="Facebook"><i className="fab fa-facebook"></i></a></li>
            <li className="social-icons-whatsapp"><a data-toggle="tooltip" href="#" target="_blank" title="WhatsApp"><i className="fab fa-whatsapp"></i></a></li>
            <li className="social-icons-telegram"><a data-toggle="tooltip" href="#" target="_blank" title="Telegram Channel"><i className="fab fa-telegram-plane"></i></a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HeaderDocs;
