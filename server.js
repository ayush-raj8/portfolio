const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app build
app.use(express.static(path.join(__dirname, 'build')));

// Route all requests to the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server on port 3000 (or your preferred port)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
