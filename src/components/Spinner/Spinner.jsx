import { Spin } from "antd";
import styled from "styled-components";

const SpinnerContainer = styled.div`
    display: flex;
    height: 80vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
`;

const Spinner = () => {
    return (
        <SpinnerContainer>
            <Spin size="large" />
        </SpinnerContainer>
    );
};

export default Spinner;
