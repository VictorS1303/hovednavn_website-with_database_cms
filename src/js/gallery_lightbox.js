import GLightbox from 'glightbox'
import 'glightbox/dist/css/glightbox.css'

export default function initLightBox() {
  GLightbox({
    selector: '.glightbox',
    keyboardNavigation: true,
    touchNavigation: true,
    loop: true,
  });
}