'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var uid = (function () {
    return Math.random()
        .toString(36)
        .substring(2);
});

var Svg = (function (_a) {
    var rtl = _a.rtl, speed = _a.speed, interval = _a.interval, style = _a.style, width = _a.width, height = _a.height, baseUrl = _a.baseUrl, gradientRatio = _a.gradientRatio, animate = _a.animate, ariaLabel = _a.ariaLabel, children = _a.children, className = _a.className, uniquekey = _a.uniquekey, primaryColor = _a.primaryColor, primaryOpacity = _a.primaryOpacity, secondaryColor = _a.secondaryColor, secondaryOpacity = _a.secondaryOpacity, preserveAspectRatio = _a.preserveAspectRatio, props = __rest(_a, ["rtl", "speed", "interval", "style", "width", "height", "baseUrl", "gradientRatio", "animate", "ariaLabel", "children", "className", "uniquekey", "primaryColor", "primaryOpacity", "secondaryColor", "secondaryOpacity", "preserveAspectRatio"]);
    var idClip = uniquekey ? uniquekey + "-idClip" : uid();
    var idGradient = uniquekey ? uniquekey + "-idGradient" : uid();
    var rtlStyle = rtl ? { transform: 'scaleX(-1)' } : {};
    var keyTimes = "0; " + interval + "; 1";
    var dur = speed + "s";
    return (React.createElement("svg", __assign({ role: "img", style: __assign(__assign({}, style), rtlStyle), className: className, "aria-label": ariaLabel ? ariaLabel : null, width: width, height: height, preserveAspectRatio: preserveAspectRatio }, props),
        ariaLabel ? React.createElement("title", null, ariaLabel) : null,
        React.createElement("rect", { x: "0", y: "0", width: '100%', height: '100%', clipPath: "url(" + baseUrl + "#" + idClip + ")", style: { fill: "url(" + baseUrl + "#" + idGradient + ")" } }),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: idClip }, children),
            React.createElement("linearGradient", { id: idGradient },
                React.createElement("stop", { offset: "0%", stopColor: primaryColor, stopOpacity: primaryOpacity }, animate && (React.createElement("animate", { attributeName: "offset", values: -gradientRatio + "; " + -gradientRatio + "; 1", keyTimes: keyTimes, dur: dur, repeatCount: "indefinite" }))),
                React.createElement("stop", { offset: "50%", stopColor: secondaryColor, stopOpacity: secondaryOpacity }, animate && (React.createElement("animate", { attributeName: "offset", values: -gradientRatio / 2 + "; " + -gradientRatio / 2 + "; " + (1 +
                        gradientRatio / 2), keyTimes: keyTimes, dur: dur, repeatCount: "indefinite" }))),
                React.createElement("stop", { offset: "100%", stopColor: primaryColor, stopOpacity: primaryOpacity }, animate && (React.createElement("animate", { attributeName: "offset", values: "0; 0; " + (1 + gradientRatio), keyTimes: keyTimes, dur: dur, repeatCount: "indefinite" })))))));
});

var defaultProps = {
    animate: true,
    ariaLabel: 'Loading interface...',
    baseUrl: '',
    gradientRatio: 2,
    height: 130,
    interval: 0.25,
    preserveAspectRatio: 'none',
    primaryColor: '#f0f0f0',
    primaryOpacity: 1,
    rtl: false,
    secondaryColor: '#e0e0e0',
    secondaryOpacity: 1,
    speed: 2,
    style: {},
    width: 400,
};
var InitialComponent = function (props) { return (React.createElement("rect", { x: "0", y: "0", rx: "5", ry: "5", width: props.width, height: props.height })); };
var ContentLoader = function (props) {
    var mergedProps = __assign(__assign({}, defaultProps), props);
    return (React.createElement(Svg, __assign({}, mergedProps), props.children || React.createElement(InitialComponent, __assign({}, mergedProps))));
};

var ReactContentLoaderFacebook = function (props) { return (React.createElement(ContentLoader, __assign({ viewBox: '0 0 380 140' }, props),
    React.createElement("rect", { x: "70", y: "15", rx: "4", ry: "4", width: "117", height: "6.4" }),
    React.createElement("rect", { x: "70", y: "35", rx: "3", ry: "3", width: "85", height: "6.4" }),
    React.createElement("rect", { x: "0", y: "80", rx: "3", ry: "3", width: "350", height: "6.4" }),
    React.createElement("rect", { x: "0", y: "100", rx: "3", ry: "3", width: "380", height: "6.4" }),
    React.createElement("rect", { x: "0", y: "120", rx: "3", ry: "3", width: "201", height: "6.4" }),
    React.createElement("circle", { cx: "30", cy: "30", r: "30" }))); };

var ReactContentLoaderInstagram = function (props) { return (React.createElement(ContentLoader, __assign({ viewBox: '0 0 400 480' }, props),
    React.createElement("circle", { cx: "30", cy: "30", r: "30" }),
    React.createElement("rect", { x: "75", y: "13", rx: "4", ry: "4", width: "100", height: "13" }),
    React.createElement("rect", { x: "75", y: "37", rx: "4", ry: "4", width: "50", height: "8" }),
    React.createElement("rect", { x: "0", y: "70", rx: "5", ry: "5", width: "400", height: "400" }))); };

var ReactContentLoaderCode = function (props) { return (React.createElement(ContentLoader, __assign({ viewBox: '0 0 285 80' }, props),
    React.createElement("rect", { x: "0", y: "0", rx: "3", ry: "3", width: "70", height: "10" }),
    React.createElement("rect", { x: "80", y: "0", rx: "3", ry: "3", width: "100", height: "10" }),
    React.createElement("rect", { x: "190", y: "0", rx: "3", ry: "3", width: "10", height: "10" }),
    React.createElement("rect", { x: "15", y: "20", rx: "3", ry: "3", width: "130", height: "10" }),
    React.createElement("rect", { x: "155", y: "20", rx: "3", ry: "3", width: "130", height: "10" }),
    React.createElement("rect", { x: "15", y: "40", rx: "3", ry: "3", width: "90", height: "10" }),
    React.createElement("rect", { x: "115", y: "40", rx: "3", ry: "3", width: "60", height: "10" }),
    React.createElement("rect", { x: "185", y: "40", rx: "3", ry: "3", width: "60", height: "10" }),
    React.createElement("rect", { x: "0", y: "60", rx: "3", ry: "3", width: "30", height: "10" }))); };

var ReactContentLoaderListStyle = function (props) { return (React.createElement(ContentLoader, __assign({ viewBox: '0 0 250 110' }, props),
    React.createElement("rect", { x: "0", y: "0", rx: "3", ry: "3", width: "250", height: "10" }),
    React.createElement("rect", { x: "20", y: "20", rx: "3", ry: "3", width: "220", height: "10" }),
    React.createElement("rect", { x: "20", y: "40", rx: "3", ry: "3", width: "170", height: "10" }),
    React.createElement("rect", { x: "0", y: "60", rx: "3", ry: "3", width: "250", height: "10" }),
    React.createElement("rect", { x: "20", y: "80", rx: "3", ry: "3", width: "200", height: "10" }),
    React.createElement("rect", { x: "20", y: "100", rx: "3", ry: "3", width: "80", height: "10" }))); };

var ReactContentLoaderBulletList = function (props) { return (React.createElement(ContentLoader, __assign({ viewBox: '0 0 245 120' }, props),
    React.createElement("circle", { cx: "10", cy: "20", r: "8" }),
    React.createElement("rect", { x: "25", y: "15", rx: "5", ry: "5", width: "220", height: "10" }),
    React.createElement("circle", { cx: "10", cy: "50", r: "8" }),
    React.createElement("rect", { x: "25", y: "45", rx: "5", ry: "5", width: "220", height: "10" }),
    React.createElement("circle", { cx: "10", cy: "80", r: "8" }),
    React.createElement("rect", { x: "25", y: "75", rx: "5", ry: "5", width: "220", height: "10" }),
    React.createElement("circle", { cx: "10", cy: "110", r: "8" }),
    React.createElement("rect", { x: "25", y: "105", rx: "5", ry: "5", width: "220", height: "10" }))); };

exports.BulletList = ReactContentLoaderBulletList;
exports.Code = ReactContentLoaderCode;
exports.Facebook = ReactContentLoaderFacebook;
exports.Instagram = ReactContentLoaderInstagram;
exports.List = ReactContentLoaderListStyle;
exports.default = ContentLoader;
//# sourceMappingURL=react-content-loader.cjs.js.map
