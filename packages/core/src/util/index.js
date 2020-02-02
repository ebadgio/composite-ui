import { get } from 'styled-system';
export var variantExtension = function(_a) {
  var variantKey = _a.variantKey,
    extensionKey = _a.extensionKey,
    prop = _a.prop;
  var fn = function(props) {
    if (props[prop]) {
      var path = [variantKey, props.variant, extensionKey].join('.');
      return get(props.theme, path);
    }
  };
  return fn;
};
export var px = function(num) {
  return num + 'px';
};
