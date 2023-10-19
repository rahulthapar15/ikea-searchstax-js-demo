// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/@searchstax-inc/searchstudio-ux-js/dist/@searchstax-inc/searchstudio-ux-js.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Searchstax = void 0;
var z = Object.defineProperty;
var J = (o, e, t) => e in o ? z(o, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : o[e] = t;
var n = (o, e, t) => (J(o, typeof e != "symbol" ? e + "" : e, t), t);
var x = /* @__PURE__ */(o => (o[o.mustache = 0] = "mustache", o[o.vue = 1] = "vue", o[o.react = 2] = "react", o[o.angular = 3] = "angular", o))(x || {});
class X {
  constructor(e) {
    n(this, "dataLayer");
    this.dataLayer = e;
  }
  get currentPage() {
    var e;
    return (e = this.dataLayer.searchObject) == null ? void 0 : e.page;
  }
  get totalResults() {
    var e;
    return ((e = this.dataLayer.searchResultsMetadata) == null ? void 0 : e.totalResultsValue) || 0;
  }
  get resultsPerPage() {
    var e;
    return ((e = this.dataLayer.searchResultsMetadata) == null ? void 0 : e.recordsPerPageValue) || 0;
  }
  get startResultIndex() {
    var e;
    return (((e = this.dataLayer.searchObject) == null ? void 0 : e.page) - 1) * this.resultsPerPage + 1;
  }
  get endResultIndex() {
    var t;
    const e = (((t = this.dataLayer.searchObject) == null ? void 0 : t.page) - 1) * this.resultsPerPage + (this.resultsPerPage ?? 0);
    return e > this.totalResults ? this.totalResults : e;
  }
  get isFirstPage() {
    var e;
    return ((e = this.dataLayer.searchObject) == null ? void 0 : e.page) === 1;
  }
  get isLastPage() {
    var e;
    return ((e = this.dataLayer.searchObject) == null ? void 0 : e.page) === Math.ceil(this.totalResults / this.resultsPerPage);
  }
  get results() {
    return this.dataLayer.searchResults ?? [];
  }
  get autoCorrectedQuery() {
    var e;
    return ((e = this.dataLayer.searchResultsMetadata) == null ? void 0 : e.autoCorrectedQuery) || "";
  }
  get originalQuery() {
    var e;
    return ((e = this.dataLayer.searchObject) == null ? void 0 : e.query) || "";
  }
  get searchTerm() {
    var e, t;
    return ((e = this.dataLayer.searchResultsMetadata) == null ? void 0 : e.autoCorrectedQuery) || ((t = this.dataLayer.searchObject) == null ? void 0 : t.query) || "";
  }
  get searchExecuted() {
    var e, t, a;
    return ((e = this.dataLayer.searchObject) == null ? void 0 : e.query) !== void 0 && ((t = this.dataLayer.searchObject) == null ? void 0 : t.query) !== "undefined" && ((a = this.dataLayer.searchObject) == null ? void 0 : a.query) !== "";
  }
  get selectedFacets() {
    var t;
    const e = this.dataLayer.searchFacetsCached ?? this.dataLayer.searchFacets;
    return e ? (((t = this.dataLayer.searchObject) == null ? void 0 : t.facets) ?? []).map(s => {
      const i = s.name,
        c = s.value,
        l = e.find(h => h.name === i);
      if (l) {
        const h = l.values.find(u => u.type === "range" ? !1 : u.type === "checkbox" ? '"' + u.value + '"' === c : !1);
        if (h) return h;
      }
      return null;
    }).filter(s => s !== null) : [];
  }
  get relatedSearches() {
    const e = this.dataLayer.searchRelatedSearches ?? [];
    return e[e.length - 1] && (e[e.length - 1].last = !0), e;
  }
  get externalPromotions() {
    return this.dataLayer.searchExternalPromotions ?? [];
  }
  get data() {
    return {
      currentPage: this.currentPage,
      totalResults: this.totalResults,
      resultsPerPage: this.resultsPerPage,
      startResultIndex: this.startResultIndex,
      endResultIndex: this.endResultIndex,
      isFirstPage: this.isFirstPage,
      isLastPage: this.isLastPage,
      results: this.results,
      searchTerm: this.searchTerm !== "undefined" ? this.searchTerm : "",
      autoCorrectedQuery: this.autoCorrectedQuery,
      originalQuery: this.originalQuery,
      selectedFacets: this.selectedFacets,
      searchExecuted: this.searchExecuted,
      relatedSearches: this.relatedSearches,
      hasRelatedSearches: this.relatedSearches.length > 0,
      externalPromotions: this.externalPromotions,
      hasExternalPromotions: this.externalPromotions.length > 0,
      hasResults: this.results.length > 0,
      hasResultsOrExternalPromotions: this.results.length > 0 || this.externalPromotions.length > 0
    };
  }
  get trackingData() {
    var e, t, a, r;
    return {
      searchTerm: this.dataLayer.searchTerm !== "undefined" ? this.dataLayer.searchTerm : "",
      trackApiKey: ((e = this.dataLayer.searchstaxConfig) == null ? void 0 : e.trackApiKey) ?? "",
      session: this.dataLayer.sessionId,
      language: this.dataLayer.language,
      recordsPerPage: ((t = this.dataLayer.searchResultsMetadata) == null ? void 0 : t.recordsPerPageValue) ?? 0,
      totalResults: ((a = this.dataLayer.searchResultsMetadata) == null ? void 0 : a.totalResultsValue) ?? 0,
      currentPage: this.dataLayer.currentPage,
      latencyVal: ((r = this.dataLayer.searchResultsMetadata) == null ? void 0 : r.latency) ?? 0
    };
  }
}
class F {
  static deepEqual(e, t) {
    const a = Object.keys(e),
      r = Object.keys(t);
    if (a.length !== r.length) return !1;
    for (const s of a) {
      const i = e[s],
        c = t[s],
        l = this.isObject(i) && this.isObject(c);
      if (l && !this.deepEqual(i, c) || !l && i !== c) return !1;
    }
    return !0;
  }
  static isObject(e) {
    return e != null && typeof e == "object";
  }
}
class v {
  constructor(e) {
    n(this, "value");
    // eslint-disable-next-line @typescript-eslint/ban-types
    n(this, "observers", []);
    this.value = e, this.observers = [];
  }
  subscribe(e) {
    this.observers.push(e), e(this.value);
  }
  unsubscribe(e) {
    const t = this.observers.indexOf(e);
    t !== -1 && this.observers.splice(t, 1);
  }
  setValue(e) {
    this.value = e, this.notify();
  }
  getValue() {
    return this.value;
  }
  notify() {
    this.observers.forEach(e => e(this.value));
  }
}
class N {
  static getOrSetCookie(e) {
    let t = this.getCookie(e);
    return t == null && (t = this.makeid(25), this.setCookie(e, t, {
      secure: !0,
      "max-age": 3600
    })), t;
  }
  static deleteCookie(e) {
    this.getCookie(e) && this.setCookie(e, "", {
      secure: !0,
      "max-age": -1
    });
  }
  static makeid(e) {
    let t = "";
    const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      r = a.length;
    for (let s = 0; s < e; s++) t += a.charAt(Math.floor(Math.random() * r));
    return t;
  }
  static getCookie(e) {
    const t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)"));
    return t ? decodeURIComponent(t[1]) : void 0;
  }
  static setCookie(e, t, a) {
    const r = {
      path: "/",
      ...a
    };
    a.expires instanceof Date && (r.expires = a.expires.toUTCString());
    let s = encodeURIComponent(e) + "=" + encodeURIComponent(t);
    for (const i in r) {
      s += "; " + i;
      const c = r[i];
      c !== !0 && (s += "=" + c);
    }
    document.cookie = s;
  }
}
class E {
  static removeXSSRiskyTags(e) {
    var t = "script|style|iframe|object|embed|form|input|button",
      a = new RegExp("</?(" + t + ")(\\s[^>]*)?>", "gi");
    return e ? e.replace(a, "") : "";
  }
}
class G {
  constructor(e) {
    n(this, "$searchTermChange", new v(""));
    n(this, "$loadingChange", new v(!1));
    n(this, "$searchResults", new v(null));
    n(this, "$searchResultsMetadata", new v(null));
    n(this, "$searchAutosuggest", new v(null));
    n(this, "$searchFacets", new v(null));
    n(this, "$searchFacetsCached", new v(null));
    n(this, "$searchstaxConfig", new v(null));
    n(this, "$autosuggestResults", new v(null));
    n(this, "$searchObject", new v({
      query: "",
      page: 99999999,
      order: "",
      facets: [],
      additionalProps: []
    }));
    n(this, "$searchRelatedSearches", new v(null));
    n(this, "$searchInputConfig", new v(null));
    n(this, "$searchExternalPromotions", new v(null));
    n(this, "$facetsTemplateData", new v(null));
    n(this, "$selectedFacetsTemplateData", new v(null));
    n(this, "$paginationData", new v(null));
    n(this, "$searchFeedbackData", new v(null));
    n(this, "$searchSortingData", new v(null));
    n(this, "$searchRelatedSearchesData", new v(null));
    n(this, "$searchExternalPromotionsData", new v(null));
    n(this, "$cookiesDisabled", new v(null));
    n(this, "$language", new v("en"));
    n(this, "currentPageValue", 1);
    n(this, "renderingEngineValue", x.mustache);
    n(this, "parsedData", new X(this));
    n(this, "sessionId");
    n(this, "autoCorrect", !0);
    n(this, "forceNotCorrect", !1);
    this.sessionId = e, this.cookieHandlingCallback(), this.$cookiesDisabled.subscribe(() => {
      this.cookieHandlingCallback();
    });
  }
  cookieHandlingCallback() {
    this.cookiesDisabled ? (N.deleteCookie(this.sessionId), N.deleteCookie("ms_visitorid")) : N.getOrSetCookie(this.sessionId);
  }
  setSearchTerm(e) {
    this.$searchTermChange.setValue(E.removeXSSRiskyTags(e));
  }
  setRenderingEngine(e) {
    this.renderingEngineValue = e;
  }
  setCurrentPage(e) {
    this.currentPageValue = e;
  }
  setLoading(e) {
    this.$loadingChange.setValue(e);
  }
  setSearchResults(e) {
    F.deepEqual(e, this.searchResults ?? [""]) || this.$searchResults.setValue(e);
  }
  setSearchResultsMetadata(e) {
    F.deepEqual(e, this.searchResultsMetadata ?? {}) || this.$searchResultsMetadata.setValue(e);
  }
  setSearchAutosuggest(e) {
    this.$searchAutosuggest.setValue(e);
  }
  setSearchObject(e) {
    var a, r;
    let t = e;
    (r = (a = this.searchstaxConfig) == null ? void 0 : a.hooks) != null && r.beforeSearch && t && (t = this.searchstaxConfig.hooks.beforeSearch(t)), t && (!F.deepEqual(t, this.searchObject ?? {}) || this.forceNotCorrect) && this.$searchObject.setValue(t);
  }
  setSearchFacets(e) {
    F.deepEqual(e, this.searchFacets ?? []) || this.$searchFacets.setValue(e);
  }
  setSearchFacetsCached(e) {
    F.deepEqual(e, this.searchFacetsCached ?? []) || this.$searchFacetsCached.setValue(e);
  }
  setSearchRelatedSearches(e) {
    F.deepEqual(e, this.searchRelatedSearches ?? []) || this.$searchRelatedSearches.setValue(e);
  }
  setSearchExternalPromotions(e) {
    F.deepEqual(e, this.searchExternalPromotions ?? []) || this.$searchExternalPromotions.setValue(e);
  }
  setLanguage(e) {
    this.$language.setValue(e);
  }
  setSearchstaxConfig(e) {
    this.$searchstaxConfig.setValue(e);
  }
  setSearchInputConfig(e) {
    this.$searchInputConfig.setValue(e);
  }
  setAutosuggestResults(e) {
    this.$autosuggestResults.setValue(e);
  }
  setFacetsTemplateData(e) {
    this.$facetsTemplateData.setValue(e);
  }
  setSelectedFacetsTemplateData(e) {
    this.$selectedFacetsTemplateData.setValue(e);
  }
  setPaginationData(e) {
    this.$paginationData.setValue(e);
  }
  setSearchFeedbackData(e) {
    this.$searchFeedbackData.setValue(e);
  }
  setSearchSortingData(e) {
    this.$searchSortingData.setValue(e);
  }
  setRelatedSearchesData(e) {
    this.$searchRelatedSearchesData.setValue(e);
  }
  setExternalPromotionsData(e) {
    this.$searchExternalPromotionsData.setValue(e);
  }
  setCookiesDisabled(e) {
    this.$cookiesDisabled.setValue(e);
  }
  get searchstaxConfig() {
    return this.$searchstaxConfig.getValue();
  }
  get searchFacets() {
    return this.$searchFacets.getValue() ? JSON.parse(JSON.stringify(this.$searchFacets.getValue())) : null;
  }
  get searchFacetsCached() {
    return this.$searchFacetsCached.getValue() ? JSON.parse(JSON.stringify(this.$searchFacetsCached.getValue())) : null;
  }
  get searchResults() {
    return this.$searchResults.getValue() ? JSON.parse(JSON.stringify(this.$searchResults.getValue())) : null;
  }
  get searchTerm() {
    return this.$searchTermChange.getValue();
  }
  get loading() {
    return this.$loadingChange.getValue();
  }
  get searchAutosuggest() {
    return this.$searchAutosuggest.getValue();
  }
  get searchResultsMetadata() {
    return this.$searchResultsMetadata.getValue() ? JSON.parse(JSON.stringify(this.$searchResultsMetadata.getValue())) : null;
  }
  get currentPage() {
    return this.currentPageValue;
  }
  get renderingEngine() {
    return this.renderingEngineValue;
  }
  get searchObject() {
    return JSON.parse(JSON.stringify(this.$searchObject.getValue()));
  }
  get searchRelatedSearches() {
    return this.$searchRelatedSearches.getValue() ? JSON.parse(JSON.stringify(this.$searchRelatedSearches.getValue())) : null;
  }
  get searchExternalPromotions() {
    return this.$searchExternalPromotions.getValue() ? JSON.parse(JSON.stringify(this.$searchExternalPromotions.getValue())) : null;
  }
  get language() {
    return this.$language.getValue();
  }
  get searchInputConfig() {
    return this.$searchInputConfig.getValue();
  }
  get autosuggestResults() {
    return this.$autosuggestResults.getValue();
  }
  get facetsTemplateData() {
    return this.$facetsTemplateData.getValue();
  }
  get selectedFacetsTemplateData() {
    return this.$selectedFacetsTemplateData.getValue();
  }
  get paginationData() {
    return this.$paginationData.getValue();
  }
  get searchFeedbackData() {
    return this.$searchFeedbackData.getValue();
  }
  get searchSortingData() {
    return this.$searchSortingData.getValue();
  }
  get searchRelatedSearchesData() {
    return this.$searchRelatedSearchesData.getValue();
  }
  get searchExternalPromotionsData() {
    return this.$searchExternalPromotionsData.getValue();
  }
  get cookiesDisabled() {
    return (this.$cookiesDisabled.getValue() ?? !1) || !navigator.cookieEnabled;
  }
}
class O {
  static combineResultsWithMetadata(e) {
    const t = [],
      a = parseInt(e.response.start + "") - 1,
      r = parseInt(e.responseHeader.params.rows);
    return e.response.docs.forEach((s, i) => {
      const c = {
        custom: null,
        uniqueId: this.getValueByKey(e.responseHeader.params.uniqueId, s, e) ?? "",
        position: a * r + 1 + i,
        ribbon: this.doesMapExist("ribbon", e) ? this.getValueByKey("ribbon", s, e) : null,
        paths: this.doesMapExist("paths", e) ? this.getValueByKey("paths", s, e) : null,
        url: this.doesMapExist("url", e) ? this.getValueByKey("url", s, e) : null,
        title: this.doesMapExist("title", e) ? this.getValueByKey("title", s, e) : null,
        promoted: s["[elevated]"] ? s["[elevated]"] : !1,
        thumbnail: this.doesMapExist("thumbnail", e) ? this.getValueByKey("thumbnail", s, e) : null,
        date: this.doesMapExist("date", e) ? this.getValueByKey("date", s, e) : null,
        snippet: this.doesMapExist("snippet", e) ? this.getValueByKey("snippet", s, e) : null,
        description: this.doesMapExist("description", e) ? this.getValueByKey("description", s, e) : null,
        unmappedFields: this.getUnmappedFields(s, e),
        allFields: this.getAllFields(s, e)
      };
      t.push(c);
    }), t;
  }
  static extractFacets(e) {
    const t = [];
    for (const a of e.metadata.facets) {
      let r = {
        values: []
      };
      if (r.name = a.name, r.label = a.label, a.name in e.facet_counts.facet_fields) {
        const s = e.facet_counts.facet_fields[a.name];
        for (let i = 0; i < s.length; i += 2) {
          const c = {};
          c.value = s[i], c.parentName = r.name, c.count = s[i + 1], c.type = "checkbox", r.values.push(c);
        }
      }
      r.values.length > 0 && t.push(r);
    }
    return t;
  }
  static extractSearchResultsMetadata(e) {
    var a, r, s, i;
    let t = "";
    return t = ((i = (s = (r = (a = e == null ? void 0 : e.spellcheck) == null ? void 0 : a.suggestions) == null ? void 0 : r[0]) == null ? void 0 : s.suggestion) == null ? void 0 : i[0]) ?? "", typeof t != "string" && (t = (t == null ? void 0 : t.word) ?? ""), {
      recordsPerPageValue: parseInt(e.responseHeader.params.rows),
      startDocVal: parseInt(e.response.start + ""),
      totalResultsValue: parseInt(e.response.numFound + ""),
      latency: parseInt(e.responseHeader.QTime + ""),
      endDocValue: parseInt(e.responseHeader.params.rows) + parseInt(e.response.start + ""),
      spellingSuggestion: t,
      autoCorrectedQuery: e.responseHeader.params.autoCorrectedQ ?? "",
      impressions: this.getImpressions(e)
    };
  }
  static getImpressions(e) {
    const t = [],
      a = this.combineResultsWithMetadata(e);
    for (const r in a) {
      const s = a[r],
        i = {};
      i.cDocId = this.getDataForAnalytics(s.uniqueId), s.title && (i.cDocTitle = this.getDataForAnalytics(s.title)), i.position = s.position, t.push(i);
    }
    return t;
  }
  static getDataForAnalytics(e) {
    return e !== null ? typeof e > "u" ? "" : typeof e == "string" ? e : typeof e.join < "u" ? e[0] : e : "";
  }
  static findResultByUniqueId(e, t) {
    return t.find(a => a.uniqueId === e) ?? null;
  }
  static getUnmappedFields(e, t) {
    const a = t.metadata.results.filter(s => s.result_card === "").map(s => s.name),
      r = [];
    for (const s of Object.keys(e)) if (a.indexOf(s) !== -1) {
      const i = Array.isArray(e[s]) ? e[s].join(", ") : e[s];
      r.push({
        key: s,
        value: i,
        isImage: this.checkIfImage(e[s])
      });
    }
    return r;
  }
  static checkIfImage(e) {
    return e === void 0 ? !1 : typeof e != "string" ? Array.isArray(e) && e[0] ? /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(e[0]) : !1 : /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(e);
  }
  static getAllFields(e, t) {
    const a = t.metadata.results.map(s => s.name),
      r = [];
    for (const s of Object.keys(e)) a.indexOf(s) !== -1 && r.push({
      key: s,
      value: e[s],
      isImage: this.checkIfImage(e[s])
    });
    return r;
  }
  static doesMapExist(e, t) {
    return t.metadata.results.find(a => a.result_card === e) !== void 0;
  }
  static getValueByKey(e, t, a) {
    const r = a.metadata.results.find(i => i.result_card === e);
    if (r === void 0) return null;
    const s = t[r.name];
    return s === void 0 ? null : typeof s == "string" ? s : Array.isArray(s) ? s.join(", ") : null;
  }
}
class K {
  constructor(e) {
    n(this, "routeName", "searchstax");
    n(this, "ignoredKeys", []);
    n(this, "queryStringHelper");
    n(this, "titleParser");
    e.routeName && (this.routeName = e.routeName), e.ignoredKeys && (this.ignoredKeys = e.ignoredKeys), e.title && (this.titleParser = e.title), this.queryStringHelper = new Y(this.routeName);
  }
  updateUrl(e) {
    const t = this.searchObjectToUrl(e);
    let a = document.title;
    this.titleParser && (a = this.titleParser(e)), document.title = a, window.location.href !== t && window.history.pushState({}, a, t);
  }
  searchObjectToUrl(e) {
    return this.queryStringHelper.urlHasQueryParams(window.location.href) ? window.location.href.split("?")[0] + "?" + this.queryStringHelper.stringify(this.searchObjectToParams(e), {
      ignoredKeys: this.ignoredKeys
    }) : window.location.href + "?" + this.queryStringHelper.stringify(this.searchObjectToParams(e), {
      ignoredKeys: this.ignoredKeys
    });
  }
  searchObjectToParams(e) {
    const t = {},
      a = e.page || 1;
    if (e.query && (t[this.routeName + "[query]"] = encodeURIComponent(e.query)), t[this.routeName + "[page]"] = a + "", e.order && (t[this.routeName + "[order]"] = e.order), e.facets) for (const r in e.facets) {
      const s = e.facets[r].type + ":" + encodeURIComponent(e.facets[r].name) + ":" + encodeURIComponent(e.facets[r].value);
      t[this.routeName + `[facets][${r}]`] = s;
    }
    if (this.queryStringHelper.urlHasQueryParams(window.location.href)) {
      const r = this.queryStringHelper.urlToParams(window.location.href);
      for (const s in r) s.startsWith(this.routeName) && delete r[s];
      return {
        ...r,
        ...t
      };
    } else return t;
  }
  extractParamsThatDoNotStartWithRouteName(e) {
    const t = {};
    for (const a in e) a.startsWith(this.routeName) || (t[a] = e[a]);
    return t;
  }
  extractArrayOfFacetsFromQueryParameters(e) {
    var a, r, s;
    const t = [];
    for (const i in e) if (i.startsWith(this.routeName + "[facets]")) {
      const c = E.removeXSSRiskyTags((a = e[i].split(":")) == null ? void 0 : a[0]),
        l = E.removeXSSRiskyTags(decodeURIComponent((r = e[i].split(":")) == null ? void 0 : r[1])),
        h = E.removeXSSRiskyTags(decodeURIComponent((s = e[i].split(":")) == null ? void 0 : s[2]));
      t.push({
        type: c,
        name: l,
        value: h
      });
    }
    return t;
  }
  urlToSearchObject(e) {
    const t = this.queryStringHelper.urlToParams(e),
      a = E.removeXSSRiskyTags(decodeURIComponent(t[this.routeName + "[page]"])),
      r = parseInt(a),
      s = isNaN(r) ? 1 : r;
    return {
      query: E.removeXSSRiskyTags(decodeURIComponent(t[this.routeName + "[query]"])) || "",
      page: s,
      order: E.removeXSSRiskyTags(t[this.routeName + "[order]"]) || "",
      facets: this.extractArrayOfFacetsFromQueryParameters(t) || []
    };
  }
}
class Y {
  constructor(e) {
    n(this, "routeName", "");
    n(this, "stringify", (e, t) => {
      const a = this.filterOutIgnoredKeys(e, t.ignoredKeys);
      return Object.keys(a).map(r => {
        const s = a[r];
        return Array.isArray(s) ? s.map(i => `${r}=${i}`).join("&") : `${r}=${s}`;
      }).join("&");
    });
    this.routeName = e;
  }
  filterOutIgnoredKeys(e, t) {
    const a = t || [],
      r = {};
    return Object.keys(e).forEach(s => {
      a.includes(s) || e[s] !== "" && (r[s] = e[s]);
    }), r;
  }
  urlToParams(e) {
    const t = {},
      a = e.split("?")[1];
    return a && a.split("&").forEach(r => {
      const [s, i] = r.split("=");
      t[s] = i;
    }), t;
  }
  doesParamContainRouteName(e) {
    return e.indexOf(this.routeName) !== -1;
  }
  urlHasQueryParams(e) {
    return e.indexOf("?") !== -1;
  }
}
class Z {
  constructor(e, t) {
    n(this, "cachedQuery", "");
    n(this, "url", "");
    n(this, "relatedSearches", "");
    n(this, "suggester", "");
    n(this, "authHeader");
    n(this, "authHeaderRelated");
    n(this, "trackApiKey", "");
    n(this, "session", "");
    n(this, "searchAuthType");
    n(this, "searchAuth", "");
    n(this, "controllerSearch");
    n(this, "signalSearch");
    n(this, "controllerSuggest");
    n(this, "signalSuggest");
    n(this, "dataLayer");
    this.dataLayer = t, this.url = e.searchURL, this.dataLayer.setLanguage(e.language), this.suggester = e.suggesterURL, this.trackApiKey = e.trackApiKey, this.session = e.sessionId, this.searchAuthType = e.authType, this.searchAuth = e.searchAuth, this.authHeader = new Headers(), this.authHeader.append("Accept", "application/json");
    const a = this.searchAuthType === "token" ? `Token ${e.searchAuth}` : `Basic ${e.searchAuth}`;
    this.authHeader.append("Authorization", a), this.authHeaderRelated = new Headers(), this.authHeaderRelated.append("Accept", "application/json"), this.authHeaderRelated.append("Authorization", e.searchAuth);
  }
  generateFacetQuery(e, t) {
    let a = [];
    if (!t) e.forEach(function (r) {
      const s = r.name + ':"' + r.value + '"';
      a = a.concat("fq=" + decodeURIComponent(s).replace("  ", " "));
    });else {
      const r = {};
      e.forEach(function (s) {
        const i = s.name + ":" + s.value,
          c = decodeURIComponent(i).replace("  ", " ").split(":");
        r[c[0]] ? r[c[0]].push(c[1]) : r[c[0]] = [c[1]];
      });
      for (const s in r) if (Object.prototype.hasOwnProperty.call(r, s)) {
        const i = r[s],
          c = s;
        let l = "";
        for (const h of i) l += ` ${c}:"${h}"`;
        a = a.concat("fq=" + l.trim());
      }
    }
    return a.length ? "&" + a.join("&") : "";
  }
  getRelatedSearches(e, t, a, r) {
    const s = new Headers();
    s.append("Accept", "application/json"), s.append("Authorization", a), fetch(t + "?search=" + encodeURIComponent(e.query) + "&language=" + this.dataLayer.language, {
      method: "GET",
      headers: s,
      credentials: "same-origin"
    }).then(i => i.json()).then(i => {
      r(i);
    });
  }
  cacheFacets() {
    this.dataLayer.searchObject.query !== this.cachedQuery && (this.cachedQuery = this.dataLayer.searchObject.query, this.search({
      query: this.dataLayer.searchObject.query ?? "*",
      page: 1,
      order: "",
      facets: [],
      additionalProps: this.dataLayer.searchObject.additionalProps
    }, this.cacheFacetsCallback.bind(this)));
  }
  cacheFacetsCallback(e) {
    let t = O.extractFacets(e);
    this.dataLayer.setSearchFacetsCached(t);
  }
  search(e, t, a = !1, r = !1) {
    if (e.query && e.query !== "undefined") {
      this.dataLayer.setSearchTerm(e.query), this.dataLayer.setLoading(!0), this.controllerSearch && this.controllerSearch.abort(), this.controllerSearch = new AbortController(), this.signalSearch = this.controllerSearch.signal;
      const s = new Proxy(new URLSearchParams(window.location.search), {
          get: (u, g) => u.get(g) ?? ""
        }),
        i = s.languageVariant ?
        //@ts-expect-error - this is a hack to get around the fact that the urlQueryParams is a proxy
        "&fq=_language:" + s.languageVariant : "",
        c = e.order ? `&sort=${e.order}` : "",
        l = this.url + "?q=" + encodeURIComponent(e.query.trim()) + "&start=" + (e.page - 1) + this.toQueryString(e.additionalProps ?? []) + this.generateFacetQuery(e.facets.filter(u => u.type === "or" || u.type === "showUnavailable"), !0) + this.generateFacetQuery(e.facets.filter(u => u.type === "and" || u.type === "tabs"), !1) + c + `&spellcheck.correct=${this.dataLayer.autoCorrect && !r}&language=` + this.dataLayer.language + i,
        h = {
          method: "GET",
          headers: this.authHeader,
          credentials: "same-origin",
          signal: this.signalSearch
        };
      a && delete h.signal, fetch(l, h).then(u => u.json()).then(u => {
        this.dataLayer.setLoading(!1), t(u);
      }).catch(() => {
        this.dataLayer.setLoading(!1);
      });
    }
  }
  suggest(e, t, a) {
    this.controllerSuggest && this.controllerSuggest.abort(), this.controllerSuggest = new AbortController(), this.signalSuggest = this.controllerSuggest.signal;
    const r = this.suggester + "?q=" + e.trim() + this.toQueryString(a) + "&language=" + this.dataLayer.language;
    fetch(r, {
      method: "GET",
      headers: this.authHeader,
      credentials: "same-origin",
      signal: this.signalSuggest
    }).then(s => s.json()).then(s => {
      t(s);
    }).catch(() => () => {});
  }
  fields() {
    return this.fields;
  }
  toQueryString(e) {
    if (e.length === 0) return "";
    const t = [];
    for (const a of e) t.push(encodeURIComponent(a.key) + "=" + encodeURIComponent(a.value));
    return "&" + t.join("&");
  }
}
class H {
  static trackClick(e) {
    const t = {
      key: e.trackApiKey,
      query: e.searchTerm,
      shownHits: e.recordsPerPage,
      totalHits: e.totalResults,
      pageNo: e.currentPage,
      latency: e.latencyVal,
      session: e.session,
      cDocId: e.result.uniqueId,
      cDocTitle: e.result.title,
      position: e.result.position,
      language: e.language
    };
    setTimeout(() => {
      this.msq.push(["trackClick", t]);
    }, 0);
  }
  static trackSearch(e) {
    const t = {
      key: e.trackApiKey,
      query: e.searchTerm,
      shownHits: e.recordsPerPage,
      totalHits: e.totalResults,
      pageNo: e.currentPage,
      latency: e.latencyVal,
      session: e.session,
      language: e.language,
      impressions: e.impressions
    };
    setTimeout(() => {
      this.msq.push(["track", t]);
    }, 0);
  }
  static trackRelatedSearchClick(e) {
    const t = {
      session: e.session,
      key: e.trackApiKey,
      query: e.relatedSearch.search_term,
      position: e.relatedSearch.position,
      relatedSearch: e.relatedSearch.related_search,
      pageNo: e.currentPage,
      shownHits: e.recordsPerPage,
      totalHits: e.totalResults,
      language: e.language
    };
    setTimeout(() => {
      this.msq.push(["trackRelatedSearchClick", t]);
    }, 0);
  }
  static trackRelatedSearches(e) {
    const t = {
      session: e.session,
      key: e.trackApiKey,
      query: e.searchTerm,
      shownHits: e.recordsPerPage,
      latency: e.latencyVal,
      language: e.language,
      impressions: e.impressions
    };
    setTimeout(() => {
      this.msq.push(["trackRelatedSearch", t]);
    }, 0);
  }
}
//@ts-ignore
n(H, "msq", window._msq || []);
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
var ee = Object.prototype.toString,
  D = Array.isArray || function (e) {
    return ee.call(e) === "[object Array]";
  };
function W(o) {
  return typeof o == "function";
}
function te(o) {
  return D(o) ? "array" : typeof o;
}
function U(o) {
  return o.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function Q(o, e) {
  return o != null && typeof o == "object" && e in o;
}
function ae(o, e) {
  return o != null && typeof o != "object" && o.hasOwnProperty && o.hasOwnProperty(e);
}
var se = RegExp.prototype.test;
function re(o, e) {
  return se.call(o, e);
}
var ie = /\S/;
function ne(o) {
  return !re(ie, o);
}
var ce = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
  "`": "&#x60;",
  "=": "&#x3D;"
};
function le(o) {
  return String(o).replace(/[&<>"'`=\/]/g, function (t) {
    return ce[t];
  });
}
var oe = /\s*/,
  he = /\s+/,
  _ = /\s*=/,
  ue = /\s*\}/,
  de = /#|\^|\/|>|\{|&|=|!/;
function ge(o, e) {
  if (!o) return [];
  var t = !1,
    a = [],
    r = [],
    s = [],
    i = !1,
    c = !1,
    l = "",
    h = 0;
  function u() {
    if (i && !c) for (; s.length;) delete r[s.pop()];else s = [];
    i = !1, c = !1;
  }
  var g, p, y;
  function L(P) {
    if (typeof P == "string" && (P = P.split(he, 2)), !D(P) || P.length !== 2) throw new Error("Invalid tags: " + P);
    g = new RegExp(U(P[0]) + "\\s*"), p = new RegExp("\\s*" + U(P[1])), y = new RegExp("\\s*" + U("}" + P[1]));
  }
  L(e || m.tags);
  for (var f = new V(o), C, S, b, R, I, T; !f.eos();) {
    if (C = f.pos, b = f.scanUntil(g), b) for (var w = 0, j = b.length; w < j; ++w) R = b.charAt(w), ne(R) ? (s.push(r.length), l += R) : (c = !0, t = !0, l += " "), r.push(["text", R, C, C + 1]), C += 1, R === `
` && (u(), l = "", h = 0, t = !1);
    if (!f.scan(g)) break;
    if (i = !0, S = f.scan(de) || "name", f.scan(oe), S === "=" ? (b = f.scanUntil(_), f.scan(_), f.scanUntil(p)) : S === "{" ? (b = f.scanUntil(y), f.scan(ue), f.scanUntil(p), S = "&") : b = f.scanUntil(p), !f.scan(p)) throw new Error("Unclosed tag at " + f.pos);
    if (S == ">" ? I = [S, b, C, f.pos, l, h, t] : I = [S, b, C, f.pos], h++, r.push(I), S === "#" || S === "^") a.push(I);else if (S === "/") {
      if (T = a.pop(), !T) throw new Error('Unopened section "' + b + '" at ' + C);
      if (T[1] !== b) throw new Error('Unclosed section "' + T[1] + '" at ' + C);
    } else S === "name" || S === "{" || S === "&" ? c = !0 : S === "=" && L(b);
  }
  if (u(), T = a.pop(), T) throw new Error('Unclosed section "' + T[1] + '" at ' + f.pos);
  return fe(pe(r));
}
function pe(o) {
  for (var e = [], t, a, r = 0, s = o.length; r < s; ++r) t = o[r], t && (t[0] === "text" && a && a[0] === "text" ? (a[1] += t[1], a[3] = t[3]) : (e.push(t), a = t));
  return e;
}
function fe(o) {
  for (var e = [], t = e, a = [], r, s, i = 0, c = o.length; i < c; ++i) switch (r = o[i], r[0]) {
    case "#":
    case "^":
      t.push(r), a.push(r), t = r[4] = [];
      break;
    case "/":
      s = a.pop(), s[5] = r[2], t = a.length > 0 ? a[a.length - 1][4] : e;
      break;
    default:
      t.push(r);
  }
  return e;
}
function V(o) {
  this.string = o, this.tail = o, this.pos = 0;
}
V.prototype.eos = function () {
  return this.tail === "";
};
V.prototype.scan = function (e) {
  var t = this.tail.match(e);
  if (!t || t.index !== 0) return "";
  var a = t[0];
  return this.tail = this.tail.substring(a.length), this.pos += a.length, a;
};
V.prototype.scanUntil = function (e) {
  var t = this.tail.search(e),
    a;
  switch (t) {
    case -1:
      a = this.tail, this.tail = "";
      break;
    case 0:
      a = "";
      break;
    default:
      a = this.tail.substring(0, t), this.tail = this.tail.substring(t);
  }
  return this.pos += a.length, a;
};
function M(o, e) {
  this.view = o, this.cache = {
    ".": this.view
  }, this.parent = e;
}
M.prototype.push = function (e) {
  return new M(e, this);
};
M.prototype.lookup = function (e) {
  var t = this.cache,
    a;
  if (t.hasOwnProperty(e)) a = t[e];else {
    for (var r = this, s, i, c, l = !1; r;) {
      if (e.indexOf(".") > 0) for (s = r.view, i = e.split("."), c = 0; s != null && c < i.length;) c === i.length - 1 && (l = Q(s, i[c]) || ae(s, i[c])), s = s[i[c++]];else s = r.view[e], l = Q(r.view, e);
      if (l) {
        a = s;
        break;
      }
      r = r.parent;
    }
    t[e] = a;
  }
  return W(a) && (a = a.call(this.view)), a;
};
function k() {
  this.templateCache = {
    _cache: {},
    set: function (e, t) {
      this._cache[e] = t;
    },
    get: function (e) {
      return this._cache[e];
    },
    clear: function () {
      this._cache = {};
    }
  };
}
k.prototype.clearCache = function () {
  typeof this.templateCache < "u" && this.templateCache.clear();
};
k.prototype.parse = function (e, t) {
  var a = this.templateCache,
    r = e + ":" + (t || m.tags).join(":"),
    s = typeof a < "u",
    i = s ? a.get(r) : void 0;
  return i == null && (i = ge(e, t), s && a.set(r, i)), i;
};
k.prototype.render = function (e, t, a, r) {
  var s = this.getConfigTags(r),
    i = this.parse(e, s),
    c = t instanceof M ? t : new M(t, void 0);
  return this.renderTokens(i, c, a, e, r);
};
k.prototype.renderTokens = function (e, t, a, r, s) {
  for (var i = "", c, l, h, u = 0, g = e.length; u < g; ++u) h = void 0, c = e[u], l = c[0], l === "#" ? h = this.renderSection(c, t, a, r, s) : l === "^" ? h = this.renderInverted(c, t, a, r, s) : l === ">" ? h = this.renderPartial(c, t, a, s) : l === "&" ? h = this.unescapedValue(c, t) : l === "name" ? h = this.escapedValue(c, t, s) : l === "text" && (h = this.rawValue(c)), h !== void 0 && (i += h);
  return i;
};
k.prototype.renderSection = function (e, t, a, r, s) {
  var i = this,
    c = "",
    l = t.lookup(e[1]);
  function h(p) {
    return i.render(p, t, a, s);
  }
  if (l) {
    if (D(l)) for (var u = 0, g = l.length; u < g; ++u) c += this.renderTokens(e[4], t.push(l[u]), a, r, s);else if (typeof l == "object" || typeof l == "string" || typeof l == "number") c += this.renderTokens(e[4], t.push(l), a, r, s);else if (W(l)) {
      if (typeof r != "string") throw new Error("Cannot use higher-order sections without the original template");
      l = l.call(t.view, r.slice(e[3], e[5]), h), l != null && (c += l);
    } else c += this.renderTokens(e[4], t, a, r, s);
    return c;
  }
};
k.prototype.renderInverted = function (e, t, a, r, s) {
  var i = t.lookup(e[1]);
  if (!i || D(i) && i.length === 0) return this.renderTokens(e[4], t, a, r, s);
};
k.prototype.indentPartial = function (e, t, a) {
  for (var r = t.replace(/[^ \t]/g, ""), s = e.split(`
`), i = 0; i < s.length; i++) s[i].length && (i > 0 || !a) && (s[i] = r + s[i]);
  return s.join(`
`);
};
k.prototype.renderPartial = function (e, t, a, r) {
  if (a) {
    var s = this.getConfigTags(r),
      i = W(a) ? a(e[1]) : a[e[1]];
    if (i != null) {
      var c = e[6],
        l = e[5],
        h = e[4],
        u = i;
      l == 0 && h && (u = this.indentPartial(i, h, c));
      var g = this.parse(u, s);
      return this.renderTokens(g, t, a, u, r);
    }
  }
};
k.prototype.unescapedValue = function (e, t) {
  var a = t.lookup(e[1]);
  if (a != null) return a;
};
k.prototype.escapedValue = function (e, t, a) {
  var r = this.getConfigEscape(a) || m.escape,
    s = t.lookup(e[1]);
  if (s != null) return typeof s == "number" && r === m.escape ? String(s) : r(s);
};
k.prototype.rawValue = function (e) {
  return e[1];
};
k.prototype.getConfigTags = function (e) {
  return D(e) ? e : e && typeof e == "object" ? e.tags : void 0;
};
k.prototype.getConfigEscape = function (e) {
  if (e && typeof e == "object" && !D(e)) return e.escape;
};
var m = {
    name: "mustache.js",
    version: "4.2.0",
    tags: ["{{", "}}"],
    clearCache: void 0,
    escape: void 0,
    parse: void 0,
    render: void 0,
    Scanner: void 0,
    Context: void 0,
    Writer: void 0,
    /**
     * Allows a user to override the default caching strategy, by providing an
     * object with set, get and clear methods. This can also be used to disable
     * the cache by setting it to the literal `undefined`.
     */
    set templateCache(o) {
      $.templateCache = o;
    },
    /**
     * Gets the default or overridden caching object from the default writer.
     */
    get templateCache() {
      return $.templateCache;
    }
  },
  $ = new k();
m.clearCache = function () {
  return $.clearCache();
};
m.parse = function (e, t) {
  return $.parse(e, t);
};
m.render = function (e, t, a, r) {
  if (typeof e != "string") throw new TypeError('Invalid template! Template should be a "string" but "' + te(e) + '" was given as the first argument for mustache#render(template, view, partials)');
  return $.render(e, t, a, r);
};
m.escape = le;
m.Scanner = V;
m.Context = M;
m.Writer = k;
const me = {
    mainTemplate: {
      template: `
        {{#hasExternalPromotions}}
            <div class="searchstax-external-promotions-container" id="searchstax-external-promotions-container">
                 External promotions go here
            </div>
        {{/hasExternalPromotions}}
    `,
      externalPromotionsContainerId: "searchstax-external-promotions-container"
    },
    externalPromotion: {
      template: `
        <div class="searchstax-external-promotion searchstax-search-result">
            <div class="icon-elevated"></div>
            {{#url}}
            <a href="{{url}}" data-searchstax-unique-result-id="{{uniqueId}}" class="searchstax-result-item-link"></a>
            {{/url}}
            <div class="searchstax-search-result-title-container">
                <span class="searchstax-search-result-title">{{name}}</span>
            </div>
            {{#description}}
            <p class="searchstax-search-result-description searchstax-search-result-common">
            {{description}}
            </p>
            {{/description}}
            {{#url}}
            <p class="searchstax-search-result-description searchstax-search-result-common">
            {{url}}
            </p>
            {{/url}}
        </div>
        `
    }
  },
  ye = {
    mainTemplateDesktop: {
      template: `
      {{#hasResultsOrExternalPromotions}}
        <div class="searchstax-facets-container-desktop"></div>
      {{/hasResultsOrExternalPromotions}}
      `,
      facetsContainerClass: "searchstax-facets-container-desktop",
      selectedFacetsContainerClass: "searchstax-facets-pills-selected"
    },
    mainTemplateMobile: {
      template: `
        <div class="searchstax-facets-pills-container">
          <div class="searchstax-facets-pills-selected">
          </div>
        </div>

        <div class="searchstax-facets-mobile-overlay {{#overlayOpened}} searchstax-show{{/overlayOpened}}" >
          <div class="searchstax-facets-mobile-overlay-header">
            <div class="searchstax-facets-mobile-overlay-header-title">Filter By</div>
            <div class="searchstax-search-close"></div>
          </div>
          <div class="searchstax-facets-container-mobile"></div>
          <button class="searchstax-facets-mobile-overlay-done">Done</button>
        </div>
      `,
      facetsContainerClass: "searchstax-facets-container-mobile",
      closeOverlayTriggerClasses: ["searchstax-facets-mobile-overlay-done", "searchstax-search-close"],
      filterByContainerClass: "searchstax-facets-pills-container",
      selectedFacetsContainerClass: "searchstax-facets-pills-selected"
    },
    showMoreButtonContainerTemplate: {
      template: `
      <div class="searchstax-facet-show-more-container">
      {{#showingAllFacets}}
        <div class="searchstax-facet-show-less-button searchstax-facet-show-button">less</div>
      {{/showingAllFacets}}
      {{^showingAllFacets}}
        <div class="searchstax-facet-show-more-button  searchstax-facet-show-button">more {{onShowMoreLessClick}}</div>
      {{/showingAllFacets}}
    </div>
      `,
      showMoreButtonClass: "searchstax-facet-show-more-container"
    },
    facetItemContainerTemplate: {
      template: `
      <div>
        <div class="searchstax-facet-title-container">
            <div class="searchstax-facet-title">
            {{label}}
            </div>
            <div class="searchstax-facet-title-arrow active"></div>
        </div>
        <div class="searchstax-facet-values-container"></div>
      </div>
      `,
      facetListTitleContainerClass: "searchstax-facet-title-container",
      facetListContainerClass: "searchstax-facet-values-container"
    },
    clearFacetsTemplate: {
      template: `
      {{#shouldShow}}}
        <div class="searchstax-facets-pill searchstax-clear-filters searchstax-facets-pill-clear-all">
        <div class="searchstax-facets-pill-label">Clear Filters</div>
        </div>
      {{/shouldShow}}
      `,
      containerClass: "searchstax-facets-pill-clear-all"
    },
    facetItemTemplate: {
      template: `
      <div class="searchstax-facet-input">
        <input type="checkbox" class="searchstax-facet-input-checkbox" {{#disabled}}disabled{{/disabled}} {{#isChecked}}checked{{/isChecked}}/>
      </div>
      <div class="searchstax-facet-value-label">{{value}}</div>
      <div class="searchstax-facet-value-count">({{count}})</div>
      `,
      inputCheckboxClass: "searchstax-facet-input-checkbox",
      checkTriggerClasses: ["searchstax-facet-value-label", "searchstax-facet-value-count"]
    },
    filterByTemplate: {
      template: `
      <div class="searchstax-facets-pill searchstax-facets-pill-filter-by">
        <div class="searchstax-facets-pill-label">Filter By</div>
      </div>
      `,
      containerClass: "searchstax-facets-pill-filter-by"
    },
    selectedFacetsTemplate: {
      template: `
      <div class="searchstax-facets-pill searchstax-facets-pill-facets">
        <div class="searchstax-facets-pill-label">{{value}} ({{count}})</div>
        <div class="searchstax-facets-pill-icon-close"></div>
      </div>
      `,
      containerClass: "searchstax-facets-pill-facets"
    }
  },
  Ce = {
    mainTemplate: {
      template: `
      {{#results.length}}
        <div class="searchstax-pagination-container">
          <div class="searchstax-pagination-content">
            <a class="searchstax-pagination-previous {{#isFirstPage}}disabled{{/isFirstPage}}" id="searchstax-pagination-previous">< Previous</a>
            <div class="searchstax-pagination-details">
              {{startResultIndex}} - {{endResultIndex}} of {{totalResults}}
            </div>
              <a class="searchstax-pagination-next {{#isLastPage}}disabled{{/isLastPage}}" id="searchstax-pagination-next">Next ></a>
          </div>
        </div>
      {{/results.length}}
      `,
      nextButtonClass: "searchstax-pagination-next",
      previousButtonClass: "searchstax-pagination-previous"
    }
  },
  Se = {
    main: {
      template: `
        {{#hasRelatedSearches}}
            <div class="searchstax-related-searches-container" id="searchstax-related-searches-container">
                Related searches: <span id="searchstax-related-searches"></span>
                {{#relatedSearches}}
                <span class="searchstax-related-search">

                </span>
            {{/relatedSearches}}
            </div>
        {{/hasRelatedSearches}}
        `,
      relatedSearchesContainerClass: "searchstax-related-search"
    },
    relatedSearch: {
      template: `
        <span class="searchstax-related-search searchstax-related-search-item">
            {{ related_search }}{{^last}}<span>,</span>{{/last}}
        </span>
        `,
      relatedSearchContainerClass: "searchstax-related-search-item"
    }
  },
  ve = {
    main: {
      template: `
        {{#searchExecuted}}
            <div class="searchstax-feedback-container">
              {{#if totalResults}}
                  Showing <b>{{startResultIndex}} - {{endResultIndex}}</b> of <b>{{totalResults}}</b> results {{#searchTerm}} for "<b>{{searchTerm}}</b>" {{/searchTerm}}
                  <div class="searchstax-feedback-container-suggested">
                    {{#autoCorrectedQuery}}
                      Search instead for <a href="#" class="searchstax-feedback-original-query">{{originalQuery}}</a>
                    {{/autoCorrectedQuery}}
                  </div>
                {{/if}}
            </div>
        {{/searchExecuted}}
        `,
      originalQueryClass: "searchstax-feedback-original-query"
    }
  },
  be = {
    mainTemplate: {
      template: `
        <div class="searchstax-search-input-container">
            <div class="searchstax-search-input-wrapper">
                <input type="text" id="searchstax-search-input" class="searchstax-search-input" placeholder="SEARCH FOR..." />
                <button class="searchstax-spinner-icon" id="searchstax-search-input-action-button"></button>
            </div>
        </div>
        `,
      searchInputId: "searchstax-search-input"
    },
    autosuggestItemTemplate: {
      template: `
        <div class="searchstax-autosuggest-item-term-container">{{{term}}}</div>
        `
    }
  },
  Le = {
    mainTemplate: {
      template: `
            <div class="searchstax-search-results-container">
                <div class="searchstax-search-results" id="searchstax-search-results"></div>
            </div>
            `,
      searchResultsContainerId: "searchstax-search-results"
    },
    searchResultTemplate: {
      template: `
            <div class="searchstax-search-result {{#thumbnail}} has-thumbnail {{/thumbnail}}">
                {{#promoted}}
                    <div class="searchstax-search-result-promoted"></div>
                {{/promoted}}

                {{#url}}
                    <a href="{{url}}" data-searchstax-unique-result-id="{{uniqueId}}" class="searchstax-result-item-link"></a>
                {{/url}}

                {{#ribbon}}
                    <div class="searchstax-search-result-ribbon">
                    {{ribbon}}
                    </div>
                {{/ribbon}}

                {{#thumbnail}}
                    <img src="{{thumbnail}}" class="searchstax-thumbnail">
                {{/thumbnail}}
                <div class="searchstax-search-result-title-container">
                    <span class="searchstax-search-result-title">{{title}}</span>
                </div>

                {{#paths}}
                    <p class="searchstax-search-result-common">
                        {{paths}}
                    </p>
                {{/paths}}

                {{#description}}
                    <p class="searchstax-search-result-description searchstax-search-result-common">
                        {{description}}
                    </p>
                {{/description}}

                {{#unmappedFields}}
                    {{#isImage}}
                        <div class="searchstax-search-result-image-container">
                        <img src="{{value}}" class="searchstax-result-image">
                        </div>
                    {{/isImage}}
                    {{^isImage}}
                        <p class="searchstax-search-result-common">
                        {{value}}
                        </p>
                    {{/isImage}}
                {{/unmappedFields}}
            </div>
            `,
      searchResultUniqueIdAttribute: "data-searchstax-unique-result-id"
    },
    noSearchResultTemplate: {
      template: `
            <div class="searchstax-no-results">
                Showing <strong>no results</strong> for <strong>"{{ searchTerm }}"</strong>
                <br>
                {{#spellingSuggestion}}
                    <span>&nbsp;Did you mean <a href="#" class="searchstax-suggestion-term">{{ spellingSuggestion }}</a>?</span>
                {{/spellingSuggestion}}
            </div>
            <div>
                <p>Try searching for search related terms or topics. We offer a wide variety of content to help you get the information you need.</p>
                <p>Lost? Click on the ‘X” in the Search Box to reset your search.</p>
            </div>
            `
    }
  },
  Te = {
    main: {
      template: `
      {{#searchExecuted}}
        {{#hasResultsOrExternalPromotions}}
        <div class="searchstax-sorting-container">
            <label class="searchstax-sorting-label" for="sort-by">Sort By</label>
            <select id="searchstax-search-order-select" class="searchstax-search-order-select">
                <option value="">
                Relevance
                </option>
                <option value="date desc">
                Newest Content
                </option>
                <option value="date asc">
                Oldest Content
                </option>
            </select>
        </div>
        {{/hasResultsOrExternalPromotions}}
      {{/searchExecuted}}
      `,
      selectId: "searchstax-search-order-select"
    }
  };
class d {}
n(d, "externalPromotions", me), n(d, "facets", ye), n(d, "pagination", Ce), n(d, "relatedSearches", Se), n(d, "searchFeedback", ve), n(d, "searchInput", be), n(d, "searchResults", Le), n(d, "sorting", Te);
class xe {
  constructor(e) {
    n(this, "dataLayer");
    n(this, "config");
    n(this, "containerId");
    n(this, "externalPromotionsContainerId");
    n(this, "searchExternalPromotionsMainContainer", null);
    var t, a;
    this.dataLayer = e.dataLayer, this.config = e.config, this.containerId = e.containerId, this.externalPromotionsContainerId = ((a = (t = this.config.templates) == null ? void 0 : t.mainTemplate) == null ? void 0 : a.externalPromotionsContainerId) || d.externalPromotions.mainTemplate.externalPromotionsContainerId, this.searchExternalPromotionsMainContainer = document.getElementById(this.containerId), this.initializeSubscriptions(), this.renderMainTemplate(this.generateTemplateData());
  }
  initializeSubscriptions() {
    this.dataLayer.$searchExternalPromotions.subscribe(e => {
      e && this.renderMainTemplate(this.generateTemplateData());
    });
  }
  generateTemplateData() {
    const e = {
      ...this.dataLayer.parsedData.data,
      externalPromotions: this.dataLayer.parsedData.externalPromotions
    };
    return this.dataLayer.setExternalPromotionsData(e), e;
  }
  addExternalSearch(e) {
    var a, r, s, i;
    const t = document.getElementById(this.externalPromotionsContainerId);
    if (t) {
      const c = ((s = (r = (a = this.config) == null ? void 0 : a.templates) == null ? void 0 : r.externalPromotion) == null ? void 0 : s.template) || ((i = d.externalPromotions.externalPromotion) == null ? void 0 : i.template),
        l = document.createElement("div");
      l.classList.add("searchstax-external-promotion"), l.addEventListener("click", h => {
        this.trackClick(e, h);
      }), l.innerHTML = m.render(c, e), t.appendChild(l);
    }
  }
  trackClick(e, t) {
    t.stopPropagation(), t.preventDefault(), window.open(e.url, "_blank");
  }
  renderMainTemplate(e) {
    var a, r, s, i;
    const t = ((s = (r = (a = this.config) == null ? void 0 : a.templates) == null ? void 0 : r.mainTemplate) == null ? void 0 : s.template) || ((i = d.externalPromotions.mainTemplate) == null ? void 0 : i.template);
    if (this.dataLayer.renderingEngine === x.mustache) {
      this.searchExternalPromotionsMainContainer.innerHTML =
      //@ts-expect-error - mustache is not a module
      m.render(t, e);
      const c = document.getElementById(this.externalPromotionsContainerId);
      c && (c.innerHTML = "");
      for (const l of e.externalPromotions) this.addExternalSearch(l);
    }
  }
}
class ke {
  constructor(e, t) {
    n(this, "dataLayer");
    n(this, "config");
    n(this, "containerId");
    n(this, "routerHelper");
    n(this, "cachedPhrase", "");
    n(this, "isCached", !1);
    n(this, "overlayOpened", !1);
    n(this, "facetPaginationStep");
    n(this, "facetPaginationStepMobile");
    n(this, "searchFacetsMainContainer", null);
    n(this, "searchFacetsMobileContainer", null);
    n(this, "searchFacetsDesktopContainer", null);
    n(this, "facetLimits", {});
    n(this, "facetLimitsMobile", {});
    n(this, "deactivatedFacets", {});
    n(this, "cachedData", null);
    n(this, "cacheFacets");
    n(this, "onFacetSelect", (e, t, a, r) => {
      if (e.stopPropagation(), !t.disabled) {
        const s = a.querySelector("input");
        s.checked = r ? s.checked : !s.checked;
        const i = this.dataLayer.searchObject;
        let c = [...i.facets];
        const l = this.extractFacetValue(t);
        s.checked ? c.find(u => F.deepEqual(u, l) ? u : !1) || (this.config.facetingType === "tabs" && (c = c.filter(u => u.name !== l.name)), c.push(l)) : c = c.filter(h => !F.deepEqual(h, l)), setTimeout(() => {
          this.dataLayer.setSearchObject({
            ...i,
            facets: c,
            page: 1
          }), this.config.facetingType === "tabs" && this.renderMainTemplate(this.generateTemplateData(), !0);
        }, 0);
      }
    });
    this.dataLayer = e.dataLayer, this.config = e.config, this.containerId = e.containerId, this.routerHelper = e.routerHelper, this.cacheFacets = t, this.facetPaginationStep = this.config.itemsPerPageDesktop, this.facetPaginationStepMobile = this.config.itemsPerPageMobile, this.searchFacetsMainContainer = document.getElementById(this.containerId), this.needCache && t(), this.initializeSubscriptions();
  }
  get needCache() {
    return this.config.facetingType === "showUnavailable" || this.config.facetingType === "or" || this.config.facetingType === "tabs";
  }
  get needDisabling() {
    return this.config.facetingType === "showUnavailable";
  }
  initializeSubscriptions() {
    this.needCache && this.dataLayer.$searchFacetsCached.subscribe(e => {
      e && this.dataLayer.searchFacets && this.renderMainTemplate(this.generateTemplateData());
    }), this.dataLayer.$searchResults.subscribe(e => {
      e && (this.needCache && !this.isCached && (this.dataLayer.searchFacets && !this.dataLayer.searchFacetsCached && this.dataLayer.setSearchFacetsCached(this.dataLayer.searchFacets), this.cacheFacets()), this.renderMainTemplate(this.generateTemplateData()));
    }), this.dataLayer.$searchObject.subscribe(e => {
      this.cachedPhrase !== e.query ? (this.cachedPhrase = e.query, this.isCached = !1) : this.isCached = !0;
    });
  }
  extractFacetValue(e) {
    return {
      type: this.config.facetingType,
      name: e.parentName,
      value: e.value
    };
  }
  applyFacetLimits(e, t) {
    const a = t ? this.facetPaginationStepMobile : this.facetPaginationStep,
      r = t ? this.facetLimits : this.facetLimitsMobile;
    return e.forEach(s => {
      r[s.name] || (r[s.name] = a);
    }), e.map(s => ({
      ...s,
      values: s.values.slice(0, r[s.name]),
      showingAllFacets: s.values.length <= r[s.name],
      hasMoreFacets: s.values.length > a
    }));
  }
  generateTemplateData(e) {
    if (this.generateSelectedFacetsData(), this.dataLayer.searchFacets) {
      let t = this.dataLayer.searchFacets;
      this.needCache && this.dataLayer.searchFacetsCached && (t = this.dataLayer.searchFacetsCached, this.needDisabling && (t = t.map(r => {
        var i;
        const s = (i = this.dataLayer.searchFacets) == null ? void 0 : i.find(c => c.name === r.name);
        return s ? {
          ...r,
          values: r.values.map(l => {
            const h = s.values.find(u => l.type === "range" ? !1 : l.type === "checkbox" ? u.value === l.value : !1);
            return {
              ...l,
              disabled: !h,
              isMobile: e
            };
          })
        } : {
          ...r,
          values: r.values.map(l => ({
            ...l,
            disabled: !0
          })),
          isMobile: e
        };
      }))), this.config.specificFacets && (t = t.filter(r => {
        var s;
        return (s = this.config.specificFacets) == null ? void 0 : s.includes(r.name);
      }));
      const a = {
        facets: this.applyFacetLimits(t, e),
        ...this.dataLayer.parsedData.data,
        isMobile: e
      };
      return this.dataLayer.setFacetsTemplateData(a), a;
    } else {
      const t = {
        facets: [],
        ...this.dataLayer.parsedData.data,
        isMobile: e
      };
      return this.dataLayer.setFacetsTemplateData(t), t;
    }
  }
  createFacetItem(e, t, a) {
    var l, h, u, g, p, y, L, f, C, S, b, R;
    const r = document.createElement("div");
    r.classList.add("searchstax-facet-container"), this.deactivatedFacets[e.name] || r.classList.add("active");
    const s = ((u = (h = (l = this.config) == null ? void 0 : l.templates) == null ? void 0 : h.facetItemContainerTemplate) == null ? void 0 : u.template) || ((g = d.facets.facetItemContainerTemplate) == null ? void 0 : g.template);
    r.innerHTML = m.render(s, e), t.appendChild(r);
    const i = r.querySelector("." + (((L = (y = (p = this.config) == null ? void 0 : p.templates) == null ? void 0 : y.facetItemContainerTemplate) == null ? void 0 : L.facetListTitleContainerClass) || ((f = d.facets.facetItemContainerTemplate) == null ? void 0 : f.facetListTitleContainerClass)));
    i == null || i.addEventListener("click", () => {
      r.classList.toggle("active");
    });
    const c = r.querySelector("." + (((b = (S = (C = this.config) == null ? void 0 : C.templates) == null ? void 0 : S.facetItemContainerTemplate) == null ? void 0 : b.facetListContainerClass) || ((R = d.facets.facetItemContainerTemplate) == null ? void 0 : R.facetListContainerClass)));
    c && (e.values.forEach(I => {
      this.createFacetListItem(I, c);
    }), e.hasMoreFacets && this.createHasMoreComponent(e, c, a));
  }
  isChecked(e) {
    var t;
    return !!((t = this.dataLayer.searchObject.facets) != null && t.find(a => F.deepEqual(a, this.extractFacetValue(e))));
  }
  createFacetListItem(e, t) {
    var c, l, h, u, g, p, y, L, f, C, S, b, R;
    const a = document.createElement("div");
    a.classList.add("searchstax-facet-value-container"), e.disabled && a.classList.add("searchstax-facet-value-disabled");
    const r = this.isChecked(e),
      s = ((h = (l = (c = this.config) == null ? void 0 : c.templates) == null ? void 0 : l.facetItemTemplate) == null ? void 0 : h.template) || ((u = d.facets.facetItemTemplate) == null ? void 0 : u.template);
    a.innerHTML = m.render(s, {
      ...e,
      isChecked: r
    });
    let i = (g = d.facets.facetItemTemplate) == null ? void 0 : g.checkTriggerClasses;
    i = ((L = (y = (p = this.config) == null ? void 0 : p.templates) == null ? void 0 : y.facetItemTemplate) == null ? void 0 : L.checkTriggerClasses) || i, i.forEach(I => {
      var T;
      (T = a.querySelector("." + I)) == null || T.addEventListener("click", w => {
        this.onFacetSelect(w, e, a);
      });
    }), (R = a.querySelector("." + (((S = (C = (f = this.config) == null ? void 0 : f.templates) == null ? void 0 : C.facetItemTemplate) == null ? void 0 : S.inputCheckboxClass) || ((b = d.facets.facetItemTemplate) == null ? void 0 : b.inputCheckboxClass)))) == null || R.addEventListener("click", I => {
      this.onFacetSelect(I, e, a, !0);
    }), t.appendChild(a);
  }
  createHasMoreComponent(e, t, a) {
    var c, l, h, u, g, p, y, L;
    const r = document.createElement("div");
    r.classList.add("searchstax-facet-show-more-container");
    const s = ((h = (l = (c = this.config) == null ? void 0 : c.templates) == null ? void 0 : l.showMoreButtonContainerTemplate) == null ? void 0 : h.template) || ((u = d.facets.showMoreButtonContainerTemplate) == null ? void 0 : u.template);
    r.innerHTML = m.render(s, e);
    const i = r.querySelector("." + (((y = (p = (g = this.config) == null ? void 0 : g.templates) == null ? void 0 : p.showMoreButtonContainerTemplate) == null ? void 0 : y.showMoreButtonClass) || ((L = d.facets.showMoreButtonContainerTemplate) == null ? void 0 : L.showMoreButtonClass)));
    i && (this.attachOnclickToShowMore(e, i, a), t && t.appendChild(i));
  }
  attachOnclickToShowMore(e, t, a) {
    t.addEventListener("click", r => {
      this.onShowMoreLessClick(r, e, a);
    });
  }
  onShowMoreLessClick(e, t, a) {
    e.preventDefault();
    const r = a ? this.facetPaginationStepMobile : this.facetPaginationStep,
      s = a ? this.facetLimits : this.facetLimitsMobile;
    s[t.name] === void 0 ? s[t.name] = r * 2 : s[t.name] <= t.values.length ? s[t.name] = s[t.name] + r : s[t.name] = r, this.generateTemplateData(a), this.renderMainTemplate(this.generateTemplateData());
  }
  renderMainTemplate(e, t) {
    var a, r, s, i, c, l, h, u, g, p, y;
    if (e && (!F.deepEqual(this.cachedData ?? {}, e) || t)) {
      this.cachedData = e;
      const L = ((s = (r = (a = this.config) == null ? void 0 : a.templates) == null ? void 0 : r.mainTemplateDesktop) == null ? void 0 : s.template) || ((i = d.facets.mainTemplateDesktop) == null ? void 0 : i.template);
      if (this.dataLayer.renderingEngine === x.mustache && this.searchFacetsMainContainer) {
        this.searchFacetsMainContainer.innerHTML = m.render(L, {
          ...e
        });
        const f = (u = this.searchFacetsMainContainer) == null ? void 0 : u.querySelector("." + (((h = (l = (c = this.config) == null ? void 0 : c.templates) == null ? void 0 : l.mainTemplateDesktop) == null ? void 0 : h.facetsContainerClass) || d.facets.mainTemplateDesktop.facetsContainerClass));
        if (f) {
          f.innerHTML = "";
          for (const C of e.facets) this.createFacetItem(C, f);
          if (this.searchFacetsMainContainer) {
            const C = this.searchFacetsMainContainer.querySelector("." + (((y = (p = (g = this.config) == null ? void 0 : g.templates) == null ? void 0 : p.mainTemplateDesktop) == null ? void 0 : y.selectedFacetsContainerClass) || d.facets.mainTemplateDesktop.selectedFacetsContainerClass));
            C && (this.createSelectedFacetsComponents(C), this.createClearFacetsComponents(C));
          }
        }
      }
      this.renderMobileTemplate(this.generateTemplateData(!0));
    } else this.generateSelectedFacetsData();
  }
  generateSelectedFacetsData() {
    const e = [],
      t = this.dataLayer.searchObject.facets;
    for (const a of t) {
      const r = decodeURIComponent(a.name),
        s = decodeURIComponent(a.value);
      if (this.dataLayer.searchFacets) {
        const i = this.needCache ? this.dataLayer.searchFacetsCached : this.dataLayer.searchFacets,
          c = i == null ? void 0 : i.find(l => l.name === r);
        if (c) {
          const l = c.values.find(h => h.type === "range" ? !1 : h.type === "checkbox" ? `"${h.value}"` == `"${s}"` : !1);
          l && e.push(l);
        }
      }
    }
    this.dataLayer.setSelectedFacetsTemplateData(e);
  }
  createSelectedFacetsComponents(e) {
    var t;
    this.generateSelectedFacetsData(), (t = this.dataLayer.selectedFacetsTemplateData) == null || t.forEach(a => {
      this.createSelectedFacetsComponent(e, a);
    });
  }
  createClearFacetsComponents(e) {
    var i, c, l, h, u, g, p, y;
    const t = this.dataLayer.searchObject,
      a = ((l = (c = (i = this.config) == null ? void 0 : i.templates) == null ? void 0 : c.clearFacetsTemplate) == null ? void 0 : l.template) || ((h = d.facets.clearFacetsTemplate) == null ? void 0 : h.template),
      r = document.createElement("div");
    r.innerHTML = m.render(a, {
      shouldShow: t.facets.length > 0
    });
    const s = r.querySelector("." + (((p = (g = (u = this.config) == null ? void 0 : u.templates) == null ? void 0 : g.clearFacetsTemplate) == null ? void 0 : p.containerClass) || ((y = d.facets.clearFacetsTemplate) == null ? void 0 : y.containerClass)));
    s && (s.addEventListener("click", () => {
      this.removeSelectedFacets();
    }), e.appendChild(s));
  }
  createSelectedFacetsComponent(e, t) {
    var i, c, l, h, u, g, p, y;
    const a = ((l = (c = (i = this.config) == null ? void 0 : i.templates) == null ? void 0 : c.selectedFacetsTemplate) == null ? void 0 : l.template) || ((h = d.facets.selectedFacetsTemplate) == null ? void 0 : h.template),
      r = document.createElement("div");
    r.innerHTML = m.render(a, t);
    const s = r.querySelector("." + (((p = (g = (u = this.config) == null ? void 0 : u.templates) == null ? void 0 : g.selectedFacetsTemplate) == null ? void 0 : p.containerClass) || ((y = d.facets.selectedFacetsTemplate) == null ? void 0 : y.containerClass)));
    s && (s.addEventListener("click", () => {
      this.unselectFacet(t);
    }), e.appendChild(s));
  }
  unselectFacet(e) {
    const t = this.dataLayer.searchObject;
    let a = [...t.facets];
    e.type === "checkbox" && (a = a.filter(r => JSON.stringify(r) !== JSON.stringify(this.extractFacetValue(e)))), setTimeout(() => {
      this.dataLayer.setSearchObject({
        ...t,
        facets: a
      }), this.generateSelectedFacetsData();
    }, 0);
  }
  removeSelectedFacets() {
    const e = this.dataLayer.searchObject;
    this.dataLayer.setSearchObject({
      ...e,
      facets: []
    });
  }
  createFilterByComponent(e) {
    var s, i, c, l, h, u, g, p;
    const t = ((c = (i = (s = this.config) == null ? void 0 : s.templates) == null ? void 0 : i.filterByTemplate) == null ? void 0 : c.template) || ((l = d.facets.filterByTemplate) == null ? void 0 : l.template),
      a = document.createElement("div");
    a.innerHTML = m.render(t, {});
    const r = a.querySelector("." + (((g = (u = (h = this.config) == null ? void 0 : h.templates) == null ? void 0 : u.filterByTemplate) == null ? void 0 : g.containerClass) || ((p = d.facets.filterByTemplate) == null ? void 0 : p.containerClass)));
    r && (e.prepend(r), r.addEventListener("click", this.openOverlay.bind(this)));
  }
  openOverlay() {
    var e;
    this.overlayOpened = !0, this.searchFacetsMainContainer && (document.body.classList.toggle("searchstax-no-scroll"), (e = this.searchFacetsMainContainer.querySelector(".searchstax-facets-mobile-overlay")) == null || e.classList.add("searchstax-show"));
  }
  closeOverlay() {
    var e;
    this.overlayOpened = !1, this.searchFacetsMainContainer && (document.body.classList.toggle("searchstax-no-scroll"), (e = this.searchFacetsMainContainer.querySelector(".searchstax-facets-mobile-overlay")) == null || e.classList.remove("searchstax-show"));
  }
  renderMobileTemplate(e) {
    var t, a, r, s, i, c, l, h, u, g, p, y, L, f, C, S, b, R, I;
    if (e) {
      const T = document.createElement("div");
      T.classList.add("searchstax-facets-container-mobile");
      const w = ((r = (a = (t = this.config) == null ? void 0 : t.templates) == null ? void 0 : a.mainTemplateMobile) == null ? void 0 : r.template) || ((s = d.facets.mainTemplateMobile) == null ? void 0 : s.template);
      if (this.dataLayer.renderingEngine === x.mustache) {
        if (T.innerHTML = m.render(w, {
          ...e,
          overlayOpened: this.overlayOpened
        }), (i = this.searchFacetsMainContainer) == null || i.appendChild(T), (l = (c = this.config) == null ? void 0 : c.templates) != null && l.mainTemplateMobile) for (const A of ((g = (u = (h = this.config) == null ? void 0 : h.templates) == null ? void 0 : u.mainTemplateMobile) == null ? void 0 : g.closeOverlayTriggerClasses) || []) {
          const q = T.querySelector("." + A);
          q && q.addEventListener("click", this.closeOverlay.bind(this));
        } else for (const A of d.facets.mainTemplateMobile.closeOverlayTriggerClasses) {
          const q = T.querySelector("." + A);
          q && q.addEventListener("click", this.closeOverlay.bind(this));
        }
        const j = T.querySelector("." + (((L = (y = (p = this.config) == null ? void 0 : p.templates) == null ? void 0 : y.mainTemplateMobile) == null ? void 0 : L.filterByContainerClass) || d.facets.mainTemplateMobile.filterByContainerClass));
        j && this.createFilterByComponent(j);
        const P = T.querySelector("." + (((S = (C = (f = this.config) == null ? void 0 : f.templates) == null ? void 0 : C.mainTemplateMobile) == null ? void 0 : S.selectedFacetsContainerClass) || d.facets.mainTemplateMobile.selectedFacetsContainerClass));
        P && (this.createSelectedFacetsComponents(P), this.createClearFacetsComponents(P));
        const B = T.querySelector("." + (((I = (R = (b = this.config) == null ? void 0 : b.templates) == null ? void 0 : R.mainTemplateMobile) == null ? void 0 : I.facetsContainerClass) || d.facets.mainTemplateMobile.facetsContainerClass));
        if (B) {
          B.innerHTML = "";
          for (const A of e.facets) this.createFacetItem(A, B, !0);
        }
      }
    }
  }
}
class Re {
  constructor(e) {
    n(this, "dataLayer");
    n(this, "config");
    n(this, "containerId");
    n(this, "previousButtonClass");
    n(this, "nextButtonClass");
    n(this, "routerHelper");
    n(this, "searchPaginationMainContainer", null);
    var t, a, r, s, i, c;
    this.dataLayer = e.dataLayer, this.config = e.config, this.containerId = e.containerId, this.routerHelper = e.routerHelper, this.previousButtonClass = ((r = (a = (t = this.config) == null ? void 0 : t.templates) == null ? void 0 : a.mainTemplate) == null ? void 0 : r.previousButtonClass) ?? d.pagination.mainTemplate.previousButtonClass, this.nextButtonClass = ((c = (i = (s = this.config) == null ? void 0 : s.templates) == null ? void 0 : i.mainTemplate) == null ? void 0 : c.nextButtonClass) ?? d.pagination.mainTemplate.nextButtonClass, this.searchPaginationMainContainer = document.getElementById(this.containerId), this.initializeSubscriptions(), this.renderMainTemplate(this.generateTemplateData());
  }
  get isFirstPage() {
    var e;
    return ((e = this.dataLayer.searchObject) == null ? void 0 : e.page) === 1;
  }
  get isLastPage() {
    var e, t;
    return ((e = this.dataLayer.searchObject) == null ? void 0 : e.page) === Math.ceil((((t = this.dataLayer.searchResultsMetadata) == null ? void 0 : t.totalResultsValue) ?? 0) / 10);
  }
  initializeSubscriptions() {
    this.dataLayer.$searchResults.subscribe(e => {
      e && this.renderMainTemplate(this.generateTemplateData());
    });
  }
  generateTemplateData() {
    var t, a, r, s;
    const e = {
      ...this.dataLayer.parsedData.data,
      previousPageLink: (a = this.routerHelper) == null ? void 0 : a.searchObjectToUrl({
        ...this.dataLayer.searchObject,
        page: ((t = this.dataLayer.searchObject) == null ? void 0 : t.page) - 1
      }),
      nextPageLink: (s = this.routerHelper) == null ? void 0 : s.searchObjectToUrl({
        ...this.dataLayer.searchObject,
        page: ((r = this.dataLayer.searchObject) == null ? void 0 : r.page) + 1
      })
    };
    return this.dataLayer.setPaginationData(e), e;
  }
  goToPage(e) {
    const t = this.dataLayer.searchObject;
    t && (t.page = e, this.dataLayer.setSearchObject(t)), window.scrollTo(0, 0);
  }
  nextPage(e) {
    var t;
    e.preventDefault(), e.stopPropagation(), this.isLastPage || this.goToPage(((t = this.dataLayer.searchObject) == null ? void 0 : t.page) + 1);
  }
  previousPage(e) {
    var t;
    e.preventDefault(), e.stopPropagation(), this.isFirstPage || this.goToPage(((t = this.dataLayer.searchObject) == null ? void 0 : t.page) - 1);
  }
  overridePaginationEvents() {
    if (this.searchPaginationMainContainer) {
      const e = this.searchPaginationMainContainer.querySelector("." + this.previousButtonClass),
        t = this.searchPaginationMainContainer.querySelector("." + this.nextButtonClass);
      e && e.addEventListener("click", this.previousPage.bind(this)), t && t.addEventListener("click", this.nextPage.bind(this));
    }
  }
  renderMainTemplate(e) {
    var a, r, s, i, c, l;
    this.searchPaginationMainContainer && ((a = this.searchPaginationMainContainer.querySelector("." + this.previousButtonClass)) == null || a.removeEventListener("click", this.previousPage), (r = this.searchPaginationMainContainer.querySelector("." + this.nextButtonClass)) == null || r.removeEventListener("click", this.nextPage));
    const t = ((c = (i = (s = this.config) == null ? void 0 : s.templates) == null ? void 0 : i.mainTemplate) == null ? void 0 : c.template) || ((l = d.pagination.mainTemplate) == null ? void 0 : l.template);
    this.dataLayer.renderingEngine === x.mustache && (this.searchPaginationMainContainer.innerHTML = m.render(t, e), setTimeout(() => {
      this.overridePaginationEvents();
    }, 0));
  }
}
class Ie {
  constructor(e) {
    n(this, "dataLayer");
    n(this, "config");
    n(this, "containerId");
    n(this, "relatedSearchesContainerClass");
    n(this, "searchRelatedSearchesMainContainer", null);
    n(this, "track");
    var t, a;
    this.dataLayer = e.dataLayer, this.config = e.config, this.containerId = e.containerId, this.relatedSearchesContainerClass = ((a = (t = this.config.templates) == null ? void 0 : t.main) == null ? void 0 : a.relatedSearchesContainerClass) || d.relatedSearches.main.relatedSearchesContainerClass, this.searchRelatedSearchesMainContainer = document.getElementById(this.containerId), this.track = e.trackRelatedSearchClick, this.initializeSubscriptions();
  }
  initializeSubscriptions() {
    this.dataLayer.$searchRelatedSearches.subscribe(e => {
      e && this.renderMainTemplate(this.generateTemplateData());
    });
  }
  generateTemplateData() {
    const e = {
      ...this.dataLayer.parsedData.data
    };
    return this.dataLayer.setRelatedSearchesData(e), e;
  }
  addRelatedSearchComponent(e, t) {
    var s, i, c, l, h;
    const a = document.createElement("div"),
      r = ((c = (i = (s = this.config) == null ? void 0 : s.templates) == null ? void 0 : i.relatedSearch) == null ? void 0 : c.template) || d.relatedSearches.relatedSearch.template;
    if (this.dataLayer.renderingEngine === x.mustache) {
      a.innerHTML = m.render(r, e);
      const u = a.querySelector("." + (((h = (l = this.config.templates) == null ? void 0 : l.relatedSearch) == null ? void 0 : h.relatedSearchContainerClass) || d.relatedSearches.relatedSearch.relatedSearchContainerClass));
      u && (t.appendChild(u), u.addEventListener("click", () => {
        this.executeSearch(e);
      }));
    }
  }
  executeSearch(e) {
    const t = this.dataLayer.searchObject;
    t.query = e.related_search, this.dataLayer.setSearchObject(t), this.track(e);
  }
  renderMainTemplate(e) {
    var a, r, s, i;
    const t = ((s = (r = (a = this.config) == null ? void 0 : a.templates) == null ? void 0 : r.main) == null ? void 0 : s.template) || d.relatedSearches.main.template;
    if (this.dataLayer.renderingEngine === x.mustache && this.searchRelatedSearchesMainContainer) {
      this.searchRelatedSearchesMainContainer.innerHTML = "", this.searchRelatedSearchesMainContainer.innerHTML =
      //@ts-expect-error - mustache is not a module
      m.render(t, e);
      const c = (i = this.searchRelatedSearchesMainContainer) == null ? void 0 : i.querySelector(`.${this.relatedSearchesContainerClass}`);
      if (c) for (const l of e.relatedSearches) this.addRelatedSearchComponent(l, c);
    }
  }
}
class Pe {
  constructor(e) {
    n(this, "dataLayer");
    n(this, "config");
    n(this, "containerId");
    n(this, "searchFeedbackMainContainer", null);
    n(this, "searchTrigger");
    this.dataLayer = e.dataLayer, this.config = e.config, this.containerId = e.containerId, this.searchTrigger = e.searchTrigger, this.searchFeedbackMainContainer = document.getElementById(this.containerId), this.initializeSubscriptions();
  }
  initializeSubscriptions() {
    this.dataLayer.$searchResults.subscribe(e => {
      e && this.renderMainTemplate(this.generateTemplateData());
    });
  }
  generateTemplateData() {
    const e = {
      ...this.dataLayer.parsedData.data
    };
    return this.dataLayer.setSearchFeedbackData(e), e;
  }
  onOriginalQueryClick(e) {
    var a;
    e.stopPropagation(), e.preventDefault();
    const t = (a = e.target) == null ? void 0 : a.innerHTML;
    this.searchTrigger(t, !0);
  }
  attachClick() {
    var t, a, r, s, i;
    const e = (i = this.searchFeedbackMainContainer) == null ? void 0 : i.querySelector("." + (((r = (a = (t = this.config) == null ? void 0 : t.templates) == null ? void 0 : a.main) == null ? void 0 : r.originalQueryClass) || ((s = d.searchFeedback.main) == null ? void 0 : s.originalQueryClass)));
    e && e.addEventListener("click", this.onOriginalQueryClick.bind(this));
  }
  renderMainTemplate(e) {
    var a, r, s;
    const t = ((s = (r = (a = this.config) == null ? void 0 : a.templates) == null ? void 0 : r.main) == null ? void 0 : s.template) || d.searchFeedback.main.template;
    this.dataLayer.renderingEngine === x.mustache && (this.searchFeedbackMainContainer.innerHTML = m.render(t, e), setTimeout(() => {
      this.attachClick();
    }, 0));
  }
}
class Fe {
  constructor(e) {
    n(this, "dataLayer");
    n(this, "config");
    n(this, "suggestAfterMinChars");
    n(this, "containerId");
    n(this, "currentInputValue", "");
    n(this, "autosuggestResults");
    n(this, "searchInput");
    n(this, "actionButton");
    n(this, "autosuggestContainer");
    n(this, "buttonState", "search");
    n(this, "selectedAutosuggestItem", -1);
    n(this, "suggestTrigger");
    n(this, "searchTrigger");
    this.dataLayer = e.dataLayer, this.config = e.config, this.searchTrigger = e.searchTrigger, this.suggestTrigger = e.suggestTrigger, this.containerId = e.containerId, this.suggestAfterMinChars = e.config.suggestAfterMinChars, this.renderMainTemplate(), this.actionButtonInit(), this.updateActionButtonState("search"), this.searchInput && (this.createAutosuggestContainer(), this.attachSubscriptions());
  }
  renderMainTemplate() {
    var s, i, c, l;
    const e = document.getElementById(this.containerId);
    if (!e) throw new Error("Search input container not found");
    const t = ((i = (s = this.config.templates) == null ? void 0 : s.mainTemplate) == null ? void 0 : i.template) || d.searchInput.mainTemplate.template;
    if (this.dataLayer.renderingEngine === x.mustache) {
      const h = m.render(t, {});
      e.innerHTML = h;
    }
    const a = ((l = (c = this.config.templates) == null ? void 0 : c.mainTemplate) == null ? void 0 : l.searchInputId) || d.searchInput.mainTemplate.searchInputId,
      r = document.querySelector(`#${a}`);
    if (r) this.searchInput = r, r.addEventListener("keyup", this.inputKeyupEvent.bind(this)), r.addEventListener("blur", this.hideAutosuggest.bind(this)), r.addEventListener("paste", this.inputPasteEvent.bind(this));else throw new Error("Input not found");
  }
  createAutosuggestContainer() {
    var e;
    this.dataLayer.renderingEngine === x.mustache && (this.autosuggestContainer = document.createElement("div"), this.autosuggestContainer.classList.add("searchstax-autosuggest-container"), this.autosuggestContainer.addEventListener("mouseleave", () => {
      this.resetAutosuggestSelection(), this.markActiveAutosuggestItem();
    }), (e = this.searchInput) == null || e.after(this.autosuggestContainer));
  }
  actionButtonInit() {
    this.actionButton = document.getElementById("searchstax-search-input-action-button"), this.actionButton && this.actionButton.addEventListener("click", () => {
      var e;
      this.buttonState === "search" ? this.executeSearch(((e = this.searchInput) == null ? void 0 : e.value) ?? "") : this.buttonState === "close" && this.searchInput && (this.searchInput.value = "", this.executeSearch(""));
    });
  }
  attachSubscriptions() {
    this.dataLayer.$searchTermChange.subscribe(() => {
      this.handleSearchTermChange();
    }), this.dataLayer.$loadingChange.subscribe(() => {
      this.handleLoadingChange();
    }), this.dataLayer.$searchAutosuggest.subscribe(e => {
      e && this.appendSuggestions(e);
    }), this.dataLayer.$searchObject.subscribe(e => {
      e.query !== "undefined" && e.query !== void 0 && e.query !== "*" && this.searchInput && (this.searchInput.value = this.cleanSuggestionTerm(e.query ?? ""));
    });
  }
  handleLoadingChange() {
    this.dataLayer.loading ? this.updateActionButtonState("loading") : this.handleSearchTermChange();
  }
  handleSearchTermChange() {
    var e;
    this.dataLayer.searchTerm === ((e = this.searchInput) == null ? void 0 : e.value) && this.searchInput.value !== "" ? this.updateActionButtonState("close") : this.updateActionButtonState("search");
  }
  updateActionButtonState(e) {
    if (this.buttonState = e, this.actionButton) switch (this.actionButton.classList.remove("searchstax-spinner-icon"), this.actionButton.classList.remove("searchstax-search-close"), this.actionButton.classList.remove("searchstax-search-icon"), e) {
      case "loading":
        this.actionButton.classList.add("searchstax-spinner-icon");
        break;
      case "search":
        this.actionButton.classList.add("searchstax-search-icon");
        break;
      case "close":
        this.actionButton.classList.add("searchstax-search-close");
        break;
    }
  }
  selectPreviousAutosuggestItem() {
    this.selectedAutosuggestItem > 0 ? this.selectedAutosuggestItem-- : this.selectedAutosuggestItem = this.autosuggestResults.suggestions.length - 1, this.markActiveAutosuggestItem();
  }
  selectNextAutosuggestItem() {
    this.selectedAutosuggestItem < this.autosuggestResults.suggestions.length - 1 ? this.selectedAutosuggestItem++ : this.selectedAutosuggestItem = 0, this.markActiveAutosuggestItem();
  }
  resetAutosuggestSelection() {
    this.selectedAutosuggestItem = -1, this.markActiveAutosuggestItem();
  }
  markActiveAutosuggestItem() {
    const e = document.getElementsByClassName("searchstax-autosuggest-item");
    for (let t = 0; t < e.length; t++) {
      const a = e[t];
      t === this.selectedAutosuggestItem ? a.classList.add("active") : a.classList.remove("active");
    }
  }
  inputKeyupEvent(e) {
    const t = e.key;
    this.currentInputValue = e.target.value, t === "Enter" ? this.suggestionChosen() : t === "Escape" ? this.hideAutosuggest() : t === "ArrowUp" ? this.selectPreviousAutosuggestItem() : t === "ArrowDown" ? this.selectNextAutosuggestItem() : this.autosuggestHandling(e), this.handleSearchTermChange();
  }
  autosuggestHandling(e) {
    e.target && e.target.value.length >= this.suggestAfterMinChars ? this.executeSuggest(e.target.value) : this.hideAutosuggest();
  }
  inputPasteEvent(e) {
    setTimeout(() => {
      this.autosuggestHandling(e), this.handleSearchTermChange();
    }, 0);
  }
  executeSuggest(e) {
    this.suggestTrigger(e);
  }
  executeSearch(e) {
    this.hideAutosuggest(), this.searchTrigger(e === "" ? "*" : e);
  }
  suggestionChosen() {
    this.selectedAutosuggestItem > -1 ? this.autosuggestItemClicked(this.autosuggestResults.suggestions[this.selectedAutosuggestItem]) : this.executeSearch(this.currentInputValue);
  }
  hideAutosuggest() {
    setTimeout(() => {
      this.dataLayer.setAutosuggestResults({
        numFound: 0,
        suggestions: []
      }), this.autosuggestContainer && (this.autosuggestContainer.innerHTML = "", this.autosuggestContainer.classList.add("hidden")), this.resetAutosuggestSelection();
    }, 100);
  }
  cleanSuggestionTerm(e) {
    return E.removeXSSRiskyTags(e.replace(/(<([^>]+)>)/gi, "")).trim();
  }
  autosuggestItemClicked(e) {
    this.searchInput.value = this.cleanSuggestionTerm(e.term ?? ""), this.executeSearch(this.cleanSuggestionTerm(e.term));
  }
  createAutosuggestItem(e) {
    var r, s, i;
    const t = document.createElement("div");
    t.classList.add("searchstax-autosuggest-item"), t.addEventListener("click", () => {
      this.autosuggestItemClicked(e);
    }), t.addEventListener("mouseenter", () => {
      this.onSuggestionEnter(e);
    });
    const a = ((s = (r = this.config.templates) == null ? void 0 : r.autosuggestItemTemplate) == null ? void 0 : s.template) || ((i = d.searchInput.autosuggestItemTemplate) == null ? void 0 : i.template);
    return t.innerHTML = m.render(a, e), t;
  }
  onSuggestionEnter(e) {
    var t;
    this.selectedAutosuggestItem = ((t = this.autosuggestResults) == null ? void 0 : t.suggestions.indexOf(e)) || 0, this.markActiveAutosuggestItem();
  }
  appendSuggestions(e) {
    this.autosuggestContainer && (this.autosuggestContainer.innerHTML = "", this.autosuggestContainer.classList.remove("hidden"));
    for (const t in e.suggest) if (Object.prototype.hasOwnProperty.call(e.suggest, t)) {
      const a = e.suggest[t];
      for (const r in a) if (Object.prototype.hasOwnProperty.call(a, r)) {
        const s = a[r];
        this.autosuggestResults = s, this.dataLayer.setAutosuggestResults(s), s.numFound > 0 ? s.suggestions.forEach(i => {
          this.autosuggestContainer && this.autosuggestContainer.appendChild(this.createAutosuggestItem(i));
        }) : this.autosuggestContainer && this.autosuggestContainer.classList.add("hidden");
      }
    }
  }
}
class Ee {
  constructor(e) {
    n(this, "dataLayer");
    n(this, "config");
    n(this, "linkClickCallback");
    n(this, "searchCallback");
    n(this, "containerId");
    n(this, "searchResultsMainContainer");
    n(this, "searchResultsContainer");
    n(this, "searchResultLinks", []);
    this.linkClickCallback = e.linkClickCallback, this.searchCallback = e.searchTrigger, this.dataLayer = e.dataLayer, this.config = e.config, this.containerId = e.containerId;
    const t = document.getElementById(this.containerId);
    if (t) this.searchResultsMainContainer = t;else throw new Error(`Search Results Main Container with id ${this.containerId} not found`);
    this.initializeSubscriptions(), this.renderMainTemplate();
  }
  initializeSubscriptions() {
    this.dataLayer.$searchResults.subscribe(e => {
      e && this.searchResultsContainer && this.renderResults(e);
    });
  }
  changeTemplate() {
    this.dataLayer.searchResults && this.renderResults(this.dataLayer.searchResults);
  }
  renderNoResultsTemplate() {
    var a, r, s, i, c;
    const e = ((s = (r = (a = this.config) == null ? void 0 : a.templates) == null ? void 0 : r.noSearchResultTemplate) == null ? void 0 : s.template) || ((i = d.searchResults.noSearchResultTemplate) == null ? void 0 : i.template),
      t = ((c = this.dataLayer.searchResultsMetadata) == null ? void 0 : c.spellingSuggestion) ?? "";
    if (this.dataLayer.renderingEngine === x.mustache && this.searchResultsContainer && (this.searchResultsContainer.innerHTML = m.render(e, {
      spellingSuggestion: t,
      searchTerm: this.dataLayer.searchTerm
    })), t && this.searchResultsContainer) {
      const l = this.searchResultsContainer.querySelector("a");
      l && l.addEventListener("click", h => {
        h.preventDefault(), h.stopPropagation(), this.searchCallback(t);
      });
    }
  }
  renderResults(e) {
    var t, a, r, s;
    if (this.dataLayer.renderingEngine === x.mustache && this.searchResultsContainer) if (this.removeLinkClickEvents(), e.length === 0) this.renderNoResultsTemplate();else {
      const i = ((r = (a = (t = this.config) == null ? void 0 : t.templates) == null ? void 0 : a.searchResultTemplate) == null ? void 0 : r.template) || ((s = d.searchResults.searchResultTemplate) == null ? void 0 : s.template),
        c = e.map(l => m.render(i, l));
      this.searchResultsContainer.innerHTML = c.join(""), this.searchResultLinks = Array.from(this.searchResultsContainer.querySelectorAll(`[${this.uniqueIdAttribute}]`)), this.attachLinkClickEvents();
    }
  }
  removeLinkClickEvents() {
    this.searchResultLinks.forEach(e => {
      e.removeEventListener("click", () => {});
    });
  }
  get uniqueIdAttribute() {
    var e, t, a, r;
    return ((a = (t = (e = this.config) == null ? void 0 : e.templates) == null ? void 0 : t.searchResultTemplate) == null ? void 0 : a.searchResultUniqueIdAttribute) || ((r = d.searchResults.searchResultTemplate) == null ? void 0 : r.searchResultUniqueIdAttribute);
  }
  attachLinkClickEvents() {
    this.searchResultLinks.forEach(e => {
      e.addEventListener("click", t => {
        t.preventDefault(), t.stopPropagation();
        const a = e.getAttribute(this.uniqueIdAttribute) ?? "";
        a && this.linkClickCallback(a);
      });
    });
  }
  renderMainTemplate() {
    var t, a, r, s;
    const e = ((r = (a = (t = this.config) == null ? void 0 : t.templates) == null ? void 0 : a.mainTemplate) == null ? void 0 : r.template) || ((s = d.searchResults.mainTemplate) == null ? void 0 : s.template);
    this.dataLayer.renderingEngine === x.mustache && (this.searchResultsMainContainer.innerHTML = m.render(e, {}), setTimeout(() => {
      var l, h, u, g, p, y, L;
      const i = (u = (h = (l = this.config) == null ? void 0 : l.templates) == null ? void 0 : h.mainTemplate) != null && u.searchResultsContainerId ? (y = (p = (g = this.config) == null ? void 0 : g.templates) == null ? void 0 : p.mainTemplate) == null ? void 0 : y.searchResultsContainerId : (L = d.searchResults.mainTemplate) == null ? void 0 : L.searchResultsContainerId,
        c = document.getElementById(i);
      if (c) this.searchResultsContainer = c;else throw new Error(`Search Results Container with id ${i} not found`);
    }, 0));
  }
}
class we {
  constructor(e) {
    n(this, "dataLayer");
    n(this, "config");
    n(this, "containerId");
    n(this, "selectId");
    n(this, "searchSortingMainContainer", null);
    var t, a;
    this.dataLayer = e.dataLayer, this.config = e.config, this.containerId = e.containerId, this.selectId = ((a = (t = this.config.templates) == null ? void 0 : t.main) == null ? void 0 : a.selectId) || d.sorting.main.selectId, this.searchSortingMainContainer = document.getElementById(this.containerId), this.initializeSubscriptions(), this.renderMainTemplate(this.generateTemplateData());
  }
  initializeSubscriptions() {
    this.dataLayer.$searchResults.subscribe(e => {
      e && this.renderMainTemplate(this.generateTemplateData());
    });
  }
  generateTemplateData() {
    const e = {
      ...this.dataLayer.parsedData.data
    };
    return this.dataLayer.setSearchSortingData(e), e;
  }
  setOrderQuery(e) {
    const t = this.dataLayer.searchObject;
    t && (t.order = e, this.dataLayer.setSearchObject(t));
  }
  markOptionSelected() {
    const e = document.getElementById(this.selectId);
    if (e) {
      const t = e.querySelector(`option[value="${decodeURIComponent(this.dataLayer.searchObject.order)}"]`);
      t && (t.selected = !0);
    }
  }
  renderMainTemplate(e) {
    var a, r, s;
    const t = ((s = (r = (a = this.config) == null ? void 0 : a.templates) == null ? void 0 : r.main) == null ? void 0 : s.template) || d.sorting.main.template;
    if (this.dataLayer.renderingEngine === x.mustache) {
      this.searchSortingMainContainer.innerHTML = m.render(t, e), this.markOptionSelected();
      const i = document.getElementById(this.selectId);
      i && i.addEventListener("change", c => {
        this.setOrderQuery(c.target.value);
      });
    }
  }
}
class De {
  constructor(e = x.mustache) {
    n(this, "routerEnabled", !1);
    n(this, "cachedQuery", "");
    n(this, "routerHelper");
    n(this, "searchHelper");
    n(this, "searchResultsConfig");
    n(this, "searchPaginationConfig");
    n(this, "searchFeedbackConfig");
    n(this, "searchSortingConfig");
    n(this, "searchFacetsConfig");
    n(this, "relatedSearchesConfig");
    n(this, "externalPromotionsConfig");
    n(this, "searchInputWidget");
    n(this, "searchResultsWidget");
    n(this, "searchFacetsWidget");
    n(this, "searchPaginationWidget");
    n(this, "searchFeedbackWidget");
    n(this, "searchSortingWidget");
    n(this, "relatedSearchesWidget");
    n(this, "externalPromotionsWidget");
    n(this, "dataLayer");
    n(this, "firstRequest", !0);
    this.dataLayer = new G("searchstax_session_id"), e && this.dataLayer.setRenderingEngine(e), this.handleHooks();
  }
  setRenderingEngine(e = x.mustache) {
    this.dataLayer.setRenderingEngine(e);
  }
  handleHooks() {
    var e, t;
    (t = (e = this.dataLayer.searchstaxConfig) == null ? void 0 : e.hooks) != null && t.afterSearch && this.dataLayer.$searchResults.subscribe(a => {
      this.dataLayer.searchstaxConfig.hooks.afterSearch(a);
    }), this.dataLayer.$searchObject.subscribe(a => {
      a.query !== "" && this.search(a);
    }), this.dataLayer.$searchResults.subscribe(a => {
      a && this.dataLayer.searchResultsMetadata && !this.dataLayer.cookiesDisabled && H.trackSearch({
        ...this.dataLayer.parsedData.trackingData,
        impressions: this.dataLayer.searchResultsMetadata.impressions
      });
    });
  }
  initialize(e) {
    var t, a;
    e.autoCorrect === !1 && (this.dataLayer.autoCorrect = !1), this.dataLayer.searchstaxConfig || (this.dataLayer.setSearchstaxConfig(e), this.searchHelper = new Z({
      ...e,
      sessionId: this.dataLayer.sessionId
    }, this.dataLayer)), ((t = e.router) == null ? void 0 : t.enabled) === void 0 || ((a = e.router) == null ? void 0 : a.enabled) === !0 ? (this.routerEnabled = !0, this.routerHelper = new K(e.router ? e.router : {
      enabled: !0
    }), this.dataLayer.setSearchObject(this.routerHelper.urlToSearchObject(window.location.href)), addEventListener("popstate", () => {
      this.routerHelper && this.dataLayer.setSearchObject(this.routerHelper.urlToSearchObject(window.location.href));
    })) : this.routerHelper = new K({});
  }
  search(e) {
    if (this.searchHelper && e.query !== "" && e.query !== void 0 && e.query !== "undefined") {
      const t = this.dataLayer.forceNotCorrect;
      this.searchHelper.search(e, this.parseSearchResultsResponse.bind(this), this.firstRequest, t), this.firstRequest = !1, this.getRelatedSearches();
    }
  }
  getRelatedSearches() {
    this.searchHelper && this.relatedSearchesConfig && this.searchHelper.getRelatedSearches(this.dataLayer.searchObject, this.relatedSearchesConfig.relatedSearchesURL, this.relatedSearchesConfig.relatedSearchesAPIKey, this.parseRelatedSearchesResponse.bind(this));
  }
  parseRelatedSearchesResponse(e) {
    var s;
    const a = (((s = e.response) == null ? void 0 : s.docs) ?? []).map((i, c) => ({
        ...i,
        position: c + 1
      })),
      r = [];
    for (const i of a) r.push({
      relatedSearch: i.related_search,
      position: i.position
    });
    this.dataLayer.searchResultsMetadata && !this.dataLayer.cookiesDisabled && H.trackRelatedSearches({
      ...this.dataLayer.parsedData.trackingData,
      impressions: r
    }), this.dataLayer.setSearchRelatedSearches(a);
  }
  handleRouter() {
    this.routerEnabled && this.routerHelper.updateUrl(this.dataLayer.searchObject);
  }
  parseSearchResultsResponse(e) {
    var s, i;
    this.handleRouter();
    let t = O.combineResultsWithMetadata(e),
      a = O.extractFacets(e);
    this.dataLayer.setSearchFacets(a), (i = (s = this.dataLayer.searchstaxConfig) == null ? void 0 : s.hooks) != null && i.afterSearch && (t = this.dataLayer.searchstaxConfig.hooks.afterSearch(t)), this.dataLayer.setSearchExternalPromotions(e.externalLinks ?? []);
    const r = O.extractSearchResultsMetadata(e);
    this.dataLayer.setSearchResultsMetadata(r), this.dataLayer.setSearchResults(t);
  }
  cacheFacets() {
    var e;
    (e = this.searchHelper) == null || e.cacheFacets();
  }
  parseSuggestSuggestResponse(e) {
    var a, r;
    let t = e;
    (r = (a = this.dataLayer.searchInputConfig) == null ? void 0 : a.hooks) != null && r.afterAutosuggest && (t = this.dataLayer.searchInputConfig.hooks.afterAutosuggest(e)), this.dataLayer.setSearchAutosuggest(t);
  }
  suggest(e, t) {
    this.searchHelper && this.searchHelper.suggest(e, this.parseSuggestSuggestResponse.bind(this), t);
  }
  changeLanguage(e) {
    this.searchHelper && this.dataLayer.setLanguage(e);
  }
  addSearchInputWidget(e, t) {
    this.dataLayer.searchInputConfig || (this.dataLayer.setSearchInputConfig(t), this.searchInputWidget = new Fe({
      containerId: e,
      config: t,
      searchTrigger: this.executeSearch.bind(this),
      suggestTrigger: this.executeSuggest.bind(this),
      dataLayer: this.dataLayer
    }));
  }
  addSearchResultsWidget(e, t) {
    this.searchResultsConfig || (this.searchResultsConfig = t, this.searchResultsWidget = new Ee({
      containerId: e,
      linkClickCallback: this.executeLinkClick.bind(this),
      searchTrigger: this.executeSearch.bind(this),
      config: t,
      dataLayer: this.dataLayer
    }));
  }
  addPaginationWidget(e, t) {
    this.searchPaginationConfig = t, this.searchPaginationWidget = new Re({
      containerId: e,
      config: t,
      dataLayer: this.dataLayer,
      routerHelper: this.routerHelper
    });
  }
  addSearchFeedbackWidget(e, t) {
    this.searchFeedbackConfig || (this.searchFeedbackConfig = t, this.searchFeedbackWidget = new Pe({
      containerId: e,
      config: t,
      dataLayer: this.dataLayer,
      searchTrigger: this.executeSearch.bind(this)
    }));
  }
  addSearchSortingWidget(e, t) {
    this.searchSortingConfig || (this.searchSortingConfig = t, this.searchSortingWidget = new we({
      containerId: e,
      config: t,
      dataLayer: this.dataLayer
    }));
  }
  addRelatedSearchesWidget(e, t) {
    this.relatedSearchesConfig || (this.relatedSearchesConfig = t, this.relatedSearchesWidget = new Ie({
      containerId: e,
      config: t,
      dataLayer: this.dataLayer,
      trackRelatedSearchClick: this.trackRelatedSearchClick.bind(this)
    }), setTimeout(() => {
      this.getRelatedSearches();
    }, 0));
  }
  addExternalPromotionsWidget(e, t) {
    this.externalPromotionsConfig || (this.externalPromotionsConfig = t, this.externalPromotionsWidget = new xe({
      containerId: e,
      config: t,
      dataLayer: this.dataLayer
    }));
  }
  addFacetsWidget(e, t) {
    this.searchFacetsConfig = t, this.searchFacetsWidget = new ke({
      containerId: e,
      config: t,
      dataLayer: this.dataLayer,
      routerHelper: this.routerHelper
    }, this.cacheFacets.bind(this));
  }
  executeSearch(e, t) {
    var s, i;
    const a = {
      ...this.dataLayer.searchObject
    };
    a.query = E.removeXSSRiskyTags(e), a.page = 1, a.facets = [], this.dataLayer.forceNotCorrect = !!t;
    let r = (s = this.routerHelper) == null ? void 0 : s.searchObjectToParams(a);
    r && (r = (i = this.routerHelper) == null ? void 0 : i.extractParamsThatDoNotStartWithRouteName(r)), r && (a.additionalProps = Object.keys(r).map(c => r ? {
      key: c,
      value: r[c]
    } : {
      key: "",
      value: ""
    })), this.dataLayer.setSearchObject(a);
  }
  executeSuggest(e) {
    var a, r;
    let t = {
      term: e,
      queryParams: []
    };
    (r = (a = this.dataLayer.searchInputConfig) == null ? void 0 : a.hooks) != null && r.beforeAutosuggest && (t = this.dataLayer.searchInputConfig.hooks.beforeAutosuggest(t)), t && t.term !== void 0 && t.queryParams !== void 0 && this.suggest(t.term, t.queryParams);
  }
  trackRelatedSearchClick(e) {
    this.dataLayer.searchResultsMetadata && this.dataLayer.searchRelatedSearches && !this.dataLayer.cookiesDisabled && H.trackRelatedSearchClick({
      ...this.dataLayer.parsedData.trackingData,
      relatedSearch: e
    });
  }
  executeLinkClick(e) {
    var a, r;
    let t = O.findResultByUniqueId(e, this.dataLayer.searchResults ?? []);
    t && ((r = (a = this.searchResultsConfig) == null ? void 0 : a.hooks) != null && r.afterLinkClick && (t = this.searchResultsConfig.hooks.afterLinkClick(t)), t && this.dataLayer.searchResultsMetadata && !this.dataLayer.cookiesDisabled && (H.trackClick({
      result: t,
      ...this.dataLayer.parsedData.trackingData
    }), setTimeout(() => {
      window.location.href = (t == null ? void 0 : t.url) ?? "";
    }, 0)));
  }
  setPage(e) {
    var t;
    (t = this.searchPaginationWidget) == null || t.goToPage(e);
  }
  setCookiesDisabled(e) {
    this.dataLayer.setCookiesDisabled(e);
  }
  changeResultTemplate(e) {
    var t, a, r;
    this.searchResultsConfig && (this.searchResultsConfig.templates = (t = this.searchResultsConfig) != null && t.templates ? {
      ...((a = this.searchResultsConfig) == null ? void 0 : a.templates),
      ...e
    } : e, (r = this.searchResultsWidget) == null || r.changeTemplate());
  }
}
exports.Searchstax = De;
},{}],"config.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initConfig = void 0;
var initConfig = exports.initConfig = {
  acceleratorSample: {
    language: "en",
    searchURL: "https://searchcloud-2-us-east-1.searchstax.com/29847/corpsiteuxsamples-1442/emselect",
    suggesterURL: "https://searchcloud-2-us-east-1.searchstax.com/29847/corpsiteuxsamples-1442_suggester/emsuggest",
    searchAuth: "b065448ad1484e205f4851f0ce89d128e704e2f4",
    trackApiKey: "DPAOKNB9c5chZZDwN1Il9dLUCLMGF1ggehy0dWewZwk",
    authType: "token"
  },
  acceleratorRelatedSearchSample: {
    relatedSearchesURL: "https://app.searchstax.com/api/v1/1442/related-search/",
    relatedSearchesAPIKey: "fac98ad405cc50e0c0693331e8d2119de592f0e3"
  }
};
},{}],"widgets/searchInput.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchInput = void 0;
var searchInput = exports.searchInput = "\n    <div class=\"searchstax-search-input-container\">\n        <div class=\"searchstax-search-input-wrapper\">\n        <button class=\"searchstax-spinner-icon\" id=\"searchstax-search-input-action-button\"></button>\n            <input autocomplete=\"off\" type=\"text\" id=\"searchstax-search-input\" class=\"searchstax-search-input\" placeholder=\"Search \" />\n        </div>\n    </div>\n    ";
},{}],"widgets/facets.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.facetsTemplate = exports.facetItemTemplate = exports.facetItemContainerTemplate = void 0;
var facetsTemplate = exports.facetsTemplate = "\n    {{#hasResultsOrExternalPromotions}}\n        <div class=\"searchstax-facets-container-desktop\">\n        </div>\n    {{/hasResultsOrExternalPromotions}}\n";
var facetItemTemplate = exports.facetItemTemplate = {
  template: "\n        <div class=\"searchstax-facet-input\">\n            <input type=\"checkbox\" class=\"searchstax-facet-input-checkbox\" {{#disabled}}disabled{{/disabled}} {{#isChecked}}checked{{/isChecked}}/>\n        </div>\n        <div class=\"searchstax-facet-value-label\">{{value}}</div>\n        <div class=\"searchstax-facet-value-count\">({{count}})</div>\n    ",
  checkTriggerClasses: ["searchstax-facet-value-label", "searchstax-facet-value-count"]
};
var facetItemContainerTemplate = exports.facetItemContainerTemplate = {
  template: "\n        <div>\n            <div class=\"searchstax-facet-title-container\">\n               \n            </div>\n            <div class=\"searchstax-facet-values-container\"></div>\n        </div>\n    ",
  facetListTitleContainerClass: "searchstax-facet-title-container",
  facetListContainerClass: "searchstax-facet-values-container"
};
},{}],"widgets/searchFeedback.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchFeedback = void 0;
var searchFeedback = exports.searchFeedback = "\n{{#searchExecuted}}\n    <div class=\"searchstax-feedback-container\">\n      <b>{{totalResults}}</b> results\n    </div>\n{{/searchExecuted}}\n";
},{}],"widgets/pagination.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pagination = void 0;
var pagination = exports.pagination = "\n    {{#results.length}}\n        <div class=\"searchstax-pagination-container\">\n        <div class=\"searchstax-pagination-content\">\n        \n            <div class=\"searchstax-pagination-details\">\n            Showing {{startResultIndex}} - {{endResultIndex}} of {{totalResults}} results\n            </div>\n            <a class=\"searchstax-pagination-next {{#isLastPage}}hide{{/isLastPage}}\" id=\"searchstax-pagination-next\">Show more</a>\n\n        </div>\n        </div>\n    {{/results.length}}\n    ";
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/@searchstax-inc/searchstudio-ux-js/dist/styles/mainTheme.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./images/search.svg":[["search.48f4844e.svg","images/search.svg"],"images/search.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"ikeastyle.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _searchstudioUxJs = require("@searchstax-inc/searchstudio-ux-js");
var _config = require("./config");
var _searchInput = require("./widgets/searchInput");
var _facets = require("./widgets/facets");
var _searchFeedback = require("./widgets/searchFeedback");
var _pagination = require("./widgets/pagination");
require("@searchstax-inc/searchstudio-ux-js/dist/styles/mainTheme.css");
require("./main.scss");
require("./ikeastyle.scss");
// Import SearchStax UX JS

// Config required with Endpoints and API Keys

// Widgets Import

// Styling Imports

// Initialize SearchStax with config
var searchstax = new _searchstudioUxJs.Searchstax();
searchstax.initialize(_config.initConfig.acceleratorSample);

// Add Widgets

// 1. Input Widget
searchstax.addSearchInputWidget("searchstax-input-container", {
  suggestAfterMinChars: 3,
  templates: {
    mainTemplate: {
      template: _searchInput.searchInput,
      searchInputId: "searchstax-search-input"
    }
  }
});

// 2. Facets Widget
searchstax.addFacetsWidget("searchstax-facets-container", {
  facetingType: "tabs",
  itemsPerPageDesktop: 9999,
  itemsPerPageMobile: 99,
  templates: {
    mainTemplateDesktop: {
      template: _facets.facetsTemplate
    },
    facetItemTemplate: _facets.facetItemTemplate,
    facetItemContainerTemplate: _facets.facetItemContainerTemplate
  }
});

// 3. Search Feedback Widget
searchstax.addSearchFeedbackWidget("search-feedback-container", {
  templates: {
    main: {
      template: _searchFeedback.searchFeedback,
      originalQueryClass: "searchstax-feedback-original-query"
    }
  }
});

// 4. Pagination Widget
searchstax.addPaginationWidget("searchstax-pagination-container", {
  templates: {
    mainTemplate: {
      template: _pagination.pagination,
      previousButtonClass: "searchstax-pagination-previous",
      nextButtonClass: "searchstax-pagination-next"
    }
  }
});
},{"@searchstax-inc/searchstudio-ux-js":"../node_modules/@searchstax-inc/searchstudio-ux-js/dist/@searchstax-inc/searchstudio-ux-js.mjs","./config":"config.js","./widgets/searchInput":"widgets/searchInput.js","./widgets/facets":"widgets/facets.js","./widgets/searchFeedback":"widgets/searchFeedback.js","./widgets/pagination":"widgets/pagination.js","@searchstax-inc/searchstudio-ux-js/dist/styles/mainTheme.css":"../node_modules/@searchstax-inc/searchstudio-ux-js/dist/styles/mainTheme.css","./main.scss":"main.scss","./ikeastyle.scss":"ikeastyle.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59187" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map