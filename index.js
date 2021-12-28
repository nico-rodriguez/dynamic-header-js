const header = document.querySelector('[data-header]');
const sections = [...document.querySelectorAll('[data-section]')];


 /* Observer for the sections */
const onIntersect = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Update the header's theme
      const theme = entry.target.dataset.section;
      header.setAttribute('data-theme', theme);

      // Update the header's marker
      const id = entry.target.id;
      const headerLinks = [...document.querySelectorAll('header a')];
      const link = headerLinks.find(link => link.getAttribute('href') === `#${id}`);

      const distanceFromLeft = link.getBoundingClientRect().left;

      header.style.setProperty('--markerWidth', `${link.clientWidth}px`);
      header.style.setProperty('--markerLeft', `${distanceFromLeft}px`);
    }
  });
}

const observer = new IntersectionObserver(onIntersect, {
  root: null,
  rootMargin: `${header.offsetHeight * -1}px`,
  threshold: 0.5
})

sections.forEach(section => observer.observe(section));