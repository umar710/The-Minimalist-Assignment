//Toggle popup function..
function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active")
}

//using getElementById Method accessing Image ID's..
let seasonSmallImageEl = document.getElementById("seasonSmallImage");
let seasonMediumImageEl = document.getElementById("seasonMediumImage");


//Products Images random names Examples.. 

//Image 1 
function springBtn() {
    seasonSmallImageEl.src = "https://i.pinimg.com/originals/47/93/a7/4793a77dd291cb8e44708f27c0416112.png";
    seasonMediumImageEl.src = "https://i.pinimg.com/originals/47/93/a7/4793a77dd291cb8e44708f27c0416112.png";
}
//Image 2
function summerBtn() {
    seasonSmallImageEl.src = "https://static.toiimg.com/thumb/msid-79209521,width-1280,resizemode-4/79209521.jpg";
    seasonMediumImageEl.src = "https://static.toiimg.com/thumb/msid-79209521,width-1280,resizemode-4/79209521.jpg";
}
//Image 3
function autumnBtn() {
    seasonSmallImageEl.src = "https://1.bp.blogspot.com/-Pq8SPkXTPMI/X6jjGOUivfI/AAAAAAAHV2U/geKsAKFC8U0neEPc_i6h8ZGs5L2G9-xiQCLcBGAsYHQ/s1600/Beej-Patakha+%284%29.jpg";
    seasonMediumImageEl.src = "https://1.bp.blogspot.com/-Pq8SPkXTPMI/X6jjGOUivfI/AAAAAAAHV2U/geKsAKFC8U0neEPc_i6h8ZGs5L2G9-xiQCLcBGAsYHQ/s1600/Beej-Patakha+%284%29.jpg";
}
//Image 4
function winterBtn() {
    seasonSmallImageEl.src = "https://1.bp.blogspot.com/-1kWSPFZRSN8/X6jjF5i8VTI/AAAAAAAHV2Q/0GoPLTtPEasfH_FjOcJS_WyvpRrPTRq6wCLcBGAsYHQ/s1600/Beej-Patakha+%282%29.jpg";
    seasonMediumImageEl.src = "https://1.bp.blogspot.com/-1kWSPFZRSN8/X6jjF5i8VTI/AAAAAAAHV2Q/0GoPLTtPEasfH_FjOcJS_WyvpRrPTRq6wCLcBGAsYHQ/s1600/Beej-Patakha+%282%29.jpg";
}