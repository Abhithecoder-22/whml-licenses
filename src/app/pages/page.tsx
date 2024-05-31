"use client";

import React, { useEffect } from 'react';
import './page.css';
import { Button } from '@/components/ui/button'; 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeSwitch } from '@/components/theme-provider';

const Page = () => {
  useEffect(() => {
    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav-menu');

    const showMenu = () => {
      nav?.classList.toggle('show-menu');
      toggle?.classList.toggle('show-icon');
    };

    toggle?.addEventListener('click', showMenu);

    return () => {
      toggle?.removeEventListener('click', showMenu);
    };
  }, []);

  return (
    <div>
      {/* <!--=============== HEADER ===============--> */}
      <header className="header">
        <nav className="nav container">
          <div className="nav__data">
            <a href="#" className="nav__logo">
              <i className="ri-planet-line"></i> WHM <span className='blue-txt'>LICENSE</span>
            </a>

            <div className="nav__toggle" id="nav-toggle">
              <i className="ri-menu-line nav__burger"></i>
              <i className="ri-close-line nav__close"></i>
            </div>
          </div>

          {/* <!--=============== NAV MENU ===============--> */}
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li><a href="#" className="nav__link">Home</a></li>
              <li><a href="#" className="nav__link">Licenses</a></li>
              {/* <!--=============== DROPDOWN 1 ===============--> */}
              {/* <li className="dropdown__item">
                <div className="nav__link">
                  Analytics <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>

                <ul className="dropdown__menu">
                  <li>
                    <a href="#" className="dropdown__link">
                      <i className="ri-pie-chart-line"></i> Overview
                    </a>                          
                  </li>
                  <li>
                    <a href="#" className="dropdown__link">
                      <i className="ri-arrow-up-down-line"></i> Transactions
                    </a>
                  </li>
                  <li className="dropdown__subitem">
                    <div className="dropdown__link">
                      <i className="ri-bar-chart-line"></i> Reports <i className="ri-add-line dropdown__add"></i>
                    </div>
                    <ul className="dropdown__submenu">
                      <li>
                        <a href="#" className="dropdown__sublink">
                          <i className="ri-file-list-line"></i> Documents
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown__sublink">
                          <i className="ri-cash-line"></i> Payments
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown__sublink">
                          <i className="ri-refund-2-line"></i> Refunds
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li> */}
              <li><a href="#" className="nav__link">Whatsapp</a></li>

              {/* <!--=============== DROPDOWN 2 ===============--> */}
              {/* <li className="dropdown__item">
                <div className="nav__link">
                  Resources <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>
                <ul className="dropdown__menu">
                  <li>
                    <a href="#" className="dropdown__link">
                      <i className="ri-user-line"></i> FAQ
                    </a>                          
                  </li>
                  <li>
                    <a href="#" className="dropdown__link">
                      <i className="ri-lock-line"></i> Support us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown__link">
                      <i className="ri-message-3-line"></i> Contact us
                    </a>
                  </li>
                </ul>
              </li> */}
              <li className="dropdown__item">
              <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="nav__link" >
        <Button   variant="default">Open <i className="ri-arrow-down-s-line dropdown__arrow"></i>  </Button>
        </div>
        {/* <div className="nav__link">
                  Resources <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            FAQ
            <DropdownMenuShortcut><i className="ri-questionnaire-line drop-icons"></i></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Contact US
            <DropdownMenuShortcut><i className="ri-contacts-book-3-line drop-icons"></i></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Support
            <DropdownMenuShortcut><i className="ri-questionnaire-line drop-icons"></i></DropdownMenuShortcut>
          </DropdownMenuItem>
          
        </DropdownMenuGroup>



      </DropdownMenuContent>
    </DropdownMenu>
    </li>
              <li><a href="#" className="nav__link">Client area</a></li>
              <li><a href="#" className="nav__links"><ThemeSwitch/></a></li>
            </ul>
          </div>
        </nav>
      </header>

      


      
    </div>
  );
};

export default Page;
