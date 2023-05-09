export const accordion = (() => {
  const init = () => {
    const accordionList = document.querySelectorAll(".accordion-list");

    if (!accordionList.length) {
      return;
    }

    accordionList.forEach((list) => {
      list.addEventListener("click", (event) => {
        toggleAccordion(event);
      });
    });

    function toggleAccordion(event) {
      const accordionButton = event.target.closest(".accordion__toggle");
      const isExpanded =
        accordionButton.getAttribute("aria-expanded") === "true";
      const target = accordionButton.parentElement.nextElementSibling;
      accordionButton.setAttribute("aria-expanded", !isExpanded);
      target.classList.toggle("is-open");

      // let scrollOffset = accordionButton.parentElement.offsetTop;
      event.target.closest(".accordion__toggle").scroll({
        top: 500,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return {
    init,
  };
})();
