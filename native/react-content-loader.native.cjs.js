'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var Svg = require('react-native-svg');
var Svg__default = _interopDefault(Svg);
var reactNative = require('react-native');

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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

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

var offsetValueBound = function (value) {
    if (value > 1) {
        return 1;
    }
    if (value < 0) {
        return 0;
    }
    return value;
};

var uid = (function () {
    return Math.random()
        .toString(36)
        .substring(2);
});

var NativeSvg = /** @class */ (function (_super) {
    __extends(NativeSvg, _super);
    function NativeSvg() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { offset: -1 };
        _this.animatedValue = new reactNative.Animated.Value(0);
        _this.idClip = _this.props.id ? _this.props.id + "-idClip" : uid();
        _this.idGradient = _this.props.id ? _this.props.id + "-idGradient" : uid();
        _this.setAnimation = function () {
            // Turn in seconds to keep compatible with web one
            var durInSeconds = _this.props.speed * 1000;
            reactNative.Animated.timing(_this.animatedValue, {
                toValue: 2,
                delay: durInSeconds,
                duration: durInSeconds,
                useNativeDriver: true,
            }).start(function () {
                _this.animatedValue.setValue(-1);
                _this.setAnimation();
            });
        };
        _this.componentDidMount = function () {
            if (_this.props.animate) {
                _this.setAnimation();
                _this.animatedValue.addListener(function (_a) {
                    var value = _a.value;
                    _this.setState({
                        offset: value,
                    });
                });
            }
        };
        _this.componentWillUnmount = function () {
            if (_this.props.animate) {
                _this.animatedValue.removeAllListeners();
            }
        };
        return _this;
    }
    NativeSvg.prototype.render = function () {
        var _a = this.props, children = _a.children, height = _a.height, primaryColor = _a.primaryColor, secondaryColor = _a.secondaryColor, width = _a.width, rtl = _a.rtl, style = _a.style, viewBox = _a.viewBox, props = __rest(_a, ["children", "height", "primaryColor", "secondaryColor", "width", "rtl", "style", "viewBox"]);
        var offset1 = offsetValueBound(this.state.offset - 1);
        var offset2 = offsetValueBound(this.state.offset);
        var offset3 = offsetValueBound(this.state.offset + 1);
        var rtlStyle = rtl ? { transform: [{ rotateY: '180deg' }] } : {};
        var composedStyle = Object.assign(style, rtlStyle);
        // Remove unnecessary keys
        delete props.id;
        delete props.animate;
        delete props.speed;
        return (React__default.createElement(Svg__default, __assign({ viewBox: viewBox, width: width, height: height, preserveAspectRatio: "none", style: composedStyle }, props),
            React__default.createElement(Svg.Rect, { x: "0", y: "0", width: "100%", height: "100%", fill: "url(#" + this.idClip + ")", clipPath: "url(#" + this.idGradient + ")" }),
            React__default.createElement(Svg.Defs, null,
                React__default.createElement(Svg.ClipPath, { id: this.idGradient }, children),
                React__default.createElement(Svg.LinearGradient, { id: this.idClip, x1: '-100%', y1: 0, x2: '100%', y2: 0 },
                    React__default.createElement(Svg.Stop, { offset: offset1, stopColor: primaryColor }),
                    React__default.createElement(Svg.Stop, { offset: offset2, stopColor: secondaryColor }),
                    React__default.createElement(Svg.Stop, { offset: offset3, stopColor: primaryColor })))));
    };
    return NativeSvg;
}(React.Component));

var defaultProps = {
    animate: true,
    height: 130,
    preserveAspectRatio: 'none',
    primaryColor: '#f0f0f0',
    rtl: false,
    secondaryColor: '#e0e0e0',
    speed: 1,
    style: {},
    width: 400,
};
var InitialComponent = function (props) { return (React.createElement(Svg.Rect, { x: "0", y: "0", rx: "5", ry: "5", width: props.width, height: props.height })); };
var ContentLoader = function (props) {
    var mergedProps = __assign(__assign({}, defaultProps), props);
    return (React.createElement(NativeSvg, __assign({}, mergedProps), props.children || React.createElement(InitialComponent, __assign({}, mergedProps))));
};

var ReactContentLoaderFacebook = function (props) { return (React.createElement(ContentLoader, __assign({}, props),
    React.createElement(Svg.Rect, { x: "70", y: "15", rx: "4", ry: "4", width: "117", height: "6" }),
    React.createElement(Svg.Rect, { x: "70", y: "35", rx: "3", ry: "3", width: "85", height: "6" }),
    React.createElement(Svg.Rect, { x: "0", y: "80", rx: "3", ry: "3", width: "350", height: "6" }),
    React.createElement(Svg.Rect, { x: "0", y: "100", rx: "3", ry: "3", width: "380", height: "6" }),
    React.createElement(Svg.Rect, { x: "0", y: "120", rx: "3", ry: "3", width: "201", height: "6" }),
    React.createElement(Svg.Circle, { cx: "30", cy: "30", r: "30" }))); };

var ReactContentLoaderInstagram = function (props) { return (React.createElement(ContentLoader, __assign({}, props, { height: 480 }),
    React.createElement(Svg.Circle, { cx: "30", cy: "30", r: "30" }),
    React.createElement(Svg.Rect, { x: "75", y: "13", rx: "4", ry: "4", width: "100", height: "13" }),
    React.createElement(Svg.Rect, { x: "75", y: "37", rx: "4", ry: "4", width: "50", height: "8" }),
    React.createElement(Svg.Rect, { x: "0", y: "70", rx: "5", ry: "5", width: "400", height: "400" }))); };

var ReactContentLoaderCode = function (props) { return (React.createElement(ContentLoader, __assign({}, props),
    React.createElement(Svg.Rect, { x: "0", y: "0", rx: "3", ry: "3", width: "70", height: "10" }),
    React.createElement(Svg.Rect, { x: "80", y: "0", rx: "3", ry: "3", width: "100", height: "10" }),
    React.createElement(Svg.Rect, { x: "190", y: "0", rx: "3", ry: "3", width: "10", height: "10" }),
    React.createElement(Svg.Rect, { x: "15", y: "20", rx: "3", ry: "3", width: "130", height: "10" }),
    React.createElement(Svg.Rect, { x: "155", y: "20", rx: "3", ry: "3", width: "130", height: "10" }),
    React.createElement(Svg.Rect, { x: "15", y: "40", rx: "3", ry: "3", width: "90", height: "10" }),
    React.createElement(Svg.Rect, { x: "115", y: "40", rx: "3", ry: "3", width: "60", height: "10" }),
    React.createElement(Svg.Rect, { x: "185", y: "40", rx: "3", ry: "3", width: "60", height: "10" }),
    React.createElement(Svg.Rect, { x: "0", y: "60", rx: "3", ry: "3", width: "30", height: "10" }))); };

var ReactContentLoaderListStyle = function (props) { return (React.createElement(ContentLoader, __assign({}, props),
    React.createElement(Svg.Rect, { x: "0", y: "0", rx: "3", ry: "3", width: "250", height: "10" }),
    React.createElement(Svg.Rect, { x: "20", y: "20", rx: "3", ry: "3", width: "220", height: "10" }),
    React.createElement(Svg.Rect, { x: "20", y: "40", rx: "3", ry: "3", width: "170", height: "10" }),
    React.createElement(Svg.Rect, { x: "0", y: "60", rx: "3", ry: "3", width: "250", height: "10" }),
    React.createElement(Svg.Rect, { x: "20", y: "80", rx: "3", ry: "3", width: "200", height: "10" }),
    React.createElement(Svg.Rect, { x: "20", y: "100", rx: "3", ry: "3", width: "80", height: "10" }))); };

var ReactContentLoaderBulletList = function (props) { return (React.createElement(ContentLoader, __assign({}, props),
    React.createElement(Svg.Circle, { cx: "10", cy: "20", r: "8" }),
    React.createElement(Svg.Rect, { x: "25", y: "15", rx: "5", ry: "5", width: "220", height: "10" }),
    React.createElement(Svg.Circle, { cx: "10", cy: "50", r: "8" }),
    React.createElement(Svg.Rect, { x: "25", y: "45", rx: "5", ry: "5", width: "220", height: "10" }),
    React.createElement(Svg.Circle, { cx: "10", cy: "80", r: "8" }),
    React.createElement(Svg.Rect, { x: "25", y: "75", rx: "5", ry: "5", width: "220", height: "10" }),
    React.createElement(Svg.Circle, { cx: "10", cy: "110", r: "8" }),
    React.createElement(Svg.Rect, { x: "25", y: "105", rx: "5", ry: "5", width: "220", height: "10" }))); };

Object.defineProperty(exports, 'Circle', {
    enumerable: true,
    get: function () {
        return Svg.Circle;
    }
});
Object.defineProperty(exports, 'Rect', {
    enumerable: true,
    get: function () {
        return Svg.Rect;
    }
});
exports.BulletList = ReactContentLoaderBulletList;
exports.Code = ReactContentLoaderCode;
exports.Facebook = ReactContentLoaderFacebook;
exports.Instagram = ReactContentLoaderInstagram;
exports.List = ReactContentLoaderListStyle;
exports.default = ContentLoader;
//# sourceMappingURL=react-content-loader.native.cjs.js.map