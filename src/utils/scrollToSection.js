const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 75;
    const elementPos = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPos = elementPos - offset;

    window.scrollTo({
      top: offsetPos,
      behavior: "smooth"
    })
  }
}
export default scrollToSection;
