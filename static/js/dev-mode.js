/*!
 * Mythos Theme - Development Mode
 * Author: Matt Langford | https://mattlangford.com
 * Repository: https://github.com/mattlangford/mythos-theme
 * License: MIT License
 */

(function() {
    'use strict';
    
    // Development mode functionality
    function initDevMode() {
        // Add development mode indicator
        const indicator = document.createElement('div');
        indicator.className = 'dev-mode-indicator';
        indicator.textContent = '🔧 DEV MODE';
        indicator.title = 'Development mode is active. Hover over elements to see CSS info. Click for details.';
        document.body.appendChild(indicator);
        
        // Create hover overlay
        const overlay = document.createElement('div');
        overlay.className = 'dev-hover-overlay';
        document.body.appendChild(overlay);
        
        // Create tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'dev-tooltip';
        document.body.appendChild(tooltip);
        
        // Create info panel
        const infoPanel = document.createElement('div');
        infoPanel.className = 'dev-info-panel';
        document.body.appendChild(infoPanel);
        
        // Track mouse movement
        let currentElement = null;
        
        document.addEventListener('mousemove', function(e) {
            // Skip dev mode elements
            if (e.target.closest('.dev-mode-indicator, .dev-hover-overlay, .dev-tooltip, .dev-info-panel')) {
                return;
            }
            
            const element = e.target;
            
            if (element !== currentElement) {
                currentElement = element;
                
                // Get element info
                const rect = element.getBoundingClientRect();
                const classList = Array.from(element.classList).join(' ');
                
                // Position overlay
                overlay.style.display = 'block';
                overlay.style.left = (rect.left + window.scrollX) + 'px';
                overlay.style.top = (rect.top + window.scrollY) + 'px';
                overlay.style.width = rect.width + 'px';
                overlay.style.height = rect.height + 'px';
                
                // Show tooltip with class info
                const tagName = element.tagName.toLowerCase();
                const tooltipText = `${tagName}${classList ? '.' + classList.replace(/\s+/g, '.') : ''}`;
                tooltip.textContent = tooltipText;
                tooltip.style.display = 'block';
                
                // Position tooltip near cursor but keep on screen
                const tooltipRect = tooltip.getBoundingClientRect();
                let tooltipX = e.clientX + 10;
                let tooltipY = e.clientY - 30;
                
                // Keep tooltip on screen
                if (tooltipX + tooltipRect.width > window.innerWidth) {
                    tooltipX = e.clientX - tooltipRect.width - 10;
                }
                if (tooltipY < 0) {
                    tooltipY = e.clientY + 20;
                }
                
                tooltip.style.left = tooltipX + 'px';
                tooltip.style.top = tooltipY + 'px';
            } else {
                // Update tooltip position
                const tooltipRect = tooltip.getBoundingClientRect();
                let tooltipX = e.clientX + 10;
                let tooltipY = e.clientY - 30;
                
                if (tooltipX + tooltipRect.width > window.innerWidth) {
                    tooltipX = e.clientX - tooltipRect.width - 10;
                }
                if (tooltipY < 0) {
                    tooltipY = e.clientY + 20;
                }
                
                tooltip.style.left = tooltipX + 'px';
                tooltip.style.top = tooltipY + 'px';
            }
        });
        
        // Hide on mouse leave from document
        document.addEventListener('mouseleave', function() {
            overlay.style.display = 'none';
            tooltip.style.display = 'none';
        });
        
        // Click to pin info panel
        document.addEventListener('click', function(e) {
            // Skip dev mode elements except indicator
            if (e.target.closest('.dev-hover-overlay, .dev-tooltip, .dev-info-panel')) {
                return;
            }
            
            // Close panel if clicking indicator
            if (e.target.closest('.dev-mode-indicator')) {
                if (infoPanel.style.display === 'block') {
                    infoPanel.style.display = 'none';
                    clearHighlights();
                }
                return;
            }
            
            const element = e.target;
            const computedStyle = window.getComputedStyle(element);
            const classList = Array.from(element.classList).join(' ');
            
            updateInfoPanel(element, computedStyle, classList);
            infoPanel.style.display = 'block';
            
            // Add highlight
            clearHighlights();
            element.classList.add('dev-element-highlight');
        });
        
        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            // ESC to hide info panel
            if (e.key === 'Escape') {
                infoPanel.style.display = 'none';
                clearHighlights();
            }
            
            // Ctrl+Shift+D to toggle dev mode visibility
            if (e.ctrlKey && e.shiftKey && e.key === 'D') {
                e.preventDefault();
                toggleDevMode();
            }
        });
        
        function updateInfoPanel(element, computedStyle, classList) {
            const tagName = element.tagName.toLowerCase();
            const fontSize = computedStyle.fontSize;
            const color = rgbToHex(computedStyle.color);
            const backgroundColor = rgbToHex(computedStyle.backgroundColor);
            const display = computedStyle.display;
            const position = computedStyle.position;
            const width = Math.round(element.getBoundingClientRect().width);
            const height = Math.round(element.getBoundingClientRect().height);
            
            infoPanel.innerHTML = `
                <h4>🔍 Element Info</h4>
                <strong>Tag:</strong> <code>&lt;${tagName}&gt;</code><br>
                <strong>Classes:</strong> <code>${classList || 'none'}</code><br>
                <strong>Size:</strong> <code>${width}px × ${height}px</code><br>
                <strong>Font Size:</strong> <code>${fontSize}</code><br>
                <strong>Display:</strong> <code>${display}</code><br>
                <strong>Position:</strong> <code>${position}</code><br>
                <strong>Text Color:</strong> <code>${color}</code><br>
                <strong>Background:</strong> <code>${backgroundColor}</code><br>
                <small>💡 Use these class names in Custom CSS<br>
                🖱️ Click indicator to close • ESC to close • Ctrl+Shift+D to toggle</small>
            `;
        }
        
        function clearHighlights() {
            document.querySelectorAll('.dev-element-highlight').forEach(el => {
                el.classList.remove('dev-element-highlight');
            });
        }
        
        function toggleDevMode() {
            const devElements = document.querySelectorAll('.dev-mode-indicator, .dev-hover-overlay, .dev-tooltip, .dev-info-panel');
            const isVisible = indicator.style.display !== 'none';
            
            devElements.forEach(el => {
                el.style.display = isVisible ? 'none' : '';
            });
            
            if (isVisible) {
                clearHighlights();
            }
        }
        
        // Helper function to convert rgb to hex
        function rgbToHex(rgb) {
            if (rgb.includes('rgba(0, 0, 0, 0)') || rgb.includes('transparent')) {
                return 'transparent';
            }
            
            const rgbMatch = rgb.match(/\d+/g);
            if (!rgbMatch) return rgb;
            
            const r = parseInt(rgbMatch[0]);
            const g = parseInt(rgbMatch[1]);
            const b = parseInt(rgbMatch[2]);
            
            return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        }
        
        // Console welcome message
        console.log('🔧 Mythos Development Mode Active');
        console.log('💡 Hover over elements to see CSS class names');
        console.log('🖱️ Click elements to see detailed info');
        console.log('⌨️ Keyboard shortcuts:');
        console.log('   • ESC: Close info panels');
        console.log('   • Ctrl+Shift+D: Toggle dev mode visibility');
        console.log('   • Click dev mode indicator: Close info panel');
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDevMode);
    } else {
        initDevMode();
    }
})();