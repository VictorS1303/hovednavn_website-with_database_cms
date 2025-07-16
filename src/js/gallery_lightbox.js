import GLightbox from 'glightbox'
import 'glightbox/dist/css/glightbox.css'


export default function initLightBox() {
  let shouldAutoplay = false;

  // Watch clicks to determine if autoplay should happen
  document.querySelectorAll('.glightbox').forEach((el) => {
    el.addEventListener('click', () => {
      shouldAutoplay = el.dataset.autoplay === 'true';
    });
  });

  const lightbox = GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    keyboardNavigation: true,
    loop: true,
    autoplayVideos: false, // we control this manually
  });

  // Handle autoplay only when user clicked to open
  lightbox.on('slide_changed', ({ current }) => {
    const video = current?.slideNode?.querySelector('video');
    if (video) {
      video.currentTime = 0;
      if (shouldAutoplay) {
        video.play().catch((err) => {
          console.warn('Autoplay blocked:', err);
        });
      }
    }

    // Reset flag so swiping doesn’t trigger autoplay
    shouldAutoplay = false;
  });

  // Stop all video playback when closing
  lightbox.on('close', () => {
    const videos = document.querySelectorAll('.glightbox-container video');
    videos.forEach((video) => {
      video.pause();
      video.currentTime = 0;
    });
  });

  // Disable scrolling on body, when lightbox is open
  lightbox.on('open', () => {
    document.body.style.overflow = 'hidden'
  })

  // Enable scrolling on body, when lightbox is closed
  lightbox.on('close', () => {
    document.body.style.overflow = ''
  })
}
