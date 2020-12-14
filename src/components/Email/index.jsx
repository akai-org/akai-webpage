import React from "react";

function index({ href = "#email", className, children, title = "email" }) {
  const handleEmail = (e) => {
    const a=document.createElement('a')
    a.href = "mailto:kontakt@akai.org.pl";
    a.click()
    a.remove()
  };
  return (
    <a href={href} className={className} onClick={handleEmail} title={title}>
      {children}
    </a>
  );
}

export default index;
