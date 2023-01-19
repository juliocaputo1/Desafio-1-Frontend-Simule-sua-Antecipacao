import styled from "styled-components";

export const DivConteudoTotal = styled.div`
    width: 45vw;
    height: 55vh;
    border: 0.5px ridge #DDE6E9;
    box-shadow: 25px black;
    border-radius: 3px;
    display: flex;
`
export const DivResultadosStyle = styled.div`
    padding-left: 5%;
    display: flex;
    flex-direction: column;
    padding-top: 15%;

    h2{
        color: #3D75BB;
        font-size: 16px;
        border-bottom: 0.5px solid #3D75BB;
        width: 140%;
        font-weight: bolder;
        padding-bottom: 4px;
    }
`

export const ResultadosStyle = styled.div`
    color: #5D9CEC;
    font-size: 16px;
    margin-top: 20%;

    li{
        list-style: none;
    }
    ul{
        margin-bottom: 22%;
    }
    span{
        font-weight: bold;
    }
`

export const DivFormStyle = styled.div`
background-color: #fff;
width: 60%;
height: 100%;

    h1{
        padding-left: 15%;
        padding-top: 10%;
        font-size: 24px;
        font-weight: bold;
        color: #656565;
    }
`

export const FormAntecipacaoStyle = styled.form`
    padding-left: 15%;
    display: flex;
    flex-direction: column;

    label{
        color: #656565;
        font-size: 14px;
        margin-bottom: 4px;
        margin-top: 7%;
    }

    input{
        width: 75%;
        height: 28px;
        border-radius: 5px;
        border: 1px ridge #DDE6E9;
    }

    div{
        margin-top: 7%;
    }

    p{
        color: #CECECE;
        font-size: 11px;
        margin-top: 2px;
    }

    button{
        margin-top: 7%;
        background-color: transparent;
        width: 77%;
        height: 28px;
        border: 1px ridge #DDE6E9;
        border-radius: 5px;
    }
`

