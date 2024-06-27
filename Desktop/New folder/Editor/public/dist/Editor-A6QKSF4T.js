new EventSource('http://127.0.0.1:55316/esbuild').addEventListener('change', () => location.reload())
"use client";
import {
  __commonJS,
  __toESM,
  require_react,
  require_react_dom
} from "./chunk-KH4PS4DS.js";

// node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js"(exports, module) {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module.exports = listCacheClear;
  }
});

// node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/lodash/eq.js"(exports, module) {
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module.exports = eq;
  }
});

// node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js"(exports, module) {
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length3 = array.length;
      while (length3--) {
        if (eq(array[length3][0], key)) {
          return length3;
        }
      }
      return -1;
    }
    module.exports = assocIndexOf;
  }
});

// node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    module.exports = listCacheDelete;
  }
});

// node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    module.exports = listCacheGet;
  }
});

// node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module.exports = listCacheHas;
  }
});

// node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    module.exports = listCacheSet;
  }
});

// node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js"(exports, module) {
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index = -1, length3 = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length3) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
  }
});

// node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "node_modules/lodash/_stackClear.js"(exports, module) {
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module.exports = stackClear;
  }
});

// node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "node_modules/lodash/_stackDelete.js"(exports, module) {
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module.exports = stackDelete;
  }
});

// node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "node_modules/lodash/_stackGet.js"(exports, module) {
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module.exports = stackGet;
  }
});

// node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "node_modules/lodash/_stackHas.js"(exports, module) {
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module.exports = stackHas;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module) {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject;
  }
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module.exports = isFunction;
  }
});

// node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js"(exports, module) {
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module.exports = coreJsData;
  }
});

// node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js"(exports, module) {
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module.exports = isMasked;
  }
});

// node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js"(exports, module) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    module.exports = toSource;
  }
});

// node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js"(exports, module) {
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module.exports = baseIsNative;
  }
});

// node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js"(exports, module) {
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    module.exports = getValue;
  }
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports, module) {
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module.exports = getNative;
  }
});

// node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/lodash/_Map.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Map2 = getNative(root, "Map");
    module.exports = Map2;
  }
});

// node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js"(exports, module) {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module.exports = nativeCreate;
  }
});

// node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module.exports = hashClear;
  }
});

// node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js"(exports, module) {
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = hashDelete;
  }
});

// node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    module.exports = hashGet;
  }
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module.exports = hashHas;
  }
});

// node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module.exports = hashSet;
  }
});

// node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js"(exports, module) {
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index = -1, length3 = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length3) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
  }
});

// node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js"(exports, module) {
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    module.exports = mapCacheClear;
  }
});

// node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js"(exports, module) {
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module.exports = isKeyable;
  }
});

// node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js"(exports, module) {
    var isKeyable = require_isKeyable();
    function getMapData(map3, key) {
      var data = map3.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module.exports = getMapData;
  }
});

// node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = mapCacheDelete;
  }
});

// node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module.exports = mapCacheGet;
  }
});

// node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module.exports = mapCacheHas;
  }
});

// node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size2 = data.size;
      data.set(key, value);
      this.size += data.size == size2 ? 0 : 1;
      return this;
    }
    module.exports = mapCacheSet;
  }
});

// node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js"(exports, module) {
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index = -1, length3 = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length3) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
  }
});

// node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "node_modules/lodash/_stackSet.js"(exports, module) {
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    module.exports = stackSet;
  }
});

// node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "node_modules/lodash/_Stack.js"(exports, module) {
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
  }
});

// node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "node_modules/lodash/_setCacheAdd.js"(exports, module) {
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    module.exports = setCacheAdd;
  }
});

// node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "node_modules/lodash/_setCacheHas.js"(exports, module) {
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    module.exports = setCacheHas;
  }
});

// node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "node_modules/lodash/_SetCache.js"(exports, module) {
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values) {
      var index = -1, length3 = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length3) {
        this.add(values[index]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module.exports = SetCache;
  }
});

// node_modules/lodash/_arraySome.js
var require_arraySome = __commonJS({
  "node_modules/lodash/_arraySome.js"(exports, module) {
    function arraySome(array, predicate) {
      var index = -1, length3 = array == null ? 0 : array.length;
      while (++index < length3) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    module.exports = arraySome;
  }
});

// node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "node_modules/lodash/_cacheHas.js"(exports, module) {
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    module.exports = cacheHas;
  }
});

// node_modules/lodash/_equalArrays.js
var require_equalArrays = __commonJS({
  "node_modules/lodash/_equalArrays.js"(exports, module) {
    var SetCache = require_SetCache();
    var arraySome = require_arraySome();
    var cacheHas = require_cacheHas();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    module.exports = equalArrays;
  }
});

// node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "node_modules/lodash/_Uint8Array.js"(exports, module) {
    var root = require_root();
    var Uint8Array2 = root.Uint8Array;
    module.exports = Uint8Array2;
  }
});

// node_modules/lodash/_mapToArray.js
var require_mapToArray = __commonJS({
  "node_modules/lodash/_mapToArray.js"(exports, module) {
    function mapToArray(map3) {
      var index = -1, result = Array(map3.size);
      map3.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    module.exports = mapToArray;
  }
});

// node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "node_modules/lodash/_setToArray.js"(exports, module) {
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    module.exports = setToArray;
  }
});

// node_modules/lodash/_equalByTag.js
var require_equalByTag = __commonJS({
  "node_modules/lodash/_equalByTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var Uint8Array2 = require_Uint8Array();
    var eq = require_eq();
    var equalArrays = require_equalArrays();
    var mapToArray = require_mapToArray();
    var setToArray = require_setToArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    module.exports = equalByTag;
  }
});

// node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "node_modules/lodash/_arrayPush.js"(exports, module) {
    function arrayPush(array, values) {
      var index = -1, length3 = values.length, offset = array.length;
      while (++index < length3) {
        array[offset + index] = values[index];
      }
      return array;
    }
    module.exports = arrayPush;
  }
});

// node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports, module) {
    var isArray2 = Array.isArray;
    module.exports = isArray2;
  }
});

// node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isArray2 = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray2(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module.exports = baseGetAllKeys;
  }
});

// node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "node_modules/lodash/_arrayFilter.js"(exports, module) {
    function arrayFilter(array, predicate) {
      var index = -1, length3 = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length3) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    module.exports = arrayFilter;
  }
});

// node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "node_modules/lodash/stubArray.js"(exports, module) {
    function stubArray() {
      return [];
    }
    module.exports = stubArray;
  }
});

// node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "node_modules/lodash/_getSymbols.js"(exports, module) {
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module.exports = getSymbols;
  }
});

// node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "node_modules/lodash/_baseTimes.js"(exports, module) {
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    module.exports = baseTimes;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "node_modules/lodash/_baseIsArguments.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module.exports = baseIsArguments;
  }
});

// node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/lodash/isArguments.js"(exports, module) {
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module.exports = isArguments;
  }
});

// node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "node_modules/lodash/stubFalse.js"(exports, module) {
    function stubFalse() {
      return false;
    }
    module.exports = stubFalse;
  }
});

// node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "node_modules/lodash/isBuffer.js"(exports, module) {
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  }
});

// node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "node_modules/lodash/_isIndex.js"(exports, module) {
    var MAX_SAFE_INTEGER2 = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length3) {
      var type = typeof value;
      length3 = length3 == null ? MAX_SAFE_INTEGER2 : length3;
      return !!length3 && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length3);
    }
    module.exports = isIndex;
  }
});

// node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "node_modules/lodash/isLength.js"(exports, module) {
    var MAX_SAFE_INTEGER2 = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
    }
    module.exports = isLength;
  }
});

// node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module.exports = baseIsTypedArray;
  }
});

// node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "node_modules/lodash/_baseUnary.js"(exports, module) {
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module.exports = baseUnary;
  }
});

// node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "node_modules/lodash/_nodeUtil.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module.exports = nodeUtil;
  }
});

// node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "node_modules/lodash/isTypedArray.js"(exports, module) {
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
  }
});

// node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray2 = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray2(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length3 = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length3)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = arrayLikeKeys;
  }
});

// node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "node_modules/lodash/_isPrototype.js"(exports, module) {
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module.exports = isPrototype;
  }
});

// node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "node_modules/lodash/_overArg.js"(exports, module) {
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module.exports = overArg;
  }
});

// node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "node_modules/lodash/_nativeKeys.js"(exports, module) {
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
  }
});

// node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "node_modules/lodash/_baseKeys.js"(exports, module) {
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeys;
  }
});

// node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/lodash/isArrayLike.js"(exports, module) {
    var isFunction = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    module.exports = isArrayLike;
  }
});

// node_modules/lodash/keys.js
var require_keys = __commonJS({
  "node_modules/lodash/keys.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys2(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module.exports = keys2;
  }
});

// node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "node_modules/lodash/_getAllKeys.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys2 = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys2, getSymbols);
    }
    module.exports = getAllKeys;
  }
});

// node_modules/lodash/_equalObjects.js
var require_equalObjects = __commonJS({
  "node_modules/lodash/_equalObjects.js"(exports, module) {
    var getAllKeys = require_getAllKeys();
    var COMPARE_PARTIAL_FLAG = 1;
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    module.exports = equalObjects;
  }
});

// node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "node_modules/lodash/_DataView.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var DataView2 = getNative(root, "DataView");
    module.exports = DataView2;
  }
});

// node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "node_modules/lodash/_Promise.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module.exports = Promise2;
  }
});

// node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/lodash/_Set.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Set2 = getNative(root, "Set");
    module.exports = Set2;
  }
});

// node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "node_modules/lodash/_WeakMap.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap2 = getNative(root, "WeakMap");
    module.exports = WeakMap2;
  }
});

// node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "node_modules/lodash/_getTag.js"(exports, module) {
    var DataView2 = require_DataView();
    var Map2 = require_Map();
    var Promise2 = require_Promise();
    var Set2 = require_Set();
    var WeakMap2 = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView2);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap2);
    var getTag = baseGetTag;
    if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    module.exports = getTag;
  }
});

// node_modules/lodash/_baseIsEqualDeep.js
var require_baseIsEqualDeep = __commonJS({
  "node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
    var Stack = require_Stack();
    var equalArrays = require_equalArrays();
    var equalByTag = require_equalByTag();
    var equalObjects = require_equalObjects();
    var getTag = require_getTag();
    var isArray2 = require_isArray();
    var isBuffer = require_isBuffer();
    var isTypedArray = require_isTypedArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var objectTag = "[object Object]";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray2(object), othIsArr = isArray2(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    module.exports = baseIsEqualDeep;
  }
});

// node_modules/lodash/_baseIsEqual.js
var require_baseIsEqual = __commonJS({
  "node_modules/lodash/_baseIsEqual.js"(exports, module) {
    var baseIsEqualDeep = require_baseIsEqualDeep();
    var isObjectLike = require_isObjectLike();
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    module.exports = baseIsEqual;
  }
});

// node_modules/lodash/isEqual.js
var require_isEqual = __commonJS({
  "node_modules/lodash/isEqual.js"(exports, module) {
    var baseIsEqual = require_baseIsEqual();
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }
    module.exports = isEqual;
  }
});

// node_modules/react-quill/node_modules/quill/dist/quill.js
var require_quill = __commonJS({
  "node_modules/react-quill/node_modules/quill/dist/quill.js"(exports, module) {
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module === "object")
        module.exports = factory();
      else if (typeof define === "function" && define.amd)
        define([], factory);
      else if (typeof exports === "object")
        exports["Quill"] = factory();
      else
        root["Quill"] = factory();
    })(typeof self !== "undefined" ? self : exports, function() {
      return (
        /******/
        function(modules) {
          var installedModules = {};
          function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
              return installedModules[moduleId].exports;
            }
            var module2 = installedModules[moduleId] = {
              /******/
              i: moduleId,
              /******/
              l: false,
              /******/
              exports: {}
              /******/
            };
            modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
            module2.l = true;
            return module2.exports;
          }
          __webpack_require__.m = modules;
          __webpack_require__.c = installedModules;
          __webpack_require__.d = function(exports2, name, getter) {
            if (!__webpack_require__.o(exports2, name)) {
              Object.defineProperty(exports2, name, {
                /******/
                configurable: false,
                /******/
                enumerable: true,
                /******/
                get: getter
                /******/
              });
            }
          };
          __webpack_require__.n = function(module2) {
            var getter = module2 && module2.__esModule ? (
              /******/
              function getDefault() {
                return module2["default"];
              }
            ) : (
              /******/
              function getModuleExports() {
                return module2;
              }
            );
            __webpack_require__.d(getter, "a", getter);
            return getter;
          };
          __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
          };
          __webpack_require__.p = "";
          return __webpack_require__(__webpack_require__.s = 109);
        }([
          /* 0 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", { value: true });
            var container_1 = __webpack_require__(17);
            var format_1 = __webpack_require__(18);
            var leaf_1 = __webpack_require__(19);
            var scroll_1 = __webpack_require__(45);
            var inline_1 = __webpack_require__(46);
            var block_1 = __webpack_require__(47);
            var embed_1 = __webpack_require__(48);
            var text_1 = __webpack_require__(49);
            var attributor_1 = __webpack_require__(12);
            var class_1 = __webpack_require__(32);
            var style_1 = __webpack_require__(33);
            var store_1 = __webpack_require__(31);
            var Registry = __webpack_require__(1);
            var Parchment = {
              Scope: Registry.Scope,
              create: Registry.create,
              find: Registry.find,
              query: Registry.query,
              register: Registry.register,
              Container: container_1.default,
              Format: format_1.default,
              Leaf: leaf_1.default,
              Embed: embed_1.default,
              Scroll: scroll_1.default,
              Block: block_1.default,
              Inline: inline_1.default,
              Text: text_1.default,
              Attributor: {
                Attribute: attributor_1.default,
                Class: class_1.default,
                Style: style_1.default,
                Store: store_1.default
              }
            };
            exports2.default = Parchment;
          },
          /* 1 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function() {
              var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
                d.__proto__ = b;
              } || function(d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
              };
              return function(d, b) {
                extendStatics(d, b);
                function __() {
                  this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
            }();
            Object.defineProperty(exports2, "__esModule", { value: true });
            var ParchmentError = (
              /** @class */
              function(_super) {
                __extends(ParchmentError2, _super);
                function ParchmentError2(message) {
                  var _this = this;
                  message = "[Parchment] " + message;
                  _this = _super.call(this, message) || this;
                  _this.message = message;
                  _this.name = _this.constructor.name;
                  return _this;
                }
                return ParchmentError2;
              }(Error)
            );
            exports2.ParchmentError = ParchmentError;
            var attributes = {};
            var classes = {};
            var tags = {};
            var types = {};
            exports2.DATA_KEY = "__blot";
            var Scope;
            (function(Scope2) {
              Scope2[Scope2["TYPE"] = 3] = "TYPE";
              Scope2[Scope2["LEVEL"] = 12] = "LEVEL";
              Scope2[Scope2["ATTRIBUTE"] = 13] = "ATTRIBUTE";
              Scope2[Scope2["BLOT"] = 14] = "BLOT";
              Scope2[Scope2["INLINE"] = 7] = "INLINE";
              Scope2[Scope2["BLOCK"] = 11] = "BLOCK";
              Scope2[Scope2["BLOCK_BLOT"] = 10] = "BLOCK_BLOT";
              Scope2[Scope2["INLINE_BLOT"] = 6] = "INLINE_BLOT";
              Scope2[Scope2["BLOCK_ATTRIBUTE"] = 9] = "BLOCK_ATTRIBUTE";
              Scope2[Scope2["INLINE_ATTRIBUTE"] = 5] = "INLINE_ATTRIBUTE";
              Scope2[Scope2["ANY"] = 15] = "ANY";
            })(Scope = exports2.Scope || (exports2.Scope = {}));
            function create7(input, value) {
              var match = query(input);
              if (match == null) {
                throw new ParchmentError("Unable to create " + input + " blot");
              }
              var BlotClass = match;
              var node = (
                // @ts-ignore
                input instanceof Node || input["nodeType"] === Node.TEXT_NODE ? input : BlotClass.create(value)
              );
              return new BlotClass(node, value);
            }
            exports2.create = create7;
            function find2(node, bubble) {
              if (bubble === void 0) {
                bubble = false;
              }
              if (node == null)
                return null;
              if (node[exports2.DATA_KEY] != null)
                return node[exports2.DATA_KEY].blot;
              if (bubble)
                return find2(node.parentNode, bubble);
              return null;
            }
            exports2.find = find2;
            function query(query2, scope) {
              if (scope === void 0) {
                scope = Scope.ANY;
              }
              var match;
              if (typeof query2 === "string") {
                match = types[query2] || attributes[query2];
              } else if (query2 instanceof Text || query2["nodeType"] === Node.TEXT_NODE) {
                match = types["text"];
              } else if (typeof query2 === "number") {
                if (query2 & Scope.LEVEL & Scope.BLOCK) {
                  match = types["block"];
                } else if (query2 & Scope.LEVEL & Scope.INLINE) {
                  match = types["inline"];
                }
              } else if (query2 instanceof HTMLElement) {
                var names = (query2.getAttribute("class") || "").split(/\s+/);
                for (var i in names) {
                  match = classes[names[i]];
                  if (match)
                    break;
                }
                match = match || tags[query2.tagName];
              }
              if (match == null)
                return null;
              if (scope & Scope.LEVEL & match.scope && scope & Scope.TYPE & match.scope)
                return match;
              return null;
            }
            exports2.query = query;
            function register() {
              var Definitions = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                Definitions[_i] = arguments[_i];
              }
              if (Definitions.length > 1) {
                return Definitions.map(function(d) {
                  return register(d);
                });
              }
              var Definition = Definitions[0];
              if (typeof Definition.blotName !== "string" && typeof Definition.attrName !== "string") {
                throw new ParchmentError("Invalid definition");
              } else if (Definition.blotName === "abstract") {
                throw new ParchmentError("Cannot register abstract class");
              }
              types[Definition.blotName || Definition.attrName] = Definition;
              if (typeof Definition.keyName === "string") {
                attributes[Definition.keyName] = Definition;
              } else {
                if (Definition.className != null) {
                  classes[Definition.className] = Definition;
                }
                if (Definition.tagName != null) {
                  if (Array.isArray(Definition.tagName)) {
                    Definition.tagName = Definition.tagName.map(function(tagName) {
                      return tagName.toUpperCase();
                    });
                  } else {
                    Definition.tagName = Definition.tagName.toUpperCase();
                  }
                  var tagNames = Array.isArray(Definition.tagName) ? Definition.tagName : [Definition.tagName];
                  tagNames.forEach(function(tag) {
                    if (tags[tag] == null || Definition.className == null) {
                      tags[tag] = Definition;
                    }
                  });
                }
              }
              return Definition;
            }
            exports2.register = register;
          },
          /* 2 */
          /***/
          function(module2, exports2, __webpack_require__) {
            var diff = __webpack_require__(51);
            var equal = __webpack_require__(11);
            var extend = __webpack_require__(3);
            var op = __webpack_require__(20);
            var NULL_CHARACTER = String.fromCharCode(0);
            var Delta = function(ops) {
              if (Array.isArray(ops)) {
                this.ops = ops;
              } else if (ops != null && Array.isArray(ops.ops)) {
                this.ops = ops.ops;
              } else {
                this.ops = [];
              }
            };
            Delta.prototype.insert = function(text2, attributes) {
              var newOp = {};
              if (text2.length === 0) return this;
              newOp.insert = text2;
              if (attributes != null && typeof attributes === "object" && Object.keys(attributes).length > 0) {
                newOp.attributes = attributes;
              }
              return this.push(newOp);
            };
            Delta.prototype["delete"] = function(length3) {
              if (length3 <= 0) return this;
              return this.push({ "delete": length3 });
            };
            Delta.prototype.retain = function(length3, attributes) {
              if (length3 <= 0) return this;
              var newOp = { retain: length3 };
              if (attributes != null && typeof attributes === "object" && Object.keys(attributes).length > 0) {
                newOp.attributes = attributes;
              }
              return this.push(newOp);
            };
            Delta.prototype.push = function(newOp) {
              var index = this.ops.length;
              var lastOp = this.ops[index - 1];
              newOp = extend(true, {}, newOp);
              if (typeof lastOp === "object") {
                if (typeof newOp["delete"] === "number" && typeof lastOp["delete"] === "number") {
                  this.ops[index - 1] = { "delete": lastOp["delete"] + newOp["delete"] };
                  return this;
                }
                if (typeof lastOp["delete"] === "number" && newOp.insert != null) {
                  index -= 1;
                  lastOp = this.ops[index - 1];
                  if (typeof lastOp !== "object") {
                    this.ops.unshift(newOp);
                    return this;
                  }
                }
                if (equal(newOp.attributes, lastOp.attributes)) {
                  if (typeof newOp.insert === "string" && typeof lastOp.insert === "string") {
                    this.ops[index - 1] = { insert: lastOp.insert + newOp.insert };
                    if (typeof newOp.attributes === "object") this.ops[index - 1].attributes = newOp.attributes;
                    return this;
                  } else if (typeof newOp.retain === "number" && typeof lastOp.retain === "number") {
                    this.ops[index - 1] = { retain: lastOp.retain + newOp.retain };
                    if (typeof newOp.attributes === "object") this.ops[index - 1].attributes = newOp.attributes;
                    return this;
                  }
                }
              }
              if (index === this.ops.length) {
                this.ops.push(newOp);
              } else {
                this.ops.splice(index, 0, newOp);
              }
              return this;
            };
            Delta.prototype.chop = function() {
              var lastOp = this.ops[this.ops.length - 1];
              if (lastOp && lastOp.retain && !lastOp.attributes) {
                this.ops.pop();
              }
              return this;
            };
            Delta.prototype.filter = function(predicate) {
              return this.ops.filter(predicate);
            };
            Delta.prototype.forEach = function(predicate) {
              this.ops.forEach(predicate);
            };
            Delta.prototype.map = function(predicate) {
              return this.ops.map(predicate);
            };
            Delta.prototype.partition = function(predicate) {
              var passed = [], failed = [];
              this.forEach(function(op2) {
                var target = predicate(op2) ? passed : failed;
                target.push(op2);
              });
              return [passed, failed];
            };
            Delta.prototype.reduce = function(predicate, initial) {
              return this.ops.reduce(predicate, initial);
            };
            Delta.prototype.changeLength = function() {
              return this.reduce(function(length3, elem) {
                if (elem.insert) {
                  return length3 + op.length(elem);
                } else if (elem.delete) {
                  return length3 - elem.delete;
                }
                return length3;
              }, 0);
            };
            Delta.prototype.length = function() {
              return this.reduce(function(length3, elem) {
                return length3 + op.length(elem);
              }, 0);
            };
            Delta.prototype.slice = function(start, end) {
              start = start || 0;
              if (typeof end !== "number") end = Infinity;
              var ops = [];
              var iter = op.iterator(this.ops);
              var index = 0;
              while (index < end && iter.hasNext()) {
                var nextOp;
                if (index < start) {
                  nextOp = iter.next(start - index);
                } else {
                  nextOp = iter.next(end - index);
                  ops.push(nextOp);
                }
                index += op.length(nextOp);
              }
              return new Delta(ops);
            };
            Delta.prototype.compose = function(other) {
              var thisIter = op.iterator(this.ops);
              var otherIter = op.iterator(other.ops);
              var ops = [];
              var firstOther = otherIter.peek();
              if (firstOther != null && typeof firstOther.retain === "number" && firstOther.attributes == null) {
                var firstLeft = firstOther.retain;
                while (thisIter.peekType() === "insert" && thisIter.peekLength() <= firstLeft) {
                  firstLeft -= thisIter.peekLength();
                  ops.push(thisIter.next());
                }
                if (firstOther.retain - firstLeft > 0) {
                  otherIter.next(firstOther.retain - firstLeft);
                }
              }
              var delta = new Delta(ops);
              while (thisIter.hasNext() || otherIter.hasNext()) {
                if (otherIter.peekType() === "insert") {
                  delta.push(otherIter.next());
                } else if (thisIter.peekType() === "delete") {
                  delta.push(thisIter.next());
                } else {
                  var length3 = Math.min(thisIter.peekLength(), otherIter.peekLength());
                  var thisOp = thisIter.next(length3);
                  var otherOp = otherIter.next(length3);
                  if (typeof otherOp.retain === "number") {
                    var newOp = {};
                    if (typeof thisOp.retain === "number") {
                      newOp.retain = length3;
                    } else {
                      newOp.insert = thisOp.insert;
                    }
                    var attributes = op.attributes.compose(thisOp.attributes, otherOp.attributes, typeof thisOp.retain === "number");
                    if (attributes) newOp.attributes = attributes;
                    delta.push(newOp);
                    if (!otherIter.hasNext() && equal(delta.ops[delta.ops.length - 1], newOp)) {
                      var rest = new Delta(thisIter.rest());
                      return delta.concat(rest).chop();
                    }
                  } else if (typeof otherOp["delete"] === "number" && typeof thisOp.retain === "number") {
                    delta.push(otherOp);
                  }
                }
              }
              return delta.chop();
            };
            Delta.prototype.concat = function(other) {
              var delta = new Delta(this.ops.slice());
              if (other.ops.length > 0) {
                delta.push(other.ops[0]);
                delta.ops = delta.ops.concat(other.ops.slice(1));
              }
              return delta;
            };
            Delta.prototype.diff = function(other, index) {
              if (this.ops === other.ops) {
                return new Delta();
              }
              var strings = [this, other].map(function(delta2) {
                return delta2.map(function(op2) {
                  if (op2.insert != null) {
                    return typeof op2.insert === "string" ? op2.insert : NULL_CHARACTER;
                  }
                  var prep = delta2 === other ? "on" : "with";
                  throw new Error("diff() called " + prep + " non-document");
                }).join("");
              });
              var delta = new Delta();
              var diffResult = diff(strings[0], strings[1], index);
              var thisIter = op.iterator(this.ops);
              var otherIter = op.iterator(other.ops);
              diffResult.forEach(function(component) {
                var length3 = component[1].length;
                while (length3 > 0) {
                  var opLength = 0;
                  switch (component[0]) {
                    case diff.INSERT:
                      opLength = Math.min(otherIter.peekLength(), length3);
                      delta.push(otherIter.next(opLength));
                      break;
                    case diff.DELETE:
                      opLength = Math.min(length3, thisIter.peekLength());
                      thisIter.next(opLength);
                      delta["delete"](opLength);
                      break;
                    case diff.EQUAL:
                      opLength = Math.min(thisIter.peekLength(), otherIter.peekLength(), length3);
                      var thisOp = thisIter.next(opLength);
                      var otherOp = otherIter.next(opLength);
                      if (equal(thisOp.insert, otherOp.insert)) {
                        delta.retain(opLength, op.attributes.diff(thisOp.attributes, otherOp.attributes));
                      } else {
                        delta.push(otherOp)["delete"](opLength);
                      }
                      break;
                  }
                  length3 -= opLength;
                }
              });
              return delta.chop();
            };
            Delta.prototype.eachLine = function(predicate, newline) {
              newline = newline || "\n";
              var iter = op.iterator(this.ops);
              var line = new Delta();
              var i = 0;
              while (iter.hasNext()) {
                if (iter.peekType() !== "insert") return;
                var thisOp = iter.peek();
                var start = op.length(thisOp) - iter.peekLength();
                var index = typeof thisOp.insert === "string" ? thisOp.insert.indexOf(newline, start) - start : -1;
                if (index < 0) {
                  line.push(iter.next());
                } else if (index > 0) {
                  line.push(iter.next(index));
                } else {
                  if (predicate(line, iter.next(1).attributes || {}, i) === false) {
                    return;
                  }
                  i += 1;
                  line = new Delta();
                }
              }
              if (line.length() > 0) {
                predicate(line, {}, i);
              }
            };
            Delta.prototype.transform = function(other, priority) {
              priority = !!priority;
              if (typeof other === "number") {
                return this.transformPosition(other, priority);
              }
              var thisIter = op.iterator(this.ops);
              var otherIter = op.iterator(other.ops);
              var delta = new Delta();
              while (thisIter.hasNext() || otherIter.hasNext()) {
                if (thisIter.peekType() === "insert" && (priority || otherIter.peekType() !== "insert")) {
                  delta.retain(op.length(thisIter.next()));
                } else if (otherIter.peekType() === "insert") {
                  delta.push(otherIter.next());
                } else {
                  var length3 = Math.min(thisIter.peekLength(), otherIter.peekLength());
                  var thisOp = thisIter.next(length3);
                  var otherOp = otherIter.next(length3);
                  if (thisOp["delete"]) {
                    continue;
                  } else if (otherOp["delete"]) {
                    delta.push(otherOp);
                  } else {
                    delta.retain(length3, op.attributes.transform(thisOp.attributes, otherOp.attributes, priority));
                  }
                }
              }
              return delta.chop();
            };
            Delta.prototype.transformPosition = function(index, priority) {
              priority = !!priority;
              var thisIter = op.iterator(this.ops);
              var offset = 0;
              while (thisIter.hasNext() && offset <= index) {
                var length3 = thisIter.peekLength();
                var nextType = thisIter.peekType();
                thisIter.next();
                if (nextType === "delete") {
                  index -= Math.min(length3, index - offset);
                  continue;
                } else if (nextType === "insert" && (offset < index || !priority)) {
                  index += length3;
                }
                offset += length3;
              }
              return index;
            };
            module2.exports = Delta;
          },
          /* 3 */
          /***/
          function(module2, exports2) {
            "use strict";
            var hasOwn = Object.prototype.hasOwnProperty;
            var toStr = Object.prototype.toString;
            var defineProperty = Object.defineProperty;
            var gOPD = Object.getOwnPropertyDescriptor;
            var isArray2 = function isArray3(arr) {
              if (typeof Array.isArray === "function") {
                return Array.isArray(arr);
              }
              return toStr.call(arr) === "[object Array]";
            };
            var isPlainObject = function isPlainObject2(obj) {
              if (!obj || toStr.call(obj) !== "[object Object]") {
                return false;
              }
              var hasOwnConstructor = hasOwn.call(obj, "constructor");
              var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
              if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
                return false;
              }
              var key;
              for (key in obj) {
              }
              return typeof key === "undefined" || hasOwn.call(obj, key);
            };
            var setProperty = function setProperty2(target, options) {
              if (defineProperty && options.name === "__proto__") {
                defineProperty(target, options.name, {
                  enumerable: true,
                  configurable: true,
                  value: options.newValue,
                  writable: true
                });
              } else {
                target[options.name] = options.newValue;
              }
            };
            var getProperty = function getProperty2(obj, name) {
              if (name === "__proto__") {
                if (!hasOwn.call(obj, name)) {
                  return void 0;
                } else if (gOPD) {
                  return gOPD(obj, name).value;
                }
              }
              return obj[name];
            };
            module2.exports = function extend() {
              var options, name, src, copy2, copyIsArray, clone;
              var target = arguments[0];
              var i = 1;
              var length3 = arguments.length;
              var deep = false;
              if (typeof target === "boolean") {
                deep = target;
                target = arguments[1] || {};
                i = 2;
              }
              if (target == null || typeof target !== "object" && typeof target !== "function") {
                target = {};
              }
              for (; i < length3; ++i) {
                options = arguments[i];
                if (options != null) {
                  for (name in options) {
                    src = getProperty(target, name);
                    copy2 = getProperty(options, name);
                    if (target !== copy2) {
                      if (deep && copy2 && (isPlainObject(copy2) || (copyIsArray = isArray2(copy2)))) {
                        if (copyIsArray) {
                          copyIsArray = false;
                          clone = src && isArray2(src) ? src : [];
                        } else {
                          clone = src && isPlainObject(src) ? src : {};
                        }
                        setProperty(target, { name, newValue: extend(deep, clone, copy2) });
                      } else if (typeof copy2 !== "undefined") {
                        setProperty(target, { name, newValue: copy2 });
                      }
                    }
                  }
                }
              }
              return target;
            };
          },
          /* 4 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.default = exports2.BlockEmbed = exports2.bubbleFormats = void 0;
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _get = function get(object, property, receiver) {
              if (object === null) object = Function.prototype;
              var desc = Object.getOwnPropertyDescriptor(object, property);
              if (desc === void 0) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                  return void 0;
                } else {
                  return get(parent, property, receiver);
                }
              } else if ("value" in desc) {
                return desc.value;
              } else {
                var getter = desc.get;
                if (getter === void 0) {
                  return void 0;
                }
                return getter.call(receiver);
              }
            };
            var _extend = __webpack_require__(3);
            var _extend2 = _interopRequireDefault(_extend);
            var _quillDelta = __webpack_require__(2);
            var _quillDelta2 = _interopRequireDefault(_quillDelta);
            var _parchment = __webpack_require__(0);
            var _parchment2 = _interopRequireDefault(_parchment);
            var _break = __webpack_require__(16);
            var _break2 = _interopRequireDefault(_break);
            var _inline = __webpack_require__(6);
            var _inline2 = _interopRequireDefault(_inline);
            var _text = __webpack_require__(7);
            var _text2 = _interopRequireDefault(_text);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var NEWLINE_LENGTH = 1;
            var BlockEmbed = function(_Parchment$Embed) {
              _inherits(BlockEmbed2, _Parchment$Embed);
              function BlockEmbed2() {
                _classCallCheck(this, BlockEmbed2);
                return _possibleConstructorReturn(this, (BlockEmbed2.__proto__ || Object.getPrototypeOf(BlockEmbed2)).apply(this, arguments));
              }
              _createClass(BlockEmbed2, [{
                key: "attach",
                value: function attach() {
                  _get(BlockEmbed2.prototype.__proto__ || Object.getPrototypeOf(BlockEmbed2.prototype), "attach", this).call(this);
                  this.attributes = new _parchment2.default.Attributor.Store(this.domNode);
                }
              }, {
                key: "delta",
                value: function delta() {
                  return new _quillDelta2.default().insert(this.value(), (0, _extend2.default)(this.formats(), this.attributes.values()));
                }
              }, {
                key: "format",
                value: function format(name, value) {
                  var attribute = _parchment2.default.query(name, _parchment2.default.Scope.BLOCK_ATTRIBUTE);
                  if (attribute != null) {
                    this.attributes.attribute(attribute, value);
                  }
                }
              }, {
                key: "formatAt",
                value: function formatAt(index, length3, name, value) {
                  this.format(name, value);
                }
              }, {
                key: "insertAt",
                value: function insertAt(index, value, def) {
                  if (typeof value === "string" && value.endsWith("\n")) {
                    var block = _parchment2.default.create(Block.blotName);
                    this.parent.insertBefore(block, index === 0 ? this : this.next);
                    block.insertAt(0, value.slice(0, -1));
                  } else {
                    _get(BlockEmbed2.prototype.__proto__ || Object.getPrototypeOf(BlockEmbed2.prototype), "insertAt", this).call(this, index, value, def);
                  }
                }
              }]);
              return BlockEmbed2;
            }(_parchment2.default.Embed);
            BlockEmbed.scope = _parchment2.default.Scope.BLOCK_BLOT;
            var Block = function(_Parchment$Block) {
              _inherits(Block2, _Parchment$Block);
              function Block2(domNode) {
                _classCallCheck(this, Block2);
                var _this2 = _possibleConstructorReturn(this, (Block2.__proto__ || Object.getPrototypeOf(Block2)).call(this, domNode));
                _this2.cache = {};
                return _this2;
              }
              _createClass(Block2, [{
                key: "delta",
                value: function delta() {
                  if (this.cache.delta == null) {
                    this.cache.delta = this.descendants(_parchment2.default.Leaf).reduce(function(delta2, leaf) {
                      if (leaf.length() === 0) {
                        return delta2;
                      } else {
                        return delta2.insert(leaf.value(), bubbleFormats(leaf));
                      }
                    }, new _quillDelta2.default()).insert("\n", bubbleFormats(this));
                  }
                  return this.cache.delta;
                }
              }, {
                key: "deleteAt",
                value: function deleteAt(index, length3) {
                  _get(Block2.prototype.__proto__ || Object.getPrototypeOf(Block2.prototype), "deleteAt", this).call(this, index, length3);
                  this.cache = {};
                }
              }, {
                key: "formatAt",
                value: function formatAt(index, length3, name, value) {
                  if (length3 <= 0) return;
                  if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
                    if (index + length3 === this.length()) {
                      this.format(name, value);
                    }
                  } else {
                    _get(Block2.prototype.__proto__ || Object.getPrototypeOf(Block2.prototype), "formatAt", this).call(this, index, Math.min(length3, this.length() - index - 1), name, value);
                  }
                  this.cache = {};
                }
              }, {
                key: "insertAt",
                value: function insertAt(index, value, def) {
                  if (def != null) return _get(Block2.prototype.__proto__ || Object.getPrototypeOf(Block2.prototype), "insertAt", this).call(this, index, value, def);
                  if (value.length === 0) return;
                  var lines = value.split("\n");
                  var text2 = lines.shift();
                  if (text2.length > 0) {
                    if (index < this.length() - 1 || this.children.tail == null) {
                      _get(Block2.prototype.__proto__ || Object.getPrototypeOf(Block2.prototype), "insertAt", this).call(this, Math.min(index, this.length() - 1), text2);
                    } else {
                      this.children.tail.insertAt(this.children.tail.length(), text2);
                    }
                    this.cache = {};
                  }
                  var block = this;
                  lines.reduce(function(index2, line) {
                    block = block.split(index2, true);
                    block.insertAt(0, line);
                    return line.length;
                  }, index + text2.length);
                }
              }, {
                key: "insertBefore",
                value: function insertBefore(blot, ref) {
                  var head = this.children.head;
                  _get(Block2.prototype.__proto__ || Object.getPrototypeOf(Block2.prototype), "insertBefore", this).call(this, blot, ref);
                  if (head instanceof _break2.default) {
                    head.remove();
                  }
                  this.cache = {};
                }
              }, {
                key: "length",
                value: function length3() {
                  if (this.cache.length == null) {
                    this.cache.length = _get(Block2.prototype.__proto__ || Object.getPrototypeOf(Block2.prototype), "length", this).call(this) + NEWLINE_LENGTH;
                  }
                  return this.cache.length;
                }
              }, {
                key: "moveChildren",
                value: function moveChildren(target, ref) {
                  _get(Block2.prototype.__proto__ || Object.getPrototypeOf(Block2.prototype), "moveChildren", this).call(this, target, ref);
                  this.cache = {};
                }
              }, {
                key: "optimize",
                value: function optimize(context) {
                  _get(Block2.prototype.__proto__ || Object.getPrototypeOf(Block2.prototype), "optimize", this).call(this, context);
                  this.cache = {};
                }
              }, {
                key: "path",
                value: function path(index) {
                  return _get(Block2.prototype.__proto__ || Object.getPrototypeOf(Block2.prototype), "path", this).call(this, index, true);
                }
              }, {
                key: "removeChild",
                value: function removeChild(child) {
                  _get(Block2.prototype.__proto__ || Object.getPrototypeOf(Block2.prototype), "removeChild", this).call(this, child);
                  this.cache = {};
                }
              }, {
                key: "split",
                value: function split(index) {
                  var force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                  if (force && (index === 0 || index >= this.length() - NEWLINE_LENGTH)) {
                    var clone = this.clone();
                    if (index === 0) {
                      this.parent.insertBefore(clone, this);
                      return this;
                    } else {
                      this.parent.insertBefore(clone, this.next);
                      return clone;
                    }
                  } else {
                    var next = _get(Block2.prototype.__proto__ || Object.getPrototypeOf(Block2.prototype), "split", this).call(this, index, force);
                    this.cache = {};
                    return next;
                  }
                }
              }]);
              return Block2;
            }(_parchment2.default.Block);
            Block.blotName = "block";
            Block.tagName = "P";
            Block.defaultChild = "break";
            Block.allowedChildren = [_inline2.default, _parchment2.default.Embed, _text2.default];
            function bubbleFormats(blot) {
              var formats = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              if (blot == null) return formats;
              if (typeof blot.formats === "function") {
                formats = (0, _extend2.default)(formats, blot.formats());
              }
              if (blot.parent == null || blot.parent.blotName == "scroll" || blot.parent.statics.scope !== blot.statics.scope) {
                return formats;
              }
              return bubbleFormats(blot.parent, formats);
            }
            exports2.bubbleFormats = bubbleFormats;
            exports2.BlockEmbed = BlockEmbed;
            exports2.default = Block;
          },
          /* 5 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.default = exports2.overload = exports2.expandConfig = void 0;
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
              return typeof obj;
            } : function(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            var _slicedToArray = /* @__PURE__ */ function() {
              function sliceIterator(arr, i) {
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e = void 0;
                try {
                  for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                  }
                } catch (err) {
                  _d = true;
                  _e = err;
                } finally {
                  try {
                    if (!_n && _i["return"]) _i["return"]();
                  } finally {
                    if (_d) throw _e;
                  }
                }
                return _arr;
              }
              return function(arr, i) {
                if (Array.isArray(arr)) {
                  return arr;
                } else if (Symbol.iterator in Object(arr)) {
                  return sliceIterator(arr, i);
                } else {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }
              };
            }();
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            __webpack_require__(50);
            var _quillDelta = __webpack_require__(2);
            var _quillDelta2 = _interopRequireDefault(_quillDelta);
            var _editor = __webpack_require__(14);
            var _editor2 = _interopRequireDefault(_editor);
            var _emitter3 = __webpack_require__(8);
            var _emitter4 = _interopRequireDefault(_emitter3);
            var _module = __webpack_require__(9);
            var _module2 = _interopRequireDefault(_module);
            var _parchment = __webpack_require__(0);
            var _parchment2 = _interopRequireDefault(_parchment);
            var _selection = __webpack_require__(15);
            var _selection2 = _interopRequireDefault(_selection);
            var _extend = __webpack_require__(3);
            var _extend2 = _interopRequireDefault(_extend);
            var _logger = __webpack_require__(10);
            var _logger2 = _interopRequireDefault(_logger);
            var _theme = __webpack_require__(34);
            var _theme2 = _interopRequireDefault(_theme);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _defineProperty(obj, key, value) {
              if (key in obj) {
                Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
              } else {
                obj[key] = value;
              }
              return obj;
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            var debug = (0, _logger2.default)("quill");
            var Quill2 = function() {
              _createClass(Quill3, null, [{
                key: "debug",
                value: function debug2(limit) {
                  if (limit === true) {
                    limit = "log";
                  }
                  _logger2.default.level(limit);
                }
              }, {
                key: "find",
                value: function find2(node) {
                  return node.__quill || _parchment2.default.find(node);
                }
              }, {
                key: "import",
                value: function _import(name) {
                  if (this.imports[name] == null) {
                    debug.error("Cannot import " + name + ". Are you sure it was registered?");
                  }
                  return this.imports[name];
                }
              }, {
                key: "register",
                value: function register(path, target) {
                  var _this = this;
                  var overwrite = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
                  if (typeof path !== "string") {
                    var name = path.attrName || path.blotName;
                    if (typeof name === "string") {
                      this.register("formats/" + name, path, target);
                    } else {
                      Object.keys(path).forEach(function(key) {
                        _this.register(key, path[key], target);
                      });
                    }
                  } else {
                    if (this.imports[path] != null && !overwrite) {
                      debug.warn("Overwriting " + path + " with", target);
                    }
                    this.imports[path] = target;
                    if ((path.startsWith("blots/") || path.startsWith("formats/")) && target.blotName !== "abstract") {
                      _parchment2.default.register(target);
                    } else if (path.startsWith("modules") && typeof target.register === "function") {
                      target.register();
                    }
                  }
                }
              }]);
              function Quill3(container) {
                var _this2 = this;
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                _classCallCheck(this, Quill3);
                this.options = expandConfig(container, options);
                this.container = this.options.container;
                if (this.container == null) {
                  return debug.error("Invalid Quill container", container);
                }
                if (this.options.debug) {
                  Quill3.debug(this.options.debug);
                }
                var html = this.container.innerHTML.trim();
                this.container.classList.add("ql-container");
                this.container.innerHTML = "";
                this.container.__quill = this;
                this.root = this.addContainer("ql-editor");
                this.root.classList.add("ql-blank");
                this.root.setAttribute("data-gramm", false);
                this.scrollingContainer = this.options.scrollingContainer || this.root;
                this.emitter = new _emitter4.default();
                this.scroll = _parchment2.default.create(this.root, {
                  emitter: this.emitter,
                  whitelist: this.options.formats
                });
                this.editor = new _editor2.default(this.scroll);
                this.selection = new _selection2.default(this.scroll, this.emitter);
                this.theme = new this.options.theme(this, this.options);
                this.keyboard = this.theme.addModule("keyboard");
                this.clipboard = this.theme.addModule("clipboard");
                this.history = this.theme.addModule("history");
                this.theme.init();
                this.emitter.on(_emitter4.default.events.EDITOR_CHANGE, function(type) {
                  if (type === _emitter4.default.events.TEXT_CHANGE) {
                    _this2.root.classList.toggle("ql-blank", _this2.editor.isBlank());
                  }
                });
                this.emitter.on(_emitter4.default.events.SCROLL_UPDATE, function(source, mutations) {
                  var range = _this2.selection.lastRange;
                  var index = range && range.length === 0 ? range.index : void 0;
                  modify.call(_this2, function() {
                    return _this2.editor.update(null, mutations, index);
                  }, source);
                });
                var contents = this.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">` + html + "<p><br></p></div>");
                this.setContents(contents);
                this.history.clear();
                if (this.options.placeholder) {
                  this.root.setAttribute("data-placeholder", this.options.placeholder);
                }
                if (this.options.readOnly) {
                  this.disable();
                }
              }
              _createClass(Quill3, [{
                key: "addContainer",
                value: function addContainer(container) {
                  var refNode = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                  if (typeof container === "string") {
                    var className = container;
                    container = document.createElement("div");
                    container.classList.add(className);
                  }
                  this.container.insertBefore(container, refNode);
                  return container;
                }
              }, {
                key: "blur",
                value: function blur() {
                  this.selection.setRange(null);
                }
              }, {
                key: "deleteText",
                value: function deleteText2(index, length3, source) {
                  var _this3 = this;
                  var _overload = overload(index, length3, source);
                  var _overload2 = _slicedToArray(_overload, 4);
                  index = _overload2[0];
                  length3 = _overload2[1];
                  source = _overload2[3];
                  return modify.call(this, function() {
                    return _this3.editor.deleteText(index, length3);
                  }, source, index, -1 * length3);
                }
              }, {
                key: "disable",
                value: function disable() {
                  this.enable(false);
                }
              }, {
                key: "enable",
                value: function enable() {
                  var enabled = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                  this.scroll.enable(enabled);
                  this.container.classList.toggle("ql-disabled", !enabled);
                }
              }, {
                key: "focus",
                value: function focus() {
                  var scrollTop = this.scrollingContainer.scrollTop;
                  this.selection.focus();
                  this.scrollingContainer.scrollTop = scrollTop;
                  this.scrollIntoView();
                }
              }, {
                key: "format",
                value: function format(name, value) {
                  var _this4 = this;
                  var source = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _emitter4.default.sources.API;
                  return modify.call(this, function() {
                    var range = _this4.getSelection(true);
                    var change = new _quillDelta2.default();
                    if (range == null) {
                      return change;
                    } else if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
                      change = _this4.editor.formatLine(range.index, range.length, _defineProperty({}, name, value));
                    } else if (range.length === 0) {
                      _this4.selection.format(name, value);
                      return change;
                    } else {
                      change = _this4.editor.formatText(range.index, range.length, _defineProperty({}, name, value));
                    }
                    _this4.setSelection(range, _emitter4.default.sources.SILENT);
                    return change;
                  }, source);
                }
              }, {
                key: "formatLine",
                value: function formatLine(index, length3, name, value, source) {
                  var _this5 = this;
                  var formats = void 0;
                  var _overload3 = overload(index, length3, name, value, source);
                  var _overload4 = _slicedToArray(_overload3, 4);
                  index = _overload4[0];
                  length3 = _overload4[1];
                  formats = _overload4[2];
                  source = _overload4[3];
                  return modify.call(this, function() {
                    return _this5.editor.formatLine(index, length3, formats);
                  }, source, index, 0);
                }
              }, {
                key: "formatText",
                value: function formatText2(index, length3, name, value, source) {
                  var _this6 = this;
                  var formats = void 0;
                  var _overload5 = overload(index, length3, name, value, source);
                  var _overload6 = _slicedToArray(_overload5, 4);
                  index = _overload6[0];
                  length3 = _overload6[1];
                  formats = _overload6[2];
                  source = _overload6[3];
                  return modify.call(this, function() {
                    return _this6.editor.formatText(index, length3, formats);
                  }, source, index, 0);
                }
              }, {
                key: "getBounds",
                value: function getBounds(index) {
                  var length3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                  var bounds = void 0;
                  if (typeof index === "number") {
                    bounds = this.selection.getBounds(index, length3);
                  } else {
                    bounds = this.selection.getBounds(index.index, index.length);
                  }
                  var containerBounds = this.container.getBoundingClientRect();
                  return {
                    bottom: bounds.bottom - containerBounds.top,
                    height: bounds.height,
                    left: bounds.left - containerBounds.left,
                    right: bounds.right - containerBounds.left,
                    top: bounds.top - containerBounds.top,
                    width: bounds.width
                  };
                }
              }, {
                key: "getContents",
                value: function getContents() {
                  var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                  var length3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - index;
                  var _overload7 = overload(index, length3);
                  var _overload8 = _slicedToArray(_overload7, 2);
                  index = _overload8[0];
                  length3 = _overload8[1];
                  return this.editor.getContents(index, length3);
                }
              }, {
                key: "getFormat",
                value: function getFormat() {
                  var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getSelection(true);
                  var length3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                  if (typeof index === "number") {
                    return this.editor.getFormat(index, length3);
                  } else {
                    return this.editor.getFormat(index.index, index.length);
                  }
                }
              }, {
                key: "getIndex",
                value: function getIndex(blot) {
                  return blot.offset(this.scroll);
                }
              }, {
                key: "getLength",
                value: function getLength() {
                  return this.scroll.length();
                }
              }, {
                key: "getLeaf",
                value: function getLeaf(index) {
                  return this.scroll.leaf(index);
                }
              }, {
                key: "getLine",
                value: function getLine(index) {
                  return this.scroll.line(index);
                }
              }, {
                key: "getLines",
                value: function getLines() {
                  var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                  var length3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
                  if (typeof index !== "number") {
                    return this.scroll.lines(index.index, index.length);
                  } else {
                    return this.scroll.lines(index, length3);
                  }
                }
              }, {
                key: "getModule",
                value: function getModule(name) {
                  return this.theme.modules[name];
                }
              }, {
                key: "getSelection",
                value: function getSelection() {
                  var focus = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
                  if (focus) this.focus();
                  this.update();
                  return this.selection.getRange()[0];
                }
              }, {
                key: "getText",
                value: function getText() {
                  var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                  var length3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - index;
                  var _overload9 = overload(index, length3);
                  var _overload10 = _slicedToArray(_overload9, 2);
                  index = _overload10[0];
                  length3 = _overload10[1];
                  return this.editor.getText(index, length3);
                }
              }, {
                key: "hasFocus",
                value: function hasFocus() {
                  return this.selection.hasFocus();
                }
              }, {
                key: "insertEmbed",
                value: function insertEmbed(index, embed, value) {
                  var _this7 = this;
                  var source = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Quill3.sources.API;
                  return modify.call(this, function() {
                    return _this7.editor.insertEmbed(index, embed, value);
                  }, source, index);
                }
              }, {
                key: "insertText",
                value: function insertText2(index, text2, name, value, source) {
                  var _this8 = this;
                  var formats = void 0;
                  var _overload11 = overload(index, 0, name, value, source);
                  var _overload12 = _slicedToArray(_overload11, 4);
                  index = _overload12[0];
                  formats = _overload12[2];
                  source = _overload12[3];
                  return modify.call(this, function() {
                    return _this8.editor.insertText(index, text2, formats);
                  }, source, index, text2.length);
                }
              }, {
                key: "isEnabled",
                value: function isEnabled() {
                  return !this.container.classList.contains("ql-disabled");
                }
              }, {
                key: "off",
                value: function off() {
                  return this.emitter.off.apply(this.emitter, arguments);
                }
              }, {
                key: "on",
                value: function on() {
                  return this.emitter.on.apply(this.emitter, arguments);
                }
              }, {
                key: "once",
                value: function once() {
                  return this.emitter.once.apply(this.emitter, arguments);
                }
              }, {
                key: "pasteHTML",
                value: function pasteHTML(index, html, source) {
                  this.clipboard.dangerouslyPasteHTML(index, html, source);
                }
              }, {
                key: "removeFormat",
                value: function removeFormat(index, length3, source) {
                  var _this9 = this;
                  var _overload13 = overload(index, length3, source);
                  var _overload14 = _slicedToArray(_overload13, 4);
                  index = _overload14[0];
                  length3 = _overload14[1];
                  source = _overload14[3];
                  return modify.call(this, function() {
                    return _this9.editor.removeFormat(index, length3);
                  }, source, index);
                }
              }, {
                key: "scrollIntoView",
                value: function scrollIntoView() {
                  this.selection.scrollIntoView(this.scrollingContainer);
                }
              }, {
                key: "setContents",
                value: function setContents(delta) {
                  var _this10 = this;
                  var source = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _emitter4.default.sources.API;
                  return modify.call(this, function() {
                    delta = new _quillDelta2.default(delta);
                    var length3 = _this10.getLength();
                    var deleted = _this10.editor.deleteText(0, length3);
                    var applied = _this10.editor.applyDelta(delta);
                    var lastOp = applied.ops[applied.ops.length - 1];
                    if (lastOp != null && typeof lastOp.insert === "string" && lastOp.insert[lastOp.insert.length - 1] === "\n") {
                      _this10.editor.deleteText(_this10.getLength() - 1, 1);
                      applied.delete(1);
                    }
                    var ret = deleted.compose(applied);
                    return ret;
                  }, source);
                }
              }, {
                key: "setSelection",
                value: function setSelection(index, length3, source) {
                  if (index == null) {
                    this.selection.setRange(null, length3 || Quill3.sources.API);
                  } else {
                    var _overload15 = overload(index, length3, source);
                    var _overload16 = _slicedToArray(_overload15, 4);
                    index = _overload16[0];
                    length3 = _overload16[1];
                    source = _overload16[3];
                    this.selection.setRange(new _selection.Range(index, length3), source);
                    if (source !== _emitter4.default.sources.SILENT) {
                      this.selection.scrollIntoView(this.scrollingContainer);
                    }
                  }
                }
              }, {
                key: "setText",
                value: function setText(text2) {
                  var source = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _emitter4.default.sources.API;
                  var delta = new _quillDelta2.default().insert(text2);
                  return this.setContents(delta, source);
                }
              }, {
                key: "update",
                value: function update() {
                  var source = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _emitter4.default.sources.USER;
                  var change = this.scroll.update(source);
                  this.selection.update(source);
                  return change;
                }
              }, {
                key: "updateContents",
                value: function updateContents(delta) {
                  var _this11 = this;
                  var source = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _emitter4.default.sources.API;
                  return modify.call(this, function() {
                    delta = new _quillDelta2.default(delta);
                    return _this11.editor.applyDelta(delta, source);
                  }, source, true);
                }
              }]);
              return Quill3;
            }();
            Quill2.DEFAULTS = {
              bounds: null,
              formats: null,
              modules: {},
              placeholder: "",
              readOnly: false,
              scrollingContainer: null,
              strict: true,
              theme: "default"
            };
            Quill2.events = _emitter4.default.events;
            Quill2.sources = _emitter4.default.sources;
            Quill2.version = false ? "dev" : "1.3.7";
            Quill2.imports = {
              "delta": _quillDelta2.default,
              "parchment": _parchment2.default,
              "core/module": _module2.default,
              "core/theme": _theme2.default
            };
            function expandConfig(container, userConfig) {
              userConfig = (0, _extend2.default)(true, {
                container,
                modules: {
                  clipboard: true,
                  keyboard: true,
                  history: true
                }
              }, userConfig);
              if (!userConfig.theme || userConfig.theme === Quill2.DEFAULTS.theme) {
                userConfig.theme = _theme2.default;
              } else {
                userConfig.theme = Quill2.import("themes/" + userConfig.theme);
                if (userConfig.theme == null) {
                  throw new Error("Invalid theme " + userConfig.theme + ". Did you register it?");
                }
              }
              var themeConfig = (0, _extend2.default)(true, {}, userConfig.theme.DEFAULTS);
              [themeConfig, userConfig].forEach(function(config) {
                config.modules = config.modules || {};
                Object.keys(config.modules).forEach(function(module3) {
                  if (config.modules[module3] === true) {
                    config.modules[module3] = {};
                  }
                });
              });
              var moduleNames = Object.keys(themeConfig.modules).concat(Object.keys(userConfig.modules));
              var moduleConfig = moduleNames.reduce(function(config, name) {
                var moduleClass = Quill2.import("modules/" + name);
                if (moduleClass == null) {
                  debug.error("Cannot load " + name + " module. Are you sure you registered it?");
                } else {
                  config[name] = moduleClass.DEFAULTS || {};
                }
                return config;
              }, {});
              if (userConfig.modules != null && userConfig.modules.toolbar && userConfig.modules.toolbar.constructor !== Object) {
                userConfig.modules.toolbar = {
                  container: userConfig.modules.toolbar
                };
              }
              userConfig = (0, _extend2.default)(true, {}, Quill2.DEFAULTS, { modules: moduleConfig }, themeConfig, userConfig);
              ["bounds", "container", "scrollingContainer"].forEach(function(key) {
                if (typeof userConfig[key] === "string") {
                  userConfig[key] = document.querySelector(userConfig[key]);
                }
              });
              userConfig.modules = Object.keys(userConfig.modules).reduce(function(config, name) {
                if (userConfig.modules[name]) {
                  config[name] = userConfig.modules[name];
                }
                return config;
              }, {});
              return userConfig;
            }
            function modify(modifier, source, index, shift) {
              if (this.options.strict && !this.isEnabled() && source === _emitter4.default.sources.USER) {
                return new _quillDelta2.default();
              }
              var range = index == null ? null : this.getSelection();
              var oldDelta = this.editor.delta;
              var change = modifier();
              if (range != null) {
                if (index === true) index = range.index;
                if (shift == null) {
                  range = shiftRange(range, change, source);
                } else if (shift !== 0) {
                  range = shiftRange(range, index, shift, source);
                }
                this.setSelection(range, _emitter4.default.sources.SILENT);
              }
              if (change.length() > 0) {
                var _emitter;
                var args2 = [_emitter4.default.events.TEXT_CHANGE, change, oldDelta, source];
                (_emitter = this.emitter).emit.apply(_emitter, [_emitter4.default.events.EDITOR_CHANGE].concat(args2));
                if (source !== _emitter4.default.sources.SILENT) {
                  var _emitter2;
                  (_emitter2 = this.emitter).emit.apply(_emitter2, args2);
                }
              }
              return change;
            }
            function overload(index, length3, name, value, source) {
              var formats = {};
              if (typeof index.index === "number" && typeof index.length === "number") {
                if (typeof length3 !== "number") {
                  source = value, value = name, name = length3, length3 = index.length, index = index.index;
                } else {
                  length3 = index.length, index = index.index;
                }
              } else if (typeof length3 !== "number") {
                source = value, value = name, name = length3, length3 = 0;
              }
              if ((typeof name === "undefined" ? "undefined" : _typeof(name)) === "object") {
                formats = name;
                source = value;
              } else if (typeof name === "string") {
                if (value != null) {
                  formats[name] = value;
                } else {
                  source = name;
                }
              }
              source = source || _emitter4.default.sources.API;
              return [index, length3, formats, source];
            }
            function shiftRange(range, index, length3, source) {
              if (range == null) return null;
              var start = void 0, end = void 0;
              if (index instanceof _quillDelta2.default) {
                var _map = [range.index, range.index + range.length].map(function(pos) {
                  return index.transformPosition(pos, source !== _emitter4.default.sources.USER);
                });
                var _map2 = _slicedToArray(_map, 2);
                start = _map2[0];
                end = _map2[1];
              } else {
                var _map3 = [range.index, range.index + range.length].map(function(pos) {
                  if (pos < index || pos === index && source === _emitter4.default.sources.USER) return pos;
                  if (length3 >= 0) {
                    return pos + length3;
                  } else {
                    return Math.max(index, pos + length3);
                  }
                });
                var _map4 = _slicedToArray(_map3, 2);
                start = _map4[0];
                end = _map4[1];
              }
              return new _selection.Range(start, end - start);
            }
            exports2.expandConfig = expandConfig;
            exports2.overload = overload;
            exports2.default = Quill2;
          },
          /* 6 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _get = function get(object, property, receiver) {
              if (object === null) object = Function.prototype;
              var desc = Object.getOwnPropertyDescriptor(object, property);
              if (desc === void 0) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                  return void 0;
                } else {
                  return get(parent, property, receiver);
                }
              } else if ("value" in desc) {
                return desc.value;
              } else {
                var getter = desc.get;
                if (getter === void 0) {
                  return void 0;
                }
                return getter.call(receiver);
              }
            };
            var _text = __webpack_require__(7);
            var _text2 = _interopRequireDefault(_text);
            var _parchment = __webpack_require__(0);
            var _parchment2 = _interopRequireDefault(_parchment);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var Inline = function(_Parchment$Inline) {
              _inherits(Inline2, _Parchment$Inline);
              function Inline2() {
                _classCallCheck(this, Inline2);
                return _possibleConstructorReturn(this, (Inline2.__proto__ || Object.getPrototypeOf(Inline2)).apply(this, arguments));
              }
              _createClass(Inline2, [{
                key: "formatAt",
                value: function formatAt(index, length3, name, value) {
                  if (Inline2.compare(this.statics.blotName, name) < 0 && _parchment2.default.query(name, _parchment2.default.Scope.BLOT)) {
                    var blot = this.isolate(index, length3);
                    if (value) {
                      blot.wrap(name, value);
                    }
                  } else {
                    _get(Inline2.prototype.__proto__ || Object.getPrototypeOf(Inline2.prototype), "formatAt", this).call(this, index, length3, name, value);
                  }
                }
              }, {
                key: "optimize",
                value: function optimize(context) {
                  _get(Inline2.prototype.__proto__ || Object.getPrototypeOf(Inline2.prototype), "optimize", this).call(this, context);
                  if (this.parent instanceof Inline2 && Inline2.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
                    var parent = this.parent.isolate(this.offset(), this.length());
                    this.moveChildren(parent);
                    parent.wrap(this);
                  }
                }
              }], [{
                key: "compare",
                value: function compare(self2, other) {
                  var selfIndex = Inline2.order.indexOf(self2);
                  var otherIndex = Inline2.order.indexOf(other);
                  if (selfIndex >= 0 || otherIndex >= 0) {
                    return selfIndex - otherIndex;
                  } else if (self2 === other) {
                    return 0;
                  } else if (self2 < other) {
                    return -1;
                  } else {
                    return 1;
                  }
                }
              }]);
              return Inline2;
            }(_parchment2.default.Inline);
            Inline.allowedChildren = [Inline, _parchment2.default.Embed, _text2.default];
            Inline.order = [
              "cursor",
              "inline",
              // Must be lower
              "underline",
              "strike",
              "italic",
              "bold",
              "script",
              "link",
              "code"
              // Must be higher
            ];
            exports2.default = Inline;
          },
          /* 7 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _parchment = __webpack_require__(0);
            var _parchment2 = _interopRequireDefault(_parchment);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var TextBlot = function(_Parchment$Text) {
              _inherits(TextBlot2, _Parchment$Text);
              function TextBlot2() {
                _classCallCheck(this, TextBlot2);
                return _possibleConstructorReturn(this, (TextBlot2.__proto__ || Object.getPrototypeOf(TextBlot2)).apply(this, arguments));
              }
              return TextBlot2;
            }(_parchment2.default.Text);
            exports2.default = TextBlot;
          },
          /* 8 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _get = function get(object, property, receiver) {
              if (object === null) object = Function.prototype;
              var desc = Object.getOwnPropertyDescriptor(object, property);
              if (desc === void 0) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                  return void 0;
                } else {
                  return get(parent, property, receiver);
                }
              } else if ("value" in desc) {
                return desc.value;
              } else {
                var getter = desc.get;
                if (getter === void 0) {
                  return void 0;
                }
                return getter.call(receiver);
              }
            };
            var _eventemitter = __webpack_require__(54);
            var _eventemitter2 = _interopRequireDefault(_eventemitter);
            var _logger = __webpack_require__(10);
            var _logger2 = _interopRequireDefault(_logger);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var debug = (0, _logger2.default)("quill:events");
            var EVENTS = ["selectionchange", "mousedown", "mouseup", "click"];
            EVENTS.forEach(function(eventName) {
              document.addEventListener(eventName, function() {
                for (var _len = arguments.length, args2 = Array(_len), _key = 0; _key < _len; _key++) {
                  args2[_key] = arguments[_key];
                }
                [].slice.call(document.querySelectorAll(".ql-container")).forEach(function(node) {
                  if (node.__quill && node.__quill.emitter) {
                    var _node$__quill$emitter;
                    (_node$__quill$emitter = node.__quill.emitter).handleDOM.apply(_node$__quill$emitter, args2);
                  }
                });
              });
            });
            var Emitter = function(_EventEmitter) {
              _inherits(Emitter2, _EventEmitter);
              function Emitter2() {
                _classCallCheck(this, Emitter2);
                var _this = _possibleConstructorReturn(this, (Emitter2.__proto__ || Object.getPrototypeOf(Emitter2)).call(this));
                _this.listeners = {};
                _this.on("error", debug.error);
                return _this;
              }
              _createClass(Emitter2, [{
                key: "emit",
                value: function emit() {
                  debug.log.apply(debug, arguments);
                  _get(Emitter2.prototype.__proto__ || Object.getPrototypeOf(Emitter2.prototype), "emit", this).apply(this, arguments);
                }
              }, {
                key: "handleDOM",
                value: function handleDOM(event) {
                  for (var _len2 = arguments.length, args2 = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                    args2[_key2 - 1] = arguments[_key2];
                  }
                  (this.listeners[event.type] || []).forEach(function(_ref) {
                    var node = _ref.node, handler = _ref.handler;
                    if (event.target === node || node.contains(event.target)) {
                      handler.apply(void 0, [event].concat(args2));
                    }
                  });
                }
              }, {
                key: "listenDOM",
                value: function listenDOM(eventName, node, handler) {
                  if (!this.listeners[eventName]) {
                    this.listeners[eventName] = [];
                  }
                  this.listeners[eventName].push({ node, handler });
                }
              }]);
              return Emitter2;
            }(_eventemitter2.default);
            Emitter.events = {
              EDITOR_CHANGE: "editor-change",
              SCROLL_BEFORE_UPDATE: "scroll-before-update",
              SCROLL_OPTIMIZE: "scroll-optimize",
              SCROLL_UPDATE: "scroll-update",
              SELECTION_CHANGE: "selection-change",
              TEXT_CHANGE: "text-change"
            };
            Emitter.sources = {
              API: "api",
              SILENT: "silent",
              USER: "user"
            };
            exports2.default = Emitter;
          },
          /* 9 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            var Module = function Module2(quill) {
              var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              _classCallCheck(this, Module2);
              this.quill = quill;
              this.options = options;
            };
            Module.DEFAULTS = {};
            exports2.default = Module;
          },
          /* 10 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var levels = ["error", "warn", "log", "info"];
            var level = "warn";
            function debug(method) {
              if (levels.indexOf(method) <= levels.indexOf(level)) {
                var _console;
                for (var _len = arguments.length, args2 = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args2[_key - 1] = arguments[_key];
                }
                (_console = console)[method].apply(_console, args2);
              }
            }
            function namespace(ns) {
              return levels.reduce(function(logger, method) {
                logger[method] = debug.bind(console, method, ns);
                return logger;
              }, {});
            }
            debug.level = namespace.level = function(newLevel) {
              level = newLevel;
            };
            exports2.default = namespace;
          },
          /* 11 */
          /***/
          function(module2, exports2, __webpack_require__) {
            var pSlice = Array.prototype.slice;
            var objectKeys = __webpack_require__(52);
            var isArguments = __webpack_require__(53);
            var deepEqual = module2.exports = function(actual, expected, opts) {
              if (!opts) opts = {};
              if (actual === expected) {
                return true;
              } else if (actual instanceof Date && expected instanceof Date) {
                return actual.getTime() === expected.getTime();
              } else if (!actual || !expected || typeof actual != "object" && typeof expected != "object") {
                return opts.strict ? actual === expected : actual == expected;
              } else {
                return objEquiv(actual, expected, opts);
              }
            };
            function isUndefinedOrNull(value) {
              return value === null || value === void 0;
            }
            function isBuffer(x) {
              if (!x || typeof x !== "object" || typeof x.length !== "number") return false;
              if (typeof x.copy !== "function" || typeof x.slice !== "function") {
                return false;
              }
              if (x.length > 0 && typeof x[0] !== "number") return false;
              return true;
            }
            function objEquiv(a, b, opts) {
              var i, key;
              if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
                return false;
              if (a.prototype !== b.prototype) return false;
              if (isArguments(a)) {
                if (!isArguments(b)) {
                  return false;
                }
                a = pSlice.call(a);
                b = pSlice.call(b);
                return deepEqual(a, b, opts);
              }
              if (isBuffer(a)) {
                if (!isBuffer(b)) {
                  return false;
                }
                if (a.length !== b.length) return false;
                for (i = 0; i < a.length; i++) {
                  if (a[i] !== b[i]) return false;
                }
                return true;
              }
              try {
                var ka = objectKeys(a), kb = objectKeys(b);
              } catch (e) {
                return false;
              }
              if (ka.length != kb.length)
                return false;
              ka.sort();
              kb.sort();
              for (i = ka.length - 1; i >= 0; i--) {
                if (ka[i] != kb[i])
                  return false;
              }
              for (i = ka.length - 1; i >= 0; i--) {
                key = ka[i];
                if (!deepEqual(a[key], b[key], opts)) return false;
              }
              return typeof a === typeof b;
            }
          },
          /* 12 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", { value: true });
            var Registry = __webpack_require__(1);
            var Attributor = (
              /** @class */
              function() {
                function Attributor2(attrName, keyName, options) {
                  if (options === void 0) {
                    options = {};
                  }
                  this.attrName = attrName;
                  this.keyName = keyName;
                  var attributeBit = Registry.Scope.TYPE & Registry.Scope.ATTRIBUTE;
                  if (options.scope != null) {
                    this.scope = options.scope & Registry.Scope.LEVEL | attributeBit;
                  } else {
                    this.scope = Registry.Scope.ATTRIBUTE;
                  }
                  if (options.whitelist != null)
                    this.whitelist = options.whitelist;
                }
                Attributor2.keys = function(node) {
                  return [].map.call(node.attributes, function(item) {
                    return item.name;
                  });
                };
                Attributor2.prototype.add = function(node, value) {
                  if (!this.canAdd(node, value))
                    return false;
                  node.setAttribute(this.keyName, value);
                  return true;
                };
                Attributor2.prototype.canAdd = function(node, value) {
                  var match = Registry.query(node, Registry.Scope.BLOT & (this.scope | Registry.Scope.TYPE));
                  if (match == null)
                    return false;
                  if (this.whitelist == null)
                    return true;
                  if (typeof value === "string") {
                    return this.whitelist.indexOf(value.replace(/["']/g, "")) > -1;
                  } else {
                    return this.whitelist.indexOf(value) > -1;
                  }
                };
                Attributor2.prototype.remove = function(node) {
                  node.removeAttribute(this.keyName);
                };
                Attributor2.prototype.value = function(node) {
                  var value = node.getAttribute(this.keyName);
                  if (this.canAdd(node, value) && value) {
                    return value;
                  }
                  return "";
                };
                return Attributor2;
              }()
            );
            exports2.default = Attributor;
          },
          /* 13 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.default = exports2.Code = void 0;
            var _slicedToArray = /* @__PURE__ */ function() {
              function sliceIterator(arr, i) {
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e = void 0;
                try {
                  for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                  }
                } catch (err) {
                  _d = true;
                  _e = err;
                } finally {
                  try {
                    if (!_n && _i["return"]) _i["return"]();
                  } finally {
                    if (_d) throw _e;
                  }
                }
                return _arr;
              }
              return function(arr, i) {
                if (Array.isArray(arr)) {
                  return arr;
                } else if (Symbol.iterator in Object(arr)) {
                  return sliceIterator(arr, i);
                } else {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }
              };
            }();
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _get = function get(object, property, receiver) {
              if (object === null) object = Function.prototype;
              var desc = Object.getOwnPropertyDescriptor(object, property);
              if (desc === void 0) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                  return void 0;
                } else {
                  return get(parent, property, receiver);
                }
              } else if ("value" in desc) {
                return desc.value;
              } else {
                var getter = desc.get;
                if (getter === void 0) {
                  return void 0;
                }
                return getter.call(receiver);
              }
            };
            var _quillDelta = __webpack_require__(2);
            var _quillDelta2 = _interopRequireDefault(_quillDelta);
            var _parchment = __webpack_require__(0);
            var _parchment2 = _interopRequireDefault(_parchment);
            var _block = __webpack_require__(4);
            var _block2 = _interopRequireDefault(_block);
            var _inline = __webpack_require__(6);
            var _inline2 = _interopRequireDefault(_inline);
            var _text = __webpack_require__(7);
            var _text2 = _interopRequireDefault(_text);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var Code = function(_Inline) {
              _inherits(Code2, _Inline);
              function Code2() {
                _classCallCheck(this, Code2);
                return _possibleConstructorReturn(this, (Code2.__proto__ || Object.getPrototypeOf(Code2)).apply(this, arguments));
              }
              return Code2;
            }(_inline2.default);
            Code.blotName = "code";
            Code.tagName = "CODE";
            var CodeBlock = function(_Block) {
              _inherits(CodeBlock2, _Block);
              function CodeBlock2() {
                _classCallCheck(this, CodeBlock2);
                return _possibleConstructorReturn(this, (CodeBlock2.__proto__ || Object.getPrototypeOf(CodeBlock2)).apply(this, arguments));
              }
              _createClass(CodeBlock2, [{
                key: "delta",
                value: function delta() {
                  var _this3 = this;
                  var text2 = this.domNode.textContent;
                  if (text2.endsWith("\n")) {
                    text2 = text2.slice(0, -1);
                  }
                  return text2.split("\n").reduce(function(delta2, frag) {
                    return delta2.insert(frag).insert("\n", _this3.formats());
                  }, new _quillDelta2.default());
                }
              }, {
                key: "format",
                value: function format(name, value) {
                  if (name === this.statics.blotName && value) return;
                  var _descendant = this.descendant(_text2.default, this.length() - 1), _descendant2 = _slicedToArray(_descendant, 1), text2 = _descendant2[0];
                  if (text2 != null) {
                    text2.deleteAt(text2.length() - 1, 1);
                  }
                  _get(CodeBlock2.prototype.__proto__ || Object.getPrototypeOf(CodeBlock2.prototype), "format", this).call(this, name, value);
                }
              }, {
                key: "formatAt",
                value: function formatAt(index, length3, name, value) {
                  if (length3 === 0) return;
                  if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK) == null || name === this.statics.blotName && value === this.statics.formats(this.domNode)) {
                    return;
                  }
                  var nextNewline = this.newlineIndex(index);
                  if (nextNewline < 0 || nextNewline >= index + length3) return;
                  var prevNewline = this.newlineIndex(index, true) + 1;
                  var isolateLength = nextNewline - prevNewline + 1;
                  var blot = this.isolate(prevNewline, isolateLength);
                  var next = blot.next;
                  blot.format(name, value);
                  if (next instanceof CodeBlock2) {
                    next.formatAt(0, index - prevNewline + length3 - isolateLength, name, value);
                  }
                }
              }, {
                key: "insertAt",
                value: function insertAt(index, value, def) {
                  if (def != null) return;
                  var _descendant3 = this.descendant(_text2.default, index), _descendant4 = _slicedToArray(_descendant3, 2), text2 = _descendant4[0], offset = _descendant4[1];
                  text2.insertAt(offset, value);
                }
              }, {
                key: "length",
                value: function length3() {
                  var length4 = this.domNode.textContent.length;
                  if (!this.domNode.textContent.endsWith("\n")) {
                    return length4 + 1;
                  }
                  return length4;
                }
              }, {
                key: "newlineIndex",
                value: function newlineIndex(searchIndex) {
                  var reverse = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                  if (!reverse) {
                    var offset = this.domNode.textContent.slice(searchIndex).indexOf("\n");
                    return offset > -1 ? searchIndex + offset : -1;
                  } else {
                    return this.domNode.textContent.slice(0, searchIndex).lastIndexOf("\n");
                  }
                }
              }, {
                key: "optimize",
                value: function optimize(context) {
                  if (!this.domNode.textContent.endsWith("\n")) {
                    this.appendChild(_parchment2.default.create("text", "\n"));
                  }
                  _get(CodeBlock2.prototype.__proto__ || Object.getPrototypeOf(CodeBlock2.prototype), "optimize", this).call(this, context);
                  var next = this.next;
                  if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === next.statics.formats(next.domNode)) {
                    next.optimize(context);
                    next.moveChildren(this);
                    next.remove();
                  }
                }
              }, {
                key: "replace",
                value: function replace(target) {
                  _get(CodeBlock2.prototype.__proto__ || Object.getPrototypeOf(CodeBlock2.prototype), "replace", this).call(this, target);
                  [].slice.call(this.domNode.querySelectorAll("*")).forEach(function(node) {
                    var blot = _parchment2.default.find(node);
                    if (blot == null) {
                      node.parentNode.removeChild(node);
                    } else if (blot instanceof _parchment2.default.Embed) {
                      blot.remove();
                    } else {
                      blot.unwrap();
                    }
                  });
                }
              }], [{
                key: "create",
                value: function create7(value) {
                  var domNode = _get(CodeBlock2.__proto__ || Object.getPrototypeOf(CodeBlock2), "create", this).call(this, value);
                  domNode.setAttribute("spellcheck", false);
                  return domNode;
                }
              }, {
                key: "formats",
                value: function formats() {
                  return true;
                }
              }]);
              return CodeBlock2;
            }(_block2.default);
            CodeBlock.blotName = "code-block";
            CodeBlock.tagName = "PRE";
            CodeBlock.TAB = "  ";
            exports2.Code = Code;
            exports2.default = CodeBlock;
          },
          /* 14 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
              return typeof obj;
            } : function(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            var _slicedToArray = /* @__PURE__ */ function() {
              function sliceIterator(arr, i) {
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e = void 0;
                try {
                  for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                  }
                } catch (err) {
                  _d = true;
                  _e = err;
                } finally {
                  try {
                    if (!_n && _i["return"]) _i["return"]();
                  } finally {
                    if (_d) throw _e;
                  }
                }
                return _arr;
              }
              return function(arr, i) {
                if (Array.isArray(arr)) {
                  return arr;
                } else if (Symbol.iterator in Object(arr)) {
                  return sliceIterator(arr, i);
                } else {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }
              };
            }();
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _quillDelta = __webpack_require__(2);
            var _quillDelta2 = _interopRequireDefault(_quillDelta);
            var _op = __webpack_require__(20);
            var _op2 = _interopRequireDefault(_op);
            var _parchment = __webpack_require__(0);
            var _parchment2 = _interopRequireDefault(_parchment);
            var _code = __webpack_require__(13);
            var _code2 = _interopRequireDefault(_code);
            var _cursor = __webpack_require__(24);
            var _cursor2 = _interopRequireDefault(_cursor);
            var _block = __webpack_require__(4);
            var _block2 = _interopRequireDefault(_block);
            var _break = __webpack_require__(16);
            var _break2 = _interopRequireDefault(_break);
            var _clone = __webpack_require__(21);
            var _clone2 = _interopRequireDefault(_clone);
            var _deepEqual = __webpack_require__(11);
            var _deepEqual2 = _interopRequireDefault(_deepEqual);
            var _extend = __webpack_require__(3);
            var _extend2 = _interopRequireDefault(_extend);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _defineProperty(obj, key, value) {
              if (key in obj) {
                Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
              } else {
                obj[key] = value;
              }
              return obj;
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            var ASCII = /^[ -~]*$/;
            var Editor2 = function() {
              function Editor3(scroll) {
                _classCallCheck(this, Editor3);
                this.scroll = scroll;
                this.delta = this.getDelta();
              }
              _createClass(Editor3, [{
                key: "applyDelta",
                value: function applyDelta(delta) {
                  var _this = this;
                  var consumeNextNewline = false;
                  this.scroll.update();
                  var scrollLength = this.scroll.length();
                  this.scroll.batchStart();
                  delta = normalizeDelta(delta);
                  delta.reduce(function(index, op) {
                    var length3 = op.retain || op.delete || op.insert.length || 1;
                    var attributes = op.attributes || {};
                    if (op.insert != null) {
                      if (typeof op.insert === "string") {
                        var text2 = op.insert;
                        if (text2.endsWith("\n") && consumeNextNewline) {
                          consumeNextNewline = false;
                          text2 = text2.slice(0, -1);
                        }
                        if (index >= scrollLength && !text2.endsWith("\n")) {
                          consumeNextNewline = true;
                        }
                        _this.scroll.insertAt(index, text2);
                        var _scroll$line = _this.scroll.line(index), _scroll$line2 = _slicedToArray(_scroll$line, 2), line = _scroll$line2[0], offset = _scroll$line2[1];
                        var formats = (0, _extend2.default)({}, (0, _block.bubbleFormats)(line));
                        if (line instanceof _block2.default) {
                          var _line$descendant = line.descendant(_parchment2.default.Leaf, offset), _line$descendant2 = _slicedToArray(_line$descendant, 1), leaf = _line$descendant2[0];
                          formats = (0, _extend2.default)(formats, (0, _block.bubbleFormats)(leaf));
                        }
                        attributes = _op2.default.attributes.diff(formats, attributes) || {};
                      } else if (_typeof(op.insert) === "object") {
                        var key = Object.keys(op.insert)[0];
                        if (key == null) return index;
                        _this.scroll.insertAt(index, key, op.insert[key]);
                      }
                      scrollLength += length3;
                    }
                    Object.keys(attributes).forEach(function(name) {
                      _this.scroll.formatAt(index, length3, name, attributes[name]);
                    });
                    return index + length3;
                  }, 0);
                  delta.reduce(function(index, op) {
                    if (typeof op.delete === "number") {
                      _this.scroll.deleteAt(index, op.delete);
                      return index;
                    }
                    return index + (op.retain || op.insert.length || 1);
                  }, 0);
                  this.scroll.batchEnd();
                  return this.update(delta);
                }
              }, {
                key: "deleteText",
                value: function deleteText2(index, length3) {
                  this.scroll.deleteAt(index, length3);
                  return this.update(new _quillDelta2.default().retain(index).delete(length3));
                }
              }, {
                key: "formatLine",
                value: function formatLine(index, length3) {
                  var _this2 = this;
                  var formats = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                  this.scroll.update();
                  Object.keys(formats).forEach(function(format) {
                    if (_this2.scroll.whitelist != null && !_this2.scroll.whitelist[format]) return;
                    var lines = _this2.scroll.lines(index, Math.max(length3, 1));
                    var lengthRemaining = length3;
                    lines.forEach(function(line) {
                      var lineLength = line.length();
                      if (!(line instanceof _code2.default)) {
                        line.format(format, formats[format]);
                      } else {
                        var codeIndex = index - line.offset(_this2.scroll);
                        var codeLength = line.newlineIndex(codeIndex + lengthRemaining) - codeIndex + 1;
                        line.formatAt(codeIndex, codeLength, format, formats[format]);
                      }
                      lengthRemaining -= lineLength;
                    });
                  });
                  this.scroll.optimize();
                  return this.update(new _quillDelta2.default().retain(index).retain(length3, (0, _clone2.default)(formats)));
                }
              }, {
                key: "formatText",
                value: function formatText2(index, length3) {
                  var _this3 = this;
                  var formats = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                  Object.keys(formats).forEach(function(format) {
                    _this3.scroll.formatAt(index, length3, format, formats[format]);
                  });
                  return this.update(new _quillDelta2.default().retain(index).retain(length3, (0, _clone2.default)(formats)));
                }
              }, {
                key: "getContents",
                value: function getContents(index, length3) {
                  return this.delta.slice(index, index + length3);
                }
              }, {
                key: "getDelta",
                value: function getDelta() {
                  return this.scroll.lines().reduce(function(delta, line) {
                    return delta.concat(line.delta());
                  }, new _quillDelta2.default());
                }
              }, {
                key: "getFormat",
                value: function getFormat(index) {
                  var length3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                  var lines = [], leaves = [];
                  if (length3 === 0) {
                    this.scroll.path(index).forEach(function(path) {
                      var _path = _slicedToArray(path, 1), blot = _path[0];
                      if (blot instanceof _block2.default) {
                        lines.push(blot);
                      } else if (blot instanceof _parchment2.default.Leaf) {
                        leaves.push(blot);
                      }
                    });
                  } else {
                    lines = this.scroll.lines(index, length3);
                    leaves = this.scroll.descendants(_parchment2.default.Leaf, index, length3);
                  }
                  var formatsArr = [lines, leaves].map(function(blots) {
                    if (blots.length === 0) return {};
                    var formats = (0, _block.bubbleFormats)(blots.shift());
                    while (Object.keys(formats).length > 0) {
                      var blot = blots.shift();
                      if (blot == null) return formats;
                      formats = combineFormats((0, _block.bubbleFormats)(blot), formats);
                    }
                    return formats;
                  });
                  return _extend2.default.apply(_extend2.default, formatsArr);
                }
              }, {
                key: "getText",
                value: function getText(index, length3) {
                  return this.getContents(index, length3).filter(function(op) {
                    return typeof op.insert === "string";
                  }).map(function(op) {
                    return op.insert;
                  }).join("");
                }
              }, {
                key: "insertEmbed",
                value: function insertEmbed(index, embed, value) {
                  this.scroll.insertAt(index, embed, value);
                  return this.update(new _quillDelta2.default().retain(index).insert(_defineProperty({}, embed, value)));
                }
              }, {
                key: "insertText",
                value: function insertText2(index, text2) {
                  var _this4 = this;
                  var formats = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                  text2 = text2.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                  this.scroll.insertAt(index, text2);
                  Object.keys(formats).forEach(function(format) {
                    _this4.scroll.formatAt(index, text2.length, format, formats[format]);
                  });
                  return this.update(new _quillDelta2.default().retain(index).insert(text2, (0, _clone2.default)(formats)));
                }
              }, {
                key: "isBlank",
                value: function isBlank() {
                  if (this.scroll.children.length == 0) return true;
                  if (this.scroll.children.length > 1) return false;
                  var block = this.scroll.children.head;
                  if (block.statics.blotName !== _block2.default.blotName) return false;
                  if (block.children.length > 1) return false;
                  return block.children.head instanceof _break2.default;
                }
              }, {
                key: "removeFormat",
                value: function removeFormat(index, length3) {
                  var text2 = this.getText(index, length3);
                  var _scroll$line3 = this.scroll.line(index + length3), _scroll$line4 = _slicedToArray(_scroll$line3, 2), line = _scroll$line4[0], offset = _scroll$line4[1];
                  var suffixLength = 0, suffix = new _quillDelta2.default();
                  if (line != null) {
                    if (!(line instanceof _code2.default)) {
                      suffixLength = line.length() - offset;
                    } else {
                      suffixLength = line.newlineIndex(offset) - offset + 1;
                    }
                    suffix = line.delta().slice(offset, offset + suffixLength - 1).insert("\n");
                  }
                  var contents = this.getContents(index, length3 + suffixLength);
                  var diff = contents.diff(new _quillDelta2.default().insert(text2).concat(suffix));
                  var delta = new _quillDelta2.default().retain(index).concat(diff);
                  return this.applyDelta(delta);
                }
              }, {
                key: "update",
                value: function update(change) {
                  var mutations = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
                  var cursorIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
                  var oldDelta = this.delta;
                  if (mutations.length === 1 && mutations[0].type === "characterData" && mutations[0].target.data.match(ASCII) && _parchment2.default.find(mutations[0].target)) {
                    var textBlot = _parchment2.default.find(mutations[0].target);
                    var formats = (0, _block.bubbleFormats)(textBlot);
                    var index = textBlot.offset(this.scroll);
                    var oldValue = mutations[0].oldValue.replace(_cursor2.default.CONTENTS, "");
                    var oldText = new _quillDelta2.default().insert(oldValue);
                    var newText = new _quillDelta2.default().insert(textBlot.value());
                    var diffDelta = new _quillDelta2.default().retain(index).concat(oldText.diff(newText, cursorIndex));
                    change = diffDelta.reduce(function(delta, op) {
                      if (op.insert) {
                        return delta.insert(op.insert, formats);
                      } else {
                        return delta.push(op);
                      }
                    }, new _quillDelta2.default());
                    this.delta = oldDelta.compose(change);
                  } else {
                    this.delta = this.getDelta();
                    if (!change || !(0, _deepEqual2.default)(oldDelta.compose(change), this.delta)) {
                      change = oldDelta.diff(this.delta, cursorIndex);
                    }
                  }
                  return change;
                }
              }]);
              return Editor3;
            }();
            function combineFormats(formats, combined) {
              return Object.keys(combined).reduce(function(merged, name) {
                if (formats[name] == null) return merged;
                if (combined[name] === formats[name]) {
                  merged[name] = combined[name];
                } else if (Array.isArray(combined[name])) {
                  if (combined[name].indexOf(formats[name]) < 0) {
                    merged[name] = combined[name].concat([formats[name]]);
                  }
                } else {
                  merged[name] = [combined[name], formats[name]];
                }
                return merged;
              }, {});
            }
            function normalizeDelta(delta) {
              return delta.reduce(function(delta2, op) {
                if (op.insert === 1) {
                  var attributes = (0, _clone2.default)(op.attributes);
                  delete attributes["image"];
                  return delta2.insert({ image: op.attributes.image }, attributes);
                }
                if (op.attributes != null && (op.attributes.list === true || op.attributes.bullet === true)) {
                  op = (0, _clone2.default)(op);
                  if (op.attributes.list) {
                    op.attributes.list = "ordered";
                  } else {
                    op.attributes.list = "bullet";
                    delete op.attributes.bullet;
                  }
                }
                if (typeof op.insert === "string") {
                  var text2 = op.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                  return delta2.insert(text2, op.attributes);
                }
                return delta2.push(op);
              }, new _quillDelta2.default());
            }
            exports2.default = Editor2;
          },
          /* 15 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.default = exports2.Range = void 0;
            var _slicedToArray = /* @__PURE__ */ function() {
              function sliceIterator(arr, i) {
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e = void 0;
                try {
                  for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                  }
                } catch (err) {
                  _d = true;
                  _e = err;
                } finally {
                  try {
                    if (!_n && _i["return"]) _i["return"]();
                  } finally {
                    if (_d) throw _e;
                  }
                }
                return _arr;
              }
              return function(arr, i) {
                if (Array.isArray(arr)) {
                  return arr;
                } else if (Symbol.iterator in Object(arr)) {
                  return sliceIterator(arr, i);
                } else {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }
              };
            }();
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _parchment = __webpack_require__(0);
            var _parchment2 = _interopRequireDefault(_parchment);
            var _clone = __webpack_require__(21);
            var _clone2 = _interopRequireDefault(_clone);
            var _deepEqual = __webpack_require__(11);
            var _deepEqual2 = _interopRequireDefault(_deepEqual);
            var _emitter3 = __webpack_require__(8);
            var _emitter4 = _interopRequireDefault(_emitter3);
            var _logger = __webpack_require__(10);
            var _logger2 = _interopRequireDefault(_logger);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _toConsumableArray(arr) {
              if (Array.isArray(arr)) {
                for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                  arr2[i] = arr[i];
                }
                return arr2;
              } else {
                return Array.from(arr);
              }
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            var debug = (0, _logger2.default)("quill:selection");
            var Range = function Range2(index) {
              var length3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
              _classCallCheck(this, Range2);
              this.index = index;
              this.length = length3;
            };
            var Selection = function() {
              function Selection2(scroll, emitter) {
                var _this = this;
                _classCallCheck(this, Selection2);
                this.emitter = emitter;
                this.scroll = scroll;
                this.composing = false;
                this.mouseDown = false;
                this.root = this.scroll.domNode;
                this.cursor = _parchment2.default.create("cursor", this);
                this.lastRange = this.savedRange = new Range(0, 0);
                this.handleComposition();
                this.handleDragging();
                this.emitter.listenDOM("selectionchange", document, function() {
                  if (!_this.mouseDown) {
                    setTimeout(_this.update.bind(_this, _emitter4.default.sources.USER), 1);
                  }
                });
                this.emitter.on(_emitter4.default.events.EDITOR_CHANGE, function(type, delta) {
                  if (type === _emitter4.default.events.TEXT_CHANGE && delta.length() > 0) {
                    _this.update(_emitter4.default.sources.SILENT);
                  }
                });
                this.emitter.on(_emitter4.default.events.SCROLL_BEFORE_UPDATE, function() {
                  if (!_this.hasFocus()) return;
                  var native = _this.getNativeRange();
                  if (native == null) return;
                  if (native.start.node === _this.cursor.textNode) return;
                  _this.emitter.once(_emitter4.default.events.SCROLL_UPDATE, function() {
                    try {
                      _this.setNativeRange(native.start.node, native.start.offset, native.end.node, native.end.offset);
                    } catch (ignored) {
                    }
                  });
                });
                this.emitter.on(_emitter4.default.events.SCROLL_OPTIMIZE, function(mutations, context) {
                  if (context.range) {
                    var _context$range = context.range, startNode = _context$range.startNode, startOffset = _context$range.startOffset, endNode = _context$range.endNode, endOffset = _context$range.endOffset;
                    _this.setNativeRange(startNode, startOffset, endNode, endOffset);
                  }
                });
                this.update(_emitter4.default.sources.SILENT);
              }
              _createClass(Selection2, [{
                key: "handleComposition",
                value: function handleComposition() {
                  var _this2 = this;
                  this.root.addEventListener("compositionstart", function() {
                    _this2.composing = true;
                  });
                  this.root.addEventListener("compositionend", function() {
                    _this2.composing = false;
                    if (_this2.cursor.parent) {
                      var range = _this2.cursor.restore();
                      if (!range) return;
                      setTimeout(function() {
                        _this2.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);
                      }, 1);
                    }
                  });
                }
              }, {
                key: "handleDragging",
                value: function handleDragging() {
                  var _this3 = this;
                  this.emitter.listenDOM("mousedown", document.body, function() {
                    _this3.mouseDown = true;
                  });
                  this.emitter.listenDOM("mouseup", document.body, function() {
                    _this3.mouseDown = false;
                    _this3.update(_emitter4.default.sources.USER);
                  });
                }
              }, {
                key: "focus",
                value: function focus() {
                  if (this.hasFocus()) return;
                  this.root.focus();
                  this.setRange(this.savedRange);
                }
              }, {
                key: "format",
                value: function format(_format, value) {
                  if (this.scroll.whitelist != null && !this.scroll.whitelist[_format]) return;
                  this.scroll.update();
                  var nativeRange = this.getNativeRange();
                  if (nativeRange == null || !nativeRange.native.collapsed || _parchment2.default.query(_format, _parchment2.default.Scope.BLOCK)) return;
                  if (nativeRange.start.node !== this.cursor.textNode) {
                    var blot = _parchment2.default.find(nativeRange.start.node, false);
                    if (blot == null) return;
                    if (blot instanceof _parchment2.default.Leaf) {
                      var after = blot.split(nativeRange.start.offset);
                      blot.parent.insertBefore(this.cursor, after);
                    } else {
                      blot.insertBefore(this.cursor, nativeRange.start.node);
                    }
                    this.cursor.attach();
                  }
                  this.cursor.format(_format, value);
                  this.scroll.optimize();
                  this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length);
                  this.update();
                }
              }, {
                key: "getBounds",
                value: function getBounds(index) {
                  var length3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                  var scrollLength = this.scroll.length();
                  index = Math.min(index, scrollLength - 1);
                  length3 = Math.min(index + length3, scrollLength - 1) - index;
                  var node = void 0, _scroll$leaf = this.scroll.leaf(index), _scroll$leaf2 = _slicedToArray(_scroll$leaf, 2), leaf = _scroll$leaf2[0], offset = _scroll$leaf2[1];
                  if (leaf == null) return null;
                  var _leaf$position = leaf.position(offset, true);
                  var _leaf$position2 = _slicedToArray(_leaf$position, 2);
                  node = _leaf$position2[0];
                  offset = _leaf$position2[1];
                  var range = document.createRange();
                  if (length3 > 0) {
                    range.setStart(node, offset);
                    var _scroll$leaf3 = this.scroll.leaf(index + length3);
                    var _scroll$leaf4 = _slicedToArray(_scroll$leaf3, 2);
                    leaf = _scroll$leaf4[0];
                    offset = _scroll$leaf4[1];
                    if (leaf == null) return null;
                    var _leaf$position3 = leaf.position(offset, true);
                    var _leaf$position4 = _slicedToArray(_leaf$position3, 2);
                    node = _leaf$position4[0];
                    offset = _leaf$position4[1];
                    range.setEnd(node, offset);
                    return range.getBoundingClientRect();
                  } else {
                    var side = "left";
                    var rect = void 0;
                    if (node instanceof Text) {
                      if (offset < node.data.length) {
                        range.setStart(node, offset);
                        range.setEnd(node, offset + 1);
                      } else {
                        range.setStart(node, offset - 1);
                        range.setEnd(node, offset);
                        side = "right";
                      }
                      rect = range.getBoundingClientRect();
                    } else {
                      rect = leaf.domNode.getBoundingClientRect();
                      if (offset > 0) side = "right";
                    }
                    return {
                      bottom: rect.top + rect.height,
                      height: rect.height,
                      left: rect[side],
                      right: rect[side],
                      top: rect.top,
                      width: 0
                    };
                  }
                }
              }, {
                key: "getNativeRange",
                value: function getNativeRange() {
                  var selection = document.getSelection();
                  if (selection == null || selection.rangeCount <= 0) return null;
                  var nativeRange = selection.getRangeAt(0);
                  if (nativeRange == null) return null;
                  var range = this.normalizeNative(nativeRange);
                  debug.info("getNativeRange", range);
                  return range;
                }
              }, {
                key: "getRange",
                value: function getRange() {
                  var normalized = this.getNativeRange();
                  if (normalized == null) return [null, null];
                  var range = this.normalizedToRange(normalized);
                  return [range, normalized];
                }
              }, {
                key: "hasFocus",
                value: function hasFocus() {
                  return document.activeElement === this.root;
                }
              }, {
                key: "normalizedToRange",
                value: function normalizedToRange(range) {
                  var _this4 = this;
                  var positions = [[range.start.node, range.start.offset]];
                  if (!range.native.collapsed) {
                    positions.push([range.end.node, range.end.offset]);
                  }
                  var indexes = positions.map(function(position) {
                    var _position = _slicedToArray(position, 2), node = _position[0], offset = _position[1];
                    var blot = _parchment2.default.find(node, true);
                    var index = blot.offset(_this4.scroll);
                    if (offset === 0) {
                      return index;
                    } else if (blot instanceof _parchment2.default.Container) {
                      return index + blot.length();
                    } else {
                      return index + blot.index(node, offset);
                    }
                  });
                  var end = Math.min(Math.max.apply(Math, _toConsumableArray(indexes)), this.scroll.length() - 1);
                  var start = Math.min.apply(Math, [end].concat(_toConsumableArray(indexes)));
                  return new Range(start, end - start);
                }
              }, {
                key: "normalizeNative",
                value: function normalizeNative(nativeRange) {
                  if (!contains(this.root, nativeRange.startContainer) || !nativeRange.collapsed && !contains(this.root, nativeRange.endContainer)) {
                    return null;
                  }
                  var range = {
                    start: { node: nativeRange.startContainer, offset: nativeRange.startOffset },
                    end: { node: nativeRange.endContainer, offset: nativeRange.endOffset },
                    native: nativeRange
                  };
                  [range.start, range.end].forEach(function(position) {
                    var node = position.node, offset = position.offset;
                    while (!(node instanceof Text) && node.childNodes.length > 0) {
                      if (node.childNodes.length > offset) {
                        node = node.childNodes[offset];
                        offset = 0;
                      } else if (node.childNodes.length === offset) {
                        node = node.lastChild;
                        offset = node instanceof Text ? node.data.length : node.childNodes.length + 1;
                      } else {
                        break;
                      }
                    }
                    position.node = node, position.offset = offset;
                  });
                  return range;
                }
              }, {
                key: "rangeToNative",
                value: function rangeToNative(range) {
                  var _this5 = this;
                  var indexes = range.collapsed ? [range.index] : [range.index, range.index + range.length];
                  var args2 = [];
                  var scrollLength = this.scroll.length();
                  indexes.forEach(function(index, i) {
                    index = Math.min(scrollLength - 1, index);
                    var node = void 0, _scroll$leaf5 = _this5.scroll.leaf(index), _scroll$leaf6 = _slicedToArray(_scroll$leaf5, 2), leaf = _scroll$leaf6[0], offset = _scroll$leaf6[1];
                    var _leaf$position5 = leaf.position(offset, i !== 0);
                    var _leaf$position6 = _slicedToArray(_leaf$position5, 2);
                    node = _leaf$position6[0];
                    offset = _leaf$position6[1];
                    args2.push(node, offset);
                  });
                  if (args2.length < 2) {
                    args2 = args2.concat(args2);
                  }
                  return args2;
                }
              }, {
                key: "scrollIntoView",
                value: function scrollIntoView(scrollingContainer) {
                  var range = this.lastRange;
                  if (range == null) return;
                  var bounds = this.getBounds(range.index, range.length);
                  if (bounds == null) return;
                  var limit = this.scroll.length() - 1;
                  var _scroll$line = this.scroll.line(Math.min(range.index, limit)), _scroll$line2 = _slicedToArray(_scroll$line, 1), first = _scroll$line2[0];
                  var last2 = first;
                  if (range.length > 0) {
                    var _scroll$line3 = this.scroll.line(Math.min(range.index + range.length, limit));
                    var _scroll$line4 = _slicedToArray(_scroll$line3, 1);
                    last2 = _scroll$line4[0];
                  }
                  if (first == null || last2 == null) return;
                  var scrollBounds = scrollingContainer.getBoundingClientRect();
                  if (bounds.top < scrollBounds.top) {
                    scrollingContainer.scrollTop -= scrollBounds.top - bounds.top;
                  } else if (bounds.bottom > scrollBounds.bottom) {
                    scrollingContainer.scrollTop += bounds.bottom - scrollBounds.bottom;
                  }
                }
              }, {
                key: "setNativeRange",
                value: function setNativeRange(startNode, startOffset) {
                  var endNode = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : startNode;
                  var endOffset = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : startOffset;
                  var force = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
                  debug.info("setNativeRange", startNode, startOffset, endNode, endOffset);
                  if (startNode != null && (this.root.parentNode == null || startNode.parentNode == null || endNode.parentNode == null)) {
                    return;
                  }
                  var selection = document.getSelection();
                  if (selection == null) return;
                  if (startNode != null) {
                    if (!this.hasFocus()) this.root.focus();
                    var native = (this.getNativeRange() || {}).native;
                    if (native == null || force || startNode !== native.startContainer || startOffset !== native.startOffset || endNode !== native.endContainer || endOffset !== native.endOffset) {
                      if (startNode.tagName == "BR") {
                        startOffset = [].indexOf.call(startNode.parentNode.childNodes, startNode);
                        startNode = startNode.parentNode;
                      }
                      if (endNode.tagName == "BR") {
                        endOffset = [].indexOf.call(endNode.parentNode.childNodes, endNode);
                        endNode = endNode.parentNode;
                      }
                      var range = document.createRange();
                      range.setStart(startNode, startOffset);
                      range.setEnd(endNode, endOffset);
                      selection.removeAllRanges();
                      selection.addRange(range);
                    }
                  } else {
                    selection.removeAllRanges();
                    this.root.blur();
                    document.body.focus();
                  }
                }
              }, {
                key: "setRange",
                value: function setRange(range) {
                  var force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                  var source = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _emitter4.default.sources.API;
                  if (typeof force === "string") {
                    source = force;
                    force = false;
                  }
                  debug.info("setRange", range);
                  if (range != null) {
                    var args2 = this.rangeToNative(range);
                    this.setNativeRange.apply(this, _toConsumableArray(args2).concat([force]));
                  } else {
                    this.setNativeRange(null);
                  }
                  this.update(source);
                }
              }, {
                key: "update",
                value: function update() {
                  var source = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _emitter4.default.sources.USER;
                  var oldRange = this.lastRange;
                  var _getRange = this.getRange(), _getRange2 = _slicedToArray(_getRange, 2), lastRange = _getRange2[0], nativeRange = _getRange2[1];
                  this.lastRange = lastRange;
                  if (this.lastRange != null) {
                    this.savedRange = this.lastRange;
                  }
                  if (!(0, _deepEqual2.default)(oldRange, this.lastRange)) {
                    var _emitter;
                    if (!this.composing && nativeRange != null && nativeRange.native.collapsed && nativeRange.start.node !== this.cursor.textNode) {
                      this.cursor.restore();
                    }
                    var args2 = [_emitter4.default.events.SELECTION_CHANGE, (0, _clone2.default)(this.lastRange), (0, _clone2.default)(oldRange), source];
                    (_emitter = this.emitter).emit.apply(_emitter, [_emitter4.default.events.EDITOR_CHANGE].concat(args2));
                    if (source !== _emitter4.default.sources.SILENT) {
                      var _emitter2;
                      (_emitter2 = this.emitter).emit.apply(_emitter2, args2);
                    }
                  }
                }
              }]);
              return Selection2;
            }();
            function contains(parent, descendant) {
              try {
                descendant.parentNode;
              } catch (e) {
                return false;
              }
              if (descendant instanceof Text) {
                descendant = descendant.parentNode;
              }
              return parent.contains(descendant);
            }
            exports2.Range = Range;
            exports2.default = Selection;
          },
          /* 16 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _get = function get(object, property, receiver) {
              if (object === null) object = Function.prototype;
              var desc = Object.getOwnPropertyDescriptor(object, property);
              if (desc === void 0) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                  return void 0;
                } else {
                  return get(parent, property, receiver);
                }
              } else if ("value" in desc) {
                return desc.value;
              } else {
                var getter = desc.get;
                if (getter === void 0) {
                  return void 0;
                }
                return getter.call(receiver);
              }
            };
            var _parchment = __webpack_require__(0);
            var _parchment2 = _interopRequireDefault(_parchment);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var Break = function(_Parchment$Embed) {
              _inherits(Break2, _Parchment$Embed);
              function Break2() {
                _classCallCheck(this, Break2);
                return _possibleConstructorReturn(this, (Break2.__proto__ || Object.getPrototypeOf(Break2)).apply(this, arguments));
              }
              _createClass(Break2, [{
                key: "insertInto",
                value: function insertInto(parent, ref) {
                  if (parent.children.length === 0) {
                    _get(Break2.prototype.__proto__ || Object.getPrototypeOf(Break2.prototype), "insertInto", this).call(this, parent, ref);
                  } else {
                    this.remove();
                  }
                }
              }, {
                key: "length",
                value: function length3() {
                  return 0;
                }
              }, {
                key: "value",
                value: function value() {
                  return "";
                }
              }], [{
                key: "value",
                value: function value() {
                  return void 0;
                }
              }]);
              return Break2;
            }(_parchment2.default.Embed);
            Break.blotName = "break";
            Break.tagName = "BR";
            exports2.default = Break;
          },
          /* 17 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function() {
              var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
                d.__proto__ = b;
              } || function(d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
              };
              return function(d, b) {
                extendStatics(d, b);
                function __() {
                  this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
            }();
            Object.defineProperty(exports2, "__esModule", { value: true });
            var linked_list_1 = __webpack_require__(44);
            var shadow_1 = __webpack_require__(30);
            var Registry = __webpack_require__(1);
            var ContainerBlot = (
              /** @class */
              function(_super) {
                __extends(ContainerBlot2, _super);
                function ContainerBlot2(domNode) {
                  var _this = _super.call(this, domNode) || this;
                  _this.build();
                  return _this;
                }
                ContainerBlot2.prototype.appendChild = function(other) {
                  this.insertBefore(other);
                };
                ContainerBlot2.prototype.attach = function() {
                  _super.prototype.attach.call(this);
                  this.children.forEach(function(child) {
                    child.attach();
                  });
                };
                ContainerBlot2.prototype.build = function() {
                  var _this = this;
                  this.children = new linked_list_1.default();
                  [].slice.call(this.domNode.childNodes).reverse().forEach(function(node) {
                    try {
                      var child = makeBlot(node);
                      _this.insertBefore(child, _this.children.head || void 0);
                    } catch (err) {
                      if (err instanceof Registry.ParchmentError)
                        return;
                      else
                        throw err;
                    }
                  });
                };
                ContainerBlot2.prototype.deleteAt = function(index, length3) {
                  if (index === 0 && length3 === this.length()) {
                    return this.remove();
                  }
                  this.children.forEachAt(index, length3, function(child, offset, length4) {
                    child.deleteAt(offset, length4);
                  });
                };
                ContainerBlot2.prototype.descendant = function(criteria, index) {
                  var _a = this.children.find(index), child = _a[0], offset = _a[1];
                  if (criteria.blotName == null && criteria(child) || criteria.blotName != null && child instanceof criteria) {
                    return [child, offset];
                  } else if (child instanceof ContainerBlot2) {
                    return child.descendant(criteria, offset);
                  } else {
                    return [null, -1];
                  }
                };
                ContainerBlot2.prototype.descendants = function(criteria, index, length3) {
                  if (index === void 0) {
                    index = 0;
                  }
                  if (length3 === void 0) {
                    length3 = Number.MAX_VALUE;
                  }
                  var descendants = [];
                  var lengthLeft = length3;
                  this.children.forEachAt(index, length3, function(child, index2, length4) {
                    if (criteria.blotName == null && criteria(child) || criteria.blotName != null && child instanceof criteria) {
                      descendants.push(child);
                    }
                    if (child instanceof ContainerBlot2) {
                      descendants = descendants.concat(child.descendants(criteria, index2, lengthLeft));
                    }
                    lengthLeft -= length4;
                  });
                  return descendants;
                };
                ContainerBlot2.prototype.detach = function() {
                  this.children.forEach(function(child) {
                    child.detach();
                  });
                  _super.prototype.detach.call(this);
                };
                ContainerBlot2.prototype.formatAt = function(index, length3, name, value) {
                  this.children.forEachAt(index, length3, function(child, offset, length4) {
                    child.formatAt(offset, length4, name, value);
                  });
                };
                ContainerBlot2.prototype.insertAt = function(index, value, def) {
                  var _a = this.children.find(index), child = _a[0], offset = _a[1];
                  if (child) {
                    child.insertAt(offset, value, def);
                  } else {
                    var blot = def == null ? Registry.create("text", value) : Registry.create(value, def);
                    this.appendChild(blot);
                  }
                };
                ContainerBlot2.prototype.insertBefore = function(childBlot, refBlot) {
                  if (this.statics.allowedChildren != null && !this.statics.allowedChildren.some(function(child) {
                    return childBlot instanceof child;
                  })) {
                    throw new Registry.ParchmentError("Cannot insert " + childBlot.statics.blotName + " into " + this.statics.blotName);
                  }
                  childBlot.insertInto(this, refBlot);
                };
                ContainerBlot2.prototype.length = function() {
                  return this.children.reduce(function(memo, child) {
                    return memo + child.length();
                  }, 0);
                };
                ContainerBlot2.prototype.moveChildren = function(targetParent, refNode) {
                  this.children.forEach(function(child) {
                    targetParent.insertBefore(child, refNode);
                  });
                };
                ContainerBlot2.prototype.optimize = function(context) {
                  _super.prototype.optimize.call(this, context);
                  if (this.children.length === 0) {
                    if (this.statics.defaultChild != null) {
                      var child = Registry.create(this.statics.defaultChild);
                      this.appendChild(child);
                      child.optimize(context);
                    } else {
                      this.remove();
                    }
                  }
                };
                ContainerBlot2.prototype.path = function(index, inclusive) {
                  if (inclusive === void 0) {
                    inclusive = false;
                  }
                  var _a = this.children.find(index, inclusive), child = _a[0], offset = _a[1];
                  var position = [[this, index]];
                  if (child instanceof ContainerBlot2) {
                    return position.concat(child.path(offset, inclusive));
                  } else if (child != null) {
                    position.push([child, offset]);
                  }
                  return position;
                };
                ContainerBlot2.prototype.removeChild = function(child) {
                  this.children.remove(child);
                };
                ContainerBlot2.prototype.replace = function(target) {
                  if (target instanceof ContainerBlot2) {
                    target.moveChildren(this);
                  }
                  _super.prototype.replace.call(this, target);
                };
                ContainerBlot2.prototype.split = function(index, force) {
                  if (force === void 0) {
                    force = false;
                  }
                  if (!force) {
                    if (index === 0)
                      return this;
                    if (index === this.length())
                      return this.next;
                  }
                  var after = this.clone();
                  this.parent.insertBefore(after, this.next);
                  this.children.forEachAt(index, this.length(), function(child, offset, length3) {
                    child = child.split(offset, force);
                    after.appendChild(child);
                  });
                  return after;
                };
                ContainerBlot2.prototype.unwrap = function() {
                  this.moveChildren(this.parent, this.next);
                  this.remove();
                };
                ContainerBlot2.prototype.update = function(mutations, context) {
                  var _this = this;
                  var addedNodes = [];
                  var removedNodes = [];
                  mutations.forEach(function(mutation) {
                    if (mutation.target === _this.domNode && mutation.type === "childList") {
                      addedNodes.push.apply(addedNodes, mutation.addedNodes);
                      removedNodes.push.apply(removedNodes, mutation.removedNodes);
                    }
                  });
                  removedNodes.forEach(function(node) {
                    if (node.parentNode != null && // @ts-ignore
                    node.tagName !== "IFRAME" && document.body.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY) {
                      return;
                    }
                    var blot = Registry.find(node);
                    if (blot == null)
                      return;
                    if (blot.domNode.parentNode == null || blot.domNode.parentNode === _this.domNode) {
                      blot.detach();
                    }
                  });
                  addedNodes.filter(function(node) {
                    return node.parentNode == _this.domNode;
                  }).sort(function(a, b) {
                    if (a === b)
                      return 0;
                    if (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) {
                      return 1;
                    }
                    return -1;
                  }).forEach(function(node) {
                    var refBlot = null;
                    if (node.nextSibling != null) {
                      refBlot = Registry.find(node.nextSibling);
                    }
                    var blot = makeBlot(node);
                    if (blot.next != refBlot || blot.next == null) {
                      if (blot.parent != null) {
                        blot.parent.removeChild(_this);
                      }
                      _this.insertBefore(blot, refBlot || void 0);
                    }
                  });
                };
                return ContainerBlot2;
              }(shadow_1.default)
            );
            function makeBlot(node) {
              var blot = Registry.find(node);
              if (blot == null) {
                try {
                  blot = Registry.create(node);
                } catch (e) {
                  blot = Registry.create(Registry.Scope.INLINE);
                  [].slice.call(node.childNodes).forEach(function(child) {
                    blot.domNode.appendChild(child);
                  });
                  if (node.parentNode) {
                    node.parentNode.replaceChild(blot.domNode, node);
                  }
                  blot.attach();
                }
              }
              return blot;
            }
            exports2.default = ContainerBlot;
          },
          /* 18 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function() {
              var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
                d.__proto__ = b;
              } || function(d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
              };
              return function(d, b) {
                extendStatics(d, b);
                function __() {
                  this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
            }();
            Object.defineProperty(exports2, "__esModule", { value: true });
            var attributor_1 = __webpack_require__(12);
            var store_1 = __webpack_require__(31);
            var container_1 = __webpack_require__(17);
            var Registry = __webpack_require__(1);
            var FormatBlot = (
              /** @class */
              function(_super) {
                __extends(FormatBlot2, _super);
                function FormatBlot2(domNode) {
                  var _this = _super.call(this, domNode) || this;
                  _this.attributes = new store_1.default(_this.domNode);
                  return _this;
                }
                FormatBlot2.formats = function(domNode) {
                  if (typeof this.tagName === "string") {
                    return true;
                  } else if (Array.isArray(this.tagName)) {
                    return domNode.tagName.toLowerCase();
                  }
                  return void 0;
                };
                FormatBlot2.prototype.format = function(name, value) {
                  var format = Registry.query(name);
                  if (format instanceof attributor_1.default) {
                    this.attributes.attribute(format, value);
                  } else if (value) {
                    if (format != null && (name !== this.statics.blotName || this.formats()[name] !== value)) {
                      this.replaceWith(name, value);
                    }
                  }
                };
                FormatBlot2.prototype.formats = function() {
                  var formats = this.attributes.values();
                  var format = this.statics.formats(this.domNode);
                  if (format != null) {
                    formats[this.statics.blotName] = format;
                  }
                  return formats;
                };
                FormatBlot2.prototype.replaceWith = function(name, value) {
                  var replacement = _super.prototype.replaceWith.call(this, name, value);
                  this.attributes.copy(replacement);
                  return replacement;
                };
                FormatBlot2.prototype.update = function(mutations, context) {
                  var _this = this;
                  _super.prototype.update.call(this, mutations, context);
                  if (mutations.some(function(mutation) {
                    return mutation.target === _this.domNode && mutation.type === "attributes";
                  })) {
                    this.attributes.build();
                  }
                };
                FormatBlot2.prototype.wrap = function(name, value) {
                  var wrapper = _super.prototype.wrap.call(this, name, value);
                  if (wrapper instanceof FormatBlot2 && wrapper.statics.scope === this.statics.scope) {
                    this.attributes.move(wrapper);
                  }
                  return wrapper;
                };
                return FormatBlot2;
              }(container_1.default)
            );
            exports2.default = FormatBlot;
          },
          /* 19 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function() {
              var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
                d.__proto__ = b;
              } || function(d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
              };
              return function(d, b) {
                extendStatics(d, b);
                function __() {
                  this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
            }();
            Object.defineProperty(exports2, "__esModule", { value: true });
            var shadow_1 = __webpack_require__(30);
            var Registry = __webpack_require__(1);
            var LeafBlot = (
              /** @class */
              function(_super) {
                __extends(LeafBlot2, _super);
                function LeafBlot2() {
                  return _super !== null && _super.apply(this, arguments) || this;
                }
                LeafBlot2.value = function(domNode) {
                  return true;
                };
                LeafBlot2.prototype.index = function(node, offset) {
                  if (this.domNode === node || this.domNode.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY) {
                    return Math.min(offset, 1);
                  }
                  return -1;
                };
                LeafBlot2.prototype.position = function(index, inclusive) {
                  var offset = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
                  if (index > 0)
                    offset += 1;
                  return [this.parent.domNode, offset];
                };
                LeafBlot2.prototype.value = function() {
                  var _a;
                  return _a = {}, _a[this.statics.blotName] = this.statics.value(this.domNode) || true, _a;
                };
                LeafBlot2.scope = Registry.Scope.INLINE_BLOT;
                return LeafBlot2;
              }(shadow_1.default)
            );
            exports2.default = LeafBlot;
          },
          /* 20 */
          /***/
          function(module2, exports2, __webpack_require__) {
            var equal = __webpack_require__(11);
            var extend = __webpack_require__(3);
            var lib = {
              attributes: {
                compose: function(a, b, keepNull) {
                  if (typeof a !== "object") a = {};
                  if (typeof b !== "object") b = {};
                  var attributes = extend(true, {}, b);
                  if (!keepNull) {
                    attributes = Object.keys(attributes).reduce(function(copy2, key2) {
                      if (attributes[key2] != null) {
                        copy2[key2] = attributes[key2];
                      }
                      return copy2;
                    }, {});
                  }
                  for (var key in a) {
                    if (a[key] !== void 0 && b[key] === void 0) {
                      attributes[key] = a[key];
                    }
                  }
                  return Object.keys(attributes).length > 0 ? attributes : void 0;
                },
                diff: function(a, b) {
                  if (typeof a !== "object") a = {};
                  if (typeof b !== "object") b = {};
                  var attributes = Object.keys(a).concat(Object.keys(b)).reduce(function(attributes2, key) {
                    if (!equal(a[key], b[key])) {
                      attributes2[key] = b[key] === void 0 ? null : b[key];
                    }
                    return attributes2;
                  }, {});
                  return Object.keys(attributes).length > 0 ? attributes : void 0;
                },
                transform: function(a, b, priority) {
                  if (typeof a !== "object") return b;
                  if (typeof b !== "object") return void 0;
                  if (!priority) return b;
                  var attributes = Object.keys(b).reduce(function(attributes2, key) {
                    if (a[key] === void 0) attributes2[key] = b[key];
                    return attributes2;
                  }, {});
                  return Object.keys(attributes).length > 0 ? attributes : void 0;
                }
              },
              iterator: function(ops) {
                return new Iterator(ops);
              },
              length: function(op) {
                if (typeof op["delete"] === "number") {
                  return op["delete"];
                } else if (typeof op.retain === "number") {
                  return op.retain;
                } else {
                  return typeof op.insert === "string" ? op.insert.length : 1;
                }
              }
            };
            function Iterator(ops) {
              this.ops = ops;
              this.index = 0;
              this.offset = 0;
            }
            ;
            Iterator.prototype.hasNext = function() {
              return this.peekLength() < Infinity;
            };
            Iterator.prototype.next = function(length3) {
              if (!length3) length3 = Infinity;
              var nextOp = this.ops[this.index];
              if (nextOp) {
                var offset = this.offset;
                var opLength = lib.length(nextOp);
                if (length3 >= opLength - offset) {
                  length3 = opLength - offset;
                  this.index += 1;
                  this.offset = 0;
                } else {
                  this.offset += length3;
                }
                if (typeof nextOp["delete"] === "number") {
                  return { "delete": length3 };
                } else {
                  var retOp = {};
                  if (nextOp.attributes) {
                    retOp.attributes = nextOp.attributes;
                  }
                  if (typeof nextOp.retain === "number") {
                    retOp.retain = length3;
                  } else if (typeof nextOp.insert === "string") {
                    retOp.insert = nextOp.insert.substr(offset, length3);
                  } else {
                    retOp.insert = nextOp.insert;
                  }
                  return retOp;
                }
              } else {
                return { retain: Infinity };
              }
            };
            Iterator.prototype.peek = function() {
              return this.ops[this.index];
            };
            Iterator.prototype.peekLength = function() {
              if (this.ops[this.index]) {
                return lib.length(this.ops[this.index]) - this.offset;
              } else {
                return Infinity;
              }
            };
            Iterator.prototype.peekType = function() {
              if (this.ops[this.index]) {
                if (typeof this.ops[this.index]["delete"] === "number") {
                  return "delete";
                } else if (typeof this.ops[this.index].retain === "number") {
                  return "retain";
                } else {
                  return "insert";
                }
              }
              return "retain";
            };
            Iterator.prototype.rest = function() {
              if (!this.hasNext()) {
                return [];
              } else if (this.offset === 0) {
                return this.ops.slice(this.index);
              } else {
                var offset = this.offset;
                var index = this.index;
                var next = this.next();
                var rest = this.ops.slice(this.index);
                this.offset = offset;
                this.index = index;
                return [next].concat(rest);
              }
            };
            module2.exports = lib;
          },
          /* 21 */
          /***/
          function(module2, exports2) {
            var clone = function() {
              "use strict";
              function _instanceof(obj, type) {
                return type != null && obj instanceof type;
              }
              var nativeMap;
              try {
                nativeMap = Map;
              } catch (_) {
                nativeMap = function() {
                };
              }
              var nativeSet;
              try {
                nativeSet = Set;
              } catch (_) {
                nativeSet = function() {
                };
              }
              var nativePromise;
              try {
                nativePromise = Promise;
              } catch (_) {
                nativePromise = function() {
                };
              }
              function clone2(parent, circular, depth, prototype, includeNonEnumerable) {
                if (typeof circular === "object") {
                  depth = circular.depth;
                  prototype = circular.prototype;
                  includeNonEnumerable = circular.includeNonEnumerable;
                  circular = circular.circular;
                }
                var allParents = [];
                var allChildren = [];
                var useBuffer = typeof Buffer != "undefined";
                if (typeof circular == "undefined")
                  circular = true;
                if (typeof depth == "undefined")
                  depth = Infinity;
                function _clone(parent2, depth2) {
                  if (parent2 === null)
                    return null;
                  if (depth2 === 0)
                    return parent2;
                  var child;
                  var proto;
                  if (typeof parent2 != "object") {
                    return parent2;
                  }
                  if (_instanceof(parent2, nativeMap)) {
                    child = new nativeMap();
                  } else if (_instanceof(parent2, nativeSet)) {
                    child = new nativeSet();
                  } else if (_instanceof(parent2, nativePromise)) {
                    child = new nativePromise(function(resolve, reject) {
                      parent2.then(function(value) {
                        resolve(_clone(value, depth2 - 1));
                      }, function(err) {
                        reject(_clone(err, depth2 - 1));
                      });
                    });
                  } else if (clone2.__isArray(parent2)) {
                    child = [];
                  } else if (clone2.__isRegExp(parent2)) {
                    child = new RegExp(parent2.source, __getRegExpFlags(parent2));
                    if (parent2.lastIndex) child.lastIndex = parent2.lastIndex;
                  } else if (clone2.__isDate(parent2)) {
                    child = new Date(parent2.getTime());
                  } else if (useBuffer && Buffer.isBuffer(parent2)) {
                    if (Buffer.allocUnsafe) {
                      child = Buffer.allocUnsafe(parent2.length);
                    } else {
                      child = new Buffer(parent2.length);
                    }
                    parent2.copy(child);
                    return child;
                  } else if (_instanceof(parent2, Error)) {
                    child = Object.create(parent2);
                  } else {
                    if (typeof prototype == "undefined") {
                      proto = Object.getPrototypeOf(parent2);
                      child = Object.create(proto);
                    } else {
                      child = Object.create(prototype);
                      proto = prototype;
                    }
                  }
                  if (circular) {
                    var index = allParents.indexOf(parent2);
                    if (index != -1) {
                      return allChildren[index];
                    }
                    allParents.push(parent2);
                    allChildren.push(child);
                  }
                  if (_instanceof(parent2, nativeMap)) {
                    parent2.forEach(function(value, key) {
                      var keyChild = _clone(key, depth2 - 1);
                      var valueChild = _clone(value, depth2 - 1);
                      child.set(keyChild, valueChild);
                    });
                  }
                  if (_instanceof(parent2, nativeSet)) {
                    parent2.forEach(function(value) {
                      var entryChild = _clone(value, depth2 - 1);
                      child.add(entryChild);
                    });
                  }
                  for (var i in parent2) {
                    var attrs;
                    if (proto) {
                      attrs = Object.getOwnPropertyDescriptor(proto, i);
                    }
                    if (attrs && attrs.set == null) {
                      continue;
                    }
                    child[i] = _clone(parent2[i], depth2 - 1);
                  }
                  if (Object.getOwnPropertySymbols) {
                    var symbols = Object.getOwnPropertySymbols(parent2);
                    for (var i = 0; i < symbols.length; i++) {
                      var symbol = symbols[i];
                      var descriptor = Object.getOwnPropertyDescriptor(parent2, symbol);
                      if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
                        continue;
                      }
                      child[symbol] = _clone(parent2[symbol], depth2 - 1);
                      if (!descriptor.enumerable) {
                        Object.defineProperty(child, symbol, {
                          enumerable: false
                        });
                      }
                    }
                  }
                  if (includeNonEnumerable) {
                    var allPropertyNames = Object.getOwnPropertyNames(parent2);
                    for (var i = 0; i < allPropertyNames.length; i++) {
                      var propertyName = allPropertyNames[i];
                      var descriptor = Object.getOwnPropertyDescriptor(parent2, propertyName);
                      if (descriptor && descriptor.enumerable) {
                        continue;
                      }
                      child[propertyName] = _clone(parent2[propertyName], depth2 - 1);
                      Object.defineProperty(child, propertyName, {
                        enumerable: false
                      });
                    }
                  }
                  return child;
                }
                return _clone(parent, depth);
              }
              clone2.clonePrototype = function clonePrototype(parent) {
                if (parent === null)
                  return null;
                var c = function() {
                };
                c.prototype = parent;
                return new c();
              };
              function __objToStr(o) {
                return Object.prototype.toString.call(o);
              }
              clone2.__objToStr = __objToStr;
              function __isDate(o) {
                return typeof o === "object" && __objToStr(o) === "[object Date]";
              }
              clone2.__isDate = __isDate;
              function __isArray(o) {
                return typeof o === "object" && __objToStr(o) === "[object Array]";
              }
              clone2.__isArray = __isArray;
              function __isRegExp(o) {
                return typeof o === "object" && __objToStr(o) === "[object RegExp]";
              }
              clone2.__isRegExp = __isRegExp;
              function __getRegExpFlags(re) {
                var flags = "";
                if (re.global) flags += "g";
                if (re.ignoreCase) flags += "i";
                if (re.multiline) flags += "m";
                return flags;
              }
              clone2.__getRegExpFlags = __getRegExpFlags;
              return clone2;
            }();
            if (typeof module2 === "object" && module2.exports) {
              module2.exports = clone;
            }
          },
          /* 22 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _slicedToArray = /* @__PURE__ */ function() {
              function sliceIterator(arr, i) {
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e = void 0;
                try {
                  for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                  }
                } catch (err) {
                  _d = true;
                  _e = err;
                } finally {
                  try {
                    if (!_n && _i["return"]) _i["return"]();
                  } finally {
                    if (_d) throw _e;
                  }
                }
                return _arr;
              }
              return function(arr, i) {
                if (Array.isArray(arr)) {
                  return arr;
                } else if (Symbol.iterator in Object(arr)) {
                  return sliceIterator(arr, i);
                } else {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }
              };
            }();
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _get = function get(object, property, receiver) {
              if (object === null) object = Function.prototype;
              var desc = Object.getOwnPropertyDescriptor(object, property);
              if (desc === void 0) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                  return void 0;
                } else {
                  return get(parent, property, receiver);
                }
              } else if ("value" in desc) {
                return desc.value;
              } else {
                var getter = desc.get;
                if (getter === void 0) {
                  return void 0;
                }
                return getter.call(receiver);
              }
            };
            var _parchment = __webpack_require__(0);
            var _parchment2 = _interopRequireDefault(_parchment);
            var _emitter = __webpack_require__(8);
            var _emitter2 = _interopRequireDefault(_emitter);
            var _block = __webpack_require__(4);
            var _block2 = _interopRequireDefault(_block);
            var _break = __webpack_require__(16);
            var _break2 = _interopRequireDefault(_break);
            var _code = __webpack_require__(13);
            var _code2 = _interopRequireDefault(_code);
            var _container = __webpack_require__(25);
            var _container2 = _interopRequireDefault(_container);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            function isLine(blot) {
              return blot instanceof _block2.default || blot instanceof _block.BlockEmbed;
            }
            var Scroll = function(_Parchment$Scroll) {
              _inherits(Scroll2, _Parchment$Scroll);
              function Scroll2(domNode, config) {
                _classCallCheck(this, Scroll2);
                var _this = _possibleConstructorReturn(this, (Scroll2.__proto__ || Object.getPrototypeOf(Scroll2)).call(this, domNode));
                _this.emitter = config.emitter;
                if (Array.isArray(config.whitelist)) {
                  _this.whitelist = config.whitelist.reduce(function(whitelist, format) {
                    whitelist[format] = true;
                    return whitelist;
                  }, {});
                }
                _this.domNode.addEventListener("DOMNodeInserted", function() {
                });
                _this.optimize();
                _this.enable();
                return _this;
              }
              _createClass(Scroll2, [{
                key: "batchStart",
                value: function batchStart() {
                  this.batch = true;
                }
              }, {
                key: "batchEnd",
                value: function batchEnd() {
                  this.batch = false;
                  this.optimize();
                }
              }, {
                key: "deleteAt",
                value: function deleteAt(index, length3) {
                  var _line = this.line(index), _line2 = _slicedToArray(_line, 2), first = _line2[0], offset = _line2[1];
                  var _line3 = this.line(index + length3), _line4 = _slicedToArray(_line3, 1), last2 = _line4[0];
                  _get(Scroll2.prototype.__proto__ || Object.getPrototypeOf(Scroll2.prototype), "deleteAt", this).call(this, index, length3);
                  if (last2 != null && first !== last2 && offset > 0) {
                    if (first instanceof _block.BlockEmbed || last2 instanceof _block.BlockEmbed) {
                      this.optimize();
                      return;
                    }
                    if (first instanceof _code2.default) {
                      var newlineIndex = first.newlineIndex(first.length(), true);
                      if (newlineIndex > -1) {
                        first = first.split(newlineIndex + 1);
                        if (first === last2) {
                          this.optimize();
                          return;
                        }
                      }
                    } else if (last2 instanceof _code2.default) {
                      var _newlineIndex = last2.newlineIndex(0);
                      if (_newlineIndex > -1) {
                        last2.split(_newlineIndex + 1);
                      }
                    }
                    var ref = last2.children.head instanceof _break2.default ? null : last2.children.head;
                    first.moveChildren(last2, ref);
                    first.remove();
                  }
                  this.optimize();
                }
              }, {
                key: "enable",
                value: function enable() {
                  var enabled = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                  this.domNode.setAttribute("contenteditable", enabled);
                }
              }, {
                key: "formatAt",
                value: function formatAt(index, length3, format, value) {
                  if (this.whitelist != null && !this.whitelist[format]) return;
                  _get(Scroll2.prototype.__proto__ || Object.getPrototypeOf(Scroll2.prototype), "formatAt", this).call(this, index, length3, format, value);
                  this.optimize();
                }
              }, {
                key: "insertAt",
                value: function insertAt(index, value, def) {
                  if (def != null && this.whitelist != null && !this.whitelist[value]) return;
                  if (index >= this.length()) {
                    if (def == null || _parchment2.default.query(value, _parchment2.default.Scope.BLOCK) == null) {
                      var blot = _parchment2.default.create(this.statics.defaultChild);
                      this.appendChild(blot);
                      if (def == null && value.endsWith("\n")) {
                        value = value.slice(0, -1);
                      }
                      blot.insertAt(0, value, def);
                    } else {
                      var embed = _parchment2.default.create(value, def);
                      this.appendChild(embed);
                    }
                  } else {
                    _get(Scroll2.prototype.__proto__ || Object.getPrototypeOf(Scroll2.prototype), "insertAt", this).call(this, index, value, def);
                  }
                  this.optimize();
                }
              }, {
                key: "insertBefore",
                value: function insertBefore(blot, ref) {
                  if (blot.statics.scope === _parchment2.default.Scope.INLINE_BLOT) {
                    var wrapper = _parchment2.default.create(this.statics.defaultChild);
                    wrapper.appendChild(blot);
                    blot = wrapper;
                  }
                  _get(Scroll2.prototype.__proto__ || Object.getPrototypeOf(Scroll2.prototype), "insertBefore", this).call(this, blot, ref);
                }
              }, {
                key: "leaf",
                value: function leaf(index) {
                  return this.path(index).pop() || [null, -1];
                }
              }, {
                key: "line",
                value: function line(index) {
                  if (index === this.length()) {
                    return this.line(index - 1);
                  }
                  return this.descendant(isLine, index);
                }
              }, {
                key: "lines",
                value: function lines() {
                  var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                  var length3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
                  var getLines = function getLines2(blot, index2, length4) {
                    var lines2 = [], lengthLeft = length4;
                    blot.children.forEachAt(index2, length4, function(child, index3, length5) {
                      if (isLine(child)) {
                        lines2.push(child);
                      } else if (child instanceof _parchment2.default.Container) {
                        lines2 = lines2.concat(getLines2(child, index3, lengthLeft));
                      }
                      lengthLeft -= length5;
                    });
                    return lines2;
                  };
                  return getLines(this, index, length3);
                }
              }, {
                key: "optimize",
                value: function optimize() {
                  var mutations = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                  var context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                  if (this.batch === true) return;
                  _get(Scroll2.prototype.__proto__ || Object.getPrototypeOf(Scroll2.prototype), "optimize", this).call(this, mutations, context);
                  if (mutations.length > 0) {
                    this.emitter.emit(_emitter2.default.events.SCROLL_OPTIMIZE, mutations, context);
                  }
                }
              }, {
                key: "path",
                value: function path(index) {
                  return _get(Scroll2.prototype.__proto__ || Object.getPrototypeOf(Scroll2.prototype), "path", this).call(this, index).slice(1);
                }
              }, {
                key: "update",
                value: function update(mutations) {
                  if (this.batch === true) return;
                  var source = _emitter2.default.sources.USER;
                  if (typeof mutations === "string") {
                    source = mutations;
                  }
                  if (!Array.isArray(mutations)) {
                    mutations = this.observer.takeRecords();
                  }
                  if (mutations.length > 0) {
                    this.emitter.emit(_emitter2.default.events.SCROLL_BEFORE_UPDATE, source, mutations);
                  }
                  _get(Scroll2.prototype.__proto__ || Object.getPrototypeOf(Scroll2.prototype), "update", this).call(this, mutations.concat([]));
                  if (mutations.length > 0) {
                    this.emitter.emit(_emitter2.default.events.SCROLL_UPDATE, source, mutations);
                  }
                }
              }]);
              return Scroll2;
            }(_parchment2.default.Scroll);
            Scroll.blotName = "scroll";
            Scroll.className = "ql-editor";
            Scroll.tagName = "DIV";
            Scroll.defaultChild = "block";
            Scroll.allowedChildren = [_block2.default, _block.BlockEmbed, _container2.default];
            exports2.default = Scroll;
          },
          /* 23 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.SHORTKEY = exports2.default = void 0;
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
              return typeof obj;
            } : function(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            var _slicedToArray = /* @__PURE__ */ function() {
              function sliceIterator(arr, i) {
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e = void 0;
                try {
                  for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                  }
                } catch (err) {
                  _d = true;
                  _e = err;
                } finally {
                  try {
                    if (!_n && _i["return"]) _i["return"]();
                  } finally {
                    if (_d) throw _e;
                  }
                }
                return _arr;
              }
              return function(arr, i) {
                if (Array.isArray(arr)) {
                  return arr;
                } else if (Symbol.iterator in Object(arr)) {
                  return sliceIterator(arr, i);
                } else {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }
              };
            }();
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _clone = __webpack_require__(21);
            var _clone2 = _interopRequireDefault(_clone);
            var _deepEqual = __webpack_require__(11);
            var _deepEqual2 = _interopRequireDefault(_deepEqual);
            var _extend = __webpack_require__(3);
            var _extend2 = _interopRequireDefault(_extend);
            var _quillDelta = __webpack_require__(2);
            var _quillDelta2 = _interopRequireDefault(_quillDelta);
            var _op = __webpack_require__(20);
            var _op2 = _interopRequireDefault(_op);
            var _parchment = __webpack_require__(0);
            var _parchment2 = _interopRequireDefault(_parchment);
            var _quill = __webpack_require__(5);
            var _quill2 = _interopRequireDefault(_quill);
            var _logger = __webpack_require__(10);
            var _logger2 = _interopRequireDefault(_logger);
            var _module = __webpack_require__(9);
            var _module2 = _interopRequireDefault(_module);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _defineProperty(obj, key, value) {
              if (key in obj) {
                Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
              } else {
                obj[key] = value;
              }
              return obj;
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var debug = (0, _logger2.default)("quill:keyboard");
            var SHORTKEY = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey";
            var Keyboard = function(_Module) {
              _inherits(Keyboard2, _Module);
              _createClass(Keyboard2, null, [{
                key: "match",
                value: function match(evt, binding) {
                  binding = normalize(binding);
                  if (["altKey", "ctrlKey", "metaKey", "shiftKey"].some(function(key) {
                    return !!binding[key] !== evt[key] && binding[key] !== null;
                  })) {
                    return false;
                  }
                  return binding.key === (evt.which || evt.keyCode);
                }
              }]);
              function Keyboard2(quill, options) {
                _classCallCheck(this, Keyboard2);
                var _this = _possibleConstructorReturn(this, (Keyboard2.__proto__ || Object.getPrototypeOf(Keyboard2)).call(this, quill, options));
                _this.bindings = {};
                Object.keys(_this.options.bindings).forEach(function(name) {
                  if (name === "list autofill" && quill.scroll.whitelist != null && !quill.scroll.whitelist["list"]) {
                    return;
                  }
                  if (_this.options.bindings[name]) {
                    _this.addBinding(_this.options.bindings[name]);
                  }
                });
                _this.addBinding({ key: Keyboard2.keys.ENTER, shiftKey: null }, handleEnter);
                _this.addBinding({ key: Keyboard2.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function() {
                });
                if (/Firefox/i.test(navigator.userAgent)) {
                  _this.addBinding({ key: Keyboard2.keys.BACKSPACE }, { collapsed: true }, handleBackspace);
                  _this.addBinding({ key: Keyboard2.keys.DELETE }, { collapsed: true }, handleDelete);
                } else {
                  _this.addBinding({ key: Keyboard2.keys.BACKSPACE }, { collapsed: true, prefix: /^.?$/ }, handleBackspace);
                  _this.addBinding({ key: Keyboard2.keys.DELETE }, { collapsed: true, suffix: /^.?$/ }, handleDelete);
                }
                _this.addBinding({ key: Keyboard2.keys.BACKSPACE }, { collapsed: false }, handleDeleteRange);
                _this.addBinding({ key: Keyboard2.keys.DELETE }, { collapsed: false }, handleDeleteRange);
                _this.addBinding({ key: Keyboard2.keys.BACKSPACE, altKey: null, ctrlKey: null, metaKey: null, shiftKey: null }, { collapsed: true, offset: 0 }, handleBackspace);
                _this.listen();
                return _this;
              }
              _createClass(Keyboard2, [{
                key: "addBinding",
                value: function addBinding(key) {
                  var context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                  var handler = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                  var binding = normalize(key);
                  if (binding == null || binding.key == null) {
                    return debug.warn("Attempted to add invalid keyboard binding", binding);
                  }
                  if (typeof context === "function") {
                    context = { handler: context };
                  }
                  if (typeof handler === "function") {
                    handler = { handler };
                  }
                  binding = (0, _extend2.default)(binding, context, handler);
                  this.bindings[binding.key] = this.bindings[binding.key] || [];
                  this.bindings[binding.key].push(binding);
                }
              }, {
                key: "listen",
                value: function listen() {
                  var _this2 = this;
                  this.quill.root.addEventListener("keydown", function(evt) {
                    if (evt.defaultPrevented) return;
                    var which = evt.which || evt.keyCode;
                    var bindings = (_this2.bindings[which] || []).filter(function(binding) {
                      return Keyboard2.match(evt, binding);
                    });
                    if (bindings.length === 0) return;
                    var range = _this2.quill.getSelection();
                    if (range == null || !_this2.quill.hasFocus()) return;
                    var _quill$getLine = _this2.quill.getLine(range.index), _quill$getLine2 = _slicedToArray(_quill$getLine, 2), line = _quill$getLine2[0], offset = _quill$getLine2[1];
                    var _quill$getLeaf = _this2.quill.getLeaf(range.index), _quill$getLeaf2 = _slicedToArray(_quill$getLeaf, 2), leafStart = _quill$getLeaf2[0], offsetStart = _quill$getLeaf2[1];
                    var _ref = range.length === 0 ? [leafStart, offsetStart] : _this2.quill.getLeaf(range.index + range.length), _ref2 = _slicedToArray(_ref, 2), leafEnd = _ref2[0], offsetEnd = _ref2[1];
                    var prefixText = leafStart instanceof _parchment2.default.Text ? leafStart.value().slice(0, offsetStart) : "";
                    var suffixText = leafEnd instanceof _parchment2.default.Text ? leafEnd.value().slice(offsetEnd) : "";
                    var curContext = {
                      collapsed: range.length === 0,
                      empty: range.length === 0 && line.length() <= 1,
                      format: _this2.quill.getFormat(range),
                      offset,
                      prefix: prefixText,
                      suffix: suffixText
                    };
                    var prevented = bindings.some(function(binding) {
                      if (binding.collapsed != null && binding.collapsed !== curContext.collapsed) return false;
                      if (binding.empty != null && binding.empty !== curContext.empty) return false;
                      if (binding.offset != null && binding.offset !== curContext.offset) return false;
                      if (Array.isArray(binding.format)) {
                        if (binding.format.every(function(name) {
                          return curContext.format[name] == null;
                        })) {
                          return false;
                        }
                      } else if (_typeof(binding.format) === "object") {
                        if (!Object.keys(binding.format).every(function(name) {
                          if (binding.format[name] === true) return curContext.format[name] != null;
                          if (binding.format[name] === false) return curContext.format[name] == null;
                          return (0, _deepEqual2.default)(binding.format[name], curContext.format[name]);
                        })) {
                          return false;
                        }
                      }
                      if (binding.prefix != null && !binding.prefix.test(curContext.prefix)) return false;
                      if (binding.suffix != null && !binding.suffix.test(curContext.suffix)) return false;
                      return binding.handler.call(_this2, range, curContext) !== true;
                    });
                    if (prevented) {
                      evt.preventDefault();
                    }
                  });
                }
              }]);
              return Keyboard2;
            }(_module2.default);
            Keyboard.keys = {
              BACKSPACE: 8,
              TAB: 9,
              ENTER: 13,
              ESCAPE: 27,
              LEFT: 37,
              UP: 38,
              RIGHT: 39,
              DOWN: 40,
              DELETE: 46
            };
            Keyboard.DEFAULTS = {
              bindings: {
                "bold": makeFormatHandler("bold"),
                "italic": makeFormatHandler("italic"),
                "underline": makeFormatHandler("underline"),
                "indent": {
                  // highlight tab or tab at beginning of list, indent or blockquote
                  key: Keyboard.keys.TAB,
                  format: ["blockquote", "indent", "list"],
                  handler: function handler(range, context) {
                    if (context.collapsed && context.offset !== 0) return true;
                    this.quill.format("indent", "+1", _quill2.default.sources.USER);
                  }
                },
                "outdent": {
                  key: Keyboard.keys.TAB,
                  shiftKey: true,
                  format: ["blockquote", "indent", "list"],
                  // highlight tab or tab at beginning of list, indent or blockquote
                  handler: function handler(range, context) {
                    if (context.collapsed && context.offset !== 0) return true;
                    this.quill.format("indent", "-1", _quill2.default.sources.USER);
                  }
                },
                "outdent backspace": {
                  key: Keyboard.keys.BACKSPACE,
                  collapsed: true,
                  shiftKey: null,
                  metaKey: null,
                  ctrlKey: null,
                  altKey: null,
                  format: ["indent", "list"],
                  offset: 0,
                  handler: function handler(range, context) {
                    if (context.format.indent != null) {
                      this.quill.format("indent", "-1", _quill2.default.sources.USER);
                    } else if (context.format.list != null) {
                      this.quill.format("list", false, _quill2.default.sources.USER);
                    }
                  }
                },
                "indent code-block": makeCodeBlockHandler(true),
                "outdent code-block": makeCodeBlockHandler(false),
                "remove tab": {
                  key: Keyboard.keys.TAB,
                  shiftKey: true,
                  collapsed: true,
                  prefix: /\t$/,
                  handler: function handler(range) {
                    this.quill.deleteText(range.index - 1, 1, _quill2.default.sources.USER);
                  }
                },
                "tab": {
                  key: Keyboard.keys.TAB,
                  handler: function handler(range) {
                    this.quill.history.cutoff();
                    var delta = new _quillDelta2.default().retain(range.index).delete(range.length).insert("	");
                    this.quill.updateContents(delta, _quill2.default.sources.USER);
                    this.quill.history.cutoff();
                    this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
                  }
                },
                "list empty enter": {
                  key: Keyboard.keys.ENTER,
                  collapsed: true,
                  format: ["list"],
                  empty: true,
                  handler: function handler(range, context) {
                    this.quill.format("list", false, _quill2.default.sources.USER);
                    if (context.format.indent) {
                      this.quill.format("indent", false, _quill2.default.sources.USER);
                    }
                  }
                },
                "checklist enter": {
                  key: Keyboard.keys.ENTER,
                  collapsed: true,
                  format: { list: "checked" },
                  handler: function handler(range) {
                    var _quill$getLine3 = this.quill.getLine(range.index), _quill$getLine4 = _slicedToArray(_quill$getLine3, 2), line = _quill$getLine4[0], offset = _quill$getLine4[1];
                    var formats = (0, _extend2.default)({}, line.formats(), { list: "checked" });
                    var delta = new _quillDelta2.default().retain(range.index).insert("\n", formats).retain(line.length() - offset - 1).retain(1, { list: "unchecked" });
                    this.quill.updateContents(delta, _quill2.default.sources.USER);
                    this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
                    this.quill.scrollIntoView();
                  }
                },
                "header enter": {
                  key: Keyboard.keys.ENTER,
                  collapsed: true,
                  format: ["header"],
                  suffix: /^$/,
                  handler: function handler(range, context) {
                    var _quill$getLine5 = this.quill.getLine(range.index), _quill$getLine6 = _slicedToArray(_quill$getLine5, 2), line = _quill$getLine6[0], offset = _quill$getLine6[1];
                    var delta = new _quillDelta2.default().retain(range.index).insert("\n", context.format).retain(line.length() - offset - 1).retain(1, { header: null });
                    this.quill.updateContents(delta, _quill2.default.sources.USER);
                    this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
                    this.quill.scrollIntoView();
                  }
                },
                "list autofill": {
                  key: " ",
                  collapsed: true,
                  format: { list: false },
                  prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
                  handler: function handler(range, context) {
                    var length3 = context.prefix.length;
                    var _quill$getLine7 = this.quill.getLine(range.index), _quill$getLine8 = _slicedToArray(_quill$getLine7, 2), line = _quill$getLine8[0], offset = _quill$getLine8[1];
                    if (offset > length3) return true;
                    var value = void 0;
                    switch (context.prefix.trim()) {
                      case "[]":
                      case "[ ]":
                        value = "unchecked";
                        break;
                      case "[x]":
                        value = "checked";
                        break;
                      case "-":
                      case "*":
                        value = "bullet";
                        break;
                      default:
                        value = "ordered";
                    }
                    this.quill.insertText(range.index, " ", _quill2.default.sources.USER);
                    this.quill.history.cutoff();
                    var delta = new _quillDelta2.default().retain(range.index - offset).delete(length3 + 1).retain(line.length() - 2 - offset).retain(1, { list: value });
                    this.quill.updateContents(delta, _quill2.default.sources.USER);
                    this.quill.history.cutoff();
                    this.quill.setSelection(range.index - length3, _quill2.default.sources.SILENT);
                  }
                },
                "code exit": {
                  key: Keyboard.keys.ENTER,
                  collapsed: true,
                  format: ["code-block"],
                  prefix: /\n\n$/,
                  suffix: /^\s+$/,
                  handler: function handler(range) {
                    var _quill$getLine9 = this.quill.getLine(range.index), _quill$getLine10 = _slicedToArray(_quill$getLine9, 2), line = _quill$getLine10[0], offset = _quill$getLine10[1];
                    var delta = new _quillDelta2.default().retain(range.index + line.length() - offset - 2).retain(1, { "code-block": null }).delete(1);
                    this.quill.updateContents(delta, _quill2.default.sources.USER);
                  }
                },
                "embed left": makeEmbedArrowHandler(Keyboard.keys.LEFT, false),
                "embed left shift": makeEmbedArrowHandler(Keyboard.keys.LEFT, true),
                "embed right": makeEmbedArrowHandler(Keyboard.keys.RIGHT, false),
                "embed right shift": makeEmbedArrowHandler(Keyboard.keys.RIGHT, true)
              }
            };
            function makeEmbedArrowHandler(key, shiftKey) {
              var _ref3;
              var where = key === Keyboard.keys.LEFT ? "prefix" : "suffix";
              return _ref3 = {
                key,
                shiftKey,
                altKey: null
              }, _defineProperty(_ref3, where, /^$/), _defineProperty(_ref3, "handler", function handler(range) {
                var index = range.index;
                if (key === Keyboard.keys.RIGHT) {
                  index += range.length + 1;
                }
                var _quill$getLeaf3 = this.quill.getLeaf(index), _quill$getLeaf4 = _slicedToArray(_quill$getLeaf3, 1), leaf = _quill$getLeaf4[0];
                if (!(leaf instanceof _parchment2.default.Embed)) return true;
                if (key === Keyboard.keys.LEFT) {
                  if (shiftKey) {
                    this.quill.setSelection(range.index - 1, range.length + 1, _quill2.default.sources.USER);
                  } else {
                    this.quill.setSelection(range.index - 1, _quill2.default.sources.USER);
                  }
                } else {
                  if (shiftKey) {
                    this.quill.setSelection(range.index, range.length + 1, _quill2.default.sources.USER);
                  } else {
                    this.quill.setSelection(range.index + range.length + 1, _quill2.default.sources.USER);
                  }
                }
                return false;
              }), _ref3;
            }
            function handleBackspace(range, context) {
              if (range.index === 0 || this.quill.getLength() <= 1) return;
              var _quill$getLine11 = this.quill.getLine(range.index), _quill$getLine12 = _slicedToArray(_quill$getLine11, 1), line = _quill$getLine12[0];
              var formats = {};
              if (context.offset === 0) {
                var _quill$getLine13 = this.quill.getLine(range.index - 1), _quill$getLine14 = _slicedToArray(_quill$getLine13, 1), prev = _quill$getLine14[0];
                if (prev != null && prev.length() > 1) {
                  var curFormats = line.formats();
                  var prevFormats = this.quill.getFormat(range.index - 1, 1);
                  formats = _op2.default.attributes.diff(curFormats, prevFormats) || {};
                }
              }
              var length3 = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(context.prefix) ? 2 : 1;
              this.quill.deleteText(range.index - length3, length3, _quill2.default.sources.USER);
              if (Object.keys(formats).length > 0) {
                this.quill.formatLine(range.index - length3, length3, formats, _quill2.default.sources.USER);
              }
              this.quill.focus();
            }
            function handleDelete(range, context) {
              var length3 = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(context.suffix) ? 2 : 1;
              if (range.index >= this.quill.getLength() - length3) return;
              var formats = {}, nextLength = 0;
              var _quill$getLine15 = this.quill.getLine(range.index), _quill$getLine16 = _slicedToArray(_quill$getLine15, 1), line = _quill$getLine16[0];
              if (context.offset >= line.length() - 1) {
                var _quill$getLine17 = this.quill.getLine(range.index + 1), _quill$getLine18 = _slicedToArray(_quill$getLine17, 1), next = _quill$getLine18[0];
                if (next) {
                  var curFormats = line.formats();
                  var nextFormats = this.quill.getFormat(range.index, 1);
                  formats = _op2.default.attributes.diff(curFormats, nextFormats) || {};
                  nextLength = next.length();
                }
              }
              this.quill.deleteText(range.index, length3, _quill2.default.sources.USER);
              if (Object.keys(formats).length > 0) {
                this.quill.formatLine(range.index + nextLength - 1, length3, formats, _quill2.default.sources.USER);
              }
            }
            function handleDeleteRange(range) {
              var lines = this.quill.getLines(range);
              var formats = {};
              if (lines.length > 1) {
                var firstFormats = lines[0].formats();
                var lastFormats = lines[lines.length - 1].formats();
                formats = _op2.default.attributes.diff(lastFormats, firstFormats) || {};
              }
              this.quill.deleteText(range, _quill2.default.sources.USER);
              if (Object.keys(formats).length > 0) {
                this.quill.formatLine(range.index, 1, formats, _quill2.default.sources.USER);
              }
              this.quill.setSelection(range.index, _quill2.default.sources.SILENT);
              this.quill.focus();
            }
            function handleEnter(range, context) {
              var _this3 = this;
              if (range.length > 0) {
                this.quill.scroll.deleteAt(range.index, range.length);
              }
              var lineFormats = Object.keys(context.format).reduce(function(lineFormats2, format) {
                if (_parchment2.default.query(format, _parchment2.default.Scope.BLOCK) && !Array.isArray(context.format[format])) {
                  lineFormats2[format] = context.format[format];
                }
                return lineFormats2;
              }, {});
              this.quill.insertText(range.index, "\n", lineFormats, _quill2.default.sources.USER);
              this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
              this.quill.focus();
              Object.keys(context.format).forEach(function(name) {
                if (lineFormats[name] != null) return;
                if (Array.isArray(context.format[name])) return;
                if (name === "link") return;
                _this3.quill.format(name, context.format[name], _quill2.default.sources.USER);
              });
            }
            function makeCodeBlockHandler(indent) {
              return {
                key: Keyboard.keys.TAB,
                shiftKey: !indent,
                format: { "code-block": true },
                handler: function handler(range) {
                  var CodeBlock = _parchment2.default.query("code-block");
                  var index = range.index, length3 = range.length;
                  var _quill$scroll$descend = this.quill.scroll.descendant(CodeBlock, index), _quill$scroll$descend2 = _slicedToArray(_quill$scroll$descend, 2), block = _quill$scroll$descend2[0], offset = _quill$scroll$descend2[1];
                  if (block == null) return;
                  var scrollIndex = this.quill.getIndex(block);
                  var start = block.newlineIndex(offset, true) + 1;
                  var end = block.newlineIndex(scrollIndex + offset + length3);
                  var lines = block.domNode.textContent.slice(start, end).split("\n");
                  offset = 0;
                  lines.forEach(function(line, i) {
                    if (indent) {
                      block.insertAt(start + offset, CodeBlock.TAB);
                      offset += CodeBlock.TAB.length;
                      if (i === 0) {
                        index += CodeBlock.TAB.length;
                      } else {
                        length3 += CodeBlock.TAB.length;
                      }
                    } else if (line.startsWith(CodeBlock.TAB)) {
                      block.deleteAt(start + offset, CodeBlock.TAB.length);
                      offset -= CodeBlock.TAB.length;
                      if (i === 0) {
                        index -= CodeBlock.TAB.length;
                      } else {
                        length3 -= CodeBlock.TAB.length;
                      }
                    }
                    offset += line.length + 1;
                  });
                  this.quill.update(_quill2.default.sources.USER);
                  this.quill.setSelection(index, length3, _quill2.default.sources.SILENT);
                }
              };
            }
            function makeFormatHandler(format) {
              return {
                key: format[0].toUpperCase(),
                shortKey: true,
                handler: function handler(range, context) {
                  this.quill.format(format, !context.format[format], _quill2.default.sources.USER);
                }
              };
            }
            function normalize(binding) {
              if (typeof binding === "string" || typeof binding === "number") {
                return normalize({ key: binding });
              }
              if ((typeof binding === "undefined" ? "undefined" : _typeof(binding)) === "object") {
                binding = (0, _clone2.default)(binding, false);
              }
              if (typeof binding.key === "string") {
                if (Keyboard.keys[binding.key.toUpperCase()] != null) {
                  binding.key = Keyboard.keys[binding.key.toUpperCase()];
                } else if (binding.key.length === 1) {
                  binding.key = binding.key.toUpperCase().charCodeAt(0);
                } else {
                  return null;
                }
              }
              if (binding.shortKey) {
                binding[SHORTKEY] = binding.shortKey;
                delete binding.shortKey;
              }
              return binding;
            }
            exports2.default = Keyboard;
            exports2.SHORTKEY = SHORTKEY;
          },
          /* 24 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _slicedToArray = /* @__PURE__ */ function() {
              function sliceIterator(arr, i) {
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e = void 0;
                try {
                  for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                  }
                } catch (err) {
                  _d = true;
                  _e = err;
                } finally {
                  try {
                    if (!_n && _i["return"]) _i["return"]();
                  } finally {
                    if (_d) throw _e;
                  }
                }
                return _arr;
              }
              return function(arr, i) {
                if (Array.isArray(arr)) {
                  return arr;
                } else if (Symbol.iterator in Object(arr)) {
                  return sliceIterator(arr, i);
                } else {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }
              };
            }();
            var _get = function get(object, property, receiver) {
              if (object === null) object = Function.prototype;
              var desc = Object.getOwnPropertyDescriptor(object, property);
              if (desc === void 0) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                  return void 0;
                } else {
                  return get(parent, property, receiver);
                }
              } else if ("value" in desc) {
                return desc.value;
              } else {
                var getter = desc.get;
                if (getter === void 0) {
                  return void 0;
                }
                return getter.call(receiver);
              }
            };
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _parchment = __webpack_require__(0);
            var _parchment2 = _interopRequireDefault(_parchment);
            var _text = __webpack_require__(7);
            var _text2 = _interopRequireDefault(_text);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var Cursor = function(_Parchment$Embed) {
              _inherits(Cursor2, _Parchment$Embed);
              _createClass(Cursor2, null, [{
                key: "value",
                value: function value() {
                  return void 0;
                }
              }]);
              function Cursor2(domNode, selection) {
                _classCallCheck(this, Cursor2);
                var _this = _possibleConstructorReturn(this, (Cursor2.__proto__ || Object.getPrototypeOf(Cursor2)).call(this, domNode));
                _this.selection = selection;
                _this.textNode = document.createTextNode(Cursor2.CONTENTS);
                _this.domNode.appendChild(_this.textNode);
                _this._length = 0;
                return _this;
              }
              _createClass(Cursor2, [{
                key: "detach",
                value: function detach() {
                  if (this.parent != null) this.parent.removeChild(this);
                }
              }, {
                key: "format",
                value: function format(name, value) {
                  if (this._length !== 0) {
                    return _get(Cursor2.prototype.__proto__ || Object.getPrototypeOf(Cursor2.prototype), "format", this).call(this, name, value);
                  }
                  var target = this, index = 0;
                  while (target != null && target.statics.scope !== _parchment2.default.Scope.BLOCK_BLOT) {
                    index += target.offset(target.parent);
                    target = target.parent;
                  }
                  if (target != null) {
                    this._length = Cursor2.CONTENTS.length;
                    target.optimize();
                    target.formatAt(index, Cursor2.CONTENTS.length, name, value);
                    this._length = 0;
                  }
                }
              }, {
                key: "index",
                value: function index(node, offset) {
                  if (node === this.textNode) return 0;
                  return _get(Cursor2.prototype.__proto__ || Object.getPrototypeOf(Cursor2.prototype), "index", this).call(this, node, offset);
                }
              }, {
                key: "length",
                value: function length3() {
                  return this._length;
                }
              }, {
                key: "position",
                value: function position() {
                  return [this.textNode, this.textNode.data.length];
                }
              }, {
                key: "remove",
                value: function remove() {
                  _get(Cursor2.prototype.__proto__ || Object.getPrototypeOf(Cursor2.prototype), "remove", this).call(this);
                  this.parent = null;
                }
              }, {
                key: "restore",
                value: function restore() {
                  if (this.selection.composing || this.parent == null) return;
                  var textNode = this.textNode;
                  var range = this.selection.getNativeRange();
                  var restoreText = void 0, start = void 0, end = void 0;
                  if (range != null && range.start.node === textNode && range.end.node === textNode) {
                    var _ref = [textNode, range.start.offset, range.end.offset];
                    restoreText = _ref[0];
                    start = _ref[1];
                    end = _ref[2];
                  }
                  while (this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode) {
                    this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
                  }
                  if (this.textNode.data !== Cursor2.CONTENTS) {
                    var text2 = this.textNode.data.split(Cursor2.CONTENTS).join("");
                    if (this.next instanceof _text2.default) {
                      restoreText = this.next.domNode;
                      this.next.insertAt(0, text2);
                      this.textNode.data = Cursor2.CONTENTS;
                    } else {
                      this.textNode.data = text2;
                      this.parent.insertBefore(_parchment2.default.create(this.textNode), this);
                      this.textNode = document.createTextNode(Cursor2.CONTENTS);
                      this.domNode.appendChild(this.textNode);
                    }
                  }
                  this.remove();
                  if (start != null) {
                    var _map = [start, end].map(function(offset) {
                      return Math.max(0, Math.min(restoreText.data.length, offset - 1));
                    });
                    var _map2 = _slicedToArray(_map, 2);
                    start = _map2[0];
                    end = _map2[1];
                    return {
                      startNode: restoreText,
                      startOffset: start,
                      endNode: restoreText,
                      endOffset: end
                    };
                  }
                }
              }, {
                key: "update",
                value: function update(mutations, context) {
                  var _this2 = this;
                  if (mutations.some(function(mutation) {
                    return mutation.type === "characterData" && mutation.target === _this2.textNode;
                  })) {
                    var range = this.restore();
                    if (range) context.range = range;
                  }
                }
              }, {
                key: "value",
                value: function value() {
                  return "";
                }
              }]);
              return Cursor2;
            }(_parchment2.default.Embed);
            Cursor.blotName = "cursor";
            Cursor.className = "ql-cursor";
            Cursor.tagName = "span";
            Cursor.CONTENTS = "\uFEFF";
            exports2.default = Cursor;
          },
          /* 25 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _parchment = __webpack_require__(0);
            var _parchment2 = _interopRequireDefault(_parchment);
            var _block = __webpack_require__(4);
            var _block2 = _interopRequireDefault(_block);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var Container = function(_Parchment$Container) {
              _inherits(Container2, _Parchment$Container);
              function Container2() {
                _classCallCheck(this, Container2);
                return _possibleConstructorReturn(this, (Container2.__proto__ || Object.getPrototypeOf(Container2)).apply(this, arguments));
              }
              return Container2;
            }(_parchment2.default.Container);
            Container.allowedChildren = [_block2.default, _block.BlockEmbed, Container];
            exports2.default = Container;
          },
          /* 26 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.ColorStyle = exports2.ColorClass = exports2.ColorAttributor = void 0;
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _get = function get(object, property, receiver) {
              if (object === null) object = Function.prototype;
              var desc = Object.getOwnPropertyDescriptor(object, property);
              if (desc === void 0) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                  return void 0;
                } else {
                  return get(parent, property, receiver);
                }
              } else if ("value" in desc) {
                return desc.value;
              } else {
                var getter = desc.get;
                if (getter === void 0) {
                  return void 0;
                }
                return getter.call(receiver);
              }
            };
            var _parchment = __webpack_require__(0);
            var _parchment2 = _interopRequireDefault(_parchment);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var ColorAttributor = function(_Parchment$Attributor) {
              _inherits(ColorAttributor2, _Parchment$Attributor);
              function ColorAttributor2() {
                _classCallCheck(this, ColorAttributor2);
                return _possibleConstructorReturn(this, (ColorAttributor2.__proto__ || Object.getPrototypeOf(ColorAttributor2)).apply(this, arguments));
              }
              _createClass(ColorAttributor2, [{
                key: "value",
                value: function value(domNode) {
                  var value2 = _get(ColorAttributor2.prototype.__proto__ || Object.getPrototypeOf(ColorAttributor2.prototype), "value", this).call(this, domNode);
                  if (!value2.startsWith("rgb(")) return value2;
                  value2 = value2.replace(/^[^\d]+/, "").replace(/[^\d]+$/, "");
                  return "#" + value2.split(",").map(function(component) {
                    return ("00" + parseInt(component).toString(16)).slice(-2);
                  }).join("");
                }
              }]);
              return ColorAttributor2;
            }(_parchment2.default.Attributor.Style);
            var ColorClass = new _parchment2.default.Attributor.Class("color", "ql-color", {
              scope: _parchment2.default.Scope.INLINE
            });
            var ColorStyle = new ColorAttributor("color", "color", {
              scope: _parchment2.default.Scope.INLINE
            });
            exports2.ColorAttributor = ColorAttributor;
            exports2.ColorClass = ColorClass;
            exports2.ColorStyle = ColorStyle;
          },
          /* 27 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.sanitize = exports2.default = void 0;
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _get = function get(object, property, receiver) {
              if (object === null) object = Function.prototype;
              var desc = Object.getOwnPropertyDescriptor(object, property);
              if (desc === void 0) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                  return void 0;
                } else {
                  return get(parent, property, receiver);
                }
              } else if ("value" in desc) {
                return desc.value;
              } else {
                var getter = desc.get;
                if (getter === void 0) {
                  return void 0;
                }
                return getter.call(receiver);
              }
            };
            var _inline = __webpack_require__(6);
            var _inline2 = _interopRequireDefault(_inline);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var Link = function(_Inline) {
              _inherits(Link2, _Inline);
              function Link2() {
                _classCallCheck(this, Link2);
                return _possibleConstructorReturn(this, (Link2.__proto__ || Object.getPrototypeOf(Link2)).apply(this, arguments));
              }
              _createClass(Link2, [{
                key: "format",
                value: function format(name, value) {
                  if (name !== this.statics.blotName || !value) return _get(Link2.prototype.__proto__ || Object.getPrototypeOf(Link2.prototype), "format", this).call(this, name, value);
                  value = this.constructor.sanitize(value);
                  this.domNode.setAttribute("href", value);
                }
              }], [{
                key: "create",
                value: function create7(value) {
                  var node = _get(Link2.__proto__ || Object.getPrototypeOf(Link2), "create", this).call(this, value);
                  value = this.sanitize(value);
                  node.setAttribute("href", value);
                  node.setAttribute("rel", "noopener noreferrer");
                  node.setAttribute("target", "_blank");
                  return node;
                }
              }, {
                key: "formats",
                value: function formats(domNode) {
                  return domNode.getAttribute("href");
                }
              }, {
                key: "sanitize",
                value: function sanitize(url) {
                  return _sanitize(url, this.PROTOCOL_WHITELIST) ? url : this.SANITIZED_URL;
                }
              }]);
              return Link2;
            }(_inline2.default);
            Link.blotName = "link";
            Link.tagName = "A";
            Link.SANITIZED_URL = "about:blank";
            Link.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"];
            function _sanitize(url, protocols) {
              var anchor = document.createElement("a");
              anchor.href = url;
              var protocol = anchor.href.slice(0, anchor.href.indexOf(":"));
              return protocols.indexOf(protocol) > -1;
            }
            exports2.default = Link;
            exports2.sanitize = _sanitize;
          },
          /* 28 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
              return typeof obj;
            } : function(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _keyboard = __webpack_require__(23);
            var _keyboard2 = _interopRequireDefault(_keyboard);
            var _dropdown = __webpack_require__(107);
            var _dropdown2 = _interopRequireDefault(_dropdown);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            var optionsCounter = 0;
            function toggleAriaAttribute(element2, attribute) {
              element2.setAttribute(attribute, !(element2.getAttribute(attribute) === "true"));
            }
            var Picker = function() {
              function Picker2(select) {
                var _this = this;
                _classCallCheck(this, Picker2);
                this.select = select;
                this.container = document.createElement("span");
                this.buildPicker();
                this.select.style.display = "none";
                this.select.parentNode.insertBefore(this.container, this.select);
                this.label.addEventListener("mousedown", function() {
                  _this.togglePicker();
                });
                this.label.addEventListener("keydown", function(event) {
                  switch (event.keyCode) {
                    case _keyboard2.default.keys.ENTER:
                      _this.togglePicker();
                      break;
                    case _keyboard2.default.keys.ESCAPE:
                      _this.escape();
                      event.preventDefault();
                      break;
                    default:
                  }
                });
                this.select.addEventListener("change", this.update.bind(this));
              }
              _createClass(Picker2, [{
                key: "togglePicker",
                value: function togglePicker() {
                  this.container.classList.toggle("ql-expanded");
                  toggleAriaAttribute(this.label, "aria-expanded");
                  toggleAriaAttribute(this.options, "aria-hidden");
                }
              }, {
                key: "buildItem",
                value: function buildItem(option) {
                  var _this2 = this;
                  var item = document.createElement("span");
                  item.tabIndex = "0";
                  item.setAttribute("role", "button");
                  item.classList.add("ql-picker-item");
                  if (option.hasAttribute("value")) {
                    item.setAttribute("data-value", option.getAttribute("value"));
                  }
                  if (option.textContent) {
                    item.setAttribute("data-label", option.textContent);
                  }
                  item.addEventListener("click", function() {
                    _this2.selectItem(item, true);
                  });
                  item.addEventListener("keydown", function(event) {
                    switch (event.keyCode) {
                      case _keyboard2.default.keys.ENTER:
                        _this2.selectItem(item, true);
                        event.preventDefault();
                        break;
                      case _keyboard2.default.keys.ESCAPE:
                        _this2.escape();
                        event.preventDefault();
                        break;
                      default:
                    }
                  });
                  return item;
                }
              }, {
                key: "buildLabel",
                value: function buildLabel() {
                  var label = document.createElement("span");
                  label.classList.add("ql-picker-label");
                  label.innerHTML = _dropdown2.default;
                  label.tabIndex = "0";
                  label.setAttribute("role", "button");
                  label.setAttribute("aria-expanded", "false");
                  this.container.appendChild(label);
                  return label;
                }
              }, {
                key: "buildOptions",
                value: function buildOptions() {
                  var _this3 = this;
                  var options = document.createElement("span");
                  options.classList.add("ql-picker-options");
                  options.setAttribute("aria-hidden", "true");
                  options.tabIndex = "-1";
                  options.id = "ql-picker-options-" + optionsCounter;
                  optionsCounter += 1;
                  this.label.setAttribute("aria-controls", options.id);
                  this.options = options;
                  [].slice.call(this.select.options).forEach(function(option) {
                    var item = _this3.buildItem(option);
                    options.appendChild(item);
                    if (option.selected === true) {
                      _this3.selectItem(item);
                    }
                  });
                  this.container.appendChild(options);
                }
              }, {
                key: "buildPicker",
                value: function buildPicker() {
                  var _this4 = this;
                  [].slice.call(this.select.attributes).forEach(function(item) {
                    _this4.container.setAttribute(item.name, item.value);
                  });
                  this.container.classList.add("ql-picker");
                  this.label = this.buildLabel();
                  this.buildOptions();
                }
              }, {
                key: "escape",
                value: function escape2() {
                  var _this5 = this;
                  this.close();
                  setTimeout(function() {
                    return _this5.label.focus();
                  }, 1);
                }
              }, {
                key: "close",
                value: function close() {
                  this.container.classList.remove("ql-expanded");
                  this.label.setAttribute("aria-expanded", "false");
                  this.options.setAttribute("aria-hidden", "true");
                }
              }, {
                key: "selectItem",
                value: function selectItem(item) {
                  var trigger = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                  var selected = this.container.querySelector(".ql-selected");
                  if (item === selected) return;
                  if (selected != null) {
                    selected.classList.remove("ql-selected");
                  }
                  if (item == null) return;
                  item.classList.add("ql-selected");
                  this.select.selectedIndex = [].indexOf.call(item.parentNode.children, item);
                  if (item.hasAttribute("data-value")) {
                    this.label.setAttribute("data-value", item.getAttribute("data-value"));
                  } else {
                    this.label.removeAttribute("data-value");
                  }
                  if (item.hasAttribute("data-label")) {
                    this.label.setAttribute("data-label", item.getAttribute("data-label"));
                  } else {
                    this.label.removeAttribute("data-label");
                  }
                  if (trigger) {
                    if (typeof Event === "function") {
                      this.select.dispatchEvent(new Event("change"));
                    } else if ((typeof Event === "undefined" ? "undefined" : _typeof(Event)) === "object") {
                      var event = document.createEvent("Event");
                      event.initEvent("change", true, true);
                      this.select.dispatchEvent(event);
                    }
                    this.close();
                  }
                }
              }, {
                key: "update",
                value: function update() {
                  var option = void 0;
                  if (this.select.selectedIndex > -1) {
                    var item = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
                    option = this.select.options[this.select.selectedIndex];
                    this.selectItem(item);
                  } else {
                    this.selectItem(null);
                  }
                  var isActive = option != null && option !== this.select.querySelector("option[selected]");
                  this.label.classList.toggle("ql-active", isActive);
                }
              }]);
              return Picker2;
            }();
            exports2.default = Picker;
          },
          /* 29 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _parchment = __webpack_require__(0);
            var _parchment2 = _interopRequireDefault(_parchment);
            var _quill = __webpack_require__(5);
            var _quill2 = _interopRequireDefault(_quill);
            var _block = __webpack_require__(4);
            var _block2 = _interopRequireDefault(_block);
            var _break = __webpack_require__(16);
            var _break2 = _interopRequireDefault(_break);
            var _container = __webpack_require__(25);
            var _container2 = _interopRequireDefault(_container);
            var _cursor = __webpack_require__(24);
            var _cursor2 = _interopRequireDefault(_cursor);
            var _embed = __webpack_require__(35);
            var _embed2 = _interopRequireDefault(_embed);
            var _inline = __webpack_require__(6);
            var _inline2 = _interopRequireDefault(_inline);
            var _scroll = __webpack_require__(22);
            var _scroll2 = _interopRequireDefault(_scroll);
            var _text = __webpack_require__(7);
            var _text2 = _interopRequireDefault(_text);
            var _clipboard = __webpack_require__(55);
            var _clipboard2 = _interopRequireDefault(_clipboard);
            var _history = __webpack_require__(42);
            var _history2 = _interopRequireDefault(_history);
            var _keyboard = __webpack_require__(23);
            var _keyboard2 = _interopRequireDefault(_keyboard);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            _quill2.default.register({
              "blots/block": _block2.default,
              "blots/block/embed": _block.BlockEmbed,
              "blots/break": _break2.default,
              "blots/container": _container2.default,
              "blots/cursor": _cursor2.default,
              "blots/embed": _embed2.default,
              "blots/inline": _inline2.default,
              "blots/scroll": _scroll2.default,
              "blots/text": _text2.default,
              "modules/clipboard": _clipboard2.default,
              "modules/history": _history2.default,
              "modules/keyboard": _keyboard2.default
            });
            _parchment2.default.register(_block2.default, _break2.default, _cursor2.default, _inline2.default, _scroll2.default, _text2.default);
            exports2.default = _quill2.default;
          },
          /* 30 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", { value: true });
            var Registry = __webpack_require__(1);
            var ShadowBlot = (
              /** @class */
              function() {
                function ShadowBlot2(domNode) {
                  this.domNode = domNode;
                  this.domNode[Registry.DATA_KEY] = { blot: this };
                }
                Object.defineProperty(ShadowBlot2.prototype, "statics", {
                  // Hack for accessing inherited static methods
                  get: function() {
                    return this.constructor;
                  },
                  enumerable: true,
                  configurable: true
                });
                ShadowBlot2.create = function(value) {
                  if (this.tagName == null) {
                    throw new Registry.ParchmentError("Blot definition missing tagName");
                  }
                  var node;
                  if (Array.isArray(this.tagName)) {
                    if (typeof value === "string") {
                      value = value.toUpperCase();
                      if (parseInt(value).toString() === value) {
                        value = parseInt(value);
                      }
                    }
                    if (typeof value === "number") {
                      node = document.createElement(this.tagName[value - 1]);
                    } else if (this.tagName.indexOf(value) > -1) {
                      node = document.createElement(value);
                    } else {
                      node = document.createElement(this.tagName[0]);
                    }
                  } else {
                    node = document.createElement(this.tagName);
                  }
                  if (this.className) {
                    node.classList.add(this.className);
                  }
                  return node;
                };
                ShadowBlot2.prototype.attach = function() {
                  if (this.parent != null) {
                    this.scroll = this.parent.scroll;
                  }
                };
                ShadowBlot2.prototype.clone = function() {
                  var domNode = this.domNode.cloneNode(false);
                  return Registry.create(domNode);
                };
                ShadowBlot2.prototype.detach = function() {
                  if (this.parent != null)
                    this.parent.removeChild(this);
                  delete this.domNode[Registry.DATA_KEY];
                };
                ShadowBlot2.prototype.deleteAt = function(index, length3) {
                  var blot = this.isolate(index, length3);
                  blot.remove();
                };
                ShadowBlot2.prototype.formatAt = function(index, length3, name, value) {
                  var blot = this.isolate(index, length3);
                  if (Registry.query(name, Registry.Scope.BLOT) != null && value) {
                    blot.wrap(name, value);
                  } else if (Registry.query(name, Registry.Scope.ATTRIBUTE) != null) {
                    var parent = Registry.create(this.statics.scope);
                    blot.wrap(parent);
                    parent.format(name, value);
                  }
                };
                ShadowBlot2.prototype.insertAt = function(index, value, def) {
                  var blot = def == null ? Registry.create("text", value) : Registry.create(value, def);
                  var ref = this.split(index);
                  this.parent.insertBefore(blot, ref);
                };
                ShadowBlot2.prototype.insertInto = function(parentBlot, refBlot) {
                  if (refBlot === void 0) {
                    refBlot = null;
                  }
                  if (this.parent != null) {
                    this.parent.children.remove(this);
                  }
                  var refDomNode = null;
                  parentBlot.children.insertBefore(this, refBlot);
                  if (refBlot != null) {
                    refDomNode = refBlot.domNode;
                  }
                  if (this.domNode.parentNode != parentBlot.domNode || this.domNode.nextSibling != refDomNode) {
                    parentBlot.domNode.insertBefore(this.domNode, refDomNode);
                  }
                  this.parent = parentBlot;
                  this.attach();
                };
                ShadowBlot2.prototype.isolate = function(index, length3) {
                  var target = this.split(index);
                  target.split(length3);
                  return target;
                };
                ShadowBlot2.prototype.length = function() {
                  return 1;
                };
                ShadowBlot2.prototype.offset = function(root) {
                  if (root === void 0) {
                    root = this.parent;
                  }
                  if (this.parent == null || this == root)
                    return 0;
                  return this.parent.children.offset(this) + this.parent.offset(root);
                };
                ShadowBlot2.prototype.optimize = function(context) {
                  if (this.domNode[Registry.DATA_KEY] != null) {
                    delete this.domNode[Registry.DATA_KEY].mutations;
                  }
                };
                ShadowBlot2.prototype.remove = function() {
                  if (this.domNode.parentNode != null) {
                    this.domNode.parentNode.removeChild(this.domNode);
                  }
                  this.detach();
                };
                ShadowBlot2.prototype.replace = function(target) {
                  if (target.parent == null)
                    return;
                  target.parent.insertBefore(this, target.next);
                  target.remove();
                };
                ShadowBlot2.prototype.replaceWith = function(name, value) {
                  var replacement = typeof name === "string" ? Registry.create(name, value) : name;
                  replacement.replace(this);
                  return replacement;
                };
                ShadowBlot2.prototype.split = function(index, force) {
                  return index === 0 ? this : this.next;
                };
                ShadowBlot2.prototype.update = function(mutations, context) {
                };
                ShadowBlot2.prototype.wrap = function(name, value) {
                  var wrapper = typeof name === "string" ? Registry.create(name, value) : name;
                  if (this.parent != null) {
                    this.parent.insertBefore(wrapper, this.next);
                  }
                  wrapper.appendChild(this);
                  return wrapper;
                };
                ShadowBlot2.blotName = "abstract";
                return ShadowBlot2;
              }()
            );
            exports2.default = ShadowBlot;
          },
          /* 31 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", { value: true });
            var attributor_1 = __webpack_require__(12);
            var class_1 = __webpack_require__(32);
            var style_1 = __webpack_require__(33);
            var Registry = __webpack_require__(1);
            var AttributorStore = (
              /** @class */
              function() {
                function AttributorStore2(domNode) {
                  this.attributes = {};
                  this.domNode = domNode;
                  this.build();
                }
                AttributorStore2.prototype.attribute = function(attribute, value) {
                  if (value) {
                    if (attribute.add(this.domNode, value)) {
                      if (attribute.value(this.domNode) != null) {
                        this.attributes[attribute.attrName] = attribute;
                      } else {
                        delete this.attributes[attribute.attrName];
                      }
                    }
                  } else {
                    attribute.remove(this.domNode);
                    delete this.attributes[attribute.attrName];
                  }
                };
                AttributorStore2.prototype.build = function() {
                  var _this = this;
                  this.attributes = {};
                  var attributes = attributor_1.default.keys(this.domNode);
                  var classes = class_1.default.keys(this.domNode);
                  var styles = style_1.default.keys(this.domNode);
                  attributes.concat(classes).concat(styles).forEach(function(name) {
                    var attr = Registry.query(name, Registry.Scope.ATTRIBUTE);
                    if (attr instanceof attributor_1.default) {
                      _this.attributes[attr.attrName] = attr;
                    }
                  });
                };
                AttributorStore2.prototype.copy = function(target) {
                  var _this = this;
                  Object.keys(this.attributes).forEach(function(key) {
                    var value = _this.attributes[key].value(_this.domNode);
                    target.format(key, value);
                  });
                };
                AttributorStore2.prototype.move = function(target) {
                  var _this = this;
                  this.copy(target);
                  Object.keys(this.attributes).forEach(function(key) {
                    _this.attributes[key].remove(_this.domNode);
                  });
                  this.attributes = {};
                };
                AttributorStore2.prototype.values = function() {
                  var _this = this;
                  return Object.keys(this.attributes).reduce(function(attributes, name) {
                    attributes[name] = _this.attributes[name].value(_this.domNode);
                    return attributes;
                  }, {});
                };
                return AttributorStore2;
              }()
            );
            exports2.default = AttributorStore;
          },
          /* 32 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function() {
              var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
                d.__proto__ = b;
              } || function(d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
              };
              return function(d, b) {
                extendStatics(d, b);
                function __() {
                  this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
            }();
            Object.defineProperty(exports2, "__esModule", { value: true });
            var attributor_1 = __webpack_require__(12);
            function match(node, prefix) {
              var className = node.getAttribute("class") || "";
              return className.split(/\s+/).filter(function(name) {
                return name.indexOf(prefix + "-") === 0;
              });
            }
            var ClassAttributor = (
              /** @class */
              function(_super) {
                __extends(ClassAttributor2, _super);
                function ClassAttributor2() {
                  return _super !== null && _super.apply(this, arguments) || this;
                }
                ClassAttributor2.keys = function(node) {
                  return (node.getAttribute("class") || "").split(/\s+/).map(function(name) {
                    return name.split("-").slice(0, -1).join("-");
                  });
                };
                ClassAttributor2.prototype.add = function(node, value) {
                  if (!this.canAdd(node, value))
                    return false;
                  this.remove(node);
                  node.classList.add(this.keyName + "-" + value);
                  return true;
                };
                ClassAttributor2.prototype.remove = function(node) {
                  var matches = match(node, this.keyName);
                  matches.forEach(function(name) {
                    node.classList.remove(name);
                  });
                  if (node.classList.length === 0) {
                    node.removeAttribute("class");
                  }
                };
                ClassAttributor2.prototype.value = function(node) {
                  var result = match(node, this.keyName)[0] || "";
                  var value = result.slice(this.keyName.length + 1);
                  return this.canAdd(node, value) ? value : "";
                };
                return ClassAttributor2;
              }(attributor_1.default)
            );
            exports2.default = ClassAttributor;
          },
          /* 33 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function() {
              var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
                d.__proto__ = b;
              } || function(d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
              };
              return function(d, b) {
                extendStatics(d, b);
                function __() {
                  this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
            }();
            Object.defineProperty(exports2, "__esModule", { value: true });
            var attributor_1 = __webpack_require__(12);
            function camelize(name) {
              var parts = name.split("-");
              var rest = parts.slice(1).map(function(part) {
                return part[0].toUpperCase() + part.slice(1);
              }).join("");
              return parts[0] + rest;
            }
            var StyleAttributor = (
              /** @class */
              function(_super) {
                __extends(StyleAttributor2, _super);
                function StyleAttributor2() {
                  return _super !== null && _super.apply(this, arguments) || this;
                }
                StyleAttributor2.keys = function(node) {
                  return (node.getAttribute("style") || "").split(";").map(function(value) {
                    var arr = value.split(":");
                    return arr[0].trim();
                  });
                };
                StyleAttributor2.prototype.add = function(node, value) {
                  if (!this.canAdd(node, value))
                    return false;
                  node.style[camelize(this.keyName)] = value;
                  return true;
                };
                StyleAttributor2.prototype.remove = function(node) {
                  node.style[camelize(this.keyName)] = "";
                  if (!node.getAttribute("style")) {
                    node.removeAttribute("style");
                  }
                };
                StyleAttributor2.prototype.value = function(node) {
                  var value = node.style[camelize(this.keyName)];
                  return this.canAdd(node, value) ? value : "";
                };
                return StyleAttributor2;
              }(attributor_1.default)
            );
            exports2.default = StyleAttributor;
          },
          /* 34 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            var Theme = function() {
              function Theme2(quill, options) {
                _classCallCheck(this, Theme2);
                this.quill = quill;
                this.options = options;
                this.modules = {};
              }
              _createClass(Theme2, [{
                key: "init",
                value: function init() {
                  var _this = this;
                  Object.keys(this.options.modules).forEach(function(name) {
                    if (_this.modules[name] == null) {
                      _this.addModule(name);
                    }
                  });
                }
              }, {
                key: "addModule",
                value: function addModule(name) {
                  var moduleClass = this.quill.constructor.import("modules/" + name);
                  this.modules[name] = new moduleClass(this.quill, this.options.modules[name] || {});
                  return this.modules[name];
                }
              }]);
              return Theme2;
            }();
            Theme.DEFAULTS = {
              modules: {}
            };
            Theme.themes = {
              "default": Theme
            };
            exports2.default = Theme;
          },
          /* 35 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _get = function get(object, property, receiver) {
              if (object === null) object = Function.prototype;
              var desc = Object.getOwnPropertyDescriptor(object, property);
              if (desc === void 0) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                  return void 0;
                } else {
                  return get(parent, property, receiver);
                }
              } else if ("value" in desc) {
                return desc.value;
              } else {
                var getter = desc.get;
                if (getter === void 0) {
                  return void 0;
                }
                return getter.call(receiver);
              }
            };
            var _parchment = __webpack_require__(0);
            var _parchment2 = _interopRequireDefault(_parchment);
            var _text = __webpack_require__(7);
            var _text2 = _interopRequireDefault(_text);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var GUARD_TEXT = "\uFEFF";
            var Embed = function(_Parchment$Embed) {
              _inherits(Embed2, _Parchment$Embed);
              function Embed2(node) {
                _classCallCheck(this, Embed2);
                var _this = _possibleConstructorReturn(this, (Embed2.__proto__ || Object.getPrototypeOf(Embed2)).call(this, node));
                _this.contentNode = document.createElement("span");
                _this.contentNode.setAttribute("contenteditable", false);
                [].slice.call(_this.domNode.childNodes).forEach(function(childNode) {
                  _this.contentNode.appendChild(childNode);
                });
                _this.leftGuard = document.createTextNode(GUARD_TEXT);
                _this.rightGuard = document.createTextNode(GUARD_TEXT);
                _this.domNode.appendChild(_this.leftGuard);
                _this.domNode.appendChild(_this.contentNode);
                _this.domNode.appendChild(_this.rightGuard);
                return _this;
              }
              _createClass(Embed2, [{
                key: "index",
                value: function index(node, offset) {
                  if (node === this.leftGuard) return 0;
                  if (node === this.rightGuard) return 1;
                  return _get(Embed2.prototype.__proto__ || Object.getPrototypeOf(Embed2.prototype), "index", this).call(this, node, offset);
                }
              }, {
                key: "restore",
                value: function restore(node) {
                  var range = void 0, textNode = void 0;
                  var text2 = node.data.split(GUARD_TEXT).join("");
                  if (node === this.leftGuard) {
                    if (this.prev instanceof _text2.default) {
                      var prevLength = this.prev.length();
                      this.prev.insertAt(prevLength, text2);
                      range = {
                        startNode: this.prev.domNode,
                        startOffset: prevLength + text2.length
                      };
                    } else {
                      textNode = document.createTextNode(text2);
                      this.parent.insertBefore(_parchment2.default.create(textNode), this);
                      range = {
                        startNode: textNode,
                        startOffset: text2.length
                      };
                    }
                  } else if (node === this.rightGuard) {
                    if (this.next instanceof _text2.default) {
                      this.next.insertAt(0, text2);
                      range = {
                        startNode: this.next.domNode,
                        startOffset: text2.length
                      };
                    } else {
                      textNode = document.createTextNode(text2);
                      this.parent.insertBefore(_parchment2.default.create(textNode), this.next);
                      range = {
                        startNode: textNode,
                        startOffset: text2.length
                      };
                    }
                  }
                  node.data = GUARD_TEXT;
                  return range;
                }
              }, {
                key: "update",
                value: function update(mutations, context) {
                  var _this2 = this;
                  mutations.forEach(function(mutation) {
                    if (mutation.type === "characterData" && (mutation.target === _this2.leftGuard || mutation.target === _this2.rightGuard)) {
                      var range = _this2.restore(mutation.target);
                      if (range) context.range = range;
                    }
                  });
                }
              }]);
              return Embed2;
            }(_parchment2.default.Embed);
            exports2.default = Embed;
          },
          /* 36 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.AlignStyle = exports2.AlignClass = exports2.AlignAttribute = void 0;
            var _parchment = __webpack_require__(0);
            var _parchment2 = _interopRequireDefault(_parchment);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            var config = {
              scope: _parchment2.default.Scope.BLOCK,
              whitelist: ["right", "center", "justify"]
            };
            var AlignAttribute = new _parchment2.default.Attributor.Attribute("align", "align", config);
            var AlignClass = new _parchment2.default.Attributor.Class("align", "ql-align", config);
            var AlignStyle = new _parchment2.default.Attributor.Style("align", "text-align", config);
            exports2.AlignAttribute = AlignAttribute;
            exports2.AlignClass = AlignClass;
            exports2.AlignStyle = AlignStyle;
          },
          /* 37 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.BackgroundStyle = exports2.BackgroundClass = void 0;
            var _parchment = __webpack_require__(0);
            var _parchment2 = _interopRequireDefault(_parchment);
            var _color = __webpack_require__(26);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            var BackgroundClass = new _parchment2.default.Attributor.Class("background", "ql-bg", {
              scope: _parchment2.default.Scope.INLINE
            });
            var BackgroundStyle = new _color.ColorAttributor("background", "background-color", {
              scope: _parchment2.default.Scope.INLINE
            });
            exports2.BackgroundClass = BackgroundClass;
            exports2.BackgroundStyle = BackgroundStyle;
          },
          /* 38 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.DirectionStyle = exports2.DirectionClass = exports2.DirectionAttribute = void 0;
            var _parchment = __webpack_require__(0);
            var _parchment2 = _interopRequireDefault(_parchment);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            var config = {
              scope: _parchment2.default.Scope.BLOCK,
              whitelist: ["rtl"]
            };
            var DirectionAttribute = new _parchment2.default.Attributor.Attribute("direction", "dir", config);
            var DirectionClass = new _parchment2.default.Attributor.Class("direction", "ql-direction", config);
            var DirectionStyle = new _parchment2.default.Attributor.Style("direction", "direction", config);
            exports2.DirectionAttribute = DirectionAttribute;
            exports2.DirectionClass = DirectionClass;
            exports2.DirectionStyle = DirectionStyle;
          },
          /* 39 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.FontClass = exports2.FontStyle = void 0;
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _get = function get(object, property, receiver) {
              if (object === null) object = Function.prototype;
              var desc = Object.getOwnPropertyDescriptor(object, property);
              if (desc === void 0) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                  return void 0;
                } else {
                  return get(parent, property, receiver);
                }
              } else if ("value" in desc) {
                return desc.value;
              } else {
                var getter = desc.get;
                if (getter === void 0) {
                  return void 0;
                }
                return getter.call(receiver);
              }
            };
            var _parchment = __webpack_require__(0);
            var _parchment2 = _interopRequireDefault(_parchment);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var config = {
              scope: _parchment2.default.Scope.INLINE,
              whitelist: ["serif", "monospace"]
            };
            var FontClass = new _parchment2.default.Attributor.Class("font", "ql-font", config);
            var FontStyleAttributor = function(_Parchment$Attributor) {
              _inherits(FontStyleAttributor2, _Parchment$Attributor);
              function FontStyleAttributor2() {
                _classCallCheck(this, FontStyleAttributor2);
                return _possibleConstructorReturn(this, (FontStyleAttributor2.__proto__ || Object.getPrototypeOf(FontStyleAttributor2)).apply(this, arguments));
              }
              _createClass(FontStyleAttributor2, [{
                key: "value",
                value: function value(node) {
                  return _get(FontStyleAttributor2.prototype.__proto__ || Object.getPrototypeOf(FontStyleAttributor2.prototype), "value", this).call(this, node).replace(/["']/g, "");
                }
              }]);
              return FontStyleAttributor2;
            }(_parchment2.default.Attributor.Style);
            var FontStyle = new FontStyleAttributor("font", "font-family", config);
            exports2.FontStyle = FontStyle;
            exports2.FontClass = FontClass;
          },
          /* 40 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.SizeStyle = exports2.SizeClass = void 0;
            var _parchment = __webpack_require__(0);
            var _parchment2 = _interopRequireDefault(_parchment);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            var SizeClass = new _parchment2.default.Attributor.Class("size", "ql-size", {
              scope: _parchment2.default.Scope.INLINE,
              whitelist: ["small", "large", "huge"]
            });
            var SizeStyle = new _parchment2.default.Attributor.Style("size", "font-size", {
              scope: _parchment2.default.Scope.INLINE,
              whitelist: ["10px", "18px", "32px"]
            });
            exports2.SizeClass = SizeClass;
            exports2.SizeStyle = SizeStyle;
          },
          /* 41 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            module2.exports = {
              "align": {
                "": __webpack_require__(76),
                "center": __webpack_require__(77),
                "right": __webpack_require__(78),
                "justify": __webpack_require__(79)
              },
              "background": __webpack_require__(80),
              "blockquote": __webpack_require__(81),
              "bold": __webpack_require__(82),
              "clean": __webpack_require__(83),
              "code": __webpack_require__(58),
              "code-block": __webpack_require__(58),
              "color": __webpack_require__(84),
              "direction": {
                "": __webpack_require__(85),
                "rtl": __webpack_require__(86)
              },
              "float": {
                "center": __webpack_require__(87),
                "full": __webpack_require__(88),
                "left": __webpack_require__(89),
                "right": __webpack_require__(90)
              },
              "formula": __webpack_require__(91),
              "header": {
                "1": __webpack_require__(92),
                "2": __webpack_require__(93)
              },
              "italic": __webpack_require__(94),
              "image": __webpack_require__(95),
              "indent": {
                "+1": __webpack_require__(96),
                "-1": __webpack_require__(97)
              },
              "link": __webpack_require__(98),
              "list": {
                "ordered": __webpack_require__(99),
                "bullet": __webpack_require__(100),
                "check": __webpack_require__(101)
              },
              "script": {
                "sub": __webpack_require__(102),
                "super": __webpack_require__(103)
              },
              "strike": __webpack_require__(104),
              "underline": __webpack_require__(105),
              "video": __webpack_require__(106)
            };
          },
          /* 42 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.getLastChangeIndex = exports2.default = void 0;
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _parchment = __webpack_require__(0);
            var _parchment2 = _interopRequireDefault(_parchment);
            var _quill = __webpack_require__(5);
            var _quill2 = _interopRequireDefault(_quill);
            var _module = __webpack_require__(9);
            var _module2 = _interopRequireDefault(_module);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var History = function(_Module) {
              _inherits(History2, _Module);
              function History2(quill, options) {
                _classCallCheck(this, History2);
                var _this = _possibleConstructorReturn(this, (History2.__proto__ || Object.getPrototypeOf(History2)).call(this, quill, options));
                _this.lastRecorded = 0;
                _this.ignoreChange = false;
                _this.clear();
                _this.quill.on(_quill2.default.events.EDITOR_CHANGE, function(eventName, delta, oldDelta, source) {
                  if (eventName !== _quill2.default.events.TEXT_CHANGE || _this.ignoreChange) return;
                  if (!_this.options.userOnly || source === _quill2.default.sources.USER) {
                    _this.record(delta, oldDelta);
                  } else {
                    _this.transform(delta);
                  }
                });
                _this.quill.keyboard.addBinding({ key: "Z", shortKey: true }, _this.undo.bind(_this));
                _this.quill.keyboard.addBinding({ key: "Z", shortKey: true, shiftKey: true }, _this.redo.bind(_this));
                if (/Win/i.test(navigator.platform)) {
                  _this.quill.keyboard.addBinding({ key: "Y", shortKey: true }, _this.redo.bind(_this));
                }
                return _this;
              }
              _createClass(History2, [{
                key: "change",
                value: function change(source, dest) {
                  if (this.stack[source].length === 0) return;
                  var delta = this.stack[source].pop();
                  this.stack[dest].push(delta);
                  this.lastRecorded = 0;
                  this.ignoreChange = true;
                  this.quill.updateContents(delta[source], _quill2.default.sources.USER);
                  this.ignoreChange = false;
                  var index = getLastChangeIndex(delta[source]);
                  this.quill.setSelection(index);
                }
              }, {
                key: "clear",
                value: function clear() {
                  this.stack = { undo: [], redo: [] };
                }
              }, {
                key: "cutoff",
                value: function cutoff() {
                  this.lastRecorded = 0;
                }
              }, {
                key: "record",
                value: function record(changeDelta, oldDelta) {
                  if (changeDelta.ops.length === 0) return;
                  this.stack.redo = [];
                  var undoDelta = this.quill.getContents().diff(oldDelta);
                  var timestamp = Date.now();
                  if (this.lastRecorded + this.options.delay > timestamp && this.stack.undo.length > 0) {
                    var delta = this.stack.undo.pop();
                    undoDelta = undoDelta.compose(delta.undo);
                    changeDelta = delta.redo.compose(changeDelta);
                  } else {
                    this.lastRecorded = timestamp;
                  }
                  this.stack.undo.push({
                    redo: changeDelta,
                    undo: undoDelta
                  });
                  if (this.stack.undo.length > this.options.maxStack) {
                    this.stack.undo.shift();
                  }
                }
              }, {
                key: "redo",
                value: function redo() {
                  this.change("redo", "undo");
                }
              }, {
                key: "transform",
                value: function transform(delta) {
                  this.stack.undo.forEach(function(change) {
                    change.undo = delta.transform(change.undo, true);
                    change.redo = delta.transform(change.redo, true);
                  });
                  this.stack.redo.forEach(function(change) {
                    change.undo = delta.transform(change.undo, true);
                    change.redo = delta.transform(change.redo, true);
                  });
                }
              }, {
                key: "undo",
                value: function undo() {
                  this.change("undo", "redo");
                }
              }]);
              return History2;
            }(_module2.default);
            History.DEFAULTS = {
              delay: 1e3,
              maxStack: 100,
              userOnly: false
            };
            function endsWithNewlineChange(delta) {
              var lastOp = delta.ops[delta.ops.length - 1];
              if (lastOp == null) return false;
              if (lastOp.insert != null) {
                return typeof lastOp.insert === "string" && lastOp.insert.endsWith("\n");
              }
              if (lastOp.attributes != null) {
                return Object.keys(lastOp.attributes).some(function(attr) {
                  return _parchment2.default.query(attr, _parchment2.default.Scope.BLOCK) != null;
                });
              }
              return false;
            }
            function getLastChangeIndex(delta) {
              var deleteLength = delta.reduce(function(length3, op) {
                length3 += op.delete || 0;
                return length3;
              }, 0);
              var changeIndex = delta.length() - deleteLength;
              if (endsWithNewlineChange(delta)) {
                changeIndex -= 1;
              }
              return changeIndex;
            }
            exports2.default = History;
            exports2.getLastChangeIndex = getLastChangeIndex;
          },
          /* 43 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.default = exports2.BaseTooltip = void 0;
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _get = function get(object, property, receiver) {
              if (object === null) object = Function.prototype;
              var desc = Object.getOwnPropertyDescriptor(object, property);
              if (desc === void 0) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                  return void 0;
                } else {
                  return get(parent, property, receiver);
                }
              } else if ("value" in desc) {
                return desc.value;
              } else {
                var getter = desc.get;
                if (getter === void 0) {
                  return void 0;
                }
                return getter.call(receiver);
              }
            };
            var _extend = __webpack_require__(3);
            var _extend2 = _interopRequireDefault(_extend);
            var _quillDelta = __webpack_require__(2);
            var _quillDelta2 = _interopRequireDefault(_quillDelta);
            var _emitter = __webpack_require__(8);
            var _emitter2 = _interopRequireDefault(_emitter);
            var _keyboard = __webpack_require__(23);
            var _keyboard2 = _interopRequireDefault(_keyboard);
            var _theme = __webpack_require__(34);
            var _theme2 = _interopRequireDefault(_theme);
            var _colorPicker = __webpack_require__(59);
            var _colorPicker2 = _interopRequireDefault(_colorPicker);
            var _iconPicker = __webpack_require__(60);
            var _iconPicker2 = _interopRequireDefault(_iconPicker);
            var _picker = __webpack_require__(28);
            var _picker2 = _interopRequireDefault(_picker);
            var _tooltip = __webpack_require__(61);
            var _tooltip2 = _interopRequireDefault(_tooltip);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var ALIGNS = [false, "center", "right", "justify"];
            var COLORS = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"];
            var FONTS = [false, "serif", "monospace"];
            var HEADERS = ["1", "2", "3", false];
            var SIZES = ["small", false, "large", "huge"];
            var BaseTheme = function(_Theme) {
              _inherits(BaseTheme2, _Theme);
              function BaseTheme2(quill, options) {
                _classCallCheck(this, BaseTheme2);
                var _this = _possibleConstructorReturn(this, (BaseTheme2.__proto__ || Object.getPrototypeOf(BaseTheme2)).call(this, quill, options));
                var listener = function listener2(e) {
                  if (!document.body.contains(quill.root)) {
                    return document.body.removeEventListener("click", listener2);
                  }
                  if (_this.tooltip != null && !_this.tooltip.root.contains(e.target) && document.activeElement !== _this.tooltip.textbox && !_this.quill.hasFocus()) {
                    _this.tooltip.hide();
                  }
                  if (_this.pickers != null) {
                    _this.pickers.forEach(function(picker) {
                      if (!picker.container.contains(e.target)) {
                        picker.close();
                      }
                    });
                  }
                };
                quill.emitter.listenDOM("click", document.body, listener);
                return _this;
              }
              _createClass(BaseTheme2, [{
                key: "addModule",
                value: function addModule(name) {
                  var module3 = _get(BaseTheme2.prototype.__proto__ || Object.getPrototypeOf(BaseTheme2.prototype), "addModule", this).call(this, name);
                  if (name === "toolbar") {
                    this.extendToolbar(module3);
                  }
                  return module3;
                }
              }, {
                key: "buildButtons",
                value: function buildButtons(buttons, icons) {
                  buttons.forEach(function(button) {
                    var className = button.getAttribute("class") || "";
                    className.split(/\s+/).forEach(function(name) {
                      if (!name.startsWith("ql-")) return;
                      name = name.slice("ql-".length);
                      if (icons[name] == null) return;
                      if (name === "direction") {
                        button.innerHTML = icons[name][""] + icons[name]["rtl"];
                      } else if (typeof icons[name] === "string") {
                        button.innerHTML = icons[name];
                      } else {
                        var value = button.value || "";
                        if (value != null && icons[name][value]) {
                          button.innerHTML = icons[name][value];
                        }
                      }
                    });
                  });
                }
              }, {
                key: "buildPickers",
                value: function buildPickers(selects, icons) {
                  var _this2 = this;
                  this.pickers = selects.map(function(select) {
                    if (select.classList.contains("ql-align")) {
                      if (select.querySelector("option") == null) {
                        fillSelect(select, ALIGNS);
                      }
                      return new _iconPicker2.default(select, icons.align);
                    } else if (select.classList.contains("ql-background") || select.classList.contains("ql-color")) {
                      var format = select.classList.contains("ql-background") ? "background" : "color";
                      if (select.querySelector("option") == null) {
                        fillSelect(select, COLORS, format === "background" ? "#ffffff" : "#000000");
                      }
                      return new _colorPicker2.default(select, icons[format]);
                    } else {
                      if (select.querySelector("option") == null) {
                        if (select.classList.contains("ql-font")) {
                          fillSelect(select, FONTS);
                        } else if (select.classList.contains("ql-header")) {
                          fillSelect(select, HEADERS);
                        } else if (select.classList.contains("ql-size")) {
                          fillSelect(select, SIZES);
                        }
                      }
                      return new _picker2.default(select);
                    }
                  });
                  var update = function update2() {
                    _this2.pickers.forEach(function(picker) {
                      picker.update();
                    });
                  };
                  this.quill.on(_emitter2.default.events.EDITOR_CHANGE, update);
                }
              }]);
              return BaseTheme2;
            }(_theme2.default);
            BaseTheme.DEFAULTS = (0, _extend2.default)(true, {}, _theme2.default.DEFAULTS, {
              modules: {
                toolbar: {
                  handlers: {
                    formula: function formula() {
                      this.quill.theme.tooltip.edit("formula");
                    },
                    image: function image() {
                      var _this3 = this;
                      var fileInput = this.container.querySelector("input.ql-image[type=file]");
                      if (fileInput == null) {
                        fileInput = document.createElement("input");
                        fileInput.setAttribute("type", "file");
                        fileInput.setAttribute("accept", "image/png, image/gif, image/jpeg, image/bmp, image/x-icon");
                        fileInput.classList.add("ql-image");
                        fileInput.addEventListener("change", function() {
                          if (fileInput.files != null && fileInput.files[0] != null) {
                            var reader = new FileReader();
                            reader.onload = function(e) {
                              var range = _this3.quill.getSelection(true);
                              _this3.quill.updateContents(new _quillDelta2.default().retain(range.index).delete(range.length).insert({ image: e.target.result }), _emitter2.default.sources.USER);
                              _this3.quill.setSelection(range.index + 1, _emitter2.default.sources.SILENT);
                              fileInput.value = "";
                            };
                            reader.readAsDataURL(fileInput.files[0]);
                          }
                        });
                        this.container.appendChild(fileInput);
                      }
                      fileInput.click();
                    },
                    video: function video() {
                      this.quill.theme.tooltip.edit("video");
                    }
                  }
                }
              }
            });
            var BaseTooltip = function(_Tooltip) {
              _inherits(BaseTooltip2, _Tooltip);
              function BaseTooltip2(quill, boundsContainer) {
                _classCallCheck(this, BaseTooltip2);
                var _this4 = _possibleConstructorReturn(this, (BaseTooltip2.__proto__ || Object.getPrototypeOf(BaseTooltip2)).call(this, quill, boundsContainer));
                _this4.textbox = _this4.root.querySelector('input[type="text"]');
                _this4.listen();
                return _this4;
              }
              _createClass(BaseTooltip2, [{
                key: "listen",
                value: function listen() {
                  var _this5 = this;
                  this.textbox.addEventListener("keydown", function(event) {
                    if (_keyboard2.default.match(event, "enter")) {
                      _this5.save();
                      event.preventDefault();
                    } else if (_keyboard2.default.match(event, "escape")) {
                      _this5.cancel();
                      event.preventDefault();
                    }
                  });
                }
              }, {
                key: "cancel",
                value: function cancel() {
                  this.hide();
                }
              }, {
                key: "edit",
                value: function edit() {
                  var mode = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "link";
                  var preview = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                  this.root.classList.remove("ql-hidden");
                  this.root.classList.add("ql-editing");
                  if (preview != null) {
                    this.textbox.value = preview;
                  } else if (mode !== this.root.getAttribute("data-mode")) {
                    this.textbox.value = "";
                  }
                  this.position(this.quill.getBounds(this.quill.selection.savedRange));
                  this.textbox.select();
                  this.textbox.setAttribute("placeholder", this.textbox.getAttribute("data-" + mode) || "");
                  this.root.setAttribute("data-mode", mode);
                }
              }, {
                key: "restoreFocus",
                value: function restoreFocus() {
                  var scrollTop = this.quill.scrollingContainer.scrollTop;
                  this.quill.focus();
                  this.quill.scrollingContainer.scrollTop = scrollTop;
                }
              }, {
                key: "save",
                value: function save() {
                  var value = this.textbox.value;
                  switch (this.root.getAttribute("data-mode")) {
                    case "link": {
                      var scrollTop = this.quill.root.scrollTop;
                      if (this.linkRange) {
                        this.quill.formatText(this.linkRange, "link", value, _emitter2.default.sources.USER);
                        delete this.linkRange;
                      } else {
                        this.restoreFocus();
                        this.quill.format("link", value, _emitter2.default.sources.USER);
                      }
                      this.quill.root.scrollTop = scrollTop;
                      break;
                    }
                    case "video": {
                      value = extractVideoUrl(value);
                    }
                    case "formula": {
                      if (!value) break;
                      var range = this.quill.getSelection(true);
                      if (range != null) {
                        var index = range.index + range.length;
                        this.quill.insertEmbed(index, this.root.getAttribute("data-mode"), value, _emitter2.default.sources.USER);
                        if (this.root.getAttribute("data-mode") === "formula") {
                          this.quill.insertText(index + 1, " ", _emitter2.default.sources.USER);
                        }
                        this.quill.setSelection(index + 2, _emitter2.default.sources.USER);
                      }
                      break;
                    }
                    default:
                  }
                  this.textbox.value = "";
                  this.hide();
                }
              }]);
              return BaseTooltip2;
            }(_tooltip2.default);
            function extractVideoUrl(url) {
              var match = url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
              if (match) {
                return (match[1] || "https") + "://www.youtube.com/embed/" + match[2] + "?showinfo=0";
              }
              if (match = url.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) {
                return (match[1] || "https") + "://player.vimeo.com/video/" + match[2] + "/";
              }
              return url;
            }
            function fillSelect(select, values) {
              var defaultValue = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
              values.forEach(function(value) {
                var option = document.createElement("option");
                if (value === defaultValue) {
                  option.setAttribute("selected", "selected");
                } else {
                  option.setAttribute("value", value);
                }
                select.appendChild(option);
              });
            }
            exports2.BaseTooltip = BaseTooltip;
            exports2.default = BaseTheme;
          },
          /* 44 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", { value: true });
            var LinkedList = (
              /** @class */
              function() {
                function LinkedList2() {
                  this.head = this.tail = null;
                  this.length = 0;
                }
                LinkedList2.prototype.append = function() {
                  var nodes = [];
                  for (var _i = 0; _i < arguments.length; _i++) {
                    nodes[_i] = arguments[_i];
                  }
                  this.insertBefore(nodes[0], null);
                  if (nodes.length > 1) {
                    this.append.apply(this, nodes.slice(1));
                  }
                };
                LinkedList2.prototype.contains = function(node) {
                  var cur, next = this.iterator();
                  while (cur = next()) {
                    if (cur === node)
                      return true;
                  }
                  return false;
                };
                LinkedList2.prototype.insertBefore = function(node, refNode) {
                  if (!node)
                    return;
                  node.next = refNode;
                  if (refNode != null) {
                    node.prev = refNode.prev;
                    if (refNode.prev != null) {
                      refNode.prev.next = node;
                    }
                    refNode.prev = node;
                    if (refNode === this.head) {
                      this.head = node;
                    }
                  } else if (this.tail != null) {
                    this.tail.next = node;
                    node.prev = this.tail;
                    this.tail = node;
                  } else {
                    node.prev = null;
                    this.head = this.tail = node;
                  }
                  this.length += 1;
                };
                LinkedList2.prototype.offset = function(target) {
                  var index = 0, cur = this.head;
                  while (cur != null) {
                    if (cur === target)
                      return index;
                    index += cur.length();
                    cur = cur.next;
                  }
                  return -1;
                };
                LinkedList2.prototype.remove = function(node) {
                  if (!this.contains(node))
                    return;
                  if (node.prev != null)
                    node.prev.next = node.next;
                  if (node.next != null)
                    node.next.prev = node.prev;
                  if (node === this.head)
                    this.head = node.next;
                  if (node === this.tail)
                    this.tail = node.prev;
                  this.length -= 1;
                };
                LinkedList2.prototype.iterator = function(curNode) {
                  if (curNode === void 0) {
                    curNode = this.head;
                  }
                  return function() {
                    var ret = curNode;
                    if (curNode != null)
                      curNode = curNode.next;
                    return ret;
                  };
                };
                LinkedList2.prototype.find = function(index, inclusive) {
                  if (inclusive === void 0) {
                    inclusive = false;
                  }
                  var cur, next = this.iterator();
                  while (cur = next()) {
                    var length3 = cur.length();
                    if (index < length3 || inclusive && index === length3 && (cur.next == null || cur.next.length() !== 0)) {
                      return [cur, index];
                    }
                    index -= length3;
                  }
                  return [null, 0];
                };
                LinkedList2.prototype.forEach = function(callback) {
                  var cur, next = this.iterator();
                  while (cur = next()) {
                    callback(cur);
                  }
                };
                LinkedList2.prototype.forEachAt = function(index, length3, callback) {
                  if (length3 <= 0)
                    return;
                  var _a = this.find(index), startNode = _a[0], offset = _a[1];
                  var cur, curIndex = index - offset, next = this.iterator(startNode);
                  while ((cur = next()) && curIndex < index + length3) {
                    var curLength = cur.length();
                    if (index > curIndex) {
                      callback(cur, index - curIndex, Math.min(length3, curIndex + curLength - index));
                    } else {
                      callback(cur, 0, Math.min(curLength, index + length3 - curIndex));
                    }
                    curIndex += curLength;
                  }
                };
                LinkedList2.prototype.map = function(callback) {
                  return this.reduce(function(memo, cur) {
                    memo.push(callback(cur));
                    return memo;
                  }, []);
                };
                LinkedList2.prototype.reduce = function(callback, memo) {
                  var cur, next = this.iterator();
                  while (cur = next()) {
                    memo = callback(memo, cur);
                  }
                  return memo;
                };
                return LinkedList2;
              }()
            );
            exports2.default = LinkedList;
          },
          /* 45 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function() {
              var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
                d.__proto__ = b;
              } || function(d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
              };
              return function(d, b) {
                extendStatics(d, b);
                function __() {
                  this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
            }();
            Object.defineProperty(exports2, "__esModule", { value: true });
            var container_1 = __webpack_require__(17);
            var Registry = __webpack_require__(1);
            var OBSERVER_CONFIG = {
              attributes: true,
              characterData: true,
              characterDataOldValue: true,
              childList: true,
              subtree: true
            };
            var MAX_OPTIMIZE_ITERATIONS = 100;
            var ScrollBlot = (
              /** @class */
              function(_super) {
                __extends(ScrollBlot2, _super);
                function ScrollBlot2(node) {
                  var _this = _super.call(this, node) || this;
                  _this.scroll = _this;
                  _this.observer = new MutationObserver(function(mutations) {
                    _this.update(mutations);
                  });
                  _this.observer.observe(_this.domNode, OBSERVER_CONFIG);
                  _this.attach();
                  return _this;
                }
                ScrollBlot2.prototype.detach = function() {
                  _super.prototype.detach.call(this);
                  this.observer.disconnect();
                };
                ScrollBlot2.prototype.deleteAt = function(index, length3) {
                  this.update();
                  if (index === 0 && length3 === this.length()) {
                    this.children.forEach(function(child) {
                      child.remove();
                    });
                  } else {
                    _super.prototype.deleteAt.call(this, index, length3);
                  }
                };
                ScrollBlot2.prototype.formatAt = function(index, length3, name, value) {
                  this.update();
                  _super.prototype.formatAt.call(this, index, length3, name, value);
                };
                ScrollBlot2.prototype.insertAt = function(index, value, def) {
                  this.update();
                  _super.prototype.insertAt.call(this, index, value, def);
                };
                ScrollBlot2.prototype.optimize = function(mutations, context) {
                  var _this = this;
                  if (mutations === void 0) {
                    mutations = [];
                  }
                  if (context === void 0) {
                    context = {};
                  }
                  _super.prototype.optimize.call(this, context);
                  var records = [].slice.call(this.observer.takeRecords());
                  while (records.length > 0)
                    mutations.push(records.pop());
                  var mark = function(blot, markParent) {
                    if (markParent === void 0) {
                      markParent = true;
                    }
                    if (blot == null || blot === _this)
                      return;
                    if (blot.domNode.parentNode == null)
                      return;
                    if (blot.domNode[Registry.DATA_KEY].mutations == null) {
                      blot.domNode[Registry.DATA_KEY].mutations = [];
                    }
                    if (markParent)
                      mark(blot.parent);
                  };
                  var optimize = function(blot) {
                    if (
                      // @ts-ignore
                      blot.domNode[Registry.DATA_KEY] == null || // @ts-ignore
                      blot.domNode[Registry.DATA_KEY].mutations == null
                    ) {
                      return;
                    }
                    if (blot instanceof container_1.default) {
                      blot.children.forEach(optimize);
                    }
                    blot.optimize(context);
                  };
                  var remaining = mutations;
                  for (var i = 0; remaining.length > 0; i += 1) {
                    if (i >= MAX_OPTIMIZE_ITERATIONS) {
                      throw new Error("[Parchment] Maximum optimize iterations reached");
                    }
                    remaining.forEach(function(mutation) {
                      var blot = Registry.find(mutation.target, true);
                      if (blot == null)
                        return;
                      if (blot.domNode === mutation.target) {
                        if (mutation.type === "childList") {
                          mark(Registry.find(mutation.previousSibling, false));
                          [].forEach.call(mutation.addedNodes, function(node) {
                            var child = Registry.find(node, false);
                            mark(child, false);
                            if (child instanceof container_1.default) {
                              child.children.forEach(function(grandChild) {
                                mark(grandChild, false);
                              });
                            }
                          });
                        } else if (mutation.type === "attributes") {
                          mark(blot.prev);
                        }
                      }
                      mark(blot);
                    });
                    this.children.forEach(optimize);
                    remaining = [].slice.call(this.observer.takeRecords());
                    records = remaining.slice();
                    while (records.length > 0)
                      mutations.push(records.pop());
                  }
                };
                ScrollBlot2.prototype.update = function(mutations, context) {
                  var _this = this;
                  if (context === void 0) {
                    context = {};
                  }
                  mutations = mutations || this.observer.takeRecords();
                  mutations.map(function(mutation) {
                    var blot = Registry.find(mutation.target, true);
                    if (blot == null)
                      return null;
                    if (blot.domNode[Registry.DATA_KEY].mutations == null) {
                      blot.domNode[Registry.DATA_KEY].mutations = [mutation];
                      return blot;
                    } else {
                      blot.domNode[Registry.DATA_KEY].mutations.push(mutation);
                      return null;
                    }
                  }).forEach(function(blot) {
                    if (blot == null || blot === _this || //@ts-ignore
                    blot.domNode[Registry.DATA_KEY] == null)
                      return;
                    blot.update(blot.domNode[Registry.DATA_KEY].mutations || [], context);
                  });
                  if (this.domNode[Registry.DATA_KEY].mutations != null) {
                    _super.prototype.update.call(this, this.domNode[Registry.DATA_KEY].mutations, context);
                  }
                  this.optimize(mutations, context);
                };
                ScrollBlot2.blotName = "scroll";
                ScrollBlot2.defaultChild = "block";
                ScrollBlot2.scope = Registry.Scope.BLOCK_BLOT;
                ScrollBlot2.tagName = "DIV";
                return ScrollBlot2;
              }(container_1.default)
            );
            exports2.default = ScrollBlot;
          },
          /* 46 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function() {
              var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
                d.__proto__ = b;
              } || function(d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
              };
              return function(d, b) {
                extendStatics(d, b);
                function __() {
                  this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
            }();
            Object.defineProperty(exports2, "__esModule", { value: true });
            var format_1 = __webpack_require__(18);
            var Registry = __webpack_require__(1);
            function isEqual(obj1, obj2) {
              if (Object.keys(obj1).length !== Object.keys(obj2).length)
                return false;
              for (var prop in obj1) {
                if (obj1[prop] !== obj2[prop])
                  return false;
              }
              return true;
            }
            var InlineBlot = (
              /** @class */
              function(_super) {
                __extends(InlineBlot2, _super);
                function InlineBlot2() {
                  return _super !== null && _super.apply(this, arguments) || this;
                }
                InlineBlot2.formats = function(domNode) {
                  if (domNode.tagName === InlineBlot2.tagName)
                    return void 0;
                  return _super.formats.call(this, domNode);
                };
                InlineBlot2.prototype.format = function(name, value) {
                  var _this = this;
                  if (name === this.statics.blotName && !value) {
                    this.children.forEach(function(child) {
                      if (!(child instanceof format_1.default)) {
                        child = child.wrap(InlineBlot2.blotName, true);
                      }
                      _this.attributes.copy(child);
                    });
                    this.unwrap();
                  } else {
                    _super.prototype.format.call(this, name, value);
                  }
                };
                InlineBlot2.prototype.formatAt = function(index, length3, name, value) {
                  if (this.formats()[name] != null || Registry.query(name, Registry.Scope.ATTRIBUTE)) {
                    var blot = this.isolate(index, length3);
                    blot.format(name, value);
                  } else {
                    _super.prototype.formatAt.call(this, index, length3, name, value);
                  }
                };
                InlineBlot2.prototype.optimize = function(context) {
                  _super.prototype.optimize.call(this, context);
                  var formats = this.formats();
                  if (Object.keys(formats).length === 0) {
                    return this.unwrap();
                  }
                  var next = this.next;
                  if (next instanceof InlineBlot2 && next.prev === this && isEqual(formats, next.formats())) {
                    next.moveChildren(this);
                    next.remove();
                  }
                };
                InlineBlot2.blotName = "inline";
                InlineBlot2.scope = Registry.Scope.INLINE_BLOT;
                InlineBlot2.tagName = "SPAN";
                return InlineBlot2;
              }(format_1.default)
            );
            exports2.default = InlineBlot;
          },
          /* 47 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function() {
              var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
                d.__proto__ = b;
              } || function(d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
              };
              return function(d, b) {
                extendStatics(d, b);
                function __() {
                  this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
            }();
            Object.defineProperty(exports2, "__esModule", { value: true });
            var format_1 = __webpack_require__(18);
            var Registry = __webpack_require__(1);
            var BlockBlot = (
              /** @class */
              function(_super) {
                __extends(BlockBlot2, _super);
                function BlockBlot2() {
                  return _super !== null && _super.apply(this, arguments) || this;
                }
                BlockBlot2.formats = function(domNode) {
                  var tagName = Registry.query(BlockBlot2.blotName).tagName;
                  if (domNode.tagName === tagName)
                    return void 0;
                  return _super.formats.call(this, domNode);
                };
                BlockBlot2.prototype.format = function(name, value) {
                  if (Registry.query(name, Registry.Scope.BLOCK) == null) {
                    return;
                  } else if (name === this.statics.blotName && !value) {
                    this.replaceWith(BlockBlot2.blotName);
                  } else {
                    _super.prototype.format.call(this, name, value);
                  }
                };
                BlockBlot2.prototype.formatAt = function(index, length3, name, value) {
                  if (Registry.query(name, Registry.Scope.BLOCK) != null) {
                    this.format(name, value);
                  } else {
                    _super.prototype.formatAt.call(this, index, length3, name, value);
                  }
                };
                BlockBlot2.prototype.insertAt = function(index, value, def) {
                  if (def == null || Registry.query(value, Registry.Scope.INLINE) != null) {
                    _super.prototype.insertAt.call(this, index, value, def);
                  } else {
                    var after = this.split(index);
                    var blot = Registry.create(value, def);
                    after.parent.insertBefore(blot, after);
                  }
                };
                BlockBlot2.prototype.update = function(mutations, context) {
                  if (navigator.userAgent.match(/Trident/)) {
                    this.build();
                  } else {
                    _super.prototype.update.call(this, mutations, context);
                  }
                };
                BlockBlot2.blotName = "block";
                BlockBlot2.scope = Registry.Scope.BLOCK_BLOT;
                BlockBlot2.tagName = "P";
                return BlockBlot2;
              }(format_1.default)
            );
            exports2.default = BlockBlot;
          },
          /* 48 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function() {
              var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
                d.__proto__ = b;
              } || function(d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
              };
              return function(d, b) {
                extendStatics(d, b);
                function __() {
                  this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
            }();
            Object.defineProperty(exports2, "__esModule", { value: true });
            var leaf_1 = __webpack_require__(19);
            var EmbedBlot = (
              /** @class */
              function(_super) {
                __extends(EmbedBlot2, _super);
                function EmbedBlot2() {
                  return _super !== null && _super.apply(this, arguments) || this;
                }
                EmbedBlot2.formats = function(domNode) {
                  return void 0;
                };
                EmbedBlot2.prototype.format = function(name, value) {
                  _super.prototype.formatAt.call(this, 0, this.length(), name, value);
                };
                EmbedBlot2.prototype.formatAt = function(index, length3, name, value) {
                  if (index === 0 && length3 === this.length()) {
                    this.format(name, value);
                  } else {
                    _super.prototype.formatAt.call(this, index, length3, name, value);
                  }
                };
                EmbedBlot2.prototype.formats = function() {
                  return this.statics.formats(this.domNode);
                };
                return EmbedBlot2;
              }(leaf_1.default)
            );
            exports2.default = EmbedBlot;
          },
          /* 49 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function() {
              var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
                d.__proto__ = b;
              } || function(d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
              };
              return function(d, b) {
                extendStatics(d, b);
                function __() {
                  this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              };
            }();
            Object.defineProperty(exports2, "__esModule", { value: true });
            var leaf_1 = __webpack_require__(19);
            var Registry = __webpack_require__(1);
            var TextBlot = (
              /** @class */
              function(_super) {
                __extends(TextBlot2, _super);
                function TextBlot2(node) {
                  var _this = _super.call(this, node) || this;
                  _this.text = _this.statics.value(_this.domNode);
                  return _this;
                }
                TextBlot2.create = function(value) {
                  return document.createTextNode(value);
                };
                TextBlot2.value = function(domNode) {
                  var text2 = domNode.data;
                  if (text2["normalize"])
                    text2 = text2["normalize"]();
                  return text2;
                };
                TextBlot2.prototype.deleteAt = function(index, length3) {
                  this.domNode.data = this.text = this.text.slice(0, index) + this.text.slice(index + length3);
                };
                TextBlot2.prototype.index = function(node, offset) {
                  if (this.domNode === node) {
                    return offset;
                  }
                  return -1;
                };
                TextBlot2.prototype.insertAt = function(index, value, def) {
                  if (def == null) {
                    this.text = this.text.slice(0, index) + value + this.text.slice(index);
                    this.domNode.data = this.text;
                  } else {
                    _super.prototype.insertAt.call(this, index, value, def);
                  }
                };
                TextBlot2.prototype.length = function() {
                  return this.text.length;
                };
                TextBlot2.prototype.optimize = function(context) {
                  _super.prototype.optimize.call(this, context);
                  this.text = this.statics.value(this.domNode);
                  if (this.text.length === 0) {
                    this.remove();
                  } else if (this.next instanceof TextBlot2 && this.next.prev === this) {
                    this.insertAt(this.length(), this.next.value());
                    this.next.remove();
                  }
                };
                TextBlot2.prototype.position = function(index, inclusive) {
                  if (inclusive === void 0) {
                    inclusive = false;
                  }
                  return [this.domNode, index];
                };
                TextBlot2.prototype.split = function(index, force) {
                  if (force === void 0) {
                    force = false;
                  }
                  if (!force) {
                    if (index === 0)
                      return this;
                    if (index === this.length())
                      return this.next;
                  }
                  var after = Registry.create(this.domNode.splitText(index));
                  this.parent.insertBefore(after, this.next);
                  this.text = this.statics.value(this.domNode);
                  return after;
                };
                TextBlot2.prototype.update = function(mutations, context) {
                  var _this = this;
                  if (mutations.some(function(mutation) {
                    return mutation.type === "characterData" && mutation.target === _this.domNode;
                  })) {
                    this.text = this.statics.value(this.domNode);
                  }
                };
                TextBlot2.prototype.value = function() {
                  return this.text;
                };
                TextBlot2.blotName = "text";
                TextBlot2.scope = Registry.Scope.INLINE_BLOT;
                return TextBlot2;
              }(leaf_1.default)
            );
            exports2.default = TextBlot;
          },
          /* 50 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            var elem = document.createElement("div");
            elem.classList.toggle("test-class", false);
            if (elem.classList.contains("test-class")) {
              var _toggle = DOMTokenList.prototype.toggle;
              DOMTokenList.prototype.toggle = function(token, force) {
                if (arguments.length > 1 && !this.contains(token) === !force) {
                  return force;
                } else {
                  return _toggle.call(this, token);
                }
              };
            }
            if (!String.prototype.startsWith) {
              String.prototype.startsWith = function(searchString, position) {
                position = position || 0;
                return this.substr(position, searchString.length) === searchString;
              };
            }
            if (!String.prototype.endsWith) {
              String.prototype.endsWith = function(searchString, position) {
                var subjectString = this.toString();
                if (typeof position !== "number" || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
                  position = subjectString.length;
                }
                position -= searchString.length;
                var lastIndex = subjectString.indexOf(searchString, position);
                return lastIndex !== -1 && lastIndex === position;
              };
            }
            if (!Array.prototype.find) {
              Object.defineProperty(Array.prototype, "find", {
                value: function value(predicate) {
                  if (this === null) {
                    throw new TypeError("Array.prototype.find called on null or undefined");
                  }
                  if (typeof predicate !== "function") {
                    throw new TypeError("predicate must be a function");
                  }
                  var list = Object(this);
                  var length3 = list.length >>> 0;
                  var thisArg = arguments[1];
                  var value2;
                  for (var i = 0; i < length3; i++) {
                    value2 = list[i];
                    if (predicate.call(thisArg, value2, i, list)) {
                      return value2;
                    }
                  }
                  return void 0;
                }
              });
            }
            document.addEventListener("DOMContentLoaded", function() {
              document.execCommand("enableObjectResizing", false, false);
              document.execCommand("autoUrlDetect", false, false);
            });
          },
          /* 51 */
          /***/
          function(module2, exports2) {
            var DIFF_DELETE = -1;
            var DIFF_INSERT = 1;
            var DIFF_EQUAL = 0;
            function diff_main(text1, text2, cursor_pos) {
              if (text1 == text2) {
                if (text1) {
                  return [[DIFF_EQUAL, text1]];
                }
                return [];
              }
              if (cursor_pos < 0 || text1.length < cursor_pos) {
                cursor_pos = null;
              }
              var commonlength = diff_commonPrefix(text1, text2);
              var commonprefix = text1.substring(0, commonlength);
              text1 = text1.substring(commonlength);
              text2 = text2.substring(commonlength);
              commonlength = diff_commonSuffix(text1, text2);
              var commonsuffix = text1.substring(text1.length - commonlength);
              text1 = text1.substring(0, text1.length - commonlength);
              text2 = text2.substring(0, text2.length - commonlength);
              var diffs = diff_compute_(text1, text2);
              if (commonprefix) {
                diffs.unshift([DIFF_EQUAL, commonprefix]);
              }
              if (commonsuffix) {
                diffs.push([DIFF_EQUAL, commonsuffix]);
              }
              diff_cleanupMerge(diffs);
              if (cursor_pos != null) {
                diffs = fix_cursor(diffs, cursor_pos);
              }
              diffs = fix_emoji(diffs);
              return diffs;
            }
            ;
            function diff_compute_(text1, text2) {
              var diffs;
              if (!text1) {
                return [[DIFF_INSERT, text2]];
              }
              if (!text2) {
                return [[DIFF_DELETE, text1]];
              }
              var longtext = text1.length > text2.length ? text1 : text2;
              var shorttext = text1.length > text2.length ? text2 : text1;
              var i = longtext.indexOf(shorttext);
              if (i != -1) {
                diffs = [
                  [DIFF_INSERT, longtext.substring(0, i)],
                  [DIFF_EQUAL, shorttext],
                  [DIFF_INSERT, longtext.substring(i + shorttext.length)]
                ];
                if (text1.length > text2.length) {
                  diffs[0][0] = diffs[2][0] = DIFF_DELETE;
                }
                return diffs;
              }
              if (shorttext.length == 1) {
                return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
              }
              var hm = diff_halfMatch_(text1, text2);
              if (hm) {
                var text1_a = hm[0];
                var text1_b = hm[1];
                var text2_a = hm[2];
                var text2_b = hm[3];
                var mid_common = hm[4];
                var diffs_a = diff_main(text1_a, text2_a);
                var diffs_b = diff_main(text1_b, text2_b);
                return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
              }
              return diff_bisect_(text1, text2);
            }
            ;
            function diff_bisect_(text1, text2) {
              var text1_length = text1.length;
              var text2_length = text2.length;
              var max_d = Math.ceil((text1_length + text2_length) / 2);
              var v_offset = max_d;
              var v_length = 2 * max_d;
              var v1 = new Array(v_length);
              var v2 = new Array(v_length);
              for (var x = 0; x < v_length; x++) {
                v1[x] = -1;
                v2[x] = -1;
              }
              v1[v_offset + 1] = 0;
              v2[v_offset + 1] = 0;
              var delta = text1_length - text2_length;
              var front = delta % 2 != 0;
              var k1start = 0;
              var k1end = 0;
              var k2start = 0;
              var k2end = 0;
              for (var d = 0; d < max_d; d++) {
                for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
                  var k1_offset = v_offset + k1;
                  var x1;
                  if (k1 == -d || k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1]) {
                    x1 = v1[k1_offset + 1];
                  } else {
                    x1 = v1[k1_offset - 1] + 1;
                  }
                  var y1 = x1 - k1;
                  while (x1 < text1_length && y1 < text2_length && text1.charAt(x1) == text2.charAt(y1)) {
                    x1++;
                    y1++;
                  }
                  v1[k1_offset] = x1;
                  if (x1 > text1_length) {
                    k1end += 2;
                  } else if (y1 > text2_length) {
                    k1start += 2;
                  } else if (front) {
                    var k2_offset = v_offset + delta - k1;
                    if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] != -1) {
                      var x2 = text1_length - v2[k2_offset];
                      if (x1 >= x2) {
                        return diff_bisectSplit_(text1, text2, x1, y1);
                      }
                    }
                  }
                }
                for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
                  var k2_offset = v_offset + k2;
                  var x2;
                  if (k2 == -d || k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1]) {
                    x2 = v2[k2_offset + 1];
                  } else {
                    x2 = v2[k2_offset - 1] + 1;
                  }
                  var y2 = x2 - k2;
                  while (x2 < text1_length && y2 < text2_length && text1.charAt(text1_length - x2 - 1) == text2.charAt(text2_length - y2 - 1)) {
                    x2++;
                    y2++;
                  }
                  v2[k2_offset] = x2;
                  if (x2 > text1_length) {
                    k2end += 2;
                  } else if (y2 > text2_length) {
                    k2start += 2;
                  } else if (!front) {
                    var k1_offset = v_offset + delta - k2;
                    if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] != -1) {
                      var x1 = v1[k1_offset];
                      var y1 = v_offset + x1 - k1_offset;
                      x2 = text1_length - x2;
                      if (x1 >= x2) {
                        return diff_bisectSplit_(text1, text2, x1, y1);
                      }
                    }
                  }
                }
              }
              return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
            }
            ;
            function diff_bisectSplit_(text1, text2, x, y) {
              var text1a = text1.substring(0, x);
              var text2a = text2.substring(0, y);
              var text1b = text1.substring(x);
              var text2b = text2.substring(y);
              var diffs = diff_main(text1a, text2a);
              var diffsb = diff_main(text1b, text2b);
              return diffs.concat(diffsb);
            }
            ;
            function diff_commonPrefix(text1, text2) {
              if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
                return 0;
              }
              var pointermin = 0;
              var pointermax = Math.min(text1.length, text2.length);
              var pointermid = pointermax;
              var pointerstart = 0;
              while (pointermin < pointermid) {
                if (text1.substring(pointerstart, pointermid) == text2.substring(pointerstart, pointermid)) {
                  pointermin = pointermid;
                  pointerstart = pointermin;
                } else {
                  pointermax = pointermid;
                }
                pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
              }
              return pointermid;
            }
            ;
            function diff_commonSuffix(text1, text2) {
              if (!text1 || !text2 || text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
                return 0;
              }
              var pointermin = 0;
              var pointermax = Math.min(text1.length, text2.length);
              var pointermid = pointermax;
              var pointerend = 0;
              while (pointermin < pointermid) {
                if (text1.substring(text1.length - pointermid, text1.length - pointerend) == text2.substring(text2.length - pointermid, text2.length - pointerend)) {
                  pointermin = pointermid;
                  pointerend = pointermin;
                } else {
                  pointermax = pointermid;
                }
                pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
              }
              return pointermid;
            }
            ;
            function diff_halfMatch_(text1, text2) {
              var longtext = text1.length > text2.length ? text1 : text2;
              var shorttext = text1.length > text2.length ? text2 : text1;
              if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
                return null;
              }
              function diff_halfMatchI_(longtext2, shorttext2, i) {
                var seed = longtext2.substring(i, i + Math.floor(longtext2.length / 4));
                var j = -1;
                var best_common = "";
                var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
                while ((j = shorttext2.indexOf(seed, j + 1)) != -1) {
                  var prefixLength = diff_commonPrefix(
                    longtext2.substring(i),
                    shorttext2.substring(j)
                  );
                  var suffixLength = diff_commonSuffix(
                    longtext2.substring(0, i),
                    shorttext2.substring(0, j)
                  );
                  if (best_common.length < suffixLength + prefixLength) {
                    best_common = shorttext2.substring(j - suffixLength, j) + shorttext2.substring(j, j + prefixLength);
                    best_longtext_a = longtext2.substring(0, i - suffixLength);
                    best_longtext_b = longtext2.substring(i + prefixLength);
                    best_shorttext_a = shorttext2.substring(0, j - suffixLength);
                    best_shorttext_b = shorttext2.substring(j + prefixLength);
                  }
                }
                if (best_common.length * 2 >= longtext2.length) {
                  return [
                    best_longtext_a,
                    best_longtext_b,
                    best_shorttext_a,
                    best_shorttext_b,
                    best_common
                  ];
                } else {
                  return null;
                }
              }
              var hm1 = diff_halfMatchI_(
                longtext,
                shorttext,
                Math.ceil(longtext.length / 4)
              );
              var hm2 = diff_halfMatchI_(
                longtext,
                shorttext,
                Math.ceil(longtext.length / 2)
              );
              var hm;
              if (!hm1 && !hm2) {
                return null;
              } else if (!hm2) {
                hm = hm1;
              } else if (!hm1) {
                hm = hm2;
              } else {
                hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
              }
              var text1_a, text1_b, text2_a, text2_b;
              if (text1.length > text2.length) {
                text1_a = hm[0];
                text1_b = hm[1];
                text2_a = hm[2];
                text2_b = hm[3];
              } else {
                text2_a = hm[0];
                text2_b = hm[1];
                text1_a = hm[2];
                text1_b = hm[3];
              }
              var mid_common = hm[4];
              return [text1_a, text1_b, text2_a, text2_b, mid_common];
            }
            ;
            function diff_cleanupMerge(diffs) {
              diffs.push([DIFF_EQUAL, ""]);
              var pointer = 0;
              var count_delete = 0;
              var count_insert = 0;
              var text_delete = "";
              var text_insert = "";
              var commonlength;
              while (pointer < diffs.length) {
                switch (diffs[pointer][0]) {
                  case DIFF_INSERT:
                    count_insert++;
                    text_insert += diffs[pointer][1];
                    pointer++;
                    break;
                  case DIFF_DELETE:
                    count_delete++;
                    text_delete += diffs[pointer][1];
                    pointer++;
                    break;
                  case DIFF_EQUAL:
                    if (count_delete + count_insert > 1) {
                      if (count_delete !== 0 && count_insert !== 0) {
                        commonlength = diff_commonPrefix(text_insert, text_delete);
                        if (commonlength !== 0) {
                          if (pointer - count_delete - count_insert > 0 && diffs[pointer - count_delete - count_insert - 1][0] == DIFF_EQUAL) {
                            diffs[pointer - count_delete - count_insert - 1][1] += text_insert.substring(0, commonlength);
                          } else {
                            diffs.splice(0, 0, [
                              DIFF_EQUAL,
                              text_insert.substring(0, commonlength)
                            ]);
                            pointer++;
                          }
                          text_insert = text_insert.substring(commonlength);
                          text_delete = text_delete.substring(commonlength);
                        }
                        commonlength = diff_commonSuffix(text_insert, text_delete);
                        if (commonlength !== 0) {
                          diffs[pointer][1] = text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];
                          text_insert = text_insert.substring(0, text_insert.length - commonlength);
                          text_delete = text_delete.substring(0, text_delete.length - commonlength);
                        }
                      }
                      if (count_delete === 0) {
                        diffs.splice(
                          pointer - count_insert,
                          count_delete + count_insert,
                          [DIFF_INSERT, text_insert]
                        );
                      } else if (count_insert === 0) {
                        diffs.splice(
                          pointer - count_delete,
                          count_delete + count_insert,
                          [DIFF_DELETE, text_delete]
                        );
                      } else {
                        diffs.splice(
                          pointer - count_delete - count_insert,
                          count_delete + count_insert,
                          [DIFF_DELETE, text_delete],
                          [DIFF_INSERT, text_insert]
                        );
                      }
                      pointer = pointer - count_delete - count_insert + (count_delete ? 1 : 0) + (count_insert ? 1 : 0) + 1;
                    } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
                      diffs[pointer - 1][1] += diffs[pointer][1];
                      diffs.splice(pointer, 1);
                    } else {
                      pointer++;
                    }
                    count_insert = 0;
                    count_delete = 0;
                    text_delete = "";
                    text_insert = "";
                    break;
                }
              }
              if (diffs[diffs.length - 1][1] === "") {
                diffs.pop();
              }
              var changes = false;
              pointer = 1;
              while (pointer < diffs.length - 1) {
                if (diffs[pointer - 1][0] == DIFF_EQUAL && diffs[pointer + 1][0] == DIFF_EQUAL) {
                  if (diffs[pointer][1].substring(diffs[pointer][1].length - diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
                    diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length);
                    diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
                    diffs.splice(pointer - 1, 1);
                    changes = true;
                  } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) == diffs[pointer + 1][1]) {
                    diffs[pointer - 1][1] += diffs[pointer + 1][1];
                    diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
                    diffs.splice(pointer + 1, 1);
                    changes = true;
                  }
                }
                pointer++;
              }
              if (changes) {
                diff_cleanupMerge(diffs);
              }
            }
            ;
            var diff = diff_main;
            diff.INSERT = DIFF_INSERT;
            diff.DELETE = DIFF_DELETE;
            diff.EQUAL = DIFF_EQUAL;
            module2.exports = diff;
            function cursor_normalize_diff(diffs, cursor_pos) {
              if (cursor_pos === 0) {
                return [DIFF_EQUAL, diffs];
              }
              for (var current_pos = 0, i = 0; i < diffs.length; i++) {
                var d = diffs[i];
                if (d[0] === DIFF_DELETE || d[0] === DIFF_EQUAL) {
                  var next_pos = current_pos + d[1].length;
                  if (cursor_pos === next_pos) {
                    return [i + 1, diffs];
                  } else if (cursor_pos < next_pos) {
                    diffs = diffs.slice();
                    var split_pos = cursor_pos - current_pos;
                    var d_left = [d[0], d[1].slice(0, split_pos)];
                    var d_right = [d[0], d[1].slice(split_pos)];
                    diffs.splice(i, 1, d_left, d_right);
                    return [i + 1, diffs];
                  } else {
                    current_pos = next_pos;
                  }
                }
              }
              throw new Error("cursor_pos is out of bounds!");
            }
            function fix_cursor(diffs, cursor_pos) {
              var norm = cursor_normalize_diff(diffs, cursor_pos);
              var ndiffs = norm[1];
              var cursor_pointer = norm[0];
              var d = ndiffs[cursor_pointer];
              var d_next = ndiffs[cursor_pointer + 1];
              if (d == null) {
                return diffs;
              } else if (d[0] !== DIFF_EQUAL) {
                return diffs;
              } else {
                if (d_next != null && d[1] + d_next[1] === d_next[1] + d[1]) {
                  ndiffs.splice(cursor_pointer, 2, d_next, d);
                  return merge_tuples(ndiffs, cursor_pointer, 2);
                } else if (d_next != null && d_next[1].indexOf(d[1]) === 0) {
                  ndiffs.splice(cursor_pointer, 2, [d_next[0], d[1]], [0, d[1]]);
                  var suffix = d_next[1].slice(d[1].length);
                  if (suffix.length > 0) {
                    ndiffs.splice(cursor_pointer + 2, 0, [d_next[0], suffix]);
                  }
                  return merge_tuples(ndiffs, cursor_pointer, 3);
                } else {
                  return diffs;
                }
              }
            }
            function fix_emoji(diffs) {
              var compact = false;
              var starts_with_pair_end = function(str) {
                return str.charCodeAt(0) >= 56320 && str.charCodeAt(0) <= 57343;
              };
              var ends_with_pair_start = function(str) {
                return str.charCodeAt(str.length - 1) >= 55296 && str.charCodeAt(str.length - 1) <= 56319;
              };
              for (var i = 2; i < diffs.length; i += 1) {
                if (diffs[i - 2][0] === DIFF_EQUAL && ends_with_pair_start(diffs[i - 2][1]) && diffs[i - 1][0] === DIFF_DELETE && starts_with_pair_end(diffs[i - 1][1]) && diffs[i][0] === DIFF_INSERT && starts_with_pair_end(diffs[i][1])) {
                  compact = true;
                  diffs[i - 1][1] = diffs[i - 2][1].slice(-1) + diffs[i - 1][1];
                  diffs[i][1] = diffs[i - 2][1].slice(-1) + diffs[i][1];
                  diffs[i - 2][1] = diffs[i - 2][1].slice(0, -1);
                }
              }
              if (!compact) {
                return diffs;
              }
              var fixed_diffs = [];
              for (var i = 0; i < diffs.length; i += 1) {
                if (diffs[i][1].length > 0) {
                  fixed_diffs.push(diffs[i]);
                }
              }
              return fixed_diffs;
            }
            function merge_tuples(diffs, start, length3) {
              for (var i = start + length3 - 1; i >= 0 && i >= start - 1; i--) {
                if (i + 1 < diffs.length) {
                  var left_d = diffs[i];
                  var right_d = diffs[i + 1];
                  if (left_d[0] === right_d[1]) {
                    diffs.splice(i, 2, [left_d[0], left_d[1] + right_d[1]]);
                  }
                }
              }
              return diffs;
            }
          },
          /* 52 */
          /***/
          function(module2, exports2) {
            exports2 = module2.exports = typeof Object.keys === "function" ? Object.keys : shim;
            exports2.shim = shim;
            function shim(obj) {
              var keys2 = [];
              for (var key in obj) keys2.push(key);
              return keys2;
            }
          },
          /* 53 */
          /***/
          function(module2, exports2) {
            var supportsArgumentsClass = function() {
              return Object.prototype.toString.call(arguments);
            }() == "[object Arguments]";
            exports2 = module2.exports = supportsArgumentsClass ? supported : unsupported;
            exports2.supported = supported;
            function supported(object) {
              return Object.prototype.toString.call(object) == "[object Arguments]";
            }
            ;
            exports2.unsupported = unsupported;
            function unsupported(object) {
              return object && typeof object == "object" && typeof object.length == "number" && Object.prototype.hasOwnProperty.call(object, "callee") && !Object.prototype.propertyIsEnumerable.call(object, "callee") || false;
            }
            ;
          },
          /* 54 */
          /***/
          function(module2, exports2) {
            "use strict";
            var has = Object.prototype.hasOwnProperty, prefix = "~";
            function Events() {
            }
            if (Object.create) {
              Events.prototype = /* @__PURE__ */ Object.create(null);
              if (!new Events().__proto__) prefix = false;
            }
            function EE(fn, context, once) {
              this.fn = fn;
              this.context = context;
              this.once = once || false;
            }
            function EventEmitter() {
              this._events = new Events();
              this._eventsCount = 0;
            }
            EventEmitter.prototype.eventNames = function eventNames() {
              var names = [], events, name;
              if (this._eventsCount === 0) return names;
              for (name in events = this._events) {
                if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
              }
              if (Object.getOwnPropertySymbols) {
                return names.concat(Object.getOwnPropertySymbols(events));
              }
              return names;
            };
            EventEmitter.prototype.listeners = function listeners(event, exists) {
              var evt = prefix ? prefix + event : event, available = this._events[evt];
              if (exists) return !!available;
              if (!available) return [];
              if (available.fn) return [available.fn];
              for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
                ee[i] = available[i].fn;
              }
              return ee;
            };
            EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
              var evt = prefix ? prefix + event : event;
              if (!this._events[evt]) return false;
              var listeners = this._events[evt], len = arguments.length, args2, i;
              if (listeners.fn) {
                if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
                switch (len) {
                  case 1:
                    return listeners.fn.call(listeners.context), true;
                  case 2:
                    return listeners.fn.call(listeners.context, a1), true;
                  case 3:
                    return listeners.fn.call(listeners.context, a1, a2), true;
                  case 4:
                    return listeners.fn.call(listeners.context, a1, a2, a3), true;
                  case 5:
                    return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
                  case 6:
                    return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
                }
                for (i = 1, args2 = new Array(len - 1); i < len; i++) {
                  args2[i - 1] = arguments[i];
                }
                listeners.fn.apply(listeners.context, args2);
              } else {
                var length3 = listeners.length, j;
                for (i = 0; i < length3; i++) {
                  if (listeners[i].once) this.removeListener(event, listeners[i].fn, void 0, true);
                  switch (len) {
                    case 1:
                      listeners[i].fn.call(listeners[i].context);
                      break;
                    case 2:
                      listeners[i].fn.call(listeners[i].context, a1);
                      break;
                    case 3:
                      listeners[i].fn.call(listeners[i].context, a1, a2);
                      break;
                    case 4:
                      listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                      break;
                    default:
                      if (!args2) for (j = 1, args2 = new Array(len - 1); j < len; j++) {
                        args2[j - 1] = arguments[j];
                      }
                      listeners[i].fn.apply(listeners[i].context, args2);
                  }
                }
              }
              return true;
            };
            EventEmitter.prototype.on = function on(event, fn, context) {
              var listener = new EE(fn, context || this), evt = prefix ? prefix + event : event;
              if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
              else if (!this._events[evt].fn) this._events[evt].push(listener);
              else this._events[evt] = [this._events[evt], listener];
              return this;
            };
            EventEmitter.prototype.once = function once(event, fn, context) {
              var listener = new EE(fn, context || this, true), evt = prefix ? prefix + event : event;
              if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
              else if (!this._events[evt].fn) this._events[evt].push(listener);
              else this._events[evt] = [this._events[evt], listener];
              return this;
            };
            EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
              var evt = prefix ? prefix + event : event;
              if (!this._events[evt]) return this;
              if (!fn) {
                if (--this._eventsCount === 0) this._events = new Events();
                else delete this._events[evt];
                return this;
              }
              var listeners = this._events[evt];
              if (listeners.fn) {
                if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
                  if (--this._eventsCount === 0) this._events = new Events();
                  else delete this._events[evt];
                }
              } else {
                for (var i = 0, events = [], length3 = listeners.length; i < length3; i++) {
                  if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
                    events.push(listeners[i]);
                  }
                }
                if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
                else if (--this._eventsCount === 0) this._events = new Events();
                else delete this._events[evt];
              }
              return this;
            };
            EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
              var evt;
              if (event) {
                evt = prefix ? prefix + event : event;
                if (this._events[evt]) {
                  if (--this._eventsCount === 0) this._events = new Events();
                  else delete this._events[evt];
                }
              } else {
                this._events = new Events();
                this._eventsCount = 0;
              }
              return this;
            };
            EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
            EventEmitter.prototype.addListener = EventEmitter.prototype.on;
            EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
              return this;
            };
            EventEmitter.prefixed = prefix;
            EventEmitter.EventEmitter = EventEmitter;
            if ("undefined" !== typeof module2) {
              module2.exports = EventEmitter;
            }
          },
          /* 55 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.matchText = exports2.matchSpacing = exports2.matchNewline = exports2.matchBlot = exports2.matchAttributor = exports2.default = void 0;
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
              return typeof obj;
            } : function(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            var _slicedToArray = /* @__PURE__ */ function() {
              function sliceIterator(arr, i) {
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e = void 0;
                try {
                  for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                  }
                } catch (err) {
                  _d = true;
                  _e = err;
                } finally {
                  try {
                    if (!_n && _i["return"]) _i["return"]();
                  } finally {
                    if (_d) throw _e;
                  }
                }
                return _arr;
              }
              return function(arr, i) {
                if (Array.isArray(arr)) {
                  return arr;
                } else if (Symbol.iterator in Object(arr)) {
                  return sliceIterator(arr, i);
                } else {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }
              };
            }();
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _extend2 = __webpack_require__(3);
            var _extend3 = _interopRequireDefault(_extend2);
            var _quillDelta = __webpack_require__(2);
            var _quillDelta2 = _interopRequireDefault(_quillDelta);
            var _parchment = __webpack_require__(0);
            var _parchment2 = _interopRequireDefault(_parchment);
            var _quill = __webpack_require__(5);
            var _quill2 = _interopRequireDefault(_quill);
            var _logger = __webpack_require__(10);
            var _logger2 = _interopRequireDefault(_logger);
            var _module = __webpack_require__(9);
            var _module2 = _interopRequireDefault(_module);
            var _align = __webpack_require__(36);
            var _background = __webpack_require__(37);
            var _code = __webpack_require__(13);
            var _code2 = _interopRequireDefault(_code);
            var _color = __webpack_require__(26);
            var _direction = __webpack_require__(38);
            var _font = __webpack_require__(39);
            var _size = __webpack_require__(40);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _defineProperty(obj, key, value) {
              if (key in obj) {
                Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
              } else {
                obj[key] = value;
              }
              return obj;
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var debug = (0, _logger2.default)("quill:clipboard");
            var DOM_KEY = "__ql-matcher";
            var CLIPBOARD_CONFIG = [[Node.TEXT_NODE, matchText], [Node.TEXT_NODE, matchNewline], ["br", matchBreak], [Node.ELEMENT_NODE, matchNewline], [Node.ELEMENT_NODE, matchBlot], [Node.ELEMENT_NODE, matchSpacing], [Node.ELEMENT_NODE, matchAttributor], [Node.ELEMENT_NODE, matchStyles], ["li", matchIndent], ["b", matchAlias.bind(matchAlias, "bold")], ["i", matchAlias.bind(matchAlias, "italic")], ["style", matchIgnore]];
            var ATTRIBUTE_ATTRIBUTORS = [_align.AlignAttribute, _direction.DirectionAttribute].reduce(function(memo, attr) {
              memo[attr.keyName] = attr;
              return memo;
            }, {});
            var STYLE_ATTRIBUTORS = [_align.AlignStyle, _background.BackgroundStyle, _color.ColorStyle, _direction.DirectionStyle, _font.FontStyle, _size.SizeStyle].reduce(function(memo, attr) {
              memo[attr.keyName] = attr;
              return memo;
            }, {});
            var Clipboard = function(_Module) {
              _inherits(Clipboard2, _Module);
              function Clipboard2(quill, options) {
                _classCallCheck(this, Clipboard2);
                var _this = _possibleConstructorReturn(this, (Clipboard2.__proto__ || Object.getPrototypeOf(Clipboard2)).call(this, quill, options));
                _this.quill.root.addEventListener("paste", _this.onPaste.bind(_this));
                _this.container = _this.quill.addContainer("ql-clipboard");
                _this.container.setAttribute("contenteditable", true);
                _this.container.setAttribute("tabindex", -1);
                _this.matchers = [];
                CLIPBOARD_CONFIG.concat(_this.options.matchers).forEach(function(_ref) {
                  var _ref2 = _slicedToArray(_ref, 2), selector = _ref2[0], matcher = _ref2[1];
                  if (!options.matchVisual && matcher === matchSpacing) return;
                  _this.addMatcher(selector, matcher);
                });
                return _this;
              }
              _createClass(Clipboard2, [{
                key: "addMatcher",
                value: function addMatcher(selector, matcher) {
                  this.matchers.push([selector, matcher]);
                }
              }, {
                key: "convert",
                value: function convert(html) {
                  if (typeof html === "string") {
                    this.container.innerHTML = html.replace(/\>\r?\n +\</g, "><");
                    return this.convert();
                  }
                  var formats = this.quill.getFormat(this.quill.selection.savedRange.index);
                  if (formats[_code2.default.blotName]) {
                    var text2 = this.container.innerText;
                    this.container.innerHTML = "";
                    return new _quillDelta2.default().insert(text2, _defineProperty({}, _code2.default.blotName, formats[_code2.default.blotName]));
                  }
                  var _prepareMatching = this.prepareMatching(), _prepareMatching2 = _slicedToArray(_prepareMatching, 2), elementMatchers = _prepareMatching2[0], textMatchers = _prepareMatching2[1];
                  var delta = traverse(this.container, elementMatchers, textMatchers);
                  if (deltaEndsWith(delta, "\n") && delta.ops[delta.ops.length - 1].attributes == null) {
                    delta = delta.compose(new _quillDelta2.default().retain(delta.length() - 1).delete(1));
                  }
                  debug.log("convert", this.container.innerHTML, delta);
                  this.container.innerHTML = "";
                  return delta;
                }
              }, {
                key: "dangerouslyPasteHTML",
                value: function dangerouslyPasteHTML(index, html) {
                  var source = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _quill2.default.sources.API;
                  if (typeof index === "string") {
                    this.quill.setContents(this.convert(index), html);
                    this.quill.setSelection(0, _quill2.default.sources.SILENT);
                  } else {
                    var paste = this.convert(html);
                    this.quill.updateContents(new _quillDelta2.default().retain(index).concat(paste), source);
                    this.quill.setSelection(index + paste.length(), _quill2.default.sources.SILENT);
                  }
                }
              }, {
                key: "onPaste",
                value: function onPaste(e) {
                  var _this2 = this;
                  if (e.defaultPrevented || !this.quill.isEnabled()) return;
                  var range = this.quill.getSelection();
                  var delta = new _quillDelta2.default().retain(range.index);
                  var scrollTop = this.quill.scrollingContainer.scrollTop;
                  this.container.focus();
                  this.quill.selection.update(_quill2.default.sources.SILENT);
                  setTimeout(function() {
                    delta = delta.concat(_this2.convert()).delete(range.length);
                    _this2.quill.updateContents(delta, _quill2.default.sources.USER);
                    _this2.quill.setSelection(delta.length() - range.length, _quill2.default.sources.SILENT);
                    _this2.quill.scrollingContainer.scrollTop = scrollTop;
                    _this2.quill.focus();
                  }, 1);
                }
              }, {
                key: "prepareMatching",
                value: function prepareMatching() {
                  var _this3 = this;
                  var elementMatchers = [], textMatchers = [];
                  this.matchers.forEach(function(pair) {
                    var _pair = _slicedToArray(pair, 2), selector = _pair[0], matcher = _pair[1];
                    switch (selector) {
                      case Node.TEXT_NODE:
                        textMatchers.push(matcher);
                        break;
                      case Node.ELEMENT_NODE:
                        elementMatchers.push(matcher);
                        break;
                      default:
                        [].forEach.call(_this3.container.querySelectorAll(selector), function(node) {
                          node[DOM_KEY] = node[DOM_KEY] || [];
                          node[DOM_KEY].push(matcher);
                        });
                        break;
                    }
                  });
                  return [elementMatchers, textMatchers];
                }
              }]);
              return Clipboard2;
            }(_module2.default);
            Clipboard.DEFAULTS = {
              matchers: [],
              matchVisual: true
            };
            function applyFormat(delta, format, value) {
              if ((typeof format === "undefined" ? "undefined" : _typeof(format)) === "object") {
                return Object.keys(format).reduce(function(delta2, key) {
                  return applyFormat(delta2, key, format[key]);
                }, delta);
              } else {
                return delta.reduce(function(delta2, op) {
                  if (op.attributes && op.attributes[format]) {
                    return delta2.push(op);
                  } else {
                    return delta2.insert(op.insert, (0, _extend3.default)({}, _defineProperty({}, format, value), op.attributes));
                  }
                }, new _quillDelta2.default());
              }
            }
            function computeStyle(node) {
              if (node.nodeType !== Node.ELEMENT_NODE) return {};
              var DOM_KEY2 = "__ql-computed-style";
              return node[DOM_KEY2] || (node[DOM_KEY2] = window.getComputedStyle(node));
            }
            function deltaEndsWith(delta, text2) {
              var endText = "";
              for (var i = delta.ops.length - 1; i >= 0 && endText.length < text2.length; --i) {
                var op = delta.ops[i];
                if (typeof op.insert !== "string") break;
                endText = op.insert + endText;
              }
              return endText.slice(-1 * text2.length) === text2;
            }
            function isLine(node) {
              if (node.childNodes.length === 0) return false;
              var style = computeStyle(node);
              return ["block", "list-item"].indexOf(style.display) > -1;
            }
            function traverse(node, elementMatchers, textMatchers) {
              if (node.nodeType === node.TEXT_NODE) {
                return textMatchers.reduce(function(delta, matcher) {
                  return matcher(node, delta);
                }, new _quillDelta2.default());
              } else if (node.nodeType === node.ELEMENT_NODE) {
                return [].reduce.call(node.childNodes || [], function(delta, childNode) {
                  var childrenDelta = traverse(childNode, elementMatchers, textMatchers);
                  if (childNode.nodeType === node.ELEMENT_NODE) {
                    childrenDelta = elementMatchers.reduce(function(childrenDelta2, matcher) {
                      return matcher(childNode, childrenDelta2);
                    }, childrenDelta);
                    childrenDelta = (childNode[DOM_KEY] || []).reduce(function(childrenDelta2, matcher) {
                      return matcher(childNode, childrenDelta2);
                    }, childrenDelta);
                  }
                  return delta.concat(childrenDelta);
                }, new _quillDelta2.default());
              } else {
                return new _quillDelta2.default();
              }
            }
            function matchAlias(format, node, delta) {
              return applyFormat(delta, format, true);
            }
            function matchAttributor(node, delta) {
              var attributes = _parchment2.default.Attributor.Attribute.keys(node);
              var classes = _parchment2.default.Attributor.Class.keys(node);
              var styles = _parchment2.default.Attributor.Style.keys(node);
              var formats = {};
              attributes.concat(classes).concat(styles).forEach(function(name) {
                var attr = _parchment2.default.query(name, _parchment2.default.Scope.ATTRIBUTE);
                if (attr != null) {
                  formats[attr.attrName] = attr.value(node);
                  if (formats[attr.attrName]) return;
                }
                attr = ATTRIBUTE_ATTRIBUTORS[name];
                if (attr != null && (attr.attrName === name || attr.keyName === name)) {
                  formats[attr.attrName] = attr.value(node) || void 0;
                }
                attr = STYLE_ATTRIBUTORS[name];
                if (attr != null && (attr.attrName === name || attr.keyName === name)) {
                  attr = STYLE_ATTRIBUTORS[name];
                  formats[attr.attrName] = attr.value(node) || void 0;
                }
              });
              if (Object.keys(formats).length > 0) {
                delta = applyFormat(delta, formats);
              }
              return delta;
            }
            function matchBlot(node, delta) {
              var match = _parchment2.default.query(node);
              if (match == null) return delta;
              if (match.prototype instanceof _parchment2.default.Embed) {
                var embed = {};
                var value = match.value(node);
                if (value != null) {
                  embed[match.blotName] = value;
                  delta = new _quillDelta2.default().insert(embed, match.formats(node));
                }
              } else if (typeof match.formats === "function") {
                delta = applyFormat(delta, match.blotName, match.formats(node));
              }
              return delta;
            }
            function matchBreak(node, delta) {
              if (!deltaEndsWith(delta, "\n")) {
                delta.insert("\n");
              }
              return delta;
            }
            function matchIgnore() {
              return new _quillDelta2.default();
            }
            function matchIndent(node, delta) {
              var match = _parchment2.default.query(node);
              if (match == null || match.blotName !== "list-item" || !deltaEndsWith(delta, "\n")) {
                return delta;
              }
              var indent = -1, parent = node.parentNode;
              while (!parent.classList.contains("ql-clipboard")) {
                if ((_parchment2.default.query(parent) || {}).blotName === "list") {
                  indent += 1;
                }
                parent = parent.parentNode;
              }
              if (indent <= 0) return delta;
              return delta.compose(new _quillDelta2.default().retain(delta.length() - 1).retain(1, { indent }));
            }
            function matchNewline(node, delta) {
              if (!deltaEndsWith(delta, "\n")) {
                if (isLine(node) || delta.length() > 0 && node.nextSibling && isLine(node.nextSibling)) {
                  delta.insert("\n");
                }
              }
              return delta;
            }
            function matchSpacing(node, delta) {
              if (isLine(node) && node.nextElementSibling != null && !deltaEndsWith(delta, "\n\n")) {
                var nodeHeight = node.offsetHeight + parseFloat(computeStyle(node).marginTop) + parseFloat(computeStyle(node).marginBottom);
                if (node.nextElementSibling.offsetTop > node.offsetTop + nodeHeight * 1.5) {
                  delta.insert("\n");
                }
              }
              return delta;
            }
            function matchStyles(node, delta) {
              var formats = {};
              var style = node.style || {};
              if (style.fontStyle && computeStyle(node).fontStyle === "italic") {
                formats.italic = true;
              }
              if (style.fontWeight && (computeStyle(node).fontWeight.startsWith("bold") || parseInt(computeStyle(node).fontWeight) >= 700)) {
                formats.bold = true;
              }
              if (Object.keys(formats).length > 0) {
                delta = applyFormat(delta, formats);
              }
              if (parseFloat(style.textIndent || 0) > 0) {
                delta = new _quillDelta2.default().insert("	").concat(delta);
              }
              return delta;
            }
            function matchText(node, delta) {
              var text2 = node.data;
              if (node.parentNode.tagName === "O:P") {
                return delta.insert(text2.trim());
              }
              if (text2.trim().length === 0 && node.parentNode.classList.contains("ql-clipboard")) {
                return delta;
              }
              if (!computeStyle(node.parentNode).whiteSpace.startsWith("pre")) {
                var replacer = function replacer2(collapse, match) {
                  match = match.replace(/[^\u00a0]/g, "");
                  return match.length < 1 && collapse ? " " : match;
                };
                text2 = text2.replace(/\r\n/g, " ").replace(/\n/g, " ");
                text2 = text2.replace(/\s\s+/g, replacer.bind(replacer, true));
                if (node.previousSibling == null && isLine(node.parentNode) || node.previousSibling != null && isLine(node.previousSibling)) {
                  text2 = text2.replace(/^\s+/, replacer.bind(replacer, false));
                }
                if (node.nextSibling == null && isLine(node.parentNode) || node.nextSibling != null && isLine(node.nextSibling)) {
                  text2 = text2.replace(/\s+$/, replacer.bind(replacer, false));
                }
              }
              return delta.insert(text2);
            }
            exports2.default = Clipboard;
            exports2.matchAttributor = matchAttributor;
            exports2.matchBlot = matchBlot;
            exports2.matchNewline = matchNewline;
            exports2.matchSpacing = matchSpacing;
            exports2.matchText = matchText;
          },
          /* 56 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _get = function get(object, property, receiver) {
              if (object === null) object = Function.prototype;
              var desc = Object.getOwnPropertyDescriptor(object, property);
              if (desc === void 0) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                  return void 0;
                } else {
                  return get(parent, property, receiver);
                }
              } else if ("value" in desc) {
                return desc.value;
              } else {
                var getter = desc.get;
                if (getter === void 0) {
                  return void 0;
                }
                return getter.call(receiver);
              }
            };
            var _inline = __webpack_require__(6);
            var _inline2 = _interopRequireDefault(_inline);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var Bold = function(_Inline) {
              _inherits(Bold2, _Inline);
              function Bold2() {
                _classCallCheck(this, Bold2);
                return _possibleConstructorReturn(this, (Bold2.__proto__ || Object.getPrototypeOf(Bold2)).apply(this, arguments));
              }
              _createClass(Bold2, [{
                key: "optimize",
                value: function optimize(context) {
                  _get(Bold2.prototype.__proto__ || Object.getPrototypeOf(Bold2.prototype), "optimize", this).call(this, context);
                  if (this.domNode.tagName !== this.statics.tagName[0]) {
                    this.replaceWith(this.statics.blotName);
                  }
                }
              }], [{
                key: "create",
                value: function create7() {
                  return _get(Bold2.__proto__ || Object.getPrototypeOf(Bold2), "create", this).call(this);
                }
              }, {
                key: "formats",
                value: function formats() {
                  return true;
                }
              }]);
              return Bold2;
            }(_inline2.default);
            Bold.blotName = "bold";
            Bold.tagName = ["STRONG", "B"];
            exports2.default = Bold;
          },
          /* 57 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.addControls = exports2.default = void 0;
            var _slicedToArray = /* @__PURE__ */ function() {
              function sliceIterator(arr, i) {
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e = void 0;
                try {
                  for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                  }
                } catch (err) {
                  _d = true;
                  _e = err;
                } finally {
                  try {
                    if (!_n && _i["return"]) _i["return"]();
                  } finally {
                    if (_d) throw _e;
                  }
                }
                return _arr;
              }
              return function(arr, i) {
                if (Array.isArray(arr)) {
                  return arr;
                } else if (Symbol.iterator in Object(arr)) {
                  return sliceIterator(arr, i);
                } else {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }
              };
            }();
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _quillDelta = __webpack_require__(2);
            var _quillDelta2 = _interopRequireDefault(_quillDelta);
            var _parchment = __webpack_require__(0);
            var _parchment2 = _interopRequireDefault(_parchment);
            var _quill = __webpack_require__(5);
            var _quill2 = _interopRequireDefault(_quill);
            var _logger = __webpack_require__(10);
            var _logger2 = _interopRequireDefault(_logger);
            var _module = __webpack_require__(9);
            var _module2 = _interopRequireDefault(_module);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _defineProperty(obj, key, value) {
              if (key in obj) {
                Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
              } else {
                obj[key] = value;
              }
              return obj;
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var debug = (0, _logger2.default)("quill:toolbar");
            var Toolbar = function(_Module) {
              _inherits(Toolbar2, _Module);
              function Toolbar2(quill, options) {
                _classCallCheck(this, Toolbar2);
                var _this = _possibleConstructorReturn(this, (Toolbar2.__proto__ || Object.getPrototypeOf(Toolbar2)).call(this, quill, options));
                if (Array.isArray(_this.options.container)) {
                  var container = document.createElement("div");
                  addControls(container, _this.options.container);
                  quill.container.parentNode.insertBefore(container, quill.container);
                  _this.container = container;
                } else if (typeof _this.options.container === "string") {
                  _this.container = document.querySelector(_this.options.container);
                } else {
                  _this.container = _this.options.container;
                }
                if (!(_this.container instanceof HTMLElement)) {
                  var _ret;
                  return _ret = debug.error("Container required for toolbar", _this.options), _possibleConstructorReturn(_this, _ret);
                }
                _this.container.classList.add("ql-toolbar");
                _this.controls = [];
                _this.handlers = {};
                Object.keys(_this.options.handlers).forEach(function(format) {
                  _this.addHandler(format, _this.options.handlers[format]);
                });
                [].forEach.call(_this.container.querySelectorAll("button, select"), function(input) {
                  _this.attach(input);
                });
                _this.quill.on(_quill2.default.events.EDITOR_CHANGE, function(type, range) {
                  if (type === _quill2.default.events.SELECTION_CHANGE) {
                    _this.update(range);
                  }
                });
                _this.quill.on(_quill2.default.events.SCROLL_OPTIMIZE, function() {
                  var _this$quill$selection = _this.quill.selection.getRange(), _this$quill$selection2 = _slicedToArray(_this$quill$selection, 1), range = _this$quill$selection2[0];
                  _this.update(range);
                });
                return _this;
              }
              _createClass(Toolbar2, [{
                key: "addHandler",
                value: function addHandler(format, handler) {
                  this.handlers[format] = handler;
                }
              }, {
                key: "attach",
                value: function attach(input) {
                  var _this2 = this;
                  var format = [].find.call(input.classList, function(className) {
                    return className.indexOf("ql-") === 0;
                  });
                  if (!format) return;
                  format = format.slice("ql-".length);
                  if (input.tagName === "BUTTON") {
                    input.setAttribute("type", "button");
                  }
                  if (this.handlers[format] == null) {
                    if (this.quill.scroll.whitelist != null && this.quill.scroll.whitelist[format] == null) {
                      debug.warn("ignoring attaching to disabled format", format, input);
                      return;
                    }
                    if (_parchment2.default.query(format) == null) {
                      debug.warn("ignoring attaching to nonexistent format", format, input);
                      return;
                    }
                  }
                  var eventName = input.tagName === "SELECT" ? "change" : "click";
                  input.addEventListener(eventName, function(e) {
                    var value = void 0;
                    if (input.tagName === "SELECT") {
                      if (input.selectedIndex < 0) return;
                      var selected = input.options[input.selectedIndex];
                      if (selected.hasAttribute("selected")) {
                        value = false;
                      } else {
                        value = selected.value || false;
                      }
                    } else {
                      if (input.classList.contains("ql-active")) {
                        value = false;
                      } else {
                        value = input.value || !input.hasAttribute("value");
                      }
                      e.preventDefault();
                    }
                    _this2.quill.focus();
                    var _quill$selection$getR = _this2.quill.selection.getRange(), _quill$selection$getR2 = _slicedToArray(_quill$selection$getR, 1), range = _quill$selection$getR2[0];
                    if (_this2.handlers[format] != null) {
                      _this2.handlers[format].call(_this2, value);
                    } else if (_parchment2.default.query(format).prototype instanceof _parchment2.default.Embed) {
                      value = prompt("Enter " + format);
                      if (!value) return;
                      _this2.quill.updateContents(new _quillDelta2.default().retain(range.index).delete(range.length).insert(_defineProperty({}, format, value)), _quill2.default.sources.USER);
                    } else {
                      _this2.quill.format(format, value, _quill2.default.sources.USER);
                    }
                    _this2.update(range);
                  });
                  this.controls.push([format, input]);
                }
              }, {
                key: "update",
                value: function update(range) {
                  var formats = range == null ? {} : this.quill.getFormat(range);
                  this.controls.forEach(function(pair) {
                    var _pair = _slicedToArray(pair, 2), format = _pair[0], input = _pair[1];
                    if (input.tagName === "SELECT") {
                      var option = void 0;
                      if (range == null) {
                        option = null;
                      } else if (formats[format] == null) {
                        option = input.querySelector("option[selected]");
                      } else if (!Array.isArray(formats[format])) {
                        var value = formats[format];
                        if (typeof value === "string") {
                          value = value.replace(/\"/g, '\\"');
                        }
                        option = input.querySelector('option[value="' + value + '"]');
                      }
                      if (option == null) {
                        input.value = "";
                        input.selectedIndex = -1;
                      } else {
                        option.selected = true;
                      }
                    } else {
                      if (range == null) {
                        input.classList.remove("ql-active");
                      } else if (input.hasAttribute("value")) {
                        var isActive = formats[format] === input.getAttribute("value") || formats[format] != null && formats[format].toString() === input.getAttribute("value") || formats[format] == null && !input.getAttribute("value");
                        input.classList.toggle("ql-active", isActive);
                      } else {
                        input.classList.toggle("ql-active", formats[format] != null);
                      }
                    }
                  });
                }
              }]);
              return Toolbar2;
            }(_module2.default);
            Toolbar.DEFAULTS = {};
            function addButton(container, format, value) {
              var input = document.createElement("button");
              input.setAttribute("type", "button");
              input.classList.add("ql-" + format);
              if (value != null) {
                input.value = value;
              }
              container.appendChild(input);
            }
            function addControls(container, groups) {
              if (!Array.isArray(groups[0])) {
                groups = [groups];
              }
              groups.forEach(function(controls) {
                var group = document.createElement("span");
                group.classList.add("ql-formats");
                controls.forEach(function(control) {
                  if (typeof control === "string") {
                    addButton(group, control);
                  } else {
                    var format = Object.keys(control)[0];
                    var value = control[format];
                    if (Array.isArray(value)) {
                      addSelect(group, format, value);
                    } else {
                      addButton(group, format, value);
                    }
                  }
                });
                container.appendChild(group);
              });
            }
            function addSelect(container, format, values) {
              var input = document.createElement("select");
              input.classList.add("ql-" + format);
              values.forEach(function(value) {
                var option = document.createElement("option");
                if (value !== false) {
                  option.setAttribute("value", value);
                } else {
                  option.setAttribute("selected", "selected");
                }
                input.appendChild(option);
              });
              container.appendChild(input);
            }
            Toolbar.DEFAULTS = {
              container: null,
              handlers: {
                clean: function clean() {
                  var _this3 = this;
                  var range = this.quill.getSelection();
                  if (range == null) return;
                  if (range.length == 0) {
                    var formats = this.quill.getFormat();
                    Object.keys(formats).forEach(function(name) {
                      if (_parchment2.default.query(name, _parchment2.default.Scope.INLINE) != null) {
                        _this3.quill.format(name, false);
                      }
                    });
                  } else {
                    this.quill.removeFormat(range, _quill2.default.sources.USER);
                  }
                },
                direction: function direction(value) {
                  var align = this.quill.getFormat()["align"];
                  if (value === "rtl" && align == null) {
                    this.quill.format("align", "right", _quill2.default.sources.USER);
                  } else if (!value && align === "right") {
                    this.quill.format("align", false, _quill2.default.sources.USER);
                  }
                  this.quill.format("direction", value, _quill2.default.sources.USER);
                },
                indent: function indent(value) {
                  var range = this.quill.getSelection();
                  var formats = this.quill.getFormat(range);
                  var indent2 = parseInt(formats.indent || 0);
                  if (value === "+1" || value === "-1") {
                    var modifier = value === "+1" ? 1 : -1;
                    if (formats.direction === "rtl") modifier *= -1;
                    this.quill.format("indent", indent2 + modifier, _quill2.default.sources.USER);
                  }
                },
                link: function link(value) {
                  if (value === true) {
                    value = prompt("Enter link URL:");
                  }
                  this.quill.format("link", value, _quill2.default.sources.USER);
                },
                list: function list(value) {
                  var range = this.quill.getSelection();
                  var formats = this.quill.getFormat(range);
                  if (value === "check") {
                    if (formats["list"] === "checked" || formats["list"] === "unchecked") {
                      this.quill.format("list", false, _quill2.default.sources.USER);
                    } else {
                      this.quill.format("list", "unchecked", _quill2.default.sources.USER);
                    }
                  } else {
                    this.quill.format("list", value, _quill2.default.sources.USER);
                  }
                }
              }
            };
            exports2.default = Toolbar;
            exports2.addControls = addControls;
          },
          /* 58 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>';
          },
          /* 59 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _get = function get(object, property, receiver) {
              if (object === null) object = Function.prototype;
              var desc = Object.getOwnPropertyDescriptor(object, property);
              if (desc === void 0) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                  return void 0;
                } else {
                  return get(parent, property, receiver);
                }
              } else if ("value" in desc) {
                return desc.value;
              } else {
                var getter = desc.get;
                if (getter === void 0) {
                  return void 0;
                }
                return getter.call(receiver);
              }
            };
            var _picker = __webpack_require__(28);
            var _picker2 = _interopRequireDefault(_picker);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var ColorPicker = function(_Picker) {
              _inherits(ColorPicker2, _Picker);
              function ColorPicker2(select, label) {
                _classCallCheck(this, ColorPicker2);
                var _this = _possibleConstructorReturn(this, (ColorPicker2.__proto__ || Object.getPrototypeOf(ColorPicker2)).call(this, select));
                _this.label.innerHTML = label;
                _this.container.classList.add("ql-color-picker");
                [].slice.call(_this.container.querySelectorAll(".ql-picker-item"), 0, 7).forEach(function(item) {
                  item.classList.add("ql-primary");
                });
                return _this;
              }
              _createClass(ColorPicker2, [{
                key: "buildItem",
                value: function buildItem(option) {
                  var item = _get(ColorPicker2.prototype.__proto__ || Object.getPrototypeOf(ColorPicker2.prototype), "buildItem", this).call(this, option);
                  item.style.backgroundColor = option.getAttribute("value") || "";
                  return item;
                }
              }, {
                key: "selectItem",
                value: function selectItem(item, trigger) {
                  _get(ColorPicker2.prototype.__proto__ || Object.getPrototypeOf(ColorPicker2.prototype), "selectItem", this).call(this, item, trigger);
                  var colorLabel = this.label.querySelector(".ql-color-label");
                  var value = item ? item.getAttribute("data-value") || "" : "";
                  if (colorLabel) {
                    if (colorLabel.tagName === "line") {
                      colorLabel.style.stroke = value;
                    } else {
                      colorLabel.style.fill = value;
                    }
                  }
                }
              }]);
              return ColorPicker2;
            }(_picker2.default);
            exports2.default = ColorPicker;
          },
          /* 60 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _get = function get(object, property, receiver) {
              if (object === null) object = Function.prototype;
              var desc = Object.getOwnPropertyDescriptor(object, property);
              if (desc === void 0) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                  return void 0;
                } else {
                  return get(parent, property, receiver);
                }
              } else if ("value" in desc) {
                return desc.value;
              } else {
                var getter = desc.get;
                if (getter === void 0) {
                  return void 0;
                }
                return getter.call(receiver);
              }
            };
            var _picker = __webpack_require__(28);
            var _picker2 = _interopRequireDefault(_picker);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var IconPicker = function(_Picker) {
              _inherits(IconPicker2, _Picker);
              function IconPicker2(select, icons) {
                _classCallCheck(this, IconPicker2);
                var _this = _possibleConstructorReturn(this, (IconPicker2.__proto__ || Object.getPrototypeOf(IconPicker2)).call(this, select));
                _this.container.classList.add("ql-icon-picker");
                [].forEach.call(_this.container.querySelectorAll(".ql-picker-item"), function(item) {
                  item.innerHTML = icons[item.getAttribute("data-value") || ""];
                });
                _this.defaultItem = _this.container.querySelector(".ql-selected");
                _this.selectItem(_this.defaultItem);
                return _this;
              }
              _createClass(IconPicker2, [{
                key: "selectItem",
                value: function selectItem(item, trigger) {
                  _get(IconPicker2.prototype.__proto__ || Object.getPrototypeOf(IconPicker2.prototype), "selectItem", this).call(this, item, trigger);
                  item = item || this.defaultItem;
                  this.label.innerHTML = item.innerHTML;
                }
              }]);
              return IconPicker2;
            }(_picker2.default);
            exports2.default = IconPicker;
          },
          /* 61 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            var Tooltip = function() {
              function Tooltip2(quill, boundsContainer) {
                var _this = this;
                _classCallCheck(this, Tooltip2);
                this.quill = quill;
                this.boundsContainer = boundsContainer || document.body;
                this.root = quill.addContainer("ql-tooltip");
                this.root.innerHTML = this.constructor.TEMPLATE;
                if (this.quill.root === this.quill.scrollingContainer) {
                  this.quill.root.addEventListener("scroll", function() {
                    _this.root.style.marginTop = -1 * _this.quill.root.scrollTop + "px";
                  });
                }
                this.hide();
              }
              _createClass(Tooltip2, [{
                key: "hide",
                value: function hide() {
                  this.root.classList.add("ql-hidden");
                }
              }, {
                key: "position",
                value: function position(reference) {
                  var left = reference.left + reference.width / 2 - this.root.offsetWidth / 2;
                  var top = reference.bottom + this.quill.root.scrollTop;
                  this.root.style.left = left + "px";
                  this.root.style.top = top + "px";
                  this.root.classList.remove("ql-flip");
                  var containerBounds = this.boundsContainer.getBoundingClientRect();
                  var rootBounds = this.root.getBoundingClientRect();
                  var shift = 0;
                  if (rootBounds.right > containerBounds.right) {
                    shift = containerBounds.right - rootBounds.right;
                    this.root.style.left = left + shift + "px";
                  }
                  if (rootBounds.left < containerBounds.left) {
                    shift = containerBounds.left - rootBounds.left;
                    this.root.style.left = left + shift + "px";
                  }
                  if (rootBounds.bottom > containerBounds.bottom) {
                    var height = rootBounds.bottom - rootBounds.top;
                    var verticalShift = reference.bottom - reference.top + height;
                    this.root.style.top = top - verticalShift + "px";
                    this.root.classList.add("ql-flip");
                  }
                  return shift;
                }
              }, {
                key: "show",
                value: function show() {
                  this.root.classList.remove("ql-editing");
                  this.root.classList.remove("ql-hidden");
                }
              }]);
              return Tooltip2;
            }();
            exports2.default = Tooltip;
          },
          /* 62 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _slicedToArray = /* @__PURE__ */ function() {
              function sliceIterator(arr, i) {
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e = void 0;
                try {
                  for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                  }
                } catch (err) {
                  _d = true;
                  _e = err;
                } finally {
                  try {
                    if (!_n && _i["return"]) _i["return"]();
                  } finally {
                    if (_d) throw _e;
                  }
                }
                return _arr;
              }
              return function(arr, i) {
                if (Array.isArray(arr)) {
                  return arr;
                } else if (Symbol.iterator in Object(arr)) {
                  return sliceIterator(arr, i);
                } else {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }
              };
            }();
            var _get = function get(object, property, receiver) {
              if (object === null) object = Function.prototype;
              var desc = Object.getOwnPropertyDescriptor(object, property);
              if (desc === void 0) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                  return void 0;
                } else {
                  return get(parent, property, receiver);
                }
              } else if ("value" in desc) {
                return desc.value;
              } else {
                var getter = desc.get;
                if (getter === void 0) {
                  return void 0;
                }
                return getter.call(receiver);
              }
            };
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _extend = __webpack_require__(3);
            var _extend2 = _interopRequireDefault(_extend);
            var _emitter = __webpack_require__(8);
            var _emitter2 = _interopRequireDefault(_emitter);
            var _base = __webpack_require__(43);
            var _base2 = _interopRequireDefault(_base);
            var _link = __webpack_require__(27);
            var _link2 = _interopRequireDefault(_link);
            var _selection = __webpack_require__(15);
            var _icons = __webpack_require__(41);
            var _icons2 = _interopRequireDefault(_icons);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var TOOLBAR_CONFIG = [[{ header: ["1", "2", "3", false] }], ["bold", "italic", "underline", "link"], [{ list: "ordered" }, { list: "bullet" }], ["clean"]];
            var SnowTheme = function(_BaseTheme) {
              _inherits(SnowTheme2, _BaseTheme);
              function SnowTheme2(quill, options) {
                _classCallCheck(this, SnowTheme2);
                if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
                  options.modules.toolbar.container = TOOLBAR_CONFIG;
                }
                var _this = _possibleConstructorReturn(this, (SnowTheme2.__proto__ || Object.getPrototypeOf(SnowTheme2)).call(this, quill, options));
                _this.quill.container.classList.add("ql-snow");
                return _this;
              }
              _createClass(SnowTheme2, [{
                key: "extendToolbar",
                value: function extendToolbar(toolbar) {
                  toolbar.container.classList.add("ql-snow");
                  this.buildButtons([].slice.call(toolbar.container.querySelectorAll("button")), _icons2.default);
                  this.buildPickers([].slice.call(toolbar.container.querySelectorAll("select")), _icons2.default);
                  this.tooltip = new SnowTooltip(this.quill, this.options.bounds);
                  if (toolbar.container.querySelector(".ql-link")) {
                    this.quill.keyboard.addBinding({ key: "K", shortKey: true }, function(range, context) {
                      toolbar.handlers["link"].call(toolbar, !context.format.link);
                    });
                  }
                }
              }]);
              return SnowTheme2;
            }(_base2.default);
            SnowTheme.DEFAULTS = (0, _extend2.default)(true, {}, _base2.default.DEFAULTS, {
              modules: {
                toolbar: {
                  handlers: {
                    link: function link(value) {
                      if (value) {
                        var range = this.quill.getSelection();
                        if (range == null || range.length == 0) return;
                        var preview = this.quill.getText(range);
                        if (/^\S+@\S+\.\S+$/.test(preview) && preview.indexOf("mailto:") !== 0) {
                          preview = "mailto:" + preview;
                        }
                        var tooltip = this.quill.theme.tooltip;
                        tooltip.edit("link", preview);
                      } else {
                        this.quill.format("link", false);
                      }
                    }
                  }
                }
              }
            });
            var SnowTooltip = function(_BaseTooltip) {
              _inherits(SnowTooltip2, _BaseTooltip);
              function SnowTooltip2(quill, bounds) {
                _classCallCheck(this, SnowTooltip2);
                var _this2 = _possibleConstructorReturn(this, (SnowTooltip2.__proto__ || Object.getPrototypeOf(SnowTooltip2)).call(this, quill, bounds));
                _this2.preview = _this2.root.querySelector("a.ql-preview");
                return _this2;
              }
              _createClass(SnowTooltip2, [{
                key: "listen",
                value: function listen() {
                  var _this3 = this;
                  _get(SnowTooltip2.prototype.__proto__ || Object.getPrototypeOf(SnowTooltip2.prototype), "listen", this).call(this);
                  this.root.querySelector("a.ql-action").addEventListener("click", function(event) {
                    if (_this3.root.classList.contains("ql-editing")) {
                      _this3.save();
                    } else {
                      _this3.edit("link", _this3.preview.textContent);
                    }
                    event.preventDefault();
                  });
                  this.root.querySelector("a.ql-remove").addEventListener("click", function(event) {
                    if (_this3.linkRange != null) {
                      var range = _this3.linkRange;
                      _this3.restoreFocus();
                      _this3.quill.formatText(range, "link", false, _emitter2.default.sources.USER);
                      delete _this3.linkRange;
                    }
                    event.preventDefault();
                    _this3.hide();
                  });
                  this.quill.on(_emitter2.default.events.SELECTION_CHANGE, function(range, oldRange, source) {
                    if (range == null) return;
                    if (range.length === 0 && source === _emitter2.default.sources.USER) {
                      var _quill$scroll$descend = _this3.quill.scroll.descendant(_link2.default, range.index), _quill$scroll$descend2 = _slicedToArray(_quill$scroll$descend, 2), link = _quill$scroll$descend2[0], offset = _quill$scroll$descend2[1];
                      if (link != null) {
                        _this3.linkRange = new _selection.Range(range.index - offset, link.length());
                        var preview = _link2.default.formats(link.domNode);
                        _this3.preview.textContent = preview;
                        _this3.preview.setAttribute("href", preview);
                        _this3.show();
                        _this3.position(_this3.quill.getBounds(_this3.linkRange));
                        return;
                      }
                    } else {
                      delete _this3.linkRange;
                    }
                    _this3.hide();
                  });
                }
              }, {
                key: "show",
                value: function show() {
                  _get(SnowTooltip2.prototype.__proto__ || Object.getPrototypeOf(SnowTooltip2.prototype), "show", this).call(this);
                  this.root.removeAttribute("data-mode");
                }
              }]);
              return SnowTooltip2;
            }(_base.BaseTooltip);
            SnowTooltip.TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join("");
            exports2.default = SnowTheme;
          },
          /* 63 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _core = __webpack_require__(29);
            var _core2 = _interopRequireDefault(_core);
            var _align = __webpack_require__(36);
            var _direction = __webpack_require__(38);
            var _indent = __webpack_require__(64);
            var _blockquote = __webpack_require__(65);
            var _blockquote2 = _interopRequireDefault(_blockquote);
            var _header = __webpack_require__(66);
            var _header2 = _interopRequireDefault(_header);
            var _list = __webpack_require__(67);
            var _list2 = _interopRequireDefault(_list);
            var _background = __webpack_require__(37);
            var _color = __webpack_require__(26);
            var _font = __webpack_require__(39);
            var _size = __webpack_require__(40);
            var _bold = __webpack_require__(56);
            var _bold2 = _interopRequireDefault(_bold);
            var _italic = __webpack_require__(68);
            var _italic2 = _interopRequireDefault(_italic);
            var _link = __webpack_require__(27);
            var _link2 = _interopRequireDefault(_link);
            var _script = __webpack_require__(69);
            var _script2 = _interopRequireDefault(_script);
            var _strike = __webpack_require__(70);
            var _strike2 = _interopRequireDefault(_strike);
            var _underline = __webpack_require__(71);
            var _underline2 = _interopRequireDefault(_underline);
            var _image = __webpack_require__(72);
            var _image2 = _interopRequireDefault(_image);
            var _video = __webpack_require__(73);
            var _video2 = _interopRequireDefault(_video);
            var _code = __webpack_require__(13);
            var _code2 = _interopRequireDefault(_code);
            var _formula = __webpack_require__(74);
            var _formula2 = _interopRequireDefault(_formula);
            var _syntax = __webpack_require__(75);
            var _syntax2 = _interopRequireDefault(_syntax);
            var _toolbar = __webpack_require__(57);
            var _toolbar2 = _interopRequireDefault(_toolbar);
            var _icons = __webpack_require__(41);
            var _icons2 = _interopRequireDefault(_icons);
            var _picker = __webpack_require__(28);
            var _picker2 = _interopRequireDefault(_picker);
            var _colorPicker = __webpack_require__(59);
            var _colorPicker2 = _interopRequireDefault(_colorPicker);
            var _iconPicker = __webpack_require__(60);
            var _iconPicker2 = _interopRequireDefault(_iconPicker);
            var _tooltip = __webpack_require__(61);
            var _tooltip2 = _interopRequireDefault(_tooltip);
            var _bubble = __webpack_require__(108);
            var _bubble2 = _interopRequireDefault(_bubble);
            var _snow = __webpack_require__(62);
            var _snow2 = _interopRequireDefault(_snow);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            _core2.default.register({
              "attributors/attribute/direction": _direction.DirectionAttribute,
              "attributors/class/align": _align.AlignClass,
              "attributors/class/background": _background.BackgroundClass,
              "attributors/class/color": _color.ColorClass,
              "attributors/class/direction": _direction.DirectionClass,
              "attributors/class/font": _font.FontClass,
              "attributors/class/size": _size.SizeClass,
              "attributors/style/align": _align.AlignStyle,
              "attributors/style/background": _background.BackgroundStyle,
              "attributors/style/color": _color.ColorStyle,
              "attributors/style/direction": _direction.DirectionStyle,
              "attributors/style/font": _font.FontStyle,
              "attributors/style/size": _size.SizeStyle
            }, true);
            _core2.default.register({
              "formats/align": _align.AlignClass,
              "formats/direction": _direction.DirectionClass,
              "formats/indent": _indent.IndentClass,
              "formats/background": _background.BackgroundStyle,
              "formats/color": _color.ColorStyle,
              "formats/font": _font.FontClass,
              "formats/size": _size.SizeClass,
              "formats/blockquote": _blockquote2.default,
              "formats/code-block": _code2.default,
              "formats/header": _header2.default,
              "formats/list": _list2.default,
              "formats/bold": _bold2.default,
              "formats/code": _code.Code,
              "formats/italic": _italic2.default,
              "formats/link": _link2.default,
              "formats/script": _script2.default,
              "formats/strike": _strike2.default,
              "formats/underline": _underline2.default,
              "formats/image": _image2.default,
              "formats/video": _video2.default,
              "formats/list/item": _list.ListItem,
              "modules/formula": _formula2.default,
              "modules/syntax": _syntax2.default,
              "modules/toolbar": _toolbar2.default,
              "themes/bubble": _bubble2.default,
              "themes/snow": _snow2.default,
              "ui/icons": _icons2.default,
              "ui/picker": _picker2.default,
              "ui/icon-picker": _iconPicker2.default,
              "ui/color-picker": _colorPicker2.default,
              "ui/tooltip": _tooltip2.default
            }, true);
            exports2.default = _core2.default;
          },
          /* 64 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.IndentClass = void 0;
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _get = function get(object, property, receiver) {
              if (object === null) object = Function.prototype;
              var desc = Object.getOwnPropertyDescriptor(object, property);
              if (desc === void 0) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                  return void 0;
                } else {
                  return get(parent, property, receiver);
                }
              } else if ("value" in desc) {
                return desc.value;
              } else {
                var getter = desc.get;
                if (getter === void 0) {
                  return void 0;
                }
                return getter.call(receiver);
              }
            };
            var _parchment = __webpack_require__(0);
            var _parchment2 = _interopRequireDefault(_parchment);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var IdentAttributor = function(_Parchment$Attributor) {
              _inherits(IdentAttributor2, _Parchment$Attributor);
              function IdentAttributor2() {
                _classCallCheck(this, IdentAttributor2);
                return _possibleConstructorReturn(this, (IdentAttributor2.__proto__ || Object.getPrototypeOf(IdentAttributor2)).apply(this, arguments));
              }
              _createClass(IdentAttributor2, [{
                key: "add",
                value: function add(node, value) {
                  if (value === "+1" || value === "-1") {
                    var indent = this.value(node) || 0;
                    value = value === "+1" ? indent + 1 : indent - 1;
                  }
                  if (value === 0) {
                    this.remove(node);
                    return true;
                  } else {
                    return _get(IdentAttributor2.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor2.prototype), "add", this).call(this, node, value);
                  }
                }
              }, {
                key: "canAdd",
                value: function canAdd(node, value) {
                  return _get(IdentAttributor2.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor2.prototype), "canAdd", this).call(this, node, value) || _get(IdentAttributor2.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor2.prototype), "canAdd", this).call(this, node, parseInt(value));
                }
              }, {
                key: "value",
                value: function value(node) {
                  return parseInt(_get(IdentAttributor2.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor2.prototype), "value", this).call(this, node)) || void 0;
                }
              }]);
              return IdentAttributor2;
            }(_parchment2.default.Attributor.Class);
            var IndentClass = new IdentAttributor("indent", "ql-indent", {
              scope: _parchment2.default.Scope.BLOCK,
              whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
            });
            exports2.IndentClass = IndentClass;
          },
          /* 65 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _block = __webpack_require__(4);
            var _block2 = _interopRequireDefault(_block);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var Blockquote = function(_Block) {
              _inherits(Blockquote2, _Block);
              function Blockquote2() {
                _classCallCheck(this, Blockquote2);
                return _possibleConstructorReturn(this, (Blockquote2.__proto__ || Object.getPrototypeOf(Blockquote2)).apply(this, arguments));
              }
              return Blockquote2;
            }(_block2.default);
            Blockquote.blotName = "blockquote";
            Blockquote.tagName = "blockquote";
            exports2.default = Blockquote;
          },
          /* 66 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _block = __webpack_require__(4);
            var _block2 = _interopRequireDefault(_block);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var Header = function(_Block) {
              _inherits(Header2, _Block);
              function Header2() {
                _classCallCheck(this, Header2);
                return _possibleConstructorReturn(this, (Header2.__proto__ || Object.getPrototypeOf(Header2)).apply(this, arguments));
              }
              _createClass(Header2, null, [{
                key: "formats",
                value: function formats(domNode) {
                  return this.tagName.indexOf(domNode.tagName) + 1;
                }
              }]);
              return Header2;
            }(_block2.default);
            Header.blotName = "header";
            Header.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"];
            exports2.default = Header;
          },
          /* 67 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.default = exports2.ListItem = void 0;
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _get = function get(object, property, receiver) {
              if (object === null) object = Function.prototype;
              var desc = Object.getOwnPropertyDescriptor(object, property);
              if (desc === void 0) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                  return void 0;
                } else {
                  return get(parent, property, receiver);
                }
              } else if ("value" in desc) {
                return desc.value;
              } else {
                var getter = desc.get;
                if (getter === void 0) {
                  return void 0;
                }
                return getter.call(receiver);
              }
            };
            var _parchment = __webpack_require__(0);
            var _parchment2 = _interopRequireDefault(_parchment);
            var _block = __webpack_require__(4);
            var _block2 = _interopRequireDefault(_block);
            var _container = __webpack_require__(25);
            var _container2 = _interopRequireDefault(_container);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _defineProperty(obj, key, value) {
              if (key in obj) {
                Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
              } else {
                obj[key] = value;
              }
              return obj;
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var ListItem = function(_Block) {
              _inherits(ListItem2, _Block);
              function ListItem2() {
                _classCallCheck(this, ListItem2);
                return _possibleConstructorReturn(this, (ListItem2.__proto__ || Object.getPrototypeOf(ListItem2)).apply(this, arguments));
              }
              _createClass(ListItem2, [{
                key: "format",
                value: function format(name, value) {
                  if (name === List.blotName && !value) {
                    this.replaceWith(_parchment2.default.create(this.statics.scope));
                  } else {
                    _get(ListItem2.prototype.__proto__ || Object.getPrototypeOf(ListItem2.prototype), "format", this).call(this, name, value);
                  }
                }
              }, {
                key: "remove",
                value: function remove() {
                  if (this.prev == null && this.next == null) {
                    this.parent.remove();
                  } else {
                    _get(ListItem2.prototype.__proto__ || Object.getPrototypeOf(ListItem2.prototype), "remove", this).call(this);
                  }
                }
              }, {
                key: "replaceWith",
                value: function replaceWith(name, value) {
                  this.parent.isolate(this.offset(this.parent), this.length());
                  if (name === this.parent.statics.blotName) {
                    this.parent.replaceWith(name, value);
                    return this;
                  } else {
                    this.parent.unwrap();
                    return _get(ListItem2.prototype.__proto__ || Object.getPrototypeOf(ListItem2.prototype), "replaceWith", this).call(this, name, value);
                  }
                }
              }], [{
                key: "formats",
                value: function formats(domNode) {
                  return domNode.tagName === this.tagName ? void 0 : _get(ListItem2.__proto__ || Object.getPrototypeOf(ListItem2), "formats", this).call(this, domNode);
                }
              }]);
              return ListItem2;
            }(_block2.default);
            ListItem.blotName = "list-item";
            ListItem.tagName = "LI";
            var List = function(_Container) {
              _inherits(List2, _Container);
              _createClass(List2, null, [{
                key: "create",
                value: function create7(value) {
                  var tagName = value === "ordered" ? "OL" : "UL";
                  var node = _get(List2.__proto__ || Object.getPrototypeOf(List2), "create", this).call(this, tagName);
                  if (value === "checked" || value === "unchecked") {
                    node.setAttribute("data-checked", value === "checked");
                  }
                  return node;
                }
              }, {
                key: "formats",
                value: function formats(domNode) {
                  if (domNode.tagName === "OL") return "ordered";
                  if (domNode.tagName === "UL") {
                    if (domNode.hasAttribute("data-checked")) {
                      return domNode.getAttribute("data-checked") === "true" ? "checked" : "unchecked";
                    } else {
                      return "bullet";
                    }
                  }
                  return void 0;
                }
              }]);
              function List2(domNode) {
                _classCallCheck(this, List2);
                var _this2 = _possibleConstructorReturn(this, (List2.__proto__ || Object.getPrototypeOf(List2)).call(this, domNode));
                var listEventHandler = function listEventHandler2(e) {
                  if (e.target.parentNode !== domNode) return;
                  var format = _this2.statics.formats(domNode);
                  var blot = _parchment2.default.find(e.target);
                  if (format === "checked") {
                    blot.format("list", "unchecked");
                  } else if (format === "unchecked") {
                    blot.format("list", "checked");
                  }
                };
                domNode.addEventListener("touchstart", listEventHandler);
                domNode.addEventListener("mousedown", listEventHandler);
                return _this2;
              }
              _createClass(List2, [{
                key: "format",
                value: function format(name, value) {
                  if (this.children.length > 0) {
                    this.children.tail.format(name, value);
                  }
                }
              }, {
                key: "formats",
                value: function formats() {
                  return _defineProperty({}, this.statics.blotName, this.statics.formats(this.domNode));
                }
              }, {
                key: "insertBefore",
                value: function insertBefore(blot, ref) {
                  if (blot instanceof ListItem) {
                    _get(List2.prototype.__proto__ || Object.getPrototypeOf(List2.prototype), "insertBefore", this).call(this, blot, ref);
                  } else {
                    var index = ref == null ? this.length() : ref.offset(this);
                    var after = this.split(index);
                    after.parent.insertBefore(blot, after);
                  }
                }
              }, {
                key: "optimize",
                value: function optimize(context) {
                  _get(List2.prototype.__proto__ || Object.getPrototypeOf(List2.prototype), "optimize", this).call(this, context);
                  var next = this.next;
                  if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && next.domNode.tagName === this.domNode.tagName && next.domNode.getAttribute("data-checked") === this.domNode.getAttribute("data-checked")) {
                    next.moveChildren(this);
                    next.remove();
                  }
                }
              }, {
                key: "replace",
                value: function replace(target) {
                  if (target.statics.blotName !== this.statics.blotName) {
                    var item = _parchment2.default.create(this.statics.defaultChild);
                    target.moveChildren(item);
                    this.appendChild(item);
                  }
                  _get(List2.prototype.__proto__ || Object.getPrototypeOf(List2.prototype), "replace", this).call(this, target);
                }
              }]);
              return List2;
            }(_container2.default);
            List.blotName = "list";
            List.scope = _parchment2.default.Scope.BLOCK_BLOT;
            List.tagName = ["OL", "UL"];
            List.defaultChild = "list-item";
            List.allowedChildren = [ListItem];
            exports2.ListItem = ListItem;
            exports2.default = List;
          },
          /* 68 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _bold = __webpack_require__(56);
            var _bold2 = _interopRequireDefault(_bold);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var Italic = function(_Bold) {
              _inherits(Italic2, _Bold);
              function Italic2() {
                _classCallCheck(this, Italic2);
                return _possibleConstructorReturn(this, (Italic2.__proto__ || Object.getPrototypeOf(Italic2)).apply(this, arguments));
              }
              return Italic2;
            }(_bold2.default);
            Italic.blotName = "italic";
            Italic.tagName = ["EM", "I"];
            exports2.default = Italic;
          },
          /* 69 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _get = function get(object, property, receiver) {
              if (object === null) object = Function.prototype;
              var desc = Object.getOwnPropertyDescriptor(object, property);
              if (desc === void 0) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                  return void 0;
                } else {
                  return get(parent, property, receiver);
                }
              } else if ("value" in desc) {
                return desc.value;
              } else {
                var getter = desc.get;
                if (getter === void 0) {
                  return void 0;
                }
                return getter.call(receiver);
              }
            };
            var _inline = __webpack_require__(6);
            var _inline2 = _interopRequireDefault(_inline);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var Script = function(_Inline) {
              _inherits(Script2, _Inline);
              function Script2() {
                _classCallCheck(this, Script2);
                return _possibleConstructorReturn(this, (Script2.__proto__ || Object.getPrototypeOf(Script2)).apply(this, arguments));
              }
              _createClass(Script2, null, [{
                key: "create",
                value: function create7(value) {
                  if (value === "super") {
                    return document.createElement("sup");
                  } else if (value === "sub") {
                    return document.createElement("sub");
                  } else {
                    return _get(Script2.__proto__ || Object.getPrototypeOf(Script2), "create", this).call(this, value);
                  }
                }
              }, {
                key: "formats",
                value: function formats(domNode) {
                  if (domNode.tagName === "SUB") return "sub";
                  if (domNode.tagName === "SUP") return "super";
                  return void 0;
                }
              }]);
              return Script2;
            }(_inline2.default);
            Script.blotName = "script";
            Script.tagName = ["SUB", "SUP"];
            exports2.default = Script;
          },
          /* 70 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _inline = __webpack_require__(6);
            var _inline2 = _interopRequireDefault(_inline);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var Strike = function(_Inline) {
              _inherits(Strike2, _Inline);
              function Strike2() {
                _classCallCheck(this, Strike2);
                return _possibleConstructorReturn(this, (Strike2.__proto__ || Object.getPrototypeOf(Strike2)).apply(this, arguments));
              }
              return Strike2;
            }(_inline2.default);
            Strike.blotName = "strike";
            Strike.tagName = "S";
            exports2.default = Strike;
          },
          /* 71 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _inline = __webpack_require__(6);
            var _inline2 = _interopRequireDefault(_inline);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var Underline = function(_Inline) {
              _inherits(Underline2, _Inline);
              function Underline2() {
                _classCallCheck(this, Underline2);
                return _possibleConstructorReturn(this, (Underline2.__proto__ || Object.getPrototypeOf(Underline2)).apply(this, arguments));
              }
              return Underline2;
            }(_inline2.default);
            Underline.blotName = "underline";
            Underline.tagName = "U";
            exports2.default = Underline;
          },
          /* 72 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _get = function get(object, property, receiver) {
              if (object === null) object = Function.prototype;
              var desc = Object.getOwnPropertyDescriptor(object, property);
              if (desc === void 0) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                  return void 0;
                } else {
                  return get(parent, property, receiver);
                }
              } else if ("value" in desc) {
                return desc.value;
              } else {
                var getter = desc.get;
                if (getter === void 0) {
                  return void 0;
                }
                return getter.call(receiver);
              }
            };
            var _parchment = __webpack_require__(0);
            var _parchment2 = _interopRequireDefault(_parchment);
            var _link = __webpack_require__(27);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var ATTRIBUTES = ["alt", "height", "width"];
            var Image = function(_Parchment$Embed) {
              _inherits(Image2, _Parchment$Embed);
              function Image2() {
                _classCallCheck(this, Image2);
                return _possibleConstructorReturn(this, (Image2.__proto__ || Object.getPrototypeOf(Image2)).apply(this, arguments));
              }
              _createClass(Image2, [{
                key: "format",
                value: function format(name, value) {
                  if (ATTRIBUTES.indexOf(name) > -1) {
                    if (value) {
                      this.domNode.setAttribute(name, value);
                    } else {
                      this.domNode.removeAttribute(name);
                    }
                  } else {
                    _get(Image2.prototype.__proto__ || Object.getPrototypeOf(Image2.prototype), "format", this).call(this, name, value);
                  }
                }
              }], [{
                key: "create",
                value: function create7(value) {
                  var node = _get(Image2.__proto__ || Object.getPrototypeOf(Image2), "create", this).call(this, value);
                  if (typeof value === "string") {
                    node.setAttribute("src", this.sanitize(value));
                  }
                  return node;
                }
              }, {
                key: "formats",
                value: function formats(domNode) {
                  return ATTRIBUTES.reduce(function(formats2, attribute) {
                    if (domNode.hasAttribute(attribute)) {
                      formats2[attribute] = domNode.getAttribute(attribute);
                    }
                    return formats2;
                  }, {});
                }
              }, {
                key: "match",
                value: function match(url) {
                  return /\.(jpe?g|gif|png)$/.test(url) || /^data:image\/.+;base64/.test(url);
                }
              }, {
                key: "sanitize",
                value: function sanitize(url) {
                  return (0, _link.sanitize)(url, ["http", "https", "data"]) ? url : "//:0";
                }
              }, {
                key: "value",
                value: function value(domNode) {
                  return domNode.getAttribute("src");
                }
              }]);
              return Image2;
            }(_parchment2.default.Embed);
            Image.blotName = "image";
            Image.tagName = "IMG";
            exports2.default = Image;
          },
          /* 73 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _get = function get(object, property, receiver) {
              if (object === null) object = Function.prototype;
              var desc = Object.getOwnPropertyDescriptor(object, property);
              if (desc === void 0) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                  return void 0;
                } else {
                  return get(parent, property, receiver);
                }
              } else if ("value" in desc) {
                return desc.value;
              } else {
                var getter = desc.get;
                if (getter === void 0) {
                  return void 0;
                }
                return getter.call(receiver);
              }
            };
            var _block = __webpack_require__(4);
            var _link = __webpack_require__(27);
            var _link2 = _interopRequireDefault(_link);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var ATTRIBUTES = ["height", "width"];
            var Video = function(_BlockEmbed) {
              _inherits(Video2, _BlockEmbed);
              function Video2() {
                _classCallCheck(this, Video2);
                return _possibleConstructorReturn(this, (Video2.__proto__ || Object.getPrototypeOf(Video2)).apply(this, arguments));
              }
              _createClass(Video2, [{
                key: "format",
                value: function format(name, value) {
                  if (ATTRIBUTES.indexOf(name) > -1) {
                    if (value) {
                      this.domNode.setAttribute(name, value);
                    } else {
                      this.domNode.removeAttribute(name);
                    }
                  } else {
                    _get(Video2.prototype.__proto__ || Object.getPrototypeOf(Video2.prototype), "format", this).call(this, name, value);
                  }
                }
              }], [{
                key: "create",
                value: function create7(value) {
                  var node = _get(Video2.__proto__ || Object.getPrototypeOf(Video2), "create", this).call(this, value);
                  node.setAttribute("frameborder", "0");
                  node.setAttribute("allowfullscreen", true);
                  node.setAttribute("src", this.sanitize(value));
                  return node;
                }
              }, {
                key: "formats",
                value: function formats(domNode) {
                  return ATTRIBUTES.reduce(function(formats2, attribute) {
                    if (domNode.hasAttribute(attribute)) {
                      formats2[attribute] = domNode.getAttribute(attribute);
                    }
                    return formats2;
                  }, {});
                }
              }, {
                key: "sanitize",
                value: function sanitize(url) {
                  return _link2.default.sanitize(url);
                }
              }, {
                key: "value",
                value: function value(domNode) {
                  return domNode.getAttribute("src");
                }
              }]);
              return Video2;
            }(_block.BlockEmbed);
            Video.blotName = "video";
            Video.className = "ql-video";
            Video.tagName = "IFRAME";
            exports2.default = Video;
          },
          /* 74 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.default = exports2.FormulaBlot = void 0;
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _get = function get(object, property, receiver) {
              if (object === null) object = Function.prototype;
              var desc = Object.getOwnPropertyDescriptor(object, property);
              if (desc === void 0) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                  return void 0;
                } else {
                  return get(parent, property, receiver);
                }
              } else if ("value" in desc) {
                return desc.value;
              } else {
                var getter = desc.get;
                if (getter === void 0) {
                  return void 0;
                }
                return getter.call(receiver);
              }
            };
            var _embed = __webpack_require__(35);
            var _embed2 = _interopRequireDefault(_embed);
            var _quill = __webpack_require__(5);
            var _quill2 = _interopRequireDefault(_quill);
            var _module = __webpack_require__(9);
            var _module2 = _interopRequireDefault(_module);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var FormulaBlot = function(_Embed) {
              _inherits(FormulaBlot2, _Embed);
              function FormulaBlot2() {
                _classCallCheck(this, FormulaBlot2);
                return _possibleConstructorReturn(this, (FormulaBlot2.__proto__ || Object.getPrototypeOf(FormulaBlot2)).apply(this, arguments));
              }
              _createClass(FormulaBlot2, null, [{
                key: "create",
                value: function create7(value) {
                  var node = _get(FormulaBlot2.__proto__ || Object.getPrototypeOf(FormulaBlot2), "create", this).call(this, value);
                  if (typeof value === "string") {
                    window.katex.render(value, node, {
                      throwOnError: false,
                      errorColor: "#f00"
                    });
                    node.setAttribute("data-value", value);
                  }
                  return node;
                }
              }, {
                key: "value",
                value: function value(domNode) {
                  return domNode.getAttribute("data-value");
                }
              }]);
              return FormulaBlot2;
            }(_embed2.default);
            FormulaBlot.blotName = "formula";
            FormulaBlot.className = "ql-formula";
            FormulaBlot.tagName = "SPAN";
            var Formula = function(_Module) {
              _inherits(Formula2, _Module);
              _createClass(Formula2, null, [{
                key: "register",
                value: function register() {
                  _quill2.default.register(FormulaBlot, true);
                }
              }]);
              function Formula2() {
                _classCallCheck(this, Formula2);
                var _this2 = _possibleConstructorReturn(this, (Formula2.__proto__ || Object.getPrototypeOf(Formula2)).call(this));
                if (window.katex == null) {
                  throw new Error("Formula module requires KaTeX.");
                }
                return _this2;
              }
              return Formula2;
            }(_module2.default);
            exports2.FormulaBlot = FormulaBlot;
            exports2.default = Formula;
          },
          /* 75 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.default = exports2.CodeToken = exports2.CodeBlock = void 0;
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _get = function get(object, property, receiver) {
              if (object === null) object = Function.prototype;
              var desc = Object.getOwnPropertyDescriptor(object, property);
              if (desc === void 0) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                  return void 0;
                } else {
                  return get(parent, property, receiver);
                }
              } else if ("value" in desc) {
                return desc.value;
              } else {
                var getter = desc.get;
                if (getter === void 0) {
                  return void 0;
                }
                return getter.call(receiver);
              }
            };
            var _parchment = __webpack_require__(0);
            var _parchment2 = _interopRequireDefault(_parchment);
            var _quill = __webpack_require__(5);
            var _quill2 = _interopRequireDefault(_quill);
            var _module = __webpack_require__(9);
            var _module2 = _interopRequireDefault(_module);
            var _code = __webpack_require__(13);
            var _code2 = _interopRequireDefault(_code);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var SyntaxCodeBlock = function(_CodeBlock) {
              _inherits(SyntaxCodeBlock2, _CodeBlock);
              function SyntaxCodeBlock2() {
                _classCallCheck(this, SyntaxCodeBlock2);
                return _possibleConstructorReturn(this, (SyntaxCodeBlock2.__proto__ || Object.getPrototypeOf(SyntaxCodeBlock2)).apply(this, arguments));
              }
              _createClass(SyntaxCodeBlock2, [{
                key: "replaceWith",
                value: function replaceWith(block) {
                  this.domNode.textContent = this.domNode.textContent;
                  this.attach();
                  _get(SyntaxCodeBlock2.prototype.__proto__ || Object.getPrototypeOf(SyntaxCodeBlock2.prototype), "replaceWith", this).call(this, block);
                }
              }, {
                key: "highlight",
                value: function highlight(_highlight) {
                  var text2 = this.domNode.textContent;
                  if (this.cachedText !== text2) {
                    if (text2.trim().length > 0 || this.cachedText == null) {
                      this.domNode.innerHTML = _highlight(text2);
                      this.domNode.normalize();
                      this.attach();
                    }
                    this.cachedText = text2;
                  }
                }
              }]);
              return SyntaxCodeBlock2;
            }(_code2.default);
            SyntaxCodeBlock.className = "ql-syntax";
            var CodeToken = new _parchment2.default.Attributor.Class("token", "hljs", {
              scope: _parchment2.default.Scope.INLINE
            });
            var Syntax = function(_Module) {
              _inherits(Syntax2, _Module);
              _createClass(Syntax2, null, [{
                key: "register",
                value: function register() {
                  _quill2.default.register(CodeToken, true);
                  _quill2.default.register(SyntaxCodeBlock, true);
                }
              }]);
              function Syntax2(quill, options) {
                _classCallCheck(this, Syntax2);
                var _this2 = _possibleConstructorReturn(this, (Syntax2.__proto__ || Object.getPrototypeOf(Syntax2)).call(this, quill, options));
                if (typeof _this2.options.highlight !== "function") {
                  throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
                }
                var timer = null;
                _this2.quill.on(_quill2.default.events.SCROLL_OPTIMIZE, function() {
                  clearTimeout(timer);
                  timer = setTimeout(function() {
                    _this2.highlight();
                    timer = null;
                  }, _this2.options.interval);
                });
                _this2.highlight();
                return _this2;
              }
              _createClass(Syntax2, [{
                key: "highlight",
                value: function highlight() {
                  var _this3 = this;
                  if (this.quill.selection.composing) return;
                  this.quill.update(_quill2.default.sources.USER);
                  var range = this.quill.getSelection();
                  this.quill.scroll.descendants(SyntaxCodeBlock).forEach(function(code) {
                    code.highlight(_this3.options.highlight);
                  });
                  this.quill.update(_quill2.default.sources.SILENT);
                  if (range != null) {
                    this.quill.setSelection(range, _quill2.default.sources.SILENT);
                  }
                }
              }]);
              return Syntax2;
            }(_module2.default);
            Syntax.DEFAULTS = {
              highlight: function() {
                if (window.hljs == null) return null;
                return function(text2) {
                  var result = window.hljs.highlightAuto(text2);
                  return result.value;
                };
              }(),
              interval: 1e3
            };
            exports2.CodeBlock = SyntaxCodeBlock;
            exports2.CodeToken = CodeToken;
            exports2.default = Syntax;
          },
          /* 76 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>';
          },
          /* 77 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>';
          },
          /* 78 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>';
          },
          /* 79 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>';
          },
          /* 80 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>';
          },
          /* 81 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>';
          },
          /* 82 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>';
          },
          /* 83 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>';
          },
          /* 84 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>';
          },
          /* 85 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>';
          },
          /* 86 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>';
          },
          /* 87 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>';
          },
          /* 88 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>';
          },
          /* 89 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>';
          },
          /* 90 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>';
          },
          /* 91 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>';
          },
          /* 92 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>';
          },
          /* 93 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>';
          },
          /* 94 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>';
          },
          /* 95 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>';
          },
          /* 96 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>';
          },
          /* 97 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>';
          },
          /* 98 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>';
          },
          /* 99 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>';
          },
          /* 100 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>';
          },
          /* 101 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>';
          },
          /* 102 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>';
          },
          /* 103 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>';
          },
          /* 104 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>';
          },
          /* 105 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>';
          },
          /* 106 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>';
          },
          /* 107 */
          /***/
          function(module2, exports2) {
            module2.exports = '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>';
          },
          /* 108 */
          /***/
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.default = exports2.BubbleTooltip = void 0;
            var _get = function get(object, property, receiver) {
              if (object === null) object = Function.prototype;
              var desc = Object.getOwnPropertyDescriptor(object, property);
              if (desc === void 0) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                  return void 0;
                } else {
                  return get(parent, property, receiver);
                }
              } else if ("value" in desc) {
                return desc.value;
              } else {
                var getter = desc.get;
                if (getter === void 0) {
                  return void 0;
                }
                return getter.call(receiver);
              }
            };
            var _createClass = /* @__PURE__ */ function() {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();
            var _extend = __webpack_require__(3);
            var _extend2 = _interopRequireDefault(_extend);
            var _emitter = __webpack_require__(8);
            var _emitter2 = _interopRequireDefault(_emitter);
            var _base = __webpack_require__(43);
            var _base2 = _interopRequireDefault(_base);
            var _selection = __webpack_require__(15);
            var _icons = __webpack_require__(41);
            var _icons2 = _interopRequireDefault(_icons);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function _possibleConstructorReturn(self2, call) {
              if (!self2) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return call && (typeof call === "object" || typeof call === "function") ? call : self2;
            }
            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
              if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var TOOLBAR_CONFIG = [["bold", "italic", "link"], [{ header: 1 }, { header: 2 }, "blockquote"]];
            var BubbleTheme = function(_BaseTheme) {
              _inherits(BubbleTheme2, _BaseTheme);
              function BubbleTheme2(quill, options) {
                _classCallCheck(this, BubbleTheme2);
                if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
                  options.modules.toolbar.container = TOOLBAR_CONFIG;
                }
                var _this = _possibleConstructorReturn(this, (BubbleTheme2.__proto__ || Object.getPrototypeOf(BubbleTheme2)).call(this, quill, options));
                _this.quill.container.classList.add("ql-bubble");
                return _this;
              }
              _createClass(BubbleTheme2, [{
                key: "extendToolbar",
                value: function extendToolbar(toolbar) {
                  this.tooltip = new BubbleTooltip(this.quill, this.options.bounds);
                  this.tooltip.root.appendChild(toolbar.container);
                  this.buildButtons([].slice.call(toolbar.container.querySelectorAll("button")), _icons2.default);
                  this.buildPickers([].slice.call(toolbar.container.querySelectorAll("select")), _icons2.default);
                }
              }]);
              return BubbleTheme2;
            }(_base2.default);
            BubbleTheme.DEFAULTS = (0, _extend2.default)(true, {}, _base2.default.DEFAULTS, {
              modules: {
                toolbar: {
                  handlers: {
                    link: function link(value) {
                      if (!value) {
                        this.quill.format("link", false);
                      } else {
                        this.quill.theme.tooltip.edit();
                      }
                    }
                  }
                }
              }
            });
            var BubbleTooltip = function(_BaseTooltip) {
              _inherits(BubbleTooltip2, _BaseTooltip);
              function BubbleTooltip2(quill, bounds) {
                _classCallCheck(this, BubbleTooltip2);
                var _this2 = _possibleConstructorReturn(this, (BubbleTooltip2.__proto__ || Object.getPrototypeOf(BubbleTooltip2)).call(this, quill, bounds));
                _this2.quill.on(_emitter2.default.events.EDITOR_CHANGE, function(type, range, oldRange, source) {
                  if (type !== _emitter2.default.events.SELECTION_CHANGE) return;
                  if (range != null && range.length > 0 && source === _emitter2.default.sources.USER) {
                    _this2.show();
                    _this2.root.style.left = "0px";
                    _this2.root.style.width = "";
                    _this2.root.style.width = _this2.root.offsetWidth + "px";
                    var lines = _this2.quill.getLines(range.index, range.length);
                    if (lines.length === 1) {
                      _this2.position(_this2.quill.getBounds(range));
                    } else {
                      var lastLine = lines[lines.length - 1];
                      var index = _this2.quill.getIndex(lastLine);
                      var length3 = Math.min(lastLine.length() - 1, range.index + range.length - index);
                      var _bounds = _this2.quill.getBounds(new _selection.Range(index, length3));
                      _this2.position(_bounds);
                    }
                  } else if (document.activeElement !== _this2.textbox && _this2.quill.hasFocus()) {
                    _this2.hide();
                  }
                });
                return _this2;
              }
              _createClass(BubbleTooltip2, [{
                key: "listen",
                value: function listen() {
                  var _this3 = this;
                  _get(BubbleTooltip2.prototype.__proto__ || Object.getPrototypeOf(BubbleTooltip2.prototype), "listen", this).call(this);
                  this.root.querySelector(".ql-close").addEventListener("click", function() {
                    _this3.root.classList.remove("ql-editing");
                  });
                  this.quill.on(_emitter2.default.events.SCROLL_OPTIMIZE, function() {
                    setTimeout(function() {
                      if (_this3.root.classList.contains("ql-hidden")) return;
                      var range = _this3.quill.getSelection();
                      if (range != null) {
                        _this3.position(_this3.quill.getBounds(range));
                      }
                    }, 1);
                  });
                }
              }, {
                key: "cancel",
                value: function cancel() {
                  this.show();
                }
              }, {
                key: "position",
                value: function position(reference) {
                  var shift = _get(BubbleTooltip2.prototype.__proto__ || Object.getPrototypeOf(BubbleTooltip2.prototype), "position", this).call(this, reference);
                  var arrow = this.root.querySelector(".ql-tooltip-arrow");
                  arrow.style.marginLeft = "";
                  if (shift === 0) return shift;
                  arrow.style.marginLeft = -1 * shift - arrow.offsetWidth / 2 + "px";
                }
              }]);
              return BubbleTooltip2;
            }(_base.BaseTooltip);
            BubbleTooltip.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join("");
            exports2.BubbleTooltip = BubbleTooltip;
            exports2.default = BubbleTheme;
          },
          /* 109 */
          /***/
          function(module2, exports2, __webpack_require__) {
            module2.exports = __webpack_require__(63);
          }
          /******/
        ])["default"]
      );
    });
  }
});

// node_modules/react-quill/lib/index.js
var require_lib = __commonJS({
  "node_modules/react-quill/lib/index.js"(exports, module) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __spreadArrays = exports && exports.__spreadArrays || function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
      return r;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    var react_1 = __importDefault(require_react());
    var react_dom_1 = __importDefault(require_react_dom());
    var isEqual_1 = __importDefault(require_isEqual());
    var quill_1 = __importDefault(require_quill());
    var ReactQuill2 = (
      /** @class */
      function(_super) {
        __extends(ReactQuill3, _super);
        function ReactQuill3(props) {
          var _this = _super.call(this, props) || this;
          _this.dirtyProps = [
            "modules",
            "formats",
            "bounds",
            "theme",
            "children"
          ];
          _this.cleanProps = [
            "id",
            "className",
            "style",
            "placeholder",
            "tabIndex",
            "onChange",
            "onChangeSelection",
            "onFocus",
            "onBlur",
            "onKeyPress",
            "onKeyDown",
            "onKeyUp"
          ];
          _this.state = {
            generation: 0
          };
          _this.selection = null;
          _this.onEditorChange = function(eventName, rangeOrDelta, oldRangeOrDelta, source) {
            var _a, _b, _c, _d;
            if (eventName === "text-change") {
              (_b = (_a = _this).onEditorChangeText) === null || _b === void 0 ? void 0 : _b.call(_a, _this.editor.root.innerHTML, rangeOrDelta, source, _this.unprivilegedEditor);
            } else if (eventName === "selection-change") {
              (_d = (_c = _this).onEditorChangeSelection) === null || _d === void 0 ? void 0 : _d.call(_c, rangeOrDelta, source, _this.unprivilegedEditor);
            }
          };
          var value = _this.isControlled() ? props.value : props.defaultValue;
          _this.value = value !== null && value !== void 0 ? value : "";
          return _this;
        }
        ReactQuill3.prototype.validateProps = function(props) {
          var _a;
          if (react_1.default.Children.count(props.children) > 1)
            throw new Error("The Quill editing area can only be composed of a single React element.");
          if (react_1.default.Children.count(props.children)) {
            var child = react_1.default.Children.only(props.children);
            if (((_a = child) === null || _a === void 0 ? void 0 : _a.type) === "textarea")
              throw new Error("Quill does not support editing on a <textarea>. Use a <div> instead.");
          }
          if (this.lastDeltaChangeSet && props.value === this.lastDeltaChangeSet)
            throw new Error("You are passing the `delta` object from the `onChange` event back as `value`. You most probably want `editor.getContents()` instead. See: https://github.com/zenoamaro/react-quill#using-deltas");
        };
        ReactQuill3.prototype.shouldComponentUpdate = function(nextProps, nextState) {
          var _this = this;
          var _a;
          this.validateProps(nextProps);
          if (!this.editor || this.state.generation !== nextState.generation) {
            return true;
          }
          if ("value" in nextProps) {
            var prevContents = this.getEditorContents();
            var nextContents = (_a = nextProps.value, _a !== null && _a !== void 0 ? _a : "");
            if (!this.isEqualValue(nextContents, prevContents)) {
              this.setEditorContents(this.editor, nextContents);
            }
          }
          if (nextProps.readOnly !== this.props.readOnly) {
            this.setEditorReadOnly(this.editor, nextProps.readOnly);
          }
          return __spreadArrays(this.cleanProps, this.dirtyProps).some(function(prop) {
            return !isEqual_1.default(nextProps[prop], _this.props[prop]);
          });
        };
        ReactQuill3.prototype.shouldComponentRegenerate = function(nextProps) {
          var _this = this;
          return this.dirtyProps.some(function(prop) {
            return !isEqual_1.default(nextProps[prop], _this.props[prop]);
          });
        };
        ReactQuill3.prototype.componentDidMount = function() {
          this.instantiateEditor();
          this.setEditorContents(this.editor, this.getEditorContents());
        };
        ReactQuill3.prototype.componentWillUnmount = function() {
          this.destroyEditor();
        };
        ReactQuill3.prototype.componentDidUpdate = function(prevProps, prevState) {
          var _this = this;
          if (this.editor && this.shouldComponentRegenerate(prevProps)) {
            var delta = this.editor.getContents();
            var selection = this.editor.getSelection();
            this.regenerationSnapshot = { delta, selection };
            this.setState({ generation: this.state.generation + 1 });
            this.destroyEditor();
          }
          if (this.state.generation !== prevState.generation) {
            var _a = this.regenerationSnapshot, delta = _a.delta, selection_1 = _a.selection;
            delete this.regenerationSnapshot;
            this.instantiateEditor();
            var editor_1 = this.editor;
            editor_1.setContents(delta);
            postpone(function() {
              return _this.setEditorSelection(editor_1, selection_1);
            });
          }
        };
        ReactQuill3.prototype.instantiateEditor = function() {
          if (this.editor) {
            this.hookEditor(this.editor);
          } else {
            this.editor = this.createEditor(this.getEditingArea(), this.getEditorConfig());
          }
        };
        ReactQuill3.prototype.destroyEditor = function() {
          if (!this.editor)
            return;
          this.unhookEditor(this.editor);
        };
        ReactQuill3.prototype.isControlled = function() {
          return "value" in this.props;
        };
        ReactQuill3.prototype.getEditorConfig = function() {
          return {
            bounds: this.props.bounds,
            formats: this.props.formats,
            modules: this.props.modules,
            placeholder: this.props.placeholder,
            readOnly: this.props.readOnly,
            scrollingContainer: this.props.scrollingContainer,
            tabIndex: this.props.tabIndex,
            theme: this.props.theme
          };
        };
        ReactQuill3.prototype.getEditor = function() {
          if (!this.editor)
            throw new Error("Accessing non-instantiated editor");
          return this.editor;
        };
        ReactQuill3.prototype.createEditor = function(element2, config) {
          var editor = new quill_1.default(element2, config);
          if (config.tabIndex != null) {
            this.setEditorTabIndex(editor, config.tabIndex);
          }
          this.hookEditor(editor);
          return editor;
        };
        ReactQuill3.prototype.hookEditor = function(editor) {
          this.unprivilegedEditor = this.makeUnprivilegedEditor(editor);
          editor.on("editor-change", this.onEditorChange);
        };
        ReactQuill3.prototype.unhookEditor = function(editor) {
          editor.off("editor-change", this.onEditorChange);
        };
        ReactQuill3.prototype.getEditorContents = function() {
          return this.value;
        };
        ReactQuill3.prototype.getEditorSelection = function() {
          return this.selection;
        };
        ReactQuill3.prototype.isDelta = function(value) {
          return value && value.ops;
        };
        ReactQuill3.prototype.isEqualValue = function(value, nextValue) {
          if (this.isDelta(value) && this.isDelta(nextValue)) {
            return isEqual_1.default(value.ops, nextValue.ops);
          } else {
            return isEqual_1.default(value, nextValue);
          }
        };
        ReactQuill3.prototype.setEditorContents = function(editor, value) {
          var _this = this;
          this.value = value;
          var sel = this.getEditorSelection();
          if (typeof value === "string") {
            editor.setContents(editor.clipboard.convert(value));
          } else {
            editor.setContents(value);
          }
          postpone(function() {
            return _this.setEditorSelection(editor, sel);
          });
        };
        ReactQuill3.prototype.setEditorSelection = function(editor, range) {
          this.selection = range;
          if (range) {
            var length_1 = editor.getLength();
            range.index = Math.max(0, Math.min(range.index, length_1 - 1));
            range.length = Math.max(0, Math.min(range.length, length_1 - 1 - range.index));
            editor.setSelection(range);
          }
        };
        ReactQuill3.prototype.setEditorTabIndex = function(editor, tabIndex) {
          var _a, _b;
          if ((_b = (_a = editor) === null || _a === void 0 ? void 0 : _a.scroll) === null || _b === void 0 ? void 0 : _b.domNode) {
            editor.scroll.domNode.tabIndex = tabIndex;
          }
        };
        ReactQuill3.prototype.setEditorReadOnly = function(editor, value) {
          if (value) {
            editor.disable();
          } else {
            editor.enable();
          }
        };
        ReactQuill3.prototype.makeUnprivilegedEditor = function(editor) {
          var e = editor;
          return {
            getHTML: function() {
              return e.root.innerHTML;
            },
            getLength: e.getLength.bind(e),
            getText: e.getText.bind(e),
            getContents: e.getContents.bind(e),
            getSelection: e.getSelection.bind(e),
            getBounds: e.getBounds.bind(e)
          };
        };
        ReactQuill3.prototype.getEditingArea = function() {
          if (!this.editingArea) {
            throw new Error("Instantiating on missing editing area");
          }
          var element2 = react_dom_1.default.findDOMNode(this.editingArea);
          if (!element2) {
            throw new Error("Cannot find element for editing area");
          }
          if (element2.nodeType === 3) {
            throw new Error("Editing area cannot be a text node");
          }
          return element2;
        };
        ReactQuill3.prototype.renderEditingArea = function() {
          var _this = this;
          var _a = this.props, children = _a.children, preserveWhitespace = _a.preserveWhitespace;
          var generation = this.state.generation;
          var properties = {
            key: generation,
            ref: function(instance) {
              _this.editingArea = instance;
            }
          };
          if (react_1.default.Children.count(children)) {
            return react_1.default.cloneElement(react_1.default.Children.only(children), properties);
          }
          return preserveWhitespace ? react_1.default.createElement("pre", __assign({}, properties)) : react_1.default.createElement("div", __assign({}, properties));
        };
        ReactQuill3.prototype.render = function() {
          var _a;
          return react_1.default.createElement("div", { id: this.props.id, style: this.props.style, key: this.state.generation, className: "quill " + (_a = this.props.className, _a !== null && _a !== void 0 ? _a : ""), onKeyPress: this.props.onKeyPress, onKeyDown: this.props.onKeyDown, onKeyUp: this.props.onKeyUp }, this.renderEditingArea());
        };
        ReactQuill3.prototype.onEditorChangeText = function(value, delta, source, editor) {
          var _a, _b;
          if (!this.editor)
            return;
          var nextContents = this.isDelta(this.value) ? editor.getContents() : editor.getHTML();
          if (nextContents !== this.getEditorContents()) {
            this.lastDeltaChangeSet = delta;
            this.value = nextContents;
            (_b = (_a = this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, value, delta, source, editor);
          }
        };
        ReactQuill3.prototype.onEditorChangeSelection = function(nextSelection, source, editor) {
          var _a, _b, _c, _d, _e, _f;
          if (!this.editor)
            return;
          var currentSelection = this.getEditorSelection();
          var hasGainedFocus = !currentSelection && nextSelection;
          var hasLostFocus = currentSelection && !nextSelection;
          if (isEqual_1.default(nextSelection, currentSelection))
            return;
          this.selection = nextSelection;
          (_b = (_a = this.props).onChangeSelection) === null || _b === void 0 ? void 0 : _b.call(_a, nextSelection, source, editor);
          if (hasGainedFocus) {
            (_d = (_c = this.props).onFocus) === null || _d === void 0 ? void 0 : _d.call(_c, nextSelection, source, editor);
          } else if (hasLostFocus) {
            (_f = (_e = this.props).onBlur) === null || _f === void 0 ? void 0 : _f.call(_e, currentSelection, source, editor);
          }
        };
        ReactQuill3.prototype.focus = function() {
          if (!this.editor)
            return;
          this.editor.focus();
        };
        ReactQuill3.prototype.blur = function() {
          if (!this.editor)
            return;
          this.selection = null;
          this.editor.blur();
        };
        ReactQuill3.displayName = "React Quill";
        ReactQuill3.Quill = quill_1.default;
        ReactQuill3.defaultProps = {
          theme: "snow",
          modules: {},
          readOnly: false
        };
        return ReactQuill3;
      }(react_1.default.Component)
    );
    function postpone(fn) {
      Promise.resolve().then(fn);
    }
    module.exports = ReactQuill2;
  }
});

// node_modules/quill-cursors/dist/quill-cursors.js
var require_quill_cursors = __commonJS({
  "node_modules/quill-cursors/dist/quill-cursors.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.QuillCursors = e() : t.QuillCursors = e();
    }(self, () => (() => {
      var t = { 582: (t2, e2, r2) => {
        "use strict";
        r2.d(e2, { Z: () => s });
        var n2 = r2(81), i = r2.n(n2), o = r2(645), a = r2.n(o)()(i());
        a.push([t2.id, ".ql-container{position:relative;overflow:hidden}@media(pointer: coarse){.ql-cursor-caret-container{z-index:-1}}.ql-cursor.hidden{display:none}.ql-cursor .ql-cursor-caret-container,.ql-cursor .ql-cursor-flag{position:absolute}.ql-cursor .ql-cursor-flag{z-index:1;transform:translate3d(-1px, -100%, 0);opacity:0;visibility:hidden;color:#fff;padding-bottom:2px;border-radius:0 3px 3px 0}.ql-cursor .ql-cursor-flag.flag-flipped{border-radius:3px 0 0 3px;transform:translate3d(calc(-100% + 1px ), -100%, 0)}@media screen{.ql-cursor .ql-cursor-flag{transition:opacity 0ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0ms,visibility 0ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0ms}}.ql-cursor .ql-cursor-flag .ql-cursor-name{margin-left:5px;margin-right:5px;display:inline-block;margin-top:-2px;white-space:nowrap}.ql-cursor .ql-cursor-flag.no-delay[style]{transition-delay:unset !important}.ql-cursor .ql-cursor-caret-container{cursor:text;margin-left:-9px;padding:0 9px}.ql-cursor .ql-cursor-caret-container.hover+.ql-cursor-flag{opacity:1;visibility:visible;transition:none}.ql-cursor .ql-cursor-caret-container.no-pointer{pointer-events:none}.ql-cursor .ql-cursor-caret-container .ql-cursor-caret{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background-color:attr(data-color)}.ql-cursor .ql-cursor-selection-block{position:absolute;pointer-events:none}", ""]);
        const s = a;
      }, 645: (t2) => {
        "use strict";
        t2.exports = function(t3) {
          var e2 = [];
          return e2.toString = function() {
            return this.map(function(e3) {
              var r2 = "", n2 = void 0 !== e3[5];
              return e3[4] && (r2 += "@supports (".concat(e3[4], ") {")), e3[2] && (r2 += "@media ".concat(e3[2], " {")), n2 && (r2 += "@layer".concat(e3[5].length > 0 ? " ".concat(e3[5]) : "", " {")), r2 += t3(e3), n2 && (r2 += "}"), e3[2] && (r2 += "}"), e3[4] && (r2 += "}"), r2;
            }).join("");
          }, e2.i = function(t4, r2, n2, i, o) {
            "string" == typeof t4 && (t4 = [[null, t4, void 0]]);
            var a = {};
            if (n2) for (var s = 0; s < this.length; s++) {
              var u = this[s][0];
              null != u && (a[u] = true);
            }
            for (var c = 0; c < t4.length; c++) {
              var l = [].concat(t4[c]);
              n2 && a[l[0]] || (void 0 !== o && (void 0 === l[5] || (l[1] = "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {").concat(l[1], "}")), l[5] = o), r2 && (l[2] ? (l[1] = "@media ".concat(l[2], " {").concat(l[1], "}"), l[2] = r2) : l[2] = r2), i && (l[4] ? (l[1] = "@supports (".concat(l[4], ") {").concat(l[1], "}"), l[4] = i) : l[4] = "".concat(i)), e2.push(l));
            }
          }, e2;
        };
      }, 81: (t2) => {
        "use strict";
        t2.exports = function(t3) {
          return t3[1];
        };
      }, 529: (t2) => {
        var e2 = -1;
        function r2(t3, s2, u2, c2) {
          if (t3 === s2) return t3 ? [[0, t3]] : [];
          if (null != u2) {
            var l2 = function(t4, e3, r3) {
              var n3 = "number" == typeof r3 ? { index: r3, length: 0 } : r3.oldRange, i2 = "number" == typeof r3 ? null : r3.newRange, o2 = t4.length, a2 = e3.length;
              if (0 === n3.length && (null === i2 || 0 === i2.length)) {
                var s3 = n3.index, u3 = t4.slice(0, s3), c3 = t4.slice(s3), l3 = i2 ? i2.index : null, h3 = s3 + a2 - o2;
                if ((null === l3 || l3 === h3) && !(h3 < 0 || h3 > a2)) {
                  var d2 = e3.slice(0, h3);
                  if ((_ = e3.slice(h3)) === c3) {
                    var p2 = Math.min(s3, h3);
                    if ((b = u3.slice(0, p2)) === (m = d2.slice(0, p2))) return f(b, u3.slice(p2), d2.slice(p2), c3);
                  }
                }
                if (null === l3 || l3 === s3) {
                  var g2 = s3, _ = (d2 = e3.slice(0, g2), e3.slice(g2));
                  if (d2 === u3) {
                    var v = Math.min(o2 - g2, a2 - g2);
                    if ((y = c3.slice(c3.length - v)) === (A = _.slice(_.length - v))) return f(u3, c3.slice(0, c3.length - v), _.slice(0, _.length - v), y);
                  }
                }
              }
              if (n3.length > 0 && i2 && 0 === i2.length) {
                var b = t4.slice(0, n3.index), y = t4.slice(n3.index + n3.length);
                if (!(a2 < (p2 = b.length) + (v = y.length))) {
                  var m = e3.slice(0, p2), A = e3.slice(a2 - v);
                  if (b === m && y === A) return f(b, t4.slice(p2, o2 - v), e3.slice(p2, a2 - v), y);
                }
              }
              return null;
            }(t3, s2, u2);
            if (l2) return l2;
          }
          var h2 = i(t3, s2), d = t3.substring(0, h2);
          h2 = o(t3 = t3.substring(h2), s2 = s2.substring(h2));
          var p = t3.substring(t3.length - h2), g = function(t4, a2) {
            var s3;
            if (!t4) return [[1, a2]];
            if (!a2) return [[e2, t4]];
            var u3 = t4.length > a2.length ? t4 : a2, c3 = t4.length > a2.length ? a2 : t4, l3 = u3.indexOf(c3);
            if (-1 !== l3) return s3 = [[1, u3.substring(0, l3)], [0, c3], [1, u3.substring(l3 + c3.length)]], t4.length > a2.length && (s3[0][0] = s3[2][0] = e2), s3;
            if (1 === c3.length) return [[e2, t4], [1, a2]];
            var f2 = function(t5, e3) {
              var r3 = t5.length > e3.length ? t5 : e3, n3 = t5.length > e3.length ? e3 : t5;
              if (r3.length < 4 || 2 * n3.length < r3.length) return null;
              function a3(t6, e4, r4) {
                for (var n4, a4, s5, u5, c5 = t6.substring(r4, r4 + Math.floor(t6.length / 4)), l5 = -1, f4 = ""; -1 !== (l5 = e4.indexOf(c5, l5 + 1)); ) {
                  var h5 = i(t6.substring(r4), e4.substring(l5)), d4 = o(t6.substring(0, r4), e4.substring(0, l5));
                  f4.length < d4 + h5 && (f4 = e4.substring(l5 - d4, l5) + e4.substring(l5, l5 + h5), n4 = t6.substring(0, r4 - d4), a4 = t6.substring(r4 + h5), s5 = e4.substring(0, l5 - d4), u5 = e4.substring(l5 + h5));
                }
                return 2 * f4.length >= t6.length ? [n4, a4, s5, u5, f4] : null;
              }
              var s4, u4, c4, l4, f3, h4 = a3(r3, n3, Math.ceil(r3.length / 4)), d3 = a3(r3, n3, Math.ceil(r3.length / 2));
              return h4 || d3 ? (s4 = d3 ? h4 && h4[4].length > d3[4].length ? h4 : d3 : h4, t5.length > e3.length ? (u4 = s4[0], c4 = s4[1], l4 = s4[2], f3 = s4[3]) : (l4 = s4[0], f3 = s4[1], u4 = s4[2], c4 = s4[3]), [u4, c4, l4, f3, s4[4]]) : null;
            }(t4, a2);
            if (f2) {
              var h3 = f2[0], d2 = f2[1], p2 = f2[2], g2 = f2[3], _ = f2[4], v = r2(h3, p2), b = r2(d2, g2);
              return v.concat([[0, _]], b);
            }
            return function(t5, r3) {
              for (var i2 = t5.length, o2 = r3.length, a3 = Math.ceil((i2 + o2) / 2), s4 = a3, u4 = 2 * a3, c4 = new Array(u4), l4 = new Array(u4), f3 = 0; f3 < u4; f3++) c4[f3] = -1, l4[f3] = -1;
              c4[s4 + 1] = 0, l4[s4 + 1] = 0;
              for (var h4 = i2 - o2, d3 = h4 % 2 != 0, p3 = 0, g3 = 0, _2 = 0, v2 = 0, b2 = 0; b2 < a3; b2++) {
                for (var y = -b2 + p3; y <= b2 - g3; y += 2) {
                  for (var m = s4 + y, A = (S = y === -b2 || y !== b2 && c4[m - 1] < c4[m + 1] ? c4[m + 1] : c4[m - 1] + 1) - y; S < i2 && A < o2 && t5.charAt(S) === r3.charAt(A); ) S++, A++;
                  if (c4[m] = S, S > i2) g3 += 2;
                  else if (A > o2) p3 += 2;
                  else if (d3 && (w = s4 + h4 - y) >= 0 && w < u4 && -1 !== l4[w] && S >= (C = i2 - l4[w])) return n2(t5, r3, S, A);
                }
                for (var x = -b2 + _2; x <= b2 - v2; x += 2) {
                  for (var C, w = s4 + x, E = (C = x === -b2 || x !== b2 && l4[w - 1] < l4[w + 1] ? l4[w + 1] : l4[w - 1] + 1) - x; C < i2 && E < o2 && t5.charAt(i2 - C - 1) === r3.charAt(o2 - E - 1); ) C++, E++;
                  if (l4[w] = C, C > i2) v2 += 2;
                  else if (E > o2) _2 += 2;
                  else if (!d3) {
                    var S;
                    if ((m = s4 + h4 - x) >= 0 && m < u4 && -1 !== c4[m]) {
                      if (A = s4 + (S = c4[m]) - m, S >= (C = i2 - C)) return n2(t5, r3, S, A);
                    }
                  }
                }
              }
              return [[e2, t5], [1, r3]];
            }(t4, a2);
          }(t3 = t3.substring(0, t3.length - h2), s2 = s2.substring(0, s2.length - h2));
          return d && g.unshift([0, d]), p && g.push([0, p]), a(g, c2), g;
        }
        function n2(t3, e3, n3, i2) {
          var o2 = t3.substring(0, n3), a2 = e3.substring(0, i2), s2 = t3.substring(n3), u2 = e3.substring(i2), c2 = r2(o2, a2), l2 = r2(s2, u2);
          return c2.concat(l2);
        }
        function i(t3, e3) {
          if (!t3 || !e3 || t3.charAt(0) !== e3.charAt(0)) return 0;
          for (var r3 = 0, n3 = Math.min(t3.length, e3.length), i2 = n3, o2 = 0; r3 < i2; ) t3.substring(o2, i2) == e3.substring(o2, i2) ? o2 = r3 = i2 : n3 = i2, i2 = Math.floor((n3 - r3) / 2 + r3);
          return s(t3.charCodeAt(i2 - 1)) && i2--, i2;
        }
        function o(t3, e3) {
          if (!t3 || !e3 || t3.slice(-1) !== e3.slice(-1)) return 0;
          for (var r3 = 0, n3 = Math.min(t3.length, e3.length), i2 = n3, o2 = 0; r3 < i2; ) t3.substring(t3.length - i2, t3.length - o2) == e3.substring(e3.length - i2, e3.length - o2) ? o2 = r3 = i2 : n3 = i2, i2 = Math.floor((n3 - r3) / 2 + r3);
          return u(t3.charCodeAt(t3.length - i2)) && i2--, i2;
        }
        function a(t3, r3) {
          t3.push([0, ""]);
          for (var n3, s2 = 0, u2 = 0, f2 = 0, h2 = "", d = ""; s2 < t3.length; ) if (s2 < t3.length - 1 && !t3[s2][1]) t3.splice(s2, 1);
          else switch (t3[s2][0]) {
            case 1:
              f2++, d += t3[s2][1], s2++;
              break;
            case e2:
              u2++, h2 += t3[s2][1], s2++;
              break;
            case 0:
              var p = s2 - f2 - u2 - 1;
              if (r3) {
                if (p >= 0 && l(t3[p][1])) {
                  var g = t3[p][1].slice(-1);
                  if (t3[p][1] = t3[p][1].slice(0, -1), h2 = g + h2, d = g + d, !t3[p][1]) {
                    t3.splice(p, 1), s2--;
                    var _ = p - 1;
                    t3[_] && 1 === t3[_][0] && (f2++, d = t3[_][1] + d, _--), t3[_] && t3[_][0] === e2 && (u2++, h2 = t3[_][1] + h2, _--), p = _;
                  }
                }
                c(t3[s2][1]) && (g = t3[s2][1].charAt(0), t3[s2][1] = t3[s2][1].slice(1), h2 += g, d += g);
              }
              if (s2 < t3.length - 1 && !t3[s2][1]) {
                t3.splice(s2, 1);
                break;
              }
              if (h2.length > 0 || d.length > 0) {
                h2.length > 0 && d.length > 0 && (0 !== (n3 = i(d, h2)) && (p >= 0 ? t3[p][1] += d.substring(0, n3) : (t3.splice(0, 0, [0, d.substring(0, n3)]), s2++), d = d.substring(n3), h2 = h2.substring(n3)), 0 !== (n3 = o(d, h2)) && (t3[s2][1] = d.substring(d.length - n3) + t3[s2][1], d = d.substring(0, d.length - n3), h2 = h2.substring(0, h2.length - n3)));
                var v = f2 + u2;
                0 === h2.length && 0 === d.length ? (t3.splice(s2 - v, v), s2 -= v) : 0 === h2.length ? (t3.splice(s2 - v, v, [1, d]), s2 = s2 - v + 1) : 0 === d.length ? (t3.splice(s2 - v, v, [e2, h2]), s2 = s2 - v + 1) : (t3.splice(s2 - v, v, [e2, h2], [1, d]), s2 = s2 - v + 2);
              }
              0 !== s2 && 0 === t3[s2 - 1][0] ? (t3[s2 - 1][1] += t3[s2][1], t3.splice(s2, 1)) : s2++, f2 = 0, u2 = 0, h2 = "", d = "";
          }
          "" === t3[t3.length - 1][1] && t3.pop();
          var b = false;
          for (s2 = 1; s2 < t3.length - 1; ) 0 === t3[s2 - 1][0] && 0 === t3[s2 + 1][0] && (t3[s2][1].substring(t3[s2][1].length - t3[s2 - 1][1].length) === t3[s2 - 1][1] ? (t3[s2][1] = t3[s2 - 1][1] + t3[s2][1].substring(0, t3[s2][1].length - t3[s2 - 1][1].length), t3[s2 + 1][1] = t3[s2 - 1][1] + t3[s2 + 1][1], t3.splice(s2 - 1, 1), b = true) : t3[s2][1].substring(0, t3[s2 + 1][1].length) == t3[s2 + 1][1] && (t3[s2 - 1][1] += t3[s2 + 1][1], t3[s2][1] = t3[s2][1].substring(t3[s2 + 1][1].length) + t3[s2 + 1][1], t3.splice(s2 + 1, 1), b = true)), s2++;
          b && a(t3, r3);
        }
        function s(t3) {
          return t3 >= 55296 && t3 <= 56319;
        }
        function u(t3) {
          return t3 >= 56320 && t3 <= 57343;
        }
        function c(t3) {
          return u(t3.charCodeAt(0));
        }
        function l(t3) {
          return s(t3.charCodeAt(t3.length - 1));
        }
        function f(t3, r3, n3, i2) {
          return l(t3) || c(i2) ? null : function(t4) {
            for (var e3 = [], r4 = 0; r4 < t4.length; r4++) t4[r4][1].length > 0 && e3.push(t4[r4]);
            return e3;
          }([[0, t3], [e2, r3], [1, n3], [0, i2]]);
        }
        function h(t3, e3, n3) {
          return r2(t3, e3, n3, true);
        }
        h.INSERT = 1, h.DELETE = e2, h.EQUAL = 0, t2.exports = h;
      }, 465: (t2, e2, r2) => {
        t2 = r2.nmd(t2);
        var n2 = "__lodash_hash_undefined__", i = 9007199254740991, o = "[object Arguments]", a = "[object Boolean]", s = "[object Date]", u = "[object Function]", c = "[object GeneratorFunction]", l = "[object Map]", f = "[object Number]", h = "[object Object]", d = "[object Promise]", p = "[object RegExp]", g = "[object Set]", _ = "[object String]", v = "[object Symbol]", b = "[object WeakMap]", y = "[object ArrayBuffer]", m = "[object DataView]", A = "[object Float32Array]", x = "[object Float64Array]", C = "[object Int8Array]", w = "[object Int16Array]", E = "[object Int32Array]", S = "[object Uint8Array]", M = "[object Uint8ClampedArray]", O = "[object Uint16Array]", j = "[object Uint32Array]", L = /\w*$/, k = /^\[object .+?Constructor\]$/, T = /^(?:0|[1-9]\d*)$/, R = {};
        R[o] = R["[object Array]"] = R[y] = R[m] = R[a] = R[s] = R[A] = R[x] = R[C] = R[w] = R[E] = R[l] = R[f] = R[h] = R[p] = R[g] = R[_] = R[v] = R[S] = R[M] = R[O] = R[j] = true, R["[object Error]"] = R[u] = R[b] = false;
        var N = "object" == typeof r2.g && r2.g && r2.g.Object === Object && r2.g, q = "object" == typeof self && self && self.Object === Object && self, D = N || q || Function("return this")(), F = e2 && !e2.nodeType && e2, I = F && t2 && !t2.nodeType && t2, P = I && I.exports === F;
        function B(t3, e3) {
          return t3.set(e3[0], e3[1]), t3;
        }
        function z(t3, e3) {
          return t3.add(e3), t3;
        }
        function H(t3, e3, r3, n3) {
          var i2 = -1, o2 = t3 ? t3.length : 0;
          for (n3 && o2 && (r3 = t3[++i2]); ++i2 < o2; ) r3 = e3(r3, t3[i2], i2, t3);
          return r3;
        }
        function U(t3) {
          var e3 = false;
          if (null != t3 && "function" != typeof t3.toString) try {
            e3 = !!(t3 + "");
          } catch (t4) {
          }
          return e3;
        }
        function G(t3) {
          var e3 = -1, r3 = Array(t3.size);
          return t3.forEach(function(t4, n3) {
            r3[++e3] = [n3, t4];
          }), r3;
        }
        function $(t3, e3) {
          return function(r3) {
            return t3(e3(r3));
          };
        }
        function V(t3) {
          var e3 = -1, r3 = Array(t3.size);
          return t3.forEach(function(t4) {
            r3[++e3] = t4;
          }), r3;
        }
        var W, X = Array.prototype, Q = Function.prototype, Z = Object.prototype, Y = D["__core-js_shared__"], K = (W = /[^.]+$/.exec(Y && Y.keys && Y.keys.IE_PROTO || "")) ? "Symbol(src)_1." + W : "", J = Q.toString, tt = Z.hasOwnProperty, et = Z.toString, rt = RegExp("^" + J.call(tt).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), nt = P ? D.Buffer : void 0, it = D.Symbol, ot = D.Uint8Array, at = $(Object.getPrototypeOf, Object), st = Object.create, ut = Z.propertyIsEnumerable, ct = X.splice, lt = Object.getOwnPropertySymbols, ft = nt ? nt.isBuffer : void 0, ht = $(Object.keys, Object), dt = Dt(D, "DataView"), pt = Dt(D, "Map"), gt = Dt(D, "Promise"), _t = Dt(D, "Set"), vt = Dt(D, "WeakMap"), bt = Dt(Object, "create"), yt = zt(dt), mt = zt(pt), At = zt(gt), xt = zt(_t), Ct = zt(vt), wt = it ? it.prototype : void 0, Et = wt ? wt.valueOf : void 0;
        function St(t3) {
          var e3 = -1, r3 = t3 ? t3.length : 0;
          for (this.clear(); ++e3 < r3; ) {
            var n3 = t3[e3];
            this.set(n3[0], n3[1]);
          }
        }
        function Mt(t3) {
          var e3 = -1, r3 = t3 ? t3.length : 0;
          for (this.clear(); ++e3 < r3; ) {
            var n3 = t3[e3];
            this.set(n3[0], n3[1]);
          }
        }
        function Ot(t3) {
          var e3 = -1, r3 = t3 ? t3.length : 0;
          for (this.clear(); ++e3 < r3; ) {
            var n3 = t3[e3];
            this.set(n3[0], n3[1]);
          }
        }
        function jt(t3) {
          this.__data__ = new Mt(t3);
        }
        function Lt(t3, e3, r3) {
          var n3 = t3[e3];
          tt.call(t3, e3) && Ht(n3, r3) && (void 0 !== r3 || e3 in t3) || (t3[e3] = r3);
        }
        function kt(t3, e3) {
          for (var r3 = t3.length; r3--; ) if (Ht(t3[r3][0], e3)) return r3;
          return -1;
        }
        function Tt(t3, e3, r3, n3, i2, d2, b2) {
          var k2;
          if (n3 && (k2 = d2 ? n3(t3, i2, d2, b2) : n3(t3)), void 0 !== k2) return k2;
          if (!Wt(t3)) return t3;
          var T2 = Ut(t3);
          if (T2) {
            if (k2 = function(t4) {
              var e4 = t4.length, r4 = t4.constructor(e4);
              return e4 && "string" == typeof t4[0] && tt.call(t4, "index") && (r4.index = t4.index, r4.input = t4.input), r4;
            }(t3), !e3) return function(t4, e4) {
              var r4 = -1, n4 = t4.length;
              for (e4 || (e4 = Array(n4)); ++r4 < n4; ) e4[r4] = t4[r4];
              return e4;
            }(t3, k2);
          } else {
            var N2 = It(t3), q2 = N2 == u || N2 == c;
            if ($t(t3)) return function(t4, e4) {
              if (e4) return t4.slice();
              var r4 = new t4.constructor(t4.length);
              return t4.copy(r4), r4;
            }(t3, e3);
            if (N2 == h || N2 == o || q2 && !d2) {
              if (U(t3)) return d2 ? t3 : {};
              if (k2 = function(t4) {
                return "function" != typeof t4.constructor || Bt(t4) ? {} : Wt(e4 = at(t4)) ? st(e4) : {};
                var e4;
              }(q2 ? {} : t3), !e3) return function(t4, e4) {
                return Nt(t4, Ft(t4), e4);
              }(t3, function(t4, e4) {
                return t4 && Nt(e4, Xt(e4), t4);
              }(k2, t3));
            } else {
              if (!R[N2]) return d2 ? t3 : {};
              k2 = function(t4, e4, r4, n4) {
                var i3, o2 = t4.constructor;
                switch (e4) {
                  case y:
                    return Rt(t4);
                  case a:
                  case s:
                    return new o2(+t4);
                  case m:
                    return function(t5, e5) {
                      var r5 = e5 ? Rt(t5.buffer) : t5.buffer;
                      return new t5.constructor(r5, t5.byteOffset, t5.byteLength);
                    }(t4, n4);
                  case A:
                  case x:
                  case C:
                  case w:
                  case E:
                  case S:
                  case M:
                  case O:
                  case j:
                    return function(t5, e5) {
                      var r5 = e5 ? Rt(t5.buffer) : t5.buffer;
                      return new t5.constructor(r5, t5.byteOffset, t5.length);
                    }(t4, n4);
                  case l:
                    return function(t5, e5, r5) {
                      return H(e5 ? r5(G(t5), true) : G(t5), B, new t5.constructor());
                    }(t4, n4, r4);
                  case f:
                  case _:
                    return new o2(t4);
                  case p:
                    return function(t5) {
                      var e5 = new t5.constructor(t5.source, L.exec(t5));
                      return e5.lastIndex = t5.lastIndex, e5;
                    }(t4);
                  case g:
                    return function(t5, e5, r5) {
                      return H(e5 ? r5(V(t5), true) : V(t5), z, new t5.constructor());
                    }(t4, n4, r4);
                  case v:
                    return i3 = t4, Et ? Object(Et.call(i3)) : {};
                }
              }(t3, N2, Tt, e3);
            }
          }
          b2 || (b2 = new jt());
          var D2 = b2.get(t3);
          if (D2) return D2;
          if (b2.set(t3, k2), !T2) var F2 = r3 ? function(t4) {
            return function(t5, e4, r4) {
              var n4 = e4(t5);
              return Ut(t5) ? n4 : function(t6, e5) {
                for (var r5 = -1, n5 = e5.length, i3 = t6.length; ++r5 < n5; ) t6[i3 + r5] = e5[r5];
                return t6;
              }(n4, r4(t5));
            }(t4, Xt, Ft);
          }(t3) : Xt(t3);
          return function(t4, e4) {
            for (var r4 = -1, n4 = t4 ? t4.length : 0; ++r4 < n4 && false !== e4(t4[r4], r4); ) ;
          }(F2 || t3, function(i3, o2) {
            F2 && (i3 = t3[o2 = i3]), Lt(k2, o2, Tt(i3, e3, r3, n3, o2, t3, b2));
          }), k2;
        }
        function Rt(t3) {
          var e3 = new t3.constructor(t3.byteLength);
          return new ot(e3).set(new ot(t3)), e3;
        }
        function Nt(t3, e3, r3, n3) {
          r3 || (r3 = {});
          for (var i2 = -1, o2 = e3.length; ++i2 < o2; ) {
            var a2 = e3[i2], s2 = n3 ? n3(r3[a2], t3[a2], a2, r3, t3) : void 0;
            Lt(r3, a2, void 0 === s2 ? t3[a2] : s2);
          }
          return r3;
        }
        function qt(t3, e3) {
          var r3, n3, i2 = t3.__data__;
          return ("string" == (n3 = typeof (r3 = e3)) || "number" == n3 || "symbol" == n3 || "boolean" == n3 ? "__proto__" !== r3 : null === r3) ? i2["string" == typeof e3 ? "string" : "hash"] : i2.map;
        }
        function Dt(t3, e3) {
          var r3 = function(t4, e4) {
            return null == t4 ? void 0 : t4[e4];
          }(t3, e3);
          return function(t4) {
            return !(!Wt(t4) || (e4 = t4, K && K in e4)) && (Vt(t4) || U(t4) ? rt : k).test(zt(t4));
            var e4;
          }(r3) ? r3 : void 0;
        }
        St.prototype.clear = function() {
          this.__data__ = bt ? bt(null) : {};
        }, St.prototype.delete = function(t3) {
          return this.has(t3) && delete this.__data__[t3];
        }, St.prototype.get = function(t3) {
          var e3 = this.__data__;
          if (bt) {
            var r3 = e3[t3];
            return r3 === n2 ? void 0 : r3;
          }
          return tt.call(e3, t3) ? e3[t3] : void 0;
        }, St.prototype.has = function(t3) {
          var e3 = this.__data__;
          return bt ? void 0 !== e3[t3] : tt.call(e3, t3);
        }, St.prototype.set = function(t3, e3) {
          return this.__data__[t3] = bt && void 0 === e3 ? n2 : e3, this;
        }, Mt.prototype.clear = function() {
          this.__data__ = [];
        }, Mt.prototype.delete = function(t3) {
          var e3 = this.__data__, r3 = kt(e3, t3);
          return !(r3 < 0 || (r3 == e3.length - 1 ? e3.pop() : ct.call(e3, r3, 1), 0));
        }, Mt.prototype.get = function(t3) {
          var e3 = this.__data__, r3 = kt(e3, t3);
          return r3 < 0 ? void 0 : e3[r3][1];
        }, Mt.prototype.has = function(t3) {
          return kt(this.__data__, t3) > -1;
        }, Mt.prototype.set = function(t3, e3) {
          var r3 = this.__data__, n3 = kt(r3, t3);
          return n3 < 0 ? r3.push([t3, e3]) : r3[n3][1] = e3, this;
        }, Ot.prototype.clear = function() {
          this.__data__ = { hash: new St(), map: new (pt || Mt)(), string: new St() };
        }, Ot.prototype.delete = function(t3) {
          return qt(this, t3).delete(t3);
        }, Ot.prototype.get = function(t3) {
          return qt(this, t3).get(t3);
        }, Ot.prototype.has = function(t3) {
          return qt(this, t3).has(t3);
        }, Ot.prototype.set = function(t3, e3) {
          return qt(this, t3).set(t3, e3), this;
        }, jt.prototype.clear = function() {
          this.__data__ = new Mt();
        }, jt.prototype.delete = function(t3) {
          return this.__data__.delete(t3);
        }, jt.prototype.get = function(t3) {
          return this.__data__.get(t3);
        }, jt.prototype.has = function(t3) {
          return this.__data__.has(t3);
        }, jt.prototype.set = function(t3, e3) {
          var r3 = this.__data__;
          if (r3 instanceof Mt) {
            var n3 = r3.__data__;
            if (!pt || n3.length < 199) return n3.push([t3, e3]), this;
            r3 = this.__data__ = new Ot(n3);
          }
          return r3.set(t3, e3), this;
        };
        var Ft = lt ? $(lt, Object) : function() {
          return [];
        }, It = function(t3) {
          return et.call(t3);
        };
        function Pt(t3, e3) {
          return !!(e3 = null == e3 ? i : e3) && ("number" == typeof t3 || T.test(t3)) && t3 > -1 && t3 % 1 == 0 && t3 < e3;
        }
        function Bt(t3) {
          var e3 = t3 && t3.constructor;
          return t3 === ("function" == typeof e3 && e3.prototype || Z);
        }
        function zt(t3) {
          if (null != t3) {
            try {
              return J.call(t3);
            } catch (t4) {
            }
            try {
              return t3 + "";
            } catch (t4) {
            }
          }
          return "";
        }
        function Ht(t3, e3) {
          return t3 === e3 || t3 != t3 && e3 != e3;
        }
        (dt && It(new dt(new ArrayBuffer(1))) != m || pt && It(new pt()) != l || gt && It(gt.resolve()) != d || _t && It(new _t()) != g || vt && It(new vt()) != b) && (It = function(t3) {
          var e3 = et.call(t3), r3 = e3 == h ? t3.constructor : void 0, n3 = r3 ? zt(r3) : void 0;
          if (n3) switch (n3) {
            case yt:
              return m;
            case mt:
              return l;
            case At:
              return d;
            case xt:
              return g;
            case Ct:
              return b;
          }
          return e3;
        });
        var Ut = Array.isArray;
        function Gt(t3) {
          return null != t3 && function(t4) {
            return "number" == typeof t4 && t4 > -1 && t4 % 1 == 0 && t4 <= i;
          }(t3.length) && !Vt(t3);
        }
        var $t = ft || function() {
          return false;
        };
        function Vt(t3) {
          var e3 = Wt(t3) ? et.call(t3) : "";
          return e3 == u || e3 == c;
        }
        function Wt(t3) {
          var e3 = typeof t3;
          return !!t3 && ("object" == e3 || "function" == e3);
        }
        function Xt(t3) {
          return Gt(t3) ? function(t4, e3) {
            var r3 = Ut(t4) || function(t5) {
              return function(t6) {
                return /* @__PURE__ */ function(t7) {
                  return !!t7 && "object" == typeof t7;
                }(t6) && Gt(t6);
              }(t5) && tt.call(t5, "callee") && (!ut.call(t5, "callee") || et.call(t5) == o);
            }(t4) ? function(t5, e4) {
              for (var r4 = -1, n4 = Array(t5); ++r4 < t5; ) n4[r4] = e4(r4);
              return n4;
            }(t4.length, String) : [], n3 = r3.length, i2 = !!n3;
            for (var a2 in t4) !e3 && !tt.call(t4, a2) || i2 && ("length" == a2 || Pt(a2, n3)) || r3.push(a2);
            return r3;
          }(t3) : function(t4) {
            if (!Bt(t4)) return ht(t4);
            var e3 = [];
            for (var r3 in Object(t4)) tt.call(t4, r3) && "constructor" != r3 && e3.push(r3);
            return e3;
          }(t3);
        }
        t2.exports = function(t3) {
          return Tt(t3, true, true);
        };
      }, 307: (t2, e2, r2) => {
        t2 = r2.nmd(t2);
        var n2 = "__lodash_hash_undefined__", i = 9007199254740991, o = "[object Arguments]", a = "[object Array]", s = "[object Boolean]", u = "[object Date]", c = "[object Error]", l = "[object Function]", f = "[object Map]", h = "[object Number]", d = "[object Object]", p = "[object Promise]", g = "[object RegExp]", _ = "[object Set]", v = "[object String]", b = "[object WeakMap]", y = "[object ArrayBuffer]", m = "[object DataView]", A = /^\[object .+?Constructor\]$/, x = /^(?:0|[1-9]\d*)$/, C = {};
        C["[object Float32Array]"] = C["[object Float64Array]"] = C["[object Int8Array]"] = C["[object Int16Array]"] = C["[object Int32Array]"] = C["[object Uint8Array]"] = C["[object Uint8ClampedArray]"] = C["[object Uint16Array]"] = C["[object Uint32Array]"] = true, C[o] = C[a] = C[y] = C[s] = C[m] = C[u] = C[c] = C[l] = C[f] = C[h] = C[d] = C[g] = C[_] = C[v] = C[b] = false;
        var w = "object" == typeof r2.g && r2.g && r2.g.Object === Object && r2.g, E = "object" == typeof self && self && self.Object === Object && self, S = w || E || Function("return this")(), M = e2 && !e2.nodeType && e2, O = M && t2 && !t2.nodeType && t2, j = O && O.exports === M, L = j && w.process, k = function() {
          try {
            return L && L.binding && L.binding("util");
          } catch (t3) {
          }
        }(), T = k && k.isTypedArray;
        function R(t3, e3) {
          for (var r3 = -1, n3 = null == t3 ? 0 : t3.length; ++r3 < n3; ) if (e3(t3[r3], r3, t3)) return true;
          return false;
        }
        function N(t3) {
          var e3 = -1, r3 = Array(t3.size);
          return t3.forEach(function(t4, n3) {
            r3[++e3] = [n3, t4];
          }), r3;
        }
        function q(t3) {
          var e3 = -1, r3 = Array(t3.size);
          return t3.forEach(function(t4) {
            r3[++e3] = t4;
          }), r3;
        }
        var D, F, I, P = Array.prototype, B = Function.prototype, z = Object.prototype, H = S["__core-js_shared__"], U = B.toString, G = z.hasOwnProperty, $ = (D = /[^.]+$/.exec(H && H.keys && H.keys.IE_PROTO || "")) ? "Symbol(src)_1." + D : "", V = z.toString, W = RegExp("^" + U.call(G).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), X = j ? S.Buffer : void 0, Q = S.Symbol, Z = S.Uint8Array, Y = z.propertyIsEnumerable, K = P.splice, J = Q ? Q.toStringTag : void 0, tt = Object.getOwnPropertySymbols, et = X ? X.isBuffer : void 0, rt = (F = Object.keys, I = Object, function(t3) {
          return F(I(t3));
        }), nt = Ot(S, "DataView"), it = Ot(S, "Map"), ot = Ot(S, "Promise"), at = Ot(S, "Set"), st = Ot(S, "WeakMap"), ut = Ot(Object, "create"), ct = Tt(nt), lt = Tt(it), ft = Tt(ot), ht = Tt(at), dt = Tt(st), pt = Q ? Q.prototype : void 0, gt = pt ? pt.valueOf : void 0;
        function _t(t3) {
          var e3 = -1, r3 = null == t3 ? 0 : t3.length;
          for (this.clear(); ++e3 < r3; ) {
            var n3 = t3[e3];
            this.set(n3[0], n3[1]);
          }
        }
        function vt(t3) {
          var e3 = -1, r3 = null == t3 ? 0 : t3.length;
          for (this.clear(); ++e3 < r3; ) {
            var n3 = t3[e3];
            this.set(n3[0], n3[1]);
          }
        }
        function bt(t3) {
          var e3 = -1, r3 = null == t3 ? 0 : t3.length;
          for (this.clear(); ++e3 < r3; ) {
            var n3 = t3[e3];
            this.set(n3[0], n3[1]);
          }
        }
        function yt(t3) {
          var e3 = -1, r3 = null == t3 ? 0 : t3.length;
          for (this.__data__ = new bt(); ++e3 < r3; ) this.add(t3[e3]);
        }
        function mt(t3) {
          var e3 = this.__data__ = new vt(t3);
          this.size = e3.size;
        }
        function At(t3, e3) {
          for (var r3 = t3.length; r3--; ) if (Rt(t3[r3][0], e3)) return r3;
          return -1;
        }
        function xt(t3) {
          return null == t3 ? void 0 === t3 ? "[object Undefined]" : "[object Null]" : J && J in Object(t3) ? function(t4) {
            var e3 = G.call(t4, J), r3 = t4[J];
            try {
              t4[J] = void 0;
              var n3 = true;
            } catch (t5) {
            }
            var i2 = V.call(t4);
            return n3 && (e3 ? t4[J] = r3 : delete t4[J]), i2;
          }(t3) : function(t4) {
            return V.call(t4);
          }(t3);
        }
        function Ct(t3) {
          return Bt(t3) && xt(t3) == o;
        }
        function wt(t3, e3, r3, n3, i2) {
          return t3 === e3 || (null == t3 || null == e3 || !Bt(t3) && !Bt(e3) ? t3 != t3 && e3 != e3 : function(t4, e4, r4, n4, i3, l2) {
            var p2 = qt(t4), b2 = qt(e4), A2 = p2 ? a : Lt(t4), x2 = b2 ? a : Lt(e4), C2 = (A2 = A2 == o ? d : A2) == d, w2 = (x2 = x2 == o ? d : x2) == d, E2 = A2 == x2;
            if (E2 && Dt(t4)) {
              if (!Dt(e4)) return false;
              p2 = true, C2 = false;
            }
            if (E2 && !C2) return l2 || (l2 = new mt()), p2 || zt(t4) ? Et(t4, e4, r4, n4, i3, l2) : function(t5, e5, r5, n5, i4, o2, a2) {
              switch (r5) {
                case m:
                  if (t5.byteLength != e5.byteLength || t5.byteOffset != e5.byteOffset) return false;
                  t5 = t5.buffer, e5 = e5.buffer;
                case y:
                  return !(t5.byteLength != e5.byteLength || !o2(new Z(t5), new Z(e5)));
                case s:
                case u:
                case h:
                  return Rt(+t5, +e5);
                case c:
                  return t5.name == e5.name && t5.message == e5.message;
                case g:
                case v:
                  return t5 == e5 + "";
                case f:
                  var l3 = N;
                case _:
                  var d2 = 1 & n5;
                  if (l3 || (l3 = q), t5.size != e5.size && !d2) return false;
                  var p3 = a2.get(t5);
                  if (p3) return p3 == e5;
                  n5 |= 2, a2.set(t5, e5);
                  var b3 = Et(l3(t5), l3(e5), n5, i4, o2, a2);
                  return a2.delete(t5), b3;
                case "[object Symbol]":
                  if (gt) return gt.call(t5) == gt.call(e5);
              }
              return false;
            }(t4, e4, A2, r4, n4, i3, l2);
            if (!(1 & r4)) {
              var S2 = C2 && G.call(t4, "__wrapped__"), M2 = w2 && G.call(e4, "__wrapped__");
              if (S2 || M2) {
                var O2 = S2 ? t4.value() : t4, j2 = M2 ? e4.value() : e4;
                return l2 || (l2 = new mt()), i3(O2, j2, r4, n4, l2);
              }
            }
            return !!E2 && (l2 || (l2 = new mt()), function(t5, e5, r5, n5, i4, o2) {
              var a2 = 1 & r5, s2 = St(t5), u2 = s2.length;
              if (u2 != St(e5).length && !a2) return false;
              for (var c2 = u2; c2--; ) {
                var l3 = s2[c2];
                if (!(a2 ? l3 in e5 : G.call(e5, l3))) return false;
              }
              var f2 = o2.get(t5);
              if (f2 && o2.get(e5)) return f2 == e5;
              var h2 = true;
              o2.set(t5, e5), o2.set(e5, t5);
              for (var d2 = a2; ++c2 < u2; ) {
                var p3 = t5[l3 = s2[c2]], g2 = e5[l3];
                if (n5) var _2 = a2 ? n5(g2, p3, l3, e5, t5, o2) : n5(p3, g2, l3, t5, e5, o2);
                if (!(void 0 === _2 ? p3 === g2 || i4(p3, g2, r5, n5, o2) : _2)) {
                  h2 = false;
                  break;
                }
                d2 || (d2 = "constructor" == l3);
              }
              if (h2 && !d2) {
                var v2 = t5.constructor, b3 = e5.constructor;
                v2 == b3 || !("constructor" in t5) || !("constructor" in e5) || "function" == typeof v2 && v2 instanceof v2 && "function" == typeof b3 && b3 instanceof b3 || (h2 = false);
              }
              return o2.delete(t5), o2.delete(e5), h2;
            }(t4, e4, r4, n4, i3, l2));
          }(t3, e3, r3, n3, wt, i2));
        }
        function Et(t3, e3, r3, n3, i2, o2) {
          var a2 = 1 & r3, s2 = t3.length, u2 = e3.length;
          if (s2 != u2 && !(a2 && u2 > s2)) return false;
          var c2 = o2.get(t3);
          if (c2 && o2.get(e3)) return c2 == e3;
          var l2 = -1, f2 = true, h2 = 2 & r3 ? new yt() : void 0;
          for (o2.set(t3, e3), o2.set(e3, t3); ++l2 < s2; ) {
            var d2 = t3[l2], p2 = e3[l2];
            if (n3) var g2 = a2 ? n3(p2, d2, l2, e3, t3, o2) : n3(d2, p2, l2, t3, e3, o2);
            if (void 0 !== g2) {
              if (g2) continue;
              f2 = false;
              break;
            }
            if (h2) {
              if (!R(e3, function(t4, e4) {
                if (a3 = e4, !h2.has(a3) && (d2 === t4 || i2(d2, t4, r3, n3, o2))) return h2.push(e4);
                var a3;
              })) {
                f2 = false;
                break;
              }
            } else if (d2 !== p2 && !i2(d2, p2, r3, n3, o2)) {
              f2 = false;
              break;
            }
          }
          return o2.delete(t3), o2.delete(e3), f2;
        }
        function St(t3) {
          return function(t4, e3, r3) {
            var n3 = e3(t4);
            return qt(t4) ? n3 : function(t5, e4) {
              for (var r4 = -1, n4 = e4.length, i2 = t5.length; ++r4 < n4; ) t5[i2 + r4] = e4[r4];
              return t5;
            }(n3, r3(t4));
          }(t3, Ht, jt);
        }
        function Mt(t3, e3) {
          var r3, n3, i2 = t3.__data__;
          return ("string" == (n3 = typeof (r3 = e3)) || "number" == n3 || "symbol" == n3 || "boolean" == n3 ? "__proto__" !== r3 : null === r3) ? i2["string" == typeof e3 ? "string" : "hash"] : i2.map;
        }
        function Ot(t3, e3) {
          var r3 = function(t4, e4) {
            return null == t4 ? void 0 : t4[e4];
          }(t3, e3);
          return function(t4) {
            return !(!Pt(t4) || function(t5) {
              return !!$ && $ in t5;
            }(t4)) && (Ft(t4) ? W : A).test(Tt(t4));
          }(r3) ? r3 : void 0;
        }
        _t.prototype.clear = function() {
          this.__data__ = ut ? ut(null) : {}, this.size = 0;
        }, _t.prototype.delete = function(t3) {
          var e3 = this.has(t3) && delete this.__data__[t3];
          return this.size -= e3 ? 1 : 0, e3;
        }, _t.prototype.get = function(t3) {
          var e3 = this.__data__;
          if (ut) {
            var r3 = e3[t3];
            return r3 === n2 ? void 0 : r3;
          }
          return G.call(e3, t3) ? e3[t3] : void 0;
        }, _t.prototype.has = function(t3) {
          var e3 = this.__data__;
          return ut ? void 0 !== e3[t3] : G.call(e3, t3);
        }, _t.prototype.set = function(t3, e3) {
          var r3 = this.__data__;
          return this.size += this.has(t3) ? 0 : 1, r3[t3] = ut && void 0 === e3 ? n2 : e3, this;
        }, vt.prototype.clear = function() {
          this.__data__ = [], this.size = 0;
        }, vt.prototype.delete = function(t3) {
          var e3 = this.__data__, r3 = At(e3, t3);
          return !(r3 < 0 || (r3 == e3.length - 1 ? e3.pop() : K.call(e3, r3, 1), --this.size, 0));
        }, vt.prototype.get = function(t3) {
          var e3 = this.__data__, r3 = At(e3, t3);
          return r3 < 0 ? void 0 : e3[r3][1];
        }, vt.prototype.has = function(t3) {
          return At(this.__data__, t3) > -1;
        }, vt.prototype.set = function(t3, e3) {
          var r3 = this.__data__, n3 = At(r3, t3);
          return n3 < 0 ? (++this.size, r3.push([t3, e3])) : r3[n3][1] = e3, this;
        }, bt.prototype.clear = function() {
          this.size = 0, this.__data__ = { hash: new _t(), map: new (it || vt)(), string: new _t() };
        }, bt.prototype.delete = function(t3) {
          var e3 = Mt(this, t3).delete(t3);
          return this.size -= e3 ? 1 : 0, e3;
        }, bt.prototype.get = function(t3) {
          return Mt(this, t3).get(t3);
        }, bt.prototype.has = function(t3) {
          return Mt(this, t3).has(t3);
        }, bt.prototype.set = function(t3, e3) {
          var r3 = Mt(this, t3), n3 = r3.size;
          return r3.set(t3, e3), this.size += r3.size == n3 ? 0 : 1, this;
        }, yt.prototype.add = yt.prototype.push = function(t3) {
          return this.__data__.set(t3, n2), this;
        }, yt.prototype.has = function(t3) {
          return this.__data__.has(t3);
        }, mt.prototype.clear = function() {
          this.__data__ = new vt(), this.size = 0;
        }, mt.prototype.delete = function(t3) {
          var e3 = this.__data__, r3 = e3.delete(t3);
          return this.size = e3.size, r3;
        }, mt.prototype.get = function(t3) {
          return this.__data__.get(t3);
        }, mt.prototype.has = function(t3) {
          return this.__data__.has(t3);
        }, mt.prototype.set = function(t3, e3) {
          var r3 = this.__data__;
          if (r3 instanceof vt) {
            var n3 = r3.__data__;
            if (!it || n3.length < 199) return n3.push([t3, e3]), this.size = ++r3.size, this;
            r3 = this.__data__ = new bt(n3);
          }
          return r3.set(t3, e3), this.size = r3.size, this;
        };
        var jt = tt ? function(t3) {
          return null == t3 ? [] : (t3 = Object(t3), function(e3, r3) {
            for (var n3 = -1, i2 = null == e3 ? 0 : e3.length, o2 = 0, a2 = []; ++n3 < i2; ) {
              var s2 = e3[n3];
              u2 = s2, Y.call(t3, u2) && (a2[o2++] = s2);
            }
            var u2;
            return a2;
          }(tt(t3)));
        } : function() {
          return [];
        }, Lt = xt;
        function kt(t3, e3) {
          return !!(e3 = null == e3 ? i : e3) && ("number" == typeof t3 || x.test(t3)) && t3 > -1 && t3 % 1 == 0 && t3 < e3;
        }
        function Tt(t3) {
          if (null != t3) {
            try {
              return U.call(t3);
            } catch (t4) {
            }
            try {
              return t3 + "";
            } catch (t4) {
            }
          }
          return "";
        }
        function Rt(t3, e3) {
          return t3 === e3 || t3 != t3 && e3 != e3;
        }
        (nt && Lt(new nt(new ArrayBuffer(1))) != m || it && Lt(new it()) != f || ot && Lt(ot.resolve()) != p || at && Lt(new at()) != _ || st && Lt(new st()) != b) && (Lt = function(t3) {
          var e3 = xt(t3), r3 = e3 == d ? t3.constructor : void 0, n3 = r3 ? Tt(r3) : "";
          if (n3) switch (n3) {
            case ct:
              return m;
            case lt:
              return f;
            case ft:
              return p;
            case ht:
              return _;
            case dt:
              return b;
          }
          return e3;
        });
        var Nt = Ct(/* @__PURE__ */ function() {
          return arguments;
        }()) ? Ct : function(t3) {
          return Bt(t3) && G.call(t3, "callee") && !Y.call(t3, "callee");
        }, qt = Array.isArray, Dt = et || function() {
          return false;
        };
        function Ft(t3) {
          if (!Pt(t3)) return false;
          var e3 = xt(t3);
          return e3 == l || "[object GeneratorFunction]" == e3 || "[object AsyncFunction]" == e3 || "[object Proxy]" == e3;
        }
        function It(t3) {
          return "number" == typeof t3 && t3 > -1 && t3 % 1 == 0 && t3 <= i;
        }
        function Pt(t3) {
          var e3 = typeof t3;
          return null != t3 && ("object" == e3 || "function" == e3);
        }
        function Bt(t3) {
          return null != t3 && "object" == typeof t3;
        }
        var zt = T ? /* @__PURE__ */ function(t3) {
          return function(e3) {
            return t3(e3);
          };
        }(T) : function(t3) {
          return Bt(t3) && It(t3.length) && !!C[xt(t3)];
        };
        function Ht(t3) {
          return null != (e3 = t3) && It(e3.length) && !Ft(e3) ? function(t4, e4) {
            var r3 = qt(t4), n3 = !r3 && Nt(t4), i2 = !r3 && !n3 && Dt(t4), o2 = !r3 && !n3 && !i2 && zt(t4), a2 = r3 || n3 || i2 || o2, s2 = a2 ? function(t5, e5) {
              for (var r4 = -1, n4 = Array(t5); ++r4 < t5; ) n4[r4] = e5(r4);
              return n4;
            }(t4.length, String) : [], u2 = s2.length;
            for (var c2 in t4) !e4 && !G.call(t4, c2) || a2 && ("length" == c2 || i2 && ("offset" == c2 || "parent" == c2) || o2 && ("buffer" == c2 || "byteLength" == c2 || "byteOffset" == c2) || kt(c2, u2)) || s2.push(c2);
            return s2;
          }(t3) : function(t4) {
            if (r3 = (e4 = t4) && e4.constructor, e4 !== ("function" == typeof r3 && r3.prototype || z)) return rt(t4);
            var e4, r3, n3 = [];
            for (var i2 in Object(t4)) G.call(t4, i2) && "constructor" != i2 && n3.push(i2);
            return n3;
          }(t3);
          var e3;
        }
        t2.exports = function(t3, e3) {
          return wt(t3, e3);
        };
      }, 210: function(t2, e2, r2) {
        "use strict";
        var n2 = this && this.__importDefault || function(t3) {
          return t3 && t3.__esModule ? t3 : { default: t3 };
        };
        Object.defineProperty(e2, "__esModule", { value: true });
        var i, o = n2(r2(465)), a = n2(r2(307));
        !function(t3) {
          t3.compose = function(t4, e3, r3) {
            void 0 === t4 && (t4 = {}), void 0 === e3 && (e3 = {}), "object" != typeof t4 && (t4 = {}), "object" != typeof e3 && (e3 = {});
            var n3 = o.default(e3);
            for (var i2 in r3 || (n3 = Object.keys(n3).reduce(function(t5, e4) {
              return null != n3[e4] && (t5[e4] = n3[e4]), t5;
            }, {})), t4) void 0 !== t4[i2] && void 0 === e3[i2] && (n3[i2] = t4[i2]);
            return Object.keys(n3).length > 0 ? n3 : void 0;
          }, t3.diff = function(t4, e3) {
            void 0 === t4 && (t4 = {}), void 0 === e3 && (e3 = {}), "object" != typeof t4 && (t4 = {}), "object" != typeof e3 && (e3 = {});
            var r3 = Object.keys(t4).concat(Object.keys(e3)).reduce(function(r4, n3) {
              return a.default(t4[n3], e3[n3]) || (r4[n3] = void 0 === e3[n3] ? null : e3[n3]), r4;
            }, {});
            return Object.keys(r3).length > 0 ? r3 : void 0;
          }, t3.invert = function(t4, e3) {
            void 0 === t4 && (t4 = {}), void 0 === e3 && (e3 = {}), t4 = t4 || {};
            var r3 = Object.keys(e3).reduce(function(r4, n3) {
              return e3[n3] !== t4[n3] && void 0 !== t4[n3] && (r4[n3] = e3[n3]), r4;
            }, {});
            return Object.keys(t4).reduce(function(r4, n3) {
              return t4[n3] !== e3[n3] && void 0 === e3[n3] && (r4[n3] = null), r4;
            }, r3);
          }, t3.transform = function(t4, e3, r3) {
            if (void 0 === r3 && (r3 = false), "object" != typeof t4) return e3;
            if ("object" == typeof e3) {
              if (!r3) return e3;
              var n3 = Object.keys(e3).reduce(function(r4, n4) {
                return void 0 === t4[n4] && (r4[n4] = e3[n4]), r4;
              }, {});
              return Object.keys(n3).length > 0 ? n3 : void 0;
            }
          };
        }(i || (i = {})), e2.default = i;
      }, 895: function(t2, e2, r2) {
        "use strict";
        var n2 = this && this.__importDefault || function(t3) {
          return t3 && t3.__esModule ? t3 : { default: t3 };
        }, i = n2(r2(529)), o = n2(r2(465)), a = n2(r2(307)), s = n2(r2(210)), u = n2(r2(430)), c = String.fromCharCode(0), l = function() {
          function t3(t4) {
            Array.isArray(t4) ? this.ops = t4 : null != t4 && Array.isArray(t4.ops) ? this.ops = t4.ops : this.ops = [];
          }
          return t3.prototype.insert = function(t4, e3) {
            var r3 = {};
            return "string" == typeof t4 && 0 === t4.length ? this : (r3.insert = t4, null != e3 && "object" == typeof e3 && Object.keys(e3).length > 0 && (r3.attributes = e3), this.push(r3));
          }, t3.prototype.delete = function(t4) {
            return t4 <= 0 ? this : this.push({ delete: t4 });
          }, t3.prototype.retain = function(t4, e3) {
            if (t4 <= 0) return this;
            var r3 = { retain: t4 };
            return null != e3 && "object" == typeof e3 && Object.keys(e3).length > 0 && (r3.attributes = e3), this.push(r3);
          }, t3.prototype.push = function(t4) {
            var e3 = this.ops.length, r3 = this.ops[e3 - 1];
            if (t4 = o.default(t4), "object" == typeof r3) {
              if ("number" == typeof t4.delete && "number" == typeof r3.delete) return this.ops[e3 - 1] = { delete: r3.delete + t4.delete }, this;
              if ("number" == typeof r3.delete && null != t4.insert && (e3 -= 1, "object" != typeof (r3 = this.ops[e3 - 1]))) return this.ops.unshift(t4), this;
              if (a.default(t4.attributes, r3.attributes)) {
                if ("string" == typeof t4.insert && "string" == typeof r3.insert) return this.ops[e3 - 1] = { insert: r3.insert + t4.insert }, "object" == typeof t4.attributes && (this.ops[e3 - 1].attributes = t4.attributes), this;
                if ("number" == typeof t4.retain && "number" == typeof r3.retain) return this.ops[e3 - 1] = { retain: r3.retain + t4.retain }, "object" == typeof t4.attributes && (this.ops[e3 - 1].attributes = t4.attributes), this;
              }
            }
            return e3 === this.ops.length ? this.ops.push(t4) : this.ops.splice(e3, 0, t4), this;
          }, t3.prototype.chop = function() {
            var t4 = this.ops[this.ops.length - 1];
            return t4 && t4.retain && !t4.attributes && this.ops.pop(), this;
          }, t3.prototype.filter = function(t4) {
            return this.ops.filter(t4);
          }, t3.prototype.forEach = function(t4) {
            this.ops.forEach(t4);
          }, t3.prototype.map = function(t4) {
            return this.ops.map(t4);
          }, t3.prototype.partition = function(t4) {
            var e3 = [], r3 = [];
            return this.forEach(function(n3) {
              (t4(n3) ? e3 : r3).push(n3);
            }), [e3, r3];
          }, t3.prototype.reduce = function(t4, e3) {
            return this.ops.reduce(t4, e3);
          }, t3.prototype.changeLength = function() {
            return this.reduce(function(t4, e3) {
              return e3.insert ? t4 + u.default.length(e3) : e3.delete ? t4 - e3.delete : t4;
            }, 0);
          }, t3.prototype.length = function() {
            return this.reduce(function(t4, e3) {
              return t4 + u.default.length(e3);
            }, 0);
          }, t3.prototype.slice = function(e3, r3) {
            void 0 === e3 && (e3 = 0), void 0 === r3 && (r3 = 1 / 0);
            for (var n3 = [], i2 = u.default.iterator(this.ops), o2 = 0; o2 < r3 && i2.hasNext(); ) {
              var a2 = void 0;
              o2 < e3 ? a2 = i2.next(e3 - o2) : (a2 = i2.next(r3 - o2), n3.push(a2)), o2 += u.default.length(a2);
            }
            return new t3(n3);
          }, t3.prototype.compose = function(e3) {
            var r3 = u.default.iterator(this.ops), n3 = u.default.iterator(e3.ops), i2 = [], o2 = n3.peek();
            if (null != o2 && "number" == typeof o2.retain && null == o2.attributes) {
              for (var c2 = o2.retain; "insert" === r3.peekType() && r3.peekLength() <= c2; ) c2 -= r3.peekLength(), i2.push(r3.next());
              o2.retain - c2 > 0 && n3.next(o2.retain - c2);
            }
            for (var l2 = new t3(i2); r3.hasNext() || n3.hasNext(); ) if ("insert" === n3.peekType()) l2.push(n3.next());
            else if ("delete" === r3.peekType()) l2.push(r3.next());
            else {
              var f = Math.min(r3.peekLength(), n3.peekLength()), h = r3.next(f), d = n3.next(f);
              if ("number" == typeof d.retain) {
                var p = {};
                "number" == typeof h.retain ? p.retain = f : p.insert = h.insert;
                var g = s.default.compose(h.attributes, d.attributes, "number" == typeof h.retain);
                if (g && (p.attributes = g), l2.push(p), !n3.hasNext() && a.default(l2.ops[l2.ops.length - 1], p)) {
                  var _ = new t3(r3.rest());
                  return l2.concat(_).chop();
                }
              } else "number" == typeof d.delete && "number" == typeof h.retain && l2.push(d);
            }
            return l2.chop();
          }, t3.prototype.concat = function(e3) {
            var r3 = new t3(this.ops.slice());
            return e3.ops.length > 0 && (r3.push(e3.ops[0]), r3.ops = r3.ops.concat(e3.ops.slice(1))), r3;
          }, t3.prototype.diff = function(e3, r3) {
            if (this.ops === e3.ops) return new t3();
            var n3 = [this, e3].map(function(t4) {
              return t4.map(function(r4) {
                if (null != r4.insert) return "string" == typeof r4.insert ? r4.insert : c;
                throw new Error("diff() called " + (t4 === e3 ? "on" : "with") + " non-document");
              }).join("");
            }), o2 = new t3(), l2 = i.default(n3[0], n3[1], r3), f = u.default.iterator(this.ops), h = u.default.iterator(e3.ops);
            return l2.forEach(function(t4) {
              for (var e4 = t4[1].length; e4 > 0; ) {
                var r4 = 0;
                switch (t4[0]) {
                  case i.default.INSERT:
                    r4 = Math.min(h.peekLength(), e4), o2.push(h.next(r4));
                    break;
                  case i.default.DELETE:
                    r4 = Math.min(e4, f.peekLength()), f.next(r4), o2.delete(r4);
                    break;
                  case i.default.EQUAL:
                    r4 = Math.min(f.peekLength(), h.peekLength(), e4);
                    var n4 = f.next(r4), u2 = h.next(r4);
                    a.default(n4.insert, u2.insert) ? o2.retain(r4, s.default.diff(n4.attributes, u2.attributes)) : o2.push(u2).delete(r4);
                }
                e4 -= r4;
              }
            }), o2.chop();
          }, t3.prototype.eachLine = function(e3, r3) {
            void 0 === r3 && (r3 = "\n");
            for (var n3 = u.default.iterator(this.ops), i2 = new t3(), o2 = 0; n3.hasNext(); ) {
              if ("insert" !== n3.peekType()) return;
              var a2 = n3.peek(), s2 = u.default.length(a2) - n3.peekLength(), c2 = "string" == typeof a2.insert ? a2.insert.indexOf(r3, s2) - s2 : -1;
              if (c2 < 0) i2.push(n3.next());
              else if (c2 > 0) i2.push(n3.next(c2));
              else {
                if (false === e3(i2, n3.next(1).attributes || {}, o2)) return;
                o2 += 1, i2 = new t3();
              }
            }
            i2.length() > 0 && e3(i2, {}, o2);
          }, t3.prototype.invert = function(e3) {
            var r3 = new t3();
            return this.reduce(function(t4, n3) {
              if (n3.insert) r3.delete(u.default.length(n3));
              else {
                if (n3.retain && null == n3.attributes) return r3.retain(n3.retain), t4 + n3.retain;
                if (n3.delete || n3.retain && n3.attributes) {
                  var i2 = n3.delete || n3.retain;
                  return e3.slice(t4, t4 + i2).forEach(function(t5) {
                    n3.delete ? r3.push(t5) : n3.retain && n3.attributes && r3.retain(u.default.length(t5), s.default.invert(n3.attributes, t5.attributes));
                  }), t4 + i2;
                }
              }
              return t4;
            }, 0), r3.chop();
          }, t3.prototype.transform = function(e3, r3) {
            if (void 0 === r3 && (r3 = false), r3 = !!r3, "number" == typeof e3) return this.transformPosition(e3, r3);
            for (var n3 = e3, i2 = u.default.iterator(this.ops), o2 = u.default.iterator(n3.ops), a2 = new t3(); i2.hasNext() || o2.hasNext(); ) if ("insert" !== i2.peekType() || !r3 && "insert" === o2.peekType()) if ("insert" === o2.peekType()) a2.push(o2.next());
            else {
              var c2 = Math.min(i2.peekLength(), o2.peekLength()), l2 = i2.next(c2), f = o2.next(c2);
              if (l2.delete) continue;
              f.delete ? a2.push(f) : a2.retain(c2, s.default.transform(l2.attributes, f.attributes, r3));
            }
            else a2.retain(u.default.length(i2.next()));
            return a2.chop();
          }, t3.prototype.transformPosition = function(t4, e3) {
            void 0 === e3 && (e3 = false), e3 = !!e3;
            for (var r3 = u.default.iterator(this.ops), n3 = 0; r3.hasNext() && n3 <= t4; ) {
              var i2 = r3.peekLength(), o2 = r3.peekType();
              r3.next(), "delete" !== o2 ? ("insert" === o2 && (n3 < t4 || !e3) && (t4 += i2), n3 += i2) : t4 -= Math.min(i2, t4 - n3);
            }
            return t4;
          }, t3.Op = u.default, t3.AttributeMap = s.default, t3;
        }();
        t2.exports = l;
      }, 977: function(t2, e2, r2) {
        "use strict";
        var n2 = this && this.__importDefault || function(t3) {
          return t3 && t3.__esModule ? t3 : { default: t3 };
        };
        Object.defineProperty(e2, "__esModule", { value: true });
        var i = n2(r2(430)), o = function() {
          function t3(t4) {
            this.ops = t4, this.index = 0, this.offset = 0;
          }
          return t3.prototype.hasNext = function() {
            return this.peekLength() < 1 / 0;
          }, t3.prototype.next = function(t4) {
            t4 || (t4 = 1 / 0);
            var e3 = this.ops[this.index];
            if (e3) {
              var r3 = this.offset, n3 = i.default.length(e3);
              if (t4 >= n3 - r3 ? (t4 = n3 - r3, this.index += 1, this.offset = 0) : this.offset += t4, "number" == typeof e3.delete) return { delete: t4 };
              var o2 = {};
              return e3.attributes && (o2.attributes = e3.attributes), "number" == typeof e3.retain ? o2.retain = t4 : "string" == typeof e3.insert ? o2.insert = e3.insert.substr(r3, t4) : o2.insert = e3.insert, o2;
            }
            return { retain: 1 / 0 };
          }, t3.prototype.peek = function() {
            return this.ops[this.index];
          }, t3.prototype.peekLength = function() {
            return this.ops[this.index] ? i.default.length(this.ops[this.index]) - this.offset : 1 / 0;
          }, t3.prototype.peekType = function() {
            return this.ops[this.index] ? "number" == typeof this.ops[this.index].delete ? "delete" : "number" == typeof this.ops[this.index].retain ? "retain" : "insert" : "retain";
          }, t3.prototype.rest = function() {
            if (this.hasNext()) {
              if (0 === this.offset) return this.ops.slice(this.index);
              var t4 = this.offset, e3 = this.index, r3 = this.next(), n3 = this.ops.slice(this.index);
              return this.offset = t4, this.index = e3, [r3].concat(n3);
            }
            return [];
          }, t3;
        }();
        e2.default = o;
      }, 430: function(t2, e2, r2) {
        "use strict";
        var n2 = this && this.__importDefault || function(t3) {
          return t3 && t3.__esModule ? t3 : { default: t3 };
        };
        Object.defineProperty(e2, "__esModule", { value: true });
        var i, o = n2(r2(977));
        !function(t3) {
          t3.iterator = function(t4) {
            return new o.default(t4);
          }, t3.length = function(t4) {
            return "number" == typeof t4.delete ? t4.delete : "number" == typeof t4.retain ? t4.retain : "string" == typeof t4.insert ? t4.insert.length : 1;
          };
        }(i || (i = {})), e2.default = i;
      }, 165: function(t2, e2, r2) {
        var n2, i;
        void 0 === (i = "function" == typeof (n2 = function() {
          var t3, e3 = {};
          function r3(t4, e4, r4) {
            var n4 = t4.getClientRects();
            if (2 === n4.length) {
              var i3 = t4.getBoundingClientRect();
              return n4[e4][r4] < i3[r4];
            }
            return false;
          }
          function n3(t4) {
            if (!t4) return t4;
            if (screen.deviceXDPI === screen.logicalXDPI) return t4;
            if ("length" in t4) return Array.prototype.map.call(t4, n3);
            var e4 = screen.deviceXDPI / screen.logicalXDPI;
            return { top: t4.top / e4, bottom: t4.bottom / e4, left: t4.left / e4, right: t4.right / e4, width: t4.width / e4, height: t4.height / e4 };
          }
          function i2(t4, e4) {
            var r4, n4 = 0, i3 = 1024;
            if (i3 >= e4.length) return Array.prototype.push.apply(t4, e4);
            for (; n4 < e4.length; ) r4 = Array.prototype.push.apply(t4, Array.prototype.slice.call(e4, n4, n4 + i3)), n4 += i3;
            return r4;
          }
          return e3.isBroken = function() {
            if (void 0 === t3) {
              var e4 = document.createElement("p"), n4 = document.createElement("span"), i3 = document.createTextNode("aa"), o = document.createTextNode("aa"), a = document.createElement("img");
              a.setAttribute("src", "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=");
              var s = document.createRange();
              if (t3 = {}, e4.appendChild(i3), e4.appendChild(n4), n4.appendChild(a), n4.appendChild(o), document.body.appendChild(e4), s.setStart(i3, 1), s.setEnd(n4, 0), t3.getClientRects = t3.getBoundingClientRect = s.getClientRects().length > 1, t3.getClientRects || (s.setEnd(o, 1), t3.getClientRects = t3.getBoundingClientRect = 2 === s.getClientRects().length), !t3.getBoundingClientRect) {
                s.setEnd(s.startContainer, s.startOffset);
                var u = s.getBoundingClientRect();
                t3.getBoundingClientRect = 0 === u.top && 0 === u.left;
              }
              if (document.body.removeChild(e4), !t3.getBoundingClientRect) {
                var c = document.createElement("p");
                c.style.width = "0px", c.style.fontSize = "20px", c.style.whiteSpace = "normal", c.style.wordBreak = "normal";
                var l = document.createTextNode("m mm");
                c.appendChild(l), document.body.appendChild(c), s.setStart(l, 1), s.setEnd(l, 2), r3(s, 1, "left") ? t3.getBoundingClientRect = true : (s.setStart(l, 1), s.setEnd(l, 3), r3(s, 0, "top") && (t3.getBoundingClientRect = true)), document.body.removeChild(c);
              }
              var f = window.ActiveXObject && new Function("/*@cc_on return @_jscript_version; @*/")();
              t3.ieZoom = !!f && f <= 10;
            }
            return t3;
          }, e3.getClientRects = function(t4) {
            var e4 = this.isBroken();
            if (e4.ieZoom) return n3(t4.getClientRects());
            if (!e4.getClientRects) return t4.getClientRects();
            var r4 = [], o = [], a = t4.endContainer, s = t4.endOffset, u = document.createRange();
            function c(t5) {
              for (var e5 = 0; t5 = t5.previousSibling; ) e5++;
              return e5;
            }
            for (; a !== t4.commonAncestorContainer; ) u.setStart(a, 0), u.setEnd(a, s), i2(o, u.getClientRects()), s = c(a), a = a.parentNode;
            return (u = t4.cloneRange()).setEnd(a, s), i2(r4, u.getClientRects()), i2(r4, o), r4;
          }, e3.getBoundingClientRect = function(t4) {
            var e4 = this.getClientRects(t4);
            if (0 === e4.length) return null;
            var r4, i3 = t4.getBoundingClientRect(), o = this.isBroken();
            if (o.ieZoom) return n3(i3);
            if (!o.getBoundingClientRect) return i3;
            if (0 === i3.width && 0 === i3.height) return e4[0];
            for (var a = 0, s = e4.length; a < s; a++) {
              var u = e4[a];
              r4 ? (r4.left = Math.min(r4.left, u.left), r4.top = Math.min(r4.top, u.top), r4.right = Math.max(r4.right, u.right), r4.bottom = Math.max(r4.bottom, u.bottom)) : r4 = { left: u.left, top: u.top, right: u.right, bottom: u.bottom };
            }
            return r4 && (r4.width = r4.right - r4.left, r4.height = r4.bottom - r4.top), r4;
          }, e3;
        }) ? n2.call(e2, r2, e2, t2) : n2) || (t2.exports = i);
      }, 33: (t2, e2, r2) => {
        "use strict";
        r2.r(e2), r2.d(e2, { default: () => C });
        var n2 = function() {
          if ("undefined" != typeof Map) return Map;
          function t3(t4, e3) {
            var r3 = -1;
            return t4.some(function(t5, n3) {
              return t5[0] === e3 && (r3 = n3, true);
            }), r3;
          }
          return function() {
            function e3() {
              this.__entries__ = [];
            }
            return Object.defineProperty(e3.prototype, "size", { get: function() {
              return this.__entries__.length;
            }, enumerable: true, configurable: true }), e3.prototype.get = function(e4) {
              var r3 = t3(this.__entries__, e4), n3 = this.__entries__[r3];
              return n3 && n3[1];
            }, e3.prototype.set = function(e4, r3) {
              var n3 = t3(this.__entries__, e4);
              ~n3 ? this.__entries__[n3][1] = r3 : this.__entries__.push([e4, r3]);
            }, e3.prototype.delete = function(e4) {
              var r3 = this.__entries__, n3 = t3(r3, e4);
              ~n3 && r3.splice(n3, 1);
            }, e3.prototype.has = function(e4) {
              return !!~t3(this.__entries__, e4);
            }, e3.prototype.clear = function() {
              this.__entries__.splice(0);
            }, e3.prototype.forEach = function(t4, e4) {
              void 0 === e4 && (e4 = null);
              for (var r3 = 0, n3 = this.__entries__; r3 < n3.length; r3++) {
                var i2 = n3[r3];
                t4.call(e4, i2[1], i2[0]);
              }
            }, e3;
          }();
        }(), i = "undefined" != typeof window && "undefined" != typeof document && window.document === document, o = void 0 !== r2.g && r2.g.Math === Math ? r2.g : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(), a = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(o) : function(t3) {
          return setTimeout(function() {
            return t3(Date.now());
          }, 1e3 / 60);
        }, s = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], u = "undefined" != typeof MutationObserver, c = function() {
          function t3() {
            this.connected_ = false, this.mutationEventsAdded_ = false, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = /* @__PURE__ */ function(t4, e3) {
              var r3 = false, n3 = false, i2 = 0;
              function o2() {
                r3 && (r3 = false, t4()), n3 && u2();
              }
              function s2() {
                a(o2);
              }
              function u2() {
                var t5 = Date.now();
                if (r3) {
                  if (t5 - i2 < 2) return;
                  n3 = true;
                } else r3 = true, n3 = false, setTimeout(s2, 20);
                i2 = t5;
              }
              return u2;
            }(this.refresh.bind(this));
          }
          return t3.prototype.addObserver = function(t4) {
            ~this.observers_.indexOf(t4) || this.observers_.push(t4), this.connected_ || this.connect_();
          }, t3.prototype.removeObserver = function(t4) {
            var e3 = this.observers_, r3 = e3.indexOf(t4);
            ~r3 && e3.splice(r3, 1), !e3.length && this.connected_ && this.disconnect_();
          }, t3.prototype.refresh = function() {
            this.updateObservers_() && this.refresh();
          }, t3.prototype.updateObservers_ = function() {
            var t4 = this.observers_.filter(function(t5) {
              return t5.gatherActive(), t5.hasActive();
            });
            return t4.forEach(function(t5) {
              return t5.broadcastActive();
            }), t4.length > 0;
          }, t3.prototype.connect_ = function() {
            i && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), u ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, { attributes: true, childList: true, characterData: true, subtree: true })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = true), this.connected_ = true);
          }, t3.prototype.disconnect_ = function() {
            i && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = false, this.connected_ = false);
          }, t3.prototype.onTransitionEnd_ = function(t4) {
            var e3 = t4.propertyName, r3 = void 0 === e3 ? "" : e3;
            s.some(function(t5) {
              return !!~r3.indexOf(t5);
            }) && this.refresh();
          }, t3.getInstance = function() {
            return this.instance_ || (this.instance_ = new t3()), this.instance_;
          }, t3.instance_ = null, t3;
        }(), l = function(t3, e3) {
          for (var r3 = 0, n3 = Object.keys(e3); r3 < n3.length; r3++) {
            var i2 = n3[r3];
            Object.defineProperty(t3, i2, { value: e3[i2], enumerable: false, writable: false, configurable: true });
          }
          return t3;
        }, f = function(t3) {
          return t3 && t3.ownerDocument && t3.ownerDocument.defaultView || o;
        }, h = v(0, 0, 0, 0);
        function d(t3) {
          return parseFloat(t3) || 0;
        }
        function p(t3) {
          for (var e3 = [], r3 = 1; r3 < arguments.length; r3++) e3[r3 - 1] = arguments[r3];
          return e3.reduce(function(e4, r4) {
            return e4 + d(t3["border-" + r4 + "-width"]);
          }, 0);
        }
        var g = "undefined" != typeof SVGGraphicsElement ? function(t3) {
          return t3 instanceof f(t3).SVGGraphicsElement;
        } : function(t3) {
          return t3 instanceof f(t3).SVGElement && "function" == typeof t3.getBBox;
        };
        function _(t3) {
          return i ? g(t3) ? function(t4) {
            var e3 = t4.getBBox();
            return v(0, 0, e3.width, e3.height);
          }(t3) : function(t4) {
            var e3 = t4.clientWidth, r3 = t4.clientHeight;
            if (!e3 && !r3) return h;
            var n3 = f(t4).getComputedStyle(t4), i2 = function(t5) {
              for (var e4 = {}, r4 = 0, n4 = ["top", "right", "bottom", "left"]; r4 < n4.length; r4++) {
                var i3 = n4[r4], o3 = t5["padding-" + i3];
                e4[i3] = d(o3);
              }
              return e4;
            }(n3), o2 = i2.left + i2.right, a2 = i2.top + i2.bottom, s2 = d(n3.width), u2 = d(n3.height);
            if ("border-box" === n3.boxSizing && (Math.round(s2 + o2) !== e3 && (s2 -= p(n3, "left", "right") + o2), Math.round(u2 + a2) !== r3 && (u2 -= p(n3, "top", "bottom") + a2)), !function(t5) {
              return t5 === f(t5).document.documentElement;
            }(t4)) {
              var c2 = Math.round(s2 + o2) - e3, l2 = Math.round(u2 + a2) - r3;
              1 !== Math.abs(c2) && (s2 -= c2), 1 !== Math.abs(l2) && (u2 -= l2);
            }
            return v(i2.left, i2.top, s2, u2);
          }(t3) : h;
        }
        function v(t3, e3, r3, n3) {
          return { x: t3, y: e3, width: r3, height: n3 };
        }
        var b = function() {
          function t3(t4) {
            this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = v(0, 0, 0, 0), this.target = t4;
          }
          return t3.prototype.isActive = function() {
            var t4 = _(this.target);
            return this.contentRect_ = t4, t4.width !== this.broadcastWidth || t4.height !== this.broadcastHeight;
          }, t3.prototype.broadcastRect = function() {
            var t4 = this.contentRect_;
            return this.broadcastWidth = t4.width, this.broadcastHeight = t4.height, t4;
          }, t3;
        }(), y = function(t3, e3) {
          var r3, n3, i2, o2, a2, s2, u2, c2 = (n3 = (r3 = e3).x, i2 = r3.y, o2 = r3.width, a2 = r3.height, s2 = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, u2 = Object.create(s2.prototype), l(u2, { x: n3, y: i2, width: o2, height: a2, top: i2, right: n3 + o2, bottom: a2 + i2, left: n3 }), u2);
          l(this, { target: t3, contentRect: c2 });
        }, m = function() {
          function t3(t4, e3, r3) {
            if (this.activeObservations_ = [], this.observations_ = new n2(), "function" != typeof t4) throw new TypeError("The callback provided as parameter 1 is not a function.");
            this.callback_ = t4, this.controller_ = e3, this.callbackCtx_ = r3;
          }
          return t3.prototype.observe = function(t4) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
              if (!(t4 instanceof f(t4).Element)) throw new TypeError('parameter 1 is not of type "Element".');
              var e3 = this.observations_;
              e3.has(t4) || (e3.set(t4, new b(t4)), this.controller_.addObserver(this), this.controller_.refresh());
            }
          }, t3.prototype.unobserve = function(t4) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
              if (!(t4 instanceof f(t4).Element)) throw new TypeError('parameter 1 is not of type "Element".');
              var e3 = this.observations_;
              e3.has(t4) && (e3.delete(t4), e3.size || this.controller_.removeObserver(this));
            }
          }, t3.prototype.disconnect = function() {
            this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
          }, t3.prototype.gatherActive = function() {
            var t4 = this;
            this.clearActive(), this.observations_.forEach(function(e3) {
              e3.isActive() && t4.activeObservations_.push(e3);
            });
          }, t3.prototype.broadcastActive = function() {
            if (this.hasActive()) {
              var t4 = this.callbackCtx_, e3 = this.activeObservations_.map(function(t5) {
                return new y(t5.target, t5.broadcastRect());
              });
              this.callback_.call(t4, e3, t4), this.clearActive();
            }
          }, t3.prototype.clearActive = function() {
            this.activeObservations_.splice(0);
          }, t3.prototype.hasActive = function() {
            return this.activeObservations_.length > 0;
          }, t3;
        }(), A = "undefined" != typeof WeakMap ? /* @__PURE__ */ new WeakMap() : new n2(), x = function t3(e3) {
          if (!(this instanceof t3)) throw new TypeError("Cannot call a class as a function.");
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          var r3 = c.getInstance(), n3 = new m(e3, r3, this);
          A.set(this, n3);
        };
        ["observe", "unobserve", "disconnect"].forEach(function(t3) {
          x.prototype[t3] = function() {
            var e3;
            return (e3 = A.get(this))[t3].apply(e3, arguments);
          };
        });
        const C = void 0 !== o.ResizeObserver ? o.ResizeObserver : x;
      }, 413: (t2, e2, r2) => {
        "use strict";
        r2.r(e2), r2.d(e2, { default: () => v });
        var n2 = r2(379), i = r2.n(n2), o = r2(795), a = r2.n(o), s = r2(569), u = r2.n(s), c = r2(565), l = r2.n(c), f = r2(216), h = r2.n(f), d = r2(589), p = r2.n(d), g = r2(582), _ = {};
        _.styleTagTransform = p(), _.setAttributes = l(), _.insert = u().bind(null, "head"), _.domAPI = a(), _.insertStyleElement = h(), i()(g.Z, _);
        const v = g.Z && g.Z.locals ? g.Z.locals : void 0;
      }, 379: (t2) => {
        "use strict";
        var e2 = [];
        function r2(t3) {
          for (var r3 = -1, n3 = 0; n3 < e2.length; n3++) if (e2[n3].identifier === t3) {
            r3 = n3;
            break;
          }
          return r3;
        }
        function n2(t3, n3) {
          for (var o = {}, a = [], s = 0; s < t3.length; s++) {
            var u = t3[s], c = n3.base ? u[0] + n3.base : u[0], l = o[c] || 0, f = "".concat(c, " ").concat(l);
            o[c] = l + 1;
            var h = r2(f), d = { css: u[1], media: u[2], sourceMap: u[3], supports: u[4], layer: u[5] };
            if (-1 !== h) e2[h].references++, e2[h].updater(d);
            else {
              var p = i(d, n3);
              n3.byIndex = s, e2.splice(s, 0, { identifier: f, updater: p, references: 1 });
            }
            a.push(f);
          }
          return a;
        }
        function i(t3, e3) {
          var r3 = e3.domAPI(e3);
          return r3.update(t3), function(e4) {
            if (e4) {
              if (e4.css === t3.css && e4.media === t3.media && e4.sourceMap === t3.sourceMap && e4.supports === t3.supports && e4.layer === t3.layer) return;
              r3.update(t3 = e4);
            } else r3.remove();
          };
        }
        t2.exports = function(t3, i2) {
          var o = n2(t3 = t3 || [], i2 = i2 || {});
          return function(t4) {
            t4 = t4 || [];
            for (var a = 0; a < o.length; a++) {
              var s = r2(o[a]);
              e2[s].references--;
            }
            for (var u = n2(t4, i2), c = 0; c < o.length; c++) {
              var l = r2(o[c]);
              0 === e2[l].references && (e2[l].updater(), e2.splice(l, 1));
            }
            o = u;
          };
        };
      }, 569: (t2) => {
        "use strict";
        var e2 = {};
        t2.exports = function(t3, r2) {
          var n2 = function(t4) {
            if (void 0 === e2[t4]) {
              var r3 = document.querySelector(t4);
              if (window.HTMLIFrameElement && r3 instanceof window.HTMLIFrameElement) try {
                r3 = r3.contentDocument.head;
              } catch (t5) {
                r3 = null;
              }
              e2[t4] = r3;
            }
            return e2[t4];
          }(t3);
          if (!n2) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          n2.appendChild(r2);
        };
      }, 216: (t2) => {
        "use strict";
        t2.exports = function(t3) {
          var e2 = document.createElement("style");
          return t3.setAttributes(e2, t3.attributes), t3.insert(e2, t3.options), e2;
        };
      }, 565: (t2, e2, r2) => {
        "use strict";
        t2.exports = function(t3) {
          var e3 = r2.nc;
          e3 && t3.setAttribute("nonce", e3);
        };
      }, 795: (t2) => {
        "use strict";
        t2.exports = function(t3) {
          var e2 = t3.insertStyleElement(t3);
          return { update: function(r2) {
            !function(t4, e3, r3) {
              var n2 = "";
              r3.supports && (n2 += "@supports (".concat(r3.supports, ") {")), r3.media && (n2 += "@media ".concat(r3.media, " {"));
              var i = void 0 !== r3.layer;
              i && (n2 += "@layer".concat(r3.layer.length > 0 ? " ".concat(r3.layer) : "", " {")), n2 += r3.css, i && (n2 += "}"), r3.media && (n2 += "}"), r3.supports && (n2 += "}");
              var o = r3.sourceMap;
              o && "undefined" != typeof btoa && (n2 += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), e3.styleTagTransform(n2, t4, e3.options);
            }(e2, t3, r2);
          }, remove: function() {
            !function(t4) {
              if (null === t4.parentNode) return false;
              t4.parentNode.removeChild(t4);
            }(e2);
          } };
        };
      }, 589: (t2) => {
        "use strict";
        t2.exports = function(t3, e2) {
          if (e2.styleSheet) e2.styleSheet.cssText = t3;
          else {
            for (; e2.firstChild; ) e2.removeChild(e2.firstChild);
            e2.appendChild(document.createTextNode(t3));
          }
        };
      }, 607: function(t2, e2, r2) {
        "use strict";
        var n2 = this && this.__importDefault || function(t3) {
          return t3 && t3.__esModule ? t3 : { default: t3 };
        };
        Object.defineProperty(e2, "__esModule", { value: true }), e2.Cursor = e2.default = void 0;
        var i = n2(r2(678));
        e2.default = i.default;
        var o = n2(r2(353));
        e2.Cursor = o.default, r2(413);
      }, 353: (t2, e2, r2) => {
        "use strict";
        Object.defineProperty(e2, "__esModule", { value: true });
        var n2 = r2(207), i = function() {
          function t3(t4, e3, r3) {
            this.id = t4, this.name = e3, this.color = r3, this.toggleNearCursor = this.toggleNearCursor.bind(this), this._toggleOpenedCursor = this._toggleOpenedCursor.bind(this), this._setHoverState = this._setHoverState.bind(this);
          }
          return t3.prototype.build = function(e3) {
            var r3 = document.createElement(t3.CONTAINER_ELEMENT_TAG);
            r3.classList.add(t3.CURSOR_CLASS), r3.id = "ql-cursor-".concat(this.id), r3.innerHTML = e3.template;
            var n3 = r3.getElementsByClassName(t3.SELECTION_CLASS)[0], i2 = r3.getElementsByClassName(t3.CARET_CONTAINER_CLASS)[0], o = i2.getElementsByClassName(t3.CARET_CLASS)[0], a = r3.getElementsByClassName(t3.FLAG_CLASS)[0];
            return a.style.backgroundColor = this.color, o.style.backgroundColor = this.color, r3.getElementsByClassName(t3.NAME_CLASS)[0].textContent = this.name, this._hideDelay = "".concat(e3.hideDelayMs, "ms"), this._hideSpeedMs = e3.hideSpeedMs, this._positionFlag = e3.positionFlag, a.style.transitionDelay = this._hideDelay, a.style.transitionDuration = "".concat(this._hideSpeedMs, "ms"), this._el = r3, this._selectionEl = n3, this._caretEl = i2, this._flagEl = a, i2.addEventListener("mouseover", this._setHoverState, { passive: true }), this._el;
          }, t3.prototype.show = function() {
            this._el.classList.remove(t3.HIDDEN_CLASS);
          }, t3.prototype.hide = function() {
            this._el.classList.add(t3.HIDDEN_CLASS);
          }, t3.prototype.remove = function() {
            this._el.parentNode.removeChild(this._el);
          }, t3.prototype.toggleNearCursor = function(e3, r3) {
            var n3 = this._getCoordinates(), i2 = n3.left, o = n3.right, a = n3.top, s = n3.bottom, u = e3 >= i2 && e3 <= o && r3 >= a && r3 <= s;
            return this._caretEl.classList.toggle(t3.CONTAINER_HOVER_CLASS, u), u;
          }, t3.prototype.toggleFlag = function(e3) {
            var r3 = this;
            this._caretEl.classList.toggle(t3.CONTAINER_HOVER_CLASS, e3) || (this._flagEl.classList.add(t3.NO_DELAY_CLASS), setTimeout(function() {
              return r3._flagEl.classList.remove(t3.NO_DELAY_CLASS);
            }, this._hideSpeedMs));
          }, t3.prototype.updateCaret = function(t4, e3) {
            this._caretEl.style.top = "".concat(t4.top, "px"), this._caretEl.style.left = "".concat(t4.left, "px"), this._caretEl.style.height = "".concat(t4.height, "px"), this._positionFlag ? this._positionFlag(this._flagEl, t4, e3) : this._updateCaretFlag(t4, e3);
          }, t3.prototype.updateSelection = function(t4, e3) {
            var r3 = this;
            this._clearSelection(), t4 = t4 || [], t4 = Array.from(t4), t4 = this._sanitize(t4), (t4 = this._sortByDomPosition(t4)).forEach(function(t5) {
              return r3._addSelection(t5, e3);
            });
          }, t3.prototype._setHoverState = function() {
            document.addEventListener("mousemove", this._toggleOpenedCursor, { passive: true });
          }, t3.prototype._toggleOpenedCursor = function(e3) {
            var r3 = this.toggleNearCursor(e3.clientX, e3.clientY);
            this._caretEl.classList.toggle(t3.CONTAINER_NO_POINTER_CLASS, r3), r3 || document.removeEventListener("mousemove", this._toggleOpenedCursor);
          }, t3.prototype._getCoordinates = function() {
            return this._caretEl.getBoundingClientRect();
          }, t3.prototype._updateCaretFlag = function(e3, r3) {
            this._flagEl.style.width = "";
            var n3 = this._flagEl.getBoundingClientRect();
            this._flagEl.classList.remove(t3.FLAG_FLIPPED_CLASS), e3.left > r3.width - n3.width && this._flagEl.classList.add(t3.FLAG_FLIPPED_CLASS), this._flagEl.style.left = "".concat(e3.left, "px"), this._flagEl.style.top = "".concat(e3.top, "px"), this._flagEl.style.width = "".concat(Math.ceil(n3.width), "px");
          }, t3.prototype._clearSelection = function() {
            this._selectionEl.innerHTML = "";
          }, t3.prototype._addSelection = function(t4, e3) {
            var r3 = this._selectionBlock(t4, e3);
            this._selectionEl.appendChild(r3);
          }, t3.prototype._selectionBlock = function(e3, r3) {
            var i2 = document.createElement(t3.SELECTION_ELEMENT_TAG);
            return i2.classList.add(t3.SELECTION_BLOCK_CLASS), i2.style.top = "".concat(e3.top - r3.top, "px"), i2.style.left = "".concat(e3.left - r3.left, "px"), i2.style.width = "".concat(e3.width, "px"), i2.style.height = "".concat(e3.height, "px"), i2.style.backgroundColor = n2(this.color).setAlpha(0.3).toString(), i2;
          }, t3.prototype._sortByDomPosition = function(t4) {
            return t4.sort(function(t5, e3) {
              return t5.top === e3.top ? t5.left - e3.left : t5.top - e3.top;
            });
          }, t3.prototype._sanitize = function(t4) {
            var e3 = this, r3 = /* @__PURE__ */ new Set();
            return t4.filter(function(t5) {
              if (!t5.width || !t5.height) return false;
              var n3 = e3._serialize(t5);
              return !r3.has(n3) && (r3.add(n3), true);
            });
          }, t3.prototype._serialize = function(t4) {
            return ["top:".concat(t4.top), "right:".concat(t4.right), "bottom:".concat(t4.bottom), "left:".concat(t4.left)].join(";");
          }, t3.CONTAINER_ELEMENT_TAG = "SPAN", t3.SELECTION_ELEMENT_TAG = "SPAN", t3.CURSOR_CLASS = "ql-cursor", t3.SELECTION_CLASS = "ql-cursor-selections", t3.SELECTION_BLOCK_CLASS = "ql-cursor-selection-block", t3.CARET_CLASS = "ql-cursor-caret", t3.CARET_CONTAINER_CLASS = "ql-cursor-caret-container", t3.CONTAINER_HOVER_CLASS = "hover", t3.CONTAINER_NO_POINTER_CLASS = "no-pointer", t3.FLAG_CLASS = "ql-cursor-flag", t3.FLAG_FLIPPED_CLASS = "flag-flipped", t3.NAME_CLASS = "ql-cursor-name", t3.HIDDEN_CLASS = "hidden", t3.NO_DELAY_CLASS = "no-delay", t3;
        }();
        e2.default = i;
      }, 678: function(t2, e2, r2) {
        "use strict";
        var n2 = this && this.__createBinding || (Object.create ? function(t3, e3, r3, n3) {
          void 0 === n3 && (n3 = r3);
          var i2 = Object.getOwnPropertyDescriptor(e3, r3);
          i2 && !("get" in i2 ? !e3.__esModule : i2.writable || i2.configurable) || (i2 = { enumerable: true, get: function() {
            return e3[r3];
          } }), Object.defineProperty(t3, n3, i2);
        } : function(t3, e3, r3, n3) {
          void 0 === n3 && (n3 = r3), t3[n3] = e3[r3];
        }), i = this && this.__setModuleDefault || (Object.create ? function(t3, e3) {
          Object.defineProperty(t3, "default", { enumerable: true, value: e3 });
        } : function(t3, e3) {
          t3.default = e3;
        }), o = this && this.__importStar || function(t3) {
          if (t3 && t3.__esModule) return t3;
          var e3 = {};
          if (null != t3) for (var r3 in t3) "default" !== r3 && Object.prototype.hasOwnProperty.call(t3, r3) && n2(e3, t3, r3);
          return i(e3, t3), e3;
        }, a = this && this.__importDefault || function(t3) {
          return t3 && t3.__esModule ? t3 : { default: t3 };
        };
        Object.defineProperty(e2, "__esModule", { value: true });
        var s = a(r2(353)), u = o(r2(165)), c = a(r2(338)), l = a(r2(33)), f = r2(895), h = function() {
          function t3(t4, e3) {
            void 0 === e3 && (e3 = {}), this._cursors = {}, this._isObserving = false, this._handleCursorTouch = this._handleCursorTouch.bind(this), this.quill = t4, this.options = this._setDefaults(e3), this._container = this.quill.addContainer(this.options.containerClass), this._boundsContainer = this.options.boundsContainer || this.quill.container, this._currentSelection = this.quill.getSelection(), this._registerSelectionChangeListeners(), this._registerTextChangeListener(), this._registerDomListeners();
          }
          return t3.prototype.createCursor = function(t4, e3, r3) {
            var n3 = this._cursors[t4];
            if (!n3) {
              n3 = new s.default(t4, e3, r3), this._cursors[t4] = n3;
              var i2 = n3.build(this.options);
              this._container.appendChild(i2);
            }
            return n3;
          }, t3.prototype.moveCursor = function(t4, e3) {
            var r3 = this._cursors[t4];
            r3 && (r3.range = e3, this._updateCursor(r3));
          }, t3.prototype.removeCursor = function(t4) {
            var e3 = this._cursors[t4];
            e3 && (e3.remove(), delete this._cursors[t4]);
          }, t3.prototype.update = function() {
            var t4 = this;
            this.cursors().forEach(function(e3) {
              return t4._updateCursor(e3);
            });
          }, t3.prototype.clearCursors = function() {
            var t4 = this;
            this.cursors().forEach(function(e3) {
              return t4.removeCursor(e3.id);
            });
          }, t3.prototype.toggleFlag = function(t4, e3) {
            var r3 = this._cursors[t4];
            r3 && r3.toggleFlag(e3);
          }, t3.prototype.cursors = function() {
            var t4 = this;
            return Object.keys(this._cursors).map(function(e3) {
              return t4._cursors[e3];
            });
          }, t3.prototype._registerSelectionChangeListeners = function() {
            var t4 = this;
            this.quill.on(this.quill.constructor.events.SELECTION_CHANGE, function(e3) {
              t4._currentSelection = e3;
            });
          }, t3.prototype._registerTextChangeListener = function() {
            var t4 = this;
            this.quill.on(this.quill.constructor.events.TEXT_CHANGE, function(e3) {
              return t4._handleTextChange(e3);
            });
          }, t3.prototype._registerDomListeners = function() {
            var t4 = this, e3 = this.quill.container.getElementsByClassName("ql-editor")[0];
            e3.addEventListener("scroll", function() {
              return t4.update();
            }, { passive: true }), e3.addEventListener("touchstart", this._handleCursorTouch, { passive: true });
          }, t3.prototype._handleCursorTouch = function(t4) {
            var e3 = this;
            this.cursors().forEach(function(r3) {
              r3.toggleNearCursor(t4.pageX, t4.pageY), setTimeout(function() {
                return r3.toggleFlag(false);
              }, e3.options.hideDelayMs);
            });
          }, t3.prototype._registerResizeObserver = function() {
            var t4 = this;
            if (!this._isObserving) {
              var e3 = this.quill.container.getElementsByClassName("ql-editor")[0], r3 = new l.default(function(e4) {
                if (!e4[0].target.isConnected) return r3.disconnect(), void (t4._isObserving = false);
                t4.update();
              });
              r3.observe(e3), this._isObserving = true;
            }
          }, t3.prototype._updateCursor = function(t4) {
            if (this._registerResizeObserver(), !t4.range) return t4.hide();
            var e3 = this._indexWithinQuillBounds(t4.range.index), r3 = this._indexWithinQuillBounds(t4.range.index + t4.range.length), n3 = this.quill.getLeaf(e3), i2 = this.quill.getLeaf(r3);
            if (!this._leafIsValid(n3) || !this._leafIsValid(i2)) return t4.hide();
            t4.show();
            var o2 = this._boundsContainer.getBoundingClientRect(), a2 = this.quill.getBounds(r3);
            t4.updateCaret(a2, o2);
            var s2 = this._lineRanges(t4, n3, i2).reduce(function(t5, e4) {
              return t5.concat(Array.from(u.getClientRects(e4)));
            }, []);
            t4.updateSelection(s2, o2);
          }, t3.prototype._indexWithinQuillBounds = function(t4) {
            var e3 = this.quill.getLength(), r3 = e3 ? e3 - 1 : 0;
            return t4 = Math.max(t4, 0), Math.min(t4, r3);
          }, t3.prototype._leafIsValid = function(t4) {
            return t4 && t4[0] && t4[0].domNode && t4[1] >= 0;
          }, t3.prototype._handleTextChange = function(t4) {
            var e3 = this;
            window.setTimeout(function() {
              e3.options.transformOnTextChange && e3._transformCursors(t4), e3.options.selectionChangeSource && (e3._emitSelection(), e3.update());
            });
          }, t3.prototype._emitSelection = function() {
            this.quill.emitter.emit(this.quill.constructor.events.SELECTION_CHANGE, this.quill.getSelection(), this._currentSelection, this.options.selectionChangeSource);
          }, t3.prototype._setDefaults = function(e3) {
            return (e3 = Object.assign({}, e3)).template || (e3.template = t3.DEFAULTS.template), e3.containerClass || (e3.containerClass = t3.DEFAULTS.containerClass), null !== e3.selectionChangeSource && (e3.selectionChangeSource || (e3.selectionChangeSource = t3.DEFAULTS.selectionChangeSource)), e3.hideDelayMs = Number.isInteger(e3.hideDelayMs) ? e3.hideDelayMs : t3.DEFAULTS.hideDelayMs, e3.hideSpeedMs = Number.isInteger(e3.hideSpeedMs) ? e3.hideSpeedMs : t3.DEFAULTS.hideSpeedMs, e3.transformOnTextChange = !!e3.transformOnTextChange, e3;
          }, t3.prototype._lineRanges = function(t4, e3, r3) {
            var n3 = this.quill.getLines(t4.range);
            return n3.reduce(function(t5, i2, o2) {
              if (!i2.children) {
                var a2 = document.createRange();
                return a2.selectNode(i2.domNode), t5.concat(a2);
              }
              var s2 = 0 === o2 ? e3 : i2.path(0).pop(), u2 = s2[0], c2 = s2[1], l2 = o2 === n3.length - 1 ? r3 : i2.path(i2.length() - 1).pop(), f2 = l2[0], h2 = l2[1], d = document.createRange();
              return u2.domNode.nodeType === Node.TEXT_NODE ? d.setStart(u2.domNode, c2) : d.setStartBefore(u2.domNode), f2.domNode.nodeType === Node.TEXT_NODE ? d.setEnd(f2.domNode, h2) : d.setEndAfter(f2.domNode), t5.concat(d);
            }, []);
          }, t3.prototype._transformCursors = function(t4) {
            var e3 = this;
            t4 = new f(t4), this.cursors().filter(function(t5) {
              return t5.range;
            }).forEach(function(r3) {
              r3.range.index = t4.transformPosition(r3.range.index), e3._updateCursor(r3);
            });
          }, t3.DEFAULTS = { template: c.default, containerClass: "ql-cursors", selectionChangeSource: "api", hideDelayMs: 3e3, hideSpeedMs: 400 }, t3;
        }();
        e2.default = h;
      }, 338: function(t2, e2, r2) {
        "use strict";
        var n2 = this && this.__importDefault || function(t3) {
          return t3 && t3.__esModule ? t3 : { default: t3 };
        };
        Object.defineProperty(e2, "__esModule", { value: true });
        var i = n2(r2(353)), o = '\n  <span class="'.concat(i.default.SELECTION_CLASS, '"></span>\n  <span class="').concat(i.default.CARET_CONTAINER_CLASS, '">\n    <span class="').concat(i.default.CARET_CLASS, '"></span>\n  </span>\n  <div class="').concat(i.default.FLAG_CLASS, '">\n    <small class="').concat(i.default.NAME_CLASS, '"></small>\n  </div>\n');
        e2.default = o;
      }, 207: function(t2) {
        t2.exports = function() {
          "use strict";
          const t3 = /^\s+/, e2 = /\s+$/;
          function r2(n3, i2) {
            if (i2 = i2 || {}, (n3 = n3 || "") instanceof r2) return n3;
            if (!(this instanceof r2)) return new r2(n3, i2);
            var o2 = function(r3) {
              var n4 = { r: 0, g: 0, b: 0 }, i3 = 1, o3 = null, a2 = null, s2 = null, u2 = false, c2 = false;
              return "string" == typeof r3 && (r3 = function(r4) {
                r4 = r4.replace(t3, "").replace(e2, "").toLowerCase();
                var n5, i4 = false;
                if (y[r4]) r4 = y[r4], i4 = true;
                else if ("transparent" == r4) return { r: 0, g: 0, b: 0, a: 0, format: "name" };
                return (n5 = T.rgb.exec(r4)) ? { r: n5[1], g: n5[2], b: n5[3] } : (n5 = T.rgba.exec(r4)) ? { r: n5[1], g: n5[2], b: n5[3], a: n5[4] } : (n5 = T.hsl.exec(r4)) ? { h: n5[1], s: n5[2], l: n5[3] } : (n5 = T.hsla.exec(r4)) ? { h: n5[1], s: n5[2], l: n5[3], a: n5[4] } : (n5 = T.hsv.exec(r4)) ? { h: n5[1], s: n5[2], v: n5[3] } : (n5 = T.hsva.exec(r4)) ? { h: n5[1], s: n5[2], v: n5[3], a: n5[4] } : (n5 = T.hex8.exec(r4)) ? { r: w(n5[1]), g: w(n5[2]), b: w(n5[3]), a: O(n5[4]), format: i4 ? "name" : "hex8" } : (n5 = T.hex6.exec(r4)) ? { r: w(n5[1]), g: w(n5[2]), b: w(n5[3]), format: i4 ? "name" : "hex" } : (n5 = T.hex4.exec(r4)) ? { r: w(n5[1] + "" + n5[1]), g: w(n5[2] + "" + n5[2]), b: w(n5[3] + "" + n5[3]), a: O(n5[4] + "" + n5[4]), format: i4 ? "name" : "hex8" } : !!(n5 = T.hex3.exec(r4)) && { r: w(n5[1] + "" + n5[1]), g: w(n5[2] + "" + n5[2]), b: w(n5[3] + "" + n5[3]), format: i4 ? "name" : "hex" };
              }(r3)), "object" == typeof r3 && (R(r3.r) && R(r3.g) && R(r3.b) ? (l2 = r3.r, f2 = r3.g, h2 = r3.b, n4 = { r: 255 * x(l2, 255), g: 255 * x(f2, 255), b: 255 * x(h2, 255) }, u2 = true, c2 = "%" === String(r3.r).substr(-1) ? "prgb" : "rgb") : R(r3.h) && R(r3.s) && R(r3.v) ? (o3 = S(r3.s), a2 = S(r3.v), n4 = function(t4, e3, r4) {
                t4 = 6 * x(t4, 360), e3 = x(e3, 100), r4 = x(r4, 100);
                var n5 = Math.floor(t4), i4 = t4 - n5, o4 = r4 * (1 - e3), a3 = r4 * (1 - i4 * e3), s3 = r4 * (1 - (1 - i4) * e3), u3 = n5 % 6;
                return { r: 255 * [r4, a3, o4, o4, s3, r4][u3], g: 255 * [s3, r4, r4, a3, o4, o4][u3], b: 255 * [o4, o4, s3, r4, r4, a3][u3] };
              }(r3.h, o3, a2), u2 = true, c2 = "hsv") : R(r3.h) && R(r3.s) && R(r3.l) && (o3 = S(r3.s), s2 = S(r3.l), n4 = function(t4, e3, r4) {
                var n5, i4, o4;
                function a3(t5, e4, r5) {
                  return r5 < 0 && (r5 += 1), r5 > 1 && (r5 -= 1), r5 < 1 / 6 ? t5 + 6 * (e4 - t5) * r5 : r5 < 0.5 ? e4 : r5 < 2 / 3 ? t5 + (e4 - t5) * (2 / 3 - r5) * 6 : t5;
                }
                if (t4 = x(t4, 360), e3 = x(e3, 100), r4 = x(r4, 100), 0 === e3) n5 = i4 = o4 = r4;
                else {
                  var s3 = r4 < 0.5 ? r4 * (1 + e3) : r4 + e3 - r4 * e3, u3 = 2 * r4 - s3;
                  n5 = a3(u3, s3, t4 + 1 / 3), i4 = a3(u3, s3, t4), o4 = a3(u3, s3, t4 - 1 / 3);
                }
                return { r: 255 * n5, g: 255 * i4, b: 255 * o4 };
              }(r3.h, o3, s2), u2 = true, c2 = "hsl"), r3.hasOwnProperty("a") && (i3 = r3.a)), i3 = A(i3), { ok: u2, format: r3.format || c2, r: Math.min(255, Math.max(n4.r, 0)), g: Math.min(255, Math.max(n4.g, 0)), b: Math.min(255, Math.max(n4.b, 0)), a: i3 };
              var l2, f2, h2;
            }(n3);
            this._originalInput = n3, this._r = o2.r, this._g = o2.g, this._b = o2.b, this._a = o2.a, this._roundA = Math.round(100 * this._a) / 100, this._format = i2.format || o2.format, this._gradientType = i2.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = o2.ok;
          }
          function n2(t4, e3, r3) {
            t4 = x(t4, 255), e3 = x(e3, 255), r3 = x(r3, 255);
            var n3, i2, o2 = Math.max(t4, e3, r3), a2 = Math.min(t4, e3, r3), s2 = (o2 + a2) / 2;
            if (o2 == a2) n3 = i2 = 0;
            else {
              var u2 = o2 - a2;
              switch (i2 = s2 > 0.5 ? u2 / (2 - o2 - a2) : u2 / (o2 + a2), o2) {
                case t4:
                  n3 = (e3 - r3) / u2 + (e3 < r3 ? 6 : 0);
                  break;
                case e3:
                  n3 = (r3 - t4) / u2 + 2;
                  break;
                case r3:
                  n3 = (t4 - e3) / u2 + 4;
              }
              n3 /= 6;
            }
            return { h: n3, s: i2, l: s2 };
          }
          function i(t4, e3, r3) {
            t4 = x(t4, 255), e3 = x(e3, 255), r3 = x(r3, 255);
            var n3, i2, o2 = Math.max(t4, e3, r3), a2 = Math.min(t4, e3, r3), s2 = o2, u2 = o2 - a2;
            if (i2 = 0 === o2 ? 0 : u2 / o2, o2 == a2) n3 = 0;
            else {
              switch (o2) {
                case t4:
                  n3 = (e3 - r3) / u2 + (e3 < r3 ? 6 : 0);
                  break;
                case e3:
                  n3 = (r3 - t4) / u2 + 2;
                  break;
                case r3:
                  n3 = (t4 - e3) / u2 + 4;
              }
              n3 /= 6;
            }
            return { h: n3, s: i2, v: s2 };
          }
          function o(t4, e3, r3, n3) {
            var i2 = [E(Math.round(t4).toString(16)), E(Math.round(e3).toString(16)), E(Math.round(r3).toString(16))];
            return n3 && i2[0].charAt(0) == i2[0].charAt(1) && i2[1].charAt(0) == i2[1].charAt(1) && i2[2].charAt(0) == i2[2].charAt(1) ? i2[0].charAt(0) + i2[1].charAt(0) + i2[2].charAt(0) : i2.join("");
          }
          function a(t4, e3, r3, n3) {
            return [E(M(n3)), E(Math.round(t4).toString(16)), E(Math.round(e3).toString(16)), E(Math.round(r3).toString(16))].join("");
          }
          function s(t4, e3) {
            e3 = 0 === e3 ? 0 : e3 || 10;
            var n3 = r2(t4).toHsl();
            return n3.s -= e3 / 100, n3.s = C(n3.s), r2(n3);
          }
          function u(t4, e3) {
            e3 = 0 === e3 ? 0 : e3 || 10;
            var n3 = r2(t4).toHsl();
            return n3.s += e3 / 100, n3.s = C(n3.s), r2(n3);
          }
          function c(t4) {
            return r2(t4).desaturate(100);
          }
          function l(t4, e3) {
            e3 = 0 === e3 ? 0 : e3 || 10;
            var n3 = r2(t4).toHsl();
            return n3.l += e3 / 100, n3.l = C(n3.l), r2(n3);
          }
          function f(t4, e3) {
            e3 = 0 === e3 ? 0 : e3 || 10;
            var n3 = r2(t4).toRgb();
            return n3.r = Math.max(0, Math.min(255, n3.r - Math.round(-e3 / 100 * 255))), n3.g = Math.max(0, Math.min(255, n3.g - Math.round(-e3 / 100 * 255))), n3.b = Math.max(0, Math.min(255, n3.b - Math.round(-e3 / 100 * 255))), r2(n3);
          }
          function h(t4, e3) {
            e3 = 0 === e3 ? 0 : e3 || 10;
            var n3 = r2(t4).toHsl();
            return n3.l -= e3 / 100, n3.l = C(n3.l), r2(n3);
          }
          function d(t4, e3) {
            var n3 = r2(t4).toHsl(), i2 = (n3.h + e3) % 360;
            return n3.h = i2 < 0 ? 360 + i2 : i2, r2(n3);
          }
          function p(t4) {
            var e3 = r2(t4).toHsl();
            return e3.h = (e3.h + 180) % 360, r2(e3);
          }
          function g(t4, e3) {
            if (isNaN(e3) || e3 <= 0) throw new Error("Argument to polyad must be a positive number");
            for (var n3 = r2(t4).toHsl(), i2 = [r2(t4)], o2 = 360 / e3, a2 = 1; a2 < e3; a2++) i2.push(r2({ h: (n3.h + a2 * o2) % 360, s: n3.s, l: n3.l }));
            return i2;
          }
          function _(t4) {
            var e3 = r2(t4).toHsl(), n3 = e3.h;
            return [r2(t4), r2({ h: (n3 + 72) % 360, s: e3.s, l: e3.l }), r2({ h: (n3 + 216) % 360, s: e3.s, l: e3.l })];
          }
          function v(t4, e3, n3) {
            e3 = e3 || 6, n3 = n3 || 30;
            var i2 = r2(t4).toHsl(), o2 = 360 / n3, a2 = [r2(t4)];
            for (i2.h = (i2.h - (o2 * e3 >> 1) + 720) % 360; --e3; ) i2.h = (i2.h + o2) % 360, a2.push(r2(i2));
            return a2;
          }
          function b(t4, e3) {
            e3 = e3 || 6;
            for (var n3 = r2(t4).toHsv(), i2 = n3.h, o2 = n3.s, a2 = n3.v, s2 = [], u2 = 1 / e3; e3--; ) s2.push(r2({ h: i2, s: o2, v: a2 })), a2 = (a2 + u2) % 1;
            return s2;
          }
          r2.prototype = { isDark: function() {
            return this.getBrightness() < 128;
          }, isLight: function() {
            return !this.isDark();
          }, isValid: function() {
            return this._ok;
          }, getOriginalInput: function() {
            return this._originalInput;
          }, getFormat: function() {
            return this._format;
          }, getAlpha: function() {
            return this._a;
          }, getBrightness: function() {
            var t4 = this.toRgb();
            return (299 * t4.r + 587 * t4.g + 114 * t4.b) / 1e3;
          }, getLuminance: function() {
            var t4, e3, r3, n3 = this.toRgb();
            return t4 = n3.r / 255, e3 = n3.g / 255, r3 = n3.b / 255, 0.2126 * (t4 <= 0.03928 ? t4 / 12.92 : Math.pow((t4 + 0.055) / 1.055, 2.4)) + 0.7152 * (e3 <= 0.03928 ? e3 / 12.92 : Math.pow((e3 + 0.055) / 1.055, 2.4)) + 0.0722 * (r3 <= 0.03928 ? r3 / 12.92 : Math.pow((r3 + 0.055) / 1.055, 2.4));
          }, setAlpha: function(t4) {
            return this._a = A(t4), this._roundA = Math.round(100 * this._a) / 100, this;
          }, toHsv: function() {
            var t4 = i(this._r, this._g, this._b);
            return { h: 360 * t4.h, s: t4.s, v: t4.v, a: this._a };
          }, toHsvString: function() {
            var t4 = i(this._r, this._g, this._b), e3 = Math.round(360 * t4.h), r3 = Math.round(100 * t4.s), n3 = Math.round(100 * t4.v);
            return 1 == this._a ? "hsv(" + e3 + ", " + r3 + "%, " + n3 + "%)" : "hsva(" + e3 + ", " + r3 + "%, " + n3 + "%, " + this._roundA + ")";
          }, toHsl: function() {
            var t4 = n2(this._r, this._g, this._b);
            return { h: 360 * t4.h, s: t4.s, l: t4.l, a: this._a };
          }, toHslString: function() {
            var t4 = n2(this._r, this._g, this._b), e3 = Math.round(360 * t4.h), r3 = Math.round(100 * t4.s), i2 = Math.round(100 * t4.l);
            return 1 == this._a ? "hsl(" + e3 + ", " + r3 + "%, " + i2 + "%)" : "hsla(" + e3 + ", " + r3 + "%, " + i2 + "%, " + this._roundA + ")";
          }, toHex: function(t4) {
            return o(this._r, this._g, this._b, t4);
          }, toHexString: function(t4) {
            return "#" + this.toHex(t4);
          }, toHex8: function(t4) {
            return function(t5, e3, r3, n3, i2) {
              var o2 = [E(Math.round(t5).toString(16)), E(Math.round(e3).toString(16)), E(Math.round(r3).toString(16)), E(M(n3))];
              return i2 && o2[0].charAt(0) == o2[0].charAt(1) && o2[1].charAt(0) == o2[1].charAt(1) && o2[2].charAt(0) == o2[2].charAt(1) && o2[3].charAt(0) == o2[3].charAt(1) ? o2[0].charAt(0) + o2[1].charAt(0) + o2[2].charAt(0) + o2[3].charAt(0) : o2.join("");
            }(this._r, this._g, this._b, this._a, t4);
          }, toHex8String: function(t4) {
            return "#" + this.toHex8(t4);
          }, toRgb: function() {
            return { r: Math.round(this._r), g: Math.round(this._g), b: Math.round(this._b), a: this._a };
          }, toRgbString: function() {
            return 1 == this._a ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
          }, toPercentageRgb: function() {
            return { r: Math.round(100 * x(this._r, 255)) + "%", g: Math.round(100 * x(this._g, 255)) + "%", b: Math.round(100 * x(this._b, 255)) + "%", a: this._a };
          }, toPercentageRgbString: function() {
            return 1 == this._a ? "rgb(" + Math.round(100 * x(this._r, 255)) + "%, " + Math.round(100 * x(this._g, 255)) + "%, " + Math.round(100 * x(this._b, 255)) + "%)" : "rgba(" + Math.round(100 * x(this._r, 255)) + "%, " + Math.round(100 * x(this._g, 255)) + "%, " + Math.round(100 * x(this._b, 255)) + "%, " + this._roundA + ")";
          }, toName: function() {
            return 0 === this._a ? "transparent" : !(this._a < 1) && (m[o(this._r, this._g, this._b, true)] || false);
          }, toFilter: function(t4) {
            var e3 = "#" + a(this._r, this._g, this._b, this._a), n3 = e3, i2 = this._gradientType ? "GradientType = 1, " : "";
            if (t4) {
              var o2 = r2(t4);
              n3 = "#" + a(o2._r, o2._g, o2._b, o2._a);
            }
            return "progid:DXImageTransform.Microsoft.gradient(" + i2 + "startColorstr=" + e3 + ",endColorstr=" + n3 + ")";
          }, toString: function(t4) {
            var e3 = !!t4;
            t4 = t4 || this._format;
            var r3 = false, n3 = this._a < 1 && this._a >= 0;
            return e3 || !n3 || "hex" !== t4 && "hex6" !== t4 && "hex3" !== t4 && "hex4" !== t4 && "hex8" !== t4 && "name" !== t4 ? ("rgb" === t4 && (r3 = this.toRgbString()), "prgb" === t4 && (r3 = this.toPercentageRgbString()), "hex" !== t4 && "hex6" !== t4 || (r3 = this.toHexString()), "hex3" === t4 && (r3 = this.toHexString(true)), "hex4" === t4 && (r3 = this.toHex8String(true)), "hex8" === t4 && (r3 = this.toHex8String()), "name" === t4 && (r3 = this.toName()), "hsl" === t4 && (r3 = this.toHslString()), "hsv" === t4 && (r3 = this.toHsvString()), r3 || this.toHexString()) : "name" === t4 && 0 === this._a ? this.toName() : this.toRgbString();
          }, clone: function() {
            return r2(this.toString());
          }, _applyModification: function(t4, e3) {
            var r3 = t4.apply(null, [this].concat([].slice.call(e3)));
            return this._r = r3._r, this._g = r3._g, this._b = r3._b, this.setAlpha(r3._a), this;
          }, lighten: function() {
            return this._applyModification(l, arguments);
          }, brighten: function() {
            return this._applyModification(f, arguments);
          }, darken: function() {
            return this._applyModification(h, arguments);
          }, desaturate: function() {
            return this._applyModification(s, arguments);
          }, saturate: function() {
            return this._applyModification(u, arguments);
          }, greyscale: function() {
            return this._applyModification(c, arguments);
          }, spin: function() {
            return this._applyModification(d, arguments);
          }, _applyCombination: function(t4, e3) {
            return t4.apply(null, [this].concat([].slice.call(e3)));
          }, analogous: function() {
            return this._applyCombination(v, arguments);
          }, complement: function() {
            return this._applyCombination(p, arguments);
          }, monochromatic: function() {
            return this._applyCombination(b, arguments);
          }, splitcomplement: function() {
            return this._applyCombination(_, arguments);
          }, triad: function() {
            return this._applyCombination(g, [3]);
          }, tetrad: function() {
            return this._applyCombination(g, [4]);
          } }, r2.fromRatio = function(t4, e3) {
            if ("object" == typeof t4) {
              var n3 = {};
              for (var i2 in t4) t4.hasOwnProperty(i2) && (n3[i2] = "a" === i2 ? t4[i2] : S(t4[i2]));
              t4 = n3;
            }
            return r2(t4, e3);
          }, r2.equals = function(t4, e3) {
            return !(!t4 || !e3) && r2(t4).toRgbString() == r2(e3).toRgbString();
          }, r2.random = function() {
            return r2.fromRatio({ r: Math.random(), g: Math.random(), b: Math.random() });
          }, r2.mix = function(t4, e3, n3) {
            n3 = 0 === n3 ? 0 : n3 || 50;
            var i2 = r2(t4).toRgb(), o2 = r2(e3).toRgb(), a2 = n3 / 100;
            return r2({ r: (o2.r - i2.r) * a2 + i2.r, g: (o2.g - i2.g) * a2 + i2.g, b: (o2.b - i2.b) * a2 + i2.b, a: (o2.a - i2.a) * a2 + i2.a });
          }, r2.readability = function(t4, e3) {
            var n3 = r2(t4), i2 = r2(e3);
            return (Math.max(n3.getLuminance(), i2.getLuminance()) + 0.05) / (Math.min(n3.getLuminance(), i2.getLuminance()) + 0.05);
          }, r2.isReadable = function(t4, e3, n3) {
            var i2, o2, a2, s2, u2, c2 = r2.readability(t4, e3);
            switch (o2 = false, (a2 = n3, "AA" !== (s2 = ((a2 = a2 || { level: "AA", size: "small" }).level || "AA").toUpperCase()) && "AAA" !== s2 && (s2 = "AA"), "small" !== (u2 = (a2.size || "small").toLowerCase()) && "large" !== u2 && (u2 = "small"), i2 = { level: s2, size: u2 }).level + i2.size) {
              case "AAsmall":
              case "AAAlarge":
                o2 = c2 >= 4.5;
                break;
              case "AAlarge":
                o2 = c2 >= 3;
                break;
              case "AAAsmall":
                o2 = c2 >= 7;
            }
            return o2;
          }, r2.mostReadable = function(t4, e3, n3) {
            var i2, o2, a2, s2, u2 = null, c2 = 0;
            o2 = (n3 = n3 || {}).includeFallbackColors, a2 = n3.level, s2 = n3.size;
            for (var l2 = 0; l2 < e3.length; l2++) (i2 = r2.readability(t4, e3[l2])) > c2 && (c2 = i2, u2 = r2(e3[l2]));
            return r2.isReadable(t4, u2, { level: a2, size: s2 }) || !o2 ? u2 : (n3.includeFallbackColors = false, r2.mostReadable(t4, ["#fff", "#000"], n3));
          };
          var y = r2.names = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "0ff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "00f", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", burntsienna: "ea7e5d", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "0ff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "f0f", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "663399", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" }, m = r2.hexNames = function(t4) {
            var e3 = {};
            for (var r3 in t4) t4.hasOwnProperty(r3) && (e3[t4[r3]] = r3);
            return e3;
          }(y);
          function A(t4) {
            return t4 = parseFloat(t4), (isNaN(t4) || t4 < 0 || t4 > 1) && (t4 = 1), t4;
          }
          function x(t4, e3) {
            (function(t5) {
              return "string" == typeof t5 && -1 != t5.indexOf(".") && 1 === parseFloat(t5);
            })(t4) && (t4 = "100%");
            var r3 = function(t5) {
              return "string" == typeof t5 && -1 != t5.indexOf("%");
            }(t4);
            return t4 = Math.min(e3, Math.max(0, parseFloat(t4))), r3 && (t4 = parseInt(t4 * e3, 10) / 100), Math.abs(t4 - e3) < 1e-6 ? 1 : t4 % e3 / parseFloat(e3);
          }
          function C(t4) {
            return Math.min(1, Math.max(0, t4));
          }
          function w(t4) {
            return parseInt(t4, 16);
          }
          function E(t4) {
            return 1 == t4.length ? "0" + t4 : "" + t4;
          }
          function S(t4) {
            return t4 <= 1 && (t4 = 100 * t4 + "%"), t4;
          }
          function M(t4) {
            return Math.round(255 * parseFloat(t4)).toString(16);
          }
          function O(t4) {
            return w(t4) / 255;
          }
          var j, L, k, T = (L = "[\\s|\\(]+(" + (j = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + j + ")[,|\\s]+(" + j + ")\\s*\\)?", k = "[\\s|\\(]+(" + j + ")[,|\\s]+(" + j + ")[,|\\s]+(" + j + ")[,|\\s]+(" + j + ")\\s*\\)?", { CSS_UNIT: new RegExp(j), rgb: new RegExp("rgb" + L), rgba: new RegExp("rgba" + k), hsl: new RegExp("hsl" + L), hsla: new RegExp("hsla" + k), hsv: new RegExp("hsv" + L), hsva: new RegExp("hsva" + k), hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/ });
          function R(t4) {
            return !!T.CSS_UNIT.exec(t4);
          }
          return r2;
        }();
      } }, e = {};
      function r(n2) {
        var i = e[n2];
        if (void 0 !== i) return i.exports;
        var o = e[n2] = { id: n2, loaded: false, exports: {} };
        return t[n2].call(o.exports, o, o.exports, r), o.loaded = true, o.exports;
      }
      r.n = (t2) => {
        var e2 = t2 && t2.__esModule ? () => t2.default : () => t2;
        return r.d(e2, { a: e2 }), e2;
      }, r.d = (t2, e2) => {
        for (var n2 in e2) r.o(e2, n2) && !r.o(t2, n2) && Object.defineProperty(t2, n2, { enumerable: true, get: e2[n2] });
      }, r.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t2) {
          if ("object" == typeof window) return window;
        }
      }(), r.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), r.r = (t2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
      }, r.nmd = (t2) => (t2.paths = [], t2.children || (t2.children = []), t2), r.nc = void 0;
      var n = r(607);
      return n.default;
    })());
  }
});

// components/EditorComponent/Editor.tsx
var import_react2 = __toESM(require_react());
var import_react_quill = __toESM(require_lib());

// node_modules/lib0/map.js
var create = () => /* @__PURE__ */ new Map();
var copy = (m) => {
  const r = create();
  m.forEach((v, k) => {
    r.set(k, v);
  });
  return r;
};
var setIfUndefined = (map3, key, createT) => {
  let set = map3.get(key);
  if (set === void 0) {
    map3.set(key, set = createT());
  }
  return set;
};
var map = (m, f) => {
  const res = [];
  for (const [key, value] of m) {
    res.push(f(value, key));
  }
  return res;
};
var any = (m, f) => {
  for (const [key, value] of m) {
    if (f(value, key)) {
      return true;
    }
  }
  return false;
};

// node_modules/lib0/set.js
var create2 = () => /* @__PURE__ */ new Set();

// node_modules/lib0/array.js
var last = (arr) => arr[arr.length - 1];
var appendTo = (dest, src) => {
  for (let i = 0; i < src.length; i++) {
    dest.push(src[i]);
  }
};
var from = Array.from;
var isArray = Array.isArray;

// node_modules/lib0/observable.js
var ObservableV2 = class {
  constructor() {
    this._observers = create();
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  on(name, f) {
    setIfUndefined(
      this._observers,
      /** @type {string} */
      name,
      create2
    ).add(f);
    return f;
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  once(name, f) {
    const _f = (...args2) => {
      this.off(
        name,
        /** @type {any} */
        _f
      );
      f(...args2);
    };
    this.on(
      name,
      /** @type {any} */
      _f
    );
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  off(name, f) {
    const observers = this._observers.get(name);
    if (observers !== void 0) {
      observers.delete(f);
      if (observers.size === 0) {
        this._observers.delete(name);
      }
    }
  }
  /**
   * Emit a named event. All registered event listeners that listen to the
   * specified name will receive the event.
   *
   * @todo This should catch exceptions
   *
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name The event name.
   * @param {Parameters<EVENTS[NAME]>} args The arguments that are applied to the event listener.
   */
  emit(name, args2) {
    return from((this._observers.get(name) || create()).values()).forEach((f) => f(...args2));
  }
  destroy() {
    this._observers = create();
  }
};
var Observable = class {
  constructor() {
    this._observers = create();
  }
  /**
   * @param {N} name
   * @param {function} f
   */
  on(name, f) {
    setIfUndefined(this._observers, name, create2).add(f);
  }
  /**
   * @param {N} name
   * @param {function} f
   */
  once(name, f) {
    const _f = (...args2) => {
      this.off(name, _f);
      f(...args2);
    };
    this.on(name, _f);
  }
  /**
   * @param {N} name
   * @param {function} f
   */
  off(name, f) {
    const observers = this._observers.get(name);
    if (observers !== void 0) {
      observers.delete(f);
      if (observers.size === 0) {
        this._observers.delete(name);
      }
    }
  }
  /**
   * Emit a named event. All registered event listeners that listen to the
   * specified name will receive the event.
   *
   * @todo This should catch exceptions
   *
   * @param {N} name The event name.
   * @param {Array<any>} args The arguments that are applied to the event listener.
   */
  emit(name, args2) {
    return from((this._observers.get(name) || create()).values()).forEach((f) => f(...args2));
  }
  destroy() {
    this._observers = create();
  }
};

// node_modules/lib0/math.js
var floor = Math.floor;
var abs = Math.abs;
var min = (a, b) => a < b ? a : b;
var max = (a, b) => a > b ? a : b;
var isNaN2 = Number.isNaN;
var pow = Math.pow;
var isNegativeZero = (n) => n !== 0 ? n < 0 : 1 / n < 0;

// node_modules/lib0/binary.js
var BIT1 = 1;
var BIT2 = 2;
var BIT3 = 4;
var BIT4 = 8;
var BIT6 = 32;
var BIT7 = 64;
var BIT8 = 128;
var BIT18 = 1 << 17;
var BIT19 = 1 << 18;
var BIT20 = 1 << 19;
var BIT21 = 1 << 20;
var BIT22 = 1 << 21;
var BIT23 = 1 << 22;
var BIT24 = 1 << 23;
var BIT25 = 1 << 24;
var BIT26 = 1 << 25;
var BIT27 = 1 << 26;
var BIT28 = 1 << 27;
var BIT29 = 1 << 28;
var BIT30 = 1 << 29;
var BIT31 = 1 << 30;
var BIT32 = 1 << 31;
var BITS5 = 31;
var BITS6 = 63;
var BITS7 = 127;
var BITS17 = BIT18 - 1;
var BITS18 = BIT19 - 1;
var BITS19 = BIT20 - 1;
var BITS20 = BIT21 - 1;
var BITS21 = BIT22 - 1;
var BITS22 = BIT23 - 1;
var BITS23 = BIT24 - 1;
var BITS24 = BIT25 - 1;
var BITS25 = BIT26 - 1;
var BITS26 = BIT27 - 1;
var BITS27 = BIT28 - 1;
var BITS28 = BIT29 - 1;
var BITS29 = BIT30 - 1;
var BITS30 = BIT31 - 1;
var BITS31 = 2147483647;

// node_modules/lib0/number.js
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
var MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
var LOWEST_INT32 = 1 << 31;
var isInteger = Number.isInteger || ((num) => typeof num === "number" && isFinite(num) && floor(num) === num);
var isNaN3 = Number.isNaN;
var parseInt2 = Number.parseInt;

// node_modules/lib0/string.js
var fromCharCode = String.fromCharCode;
var fromCodePoint = String.fromCodePoint;
var MAX_UTF16_CHARACTER = fromCharCode(65535);
var toLowerCase = (s) => s.toLowerCase();
var trimLeftRegex = /^\s*/g;
var trimLeft = (s) => s.replace(trimLeftRegex, "");
var fromCamelCaseRegex = /([A-Z])/g;
var fromCamelCase = (s, separator) => trimLeft(s.replace(fromCamelCaseRegex, (match) => `${separator}${toLowerCase(match)}`));
var _encodeUtf8Polyfill = (str) => {
  const encodedString = unescape(encodeURIComponent(str));
  const len = encodedString.length;
  const buf = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    buf[i] = /** @type {number} */
    encodedString.codePointAt(i);
  }
  return buf;
};
var utf8TextEncoder = (
  /** @type {TextEncoder} */
  typeof TextEncoder !== "undefined" ? new TextEncoder() : null
);
var _encodeUtf8Native = (str) => utf8TextEncoder.encode(str);
var encodeUtf8 = utf8TextEncoder ? _encodeUtf8Native : _encodeUtf8Polyfill;
var utf8TextDecoder = typeof TextDecoder === "undefined" ? null : new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
if (utf8TextDecoder && utf8TextDecoder.decode(new Uint8Array()).length === 1) {
  utf8TextDecoder = null;
}

// node_modules/lib0/encoding.js
var Encoder = class {
  constructor() {
    this.cpos = 0;
    this.cbuf = new Uint8Array(100);
    this.bufs = [];
  }
};
var createEncoder = () => new Encoder();
var length = (encoder) => {
  let len = encoder.cpos;
  for (let i = 0; i < encoder.bufs.length; i++) {
    len += encoder.bufs[i].length;
  }
  return len;
};
var toUint8Array = (encoder) => {
  const uint8arr = new Uint8Array(length(encoder));
  let curPos = 0;
  for (let i = 0; i < encoder.bufs.length; i++) {
    const d = encoder.bufs[i];
    uint8arr.set(d, curPos);
    curPos += d.length;
  }
  uint8arr.set(new Uint8Array(encoder.cbuf.buffer, 0, encoder.cpos), curPos);
  return uint8arr;
};
var verifyLen = (encoder, len) => {
  const bufferLen = encoder.cbuf.length;
  if (bufferLen - encoder.cpos < len) {
    encoder.bufs.push(new Uint8Array(encoder.cbuf.buffer, 0, encoder.cpos));
    encoder.cbuf = new Uint8Array(max(bufferLen, len) * 2);
    encoder.cpos = 0;
  }
};
var write = (encoder, num) => {
  const bufferLen = encoder.cbuf.length;
  if (encoder.cpos === bufferLen) {
    encoder.bufs.push(encoder.cbuf);
    encoder.cbuf = new Uint8Array(bufferLen * 2);
    encoder.cpos = 0;
  }
  encoder.cbuf[encoder.cpos++] = num;
};
var writeUint8 = write;
var writeVarUint = (encoder, num) => {
  while (num > BITS7) {
    write(encoder, BIT8 | BITS7 & num);
    num = floor(num / 128);
  }
  write(encoder, BITS7 & num);
};
var writeVarInt = (encoder, num) => {
  const isNegative = isNegativeZero(num);
  if (isNegative) {
    num = -num;
  }
  write(encoder, (num > BITS6 ? BIT8 : 0) | (isNegative ? BIT7 : 0) | BITS6 & num);
  num = floor(num / 64);
  while (num > 0) {
    write(encoder, (num > BITS7 ? BIT8 : 0) | BITS7 & num);
    num = floor(num / 128);
  }
};
var _strBuffer = new Uint8Array(3e4);
var _maxStrBSize = _strBuffer.length / 3;
var _writeVarStringNative = (encoder, str) => {
  if (str.length < _maxStrBSize) {
    const written = utf8TextEncoder.encodeInto(str, _strBuffer).written || 0;
    writeVarUint(encoder, written);
    for (let i = 0; i < written; i++) {
      write(encoder, _strBuffer[i]);
    }
  } else {
    writeVarUint8Array(encoder, encodeUtf8(str));
  }
};
var _writeVarStringPolyfill = (encoder, str) => {
  const encodedString = unescape(encodeURIComponent(str));
  const len = encodedString.length;
  writeVarUint(encoder, len);
  for (let i = 0; i < len; i++) {
    write(
      encoder,
      /** @type {number} */
      encodedString.codePointAt(i)
    );
  }
};
var writeVarString = utf8TextEncoder && /** @type {any} */
utf8TextEncoder.encodeInto ? _writeVarStringNative : _writeVarStringPolyfill;
var writeUint8Array = (encoder, uint8Array) => {
  const bufferLen = encoder.cbuf.length;
  const cpos = encoder.cpos;
  const leftCopyLen = min(bufferLen - cpos, uint8Array.length);
  const rightCopyLen = uint8Array.length - leftCopyLen;
  encoder.cbuf.set(uint8Array.subarray(0, leftCopyLen), cpos);
  encoder.cpos += leftCopyLen;
  if (rightCopyLen > 0) {
    encoder.bufs.push(encoder.cbuf);
    encoder.cbuf = new Uint8Array(max(bufferLen * 2, rightCopyLen));
    encoder.cbuf.set(uint8Array.subarray(leftCopyLen));
    encoder.cpos = rightCopyLen;
  }
};
var writeVarUint8Array = (encoder, uint8Array) => {
  writeVarUint(encoder, uint8Array.byteLength);
  writeUint8Array(encoder, uint8Array);
};
var writeOnDataView = (encoder, len) => {
  verifyLen(encoder, len);
  const dview = new DataView(encoder.cbuf.buffer, encoder.cpos, len);
  encoder.cpos += len;
  return dview;
};
var writeFloat32 = (encoder, num) => writeOnDataView(encoder, 4).setFloat32(0, num, false);
var writeFloat64 = (encoder, num) => writeOnDataView(encoder, 8).setFloat64(0, num, false);
var writeBigInt64 = (encoder, num) => (
  /** @type {any} */
  writeOnDataView(encoder, 8).setBigInt64(0, num, false)
);
var floatTestBed = new DataView(new ArrayBuffer(4));
var isFloat32 = (num) => {
  floatTestBed.setFloat32(0, num);
  return floatTestBed.getFloat32(0) === num;
};
var writeAny = (encoder, data) => {
  switch (typeof data) {
    case "string":
      write(encoder, 119);
      writeVarString(encoder, data);
      break;
    case "number":
      if (isInteger(data) && abs(data) <= BITS31) {
        write(encoder, 125);
        writeVarInt(encoder, data);
      } else if (isFloat32(data)) {
        write(encoder, 124);
        writeFloat32(encoder, data);
      } else {
        write(encoder, 123);
        writeFloat64(encoder, data);
      }
      break;
    case "bigint":
      write(encoder, 122);
      writeBigInt64(encoder, data);
      break;
    case "object":
      if (data === null) {
        write(encoder, 126);
      } else if (isArray(data)) {
        write(encoder, 117);
        writeVarUint(encoder, data.length);
        for (let i = 0; i < data.length; i++) {
          writeAny(encoder, data[i]);
        }
      } else if (data instanceof Uint8Array) {
        write(encoder, 116);
        writeVarUint8Array(encoder, data);
      } else {
        write(encoder, 118);
        const keys2 = Object.keys(data);
        writeVarUint(encoder, keys2.length);
        for (let i = 0; i < keys2.length; i++) {
          const key = keys2[i];
          writeVarString(encoder, key);
          writeAny(encoder, data[key]);
        }
      }
      break;
    case "boolean":
      write(encoder, data ? 120 : 121);
      break;
    default:
      write(encoder, 127);
  }
};
var RleEncoder = class extends Encoder {
  /**
   * @param {function(Encoder, T):void} writer
   */
  constructor(writer) {
    super();
    this.w = writer;
    this.s = null;
    this.count = 0;
  }
  /**
   * @param {T} v
   */
  write(v) {
    if (this.s === v) {
      this.count++;
    } else {
      if (this.count > 0) {
        writeVarUint(this, this.count - 1);
      }
      this.count = 1;
      this.w(this, v);
      this.s = v;
    }
  }
};
var flushUintOptRleEncoder = (encoder) => {
  if (encoder.count > 0) {
    writeVarInt(encoder.encoder, encoder.count === 1 ? encoder.s : -encoder.s);
    if (encoder.count > 1) {
      writeVarUint(encoder.encoder, encoder.count - 2);
    }
  }
};
var UintOptRleEncoder = class {
  constructor() {
    this.encoder = new Encoder();
    this.s = 0;
    this.count = 0;
  }
  /**
   * @param {number} v
   */
  write(v) {
    if (this.s === v) {
      this.count++;
    } else {
      flushUintOptRleEncoder(this);
      this.count = 1;
      this.s = v;
    }
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    flushUintOptRleEncoder(this);
    return toUint8Array(this.encoder);
  }
};
var flushIntDiffOptRleEncoder = (encoder) => {
  if (encoder.count > 0) {
    const encodedDiff = encoder.diff * 2 + (encoder.count === 1 ? 0 : 1);
    writeVarInt(encoder.encoder, encodedDiff);
    if (encoder.count > 1) {
      writeVarUint(encoder.encoder, encoder.count - 2);
    }
  }
};
var IntDiffOptRleEncoder = class {
  constructor() {
    this.encoder = new Encoder();
    this.s = 0;
    this.count = 0;
    this.diff = 0;
  }
  /**
   * @param {number} v
   */
  write(v) {
    if (this.diff === v - this.s) {
      this.s = v;
      this.count++;
    } else {
      flushIntDiffOptRleEncoder(this);
      this.count = 1;
      this.diff = v - this.s;
      this.s = v;
    }
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    flushIntDiffOptRleEncoder(this);
    return toUint8Array(this.encoder);
  }
};
var StringEncoder = class {
  constructor() {
    this.sarr = [];
    this.s = "";
    this.lensE = new UintOptRleEncoder();
  }
  /**
   * @param {string} string
   */
  write(string) {
    this.s += string;
    if (this.s.length > 19) {
      this.sarr.push(this.s);
      this.s = "";
    }
    this.lensE.write(string.length);
  }
  toUint8Array() {
    const encoder = new Encoder();
    this.sarr.push(this.s);
    this.s = "";
    writeVarString(encoder, this.sarr.join(""));
    writeUint8Array(encoder, this.lensE.toUint8Array());
    return toUint8Array(encoder);
  }
};

// node_modules/lib0/error.js
var create3 = (s) => new Error(s);
var methodUnimplemented = () => {
  throw create3("Method unimplemented");
};
var unexpectedCase = () => {
  throw create3("Unexpected case");
};

// node_modules/lib0/decoding.js
var errorUnexpectedEndOfArray = create3("Unexpected end of array");
var errorIntegerOutOfRange = create3("Integer out of Range");
var Decoder = class {
  /**
   * @param {Uint8Array} uint8Array Binary data to decode
   */
  constructor(uint8Array) {
    this.arr = uint8Array;
    this.pos = 0;
  }
};
var createDecoder = (uint8Array) => new Decoder(uint8Array);
var hasContent = (decoder) => decoder.pos !== decoder.arr.length;
var readUint8Array = (decoder, len) => {
  const view = new Uint8Array(decoder.arr.buffer, decoder.pos + decoder.arr.byteOffset, len);
  decoder.pos += len;
  return view;
};
var readVarUint8Array = (decoder) => readUint8Array(decoder, readVarUint(decoder));
var readUint8 = (decoder) => decoder.arr[decoder.pos++];
var readVarUint = (decoder) => {
  let num = 0;
  let mult = 1;
  const len = decoder.arr.length;
  while (decoder.pos < len) {
    const r = decoder.arr[decoder.pos++];
    num = num + (r & BITS7) * mult;
    mult *= 128;
    if (r < BIT8) {
      return num;
    }
    if (num > MAX_SAFE_INTEGER) {
      throw errorIntegerOutOfRange;
    }
  }
  throw errorUnexpectedEndOfArray;
};
var readVarInt = (decoder) => {
  let r = decoder.arr[decoder.pos++];
  let num = r & BITS6;
  let mult = 64;
  const sign = (r & BIT7) > 0 ? -1 : 1;
  if ((r & BIT8) === 0) {
    return sign * num;
  }
  const len = decoder.arr.length;
  while (decoder.pos < len) {
    r = decoder.arr[decoder.pos++];
    num = num + (r & BITS7) * mult;
    mult *= 128;
    if (r < BIT8) {
      return sign * num;
    }
    if (num > MAX_SAFE_INTEGER) {
      throw errorIntegerOutOfRange;
    }
  }
  throw errorUnexpectedEndOfArray;
};
var _readVarStringPolyfill = (decoder) => {
  let remainingLen = readVarUint(decoder);
  if (remainingLen === 0) {
    return "";
  } else {
    let encodedString = String.fromCodePoint(readUint8(decoder));
    if (--remainingLen < 100) {
      while (remainingLen--) {
        encodedString += String.fromCodePoint(readUint8(decoder));
      }
    } else {
      while (remainingLen > 0) {
        const nextLen = remainingLen < 1e4 ? remainingLen : 1e4;
        const bytes = decoder.arr.subarray(decoder.pos, decoder.pos + nextLen);
        decoder.pos += nextLen;
        encodedString += String.fromCodePoint.apply(
          null,
          /** @type {any} */
          bytes
        );
        remainingLen -= nextLen;
      }
    }
    return decodeURIComponent(escape(encodedString));
  }
};
var _readVarStringNative = (decoder) => (
  /** @type any */
  utf8TextDecoder.decode(readVarUint8Array(decoder))
);
var readVarString = utf8TextDecoder ? _readVarStringNative : _readVarStringPolyfill;
var readFromDataView = (decoder, len) => {
  const dv = new DataView(decoder.arr.buffer, decoder.arr.byteOffset + decoder.pos, len);
  decoder.pos += len;
  return dv;
};
var readFloat32 = (decoder) => readFromDataView(decoder, 4).getFloat32(0, false);
var readFloat64 = (decoder) => readFromDataView(decoder, 8).getFloat64(0, false);
var readBigInt64 = (decoder) => (
  /** @type {any} */
  readFromDataView(decoder, 8).getBigInt64(0, false)
);
var readAnyLookupTable = [
  (decoder) => void 0,
  // CASE 127: undefined
  (decoder) => null,
  // CASE 126: null
  readVarInt,
  // CASE 125: integer
  readFloat32,
  // CASE 124: float32
  readFloat64,
  // CASE 123: float64
  readBigInt64,
  // CASE 122: bigint
  (decoder) => false,
  // CASE 121: boolean (false)
  (decoder) => true,
  // CASE 120: boolean (true)
  readVarString,
  // CASE 119: string
  (decoder) => {
    const len = readVarUint(decoder);
    const obj = {};
    for (let i = 0; i < len; i++) {
      const key = readVarString(decoder);
      obj[key] = readAny(decoder);
    }
    return obj;
  },
  (decoder) => {
    const len = readVarUint(decoder);
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(readAny(decoder));
    }
    return arr;
  },
  readVarUint8Array
  // CASE 116: Uint8Array
];
var readAny = (decoder) => readAnyLookupTable[127 - readUint8(decoder)](decoder);
var RleDecoder = class extends Decoder {
  /**
   * @param {Uint8Array} uint8Array
   * @param {function(Decoder):T} reader
   */
  constructor(uint8Array, reader) {
    super(uint8Array);
    this.reader = reader;
    this.s = null;
    this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = this.reader(this);
      if (hasContent(this)) {
        this.count = readVarUint(this) + 1;
      } else {
        this.count = -1;
      }
    }
    this.count--;
    return (
      /** @type {T} */
      this.s
    );
  }
};
var UintOptRleDecoder = class extends Decoder {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(uint8Array) {
    super(uint8Array);
    this.s = 0;
    this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = readVarInt(this);
      const isNegative = isNegativeZero(this.s);
      this.count = 1;
      if (isNegative) {
        this.s = -this.s;
        this.count = readVarUint(this) + 2;
      }
    }
    this.count--;
    return (
      /** @type {number} */
      this.s
    );
  }
};
var IntDiffOptRleDecoder = class extends Decoder {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(uint8Array) {
    super(uint8Array);
    this.s = 0;
    this.count = 0;
    this.diff = 0;
  }
  /**
   * @return {number}
   */
  read() {
    if (this.count === 0) {
      const diff = readVarInt(this);
      const hasCount = diff & 1;
      this.diff = floor(diff / 2);
      this.count = 1;
      if (hasCount) {
        this.count = readVarUint(this) + 2;
      }
    }
    this.s += this.diff;
    this.count--;
    return this.s;
  }
};
var StringDecoder = class {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(uint8Array) {
    this.decoder = new UintOptRleDecoder(uint8Array);
    this.str = readVarString(this.decoder);
    this.spos = 0;
  }
  /**
   * @return {string}
   */
  read() {
    const end = this.spos + this.decoder.read();
    const res = this.str.slice(this.spos, end);
    this.spos = end;
    return res;
  }
};

// node_modules/lib0/webcrypto.js
var subtle = crypto.subtle;
var getRandomValues = crypto.getRandomValues.bind(crypto);

// node_modules/lib0/random.js
var uint32 = () => getRandomValues(new Uint32Array(1))[0];
var uuidv4Template = "10000000-1000-4000-8000" + -1e11;
var uuidv4 = () => uuidv4Template.replace(
  /[018]/g,
  /** @param {number} c */
  (c) => (c ^ uint32() & 15 >> c / 4).toString(16)
);

// node_modules/lib0/time.js
var getUnixTime = Date.now;

// node_modules/lib0/promise.js
var create4 = (f) => (
  /** @type {Promise<T>} */
  new Promise(f)
);
var all = Promise.all.bind(Promise);

// node_modules/lib0/conditions.js
var undefinedToNull = (v) => v === void 0 ? null : v;

// node_modules/lib0/storage.js
var VarStoragePolyfill = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {string} key
   * @param {any} newValue
   */
  setItem(key, newValue) {
    this.map.set(key, newValue);
  }
  /**
   * @param {string} key
   */
  getItem(key) {
    return this.map.get(key);
  }
};
var _localStorage = new VarStoragePolyfill();
var usePolyfill = true;
try {
  if (typeof localStorage !== "undefined" && localStorage) {
    _localStorage = localStorage;
    usePolyfill = false;
  }
} catch (e) {
}
var varStorage = _localStorage;
var onChange = (eventHandler) => usePolyfill || addEventListener(
  "storage",
  /** @type {any} */
  eventHandler
);
var offChange = (eventHandler) => usePolyfill || removeEventListener(
  "storage",
  /** @type {any} */
  eventHandler
);

// node_modules/lib0/object.js
var assign = Object.assign;
var keys = Object.keys;
var forEach = (obj, f) => {
  for (const key in obj) {
    f(obj[key], key);
  }
};
var map2 = (obj, f) => {
  const results = [];
  for (const key in obj) {
    results.push(f(obj[key], key));
  }
  return results;
};
var length2 = (obj) => keys(obj).length;
var size = (obj) => keys(obj).length;
var isEmpty = (obj) => {
  for (const _k in obj) {
    return false;
  }
  return true;
};
var every = (obj, f) => {
  for (const key in obj) {
    if (!f(obj[key], key)) {
      return false;
    }
  }
  return true;
};
var hasProperty = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
var equalFlat = (a, b) => a === b || size(a) === size(b) && every(a, (val, key) => (val !== void 0 || hasProperty(b, key)) && b[key] === val);

// node_modules/lib0/function.js
var callAll = (fs, args2, i = 0) => {
  try {
    for (; i < fs.length; i++) {
      fs[i](...args2);
    }
  } finally {
    if (i < fs.length) {
      callAll(fs, args2, i + 1);
    }
  }
};
var id = (a) => a;
var equalityStrict = (a, b) => a === b;
var equalityDeep = (a, b) => {
  if (a == null || b == null) {
    return equalityStrict(a, b);
  }
  if (a.constructor !== b.constructor) {
    return false;
  }
  if (a === b) {
    return true;
  }
  switch (a.constructor) {
    case ArrayBuffer:
      a = new Uint8Array(a);
      b = new Uint8Array(b);
    case Uint8Array: {
      if (a.byteLength !== b.byteLength) {
        return false;
      }
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      break;
    }
    case Set: {
      if (a.size !== b.size) {
        return false;
      }
      for (const value of a) {
        if (!b.has(value)) {
          return false;
        }
      }
      break;
    }
    case Map: {
      if (a.size !== b.size) {
        return false;
      }
      for (const key of a.keys()) {
        if (!b.has(key) || !equalityDeep(a.get(key), b.get(key))) {
          return false;
        }
      }
      break;
    }
    case Object:
      if (length2(a) !== length2(b)) {
        return false;
      }
      for (const key in a) {
        if (!hasProperty(a, key) || !equalityDeep(a[key], b[key])) {
          return false;
        }
      }
      break;
    case Array:
      if (a.length !== b.length) {
        return false;
      }
      for (let i = 0; i < a.length; i++) {
        if (!equalityDeep(a[i], b[i])) {
          return false;
        }
      }
      break;
    default:
      return false;
  }
  return true;
};
var isOneOf = (value, options) => options.includes(value);

// node_modules/lib0/environment.js
var isNode = typeof process !== "undefined" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && !isNode;
var isMac = typeof navigator !== "undefined" ? /Mac/.test(navigator.platform) : false;
var params;
var args = [];
var computeParams = () => {
  if (params === void 0) {
    if (isNode) {
      params = create();
      const pargs = process.argv;
      let currParamName = null;
      for (let i = 0; i < pargs.length; i++) {
        const parg = pargs[i];
        if (parg[0] === "-") {
          if (currParamName !== null) {
            params.set(currParamName, "");
          }
          currParamName = parg;
        } else {
          if (currParamName !== null) {
            params.set(currParamName, parg);
            currParamName = null;
          } else {
            args.push(parg);
          }
        }
      }
      if (currParamName !== null) {
        params.set(currParamName, "");
      }
    } else if (typeof location === "object") {
      params = create();
      (location.search || "?").slice(1).split("&").forEach((kv) => {
        if (kv.length !== 0) {
          const [key, value] = kv.split("=");
          params.set(`--${fromCamelCase(key, "-")}`, value);
          params.set(`-${fromCamelCase(key, "-")}`, value);
        }
      });
    } else {
      params = create();
    }
  }
  return params;
};
var hasParam = (name) => computeParams().has(name);
var getVariable = (name) => isNode ? undefinedToNull(process.env[name.toUpperCase().replaceAll("-", "_")]) : undefinedToNull(varStorage.getItem(name));
var hasConf = (name) => hasParam("--" + name) || getVariable(name) !== null;
var production = hasConf("production");
var forceColor = isNode && isOneOf(process.env.FORCE_COLOR, ["true", "1", "2"]);
var supportsColor = !hasParam("--no-colors") && (!isNode || process.stdout.isTTY || forceColor) && (!isNode || hasParam("--color") || forceColor || getVariable("COLORTERM") !== null || (getVariable("TERM") || "").includes("color"));

// node_modules/lib0/buffer.js
var createUint8ArrayFromLen = (len) => new Uint8Array(len);
var createUint8ArrayViewFromArrayBuffer = (buffer, byteOffset, length3) => new Uint8Array(buffer, byteOffset, length3);
var createUint8ArrayFromArrayBuffer = (buffer) => new Uint8Array(buffer);
var toBase64Browser = (bytes) => {
  let s = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    s += fromCharCode(bytes[i]);
  }
  return btoa(s);
};
var toBase64Node = (bytes) => Buffer.from(bytes.buffer, bytes.byteOffset, bytes.byteLength).toString("base64");
var fromBase64Browser = (s) => {
  const a = atob(s);
  const bytes = createUint8ArrayFromLen(a.length);
  for (let i = 0; i < a.length; i++) {
    bytes[i] = a.charCodeAt(i);
  }
  return bytes;
};
var fromBase64Node = (s) => {
  const buf = Buffer.from(s, "base64");
  return createUint8ArrayViewFromArrayBuffer(buf.buffer, buf.byteOffset, buf.byteLength);
};
var toBase64 = isBrowser ? toBase64Browser : toBase64Node;
var fromBase64 = isBrowser ? fromBase64Browser : fromBase64Node;
var copyUint8Array = (uint8Array) => {
  const newBuf = createUint8ArrayFromLen(uint8Array.byteLength);
  newBuf.set(uint8Array);
  return newBuf;
};

// node_modules/lib0/pair.js
var Pair = class {
  /**
   * @param {L} left
   * @param {R} right
   */
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
};
var create5 = (left, right) => new Pair(left, right);

// node_modules/lib0/dom.js
var doc = (
  /** @type {Document} */
  typeof document !== "undefined" ? document : {}
);
var domParser = (
  /** @type {DOMParser} */
  typeof DOMParser !== "undefined" ? new DOMParser() : null
);
var mapToStyleString = (m) => map(m, (value, key) => `${key}:${value};`).join("");
var ELEMENT_NODE = doc.ELEMENT_NODE;
var TEXT_NODE = doc.TEXT_NODE;
var CDATA_SECTION_NODE = doc.CDATA_SECTION_NODE;
var COMMENT_NODE = doc.COMMENT_NODE;
var DOCUMENT_NODE = doc.DOCUMENT_NODE;
var DOCUMENT_TYPE_NODE = doc.DOCUMENT_TYPE_NODE;
var DOCUMENT_FRAGMENT_NODE = doc.DOCUMENT_FRAGMENT_NODE;

// node_modules/lib0/symbol.js
var create6 = Symbol;

// node_modules/lib0/logging.common.js
var BOLD = create6();
var UNBOLD = create6();
var BLUE = create6();
var GREY = create6();
var GREEN = create6();
var RED = create6();
var PURPLE = create6();
var ORANGE = create6();
var UNCOLOR = create6();
var computeNoColorLoggingArgs = (args2) => {
  if (args2.length === 1 && args2[0]?.constructor === Function) {
    args2 = /** @type {Array<string|Symbol|Object|number>} */
    /** @type {[function]} */
    args2[0]();
  }
  const strBuilder = [];
  const logArgs = [];
  let i = 0;
  for (; i < args2.length; i++) {
    const arg = args2[i];
    if (arg === void 0) {
      strBuilder.push("undefined");
    } else if (arg.constructor === String || arg.constructor === Number) {
      strBuilder.push(arg);
    } else if (arg.constructor === Object) {
      logArgs.push(JSON.stringify(arg));
    }
  }
  return logArgs;
};
var lastLoggingTime = getUnixTime();

// node_modules/lib0/logging.js
var _browserStyleMap = {
  [BOLD]: create5("font-weight", "bold"),
  [UNBOLD]: create5("font-weight", "normal"),
  [BLUE]: create5("color", "blue"),
  [GREEN]: create5("color", "green"),
  [GREY]: create5("color", "grey"),
  [RED]: create5("color", "red"),
  [PURPLE]: create5("color", "purple"),
  [ORANGE]: create5("color", "orange"),
  // not well supported in chrome when debugging node with inspector - TODO: deprecate
  [UNCOLOR]: create5("color", "black")
};
var computeBrowserLoggingArgs = (args2) => {
  if (args2.length === 1 && args2[0]?.constructor === Function) {
    args2 = /** @type {Array<string|Symbol|Object|number>} */
    /** @type {[function]} */
    args2[0]();
  }
  const strBuilder = [];
  const styles = [];
  const currentStyle = create();
  let logArgs = [];
  let i = 0;
  for (; i < args2.length; i++) {
    const arg = args2[i];
    const style = _browserStyleMap[arg];
    if (style !== void 0) {
      currentStyle.set(style.left, style.right);
    } else {
      if (arg === void 0) {
        break;
      }
      if (arg.constructor === String || arg.constructor === Number) {
        const style2 = mapToStyleString(currentStyle);
        if (i > 0 || style2.length > 0) {
          strBuilder.push("%c" + arg);
          styles.push(style2);
        } else {
          strBuilder.push(arg);
        }
      } else {
        break;
      }
    }
  }
  if (i > 0) {
    logArgs = styles;
    logArgs.unshift(strBuilder.join(""));
  }
  for (; i < args2.length; i++) {
    const arg = args2[i];
    if (!(arg instanceof Symbol)) {
      logArgs.push(arg);
    }
  }
  return logArgs;
};
var computeLoggingArgs = supportsColor ? computeBrowserLoggingArgs : computeNoColorLoggingArgs;
var print = (...args2) => {
  console.log(...computeLoggingArgs(args2));
  vconsoles.forEach((vc) => vc.print(args2));
};
var vconsoles = create2();

// node_modules/lib0/iterator.js
var createIterator = (next) => ({
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return this;
  },
  // @ts-ignore
  next
});
var iteratorFilter = (iterator, filter) => createIterator(() => {
  let res;
  do {
    res = iterator.next();
  } while (!res.done && !filter(res.value));
  return res;
});
var iteratorMap = (iterator, fmap) => createIterator(() => {
  const { done, value } = iterator.next();
  return { done, value: done ? void 0 : fmap(value) };
});

// node_modules/yjs/dist/yjs.mjs
var DeleteItem = class {
  /**
   * @param {number} clock
   * @param {number} len
   */
  constructor(clock, len) {
    this.clock = clock;
    this.len = len;
  }
};
var DeleteSet = class {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
  }
};
var iterateDeletedStructs = (transaction, ds, f) => ds.clients.forEach((deletes, clientid) => {
  const structs = (
    /** @type {Array<GC|Item>} */
    transaction.doc.store.clients.get(clientid)
  );
  for (let i = 0; i < deletes.length; i++) {
    const del = deletes[i];
    iterateStructs(transaction, structs, del.clock, del.len, f);
  }
});
var findIndexDS = (dis, clock) => {
  let left = 0;
  let right = dis.length - 1;
  while (left <= right) {
    const midindex = floor((left + right) / 2);
    const mid = dis[midindex];
    const midclock = mid.clock;
    if (midclock <= clock) {
      if (clock < midclock + mid.len) {
        return midindex;
      }
      left = midindex + 1;
    } else {
      right = midindex - 1;
    }
  }
  return null;
};
var isDeleted = (ds, id2) => {
  const dis = ds.clients.get(id2.client);
  return dis !== void 0 && findIndexDS(dis, id2.clock) !== null;
};
var sortAndMergeDeleteSet = (ds) => {
  ds.clients.forEach((dels) => {
    dels.sort((a, b) => a.clock - b.clock);
    let i, j;
    for (i = 1, j = 1; i < dels.length; i++) {
      const left = dels[j - 1];
      const right = dels[i];
      if (left.clock + left.len >= right.clock) {
        left.len = max(left.len, right.clock + right.len - left.clock);
      } else {
        if (j < i) {
          dels[j] = right;
        }
        j++;
      }
    }
    dels.length = j;
  });
};
var mergeDeleteSets = (dss) => {
  const merged = new DeleteSet();
  for (let dssI = 0; dssI < dss.length; dssI++) {
    dss[dssI].clients.forEach((delsLeft, client) => {
      if (!merged.clients.has(client)) {
        const dels = delsLeft.slice();
        for (let i = dssI + 1; i < dss.length; i++) {
          appendTo(dels, dss[i].clients.get(client) || []);
        }
        merged.clients.set(client, dels);
      }
    });
  }
  sortAndMergeDeleteSet(merged);
  return merged;
};
var addToDeleteSet = (ds, client, clock, length3) => {
  setIfUndefined(ds.clients, client, () => (
    /** @type {Array<DeleteItem>} */
    []
  )).push(new DeleteItem(clock, length3));
};
var createDeleteSet = () => new DeleteSet();
var createDeleteSetFromStructStore = (ss) => {
  const ds = createDeleteSet();
  ss.clients.forEach((structs, client) => {
    const dsitems = [];
    for (let i = 0; i < structs.length; i++) {
      const struct = structs[i];
      if (struct.deleted) {
        const clock = struct.id.clock;
        let len = struct.length;
        if (i + 1 < structs.length) {
          for (let next = structs[i + 1]; i + 1 < structs.length && next.deleted; next = structs[++i + 1]) {
            len += next.length;
          }
        }
        dsitems.push(new DeleteItem(clock, len));
      }
    }
    if (dsitems.length > 0) {
      ds.clients.set(client, dsitems);
    }
  });
  return ds;
};
var writeDeleteSet = (encoder, ds) => {
  writeVarUint(encoder.restEncoder, ds.clients.size);
  from(ds.clients.entries()).sort((a, b) => b[0] - a[0]).forEach(([client, dsitems]) => {
    encoder.resetDsCurVal();
    writeVarUint(encoder.restEncoder, client);
    const len = dsitems.length;
    writeVarUint(encoder.restEncoder, len);
    for (let i = 0; i < len; i++) {
      const item = dsitems[i];
      encoder.writeDsClock(item.clock);
      encoder.writeDsLen(item.len);
    }
  });
};
var readDeleteSet = (decoder) => {
  const ds = new DeleteSet();
  const numClients = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numClients; i++) {
    decoder.resetDsCurVal();
    const client = readVarUint(decoder.restDecoder);
    const numberOfDeletes = readVarUint(decoder.restDecoder);
    if (numberOfDeletes > 0) {
      const dsField = setIfUndefined(ds.clients, client, () => (
        /** @type {Array<DeleteItem>} */
        []
      ));
      for (let i2 = 0; i2 < numberOfDeletes; i2++) {
        dsField.push(new DeleteItem(decoder.readDsClock(), decoder.readDsLen()));
      }
    }
  }
  return ds;
};
var readAndApplyDeleteSet = (decoder, transaction, store) => {
  const unappliedDS = new DeleteSet();
  const numClients = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numClients; i++) {
    decoder.resetDsCurVal();
    const client = readVarUint(decoder.restDecoder);
    const numberOfDeletes = readVarUint(decoder.restDecoder);
    const structs = store.clients.get(client) || [];
    const state = getState(store, client);
    for (let i2 = 0; i2 < numberOfDeletes; i2++) {
      const clock = decoder.readDsClock();
      const clockEnd = clock + decoder.readDsLen();
      if (clock < state) {
        if (state < clockEnd) {
          addToDeleteSet(unappliedDS, client, state, clockEnd - state);
        }
        let index = findIndexSS(structs, clock);
        let struct = structs[index];
        if (!struct.deleted && struct.id.clock < clock) {
          structs.splice(index + 1, 0, splitItem(transaction, struct, clock - struct.id.clock));
          index++;
        }
        while (index < structs.length) {
          struct = structs[index++];
          if (struct.id.clock < clockEnd) {
            if (!struct.deleted) {
              if (clockEnd < struct.id.clock + struct.length) {
                structs.splice(index, 0, splitItem(transaction, struct, clockEnd - struct.id.clock));
              }
              struct.delete(transaction);
            }
          } else {
            break;
          }
        }
      } else {
        addToDeleteSet(unappliedDS, client, clock, clockEnd - clock);
      }
    }
  }
  if (unappliedDS.clients.size > 0) {
    const ds = new UpdateEncoderV2();
    writeVarUint(ds.restEncoder, 0);
    writeDeleteSet(ds, unappliedDS);
    return ds.toUint8Array();
  }
  return null;
};
var generateNewClientId = uint32;
var Doc = class _Doc extends ObservableV2 {
  /**
   * @param {DocOpts} opts configuration
   */
  constructor({ guid = uuidv4(), collectionid = null, gc = true, gcFilter = () => true, meta = null, autoLoad = false, shouldLoad = true } = {}) {
    super();
    this.gc = gc;
    this.gcFilter = gcFilter;
    this.clientID = generateNewClientId();
    this.guid = guid;
    this.collectionid = collectionid;
    this.share = /* @__PURE__ */ new Map();
    this.store = new StructStore();
    this._transaction = null;
    this._transactionCleanups = [];
    this.subdocs = /* @__PURE__ */ new Set();
    this._item = null;
    this.shouldLoad = shouldLoad;
    this.autoLoad = autoLoad;
    this.meta = meta;
    this.isLoaded = false;
    this.isSynced = false;
    this.whenLoaded = create4((resolve) => {
      this.on("load", () => {
        this.isLoaded = true;
        resolve(this);
      });
    });
    const provideSyncedPromise = () => create4((resolve) => {
      const eventHandler = (isSynced) => {
        if (isSynced === void 0 || isSynced === true) {
          this.off("sync", eventHandler);
          resolve();
        }
      };
      this.on("sync", eventHandler);
    });
    this.on("sync", (isSynced) => {
      if (isSynced === false && this.isSynced) {
        this.whenSynced = provideSyncedPromise();
      }
      this.isSynced = isSynced === void 0 || isSynced === true;
      if (this.isSynced && !this.isLoaded) {
        this.emit("load", [this]);
      }
    });
    this.whenSynced = provideSyncedPromise();
  }
  /**
   * Notify the parent document that you request to load data into this subdocument (if it is a subdocument).
   *
   * `load()` might be used in the future to request any provider to load the most current data.
   *
   * It is safe to call `load()` multiple times.
   */
  load() {
    const item = this._item;
    if (item !== null && !this.shouldLoad) {
      transact(
        /** @type {any} */
        item.parent.doc,
        (transaction) => {
          transaction.subdocsLoaded.add(this);
        },
        null,
        true
      );
    }
    this.shouldLoad = true;
  }
  getSubdocs() {
    return this.subdocs;
  }
  getSubdocGuids() {
    return new Set(from(this.subdocs).map((doc2) => doc2.guid));
  }
  /**
   * Changes that happen inside of a transaction are bundled. This means that
   * the observer fires _after_ the transaction is finished and that all changes
   * that happened inside of the transaction are sent as one message to the
   * other peers.
   *
   * @template T
   * @param {function(Transaction):T} f The function that should be executed as a transaction
   * @param {any} [origin] Origin of who started the transaction. Will be stored on transaction.origin
   * @return T
   *
   * @public
   */
  transact(f, origin = null) {
    return transact(this, f, origin);
  }
  /**
   * Define a shared data type.
   *
   * Multiple calls of `ydoc.get(name, TypeConstructor)` yield the same result
   * and do not overwrite each other. I.e.
   * `ydoc.get(name, Y.Array) === ydoc.get(name, Y.Array)`
   *
   * After this method is called, the type is also available on `ydoc.share.get(name)`.
   *
   * *Best Practices:*
   * Define all types right after the Y.Doc instance is created and store them in a separate object.
   * Also use the typed methods `getText(name)`, `getArray(name)`, ..
   *
   * @template {typeof AbstractType<any>} Type
   * @example
   *   const ydoc = new Y.Doc(..)
   *   const appState = {
   *     document: ydoc.getText('document')
   *     comments: ydoc.getArray('comments')
   *   }
   *
   * @param {string} name
   * @param {Type} TypeConstructor The constructor of the type definition. E.g. Y.Text, Y.Array, Y.Map, ...
   * @return {InstanceType<Type>} The created type. Constructed with TypeConstructor
   *
   * @public
   */
  get(name, TypeConstructor = (
    /** @type {any} */
    AbstractType
  )) {
    const type = setIfUndefined(this.share, name, () => {
      const t = new TypeConstructor();
      t._integrate(this, null);
      return t;
    });
    const Constr = type.constructor;
    if (TypeConstructor !== AbstractType && Constr !== TypeConstructor) {
      if (Constr === AbstractType) {
        const t = new TypeConstructor();
        t._map = type._map;
        type._map.forEach(
          /** @param {Item?} n */
          (n) => {
            for (; n !== null; n = n.left) {
              n.parent = t;
            }
          }
        );
        t._start = type._start;
        for (let n = t._start; n !== null; n = n.right) {
          n.parent = t;
        }
        t._length = type._length;
        this.share.set(name, t);
        t._integrate(this, null);
        return (
          /** @type {InstanceType<Type>} */
          t
        );
      } else {
        throw new Error(`Type with the name ${name} has already been defined with a different constructor`);
      }
    }
    return (
      /** @type {InstanceType<Type>} */
      type
    );
  }
  /**
   * @template T
   * @param {string} [name]
   * @return {YArray<T>}
   *
   * @public
   */
  getArray(name = "") {
    return (
      /** @type {YArray<T>} */
      this.get(name, YArray)
    );
  }
  /**
   * @param {string} [name]
   * @return {YText}
   *
   * @public
   */
  getText(name = "") {
    return this.get(name, YText);
  }
  /**
   * @template T
   * @param {string} [name]
   * @return {YMap<T>}
   *
   * @public
   */
  getMap(name = "") {
    return (
      /** @type {YMap<T>} */
      this.get(name, YMap)
    );
  }
  /**
   * @param {string} [name]
   * @return {YXmlElement}
   *
   * @public
   */
  getXmlElement(name = "") {
    return (
      /** @type {YXmlElement<{[key:string]:string}>} */
      this.get(name, YXmlElement)
    );
  }
  /**
   * @param {string} [name]
   * @return {YXmlFragment}
   *
   * @public
   */
  getXmlFragment(name = "") {
    return this.get(name, YXmlFragment);
  }
  /**
   * Converts the entire document into a js object, recursively traversing each yjs type
   * Doesn't log types that have not been defined (using ydoc.getType(..)).
   *
   * @deprecated Do not use this method and rather call toJSON directly on the shared types.
   *
   * @return {Object<string, any>}
   */
  toJSON() {
    const doc2 = {};
    this.share.forEach((value, key) => {
      doc2[key] = value.toJSON();
    });
    return doc2;
  }
  /**
   * Emit `destroy` event and unregister all event handlers.
   */
  destroy() {
    from(this.subdocs).forEach((subdoc) => subdoc.destroy());
    const item = this._item;
    if (item !== null) {
      this._item = null;
      const content = (
        /** @type {ContentDoc} */
        item.content
      );
      content.doc = new _Doc({ guid: this.guid, ...content.opts, shouldLoad: false });
      content.doc._item = item;
      transact(
        /** @type {any} */
        item.parent.doc,
        (transaction) => {
          const doc2 = content.doc;
          if (!item.deleted) {
            transaction.subdocsAdded.add(doc2);
          }
          transaction.subdocsRemoved.add(this);
        },
        null,
        true
      );
    }
    this.emit("destroyed", [true]);
    this.emit("destroy", [this]);
    super.destroy();
  }
};
var DSDecoderV1 = class {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(decoder) {
    this.restDecoder = decoder;
  }
  resetDsCurVal() {
  }
  /**
   * @return {number}
   */
  readDsClock() {
    return readVarUint(this.restDecoder);
  }
  /**
   * @return {number}
   */
  readDsLen() {
    return readVarUint(this.restDecoder);
  }
};
var UpdateDecoderV1 = class extends DSDecoderV1 {
  /**
   * @return {ID}
   */
  readLeftID() {
    return createID(readVarUint(this.restDecoder), readVarUint(this.restDecoder));
  }
  /**
   * @return {ID}
   */
  readRightID() {
    return createID(readVarUint(this.restDecoder), readVarUint(this.restDecoder));
  }
  /**
   * Read the next client id.
   * Use this in favor of readID whenever possible to reduce the number of objects created.
   */
  readClient() {
    return readVarUint(this.restDecoder);
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readInfo() {
    return readUint8(this.restDecoder);
  }
  /**
   * @return {string}
   */
  readString() {
    return readVarString(this.restDecoder);
  }
  /**
   * @return {boolean} isKey
   */
  readParentInfo() {
    return readVarUint(this.restDecoder) === 1;
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readTypeRef() {
    return readVarUint(this.restDecoder);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @return {number} len
   */
  readLen() {
    return readVarUint(this.restDecoder);
  }
  /**
   * @return {any}
   */
  readAny() {
    return readAny(this.restDecoder);
  }
  /**
   * @return {Uint8Array}
   */
  readBuf() {
    return copyUint8Array(readVarUint8Array(this.restDecoder));
  }
  /**
   * Legacy implementation uses JSON parse. We use any-decoding in v2.
   *
   * @return {any}
   */
  readJSON() {
    return JSON.parse(readVarString(this.restDecoder));
  }
  /**
   * @return {string}
   */
  readKey() {
    return readVarString(this.restDecoder);
  }
};
var DSDecoderV2 = class {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(decoder) {
    this.dsCurrVal = 0;
    this.restDecoder = decoder;
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @return {number}
   */
  readDsClock() {
    this.dsCurrVal += readVarUint(this.restDecoder);
    return this.dsCurrVal;
  }
  /**
   * @return {number}
   */
  readDsLen() {
    const diff = readVarUint(this.restDecoder) + 1;
    this.dsCurrVal += diff;
    return diff;
  }
};
var UpdateDecoderV2 = class extends DSDecoderV2 {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(decoder) {
    super(decoder);
    this.keys = [];
    readVarUint(decoder);
    this.keyClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
    this.clientDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
    this.leftClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
    this.rightClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
    this.infoDecoder = new RleDecoder(readVarUint8Array(decoder), readUint8);
    this.stringDecoder = new StringDecoder(readVarUint8Array(decoder));
    this.parentInfoDecoder = new RleDecoder(readVarUint8Array(decoder), readUint8);
    this.typeRefDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
    this.lenDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
  }
  /**
   * @return {ID}
   */
  readLeftID() {
    return new ID(this.clientDecoder.read(), this.leftClockDecoder.read());
  }
  /**
   * @return {ID}
   */
  readRightID() {
    return new ID(this.clientDecoder.read(), this.rightClockDecoder.read());
  }
  /**
   * Read the next client id.
   * Use this in favor of readID whenever possible to reduce the number of objects created.
   */
  readClient() {
    return this.clientDecoder.read();
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readInfo() {
    return (
      /** @type {number} */
      this.infoDecoder.read()
    );
  }
  /**
   * @return {string}
   */
  readString() {
    return this.stringDecoder.read();
  }
  /**
   * @return {boolean}
   */
  readParentInfo() {
    return this.parentInfoDecoder.read() === 1;
  }
  /**
   * @return {number} An unsigned 8-bit integer
   */
  readTypeRef() {
    return this.typeRefDecoder.read();
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @return {number}
   */
  readLen() {
    return this.lenDecoder.read();
  }
  /**
   * @return {any}
   */
  readAny() {
    return readAny(this.restDecoder);
  }
  /**
   * @return {Uint8Array}
   */
  readBuf() {
    return readVarUint8Array(this.restDecoder);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @return {any}
   */
  readJSON() {
    return readAny(this.restDecoder);
  }
  /**
   * @return {string}
   */
  readKey() {
    const keyClock = this.keyClockDecoder.read();
    if (keyClock < this.keys.length) {
      return this.keys[keyClock];
    } else {
      const key = this.stringDecoder.read();
      this.keys.push(key);
      return key;
    }
  }
};
var DSEncoderV1 = class {
  constructor() {
    this.restEncoder = createEncoder();
  }
  toUint8Array() {
    return toUint8Array(this.restEncoder);
  }
  resetDsCurVal() {
  }
  /**
   * @param {number} clock
   */
  writeDsClock(clock) {
    writeVarUint(this.restEncoder, clock);
  }
  /**
   * @param {number} len
   */
  writeDsLen(len) {
    writeVarUint(this.restEncoder, len);
  }
};
var UpdateEncoderV1 = class extends DSEncoderV1 {
  /**
   * @param {ID} id
   */
  writeLeftID(id2) {
    writeVarUint(this.restEncoder, id2.client);
    writeVarUint(this.restEncoder, id2.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(id2) {
    writeVarUint(this.restEncoder, id2.client);
    writeVarUint(this.restEncoder, id2.clock);
  }
  /**
   * Use writeClient and writeClock instead of writeID if possible.
   * @param {number} client
   */
  writeClient(client) {
    writeVarUint(this.restEncoder, client);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(info) {
    writeUint8(this.restEncoder, info);
  }
  /**
   * @param {string} s
   */
  writeString(s) {
    writeVarString(this.restEncoder, s);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(isYKey) {
    writeVarUint(this.restEncoder, isYKey ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(info) {
    writeVarUint(this.restEncoder, info);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(len) {
    writeVarUint(this.restEncoder, len);
  }
  /**
   * @param {any} any
   */
  writeAny(any2) {
    writeAny(this.restEncoder, any2);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(buf) {
    writeVarUint8Array(this.restEncoder, buf);
  }
  /**
   * @param {any} embed
   */
  writeJSON(embed) {
    writeVarString(this.restEncoder, JSON.stringify(embed));
  }
  /**
   * @param {string} key
   */
  writeKey(key) {
    writeVarString(this.restEncoder, key);
  }
};
var DSEncoderV2 = class {
  constructor() {
    this.restEncoder = createEncoder();
    this.dsCurrVal = 0;
  }
  toUint8Array() {
    return toUint8Array(this.restEncoder);
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @param {number} clock
   */
  writeDsClock(clock) {
    const diff = clock - this.dsCurrVal;
    this.dsCurrVal = clock;
    writeVarUint(this.restEncoder, diff);
  }
  /**
   * @param {number} len
   */
  writeDsLen(len) {
    if (len === 0) {
      unexpectedCase();
    }
    writeVarUint(this.restEncoder, len - 1);
    this.dsCurrVal += len;
  }
};
var UpdateEncoderV2 = class extends DSEncoderV2 {
  constructor() {
    super();
    this.keyMap = /* @__PURE__ */ new Map();
    this.keyClock = 0;
    this.keyClockEncoder = new IntDiffOptRleEncoder();
    this.clientEncoder = new UintOptRleEncoder();
    this.leftClockEncoder = new IntDiffOptRleEncoder();
    this.rightClockEncoder = new IntDiffOptRleEncoder();
    this.infoEncoder = new RleEncoder(writeUint8);
    this.stringEncoder = new StringEncoder();
    this.parentInfoEncoder = new RleEncoder(writeUint8);
    this.typeRefEncoder = new UintOptRleEncoder();
    this.lenEncoder = new UintOptRleEncoder();
  }
  toUint8Array() {
    const encoder = createEncoder();
    writeVarUint(encoder, 0);
    writeVarUint8Array(encoder, this.keyClockEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.clientEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.leftClockEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.rightClockEncoder.toUint8Array());
    writeVarUint8Array(encoder, toUint8Array(this.infoEncoder));
    writeVarUint8Array(encoder, this.stringEncoder.toUint8Array());
    writeVarUint8Array(encoder, toUint8Array(this.parentInfoEncoder));
    writeVarUint8Array(encoder, this.typeRefEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.lenEncoder.toUint8Array());
    writeUint8Array(encoder, toUint8Array(this.restEncoder));
    return toUint8Array(encoder);
  }
  /**
   * @param {ID} id
   */
  writeLeftID(id2) {
    this.clientEncoder.write(id2.client);
    this.leftClockEncoder.write(id2.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(id2) {
    this.clientEncoder.write(id2.client);
    this.rightClockEncoder.write(id2.clock);
  }
  /**
   * @param {number} client
   */
  writeClient(client) {
    this.clientEncoder.write(client);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(info) {
    this.infoEncoder.write(info);
  }
  /**
   * @param {string} s
   */
  writeString(s) {
    this.stringEncoder.write(s);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(isYKey) {
    this.parentInfoEncoder.write(isYKey ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(info) {
    this.typeRefEncoder.write(info);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(len) {
    this.lenEncoder.write(len);
  }
  /**
   * @param {any} any
   */
  writeAny(any2) {
    writeAny(this.restEncoder, any2);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(buf) {
    writeVarUint8Array(this.restEncoder, buf);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @param {any} embed
   */
  writeJSON(embed) {
    writeAny(this.restEncoder, embed);
  }
  /**
   * Property keys are often reused. For example, in y-prosemirror the key `bold` might
   * occur very often. For a 3d application, the key `position` might occur very often.
   *
   * We cache these keys in a Map and refer to them via a unique number.
   *
   * @param {string} key
   */
  writeKey(key) {
    const clock = this.keyMap.get(key);
    if (clock === void 0) {
      this.keyClockEncoder.write(this.keyClock++);
      this.stringEncoder.write(key);
    } else {
      this.keyClockEncoder.write(clock);
    }
  }
};
var writeStructs = (encoder, structs, client, clock) => {
  clock = max(clock, structs[0].id.clock);
  const startNewStructs = findIndexSS(structs, clock);
  writeVarUint(encoder.restEncoder, structs.length - startNewStructs);
  encoder.writeClient(client);
  writeVarUint(encoder.restEncoder, clock);
  const firstStruct = structs[startNewStructs];
  firstStruct.write(encoder, clock - firstStruct.id.clock);
  for (let i = startNewStructs + 1; i < structs.length; i++) {
    structs[i].write(encoder, 0);
  }
};
var writeClientsStructs = (encoder, store, _sm) => {
  const sm = /* @__PURE__ */ new Map();
  _sm.forEach((clock, client) => {
    if (getState(store, client) > clock) {
      sm.set(client, clock);
    }
  });
  getStateVector(store).forEach((_clock, client) => {
    if (!_sm.has(client)) {
      sm.set(client, 0);
    }
  });
  writeVarUint(encoder.restEncoder, sm.size);
  from(sm.entries()).sort((a, b) => b[0] - a[0]).forEach(([client, clock]) => {
    writeStructs(
      encoder,
      /** @type {Array<GC|Item>} */
      store.clients.get(client),
      client,
      clock
    );
  });
};
var readClientsStructRefs = (decoder, doc2) => {
  const clientRefs = create();
  const numOfStateUpdates = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numOfStateUpdates; i++) {
    const numberOfStructs = readVarUint(decoder.restDecoder);
    const refs = new Array(numberOfStructs);
    const client = decoder.readClient();
    let clock = readVarUint(decoder.restDecoder);
    clientRefs.set(client, { i: 0, refs });
    for (let i2 = 0; i2 < numberOfStructs; i2++) {
      const info = decoder.readInfo();
      switch (BITS5 & info) {
        case 0: {
          const len = decoder.readLen();
          refs[i2] = new GC(createID(client, clock), len);
          clock += len;
          break;
        }
        case 10: {
          const len = readVarUint(decoder.restDecoder);
          refs[i2] = new Skip(createID(client, clock), len);
          clock += len;
          break;
        }
        default: {
          const cantCopyParentInfo = (info & (BIT7 | BIT8)) === 0;
          const struct = new Item(
            createID(client, clock),
            null,
            // left
            (info & BIT8) === BIT8 ? decoder.readLeftID() : null,
            // origin
            null,
            // right
            (info & BIT7) === BIT7 ? decoder.readRightID() : null,
            // right origin
            cantCopyParentInfo ? decoder.readParentInfo() ? doc2.get(decoder.readString()) : decoder.readLeftID() : null,
            // parent
            cantCopyParentInfo && (info & BIT6) === BIT6 ? decoder.readString() : null,
            // parentSub
            readItemContent(decoder, info)
            // item content
          );
          refs[i2] = struct;
          clock += struct.length;
        }
      }
    }
  }
  return clientRefs;
};
var integrateStructs = (transaction, store, clientsStructRefs) => {
  const stack = [];
  let clientsStructRefsIds = from(clientsStructRefs.keys()).sort((a, b) => a - b);
  if (clientsStructRefsIds.length === 0) {
    return null;
  }
  const getNextStructTarget = () => {
    if (clientsStructRefsIds.length === 0) {
      return null;
    }
    let nextStructsTarget = (
      /** @type {{i:number,refs:Array<GC|Item>}} */
      clientsStructRefs.get(clientsStructRefsIds[clientsStructRefsIds.length - 1])
    );
    while (nextStructsTarget.refs.length === nextStructsTarget.i) {
      clientsStructRefsIds.pop();
      if (clientsStructRefsIds.length > 0) {
        nextStructsTarget = /** @type {{i:number,refs:Array<GC|Item>}} */
        clientsStructRefs.get(clientsStructRefsIds[clientsStructRefsIds.length - 1]);
      } else {
        return null;
      }
    }
    return nextStructsTarget;
  };
  let curStructsTarget = getNextStructTarget();
  if (curStructsTarget === null) {
    return null;
  }
  const restStructs = new StructStore();
  const missingSV = /* @__PURE__ */ new Map();
  const updateMissingSv = (client, clock) => {
    const mclock = missingSV.get(client);
    if (mclock == null || mclock > clock) {
      missingSV.set(client, clock);
    }
  };
  let stackHead = (
    /** @type {any} */
    curStructsTarget.refs[
      /** @type {any} */
      curStructsTarget.i++
    ]
  );
  const state = /* @__PURE__ */ new Map();
  const addStackToRestSS = () => {
    for (const item of stack) {
      const client = item.id.client;
      const unapplicableItems = clientsStructRefs.get(client);
      if (unapplicableItems) {
        unapplicableItems.i--;
        restStructs.clients.set(client, unapplicableItems.refs.slice(unapplicableItems.i));
        clientsStructRefs.delete(client);
        unapplicableItems.i = 0;
        unapplicableItems.refs = [];
      } else {
        restStructs.clients.set(client, [item]);
      }
      clientsStructRefsIds = clientsStructRefsIds.filter((c) => c !== client);
    }
    stack.length = 0;
  };
  while (true) {
    if (stackHead.constructor !== Skip) {
      const localClock = setIfUndefined(state, stackHead.id.client, () => getState(store, stackHead.id.client));
      const offset = localClock - stackHead.id.clock;
      if (offset < 0) {
        stack.push(stackHead);
        updateMissingSv(stackHead.id.client, stackHead.id.clock - 1);
        addStackToRestSS();
      } else {
        const missing = stackHead.getMissing(transaction, store);
        if (missing !== null) {
          stack.push(stackHead);
          const structRefs = clientsStructRefs.get(
            /** @type {number} */
            missing
          ) || { refs: [], i: 0 };
          if (structRefs.refs.length === structRefs.i) {
            updateMissingSv(
              /** @type {number} */
              missing,
              getState(store, missing)
            );
            addStackToRestSS();
          } else {
            stackHead = structRefs.refs[structRefs.i++];
            continue;
          }
        } else if (offset === 0 || offset < stackHead.length) {
          stackHead.integrate(transaction, offset);
          state.set(stackHead.id.client, stackHead.id.clock + stackHead.length);
        }
      }
    }
    if (stack.length > 0) {
      stackHead = /** @type {GC|Item} */
      stack.pop();
    } else if (curStructsTarget !== null && curStructsTarget.i < curStructsTarget.refs.length) {
      stackHead = /** @type {GC|Item} */
      curStructsTarget.refs[curStructsTarget.i++];
    } else {
      curStructsTarget = getNextStructTarget();
      if (curStructsTarget === null) {
        break;
      } else {
        stackHead = /** @type {GC|Item} */
        curStructsTarget.refs[curStructsTarget.i++];
      }
    }
  }
  if (restStructs.clients.size > 0) {
    const encoder = new UpdateEncoderV2();
    writeClientsStructs(encoder, restStructs, /* @__PURE__ */ new Map());
    writeVarUint(encoder.restEncoder, 0);
    return { missing: missingSV, update: encoder.toUint8Array() };
  }
  return null;
};
var writeStructsFromTransaction = (encoder, transaction) => writeClientsStructs(encoder, transaction.doc.store, transaction.beforeState);
var readUpdateV2 = (decoder, ydoc, transactionOrigin, structDecoder = new UpdateDecoderV2(decoder)) => transact(ydoc, (transaction) => {
  transaction.local = false;
  let retry = false;
  const doc2 = transaction.doc;
  const store = doc2.store;
  const ss = readClientsStructRefs(structDecoder, doc2);
  const restStructs = integrateStructs(transaction, store, ss);
  const pending = store.pendingStructs;
  if (pending) {
    for (const [client, clock] of pending.missing) {
      if (clock < getState(store, client)) {
        retry = true;
        break;
      }
    }
    if (restStructs) {
      for (const [client, clock] of restStructs.missing) {
        const mclock = pending.missing.get(client);
        if (mclock == null || mclock > clock) {
          pending.missing.set(client, clock);
        }
      }
      pending.update = mergeUpdatesV2([pending.update, restStructs.update]);
    }
  } else {
    store.pendingStructs = restStructs;
  }
  const dsRest = readAndApplyDeleteSet(structDecoder, transaction, store);
  if (store.pendingDs) {
    const pendingDSUpdate = new UpdateDecoderV2(createDecoder(store.pendingDs));
    readVarUint(pendingDSUpdate.restDecoder);
    const dsRest2 = readAndApplyDeleteSet(pendingDSUpdate, transaction, store);
    if (dsRest && dsRest2) {
      store.pendingDs = mergeUpdatesV2([dsRest, dsRest2]);
    } else {
      store.pendingDs = dsRest || dsRest2;
    }
  } else {
    store.pendingDs = dsRest;
  }
  if (retry) {
    const update = (
      /** @type {{update: Uint8Array}} */
      store.pendingStructs.update
    );
    store.pendingStructs = null;
    applyUpdateV2(transaction.doc, update);
  }
}, transactionOrigin, false);
var applyUpdateV2 = (ydoc, update, transactionOrigin, YDecoder = UpdateDecoderV2) => {
  const decoder = createDecoder(update);
  readUpdateV2(decoder, ydoc, transactionOrigin, new YDecoder(decoder));
};
var applyUpdate = (ydoc, update, transactionOrigin) => applyUpdateV2(ydoc, update, transactionOrigin, UpdateDecoderV1);
var writeStateAsUpdate = (encoder, doc2, targetStateVector = /* @__PURE__ */ new Map()) => {
  writeClientsStructs(encoder, doc2.store, targetStateVector);
  writeDeleteSet(encoder, createDeleteSetFromStructStore(doc2.store));
};
var encodeStateAsUpdateV2 = (doc2, encodedTargetStateVector = new Uint8Array([0]), encoder = new UpdateEncoderV2()) => {
  const targetStateVector = decodeStateVector(encodedTargetStateVector);
  writeStateAsUpdate(encoder, doc2, targetStateVector);
  const updates = [encoder.toUint8Array()];
  if (doc2.store.pendingDs) {
    updates.push(doc2.store.pendingDs);
  }
  if (doc2.store.pendingStructs) {
    updates.push(diffUpdateV2(doc2.store.pendingStructs.update, encodedTargetStateVector));
  }
  if (updates.length > 1) {
    if (encoder.constructor === UpdateEncoderV1) {
      return mergeUpdates(updates.map((update, i) => i === 0 ? update : convertUpdateFormatV2ToV1(update)));
    } else if (encoder.constructor === UpdateEncoderV2) {
      return mergeUpdatesV2(updates);
    }
  }
  return updates[0];
};
var encodeStateAsUpdate = (doc2, encodedTargetStateVector) => encodeStateAsUpdateV2(doc2, encodedTargetStateVector, new UpdateEncoderV1());
var readStateVector = (decoder) => {
  const ss = /* @__PURE__ */ new Map();
  const ssLength = readVarUint(decoder.restDecoder);
  for (let i = 0; i < ssLength; i++) {
    const client = readVarUint(decoder.restDecoder);
    const clock = readVarUint(decoder.restDecoder);
    ss.set(client, clock);
  }
  return ss;
};
var decodeStateVector = (decodedState) => readStateVector(new DSDecoderV1(createDecoder(decodedState)));
var writeStateVector = (encoder, sv) => {
  writeVarUint(encoder.restEncoder, sv.size);
  from(sv.entries()).sort((a, b) => b[0] - a[0]).forEach(([client, clock]) => {
    writeVarUint(encoder.restEncoder, client);
    writeVarUint(encoder.restEncoder, clock);
  });
  return encoder;
};
var writeDocumentStateVector = (encoder, doc2) => writeStateVector(encoder, getStateVector(doc2.store));
var encodeStateVectorV2 = (doc2, encoder = new DSEncoderV2()) => {
  if (doc2 instanceof Map) {
    writeStateVector(encoder, doc2);
  } else {
    writeDocumentStateVector(encoder, doc2);
  }
  return encoder.toUint8Array();
};
var encodeStateVector = (doc2) => encodeStateVectorV2(doc2, new DSEncoderV1());
var EventHandler = class {
  constructor() {
    this.l = [];
  }
};
var createEventHandler = () => new EventHandler();
var addEventHandlerListener = (eventHandler, f) => eventHandler.l.push(f);
var removeEventHandlerListener = (eventHandler, f) => {
  const l = eventHandler.l;
  const len = l.length;
  eventHandler.l = l.filter((g) => f !== g);
  if (len === eventHandler.l.length) {
    console.error("[yjs] Tried to remove event handler that doesn't exist.");
  }
};
var callEventHandlerListeners = (eventHandler, arg0, arg1) => callAll(eventHandler.l, [arg0, arg1]);
var ID = class {
  /**
   * @param {number} client client id
   * @param {number} clock unique per client id, continuous number
   */
  constructor(client, clock) {
    this.client = client;
    this.clock = clock;
  }
};
var compareIDs = (a, b) => a === b || a !== null && b !== null && a.client === b.client && a.clock === b.clock;
var createID = (client, clock) => new ID(client, clock);
var findRootTypeKey = (type) => {
  for (const [key, value] of type.doc.share.entries()) {
    if (value === type) {
      return key;
    }
  }
  throw unexpectedCase();
};
var RelativePosition = class {
  /**
   * @param {ID|null} type
   * @param {string|null} tname
   * @param {ID|null} item
   * @param {number} assoc
   */
  constructor(type, tname, item, assoc = 0) {
    this.type = type;
    this.tname = tname;
    this.item = item;
    this.assoc = assoc;
  }
};
var createRelativePositionFromJSON = (json) => new RelativePosition(json.type == null ? null : createID(json.type.client, json.type.clock), json.tname ?? null, json.item == null ? null : createID(json.item.client, json.item.clock), json.assoc == null ? 0 : json.assoc);
var AbsolutePosition = class {
  /**
   * @param {AbstractType<any>} type
   * @param {number} index
   * @param {number} [assoc]
   */
  constructor(type, index, assoc = 0) {
    this.type = type;
    this.index = index;
    this.assoc = assoc;
  }
};
var createAbsolutePosition = (type, index, assoc = 0) => new AbsolutePosition(type, index, assoc);
var createRelativePosition = (type, item, assoc) => {
  let typeid = null;
  let tname = null;
  if (type._item === null) {
    tname = findRootTypeKey(type);
  } else {
    typeid = createID(type._item.id.client, type._item.id.clock);
  }
  return new RelativePosition(typeid, tname, item, assoc);
};
var createRelativePositionFromTypeIndex = (type, index, assoc = 0) => {
  let t = type._start;
  if (assoc < 0) {
    if (index === 0) {
      return createRelativePosition(type, null, assoc);
    }
    index--;
  }
  while (t !== null) {
    if (!t.deleted && t.countable) {
      if (t.length > index) {
        return createRelativePosition(type, createID(t.id.client, t.id.clock + index), assoc);
      }
      index -= t.length;
    }
    if (t.right === null && assoc < 0) {
      return createRelativePosition(type, t.lastId, assoc);
    }
    t = t.right;
  }
  return createRelativePosition(type, null, assoc);
};
var createAbsolutePositionFromRelativePosition = (rpos, doc2, followUndoneDeletions = true) => {
  const store = doc2.store;
  const rightID = rpos.item;
  const typeID = rpos.type;
  const tname = rpos.tname;
  const assoc = rpos.assoc;
  let type = null;
  let index = 0;
  if (rightID !== null) {
    if (getState(store, rightID.client) <= rightID.clock) {
      return null;
    }
    const res = followUndoneDeletions ? followRedone(store, rightID) : { item: getItem(store, rightID), diff: 0 };
    const right = res.item;
    if (!(right instanceof Item)) {
      return null;
    }
    type = /** @type {AbstractType<any>} */
    right.parent;
    if (type._item === null || !type._item.deleted) {
      index = right.deleted || !right.countable ? 0 : res.diff + (assoc >= 0 ? 0 : 1);
      let n = right.left;
      while (n !== null) {
        if (!n.deleted && n.countable) {
          index += n.length;
        }
        n = n.left;
      }
    }
  } else {
    if (tname !== null) {
      type = doc2.get(tname);
    } else if (typeID !== null) {
      if (getState(store, typeID.client) <= typeID.clock) {
        return null;
      }
      const { item } = followUndoneDeletions ? followRedone(store, typeID) : { item: getItem(store, typeID) };
      if (item instanceof Item && item.content instanceof ContentType) {
        type = item.content.type;
      } else {
        return null;
      }
    } else {
      throw unexpectedCase();
    }
    if (assoc >= 0) {
      index = type._length;
    } else {
      index = 0;
    }
  }
  return createAbsolutePosition(type, index, rpos.assoc);
};
var compareRelativePositions = (a, b) => a === b || a !== null && b !== null && a.tname === b.tname && compareIDs(a.item, b.item) && compareIDs(a.type, b.type) && a.assoc === b.assoc;
var Snapshot = class {
  /**
   * @param {DeleteSet} ds
   * @param {Map<number,number>} sv state map
   */
  constructor(ds, sv) {
    this.ds = ds;
    this.sv = sv;
  }
};
var createSnapshot = (ds, sm) => new Snapshot(ds, sm);
var emptySnapshot = createSnapshot(createDeleteSet(), /* @__PURE__ */ new Map());
var isVisible = (item, snapshot) => snapshot === void 0 ? !item.deleted : snapshot.sv.has(item.id.client) && (snapshot.sv.get(item.id.client) || 0) > item.id.clock && !isDeleted(snapshot.ds, item.id);
var splitSnapshotAffectedStructs = (transaction, snapshot) => {
  const meta = setIfUndefined(transaction.meta, splitSnapshotAffectedStructs, create2);
  const store = transaction.doc.store;
  if (!meta.has(snapshot)) {
    snapshot.sv.forEach((clock, client) => {
      if (clock < getState(store, client)) {
        getItemCleanStart(transaction, createID(client, clock));
      }
    });
    iterateDeletedStructs(transaction, snapshot.ds, (_item) => {
    });
    meta.add(snapshot);
  }
};
var StructStore = class {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
    this.pendingStructs = null;
    this.pendingDs = null;
  }
};
var getStateVector = (store) => {
  const sm = /* @__PURE__ */ new Map();
  store.clients.forEach((structs, client) => {
    const struct = structs[structs.length - 1];
    sm.set(client, struct.id.clock + struct.length);
  });
  return sm;
};
var getState = (store, client) => {
  const structs = store.clients.get(client);
  if (structs === void 0) {
    return 0;
  }
  const lastStruct = structs[structs.length - 1];
  return lastStruct.id.clock + lastStruct.length;
};
var addStruct = (store, struct) => {
  let structs = store.clients.get(struct.id.client);
  if (structs === void 0) {
    structs = [];
    store.clients.set(struct.id.client, structs);
  } else {
    const lastStruct = structs[structs.length - 1];
    if (lastStruct.id.clock + lastStruct.length !== struct.id.clock) {
      throw unexpectedCase();
    }
  }
  structs.push(struct);
};
var findIndexSS = (structs, clock) => {
  let left = 0;
  let right = structs.length - 1;
  let mid = structs[right];
  let midclock = mid.id.clock;
  if (midclock === clock) {
    return right;
  }
  let midindex = floor(clock / (midclock + mid.length - 1) * right);
  while (left <= right) {
    mid = structs[midindex];
    midclock = mid.id.clock;
    if (midclock <= clock) {
      if (clock < midclock + mid.length) {
        return midindex;
      }
      left = midindex + 1;
    } else {
      right = midindex - 1;
    }
    midindex = floor((left + right) / 2);
  }
  throw unexpectedCase();
};
var find = (store, id2) => {
  const structs = store.clients.get(id2.client);
  return structs[findIndexSS(structs, id2.clock)];
};
var getItem = (
  /** @type {function(StructStore,ID):Item} */
  find
);
var findIndexCleanStart = (transaction, structs, clock) => {
  const index = findIndexSS(structs, clock);
  const struct = structs[index];
  if (struct.id.clock < clock && struct instanceof Item) {
    structs.splice(index + 1, 0, splitItem(transaction, struct, clock - struct.id.clock));
    return index + 1;
  }
  return index;
};
var getItemCleanStart = (transaction, id2) => {
  const structs = (
    /** @type {Array<Item>} */
    transaction.doc.store.clients.get(id2.client)
  );
  return structs[findIndexCleanStart(transaction, structs, id2.clock)];
};
var getItemCleanEnd = (transaction, store, id2) => {
  const structs = store.clients.get(id2.client);
  const index = findIndexSS(structs, id2.clock);
  const struct = structs[index];
  if (id2.clock !== struct.id.clock + struct.length - 1 && struct.constructor !== GC) {
    structs.splice(index + 1, 0, splitItem(transaction, struct, id2.clock - struct.id.clock + 1));
  }
  return struct;
};
var replaceStruct = (store, struct, newStruct) => {
  const structs = (
    /** @type {Array<GC|Item>} */
    store.clients.get(struct.id.client)
  );
  structs[findIndexSS(structs, struct.id.clock)] = newStruct;
};
var iterateStructs = (transaction, structs, clockStart, len, f) => {
  if (len === 0) {
    return;
  }
  const clockEnd = clockStart + len;
  let index = findIndexCleanStart(transaction, structs, clockStart);
  let struct;
  do {
    struct = structs[index++];
    if (clockEnd < struct.id.clock + struct.length) {
      findIndexCleanStart(transaction, structs, clockEnd);
    }
    f(struct);
  } while (index < structs.length && structs[index].id.clock < clockEnd);
};
var Transaction = class {
  /**
   * @param {Doc} doc
   * @param {any} origin
   * @param {boolean} local
   */
  constructor(doc2, origin, local) {
    this.doc = doc2;
    this.deleteSet = new DeleteSet();
    this.beforeState = getStateVector(doc2.store);
    this.afterState = /* @__PURE__ */ new Map();
    this.changed = /* @__PURE__ */ new Map();
    this.changedParentTypes = /* @__PURE__ */ new Map();
    this._mergeStructs = [];
    this.origin = origin;
    this.meta = /* @__PURE__ */ new Map();
    this.local = local;
    this.subdocsAdded = /* @__PURE__ */ new Set();
    this.subdocsRemoved = /* @__PURE__ */ new Set();
    this.subdocsLoaded = /* @__PURE__ */ new Set();
    this._needFormattingCleanup = false;
  }
};
var writeUpdateMessageFromTransaction = (encoder, transaction) => {
  if (transaction.deleteSet.clients.size === 0 && !any(transaction.afterState, (clock, client) => transaction.beforeState.get(client) !== clock)) {
    return false;
  }
  sortAndMergeDeleteSet(transaction.deleteSet);
  writeStructsFromTransaction(encoder, transaction);
  writeDeleteSet(encoder, transaction.deleteSet);
  return true;
};
var addChangedTypeToTransaction = (transaction, type, parentSub) => {
  const item = type._item;
  if (item === null || item.id.clock < (transaction.beforeState.get(item.id.client) || 0) && !item.deleted) {
    setIfUndefined(transaction.changed, type, create2).add(parentSub);
  }
};
var tryToMergeWithLefts = (structs, pos) => {
  let right = structs[pos];
  let left = structs[pos - 1];
  let i = pos;
  for (; i > 0; right = left, left = structs[--i - 1]) {
    if (left.deleted === right.deleted && left.constructor === right.constructor) {
      if (left.mergeWith(right)) {
        if (right instanceof Item && right.parentSub !== null && /** @type {AbstractType<any>} */
        right.parent._map.get(right.parentSub) === right) {
          right.parent._map.set(
            right.parentSub,
            /** @type {Item} */
            left
          );
        }
        continue;
      }
    }
    break;
  }
  const merged = pos - i;
  if (merged) {
    structs.splice(pos + 1 - merged, merged);
  }
  return merged;
};
var tryGcDeleteSet = (ds, store, gcFilter) => {
  for (const [client, deleteItems] of ds.clients.entries()) {
    const structs = (
      /** @type {Array<GC|Item>} */
      store.clients.get(client)
    );
    for (let di = deleteItems.length - 1; di >= 0; di--) {
      const deleteItem = deleteItems[di];
      const endDeleteItemClock = deleteItem.clock + deleteItem.len;
      for (let si = findIndexSS(structs, deleteItem.clock), struct = structs[si]; si < structs.length && struct.id.clock < endDeleteItemClock; struct = structs[++si]) {
        const struct2 = structs[si];
        if (deleteItem.clock + deleteItem.len <= struct2.id.clock) {
          break;
        }
        if (struct2 instanceof Item && struct2.deleted && !struct2.keep && gcFilter(struct2)) {
          struct2.gc(store, false);
        }
      }
    }
  }
};
var tryMergeDeleteSet = (ds, store) => {
  ds.clients.forEach((deleteItems, client) => {
    const structs = (
      /** @type {Array<GC|Item>} */
      store.clients.get(client)
    );
    for (let di = deleteItems.length - 1; di >= 0; di--) {
      const deleteItem = deleteItems[di];
      const mostRightIndexToCheck = min(structs.length - 1, 1 + findIndexSS(structs, deleteItem.clock + deleteItem.len - 1));
      for (let si = mostRightIndexToCheck, struct = structs[si]; si > 0 && struct.id.clock >= deleteItem.clock; struct = structs[si]) {
        si -= 1 + tryToMergeWithLefts(structs, si);
      }
    }
  });
};
var cleanupTransactions = (transactionCleanups, i) => {
  if (i < transactionCleanups.length) {
    const transaction = transactionCleanups[i];
    const doc2 = transaction.doc;
    const store = doc2.store;
    const ds = transaction.deleteSet;
    const mergeStructs = transaction._mergeStructs;
    try {
      sortAndMergeDeleteSet(ds);
      transaction.afterState = getStateVector(transaction.doc.store);
      doc2.emit("beforeObserverCalls", [transaction, doc2]);
      const fs = [];
      transaction.changed.forEach(
        (subs, itemtype) => fs.push(() => {
          if (itemtype._item === null || !itemtype._item.deleted) {
            itemtype._callObserver(transaction, subs);
          }
        })
      );
      fs.push(() => {
        transaction.changedParentTypes.forEach((events, type) => {
          if (type._dEH.l.length > 0 && (type._item === null || !type._item.deleted)) {
            events = events.filter(
              (event) => event.target._item === null || !event.target._item.deleted
            );
            events.forEach((event) => {
              event.currentTarget = type;
              event._path = null;
            });
            events.sort((event1, event2) => event1.path.length - event2.path.length);
            callEventHandlerListeners(type._dEH, events, transaction);
          }
        });
      });
      fs.push(() => doc2.emit("afterTransaction", [transaction, doc2]));
      callAll(fs, []);
      if (transaction._needFormattingCleanup) {
        cleanupYTextAfterTransaction(transaction);
      }
    } finally {
      if (doc2.gc) {
        tryGcDeleteSet(ds, store, doc2.gcFilter);
      }
      tryMergeDeleteSet(ds, store);
      transaction.afterState.forEach((clock, client) => {
        const beforeClock = transaction.beforeState.get(client) || 0;
        if (beforeClock !== clock) {
          const structs = (
            /** @type {Array<GC|Item>} */
            store.clients.get(client)
          );
          const firstChangePos = max(findIndexSS(structs, beforeClock), 1);
          for (let i2 = structs.length - 1; i2 >= firstChangePos; ) {
            i2 -= 1 + tryToMergeWithLefts(structs, i2);
          }
        }
      });
      for (let i2 = mergeStructs.length - 1; i2 >= 0; i2--) {
        const { client, clock } = mergeStructs[i2].id;
        const structs = (
          /** @type {Array<GC|Item>} */
          store.clients.get(client)
        );
        const replacedStructPos = findIndexSS(structs, clock);
        if (replacedStructPos + 1 < structs.length) {
          if (tryToMergeWithLefts(structs, replacedStructPos + 1) > 1) {
            continue;
          }
        }
        if (replacedStructPos > 0) {
          tryToMergeWithLefts(structs, replacedStructPos);
        }
      }
      if (!transaction.local && transaction.afterState.get(doc2.clientID) !== transaction.beforeState.get(doc2.clientID)) {
        print(ORANGE, BOLD, "[yjs] ", UNBOLD, RED, "Changed the client-id because another client seems to be using it.");
        doc2.clientID = generateNewClientId();
      }
      doc2.emit("afterTransactionCleanup", [transaction, doc2]);
      if (doc2._observers.has("update")) {
        const encoder = new UpdateEncoderV1();
        const hasContent2 = writeUpdateMessageFromTransaction(encoder, transaction);
        if (hasContent2) {
          doc2.emit("update", [encoder.toUint8Array(), transaction.origin, doc2, transaction]);
        }
      }
      if (doc2._observers.has("updateV2")) {
        const encoder = new UpdateEncoderV2();
        const hasContent2 = writeUpdateMessageFromTransaction(encoder, transaction);
        if (hasContent2) {
          doc2.emit("updateV2", [encoder.toUint8Array(), transaction.origin, doc2, transaction]);
        }
      }
      const { subdocsAdded, subdocsLoaded, subdocsRemoved } = transaction;
      if (subdocsAdded.size > 0 || subdocsRemoved.size > 0 || subdocsLoaded.size > 0) {
        subdocsAdded.forEach((subdoc) => {
          subdoc.clientID = doc2.clientID;
          if (subdoc.collectionid == null) {
            subdoc.collectionid = doc2.collectionid;
          }
          doc2.subdocs.add(subdoc);
        });
        subdocsRemoved.forEach((subdoc) => doc2.subdocs.delete(subdoc));
        doc2.emit("subdocs", [{ loaded: subdocsLoaded, added: subdocsAdded, removed: subdocsRemoved }, doc2, transaction]);
        subdocsRemoved.forEach((subdoc) => subdoc.destroy());
      }
      if (transactionCleanups.length <= i + 1) {
        doc2._transactionCleanups = [];
        doc2.emit("afterAllTransactions", [doc2, transactionCleanups]);
      } else {
        cleanupTransactions(transactionCleanups, i + 1);
      }
    }
  }
};
var transact = (doc2, f, origin = null, local = true) => {
  const transactionCleanups = doc2._transactionCleanups;
  let initialCall = false;
  let result = null;
  if (doc2._transaction === null) {
    initialCall = true;
    doc2._transaction = new Transaction(doc2, origin, local);
    transactionCleanups.push(doc2._transaction);
    if (transactionCleanups.length === 1) {
      doc2.emit("beforeAllTransactions", [doc2]);
    }
    doc2.emit("beforeTransaction", [doc2._transaction, doc2]);
  }
  try {
    result = f(doc2._transaction);
  } finally {
    if (initialCall) {
      const finishCleanup = doc2._transaction === transactionCleanups[0];
      doc2._transaction = null;
      if (finishCleanup) {
        cleanupTransactions(transactionCleanups, 0);
      }
    }
  }
  return result;
};
function* lazyStructReaderGenerator(decoder) {
  const numOfStateUpdates = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numOfStateUpdates; i++) {
    const numberOfStructs = readVarUint(decoder.restDecoder);
    const client = decoder.readClient();
    let clock = readVarUint(decoder.restDecoder);
    for (let i2 = 0; i2 < numberOfStructs; i2++) {
      const info = decoder.readInfo();
      if (info === 10) {
        const len = readVarUint(decoder.restDecoder);
        yield new Skip(createID(client, clock), len);
        clock += len;
      } else if ((BITS5 & info) !== 0) {
        const cantCopyParentInfo = (info & (BIT7 | BIT8)) === 0;
        const struct = new Item(
          createID(client, clock),
          null,
          // left
          (info & BIT8) === BIT8 ? decoder.readLeftID() : null,
          // origin
          null,
          // right
          (info & BIT7) === BIT7 ? decoder.readRightID() : null,
          // right origin
          // @ts-ignore Force writing a string here.
          cantCopyParentInfo ? decoder.readParentInfo() ? decoder.readString() : decoder.readLeftID() : null,
          // parent
          cantCopyParentInfo && (info & BIT6) === BIT6 ? decoder.readString() : null,
          // parentSub
          readItemContent(decoder, info)
          // item content
        );
        yield struct;
        clock += struct.length;
      } else {
        const len = decoder.readLen();
        yield new GC(createID(client, clock), len);
        clock += len;
      }
    }
  }
}
var LazyStructReader = class {
  /**
   * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
   * @param {boolean} filterSkips
   */
  constructor(decoder, filterSkips) {
    this.gen = lazyStructReaderGenerator(decoder);
    this.curr = null;
    this.done = false;
    this.filterSkips = filterSkips;
    this.next();
  }
  /**
   * @return {Item | GC | Skip |null}
   */
  next() {
    do {
      this.curr = this.gen.next().value || null;
    } while (this.filterSkips && this.curr !== null && this.curr.constructor === Skip);
    return this.curr;
  }
};
var LazyStructWriter = class {
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  constructor(encoder) {
    this.currClient = 0;
    this.startClock = 0;
    this.written = 0;
    this.encoder = encoder;
    this.clientStructs = [];
  }
};
var mergeUpdates = (updates) => mergeUpdatesV2(updates, UpdateDecoderV1, UpdateEncoderV1);
var sliceStruct = (left, diff) => {
  if (left.constructor === GC) {
    const { client, clock } = left.id;
    return new GC(createID(client, clock + diff), left.length - diff);
  } else if (left.constructor === Skip) {
    const { client, clock } = left.id;
    return new Skip(createID(client, clock + diff), left.length - diff);
  } else {
    const leftItem = (
      /** @type {Item} */
      left
    );
    const { client, clock } = leftItem.id;
    return new Item(
      createID(client, clock + diff),
      null,
      createID(client, clock + diff - 1),
      null,
      leftItem.rightOrigin,
      leftItem.parent,
      leftItem.parentSub,
      leftItem.content.splice(diff)
    );
  }
};
var mergeUpdatesV2 = (updates, YDecoder = UpdateDecoderV2, YEncoder = UpdateEncoderV2) => {
  if (updates.length === 1) {
    return updates[0];
  }
  const updateDecoders = updates.map((update) => new YDecoder(createDecoder(update)));
  let lazyStructDecoders = updateDecoders.map((decoder) => new LazyStructReader(decoder, true));
  let currWrite = null;
  const updateEncoder = new YEncoder();
  const lazyStructEncoder = new LazyStructWriter(updateEncoder);
  while (true) {
    lazyStructDecoders = lazyStructDecoders.filter((dec) => dec.curr !== null);
    lazyStructDecoders.sort(
      /** @type {function(any,any):number} */
      (dec1, dec2) => {
        if (dec1.curr.id.client === dec2.curr.id.client) {
          const clockDiff = dec1.curr.id.clock - dec2.curr.id.clock;
          if (clockDiff === 0) {
            return dec1.curr.constructor === dec2.curr.constructor ? 0 : dec1.curr.constructor === Skip ? 1 : -1;
          } else {
            return clockDiff;
          }
        } else {
          return dec2.curr.id.client - dec1.curr.id.client;
        }
      }
    );
    if (lazyStructDecoders.length === 0) {
      break;
    }
    const currDecoder = lazyStructDecoders[0];
    const firstClient = (
      /** @type {Item | GC} */
      currDecoder.curr.id.client
    );
    if (currWrite !== null) {
      let curr = (
        /** @type {Item | GC | null} */
        currDecoder.curr
      );
      let iterated = false;
      while (curr !== null && curr.id.clock + curr.length <= currWrite.struct.id.clock + currWrite.struct.length && curr.id.client >= currWrite.struct.id.client) {
        curr = currDecoder.next();
        iterated = true;
      }
      if (curr === null || // current decoder is empty
      curr.id.client !== firstClient || // check whether there is another decoder that has has updates from `firstClient`
      iterated && curr.id.clock > currWrite.struct.id.clock + currWrite.struct.length) {
        continue;
      }
      if (firstClient !== currWrite.struct.id.client) {
        writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
        currWrite = { struct: curr, offset: 0 };
        currDecoder.next();
      } else {
        if (currWrite.struct.id.clock + currWrite.struct.length < curr.id.clock) {
          if (currWrite.struct.constructor === Skip) {
            currWrite.struct.length = curr.id.clock + curr.length - currWrite.struct.id.clock;
          } else {
            writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
            const diff = curr.id.clock - currWrite.struct.id.clock - currWrite.struct.length;
            const struct = new Skip(createID(firstClient, currWrite.struct.id.clock + currWrite.struct.length), diff);
            currWrite = { struct, offset: 0 };
          }
        } else {
          const diff = currWrite.struct.id.clock + currWrite.struct.length - curr.id.clock;
          if (diff > 0) {
            if (currWrite.struct.constructor === Skip) {
              currWrite.struct.length -= diff;
            } else {
              curr = sliceStruct(curr, diff);
            }
          }
          if (!currWrite.struct.mergeWith(
            /** @type {any} */
            curr
          )) {
            writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
            currWrite = { struct: curr, offset: 0 };
            currDecoder.next();
          }
        }
      }
    } else {
      currWrite = { struct: (
        /** @type {Item | GC} */
        currDecoder.curr
      ), offset: 0 };
      currDecoder.next();
    }
    for (let next = currDecoder.curr; next !== null && next.id.client === firstClient && next.id.clock === currWrite.struct.id.clock + currWrite.struct.length && next.constructor !== Skip; next = currDecoder.next()) {
      writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
      currWrite = { struct: next, offset: 0 };
    }
  }
  if (currWrite !== null) {
    writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
    currWrite = null;
  }
  finishLazyStructWriting(lazyStructEncoder);
  const dss = updateDecoders.map((decoder) => readDeleteSet(decoder));
  const ds = mergeDeleteSets(dss);
  writeDeleteSet(updateEncoder, ds);
  return updateEncoder.toUint8Array();
};
var diffUpdateV2 = (update, sv, YDecoder = UpdateDecoderV2, YEncoder = UpdateEncoderV2) => {
  const state = decodeStateVector(sv);
  const encoder = new YEncoder();
  const lazyStructWriter = new LazyStructWriter(encoder);
  const decoder = new YDecoder(createDecoder(update));
  const reader = new LazyStructReader(decoder, false);
  while (reader.curr) {
    const curr = reader.curr;
    const currClient = curr.id.client;
    const svClock = state.get(currClient) || 0;
    if (reader.curr.constructor === Skip) {
      reader.next();
      continue;
    }
    if (curr.id.clock + curr.length > svClock) {
      writeStructToLazyStructWriter(lazyStructWriter, curr, max(svClock - curr.id.clock, 0));
      reader.next();
      while (reader.curr && reader.curr.id.client === currClient) {
        writeStructToLazyStructWriter(lazyStructWriter, reader.curr, 0);
        reader.next();
      }
    } else {
      while (reader.curr && reader.curr.id.client === currClient && reader.curr.id.clock + reader.curr.length <= svClock) {
        reader.next();
      }
    }
  }
  finishLazyStructWriting(lazyStructWriter);
  const ds = readDeleteSet(decoder);
  writeDeleteSet(encoder, ds);
  return encoder.toUint8Array();
};
var flushLazyStructWriter = (lazyWriter) => {
  if (lazyWriter.written > 0) {
    lazyWriter.clientStructs.push({ written: lazyWriter.written, restEncoder: toUint8Array(lazyWriter.encoder.restEncoder) });
    lazyWriter.encoder.restEncoder = createEncoder();
    lazyWriter.written = 0;
  }
};
var writeStructToLazyStructWriter = (lazyWriter, struct, offset) => {
  if (lazyWriter.written > 0 && lazyWriter.currClient !== struct.id.client) {
    flushLazyStructWriter(lazyWriter);
  }
  if (lazyWriter.written === 0) {
    lazyWriter.currClient = struct.id.client;
    lazyWriter.encoder.writeClient(struct.id.client);
    writeVarUint(lazyWriter.encoder.restEncoder, struct.id.clock + offset);
  }
  struct.write(lazyWriter.encoder, offset);
  lazyWriter.written++;
};
var finishLazyStructWriting = (lazyWriter) => {
  flushLazyStructWriter(lazyWriter);
  const restEncoder = lazyWriter.encoder.restEncoder;
  writeVarUint(restEncoder, lazyWriter.clientStructs.length);
  for (let i = 0; i < lazyWriter.clientStructs.length; i++) {
    const partStructs = lazyWriter.clientStructs[i];
    writeVarUint(restEncoder, partStructs.written);
    writeUint8Array(restEncoder, partStructs.restEncoder);
  }
};
var convertUpdateFormat = (update, blockTransformer, YDecoder, YEncoder) => {
  const updateDecoder = new YDecoder(createDecoder(update));
  const lazyDecoder = new LazyStructReader(updateDecoder, false);
  const updateEncoder = new YEncoder();
  const lazyWriter = new LazyStructWriter(updateEncoder);
  for (let curr = lazyDecoder.curr; curr !== null; curr = lazyDecoder.next()) {
    writeStructToLazyStructWriter(lazyWriter, blockTransformer(curr), 0);
  }
  finishLazyStructWriting(lazyWriter);
  const ds = readDeleteSet(updateDecoder);
  writeDeleteSet(updateEncoder, ds);
  return updateEncoder.toUint8Array();
};
var convertUpdateFormatV2ToV1 = (update) => convertUpdateFormat(update, id, UpdateDecoderV2, UpdateEncoderV1);
var errorComputeChanges = "You must not compute changes after the event-handler fired.";
var YEvent = class {
  /**
   * @param {T} target The changed type.
   * @param {Transaction} transaction
   */
  constructor(target, transaction) {
    this.target = target;
    this.currentTarget = target;
    this.transaction = transaction;
    this._changes = null;
    this._keys = null;
    this._delta = null;
    this._path = null;
  }
  /**
   * Computes the path from `y` to the changed type.
   *
   * @todo v14 should standardize on path: Array<{parent, index}> because that is easier to work with.
   *
   * The following property holds:
   * @example
   *   let type = y
   *   event.path.forEach(dir => {
   *     type = type.get(dir)
   *   })
   *   type === event.target // => true
   */
  get path() {
    return this._path || (this._path = getPathTo(this.currentTarget, this.target));
  }
  /**
   * Check if a struct is deleted by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */
  deletes(struct) {
    return isDeleted(this.transaction.deleteSet, struct.id);
  }
  /**
   * @type {Map<string, { action: 'add' | 'update' | 'delete', oldValue: any, newValue: any }>}
   */
  get keys() {
    if (this._keys === null) {
      if (this.transaction.doc._transactionCleanups.length === 0) {
        throw create3(errorComputeChanges);
      }
      const keys2 = /* @__PURE__ */ new Map();
      const target = this.target;
      const changed = (
        /** @type Set<string|null> */
        this.transaction.changed.get(target)
      );
      changed.forEach((key) => {
        if (key !== null) {
          const item = (
            /** @type {Item} */
            target._map.get(key)
          );
          let action;
          let oldValue;
          if (this.adds(item)) {
            let prev = item.left;
            while (prev !== null && this.adds(prev)) {
              prev = prev.left;
            }
            if (this.deletes(item)) {
              if (prev !== null && this.deletes(prev)) {
                action = "delete";
                oldValue = last(prev.content.getContent());
              } else {
                return;
              }
            } else {
              if (prev !== null && this.deletes(prev)) {
                action = "update";
                oldValue = last(prev.content.getContent());
              } else {
                action = "add";
                oldValue = void 0;
              }
            }
          } else {
            if (this.deletes(item)) {
              action = "delete";
              oldValue = last(
                /** @type {Item} */
                item.content.getContent()
              );
            } else {
              return;
            }
          }
          keys2.set(key, { action, oldValue });
        }
      });
      this._keys = keys2;
    }
    return this._keys;
  }
  /**
   * This is a computed property. Note that this can only be safely computed during the
   * event call. Computing this property after other changes happened might result in
   * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
   * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
   *
   * @type {Array<{insert?: string | Array<any> | object | AbstractType<any>, retain?: number, delete?: number, attributes?: Object<string, any>}>}
   */
  get delta() {
    return this.changes.delta;
  }
  /**
   * Check if a struct is added by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */
  adds(struct) {
    return struct.id.clock >= (this.transaction.beforeState.get(struct.id.client) || 0);
  }
  /**
   * This is a computed property. Note that this can only be safely computed during the
   * event call. Computing this property after other changes happened might result in
   * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
   * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
   *
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */
  get changes() {
    let changes = this._changes;
    if (changes === null) {
      if (this.transaction.doc._transactionCleanups.length === 0) {
        throw create3(errorComputeChanges);
      }
      const target = this.target;
      const added = create2();
      const deleted = create2();
      const delta = [];
      changes = {
        added,
        deleted,
        delta,
        keys: this.keys
      };
      const changed = (
        /** @type Set<string|null> */
        this.transaction.changed.get(target)
      );
      if (changed.has(null)) {
        let lastOp = null;
        const packOp = () => {
          if (lastOp) {
            delta.push(lastOp);
          }
        };
        for (let item = target._start; item !== null; item = item.right) {
          if (item.deleted) {
            if (this.deletes(item) && !this.adds(item)) {
              if (lastOp === null || lastOp.delete === void 0) {
                packOp();
                lastOp = { delete: 0 };
              }
              lastOp.delete += item.length;
              deleted.add(item);
            }
          } else {
            if (this.adds(item)) {
              if (lastOp === null || lastOp.insert === void 0) {
                packOp();
                lastOp = { insert: [] };
              }
              lastOp.insert = lastOp.insert.concat(item.content.getContent());
              added.add(item);
            } else {
              if (lastOp === null || lastOp.retain === void 0) {
                packOp();
                lastOp = { retain: 0 };
              }
              lastOp.retain += item.length;
            }
          }
        }
        if (lastOp !== null && lastOp.retain === void 0) {
          packOp();
        }
      }
      this._changes = changes;
    }
    return (
      /** @type {any} */
      changes
    );
  }
};
var getPathTo = (parent, child) => {
  const path = [];
  while (child._item !== null && child !== parent) {
    if (child._item.parentSub !== null) {
      path.unshift(child._item.parentSub);
    } else {
      let i = 0;
      let c = (
        /** @type {AbstractType<any>} */
        child._item.parent._start
      );
      while (c !== child._item && c !== null) {
        if (!c.deleted && c.countable) {
          i += c.length;
        }
        c = c.right;
      }
      path.unshift(i);
    }
    child = /** @type {AbstractType<any>} */
    child._item.parent;
  }
  return path;
};
var maxSearchMarker = 80;
var globalSearchMarkerTimestamp = 0;
var ArraySearchMarker = class {
  /**
   * @param {Item} p
   * @param {number} index
   */
  constructor(p, index) {
    p.marker = true;
    this.p = p;
    this.index = index;
    this.timestamp = globalSearchMarkerTimestamp++;
  }
};
var refreshMarkerTimestamp = (marker) => {
  marker.timestamp = globalSearchMarkerTimestamp++;
};
var overwriteMarker = (marker, p, index) => {
  marker.p.marker = false;
  marker.p = p;
  p.marker = true;
  marker.index = index;
  marker.timestamp = globalSearchMarkerTimestamp++;
};
var markPosition = (searchMarker, p, index) => {
  if (searchMarker.length >= maxSearchMarker) {
    const marker = searchMarker.reduce((a, b) => a.timestamp < b.timestamp ? a : b);
    overwriteMarker(marker, p, index);
    return marker;
  } else {
    const pm = new ArraySearchMarker(p, index);
    searchMarker.push(pm);
    return pm;
  }
};
var findMarker = (yarray, index) => {
  if (yarray._start === null || index === 0 || yarray._searchMarker === null) {
    return null;
  }
  const marker = yarray._searchMarker.length === 0 ? null : yarray._searchMarker.reduce((a, b) => abs(index - a.index) < abs(index - b.index) ? a : b);
  let p = yarray._start;
  let pindex = 0;
  if (marker !== null) {
    p = marker.p;
    pindex = marker.index;
    refreshMarkerTimestamp(marker);
  }
  while (p.right !== null && pindex < index) {
    if (!p.deleted && p.countable) {
      if (index < pindex + p.length) {
        break;
      }
      pindex += p.length;
    }
    p = p.right;
  }
  while (p.left !== null && pindex > index) {
    p = p.left;
    if (!p.deleted && p.countable) {
      pindex -= p.length;
    }
  }
  while (p.left !== null && p.left.id.client === p.id.client && p.left.id.clock + p.left.length === p.id.clock) {
    p = p.left;
    if (!p.deleted && p.countable) {
      pindex -= p.length;
    }
  }
  if (marker !== null && abs(marker.index - pindex) < /** @type {YText|YArray<any>} */
  p.parent.length / maxSearchMarker) {
    overwriteMarker(marker, p, pindex);
    return marker;
  } else {
    return markPosition(yarray._searchMarker, p, pindex);
  }
};
var updateMarkerChanges = (searchMarker, index, len) => {
  for (let i = searchMarker.length - 1; i >= 0; i--) {
    const m = searchMarker[i];
    if (len > 0) {
      let p = m.p;
      p.marker = false;
      while (p && (p.deleted || !p.countable)) {
        p = p.left;
        if (p && !p.deleted && p.countable) {
          m.index -= p.length;
        }
      }
      if (p === null || p.marker === true) {
        searchMarker.splice(i, 1);
        continue;
      }
      m.p = p;
      p.marker = true;
    }
    if (index < m.index || len > 0 && index === m.index) {
      m.index = max(index, m.index + len);
    }
  }
};
var callTypeObservers = (type, transaction, event) => {
  const changedType = type;
  const changedParentTypes = transaction.changedParentTypes;
  while (true) {
    setIfUndefined(changedParentTypes, type, () => []).push(event);
    if (type._item === null) {
      break;
    }
    type = /** @type {AbstractType<any>} */
    type._item.parent;
  }
  callEventHandlerListeners(changedType._eH, event, transaction);
};
var AbstractType = class {
  constructor() {
    this._item = null;
    this._map = /* @__PURE__ */ new Map();
    this._start = null;
    this.doc = null;
    this._length = 0;
    this._eH = createEventHandler();
    this._dEH = createEventHandler();
    this._searchMarker = null;
  }
  /**
   * @return {AbstractType<any>|null}
   */
  get parent() {
    return this._item ? (
      /** @type {AbstractType<any>} */
      this._item.parent
    ) : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item|null} item
   */
  _integrate(y, item) {
    this.doc = y;
    this._item = item;
  }
  /**
   * @return {AbstractType<EventType>}
   */
  _copy() {
    throw methodUnimplemented();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {AbstractType<EventType>}
   */
  clone() {
    throw methodUnimplemented();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} _encoder
   */
  _write(_encoder) {
  }
  /**
   * The first non-deleted item
   */
  get _first() {
    let n = this._start;
    while (n !== null && n.deleted) {
      n = n.right;
    }
    return n;
  }
  /**
   * Creates YEvent and calls all type observers.
   * Must be implemented by each type.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} _parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, _parentSubs) {
    if (!transaction.local && this._searchMarker) {
      this._searchMarker.length = 0;
    }
  }
  /**
   * Observe all events that are created on this type.
   *
   * @param {function(EventType, Transaction):void} f Observer function
   */
  observe(f) {
    addEventHandlerListener(this._eH, f);
  }
  /**
   * Observe all events that are created by this type and its children.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  observeDeep(f) {
    addEventHandlerListener(this._dEH, f);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(EventType,Transaction):void} f Observer function
   */
  unobserve(f) {
    removeEventHandlerListener(this._eH, f);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  unobserveDeep(f) {
    removeEventHandlerListener(this._dEH, f);
  }
  /**
   * @abstract
   * @return {any}
   */
  toJSON() {
  }
};
var typeListSlice = (type, start, end) => {
  if (start < 0) {
    start = type._length + start;
  }
  if (end < 0) {
    end = type._length + end;
  }
  let len = end - start;
  const cs = [];
  let n = type._start;
  while (n !== null && len > 0) {
    if (n.countable && !n.deleted) {
      const c = n.content.getContent();
      if (c.length <= start) {
        start -= c.length;
      } else {
        for (let i = start; i < c.length && len > 0; i++) {
          cs.push(c[i]);
          len--;
        }
        start = 0;
      }
    }
    n = n.right;
  }
  return cs;
};
var typeListToArray = (type) => {
  const cs = [];
  let n = type._start;
  while (n !== null) {
    if (n.countable && !n.deleted) {
      const c = n.content.getContent();
      for (let i = 0; i < c.length; i++) {
        cs.push(c[i]);
      }
    }
    n = n.right;
  }
  return cs;
};
var typeListForEach = (type, f) => {
  let index = 0;
  let n = type._start;
  while (n !== null) {
    if (n.countable && !n.deleted) {
      const c = n.content.getContent();
      for (let i = 0; i < c.length; i++) {
        f(c[i], index++, type);
      }
    }
    n = n.right;
  }
};
var typeListMap = (type, f) => {
  const result = [];
  typeListForEach(type, (c, i) => {
    result.push(f(c, i, type));
  });
  return result;
};
var typeListCreateIterator = (type) => {
  let n = type._start;
  let currentContent = null;
  let currentContentIndex = 0;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next: () => {
      if (currentContent === null) {
        while (n !== null && n.deleted) {
          n = n.right;
        }
        if (n === null) {
          return {
            done: true,
            value: void 0
          };
        }
        currentContent = n.content.getContent();
        currentContentIndex = 0;
        n = n.right;
      }
      const value = currentContent[currentContentIndex++];
      if (currentContent.length <= currentContentIndex) {
        currentContent = null;
      }
      return {
        done: false,
        value
      };
    }
  };
};
var typeListGet = (type, index) => {
  const marker = findMarker(type, index);
  let n = type._start;
  if (marker !== null) {
    n = marker.p;
    index -= marker.index;
  }
  for (; n !== null; n = n.right) {
    if (!n.deleted && n.countable) {
      if (index < n.length) {
        return n.content.getContent()[index];
      }
      index -= n.length;
    }
  }
};
var typeListInsertGenericsAfter = (transaction, parent, referenceItem, content) => {
  let left = referenceItem;
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  const store = doc2.store;
  const right = referenceItem === null ? parent._start : referenceItem.right;
  let jsonContent = [];
  const packJsonContent = () => {
    if (jsonContent.length > 0) {
      left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentAny(jsonContent));
      left.integrate(transaction, 0);
      jsonContent = [];
    }
  };
  content.forEach((c) => {
    if (c === null) {
      jsonContent.push(c);
    } else {
      switch (c.constructor) {
        case Number:
        case Object:
        case Boolean:
        case Array:
        case String:
          jsonContent.push(c);
          break;
        default:
          packJsonContent();
          switch (c.constructor) {
            case Uint8Array:
            case ArrayBuffer:
              left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentBinary(new Uint8Array(
                /** @type {Uint8Array} */
                c
              )));
              left.integrate(transaction, 0);
              break;
            case Doc:
              left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentDoc(
                /** @type {Doc} */
                c
              ));
              left.integrate(transaction, 0);
              break;
            default:
              if (c instanceof AbstractType) {
                left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentType(c));
                left.integrate(transaction, 0);
              } else {
                throw new Error("Unexpected content type in insert operation");
              }
          }
      }
    }
  });
  packJsonContent();
};
var lengthExceeded = () => create3("Length exceeded!");
var typeListInsertGenerics = (transaction, parent, index, content) => {
  if (index > parent._length) {
    throw lengthExceeded();
  }
  if (index === 0) {
    if (parent._searchMarker) {
      updateMarkerChanges(parent._searchMarker, index, content.length);
    }
    return typeListInsertGenericsAfter(transaction, parent, null, content);
  }
  const startIndex = index;
  const marker = findMarker(parent, index);
  let n = parent._start;
  if (marker !== null) {
    n = marker.p;
    index -= marker.index;
    if (index === 0) {
      n = n.prev;
      index += n && n.countable && !n.deleted ? n.length : 0;
    }
  }
  for (; n !== null; n = n.right) {
    if (!n.deleted && n.countable) {
      if (index <= n.length) {
        if (index < n.length) {
          getItemCleanStart(transaction, createID(n.id.client, n.id.clock + index));
        }
        break;
      }
      index -= n.length;
    }
  }
  if (parent._searchMarker) {
    updateMarkerChanges(parent._searchMarker, startIndex, content.length);
  }
  return typeListInsertGenericsAfter(transaction, parent, n, content);
};
var typeListPushGenerics = (transaction, parent, content) => {
  const marker = (parent._searchMarker || []).reduce((maxMarker, currMarker) => currMarker.index > maxMarker.index ? currMarker : maxMarker, { index: 0, p: parent._start });
  let n = marker.p;
  if (n) {
    while (n.right) {
      n = n.right;
    }
  }
  return typeListInsertGenericsAfter(transaction, parent, n, content);
};
var typeListDelete = (transaction, parent, index, length3) => {
  if (length3 === 0) {
    return;
  }
  const startIndex = index;
  const startLength = length3;
  const marker = findMarker(parent, index);
  let n = parent._start;
  if (marker !== null) {
    n = marker.p;
    index -= marker.index;
  }
  for (; n !== null && index > 0; n = n.right) {
    if (!n.deleted && n.countable) {
      if (index < n.length) {
        getItemCleanStart(transaction, createID(n.id.client, n.id.clock + index));
      }
      index -= n.length;
    }
  }
  while (length3 > 0 && n !== null) {
    if (!n.deleted) {
      if (length3 < n.length) {
        getItemCleanStart(transaction, createID(n.id.client, n.id.clock + length3));
      }
      n.delete(transaction);
      length3 -= n.length;
    }
    n = n.right;
  }
  if (length3 > 0) {
    throw lengthExceeded();
  }
  if (parent._searchMarker) {
    updateMarkerChanges(
      parent._searchMarker,
      startIndex,
      -startLength + length3
      /* in case we remove the above exception */
    );
  }
};
var typeMapDelete = (transaction, parent, key) => {
  const c = parent._map.get(key);
  if (c !== void 0) {
    c.delete(transaction);
  }
};
var typeMapSet = (transaction, parent, key, value) => {
  const left = parent._map.get(key) || null;
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  let content;
  if (value == null) {
    content = new ContentAny([value]);
  } else {
    switch (value.constructor) {
      case Number:
      case Object:
      case Boolean:
      case Array:
      case String:
        content = new ContentAny([value]);
        break;
      case Uint8Array:
        content = new ContentBinary(
          /** @type {Uint8Array} */
          value
        );
        break;
      case Doc:
        content = new ContentDoc(
          /** @type {Doc} */
          value
        );
        break;
      default:
        if (value instanceof AbstractType) {
          content = new ContentType(value);
        } else {
          throw new Error("Unexpected content type");
        }
    }
  }
  new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, null, null, parent, key, content).integrate(transaction, 0);
};
var typeMapGet = (parent, key) => {
  const val = parent._map.get(key);
  return val !== void 0 && !val.deleted ? val.content.getContent()[val.length - 1] : void 0;
};
var typeMapGetAll = (parent) => {
  const res = {};
  parent._map.forEach((value, key) => {
    if (!value.deleted) {
      res[key] = value.content.getContent()[value.length - 1];
    }
  });
  return res;
};
var typeMapHas = (parent, key) => {
  const val = parent._map.get(key);
  return val !== void 0 && !val.deleted;
};
var typeMapGetAllSnapshot = (parent, snapshot) => {
  const res = {};
  parent._map.forEach((value, key) => {
    let v = value;
    while (v !== null && (!snapshot.sv.has(v.id.client) || v.id.clock >= (snapshot.sv.get(v.id.client) || 0))) {
      v = v.left;
    }
    if (v !== null && isVisible(v, snapshot)) {
      res[key] = v.content.getContent()[v.length - 1];
    }
  });
  return res;
};
var createMapIterator = (map3) => iteratorFilter(
  map3.entries(),
  /** @param {any} entry */
  (entry) => !entry[1].deleted
);
var YArrayEvent = class extends YEvent {
};
var YArray = class _YArray extends AbstractType {
  constructor() {
    super();
    this._prelimContent = [];
    this._searchMarker = [];
  }
  /**
   * Construct a new YArray containing the specified items.
   * @template {Object<string,any>|Array<any>|number|null|string|Uint8Array} T
   * @param {Array<T>} items
   * @return {YArray<T>}
   */
  static from(items) {
    const a = new _YArray();
    a.push(items);
    return a;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    this.insert(
      0,
      /** @type {Array<any>} */
      this._prelimContent
    );
    this._prelimContent = null;
  }
  /**
   * @return {YArray<T>}
   */
  _copy() {
    return new _YArray();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YArray<T>}
   */
  clone() {
    const arr = new _YArray();
    arr.insert(0, this.toArray().map(
      (el) => el instanceof AbstractType ? (
        /** @type {typeof el} */
        el.clone()
      ) : el
    ));
    return arr;
  }
  get length() {
    return this._prelimContent === null ? this._length : this._prelimContent.length;
  }
  /**
   * Creates YArrayEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, parentSubs) {
    super._callObserver(transaction, parentSubs);
    callTypeObservers(this, transaction, new YArrayEvent(this, transaction));
  }
  /**
   * Inserts new content at an index.
   *
   * Important: This function expects an array of content. Not just a content
   * object. The reason for this "weirdness" is that inserting several elements
   * is very efficient when it is done as a single operation.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  yarray.insert(0, ['a'])
   *  // Insert numbers 1, 2 at position 1
   *  yarray.insert(1, [1, 2])
   *
   * @param {number} index The index to insert content at.
   * @param {Array<T>} content The array of content
   */
  insert(index, content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListInsertGenerics(
          transaction,
          this,
          index,
          /** @type {any} */
          content
        );
      });
    } else {
      this._prelimContent.splice(index, 0, ...content);
    }
  }
  /**
   * Appends content to this YArray.
   *
   * @param {Array<T>} content Array of content to append.
   *
   * @todo Use the following implementation in all types.
   */
  push(content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListPushGenerics(
          transaction,
          this,
          /** @type {any} */
          content
        );
      });
    } else {
      this._prelimContent.push(...content);
    }
  }
  /**
   * Prepends content to this YArray.
   *
   * @param {Array<T>} content Array of content to prepend.
   */
  unshift(content) {
    this.insert(0, content);
  }
  /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} length The number of elements to remove. Defaults to 1.
   */
  delete(index, length3 = 1) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListDelete(transaction, this, index, length3);
      });
    } else {
      this._prelimContent.splice(index, length3);
    }
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {T}
   */
  get(index) {
    return typeListGet(this, index);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<T>}
   */
  toArray() {
    return typeListToArray(this);
  }
  /**
   * Returns a portion of this YArray into a JavaScript Array selected
   * from start to end (end not included).
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<T>}
   */
  slice(start = 0, end = this.length) {
    return typeListSlice(this, start, end);
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Array<any>}
   */
  toJSON() {
    return this.map((c) => c instanceof AbstractType ? c.toJSON() : c);
  }
  /**
   * Returns an Array with the result of calling a provided function on every
   * element of this YArray.
   *
   * @template M
   * @param {function(T,number,YArray<T>):M} f Function that produces an element of the new Array
   * @return {Array<M>} A new array with each element being the result of the
   *                 callback function
   */
  map(f) {
    return typeListMap(
      this,
      /** @type {any} */
      f
    );
  }
  /**
   * Executes a provided function once on every element of this YArray.
   *
   * @param {function(T,number,YArray<T>):void} f A function to execute on every element of this YArray.
   */
  forEach(f) {
    typeListForEach(this, f);
  }
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return typeListCreateIterator(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(encoder) {
    encoder.writeTypeRef(YArrayRefID);
  }
};
var readYArray = (_decoder) => new YArray();
var YMapEvent = class extends YEvent {
  /**
   * @param {YMap<T>} ymap The YArray that changed.
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed.
   */
  constructor(ymap, transaction, subs) {
    super(ymap, transaction);
    this.keysChanged = subs;
  }
};
var YMap = class _YMap extends AbstractType {
  /**
   *
   * @param {Iterable<readonly [string, any]>=} entries - an optional iterable to initialize the YMap
   */
  constructor(entries) {
    super();
    this._prelimContent = null;
    if (entries === void 0) {
      this._prelimContent = /* @__PURE__ */ new Map();
    } else {
      this._prelimContent = new Map(entries);
    }
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    this._prelimContent.forEach((value, key) => {
      this.set(key, value);
    });
    this._prelimContent = null;
  }
  /**
   * @return {YMap<MapType>}
   */
  _copy() {
    return new _YMap();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YMap<MapType>}
   */
  clone() {
    const map3 = new _YMap();
    this.forEach((value, key) => {
      map3.set(key, value instanceof AbstractType ? (
        /** @type {typeof value} */
        value.clone()
      ) : value);
    });
    return map3;
  }
  /**
   * Creates YMapEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, parentSubs) {
    callTypeObservers(this, transaction, new YMapEvent(this, transaction, parentSubs));
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Object<string,any>}
   */
  toJSON() {
    const map3 = {};
    this._map.forEach((item, key) => {
      if (!item.deleted) {
        const v = item.content.getContent()[item.length - 1];
        map3[key] = v instanceof AbstractType ? v.toJSON() : v;
      }
    });
    return map3;
  }
  /**
   * Returns the size of the YMap (count of key/value pairs)
   *
   * @return {number}
   */
  get size() {
    return [...createMapIterator(this._map)].length;
  }
  /**
   * Returns the keys for each element in the YMap Type.
   *
   * @return {IterableIterator<string>}
   */
  keys() {
    return iteratorMap(
      createMapIterator(this._map),
      /** @param {any} v */
      (v) => v[0]
    );
  }
  /**
   * Returns the values for each element in the YMap Type.
   *
   * @return {IterableIterator<MapType>}
   */
  values() {
    return iteratorMap(
      createMapIterator(this._map),
      /** @param {any} v */
      (v) => v[1].content.getContent()[v[1].length - 1]
    );
  }
  /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<[string, MapType]>}
   */
  entries() {
    return iteratorMap(
      createMapIterator(this._map),
      /** @param {any} v */
      (v) => (
        /** @type {any} */
        [v[0], v[1].content.getContent()[v[1].length - 1]]
      )
    );
  }
  /**
   * Executes a provided function on once on every key-value pair.
   *
   * @param {function(MapType,string,YMap<MapType>):void} f A function to execute on every element of this YArray.
   */
  forEach(f) {
    this._map.forEach((item, key) => {
      if (!item.deleted) {
        f(item.content.getContent()[item.length - 1], key, this);
      }
    });
  }
  /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<[string, MapType]>}
   */
  [Symbol.iterator]() {
    return this.entries();
  }
  /**
   * Remove a specified element from this YMap.
   *
   * @param {string} key The key of the element to remove.
   */
  delete(key) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapDelete(transaction, this, key);
      });
    } else {
      this._prelimContent.delete(key);
    }
  }
  /**
   * Adds or updates an element with a specified key and value.
   * @template {MapType} VAL
   *
   * @param {string} key The key of the element to add to this YMap
   * @param {VAL} value The value of the element to add
   * @return {VAL}
   */
  set(key, value) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapSet(
          transaction,
          this,
          key,
          /** @type {any} */
          value
        );
      });
    } else {
      this._prelimContent.set(key, value);
    }
    return value;
  }
  /**
   * Returns a specified element from this YMap.
   *
   * @param {string} key
   * @return {MapType|undefined}
   */
  get(key) {
    return (
      /** @type {any} */
      typeMapGet(this, key)
    );
  }
  /**
   * Returns a boolean indicating whether the specified key exists or not.
   *
   * @param {string} key The key to test.
   * @return {boolean}
   */
  has(key) {
    return typeMapHas(this, key);
  }
  /**
   * Removes all elements from this YMap.
   */
  clear() {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        this.forEach(function(_value, key, map3) {
          typeMapDelete(transaction, map3, key);
        });
      });
    } else {
      this._prelimContent.clear();
    }
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(encoder) {
    encoder.writeTypeRef(YMapRefID);
  }
};
var readYMap = (_decoder) => new YMap();
var equalAttrs = (a, b) => a === b || typeof a === "object" && typeof b === "object" && a && b && equalFlat(a, b);
var ItemTextListPosition = class {
  /**
   * @param {Item|null} left
   * @param {Item|null} right
   * @param {number} index
   * @param {Map<string,any>} currentAttributes
   */
  constructor(left, right, index, currentAttributes) {
    this.left = left;
    this.right = right;
    this.index = index;
    this.currentAttributes = currentAttributes;
  }
  /**
   * Only call this if you know that this.right is defined
   */
  forward() {
    if (this.right === null) {
      unexpectedCase();
    }
    switch (this.right.content.constructor) {
      case ContentFormat:
        if (!this.right.deleted) {
          updateCurrentAttributes(
            this.currentAttributes,
            /** @type {ContentFormat} */
            this.right.content
          );
        }
        break;
      default:
        if (!this.right.deleted) {
          this.index += this.right.length;
        }
        break;
    }
    this.left = this.right;
    this.right = this.right.right;
  }
};
var findNextPosition = (transaction, pos, count) => {
  while (pos.right !== null && count > 0) {
    switch (pos.right.content.constructor) {
      case ContentFormat:
        if (!pos.right.deleted) {
          updateCurrentAttributes(
            pos.currentAttributes,
            /** @type {ContentFormat} */
            pos.right.content
          );
        }
        break;
      default:
        if (!pos.right.deleted) {
          if (count < pos.right.length) {
            getItemCleanStart(transaction, createID(pos.right.id.client, pos.right.id.clock + count));
          }
          pos.index += pos.right.length;
          count -= pos.right.length;
        }
        break;
    }
    pos.left = pos.right;
    pos.right = pos.right.right;
  }
  return pos;
};
var findPosition = (transaction, parent, index, useSearchMarker) => {
  const currentAttributes = /* @__PURE__ */ new Map();
  const marker = useSearchMarker ? findMarker(parent, index) : null;
  if (marker) {
    const pos = new ItemTextListPosition(marker.p.left, marker.p, marker.index, currentAttributes);
    return findNextPosition(transaction, pos, index - marker.index);
  } else {
    const pos = new ItemTextListPosition(null, parent._start, 0, currentAttributes);
    return findNextPosition(transaction, pos, index);
  }
};
var insertNegatedAttributes = (transaction, parent, currPos, negatedAttributes) => {
  while (currPos.right !== null && (currPos.right.deleted === true || currPos.right.content.constructor === ContentFormat && equalAttrs(
    negatedAttributes.get(
      /** @type {ContentFormat} */
      currPos.right.content.key
    ),
    /** @type {ContentFormat} */
    currPos.right.content.value
  ))) {
    if (!currPos.right.deleted) {
      negatedAttributes.delete(
        /** @type {ContentFormat} */
        currPos.right.content.key
      );
    }
    currPos.forward();
  }
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  negatedAttributes.forEach((val, key) => {
    const left = currPos.left;
    const right = currPos.right;
    const nextFormat = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
    nextFormat.integrate(transaction, 0);
    currPos.right = nextFormat;
    currPos.forward();
  });
};
var updateCurrentAttributes = (currentAttributes, format) => {
  const { key, value } = format;
  if (value === null) {
    currentAttributes.delete(key);
  } else {
    currentAttributes.set(key, value);
  }
};
var minimizeAttributeChanges = (currPos, attributes) => {
  while (true) {
    if (currPos.right === null) {
      break;
    } else if (currPos.right.deleted || currPos.right.content.constructor === ContentFormat && equalAttrs(
      attributes[
        /** @type {ContentFormat} */
        currPos.right.content.key
      ] ?? null,
      /** @type {ContentFormat} */
      currPos.right.content.value
    )) ;
    else {
      break;
    }
    currPos.forward();
  }
};
var insertAttributes = (transaction, parent, currPos, attributes) => {
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  const negatedAttributes = /* @__PURE__ */ new Map();
  for (const key in attributes) {
    const val = attributes[key];
    const currentVal = currPos.currentAttributes.get(key) ?? null;
    if (!equalAttrs(currentVal, val)) {
      negatedAttributes.set(key, currentVal);
      const { left, right } = currPos;
      currPos.right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
      currPos.right.integrate(transaction, 0);
      currPos.forward();
    }
  }
  return negatedAttributes;
};
var insertText = (transaction, parent, currPos, text2, attributes) => {
  currPos.currentAttributes.forEach((_val, key) => {
    if (attributes[key] === void 0) {
      attributes[key] = null;
    }
  });
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  minimizeAttributeChanges(currPos, attributes);
  const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
  const content = text2.constructor === String ? new ContentString(
    /** @type {string} */
    text2
  ) : text2 instanceof AbstractType ? new ContentType(text2) : new ContentEmbed(text2);
  let { left, right, index } = currPos;
  if (parent._searchMarker) {
    updateMarkerChanges(parent._searchMarker, currPos.index, content.getLength());
  }
  right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, content);
  right.integrate(transaction, 0);
  currPos.right = right;
  currPos.index = index;
  currPos.forward();
  insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
};
var formatText = (transaction, parent, currPos, length3, attributes) => {
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  minimizeAttributeChanges(currPos, attributes);
  const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
  iterationLoop: while (currPos.right !== null && (length3 > 0 || negatedAttributes.size > 0 && (currPos.right.deleted || currPos.right.content.constructor === ContentFormat))) {
    if (!currPos.right.deleted) {
      switch (currPos.right.content.constructor) {
        case ContentFormat: {
          const { key, value } = (
            /** @type {ContentFormat} */
            currPos.right.content
          );
          const attr = attributes[key];
          if (attr !== void 0) {
            if (equalAttrs(attr, value)) {
              negatedAttributes.delete(key);
            } else {
              if (length3 === 0) {
                break iterationLoop;
              }
              negatedAttributes.set(key, value);
            }
            currPos.right.delete(transaction);
          } else {
            currPos.currentAttributes.set(key, value);
          }
          break;
        }
        default:
          if (length3 < currPos.right.length) {
            getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length3));
          }
          length3 -= currPos.right.length;
          break;
      }
    }
    currPos.forward();
  }
  if (length3 > 0) {
    let newlines = "";
    for (; length3 > 0; length3--) {
      newlines += "\n";
    }
    currPos.right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), currPos.left, currPos.left && currPos.left.lastId, currPos.right, currPos.right && currPos.right.id, parent, null, new ContentString(newlines));
    currPos.right.integrate(transaction, 0);
    currPos.forward();
  }
  insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
};
var cleanupFormattingGap = (transaction, start, curr, startAttributes, currAttributes) => {
  let end = start;
  const endFormats = create();
  while (end && (!end.countable || end.deleted)) {
    if (!end.deleted && end.content.constructor === ContentFormat) {
      const cf = (
        /** @type {ContentFormat} */
        end.content
      );
      endFormats.set(cf.key, cf);
    }
    end = end.right;
  }
  let cleanups = 0;
  let reachedCurr = false;
  while (start !== end) {
    if (curr === start) {
      reachedCurr = true;
    }
    if (!start.deleted) {
      const content = start.content;
      switch (content.constructor) {
        case ContentFormat: {
          const { key, value } = (
            /** @type {ContentFormat} */
            content
          );
          const startAttrValue = startAttributes.get(key) ?? null;
          if (endFormats.get(key) !== content || startAttrValue === value) {
            start.delete(transaction);
            cleanups++;
            if (!reachedCurr && (currAttributes.get(key) ?? null) === value && startAttrValue !== value) {
              if (startAttrValue === null) {
                currAttributes.delete(key);
              } else {
                currAttributes.set(key, startAttrValue);
              }
            }
          }
          if (!reachedCurr && !start.deleted) {
            updateCurrentAttributes(
              currAttributes,
              /** @type {ContentFormat} */
              content
            );
          }
          break;
        }
      }
    }
    start = /** @type {Item} */
    start.right;
  }
  return cleanups;
};
var cleanupContextlessFormattingGap = (transaction, item) => {
  while (item && item.right && (item.right.deleted || !item.right.countable)) {
    item = item.right;
  }
  const attrs = /* @__PURE__ */ new Set();
  while (item && (item.deleted || !item.countable)) {
    if (!item.deleted && item.content.constructor === ContentFormat) {
      const key = (
        /** @type {ContentFormat} */
        item.content.key
      );
      if (attrs.has(key)) {
        item.delete(transaction);
      } else {
        attrs.add(key);
      }
    }
    item = item.left;
  }
};
var cleanupYTextFormatting = (type) => {
  let res = 0;
  transact(
    /** @type {Doc} */
    type.doc,
    (transaction) => {
      let start = (
        /** @type {Item} */
        type._start
      );
      let end = type._start;
      let startAttributes = create();
      const currentAttributes = copy(startAttributes);
      while (end) {
        if (end.deleted === false) {
          switch (end.content.constructor) {
            case ContentFormat:
              updateCurrentAttributes(
                currentAttributes,
                /** @type {ContentFormat} */
                end.content
              );
              break;
            default:
              res += cleanupFormattingGap(transaction, start, end, startAttributes, currentAttributes);
              startAttributes = copy(currentAttributes);
              start = end;
              break;
          }
        }
        end = end.right;
      }
    }
  );
  return res;
};
var cleanupYTextAfterTransaction = (transaction) => {
  const needFullCleanup = /* @__PURE__ */ new Set();
  const doc2 = transaction.doc;
  for (const [client, afterClock] of transaction.afterState.entries()) {
    const clock = transaction.beforeState.get(client) || 0;
    if (afterClock === clock) {
      continue;
    }
    iterateStructs(
      transaction,
      /** @type {Array<Item|GC>} */
      doc2.store.clients.get(client),
      clock,
      afterClock,
      (item) => {
        if (!item.deleted && /** @type {Item} */
        item.content.constructor === ContentFormat && item.constructor !== GC) {
          needFullCleanup.add(
            /** @type {any} */
            item.parent
          );
        }
      }
    );
  }
  transact(doc2, (t) => {
    iterateDeletedStructs(transaction, transaction.deleteSet, (item) => {
      if (item instanceof GC || !/** @type {YText} */
      item.parent._hasFormatting || needFullCleanup.has(
        /** @type {YText} */
        item.parent
      )) {
        return;
      }
      const parent = (
        /** @type {YText} */
        item.parent
      );
      if (item.content.constructor === ContentFormat) {
        needFullCleanup.add(parent);
      } else {
        cleanupContextlessFormattingGap(t, item);
      }
    });
    for (const yText of needFullCleanup) {
      cleanupYTextFormatting(yText);
    }
  });
};
var deleteText = (transaction, currPos, length3) => {
  const startLength = length3;
  const startAttrs = copy(currPos.currentAttributes);
  const start = currPos.right;
  while (length3 > 0 && currPos.right !== null) {
    if (currPos.right.deleted === false) {
      switch (currPos.right.content.constructor) {
        case ContentType:
        case ContentEmbed:
        case ContentString:
          if (length3 < currPos.right.length) {
            getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length3));
          }
          length3 -= currPos.right.length;
          currPos.right.delete(transaction);
          break;
      }
    }
    currPos.forward();
  }
  if (start) {
    cleanupFormattingGap(transaction, start, currPos.right, startAttrs, currPos.currentAttributes);
  }
  const parent = (
    /** @type {AbstractType<any>} */
    /** @type {Item} */
    (currPos.left || currPos.right).parent
  );
  if (parent._searchMarker) {
    updateMarkerChanges(parent._searchMarker, currPos.index, -startLength + length3);
  }
  return currPos;
};
var YTextEvent = class extends YEvent {
  /**
   * @param {YText} ytext
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed
   */
  constructor(ytext, transaction, subs) {
    super(ytext, transaction);
    this.childListChanged = false;
    this.keysChanged = /* @__PURE__ */ new Set();
    subs.forEach((sub) => {
      if (sub === null) {
        this.childListChanged = true;
      } else {
        this.keysChanged.add(sub);
      }
    });
  }
  /**
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */
  get changes() {
    if (this._changes === null) {
      const changes = {
        keys: this.keys,
        delta: this.delta,
        added: /* @__PURE__ */ new Set(),
        deleted: /* @__PURE__ */ new Set()
      };
      this._changes = changes;
    }
    return (
      /** @type {any} */
      this._changes
    );
  }
  /**
   * Compute the changes in the delta format.
   * A {@link https://quilljs.com/docs/delta/|Quill Delta}) that represents the changes on the document.
   *
   * @type {Array<{insert?:string|object|AbstractType<any>, delete?:number, retain?:number, attributes?: Object<string,any>}>}
   *
   * @public
   */
  get delta() {
    if (this._delta === null) {
      const y = (
        /** @type {Doc} */
        this.target.doc
      );
      const delta = [];
      transact(y, (transaction) => {
        const currentAttributes = /* @__PURE__ */ new Map();
        const oldAttributes = /* @__PURE__ */ new Map();
        let item = this.target._start;
        let action = null;
        const attributes = {};
        let insert = "";
        let retain = 0;
        let deleteLen = 0;
        const addOp = () => {
          if (action !== null) {
            let op = null;
            switch (action) {
              case "delete":
                if (deleteLen > 0) {
                  op = { delete: deleteLen };
                }
                deleteLen = 0;
                break;
              case "insert":
                if (typeof insert === "object" || insert.length > 0) {
                  op = { insert };
                  if (currentAttributes.size > 0) {
                    op.attributes = {};
                    currentAttributes.forEach((value, key) => {
                      if (value !== null) {
                        op.attributes[key] = value;
                      }
                    });
                  }
                }
                insert = "";
                break;
              case "retain":
                if (retain > 0) {
                  op = { retain };
                  if (!isEmpty(attributes)) {
                    op.attributes = assign({}, attributes);
                  }
                }
                retain = 0;
                break;
            }
            if (op) delta.push(op);
            action = null;
          }
        };
        while (item !== null) {
          switch (item.content.constructor) {
            case ContentType:
            case ContentEmbed:
              if (this.adds(item)) {
                if (!this.deletes(item)) {
                  addOp();
                  action = "insert";
                  insert = item.content.getContent()[0];
                  addOp();
                }
              } else if (this.deletes(item)) {
                if (action !== "delete") {
                  addOp();
                  action = "delete";
                }
                deleteLen += 1;
              } else if (!item.deleted) {
                if (action !== "retain") {
                  addOp();
                  action = "retain";
                }
                retain += 1;
              }
              break;
            case ContentString:
              if (this.adds(item)) {
                if (!this.deletes(item)) {
                  if (action !== "insert") {
                    addOp();
                    action = "insert";
                  }
                  insert += /** @type {ContentString} */
                  item.content.str;
                }
              } else if (this.deletes(item)) {
                if (action !== "delete") {
                  addOp();
                  action = "delete";
                }
                deleteLen += item.length;
              } else if (!item.deleted) {
                if (action !== "retain") {
                  addOp();
                  action = "retain";
                }
                retain += item.length;
              }
              break;
            case ContentFormat: {
              const { key, value } = (
                /** @type {ContentFormat} */
                item.content
              );
              if (this.adds(item)) {
                if (!this.deletes(item)) {
                  const curVal = currentAttributes.get(key) ?? null;
                  if (!equalAttrs(curVal, value)) {
                    if (action === "retain") {
                      addOp();
                    }
                    if (equalAttrs(value, oldAttributes.get(key) ?? null)) {
                      delete attributes[key];
                    } else {
                      attributes[key] = value;
                    }
                  } else if (value !== null) {
                    item.delete(transaction);
                  }
                }
              } else if (this.deletes(item)) {
                oldAttributes.set(key, value);
                const curVal = currentAttributes.get(key) ?? null;
                if (!equalAttrs(curVal, value)) {
                  if (action === "retain") {
                    addOp();
                  }
                  attributes[key] = curVal;
                }
              } else if (!item.deleted) {
                oldAttributes.set(key, value);
                const attr = attributes[key];
                if (attr !== void 0) {
                  if (!equalAttrs(attr, value)) {
                    if (action === "retain") {
                      addOp();
                    }
                    if (value === null) {
                      delete attributes[key];
                    } else {
                      attributes[key] = value;
                    }
                  } else if (attr !== null) {
                    item.delete(transaction);
                  }
                }
              }
              if (!item.deleted) {
                if (action === "insert") {
                  addOp();
                }
                updateCurrentAttributes(
                  currentAttributes,
                  /** @type {ContentFormat} */
                  item.content
                );
              }
              break;
            }
          }
          item = item.right;
        }
        addOp();
        while (delta.length > 0) {
          const lastOp = delta[delta.length - 1];
          if (lastOp.retain !== void 0 && lastOp.attributes === void 0) {
            delta.pop();
          } else {
            break;
          }
        }
      });
      this._delta = delta;
    }
    return (
      /** @type {any} */
      this._delta
    );
  }
};
var YText = class _YText extends AbstractType {
  /**
   * @param {String} [string] The initial value of the YText.
   */
  constructor(string) {
    super();
    this._pending = string !== void 0 ? [() => this.insert(0, string)] : [];
    this._searchMarker = [];
    this._hasFormatting = false;
  }
  /**
   * Number of characters of this text type.
   *
   * @type {number}
   */
  get length() {
    return this._length;
  }
  /**
   * @param {Doc} y
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    try {
      this._pending.forEach((f) => f());
    } catch (e) {
      console.error(e);
    }
    this._pending = null;
  }
  _copy() {
    return new _YText();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YText}
   */
  clone() {
    const text2 = new _YText();
    text2.applyDelta(this.toDelta());
    return text2;
  }
  /**
   * Creates YTextEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, parentSubs) {
    super._callObserver(transaction, parentSubs);
    const event = new YTextEvent(this, transaction, parentSubs);
    callTypeObservers(this, transaction, event);
    if (!transaction.local && this._hasFormatting) {
      transaction._needFormattingCleanup = true;
    }
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @public
   */
  toString() {
    let str = "";
    let n = this._start;
    while (n !== null) {
      if (!n.deleted && n.countable && n.content.constructor === ContentString) {
        str += /** @type {ContentString} */
        n.content.str;
      }
      n = n.right;
    }
    return str;
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @return {string}
   * @public
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Apply a {@link Delta} on this shared YText type.
   *
   * @param {any} delta The changes to apply on this element.
   * @param {object}  opts
   * @param {boolean} [opts.sanitize] Sanitize input delta. Removes ending newlines if set to true.
   *
   *
   * @public
   */
  applyDelta(delta, { sanitize = true } = {}) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        const currPos = new ItemTextListPosition(null, this._start, 0, /* @__PURE__ */ new Map());
        for (let i = 0; i < delta.length; i++) {
          const op = delta[i];
          if (op.insert !== void 0) {
            const ins = !sanitize && typeof op.insert === "string" && i === delta.length - 1 && currPos.right === null && op.insert.slice(-1) === "\n" ? op.insert.slice(0, -1) : op.insert;
            if (typeof ins !== "string" || ins.length > 0) {
              insertText(transaction, this, currPos, ins, op.attributes || {});
            }
          } else if (op.retain !== void 0) {
            formatText(transaction, this, currPos, op.retain, op.attributes || {});
          } else if (op.delete !== void 0) {
            deleteText(transaction, currPos, op.delete);
          }
        }
      });
    } else {
      this._pending.push(() => this.applyDelta(delta));
    }
  }
  /**
   * Returns the Delta representation of this YText type.
   *
   * @param {Snapshot} [snapshot]
   * @param {Snapshot} [prevSnapshot]
   * @param {function('removed' | 'added', ID):any} [computeYChange]
   * @return {any} The Delta representation of this type.
   *
   * @public
   */
  toDelta(snapshot, prevSnapshot, computeYChange) {
    const ops = [];
    const currentAttributes = /* @__PURE__ */ new Map();
    const doc2 = (
      /** @type {Doc} */
      this.doc
    );
    let str = "";
    let n = this._start;
    function packStr() {
      if (str.length > 0) {
        const attributes = {};
        let addAttributes = false;
        currentAttributes.forEach((value, key) => {
          addAttributes = true;
          attributes[key] = value;
        });
        const op = { insert: str };
        if (addAttributes) {
          op.attributes = attributes;
        }
        ops.push(op);
        str = "";
      }
    }
    const computeDelta = () => {
      while (n !== null) {
        if (isVisible(n, snapshot) || prevSnapshot !== void 0 && isVisible(n, prevSnapshot)) {
          switch (n.content.constructor) {
            case ContentString: {
              const cur = currentAttributes.get("ychange");
              if (snapshot !== void 0 && !isVisible(n, snapshot)) {
                if (cur === void 0 || cur.user !== n.id.client || cur.type !== "removed") {
                  packStr();
                  currentAttributes.set("ychange", computeYChange ? computeYChange("removed", n.id) : { type: "removed" });
                }
              } else if (prevSnapshot !== void 0 && !isVisible(n, prevSnapshot)) {
                if (cur === void 0 || cur.user !== n.id.client || cur.type !== "added") {
                  packStr();
                  currentAttributes.set("ychange", computeYChange ? computeYChange("added", n.id) : { type: "added" });
                }
              } else if (cur !== void 0) {
                packStr();
                currentAttributes.delete("ychange");
              }
              str += /** @type {ContentString} */
              n.content.str;
              break;
            }
            case ContentType:
            case ContentEmbed: {
              packStr();
              const op = {
                insert: n.content.getContent()[0]
              };
              if (currentAttributes.size > 0) {
                const attrs = (
                  /** @type {Object<string,any>} */
                  {}
                );
                op.attributes = attrs;
                currentAttributes.forEach((value, key) => {
                  attrs[key] = value;
                });
              }
              ops.push(op);
              break;
            }
            case ContentFormat:
              if (isVisible(n, snapshot)) {
                packStr();
                updateCurrentAttributes(
                  currentAttributes,
                  /** @type {ContentFormat} */
                  n.content
                );
              }
              break;
          }
        }
        n = n.right;
      }
      packStr();
    };
    if (snapshot || prevSnapshot) {
      transact(doc2, (transaction) => {
        if (snapshot) {
          splitSnapshotAffectedStructs(transaction, snapshot);
        }
        if (prevSnapshot) {
          splitSnapshotAffectedStructs(transaction, prevSnapshot);
        }
        computeDelta();
      }, "cleanup");
    } else {
      computeDelta();
    }
    return ops;
  }
  /**
   * Insert text at a given index.
   *
   * @param {number} index The index at which to start inserting.
   * @param {String} text The text to insert at the specified position.
   * @param {TextAttributes} [attributes] Optionally define some formatting
   *                                    information to apply on the inserted
   *                                    Text.
   * @public
   */
  insert(index, text2, attributes) {
    if (text2.length <= 0) {
      return;
    }
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        const pos = findPosition(transaction, this, index, !attributes);
        if (!attributes) {
          attributes = {};
          pos.currentAttributes.forEach((v, k) => {
            attributes[k] = v;
          });
        }
        insertText(transaction, this, pos, text2, attributes);
      });
    } else {
      this._pending.push(() => this.insert(index, text2, attributes));
    }
  }
  /**
   * Inserts an embed at a index.
   *
   * @param {number} index The index to insert the embed at.
   * @param {Object | AbstractType<any>} embed The Object that represents the embed.
   * @param {TextAttributes} [attributes] Attribute information to apply on the
   *                                    embed
   *
   * @public
   */
  insertEmbed(index, embed, attributes) {
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        const pos = findPosition(transaction, this, index, !attributes);
        insertText(transaction, this, pos, embed, attributes || {});
      });
    } else {
      this._pending.push(() => this.insertEmbed(index, embed, attributes || {}));
    }
  }
  /**
   * Deletes text starting from an index.
   *
   * @param {number} index Index at which to start deleting.
   * @param {number} length The number of characters to remove. Defaults to 1.
   *
   * @public
   */
  delete(index, length3) {
    if (length3 === 0) {
      return;
    }
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        deleteText(transaction, findPosition(transaction, this, index, true), length3);
      });
    } else {
      this._pending.push(() => this.delete(index, length3));
    }
  }
  /**
   * Assigns properties to a range of text.
   *
   * @param {number} index The position where to start formatting.
   * @param {number} length The amount of characters to assign properties to.
   * @param {TextAttributes} attributes Attribute information to apply on the
   *                                    text.
   *
   * @public
   */
  format(index, length3, attributes) {
    if (length3 === 0) {
      return;
    }
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        const pos = findPosition(transaction, this, index, false);
        if (pos.right === null) {
          return;
        }
        formatText(transaction, this, pos, length3, attributes);
      });
    } else {
      this._pending.push(() => this.format(index, length3, attributes));
    }
  }
  /**
   * Removes an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be removed.
   *
   * @public
   */
  removeAttribute(attributeName) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapDelete(transaction, this, attributeName);
      });
    } else {
      this._pending.push(() => this.removeAttribute(attributeName));
    }
  }
  /**
   * Sets or updates an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be set.
   * @param {any} attributeValue The attribute value that is to be set.
   *
   * @public
   */
  setAttribute(attributeName, attributeValue) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapSet(transaction, this, attributeName, attributeValue);
      });
    } else {
      this._pending.push(() => this.setAttribute(attributeName, attributeValue));
    }
  }
  /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {any} The queried attribute value.
   *
   * @public
   */
  getAttribute(attributeName) {
    return (
      /** @type {any} */
      typeMapGet(this, attributeName)
    );
  }
  /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @return {Object<string, any>} A JSON Object that describes the attributes.
   *
   * @public
   */
  getAttributes() {
    return typeMapGetAll(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(encoder) {
    encoder.writeTypeRef(YTextRefID);
  }
};
var readYText = (_decoder) => new YText();
var YXmlTreeWalker = class {
  /**
   * @param {YXmlFragment | YXmlElement} root
   * @param {function(AbstractType<any>):boolean} [f]
   */
  constructor(root, f = () => true) {
    this._filter = f;
    this._root = root;
    this._currentNode = /** @type {Item} */
    root._start;
    this._firstCall = true;
  }
  [Symbol.iterator]() {
    return this;
  }
  /**
   * Get the next node.
   *
   * @return {IteratorResult<YXmlElement|YXmlText|YXmlHook>} The next node.
   *
   * @public
   */
  next() {
    let n = this._currentNode;
    let type = n && n.content && /** @type {any} */
    n.content.type;
    if (n !== null && (!this._firstCall || n.deleted || !this._filter(type))) {
      do {
        type = /** @type {any} */
        n.content.type;
        if (!n.deleted && (type.constructor === YXmlElement || type.constructor === YXmlFragment) && type._start !== null) {
          n = type._start;
        } else {
          while (n !== null) {
            if (n.right !== null) {
              n = n.right;
              break;
            } else if (n.parent === this._root) {
              n = null;
            } else {
              n = /** @type {AbstractType<any>} */
              n.parent._item;
            }
          }
        }
      } while (n !== null && (n.deleted || !this._filter(
        /** @type {ContentType} */
        n.content.type
      )));
    }
    this._firstCall = false;
    if (n === null) {
      return { value: void 0, done: true };
    }
    this._currentNode = n;
    return { value: (
      /** @type {any} */
      n.content.type
    ), done: false };
  }
};
var YXmlFragment = class _YXmlFragment extends AbstractType {
  constructor() {
    super();
    this._prelimContent = [];
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get firstChild() {
    const first = this._first;
    return first ? first.content.getContent()[0] : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    this.insert(
      0,
      /** @type {Array<any>} */
      this._prelimContent
    );
    this._prelimContent = null;
  }
  _copy() {
    return new _YXmlFragment();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlFragment}
   */
  clone() {
    const el = new _YXmlFragment();
    el.insert(0, this.toArray().map((item) => item instanceof AbstractType ? item.clone() : item));
    return el;
  }
  get length() {
    return this._prelimContent === null ? this._length : this._prelimContent.length;
  }
  /**
   * Create a subtree of childNodes.
   *
   * @example
   * const walker = elem.createTreeWalker(dom => dom.nodeName === 'div')
   * for (let node in walker) {
   *   // `node` is a div node
   *   nop(node)
   * }
   *
   * @param {function(AbstractType<any>):boolean} filter Function that is called on each child element and
   *                          returns a Boolean indicating whether the child
   *                          is to be included in the subtree.
   * @return {YXmlTreeWalker} A subtree and a position within it.
   *
   * @public
   */
  createTreeWalker(filter) {
    return new YXmlTreeWalker(this, filter);
  }
  /**
   * Returns the first YXmlElement that matches the query.
   * Similar to DOM's {@link querySelector}.
   *
   * Query support:
   *   - tagname
   * TODO:
   *   - id
   *   - attribute
   *
   * @param {CSS_Selector} query The query on the children.
   * @return {YXmlElement|YXmlText|YXmlHook|null} The first element that matches the query or null.
   *
   * @public
   */
  querySelector(query) {
    query = query.toUpperCase();
    const iterator = new YXmlTreeWalker(this, (element2) => element2.nodeName && element2.nodeName.toUpperCase() === query);
    const next = iterator.next();
    if (next.done) {
      return null;
    } else {
      return next.value;
    }
  }
  /**
   * Returns all YXmlElements that match the query.
   * Similar to Dom's {@link querySelectorAll}.
   *
   * @todo Does not yet support all queries. Currently only query by tagName.
   *
   * @param {CSS_Selector} query The query on the children
   * @return {Array<YXmlElement|YXmlText|YXmlHook|null>} The elements that match this query.
   *
   * @public
   */
  querySelectorAll(query) {
    query = query.toUpperCase();
    return from(new YXmlTreeWalker(this, (element2) => element2.nodeName && element2.nodeName.toUpperCase() === query));
  }
  /**
   * Creates YXmlEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, parentSubs) {
    callTypeObservers(this, transaction, new YXmlEvent(this, parentSubs, transaction));
  }
  /**
   * Get the string representation of all the children of this YXmlFragment.
   *
   * @return {string} The string representation of all children.
   */
  toString() {
    return typeListMap(this, (xml) => xml.toString()).join("");
  }
  /**
   * @return {string}
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(_document = document, hooks = {}, binding) {
    const fragment = _document.createDocumentFragment();
    if (binding !== void 0) {
      binding._createAssociation(fragment, this);
    }
    typeListForEach(this, (xmlType) => {
      fragment.insertBefore(xmlType.toDOM(_document, hooks, binding), null);
    });
    return fragment;
  }
  /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {number} index The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */
  insert(index, content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListInsertGenerics(transaction, this, index, content);
      });
    } else {
      this._prelimContent.splice(index, 0, ...content);
    }
  }
  /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {null|Item|YXmlElement|YXmlText} ref The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */
  insertAfter(ref, content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        const refItem = ref && ref instanceof AbstractType ? ref._item : ref;
        typeListInsertGenericsAfter(transaction, this, refItem, content);
      });
    } else {
      const pc = (
        /** @type {Array<any>} */
        this._prelimContent
      );
      const index = ref === null ? 0 : pc.findIndex((el) => el === ref) + 1;
      if (index === 0 && ref !== null) {
        throw create3("Reference item not found");
      }
      pc.splice(index, 0, ...content);
    }
  }
  /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} [length=1] The number of elements to remove. Defaults to 1.
   */
  delete(index, length3 = 1) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListDelete(transaction, this, index, length3);
      });
    } else {
      this._prelimContent.splice(index, length3);
    }
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<YXmlElement|YXmlText|YXmlHook>}
   */
  toArray() {
    return typeListToArray(this);
  }
  /**
   * Appends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to append.
   */
  push(content) {
    this.insert(this.length, content);
  }
  /**
   * Prepends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to prepend.
   */
  unshift(content) {
    this.insert(0, content);
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {YXmlElement|YXmlText}
   */
  get(index) {
    return typeListGet(this, index);
  }
  /**
   * Returns a portion of this YXmlFragment into a JavaScript Array selected
   * from start to end (end not included).
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<YXmlElement|YXmlText>}
   */
  slice(start = 0, end = this.length) {
    return typeListSlice(this, start, end);
  }
  /**
   * Executes a provided function on once on every child element.
   *
   * @param {function(YXmlElement|YXmlText,number, typeof self):void} f A function to execute on every element of this YArray.
   */
  forEach(f) {
    typeListForEach(this, f);
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(encoder) {
    encoder.writeTypeRef(YXmlFragmentRefID);
  }
};
var readYXmlFragment = (_decoder) => new YXmlFragment();
var YXmlElement = class _YXmlElement extends YXmlFragment {
  constructor(nodeName = "UNDEFINED") {
    super();
    this.nodeName = nodeName;
    this._prelimAttrs = /* @__PURE__ */ new Map();
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get nextSibling() {
    const n = this._item ? this._item.next : null;
    return n ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      n.content.type
    ) : null;
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get prevSibling() {
    const n = this._item ? this._item.prev : null;
    return n ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      n.content.type
    ) : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    /** @type {Map<string, any>} */
    this._prelimAttrs.forEach((value, key) => {
      this.setAttribute(key, value);
    });
    this._prelimAttrs = null;
  }
  /**
   * Creates an Item with the same effect as this Item (without position effect)
   *
   * @return {YXmlElement}
   */
  _copy() {
    return new _YXmlElement(this.nodeName);
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlElement<KV>}
   */
  clone() {
    const el = new _YXmlElement(this.nodeName);
    const attrs = this.getAttributes();
    forEach(attrs, (value, key) => {
      if (typeof value === "string") {
        el.setAttribute(key, value);
      }
    });
    el.insert(0, this.toArray().map((item) => item instanceof AbstractType ? item.clone() : item));
    return el;
  }
  /**
   * Returns the XML serialization of this YXmlElement.
   * The attributes are ordered by attribute-name, so you can easily use this
   * method to compare YXmlElements
   *
   * @return {string} The string representation of this type.
   *
   * @public
   */
  toString() {
    const attrs = this.getAttributes();
    const stringBuilder = [];
    const keys2 = [];
    for (const key in attrs) {
      keys2.push(key);
    }
    keys2.sort();
    const keysLen = keys2.length;
    for (let i = 0; i < keysLen; i++) {
      const key = keys2[i];
      stringBuilder.push(key + '="' + attrs[key] + '"');
    }
    const nodeName = this.nodeName.toLocaleLowerCase();
    const attrsString = stringBuilder.length > 0 ? " " + stringBuilder.join(" ") : "";
    return `<${nodeName}${attrsString}>${super.toString()}</${nodeName}>`;
  }
  /**
   * Removes an attribute from this YXmlElement.
   *
   * @param {string} attributeName The attribute name that is to be removed.
   *
   * @public
   */
  removeAttribute(attributeName) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapDelete(transaction, this, attributeName);
      });
    } else {
      this._prelimAttrs.delete(attributeName);
    }
  }
  /**
   * Sets or updates an attribute.
   *
   * @template {keyof KV & string} KEY
   *
   * @param {KEY} attributeName The attribute name that is to be set.
   * @param {KV[KEY]} attributeValue The attribute value that is to be set.
   *
   * @public
   */
  setAttribute(attributeName, attributeValue) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapSet(transaction, this, attributeName, attributeValue);
      });
    } else {
      this._prelimAttrs.set(attributeName, attributeValue);
    }
  }
  /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @template {keyof KV & string} KEY
   *
   * @param {KEY} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {KV[KEY]|undefined} The queried attribute value.
   *
   * @public
   */
  getAttribute(attributeName) {
    return (
      /** @type {any} */
      typeMapGet(this, attributeName)
    );
  }
  /**
   * Returns whether an attribute exists
   *
   * @param {string} attributeName The attribute name to check for existence.
   * @return {boolean} whether the attribute exists.
   *
   * @public
   */
  hasAttribute(attributeName) {
    return (
      /** @type {any} */
      typeMapHas(this, attributeName)
    );
  }
  /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @param {Snapshot} [snapshot]
   * @return {{ [Key in Extract<keyof KV,string>]?: KV[Key]}} A JSON Object that describes the attributes.
   *
   * @public
   */
  getAttributes(snapshot) {
    return (
      /** @type {any} */
      snapshot ? typeMapGetAllSnapshot(this, snapshot) : typeMapGetAll(this)
    );
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(_document = document, hooks = {}, binding) {
    const dom = _document.createElement(this.nodeName);
    const attrs = this.getAttributes();
    for (const key in attrs) {
      const value = attrs[key];
      if (typeof value === "string") {
        dom.setAttribute(key, value);
      }
    }
    typeListForEach(this, (yxml) => {
      dom.appendChild(yxml.toDOM(_document, hooks, binding));
    });
    if (binding !== void 0) {
      binding._createAssociation(dom, this);
    }
    return dom;
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(encoder) {
    encoder.writeTypeRef(YXmlElementRefID);
    encoder.writeKey(this.nodeName);
  }
};
var readYXmlElement = (decoder) => new YXmlElement(decoder.readKey());
var YXmlEvent = class extends YEvent {
  /**
   * @param {YXmlElement|YXmlText|YXmlFragment} target The target on which the event is created.
   * @param {Set<string|null>} subs The set of changed attributes. `null` is included if the
   *                   child list changed.
   * @param {Transaction} transaction The transaction instance with wich the
   *                                  change was created.
   */
  constructor(target, subs, transaction) {
    super(target, transaction);
    this.childListChanged = false;
    this.attributesChanged = /* @__PURE__ */ new Set();
    subs.forEach((sub) => {
      if (sub === null) {
        this.childListChanged = true;
      } else {
        this.attributesChanged.add(sub);
      }
    });
  }
};
var YXmlHook = class _YXmlHook extends YMap {
  /**
   * @param {string} hookName nodeName of the Dom Node.
   */
  constructor(hookName) {
    super();
    this.hookName = hookName;
  }
  /**
   * Creates an Item with the same effect as this Item (without position effect)
   */
  _copy() {
    return new _YXmlHook(this.hookName);
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlHook}
   */
  clone() {
    const el = new _YXmlHook(this.hookName);
    this.forEach((value, key) => {
      el.set(key, value);
    });
    return el;
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object.<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type
   * @return {Element} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(_document = document, hooks = {}, binding) {
    const hook = hooks[this.hookName];
    let dom;
    if (hook !== void 0) {
      dom = hook.createDom(this);
    } else {
      dom = document.createElement(this.hookName);
    }
    dom.setAttribute("data-yjs-hook", this.hookName);
    if (binding !== void 0) {
      binding._createAssociation(dom, this);
    }
    return dom;
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(encoder) {
    encoder.writeTypeRef(YXmlHookRefID);
    encoder.writeKey(this.hookName);
  }
};
var readYXmlHook = (decoder) => new YXmlHook(decoder.readKey());
var YXmlText = class _YXmlText extends YText {
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get nextSibling() {
    const n = this._item ? this._item.next : null;
    return n ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      n.content.type
    ) : null;
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get prevSibling() {
    const n = this._item ? this._item.prev : null;
    return n ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      n.content.type
    ) : null;
  }
  _copy() {
    return new _YXmlText();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlText}
   */
  clone() {
    const text2 = new _YXmlText();
    text2.applyDelta(this.toDelta());
    return text2;
  }
  /**
   * Creates a Dom Element that mirrors this YXmlText.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Text} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(_document = document, hooks, binding) {
    const dom = _document.createTextNode(this.toString());
    if (binding !== void 0) {
      binding._createAssociation(dom, this);
    }
    return dom;
  }
  toString() {
    return this.toDelta().map((delta) => {
      const nestedNodes = [];
      for (const nodeName in delta.attributes) {
        const attrs = [];
        for (const key in delta.attributes[nodeName]) {
          attrs.push({ key, value: delta.attributes[nodeName][key] });
        }
        attrs.sort((a, b) => a.key < b.key ? -1 : 1);
        nestedNodes.push({ nodeName, attrs });
      }
      nestedNodes.sort((a, b) => a.nodeName < b.nodeName ? -1 : 1);
      let str = "";
      for (let i = 0; i < nestedNodes.length; i++) {
        const node = nestedNodes[i];
        str += `<${node.nodeName}`;
        for (let j = 0; j < node.attrs.length; j++) {
          const attr = node.attrs[j];
          str += ` ${attr.key}="${attr.value}"`;
        }
        str += ">";
      }
      str += delta.insert;
      for (let i = nestedNodes.length - 1; i >= 0; i--) {
        str += `</${nestedNodes[i].nodeName}>`;
      }
      return str;
    }).join("");
  }
  /**
   * @return {string}
   */
  toJSON() {
    return this.toString();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(encoder) {
    encoder.writeTypeRef(YXmlTextRefID);
  }
};
var readYXmlText = (decoder) => new YXmlText();
var AbstractStruct = class {
  /**
   * @param {ID} id
   * @param {number} length
   */
  constructor(id2, length3) {
    this.id = id2;
    this.length = length3;
  }
  /**
   * @type {boolean}
   */
  get deleted() {
    throw methodUnimplemented();
  }
  /**
   * Merge this struct with the item to the right.
   * This method is already assuming that `this.id.clock + this.length === this.id.clock`.
   * Also this method does *not* remove right from StructStore!
   * @param {AbstractStruct} right
   * @return {boolean} wether this merged with right
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   * @param {number} encodingRef
   */
  write(encoder, offset, encodingRef) {
    throw methodUnimplemented();
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(transaction, offset) {
    throw methodUnimplemented();
  }
};
var structGCRefNumber = 0;
var GC = class extends AbstractStruct {
  get deleted() {
    return true;
  }
  delete() {
  }
  /**
   * @param {GC} right
   * @return {boolean}
   */
  mergeWith(right) {
    if (this.constructor !== right.constructor) {
      return false;
    }
    this.length += right.length;
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(transaction, offset) {
    if (offset > 0) {
      this.id.clock += offset;
      this.length -= offset;
    }
    addStruct(transaction.doc.store, this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeInfo(structGCRefNumber);
    encoder.writeLen(this.length - offset);
  }
  /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(transaction, store) {
    return null;
  }
};
var ContentBinary = class _ContentBinary {
  /**
   * @param {Uint8Array} content
   */
  constructor(content) {
    this.content = content;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.content];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentBinary}
   */
  copy() {
    return new _ContentBinary(this.content);
  }
  /**
   * @param {number} offset
   * @return {ContentBinary}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentBinary} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeBuf(this.content);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 3;
  }
};
var readContentBinary = (decoder) => new ContentBinary(decoder.readBuf());
var ContentDeleted = class _ContentDeleted {
  /**
   * @param {number} len
   */
  constructor(len) {
    this.len = len;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.len;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return false;
  }
  /**
   * @return {ContentDeleted}
   */
  copy() {
    return new _ContentDeleted(this.len);
  }
  /**
   * @param {number} offset
   * @return {ContentDeleted}
   */
  splice(offset) {
    const right = new _ContentDeleted(this.len - offset);
    this.len = offset;
    return right;
  }
  /**
   * @param {ContentDeleted} right
   * @return {boolean}
   */
  mergeWith(right) {
    this.len += right.len;
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
    addToDeleteSet(transaction.deleteSet, item.id.client, item.id.clock, this.len);
    item.markDeleted();
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeLen(this.len - offset);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 1;
  }
};
var readContentDeleted = (decoder) => new ContentDeleted(decoder.readLen());
var createDocFromOpts = (guid, opts) => new Doc({ guid, ...opts, shouldLoad: opts.shouldLoad || opts.autoLoad || false });
var ContentDoc = class _ContentDoc {
  /**
   * @param {Doc} doc
   */
  constructor(doc2) {
    if (doc2._item) {
      console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid.");
    }
    this.doc = doc2;
    const opts = {};
    this.opts = opts;
    if (!doc2.gc) {
      opts.gc = false;
    }
    if (doc2.autoLoad) {
      opts.autoLoad = true;
    }
    if (doc2.meta !== null) {
      opts.meta = doc2.meta;
    }
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.doc];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentDoc}
   */
  copy() {
    return new _ContentDoc(createDocFromOpts(this.doc.guid, this.opts));
  }
  /**
   * @param {number} offset
   * @return {ContentDoc}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentDoc} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
    this.doc._item = item;
    transaction.subdocsAdded.add(this.doc);
    if (this.doc.shouldLoad) {
      transaction.subdocsLoaded.add(this.doc);
    }
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
    if (transaction.subdocsAdded.has(this.doc)) {
      transaction.subdocsAdded.delete(this.doc);
    } else {
      transaction.subdocsRemoved.add(this.doc);
    }
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeString(this.doc.guid);
    encoder.writeAny(this.opts);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 9;
  }
};
var readContentDoc = (decoder) => new ContentDoc(createDocFromOpts(decoder.readString(), decoder.readAny()));
var ContentEmbed = class _ContentEmbed {
  /**
   * @param {Object} embed
   */
  constructor(embed) {
    this.embed = embed;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.embed];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentEmbed}
   */
  copy() {
    return new _ContentEmbed(this.embed);
  }
  /**
   * @param {number} offset
   * @return {ContentEmbed}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentEmbed} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeJSON(this.embed);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 5;
  }
};
var readContentEmbed = (decoder) => new ContentEmbed(decoder.readJSON());
var ContentFormat = class _ContentFormat {
  /**
   * @param {string} key
   * @param {Object} value
   */
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return false;
  }
  /**
   * @return {ContentFormat}
   */
  copy() {
    return new _ContentFormat(this.key, this.value);
  }
  /**
   * @param {number} _offset
   * @return {ContentFormat}
   */
  splice(_offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentFormat} _right
   * @return {boolean}
   */
  mergeWith(_right) {
    return false;
  }
  /**
   * @param {Transaction} _transaction
   * @param {Item} item
   */
  integrate(_transaction, item) {
    const p = (
      /** @type {YText} */
      item.parent
    );
    p._searchMarker = null;
    p._hasFormatting = true;
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeKey(this.key);
    encoder.writeJSON(this.value);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 6;
  }
};
var readContentFormat = (decoder) => new ContentFormat(decoder.readKey(), decoder.readJSON());
var ContentJSON = class _ContentJSON {
  /**
   * @param {Array<any>} arr
   */
  constructor(arr) {
    this.arr = arr;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.arr.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.arr;
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentJSON}
   */
  copy() {
    return new _ContentJSON(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentJSON}
   */
  splice(offset) {
    const right = new _ContentJSON(this.arr.slice(offset));
    this.arr = this.arr.slice(0, offset);
    return right;
  }
  /**
   * @param {ContentJSON} right
   * @return {boolean}
   */
  mergeWith(right) {
    this.arr = this.arr.concat(right.arr);
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    const len = this.arr.length;
    encoder.writeLen(len - offset);
    for (let i = offset; i < len; i++) {
      const c = this.arr[i];
      encoder.writeString(c === void 0 ? "undefined" : JSON.stringify(c));
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 2;
  }
};
var readContentJSON = (decoder) => {
  const len = decoder.readLen();
  const cs = [];
  for (let i = 0; i < len; i++) {
    const c = decoder.readString();
    if (c === "undefined") {
      cs.push(void 0);
    } else {
      cs.push(JSON.parse(c));
    }
  }
  return new ContentJSON(cs);
};
var ContentAny = class _ContentAny {
  /**
   * @param {Array<any>} arr
   */
  constructor(arr) {
    this.arr = arr;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.arr.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.arr;
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentAny}
   */
  copy() {
    return new _ContentAny(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentAny}
   */
  splice(offset) {
    const right = new _ContentAny(this.arr.slice(offset));
    this.arr = this.arr.slice(0, offset);
    return right;
  }
  /**
   * @param {ContentAny} right
   * @return {boolean}
   */
  mergeWith(right) {
    this.arr = this.arr.concat(right.arr);
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    const len = this.arr.length;
    encoder.writeLen(len - offset);
    for (let i = offset; i < len; i++) {
      const c = this.arr[i];
      encoder.writeAny(c);
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 8;
  }
};
var readContentAny = (decoder) => {
  const len = decoder.readLen();
  const cs = [];
  for (let i = 0; i < len; i++) {
    cs.push(decoder.readAny());
  }
  return new ContentAny(cs);
};
var ContentString = class _ContentString {
  /**
   * @param {string} str
   */
  constructor(str) {
    this.str = str;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.str.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.str.split("");
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentString}
   */
  copy() {
    return new _ContentString(this.str);
  }
  /**
   * @param {number} offset
   * @return {ContentString}
   */
  splice(offset) {
    const right = new _ContentString(this.str.slice(offset));
    this.str = this.str.slice(0, offset);
    const firstCharCode = this.str.charCodeAt(offset - 1);
    if (firstCharCode >= 55296 && firstCharCode <= 56319) {
      this.str = this.str.slice(0, offset - 1) + "\uFFFD";
      right.str = "\uFFFD" + right.str.slice(1);
    }
    return right;
  }
  /**
   * @param {ContentString} right
   * @return {boolean}
   */
  mergeWith(right) {
    this.str += right.str;
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeString(offset === 0 ? this.str : this.str.slice(offset));
  }
  /**
   * @return {number}
   */
  getRef() {
    return 4;
  }
};
var readContentString = (decoder) => new ContentString(decoder.readString());
var typeRefs = [
  readYArray,
  readYMap,
  readYText,
  readYXmlElement,
  readYXmlFragment,
  readYXmlHook,
  readYXmlText
];
var YArrayRefID = 0;
var YMapRefID = 1;
var YTextRefID = 2;
var YXmlElementRefID = 3;
var YXmlFragmentRefID = 4;
var YXmlHookRefID = 5;
var YXmlTextRefID = 6;
var ContentType = class _ContentType {
  /**
   * @param {AbstractType<any>} type
   */
  constructor(type) {
    this.type = type;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.type];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentType}
   */
  copy() {
    return new _ContentType(this.type._copy());
  }
  /**
   * @param {number} offset
   * @return {ContentType}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentType} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
    this.type._integrate(transaction.doc, item);
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
    let item = this.type._start;
    while (item !== null) {
      if (!item.deleted) {
        item.delete(transaction);
      } else if (item.id.clock < (transaction.beforeState.get(item.id.client) || 0)) {
        transaction._mergeStructs.push(item);
      }
      item = item.right;
    }
    this.type._map.forEach((item2) => {
      if (!item2.deleted) {
        item2.delete(transaction);
      } else if (item2.id.clock < (transaction.beforeState.get(item2.id.client) || 0)) {
        transaction._mergeStructs.push(item2);
      }
    });
    transaction.changed.delete(this.type);
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
    let item = this.type._start;
    while (item !== null) {
      item.gc(store, true);
      item = item.right;
    }
    this.type._start = null;
    this.type._map.forEach(
      /** @param {Item | null} item */
      (item2) => {
        while (item2 !== null) {
          item2.gc(store, true);
          item2 = item2.left;
        }
      }
    );
    this.type._map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    this.type._write(encoder);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 7;
  }
};
var readContentType = (decoder) => new ContentType(typeRefs[decoder.readTypeRef()](decoder));
var followRedone = (store, id2) => {
  let nextID = id2;
  let diff = 0;
  let item;
  do {
    if (diff > 0) {
      nextID = createID(nextID.client, nextID.clock + diff);
    }
    item = getItem(store, nextID);
    diff = nextID.clock - item.id.clock;
    nextID = item.redone;
  } while (nextID !== null && item instanceof Item);
  return {
    item,
    diff
  };
};
var splitItem = (transaction, leftItem, diff) => {
  const { client, clock } = leftItem.id;
  const rightItem = new Item(
    createID(client, clock + diff),
    leftItem,
    createID(client, clock + diff - 1),
    leftItem.right,
    leftItem.rightOrigin,
    leftItem.parent,
    leftItem.parentSub,
    leftItem.content.splice(diff)
  );
  if (leftItem.deleted) {
    rightItem.markDeleted();
  }
  if (leftItem.keep) {
    rightItem.keep = true;
  }
  if (leftItem.redone !== null) {
    rightItem.redone = createID(leftItem.redone.client, leftItem.redone.clock + diff);
  }
  leftItem.right = rightItem;
  if (rightItem.right !== null) {
    rightItem.right.left = rightItem;
  }
  transaction._mergeStructs.push(rightItem);
  if (rightItem.parentSub !== null && rightItem.right === null) {
    rightItem.parent._map.set(rightItem.parentSub, rightItem);
  }
  leftItem.length = diff;
  return rightItem;
};
var Item = class _Item extends AbstractStruct {
  /**
   * @param {ID} id
   * @param {Item | null} left
   * @param {ID | null} origin
   * @param {Item | null} right
   * @param {ID | null} rightOrigin
   * @param {AbstractType<any>|ID|null} parent Is a type if integrated, is null if it is possible to copy parent from left or right, is ID before integration to search for it.
   * @param {string | null} parentSub
   * @param {AbstractContent} content
   */
  constructor(id2, left, origin, right, rightOrigin, parent, parentSub, content) {
    super(id2, content.getLength());
    this.origin = origin;
    this.left = left;
    this.right = right;
    this.rightOrigin = rightOrigin;
    this.parent = parent;
    this.parentSub = parentSub;
    this.redone = null;
    this.content = content;
    this.info = this.content.isCountable() ? BIT2 : 0;
  }
  /**
   * This is used to mark the item as an indexed fast-search marker
   *
   * @type {boolean}
   */
  set marker(isMarked) {
    if ((this.info & BIT4) > 0 !== isMarked) {
      this.info ^= BIT4;
    }
  }
  get marker() {
    return (this.info & BIT4) > 0;
  }
  /**
   * If true, do not garbage collect this Item.
   */
  get keep() {
    return (this.info & BIT1) > 0;
  }
  set keep(doKeep) {
    if (this.keep !== doKeep) {
      this.info ^= BIT1;
    }
  }
  get countable() {
    return (this.info & BIT2) > 0;
  }
  /**
   * Whether this item was deleted or not.
   * @type {Boolean}
   */
  get deleted() {
    return (this.info & BIT3) > 0;
  }
  set deleted(doDelete) {
    if (this.deleted !== doDelete) {
      this.info ^= BIT3;
    }
  }
  markDeleted() {
    this.info |= BIT3;
  }
  /**
   * Return the creator clientID of the missing op or define missing items and return null.
   *
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(transaction, store) {
    if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= getState(store, this.origin.client)) {
      return this.origin.client;
    }
    if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= getState(store, this.rightOrigin.client)) {
      return this.rightOrigin.client;
    }
    if (this.parent && this.parent.constructor === ID && this.id.client !== this.parent.client && this.parent.clock >= getState(store, this.parent.client)) {
      return this.parent.client;
    }
    if (this.origin) {
      this.left = getItemCleanEnd(transaction, store, this.origin);
      this.origin = this.left.lastId;
    }
    if (this.rightOrigin) {
      this.right = getItemCleanStart(transaction, this.rightOrigin);
      this.rightOrigin = this.right.id;
    }
    if (this.left && this.left.constructor === GC || this.right && this.right.constructor === GC) {
      this.parent = null;
    } else if (!this.parent) {
      if (this.left && this.left.constructor === _Item) {
        this.parent = this.left.parent;
        this.parentSub = this.left.parentSub;
      }
      if (this.right && this.right.constructor === _Item) {
        this.parent = this.right.parent;
        this.parentSub = this.right.parentSub;
      }
    } else if (this.parent.constructor === ID) {
      const parentItem = getItem(store, this.parent);
      if (parentItem.constructor === GC) {
        this.parent = null;
      } else {
        this.parent = /** @type {ContentType} */
        parentItem.content.type;
      }
    }
    return null;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(transaction, offset) {
    if (offset > 0) {
      this.id.clock += offset;
      this.left = getItemCleanEnd(transaction, transaction.doc.store, createID(this.id.client, this.id.clock - 1));
      this.origin = this.left.lastId;
      this.content = this.content.splice(offset);
      this.length -= offset;
    }
    if (this.parent) {
      if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
        let left = this.left;
        let o;
        if (left !== null) {
          o = left.right;
        } else if (this.parentSub !== null) {
          o = /** @type {AbstractType<any>} */
          this.parent._map.get(this.parentSub) || null;
          while (o !== null && o.left !== null) {
            o = o.left;
          }
        } else {
          o = /** @type {AbstractType<any>} */
          this.parent._start;
        }
        const conflictingItems = /* @__PURE__ */ new Set();
        const itemsBeforeOrigin = /* @__PURE__ */ new Set();
        while (o !== null && o !== this.right) {
          itemsBeforeOrigin.add(o);
          conflictingItems.add(o);
          if (compareIDs(this.origin, o.origin)) {
            if (o.id.client < this.id.client) {
              left = o;
              conflictingItems.clear();
            } else if (compareIDs(this.rightOrigin, o.rightOrigin)) {
              break;
            }
          } else if (o.origin !== null && itemsBeforeOrigin.has(getItem(transaction.doc.store, o.origin))) {
            if (!conflictingItems.has(getItem(transaction.doc.store, o.origin))) {
              left = o;
              conflictingItems.clear();
            }
          } else {
            break;
          }
          o = o.right;
        }
        this.left = left;
      }
      if (this.left !== null) {
        const right = this.left.right;
        this.right = right;
        this.left.right = this;
      } else {
        let r;
        if (this.parentSub !== null) {
          r = /** @type {AbstractType<any>} */
          this.parent._map.get(this.parentSub) || null;
          while (r !== null && r.left !== null) {
            r = r.left;
          }
        } else {
          r = /** @type {AbstractType<any>} */
          this.parent._start;
          this.parent._start = this;
        }
        this.right = r;
      }
      if (this.right !== null) {
        this.right.left = this;
      } else if (this.parentSub !== null) {
        this.parent._map.set(this.parentSub, this);
        if (this.left !== null) {
          this.left.delete(transaction);
        }
      }
      if (this.parentSub === null && this.countable && !this.deleted) {
        this.parent._length += this.length;
      }
      addStruct(transaction.doc.store, this);
      this.content.integrate(transaction, this);
      addChangedTypeToTransaction(
        transaction,
        /** @type {AbstractType<any>} */
        this.parent,
        this.parentSub
      );
      if (
        /** @type {AbstractType<any>} */
        this.parent._item !== null && /** @type {AbstractType<any>} */
        this.parent._item.deleted || this.parentSub !== null && this.right !== null
      ) {
        this.delete(transaction);
      }
    } else {
      new GC(this.id, this.length).integrate(transaction, 0);
    }
  }
  /**
   * Returns the next non-deleted item
   */
  get next() {
    let n = this.right;
    while (n !== null && n.deleted) {
      n = n.right;
    }
    return n;
  }
  /**
   * Returns the previous non-deleted item
   */
  get prev() {
    let n = this.left;
    while (n !== null && n.deleted) {
      n = n.left;
    }
    return n;
  }
  /**
   * Computes the last content address of this Item.
   */
  get lastId() {
    return this.length === 1 ? this.id : createID(this.id.client, this.id.clock + this.length - 1);
  }
  /**
   * Try to merge two items
   *
   * @param {Item} right
   * @return {boolean}
   */
  mergeWith(right) {
    if (this.constructor === right.constructor && compareIDs(right.origin, this.lastId) && this.right === right && compareIDs(this.rightOrigin, right.rightOrigin) && this.id.client === right.id.client && this.id.clock + this.length === right.id.clock && this.deleted === right.deleted && this.redone === null && right.redone === null && this.content.constructor === right.content.constructor && this.content.mergeWith(right.content)) {
      const searchMarker = (
        /** @type {AbstractType<any>} */
        this.parent._searchMarker
      );
      if (searchMarker) {
        searchMarker.forEach((marker) => {
          if (marker.p === right) {
            marker.p = this;
            if (!this.deleted && this.countable) {
              marker.index -= this.length;
            }
          }
        });
      }
      if (right.keep) {
        this.keep = true;
      }
      this.right = right.right;
      if (this.right !== null) {
        this.right.left = this;
      }
      this.length += right.length;
      return true;
    }
    return false;
  }
  /**
   * Mark this Item as deleted.
   *
   * @param {Transaction} transaction
   */
  delete(transaction) {
    if (!this.deleted) {
      const parent = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      if (this.countable && this.parentSub === null) {
        parent._length -= this.length;
      }
      this.markDeleted();
      addToDeleteSet(transaction.deleteSet, this.id.client, this.id.clock, this.length);
      addChangedTypeToTransaction(transaction, parent, this.parentSub);
      this.content.delete(transaction);
    }
  }
  /**
   * @param {StructStore} store
   * @param {boolean} parentGCd
   */
  gc(store, parentGCd) {
    if (!this.deleted) {
      throw unexpectedCase();
    }
    this.content.gc(store);
    if (parentGCd) {
      replaceStruct(store, this, new GC(this.id, this.length));
    } else {
      this.content = new ContentDeleted(this.length);
    }
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   */
  write(encoder, offset) {
    const origin = offset > 0 ? createID(this.id.client, this.id.clock + offset - 1) : this.origin;
    const rightOrigin = this.rightOrigin;
    const parentSub = this.parentSub;
    const info = this.content.getRef() & BITS5 | (origin === null ? 0 : BIT8) | // origin is defined
    (rightOrigin === null ? 0 : BIT7) | // right origin is defined
    (parentSub === null ? 0 : BIT6);
    encoder.writeInfo(info);
    if (origin !== null) {
      encoder.writeLeftID(origin);
    }
    if (rightOrigin !== null) {
      encoder.writeRightID(rightOrigin);
    }
    if (origin === null && rightOrigin === null) {
      const parent = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      if (parent._item !== void 0) {
        const parentItem = parent._item;
        if (parentItem === null) {
          const ykey = findRootTypeKey(parent);
          encoder.writeParentInfo(true);
          encoder.writeString(ykey);
        } else {
          encoder.writeParentInfo(false);
          encoder.writeLeftID(parentItem.id);
        }
      } else if (parent.constructor === String) {
        encoder.writeParentInfo(true);
        encoder.writeString(parent);
      } else if (parent.constructor === ID) {
        encoder.writeParentInfo(false);
        encoder.writeLeftID(parent);
      } else {
        unexpectedCase();
      }
      if (parentSub !== null) {
        encoder.writeString(parentSub);
      }
    }
    this.content.write(encoder, offset);
  }
};
var readItemContent = (decoder, info) => contentRefs[info & BITS5](decoder);
var contentRefs = [
  () => {
    unexpectedCase();
  },
  // GC is not ItemContent
  readContentDeleted,
  // 1
  readContentJSON,
  // 2
  readContentBinary,
  // 3
  readContentString,
  // 4
  readContentEmbed,
  // 5
  readContentFormat,
  // 6
  readContentType,
  // 7
  readContentAny,
  // 8
  readContentDoc,
  // 9
  () => {
    unexpectedCase();
  }
  // 10 - Skip is not ItemContent
];
var structSkipRefNumber = 10;
var Skip = class extends AbstractStruct {
  get deleted() {
    return true;
  }
  delete() {
  }
  /**
   * @param {Skip} right
   * @return {boolean}
   */
  mergeWith(right) {
    if (this.constructor !== right.constructor) {
      return false;
    }
    this.length += right.length;
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(transaction, offset) {
    unexpectedCase();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeInfo(structSkipRefNumber);
    writeVarUint(encoder.restEncoder, this.length - offset);
  }
  /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(transaction, store) {
    return null;
  }
};
var glo = (
  /** @type {any} */
  typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {}
);
var importIdentifier = "__ $YJS$ __";
if (glo[importIdentifier] === true) {
  console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");
}
glo[importIdentifier] = true;

// node_modules/y-quill/src/y-quill.js
var updateCursor = (quillCursors, aw, clientId, doc2, type) => {
  try {
    if (aw && aw.cursor && clientId !== doc2.clientID) {
      const user = aw.user || {};
      const color = user.color || "#ffa500";
      const name = user.name || `User: ${clientId}`;
      quillCursors.createCursor(clientId.toString(), name, color);
      const anchor = createAbsolutePositionFromRelativePosition(createRelativePositionFromJSON(aw.cursor.anchor), doc2);
      const head = createAbsolutePositionFromRelativePosition(createRelativePositionFromJSON(aw.cursor.head), doc2);
      if (anchor && head && anchor.type === type) {
        quillCursors.moveCursor(clientId.toString(), { index: anchor.index, length: head.index - anchor.index });
      }
    } else {
      quillCursors.removeCursor(clientId.toString());
    }
  } catch (err) {
    console.error(err);
  }
};
var QuillBinding = class {
  /**
   * @param {Y.Text} type
   * @param {any} quill
   * @param {Awareness} [awareness]
   */
  constructor(type, quill, awareness) {
    const doc2 = (
      /** @type {Y.Doc} */
      type.doc
    );
    this.type = type;
    this.doc = doc2;
    this.quill = quill;
    const quillCursors = quill.getModule("cursors") || null;
    this.quillCursors = quillCursors;
    this._negatedUsedFormats = {};
    this.awareness = awareness;
    this._awarenessChange = ({ added, removed, updated }) => {
      const states = (
        /** @type {Awareness} */
        awareness.getStates()
      );
      added.forEach((id2) => {
        updateCursor(quillCursors, states.get(id2), id2, doc2, type);
      });
      updated.forEach((id2) => {
        updateCursor(quillCursors, states.get(id2), id2, doc2, type);
      });
      removed.forEach((id2) => {
        quillCursors.removeCursor(id2.toString());
      });
    };
    this._typeObserver = (event) => {
      if (event.transaction.origin !== this) {
        const eventDelta = event.delta;
        const delta = [];
        for (let i = 0; i < eventDelta.length; i++) {
          const d = eventDelta[i];
          if (d.insert !== void 0) {
            delta.push(Object.assign({}, d, { attributes: Object.assign({}, this._negatedUsedFormats, d.attributes || {}) }));
          } else {
            delta.push(d);
          }
        }
        quill.updateContents(delta, this);
      }
    };
    type.observe(this._typeObserver);
    this._quillObserver = (eventType, delta, state, origin) => {
      if (delta && delta.ops) {
        const ops = delta.ops;
        ops.forEach((op) => {
          if (op.attributes !== void 0) {
            for (const key in op.attributes) {
              if (this._negatedUsedFormats[key] === void 0) {
                this._negatedUsedFormats[key] = false;
              }
            }
          }
        });
        if (origin !== this) {
          doc2.transact(() => {
            type.applyDelta(ops);
          }, this);
        }
      }
      if (awareness && quillCursors) {
        const sel = quill.getSelection();
        const aw = (
          /** @type {any} */
          awareness.getLocalState()
        );
        if (sel === null) {
          if (awareness.getLocalState() !== null) {
            awareness.setLocalStateField(
              "cursor",
              /** @type {any} */
              null
            );
          }
        } else {
          const anchor = createRelativePositionFromTypeIndex(type, sel.index);
          const head = createRelativePositionFromTypeIndex(type, sel.index + sel.length);
          if (!aw || !aw.cursor || !compareRelativePositions(anchor, aw.cursor.anchor) || !compareRelativePositions(head, aw.cursor.head)) {
            awareness.setLocalStateField("cursor", {
              anchor,
              head
            });
          }
        }
        awareness.getStates().forEach((aw2, clientId) => {
          updateCursor(quillCursors, aw2, clientId, doc2, type);
        });
      }
    };
    quill.on("editor-change", this._quillObserver);
    quill.setContents(type.toDelta(), this);
    if (quillCursors !== null && awareness) {
      awareness.getStates().forEach((aw, clientId) => {
        updateCursor(quillCursors, aw, clientId, doc2, type);
      });
      awareness.on("change", this._awarenessChange);
    }
  }
  destroy() {
    this.type.unobserve(this._typeObserver);
    this.quill.off("editor-change", this._quillObserver);
    if (this.awareness) {
      this.awareness.off("change", this._awarenessChange);
    }
  }
};

// node_modules/y-partykit/dist/chunk-2H6M6QIA.mjs
var CHUNK_MAX_SIZE = 1e6;
var BATCH_SENTINEL = "y-pk-batch";
var warnedAboutLargeMessage = false;
var sendChunked = (data, ws) => {
  if (data.byteLength <= CHUNK_MAX_SIZE) {
    ws.send(data);
    return;
  }
  if (!warnedAboutLargeMessage) {
    console.warn(
      "[y-partykit]",
      "The Y.js update size exceeds 1MB, which is the maximum size for an individual update. The update will be split into chunks. This is an experimental feature.",
      `Message size: ${(data.byteLength / 1e3 / 1e3).toFixed(1)}MB`
    );
    warnedAboutLargeMessage = true;
  }
  const id2 = (Date.now() + Math.random()).toString(36).substring(10);
  const chunks = Math.ceil(data.byteLength / CHUNK_MAX_SIZE);
  ws.send(
    serializeBatchMarker({
      id: id2,
      type: "start",
      size: data.byteLength,
      count: chunks
    })
  );
  let sentSize = 0;
  let sentChunks = 0;
  for (let i = 0; i < chunks; i++) {
    const chunk = data.slice(CHUNK_MAX_SIZE * i, CHUNK_MAX_SIZE * (i + 1));
    ws.send(chunk);
    sentChunks += 1;
    sentSize += chunk.byteLength;
  }
  ws.send(
    serializeBatchMarker({
      id: id2,
      type: "end",
      size: sentSize,
      count: sentChunks
    })
  );
};
function serializeBatchMarker(batch) {
  return `${BATCH_SENTINEL}#${JSON.stringify(batch)}`;
}

// node_modules/lib0/broadcastchannel.js
var channels = /* @__PURE__ */ new Map();
var LocalStoragePolyfill = class {
  /**
   * @param {string} room
   */
  constructor(room) {
    this.room = room;
    this.onmessage = null;
    this._onChange = (e) => e.key === room && this.onmessage !== null && this.onmessage({ data: fromBase64(e.newValue || "") });
    onChange(this._onChange);
  }
  /**
   * @param {ArrayBuffer} buf
   */
  postMessage(buf) {
    varStorage.setItem(this.room, toBase64(createUint8ArrayFromArrayBuffer(buf)));
  }
  close() {
    offChange(this._onChange);
  }
};
var BC = typeof BroadcastChannel === "undefined" ? LocalStoragePolyfill : BroadcastChannel;
var getChannel = (room) => setIfUndefined(channels, room, () => {
  const subs = create2();
  const bc = new BC(room);
  bc.onmessage = (e) => subs.forEach((sub) => sub(e.data, "broadcastchannel"));
  return {
    bc,
    subs
  };
});
var subscribe = (room, f) => {
  getChannel(room).subs.add(f);
  return f;
};
var unsubscribe = (room, f) => {
  const channel = getChannel(room);
  const unsubscribed = channel.subs.delete(f);
  if (unsubscribed && channel.subs.size === 0) {
    channel.bc.close();
    channels.delete(room);
  }
  return unsubscribed;
};
var publish = (room, data, origin = null) => {
  const c = getChannel(room);
  c.bc.postMessage(data);
  c.subs.forEach((sub) => sub(data, origin));
};

// node_modules/lib0/url.js
var encodeQueryParams = (params2) => map2(params2, (val, key) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`).join("&");

// node_modules/y-protocols/auth.js
var messagePermissionDenied = 0;
var readAuthMessage = (decoder, y, permissionDeniedHandler2) => {
  switch (readVarUint(decoder)) {
    case messagePermissionDenied:
      permissionDeniedHandler2(y, readVarString(decoder));
  }
};

// node_modules/y-protocols/awareness.js
var outdatedTimeout = 3e4;
var Awareness = class extends Observable {
  /**
   * @param {Y.Doc} doc
   */
  constructor(doc2) {
    super();
    this.doc = doc2;
    this.clientID = doc2.clientID;
    this.states = /* @__PURE__ */ new Map();
    this.meta = /* @__PURE__ */ new Map();
    this._checkInterval = /** @type {any} */
    setInterval(() => {
      const now = getUnixTime();
      if (this.getLocalState() !== null && outdatedTimeout / 2 <= now - /** @type {{lastUpdated:number}} */
      this.meta.get(this.clientID).lastUpdated) {
        this.setLocalState(this.getLocalState());
      }
      const remove = [];
      this.meta.forEach((meta, clientid) => {
        if (clientid !== this.clientID && outdatedTimeout <= now - meta.lastUpdated && this.states.has(clientid)) {
          remove.push(clientid);
        }
      });
      if (remove.length > 0) {
        removeAwarenessStates(this, remove, "timeout");
      }
    }, floor(outdatedTimeout / 10));
    doc2.on("destroy", () => {
      this.destroy();
    });
    this.setLocalState({});
  }
  destroy() {
    this.emit("destroy", [this]);
    this.setLocalState(null);
    super.destroy();
    clearInterval(this._checkInterval);
  }
  /**
   * @return {Object<string,any>|null}
   */
  getLocalState() {
    return this.states.get(this.clientID) || null;
  }
  /**
   * @param {Object<string,any>|null} state
   */
  setLocalState(state) {
    const clientID = this.clientID;
    const currLocalMeta = this.meta.get(clientID);
    const clock = currLocalMeta === void 0 ? 0 : currLocalMeta.clock + 1;
    const prevState = this.states.get(clientID);
    if (state === null) {
      this.states.delete(clientID);
    } else {
      this.states.set(clientID, state);
    }
    this.meta.set(clientID, {
      clock,
      lastUpdated: getUnixTime()
    });
    const added = [];
    const updated = [];
    const filteredUpdated = [];
    const removed = [];
    if (state === null) {
      removed.push(clientID);
    } else if (prevState == null) {
      if (state != null) {
        added.push(clientID);
      }
    } else {
      updated.push(clientID);
      if (!equalityDeep(prevState, state)) {
        filteredUpdated.push(clientID);
      }
    }
    if (added.length > 0 || filteredUpdated.length > 0 || removed.length > 0) {
      this.emit("change", [{ added, updated: filteredUpdated, removed }, "local"]);
    }
    this.emit("update", [{ added, updated, removed }, "local"]);
  }
  /**
   * @param {string} field
   * @param {any} value
   */
  setLocalStateField(field, value) {
    const state = this.getLocalState();
    if (state !== null) {
      this.setLocalState({
        ...state,
        [field]: value
      });
    }
  }
  /**
   * @return {Map<number,Object<string,any>>}
   */
  getStates() {
    return this.states;
  }
};
var removeAwarenessStates = (awareness, clients, origin) => {
  const removed = [];
  for (let i = 0; i < clients.length; i++) {
    const clientID = clients[i];
    if (awareness.states.has(clientID)) {
      awareness.states.delete(clientID);
      if (clientID === awareness.clientID) {
        const curMeta = (
          /** @type {MetaClientState} */
          awareness.meta.get(clientID)
        );
        awareness.meta.set(clientID, {
          clock: curMeta.clock + 1,
          lastUpdated: getUnixTime()
        });
      }
      removed.push(clientID);
    }
  }
  if (removed.length > 0) {
    awareness.emit("change", [{ added: [], updated: [], removed }, origin]);
    awareness.emit("update", [{ added: [], updated: [], removed }, origin]);
  }
};
var encodeAwarenessUpdate = (awareness, clients, states = awareness.states) => {
  const len = clients.length;
  const encoder = createEncoder();
  writeVarUint(encoder, len);
  for (let i = 0; i < len; i++) {
    const clientID = clients[i];
    const state = states.get(clientID) || null;
    const clock = (
      /** @type {MetaClientState} */
      awareness.meta.get(clientID).clock
    );
    writeVarUint(encoder, clientID);
    writeVarUint(encoder, clock);
    writeVarString(encoder, JSON.stringify(state));
  }
  return toUint8Array(encoder);
};
var applyAwarenessUpdate = (awareness, update, origin) => {
  const decoder = createDecoder(update);
  const timestamp = getUnixTime();
  const added = [];
  const updated = [];
  const filteredUpdated = [];
  const removed = [];
  const len = readVarUint(decoder);
  for (let i = 0; i < len; i++) {
    const clientID = readVarUint(decoder);
    let clock = readVarUint(decoder);
    const state = JSON.parse(readVarString(decoder));
    const clientMeta = awareness.meta.get(clientID);
    const prevState = awareness.states.get(clientID);
    const currClock = clientMeta === void 0 ? 0 : clientMeta.clock;
    if (currClock < clock || currClock === clock && state === null && awareness.states.has(clientID)) {
      if (state === null) {
        if (clientID === awareness.clientID && awareness.getLocalState() != null) {
          clock++;
        } else {
          awareness.states.delete(clientID);
        }
      } else {
        awareness.states.set(clientID, state);
      }
      awareness.meta.set(clientID, {
        clock,
        lastUpdated: timestamp
      });
      if (clientMeta === void 0 && state !== null) {
        added.push(clientID);
      } else if (clientMeta !== void 0 && state === null) {
        removed.push(clientID);
      } else if (state !== null) {
        if (!equalityDeep(state, prevState)) {
          filteredUpdated.push(clientID);
        }
        updated.push(clientID);
      }
    }
  }
  if (added.length > 0 || filteredUpdated.length > 0 || removed.length > 0) {
    awareness.emit("change", [{
      added,
      updated: filteredUpdated,
      removed
    }, origin]);
  }
  if (added.length > 0 || updated.length > 0 || removed.length > 0) {
    awareness.emit("update", [{
      added,
      updated,
      removed
    }, origin]);
  }
};

// node_modules/y-protocols/sync.js
var messageYjsSyncStep1 = 0;
var messageYjsSyncStep2 = 1;
var messageYjsUpdate = 2;
var writeSyncStep1 = (encoder, doc2) => {
  writeVarUint(encoder, messageYjsSyncStep1);
  const sv = encodeStateVector(doc2);
  writeVarUint8Array(encoder, sv);
};
var writeSyncStep2 = (encoder, doc2, encodedStateVector) => {
  writeVarUint(encoder, messageYjsSyncStep2);
  writeVarUint8Array(encoder, encodeStateAsUpdate(doc2, encodedStateVector));
};
var readSyncStep1 = (decoder, encoder, doc2) => writeSyncStep2(encoder, doc2, readVarUint8Array(decoder));
var readSyncStep2 = (decoder, doc2, transactionOrigin) => {
  try {
    applyUpdate(doc2, readVarUint8Array(decoder), transactionOrigin);
  } catch (error) {
    console.error("Caught error while handling a Yjs update", error);
  }
};
var writeUpdate = (encoder, update) => {
  writeVarUint(encoder, messageYjsUpdate);
  writeVarUint8Array(encoder, update);
};
var readUpdate = readSyncStep2;
var readSyncMessage = (decoder, encoder, doc2, transactionOrigin) => {
  const messageType = readVarUint(decoder);
  switch (messageType) {
    case messageYjsSyncStep1:
      readSyncStep1(decoder, encoder, doc2);
      break;
    case messageYjsSyncStep2:
      readSyncStep2(decoder, doc2, transactionOrigin);
      break;
    case messageYjsUpdate:
      readUpdate(decoder, doc2, transactionOrigin);
      break;
    default:
      throw new Error("Unknown message type");
  }
  return messageType;
};

// node_modules/y-partykit/dist/chunk-GI7AK7P4.mjs
var messageSync = 0;
var messageQueryAwareness = 3;
var messageAwareness = 1;
var messageAuth = 2;
var DEFAULT_DISABLE_BC = typeof window === "undefined";
function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}
var messageHandlers = [];
messageHandlers[messageSync] = (encoder, decoder, provider, emitSynced, _messageType) => {
  writeVarUint(encoder, messageSync);
  const syncMessageType = readSyncMessage(
    decoder,
    encoder,
    provider.doc,
    provider
  );
  if (emitSynced && syncMessageType === messageYjsSyncStep2 && !provider.synced) {
    provider.synced = true;
  }
};
messageHandlers[messageQueryAwareness] = (encoder, _decoder, provider, _emitSynced, _messageType) => {
  writeVarUint(encoder, messageAwareness);
  writeVarUint8Array(
    encoder,
    encodeAwarenessUpdate(
      provider.awareness,
      Array.from(provider.awareness.getStates().keys())
    )
  );
};
messageHandlers[messageAwareness] = (_encoder, decoder, provider, _emitSynced, _messageType) => {
  applyAwarenessUpdate(
    provider.awareness,
    readVarUint8Array(decoder),
    provider
  );
};
messageHandlers[messageAuth] = (_encoder, decoder, provider, _emitSynced, _messageType) => {
  readAuthMessage(
    decoder,
    provider.doc,
    (_ydoc, reason) => permissionDeniedHandler(provider, reason)
  );
};
var messageReconnectTimeout = 3e4;
function permissionDeniedHandler(provider, reason) {
  console.warn(`Permission denied to access ${provider.url}.
${reason}`);
}
function readMessage(provider, buf, emitSynced) {
  const decoder = createDecoder(buf);
  const encoder = createEncoder();
  const messageType = readVarUint(decoder);
  const messageHandler = provider.messageHandlers[messageType];
  if (
    /** @type {any} */
    messageHandler
  ) {
    messageHandler(encoder, decoder, provider, emitSynced, messageType);
  } else {
    console.error("Unable to compute message");
  }
  return encoder;
}
function setupWS(provider) {
  if (provider.shouldConnect && provider.ws === null) {
    if (!provider._WS) {
      throw new Error(
        "No WebSocket implementation available, did you forget to pass options.WebSocketPolyfill?"
      );
    }
    const websocket = new provider._WS(provider.url);
    websocket.binaryType = "arraybuffer";
    provider.ws = websocket;
    provider.wsconnecting = true;
    provider.wsconnected = false;
    provider.synced = false;
    websocket.addEventListener("message", (event) => {
      if (typeof event.data === "string") {
        return;
      }
      provider.wsLastMessageReceived = getUnixTime();
      const encoder = readMessage(provider, new Uint8Array(event.data), true);
      if (length(encoder) > 1) {
        sendChunked(toUint8Array(encoder), websocket);
      }
    });
    websocket.addEventListener("error", (event) => {
      provider.emit("connection-error", [event, provider]);
    });
    websocket.addEventListener("close", (event) => {
      provider.emit("connection-close", [event, provider]);
      provider.ws = null;
      provider.wsconnecting = false;
      if (provider.wsconnected) {
        provider.wsconnected = false;
        provider.synced = false;
        removeAwarenessStates(
          provider.awareness,
          Array.from(provider.awareness.getStates().keys()).filter(
            (client) => client !== provider.doc.clientID
          ),
          provider
        );
        provider.emit("status", [
          {
            status: "disconnected"
          }
        ]);
      } else {
        provider.wsUnsuccessfulReconnects++;
      }
      setTimeout(
        setupWS,
        min(
          pow(2, provider.wsUnsuccessfulReconnects) * 100,
          provider.maxBackoffTime
        ),
        provider
      );
    });
    websocket.addEventListener("open", () => {
      provider.wsLastMessageReceived = getUnixTime();
      provider.wsconnecting = false;
      provider.wsconnected = true;
      provider.wsUnsuccessfulReconnects = 0;
      provider.emit("status", [
        {
          status: "connected"
        }
      ]);
      const encoder = createEncoder();
      writeVarUint(encoder, messageSync);
      writeSyncStep1(encoder, provider.doc);
      sendChunked(toUint8Array(encoder), websocket);
      if (provider.awareness.getLocalState() !== null) {
        const encoderAwarenessState = createEncoder();
        writeVarUint(encoderAwarenessState, messageAwareness);
        writeVarUint8Array(
          encoderAwarenessState,
          encodeAwarenessUpdate(provider.awareness, [
            provider.doc.clientID
          ])
        );
        sendChunked(toUint8Array(encoderAwarenessState), websocket);
      }
    });
    provider.emit("status", [
      {
        status: "connecting"
      }
    ]);
  }
}
function broadcastMessage(provider, buf) {
  const ws = provider.ws;
  if (provider.wsconnected && ws && ws.readyState === ws.OPEN) {
    sendChunked(buf, ws);
  }
  if (provider.bcconnected) {
    publish(provider.bcChannel, buf, provider);
  }
}
var DefaultWebSocket = typeof WebSocket === "undefined" ? null : WebSocket;
var WebsocketProvider = class extends Observable {
  maxBackoffTime;
  bcChannel;
  url;
  roomname;
  doc;
  _WS;
  awareness;
  wsconnected;
  wsconnecting;
  bcconnected;
  disableBc;
  wsUnsuccessfulReconnects;
  messageHandlers;
  _synced;
  ws;
  wsLastMessageReceived;
  shouldConnect;
  // Whether to connect to other peers or not
  _resyncInterval;
  _bcSubscriber;
  _updateHandler;
  _awarenessUpdateHandler;
  _unloadHandler;
  _checkInterval;
  constructor(serverUrl, roomname, doc2, {
    connect = true,
    awareness = new Awareness(doc2),
    params: params2 = {},
    WebSocketPolyfill = DefaultWebSocket,
    // Optionally provide a WebSocket polyfill
    resyncInterval = -1,
    // Request server state every `resyncInterval` milliseconds
    maxBackoffTime = 2500,
    // Maximum amount of time to wait before trying to reconnect (we try to reconnect using exponential backoff)
    disableBc = DEFAULT_DISABLE_BC
    // Disable cross-tab BroadcastChannel communication
  } = {}) {
    super();
    while (serverUrl[serverUrl.length - 1] === "/") {
      serverUrl = serverUrl.slice(0, serverUrl.length - 1);
    }
    const encodedParams = encodeQueryParams(params2);
    this.maxBackoffTime = maxBackoffTime;
    this.bcChannel = serverUrl + "/" + roomname;
    this.url = serverUrl + "/" + roomname + (encodedParams.length === 0 ? "" : "?" + encodedParams);
    this.roomname = roomname;
    this.doc = doc2;
    this._WS = WebSocketPolyfill;
    this.awareness = awareness;
    this.wsconnected = false;
    this.wsconnecting = false;
    this.bcconnected = false;
    this.disableBc = disableBc;
    this.wsUnsuccessfulReconnects = 0;
    this.messageHandlers = messageHandlers.slice();
    this._synced = false;
    this.ws = null;
    this.wsLastMessageReceived = 0;
    this.shouldConnect = connect;
    this._resyncInterval = 0;
    if (resyncInterval > 0) {
      this._resyncInterval = /** @type {any} */
      setInterval(() => {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
          const encoder = createEncoder();
          writeVarUint(encoder, messageSync);
          writeSyncStep1(encoder, doc2);
          sendChunked(toUint8Array(encoder), this.ws);
        }
      }, resyncInterval);
    }
    this._bcSubscriber = (data, origin) => {
      if (origin !== this) {
        const encoder = readMessage(this, new Uint8Array(data), false);
        if (length(encoder) > 1) {
          publish(this.bcChannel, toUint8Array(encoder), this);
        }
      }
    };
    this._updateHandler = (update, origin) => {
      if (origin !== this) {
        const encoder = createEncoder();
        writeVarUint(encoder, messageSync);
        writeUpdate(encoder, update);
        broadcastMessage(this, toUint8Array(encoder));
      }
    };
    this.doc.on("update", this._updateHandler);
    this._awarenessUpdateHandler = ({ added, updated, removed }, _origin) => {
      const changedClients = added.concat(updated).concat(removed);
      const encoder = createEncoder();
      writeVarUint(encoder, messageAwareness);
      writeVarUint8Array(
        encoder,
        encodeAwarenessUpdate(awareness, changedClients)
      );
      broadcastMessage(this, toUint8Array(encoder));
    };
    this._unloadHandler = () => {
      removeAwarenessStates(
        this.awareness,
        [doc2.clientID],
        "window unload"
      );
    };
    if (typeof window !== "undefined") {
      window.addEventListener("unload", this._unloadHandler);
    } else if (typeof process !== "undefined" && typeof process.on === "function") {
      process.on("exit", this._unloadHandler);
    }
    awareness.on("update", this._awarenessUpdateHandler);
    this._checkInterval = /** @type {any} */
    setInterval(() => {
      if (this.wsconnected && messageReconnectTimeout < getUnixTime() - this.wsLastMessageReceived) {
        assert(this.ws !== null, "ws must not be null");
        this.ws.close();
      }
    }, messageReconnectTimeout / 10);
    if (connect) {
      this.connect();
    }
  }
  /**
   * @type {boolean}
   */
  get synced() {
    return this._synced;
  }
  set synced(state) {
    if (this._synced !== state) {
      this._synced = state;
      this.emit("synced", [state]);
      this.emit("sync", [state]);
    }
  }
  destroy() {
    if (this._resyncInterval !== 0) {
      clearInterval(this._resyncInterval);
    }
    clearInterval(this._checkInterval);
    this.disconnect();
    if (typeof window !== "undefined") {
      window.removeEventListener("unload", this._unloadHandler);
    } else if (typeof process !== "undefined" && typeof process.off === "function") {
      process.off("exit", this._unloadHandler);
    }
    this.awareness.off("update", this._awarenessUpdateHandler);
    this.doc.off("update", this._updateHandler);
    super.destroy();
  }
  connectBc() {
    if (this.disableBc) {
      return;
    }
    if (!this.bcconnected) {
      subscribe(this.bcChannel, this._bcSubscriber);
      this.bcconnected = true;
    }
    const encoderSync = createEncoder();
    writeVarUint(encoderSync, messageSync);
    writeSyncStep1(encoderSync, this.doc);
    publish(this.bcChannel, toUint8Array(encoderSync), this);
    const encoderState = createEncoder();
    writeVarUint(encoderState, messageSync);
    writeSyncStep2(encoderState, this.doc);
    publish(this.bcChannel, toUint8Array(encoderState), this);
    const encoderAwarenessQuery = createEncoder();
    writeVarUint(encoderAwarenessQuery, messageQueryAwareness);
    publish(
      this.bcChannel,
      toUint8Array(encoderAwarenessQuery),
      this
    );
    const encoderAwarenessState = createEncoder();
    writeVarUint(encoderAwarenessState, messageAwareness);
    writeVarUint8Array(
      encoderAwarenessState,
      encodeAwarenessUpdate(this.awareness, [
        this.doc.clientID
      ])
    );
    publish(
      this.bcChannel,
      toUint8Array(encoderAwarenessState),
      this
    );
  }
  disconnectBc() {
    const encoder = createEncoder();
    writeVarUint(encoder, messageAwareness);
    writeVarUint8Array(
      encoder,
      encodeAwarenessUpdate(
        this.awareness,
        [this.doc.clientID],
        /* @__PURE__ */ new Map()
      )
    );
    broadcastMessage(this, toUint8Array(encoder));
    if (this.bcconnected) {
      unsubscribe(this.bcChannel, this._bcSubscriber);
      this.bcconnected = false;
    }
  }
  disconnect() {
    this.shouldConnect = false;
    this.disconnectBc();
    if (this.ws !== null) {
      this.ws.close();
    }
  }
  connect() {
    this.shouldConnect = true;
    if (!this.wsconnected && this.ws === null) {
      setupWS(this);
      this.connectBc();
    }
  }
};
function generateUUID() {
  if (crypto && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  let d = (/* @__PURE__ */ new Date()).getTime();
  let d2 = typeof performance !== "undefined" && performance.now && performance.now() * 1e3 || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    let r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : r & 3 | 8).toString(16);
  });
}
function assertType(value, label, type) {
  if (typeof value !== type) {
    throw new Error(
      `Invalid "${label}" parameter provided to YPartyKitProvider. Expected: ${type}, received: ${value}`
    );
  }
}
var YPartyKitProvider = class extends WebsocketProvider {
  id;
  #params;
  constructor(host, room, doc2, options = {}) {
    assertType(host, "host", "string");
    assertType(room, "room", "string");
    host = host.replace(/^(http|https|ws|wss):\/\//, "");
    if (host.endsWith("/")) {
      host.slice(0, -1);
    }
    const serverUrl = `${options.protocol || (host.startsWith("localhost:") || host.startsWith("127.0.0.1:") || host.startsWith("192.168.") || host.startsWith("10.") || host.startsWith("172.") && host.split(".")[1] >= "16" && host.split(".")[1] <= "31" ? "ws" : "wss")}://${host}${options.party ? `/parties/${options.party}` : "/party"}`;
    const id2 = options.connectionId ?? generateUUID();
    const { params: params2, connect = true, ...rest } = options;
    const baseOptions = {
      ...rest,
      connect: false
    };
    super(serverUrl, room, doc2 ?? new Doc(), baseOptions);
    this.id = id2;
    this.#params = params2;
    if (connect) {
      void this.connect();
    }
  }
  connect() {
    Promise.resolve(
      typeof this.#params === "function" ? this.#params() : this.#params
    ).then((nextParams) => {
      const urlParams = new URLSearchParams([["_pk", this.id]]);
      if (nextParams) {
        for (const [key, value] of Object.entries(nextParams)) {
          if (value !== null && value !== void 0) {
            urlParams.append(key, value);
          }
        }
      }
      const nextUrl = new URL(this.url);
      nextUrl.search = urlParams.toString();
      this.url = nextUrl.toString();
      super.connect();
    }).catch((err) => {
      console.error("Failed to open connecton to PartyKit", err);
      throw new Error(err);
    });
  }
};

// node_modules/y-partykit/dist/react.mjs
var import_react = __toESM(require_react(), 1);
function useYProvider(yProviderOptions) {
  const { host, room, party, doc: doc2, options } = yProviderOptions;
  const [provider] = (0, import_react.useState)(
    () => new YPartyKitProvider(
      host || (typeof window !== "undefined" ? window.location.host : "dummy-domain.com"),
      room,
      doc2,
      {
        connect: false,
        party,
        ...options
      }
    )
  );
  (0, import_react.useEffect)(() => {
    provider.connect();
    return () => provider.disconnect();
  }, [provider]);
  return provider;
}

// components/EditorComponent/Editor.tsx
var import_quill_cursors = __toESM(require_quill_cursors());

// party/types.ts
var SINGLETON_ROOM_ID = "index";

// components/EditorComponent/Editor.tsx
import_react_quill.Quill.register("modules/cursors", import_quill_cursors.default);
function Editor({
  room,
  userColor
}) {
  const ydoc = new Doc();
  const [text2, setText] = (0, import_react2.useState)("");
  const quill = (0, import_react2.useRef)(null);
  const provider = useYProvider({
    host: "localhost:1999",
    // optional, defaults to window.location.host
    party: "server",
    room: SINGLETON_ROOM_ID,
    doc: ydoc
  });
  (0, import_react2.useEffect)(() => {
    if (typeof window !== "undefined") {
      const ytext = provider.doc.getText("quill");
      const editor = quill.current.getEditor();
      const binding = new QuillBinding(ytext, editor, provider.awareness);
      provider.awareness.setLocalStateField("user", {
        name: "Typing...",
        color: userColor
      });
      return () => {
        binding.destroy();
      };
    }
  }, [userColor, provider]);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Editor ", /* @__PURE__ */ React.createElement("code", null, "Room #", room)), /* @__PURE__ */ React.createElement(
    import_react_quill.default,
    {
      ref: quill,
      modules: { cursors: true },
      theme: "snow",
      value: text2,
      onChange: setText
    }
  ));
}
export {
  Editor as default
};
/*! Bundled license information:

quill/dist/quill.js:
  (*!
   * Quill Editor v1.3.7
   * https://quilljs.com/
   * Copyright (c) 2014, Jason Chen
   * Copyright (c) 2013, salesforce.com
   *)

quill-cursors/dist/quill-cursors.js:
  (*! For license information please see quill-cursors.js.LICENSE.txt *)
*/
//# sourceMappingURL=Editor-A6QKSF4T.js.map
