const elements = [
  {
  backgroundImage: "url('images/waves.jpg')",
  number: 1
  },
  {
  number: 2
  },
  {
  backgroundImage: "url('images/pineapple.jpg')",
  number: 3
  },
  {
  profileImage: "url('images/portrait.jpg')",
  name: "Roberto Gonzales",
  number: 4
}]; 
const sliderWrapper = document.querySelector(".slider-wrapper");
const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");
let visibleElement = 0;

window.addEventListener("DOMContentLoaded", createSliderContent());

function createSliderContent() {
  sliderWrapper.innerHTML = "";
  for (let i = 0; i < elements.length; i++) {
    const sliderElement = document.createElement("div");
    sliderElement.classList.add("slider-element");
    sliderElement.id = `slider-element-${i}`;
    sliderElement.innerHTML = `
    <div class="profile-image"></div>
    <p class="name"></p>
    <p class="number"></p>
    `;
    sliderWrapper.appendChild(sliderElement);

    if(elements[i].backgroundImage) {
      sliderElement.style.backgroundImage = elements[i].backgroundImage;
    }
    if(elements[i].profileImage) {
      sliderElement.querySelector(".profile-image").style.backgroundImage = elements[i].profileImage;
    }
    if(elements[i].name) {
      sliderElement.querySelector(".name").textContent = elements[i].name;
    }
    if(elements[i].number) {
      sliderElement.querySelector(".number").textContent = elements[i].number;
    }
  }
}
  
prevBtn.addEventListener("click", () => {
  visibleElement--;
  if (visibleElement < 0) {
    visibleElement = elements.length - 1;
  }
  sliderWrapper.style.left = `-${visibleElement * 400}px`;
});

nextBtn.addEventListener("click", () => {
  visibleElement++;
  if (visibleElement > elements.length - 1) {
    visibleElement = 0;
  }
  sliderWrapper.style.left = `-${visibleElement * 400}px`;
});
