let elements = document.querySelectorAll(".nav-box li a");
console.log(elements)

elements.forEach(element => {
    element.addEventListener('click', () => {
        elements.forEach(el => {
            el.classList.remove('active');
        });
        element.classList.add('active');
    });
});

// navigation hidden code
const navbar = document.getElementById("navbar");

window.onscroll = () => {
    let navBaroffHeight = navbar.offsetHeight;
    let navBaroffTop = navbar.offsetTop;

    let windowOffheight = window.pageYOffset;
    console.log(windowOffheight)
    console.log(navBaroffHeight)
    // console.log(navBaroffTop)
    if (windowOffheight > navBaroffHeight) {
        navbar.classList.add("animation");
        console.log("i am working")
        navbar.style.zIndex = "-1"
    } else {
        navbar.style.zIndex = "999999"
        navbar.style.position = "fixed"
        navbar.classList.remove("animation");
        console.log("I am not woring ")
    }
}

// carousel

let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

// Automatic slide change
setInterval(() => {
    nextSlide();
}, 6000);



// get class of workout session
let CardioClass = document.querySelectorAll('.Cardio');
let CrossfitClass = document.querySelectorAll('.Crossfit');
let PowerliftingClass = document.querySelectorAll('.Powerlifting');

//get all button 
let items = document.querySelectorAll('.items span');
console.log(items)
// using forEach loop target one button using element parameter 

items.forEach((element) => {
    // add click event on single button of items
    element.addEventListener('click', (event) => {
        // getting target element
        let elementvalue = event.target;
        // checking id , is that element has id
        let checkId = element.getAttribute('id')

        // removeing active class of previous element
        items.forEach(el => {
            el.classList.remove('active');
        });

        // adding active class in the current btn
        element.classList.add('active');

        // using ifelse and putting condition acooriding to the Id of element
        if (checkId == "main-btn") {
            CardioClass.forEach(element => {
                element.classList.remove('active')
            });
            CrossfitClass.forEach(element => {
                element.classList.remove('active')
            });
            PowerliftingClass.forEach(element => {
                element.classList.remove('active')
            });
            console.log(checkId, " i am inside the ifelse condition")
        }
        else if (checkId == "cardio-btn") {
            CardioClass.forEach(element => {
                element.classList.add('active')
            });

            //remove data
            CrossfitClass.forEach(element => {
                element.classList.remove('active')
            });
            PowerliftingClass.forEach(element => {
                element.classList.remove('active')
            });
        }
        else if (checkId == "Crossfit-btn") {
            CrossfitClass.forEach(element => {
                element.classList.add('active')
            });

            // remove data
            CardioClass.forEach(element => {
                element.classList.remove('active')
            });

            PowerliftingClass.forEach(element => {
                element.classList.remove('active')
            });
        }
        else if (checkId == "Powerlifting-btn") {
            PowerliftingClass.forEach(element => {
                element.classList.add('active')
            });

            //remove data
            CrossfitClass.forEach(element => {
                element.classList.remove('active')
            });
            CardioClass.forEach(element => {
                element.classList.remove('active')
            });
        }
    });
})


let BMI_btn = document.getElementById("CalculateBMI-btn");

function showBMIresult() {
    console.clear()
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    let age = document.getElementById("age").value


    weight = Number.parseInt(weight)
    height = Number.parseInt(height)
    age = Number.parseInt(age)

    height = height / 100

    let bmi = weight / (height ** 2)
    console.log(weight / (height ** 2))

    bmi = bmi.toFixed(2)

    let showResult = document.querySelector('.showResult')
    showResult.innerHTML = `The BMI of Person is ${bmi}`;

    height = ''
    weight = ''
    age = ''

}

let selectoption = document.getElementById("selectoption");


BMI_btn.addEventListener('click', showBMIresult)

