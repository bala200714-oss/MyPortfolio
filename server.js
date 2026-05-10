const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Portfolio backend is running' });
});

app.get('/api/projects', (req, res) => {
  // Sample projects data - you can replace this with a database later
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and Vite',
      technologies: ['React', 'Vite', 'CSS'],
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://yourportfolio.com'
    }
  ];
  res.json(projects);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Here you would typically send an email or save to database
  console.log('Contact form submission:', { name, email, message });

  // For now, just return success
  res.json({
    success: true,
    message: 'Thank you for your message! I will get back to you soon.'
  });
});

// Serve static files from dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Serve React app for any unmatched routes (SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// For local development
if (require.main === module) {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

// Export for Vercel
module.exports = app;