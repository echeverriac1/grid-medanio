var sc_width = screen.width;
var sc_height = screen.height;
var sc_referer = "" + document.referrer;
try {
    sc_referer = "" + parent.document.referrer
} catch (ex) {
    sc_referer = "" + document.referrer
}
if (typeof sc_referer_scr08 !== "undefined") {
    sc_referer = sc_referer_scr08
}
var sc_unique = 0;
var sc_returning = 0;
var sc_returns = 0;
var sc_error = 0;
var sc_remove = 0;
var sc_cls = -1;
var sc_inv = 0;
var sc_os = "";
var sc_title = "";
var sc_url = "";
var sc_base_dir = "";
var sc_click_dir = "";
var sc_link_back_start = "";
var sc_link_back_end = "";
var sc_security_code = "";
var sc_http_url = "http";
var sc_host = "statcounter.com";
var sc_dc = "c";
var sc_alt_text = "StatCounter - Free Web Tracker and Counter";
var sc_counter_size = "";
var sc_prerendering = 0;
var sc_uuid = "";
var sc_uuid_q = "&u1=za";
var sc_unique_returning = "";
var sc_sp = "cookie";
if (window.sc_client_storage) {
    sc_sp = window.sc_client_storage
}
if (typeof window.sc_first_party_cookie != "undefined" && sc_first_party_cookie == "0") {
    sc_sp = "disabled"
}

function _sc_strip_tags(_1, _2) {
    _2 = (((_2 || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join("");
    var _3 = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
        _4 = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return _1.replace(_4, "").replace(_3, function($0, $1) {
        return _2.indexOf("<" + $1.toLowerCase() + ">") > -1 ? $0 : ""
    })
}

function _sc_sanitiseTags(_7) {
    for (i = 0; i < _7.length; i++) {
        _7[i] = ("" + _7[i]).trim()
    }
    return _7
}

function _sc_validateTags(_8) {
    var _9 = 10;
    var _a = 1;
    var _b = 300;
    var _c = [];
    if (!(_8.length % 2 == 0)) {
        _c.push("Every tag must have a name and value.")
    } else {
        if (_8.length / 2 > _9) {
            _c.push("No more than " + _9 + " tags can be passed - " + _8.length / 2 + " passed.")
        }
        for (i = 0; i < _8.length; i++) {
            var _d = ("" + _8[i]).length;
            if (_d < _a || _d > _b) {
                _c.push("Tag names and values must be between " + _a + " and " + _b + " characters in length ('" + _8[i] + "' is " + _8[i].length + " characters long).")
            }
        }
        for (i = 0; i < _8.length; i++) {
            if (_sc_strip_tags("" + _8[i]) != "" + _8[i]) {
                _c.push("Tag names and values may not contain HTML tags.")
            }
        }
    }
    if (_c.length != 0) {
        for (i = 0; i < _c.length; i++) {}
        return false
    }
    return true
}

function getTagString(_e) {
    function _f(obj, _11) {
        var _12 = obj.__proto__ || obj.constructor.prototype;
        return (_11 in obj) && (!(_11 in _12) || _12[_11] !== obj[_11])
    }
    if (Object.prototype.hasOwnProperty) {
        var _f = function(obj, _14) {
            return obj.hasOwnProperty(_14)
        }
    }
    var _15 = "";
    if (_f(_e, "tags") && typeof _e.tags === "object") {
        var _16 = [];
        for (var tag in _e.tags) {
            _16[_16.length] = tag;
            _16[_16.length] = _e.tags[tag]
        }
        if (_sc_validateTags(_16)) {
            _16 = _sc_sanitiseTags(_16);
            for (i = 0; i < _16.length; i = i + 2) {
                _15 += "&sc_ev_" + encodeURIComponent(_16[i]) + "=" + encodeURIComponent(_16[i + 1])
            }
        }
    }
    return _15
}

function isValidEventName(_18) {
    if (_18 !== null && _18 != "") {
        return true
    }
    return false
}
var _statcounter_pending = _statcounter;
var _statcounter = {
    push: function(_19) {
        if (_19 !== null && typeof _19 === "object") {
            function hasOwnProperty(obj, _1b) {
                var _1c = obj.__proto__ || obj.constructor.prototype;
                return (_1b in obj) && (!(_1b in _1c) || _1c[_1b] !== obj[_1b])
            }
            if (Object.prototype.hasOwnProperty) {
                var _1d = function(obj, _1f) {
                    return obj.hasOwnProperty(_1f)
                }
            }
            if (_1d(_19, "name") && isValidEventName(_19.name)) {
                var _20 = _19.name;
                if (_20 == "pageview") {
                    _statcounter_pending.push(_19);
                    return
                }
                var _21 = getTagString(_19);
                var _22 = 3;
                var _23 = sc_click_dir + "click.gif?sc_project=" + clickstat_project + "&security=" + clickstat_security + "&m=" + _22 + "&u=" + sc_url + "&t=" + sc_title + "&en=" + _20 + "&sess=4ea83c&rand=" + Math.random() + _21 + sc_uuid_q + sc_unique_returning;
                var _24 = new Image();
                _24.onload = sc_none;
                _24.src = _23;
                sc_delay()
            }
        }
    }
};
if (window.sc_invisible) {
    if (window.sc_invisible == 1) {
        sc_inv = 1
    }
}
if (window.sc_click_stat) {
    sc_cls = window.sc_click_stat
}
sc_doc_loc = "" + document.location;
myRE = new RegExp("^https", "i");
if (sc_doc_loc.match(myRE)) {
    sc_http_url = "https"
}
if (window.sc_local) {
    sc_base_dir = sc_local
} else {
    if (sc_cls == -1) {
        sc_cls = 1
    }
    sc_base_dir = sc_http_url + "://" + sc_dc + "." + sc_host + "/"
}
sc_click_dir = sc_base_dir;
if (window.sc_counter_target) {
    sc_base_dir += window.sc_counter_target + "?"
} else {
    if (window.sc_text) {
        sc_base_dir += "text.php?"
    } else {
        sc_base_dir += "t.php?"
    }
}
if (window.sc_project) {
    if (sc_project == "4135125" || sc_project == "6169619" || sc_project == "6222332" || sc_project == "5106510" || sc_project == "6311399" || sc_project == "6320092" || sc_project == "5291656" || sc_project == "7324465" || sc_project == "6640020" || sc_project == "4629288" || sc_project == "1480088" || sc_project == "2447031") {
        if (Math.floor(Math.random() * 6) != 1) {
            sc_remove = 1
        }
    }
    sc_base_dir += "sc_project=" + sc_project
} else {
    if (window.usr) {
        sc_base_dir += "usr=" + usr
    } else {
        sc_error = 1
    }
}
if (window.sc_remove_link) {
    sc_link_back_start = "";
    sc_link_back_end = ""
} else {
    sc_link_back_start = "<a class=\"statcounter\" href=\"http://www." + sc_host + "\" target=\"_blank\">";
    sc_link_back_end = "</a>"
}
sc_date = new Date();
sc_time = sc_date.getTime();
sc_time_difference = 3600000;
sc_title = "" + document.title;
sc_url = "" + document.location;
sc_title = sc_title.substring(0, 300);
sc_url = sc_url.substring(0, 300);
if (encodeURIComponent) {
    sc_title = encodeURIComponent(sc_title)
} else {
    sc_title = escape(sc_title)
}
sc_url = escape(sc_url);
if (window.sc_security) {
    sc_security_code = sc_security
}
if (sc_script_num) {
    sc_script_num++
} else {
    var sc_script_num = 1
}
if (typeof _sc_imgs == "undefined") {
    var _sc_imgs = {}
}
var sc_pageview_tag_string = "";
var _sc_project_int = parseInt(sc_project, 10);
var _sc_epoch_now = new Date();
var _sc_epoch_days = Math.floor(_sc_epoch_now / 86400000);
var _sc_days_elapsed = _sc_epoch_days - 17869;
var _sc_fix_threshold = 11200000 - (_sc_days_elapsed * 12223);
var _sc_fix_min_threshold = 9000000;
if (_sc_fix_threshold < _sc_fix_min_threshold) {
    _sc_fix_threshold = _sc_fix_min_threshold
}
var _sc_apply_mar_2017_fixes = _sc_project_int == 4344864 || _sc_project_int == 4124138 || _sc_project_int == 204609 || _sc_project_int > _sc_fix_threshold;
(function(_25, _26, _27, _28) {
    var _29 = "";
    var _2a = {
        "google": null,
        "bing": ["q"],
        "search.yahoo": null,
        "m.yahoo": null,
        "m2.yahoo": null,
        "baidu": ["wd", "word"],
        "yandex": ["text"],
        "ya.ru": ["text"],
        "haosou": ["q"],
        "so.com": ["q"],
        "360.cn": ["q"],
        "360sou": ["q"],
        "aol": ["query", "q"],
        "duckduckgo": null,
        "ask.com": ["q", "QUERYT"],
        "mail.ru": ["words"],
        "sogou": ["q", "query"]
    };
    var _2b = {
        "fb": ["facebook.com", "fb.me"],
        "pi": ["pinterest.com"],
        "tw": ["twitter.com", "t.co"],
        "ln": ["linkedin.com"],
        "gp": ["plus.google.com", "plus.url.google.com"]
    };

    function check_root_domains_match(a, b) {
        var _2e = a.split(".");
        var _2f = b.split(".");
        var _30 = Math.min(_2e.length, _2f.length);
        var _31 = 2;
        if (_2e.length > 1 && ((_2e[_2e.length - 2].length <= 3 && _2e[_2e.length - 1] in {
                "at": 1,
                "au": 1,
                "br": 1,
                "es": 1,
                "hu": 1,
                "il": 1,
                "nz": 1,
                "tr": 1,
                "uk": 1,
                "us": 1,
                "za": 1
            }) || _2e[_2e.length - 1] == "kr" || _2e[_2e.length - 1] == "ru" || (_2e[_2e.length - 1] == "au" && _2e[_2e.length - 2] in {
                "csiro": 1
            }) || (_2e[_2e.length - 1] == "at" && _2e[_2e.length - 2] in {
                "priv": 1
            }) || (_2e[_2e.length - 1] == "fr" && _2e[_2e.length - 2] in {
                "avocat": 1,
                "aeroport": 1,
                "veterinaire": 1
            }) || (_2e[_2e.length - 1] == "hu" && _2e[_2e.length - 2] in {
                "film": 1,
                "lakas": 1,
                "ingatlan": 1,
                "sport": 1,
                "hotel": 1
            }) || (_2e[_2e.length - 1] == "nz" && _2e[_2e.length - 2] in {
                "geek": 1,
                "kiwi": 1,
                "maori": 1,
                "school": 1,
                "govt": 1,
                "health": 1,
                "parliament": 1
            }) || (_2e[_2e.length - 1] == "il" && _2e[_2e.length - 2] in {
                "muni": 1
            }) || (_2e[_2e.length - 1] == "za" && _2e[_2e.length - 2] in {
                "school": 1
            }) || (_2e[_2e.length - 1] == "tr" && _2e[_2e.length - 2] in {
                "name": 1
            }) || (_2e[_2e.length - 1] == "uk" && _2e[_2e.length - 2] in {
                "police": 1
            }))) {
            _31 = 3
        }
        for (var i = 1; i <= _30; i++) {
            if (_2e[_2e.length - i] != _2f[_2f.length - i]) {
                return false
            }
            if (i >= _31) {
                return true
            }
        }
        return _2e.length == _2f.length
    }

    function classify_referrer(r) {
        if (r == "") {
            return "d"
        }
        var _34 = r.split("/")[2].replace(/^www\./, "");
        var _35 = document.location.host.replace(/^www\./, "");
        if (_sc_apply_mar_2017_fixes) {
            if (_35 == _34) {
                return "internal"
            }
            if (check_root_domains_match(_34, _35)) {
                return "internal"
            }
        }
        if (r.search(/\bgoogle\..*\?.*adurl=http/) !== -1) {
            return "p"
        }
        var _36 = ["utm_source=bing", "gclid=", "utm_medium=cpc", "utm_medium=paid-media", "utm_medium=ppc", "aclk?", "cid="];
        for (var i = 0; i < _36.length; i++) {
            if (document.location.search.indexOf(_36[i]) !== -1) {
                return "p"
            }
        }
        var _38 = ["utm_medium=email"];
        for (var i = 0; i < _38.length; i++) {
            if (document.location.search.indexOf(_38[i]) !== -1) {
                return "e"
            }
        }
        if (!_sc_apply_mar_2017_fixes) {
            if (_35 == _34) {
                return "internal"
            }
        }
        for (var _39 in _2a) {
            if (_34.replace(_39, "#").split(".").indexOf("#") !== -1) {
                if (_2a[_39] === null) {
                    return _39
                }
                for (var i = 0; i < _2a[_39].length; i++) {
                    var _3a = _2a[_39][i];
                    if (r.indexOf("?" + _3a + "=") !== -1 || r.indexOf("&" + _3a + "=") !== -1) {
                        return _39
                    }
                }
            }
        }
        for (var _3b in _2b) {
            for (var i = 0; i < _2b[_3b].length; i++) {
                var _39 = _2b[_3b][i];
                if (_34.replace(_39, "#").split(".").indexOf("#") !== -1) {
                    return _3b
                }
            }
        }
        return _34
    }

    function categorize_class(cls) {
        if (cls == "d" || cls == "p" || cls == "e" || cls == "internal") {
            return cls
        }
        if (cls in _2a) {
            return "o"
        }
        if (cls in _2b) {
            return "s"
        }
        return "r"
    }
    if (sc_remove != 1) {
        if (document.webkitVisibilityState != "prerender") {
            sc_prerendering = 0
        } else {
            sc_prerendering = 1;
            document.addEventListener("webkitvisibilitychange", function(evt) {
                if (sc_prerendering == 1) {
                    sc_prerendering = 2;
                    sc_send_data()
                } else {
                    return
                }
            }, false)
        }
    }
    var _3e = parseInt(sc_project, 10);
    var _3f = _3e == 9560334 || _3e == 6709687 || _3e == 9879613 || _3e == 4124138 || _3e == 204609 || _3e == 10776808;
    try {
        var _40 = Math.pow(_26, _27),
            _41 = Math.pow(2, _28),
            _42 = _41 * 2,
            _43 = _26 - 1;
        var _44;
        var _45 = function(_46, _47) {
            var key = [];
            var _49 = mixkey(flatten(_47 ? [_46, tostring(_25)] : 0 in arguments ? _46 : autoseed(), 3), key);
            var _4a = new ARC4(key);
            mixkey(tostring(_4a.S), _25);
            _44 = function() {
                var n = _4a.g(_27),
                    d = _40,
                    x = 0;
                while (n < _41) {
                    n = (n + x) * _26;
                    d *= _26;
                    x = _4a.g(1)
                }
                while (n >= _42) {
                    n /= 2;
                    d /= 2;
                    x >>>= 1
                }
                return (n + x) / d
            };
            return _49
        };

        function ARC4(key) {
            var t, _50 = key.length,
                me = this,
                i = 0,
                j = me.i = me.j = 0,
                s = me.S = [];
            if (!_50) {
                key = [_50++]
            }
            while (i < _26) {
                s[i] = i++
            }
            for (i = 0; i < _26; i++) {
                s[i] = s[j = _43 & (j + key[i % _50] + (t = s[i]))];
                s[j] = t
            }(me.g = function(_55) {
                var t, r = 0,
                    i = me.i,
                    j = me.j,
                    s = me.S;
                while (_55--) {
                    t = s[i = _43 & (i + 1)];
                    r = r * _26 + s[_43 & ((s[i] = s[j = _43 & (j + t)]) + (s[j] = t))]
                }
                me.i = i;
                me.j = j;
                return r
            })(_26)
        }

        function flatten(obj, _59) {
            var _5a = [],
                typ = (typeof obj)[0],
                _5c;
            if (_59 && typ == "o") {
                for (_5c in obj) {
                    try {
                        _5a.push(flatten(obj[_5c], _59 - 1))
                    } catch (e) {}
                }
            }
            return (_5a.length ? _5a : typ == "s" ? obj : obj + "\x00")
        }

        function mixkey(_5d, key) {
            var _5f = _5d + "",
                _60, j = 0;
            while (j < _5f.length) {
                key[_43 & j] = _43 & ((_60 ^= key[_43 & j] * 19) + _5f.charCodeAt(j++))
            }
            return tostring(key)
        }

        function autoseed(_62) {
            try {
                window.crypto.getRandomValues(_62 = new Uint8Array(_26));
                return tostring(_62)
            } catch (e) {
                return [+new Date, window, window.navigator.plugins, window.screen, tostring(_25)]
            }
        }

        function tostring(a) {
            return String.fromCharCode.apply(0, a)
        }
        mixkey(Math.random(), _25);

        function _localStorageAvailable() {
            var _64 = false;
            if ("localStorage" in window) {
                try {
                    _64 = window["localStorage"] !== null
                } catch (e) {
                    if (!e.name || e.name.toLowerCase().replace(/_/g, "").substring(0, 16) !== "quotaexceedederr") {
                        if (!e.number || parseInt(e.number, 10) !== -2147024891) {
                            throw e
                        }
                    }
                }
            }
            return _64
        }

        function _setLocalStorage(_65, _66, _67) {
            if (_localStorageAvailable()) {
                try {
                    if (_65 === "is_visitor_unique") {
                        localStorage.setItem("statcounter.com/localstorage/", _66)
                    } else {
                        localStorage.setItem("statcounter_" + _65, _66)
                    }
                } catch (e) {
                    if (!e.name || e.name.toLowerCase().replace(/_/g, "").substring(0, 16) !== "quotaexceedederr") {
                        if (!e.number || parseInt(e.number, 10) !== -2147024891) {
                            throw e
                        }
                    }
                    return false
                }
                return true
            }
            return false
        }

        function setLocal(_68, _69, _6a, _6b, _6c) {
            if (typeof _69 === "string") {
                _69 = [_69]
            }
            if (_6b === undefined) {
                _6b = ""
            }
            if (_6c === undefined) {
                _6c = 30
            }
            var _6d = false;
            if (sc_sp == "localStorage") {
                _6d = _setLocalStorage(_68, _6b + _69.join("-"), _6a);
                if (!_6d) {
                    _6d = _writeCookie(_68, _6b + _69.join("-"), _6a)
                } else {
                    if (_readCookie(_68) !== null) {
                        _removeCookie(_68, _6a)
                    }
                }
            } else {
                cookie_value = _69.slice(0, _6c).join("-");
                _6d = _writeCookie(_68, _6b + cookie_value, _6a);
                if (!_6d) {
                    _6d = _setLocalStorage(_68, _6b + _69.join("-"), _6a)
                } else {
                    if (_69.length > _6c) {
                        _setLocalStorage(_68, "mx" + _69.slice(_6c).join("-"), _6a)
                    } else {
                        _removeLocalStorage(_68)
                    }
                }
            }
            return _6d
        }

        function getLocal(_6e) {
            var val = null;
            if (_localStorageAvailable()) {
                if (_6e === "is_visitor_unique") {
                    val = localStorage.getItem("statcounter.com/localstorage/")
                } else {
                    val = localStorage.getItem("statcounter_" + _6e)
                }
            }
            if (sc_sp == "localStorage" && val !== null && val.substring(0, 2) == "rx") {
                return val
            }
            var _70 = _readCookie(_6e);
            if (val !== null) {
                if (_70 === null && val.substring(0, 2) == "rx") {
                    return val
                } else {
                    if (_70 !== null && val.substring(0, 2) == "mx") {
                        _70 += "-" + val.substring(2)
                    }
                }
            }
            return _70
        }

        function _removeLocalStorage(_71) {
            if (_localStorageAvailable()) {
                if (_71 === "is_visitor_unique") {
                    localStorage.removeItem("statcounter.com/localstorage/")
                }
                localStorage.removeItem("statcounter_" + _71)
            }
        }

        function removeLocal(_72, _73) {
            _removeLocalStorage(_72);
            if (_readCookie(_72)) {
                _removeCookie(_72, _73)
            }
        }

        function _readCookie(_74) {
            var _75 = "sc_" + _74 + "=";
            if (document.cookie) {
                var ca = document.cookie.split(";");
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == " ") {
                        c = c.substring(1, c.length)
                    }
                    if (c.indexOf(_75) == 0) {
                        return c.substring(_75.length, c.length)
                    }
                }
            }
            return null
        }

        function _writeCookie(_79, _7a, _7b, _7c) {
            if (_7c === undefined) {
                var _7d = 1000 * 60 * 60 * 24 * 365 * 2
            } else {
                var _7d = 1000 * _7c
            }
            expiration = new Date();
            expiration.setTime(expiration.getTime() + _7d);
            var _7e = 3050;
            if (_7a.length > _7e - 50 && _7a.substring(0, _7e).indexOf("-") !== -1) {
                _7a = _7a.substring(0, _7a.substring(0, _7e).lastIndexOf("-"))
            }
            document.cookie = "sc_" + _79 + "=" + _7a + "; expires=" + expiration.toGMTString() + "; domain=" + _7b + "; path=/";
            if (_readCookie(_79) !== null) {
                return true
            } else {
                return false
            }
        }

        function _removeCookie(_7f, _80) {
            document.cookie = "sc_" + _7f + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=" + _80 + "; path=/"
        }

        function detectBrowserFeatures() {
            var _81 = [];
            var i;
            var _83;
            var _84 = {
                pdf: "application/pdf",
                qt: "video/quicktime",
                realp: "audio/x-pn-realaudio-plugin",
                wma: "application/x-mplayer2",
                dir: "application/x-director",
                fla: "application/x-shockwave-flash",
                java: "application/x-java-vm",
                gears: "application/x-googlegears",
                ag: "application/x-silverlight"
            };
            var _85 = (new RegExp("Mac OS X.*Safari/")).test(navigator.userAgent) ? window.devicePixelRatio || 1 : 1;
            if (!((new RegExp("MSIE")).test(navigator.userAgent))) {
                if (navigator.mimeTypes && navigator.mimeTypes.length) {
                    for (i in _84) {
                        if (Object.prototype.hasOwnProperty.call(_84, i)) {
                            _83 = navigator.mimeTypes[_84[i]];
                            _81.push((_83 && _83.enabledPlugin) ? "1" : "0")
                        }
                    }
                }
                if (typeof navigator.javaEnabled !== "unknown" && typeof navigator.javaEnabled !== "undefined" && navigator.javaEnabled()) {
                    _81.push("java")
                }
                if (typeof window.GearsFactory === "function") {
                    _81.push("gears")
                }
            }
            _81.push(screen.width * _85 + "x" + screen.height * _85);
            return _81.join("")
        }

        function generate_uuid() {
            var now = new Date();
            var _87 = false;
            var _88 = 32;
            if (_87) {
                _88 = 36
            }
            var _89 = Math.round(now.getTime() / 1000) + now.getMilliseconds();
            var _8a = (navigator.userAgent || "") + (navigator.platform || "") + detectBrowserFeatures() + now.getTimezoneOffset() + window.innerWidth + window.innerHeight + window.screen.colorDepth + document.URL + _89;
            _45(_8a);
            var _8b = "0123456789ABCDEF".split(""),
                _8c = new Array(_88),
                rnd = 0,
                r;
            for (var i = 0; i < _88; i++) {
                if (_87 && (i == 8 || i == 13 || i == 18 || i == 23)) {
                    _8c[i] = "-"
                } else {
                    if ((i == 12 && !_87) || (i == 14 && _87)) {
                        _8c[i] = "4"
                    } else {
                        if ((i == 13 && !_87) || (i == 15 && _87)) {
                            _8c[i] = "F"
                        } else {
                            if (rnd <= 2) {
                                rnd = 33554432 + (_44() * 16777216) | 0
                            }
                            r = rnd & 15;
                            rnd = rnd >> 4;
                            _8c[i] = _8b[(i == 19) ? (r & 3) | 8 : r]
                        }
                    }
                }
            }
            return _8c.join("")
        }
        if (!_sc_apply_mar_2017_fixes) {
            var _90 = classify_referrer(sc_referer);
            var _91 = categorize_class(_90);
            if (_90 != "internal") {
                _29 = "&rcat=" + _91 + "&rdom=" + _90
            }
        }
        var _92 = Math.round((new Date()).getTime() / 1000);
        if (sc_sp != "disabled") {
            if (_sc_apply_mar_2017_fixes) {
                var _90 = classify_referrer(sc_referer);
                var _91 = categorize_class(_90);
                if (_90 != "internal") {
                    _29 = "&rcat=" + _91 + "&rdom=" + _90
                }
            }
            try {
                var _93 = JSON.parse(localStorage.getItem("sc_medium_source"));
                if (_93 == null) {
                    _93 = {}
                }
                var _94 = null;
                var _95 = null;
                var _96 = null;
                var msl = 0;
                for (var k in _93) {
                    if (_94 === null || _93[k] > _93[_94]) {
                        _94 = k
                    }
                    var _99 = categorize_class(k);
                    if (_91 == _99 && (_95 === null || _93[k] > _93[_95])) {
                        _95 = k
                    }
                    if (_99 == "r" && (_96 === null || _93[k] < _93[_96])) {
                        _96 = k
                    }
                    msl += 1
                }
                if (msl > 30 && _96 !== null) {
                    delete _93[_96]
                }
                var _9a = "";
                if (sessionStorage.getItem("statcounter_bounce")) {
                    sessionStorage.removeItem("statcounter_bounce");
                    _9a = "&bb=0"
                }
                var _9b = 30;
                if (!_sc_apply_mar_2017_fixes) {
                    _9b = 15
                }
                if (_90 == "d" && _94 !== null && _94 != "d" && (_92 - _93[_94]) < 60 * _9b) {
                    _90 = "internal"
                }
                if (_sc_apply_mar_2017_fixes) {
                    if (sessionStorage.getItem("statcounter_session") && (_92 - parseInt(sessionStorage.getItem("statcounter_session"), 10)) < 60 * 30) {
                        _90 = "internal"
                    }
                    sessionStorage.setItem("statcounter_session", _92)
                }
                if (!_sc_apply_mar_2017_fixes) {
                    if (_91 == "r" && sessionStorage.getItem("statcounter_exit_domain") == _90) {
                        _90 = "internal"
                    }
                }
                if (_90 == "internal") {
                    if (_94 !== null) {
                        _29 = "&rcat=" + categorize_class(_94) + "&rdomo=" + _94;
                        _29 += "&rdomg=" + (_92 - _93[_94]);
                        _93[_94] = _92
                    }
                } else {
                    var _9c = false;
                    if (_90 in _93) {
                        if (_90 == _94) {
                            _29 = _29.replace("rdom=", "rdomo=")
                        }
                        _29 += "&rdomg=" + (_92 - _93[_90]);
                        if (_92 - _93[_90] < 60 * 30) {
                            _9c = true
                        }
                    } else {
                        _29 += "&rdomg=new"
                    }
                    if (_9a == "" && !_9c) {
                        sessionStorage.setItem("statcounter_bounce", "1");
                        _9a = "&bb=1"
                    }
                    if (_95 !== null && (!(_90 in _93) || _90 != _95)) {
                        _29 += "&rcatg=" + (_92 - _93[_95])
                    }
                    _93[_90] = _92
                }
                _29 += _9a;
                try {
                    localStorage.setItem("sc_medium_source", JSON.stringify(_93))
                } catch (maybe_not_enough_space) {
                    if (_sc_apply_mar_2017_fixes) {
                        _29 = ""
                    }
                }
            } catch (e) {
                if (_sc_apply_mar_2017_fixes) {
                    _29 = ""
                }
            }
            if (_3e == 10227105) {
                try {
                    var _9d = new Image();
                    _9d.src = "http://statcounter.com/feedback/?email=javascript@statcounter.com&page_url=" + encodeURIComponent(document.location.protocol + "//" + document.location.host + document.location.pathname + document.location.search + document.location.hash) + "&name=Auto%20JS&feedback_username=statcounter&pid=" + sc_project + "&fake_post&user_company&feedback=consistent%20uniques%20js%20exception:%20" + encodeURIComponent(localStorage.getItem("statcounter.com/localstorage/") + ":::" + _readCookie("is_visitor_unique"))
                } catch (ignore) {}
            }
            var _9e = "1.1.1.1.1.1.1.1.1";
            if (typeof window.sc_cookie_domain == "undefined") {
                var _9f = window.location.host
            }
            if (_9f.substring(0, 1) != ".") {
                _9f = "." + _9f
            }
            var _a0 = "is_visitor_unique";
            try {
                var _a1 = getLocal(_a0)
            } catch (e) {
                var _a1 = false;
                sc_uuid = ".ex"
            }
            var _a2 = [];
            var _a3 = [];
            if (_a1 && _a1.substring(0, 2) == "rx") {
                removeLocal(_a0, _9f);
                var _a4 = _a1.substring(2);
                _a2 = _a4.split("-");
                var _a5 = false;
                var _a6 = false;
                for (var i = 0; i < _a2.length; i++) {
                    var _a8 = _a2[i].split(".");
                    if (_a8[0] == sc_project) {
                        _a5 = true;
                        var _a9 = parseInt(_a8[1], 10);
                        var _aa = [30, 60, 120, 180, 360, 720, 1440, 2880, 10080];
                        var _ab = [];
                        var _ac = 2;
                        if (_a8[2].length == 32) {
                            sc_uuid = "." + _a8[2];
                            _ac = 3
                        } else {
                            sc_uuid = _a6
                        }
                        for (var ir = 0; ir < _aa.length; ir++) {
                            var _ae = parseInt(_a8[ir + _ac], 10);
                            if (isNaN(_ae)) {
                                _ae = 1
                            }
                            _ab.push(_ae)
                        }
                        sc_unique_returning += "&jg=" + (_92 - _a9);
                        for (var ir = 0; ir < _aa.length; ir++) {
                            if (_29.indexOf("rdom=") !== -1) {
                                _ab[ir]++
                            } else {
                                if (_92 > (_a9 + 60 * _aa[ir])) {
                                    _ab[ir]++
                                }
                            }
                        }
                        sc_unique_returning += "&rr=" + _ab.join(".");
                        _a3.push(sc_project + "." + _92 + sc_uuid + "." + _ab.join("."))
                    } else {
                        _a3.push(_a2[i]);
                        if (i == 0 && _a8[2].length == 32 && sc_uuid == "") {
                            sc_uuid = "." + _a8[2]
                        }
                    }
                    if (i == 0) {
                        _a6 = sc_uuid
                    }
                }
                if (!_a5) {
                    if (_a3.length == 0 && sc_uuid == "") {
                        sc_uuid = "." + generate_uuid()
                    }
                    _a3.push(sc_project + "." + _92 + sc_uuid + "." + _9e);
                    sc_unique_returning += "&jg=new&rr=" + _9e
                }
                _a3.sort(function(a, b) {
                    return parseInt(b.split(".")[1], 10) - parseInt(a.split(".")[1], 10)
                });
                for (var iv = 1; iv < _a3.length; iv++) {
                    _a3[iv] = _a3[iv].replace("." + _a3[0].split(".")[2] + ".", ".")
                }
                setLocal(_a0, _a3, _9f, "rx", 3)
            } else {
                if (sc_uuid != ".ex") {
                    sc_uuid = "." + generate_uuid();
                    _a3 = [sc_project + "." + _92 + sc_uuid + "." + _9e];
                    var _b2 = setLocal(_a0, _a3, _9f, "rx", 3);
                    if (_b2) {
                        sc_unique_returning += "&jg=new&rr=" + _9e
                    } else {
                        sc_uuid = ".na"
                    }
                }
            }
            if (sc_uuid != "") {
                sc_uuid_q = "&u1=" + sc_uuid.substring(1)
            }
        } else {}
    } catch (e) {
        if (_3f) {
            if (typeof encodeURIComponent != "function") {
                encodeURIComponent = function(s) {
                    return escape(s)
                }
            }
            var _b4 = "";
            _b4 += "unique_returning: " + sc_unique_returning + "\n";
            _b4 += "uuid: " + sc_uuid + "\n";
            _b4 += "cookie_projects_in: rx" + _a2.join("-") + "\n";
            _b4 += "cookie_projects_out: rx" + _a3.join("-") + "\n";
            for (var _b5 in e) {
                _b4 += "property: " + _b5 + " value: [" + e[_b5] + "]\n"
            }
            _b4 += "toString(): " + " value: [" + e.toString() + "]\n";
            var _9d = new Image();
            _9d.src = "http://statcounter.com/feedback/?email=javascript@statcounter.com&page_url=" + encodeURIComponent(document.location.protocol + "//" + document.location.host + document.location.pathname + document.location.search + document.location.hash) + "&name=Auto%20JS&feedback_username=statcounter&pid=" + sc_project + "&fake_post&user_company&feedback=consistent%20uniques%20js%20exception:%20" + encodeURIComponent(_b4)
        }
        sc_unique_returning = "";
        sc_uuid_q = "&u1=f2"
    }
    if (Object.prototype.toString.call(_statcounter_pending) === "[object Array]") {
        var _b6 = _statcounter_pending.length;
        if (_b6 >= 1) {
            sc_pageview_tag_string = getTagString(_statcounter_pending[0])
        }
    }
    sc_base_dir += "&java=1&security=" + sc_security_code + sc_uuid_q;
    var _b7 = sc_unique_returning + "&resolution=" + sc_width + "&h=" + sc_height + "&camefrom=" + escape(sc_referer.substring(0, 600)) + "&u=" + sc_url + "&t=" + sc_title + _29 + "&sc_snum=" + sc_script_num + sc_pageview_tag_string + "&sess=4ea83c";
    if (window.sc_counter_width && window.sc_counter_height) {
        sc_counter_size = " width=\"" + sc_counter_width + "\" height=\"" + sc_counter_height + "\""
    }
    if (window.sc_remove_alt) {
        sc_alt_text = ""
    }
    if (sc_error == 1) {
        document.writeln("Code corrupted. Insert fresh copy.")
    } else {
        if (sc_remove == 1) {} else {
            sc_send_data()
        }
    }

    function sc_send_data() {
        if (sc_inv == 1 || sc_prerendering == 2) {
            _b7 += "&p=" + sc_prerendering + "&invisible=1";
            if (window.sc_call) {
                sc_call++
            } else {
                sc_call = 1
            }
            var _b8 = false;
            if (sc_uuid != "" && typeof JSON == "object" && JSON && typeof JSON.stringify == "function" && "sessionStorage" in window) {
                _b8 = true
            }
            var _b9 = false;
            if (_b8) {
                try {
                    var _ba = sessionStorage.getItem("statcounter_pending");
                    if (!_ba) {
                        var _bb = {}
                    } else {
                        try {
                            var _bb = JSON.parse(_ba)
                        } catch (ignore) {
                            var _bb = {}
                        }
                    }
                    if (_bb[sc_project] === undefined) {
                        _bb[sc_project] = {}
                    }
                    var now = new Date().getTime();
                    _bb[sc_project][now] = _b7;
                    while (true) {
                        _ba = JSON.stringify(_bb);
                        if (_ba == "{}") {
                            sessionStorage.removeItem("statcounter_pending");
                            break
                        }
                        var _bd = _ba.split(/:.{20}/).length - 1;
                        if (_bd < 20) {
                            var _be = true;
                            try {
                                sessionStorage.setItem("statcounter_pending", _ba)
                            } catch (e) {
                                if (!e.name || e.name.toLowerCase().replace(/_/g, "").substring(0, 16) !== "quotaexceedederr") {
                                    throw e
                                }
                                _be = false
                            }
                            if (_be) {
                                break
                            }
                        }
                        var _bf = false;
                        var _c0 = false;
                        var _c1 = false;
                        for (var _c2 in _bb) {
                            for (var _c3 in _bb[_c2]) {
                                var _c4 = /jg=(\d+)/.exec(_bb[_c2][_c3]);
                                if (_c4 !== null) {
                                    var _c5 = parseInt(_c4[1])
                                } else {
                                    var _c5 = false
                                }
                                if (_bf === false || (_c5 !== false && _c5 < _bf)) {
                                    if (_c5 !== false) {
                                        _bf = _c5
                                    }
                                    _c0 = _c2;
                                    _c1 = _c3
                                }
                            }
                        }
                        if (_c1 === false) {
                            break
                        }
                        delete _bb[_c0][_c1];
                        if (JSON.stringify(_bb[_c0]) == "{}") {
                            delete _bb[_c0]
                        }
                    }
                    for (var ts in _bb[sc_project]) {
                        (function(_c7, _c8) {
                            var _c9 = _bb[_c8][_c7];
                            _sc_imgs[sc_call + "." + _c7] = new Image();
                            _sc_imgs[sc_call + "." + _c7].onload = function() {
                                var _ca = JSON.parse(sessionStorage.getItem("statcounter_pending"));
                                if (_ca[_c8] !== undefined) {
                                    delete _ca[_c8][_c7];
                                    if (JSON.stringify(_ca[_c8]) == "{}") {
                                        delete _ca[_c8]
                                    }
                                }
                                var _cb = JSON.stringify(_ca);
                                if (_cb == "{}") {
                                    sessionStorage.removeItem("statcounter_pending")
                                } else {
                                    sessionStorage.setItem("statcounter_pending", _cb)
                                }
                            };
                            if (_c7 != now) {
                                _c9 += "&pg=" + Math.round((now - _c7) / 1000)
                            } else {
                                _b9 = true
                            }
                            _sc_imgs[sc_call + "." + _c7].src = sc_base_dir + "&sc_random=" + Math.random() + _c9
                        })(parseInt(ts, 10), sc_project)
                    }
                } catch (e) {
                    if (_3f) {
                        if (typeof encodeURIComponent != "function") {
                            encodeURIComponent = function(s) {
                                return escape(s)
                            }
                        }
                        var _cd = "";
                        for (var _ce in e) {
                            _cd += "e[" + _ce + "]: " + e[_ce] + "\n"
                        }
                        _cd += "unique_returning: " + sc_unique_returning + "\n";
                        _cd += "uuid: " + sc_uuid + "\n";
                        _cd += "toString(): " + " value: [" + e.toString() + "]\n";
                        var _cf = new Image();
                        _cf.src = "http://statcounter.com/feedback/?email=javascript@statcounter.com&page_url=" + encodeURIComponent(document.location.protocol + "//" + document.location.host + document.location.pathname + document.location.search + document.location.hash) + "&name=Auto%20JS&feedback_username=statcounter&pid=" + sc_project + "&fake_post&user_company&feedback=pending%20exception:%20" + encodeURIComponent(_cd)
                    }
                }
            }
            if (!_b8 || !_b9) {
                _sc_imgs[sc_call] = new Image();
                _sc_imgs[sc_call].src = sc_base_dir + "&sc_random=" + Math.random() + _b7
            }
        } else {
            var _d0 = sc_base_dir + "&sc_random=" + Math.random() + _b7 + "&p=" + sc_prerendering;
            _d0 = _d0.replace(/&/g, "&amp;");
            if (window.sc_text) {
                document.writeln("<scr" + "ipt" + " src=" + _d0 + "&amp;text=" + sc_text + "></scr" + "ipt>")
            } else {
                document.writeln("<span class=\"statcounter\">" + sc_link_back_start + "<img src=\"" + _d0 + "\" alt=\"" + sc_alt_text + "\" border=\"0\"" + sc_counter_size + ">" + sc_link_back_end + "</span>")
            }
        }
    }
})([], 256, 6, 52);
if (sc_cls > 0) {
    if (clickstat_done != 1) {
        var clickstat_done = 1;
        var clickstat_project = window.sc_project;
        var clickstat_security = window.sc_security_code;
        var dlext = "7z|aac|avi|csv|doc|docx|exe|flv|gif|gz|jpe?g|js|mp(3|4|e?g)|mov|pdf|phps|png|ppt|rar|sit|tar|torrent|txt|wma|wmv|xls|xlsx|xml|zip";
        if (typeof(window.sc_download_type) == "string") {
            dlext = window.sc_download_type
        }
        var ltype = "https?|ftp|telnet|ssh|ssl|mailto|spotify|tel";
        var second = "ac|co|gov|ltd|me|mod|net|nic|nhs|org|plc|police|sch|com";
        var dl = new RegExp("\\.(" + dlext + ")$", "i");
        var lnk = new RegExp("^(" + ltype + "):", "i");
        var domsec = new RegExp("^(" + second + ")$", "i");
        var host_name = location.host.replace(/^www\./i, "");
        var host_splitted = host_name.split(".");
        var domain = host_splitted.pop();
        var host_split = host_splitted.pop();
        if (domsec.test(host_split)) {
            domain = host_split + "." + domain;
            host_split = host_splitted.pop()
        }
        domain = host_split + "." + domain;
        var lnklocal_mask = "^https?://(.*)(" + domain + "|webcache.googleusercontent.com)";
        var lnklocal = new RegExp(lnklocal_mask, "i");
        if (document.getElementsByTagName) {
            var anchors = document.getElementsByTagName("a");
            for (var i = 0; i < anchors.length; i++) {
                var anchor = anchors[i];
                if (anchor.onmousedown) {
                    var original_click = anchor.onmousedown;
                    var s = original_click.toString().split("\n").join(" ");
                    var bs = s.indexOf("{");
                    var head = s.substr(0, bs);
                    var ps = head.indexOf("(");
                    var pe = head.indexOf(")");
                    var params = head.substring(ps + 1, pe);
                    var plist = params.split(",");
                    var body = s.substr(bs + 1, s.length - bs - 2);
                    var insert = "sc_clickstat_call(this,'" + sc_click_dir + "');";
                    var final_body = insert + body;
                    var ev_head = "new Function(";
                    var ev_params = "";
                    var ev_sep = "";
                    for (var sc_i = 0; sc_i < plist.length; sc_i++) {
                        ev_params = ev_sep + "'" + plist[sc_i] + "'";
                        ev_sep = ","
                    }
                    if (ev_sep == ",") {
                        ev_params += ","
                    }
                    var ev_foot = "final_body);";
                    var ev_final = ev_head + ev_params + ev_foot;
                    anchor.onmousedown = eval(ev_final)
                } else {
                    anchor.onmousedown = new Function("event", "sc_clickstat_call(this,'" + sc_click_dir + "');return true;")
                }
            }
        }

        function sc_none() {
            return
        }

        function sc_delay() {
            if (window.sc_click_stat) {
                var d = window.sc_click_stat
            } else {
                var d = 0
            }
            var n = new Date();
            var t = n.getTime() + d;
            while (n.getTime() < t) {
                var n = new Date()
            }
        }

        function sc_clickstat_call(_d4, _d5) {
            if (_d4) {
                var _d6 = 0;
                if (lnk.test(_d4)) {
                    if ((lnklocal.test(_d4))) {
                        if (dl.test(_d4)) {
                            _d6 = 1
                        } else {
                            if (window.sc_exit_link_detect && new RegExp(sc_exit_link_detect, "i").test(_d4)) {
                                _d6 = 2
                            } else {
                                if (sc_cls == 2) {
                                    _d6 = 2
                                }
                            }
                        }
                    } else {
                        _d6 = 2
                    }
                }
                if (_d6 != 0) {
                    var _d7 = escape(_d4);
                    if (_d7.length > 0) {
                        if (sc_unique_returning == "") {
                            sc_unique_returning = "&jg=&rr="
                        }
                        if (!_sc_apply_mar_2017_fixes) {
                            if (_d6 == 2 && sc_sp != "disabled") {
                                try {
                                    sessionStorage.setItem("statcounter_exit_domain", _d7.split("/")[2].replace(/^www\./, ""))
                                } catch (ignore) {}
                            }
                        }
                        var _d8 = _d5 + "click.gif?sc_project=" + clickstat_project + "&security=" + clickstat_security + "&c=" + _d7 + "&m=" + _d6 + "&u=" + sc_url + "&t=" + sc_title + "&sess=4ea83c&rand=" + Math.random() + sc_uuid_q + sc_unique_returning;
                        var _d9 = new Image();
                        _d9.onload = sc_none;
                        _d9.src = _d8;
                        sc_delay()
                    }
                }
            }
        }
        var sc_gsyn_pattern = "googlesyndication.com|ypn-js.overture.com|ypn-js.ysm.yahoo.com|googleads.g.doubleclick.net";
        var sc_gsyn_pattern2 = "^aswift_[0-9]+$";
        var sc_px;
        var sc_py;

        function sc_adsense_click(_da) {
            if (_da.src.match(sc_gsyn_pattern)) {
                var _db = escape(_da.src)
            } else {
                var _db = escape("Google Adsense " + _da.width + "x" + _da.height)
            }
            var i = new Image();
            var _dd = sc_click_dir + "click.gif?sc_project=" + clickstat_project + "&security=" + clickstat_security + "&c=" + _db + "&m=2&u=" + sc_url + "&t=" + sc_title + "&sess=4ea83c&rand=" + Math.random() + sc_uuid_q + sc_unique_returning;
            i.src = _dd;
            sc_delay()
        }

        function sc_adsense_init() {
            if (document.all && typeof window.opera == "undefined") {
                var el = document.getElementsByTagName("iframe");
                for (var i = 0; i < el.length; i++) {
                    if (el[i].src.match(sc_gsyn_pattern) || el[i].id.match(sc_gsyn_pattern2)) {
                        el[i].onfocus = function() {
                            sc_adsense_click(this)
                        }
                    }
                }
            } else {
                if (typeof window.addEventListener != "undefined") {
                    window.addEventListener("unload", sc_exitpage, false);
                    window.addEventListener("mousemove", sc_getmouse, true)
                }
            }
        }
        if (typeof window.addEventListener != "undefined") {
            window.addEventListener("load", sc_adsense_init, false)
        } else {
            if (typeof document.addEventListener != "undefined") {
                document.addEventListener("load", sc_adsense_init, false)
            } else {
                if (typeof window.attachEvent != "undefined") {
                    window.attachEvent("onload", sc_adsense_init)
                } else {
                    if (typeof window.onload == "function") {
                        var sc_existing = onload;
                        window.onload = function() {
                            sc_existing();
                            sc_adsense_init()
                        }
                    } else {
                        window.onload = sc_adsense_init
                    }
                }
            }
        }

        function sc_getmouse(e) {
            if (typeof e.pageX == "number") {
                sc_px = e.pageX;
                sc_py = e.pageY
            } else {
                if (typeof e.clientX == "number") {
                    sc_px = e.clientX;
                    sc_py = e.clientY;
                    if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
                        sc_px += document.body.scrollLeft;
                        sc_py += document.body.scrollTop
                    } else {
                        if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
                            sc_px += document.documentElement.scrollLeft;
                            sc_py += document.documentElement.scrollTop
                        }
                    }
                }
            }
        }

        function sc_findy(obj) {
            var y = 0;
            while (obj) {
                y += obj.offsetTop;
                obj = obj.offsetParent
            }
            return (y)
        }

        function sc_findx(obj) {
            var x = 0;
            while (obj) {
                x += obj.offsetLeft;
                obj = obj.offsetParent
            }
            return (x)
        }

        function sc_exitpage(e) {
            ad = document.getElementsByTagName("iframe");
            if (typeof sc_px == "undefined") {
                return
            }
            for (var i = 0; i < ad.length; i++) {
                var _e7 = sc_findx(ad[i]);
                var _e8 = sc_findy(ad[i]);
                var adW = parseInt(_e7, 10) + parseInt(ad[i].width, 10) + 15;
                var adH = parseInt(_e8, 10) + parseInt(ad[i].height, 10) + 10;
                var _eb = (sc_px > (_e7 - 10) && sc_px < adW);
                var _ec = (sc_py > (_e8 - 10) && sc_py < adH);
                if (_ec && _eb) {
                    if (ad[i].src.match(sc_gsyn_pattern) || ad[i].id.match(sc_gsyn_pattern2)) {
                        sc_adsense_click(ad[i])
                    }
                }
            }
        }
    }
}