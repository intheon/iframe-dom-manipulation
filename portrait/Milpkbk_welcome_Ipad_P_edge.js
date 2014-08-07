/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['actor, sans-serif']='<script src=\"http://use.edgefonts.net/actor:n4:all.js\"></script>';
    fonts['carme, sans-serif']='<script src=\"http://use.edgefonts.net/carme:n4:all.js\"></script>';
    fonts['cabin, sans-serif']='<script src=\"http://use.edgefonts.net/cabin:n4,i4,n7,i7,n5,i5,n6,i6:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'false',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'newbg',
                type: 'image',
                rect: ['0px', '0px','640px','960px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"newbg_iphone2.png",'0px','0px']
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['29px', '29px','1477px','2012px','auto', 'auto'],
                opacity: 0.4,
                fill: ["rgba(251,251,251,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'registerwrapper',
                type: 'rect',
                rect: ['731', '1720','auto','auto','auto', 'auto'],
                userClass: ""
            },
            {
                id: 'Signature2',
                type: 'rect',
                rect: ['88px', '1601px','auto','auto','auto', 'auto']
            },
            {
                id: 'Future_symbol',
                type: 'rect',
                rect: ['82px', '1483px','auto','auto','auto', 'auto']
            },
            {
                id: 'Features',
                type: 'rect',
                rect: ['82px', '1017px','auto','auto','auto', 'auto']
            },
            {
                id: 'Categories',
                type: 'rect',
                rect: ['82px', '745px','auto','auto','auto', 'auto']
            },
            {
                id: 'TheAPP3',
                type: 'rect',
                rect: ['456', '355','auto','auto','auto', 'auto']
            },
            {
                id: '_1_top',
                type: 'text',
                rect: ['79px', '336px','1017px','236px','auto', 'auto'],
                text: "Welcome to Military Pocket Books App, as a publisher we are keen to ensure our readers get the best possible reader experience.<br><br>We have been producing traditional printed pocket books for over 30 years and progressed to developing our new and updated books into both printed and digital formats.<br><br>",
                align: "left",
                font: ['carme, sans-serif', 28, "rgba(0,0,0,1)", "500", "none", "normal"]
            },
            {
                id: 'SPB_2012_COVER200px_wide',
                type: 'image',
                rect: ['79px', '351px','44.9%','47.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SPB%202012%20COVER200px_wide.png",'0px','0px']
            },
            {
                id: 'SNIPER_COVE_200px_wide',
                type: 'image',
                rect: ['79px', '351px','44.9%','47.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SNIPER_COVE_200px_wide.png",'0px','0px']
            },
            {
                id: 'Page1',
                type: 'image',
                rect: ['79px', '351px','690px','971px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Page1.png",'0px','0px'],
                boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
            },
            {
                id: 'Heading2',
                type: 'rect',
                rect: ['466px', '138px','auto','auto','auto', 'auto']
            },
            {
                id: 'MILITARYpocketbooks_icon',
                type: 'image',
                rect: ['79px', '108px','200px','200px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"MILITARYpocketbooks_icon.jpg",'0px','0px']
            },
            {
                id: 'iTunes_icon_200x200px',
                type: 'image',
                rect: ['261px', '462px','800px','800px','auto', 'auto'],
                opacity: 0.040650406504065,
                fill: ["rgba(0,0,0,0)",im+"iTunes%20icon%20200x200px.png",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'Categories',
                symbolName: 'Categories',
                autoPlay: {

                }
            },
            {
                id: 'Features',
                symbolName: 'Features',
                autoPlay: {

                }
            },
            {
                id: 'Signature2',
                symbolName: 'Signature',
                autoPlay: {

                }
            },
            {
                id: 'Future_symbol',
                symbolName: 'Future_symbol',
                autoPlay: {

                }
            },
            {
                id: 'registerwrapper',
                symbolName: 'Register',
                autoPlay: {

                }
            },
            {
                id: 'TheAPP3',
                symbolName: 'TheAPP',
                autoPlay: {

                }
            },
            {
                id: 'Heading2',
                symbolName: 'Heading',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_registerwrapper}": [
                ["style", "top", '1654px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '747px']
            ],
            "${_Signature2}": [
                ["style", "left", '82px'],
                ["style", "top", '1656px']
            ],
            "${_MILITARYpocketbooks_icon}": [
                ["style", "top", '22px'],
                ["transform", "scaleY", '0'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '200px'],
                ["transform", "scaleX", '0'],
                ["style", "left", '79px'],
                ["style", "width", '200px']
            ],
            "${_Categories}": [
                ["style", "top", '659px'],
                ["transform", "scaleY", '0'],
                ["style", "left", '82px'],
                ["transform", "scaleX", '0']
            ],
            "${_iTunes_icon_200x200px}": [
                ["style", "top", '419px'],
                ["style", "height", '800px'],
                ["style", "opacity", '0.05'],
                ["style", "left", '261px'],
                ["style", "width", '800px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '2048px'],
                ["style", "width", '1536px']
            ],
            "${_Future_symbol}": [
                ["style", "top", '1397px'],
                ["transform", "scaleY", '0'],
                ["style", "left", '82px'],
                ["transform", "scaleX", '0']
            ],
            "${_SNIPER_COVE_200px_wide}": [
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '79px'],
                ["style", "width", '44.9%'],
                ["style", "top", '308px'],
                ["transform", "scaleY", '1'],
                ["subproperty", "boxShadow.blur", '4px'],
                ["style", "height", '47.4%'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["subproperty", "boxShadow.spread", '3px']
            ],
            "${_Page1}": [
                ["subproperty", "boxShadow.blur", '4px'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '79px'],
                ["style", "width", '690px'],
                ["style", "top", '308px'],
                ["transform", "scaleY", '1'],
                ["subproperty", "boxShadow.spread", '3px'],
                ["style", "height", '971px'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)']
            ],
            "${_newbg}": [
                ["style", "top", '0px'],
                ["style", "height", '2027px'],
                ["style", "opacity", '0.30000001192092896'],
                ["style", "left", '0px'],
                ["style", "width", '1536px']
            ],
            "${_TheAPP3}": [
                ["style", "top", '529px'],
                ["transform", "scaleY", '0'],
                ["transform", "skewX", '0deg'],
                ["transform", "scaleX", '0'],
                ["style", "left", '79px']
            ],
            "${__1_top}": [
                ["transform", "scaleX", '0'],
                ["style", "font-weight", '500'],
                ["style", "left", '79px'],
                ["style", "width", '1017px'],
                ["style", "top", '250px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '236px'],
                ["style", "font-family", 'carme, sans-serif'],
                ["style", "font-size", '30px'],
                ["style", "opacity", '1']
            ],
            "${_Heading2}": [
                ["style", "left", '-900px'],
                ["style", "top", '111px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(251,251,251,1.00)'],
                ["style", "top", '29px'],
                ["style", "height", '2012px'],
                ["style", "opacity", '0.4'],
                ["style", "left", '29px'],
                ["style", "width", '1477px']
            ],
            "${_Features}": [
                ["style", "top", '931px'],
                ["transform", "scaleY", '0'],
                ["transform", "skewX", '0deg'],
                ["transform", "scaleX", '0'],
                ["style", "left", '82px']
            ],
            "${_SPB_2012_COVER200px_wide}": [
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '79px'],
                ["style", "width", '44.9%'],
                ["style", "top", '308px'],
                ["transform", "scaleY", '1'],
                ["subproperty", "boxShadow.spread", '3px'],
                ["style", "height", '47.4%'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["subproperty", "boxShadow.blur", '4px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 21000,
            autoPlay: true,
            labels: {
                "Start": 0,
                "Finish": 20750
            },
            timeline: [
                { id: "eid352", tween: [ "transform", "${_SNIPER_COVE_200px_wide}", "scaleY", '0.5', { fromValue: '1'}], position: 7000, duration: 2500, easing: "easeInOutBack" },
                { id: "eid314", tween: [ "transform", "${_TheAPP3}", "scaleX", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid408", tween: [ "transform", "${_TheAPP3}", "scaleX", '1', { fromValue: '0'}], position: 13283, duration: 1620 },
                { id: "eid336", tween: [ "transform", "${_Page1}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 4375, duration: 3625, easing: "easeInOutBack" },
                { id: "eid374", tween: [ "style", "${_SPB_2012_COVER200px_wide}", "left", '989px', { fromValue: '79px'}], position: 11000, duration: 5000, easing: "easeInOutBack" },
                { id: "eid522", tween: [ "style", "${_registerwrapper}", "top", '1697px', { fromValue: '1654px'}], position: 0, duration: 21000 },
                { id: "eid369", tween: [ "transform", "${_SPB_2012_COVER200px_wide}", "scaleX", '0.5', { fromValue: '1'}], position: 11000, duration: 2500, easing: "easeInOutBack" },
                { id: "eid326", tween: [ "transform", "${_Future_symbol}", "scaleY", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid424", tween: [ "transform", "${_Future_symbol}", "scaleY", '1', { fromValue: '0'}], position: 16000, duration: 2025 },
                { id: "eid312", tween: [ "transform", "${__1_top}", "scaleY", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid395", tween: [ "transform", "${__1_top}", "scaleY", '1', { fromValue: '0'}], position: 12473, duration: 2430 },
                { id: "eid500", tween: [ "style", "${_registerwrapper}", "left", '747px', { fromValue: '747px'}], position: 21000, duration: 0 },
                { id: "eid164", tween: [ "style", "${_newbg}", "width", '1536px', { fromValue: '1536px'}], position: 0, duration: 0, easing: "easeOutQuint" },
                { id: "eid363", tween: [ "style", "${_SNIPER_COVE_200px_wide}", "left", '988px', { fromValue: '79px'}], position: 7000, duration: 5000, easing: "easeInOutBack" },
                { id: "eid470", tween: [ "subproperty", "${_Page1}", "boxShadow.offsetV", '3px', { fromValue: '3px'}], position: 8000, duration: 0, easing: "easeInOutBack" },
                { id: "eid311", tween: [ "transform", "${__1_top}", "scaleX", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid397", tween: [ "transform", "${__1_top}", "scaleX", '1', { fromValue: '0'}], position: 12473, duration: 2430 },
                { id: "eid472", tween: [ "subproperty", "${_Page1}", "boxShadow.blur", '4px', { fromValue: '4px'}], position: 8000, duration: 0, easing: "easeInOutBack" },
                { id: "eid449", tween: [ "style", "${_iTunes_icon_200x200px}", "width", '300px', { fromValue: '800px'}], position: 17000, duration: 3750, easing: "easeInOutBack" },
                { id: "eid530", tween: [ "style", "${_Features}", "top", '974px', { fromValue: '931px'}], position: 0, duration: 21000 },
                { id: "eid526", tween: [ "style", "${_Heading2}", "top", '154px', { fromValue: '111px'}], position: 0, duration: 4000 },
                { id: "eid513", tween: [ "style", "${_Heading2}", "top", '111px', { fromValue: '154px'}], position: 4000, duration: 17000 },
                { id: "eid468", tween: [ "subproperty", "${_SNIPER_COVE_200px_wide}", "boxShadow.blur", '4px', { fromValue: '4px'}], position: 12000, duration: 0, easing: "easeInOutBack" },
                { id: "eid319", tween: [ "transform", "${_Categories}", "scaleY", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid403", tween: [ "transform", "${_Categories}", "scaleY", '1', { fromValue: '0'}], position: 14093, duration: 1907 },
                { id: "eid529", tween: [ "style", "${_Categories}", "top", '702px', { fromValue: '659px'}], position: 0, duration: 21000 },
                { id: "eid528", tween: [ "style", "${_MILITARYpocketbooks_icon}", "top", '65px', { fromValue: '22px'}], position: 0, duration: 21000 },
                { id: "eid332", tween: [ "style", "${_Page1}", "left", '988px', { fromValue: '79px'}], position: 3000, duration: 5000, easing: "easeInOutBack" },
                { id: "eid450", tween: [ "style", "${_iTunes_icon_200x200px}", "height", '300px', { fromValue: '800px'}], position: 17000, duration: 3750, easing: "easeInOutBack" },
                { id: "eid443", tween: [ "style", "${_iTunes_icon_200x200px}", "left", '1169px', { fromValue: '261px'}], position: 17000, duration: 3750, easing: "easeInOutBack" },
                { id: "eid334", tween: [ "style", "${_Page1}", "width", '661px', { fromValue: '690px'}], position: 3000, duration: 5000, easing: "easeInOutBack" },
                { id: "eid357", tween: [ "style", "${_SNIPER_COVE_200px_wide}", "width", '43.02%', { fromValue: '44.9%'}], position: 7000, duration: 5000, easing: "easeInOutBack" },
                { id: "eid460", tween: [ "subproperty", "${_SPB_2012_COVER200px_wide}", "boxShadow.offsetV", '3px', { fromValue: '3px'}], position: 16000, duration: 0, easing: "easeInOutBack" },
                { id: "eid321", tween: [ "transform", "${_Features}", "scaleX", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid416", tween: [ "transform", "${_Features}", "scaleX", '1', { fromValue: '0'}], position: 14903, duration: 1822 },
                { id: "eid462", tween: [ "subproperty", "${_SPB_2012_COVER200px_wide}", "boxShadow.blur", '4px', { fromValue: '4px'}], position: 16000, duration: 0, easing: "easeInOutBack" },
                { id: "eid473", tween: [ "style", "${__1_top}", "font-size", '30px', { fromValue: '30px'}], position: 14903, duration: 0 },
                { id: "eid525", tween: [ "style", "${__1_top}", "top", '293px', { fromValue: '250px'}], position: 0, duration: 21000 },
                { id: "eid484", tween: [ "style", "${_newbg}", "opacity", '0.65', { fromValue: '0.30000001192092896'}], position: 0, duration: 9000, easing: "easeOutCubic" },
                { id: "eid486", tween: [ "style", "${_newbg}", "opacity", '1', { fromValue: '0.6499999761581421'}], position: 9000, duration: 7000, easing: "easeOutCubic" },
                { id: "eid524", tween: [ "style", "${_Page1}", "top", '351px', { fromValue: '308px'}], position: 0, duration: 3000 },
                { id: "eid350", tween: [ "style", "${_Page1}", "top", '-125px', { fromValue: '351px'}], position: 3000, duration: 5000, easing: "easeInOutBack" },
                { id: "eid504", tween: [ "style", "${_Page1}", "top", '-168px', { fromValue: '-125px'}], position: 8000, duration: 13000 },
                { id: "eid318", tween: [ "transform", "${_Categories}", "scaleX", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid402", tween: [ "transform", "${_Categories}", "scaleX", '1', { fromValue: '0'}], position: 14093, duration: 1907 },
                { id: "eid377", tween: [ "style", "${_Heading2}", "left", '336px', { fromValue: '-900px'}], position: 0, duration: 4000, easing: "easeOutCubic" },
                { id: "eid471", tween: [ "subproperty", "${_Page1}", "boxShadow.offsetH", '3px', { fromValue: '3px'}], position: 8000, duration: 0, easing: "easeInOutBack" },
                { id: "eid354", tween: [ "style", "${_SNIPER_COVE_200px_wide}", "height", '45.31%', { fromValue: '47.4%'}], position: 7000, duration: 5000, easing: "easeInOutBack" },
                { id: "eid411", tween: [ "transform", "${_TheAPP3}", "skewX", '0deg', { fromValue: '0deg'}], position: 14903, duration: 0 },
                { id: "eid368", tween: [ "style", "${_SPB_2012_COVER200px_wide}", "height", '44.1%', { fromValue: '47.4%'}], position: 11000, duration: 5000, easing: "easeInOutBack" },
                { id: "eid459", tween: [ "subproperty", "${_SPB_2012_COVER200px_wide}", "boxShadow.offsetH", '3px', { fromValue: '3px'}], position: 16000, duration: 0, easing: "easeInOutBack" },
                { id: "eid490", tween: [ "style", "${_registerwrapper}", "opacity", '0.000000', { fromValue: '0.000000'}], position: 0, duration: 0 },
                { id: "eid495", tween: [ "style", "${_registerwrapper}", "opacity", '0.1', { fromValue: '0.000000'}], position: 14903, duration: 4578 },
                { id: "eid496", tween: [ "style", "${_registerwrapper}", "opacity", '1', { fromValue: '0.1'}], position: 19481, duration: 1519 },
                { id: "eid322", tween: [ "transform", "${_Features}", "scaleY", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid417", tween: [ "transform", "${_Features}", "scaleY", '1', { fromValue: '0'}], position: 14903, duration: 1822 },
                { id: "eid534", tween: [ "style", "${_TheAPP3}", "top", '529px', { fromValue: '529px'}], position: 0, duration: 0 },
                { id: "eid535", tween: [ "style", "${_TheAPP3}", "top", '529px', { fromValue: '529px'}], position: 21000, duration: 0 },
                { id: "eid469", tween: [ "subproperty", "${_Page1}", "boxShadow.spread", '3px', { fromValue: '3px'}], position: 8000, duration: 0, easing: "easeInOutBack" },
                { id: "eid387", tween: [ "transform", "${_MILITARYpocketbooks_icon}", "scaleX", '1', { fromValue: '0'}], position: 3000, duration: 2000 },
                { id: "eid289", tween: [ "style", "${_TheAPP3}", "left", '79px', { fromValue: '79px'}], position: 0, duration: 0 },
                { id: "eid532", tween: [ "style", "${_SNIPER_COVE_200px_wide}", "top", '351px', { fromValue: '308px'}], position: 0, duration: 7000 },
                { id: "eid508", tween: [ "style", "${_SNIPER_COVE_200px_wide}", "top", '308px', { fromValue: '351px'}], position: 12000, duration: 9000 },
                { id: "eid454", tween: [ "style", "${_iTunes_icon_200x200px}", "opacity", '0.05', { fromValue: '0.05'}], position: 0, duration: 0 },
                { id: "eid453", tween: [ "style", "${_iTunes_icon_200x200px}", "opacity", '1', { fromValue: '0.05'}], position: 17000, duration: 3750, easing: "easeInOutBack" },
                { id: "eid337", tween: [ "style", "${_Page1}", "height", '928px', { fromValue: '971px'}], position: 3000, duration: 5000, easing: "easeInOutBack" },
                { id: "eid367", tween: [ "transform", "${_SPB_2012_COVER200px_wide}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 11500, duration: 4500, easing: "easeInOutBack" },
                { id: "eid391", tween: [ "transform", "${_MILITARYpocketbooks_icon}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 3000, duration: 2000 },
                { id: "eid531", tween: [ "style", "${_Future_symbol}", "top", '1440px', { fromValue: '1397px'}], position: 0, duration: 21000 },
                { id: "eid523", tween: [ "style", "${_iTunes_icon_200x200px}", "top", '462px', { fromValue: '419px'}], position: 0, duration: 17000 },
                { id: "eid442", tween: [ "style", "${_iTunes_icon_200x200px}", "top", '1520px', { fromValue: '462px'}], position: 17000, duration: 3750, easing: "easeInOutBack" },
                { id: "eid536", tween: [ "style", "${_newbg}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid537", tween: [ "style", "${_newbg}", "top", '0px', { fromValue: '0px'}], position: 21000, duration: 0 },
                { id: "eid467", tween: [ "subproperty", "${_SNIPER_COVE_200px_wide}", "boxShadow.offsetH", '3px', { fromValue: '3px'}], position: 12000, duration: 0, easing: "easeInOutBack" },
                { id: "eid388", tween: [ "transform", "${_MILITARYpocketbooks_icon}", "scaleY", '1', { fromValue: '0'}], position: 3000, duration: 2000 },
                { id: "eid325", tween: [ "transform", "${_Future_symbol}", "scaleX", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid423", tween: [ "transform", "${_Future_symbol}", "scaleX", '1', { fromValue: '0'}], position: 16000, duration: 2025 },
                { id: "eid342", tween: [ "transform", "${_Page1}", "scaleX", '0.5', { fromValue: '1'}], position: 3000, duration: 2500, easing: "easeInOutBack" },
                { id: "eid533", tween: [ "style", "${_Signature2}", "top", '1699px', { fromValue: '1656px'}], position: 0, duration: 13750 },
                { id: "eid506", tween: [ "style", "${_Signature2}", "top", '1656px', { fromValue: '1699px'}], position: 13750, duration: 7250 },
                { id: "eid466", tween: [ "subproperty", "${_SNIPER_COVE_200px_wide}", "boxShadow.offsetV", '3px', { fromValue: '3px'}], position: 12000, duration: 0, easing: "easeInOutBack" },
                { id: "eid343", tween: [ "transform", "${_Page1}", "scaleY", '0.5', { fromValue: '1'}], position: 3000, duration: 2500, easing: "easeInOutBack" },
                { id: "eid371", tween: [ "style", "${_SPB_2012_COVER200px_wide}", "width", '43.02%', { fromValue: '44.9%'}], position: 11000, duration: 5000, easing: "easeInOutBack" },
                { id: "eid353", tween: [ "transform", "${_SNIPER_COVE_200px_wide}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 8000, duration: 4000, easing: "easeInOutBack" },
                { id: "eid478", tween: [ "style", "${_newbg}", "height", '2041px', { fromValue: '2027px'}], position: 0, duration: 21000 },
                { id: "eid464", tween: [ "subproperty", "${_SPB_2012_COVER200px_wide}", "boxShadow.spread", '3px', { fromValue: '3px'}], position: 16000, duration: 0, easing: "easeInOutBack" },
                { id: "eid366", tween: [ "transform", "${_SPB_2012_COVER200px_wide}", "scaleY", '0.5', { fromValue: '1'}], position: 11000, duration: 2500, easing: "easeInOutBack" },
                { id: "eid315", tween: [ "transform", "${_TheAPP3}", "scaleY", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid409", tween: [ "transform", "${_TheAPP3}", "scaleY", '1', { fromValue: '0'}], position: 13283, duration: 1620 },
                { id: "eid355", tween: [ "transform", "${_SNIPER_COVE_200px_wide}", "scaleX", '0.5', { fromValue: '1'}], position: 7000, duration: 2500, easing: "easeInOutBack" },
                { id: "eid301", tween: [ "style", "${_Signature2}", "left", '82px', { fromValue: '82px'}], position: 13750, duration: 0 },
                { id: "eid527", tween: [ "style", "${_SPB_2012_COVER200px_wide}", "top", '351px', { fromValue: '308px'}], position: 0, duration: 11000 },
                { id: "eid375", tween: [ "style", "${_SPB_2012_COVER200px_wide}", "top", '834px', { fromValue: '351px'}], position: 11000, duration: 5000, easing: "easeInOutBack" },
                { id: "eid515", tween: [ "style", "${_SPB_2012_COVER200px_wide}", "top", '791px', { fromValue: '834px'}], position: 16000, duration: 5000 },
                { id: "eid465", tween: [ "subproperty", "${_SNIPER_COVE_200px_wide}", "boxShadow.spread", '3px', { fromValue: '3px'}], position: 12000, duration: 0, easing: "easeInOutBack" }            ]
        }
    }
},
"TheAPP": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['actor, sans-serif', 30, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: '_2_top',
                    text: '<br><br>The App you have installed on your device is your personal book shelf for your pocket book, a replica of the printed book.<br><br><br>',
                    align: 'left',
                    rect: ['0px', '0px', '1005px', '157px', 'auto', 'auto']
                },
                {
                    font: ['actor, sans-serif', 30, 'rgba(0,0,0,1)', '700', 'none', 'normal'],
                    type: 'text',
                    id: 'The_App',
                    text: 'The APP',
                    align: 'left',
                    rect: ['0px', '23px', '216px', '31px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${__2_top}": [
                ["style", "top", '0px'],
                ["style", "width", '1005px'],
                ["style", "font-weight", '400'],
                ["style", "height", '157px'],
                ["style", "font-family", 'actor, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '30px']
            ],
            "${_The_App}": [
                ["style", "top", '23px'],
                ["style", "font-size", '30px'],
                ["style", "height", '31px'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "width", '216px']
            ],
            "${symbolSelector}": [
                ["style", "height", '73px'],
                ["style", "width", '422px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Categories": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.98', '0.98']],
                    rect: ['-10px', '-2px', '1031px', '272px', 'auto', 'auto'],
                    type: 'text',
                    id: '_3_top',
                    text: '<br><br>There are two categories in the App; Book taster Samples and Books published.<br>Each book taster provides a free to download selection of pages, giving a sample of the full book and all the features of the full version are included.<br>Books published provides the full version of the books that can be purchased within the App.<br><br>',
                    align: 'left',
                    font: ['actor, sans-serif', 30, 'rgba(0,0,0,1)', '500', 'none', 'normal']
                },
                {
                    rect: ['0px', '29px', '322px', '31px', 'auto', 'auto'],
                    font: ['actor, sans-serif', 30, 'rgba(0,0,0,1)', '700', 'none', 'normal'],
                    id: 'Catogories',
                    text: 'Catergories<br>',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Catogories}": [
                ["style", "top", '29px'],
                ["style", "width", '322px'],
                ["style", "height", '31px'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "font-size", '30px']
            ],
            "${__3_top}": [
                ["transform", "scaleX", '0.98'],
                ["style", "font-weight", '500'],
                ["style", "left", '-10px'],
                ["style", "font-size", '30px'],
                ["style", "top", '-2px'],
                ["transform", "scaleY", '0.98'],
                ["style", "height", '272px'],
                ["style", "font-family", 'actor, sans-serif'],
                ["style", "width", '1031px']
            ],
            "${symbolSelector}": [
                ["style", "height", '185px'],
                ["style", "width", '419px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Features": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.97', '0.97']],
                    rect: ['-16px', '-6px', '1013px', '413px', 'auto', 'auto'],
                    type: 'text',
                    id: '_4_top',
                    text: '<br><br>The digital book has a number fantastic features unique to the our App; <br>Content jump to page<br>Text annotation &amp; save in app<br>Highlight marker on page<br>Book mark favorites<br>Social media sharing - Twitter, Facebook and email<br>Full text search and jump to located text<br>Thumbnail view<br>Dual page view.<br>',
                    align: 'left',
                    font: ['actor, sans-serif', 30, 'rgba(0,0,0,1)', '300', 'none', 'normal']
                },
                {
                    rect: ['0px', '26px', '351px', '31px', 'auto', 'auto'],
                    font: ['actor, sans-serif', 30, 'rgba(0,0,0,1)', '700', 'none', 'normal'],
                    id: 'Features',
                    text: 'App Features<br>',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '226px'],
                ["style", "width", '386px']
            ],
            "${_Features}": [
                ["style", "top", '26px'],
                ["style", "font-size", '30px'],
                ["style", "height", '31px'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "width", '351px']
            ],
            "${__4_top}": [
                ["transform", "scaleX", '0.97'],
                ["style", "font-weight", '300'],
                ["style", "left", '-16px'],
                ["style", "width", '1013px'],
                ["style", "top", '-6px'],
                ["transform", "scaleY", '0.97'],
                ["style", "height", '413px'],
                ["style", "font-family", 'actor, sans-serif'],
                ["style", "font-size", '30px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Future": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '48px', '979px', '80px', 'auto', 'auto'],
                    font: ['actor, sans-serif', 30, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    id: '_5_top',
                    text: 'Future developments will bring interactive content including audio and video, this will appear as updates to your purchased App.<br>',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${__5_top}": [
                ["style", "top", '48px'],
                ["style", "font-size", '30px'],
                ["style", "font-weight", '400'],
                ["style", "height", '80px'],
                ["style", "font-family", 'actor, sans-serif'],
                ["style", "left", '0px'],
                ["style", "width", '979px']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '419px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Signature": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '-34px', '800px', '224px', 'auto', 'auto'],
                    font: ['carme, sans-serif', 30, 'rgba(0,0,0,1)', '500', 'none', 'normal'],
                    id: '_6_top',
                    text: 'Please enjoy your reading experience.<br><br>Regards<br><br>John H. Harris<br>Publisher',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '127px'],
                ["style", "width", '419px']
            ],
            "${__6_top}": [
                ["style", "top", '-34px'],
                ["style", "width", '800px'],
                ["style", "font-family", 'carme, sans-serif'],
                ["style", "height", '224px'],
                ["style", "font-weight", '500'],
                ["style", "left", '0px'],
                ["style", "font-size", '30px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Heading": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '44px', '763px', '113px', 'auto', 'auto'],
                    font: ['actor, sans-serif', 72, 'rgba(38,15,138,1.00)', '900', 'none', 'normal'],
                    id: 'Text2',
                    text: 'Military Pocket Books',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['0px', '-22px', '729px', '58px', 'auto', 'auto'],
                    font: ['carme, sans-serif', 52, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    id: 'Text3',
                    text: 'Welcome to',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text3}": [
                ["style", "top", '-22px'],
                ["style", "width", '729px'],
                ["style", "font-weight", '400'],
                ["style", "height", '58px'],
                ["style", "font-family", 'carme, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '52px']
            ],
            "${_Text2}": [
                ["style", "top", '44px'],
                ["style", "font-size", '72px'],
                ["color", "color", 'rgba(38,15,138,1.00)'],
                ["style", "font-family", 'actor, sans-serif'],
                ["style", "height", '113px'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "width", '763px']
            ],
            "${symbolSelector}": [
                ["style", "height", '84px'],
                ["style", "width", '480px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Future_symbol": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Future2',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['0px', '0px', '346px', '31px', 'auto', 'auto'],
                    font: ['actor, sans-serif', 30, 'rgba(0,0,0,1)', '700', 'none', 'normal'],
                    id: 'Future',
                    text: 'The Future<br><br>',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            {
                id: 'Future2',
                symbolName: 'Future',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Future}": [
                ["style", "top", '0px'],
                ["style", "width", '346px'],
                ["style", "height", '31px'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "font-size", '30px']
            ],
            "${_Future2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '419px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Register": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '372px', '99px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    id: 'Text',
                    text: 'Register and keep up to date with our upgrade and new features.',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['36px', '63px', '300px', '85px', 'auto', 'auto'],
                    id: 'register',
                    userClass: '',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/RegisternowBlue.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RegisternowBlue}": [
                ["style", "height", '85px'],
                ["style", "top", '63px'],
                ["style", "left", '36px'],
                ["style", "width", '300px']
            ],
            "${_Text}": [
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["style", "height", '99px'],
                ["style", "left", '0px'],
                ["style", "width", '372px']
            ],
            "${symbolSelector}": [
                ["style", "height", '148px'],
                ["style", "width", '372px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-36007173");
