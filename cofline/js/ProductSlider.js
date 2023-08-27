let MySlider = document.querySelector("#slider").style
let right = 0
setInterval(function() {
    if (right < 100) {
        right += 25
        let MySliderRight = right + "%"
        MySlider.right = MySliderRight
            // console.log(MySlider)
    } else if (right = 100) {
        right = 0
            // console.log(":(")
    }

}, 3000)