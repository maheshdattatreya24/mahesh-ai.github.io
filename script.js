document.querySelectorAll(".nav-links a").forEach(anchor => {

anchor.addEventListener("click", function(e){

const targetId=this.getAttribute("href");

if(targetId.startsWith("#")){

e.preventDefault();

const target=document.querySelector(targetId);

window.scrollTo({
top:target.offsetTop-80,
behavior:"smooth"
});

}

});

});
particlesJS("particles-js", {
particles: {
number: { value: 80 },
color: { value: "#38bdf8" },
shape: { type: "circle" },
opacity: { value: 0.5 },
size: { value: 3 },
line_linked: {
enable: true,
distance: 150,
color: "#38bdf8",
opacity: 0.4,
width: 1
},
move: {
enable: true,
speed: 2
}
}
});
