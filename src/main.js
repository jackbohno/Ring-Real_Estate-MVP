import App from './App.svelte';
import "./tailwind.css";
import "./vars.css";

const app = new App({
    target: document.getElementById('app'),
})
export default app

// Smooth scroll for in-page anchor links
if (typeof window !== 'undefined' && 'scrollBehavior' in document.documentElement.style) {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (link) {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.length > 1) {
        const el = document.querySelector(targetId);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  });
}
