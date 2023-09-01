const Searchform = document.querySelector("#Search-form");
const Searchbox = document.querySelector(".Search-box");
const Searchresult = document.querySelector(".search-result");
const showmorebtn = document.querySelector(".more");
const acceskey = "mUmtOSSwTtCdnOQ_3i5MfYdfReaTIL47O1Tg0L_PRfg";

let keyword = " ";
let page = 1;

async function searchimages() {
  keyword = Searchbox.value;
  // console.log(keyword);
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${acceskey}&per_page=12`;
  const respose = await fetch(url);
  // console.log(url);

  const data = await respose.json();
  console.log(data);
  const results = data.results;

  if(page===1){
    Searchresult.innerHTML=""
  }

  results.map((result) => {
    const img = document.createElement("img");
    img.src = result.urls.small;

    const imageLink = document.createElement("a");

    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(img);
    Searchresult.appendChild(imageLink);
  });
  showmorebtn.style.display = "block";
}
Searchform.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchimages();
  // window.onload()
  // input.style.display = "none ";
  // Searchresult = "";
  // img = "";
});

showmorebtn.addEventListener("click", () => {
  page++;
  searchimages();
});
