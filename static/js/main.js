/*!
 * Mythos Theme for Micro.blog - JavaScript
 * Author: Matt Langford | https://mattlangford.com
 * Repository: https://github.com/mattlangford/mythos-theme
 * License: MIT License
 */

(function() {
    'use strict';
    
    // Mobile menu toggle functionality
    function initMobileMenu() {
        // Enable JavaScript enhancement - hide CSS-only version
        document.documentElement.classList.add('js-enabled');
        
        const menuToggle = document.querySelector('.js-menu-toggle');
        const primaryMenu = document.querySelector('.primary-menu');
        const menuBackdrop = document.querySelector('.menu-backdrop');
        const cssToggleInput = document.querySelector('.menu-toggle-input');
        
        if (!menuToggle || !primaryMenu) return;
        
        // Show the JS menu toggle, hide CSS-only version
        menuToggle.style.display = 'flex';
        if (cssToggleInput) {
            cssToggleInput.style.display = 'none';
        }
        
        // Set up navigation overflow
        initNavigationOverflow();
        
        function openMenu() {
            menuToggle.setAttribute('aria-expanded', 'true');
            menuToggle.setAttribute('aria-label', 'Close main navigation menu');
            primaryMenu.classList.add('active');
            if (menuBackdrop) menuBackdrop.classList.add('active');
        }

        function closeMenu() {
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Open main navigation menu');
            primaryMenu.classList.remove('active');
            if (menuBackdrop) menuBackdrop.classList.remove('active');
        }
        
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            
            if (isExpanded) {
                closeMenu();
            } else {
                openMenu();
            }
        });
        
        // Close menu when clicking backdrop
        if (menuBackdrop) {
            menuBackdrop.addEventListener('click', closeMenu);
        }
        
        // Close menu when clicking outside (but not on backdrop - handled above)
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !primaryMenu.contains(e.target) && 
                (!menuBackdrop || !menuBackdrop.contains(e.target))) {
                closeMenu();
            }
        });
        
        // Close menu when pressing Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeMenu();
                menuToggle.focus();
            }
        });
        
        // Close menu when window is resized (in case user rotates device)
        window.addEventListener('resize', closeMenu);
    }
    
    
    // Navigation overflow handling for 7+ menu items
    function initNavigationOverflow() {
        const navMenu = document.querySelector('.nav-menu');
        if (!navMenu) return;
        
        const navItems = navMenu.querySelectorAll('.nav-item');
        
        // Add scrollable class if 7+ navigation items
        if (navItems.length >= 7) {
            navMenu.classList.add('scrollable');
            
            // Handle scroll-to-bottom detection for fade gradient
            navMenu.addEventListener('scroll', function() {
                const isScrolledToBottom = navMenu.scrollTop + navMenu.clientHeight >= navMenu.scrollHeight - 5;
                navMenu.classList.toggle('scrolled-to-bottom', isScrolledToBottom);
            });
        }
    }
    
    
    // Code block copy functionality
    function initCodeCopy() {
        const codeBlocks = document.querySelectorAll('pre');
        
        codeBlocks.forEach(function(pre) {
            const button = document.createElement('button');
            button.className = 'code-copy-button';
            button.textContent = 'Copy';
            button.setAttribute('aria-label', 'Copy code to clipboard');
            
            button.addEventListener('click', async function() {
                const code = pre.querySelector('code') || pre;
                const text = code.textContent;
                
                try {
                    if (navigator.clipboard && window.isSecureContext) {
                        await navigator.clipboard.writeText(text);
                        showCopiedFeedback(button);
                    } else {
                        const textArea = document.createElement('textarea');
                        textArea.value = text;
                        textArea.style.position = 'fixed';
                        textArea.style.left = '-999999px';
                        textArea.style.top = '-999999px';
                        document.body.appendChild(textArea);
                        textArea.focus();
                        textArea.select();
                        
                        try {
                            document.execCommand('copy');
                            showCopiedFeedback(button);
                        } catch (err) {
                            console.error('Failed to copy code:', err);
                        } finally {
                            textArea.remove();
                        }
                    }
                } catch (err) {
                    console.error('Failed to copy code:', err);
                }
            });
            
            pre.appendChild(button);
        });
        
        function showCopiedFeedback(button) {
            button.textContent = 'Copied!';
            button.setAttribute('aria-label', 'Code copied to clipboard');
            button.classList.add('copied');
            
            setTimeout(() => {
                button.textContent = 'Copy';
                button.setAttribute('aria-label', 'Copy code to clipboard');
                button.classList.remove('copied');
            }, 2000);
        }
    }
    
    // Copy link button functionality
    function initCopyLinkButtons() {
        const copyButtons = document.querySelectorAll('.copy-link-button');
        
        copyButtons.forEach(function(copyButton) {
            const url = copyButton.dataset.url;
            const copiedText = copyButton.dataset.copiedText;
            
            copyButton.addEventListener('click', async function() {
                try {
                    // Try modern clipboard API first
                    if (navigator.clipboard && window.isSecureContext) {
                        await navigator.clipboard.writeText(url);
                        showCopiedFeedback(copyButton, copiedText);
                    } else {
                        // Fallback for older browsers or non-HTTPS
                        const textArea = document.createElement('textarea');
                        textArea.value = url;
                        textArea.style.position = 'fixed';
                        textArea.style.left = '-999999px';
                        textArea.style.top = '-999999px';
                        document.body.appendChild(textArea);
                        textArea.focus();
                        textArea.select();
                        
                        try {
                            document.execCommand('copy');
                            showCopiedFeedback(copyButton, copiedText);
                        } catch (err) {
                            console.error('Failed to copy link:', err);
                        } finally {
                            textArea.remove();
                        }
                    }
                } catch (err) {
                    console.error('Failed to copy link:', err);
                }
            });
        });
        
        function showCopiedFeedback(button, copiedText) {
            const originalText = button.innerHTML;
            button.innerHTML = copiedText;
            button.classList.add('copied');
            button.disabled = true;
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.classList.remove('copied');
                button.disabled = false;
            }, 2000);
        }
    }
    
    // Initialize all functionality when DOM is ready
    function init() {
        initMobileMenu();
        initCodeCopy();
        initCopyLinkButtons();
    }
    
    // Run initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();