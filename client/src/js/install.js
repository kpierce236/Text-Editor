const butInstall = document.getElementById('buttonInstall');

let deferredPrompt; // To store the event for later use

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the default behavior
    event.preventDefault();
    // Store the event for later
    deferredPrompt = event;
    // Show the install button
    butInstall.style.display = 'block';
  });

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
