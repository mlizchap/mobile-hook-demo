import React from 'react';

import useMobileCheck from '../hooks/useMobileCheck';
import StyledApp from './style';


const App = () => {
    const isMobile = useMobileCheck(500);
    
    return (
        <StyledApp isMobile={isMobile}>
            {isMobile ? <div>MOBILE</div> : <div>DESKTOP</div>}
        </StyledApp>
    )
}

export default App;