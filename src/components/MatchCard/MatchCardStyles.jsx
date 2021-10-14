import styled from "styled-components";

export const League = styled.div`
    display: flex;
    width: 150px;
    height: 80px;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    background: rgb(195, 224, 229);

    @media screen and (max-width: 768px) {
        width: 350px;
        height: 40px;
    }
`;

export const MatchDate = styled.div`
    display: flex;
    width: 150px;
    height: 80px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: rgb(195, 224, 229);

    @media screen and (max-width: 768px) {
        width: 350px;
        height: 40px;
    }
`;

export const Versus = styled.div`
    position: absolute;
    width: 30px;
    height: 200px;
    transform: rotate(45deg);
    border: 1px solid white;
    background: rgb(55, 74, 103);

    &:before {
        position: absolute;
        top: 45%;
        left: 65%;
        transform: rotate(-45deg) translate(-50%, -50%);
        content: "VS";
        font-size: 0.9rem;
        color: white;
    }

    @media screen and (max-width: 768px) {
        transform: rotate(90deg);
        &:before {
            top: 50%;
            left: 50%;
            transform: rotate(-90deg) translate(50%, -50%);
        }
    }
`;

export const TeamCard = styled.div`
    display: flex;
    width: 300px;
    height: 100px;
    padding: 5px;
    align-items: ${props => props.side === "left" ? "flex-start" : "flex-end"};
    text-align: ${props => props.side === "left" ? "left" : "right"};
    justify-content: center;
    font-size: 1.1rem;
    color: rgb(255, 255, 255);
    background: rgba(14, 17, 22, 0.9);

    @media screen and (max-width: 768px) {
        width: 100vw;
        height: 70px;
    }
`;

export const Container = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;
