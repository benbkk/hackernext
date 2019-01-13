import { css } from '@emotion/core'
import { size, position, lighten, rem } from 'polished'

export const Styles = css`

    *{
        box-sizing: border-box;
        &:focus {
            outline: none;
        }
    }

    html {
        ${size('100%')};
        font-size: 1rem;
    }

    body {
        ${size('inherit')};
        ${position('fixed', 0)};
        color: ${lighten(0.3, 'black')};
        margin: 0;
        padding: 0;
        font-family: 'Quicksand', sans-serif;
        font-size: inherit;
        overflow: hidden;
    }

    h1, h2, h3, h4, h5 {
        margin-top: 1.5em;
        margin-bottom: 0.25em;
        font-weight: 700; 
        line-height: 1.333;
        font-family: 'Merriweather', sans-serif;
    }

    h4, h5 {
        margin-bottom: 0;
    }

    h1.story-title {
        font-size: ${rem('40px')};
    }

    a { 
        text-decoration: none;
        color: ${lighten(0.2, 'black')};
        font-weight: 500;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }


    ul li ul  {
        margin-left: 3%;
        padding-left: 3%;

        @media (max-width: 480px) {
            margin-left: 0;
            padding-left: 0;
        }
    }

    #__next {
        height: inherit;
        overflow-y: auto;
    }

    nav {
        padding: 18px 0;
        background-color: #ff7301;
        height: 60px;
    }

    main {
        height: calc(100vh - 60px);
        overflow:hidden;
    }

    .main-title {
        display: inline-block;
        vertical-align: middle;
    }

    button + a > .main-title {
        margin-left: 9px;
    }



    article {
        padding: 1px;
    }

    code, pre {
        color: #f8f8f2;
        background: none;
        text-shadow: 0 1px rgba(0, 0, 0, 0.3);
        font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        font-size: ${rem('14px')};
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        line-height: 1.5;

        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;

        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;

        padding: 1em;
        margin: 1em 0;
        overflow: auto;
        border-radius: 0.3em;
    }

    pre {
        background: #272822;
    }
`

