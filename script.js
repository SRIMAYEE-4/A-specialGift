let page = 0;
const pages = document.querySelectorAll(".page");

function nextPage(num){
  pages[page].classList.remove("active");
  page = num - 1;
  pages[page].classList.add("active");
}

/* envelope open */
const heart = document.getElementById("openHeart");
const envelope = document.getElementById("envelope");
const letterText = document.getElementById("letterText");

const msg =
"Valentine’s Day sirf lovers ya boyfriend ke liye nahi hota 🌹\n\n" +
"Kabhi-kabhi ye us special insan ke liye hota hai jo bina kisi label ke bhi humesha saath diya 💖\n\n" +
"Jab main galat thi, mujhe sudhara,\n" +
"jab confused thi, mujhe samjhaya,\n" +
"aur jab mujhe time chahiye tha usne bhar-bhar ke diya ⏳\n\n" +
"Ye din us insan ke liye hai jisne mujhe meri life me itna special feel karwaya 💖\n\n" +
"soooooo......";

let i = 0;

heart.addEventListener("click",()=>{
  envelope.classList.add("open");
  type();
});

function type(){
  if(i < msg.length){
    letterText.innerHTML += msg[i] === "\n" ? "<br>" : msg[i];
    i++;
    setTimeout(type,35);
  }
}

/* runaway no button */
const noBtn = document.getElementById("noBtn");

function run(){
  noBtn.style.transform =
    `translate(${Math.random()*150-75}px,${Math.random()*150-75}px)`;
}

noBtn.addEventListener("mouseenter",run);
noBtn.addEventListener("touchstart",run);

/* floating hearts */
for(let i=0;i<20;i++){
  const h = document.createElement("span");
  h.innerHTML="🤍";
  h.style.left=Math.random()*100+"%";
  h.style.animationDuration=(8+Math.random()*6)+"s";
  document.getElementById("hearts").appendChild(h);
}
