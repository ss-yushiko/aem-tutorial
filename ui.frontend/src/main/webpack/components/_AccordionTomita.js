function toggleAccordion() {
  var accordionHeads = document.querySelectorAll('.cmp-accordion__header');
  var accordionPanels = document.querySelectorAll('.cmp-accordion__panel');

  accordionHeads.forEach(function (accordionHead, index) {
    accordionHead.addEventListener('click', function () {

      var isActive = accordionHead.classList.contains('is-open');

      accordionHeads.forEach(function (otherHead, otherIndex) {
        otherHead.classList.remove('is-open');
        accordionPanels[otherIndex].classList.remove('is-open');
      });

      if (!isActive) {
        accordionHead.classList.add('is-open');
        accordionPanels[index].classList.add('is-open');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  toggleAccordion();
});
