import React from 'react';
import ImageUploader from '../components/ImageUploader';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <h1>Welcome to the Social Media Website</h1>
            <p>Share your moments with images!</p>
            <ImageUploader />
            {/* Additional components for displaying user content can be added here */}
        </div>
    );
};

export default Home;