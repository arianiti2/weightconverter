let pounds = document.querySelector(".pounds"),
 kilograms = document.querySelector(".kilograms"),
 grams = document.querySelector(".grams"),
 form = document.querySelector("form");

form.addEventListener("input", convertWeight)

function convertWeight(e) {
    if(e.target.classList.contains("pounds")) {
        let x = e.target.value;
        kilograms.value = x / 2.20246;
        grams.value = x / 0.002046;
    }

    if(e.target.classList.contains("kilograms")) {
        let x = e.target.value;
        pounds.value = x * 2.2046;
        grams.value = x * 1000;
    }

    if(e.target.classList.contains("grams")) {
        let x = e.target.value;
        kilograms.value = x / 1000;
        pounds.value = x * 0.0022046;
    }
}