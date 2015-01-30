// Generated by CoffeeScript 1.8.0

/*
 * Overwrite backbone.js with CoffeeScript
 * @authors Aaron Yuan(xuanyuanziruo@gmail.com)
 * @date    2015-01-29 21:53:58
 * @version 0.0.1
 * Backbone.js code: https://github.com/Aaron-vk-Yuan/backbone/blob/master/backbone.js
 */
(function(root, factory) {
  var _;
  if (typeof define === 'function' && define.amd) {
    return define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
      return root.Backbone = factory(root, exports, _, $);
    });
  } else if (typeof exports !== 'undefined') {
    _ = require('underscore');
    return factory(root, exports, _);
  } else {
    return root.Backbone = factory(root, {}, root._, root.jQuery || root.$);
  }
})(this, function(root, Backbone, _, $) {

  /*缓存外部Backbone变量，防止改变原有值 */
  var Events, array, eventSplitter, eventsApi, previousBackbone, slice, triggerEvents;
  previousBackbone = root.Backbone;
  array = [];
  slice = array.slice;
  Backbone.VERSION = '0.0.1';
  Backbone.$ = $;

  /*还原Backbone变量 */
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  /*设置一个变量，似乎是设置请求类型相关的东东 */
  Backbone.emulateHTTP = false;
  Backbone.emulateJSON = false;

  /*Events事件对象 */
  Events = Backbone.Events = {
    on: function(name, callback, context) {},
    once: function(name, callback, context) {},
    off: function(name, callback, context) {},
    trigger: function(name) {},
    stopListening: function(obj, name, callback) {}
  };

  /*事件拆分器-正则 */
  eventSplitter = /\s+/;

  /*
  	???为啥返回bool值？
  
  	事件绑定关键函数,将事件跟对象自身的事件处理程序关联起来
  	1.对同一个元素同时绑定多个事件监听
  	2.实现类似jQuery 的事件json格式映射方式
  	 *obj - 
  	 *action - 
  	 *name - 
  	 *rest -
   */
  eventsApi = function(obj, action, name, rest) {
    var eventName, key, names, _i, _len;
    if (!name) {
      return true;
    }
    if (typeof name === 'object') {
      for (key in name) {
        obj[action].apply(obj, [key, name[key].contcat(rest)]);
      }
      false;
    }

    /*
    		处理空格分割的事件
    		change blur
     */
    if (eventSplitter.test(name)) {
      names = name.split(eventSplitter);
      for (_i = 0, _len = names.length; _i < _len; _i++) {
        eventName = names[_i];
        obj[action].apply(obj, eventName.concat(rest));
      }
      false;
    }
    return true;
  };

  /*
  	???不大明白作用？
  	触发事件
   */
  triggerEvents = function(events, args) {};
  return Backbone;
});
