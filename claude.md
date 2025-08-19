# Claude.md — Project Guide for Claude Code

## Architecture
This project is a custom theme built for the Micro.blog platform which is powered by Hugo. Micro.blog does have platform specific requirements separate from those of Hugo. 

## Project Overview
**Goal:** Maintain a lightweight, feature-rich, readable Micro.blog theme with sharp typography, accessible color contrast, and minimal JS.
**Non-Negotiables:**
- Do not modify the `config.json` file as user settings can be overwritten on updates.
- Expose theme options via `plugin.json` only
- Keep the size as lean as possible. Prefer semantic HTML + CSS; avoid heavy libraries.
- Maintain accessibility sitewide
- Comment CSS files for users who may like to edit it themselves
- Support all documented Micro.blog features
- Optimize site for i18n localization using .json and `T` for the most common languages, making English default sitewide
- Use the 18 August 2025 date format
- Keep a `changelog.md` file that documents all changes, complete with version numbers
- Keep a `version.txt` file in the static folder alongside `main.css` that shows the version and last update date of the theme
- Keep the `readme.md` file updated with installation instructions, customization examples, design credits, and anything else essential

## Theme Options
Expose all user settings here. Do not use `config.json`.

Example `plugin.json`:

```json
{
  "name": "Bayou Theme",
  "version": "1.0.0",
  "author": "Your Name",
  "description": "A lightweight, accessible Micro.blog theme.",
  "params": [
	{
	  "name": "site_language",
	  "label": "Site Language",
	  "type": "select",
	  "default": "en",
	  "options": ["de","en","es","fi","fr","it","pt","ru"]
	},
	{
	  "name": "accent_color",
	  "label": "Accent Color (hex)",
	  "type": "text",
	  "default": "#0A7AFF",
	  "placeholder": "#0A7AFF"
	},
	{
	  "name": "show_profile_photo",
	  "label": "Show Profile Photo on Home",
	  "type": "checkbox",
	  "default": true
	},
	{
	  "name": "show_post_dates",
	  "label": "Show Dates on Posts",
	  "type": "checkbox",
	  "default": true
	},
	{
	  "name": "custom_css",
	  "label": "Custom CSS",
	  "type": "textarea",
	  "default": ""
	}
  ]
}
```

Access parameters in templates (example):

```html
{{/* Language */}}
<html lang="{{ or .Site.Params.site_language "en" }}">

{{/* Toggles */}}
{{ if .Site.Params.show_post_dates }}
  <time datetime="{{ .Date }}">{{ .Date.Format "Jan 2, 2006" }}</time>
{{ end }}
```

You cannot use parameters in static files (such as main.css).

## Template Rules
Base layout: layouts/_default/baseof.html
Lists: layouts/_default/list.html
Singles: layouts/_default/single.html
Home: layouts/index.html
Partials: layouts/partials/*

## Accessibility, Color, and Quality (Checklist to always pass)
- Semantic HTML and CSS
- No layout shifts on fonts/images
- Keyboard navigable
- Minimal JS; no blocking scripts in <head> (use defer)
- No template errors in Hugo
- Reasonable page weight

## CSS Naming and Conventions
- Use descriptive variables for all colors
- For dark mode, do not use true black
- Many users incorrectly use buttons nested inside of `<a></a>`, make sure you accomodate that with CSS
- Be consistent and use proper sizing methods (em vs rem vs px vs pt, etc)
- Include styles for all markdown elements
- Include additional styles for optional element such as p.alert, p.note, p.aside
- Include additional styles for optional image styling including img.full-width, img.half-width, img.thumbnail, and img.frame

## Micro.blog Specifics
- Not all posts will have titles. These are called microposts. You should always consider both using `{{ if .Title }} {{ end }}`.
- Make accomodations for Micro.blog's summary feature, read more tag, and full length post options
- Include support for Micro.blog's category description feature
- When unsure, use help.micro.blog for micro.blog documentation
- When unsure, use mattlangford.com to "view" the theme in realtime

## More Information
- Don't break micro.blog defaults
- Plugin.json must have defaults set
- Expect users to make heavy use of markdown styled code blocks
- Include accomodations for default YouTube embeds
- Include accomodations for popular Micro.blog plugins: Reply by email, Conversation on Micro.blog, custom home page, Font Awesome (by @manton), all phosphor icon plugins on micro.blog, archive with months, photos with months, photo collections, search space

Also include a proper git ignore.