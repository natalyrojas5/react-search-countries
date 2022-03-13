const scrollTop = () => {
  document.querySelector(".grid-countries").scroll({
    top: 0,
    behavior: "smooth",
  });
};

export default scrollTop;
