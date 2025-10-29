```markdown
# LiamCipher - Security Research Blog

A clean, modern, static blog website for security research and bug bounty writeups.

## 🚀 Features

- ✅ Fully static (HTML/CSS/JS only - no backend required)
- ✅ Responsive design for all devices
- ✅ Dark mode toggle with localStorage persistence
- ✅ Client-side search functionality
- ✅ Smooth animations and transitions
- ✅ Scroll-to-top button
- ✅ Clean, minimal design
- ✅ Fast loading and SEO-friendly
- ✅ GitHub Pages ready

## 📁 Project Structure

```
/
├── index.html              # Home page with blog posts
├── about.html              # About page
├── contact.html            # Contact page
├── posts/                  # Blog posts folder
│   ├── first-post.html
│   ├── second-post.html
│   └── third-post.html
├── assets/
│   ├── css/
│   │   └── style.css       # All styling
│   ├── js/
│   │   └── main.js         # JavaScript functionality
│   └── images/             # Add your images here
└── README.md
```

## 🛠️ Setup & Deployment

### Local Development

1. Clone or download the repository
2. Open `index.html` in your browser
3. That's it! No build process required.

### Deploy to GitHub Pages

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select "Deploy from a branch"
5. Choose "main" branch and root folder
6. Save and wait for deployment
7. Your site will be live at: `https://yourusername.github.io/repository-name`

### Custom Domain (Optional)

1. In your repository, create a file named `CNAME`
2. Add your domain: `yourdomain.com`
3. Configure DNS settings with your domain provider:
   - Add A records pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add a CNAME record pointing to `yourusername.github.io`

## ✍️ Adding New Posts

1. Create a new HTML file in the `posts/` folder (e.g., `new-post.html`)
2. Copy the structure from an existing post
3. Update the content
4. Add the post card to `index.html`:

```html
<article class="post-card" data-title="Your Post Title" data-tags="tag1 tag2">
    <h3><a href="posts/new-post.html">Your Post Title</a></h3>
    <p class="post-date">Date</p>
    <div class="post-tags">
        <span class="tag">Tag 1</span>
        <span class="tag">Tag 2</span>
    </div>
    <p class="post-excerpt">Brief description...</p>
    <a href="posts/new-post.html" class="read-more">Read more →</a>
</article>
```

## 🎨 Customization

### Colors

Edit the CSS variables in `assets/css/style.css`:

```css
:root {
    --accent-color: #2563eb;  /* Change to your preferred color */
    /* ... other variables ... */
}
```

### Fonts

The site uses Inter font from Google Fonts. To change:

1. Update the font link in HTML files
2. Update the font-family in CSS

### Profile Image

Replace the "AS" placeholder in `about.html` with an actual image:

```html
<img src="assets/images/profile.jpg" alt="Profile" class="profile-image">
```

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📄 License

Free to use and modify for personal or commercial projects.

## 🤝 Contributing

Feel free to fork, modify, and use this template for your own blog!

## 📧 Contact

- Email: abdomostafardwan@gmail.com.com
- LinkedIn: [/in/abdulrahmansec](https://linkedin.com/in/abdelrahman-mostafa-1901aa22a

---

Made with ❤️ for Web Security
```
