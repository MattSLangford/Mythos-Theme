# Mythos Theme

A minimal, fast, and highly readable Micro.blog theme featuring a clean black and white design with exceptional typography and user experience.

## Features

- **Minimal Design**: Clean black and white aesthetic with subtle gray accents
- **Fast & Lightweight**: Optimized for performance with minimal JavaScript
- **Readable Typography**: Carefully chosen font sizes, line heights, and spacing
- **Fully Responsive**: Mobile-first design that works on all devices
- **Accessible**: Semantic HTML, keyboard navigation, and screen reader friendly
- **Customizable**: Multiple theme options without editing code
- **Modern**: Sticky header, smooth animations, and backdrop blur effects

## Installation

### Option 1: Direct Installation from GitHub

1. In your Micro.blog admin, go to **Design** → **Edit Custom Themes**
2. Click **New Theme** and enter the repository URL:
   ```
   https://github.com/mattlangford/mythos-theme
   ```
3. Click **Add Theme**
4. Select **Mythos** from your themes list
5. Customize the settings in **Design** → **Edit Custom Themes** → **Theme Settings**

### Option 2: Download and Upload

1. Download the theme files from this repository
2. In Micro.blog admin, go to **Design** → **Edit Custom Themes**
3. Click **Upload Theme** and select the theme folder
4. Select **Mythos** from your themes list

## Theme Settings

All customization is done through the theme settings panel in your Micro.blog admin:

### Basic Settings

- **Site Language**: Choose from 8 supported languages (English default)
- **Custom Avatar URL**: Use a custom avatar instead of your Micro.blog profile photo
- **Show Profile Photo in Header**: Toggle avatar display in the header
- **Show Dates on Posts**: Display or hide publication dates
- **Show Reading Time on Posts**: Show estimated reading time for longer posts
- **Posts per Page**: Control pagination (5, 10, 15, 20, or 25 posts)

### Advanced Customization

- **Custom CSS**: Add your own CSS for further customization

### Example Custom CSS

```css
/* Custom accent color */
:root {
    --color-link: #2563eb;
    --color-link-hover: #1d4ed8;
}

/* Custom fonts */
body {
    font-family: 'Georgia', serif;
}

/* Wider content area */
:root {
    --container-width: 48rem;
}
```

## Design Philosophy

Mythos prioritizes readability and performance:

- **Typography First**: Optimized font sizes and line heights for comfortable reading
- **Performance**: Minimal dependencies and optimized assets
- **Accessibility**: Proper semantic markup and keyboard navigation
- **Responsive**: Max-width based responsive design for consistent experience
- **Content Focus**: Clean design that puts your writing first

## Supported Features

### Micro.blog Specific
- Microposts (posts without titles)
- Posts with titles
- Summary and "read more" functionality
- Category descriptions
- Tags and categories
- Archive pages with pagination
- RSS feeds

### Content Types
- Text posts
- Photo posts
- Code blocks with syntax highlighting
- Blockquotes
- Lists and typography
- Embedded media (YouTube, etc.)

### Image Styling
The theme supports additional image classes for enhanced layouts:
- `img.full-width` - Extends image beyond text width
- `img.half-width` - Half-width images
- `img.thumbnail` - Small thumbnail images
- `img.frame` - Adds subtle border frame

### Navigation
- Automatic menu generation
- Custom menu items via Hugo configuration
- Mobile-optimized hamburger menu
- Keyboard accessible navigation

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- iOS Safari
- Android Chrome
- Graceful degradation for older browsers

## Development

This theme follows Micro.blog and Hugo best practices:

- All settings configured via `plugin.json`
- Semantic HTML structure
- CSS custom properties for easy customization
- Minimal JavaScript for enhanced UX
- Internationalization ready

## Contributing

1. Fork this repository
2. Make your changes
3. Test thoroughly on various devices and browsers
4. Submit a pull request with detailed description

## License

MIT License. See [LICENSE](LICENSE) file for details.

## Support

- **Documentation**: [help.micro.blog](https://help.micro.blog)
- **Issues**: [GitHub Issues](https://github.com/mattlangford/mythos-theme/issues)
- **Demo**: [mattlangford.com](https://mattlangford.com)

## Credits

Created by [Matt Langford](https://mattlangford.com) for the Micro.blog community.

Built with ❤️ for writers who value simplicity and readability.
