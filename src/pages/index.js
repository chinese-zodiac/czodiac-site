import * as React from "react"
import { useEffect, useState } from "react";
import "../css/index.css";

import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import Particles from "react-particles-js"

if (typeof window !== `undefined`) { // or typeof document !== 'undefined'
  // your code that uses global objects here
  const cards = document.querySelectorAll(".box");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / card.clientWidth) * 100;
      const y = ((e.clientY - rect.top) / card.clientHeight) * 100;

    card.style.background = `radial-gradient(circle closest-corner
      at ${x}% ${y}%,
      var(--ripple-color), var(--bg-color))`;
    });

    card.addEventListener("mouseleave", (event) => {
      card.style.removeProperty("background");
    });
  });
}



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
          <header class="header" id="header">
            <nav class="nav container">
              <div class="nav_logo">
                <a href="#">                  
                  <StaticImage src="../images/logo2.png" class="logo" className="logo" alt="czodiac logo"/>  
                </a>
              </div>                                                         
              <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">
                  <li class="nav__item">
                    <a href="#home" onClick={()=>setIsMenuOpen(false)} class="nav__link ">                             
                      <i class="fas fa-home nav__icon"></i>
                      <span class="nav__name">Czodiac</span>
                    </a>
                  </li>      
                  <li class="nav__item">
                    <a href="#farm" onClick={()=>setIsMenuOpen(false)} class="nav__link">                                
                      
                      <i class="fas fa-tractor nav__icon"></i>
                      <span class="nav__name">Farm&nbsp;2.0</span>
                    </a>
                  </li>
                  <li class="nav__item">
                    <a href="#cztoken" onClick={()=>setIsMenuOpen(false)} class="nav__link">                       
                    <i class="fas fa-coins nav__icon"></i>
                      <span class="nav__name">cztoken</span>
                    </a>
                  </li>
                  <li class="nav__item">
                    <a href="#OurTeam" onClick={()=>setIsMenuOpen(false)} class="nav__link">
                      <i class="fas fa-user-friends nav__icon"></i>
                      <span class="nav__name">Team</span>
                    </a>
                  </li>
                  
               </ul>
              </div>
              <img src="assets/img/perfil.png" alt="" class="nav__img" />
            </nav>
          </header>
      <div className="content">

        <div className="item ">
          <div id="home" className="jumpMarker" />
          <h1 >Next gen Defi 2.0 Technologies on BSC</h1>
          <br/>
          
          <br/><br/>
          <h2 >Protocol Owned Liquidity</h2>
          <p>
          CZodiac uses POL game theory to develop novel Defi 2.0 technologies that protect farmers and stakers.
            <br/><br/>
          </p>

          <br/><br/>

          <div className="btn-redirect">
            <div className="btn"><a className="one" target="_blank" href="https://czodiac.gitbook.io/czodiac-litepapper/"><b>Whitepaper</b></a></div>
            <div className="btn"><a className="two" target="_blank" href="http://app.czodiac.com"><b>Launch dApp</b></a></div>
          </div>
          <br/><br/>
        </div>

        <div class="farm">
          <div id="farm" className="jumpMarker" />
          
          <StaticImage className="image" src="../images/slider.jpg" alt="czfarm" />
          
          
          <div class="center">
            <div class="traineeship">
              <div class="process-row">
                <div class="activity animate-from-bottom__1">
                  <div class="relative-block">
                    <div class="activity-icon">
                      <img class="whiteline" alt="divider" src="https://i.ibb.co/89r2n9x/Picture2.png" />
                    </div>
                    <div class="inactive">
                      <div class="title">Exotic Farms </div>
                    </div>
                    <div class="active">
                      <div class="title">Exotic Farms</div>
                      <div class="sub-title">
                      Exotic Farms are a Defi 2.0 farming system that protect depositors from IL (Impermanent Loss) while providing high APR. Deliver liquidity tokens (LP) to earn vesting CZF every second. The amount of vesting CZF is equal to the value of the LP in CZF plus interest. 
                      </div>
                    </div>
                  </div>
                </div>
                <div class="activity animate-from-bottom__2">
                  <div class="relative-block">
                    <div class="activity-icon">
                      <img class="whiteline" alt="divider" src="https://i.ibb.co/JqZQxPB/Picture3.png"/>
                    </div>
                    <div class="inactive">
                      <div class="title">Chrono Pools</div>
                    </div>
                    <div class="active">
                      <div class="title">Chrono Pools</div>
                      <div class="sub-title">
                      Burn CZF to earn rewards each block for the vesting period. Rewards can be fast forwarded from the future at a discount. APR is set at a base level until enough deposits are collected at which point the APR begins to fall.
                      </div>
                    </div>
                  </div>
                </div>   
              </div>
            </div>
          </div>

        </div>

        <div class="xxxxx">
          <div id="xxxxx" className="jumpMarker" />
          <h2>The CZF Rising Price Floor</h2>
          <div class="timeline">
            <div class="outer">
              <div class="card">
                <div class="info">
                  <h3 class="title"></h3>
                  <p>
                    <h4><span>1 </span> Treasury Revenue</h4>
                    <h3>Dex Rewards</h3>
                    Liquidity collected from Defi 2.0 features are transfered to the CZodiac Treasury.
                    This POL (Protocol Owned Liquidity) rises over time from new deposits and dex LP rewards.
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="info mid">
                  <h3 class="title"> </h3>
                  <p>
                    <h4> <span>2 </span>Protocol Owned Liquidity</h4>
                    <h3>CZodiac Treasury</h3>
                    Deposits to Exotic and Stim Farms is saved as POL (Protocol Owned Liquidity) controlled by the CZodiac community.
                    As the POL grows, the community can vote to burn some LP and use the assets to buy and burn CZF.
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="info">
                  <h3 class="title"></h3>
                  <p>
                    <h4><span>3 </span> Rising price floor</h4>
                    <h3>POL Growth</h3>
                      As POL grows, the price floor for CZF rises.
                      This LP will never be dumped since it is controlled by the community.
                  </p>
                </div>
              </div>               
            </div>
          </div>
        </div>

        <div class="cztoken">
          <div id="cztoken" className="jumpMarker" />

          <div class="czfarm">
            <div id="czfarm" className="" />
            <div class="content-head">
              <div class="head-title">
                  CZfarm token
              </div>
              <div class="head-decs">
                CZF is the protocol token for CZodiac. <br/>
                Supply can both increase and decrease based on demand for Chrono Pools.
                More demand increases emissions and lowers APR, while lower demand reduces emissions and raises APR.
              </div>             
            </div>

            <div class="content-coin">
              <div class="coin-box box-first">
                <div class="listed-item">
                  <div class="coin-list-item">
                    <div>
                      &nbsp;
                    </div>
                    <h5>contract</h5>   
                    <div class="bsc">
                      <StaticImage class="logo-bsc" src="../images/bsc.png" alt="BscScan" />
                      &nbsp;&nbsp;   <a target="_blank" href="https://bscscan.com/address/0x7c1608c004f20c3520f70b924e2bfef092da0043"> BscScan </a>
                    </div>
                    <h5>available on</h5>     
                    <div class="cmc">
                      <StaticImage class="logo-cmc" src="../images/cmc.png" alt="coinmarketcap" />
                      &nbsp;&nbsp;   <a target="_blank" href="https://coinmarketcap.com/currencies/czfarm/"> coinmarketcap </a>
                    </div>
                    
                    <div class="cgo">                       
                      <StaticImage class="logo-cgo" src="../images/cgo.png" alt="coingecko" />
                      &nbsp;&nbsp;  <a target="_blank" href="https://www.coingecko.com/en/coins/czfarm"> coingecko </a>
                    </div>
                    <h5>buy now</h5>   
                    <div class="pcs">
                      <StaticImage class="logo-pcs" src="../images/pcs.png" alt="pancakeswap" />
                      &nbsp;&nbsp;  <a target="_blank" href="https://pancakeswap.finance/info/token/0x7c1608c004f20c3520f70b924e2bfef092da0043"> pancake swap </a>
                    </div>
                    <h5> chart</h5> 
                    <div class="cgo">
                      <StaticImage class="logo-cgo" src="../images/pcn.png" alt="poocoin" />
                      &nbsp;&nbsp;  <a target="_blank" href="https://poocoin.app/tokens/0x7c1608c004f20c3520f70b924e2bfef092da0043"> poocoin </a>
                    </div>                  
                  </div>
                </div>                       
              </div>

              <div class="coin-box box-middle">              
                <div class="middle-1 logo">
                  <StaticImage class="logo-img" src="../images/czf-3d.png" alt="czf-3d.png" />
                </div>
                <div class="middle-1 arrow-2">
                  <StaticImage class="arrow-2-img" src="../images/arrow-1.png" alt="arrow-2" />
                </div>
              </div>

              <div class="coin-box box-last">
                <div class="listed-item">
                  <div class="coin-list-item">
                    borrow czusd
                  </div>
                  <div class="coin-list-item">
                    exchange
                  </div>
                  <div class="coin-list-item">
                    stake
                  </div>
                  <div class="coin-list-item">
                    farm
                  </div>
                  <div class="coin-list-item">
                    pool
                  </div>                  
                </div>
              </div>
            </div>
          </div>

          <div class="czusd">
            <div id="czusd" className="jumpMarker" />
            <div class="content-coin">
              <div class="coin-box box-first">
                <div class="listed-item">
                  <div class="coin-list-item">
                    <div class="content-head">
                      <div class="head-title">
                        czusd  
                      </div>
                       
                    </div>
                    <div class="body">   
                      CZUSD is a USD stablecoin. The peg is maintained in the short term by the Scorch Peg which trades the token back to $1 and uses the profits to burn CZF. In the long term the peg is held by the Exempt Borrow feature which backs CZUSD with overcollateralized CZF debt.
                      <div class="ul">
                        <div class="bsc">
                          <StaticImage class="logo-bsc" src="../images/bsc.png" alt="BscScan" />
                          &nbsp;&nbsp;   <a target="_blank" href="https://bscscan.com/address/0xE68b79e51bf826534Ff37AA9CeE71a3842ee9c70"> BscScan </a>
                        </div>

                        <div class="pcs">
                          <StaticImage class="logo-pcs" src="../images/pcs.png" alt="pancakeswap" />
                          &nbsp;&nbsp;  <a target="_blank" href="https://pancakeswap.finance/info/token/0xe68b79e51bf826534ff37aa9cee71a3842ee9c70"> pancake swap </a>
                        </div>
                      </div>

                      

                    </div>
                                   
                  </div>
                </div>                       
              </div>

              <div class="coin-box box-middle">    
                <div class="sonar-wrapper">
	                <div class="sonar-emitter middle">
                  <StaticImage class="logo "src="../images/czusd-logo.png" alt="czf-3d.png" />
                    <div class="sonar-wave"></div>
                  </div>
                </div>       
                
                
              </div>

            </div>
          </div>

        </div>

        <div class="feature">
        <div id="feature" className="jumpMarker" />
          <h2> Features </h2>
          <span class="bar"></span>

          <div class="box-container">

            <div class="box">

              <div class="feature-pop-text">
              <h3>Exotic Farms</h3>
                <span class="tooltiptext">
                Deliver LP and earn vesting CZF every second with no Impermanent Loss (IL). Delivered LP is transferred to the protocol's treasury, creating a rising price floor.                
                </span>
              </div>
              
            </div>

            <div class="box">   
              <div class="feature-pop-text">
                <h3>Chrono Pools</h3> 
                <span class="tooltiptext">
                Defi v2 style pools with per block vesting. Users stake CZF to earn other tokens each block. Fast Forward delivers rewards from the future into the present at a discount.
                </span>
              </div>
            </div>

            <div class="box">     
              <div class="feature-pop-text">
                <h3>Stim Farms</h3>
                <span class="tooltiptext">
                Defi v2 style farms inspired by Olympus Dao (OHM). Users deliver LP tokens to the protocol in exchange for high APY and their deposit returned as CZF after 1 week. Purges toxic LP from v1 farms and provides higher quality liquidity.
                </span>
              </div>
              
            </div>

            <div class="box">               
              <div class="feature-pop-text">
                <h3>Antidump Vaults</h3>
                <span class="tooltiptext">
                Single asset vaults which earn high APY without selling any tokens. Vault depositers can earn APY on the base asset (such as BNB) with CZF on top. The protocol tokens earned are packed into Pools.
                </span>
              </div>   
            </div>

            <div class="box">   
              <div class="feature-pop-text">
                <h3>Farms v1</h3>
                <span class="tooltiptext">
                Farms which increase CZF liquidity while simultaneously locking CZF. All farms are against CZF pairs meaning farmers are rewarded with high APR for supporting CZF instead of dumping.
                </span>
              </div> 

            </div>

            <div class="box">   
              <div class="feature-pop-text">
                <h3>Pools v1</h3>
                <span class="tooltiptext">
                Tokens collected from dapps and partners are then distributed to CZF stakers via pools with high APR.
                </span>
              </div> 

            </div>

            <div class="box">   
              <div class="feature-pop-text">
                <h3>Exempt Borrow</h3>
                <span class="tooltiptext">
                  Deposit CZF to borrow up to 75% of the value in CZUSD. All borrows are exempt from interest and liquidation. Users can leverage their CZF to gain increased price exposure without the risk of losing their underlying capital.
                </span>
              </div> 
            </div>

            <div class="box">   
              <div class="feature-pop-text">
                <h3>Scorch Peg</h3>
                <span class="tooltiptext">
                Automatically pegs CZUSD to $1 by burning CZF. The peg deposits trading profits from holding the peg into vaults to earn interest. This interest is then used to burn CZF, reducing supply.
                </span>
              </div> 
            </div>

          </div>

        </div>

        <div class="ourteam">
          <div id="OurTeam" className="jumpMarker" />
          <h2> Our Team</h2>
          <div class="paragraph--type--card-narrow-row">
        	  <div class="card-narrow">
	   	        <div class="card-narrow-image">
               <StaticImage src="../images/admins/plastic 500x500.png" alt="Platic Digits" />
              </div>
              <div class="card-narrow-content">
                <h3>Plastic Digits</h3>
                
              </div>
            </div>
	          <div class="card-narrow">
	   	        <div class="card-narrow-image">
               <StaticImage src="../images/admins/rayoshi 500x500.png" alt="rayoshi" />
              </div>
              <div class="card-narrow-content">
                <h3>Rayoshi</h3>
  		          
              </div>
            </div>
	          <div class="card-narrow">
	   	        <div class="card-narrow-image">
               <StaticImage src="../images/admins/500x500.png" alt="icashy" />
              </div>
              <div class="card-narrow-content">
                <h3>iCashy</h3>
                
              </div>
	          </div>
          	<div class="card-narrow">
	   	        <div class="card-narrow-image">
               <StaticImage src="../images/admins/sai 500x500.jpg" alt="Sai Portrait" />
              </div>
              <div class="card-narrow-content">
                <h3>Sai</h3>
  		          
              </div>
	          </div>
          	<div class="card-narrow">
	   	        <div class="card-narrow-image">
               <StaticImage src="../images/admins/xCrypto.jpg" alt="xCrypto Portrait" />
              </div>
              <div class="card-narrow-content">
                <h3>xCrypto</h3>
  		          
              </div>
	          </div>
          </div>
        </div>

        <div class="partner">
          <div id="partner" className="jumpMarker" />
          <h2> Our Partners</h2>
          <div class="paragraph--type--card-narrow-row">
        	  <div class="card-narrow">
	   	        <div class="card-narrow-image">
                <a target="_blank" href="https://ampleswap.com/">
                  <img alt="ample-swap" src="https://i.ibb.co/sFjNpmN/ample-swap.png" />
                </a> 
              </div>              
            </div>

	          <div class="card-narrow">
	   	        <div class="card-narrow-image">
                <a target="_blank" href="https://autoshark.finance/">
                  <img alt="auto-shark" src="https://i.ibb.co/k3YR5Tf/auto-shark.png" />              
                </a>
             </div>              
            </div>

	          <div class="card-narrow">
	   	        <div class="card-narrow-image">
                <a target="_blank" href="https://home.babyswap.finance/">
                  <img alt="baby swap" src="https://i.ibb.co/ZGSGWXJ/babyswap.png" /> 
                </a>
              </div>              
	          </div>

          	<div class="card-narrow">
	   	        <div class="card-narrow-image">
                <a target="_blank" href="https://www.beefy.finance/">
                  <img alt="beefy finance" src="https://i.ibb.co/bbPmXfN/beefy-finance.png" />
                </a>             
              </div>  
	          </div>

            <div class="card-narrow">
	   	        <div class="card-narrow-image">
                <a target="_blank" href="https://berrydata.co/">
                  <img alt="berry data" src="https://i.ibb.co/jJcSpv6/berry-data.png" />
                </a>               
              </div>  
	          </div>

            <div class="card-narrow">
	   	        <div class="card-narrow-image">
                <a target="_blank" href="https://cafeswap.finance/">
                  <img alt="caffes swap" src="https://i.ibb.co/3dwYfVL/caffes-swap.png" />
                </a>               
              </div>             
	          </div>
            
            <div class="card-narrow">
	   	        <div class="card-narrow-image">
                <a target="_blank" href="https://www.coinwind.com/">
                  <img alt="coin wind" src="https://i.ibb.co/kcpbT5P/coin-wind.png" />
                </a>               
              </div>             
	          </div>

            <div class="card-narrow">
	   	        <div class="card-narrow-image">
              <a target="_blank" href="https://farmageddon.farm/">
                <img alt="framagedon" src="https://i.ibb.co/xhf5r0Y/farmagedon.png" />
              </a>               
              </div>  
	          </div>

          
        	  <div class="card-narrow">
	   	        <div class="card-narrow-image">
                <a target="_blank" href="https://game1network.com/">
                 <img alt="game one network" src="https://i.ibb.co/DWNtKxN/Game1-Network.png" />  
                </a>               
              </div>              
            </div>

	          <div class="card-narrow">
	   	        <div class="card-narrow-image">
                <a target="_blank" href="https://www.giftedhands.io/">
                  <img alt="gifted hands" src="https://i.ibb.co/B4k05vw/Gifted-Hands.png" />
                </a>                
              </div>              
            </div>

	          <div class="card-narrow">
	   	        <div class="card-narrow-image">
                <a target="_blank" href="https://guitarswap.exchange/">
                  <img alt="guitar swap" src="https://i.ibb.co/85N9ztg/Guitar-Swap.png" />
                </a>             
              </div>              
	          </div>

          	<div class="card-narrow">
	   	        <div class="card-narrow-image">
                <a target="_blank" href="https://www.infinitytoken.io/">
                  <img alt="infinity one" src="https://i.ibb.co/dcWgB1w/infinity-one.png" />
                </a>               
              </div>  
	          </div>

            <div class="card-narrow">
	   	        <div class="card-narrow-image">
                <a target="_blank" href="https://app.latteswap.com/">
                  <img alt="latteswap" src="https://i.ibb.co/7Kx0d8b/latteswap.png" />
                </a>               
              </div>  
	          </div>

            <div class="card-narrow">
	   	        <div class="card-narrow-image">
                <a target="_blank" href="https://www.buymainstreet.com/"> 
                  <img alt="main street" src="https://i.ibb.co/M8949zS/Picture1.png" />
                </a>               
              </div>             
	          </div>
            
            <div class="card-narrow">
	   	        <div class="card-narrow-image">
               <a target="_blank" href="https://www.nftmall.io/">
                 <img alt="nft mall" src="https://i.ibb.co/mX5Dnq7/nftmall.png" />
               </a>             
              </div>             
	          </div>

            <div class="card-narrow">
	   	        <div class="card-narrow-image">
                <a target="_blank" href="https://rhinobsc.com/">
                  <img alt="polkarhino" src="https://i.ibb.co/p3SgdTZ/polkarhino.png" />
                </a>               
              </div>  
	          </div>
            
            
            <div class="card-narrow">
	   	        <div class="card-narrow-image">
               <a target="_blank" href="https://singular.farm/"> 
                <img alt="singular" src="https://i.ibb.co/RSnpMzZ/Picture3.png" />
               </a>               
              </div>  
	          </div>
            
            <div class="card-narrow">
	   	        <div class="card-narrow-image">             
               <a target="_blank" href="https://treasureland.market/">
                 <img alt="treassurland" src="https://i.ibb.co/1QLfMsT/Picture2.png" />
               </a>
              </div>  
	          </div>

          </div>
        </div>
        

        <footer className="social">          
            <div class="container">              
            <h4><a href="mailto:team@czodiac.com">team@czodiac.com</a></h4>
              <div class="row row-cols-1 row-cols-xl-5">
              <div class="col"><a href="https://twitter.com/zodiacs_c"><StaticImage src="../images/twitter.png" alt="twitter" /></a></div>
              <div class="col"><a href="https://discord.gg/FEpu3xF2Hb"><StaticImage src="../images/discord.png" alt="discord" /></a></div>
              <div class="col"><a href="https://czodiac.medium.com/"><StaticImage src="../images/medium.png" alt="medium" /></a></div>
              <div class="col"><a href="https://github.com/chinese-zodiac/czodiac"><StaticImage src="../images/github.png" alt="github" /></a></div>
              <div class="col"><a href="https://t.me/CZodiacofficial"><StaticImage src="../images/telegram.png" alt="telegram" /></a></div>
            </div>
          </div>  
        </footer>

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
          <title>CZodiac - DeFi 2.0 on BSC</title>  
          <meta name="description" content= "Better APR with no risk of liquidity runs using POL (Protocol Owned Liquidity)." />
          <meta name="robots" content= "index, follow" />
          <link rel="canonical" href="https://czodiac.com" />
          <meta property="og:title" content="CZodiac - DeFi NFT Games on BSC" />
          <meta property="og:image" content="../images/image6.jpg" />
          <meta property="og:description" content="Better APR with no risk of liquidity runs using POL (Protocol Owned Liquidity)." />
          <meta property="og:url" content="https://czodiac.com" />
          <meta name="twitter:card" content="../images/image6.jpg" />
          <script src="https://kit.fontawesome.com/01310ff41a.js" crossorigin="anonymous"></script>
          <script src="https://bootstrapcreative.com/wp-bc/wp-content/themes/wp-bootstrap/codepen/bootstrapcreative.js?v=11"></script>
          
        </Helmet>
      </div>
    </div>
  )
}


export default IndexPage