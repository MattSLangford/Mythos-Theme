# Changelog

All notable changes to the Mythos Theme will be documented in this file.

## [1.1.1] - 2025-08-21

### ✨ New Features Added
- **Copy Link Functionality**: Added one-click permalink copying on single posts with "Copy Link" button
- **Comprehensive Internationalization**: Copy link feature includes translations for all 16 supported languages

### 🎨 Design & UX Improvements  
- **Smart Navigation Menu**: Automatic 2-column layout when 6+ navigation items for better space utilization
- **Enhanced CSS Documentation**: Added comprehensive user-friendly comments throughout CSS for easy customization
- **Mobile Navigation Optimization**: Improved spacing and typography on mobile devices for better touch experience

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