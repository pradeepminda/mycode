import React, { useState } from 'react'
import pdffile from "../../public/Mangrish_Prince_Product.pdf"

function MangrishPrincePdf() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      {isLoading && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          Loading PDF...
        </div>
      )}
      
      {error && (
        <div style={{ color: 'red', textAlign: 'center', padding: '20px' }}>
          Failed to load PDF: {error.message}
          <br />
          <a href={pdffile} download>Download instead</a>
        </div>
      )}

      <iframe 
        src={pdffile}
        width="100%" 
        height="100%"
        title="PDF Viewer"
        onLoad={() => setIsLoading(false)}
        onError={(e) => {
          setIsLoading(false);
          setError(new Error('Failed to load PDF'));
        }}
        style={{ display: error ? 'none' : 'block' }}
      />
    </div>
  )
}

export default MangrishPrincePdf
