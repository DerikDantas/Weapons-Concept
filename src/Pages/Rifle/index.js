import React, {Component} from 'react';

import { Container } from './styles';

import Scar from '../../assets/images/scar.png'


function Rifle() {
  return (
    <Container>
      <div class="linha-um">
        <div class="container controls-arma">
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <p>FN SCAR</p>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>
      </div>

      <div class="linha-dois">
        <div class="container container-arma">
            <h1 class="nome-arma">FN SCAR</h1>
            <img src={Scar} class="img-scar" alt="..." />
        </div>
      </div>

      <div class="linha-tres blur-background">
        <div class="container hg-100 align-container">
          <h1>Characteristics</h1>
          <div class="row">
            <div class="col-md-4">
              <table>
                <tr>
                  <td>Lenght:</td>
                  <td><b>889 mm (35.0 in) - 635 mm (25.0 in)</b></td>
                </tr>
                <tr>
                  <td>Barrel length:</td>
                  <td><b>355 mm (14.0 in)</b></td>
                </tr>
              </table>
            </div>
            <div class="col-md-4">
              <table>
                <tr>
                  <td>Rate of fire:</td>
                  <td><b>625 RPM</b></td>
                </tr>
                <tr>
                  <td>Effective firing range:</td>
                  <td><b>500 m (550 yd)</b></td>
                </tr>
              </table>
            </div>
            <div class="col-md-4">
              <table>
                <tr>
                  <td>Mass:</td>
                  <td><b>3.29 kg (7.3 lb)</b></td>
                </tr>
                <tr>
                  <td>Cartridge:</td>
                  <td><b>5.56×45mm NATO</b></td>
                </tr>
              </table>
            </div>
          </div>

        </div>
      </div>
    </Container>
  );
}

export default Rifle;