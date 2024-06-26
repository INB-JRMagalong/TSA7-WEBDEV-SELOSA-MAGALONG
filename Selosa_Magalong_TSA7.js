let container = document.getElementById('simulation-box');

function reset() {
    container.style.flexDirection = 'row';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'stretch';
    container.style.gap = '0px';

    document.getElementById("count-flex").value = 0;

    document.getElementById("grow1").value = 0;
    document.getElementById("grow2").value = 0;
    document.getElementById("grow3").value = 0;

    FlexGrow(1);
    FlexGrow(2);
    FlexGrow(3);
}

function Gap() {
    const gap = document.getElementById("count-flex").value;
    container.style.gap = `${gap}px`;
}

function Direction(x) {
    if (x === 1) {
        container.style.flexDirection = "row";
    } else if (x === 2) {
        container.style.flexDirection = "column";
    }
}

function JustifyContent(x) {
    if (x === 1) {
        container.style.justifyContent = "start";
    } else if (x === 2) {
        container.style.justifyContent = "center";
    } else if (x === 3) {
        container.style.justifyContent = "end";
    } else if (x === 4) {
        container.style.justifyContent = "space-around";
    } else if (x === 5) {
        container.style.justifyContent = "space-between";
    } else if (x === 6) {
        container.style.justifyContent = "space-evenly";
    }
}

function AlignItems(x) {
    if (x === 1) {
        container.style.alignItems = "start";
    } else if (x === 2) {
        container.style.alignItems = "center";
    } else if (x === 3) {
        container.style.alignItems = "end";
    }
}

function FlexGrow(number) {
    const grow = document.getElementById(`grow${number}`).value;
    document.getElementById(`box${number}`).style.flexGrow = grow;
}

function Grow(x) {
    if (x === 1) {
        document.getElementById("earth").style.flexGrow++;
        document.getElementById("sun").style.flexGrow++;
        document.getElementById("moon").style.flexGrow++;
        document.getElementById("grow1").value++;
        document.getElementById("grow2").value++;
        document.getElementById("grow3").value++;
    } else if (x === 2) {
        document.getElementById("earth").style.flexGrow = 0;
        document.getElementById("sun").style.flexGrow = 0;
        document.getElementById("moon").style.flexGrow = 0;
        document.getElementById("grow1").value = 0;
        document.getElementById("grow2").value = 0;
        document.getElementById("grow3").value = 0;
    }
}
