(function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if(typeof define === 'function' && define.amd)
        define("MyPlugin", [], factory);
    else if(typeof exports === 'object')
        exports["MyPlugin"] = factory();
    else
        root["MyPlugin"] = factory();
})(this, function () {
    alert('我的第一个npm包')
})