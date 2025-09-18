import React, { useState } from 'react';

const ImageUploader: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState('');

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedImage(event.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!selectedImage) {
            setMessage('Please select an image to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedImage);

        setUploading(true);
        setMessage('');

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setMessage('Image uploaded successfully!');
            } else {
                setMessage('Failed to upload image.');
            }
        } catch (error) {
            setMessage('An error occurred while uploading the image.');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="image-uploader">
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button onClick={handleUpload} disabled={uploading}>
                {uploading ? 'Uploading...' : 'Upload Image'}
            </button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ImageUploader;