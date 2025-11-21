const hide_navBtn = document.getElementById("hide_navBtn");
const show_navBtn = document.getElementById("show_navBtn");
const sidenav = document.getElementById("sidenav");
const main = document.getElementById("main");
const searchbar = document.getElementById("searchbox");
const searchBtn = document.getElementById("searchBtn");

let topics = [
  ["introduction","what is sdgs","introduction_topic"],
  ["sdg1","No Poverty","sdg1_topic"],
  ["sdg2","Zero Hunger","sdg2_topic"],
  ["sdg3","Good Health and Well-Being","sdg3_topic"],
  ["sdg4","Quality Education","sdg4_topic"],
  ["sdg5","Gender Equality","sdg5_topic"],
  ["sdg6","Clean Water and Sanitation","sdg6_topic"],
  ["sdg7","Affordable and Clean Energy","sdg7_topic"],
  ["sdg8","Decent Work and Economic Growth","sdg8_topic"],
  ["sdg9","Industry, Innovation and Infrastructure","sdg9_topic"],
  ["sdg10","Reduced Inequalities","sdg10_topic"],
  ["sdg11","Sustainable Cities and Communities","sdg11_topic"],
  ["sdg12","Responsible Consumption and Production","sdg12_topic"],
  ["sdg13","Climate Action","sdg13_topic"],
  ["sdg14","Life Below Water","sdg14_topic"],
  ["sdg15","Life on Land","sdg15_topic"],
  ["sdg16","Peace, Justice and Strong Institutions","sdg16_topic"],
  ["sdg17","Partnerships for the Goals","sdg17_topic"],
  ["conclusion","One World, One Promise","conclution"]
];


hide_navBtn.addEventListener("click", ()=>{//alert("in")
 sidenav.style.width = "0";
});

show_navBtn.addEventListener("click", ()=>{//alert("in")
 sidenav.style.width = "30%";
});

sidenav.addEventListener("mouseleave", ()=>{//alert("in")
 sidenav.style.width = "0";
});
// searchbar.addEventListener("change", () => {
//   for(let i = 0; i < 3; i++){

//   }
// });
searchBtn.addEventListener("click", async() => {
  let searching = new RegExp(searchbar.value,"i");
  
  if(searching == null || searching == "") return;
  for(let i = 0; i < topics.length; i++){
    for(let j = 0; j < 2; j++){
      
      if(topics[i][j].search(searching) >=0) {
        console.log(topics[i][j].search(searching) >= 0 );
        console.log(topics[i][j] +" "+ i +" "+ j + topics[i][2]);
        scrt(topics[i][2]);
        i = topics.length
        break;
      }
    }
  }
  // scrt(topics[13][2]);
})

function scrt(id){
  // window.scrollTo({
  //   top: document.getElementById("sdg17_topic").scrollTop,
  //   behavior: "smooth"
  // });
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
  // document.querySelector("#main #sdg17_topic").scrollIntoView({
  //   behavior: "smooth"
  // });
}










