import styled from 'styled-components';

export default styled.div`
    background-color: white;
    min-height: 80vh;
    font-size: calc(10px + 2vmin);
    color: #323d47;
    padding: 15px;

    h1 {
        box-sizing: border-box;
        font-size: 3rem;
        font-weight: 200;
    }
    h2 {
        box-sizing: border-box;
        color: #323d47;
        font-size: 2.10938rem;
        font-weight: 400;
        letter-spacing: 0.5px;
        line-height: 1.5;
    }
    h3 {
        color: darkslategray;
    }
    h5 {
        box-sizing: border-box;
        font-size: 1.125rem;
        font-weight: 300;
        margin-bottom: 1rem;
        margin-top: 0;
    }

    p {
        /* font-family: Roboto, sans-serif; */
    }
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
`;
