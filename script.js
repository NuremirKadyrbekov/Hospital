const DateDoctor = [
  {
    name: "Альбина <br> Кадырбекова",
    img: "./img/Doctor/doc1.png",
    specialty:'ОФТАЛЬМОЛОГ',
    room:206,
    desc:'Я амбициозный трудоголик, но в остальном довольно простой человек.',
  },
  {
    name: "Нурсултан <br> Кадырбеков",
    img: "./img/Doctor/doc2.png",
    specialty:'ОФТАЛЬМОЛОГ',
    room:206,
    desc:'Я амбициозный трудоголик, но в остальном довольно простой человек.',
  },
  {
    name: "Кубан <br> Кубанов",
    img: "./img/Doctor/doc3.png",
    specialty:'ОФТАЛЬМОЛОГ',
    room:206,
    desc:'Я амбициозный трудоголик, но в остальном довольно простой человек.',
  },
  {
    name: "Абахан <br> Улукбеков",
    img: "./img/Doctor/doc4.jpeg",
    specialty:'ОФТАЛЬМОЛОГ',
    room:206,
    desc:'Я амбициозный трудоголик, но в остальном довольно простой человек.',
  },
  {
    name: "Ариет <br> Темирланов",
    img: "./img/Doctor/doc5.png",
    specialty:'ОФТАЛЬМОЛОГ',
    room:206,
    desc:'Я амбициозный трудоголик, но в остальном довольно простой человек.',
  },
  {
    name: "Альбина <br> Кадырбекова",
    img: "./img/Doctor/doc1.png",
    specialty:'ОФТАЛЬМОЛОГ',
    room:206,
    desc:'Я амбициозный трудоголик, но в остальном довольно простой человек.',
  },
];

document.addEventListener("DOMContentLoaded", function () {
  let navbar = document.getElementById("navbar3");
  let triggerHeight =
    document.getElementById("Content").offsetTop - navbar.offsetHeight; // Высота, на которой появится NavBar

  window.addEventListener("scroll", function () {
    if (window.pageYOffset >= triggerHeight) {
      // navbar.style.display='flex' // Показываем NavBar
      navbar.style.marginTop = "-150px";
      // navbar.style.
    } else {
      navbar.style.marginTop = "-250px";
      // navbar.style.display='none' // Скрываем NavBar
    }
  });
});

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("img-show-active");
    } else {
      change.target.classList.remove("img-show-active");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".img-show");

for (let elm of elements) {
  observer.observe(elm);
}

function onEntry2(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("blockOurActive");
    } else {
      change.target.classList.remove("blockOurActive");
    }
  });
}

let options2 = {
  threshold: [0.5],
};
let observer2 = new IntersectionObserver(onEntry2, options2);
let elements2 = document.querySelectorAll(".blockOur");

for (let elm of elements2) {
  observer2.observe(elm);
}

function onEntry3(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("AboutMainTitleActive");
    } else {
      change.target.classList.remove("AboutMainTitleActive");
    }
  });
}

let options3 = {
  threshold: [0.5],
};
let observer3 = new IntersectionObserver(onEntry3, options3);
let elements3 = document.querySelectorAll(".AboutMainTitle");

for (let elm of elements3) {
  observer3.observe(elm);
}





const RenderDoc = (Doctors)=>{
  let DoctorsBlock = document.getElementById('DoctorsBlock')
Doctors.forEach(doc=>{
   
  let Doctor = document.createElement('div')
  Doctor.className="Doctor"

 Doctor.innerHTML=`
                        <div id="DoctorImgBlock" class="DoctorImgBlock">
                            <img src="${doc.img}" alt="" class="DoctorImg" id="DoctorImg"/>
                            <div class="BlockIcon" id="BlockIcon">
                                <i class="fa fa-facebook-square"></i>
                                <i class="fa fa-instagram"></i>
                                <i class="fa fa-whatsapp"></i>
                            </div>
                        </div>
                        <h1>${doc.name}</h1>
                        <h3>${doc.specialty}</h3>
                        <h3>${doc.room}кабинет</h3>
                        <p>${doc.desc}</p>
                        <button>Забронируйте сейчас</button>
 `
 DoctorsBlock.append(Doctor)
})
}
RenderDoc(DateDoctor)

let doctorA = document.querySelectorAll('.Doctor')
let DoctorImgBLock = document.getElementById("DoctorImgBlock");
let block = document.getElementById("BlockIcon");
let DoctorImg = document.getElementById("DoctorImg");
doctorA.addEventListener("mouseover", () => {
  block.className = "BlockIconActive";
  DoctorImg.style.opacity = "0.5";
});
doctorA.addEventListener("mouseout", () => {
  block.className = "BlockIcon";
  DoctorImg.style.opacity = "1";
});
