const config = {
    "type": "serial",
    "theme": "light",
    "autoMarginOffset": 0,
    "marginLeft": 30,
    "valueAxes": [{
        "position": "right",
        "gridThickness": 0,
        "fontSize": 11,
        "showFirstLabel": false,
        "usePrefixes": true,
        "color": "#96a4b6",
        "fontFamily": "Lato",
        "labelFunction": function (value, valueString) {
            if (value < 10000)
                return value.toLocaleString();
            return valueString;
        }
    }],
    "graphs": [{
        "id": "fromGraph",
        "lineAlpha": 0,
        "showBalloon": false,
        "valueField": "fromValue",
        "fillColors": "#76c4e8",
        "fillAlphas": 0,
        "disableToggle": true
    }, {
        "fillAlphas": 0.2,
        "fillToGraph": "fromGraph",
        "lineAlpha": 0,
        "showBalloon": false,
        "fillColors": "#76c4e8",
        "valueField": "toValue",
        "disableToggle": true
    }, {
        "valueField": "value",
        "balloonFunction": function (item, graph) {
            var year = item.serialDataItem.category;
            var value = item.values.value.toLocaleString();
            if (year == 0) {
                return "<div style='margin:10px; text-align:left; font-family: Lato;'>" +
                    "<span style='font-size:18px'>$" + value + "</span><br>" +
                    "<span style='font-size:12px'>Today</span></div>";
            } else {
                return "<div style='margin:10px; text-align:left; font-family: Lato;'>" +
                    "<span style='font-size:18px'>$" + value + "</span><br>" +
                    "<span style='font-size:12px'>Year " + year + "</span></div>";
            }
        },
        "fillAlphas": 0,
        "lineColor": "#76c4e8",
        "lineThickness": 2,
        "disableToggle": true
    }],
    "chartCursor": {
        "cursorAlpha": 0,
        "selectWithoutZooming": true,
        "zoomable": false,
        "categoryBalloonEnabled": false
    },
    "categoryField": "year",
    "categoryAxis": {
        "position": "bottom",
        "startOnAxis": true,
        "parseDates": false,
        "axisAlpha": 0,
        "minHorizontalGap": 25,
        "gridAlpha": 0,
        "tickLength": 0,
        "autoGridCount": false,
        "fontSize": 12,
        "labelFrequency": 1,
        "color": "#96a4b6",
        "fontFamily": "Lato"

    },
};

export default config;