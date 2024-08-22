import React, { useState } from 'react'
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState(null);

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const onFileUpload = () => {
        const formdata = new Formdata();
        formdata.append('file', file);

        axios.post('http://localhost:5173/Crear', formdata)
            .then((Response) => {
                alert('File uploaded successfully.');
            })
            .catch((Error) => {
                alert('Error uploading file.')
            });
    };
    return (
        <div>

            <h1>Upload File</h1>

            <input type="file" onChange={onFileChange} />
            <button onClick={onFileUpload}>
                Upload!
            </button>

        </div>

    );
};

export default FileUpload;