# P. Willis CPA - Professional Accounting Website

A professional accounting firm website built with Bootstrap 5, HTML, CSS, and JavaScript. This website is inspired by modern accounting firm designs and includes all essential sections for a professional services business.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices (desktop, tablet, mobile)
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Hero Carousel**: Eye-catching image slider with call-to-action buttons
- **Services Section**: Showcase your accounting and business services
- **About Section**: Company information with statistics
- **Insights/Blog**: Display latest articles and tax tips
- **Contact Form**: Functional contact form with validation
- **Newsletter Signup**: Email subscription form
- **Smooth Scrolling**: Smooth navigation between sections
- **Mobile-Friendly**: Hamburger menu for mobile devices

## Project Structure

```
pwillscpa/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Custom CSS styles
├── js/
│   └── main.js        # JavaScript functionality
├── images/            # Add your images here
└── README.md          # This file
```

## How to Use

### Option 1: Open Directly in Browser

1. Simply double-click `index.html` to open it in your default web browser
2. Or right-click `index.html` and select "Open with" > Your preferred browser

### Option 2: Using a Local Server (Recommended)

For the best experience, use a local server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (http-server):**
```bash
npx http-server
```

**Using VS Code Live Server:**
1. Install the "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

Then open your browser to `http://localhost:8000`

## Customization

### Branding

1. **Company Name**: Search for "P. Willis CPA" in `index.html` and replace with your company name
2. **Contact Info**: Update phone numbers, email addresses, and physical address in the top bar and contact section
3. **Colors**: Modify CSS variables in `css/style.css`:
   - `--primary-color`: Main blue color (#1e3a8a)
   - `--secondary-color`: Accent orange color (#f59e0b)
   - `--dark-color`: Dark gray (#1f2937)

### Images

Replace placeholder images with your own:

1. Hero slides: Look for `background-image` in `.hero-slide-1`, `.hero-slide-2`, `.hero-slide-3` in `css/style.css`
2. About section: Replace the `img src` in the about section
3. Blog/Insights: Update article images in the insights section
4. Add your logo in the navbar

### Services

Update the services section in `index.html` to reflect your actual services:

```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-YOUR-ICON"></i>
    </div>
    <h4>Your Service Name</h4>
    <p>Your service description</p>
</div>
```

### Contact Form

The contact form currently logs submissions to the browser console. To make it functional:

1. Set up a backend service (Formspree, Netlify Forms, etc.)
2. Update the form `action` attribute in `index.html`
3. Or integrate with a service like EmailJS

### Analytics

Add your analytics tracking code (Google Analytics, etc.) before the closing `</body>` tag in `index.html`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

This website uses the following CDN resources:

- Bootstrap 5.3.0 (CSS & JS)
- Font Awesome 6.4.0 (Icons)
- Unsplash (Placeholder images - replace with your own)

## Performance Tips

1. **Optimize Images**: Compress images before uploading (use TinyPNG, ImageOptim, etc.)
2. **Minify CSS/JS**: Use a build tool to minify CSS and JavaScript files
3. **Enable Caching**: Configure proper caching headers on your server
4. **Use CDN**: Consider hosting assets on a CDN for faster loading

## Deployment

### GitHub Pages

1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify

1. Drag and drop the project folder to Netlify Drop
2. Your site will be live instantly with a unique URL

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in the project directory
3. Follow the prompts

### Traditional Hosting

1. Upload all files via FTP to your web host
2. Ensure `index.html` is in the public root directory
3. Your site will be live at your domain

## Support

For issues or questions:

1. Check the Bootstrap 5 documentation: https://getbootstrap.com/docs/5.3/
2. Review Font Awesome icons: https://fontawesome.com/icons
3. Validate HTML: https://validator.w3.org/
4. Test responsiveness: https://search.google.com/test/mobile-friendly

## License

This template is free to use for personal and commercial projects.

## Credits

- Design inspired by modern accounting firm websites
- Built with Bootstrap 5 framework
- Icons by Font Awesome
- Placeholder images by Unsplash

---

**Note**: Remember to replace all placeholder content with your actual business information before launching your website!
