import React, { useState } from 'react';

function Create({ addNews }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && description) {
            addNews({ title, description });
            setTitle('');
            setDescription('');
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md mx-auto mb-6 p-6 rounded-md max-w-md"
        >
            <input
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="block border-gray-300 mb-4 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
            />
            <textarea
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="block border-gray-300 mb-4 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
            ></textarea>
            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-md w-full text-white transition"
            >
                Add News
            </button>
        </form>
    );
}

export default Create;
