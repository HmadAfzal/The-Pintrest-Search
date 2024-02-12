let pictures=[
    {name:"Andrew Tate",
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1gKLOPk3H6z41ghMfEZXIJqIcQVodbr0dcw&usqp=CAU"},
     {name:"Cyber Punk",
     img: "https://i.pinimg.com/736x/74/5c/c1/745cc109888111b230dc7b5b9db5fd39.jpg"},
     {name:"Cbum- The Goat",
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnXQuWkL9PuO9z3BMZIQXHedRtaFRJUAy_7A&usqp=CAU"},
     {name:"Cbum POse",
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYyV68tcT4gMwYi8gBbDd5pWlUDbv2LdzJw&usqp=CAU"},
     {name:"Deadlift",
     img: "https://i.pinimg.com/564x/ec/3c/4e/ec3c4e1d82c80f3118d511a8dfbaad14.jpg"},
     {name:"Car potrait",
     img: "https://i.pinimg.com/564x/e7/88/0c/e7880c9e1791917b2aa180f8466bdff1.jpg"},
     {name:"Baby cheetah",
     img: "https://i.pinimg.com/564x/52/54/f1/5254f16c450611e3d6a3aa3f5f1ec968.jpg"},
     {name:"Cat-Vogue Album",
     img: "https://i.pinimg.com/736x/34/18/bd/3418bdd55b2c5c64d56c6657d6738e48.jpg"},
     {name:"Horse Runing",
     img: "https://i.pinimg.com/564x/0b/f6/90/0bf690bdf3a16b25b42c070c463cf72e.jpg"},
     {name:"Girl with Snake",
     img: "https://i.pinimg.com/564x/98/a7/0d/98a70d8fe3ab92950d83de4d4eee366b.jpg"},
     {name:"Mask Potrait",
     img: "https://i.pinimg.com/564x/99/58/ac/9958aca243849c80b96dd90f5f943648.jpg"},
     {name:"Cheetah Potrait",
     img: "https://i.pinimg.com/564x/10/1b/71/101b714d26ea774db3675d2d95849208.jpg"},
     {name:"Dog teeth",
     img: "https://i.pinimg.com/564x/e0/46/2c/e0462c77290c6524ad0912651681d7f8.jpg"},
     {name:"Girl is a gun",
     img: "https://i.pinimg.com/236x/f9/bf/dc/f9bfdce904e6ed224af12ff9b3e5b48f.jpg"},
     {name:"Girl holding a cat",
     img: "https://i.pinimg.com/236x/f0/ab/a0/f0aba009c310dd763b3d43b3342c3788.jpg"},
     {name:"Athletic man",
     img: "https://i.pinimg.com/236x/f9/9c/0a/f99c0aa061da267ae5f266f94eae9d7b.jpg"},
     {name:"Selfie ideas",
     img: "https://i.pinimg.com/236x/bb/4f/e4/bb4fe48097e1565d240ed1f8d126289a.jpg"},
     {name:"Futueristic potraits",
     img: "https://i.pinimg.com/236x/7f/2d/eb/7f2debdbab112d9b714a739a81572ca0.jpg"},
     {name:"Cheetah Playing",
     img: "https://i.pinimg.com/236x/1b/6e/08/1b6e08691231226f1cdd961458a85f57.jpg"},
     {name:"Vintage men",
     img: "https://i.pinimg.com/236x/19/d4/6e/19d46ed2aee31df58201dd521067ba14.jpg"},
     {name:"Girl holding cat",
     img: "https://i.pinimg.com/564x/99/58/ac/9958aca243849c80b96dd90f5f943648.jpg"},
     {name:"Cheetah With women",
     img: "https://i.pinimg.com/236x/06/49/14/064914e536dff3efeb8bff7cec058971.jpg"},
     {name:"Potrait ideas",
     img: "https://i.pinimg.com/236x/0b/c0/38/0bc038571ce5039ffd4ad4ccdb1c0925.jpg"},
     {name:"Dog potrait",
     img: "https://i.pinimg.com/236x/a5/41/8c/a5418c99cc78d2e6c3ac407fce550121.jpg"},
     {name:"Vintage painting",
     img: "https://i.pinimg.com/236x/a5/41/8c/a5418c99cc78d2e6c3ac407fce550121.jpg"},

]
let overlay=document.querySelector(".overlay");
let container=document.querySelector(".container")
let searchbar=document.querySelector("#searchbar")
for (let i = 0; i < pictures.length; i++) {
    let image= document.createElement("img");
    image.src = pictures[i].img;
    image.classList.add("feed")
    container.appendChild(image)
}

let search=document.querySelector("#searchinput")
search.addEventListener("focus",(e)=>{
overlay.classList.remove("hidden")
})
search.addEventListener("blur",()=>{
    overlay.classList.add("hidden")
})

search.addEventListener("input", () => {
    let searchTerm = search.value.toLowerCase().trim(); 
    let filteredSearch = pictures.filter(picture => picture.name.toLowerCase().includes(searchTerm));

    if (filteredSearch.length > 0) {
        searchbar.classList.remove("hidden");
        searchbar.innerHTML = ""; 
        filteredSearch.forEach(picture => {
            let p = document.createElement("p");
            p.classList.add("searchterm")
            p.textContent = picture.name;
            searchbar.appendChild(p);
        });
    } else {
        searchbar.classList.add("hidden");
    }
});
