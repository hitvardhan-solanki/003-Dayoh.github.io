import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontFamily": "'Lato', sans-serif"
    },
    "container-fluid": {
        "background": "url(../images/dayoh-bgnd.png)",
        "backgroundSize": "cover",
        "backgroundPosition": "center",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "my-panel": {
        "width": "100%",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "overflowY": "hidden",
        "display": "flex",
        "justifyContent": "center"
    },
    "theme-pink-bg": {
        "backgroundColor": "#E6776F"
    },
    "theme-pink-text": {
        "color": "#E6776F"
    },
    "theme-grey-text": {
        "color": "#999999"
    },
    "theme-blue-bg": {
        "backgroundColor": "#6196CC"
    },
    "theme-white-bg": {
        "backgroundColor": "white"
    },
    "theme-white-text": {
        "color": "white"
    },
    "my-btn": {
        "backgroundColor": "#E6776F",
        "color": "white",
        "borderColor": "white",
        "fontSize": 10,
        "paddingTop": 6,
        "paddingRight": 25,
        "paddingBottom": 6,
        "paddingLeft": 25
    },
    "my-btn:visited": {
        "backgroundColor": "#E6776F",
        "color": "white",
        "borderColor": "white",
        "fontSize": 10,
        "paddingTop": 6,
        "paddingRight": 25,
        "paddingBottom": 6,
        "paddingLeft": 25
    },
    "my-btn:hover": {
        "backgroundColor": "#E6776F",
        "color": "white",
        "borderColor": "white",
        "fontSize": 10,
        "paddingTop": 6,
        "paddingRight": 25,
        "paddingBottom": 6,
        "paddingLeft": 25
    },
    "my-blue-btn": {
        "backgroundColor": "#6196CC",
        "color": "white",
        "border": "none",
        "fontSize": 12,
        "paddingTop": 8,
        "paddingRight": 30,
        "paddingBottom": 8,
        "paddingLeft": 30
    },
    "my-blue-btn:visited": {
        "backgroundColor": "#6196CC",
        "color": "white",
        "border": "none",
        "fontSize": 12,
        "paddingTop": 8,
        "paddingRight": 30,
        "paddingBottom": 8,
        "paddingLeft": 30
    },
    "my-blue-btn:hover": {
        "backgroundColor": "#6196CC",
        "color": "white",
        "border": "none",
        "fontSize": 12,
        "paddingTop": 8,
        "paddingRight": 30,
        "paddingBottom": 8,
        "paddingLeft": 30
    },
    "my-para": {
        "paddingTop": 6,
        "fontSize": 12
    },
    "my-mac-image": {
        "width": "100%"
    },
    "my-td": {
        "color": "#999999",
        "fontSize": 12,
        "textAlign": "center"
    },
    "my-table": {
        "marginBottom": 0
    },
    "carousel-control": {
        "textShadow": "none"
    },
    "carousel-controlleft": {
        "backgroundImage": "none"
    },
    "carousel-controlright": {
        "backgroundImage": "none"
    },
    "carousel-indicators li": {
        "borderColor": "#E6776F"
    },
    "carousel-indicators active": {
        "backgroundColor": "#E6776F"
    },
    "my-img": {
        "height": 100,
        "width": 100
    },
    "my-user-card": {
        "paddingBottom": 75
    },
    "my-icon": {
        "fontSize": 42,
        "border": "1px solid #EAEAEA",
        "borderRadius": "100%",
        "textAlign": "center",
        "paddingTop": 13,
        "paddingRight": 13,
        "paddingBottom": 13,
        "paddingLeft": 13,
        "background": "none",
        "color": "#E6776F",
        "width": 90,
        "height": 90,
        "marginTop": 15,
        "marginRight": 15,
        "marginBottom": 15,
        "marginLeft": 15
    },
    "my-icon:hover": {
        "color": "#E6776F",
        "outline": "none"
    },
    "my-icon:focus": {
        "color": "#E6776F",
        "outline": "none"
    },
    "my-icon-title": {
        "color": "#333333",
        "fontSize": 12,
        "textAlign": "center"
    },
    "my-icon-caption": {
        "color": "#AAAAAA",
        "fontSize": 10,
        "textAlign": "center"
    },
    "my-footer-icon": {
        "textAlign": "center",
        "color": "white",
        "backgroundColor": "#E6776F",
        "outline": "none",
        "borderRadius": "50%",
        "borderColor": "white",
        "height": 40,
        "width": 40,
        "paddingTop": 9,
        "paddingRight": 13,
        "paddingBottom": 9,
        "paddingLeft": 13
    },
    "my-footer-icon:hover": {
        "textAlign": "center",
        "outline": 0,
        "color": "white"
    },
    "footer-icon:focus": {
        "textAlign": "center",
        "outline": 0,
        "color": "white"
    },
    "my-footer-text": {
        "marginTop": 7
    },
    "my-banner": {
        "marginBottom": -450,
        "overflow": "hidden"
    },
    "my-banner-heading": {
        "textShadow": "1px 1px grey"
    },
    "my-banner-text": {
        "fontSize": 12,
        "textShadow": "1px 1px grey",
        "paddingTop": 100
    },
    "my-banner-holder": {
        "width": 600,
        "height": 600,
        "overflow": "visible"
    },
    "my-banner-image": {
        "textAlign": "left",
        "maxWidth": 450,
        "position": "relative"
    },
    "my-banner-panel": {
        "paddingBottom": 0
    },
    "my-banner-image-holder": {
        "flexGrow": 1,
        "height": 800,
        "overflowX": "hidden",
        "background": "url(../images/iPhone.png)",
        "backgroundPosition": "0 150px",
        "backgroundSize": "contain",
        "backgroundRepeat": "no-repeat"
    },
    "my-price-tag": {
        "fontSize": 30,
        "color": "#E6776F",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
    },
    "my-flex": {
        "display": "flex"
    },
    "no-padding-lr": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "my-row": {
        "width": "100%",
        "maxWidth": 900
    },
    "user-slider": {
        "width": "100%",
        "maxWidth": 900
    }
});