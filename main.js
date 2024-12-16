let hiddenRange = document.querySelector('.body__range input[type="range"]');
let realRange = document.querySelector(".range");
let slider = document.querySelector(".slider");
let priceShow = document.querySelector(".body__pricing .price");
hiddenRange.addEventListener("input", () => {
  let value = hiddenRange.value;
  let max = hiddenRange.max;
  let percent = (value / max) * 100;
  console.log(percent);

  realRange.style.setProperty(
    "background",
    `linear-gradient(to right, var(--bar) ${percent}%, var(--bar-bg) ${percent}%)`
  );
  slider.style.setProperty("left", `${percent}%`);
  priceShow.innerHTML = `$${value}.00`;
});
