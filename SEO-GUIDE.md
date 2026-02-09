# SEO Implementation Guide

## What Has Been Added

### 1. Enhanced Meta Tags (index.html)
- **Title Tag**: Optimized with location (Kingston, NS) and main keywords
- **Meta Description**: Detailed description of services and location
- **Meta Keywords**: Relevant keywords for accounting services
- **Author, Language, Geo Tags**: Proper identification and location targeting

### 2. Open Graph Tags (Social Media)
- Facebook/LinkedIn sharing optimization
- Twitter Card support
- Proper image, title, and description for social shares

### 3. Structured Data (JSON-LD)
- Local Business Schema markup for AccountingService
- Includes:
  - Business name, address, phone, email
  - Opening hours
  - Founder information (Paul Wills, CPA, CMA)
  - Geographic coordinates for Kingston, NS
  - Service area radius

### 4. Sitemap (sitemap.xml)
- Complete XML sitemap with all 26 pages
- Priority levels:
  - Home page: 1.0 (highest)
  - About/Contact: 0.9
  - Core services: 0.8
  - Specialized services: 0.7
  - Legal pages: 0.3
- Change frequencies set appropriately

### 5. Robots.txt
- Allows all search engines to crawl
- Points to sitemap location
- Ready for customization

## Before Deployment - Customization Required

### 1. Domain Name ✓ COMPLETED
Domain has been set to `https://www.pwillscpa.com` throughout:

**Files updated:**
- `index.html` - meta tags, canonical URLs, JSON-LD ✓
- `sitemap.xml` - all URLs ✓
- `robots.txt` - sitemap URL ✓

### 2. Update Geographic Coordinates
Current coordinates are for Kingston, NS. Verify and update if needed:

**In index.html JSON-LD:**
```json
"geo": {
  "@type": "GeoCoordinates",
  "latitude": 44.2375,  // UPDATE THIS
  "longitude": -65.6083  // UPDATE THIS
}
```

To find accurate coordinates:
1. Go to Google Maps
2. Search for your address
3. Right-click → Coordinates will be displayed

### 3. Update Contact Information
Verify and update in JSON-LD:
- Phone number: +1-555-123-4567 → Your actual phone
- Email: info@pwillscpa.com → Your actual email
- Address: PO Box 400, 720 Main Street, Kingston, NS B0P 1R0 → Your actual address

### 4. Update Page Template (Optional)
The `pages/template.html` file now includes SEO placeholders. When creating new pages:

- Replace `PAGE_TITLE` with actual page title
- Replace `SLUG` with the page filename (e.g., "about-us")

Example:
```html
<title>About Us | Paul Wills & Associates</title>
<link rel="canonical" href="https://www.pwillscpa.com/pages/about-us">
```

### 5. Add Google Analytics (Optional)
Before the closing `</head>` tag in index.html and template.html, add:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your actual Google Analytics measurement ID.

### 6. Add Google Business Profile (Recommended)
1. Go to https://business.google.com/
2. Create or claim your business listing
3. Verify your business (postcard or video)
4. Add photos, hours, services
5. Collect reviews from clients

## Post-Deployment Checklist

### 1. Verify Sitemap
- Visit: `https://www.pwillscpa.com/sitemap.xml`
- Should display XML sitemap in browser

### 2. Verify Robots.txt
- Visit: `https://www.pwillscpa.com/robots.txt`
- Should display robots.txt file

### 3. Test Structured Data
- Go to: https://search.google.com/test/rich-results
- Enter your homepage URL
- Check for errors in the AccountingService markup

### 4. Submit to Search Engines
- **Google Search Console**: https://search.google.com/search-console
  - Add property (your domain)
  - Verify ownership (HTML file or DNS)
  - Submit sitemap
- **Bing Webmaster Tools**: https://www.bing.com/webmasters
  - Similar process as Google

### 5. Test Social Sharing
- Use: https://www.opengraph.xyz/
- Enter your URL
- Preview how your site appears on Facebook, LinkedIn, Twitter

## Ongoing SEO Maintenance

### Monthly Tasks:
- Add new blog posts or insights (update sitemap)
- Check Google Search Console for errors
- Monitor keyword rankings

### Quarterly Tasks:
- Update lastmod dates in sitemap.xml
- Review and update meta descriptions
- Check for broken links

### Yearly Tasks:
- Review and refresh content
- Update business information if changed
- Audit technical SEO

## Additional SEO Opportunities

### 1. Add Blog/Insights Content
The `pages/insights.html` page exists - add actual blog articles targeting:
- Tax tips
- Accounting advice
- Business financial planning
- Industry updates

### 2. Build Local Citations
List your business on:
- Google Business Profile (essential)
- Yelp
- Yellow Pages
- Local business directories
- Industry-specific directories

### 3. Get Backlinks
- Chamber of Commerce membership
- Local business associations
- Guest posting on accounting blogs
- Partnerships with related businesses

### 4. Optimize Images
Before deploying, compress all images:
- Use TinyPNG.com or ImageOptim
- Add alt text to all images:
  ```html
  <img src="path/to/image.jpg" alt="Accounting team working on tax returns">
  ```

## Tools for SEO Monitoring

Free tools:
- Google Search Console - Performance monitoring
- Google Analytics - Traffic analysis
- Google My Business - Local SEO
- Bing Webmaster Tools - Bing search data

Paid tools (optional):
- SEMrush or Ahrefs - Keyword research and competitor analysis
- Moz Pro - SEO metrics and tracking

---

**Note:** SEO is an ongoing process. These optimizations provide a strong foundation, but rankings improve over time with quality content and proper maintenance.
