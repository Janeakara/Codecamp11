function changecolor() {
    // alert("Change color function...")
    let tcolor = document.querySelector("#in1").value;
    let bcolor = document.querySelector("#in2").value;
    // alert("Change color");
    document.querySelector("h2").style.color = tcolor;
    document.querySelector("h2").style.backgroundColor = bcolor;
}