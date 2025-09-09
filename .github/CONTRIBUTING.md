# Contributing to Mythos Theme

Thank you for your interest in contributing to the Mythos theme for Micro.blog!

## Before You Start

This is a **Micro.blog theme**, not a generic Hugo theme. It requires specific testing and considerations.

### Prerequisites
- A Micro.blog account for testing
- Basic understanding of Hugo templates
- For translations: familiarity with Hugo's i18n system

## Getting Started

1. Fork this repository
2. Clone your fork locally
3. Make your changes
4. Test thoroughly (see Testing section)
5. Submit a pull request

## Testing Your Changes

**Important:** You must test changes on an actual Micro.blog site, not just `hugo serve`.

You have two options for testing:

### Option 1: Upload Fork as New Plugin
1. Go to Micro.blog > Design > Edit Themes > New Plug-in **(NOT New Theme)**
2. Upload your forked repository for testing
3. Apply the plugin to test your changes

### Option 2: Manual Custom Theme Testing
1. Go to Micro.blog > Design > Custom Theme
2. Manually add your modified files/code
3. Test changes separately from GitHub

Choose the method that works best for your workflow.

## Types of Contributions

### Bug Fixes
- Describe the problem clearly
- Include screenshots if visual
- Test fix on Micro.blog site

### New Features
- Open an issue first to discuss
- Ensure compatibility with Micro.blog's Hugo version
- Avoid external dependencies when possible

### Translations
We support 19 languages! To contribute translations:

1. Check `i18n/` folder for your language file
2. Use existing translations as reference for tone/style
3. Ensure all required keys are translated
4. Test with a Micro.blog site set to your language

## Code Style

- Follow existing HTML/CSS patterns in the theme
- Use semantic HTML
- Keep CSS organized and commented
- Match existing indentation (2 spaces)

## Plugin.json

If modifying `plugin.json`:
- Validate JSON syntax
- Don't change version numbers (maintainer handles this)
- Ensure all required fields remain intact

## Submission Guidelines

- Fill out the pull request template completely
- Include screenshots for visual changes
- Reference any related issues
- Keep PRs focused on a single change when possible

## Questions?

Open an issue with the "question" label or reach out to the maintainer.