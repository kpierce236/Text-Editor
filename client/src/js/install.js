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

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // Hide the install button
    butInstall.style.display = 'none';
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const choiceResult = await deferredPrompt.userChoice;
    // Reset the deferredPrompt variable
    deferredPrompt = null;
  });

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
