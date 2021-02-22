import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
      --primary: #000;
      --secondary: #15181C;
      --search: #202327;
      --white: #D9D9D9;
      --gray: #7A7A7A;
      --outline: #2F3336;
      --retweet: #00C06B;
      --like: #E8265E;
      --twitter: #33A1F2;
      --twitter-dark-hover: #011017;
      --twitter-light-hover: #2C8ED6;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      color: var(--white);
    }

    html, body, #root {
      max-width: 100vw;
      max-height: 100vh;

      width: 100%;
      height: 100%;
    }

    *, button, input {
      border: 0;
      background: none;
      font-family: -apple-system, -apple-system, 
                    BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, 
                    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', 
                    sans-serif;
    }

    html { 
      background: var(--primary)
    }

    @keyframes fadeIn { 
      from { opacity: 0; } 
    }

    .loading-img {

      width: 70px;
      height: 70px;
      display: flex;
      
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -35px;
      margin-left: -35px;
      animation: fadeIn 2s infinite alternate;

      @media (min-width: 1280px) {

        width: 90px;
        height: 90px;

        display: flex;
        position: absolute;

        top: 50vh;
        left: 50vw;
        margin-top: -45px;
        margin-left: -45px;

      }

    }
  `


