import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        font-family: Arial, Helvetica, sans-serif ;

        background-image: radial-gradient(circle at 90.56% 107.92%, #d221d8 0, 
            #b413dd 16.67%, #8e0ce2 33.33%, #5710e5 50%, 
            #001be8 66.67%, #0025eb 83.33%, #002ded 100%);
    }
`;

export default Globalstyle;