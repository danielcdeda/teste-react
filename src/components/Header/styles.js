import styled from "styled-components";

export const TopHeader = styled.div `
background: #4c16c9;
height: 56px;
width: 100%;
display: flex;
align-items: center;
padding: 0 18px;
justify-content: space-between;

p {
    color: #fff;
}

`

export const Container = styled.div `
        width: 100%;
        max-width: 1008px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        margin-top: 2.5rem;
        padding-bottom: 1.5rem;
        border-bottom: 2px solid #DDE0EB;
        align-items: flex-end;

        h1 {
            font-weight: 600;
        }
        
        p{
            color: #0C1932CC;
        }

       
        .input {
            width: 100%;
            height: 2.5rem;
            padding-left: 10px;
            border: 2px solid #D0D3E0;
            border-radius: 5px;
            color: #0C1932;
            width: 100%
        }
        
        @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding-left: 10px;

        
        .input {
            margin-top: 10px;
        }
        
    }

    

   

`