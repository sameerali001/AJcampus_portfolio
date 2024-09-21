import React from 'react';
import './Myresume.css';

const Myresume = () => {
    const handleDownload = () => {
        const resumeUrl = '/Assets/sameer+ali+CV+Resume-1.pdf';
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'sameer_ali_resume.pdf';
        link.click();
    };

    return (
        <div className="resume-container text-white">
            <h1>My Resume</h1>
            <p className='text-white'>
                Below is a brief overview of my professional experience and skills. You can preview it here and click the button to download the full resume.
            </p>
            <div className="resume-preview">
                <iframe 
                    src="/Assets/sameer+ali+CV+Resume-1.pdf" 
                    width="100%" 
                    height="600px" 
                    title="Resume Preview"
                >
                    This browser does not support PDFs. Please download the PDF to view it: <a href="/Assets/sameer+ali+CV+Resume-1.pdf">Download PDF</a>.
                </iframe>
            </div>
            <button onClick={handleDownload} className="btn btn-primary">Download Resume</button>
        </div>
    );
};

export default Myresume;
