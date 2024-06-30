//Sun Jun 30 2024 03:36:53 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("stlxz");
const ckName = "stlxz_data",
  Notify = 1,
  notify = $.isNode() ? require("./sendNotify") : "";
let envSplitor = ["&"],
  userCookie = ($.isNode() ? process.env[ckName] : $.getdata(ckName)) || "";
let userList = [],
  userIdx = 0,
  userCount = 0,
  host = "www.stlxz.com";
$.is_debug = ($.isNode() ? process.env.IS_DEDUG : $.getdata("is_debug")) || "false";
$.notifyMsg = [];
$.barkKey = ($.isNode() ? process.env.bark_key : $.getdata("bark_key")) || "";
async function main() {
  await getNotice();
  console.log("\n================== 任务 ==================\n");
  let _0x16ad6a = [];
  for (let _0xf8edcc of userList) {
    if (_0xf8edcc.ckStatus) {
      DoubleLog("🔷账号" + _0xf8edcc.index + " >> Start work");
      console.log("随机延迟" + _0xf8edcc.getRandomTime() + "ms");
      _0x16ad6a.push(await _0xf8edcc.signin());
      await $.wait(_0xf8edcc.getRandomTime());
      _0x16ad6a.push(await _0xf8edcc.point());
      await $.wait(_0xf8edcc.getRandomTime());
    } else {
      $.notifyMsg.push("❌账号" + _0xf8edcc.index + " >> Check ck error!");
    }
  }
  await Promise.all(_0x16ad6a);
}
class UserInfo {
  constructor(_0x44fef8) {
    this.index = ++userIdx;
    this.ck = _0x44fef8;
    this.ckStatus = true;
    this.headers = {
      "User-Agent": "StormSniffer-Extension/2254 CFNetwork/1327.0.4 Darwin/21.2.0",
      Cookie: this.ck,
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
    };
  }
  getRandomTime() {
    return randomInt(1000, 3000);
  }
  async login() {
    try {
      const _0x1e8d4b = {
        url: "https://" + host + "/wp-admin/admin-ajax.php",
        headers: {},
        body: "username=" + this.username + "&password=" + this.pwd + "&captcha_mode=slider&remember=forever&action=user_signin&captcha%5Bticket%5D=29bhomclyzefzyvykxkclkvioshdvjj142kiqgrjmxnvjtkxahabzvnrzmmuyll29&captcha%5Brandstr%5D=9d27d4b15&captcha%5Bspliced%5D=true&captcha%5Bcheck%5D=f789cda1fa90ffa542775e1e4f520625"
      };
      _0x1e8d4b.headers.Host = host;
      _0x1e8d4b.headers["User-Agent"] = "StormSniffer-Extension/2254 CFNetwork/1327.0.4 Darwin/21.2.0";
      _0x1e8d4b.headers.Cookie = "PHPSESSID=dsoc2vmht3pc81d7bu5c6hoq6q; wordpress_test_cookie=WP%20Cookie%20check";
      _0x1e8d4b.headers.Referer = "https://www.stlxz.com/";
      _0x1e8d4b.headers["Sec-Fetch-Site"] = " same-origin";
      _0x1e8d4b.headers["X-Requested-With"] = "XMLHttpRequest";
      _0x1e8d4b.headers["Sec-Fetch-Mode"] = "cors";
      _0x1e8d4b.headers["Sec-Fetch-Dest"] = "empty";
      _0x1e8d4b.headers["Content-Type"] = "application/x-www-form-urlencoded; charset=utf-8";
      $.post(_0x1e8d4b, (_0xb9cf48, _0x1b12fc, _0x2e9a8f) => {
        this.ck = _0x1b12fc.headers["set-cookie"];
        debug(this.ck);
        let _0x4eebd3 = JSON.parse(_0x2e9a8f);
        if (_0x4eebd3?.["error"] == 0) {
          console.log("✅" + _0x4eebd3?.["msg"]);
        } else {
          console.log("🔶" + _0x4eebd3?.["msg"]);
        }
      });
    } catch (_0x226018) {
      console.log(_0x226018);
    }
  }
  async signin() {
    try {
      const _0x497d62 = {
        url: "https://" + host + "/wp-admin/admin-ajax.php",
        headers: this.headers,
        body: "action=user_checkin"
      };
      debug(_0x497d62.headers);
      return new Promise(_0x5211b7 => {
        $.post(_0x497d62, async (_0x19f98b, _0x121dae, _0x56bab7) => {
          try {
            console.log(_0x56bab7);
            let _0x23cc77 = JSON.parse(_0x56bab7);
            if (_0x23cc77.error == false) {
              DoubleLog("✅" + _0x23cc77?.["msg"]);
            } else {
              DoubleLog("🔶" + _0x23cc77?.["msg"]);
            }
          } catch (_0x2454f7) {
            $.log(_0x2454f7);
          } finally {
            _0x5211b7();
          }
        });
      });
    } catch (_0x5ac4b8) {
      throw new Error("❌运行错误，原因为：" + _0x5ac4b8);
    }
  }
  async point() {
    try {
      const _0x530b5a = {
        url: "https://" + host + "/user/balance",
        headers: this.headers
      };
      return new Promise(_0x19c249 => {
        $.get(_0x530b5a, async (_0x30aa6e, _0x36c977, _0x4e282) => {
          try {
            var _0x24eb07 = /\"\>积分\：(.*)\</g;
            this.pointNumber = _0x24eb07.exec(_0x36c977.body)[1];
            this.pointNumber = this.pointNumber.split("<")[0];
            DoubleLog("🎁当前余额:" + this.pointNumber);
          } catch (_0x22dc46) {
            $.log(_0x22dc46);
          } finally {
            _0x19c249();
          }
        });
      });
    } catch (_0x34ee40) {
      throw new Error("❌运行错误，原因为：" + _0x34ee40);
    }
  }
}
async function getCookie() {
  if ($request && $request.method != "OPTIONS") {
    const _0x2df78b = $request.headers.Cookie || $request.headers.cookie;
    if (_0x2df78b) {
      $.setdata(_0x2df78b, ckName);
      $.msg($.name, "", "获取签到Cookie成功🎉");
    } else {
      $.msg($.name, "", "错误获取签到Cookie失败");
    }
  }
}
async function getNotice() {
  try {
    const _0x28519b = ["https://raw.githubusercontent.com/Sliverkiss/GoodNight/main/notice.json", "https://raw.githubusercontent.com/Sliverkiss/GoodNight/main/tip.json"];
    for (const _0x554296 of _0x28519b) {
      const _0x3fd449 = {
        "User-Agent": ""
      };
      const _0x589cd8 = {
        url: _0x554296,
        headers: _0x3fd449
      };
      const _0x579333 = await httpRequest(_0x589cd8);
      if (_0x579333) {
        console.log(_0x579333.notice);
      }
    }
  } catch (_0x4b8037) {
    console.log(_0x4b8037);
  }
}
!(async () => {
  if (typeof $request != "undefined") {
    await getCookie();
    return;
  }
  if (!(await checkEnv())) {
    throw new Error("❌未检测到ck，请添加环境变量");
  }
  if (userList.length > 0) {
    await main();
  }
  if ($.barkKey) {
    await BarkNotify($, $.barkKey, $.name, $.notifyMsg.join("\n"));
  }
})().catch(_0x299987 => $.notifyMsg.push(_0x299987.message || _0x299987)).finally(async () => {
  await SendMsg($.notifyMsg.join("\n"));
  $.done();
});
function DoubleLog(_0x2ebd7c) {
  if ($.isNode()) {
    if (_0x2ebd7c) {
      console.log("" + _0x2ebd7c);
      $.notifyMsg.push("" + _0x2ebd7c);
    }
  } else {
    console.log("" + _0x2ebd7c);
    $.notifyMsg.push("" + _0x2ebd7c);
  }
}
function toParams(_0x1648b9) {
  var _0x37a484 = Object.keys(_0x1648b9).map(function (_0x4c494c) {
    return encodeURIComponent(_0x4c494c) + "=" + encodeURIComponent(_0x1648b9[_0x4c494c]);
  }).join("&");
  return _0x37a484;
}
function debug(_0xebba13) {
  if ($.is_debug === "true") {
    if (typeof _0xebba13 == "string") {
      console.log(_0xebba13);
    } else {
      if (typeof _0xebba13 == "object") {
        console.log($.toStr(_0xebba13));
      }
    }
  }
}
async function checkEnv() {
  if (userCookie) {
    let _0xe7fd = envSplitor[0];
    for (let _0xcb1513 of envSplitor) if (userCookie.indexOf(_0xcb1513) > -1) {
      _0xe7fd = _0xcb1513;
      break;
    }
    for (let _0x219a27 of userCookie.split(_0xe7fd)) if (_0x219a27) {
      userList.push(new UserInfo(_0x219a27));
    }
    userCount = userList.length;
  } else {
    console.log("未找到CK");
    return;
  }
  console.log("共找到" + userCount + "个账号");
  return true;
}
function randomInt(_0x87bc2d, _0x40c2ee) {
  return Math.round(Math.random() * (_0x40c2ee - _0x87bc2d) + _0x87bc2d);
}
async function SendMsg(_0x45b806) {
  if (!_0x45b806) {
    return;
  }
  if ($.isNode()) {
    await notify.sendNotify($.name, _0x45b806);
  } else {
    $.msg($.name, "", _0x45b806);
  }
}
function httpRequest(_0x52d426, _0x545dd7) {
  typeof _0x545dd7 === "undefined" ? "body" in _0x52d426 ? _0x545dd7 = "post" : _0x545dd7 = "get" : _0x545dd7 = _0x545dd7;
  return new Promise(_0x1abc6e => {
    $[_0x545dd7](_0x52d426, (_0xcd872e, _0x5453c5, _0x35ba92) => {
      try {
        if (_0xcd872e) {
          console.log(_0x545dd7 + "请求失败");
          $.logErr(_0xcd872e);
        } else {
          if (_0x35ba92) {
            typeof JSON.parse(_0x35ba92) == "object" ? _0x35ba92 = JSON.parse(_0x35ba92) : _0x35ba92 = _0x35ba92;
            _0x1abc6e(_0x35ba92);
          } else {
            console.log("请求api返回数据为空，请检查自身原因");
          }
        }
      } catch (_0x22d924) {
        $.logErr(_0x22d924, _0x5453c5);
      } finally {
        _0x1abc6e();
      }
    });
  });
}
async function BarkNotify(_0x5c047f, _0x14a634, _0x4c5912, _0x1340ed) {
  for (let _0x1edce1 = 0; _0x1edce1 < 3; _0x1edce1++) {
    console.log("🔷Bark notify >> Start push (" + (_0x1edce1 + 1) + ")");
    const _0x3a0b65 = await new Promise(_0x3a2876 => {
      const _0x41c782 = {
        title: _0x4c5912,
        body: _0x1340ed,
        device_key: _0x14a634,
        ext_params: {}
      };
      _0x41c782.ext_params.group = _0x4c5912;
      _0x5c047f.post({
        url: "https://api.day.app/push",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(_0x41c782)
      }, (_0x5c8302, _0x205094, _0x3e3acd) => _0x205094 && _0x205094.status == 200 ? _0x3a2876(1) : _0x3a2876(_0x3e3acd || _0x5c8302));
    });
    if (_0x3a0b65 === 1) {
      console.log("✅Push success!");
      break;
    } else {
      console.log("❌Push failed! >> " + (_0x3a0b65.message || _0x3a0b65));
    }
  }
}
function Env(_0x34642e, _0x4eb72a) {
  class _0x17482e {
    constructor(_0xa77652) {
      this.env = _0xa77652;
    }
    send(_0x5e813f, _0x56f1b9 = "GET") {
      "string" == typeof _0x5e813f ? _0x5e813f = {
        url: _0x5e813f
      } : _0x5e813f = _0x5e813f;
      let _0x2a9ee2 = this.get;
      if ("POST" === _0x56f1b9) {
        _0x2a9ee2 = this.post;
      }
      return new Promise((_0x40ce3d, _0xa2c003) => {
        _0x2a9ee2.call(this, _0x5e813f, (_0x25d3db, _0x43b392, _0x220235) => {
          _0x25d3db ? _0xa2c003(_0x25d3db) : _0x40ce3d(_0x43b392);
        });
      });
    }
    get(_0x460ab8) {
      return this.send.call(this.env, _0x460ab8);
    }
    post(_0x5268ef) {
      return this.send.call(this.env, _0x5268ef, "POST");
    }
  }
  return new class {
    constructor(_0x3d4433, _0x1492f0) {
      this.name = _0x3d4433;
      this.http = new _0x17482e(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x1492f0);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(_0x399f6f, _0x46c312 = null) {
      try {
        return JSON.parse(_0x399f6f);
      } catch {
        return _0x46c312;
      }
    }
    toStr(_0x265663, _0x42250b = null) {
      try {
        return JSON.stringify(_0x265663);
      } catch {
        return _0x42250b;
      }
    }
    getjson(_0x25c911, _0xd3c7bd) {
      let _0x359c2e = _0xd3c7bd;
      const _0x82f32 = this.getdata(_0x25c911);
      if (_0x82f32) {
        try {
          _0x359c2e = JSON.parse(this.getdata(_0x25c911));
        } catch {}
      }
      return _0x359c2e;
    }
    setjson(_0x458dc4, _0x65cb08) {
      try {
        return this.setdata(JSON.stringify(_0x458dc4), _0x65cb08);
      } catch {
        return !1;
      }
    }
    getScript(_0x291efb) {
      return new Promise(_0x4ccd57 => {
        const _0x41eaa7 = {
          url: _0x291efb
        };
        this.get(_0x41eaa7, (_0x23dc8a, _0x60c592, _0x374c68) => _0x4ccd57(_0x374c68));
      });
    }
    runScript(_0x2b0681, _0x1407b0) {
      return new Promise(_0x59f894 => {
        let _0x712ce9 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x712ce9 ? _0x712ce9 = _0x712ce9.replace(/\n/g, "").trim() : _0x712ce9 = _0x712ce9;
        let _0x25bebc = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x25bebc ? _0x25bebc = 1 * _0x25bebc : _0x25bebc = 20;
        _0x1407b0 && _0x1407b0.timeout ? _0x25bebc = _0x1407b0.timeout : _0x25bebc = _0x25bebc;
        const _0x39f693 = {
          script_text: _0x2b0681,
          mock_type: "cron",
          timeout: _0x25bebc
        };
        const [_0x212c20, _0x31001e] = _0x712ce9.split("@"),
          _0x4efd70 = {
            url: "http://" + _0x31001e + "/v1/scripting/evaluate",
            body: _0x39f693,
            headers: {
              "X-Key": _0x212c20,
              Accept: "*/*"
            },
            timeout: _0x25bebc
          };
        this.post(_0x4efd70, (_0x1ab08d, _0x414d33, _0x1ff54a) => _0x59f894(_0x1ff54a));
      }).catch(_0x295c5c => this.logErr(_0x295c5c));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      this.fs ? this.fs = this.fs : this.fs = require("fs");
      this.path ? this.path = this.path : this.path = require("path");
      const _0x4f5b69 = this.path.resolve(this.dataFile),
        _0x16abfe = this.path.resolve(process.cwd(), this.dataFile),
        _0x239e59 = this.fs.existsSync(_0x4f5b69),
        _0x5f24ac = !_0x239e59 && this.fs.existsSync(_0x16abfe);
      if (!_0x239e59 && !_0x5f24ac) {
        return {};
      }
      const _0x88265d = _0x239e59 ? _0x4f5b69 : _0x16abfe;
      try {
        return JSON.parse(this.fs.readFileSync(_0x88265d));
      } catch (_0x59ca4b) {
        return {};
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs ? this.fs = this.fs : this.fs = require("fs");
        this.path ? this.path = this.path : this.path = require("path");
        const _0x42b61b = this.path.resolve(this.dataFile),
          _0x30e3ef = this.path.resolve(process.cwd(), this.dataFile),
          _0x57e0a9 = this.fs.existsSync(_0x42b61b),
          _0x359358 = !_0x57e0a9 && this.fs.existsSync(_0x30e3ef),
          _0x3a613b = JSON.stringify(this.data);
        _0x57e0a9 ? this.fs.writeFileSync(_0x42b61b, _0x3a613b) : _0x359358 ? this.fs.writeFileSync(_0x30e3ef, _0x3a613b) : this.fs.writeFileSync(_0x42b61b, _0x3a613b);
      }
    }
    lodash_get(_0x1e8560, _0x3f2c3d, _0x5ab528) {
      const _0x56a285 = _0x3f2c3d.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x36c4c0 = _0x1e8560;
      for (const _0x41f497 of _0x56a285) if (_0x36c4c0 = Object(_0x36c4c0)[_0x41f497], 0 === _0x36c4c0) {
        return _0x5ab528;
      }
      return _0x36c4c0;
    }
    lodash_set(_0x4227de, _0x28d879, _0x4f3e2f) {
      return Object(_0x4227de) !== _0x4227de ? _0x4227de : (Array.isArray(_0x28d879) || (_0x28d879 = _0x28d879.toString().match(/[^.[\]]+/g) || []), _0x28d879.slice(0, -1).reduce((_0x5cd6ae, _0x167ff2, _0x6843bd) => Object(_0x5cd6ae[_0x167ff2]) === _0x5cd6ae[_0x167ff2] ? _0x5cd6ae[_0x167ff2] : Math.abs(_0x28d879[_0x6843bd + 1]) >> 0 == +_0x28d879[_0x6843bd + 1] ? _0x5cd6ae[_0x167ff2] = [] : _0x5cd6ae[_0x167ff2] = {}, _0x4227de)[_0x28d879[_0x28d879.length - 1]] = _0x4f3e2f, _0x4227de);
    }
    getdata(_0x117b4d) {
      let _0x4d1e93 = this.getval(_0x117b4d);
      if (/^@/.test(_0x117b4d)) {
        const [, _0x334357, _0x3d523b] = /^@(.*?)\.(.*?)$/.exec(_0x117b4d),
          _0x4391db = _0x334357 ? this.getval(_0x334357) : "";
        if (_0x4391db) {
          try {
            const _0x2601a0 = JSON.parse(_0x4391db);
            _0x2601a0 ? _0x4d1e93 = this.lodash_get(_0x2601a0, _0x3d523b, "") : _0x4d1e93 = _0x4d1e93;
          } catch (_0xacf23e) {
            _0x4d1e93 = "";
          }
        }
      }
      return _0x4d1e93;
    }
    setdata(_0x270589, _0x4c8ca2) {
      let _0x14002f = !1;
      if (/^@/.test(_0x4c8ca2)) {
        const [, _0x2f8fb7, _0x309c98] = /^@(.*?)\.(.*?)$/.exec(_0x4c8ca2),
          _0x152f58 = this.getval(_0x2f8fb7),
          _0x497794 = _0x2f8fb7 ? "null" === _0x152f58 ? null : _0x152f58 || "{}" : "{}";
        try {
          const _0x28579d = JSON.parse(_0x497794);
          this.lodash_set(_0x28579d, _0x309c98, _0x270589);
          _0x14002f = this.setval(JSON.stringify(_0x28579d), _0x2f8fb7);
        } catch (_0x4a8e69) {
          const _0x2a1860 = {};
          this.lodash_set(_0x2a1860, _0x309c98, _0x270589);
          _0x14002f = this.setval(JSON.stringify(_0x2a1860), _0x2f8fb7);
        }
      } else {
        _0x14002f = this.setval(_0x270589, _0x4c8ca2);
      }
      return _0x14002f;
    }
    getval(_0x559f84) {
      switch (this.getEnv()) {
        case "Surge":
          {}
        case "Loon":
          {}
        case "Stash":
          {}
        case "Shadowrocket":
          {
            return $persistentStore.read(_0x559f84);
          }
        case "Quantumult X":
          {
            return $prefs.valueForKey(_0x559f84);
          }
        case "Node.js":
          {
            this.data = this.loaddata();
            return this.data[_0x559f84];
          }
        default:
          {
            return this.data && this.data[_0x559f84] || null;
          }
      }
    }
    setval(_0x35f395, _0x5955a7) {
      switch (this.getEnv()) {
        case "Surge":
          {}
        case "Loon":
          {}
        case "Stash":
          {}
        case "Shadowrocket":
          {
            return $persistentStore.write(_0x35f395, _0x5955a7);
          }
        case "Quantumult X":
          {
            return $prefs.setValueForKey(_0x35f395, _0x5955a7);
          }
        case "Node.js":
          {
            this.data = this.loaddata();
            this.data[_0x5955a7] = _0x35f395;
            this.writedata();
            return !0;
          }
        default:
          {
            return this.data && this.data[_0x5955a7] || null;
          }
      }
    }
    initGotEnv(_0x1cb476) {
      this.got ? this.got = this.got : this.got = require("got");
      this.cktough ? this.cktough = this.cktough : this.cktough = require("tough-cookie");
      this.ckjar ? this.ckjar = this.ckjar : this.ckjar = new this.cktough.CookieJar();
      if (_0x1cb476) {
        _0x1cb476.headers ? _0x1cb476.headers = _0x1cb476.headers : _0x1cb476.headers = {};
        0 === _0x1cb476.headers.Cookie && 0 === _0x1cb476.cookieJar && (_0x1cb476.cookieJar = this.ckjar);
      }
    }
    get(_0x197113, _0x194fcf = () => {}) {
      switch (_0x197113.headers && (delete _0x197113.headers["Content-Type"], delete _0x197113.headers["Content-Length"], delete _0x197113.headers["content-type"], delete _0x197113.headers["content-length"]), _0x197113.params && (_0x197113.url += "?" + this.queryStr(_0x197113.params)), this.getEnv()) {
        case "Surge":
          {}
        case "Loon":
          {}
        case "Stash":
          {}
        case "Shadowrocket":
          {}
        default:
          {
            const _0x361a8c = {
              "X-Surge-Skip-Scripting": !1
            };
            if (this.isSurge() && this.isNeedRewrite) {
              _0x197113.headers = _0x197113.headers || {};
              Object.assign(_0x197113.headers, _0x361a8c);
            }
            $httpClient.get(_0x197113, (_0xb188c, _0x5b42d4, _0x24eeed) => {
              if (!_0xb188c && _0x5b42d4) {
                _0x5b42d4.body = _0x24eeed;
                _0x5b42d4.status ? _0x5b42d4.statusCode = _0x5b42d4.status : _0x5b42d4.statusCode = _0x5b42d4.statusCode;
                _0x5b42d4.status = _0x5b42d4.statusCode;
              }
              _0x194fcf(_0xb188c, _0x5b42d4, _0x24eeed);
            });
            break;
          }
        case "Quantumult X":
          {
            const _0x46b1b8 = {
              hints: !1
            };
            if (this.isNeedRewrite) {
              _0x197113.opts = _0x197113.opts || {};
              Object.assign(_0x197113.opts, _0x46b1b8);
            }
            $task.fetch(_0x197113).then(_0x5eb218 => {
              const {
                  statusCode: _0x15e83d,
                  statusCode: _0x1ae580,
                  headers: _0x3748d3,
                  body: _0x57ef88,
                  bodyBytes: _0x1b869f
                } = _0x5eb218,
                _0x436d5e = {
                  status: _0x15e83d,
                  statusCode: _0x1ae580,
                  headers: _0x3748d3,
                  body: _0x57ef88,
                  bodyBytes: _0x1b869f
                };
              _0x194fcf(null, _0x436d5e, _0x57ef88, _0x1b869f);
            }, _0x32dfea => _0x194fcf(_0x32dfea && _0x32dfea.error || "UndefinedError"));
            break;
          }
        case "Node.js":
          {
            let _0x42b83d = require("iconv-lite");
            this.initGotEnv(_0x197113);
            this.got(_0x197113).on("redirect", (_0x32becf, _0x554448) => {
              try {
                if (_0x32becf.headers["set-cookie"]) {
                  const _0x36f9bd = _0x32becf.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  if (_0x36f9bd) {
                    this.ckjar.setCookieSync(_0x36f9bd, null);
                  }
                  _0x554448.cookieJar = this.ckjar;
                }
              } catch (_0xb6a4f1) {
                this.logErr(_0xb6a4f1);
              }
            }).then(_0x28a1ca => {
              const {
                  statusCode: _0xa429ad,
                  statusCode: _0x5b3b3b,
                  headers: _0x885f16,
                  rawBody: _0x4998f6
                } = _0x28a1ca,
                _0xdfada9 = _0x42b83d.decode(_0x4998f6, this.encoding),
                _0x454461 = {
                  status: _0xa429ad,
                  statusCode: _0x5b3b3b,
                  headers: _0x885f16,
                  rawBody: _0x4998f6,
                  body: _0xdfada9
                };
              _0x194fcf(null, _0x454461, _0xdfada9);
            }, _0x4f6dd9 => {
              const {
                message: _0x1d6216,
                response: _0x3d85c1
              } = _0x4f6dd9;
              _0x194fcf(_0x1d6216, _0x3d85c1, _0x3d85c1 && _0x42b83d.decode(_0x3d85c1.rawBody, this.encoding));
            });
          }
      }
    }
    post(_0x31bfd1, _0x91da15 = () => {}) {
      const _0x6ba099 = _0x31bfd1.method ? _0x31bfd1.method.toLocaleLowerCase() : "post";
      switch (_0x31bfd1.body && _0x31bfd1.headers && !_0x31bfd1.headers["Content-Type"] && !_0x31bfd1.headers["content-type"] && (_0x31bfd1.headers["content-type"] = "application/x-www-form-urlencoded"), _0x31bfd1.headers && (delete _0x31bfd1.headers["Content-Length"], delete _0x31bfd1.headers["content-length"]), this.getEnv()) {
        case "Surge":
          {}
        case "Loon":
          {}
        case "Stash":
          {}
        case "Shadowrocket":
          {}
        default:
          {
            const _0x5d683e = {
              "X-Surge-Skip-Scripting": !1
            };
            if (this.isSurge() && this.isNeedRewrite) {
              _0x31bfd1.headers = _0x31bfd1.headers || {};
              Object.assign(_0x31bfd1.headers, _0x5d683e);
            }
            $httpClient[_0x6ba099](_0x31bfd1, (_0x38ef4f, _0x539903, _0x4351df) => {
              if (!_0x38ef4f && _0x539903) {
                _0x539903.body = _0x4351df;
                _0x539903.status ? _0x539903.statusCode = _0x539903.status : _0x539903.statusCode = _0x539903.statusCode;
                _0x539903.status = _0x539903.statusCode;
              }
              _0x91da15(_0x38ef4f, _0x539903, _0x4351df);
            });
            break;
          }
        case "Quantumult X":
          {
            const _0x1190f7 = {
              hints: !1
            };
            _0x31bfd1.method = _0x6ba099;
            if (this.isNeedRewrite) {
              _0x31bfd1.opts = _0x31bfd1.opts || {};
              Object.assign(_0x31bfd1.opts, _0x1190f7);
            }
            $task.fetch(_0x31bfd1).then(_0x375599 => {
              const {
                  statusCode: _0x784eab,
                  statusCode: _0x5ccf50,
                  headers: _0x5d3822,
                  body: _0x161f8c,
                  bodyBytes: _0xad6708
                } = _0x375599,
                _0x178a96 = {
                  status: _0x784eab,
                  statusCode: _0x5ccf50,
                  headers: _0x5d3822,
                  body: _0x161f8c,
                  bodyBytes: _0xad6708
                };
              _0x91da15(null, _0x178a96, _0x161f8c, _0xad6708);
            }, _0x31f9e1 => _0x91da15(_0x31f9e1 && _0x31f9e1.error || "UndefinedError"));
            break;
          }
        case "Node.js":
          {
            let _0x1ddba4 = require("iconv-lite");
            this.initGotEnv(_0x31bfd1);
            const {
              url: _0x47ddf0,
              ..._0x38d385
            } = _0x31bfd1;
            this.got[_0x6ba099](_0x47ddf0, _0x38d385).then(_0x1b1b0a => {
              const {
                  statusCode: _0x544465,
                  statusCode: _0x44d762,
                  headers: _0x4c5e70,
                  rawBody: _0x572e62
                } = _0x1b1b0a,
                _0x50da9c = _0x1ddba4.decode(_0x572e62, this.encoding),
                _0x4f30ec = {
                  status: _0x544465,
                  statusCode: _0x44d762,
                  headers: _0x4c5e70,
                  rawBody: _0x572e62,
                  body: _0x50da9c
                };
              _0x91da15(null, _0x4f30ec, _0x50da9c);
            }, _0x129fb9 => {
              const {
                message: _0xe69605,
                response: _0xcc893e
              } = _0x129fb9;
              _0x91da15(_0xe69605, _0xcc893e, _0xcc893e && _0x1ddba4.decode(_0xcc893e.rawBody, this.encoding));
            });
          }
      }
    }
    time(_0x7d59d1, _0x841f2e = null) {
      const _0x592441 = _0x841f2e ? new Date(_0x841f2e) : new Date();
      let _0x2f2ebd = {
        "M+": _0x592441.getMonth() + 1,
        "d+": _0x592441.getDate(),
        "H+": _0x592441.getHours(),
        "m+": _0x592441.getMinutes(),
        "s+": _0x592441.getSeconds(),
        "q+": Math.floor((_0x592441.getMonth() + 3) / 3),
        S: _0x592441.getMilliseconds()
      };
      if (/(y+)/.test(_0x7d59d1)) {
        _0x7d59d1 = _0x7d59d1.replace(RegExp.$1, (_0x592441.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let _0x18cded in _0x2f2ebd) if (new RegExp("(" + _0x18cded + ")").test(_0x7d59d1)) {
        _0x7d59d1 = _0x7d59d1.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x2f2ebd[_0x18cded] : ("00" + _0x2f2ebd[_0x18cded]).substr(("" + _0x2f2ebd[_0x18cded]).length));
      }
      return _0x7d59d1;
    }
    queryStr(_0x322703) {
      let _0x1b4b75 = "";
      for (const _0x248007 in _0x322703) {
        let _0x28237e = _0x322703[_0x248007];
        if (null != _0x28237e && "" !== _0x28237e) {
          "object" == typeof _0x28237e && (_0x28237e = JSON.stringify(_0x28237e));
          _0x1b4b75 += _0x248007 + "=" + _0x28237e + "&";
        }
      }
      _0x1b4b75 = _0x1b4b75.substring(0, _0x1b4b75.length - 1);
      return _0x1b4b75;
    }
    msg(_0xbe78d4 = _0x34642e, _0x4f39f4 = "", _0x46e9a2 = "", _0xc6f15e) {
      const _0xf81a80 = _0x189ac1 => {
        switch (typeof _0x189ac1) {
          case 0:
            {
              return _0x189ac1;
            }
          case "string":
            {
              switch (this.getEnv()) {
                case "Surge":
                  {}
                case "Stash":
                  {}
                default:
                  {
                    const _0x8cdd24 = {
                      url: _0x189ac1
                    };
                    return _0x8cdd24;
                  }
                case "Loon":
                  {}
                case "Shadowrocket":
                  {
                    return _0x189ac1;
                  }
                case "Quantumult X":
                  {
                    const _0x31f898 = {
                      "open-url": _0x189ac1
                    };
                    return _0x31f898;
                  }
                case "Node.js":
                  {
                    return;
                  }
              }
            }
          case "object":
            {
              switch (this.getEnv()) {
                case "Surge":
                  {}
                case "Stash":
                  {}
                case "Shadowrocket":
                  {}
                default:
                  {
                    let _0x514ebd = _0x189ac1.url || _0x189ac1.openUrl || _0x189ac1["open-url"];
                    const _0x3fc939 = {
                      url: _0x514ebd
                    };
                    return _0x3fc939;
                  }
                case "Loon":
                  {
                    let _0x11ab95 = _0x189ac1.openUrl || _0x189ac1.url || _0x189ac1["open-url"],
                      _0x5b0e61 = _0x189ac1.mediaUrl || _0x189ac1["media-url"];
                    const _0xa5d556 = {
                      openUrl: _0x11ab95,
                      mediaUrl: _0x5b0e61
                    };
                    return _0xa5d556;
                  }
                case "Quantumult X":
                  {
                    let _0x533c7a = _0x189ac1["open-url"] || _0x189ac1.url || _0x189ac1.openUrl,
                      _0x301393 = _0x189ac1["media-url"] || _0x189ac1.mediaUrl,
                      _0x23278c = _0x189ac1["update-pasteboard"] || _0x189ac1.updatePasteboard;
                    const _0x20bb05 = {
                      "open-url": _0x533c7a,
                      "media-url": _0x301393,
                      "update-pasteboard": _0x23278c
                    };
                    return _0x20bb05;
                  }
                case "Node.js":
                  {
                    return;
                  }
              }
            }
          default:
            {
              return;
            }
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
            {}
          case "Loon":
            {}
          case "Stash":
            {}
          case "Shadowrocket":
            {}
          default:
            {
              $notification.post(_0xbe78d4, _0x4f39f4, _0x46e9a2, _0xf81a80(_0xc6f15e));
              break;
            }
          case "Quantumult X":
            {
              $notify(_0xbe78d4, _0x4f39f4, _0x46e9a2, _0xf81a80(_0xc6f15e));
              break;
            }
          case "Node.js":
            {}
        }
      }
      if (!this.isMuteLog) {
        let _0x49e8d7 = ["", "==============📣系统通知📣=============="];
        _0x49e8d7.push(_0xbe78d4);
        if (_0x4f39f4) {
          _0x49e8d7.push(_0x4f39f4);
        }
        if (_0x46e9a2) {
          _0x49e8d7.push(_0x46e9a2);
        }
        console.log(_0x49e8d7.join("\n"));
        this.logs = this.logs.concat(_0x49e8d7);
      }
    }
    log(..._0x5f48bc) {
      if (_0x5f48bc.length > 0) {
        this.logs = [...this.logs, ..._0x5f48bc];
      }
      console.log(_0x5f48bc.join(this.logSeparator));
    }
    logErr(_0x493a84, _0x412f05) {
      switch (this.getEnv()) {
        case "Surge":
          {}
        case "Loon":
          {}
        case "Stash":
          {}
        case "Shadowrocket":
          {}
        case "Quantumult X":
          {}
        default:
          {
            this.log("", "❗️" + this.name + ", 错误!", _0x493a84);
            break;
          }
        case "Node.js":
          {
            this.log("", "❗️" + this.name + ", 错误!", _0x493a84.stack);
          }
      }
    }
    wait(_0x14e6bb) {
      return new Promise(_0x1861aa => setTimeout(_0x1861aa, _0x14e6bb));
    }
    done(_0x32fa54 = {}) {
      const _0x561997 = new Date().getTime(),
        _0x39b193 = (_0x561997 - this.startTime) / 1000;
      switch (this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x39b193 + " 秒"), this.log(), this.getEnv()) {
        case "Surge":
          {}
        case "Loon":
          {}
        case "Stash":
          {}
        case "Shadowrocket":
          {}
        case "Quantumult X":
          {}
        default:
          {
            $done(_0x32fa54);
            break;
          }
        case "Node.js":
          {
            process.exit(1);
          }
      }
    }
  }(_0x34642e, _0x4eb72a);
}