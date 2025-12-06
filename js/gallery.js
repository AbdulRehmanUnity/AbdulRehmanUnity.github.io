// Screenshot Gallery Component
class ScreenshotGallery {
    constructor(container, images) {
        this.container = container;
        this.images = images;
        this.currentIndex = 0;
        this.isFullscreen = false;
        this.touchStartX = 0;
        this.touchEndX = 0;
        
        this.init();
    }
    
    init() {
        this.render();
        this.attachEventListeners();
    }
    
    render() {
        if (!this.images || this.images.length === 0) {
            this.container.innerHTML = '<p class="text-center">No screenshots available</p>';
            return;
        }
        
        const slides = this.images.map((image, index) => `
            <div class="gallery-slide">
                <img src="${image}" alt="Screenshot ${index + 1}" loading="lazy">
            </div>
        `).join('');
        
        const dots = this.images.map((_, index) => `
            <div class="gallery-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
        `).join('');
        
        this.container.innerHTML = `
            <div class="screenshot-gallery">
                <div class="gallery-container">
                    <div class="gallery-slides" style="transform: translateX(0%)">
                        ${slides}
                    </div>
                    
                    ${this.images.length > 1 ? `
                        <button class="gallery-nav prev" aria-label="Previous image">
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                            </svg>
                        </button>
                        <button class="gallery-nav next" aria-label="Next image">
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                        
                        <div class="gallery-info">
                            <span class="gallery-counter">${this.currentIndex + 1} / ${this.images.length}</span>
                        </div>
                    ` : ''}
                </div>
                
                ${this.images.length > 1 ? `
                    <div class="gallery-dots">
                        ${dots}
                    </div>
                ` : ''}
            </div>
        `;
    }
    
    attachEventListeners() {
        if (this.images.length <= 1) return;
        
        // Navigation buttons
        const prevBtn = this.container.querySelector('.gallery-nav.prev');
        const nextBtn = this.container.querySelector('.gallery-nav.next');
        
        if (prevBtn) prevBtn.addEventListener('click', () => this.prev());
        if (nextBtn) nextBtn.addEventListener('click', () => this.next());
        
        // Dots navigation
        const dots = this.container.querySelectorAll('.gallery-dot');
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Touch/Swipe support
        const galleryContainer = this.container.querySelector('.gallery-container');
        if (galleryContainer) {
            galleryContainer.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
            galleryContainer.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: true });
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyDown(e));
        
        // Double-click for fullscreen
        const slides = this.container.querySelector('.gallery-slides');
        if (slides) {
            slides.addEventListener('dblclick', () => this.toggleFullscreen());
        }
    }
    
    prev() {
        this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
        this.updateGallery();
    }
    
    next() {
        this.currentIndex = this.currentIndex < this.images.length - 1 ? this.currentIndex + 1 : 0;
        this.updateGallery();
    }
    
    goToSlide(index) {
        this.currentIndex = index;
        this.updateGallery();
    }
    
    updateGallery() {
        const slides = this.container.querySelector('.gallery-slides');
        const dots = this.container.querySelectorAll('.gallery-dot');
        const counter = this.container.querySelector('.gallery-counter');
        
        if (slides) {
            const translateX = -this.currentIndex * 100;
            slides.style.transform = `translateX(${translateX}%)`;
        }
        
        if (dots) {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === this.currentIndex);
            });
        }
        
        if (counter) {
            counter.textContent = `${this.currentIndex + 1} / ${this.images.length}`;
        }
    }
    
    handleTouchStart(e) {
        this.touchStartX = e.touches[0].clientX;
    }
    
    handleTouchEnd(e) {
        this.touchEndX = e.changedTouches[0].clientX;
        this.handleSwipe();
    }
    
    handleSwipe() {
        const threshold = 50; // Minimum swipe distance
        const diff = this.touchStartX - this.touchEndX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                this.next(); // Swipe left - next image
            } else {
                this.prev(); // Swipe right - previous image
            }
        }
    }
    
    handleKeyDown(e) {
        if (this.isFullscreen) {
            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    this.prev();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.next();
                    break;
                case 'Escape':
                    e.preventDefault();
                    this.exitFullscreen();
                    break;
            }
        }
    }
    
    toggleFullscreen() {
        if (this.isFullscreen) {
            this.exitFullscreen();
        } else {
            this.enterFullscreen();
        }
    }
    
    enterFullscreen() {
        this.isFullscreen = true;
        const gallery = this.container.querySelector('.screenshot-gallery');
        
        // Create fullscreen overlay
        const fullscreenDiv = document.createElement('div');
        fullscreenDiv.className = 'gallery-fullscreen';
        fullscreenDiv.innerHTML = `
            <button class="gallery-close" aria-label="Close fullscreen">&times;</button>
            ${gallery.outerHTML}
        `;
        
        document.body.appendChild(fullscreenDiv);
        document.body.style.overflow = 'hidden';
        
        // Attach close event
        fullscreenDiv.querySelector('.gallery-close').addEventListener('click', () => this.exitFullscreen());
        
        // Reinitialize gallery in fullscreen
        const fullscreenGallery = new ScreenshotGallery(
            fullscreenDiv.querySelector('.screenshot-gallery').parentElement, 
            this.images
        );
        fullscreenGallery.currentIndex = this.currentIndex;
        fullscreenGallery.isFullscreen = true;
        fullscreenGallery.updateGallery();
    }
    
    exitFullscreen() {
        this.isFullscreen = false;
        const fullscreenDiv = document.querySelector('.gallery-fullscreen');
        if (fullscreenDiv) {
            document.body.removeChild(fullscreenDiv);
            document.body.style.overflow = '';
        }
    }
    
    // Auto-play functionality (optional)
    startAutoPlay(interval = 3000) {
        this.autoPlayInterval = setInterval(() => {
            if (!this.isFullscreen) {
                this.next();
            }
        }, interval);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}