import * as React from "react"
import "../css/index.css"
import { StaticImage } from "gatsby-plugin-image"

// markup
const IndexPage = () => {
  return (
    <main >
      <nav>

      <StaticImage src="../images/logo.png" class="logo" />

      <input type="checkbox" id="check" />
      <label htmlFor="check" class="checkbtn">
        <b class="fas fa-bars"></b>
      </label>

      <ul id="menu">
        <li><a href="#AboutCzodiac">About Czodiac</a></li>
        <li><a href="#CzodiacHunts">Czodiac Hunts</a></li>
        <li><a href="#TigerhuntFeatures">Tigerhunt features</a></li>
        <li><a href="#CzodiacTokenomics">Czodiac Tokenomics</a></li>
        <li><a href="#Czfarm">Czfarm</a></li>
        <li><a href="#OurTeam">Our Team</a></li>
        <li><a href="#ContactUs">Contact Us</a></li>
        <li><a class="btn-play" href="http://app.czodiac.com">Play Now</a></li>
      </ul>

      </nav>

      <div id="particles-js"></div>

      <div class="content">

      <div class="item">

        <h2 id="AboutCzodiac">About Czodiac</h2>
        <br/>
        <StaticImage src="../images/image6.jpg" class="image" />
        <br/><br/>
        <p>
          Chinese Zodiacs are believed to bring luck to those who truly believe. Many people around the globe believe in it’s power and plan their life according to what these signs tell them. We are on a mission to introduce a project that will ensure your crypto portfolio lucky!
          <br/><br/>Since we are in 2021, we will start with OX, and after each month instead of yearly swap we will do a token swap every 30days to the next Zodiac decreasing the supply 8:1 until we finish the 12 Chinese Zodiacs and will have a fixed supply of CZodiac Token.
        </p>

        <br/><br/>

        <div class="btn-redirect">
          <div class="btn"><a class="one" href="https://app.gitbook.com/@czodiac/s/czodiac-litepapper"><b>Whitepaper</b></a></div>
          <div class="btn"><a class="two" href="http://app.czodiac.com"><b>Farm & Pool</b></a></div>
        </div>

        <br/><br/>
      </div>
      <div class="item">
        <h2 id="CzodiacHunts">Czodiac Hunts</h2>
        <br/>
        <p>
          Czodiac Hunts are simple dapp game with 12 czodiac tokens to earn Limited edition NFTs. The Holders of NFTs will receive share of all upcoming zodiac token and able to participate governance of project. 
          <br/><br/>Now, we are in Tigerhunt with tigz token. You stake your TIGZ token to obtain Tiger Hunt Points (TigHP) which is the point by which winner of the game will be decided.
        </p>
      </div>
      <div class="item">
        <h2 id="TigerhuntFeatures">Tigerhunt features</h2>
        <br/>
        <p>
          Stake your TIGZ token to obtain Tiger Hunt Points (TigHP) To play the game 
        </p>
        <br/>
        <StaticImage class="image" src="../images/tiger-image2.jpg" />
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
        <StaticImage class="image" src="../images/tiger-image1.jpg" />
        <br/>
        <br/>
        <p>
          People with more TigHP can hunt you or you can hunt unprotected players to steal 5% of their TigHP and burn 5% more from them unless the player have a guard.
        </p>
      </div>

      <div class="play-btn-container">
        <a href="http://app.czodiac.com"><b>Play Now</b></a>
      </div>

      <div class="item" >
        <h2 id="CzodiacTokenomics">Czodiac Tokenomics</h2>
        <br/>
        <p>
          The CZodiac Tokens start with OxZodiac, since 2021 is the year of the Ox. After each month instead of yearly swap we will do a token swap every 30 days to the next Zodiac decreasing the supply 8:1 until we finish the 12 Chinese Zodiac Sign and will have a fixed supply of CZodiac Token. Therefore in the that order you will have already witnessed the release of TigerZodiac. 
          <br/><br/>The Tiger Zodiac have already been released and had a warm welcome and very strong hold among the community. The upcoming token is RabbitZodiac
          <br/><br/>The czodiac ecosystem have three bep 20 tokens with different use cases now
        </p>
        <div class="tokens">
          <div class="token"><a href="https://bscscan.com/address/0x535874bfbecac5f235717faea7c26d01c67b38c5"><StaticImage src="../images/Tiger Logo.png" alt="" /></a><p>Tigerzodiac</p></div>
          <div class="token"><a href="https://bscscan.com/address/0x7c1608C004F20c3520f70b924E2BfeF092dA0043"><StaticImage src="../images/czfarm logo.png" alt="" /></a><p>Czfarm</p></div>
          <div class="token"><a href="https://bscscan.com/token/0xDd2F98a97fc2A59b1f0f03DE63B4b41041a339B0"><StaticImage src="../images/tigerhp.png" alt="" /></a><p>TigerHp</p></div>
        </div>
      </div>
      <br/>
      <div class="item">
        <h2 id="Czfarm">Czfarm and CzUSD</h2>
        <br/>

        <StaticImage class="image" src="../images/czfarm.jpg" />
        <br/><br/>
        <p>
          CZFarm is a CZodiac farming token which can be used for earning rewards from PCS LP with CZUsd. It will enable the community to capture wealth via BUSD deposits into the CZUsd contract & allow the whole community to profit from the BUSD interest.
          <br/><br/>CZUSD is an algorithmic stablecoin overcollateralized with CZF. By using economically neutral algorithmic alterations to the LP pool, CZUSD is able to offer much lower borrow collateralization ratios for the same level of volatility of underlying capital. Since the protocol's economic token CZF is the same as the collateral token, undercollateralized debt does not need to be liquidated as the underlying CZF is effectively burned when debt goes unpaid. The combination of algorithmic stabilization with high volatiltiy collateral reduces the complexity of the code base compared to other lending platforms. Reduced complexity means a smaller attack surface for hackers, a lower chance for bugs, and a greater possibility for the safe addition of new features.
        </p>
      </div>

      <div class="our-team">
        <h2 id="OurTeam">
          Our Team
        </h2>
        <StaticImage class="tm-border" src="../images/border-color.png" alt="" />
        <br/><br/>
        <div class="team-member">
          <StaticImage src="../images/admins/plastic 500x500.png" />
          <h4>Plastic</h4>
          <p>CEO & Lead Dev</p>
          <StaticImage class="border" src="../images/border_gray.png" alt="" />
        </div>

        <div class="team-member">
          <StaticImage src="../images/admins/peter 500x500.png" />
          <h4>Piter Gaven</h4>
          <p>Co COO & Community Manager</p>
          <StaticImage class="border" src="../images/border_gray.png" alt="" />
        </div>

        <div class="team-member">
          <StaticImage src="../images/admins/rayoshi 500x500.png" />
          <h4>Rayoshi</h4>
          <p>Co COO & Business Developer</p>
          <StaticImage class="border" src="../images/border_gray.png" alt="" />
        </div>

        <div class="team-member">
          <StaticImage src="../images/admins/500x500.png" />
          <h4>Icashy</h4>
          <p>Graphic Artist</p>
          <StaticImage class="border" src="../images/border_gray.png" alt="" />
        </div>

        <div class="team-member">
          <StaticImage src="../images/admins/gourav 500x500.png" />
          <h4>Gourav</h4>
          <p>Community Representative</p>
        </div>

      </div>


      <div class="social">
        <h2 id="ContactUs">
          Contact Us
        </h2>
        <StaticImage class="tm-border" src="../images/border-color.png" alt="" />
        <br/>
        <h4><a href="mailto:team@czodiac.com">team@czodiac.com</a></h4>
        <br/>
        <ul class="row">
          <li class="list-item">
            <div class="twitter"><a href="https://twitter.com/zodiacs_c"><StaticImage src="../images/twitter.png" /></a></div>
          </li>
          <li class="list-item">
            <div class="discord"><a href="https://discord.gg/FEpu3xF2Hb"><StaticImage src="../images/discord.png" /></a></div>
          </li>
          <li class="list-item">
            <div class="medium"><a href="https://czodiacs.medium.com/"><StaticImage src="../images/medium.png" /></a></div>
          </li>
          <li class="list-item">
            <div class="github"><a href="https://github.com/chinese-zodiac/czodiac"><StaticImage src="../images/github.png" /></a></div>
          </li>

        </ul>
      </div>
      </div>
      <br/><br/>
    </main>
  )
}

export default IndexPage