!function(n,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports?module.exports=e():n.ping=e()}(this,function(){function n(n){return new Promise(function(e,o){var t=new Image;t.onload=function(){e(t)},t.onerror=function(){o(n)},t.src=n+"?random-no-cache="+Math.floor(65536*(1+Math.random())).toString(16)})}function e(e,o){return new Promise(function(t,r){var i=(new Date).getTime(),u=function(){var n=(new Date).getTime()-i;n*=o||1,t(n)};n(e).then(u)["catch"](u),setTimeout(function(){r(Error("Timeout"))},3e3)})}return e});
