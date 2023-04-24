import React, { useState } from "react";
import { Document, Page } from "react-pdf";

function PDFViewer() {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const pdfPath = require("../assets/sample.pdf");

    return (
        <div>
            <Document file={pdfPath} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from(new Array(numPages), (_, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
            </Document>
        </div>
    );
}

export default PDFViewer;
