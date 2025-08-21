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
        const menuToggle = document.querySelector('.menu-toggle');
        const primaryMenu = document.querySelector('.primary-menu');
        
        if (!menuToggle || !primaryMenu) return;
        
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            
            // Toggle aria-expanded attribute
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle menu visibility
            if (isExpanded) {
                primaryMenu.classList.remove('active');
            } else {
                primaryMenu.classList.add('active');
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !primaryMenu.contains(e.target)) {
                menuToggle.setAttribute('aria-expanded', 'false');
                primaryMenu.classList.remove('active');
            }
        });
        
        // Close menu when pressing Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                menuToggle.setAttribute('aria-expanded', 'false');
                primaryMenu.classList.remove('active');
                menuToggle.focus();
            }
        });
        
        // Close menu when window is resized (in case user rotates device)
        window.addEventListener('resize', function() {
            menuToggle.setAttribute('aria-expanded', 'false');
            primaryMenu.classList.remove('active');
        });
    }
    
    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // Add loading state to images
    function initImageLoading() {
        const images = document.querySelectorAll('img:not(.avatar-image)');
        
        images.forEach(function(img) {
            if (img.complete) {
                img.classList.add('loaded');
            } else {
                img.addEventListener('load', function() {
                    this.classList.add('loaded');
                });
            }
        });
    }
    
    // Initialize all functionality when DOM is ready
    function init() {
        initMobileMenu();
        initSmoothScrolling();
        initImageLoading();
    }
    
    // Run initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();