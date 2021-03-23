import React from 'react';
import "./footer.css"

function PageFooter() {
    const year = new Date().getFullYear();
    return (<footer className="page-footer">@ TeamNamePlaceholder, {year}</footer>);
}

export default PageFooter;