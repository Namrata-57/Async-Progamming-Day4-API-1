let currentIndex = 0;
let catImages = [];
const nextPageButton = document.getElementById("nextPage");
const currentPageElement = document.getElementById("currentPage");
async function fetchCatImages() {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    catImages = await response.json();
    displayCurrentCatImage();
  } catch (error) {
    console.error("Error fetching cat images:", error);
  }

  nextPageButton.setAttribute("page_number", currentPage + 1);
  if (currentPage == 10) {
    nextPageButton.style.display = "none";
  } else {
    nextPageButton.style.display = "inline";
  }
}

function displayCurrentCatImage() {
  const catImage = document.getElementById("catImage");
  catImage.src = catImages[currentIndex].url;
}

// Event listener for the "Next" button
nextPageButton.addEventListener("click", () => {
  const page_number = nextPageButton.getAttribute("page_number");
  if (page_number) {
    fetchCatImages(parseInt(page_number));
  }
});

fetchCatImages();

console.log(fetchCatImages()); //displaying promise state in console
