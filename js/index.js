const linksWidth = $(".links").outerWidth();

$(".links").css({left : `-${linksWidth}px` })
$(".icon").css({left : "5px"},400)

$(".links i").on("click",function () {
    $(".links").animate({left : `-${linksWidth}px` },400)
    $(".icon").animate({left : "5px"},400)
})
$(".icon").on("click",function () {
        $(".links").animate({left : "0px" },400)
        $(".icon").animate({left : `${linksWidth}px`},400)
})

$('.title').on("click" , function(){
    $(this).next().slideToggle(500);
    $('.inner').not($(this).next()).slideUp(500);

})

const countDownElement = $(".countDown")
const countDownDate = new Date("Oct 25, 2024 00:00:00").getTime();
const updateCountDown = () => {
    const now = new Date().getTime();
    const difference = countDownDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24) );
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    updateDigits("days", `${days} D`);
    updateDigits("hours",`${hours} H`);
    updateDigits("minutes", `${minutes} M`);
    updateDigits("seconds", `${seconds} S`);
};

const updateDigits = (className, value) => {
    const digitElement = $(`.${className}`);
    const currentDigit = parseInt(digitElement.text(), 10);

    if (currentDigit !== value) {
        digitElement.addClass("hidden");
        setTimeout(() => {
            digitElement.text(value).removeClass("hidden");
        }, 500);  
    }
};
const countDownInterval = setInterval(updateCountDown, 1000);
updateCountDown();

$("textarea").on("keyup",function () {
    let myLength = $(this).val().length;
    $(".num").text(
        100 - myLength <= 0 ? "your character available finished" : 100 - myLength
    )
    
    
})