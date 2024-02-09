// List of page URLs
const pages = ['https://valentine.liked.my.id/2-The%20Enigmatic%20Tale%20of%20Saint%20Valentine.php', 'https://valentine.liked.my.id/3-A%20Pagan%20Festival%20in%20February.php'];

// Get a random index to select a page
const randomIndex = Math.floor(Math.random() * pages.length);

// Redirect to the randomly selected page
window.location.href = pages[randomIndex];
