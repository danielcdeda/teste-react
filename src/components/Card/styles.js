import styled from "styled-components";

export const Container = styled.div `
    padding-top: 50px;
    padding-bottom: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    

    .wrapper-image-logo{
        background-color: #abbbcc;
        height: 160px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px 5px 0 0;
    }

    .whole-card {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        border-radius: 5px;
    }

    .wrapper-textbox{
        padding: 20px;
    }

    .wrapper-textbox{
        h3 {
        font-weight:600;
        font-size: 18px;
        height: 54px
        }
        h4{
        color: #0C1932CC;
        font-size: 12px;
        font-weight:600;
        }
        p {
            font-size: 14px;
            font-weight:400;
        }
    }

    .wrapper-budget {
        display: flex;
        justify-content: flex-start;
        gap: 60px
    }

    .awards {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 14px 0;
    }

    .p-gray {
        color: #0C193299;
    }
`