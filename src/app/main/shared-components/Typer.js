import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * @param {Object} style 
 */
const injectStyle = (style) => {
    const styleElement = document.createElement('style');
    let styleSheet = null;
    document.head.appendChild(styleElement);
    styleSheet = styleElement.sheet;
    styleSheet.insertRule(style, styleSheet.cssRules.length);
};
  

const Typer = ({ textArr, timeInterval }) => {
    const [id, setId] = useState(0);
    const [dir, setDir] = useState(0);
    const [typed, setTyped] = useState('');
    const [tIdx, setTIdx] = useState(0);
    
    useEffect(() => {
        const keyframesStyle = `
            @keyframes pulse {
                0%   { opacity: 0; }
                100%   { opacity: 1; }
            }
        `;
    
        injectStyle(keyframesStyle);

    }, []);

    const cursorStyle = {
        display: 'block',
        float: 'right',
        height: '2.5rem',
        width: '0.2rem',
        backgroundColor: 'cyan',
        animation: 'pulse 0.3s linear infinite',
    };

    const wrapperStyle = {
        display: 'flex',
        alignItems: 'center',
        float: 'right'
    }

    useEffect(() => {
        const timerId = setInterval(() => {
            if (tIdx < textArr[id].length && dir === 0) {
                if (tIdx === textArr[id].length - 1) setDir(1);
                setTIdx(id => id + 1);
                setTyped(typed => typed + textArr[id][tIdx]);
            } else {
                setTyped(typed => typed.slice(0, -1));
                if (typed.length === 0) {
                    if (id < textArr.length - 1) {
                        setId(id => id + 1);
                    } else {
                        setId(0)
                    }
                    
                    setTIdx(0);
                    setDir(0);
                };
            }
        }, timeInterval);
        
        return () => {
            clearInterval(timerId);
        }
    }, [dir, typed, tIdx, textArr, timeInterval, id]);

    return (
        <span style={wrapperStyle}>
            {typed}<span style={cursorStyle}></span>
        </span>
    )
};

Typer.propTypes = {
    textArr: PropTypes.array,
    timeInterval: PropTypes.number
};

Typer.defaultProps = {
    textArr: [''],
    timeInterval: 150
}

export default Typer;
