import React from 'react';
import { createRoot } from 'react-dom/client';
import SidebarButton from '../../src/components/SidebarButton'; 

function renderButtonComponent() {
  const sidebarNavElement = document.querySelector('nav.sidebar_re4s');
  
  if (sidebarNavElement) {
    let buttonContainer = sidebarNavElement.querySelector('#sidebar-button-container');

    if (!buttonContainer) {
      buttonContainer = document.createElement('div');
      buttonContainer.id = 'sidebar-button-container'; 

      sidebarNavElement.appendChild(buttonContainer);
    }

    if (!buttonContainer.hasChildNodes()) {
      const root = createRoot(buttonContainer);
      root.render(<SidebarButton />);
    }

    buttonContainer.style.position = 'sticky';
    buttonContainer.style.bottom = '0';   
    buttonContainer.style.width = '100%'; 
    buttonContainer.style.left = '0';     
    buttonContainer.style.textAlign = 'center'; 
    buttonContainer.style.maxHeight = `calc(100vh - (var(--ifm-navbar-height) + 2rem))`;
  }
}

function handleResize() {
  const sidebarNavElement = document.querySelector('nav.sidebar_re4s');
  const buttonContainer = sidebarNavElement?.querySelector('#sidebar-button-container');

  if (buttonContainer) {
    buttonContainer.remove();
  }

  renderButtonComponent();
}

window.addEventListener('resize', handleResize);

export function onRouteDidUpdate() {
  setTimeout(renderButtonComponent, 0); 
}