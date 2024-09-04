
const toggleAccordion = () => {
  const accordionHeads = document.querySelectorAll('.cmp-accordion__header');
  const accordionPanels = document.querySelectorAll('.cmp-accordion__panel');

  accordionHeads.forEach((accordionHead, index) => {
    accordionHead.addEventListener('click', () => {

      const isActive = accordionHead.classList.contains('is-open');

      accordionHeads.forEach((otherHead, otherIndex) => {
        otherHead.classList.remove('is-open');
        accordionPanels[otherIndex].classList.remove('is-open');
      });

      if (!isActive) {
        accordionHead.classList.add('is-open');
        accordionPanels[index].classList.add('is-open');
      }
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  toggleAccordion();
});
