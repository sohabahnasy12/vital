
const rate = document.querySelectorAll(".stars i");
rate.forEach((star, index) => {
  star.addEventListener("click", () => {
    rate.forEach(el => el.classList.remove("fas", "checked"))
    for (let i = 0; i <= index; i++) {
      rate[i].classList.add("fas", "checked")
    }
  });
});


const rat = document.querySelectorAll(".st i");
rat.forEach((star, index) => {
  star.addEventListener("click", () => {
    rat.forEach(el => el.classList.remove("fas", "checked"))
    for (let i = 0; i <= index; i++) {
      rat[i].classList.add("fas", "checked")
    }
  });
});

const ra = document.querySelectorAll(".A i");
ra.forEach((star, index) => {
  star.addEventListener("click", () => {
    ra.forEach(el => el.classList.remove("fas", "checked"))
    for (let i = 0; i <= index; i++) {
      ra[i].classList.add("fas", "checked")
    }
  });
});

const r = document.querySelectorAll(".B i");
r.forEach((star, index) => {
  star.addEventListener("click", () => {
    r.forEach(el => el.classList.remove("fas", "checked"))
    for (let i = 0; i <= index; i++) {
      r[i].classList.add("fas", "checked")
    }
  });
});

const r1 = document.querySelectorAll(".C i");
r1.forEach((star, index) => {
  star.addEventListener("click", () => {
    r1.forEach(el => el.classList.remove("fas", "checked"))
    for (let i = 0; i <= index; i++) {
      r1[i].classList.add("fas", "checked")
    }
  });
});

const r2 = document.querySelectorAll(".D i");
r2.forEach((star, index) => {
  star.addEventListener("click", () => {
    r2.forEach(el => el.classList.remove("fas", "checked"))
    for (let i = 0; i <= index; i++) {
      r2[i].classList.add("fas", "checked")
    }
  });
});

const r3 = document.querySelectorAll(".E i");
r3.forEach((star, index) => {
  star.addEventListener("click", () => {
    r3.forEach(el => el.classList.remove("fas", "checked"))
    for (let i = 0; i <= index; i++) {
      r3[i].classList.add("fas", "checked")
    }
  });
});

const r4 = document.querySelectorAll(".F i");
r4.forEach((star, index) => {
  star.addEventListener("click", () => {
    r4.forEach(el => el.classList.remove("fas", "checked"))
    for (let i = 0; i <= index; i++) {
      r4[i].classList.add("fas", "checked")
    }
  });
});

const r5 = document.querySelectorAll(".H i");
r5.forEach((star, index) => {
  star.addEventListener("click", () => {
    r5.forEach(el => el.classList.remove("fas", "checked"))
    for (let i = 0; i <= index; i++) {
      r5[i].classList.add("fas", "checked")
    }
  });
});

const r6 = document.querySelectorAll(".I i");
r6.forEach((star, index) => {
  star.addEventListener("click", () => {
    r6.forEach(el => el.classList.remove("fas", "checked"))
    for (let i = 0; i <= index; i++) {
      r6[i].classList.add("fas", "checked")
    }
  });
});

const r7 = document.querySelectorAll(".J i");
r7.forEach((star, index) => {
  star.addEventListener("click", () => {
    r7.forEach(el => el.classList.remove("fas", "checked"))
    for (let i = 0; i <= index; i++) {
      r7[i].classList.add("fas", "checked")
    }
  });
});

const r8 = document.querySelectorAll(".K i");
r8.forEach((star, index) => {
  star.addEventListener("click", () => {
    r8.forEach(el => el.classList.remove("fas", "checked"))
    for (let i = 0; i <= index; i++) {
      r8[i].classList.add("fas", "checked")
    }
  });
});
//shopping cart
let openshoppig = document.querySelector('#shopping');
let closeshopping  =document.querySelector('.closeshoppingcart');
let listcard = document.querySelector('.listcard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity= document.querySelector('.quantity');

openshoppig.addEventListener("click",() =>{
  body.classList.add('active');
})
closeshopping.addEventListener("click",() =>{
  body.classList.remove('active');
})

let newdiv = document.createElement ('')

  