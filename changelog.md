# Changelog

All notable changes to the Mythos Theme will be documented in this file.

## [1.3.0] - 2025-09-03

### ✨ Major New Features
- **Social Media Integration System**: Complete social platform support with flexible icon grid layout and FontAwesome integration
- **Complete Navigation System Redesign**: Fixed buggy menu with new mobile full-screen slide-in and desktop dropdown implementation
- **Fediverse Creator Support**: Added journalist byline highlighting for enhanced link previews on Mastodon, Threads, and other fediverse platforms
- **Contact Security Enhancement**: Replaced email field with contact form URL to prevent spam harvesting

### 🎨 Design & UX Improvements
- **Enhanced Mobile Menu**: Full-screen overlay with backdrop and proper z-index layering
- **Scrollable Navigation**: Added fade gradient indicator for menus with 7+ items
- **Social Icon Layout**: Dynamic 1-4 column grid system that adapts to number of configured platforms
- **Aggressive Icon Hiding**: Smart social icon hiding on short screens to prevent browser UI conflicts

### 🔧 Technical Improvements & Simplification
- **CSS Consolidation**: Simplified menu system from 8+ breakpoints down to 2 for easier maintenance
- **FontAwesome Always Available**: Removed toggle option, icons now always loaded for consistent functionality
- **Plugin Field Organization**: Reorganized configuration fields for better user experience and logical grouping
- **JavaScript Optimization**: Updated navigation overflow detection and social grid calculations

### ♿ Accessibility Enhancements
- **ARIA Improvements**: Enhanced menu accessibility with proper expanded states and labels
- **Focus Management**: Better keyboard navigation and focus handling in redesigned menu system
- **Cross-browser Compatibility**: Removed problematic CSS selectors for broader browser support

## [1.3.2] - 2025-09-04

### ✨ Progressive Enhancement for JavaScript-Disabled Users
- **CSS-Only Mobile Menu**: Implemented checkbox-based mobile menu that works without JavaScript using progressive enhancement
- **Universal Navigation Access**: Mobile navigation now functional for all users, regardless of JavaScript support
- **Smart Social Icons**: Social icons automatically hide when JavaScript is disabled (they require JS for proper grid layout)
- **Enhanced Accessibility**: No-JavaScript users get full navigation functionality while JavaScript users retain enhanced features

### 🔧 Technical Implementation
- **Dual Menu System**: CSS-only label/checkbox for base functionality, enhanced JavaScript button for additional features
- **Progressive Enhancement Pattern**: `.no-js` and `.js` classes automatically detect JavaScript availability
- **Graceful Degradation**: JavaScript failures no longer break mobile navigation
- **Maintained Features**: JavaScript users keep all existing functionality (escape key, click-outside, backdrop, animations)

## [1.3.1] - 2025-09-04

### 🔧 Bug Fixes & Improvements
- **Site Branding Alignment**: Fixed vertical alignment of site title and avatar by changing `.site-title a` from `display: inline-flex` to `display: flex`
- **Navigation Spacing**: Added `margin: 0` to `.nav-menu` on desktop (min-width: 769px) to fix odd spacing issues in navigation menu

## [1.2.3] - 2025-09-02

### ✨ New Features Added
- **New Content Utility Styles**:
  - `p.lead` - Larger text style for intro paragraphs with enhanced readability (20px font, looser line height)
  - `blockquote.verse` - Special Bible verse styling with centered serif typography, decorative quote mark, and citation support
  - `img.vintage` - Scrapbook-style image with cream border frame, subtle rotation, and hover animation

### 🔧 Technical Improvements  
- **Microblog Avatar Spacing**: Fixed avatar margin-top alignment by adding `margin-top: 0` to `.microblog_avatar` class
- **Dark Mode Compatibility**: Added proper dark mode variants for all new utility styles

### 🎨 Design Details
- **Lead Paragraphs**: Uses larger font size with looser line height for enhanced readability of introductory content
- **Bible Verses**: Clean, traditional formatting with Georgia serif font, no background/borders, and elegant citation styling  
- **Vintage Images**: Photo frame effect with cream borders, subtle shadows, slight rotation, and straightening hover animation

## [1.2.2] - 2025-09-02

### ✨ New Features Added
- **Code Block Copy Buttons**: One-click copy functionality for all code blocks with hover reveal and visual feedback
- **Redesigned Navigation System**: 
  - Mobile: Full-screen overlay with semi-transparent backdrop and centered menu
  - Desktop: Clean dropdown with vertical list layout
  - Supports unlimited navigation items with proper accessibility

### 🎨 Design & UX Improvements
- **Navigation Ordering Fixed**: Natural 1-2-3-4-5 order instead of scattered column layout
- **Mobile Navigation UX**: Full-screen overlay prevents menu ordering issues and accommodates any number of links
- **Enhanced Touch Interactions**: Fixed stuck hover states on mobile hamburger menu

### 🔧 Technical Improvements & Code Cleanup
- **CSS Consolidation**: 
  - Consolidated 3 separate mobile media queries into 1 unified block (~75 lines saved)
  - Unified button styles with base `.btn` class (~25+ lines saved)
  - Added CSS custom properties for shadows and border radius values
- **Code Quality**: Removed 187 inline property comments for cleaner, more maintainable CSS
- **Removed Dead Code**: Eliminated improper `<a><button>` nesting styles and duplicate `.table-wrapper` definition

### 🌐 Internationalization Improvements
- **Swedish Translation Refinements**: Improved grammar and changed from title case to sentence case

## [1.2.1] - 2025-09-01

### ✨ New Features Added
- **FontAwesome Icons Support**: Added optional FontAwesome 7.0.0 integration via `enable_fontawesome` plugin setting
- **Custom HTML Injection**: Added two new plugin fields for enhanced customization:
  - `custom_head_html`: Inject custom HTML/scripts before `</head>`
  - `custom_body_html`: Inject custom HTML/scripts before `</body>`

### 🌐 Internationalization Improvements
- **Localized Date Formatting**: Replaced all hard-coded English date formats with Hugo's localized date tokens
  - Dates now properly display in correct language and regional format (e.g., "June 6" vs "6 juin")
  - Affects all template files: index.html, post/single.html, section/replies.html, list templates

### 🔧 Technical Improvements
- **Archive Plugin Compatibility**: Fixed compatibility issue with archive by months plugin

## [1.2.0] - 2025-08-22

### ✨ New Features Added
- **Smart Social Media Images**: Home page now automatically uses avatar (custom or default) as social media image for Twitter, Facebook, and other social sharing platforms

## [1.1.2] - 2025-08-22

### 🎨 Design & UX Improvements
- **Archive Page Enhancement**: Redesigned archive list with clean date-first layout, showing titles for posts and 50-character summaries for microposts
- **Table Styling**: Added comprehensive table styling with headers, zebra striping, hover effects, and mobile responsiveness
- **Image Classes Refinement**: Renamed `img.thumbnail` to `img.small` for better clarity
- **Figure Captions**: Added centered, elegant caption styling for images
- **Photo Grid Fix**: Corrected Micro.blog photo grid alignment issues with proper column distribution

### ✨ New Features Added  
- **Enhanced Text Elements**: Added support for `<highlight>`, `<mark>`, and `<abbr>` elements with proper styling
- **Footnote Styling**: Clean footnote link styling without underlines, with subtle hover effects
- **More Tag Logic**: Improved `<!--more-->` tag behavior to work consistently regardless of summary settings

### 🔧 Technical Improvements
- **Template Logic Enhancement**: Fixed summary truncation logic to properly respect manual `<!--more-->` tags vs automatic summaries
- **Mobile Responsiveness**: Enhanced archive page layout with stacked design on mobile devices
- **CSS Organization**: Added comprehensive commenting and user-friendly explanations throughout stylesheets

### 📝 Content & Documentation
- **README Rewrite**: Completely rewrote documentation with non-technical language, focusing users to mythos.micro.blog for detailed guides
- **Version Management**: Updated all version references and cache-busting URLs

## [1.1.1] - 2025-08-21

### ✨ New Features Added
- **Copy Link Functionality**: Added one-click permalink copying on single posts with "Copy Link" button
- **Development Mode**: Interactive CSS inspection tool for easy theme customization
  - Hover elements to see CSS class names
  - Click elements for detailed styling information
  - Keyboard shortcuts for power users
  - Mobile-responsive design
  - Only loads when enabled via plugin settings
- **Comprehensive Internationalization**: Copy link feature includes translations for all 16 supported languages

### 🎨 Design & UX Improvements  
- **Smart Navigation Menu**: Automatic 2-column layout when 6+ navigation items for better space utilization
- **Enhanced CSS Documentation**: Added comprehensive user-friendly comments throughout CSS for easy customization
- **Mobile Navigation Optimization**: Improved spacing and typography on mobile devices for better touch experience
- **Comprehensive Table Styling**: Added complete table styling system with headers, zebra striping, hover effects, and mobile responsiveness

### 🔧 Technical Improvements
- **Professional Attribution**: Added proper design credits to CSS and JavaScript files with minification-safe syntax
- **Cross-Browser Compatibility**: Added fallback support for `:has()` selector in navigation menu
- **Accessibility Enhancement**: Improved keyboard navigation and focus management for mobile menu

### 📱 Mobile & Responsive Enhancements
- **Touch-Friendly Navigation**: Better button sizing and spacing on mobile devices
- **Responsive Menu Layout**: Optimized 2-column navigation for different screen sizes
- **Enhanced Mobile Typography**: Improved font sizes and spacing for small screens

## [1.1.0] - 2025-08-20

### ✨ Major Features Added
- **Comprehensive Internationalization**: Added support for 16 languages (English, Spanish, French, German, Portuguese, Italian, Russian, Japanese, Finnish, Swedish, Ukrainian, Chinese Traditional/Simplified, Korean, Dutch, Polish, Norwegian)
- **Post Summary System**: Intelligent post summaries with `<!--more-->` tag support and 150-word fallback for titled posts
- **Plugin System Expansion**: Added `use_post_summaries` parameter for feed page customization

### 🎨 Design & Visual Improvements
- **Enhanced Typography**: Added subtle letter-spacing (0.01em) for improved readability
- **Responsive Image System**: Full-width images now cap at 1200px instead of infinite width for better ultra-wide display support
- **Form Styling**: Comprehensive form element styling to match theme design (search inputs, buttons, etc.)
- **Touch-Friendly Design**: All interactive elements now meet 44px minimum touch target requirements

### ♿ Accessibility Enhancements
- **WCAG 2.1 AA Compliance**: Improved color contrast ratios across all elements
  - Updated accent color from #888888 to #666666 (4.04:1 → 6.07:1 ratio)
  - Fixed special paragraph colors (p.note, p.alert) to meet contrast standards
- **Advanced ARIA Support**: Added comprehensive ARIA labels, roles, and navigation attributes
- **Keyboard Navigation**: Enhanced focus indicators and tab navigation throughout
- **Reduced Motion Support**: Added `prefers-reduced-motion` media query for accessibility
- **Screen Reader Optimization**: Improved semantic markup and content structure

### 🚀 Performance Optimizations
- **CSS Consolidation**: Reduced duplicate code by 45+ lines through shared button styles
- **Custom Property System**: Expanded CSS variables for better maintainability
- **Cache Busting**: Version-based CSS cache invalidation system
- **Lazy Loading Documentation**: Added guidance for image optimization

### 📱 Mobile & Responsive Improvements
- **Touch Target Compliance**: All buttons and interactive elements meet 44px minimum
- **Mobile Form Optimization**: Better mobile layout for search and form elements
- **Responsive Media Queries**: Better organized and consolidated breakpoint styles
- **Mobile Typography**: Optimized font sizes and spacing for small screens

### 🔧 Technical Improvements
- **Template Optimization**: Cleaned up unused template code and improved logic
- **CSS Architecture**: Better organization with consolidated selectors and shared styles
- **Plugin Integration**: Enhanced support for Micro.blog plugins (Search Space, Conversation, Reply by Email)
- **Category System**: Added post counts to category displays and improved navigation
- **Meta Tag Enhancement**: Updated to follow modern Micro.blog patterns

### 🌐 Micro.blog Platform Integration
- **Enhanced Plugin Support**: Better integration with popular Micro.blog plugins
- **Category Descriptions**: Added elegant support for category introductions
- **Archive Improvements**: Enhanced monthly and category archive displays
- **Conversation Integration**: Better styling for Micro.blog conversation features

### 🐛 Bug Fixes & Clean-up
- **Removed Unused Code**: Cleaned up unused CSS classes and duplicate definitions
- **Fixed Template Logic**: Improved conditional rendering for various content types
- **Color Consistency**: Standardized color usage throughout the theme
- **Form Alignment**: Fixed height mismatches between form inputs and buttons
- **Footer Consistency**: Unified footer background with site background

### 📝 Content & Documentation
- **Comprehensive README**: Complete rewrite with installation, customization, and usage guides
- **Code Documentation**: Added detailed CSS comments and user guidance
- **Version Tracking**: Implemented proper version numbering across all theme files

### 🗑️ Removed/Deprecated
- **Unused Image Classes**: Removed `img.avatar-image` and `img.profile-photo` (unused)
- **Conflicting CSS Rules**: Eliminated duplicate blockquote and pre element styling
- **Redundant Code**: Removed 15+ lines of duplicate button and layout styles

## [1.0.0] - 2025-08-18

### Initial Release
- Basic theme structure with clean, minimal design
- Responsive layout with mobile-first approach
- Essential Micro.blog integration
- Basic plugin system with core parameters
- Standard accessibility features
- Multi-language foundation