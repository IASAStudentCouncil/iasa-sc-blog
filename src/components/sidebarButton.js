import React, { useState } from 'react';

const SidebarButton = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNav = () => {
    setIsOpen(!isOpen);

    const sidebarNav = document.querySelector('nav.sidebar_re4s');
    const aside = document.querySelector('aside');
    const svgB = document.querySelector('#svg-button');
    const sidebarNavWidth = parseInt(getComputedStyle(aside).width, 10) - 32;
    const sidebarNavHeight = getComputedStyle(aside).height;
    const navButton = document.querySelector('#sidebar-button-container button');
    const navButtonContainer = document.querySelector('#sidebar-button-container');
    if (aside && sidebarNav && navButtonContainer) {
      sidebarNav.style.transition = 'width 0.3s ease';
      sidebarNav.style.width = isOpen ? '70px' : `${sidebarNavWidth}px`;
      aside.style.visibility = isOpen ? 'hidden' : 'visible';
      navButton.style.visibility = 'visible';
      svgB.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
      navButtonContainer.style.height = isOpen ? sidebarNavHeight : '50px';
    }
  };

  return (
    <button
      style={{
        padding: '10px 20px',
        backgroundColor: '#1b1b1d',
        border: '1px solid rgba(255, 210, 0, 1)',
        cursor: 'pointer',
        fontSize: '16px',
        width: '100%',
        height: '100%',
        textAlign: 'center',
      }}
      onClick={toggleNav}
    >
      <svg id="svg-button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgba(255, 210, 0, 1)'}}><path d="m8.121 12 4.94-4.939-2.122-2.122L3.879 12l7.06 7.061 2.122-2.122z"></path><path d="M17.939 4.939 10.879 12l7.06 7.061 2.122-2.122L15.121 12l4.94-4.939z"></path></svg>

    </button>
  );
};

export default SidebarButton;
