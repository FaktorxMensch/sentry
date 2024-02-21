const getCSSColor = (name) => {
  if (document.getElementsByClassName("page")[0])
    return getComputedStyle(
      document.getElementsByClassName("page")[0]
    ).getPropertyValue(name);
};

export default getCSSColor;
