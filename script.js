var typed = new Typed('#element', {
    strings: ['Web Developer', 'Competitive Coder'],
    typeSpeed: 100,
   backSpeed: 60,
   loop: true
 });
const savedScrollPosition = localStorage.getItem('scrollPosition');
if (savedScrollPosition !== null) {
 window.scrollTo(0, savedScrollPosition);
}
window.addEventListener('beforeunload', () => {
 // Save the current scroll position to local storage
 localStorage.setItem('scrollPosition', window.scrollY);
});