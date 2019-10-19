# Mobile Hook Demo

- this is a custom React hook that returns true or false depending if the screen is a mobile size or not.

- this hook is best used with styled component tools like stylized components.  In the styled component file you can use a prop to determine the style.  

    ```
    export default styled.div`
        background-color: ${props => props.isMobile ? 'lightgreen' : 'lightblue' };
    `
    ```
- in the react component you can then use the hook to determine whether or not the component is within the mobile view via the hook, and then pass that value as a prop.
    ```
    <StyledApp isMobile={isMobile}>
        {isMobile ? <div>MOBILE</div> : <div>DESKTOP</div>}
    </StyledApp>
    ```
