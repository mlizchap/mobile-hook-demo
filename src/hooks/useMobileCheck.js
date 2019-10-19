import React, {useState, useEffect} from 'react';

/**
 * React hook that returns true if the window size is less than or equeal to the number passed to it, and false if not
 * @param {number} mobileSize 
 */
const useMobileCheck = (mobileSize) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= mobileSize ? true : false);

    const checkSize = () => {
        if (window.innerWidth > mobileSize) {
            setIsMobile(false)
        } else {
            setIsMobile(true)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', checkSize)
        return () => {
            window.removeEventListener('offline', checkSize);
        }
    }, [isMobile]);

    useEffect(() => {
        checkSize();
    }, [])

    return isMobile;
}

export default useMobileCheck;