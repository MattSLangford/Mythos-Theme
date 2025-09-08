# Mythos Hugo Theme Developer Agent

This directory contains the Claude Code agent configuration for the Mythos Theme development project.

## Agent Overview

The **Mythos Hugo Theme Developer** is a specialized Claude Code agent designed specifically for developing and maintaining the Mythos Theme for Hugo/Micro.blog. This agent has deep expertise in:

- Hugo theme development and architecture
- Micro.blog platform integration
- Accessibility and performance optimization  
- Internationalization (i18n) support
- Responsive design and CSS/SCSS
- Theme testing and debugging

## Files

- `agent.json` - Main agent configuration with instructions, capabilities, and permissions
- `settings.local.json` - Local permissions and overrides (gitignored)
- `README.md` - This documentation file

## Quick Start

1. **Activate the Agent**: Use the Claude Code CLI to activate this agent configuration:
   ```bash
   claude-code --agent=.claude/agent.json
   ```

2. **Common Development Tasks**: The agent is pre-configured to help with:
   - Layout and partial development
   - CSS/SCSS styling and responsive design
   - Template debugging and optimization
   - i18n translation management
   - Accessibility testing and improvements
   - Performance optimization
   - Version management and releases

## Agent Capabilities

### Hugo Expertise
- **Layouts**: Work with `_default`, `partials`, `post`, `section` layouts
- **Templating**: Hugo's Go template syntax and functions
- **Content**: Front matter, content organization, and taxonomies
- **Build Process**: Hugo build optimization and troubleshooting

### Theme Development
- **Responsive Design**: Mobile-first, accessible layouts
- **Performance**: Fast loading, optimized assets
- **Customization**: Plugin.json configuration management
- **Social Integration**: Multi-platform social media support

### Quality Assurance
- **Accessibility**: WCAG compliance and testing
- **Performance**: Lighthouse optimization
- **Cross-browser**: Compatibility testing
- **Validation**: HTML/CSS validation

### Internationalization
- **Multi-language**: Support for 15+ languages
- **Translation Management**: JSON translation files
- **RTL Support**: Right-to-left language considerations
- **Cultural Adaptation**: Region-specific customizations

## Project Resources

The agent has access to these key resources:

- **Live Demo**: https://mythos.micro.blog
- **Repository**: https://github.com/MattSLangford/Mythos-Theme  
- **Author Site**: https://mattlangford.com
- **Hugo Docs**: https://gohugo.io/documentation/
- **Micro.blog Help**: https://help.micro.blog

## Development Guidelines

### Code Standards
- Follow Hugo best practices and conventions
- Write semantic, accessible HTML
- Use clean, maintainable CSS (no frameworks)
- Minimize JavaScript usage
- Ensure cross-browser compatibility
- Maintain backwards compatibility

### Theme Philosophy
- **Minimal Design**: Clean black and white aesthetic
- **Performance First**: Fast loading and optimized
- **Accessibility**: WCAG compliant and screen reader friendly
- **Simplicity**: Avoid feature bloat, focus on core functionality

### Testing Approach
- Multi-device responsive testing
- Accessibility validation with screen readers
- Performance testing with Lighthouse
- i18n functionality across languages
- HTML/CSS validation

## Permissions

The agent is configured with appropriate permissions for theme development:

### Allowed
- File operations (Read, Write, Edit, MultiEdit)
- Code searching (Grep, Glob)  
- Command execution (Bash)
- Web research (WebFetch, WebSearch)
- Documentation access for Hugo, Micro.blog, accessibility

### Requires Confirmation
- File deletion operations
- Git push commands (to prevent accidental releases)

## Version Management

Current theme version: **1.3.9** (as of plugin.json)

The agent understands semantic versioning and will help with:
- Version bumping for releases
- Changelog maintenance  
- Git workflow and tagging
- Release preparation and testing

## Getting Help

The agent is designed to:
- Answer Hugo development questions
- Debug template and styling issues
- Suggest accessibility improvements
- Help with i18n implementations
- Optimize theme performance
- Guide through Micro.blog integration

## Customization

To customize the agent for your specific needs:

1. Edit `agent.json` to modify instructions or capabilities
2. Update `settings.local.json` for permission overrides
3. Add project-specific resources or constraints

## Troubleshooting

Common issues and solutions:

- **Permission Errors**: Check `settings.local.json` for required permissions
- **Path Issues**: Ensure working directories match your local setup
- **Web Access**: Verify network permissions for documentation sites

## Contributing

When making changes to the agent configuration:

1. Test the configuration with common development tasks
2. Update this README if adding new capabilities
3. Ensure permissions are appropriate for the intended use
4. Document any new resources or requirements

---

*This agent configuration is specifically tailored for the Mythos Theme project. For general Hugo development, consider creating a more generic Hugo agent configuration.*