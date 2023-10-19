import styled from "styled-components";

export const BtnStyle = styled.button`
    width: 75px;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-radius: 50%;
    position: fixed;
    bottom: 20px;
    right: 20px;
    box-shadow: gray 0 0 23px 0;
    z-index: 1;
    &:hover{
        opacity: .7;
        cursor: pointer;
    }
`
export const IconoTema = styled.img`
    width: 100%;
    height: 100%;
`
export const Icono = styled(IconoTema)`
    filter: ${({ theme }) => theme.filter};
`

