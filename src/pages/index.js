import * as React from "react"
import { useEffect, useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (<div>
    <main >

      <nav>
        <StaticImage src="../images/logo.png" className="logo" alt="czodiac logo" />
        <input type="checkbox" id="check" onChange={()=>setIsMenuOpen(!isMenuOpen)} checked={isMenuOpen} />
        <label htmlFor="check" className="checkbtn">
          <b className="fas fa-bars"></b>
        </label>
        <div id="menu">
        <label htmlFor="check" className="closeBtn">
            <b >X</b>
          </label>
          <ul>
            <li><a href="#AboutCzodiac" onClick={()=>setIsMenuOpen(false)}>About Czodiac</a></li>
            <li><a href="#CzodiacTokenomics" onClick={()=>setIsMenuOpen(false)}>Czodiac Tokenomics</a></li>
            <li><a href="#Czfarm" onClick={()=>setIsMenuOpen(false)}>Czfarm</a></li>
            <li><a href="#OurTeam" onClick={()=>setIsMenuOpen(false)}>Our Team</a></li>
            <li><a href="#ContactUs" onClick={()=>setIsMenuOpen(false)}>Contact Us</a></li>
            <li><a className="btn-play" href="http://app.czodiac.com" onClick={()=>setIsMenuOpen(false)}>Play Now</a></li>
            <br/>
          </ul>
        </div>
      </nav>

      <div className="content">

        <div className="item">
          <div id="AboutCzodiac" className="jumpMarker" />
          <h2 >About Czodiac</h2>
          <br/>
          <StaticImage src="../images/image6.jpg" className="image" alt="about czodiac" />
          <br/><br/>

          <div className="btn-redirect">
            <div className="btn"><a className="one" href="https://czodiac.gitbook.io/czodiac-litepapper/"><b>Whitepaper</b></a></div>
            <div className="btn"><a className="two" href="http://app.czodiac.com"><b>Farm &amp; Pool</b></a></div>
          </div>
          <br/><br/>
          <p >
            CZodiac's <a href="https://app.czodiac.com/">defi
            dapps at app.czodiac.com</a> empower
            the community to earn high interest with <a href="https://bscscan.com/token/0x7c1608C004F20c3520f70b924E2BfeF092dA0043">CZF 
            (Chinese Zodiac Farming Token)</a>. These
            rates are created by actual returns of capital instead of the low
            rates set by goverment decree in traditional finance. It does so
            through several major innovations.
            </p><br/>
            <ul>
              <li><p ><strong>Exotic
              Farms: </strong>Deliver LP and earn vesting CZF every second with no
              Impermanent Loss (IL). Delivered LP is transferred to the protocol's
              treasury, creating a rising price floor.</p></li>
              <li><p ><strong>Chrono
              Pools: </strong>Defi v2 style pools with per block vesting. Users
              stake CZF to earn other tokens each block. Fast Forward delivers
              rewards from the future into the present at a discount. 
              </p></li>
              <li><p ><strong>Stim
              Farms: </strong>Defi v2 style farms inspired by Olympus Dao (OHM).
              Users deliver LP tokens to the protocol in exchange for high APY and
              their deposit returned as CZF after 1 week. Purges toxic LP from v1
              farms and provides higher quality liquidity. 
              </p></li>
              <li><p ><strong>Farms
              v1</strong>: Farms which increase CZF liquidity while simultaneously
              locking CZF. All farms are against CZF pairs meaning farmers are
              rewarded with high APR for supporting CZF instead of dumping. 
              </p></li>
              <li><p ><strong>Antidump
              Vaults</strong>: Single asset vaults which earn high APY without
              selling any tokens. Vault depositers can earn APY on the base asset
              (such as BNB) with CZF on top. The protocol tokens earned are packed
              into Pools. 
              </p></li>
              <li><p ><strong>Scorch
              Peg</strong>: Automatically pegs CZUSD to $1 by burning CZF. The peg
              deposits trading profits from holding the peg into vaults to earn
              interest. This interest is then used to burn CZF, reducing supply. 
              </p></li>
              <li><p ><strong>Pools
              v1</strong>: Tokens collected from dapps and partners are then
              distributed to CZF stakers via pools with high APR. 
              </p></li>
              <li><p ><strong>Exempt
              Borrow</strong>: Deposit CZF to borrow up to 75% of the value in
              CZUSD. All borrows are exempt from interest and liquidation. Users
              can leverage their CZF to gain increased price exposure without the
              risk of losing their underlying capital. 
              </p></li>
              <li><p ><strong>Catalytic
              Development</strong>: CZodiac community members building products
              receive a salary directly tied to the value of CZF. These
              development incentives catalyze products that increase the value of
              CZF. 
              </p></li>
            </ul>
            <p ><br/>
            More features
            are under development by devs from the CZodiac community. These
            include <strong>Dynamic Emissions</strong>, <strong>Chrono Pools</strong>,
            <strong>Exotic Auctions</strong>, <strong>NFT Staking v1</strong>,
            <strong>Robo Pools</strong> and<strong> Allotment Voting</strong>. <br/>
            <br/>
            <br/>

            </p>
        </div>
        <div className="item" >
          <div id="CzodiacTokenomics" className="jumpMarker" />
          <h2 >Czodiac Tokenomics</h2>
          <ul>
            <li><b>CZF:</b> Inflationary; emission rate fluctuates based on demand.</li>
            <li><b>CZUSD:</b> Stablecoin; Algorithmic peg to $1 BUSD, overcollateralized debt with 0 fees, liquidations, interest.</li>
          </ul>          
          <div className="tokens">
            <div className="token"><a href="https://bscscan.com/address/0x7c1608C004F20c3520f70b924E2BfeF092dA0043"><StaticImage src="../images/czfarm logo.png" alt="czf logo" /></a><p>Czfarm</p></div>
            <div className="token"><a href="https://bscscan.com/token/0xe68b79e51bf826534ff37aa9cee71a3842ee9c70"><StaticImage src="../images/czusd-logo.png" alt="czusd logo" /></a><p>CZUSD</p></div>
          </div>
          <p className="token-contracts">
            <b>Contracts</b>
          </p>
          <ul className="contracts">
            <li><a href="https://bscscan.com/address/0x7c1608C004F20c3520f70b924E2BfeF092dA0043">CZF: &nbsp;&nbsp;&nbsp;0x7c1608C004F20c3520f70b924E2BfeF092dA0043</a></li>
            <li><a href="https://bscscan.com/address/0xe68b79e51bf826534ff37aa9cee71a3842ee9c70">CZUSD: 0xe68b79e51bf826534ff37aa9cee71a3842ee9c70</a></li>
          </ul>
        </div>
        <div className="item">
          
          <div id="Czfarm" className="jumpMarker" />
          <h2 >CZFarm and CZUSD</h2>
          <br/>

          <StaticImage className="image" src="../images/czfarm.jpg" alt="czfarm" />
          <br/><br/>
          <p>
            CZF is the protocol token for CZodiac. It is earned as rewards in Stim Farms and Pack Vaults. It is staked as liquidity in farms and as an asset in pools earning various tokens. It is an inflationary token whose supply is set by a balance between minting and burning. The total supply of CZF is expected to never exceed 500b and will likely stay far below this number.
          </p>
          <ul>
            <li>CZF CA: <a href="https://bscscan.com/address/0x7c1608C004F20c3520f70b924E2BfeF092dA0043">0x7c1608C004F20c3520f70b924E2BfeF092dA0043</a> </li>
            <li>CZF CMC: <a href="https://coinmarketcap.com/currencies/czfarm/">https://coinmarketcap.com/currencies/czfarm/</a></li>
          </ul>
          <br/><br/>
          <p>
            CZUSD is a USD stablecoin. The peg is maintained in the short term by the Scorch Peg which trades the token back to $1 and uses the profits to burn CZF. In the long term the peg is held by the Exempt Borrow feature which backs CZUSD with overcollateralized CZF debt.
          </p>
          <ul>
            <li>CZUSD CA: <a href="https://bscscan.com/address/0xE68b79e51bf826534Ff37AA9CeE71a3842ee9c70">0xE68b79e51bf826534Ff37AA9CeE71a3842ee9c70</a> </li>
       </ul>
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
            <p>CEO &amp; Lead Dev</p>
            <StaticImage className="border" src="../images/border_gray.png" alt="Plastic Digits Portrait" />
          </div>

          <div className="team-member">
            <StaticImage src="../images/admins/rayoshi 500x500.png" alt="rayoshi" />
            <h4>Rayoshi</h4>
            <p>COO &amp; Business Developer</p>
            <StaticImage className="border" src="../images/border_gray.png" alt="Rayoshi Portrait" />
          </div>

          <div className="team-member">
            <StaticImage src="../images/admins/500x500.png" alt="icashy" />
            <h4>Icashy</h4>
            <p>Graphic Artist</p>
            <StaticImage className="border" src="../images/border_gray.png" alt="Icashy Portrait" />
          </div>

          <div className="team-member">
            <StaticImage src="../images/admins/sai 500x500.jpg" alt="Sai Portrait"/>
            <h4>SAI</h4>
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
    </main>
      <div id="particles-js">
        <div>
          <Particles width="100%" height="100vh" params={particlesParams} style={{
            backgroundColor: "transparent",
            position: "absolute",
            width: "100%",
            height: "100%"
            
          }} />
        </div>
      </div>
      <div>
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
      </div>
    </div>
  )
}

export default IndexPage