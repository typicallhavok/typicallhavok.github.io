// RedirectPdf.jsx
import React, { useEffect } from 'react';

const RedirectPdf = ({ pdfUrl }) => {
  useEffect(() => {
    window.location.href = pdfUrl;
  }, [pdfUrl]);

  return (
    <div>
      Redirecting to PDF...
    </div>
  );
};

export default RedirectPdf;
