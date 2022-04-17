const btn1 = document.querySelector("#btn1");

const btn2 = document.querySelector("#btn2");

const output = document.querySelector("#change");

let count = 0;

function AddChange() {

    count++;
    Show();
    output.textContent = count;

}


function LowerChange() {
    count--;
    Show();
    output.textContent = count;
}
function Show() {

    if (count < 0) {
        output.style.color = "red";

    } else if (count > 0) {
        output.style.color = "green";
    } else {
        output.style.color = "#333333";
    }
}

btn1.addEventListener("click", LowerChange);

btn2.addEventListener("click", AddChange);