import React from 'react';

function SvgSelector({ name, size = 24 }) {
    switch (name) {
        case 'search':
            return (
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20.5 19.5L17.5 16.5"
                        stroke="#E4E4E4"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <circle cx="10.5" cy="10.5" r="9" stroke="#E4E4E4" stroke-width="1.5" />
                </svg>
            );

        default:
            return <svg></svg>;
    }
}

export default SvgSelector;
