import React from 'react';

import { Container } from './styles';

import logo from '../../assets/images/logo.png'
import sniper from '../../assets/images/sniper.png'
import rifle from '../../assets/images/rifle.png'
import smg from '../../assets/images/smg.png'
import pistol from '../../assets/images/pistol.png'

function Navbar() {
  return (
    <Container>
        <div class="row linha-nav">
            <div class="logo">
                <a href="/">
                    <img src={logo} alt="..." />
                </a>
            </div>
            <div class="links-nav">
                    <div class="menu-nav">
                        <a href="/sniper">
                            <img src={sniper} alt="..." />
                            <span>Sniper Rifle</span>
                        </a>
                    </div>
                    <div class="menu-nav">
                            <img src={rifle} alt="..." />
                            <span>Rifle</span>
                        <div class="sub-menu">
                            <a href="/rifle">
                                <span>FN SCAR</span>
                            </a>
                            <a href="/rifle/AK">
                                <span>AK-47</span>
                            </a>
                        </div>
                    </div>
                    <div class="menu-nav">
                        <a href="/smg">
                            <img src={smg} alt="..." />
                            <span>SMG</span>
                        </a>
                    </div>
                    <div class="menu-nav">
                        <a href="/pistol">
                            <img src={pistol} alt="..." />
                            <span>Pistol</span>
                        </a>
                    </div>
            </div>
        </div>
    </Container>
    )
}

export default Navbar;