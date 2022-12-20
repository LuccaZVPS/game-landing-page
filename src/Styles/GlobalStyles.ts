import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    @font-face { font-family: Gotham; src: url('/Gotham-Font/GothamMedium.ttf'); } 
     @font-face { font-family: Gotham; font-weight: bold; src: url('/Gotham-Font/Gotham-Bold.otf');}
     @font-face { font-family: Gotham; font-weight: 600; src: url('/Gotham-Font/GothamBook.ttf');;}
     @font-face { font-family: Gotham; font-weight: lighter; src: url('/Gotham-Font/Gotham-Light.otf');;}

    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
}
:root{
    --BASE: #1C1C28;
    --BACKGROUND:#DEE1FF;
    --NEUTRAL:#FFFFFF;
    --GREY:#777B9E;
    --PRIMARY:#596AFE;
    --SECONDARY:#080357;
    --ACCENT:#F68E5F;
}




`;
