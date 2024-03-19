var money = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
});




(() => {
    Kashacter = {};

    Kashacter.ShowUI = function (data) {
        $("body").css({ display: "block" });
        $(".container").css({ display: "block" });
        $(".main-container").css({ display: "block" });
        $("[data-charid=1]")
            .html(

               `<div class="character-info"><h1>   ${translate.name}</h1>  <p class="character-info-name">` +


                data.firstname +
                " " +
                data.lastname +
                
                "<span>" +
            



                `</span> </p><h1>   ${translate.job}</h1> <p class="character-info-work">`+

                // data.job +
                // " " +
                data.job_grade +

                "<span>" +


                `</span></p><h1>   ${translate.money}</h1> <p class="character-info-money">` +
                money.format(data.money) +

                "<span> " +


               `</span></p> <h1>   ${translate.bank}</h1> <p class="character-info-bank">`+


                money.format(data.bank)+

                "<span> " +

                
                `</span></p><h1>   ${translate.dob}</h1> <p class="character-info-dateofbirth">` +
                data.dateofbirth +
                "<span>" +


                `</span></p><h1>   ${translate.gender}</h1>  <p class="character-info-gender">` +
                data.sex +
                "<span>" +

                "</span></p></div>"
            )
            .attr("data-ischar", "true");
    };

    Kashacter.CloseUI = function () {
        $("body").css({ display: "none" });
        $(".main-container").css({ display: "none" });
        $("[data-charid=1]").html('<h3 class="character-fullname"></h3><div class="character-info"><p class="character-info-new"></p></div>');
    };

    window.onload = function (e) {
        window.addEventListener("message", function (event) {
            switch (event.data.action) {
                case "openui":
                    Kashacter.ShowUI(event.data.character);
                    break;
                case "closeui":
                    Kashacter.CloseUI();
                    break;
            }
        });
    };
})();
