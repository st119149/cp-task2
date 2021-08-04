

$(function () {

    let options = {
        colorRed: 0,
        colorGreen: 0,
        colorBlue: 0,
        backgroundColorRed: 255,
        backgroundColorGreen: 255,
        backgroundColorBlue: 255,
    }

    const changeProp = (prop, value) => {
        $(`#${prop}`).slider({
            change: (e, ui) => {
                options[prop] = ui.value;
                $(".content").css( "color", `rgb(${options.colorRed}, ${options.colorGreen}, ${options.colorBlue})`);
                $(".content").css( "background-color", `rgb(${options.backgroundColorRed}, ${options.backgroundColorGreen}, ${options.backgroundColorBlue})`);
                $(`#${prop} .progress`).css('width', `${ui.value/255*100}px`)
            },
            value: value,
            max: 255,
            range:  "min",
            orientation: "horizontal"
        });
    }

    changeProp('colorRed', 0, );
    changeProp('colorGreen', 0);
    changeProp('colorBlue', 0);
    changeProp('backgroundColorRed', 255);
    changeProp('backgroundColorGreen', 255);
    changeProp('backgroundColorBlue', 255);




    $("#tabs").tabs();


});

