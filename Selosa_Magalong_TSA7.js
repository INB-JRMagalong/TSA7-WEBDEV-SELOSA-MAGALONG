    let flexSimulationBox = document.getElementById('simulation-box');

    function Reset() {
        flexSimulationBox.style.flexDirection = 'row';
        flexSimulationBox.style.justifyContent = 'center';
        flexSimulationBox.style.alignItems = 'stretch';
        flexSimulationBox.style.gap = '0px';

        document.getElementById("count-flex").value = 0;

        document.getElementById("earth-grow").value = 0;
        document.getElementById("sun-grow").value = 0;
        document.getElementById("moon-grow").value = 0;

        FlexGrow(1);
        FlexGrow(2);
        FlexGrow(3);
    }

    function Gap() {
        const gap = document.getElementById("count-flex").value;
        flexSimulationBox.style.gap = `${gap}px`;
    }

    function Direction(x) {
        if (x == 1) {
            flexSimulationBox.style.flexDirection = "row";
        } else if (x == 2) {
            flexSimulationBox.style.flexDirection = "column";
        }
    }

    function JustifyContent(x) {
        if (x == 1) {
            flexSimulationBox.style.justifyContent = "start";
        } else if (x == 2) {
            flexSimulationBox.style.justifyContent = "center";
        } else if (x == 3) {
            flexSimulationBox.style.justifyContent = "end";
        } else if (x == 4) {
            flexSimulationBox.style.justifyContent = "space-around";
        } else if (x == 5) {
            flexSimulationBox.style.justifyContent = "space-between";
        } else if (x == 6) {
            flexSimulationBox.style.justifyContent = "space-evenly";
        }
    }

    function AlignItems(x) {
        if (x == 1) {
            flexSimulationBox.style.alignItems = "start";
        } else if (x == 2) {
            flexSimulationBox.style.alignItems = "center";
        } else if (x == 3) {
            flexSimulationBox.style.alignItems = "end";
        }
    }

    function FlexGrow(number) {
        let grow;
        if (number == 1) {
            grow = document.getElementById("earth-grow").value;
            document.getElementById("earth").style.flexGrow = grow;
        } else if (number == 2) {
            grow = document.getElementById("sun-grow").value;
            document.getElementById("sun").style.flexGrow = grow;
        } else if (number == 3) {
            grow = document.getElementById("moon-grow").value;
            document.getElementById("moon").style.flexGrow = grow;
        }
    }

    function Grow(x) {
        if (x == 1) {
            document.getElementById("earth").style.flexGrow++;
            document.getElementById("sun").style.flexGrow++;
            document.getElementById("moon").style.flexGrow++;
            document.getElementById("earth-grow").value++;
            document.getElementById("sun-grow").value++;
            document.getElementById("moon-grow").value++;
        } else if (x == 2) {
            document.getElementById("earth").style.flexGrow = 0;
            document.getElementById("sun").style.flexGrow = 0;
            document.getElementById("moon").style.flexGrow = 0;
            document.getElementById("earth-grow").value = 0;
            document.getElementById("sun-grow").value = 0;
            document.getElementById("moon-grow").value = 0;
        }
    }
