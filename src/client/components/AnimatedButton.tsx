import React from 'react';
import './AnimatedButton.css';

interface AnimatedButtonProps {
    onClick: () => void;
    label: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ onClick, label }) => {
    return (
        <button className="animated-button" onClick={onClick}>
            {label}
        </button>
    );
};

export default AnimatedButton;