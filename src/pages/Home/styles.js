import styled from "styled-components";

export const ContainerItems = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 240px);
    gap: 16px;

    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 100%);
    }


`