import * as React from "react"
import "../css/index.css"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import Particles from "react-particles-js"

const particlesParams = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 2500
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "grab"
      },
      onclick: {
        enable: false,
        mode: "push"
      },
      resize: false
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
}

// markup
const IndexPage = () => {
  return (
    <main >

      <Particles id="particles-js" width="100%" height="100vh" params={particlesParams} style={{
        backgroundColor: "transparent",
        position: "absolute",
        width: "100%",
        height: "100%"
      }}></Particles>
      <Helmet>
          <meta charSet="utf-8" />
          <title>CZodiac - DeFi NFT Games on BSC</title>  
    <meta name="description" content= "Lucky portfolios with CZF, Chinese Zodiac NFTs and tokens, farming, defi, and games all on the BSC blockchain." />
    <meta name="robots" content= "index, follow" />
          <link rel="canonical" href="https://czodiac.com" />
<meta property="og:title" content="CZodiac - DeFi NFT Games on BSC" />
<meta property="og:image" content="../images/image6.jpg" />
<meta property="og:description" content="Lucky portfolios with CZF, Chinese Zodiac NFTs and tokens, farming, defi, and games all on the BSC blockchain." />
<meta property="og:url" content="https://czodiac.com" />
<meta name="twitter:card" content="../images/image6.jpg" />
       </Helmet>

      <nav>

      <StaticImage src="../images/logo.png" className="logo" alt="czodiac logo" />

      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <b className="fas fa-bars"></b>
      </label>

      <ul id="menu">
        
        <label htmlFor="check" className="closeBtn">
          <b >X</b>
        </label>
        <li><a href="#AboutCzodiac">About Czodiac</a></li>
        <li><a href="#CzodiacHunts">Czodiac Hunts</a></li>
        <li><a href="#TigerhuntFeatures">Tigerhunt features</a></li>
        <li><a href="#CzodiacTokenomics">Czodiac Tokenomics</a></li>
        <li><a href="#Czfarm">Czfarm</a></li>
        <li><a href="#OurTeam">Our Team</a></li>
        <li><a href="#ContactUs">Contact Us</a></li>
        <li><a className="btn-play" href="http://app.czodiac.com">Play Now</a></li>
        <br/>
      </ul>

      </nav>

      <div className="content">

      <div className="item">
      <div id="AboutCzodiac" className="jumpMarker" />

        <h2 >About Czodiac</h2>
        <br/>
        <StaticImage src="../images/image6.jpg" className="image" alt="about czodiac" />
        <br/><br/>
        <p>
          Chinese Zodiacs are believed to bring luck to those who truly believe. Many people around the globe believe in it’s power and plan their life according to what these signs tell them. We are on a mission to introduce a project that will ensure your crypto portfolio lucky!
          <br/><br/>Since we are in 2021, we will start with OX, and after each month instead of yearly swap we will do a token swap every 30days to the next Zodiac decreasing the supply 8:1 until we finish the 12 Chinese Zodiacs and will have a fixed supply of CZodiac Token.
        </p>

        <br/><br/>

        <div className="btn-redirect">
          <div className="btn"><a className="one" href="https://app.gitbook.com/@czodiac/s/czodiac-litepapper"><b>Whitepaper</b></a></div>
          <div className="btn"><a className="two" href="http://app.czodiac.com"><b>Farm & Pool</b></a></div>
        </div>

        <br/><br/>
      </div>
      <div className="item">
      <div id="CzodiacHunts" className="jumpMarker" />
        <h2 >Czodiac Hunts</h2>
        <br/>
        <p>
          Czodiac Hunts are simple dapp game with 12 czodiac tokens to earn Limited edition NFTs. The Holders of NFTs will receive share of all upcoming zodiac token and able to participate governance of project. 
          <br/><br/>Now, we are in Tigerhunt with tigz token. You stake your TIGZ token to obtain Tiger Hunt Points (TigHP) which is the point by which winner of the game will be decided.
        </p>
      </div>
      <div className="item">
      <div id="TigerhuntFeatures" className="jumpMarker" />
        <h2 >Tigerhunt features</h2>
        <br/>
        <p>
          Stake your TIGZ token to obtain Tiger Hunt Points (TigHP) To play the game 
        </p>
        <br/>
        <StaticImage className="image" src="../images/tiger-image2.jpg" alt="tigherhunt" />
        <br/>
        <br/>
        <p>
          Eat, Sleep, Drink, and Poop that lets you gain points based on your staked TIGZ.
        </p>
        <br/>
        <h3>
          Guard and Hunt
        </h3>
        <br/>
        <StaticImage className="image" src="../images/tiger-image1.jpg" alt="guarding" />
        <br/>
        <br/>
        <p>
          People with more TigHP can hunt you or you can hunt unprotected players to steal 5% of their TigHP and burn 5% more from them unless the player have a guard.
        </p>
      </div>

      <div className="play-btn-container">
        <a href="http://app.czodiac.com"><b>Play Now</b></a>
      </div>
      <div id="CzodiacTokenomics" className="jumpMarker" />
      <div className="item" >
        <h2 >Czodiac Tokenomics</h2>
        <br/>
        <p>
          The CZodiac Tokens start with OxZodiac, since 2021 is the year of the Ox. After each month instead of yearly swap we will do a token swap every 30 days to the next Zodiac decreasing the supply 8:1 until we finish the 12 Chinese Zodiac Sign and will have a fixed supply of CZodiac Token. Therefore in the that order you will have already witnessed the release of TigerZodiac. 
          <br/><br/>The Tiger Zodiac have already been released and had a warm welcome and very strong hold among the community. The upcoming token is RabbitZodiac
          <br/><br/>The czodiac ecosystem have three bep 20 tokens with different use cases now
        </p>
        <p>
          <b>Details</b>
          <ul>
            <li><b>Tigz:</b> Deflationary Reflect; 2.5% tx fee, 0.2% burn, 0.5% holders, 1.8% pools and events</li>
            <li><b>TigzHP:</b> Inflationary; increases when played, 5% burn on successful hunts</li>
            <li><b>CZF:</b> Inflationary; 888/block for farms, 50/block for dev team, up to 10m/month for pools</li>
          </ul>
        </p>

        
        <div className="tokens">
          <div className="token"><a href="https://bscscan.com/address/0x535874bfbecac5f235717faea7c26d01c67b38c5"><StaticImage src="../images/Tiger Logo.png" alt="tigz logo" /></a><p>Tigerzodiac</p></div>
          <div className="token"><a href="https://bscscan.com/address/0x7c1608C004F20c3520f70b924E2BfeF092dA0043"><StaticImage src="../images/czfarm logo.png" alt="czf logo" /></a><p>Czfarm</p></div>
          <div className="token"><a href="https://bscscan.com/token/0xDd2F98a97fc2A59b1f0f03DE63B4b41041a339B0"><StaticImage src="../images/tigerhp.png" alt="tigzhp logo" /></a><p>TigerHp</p></div>
        </div>
        <p className="token-contracts">
          <b>Contracts</b>
          <ul>
            <li><a href="https://bscscan.com/address/0x535874bfbecac5f235717faea7c26d01c67b38c5">TIGZ: 0x535874bfbecac5f235717faea7c26d01c67b38c5</a></li>
            <li><a href="https://bscscan.com/address/0x7c1608C004F20c3520f70b924E2BfeF092dA0043">CZF: 0x7c1608C004F20c3520f70b924E2BfeF092dA0043</a></li>
            <li><a href="https://bscscan.com/address/0xDd2F98a97fc2A59b1f0f03DE63B4b41041a339B0">TIGZHP: 0xDd2F98a97fc2A59b1f0f03DE63B4b41041a339B0</a></li>
          </ul>
        </p>
      </div>
      <br/>
      <div className="item">
        
      <div id="Czfarm" className="jumpMarker" />
        <h2 >Czfarm and CzUSD</h2>
        <br/>

        <StaticImage className="image" src="../images/czfarm.jpg" alt="czfarm" />
        <br/><br/>
        <p>
          CZFarm is a CZodiac farming token which can be used for earning rewards from PCS LP with CZUsd. It will enable the community to capture wealth via BUSD deposits into the CZUsd contract & allow the whole community to profit from the BUSD interest.
          <br/><br/>CZUSD is an algorithmic stablecoin overcollateralized with CZF. By using economically neutral algorithmic alterations to the LP pool, CZUSD is able to offer much lower borrow collateralization ratios for the same level of volatility of underlying capital. Since the protocol's economic token CZF is the same as the collateral token, undercollateralized debt does not need to be liquidated as the underlying CZF is effectively burned when debt goes unpaid. The combination of algorithmic stabilization with high volatiltiy collateral reduces the complexity of the code base compared to other lending platforms. Reduced complexity means a smaller attack surface for hackers, a lower chance for bugs, and a greater possibility for the safe addition of new features.
        </p>
      </div>

      <div className="our-team">
        
      <div id="OurTeam" className="jumpMarker" />
        <h2 >
          Our Team
        </h2>
        <StaticImage className="tm-border" src="../images/border-color.png" alt="Team" />
        <br/><br/>
        <div className="team-member">
          <StaticImage src="../images/admins/plastic 500x500.png" alt="Platic" />
          <h4>Plastic Digits</h4>
          <p>CEO & Lead Dev</p>
          <StaticImage className="border" src="../images/border_gray.png" alt="Plastic Digits Portrait" />
        </div>

        <div className="team-member">
          <StaticImage src="../images/admins/peter 500x500.png" alt="Peter" />
          <h4>Peter Gaven</h4>
          <p>Co COO & Community Manager</p>
          <StaticImage className="border" src="../images/border_gray.png" alt="Peter Gaven Portrait" />
        </div>

        <div className="team-member">
          <StaticImage src="../images/admins/rayoshi 500x500.png" alt="rayoshi" />
          <h4>Rayoshi</h4>
          <p>Co COO & Business Developer</p>
          <StaticImage className="border" src="../images/border_gray.png" alt="Rayoshi Portrait" />
        </div>

        <div className="team-member">
          <StaticImage src="../images/admins/500x500.png" alt="icashy" />
          <h4>Icashy</h4>
          <p>Graphic Artist</p>
          <StaticImage className="border" src="../images/border_gray.png" alt="Icashy Portrait" />
        </div>

        <div className="team-member">
          <StaticImage src="../images/admins/gourav 500x500.png" alt="Gourav Portrait"/>
          <h4>Gourav</h4>
          <p>Community Representative</p>
        </div>

      </div>


      <div className="social">
        
      <div id="ContactUs" className="jumpMarker" />
        <h2 >
          Contact Us
        </h2>
        <StaticImage className="tm-border" src="../images/border-color.png" alt="Contact" />
        <br/>
        <h4><a href="mailto:team@czodiac.com">team@czodiac.com</a></h4>
        <br/>
        <ul className="row">
          <li className="list-item">
            <div className="twitter"><a href="https://twitter.com/zodiacs_c"><StaticImage src="../images/twitter.png" alt="twitter" /></a></div>
          </li>
          <li className="list-item">
            <div className="discord"><a href="https://discord.gg/FEpu3xF2Hb"><StaticImage src="../images/discord.png" alt="discord" /></a></div>
          </li>
          <li className="list-item">
            <div className="medium"><a href="https://czodiacs.medium.com/"><StaticImage src="../images/medium.png" alt="medium" /></a></div>
          </li>
          <li className="list-item">
            <div className="github"><a href="https://github.com/chinese-zodiac/czodiac"><StaticImage src="../images/github.png" alt="github" /></a></div>
          </li>
          <li className="list-item">
            <div className="telegram"><a href="https://t.me/CZodiacofficial"><StaticImage src="../images/telegram.png" alt="telegram" /></a></div>
          </li>

        </ul>
      </div>
      </div>
      <br/><br/>
    </main>
  )
}

export default IndexPage
