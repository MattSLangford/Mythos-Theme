# Mythos Theme

A minimal, fast, and highly readable Micro.blog theme with clean black and white design.

## ! Credits

Mythos is created and maintained by [Matt Langford](https://mattlangford.com).

## ✨ Features

- **Ultra-Fast Performance**: 24KB total CSS with zero external dependencies
- **WCAG 2.1 AA Compliant**: Exceptional accessibility with proper contrast ratios and keyboard navigation
- **16 Language Support**: Comprehensive internationalization (i18n) including English, Spanish, French, German, Portuguese, Italian, Russian, Japanese, Finnish, Swedish, Ukrainian, Chinese (Traditional/Simplified), Korean, Dutch, Polish, and Norwegian
- **Intelligent Post Summaries**: Automatic summaries with `<!--more-->` tag support and smart fallbacks
- **Touch-Friendly Design**: 44px minimum touch targets for optimal mobile experience
- **Responsive Typography**: Optimized reading experience across all devices
- **Plugin Ecosystem**: Deep integration with popular Micro.blog plugins
- **Advanced Customization**: Extensive theme options and custom CSS support
- **Modern CSS**: Uses CSS Grid, Flexbox, and custom properties for maintainable code
- **SEO Optimized**: Proper meta tags, Open Graph, and semantic markup

## 📦 Installation

1. Log into your Micro.blog account
2. Go to **Plugins** in the dashboard
3. Click **Plug-in Directory**
5. Choose **Mythos Theme** from the plugin directory
6. Click **Install**
7. Once installed, click **Settings** to customize (you may need to refresh to see Settings)

## ⚙️ Theme Settings

All theme customization is done through the Micro.blog dashboard under **Design → Edit Themes → Mythos Theme**.

### Available Settings

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| **Site Language** | Text | `en` | Language code (en, fr, es, de, pt, it, ru, ja, fi, sv, uk, zh-TW, zh-CN, ko, nl, pl, no) |
| **Posts per Page** | Number | `10` | Number of posts to display on home and archive pages |
| **Avatar Link** | Text | _(empty)_ | URL to custom avatar image (overrides default) |
| **Hide Avatar** | Checkbox | `false` | Hide the avatar image in the site header |
| **Hide Category Links on Posts** | Checkbox | `false` | Remove category links from individual posts |
| **Hide Categories on Archive Page** | Checkbox | `false` | Remove category listing from archive page |
| **Hide Footer Credits** | Checkbox | `false` | Remove "Powered by" and theme credits |
| **Use Post Summaries on Feed Pages** | Checkbox | `false` | Show post summaries instead of full content on home/archive pages |
| **Hide Copy Link Buttons on Posts** | Checkbox | `false` | Remove copy link buttons from individual posts |
| **Enable Development Mode** | Checkbox | `false` | Shows CSS class names and element info for customization. **DISABLE for production sites.** |

### Post Summary Behavior

- **Microposts** (posts without titles): Always show full content
- **Titled posts**: Show full content by default
- **When "Use Post Summaries" is enabled**: 
  - Uses content before `<!--more-->` tag if present
  - Falls back to first 150 words with "Continue Reading" link
  - Only applies to home page and archive pages

### Development Mode

**Enable Development Mode** to see CSS class names and element information while customizing your site:

1. Go to **Design → Edit Themes → Mythos Theme → Settings**
2. Check **"Enable Development Mode"**
3. Visit your site - you'll see a red "🔧 DEV MODE" indicator
4. **Hover** over any element to see its CSS classes
5. **Click** elements to see detailed information (colors, sizes, properties)
6. **Copy** class names for use in Custom CSS
7. **Remember to disable** when you're done customizing

**Keyboard Shortcuts:**
- `ESC` - Close info panels
- `Ctrl+Shift+D` - Toggle development mode visibility
- Click dev mode indicator - Close info panel

**⚠️ Important:** Always disable development mode on production sites - it's only for customization work.

## 🎨 Advanced Customization

### Custom CSS

Add custom styles through **Design → Edit Themes → Mythos Theme → Custom CSS** field:

```css
/* Example: Change accent color */
:root {
    --color-accent: #0066cc;
}

/* Example: Larger post titles */
.post-title {
    font-size: 2rem;
}

/* Example: Custom blockquote styling */
blockquote {
    border-left-color: #ff6b6b;
    background-color: #fff5f5;
}

/* Example: Hide post dates */
.post-meta {
    display: none;
}

/* Example: Custom font for headings */
h1, h2, h3, h4, h5, h6 {
    font-family: "Georgia", serif;
}
```

### Custom Footer

Add custom footer content through **Design → Edit Themes → Mythos Theme → Footer** section in the Micro.blog dashboard. This content will appear above the theme credits.

## 🖼️ Content Styling Options

### Image Classes

Apply these classes to images in your posts:

- `img.full-width` - Breaks out of content width (max 1200px)
- `img.half-width` - 50% width, centered
- `img.small` - 150px width, left-aligned with text wrap
- `img.frame` - Adds elegant border and shadow

Example usage:
```html
<img src="/photo.jpg" alt="Description" class="full-width">
```

### Special Paragraphs

Create styled content blocks:

- `p.alert` - Yellow warning/attention block
- `p.note` - Blue informational block  
- `p.aside` - Gray sidebar-style content

Example usage:
```html
<p class="alert">This is important information!</p>
<p class="note">Here's a helpful tip.</p>
<p class="aside">This is supplementary information.</p>
```

### Figure Styling

- `figure.full-width` - Full-width figure with caption

## 🔌 Micro.blog Features Supported

### Core Features
- **Posts and Microposts**: Full support for titled and untitled posts
- **Categories**: Display and navigation with post counts
- **Archives**: Category-based archive pages
- **Pagination**: Accessible pagination with proper ARIA labels
- **RSS Feeds**: Automatic feed discovery and linking
- **Custom Pages**: Support for static pages and custom layouts

### Plugin Integration
- Most popular plugins including (but not limited to) Reply By Email, Conversation on M.b, and Search Space are fully supported.

## 🌐 Internationalization

The theme includes complete translations for:

- **English** (en) - Default
- **Spanish** (es) - Español
- **French** (fr) - Français  
- **German** (de) - Deutsch
- **Portuguese** (pt) - Português
- **Italian** (it) - Italiano
- **Russian** (ru) - Русский
- **Japanese** (ja) - 日本語
- **Finnish** (fi) - Suomi
- **Swedish** (sv) - Svenska
- **Ukrainian** (uk) - Українська
- **Chinese Traditional** (zh-TW) - 繁體中文
- **Chinese Simplified** (zh-CN) - 简体中文
- **Korean** (ko) - 한국어
- **Dutch** (nl) - Nederlands
- **Polish** (pl) - Polski
- **Norwegian** (no) - Norsk

Set your language using the "Site Language" setting in the theme options.

## 🛠️ Contributing

### Reporting Issues
Found a bug or have a suggestion? Please report it on [GitHub Issues](https://github.com/mattlangford/mythos-theme/issues).

### Contributing Code
1. Fork the repository on GitHub
2. Create a feature branch for your changes
3. Make your modifications
4. Test thoroughly across different screen sizes
5. Submit a pull request with a clear description

### Translation Contributions
Help improve or add language support by:
1. Editing files in the `i18n/` directory
2. Following the existing translation format
3. Testing with your language setting
4. Submitting a pull request

## 📄 License

This theme is released under the MIT License. See the [LICENSE](LICENSE) file for details.

## 💬 Support

- **Theme Issues**: [GitHub Issues](https://github.com/mattlangford/mythos-theme/issues)
- **Micro.blog Platform**: [Micro.blog Help](https://help.micro.blog)
- **Community**: [Micro.blog Community](https://help.micro.blog/)

## 📈 Version History

- **v1.1.1** (2025-08-21): Copy link functionality, smart 2-column navigation, enhanced CSS documentation, mobile improvements
- **v1.1.0** (2025-08-20): Major accessibility improvements, internationalization, post summaries, performance optimizations
- **v1.0.0** (2025-08-18): Initial release with core features and clean design

---

**Built with ❤️ for the Micro.blog community**

*Mythos Theme focuses on what matters most: your content. Clean, fast, and accessible design that gets out of the way of your words.*
