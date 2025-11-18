//Tue Nov 18 2025 02:46:24 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const x_0x284d1f = {
  km: ""
};
let x_0x257dd7 = "https://www.2eva.cn";
let x_0x2272ef = [];
const {
  SocksProxyAgent: x_0x41ec73
} = require("socks-proxy-agent");
const x_0x1cf3d4 = require("axios");
const x_0x2afc0c = "kwai-android aegon/4.28.0";
require("dotenv").config();
const x_0x4b6498 = "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0";
const x_0x28c938 = (_0x11bf7f, _0x1858e1 = "YYYY-MM-DD HH:mm:ss") => {
  const _0x359d79 = _0x11bf7f.getFullYear();
  const _0x26065d = String(_0x11bf7f.getMonth() + 1).padStart(2, "0");
  const _0x12a285 = String(_0x11bf7f.getDate()).padStart(2, "0");
  const _0x2a7fdd = String(_0x11bf7f.getHours()).padStart(2, "0");
  const _0x31228c = String(_0x11bf7f.getMinutes()).padStart(2, "0");
  const _0x1c1aae = String(_0x11bf7f.getSeconds()).padStart(2, "0");
  return _0x1858e1.replace("YYYY", _0x359d79).replace("MM", _0x26065d).replace("DD", _0x12a285).replace("HH", _0x2a7fdd).replace("mm", _0x31228c).replace("ss", _0x1c1aae);
};
generateLocalIp = async (_0x3ca533 = 1, _0x352bdc = "C") => {
  const _0xa38f5 = () => Math.floor(Math.random() * 256);
  switch (_0x352bdc.toUpperCase()) {
    case "A":
      return "10." + _0xa38f5() + "." + _0xa38f5() + "." + _0xa38f5();
    case "B":
      const _0x35fd52 = 16 + Math.floor(Math.random() * 16);
      return "172." + _0x35fd52 + "." + _0xa38f5() + "." + _0xa38f5();
    case "C":
    default:
      return "192.168." + _0x3ca533 + "." + _0xa38f5();
  }
};
class x_0x36338c {
  constructor(_0x676087) {
    this.index = x_0x370ecc.userIdx++;
    this.nickname = this.index;
    this.totalCoin = 0;
    this.allCash = 0;
    this.user = _0x676087.split("#");
    this.ck = this.user[0];
    this.salt = this.user[1];
    this.sock = null;
    const _0x168d84 = {
      name: "鐪嬪箍鍛婂緱閲戝竵",
      businessId: 672,
      posId: 24067,
      subPageId: 100026367,
      pageId: 11101,
      requestSceneType: 1,
      taskType: 1
    };
    this.lookAdInfo = _0x168d84;
    const _0x211a70 = {
      name: "瀹濈骞垮憡",
      businessId: 606,
      posId: 20346,
      subPageId: 100024064,
      pageId: 11101,
      requestSceneType: 1,
      taskType: 1
    };
    this.boxAdInfo = _0x211a70;
    const _0xe9fb1e = {
      name: "楗ˉ骞垮憡",
      businessId: 9362,
      posId: 24067,
      subPageId: 100026367,
      pageId: 11101,
      requestSceneType: 7,
      taskType: 2
    };
    this.foodAdInfo = _0xe9fb1e;
    const _0x2c905f = {
      name: "鎼滅储骞垮憡",
      businessId: 7076,
      posId: 216268,
      subPageId: 100161537,
      pageId: 11014,
      requestSceneType: 1,
      taskType: 1,
      linkUrl: "eyJwYWdlSWQiOiAxMTAxNCwgInN1YlBhZ2VJZCI6IDEwMDE2MTUzNywgInBvc0lkIjogMjE2MjY4LCAiYnVzaW5lc3NJZCI6IDcwNzYsICJleHRQYXJhbXMiOiAiIiwgImN1c3RvbURhdGEiOiB7ImV4aXRJbmZvIjogeyJ0b2FzdERlc2MiOiBudWxsLCAidG9hc3RJbWdVcmwiOiBudWxsfX0sICJwZW5kYW50VHlwZSI6IDEsICJkaXNwbGF5VHlwZSI6IDIsICJzaW5nbGVQYWdlSWQiOiAwLCAic2luZ2xlU3ViUGFnZUlkIjogMCwgImNoYW5uZWwiOiAwLCAiY291bnRkb3duUmVwb3J0IjogZmFsc2UsICJ0aGVtZVR5cGUiOiAwLCAibWl4ZWRBZCI6IHRydWUsICJmdWxsTWl4ZWQiOiB0cnVlLCAiYXV0b1JlcG9ydCI6IHRydWUsICJmcm9tVGFza0NlbnRlciI6IHRydWUsICJzZWFyY2hJbnNwaXJlU2NoZW1lSW5mbyI6IG51bGwsICJhbW91bnQiOiAwfQ=="
    };
    this.ssAdInfo = _0x2c905f;
    this.adinfo = {};
    this.userId = null;
    this.did = null;
    this.socks5 = null;
    this.adaddnum = 0;
    this.wwip = "";
    this.nwip = "192.168.31.57";
    this.adtype = [];
    this.cookies = "";
  }
  async getAccountBasicInfo() {
    x_0x370ecc.wait(4000);
    try {
      const _0x70a191 = {
        url: "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first",
        method: "GET",
        timeout: 12000,
        headers: {}
      };
      _0x70a191.headers["User-Agent"] = x_0x2afc0c;
      _0x70a191.headers.Cookie = this.ck;
      _0x70a191.headers["Content-Type"] = "application/x-www-form-urlencoded";
      const {
        data: _0x49dad6
      } = await x_0x1cf3d4.request(_0x70a191);
      if (_0x49dad6 && _0x49dad6.result === 1 && _0x49dad6.data) {
        {
          this.nickname = "[" + this.index + "] " + _0x49dad6.data.userData?.["nickname"];
          this.totalCoin = _0x49dad6.data.totalCoin;
          this.allCash = _0x49dad6.data.totalCash;
          x_0x370ecc.log("璐﹀彿[" + this.nickname + "] 💰 褰撳墠閲戝竵: " + this.totalCoin + "，💸 褰�鍓嶄綑棰�: " + this.allCash);
        }
      }
    } catch (_0x2e9b30) {
      {
        x_0x370ecc.log("璐﹀彿[" + this.nickname + "] 鑾峰彇璐︽埛淇℃伅澶辫触: " + _0x2e9b30);
      }
    }
  }
  checkCookieVariables() {
    const _0x409dba = ["kpn", "kpf", "userId", "did", "c", "appver", "language", "mod", "did_tag", "egid", "oDid", "androidApiLevel", "newOc", "browseType", "socName", "ftt", "abi", "userRecoBit", "device_abi", "grant_browse_type", "iuid", "rdid", "isp", "thermal", "net", "kcv", "app", "bottom_navigation", "ver", "android_os", "boardPlatform", "slh", "country_code", "nbh", "hotfix_ver", "did_gt", "keyconfig_state", "cdid_tag", "sys", "max_memory", "cold_launch_time_ms", "oc", "sh", "deviceBit", "ddpi", "is_background", "sw", "apptype", "icaver", "totalMemory", "sbh", "darkMode", "earphoneMode"];
    const _0x459366 = this.ck;
    const _0x39bdb5 = {};
    if (_0x459366) {
      _0x459366.split(";").forEach(_0x3ce037 => {
        {
          const [_0x1a50b4, _0x3d5be7] = _0x3ce037.trim().split("=");
          _0x39bdb5[_0x1a50b4] = _0x3d5be7;
        }
      });
    }
    const _0x3b22be = {};
    _0x409dba.forEach(_0x4747cf => {
      {
        _0x3b22be[_0x4747cf] = _0x39bdb5[_0x4747cf];
      }
    });
    let _0xb6a853 = /kuaishou\.api_st=([^;]+)/;
    let _0x28d73f = _0x459366.match(new RegExp(_0xb6a853, ""));
    this.api_st = _0x28d73f[1] || "";
    _0x409dba.forEach(_0x4bb11a => {
      const _0x3fd260 = _0x39bdb5[_0x4bb11a];
      if (_0x3fd260 !== undefined) {
        {
          this[_0x4bb11a] = _0x3fd260;
        }
      }
    });
    return _0x3b22be;
  }
  getOaid() {
    const _0x53b4c1 = this.ck;
    const _0x190d31 = {};
    if (_0x53b4c1) {
      {
        _0x53b4c1.split(";").forEach(_0x1bcebe => {
          {
            const [_0x2ef9c2, _0x49a88f] = _0x1bcebe.trim().split("=");
            _0x190d31[_0x2ef9c2] = _0x49a88f;
          }
        });
      }
    }
    return _0x190d31.oaid || "9e4bb0e5bc326fb1";
  }
  getNwip() {
    const _0x452559 = this.ck;
    const _0x38ee69 = {};
    if (_0x452559) {
      {
        _0x452559.split(";").forEach(_0x55cab5 => {
          const [_0x14c029, _0x1d973d] = _0x55cab5.trim().split("=");
          _0x38ee69[_0x14c029] = _0x1d973d;
        });
      }
    }
    return _0x38ee69.nwip || generateLocalIp();
  }
  getKsadtype() {
    const _0x43b3f2 = this.ck;
    const _0x2e48eb = {};
    if (_0x43b3f2) {
      _0x43b3f2.split(";").forEach(_0x42644f => {
        {
          const [_0x219323, _0x34c725] = _0x42644f.trim().split("=");
          _0x2e48eb[_0x219323] = _0x34c725;
        }
      });
    }
    const _0x2be766 = _0x2e48eb.ksadtype || x_0x2272ef;
    return _0x2be766.split(",");
  }
  getOsVersion() {
    const _0x49032d = this.ck;
    const _0x2f4e61 = {};
    if (_0x49032d) {
      {
        _0x49032d.split(";").forEach(_0xe70879 => {
          {
            const [_0x701772, _0x23322d] = _0xe70879.trim().split("=");
            _0x2f4e61[_0x701772] = _0x23322d;
          }
        });
      }
    }
    return _0x2f4e61.osVersion || 10;
  }
  async getIP() {
    if (this.user.length > 2) {
      this.sock = this.user[2];
      if (this.sock && (this.sock.includes("socks5://") || this.sock.includes("socks://"))) {
        try {
          {
            this.socks5 = new x_0x41ec73(this.sock);
            const _0x5614d3 = {
              url: "https://www.2eva.cn/api/health",
              method: "GET",
              timeout: 30000,
              httpAgent: this.socks5,
              httpsAgent: this.socks5,
              proxy: false,
              headers: {}
            };
            _0x5614d3.headers["User-Agent"] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";
            let {
              data: _0x13953a
            } = await x_0x1cf3d4.request(_0x5614d3);
            this.wwip = _0x13953a.ip;
            this.nwip = await this.getNwip();
            x_0x370ecc.log("璐﹀彿[" + this.nickname + "] 澶栫綉IP:[" + this.wwip + "," + this.nwip + "]");
            return;
          }
        } catch (_0x13a848) {
          this.socks5 = null;
          console.log("璐﹀彿[" + this.nickname + "]sock5浠ｇ悊閿欒");
        }
      }
    }
    try {
      const _0x3969a8 = {
        url: "https://www.2eva.cn/api/health",
        method: "GET",
        timeout: 30000
      };
      let {
        data: _0x3ac591
      } = await x_0x1cf3d4.request(_0x3969a8);
      this.wwip = _0x3ac591.ip;
      this.nwip = await this.getNwip();
      x_0x370ecc.log("璐﹀彿[" + this.nickname + "] 浠ｇ悊涓嶅瓨鍦╘x20閲囩敤鐩磋繛妯″紡[" + this.wwip + "," + this.nwip + "]");
    } catch (_0x2b4ca5) {
      {
        x_0x370ecc.log("璐﹀彿[" + this.nickname + "] 缃戠粶鑾峰彇澶辫触");
      }
    }
  }
  async run() {
    this.cookies = this.checkCookieVariables();
    this.adtype = this.getKsadtype();
    if (!this.salt) {
      {
        return x_0x370ecc.log("璐﹀彿['" + this.nickname + "'] salt涓�瀛樺湪");
      }
    }
    if (!x_0x370ecc.failadnumobj.hasOwnProperty(this.salt)) {
      x_0x370ecc.failadnumobj[this.salt] = 0;
    }
    if (x_0x370ecc.failadnumobj[this.salt] >= x_0x370ecc.failadnum) {
      {
        return x_0x370ecc.log("🙅 璐﹀彿['" + this.nickname + "'] 杩�缁�" + x_0x370ecc.failadnumobj[this.salt] + "娆′綆浠峰€�骞垮憡锛屽仠姝㈡湰杞繍琛�");
      }
    }
    await this.getIP();
    await this.getAccountBasicInfo();
    this.oaid = this.getOaid();
    this.osVersion = this.getOsVersion();
    x_0x370ecc.log("璐﹀彿[" + this.nickname + " 骞�鍛婅澶囨爣璇哰" + this.oaid + "]]鑾峰彇绯荤粺鐗堟湰 [" + this.osVersion + "],骞垮憡绫诲瀷[" + this.adtype + "]");
    if (this.adtype.includes("food")) {
      const _0x119c89 = x_0x370ecc.foodcount;
      this.adaddnum = 0;
      let _0x551ed5 = 0;
      for (let _0x384828 = 1; _0x384828 <= _0x119c89; _0x384828++) {
        {
          let _0x2d65fc = await this.loadAd("food");
          if (!_0x2d65fc) {
            x_0x370ecc.log("璐﹀彿[" + this.nickname + "] " + x_0x370ecc.wheelNum + "/" + _0x384828 + "/" + _0x119c89 + " [楗ˉ骞垮憡] 鑾峰彇骞垮憡淇℃伅澶辫触锛岃烦杩囨湰娆＄湅骞垮憡");
            continue;
          }
          await x_0x370ecc.wait(Math.floor(Math.random() * 4 + 4) * 1000);
          const _0x416082 = Math.floor((_0x2d65fc.watchAdTime + Math.floor(Math.random() * 4 + 4) * 1000) / 1000);
          x_0x370ecc.log("璐﹀彿[" + this.nickname + "] " + x_0x370ecc.wheelNum + "/" + _0x384828 + "/" + _0x119c89 + " [楗ˉ骞垮憡] 骞垮憡" + _0x2d65fc.watchAdTime / 1000 + "绉抃x20闅忔満" + _0x416082 + "绉�");
          await x_0x370ecc.wait(_0x416082 * 1000);
          const {
            neoAmount: _0x4b27a2,
            status: _0x5a781f
          } = await this.subAd(_0x2d65fc.cid, _0x2d65fc.llsid, _0x2d65fc.adExtInfo, Date.now(), _0x416082, _0x2d65fc.materialTime, _0x2d65fc.watchAdTime);
          if (_0x5a781f == 2) {
            {
              return;
            }
          }
          if (_0x5a781f == 3) {
            {
              x_0x370ecc.failadnumobj[this.salt] = 9999999;
              return;
            }
          }
          const _0x336363 = Math.floor(Math.random() * 23 + 15);
          x_0x370ecc.log("璐﹀彿[" + this.nickname + "] " + x_0x370ecc.wheelNum + "/" + _0x384828 + "/" + _0x119c89 + " [楗ˉ骞垮憡] 鉁匼x20鑾峰彇閲戝竵[" + _0x4b27a2 + "] 绛夊緟[" + _0x336363 + "绉抅");
          if (_0x4b27a2 < 20) {
            {
              x_0x370ecc.log("璐﹀彿[" + this.nickname + "] " + x_0x370ecc.wheelNum + "/" + _0x384828 + "/" + _0x119c89 + " [楗ˉ骞垮憡] 鉂孿x20棰嗗彇閲戝竵涓嶈冻20 绛�寰匸" + _0x336363 + "绉抅杩涘叆涓嬩竴杞�");
              x_0x370ecc.failadnumobj[this.salt] = x_0x370ecc.failadnumobj[this.salt] + 1;
              await x_0x370ecc.wait(_0x336363 * 1000);
              break;
            }
          } else {
            {
              x_0x370ecc.failadnumobj[this.salt] = 0;
              this.adaddnum = this.adaddnum + 1;
              _0x551ed5++;
              await x_0x370ecc.wait(_0x336363 * 1000);
            }
          }
        }
      }
    }
    if (this.adtype.includes("box")) {
      const _0x31ccc1 = x_0x370ecc.boxcount;
      let _0x2efa74 = 0;
      this.adaddnum = 0;
      for (let _0x22e169 = 1; _0x22e169 <= _0x31ccc1; _0x22e169++) {
        {
          let _0xda80cb = await this.loadAd("box");
          if (!_0xda80cb) {
            x_0x370ecc.log("璐﹀彿[" + this.nickname + "] " + x_0x370ecc.wheelNum + "/" + _0x22e169 + "/" + _0x31ccc1 + " [瀹濈骞垮憡] 鑾峰彇骞垮憡淇℃伅澶辫触锛岃烦杩囨湰娆″疂绠卞箍鍛�");
            continue;
          }
          await x_0x370ecc.wait(Math.floor(Math.random() * 4 + 4) * 1000);
          const _0x1c2aa0 = Math.floor((_0xda80cb.watchAdTime + Math.floor(Math.random() * 4 + 4) * 1000) / 1000);
          x_0x370ecc.log("璐﹀彿[" + this.nickname + "] " + x_0x370ecc.wheelNum + "/" + _0x22e169 + "/" + _0x31ccc1 + " [瀹濈骞垮憡] 骞垮憡" + _0xda80cb.watchAdTime / 1000 + "绉抃x20闅忔満" + _0x1c2aa0 + "绉�");
          await x_0x370ecc.wait(_0x1c2aa0 * 1000);
          const {
            neoAmount: _0x561595,
            status: _0x13bf1d
          } = await this.subAd(_0xda80cb.cid, _0xda80cb.llsid, _0xda80cb.adExtInfo, Date.now(), _0x1c2aa0, _0xda80cb.materialTime, _0xda80cb.watchAdTime);
          if (_0x13bf1d == 3) {
            {
              x_0x370ecc.failadnumobj[this.salt] = 9999999;
              return;
            }
          }
          if (_0x13bf1d == 2) {
            return;
          }
          const _0x31f78a = Math.floor(Math.random() * 23 + 15);
          x_0x370ecc.log("璐﹀彿[" + this.nickname + "] " + x_0x370ecc.wheelNum + "/" + _0x22e169 + "/" + _0x31ccc1 + " [瀹濈骞垮憡] 鉁匼x20鑾峰彇閲戝竵[" + _0x561595 + "] 绛夊緟[" + _0x31f78a + "绉抅");
          if (_0x561595 < 20) {
            x_0x370ecc.log("璐﹀彿[" + this.nickname + "] " + x_0x370ecc.wheelNum + "/" + _0x22e169 + "/" + _0x31ccc1 + " [瀹濈骞垮憡] 鉂岄鍙栭噾甯佷笉瓒�20 绛夊緟[" + _0x31f78a + "绉抅杩涘叆涓嬩竴杞�");
            x_0x370ecc.failadnumobj[this.salt] = x_0x370ecc.failadnumobj[this.salt] + 1;
            break;
          } else {
            {
              x_0x370ecc.failadnumobj[this.salt] = 0;
              this.adaddnum = this.adaddnum + 1;
              _0x2efa74++;
              await x_0x370ecc.wait(_0x31f78a * 1000);
            }
          }
        }
      }
    }
    if (this.adtype.includes("look")) {
      const _0x552a8c = x_0x370ecc.lookcount;
      let _0x477966 = 0;
      this.adaddnum = 0;
      for (let _0x4bde85 = 1; _0x4bde85 <= _0x552a8c; _0x4bde85++) {
        let _0xd0af24 = await this.loadAd("look");
        if (!_0xd0af24) {
          {
            x_0x370ecc.log("璐﹀彿[" + this.nickname + "] " + x_0x370ecc.wheelNum + "/" + _0x4bde85 + "/" + _0x552a8c + " [鐪嬪箍鍛奭 鑾�鍙栧箍鍛婁俊鎭け璐ワ紝璺宠繃鏈鐪嬪箍鍛�");
            continue;
          }
        }
        await x_0x370ecc.wait(Math.floor(Math.random() * 4 + 4) * 1000);
        const _0x85a72e = Math.floor((_0xd0af24.watchAdTime + Math.floor(Math.random() * 4 + 4) * 1000) / 1000);
        x_0x370ecc.log("璐﹀彿[" + this.nickname + "] " + x_0x370ecc.wheelNum + "/" + _0x4bde85 + "/" + _0x552a8c + " [鐪嬪箍鍛奭 骞�鍛�" + _0xd0af24.watchAdTime / 1000 + "绉抃x20闅忔満" + _0x85a72e + "绉�");
        await x_0x370ecc.wait(_0x85a72e * 1000);
        const {
          neoAmount: _0x39dcdf,
          status: _0x543da8
        } = await this.subAd(_0xd0af24.cid, _0xd0af24.llsid, _0xd0af24.adExtInfo, Date.now(), _0x85a72e, _0xd0af24.materialTime, _0xd0af24.watchAdTime);
        if (_0x543da8 == 3) {
          {
            x_0x370ecc.failadnumobj[this.salt] = 9999999;
            return;
          }
        }
        if (_0x543da8 == 2) {
          {
            return;
          }
        }
        const _0x4a4308 = Math.floor(Math.random() * 23 + 15);
        x_0x370ecc.log("璐﹀彿[" + this.nickname + "] " + x_0x370ecc.wheelNum + "/" + _0x4bde85 + "/" + _0x552a8c + " [鐪嬪箍鍛奭 鉁� 鑾�鍙栭噾甯乕" + _0x39dcdf + "] 绛夊緟[" + _0x4a4308 + "绉抅");
        if (_0x39dcdf < 20) {
          x_0x370ecc.log("璐﹀彿[" + this.nickname + "] " + x_0x370ecc.wheelNum + "/" + _0x4bde85 + "/" + _0x552a8c + " [鐪嬪箍鍛奭 鉂� 棰�鍙栭噾甯佷笉瓒�20 绛夊緟[" + _0x4a4308 + "绉抅杩涘叆涓嬩竴杞�");
          x_0x370ecc.failadnumobj[this.salt] = x_0x370ecc.failadnumobj[this.salt] + 1;
          await x_0x370ecc.wait(_0x4a4308 * 1000);
          break;
        } else {
          x_0x370ecc.failadnumobj[this.salt] = 0;
          this.adaddnum = this.adaddnum + 1;
          _0x477966++;
          await x_0x370ecc.wait(_0x4a4308 * 1000);
        }
      }
    }
    if (this.adtype.includes("search")) {
      {
        const _0x201b22 = x_0x370ecc.sscount;
        let _0x27656a = 0;
        this.adaddnum = 0;
        for (let _0x4b6946 = 1; _0x4b6946 <= _0x201b22; _0x4b6946++) {
          let _0x30ff53 = await this.loadAd("ss");
          if (!_0x30ff53) {
            {
              x_0x370ecc.log("璐﹀彿[" + this.nickname + "] " + x_0x370ecc.wheelNum + "/" + _0x4b6946 + "/" + _0x201b22 + " [鎼滅储骞垮憡] 鑾峰彇骞垮憡淇℃伅澶辫触锛岃烦杩囨湰娆＄湅骞垮憡");
              continue;
            }
          }
          await x_0x370ecc.wait(Math.floor(Math.random() * 4 + 4) * 1000);
          const _0xbd8b73 = Math.floor((_0x30ff53.watchAdTime + Math.floor(Math.random() * 4 + 4) * 1000) / 1000);
          x_0x370ecc.log("璐﹀彿[" + this.nickname + "] " + x_0x370ecc.wheelNum + "/" + _0x4b6946 + "/" + _0x201b22 + " [鎼滅储骞垮憡] 骞垮憡" + _0x30ff53.watchAdTime / 1000 + "绉抃x20闅忔満" + _0xbd8b73 + "绉�");
          await x_0x370ecc.wait(_0xbd8b73 * 1000);
          const {
            neoAmount: _0x45ec68,
            status: _0x560d9a
          } = await this.subAd(_0x30ff53.cid, _0x30ff53.llsid, _0x30ff53.adExtInfo, Date.now(), _0xbd8b73, _0x30ff53.materialTime, _0x30ff53.watchAdTime);
          if (_0x560d9a == 3) {
            x_0x370ecc.failadnumobj[this.salt] = 9999999;
            return;
          }
          if (_0x560d9a == 2) {
            return;
          }
          const _0x5c1bb5 = Math.floor(Math.random() * 23 + 15);
          x_0x370ecc.log("璐﹀彿[" + this.nickname + "] " + x_0x370ecc.wheelNum + "/" + _0x4b6946 + "/" + _0x201b22 + " [鎼滅储骞垮憡] 鉁匼x20鑾峰彇閲戝竵[" + _0x45ec68 + "] 绛夊緟[" + _0x5c1bb5 + "绉抅");
          if (_0x45ec68 < 20) {
            x_0x370ecc.log("璐﹀彿[" + this.nickname + "] " + x_0x370ecc.wheelNum + "/" + _0x4b6946 + "/" + _0x201b22 + " [鎼滅储骞垮憡] 鉂孿x20棰嗗彇閲戝竵涓嶈冻20 绛�寰匸" + _0x5c1bb5 + "绉抅杩涘叆涓嬩竴杞�");
            x_0x370ecc.failadnumobj[this.salt] = x_0x370ecc.failadnumobj[this.salt] + 1;
            await x_0x370ecc.wait(_0x5c1bb5 * 1000);
            break;
          } else {
            x_0x370ecc.failadnumobj[this.salt] = 0;
            this.adaddnum = this.adaddnum + 1;
            _0x27656a++;
            await x_0x370ecc.wait(_0x5c1bb5 * 1000);
          }
        }
      }
    }
    await this.getAccountBasicInfo();
    x_0x370ecc.log("璐﹀彿[" + this.nickname + "] " + x_0x370ecc.wheelNum + "杞甛x20鎵€鏈�浠诲姟瀹屾垚锛�");
  }
  async loadReqParams(_0x131f53, _0x15f053, _0x4e7871) {
    let _0x472062 = {
      mod: this.mod,
      appver: this.appver,
      language: this.language,
      ud: this.userId,
      did_tag: this.did_tag,
      egid: this.egid,
      kpf: this.kpf,
      oDid: this.oDid,
      kpn: this.kpn,
      newOc: this.newOc,
      androidApiLevel: this.androidApiLevel,
      browseType: this.browseType,
      socName: this.socName,
      c: this.c,
      abi: this.abi,
      ftt: this.ftt,
      userRecoBit: this.userRecoBit,
      device_abi: this.device_abi,
      grant_browse_type: this.grant_browse_type,
      iuid: this.iuid,
      rdid: this.rdid,
      did: this.did,
      earphoneMode: this.earphoneMode,
      isp: this.isp,
      thermal: this.thermal,
      net: this.net,
      kcv: this.kcv,
      app: this.app,
      bottom_navigation: this.bottom_navigation,
      ver: this.ver,
      android_os: this.android_os,
      boardPlatform: this.boardPlatform,
      slh: this.slh,
      country_code: this.country_code,
      nbh: this.nbh,
      hotfix_ver: this.hotfix_ver,
      did_gt: this.did_gt,
      keyconfig_state: this.keyconfig_state,
      cdid_tag: this.cdid_tag,
      sys: this.sys,
      max_memory: this.max_memory,
      cold_launch_time_ms: this.cold_launch_time_ms,
      oc: this.oc,
      sh: this.sh,
      deviceBit: this.deviceBit,
      ddpi: this.ddpi,
      is_background: this.is_background,
      sw: this.sw,
      apptype: this.apptype,
      icaver: this.icaver,
      totalMemory: this.totalMemory,
      sbh: this.sbh,
      darkMode: this.darkMode
    };
    try {
      const _0xdc3098 = x_0x370ecc.queryStr(_0x15f053) + "&" + x_0x370ecc.queryStr(_0x472062);
      const _0x341096 = Buffer.from(_0x131f53).toString("base64");
      const _0x2ffa13 = Buffer.from(_0x4e7871).toString("base64");
      const _0x190455 = Buffer.from(_0xdc3098).toString("base64");
      let {
        data: _0x1d5234
      } = await x_0x1cf3d4.request({
        url: x_0x257dd7 + "/api/ksjs/ksjs_km/nssig",
        headers: {
          ...x_0x284d1f,
          nickname: encodeURIComponent(this.nickname),
          userid: this.userId,
          salt: this.salt
        },
        method: "POST",
        data: {
          path: _0x341096,
          salt: _0x2ffa13,
          data: _0x190455
        }
      });
      if (_0x1d5234.code === 0) {
        const _0x30e4ff = {
          sig: _0x1d5234.data.sig,
          __NS_xfalcon: "",
          __NStokensig: _0x1d5234.data.nstokensig,
          __NS_sig3: _0x1d5234.data.nssig3
        };
        Object.assign(_0x472062, _0x30e4ff);
        return _0x472062;
      } else {
        {
          console.log("鑾峰彇nssig澶�璐�");
          console.log(_0x1d5234);
          return null;
        }
      }
    } catch (_0x200a91) {
      console.log("鍔犺浇nssig澶�璐�");
      return null;
    }
  }
  async encsign(_0x4947fb) {
    try {
      const _0x529a50 = Buffer.from(JSON.stringify(_0x4947fb)).toString("base64");
      const _0x2870e2 = {
        data: _0x529a50
      };
      const {
        data: _0x11f80b
      } = await x_0x1cf3d4.request({
        url: x_0x257dd7 + "/api/ksjs/ksjs_km/encsign",
        headers: {
          ...x_0x284d1f,
          nickname: encodeURIComponent(this.nickname),
          userid: this.userId,
          salt: this.salt
        },
        method: "POST",
        data: _0x2870e2
      });
      if (_0x11f80b.code === 0) {
        return _0x11f80b.data;
      } else {
        console.log("鑾峰彇encsign澶�璐�", _0x11f80b.msg);
        x_0x370ecc.log(_0x11f80b.msg);
        return null;
      }
    } catch (_0x11a2b0) {
      console.log("鍔犺浇encsign 澶辫触");
      return null;
    }
  }
  loadAdInfo(_0x3eccbc) {
    let _0x3c2ea0 = "{\"openH5AdCount\":\"2\",\"sessionLookedCompletedCount\":\"1\",\"sessionType\":\"1\",\"neoParams\":\"\",\"searchKey\":\"\",\"triggerType\":\"2\",\"disableReportToast\":\"true\",\"businessEnterAction\":\"7\"}";
    if (_0x3eccbc == "look") {
      this.adinfo = this.lookAdInfo;
    }
    if (_0x3eccbc == "food") {
      {
        this.adinfo = this.foodAdInfo;
      }
    }
    if (_0x3eccbc == "box") {
      this.adinfo = this.boxAdInfo;
    }
    if (_0x3eccbc == "ss") {
      {
        this.adinfo = this.ssAdInfo;
        const _0x58ad11 = {
          openH5AdCount: 0,
          sessionLookedCompletedCount: 0,
          sessionType: "1",
          searchKey: x_0x370ecc.searchkeyword,
          triggerType: "2",
          disableReportToast: true,
          businessEnterAction: "7",
          neoParams: this.adinfo.linkUrl
        };
        _0x3c2ea0 = JSON.stringify(_0x58ad11);
      }
    }
    const _0x459602 = {
      appId: "kuaishou_nebula",
      name: "蹇墜鏋侀€�鐗�",
      packageName: "com.kuaishou.nebula",
      version: this.appver,
      versionCode: -1
    };
    const _0x50a045 = {
      width: 1080,
      height: 2068
    };
    const _0x5c71d7 = {
      latitude: 0,
      longitude: 0
    };
    let _0x4f6180 = {
      appInfo: _0x459602,
      deviceInfo: {
        oaid: this.oaid,
        osType: 1,
        osVersion: this.getOsVersion(),
        language: this.language,
        deviceId: "" + this.did,
        screenSize: _0x50a045,
        ftt: "",
        supportGyroscope: true
      },
      networkInfo: {
        ip: this.nwip,
        connectionType: 100
      },
      geoInfo: _0x5c71d7,
      userInfo: {
        userId: this.userId,
        age: 0,
        gender: ""
      },
      impInfo: [{
        pageId: this.adinfo.pageId || 11101,
        subPageId: this.adinfo.subPageId,
        action: 0,
        width: 0,
        height: 0,
        browseType: _0x3eccbc == "ss" ? 4 : this.browseType,
        requestSceneType: this.adinfo.requestSceneType,
        lastReceiveAmount: 0,
        impExtData: _0x3c2ea0,
        mediaExtData: "{}",
        session: x_0x370ecc.uuid()
      }],
      adClientInfo: "{\"ipdxIP\":\"" + this.wwip + "\"}"
    };
    return _0x4f6180;
  }
  async loadAd(_0x194d23) {
    const _0x2c38fc = this.loadAdInfo(_0x194d23);
    const _0x1b322f = await this.encsign(_0x2c38fc);
    if (_0x1b322f == null) {
      {
        x_0x370ecc.log("鑾峰彇encsign澶�璐�");
        return;
      }
    }
    const _0x14fa86 = {
      encData: _0x1b322f.encdata,
      sign: _0x1b322f.sign,
      cs: false,
      client_key: "2ac2a76d",
      videoModelCrowdTag: "1_23",
      watchStage: "android",
      os: "android",
      "kuaishou.api_st": this.api_st,
      uQaTag: x_0x4b6498
    };
    const _0x306bc3 = await this.loadReqParams("/rest/e/reward/mixed/ad", _0x14fa86, this.salt);
    if (_0x306bc3 == null) {
      {
        x_0x370ecc.log("鑾峰彇骞垮憡淇℃伅澶辫触");
        return;
      }
    }
    try {
      {
        let {
          data: _0x428f12
        } = await x_0x1cf3d4.request({
          url: "https://api.e.kuaishou.com/rest/e/reward/mixed/ad",
          params: _0x306bc3,
          httpAgent: this.socks5,
          httpsAgent: this.socks5,
          proxy: false,
          timeout: 30000,
          method: "POST",
          headers: {
            Host: "api.e.kuaishou.com",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Cookie: "kuaishou.api_st=" + this.api_st + ";__NSWJ=;region_ticket=RT_66898EB2122EC01C6A99E8FCCB4887F9C156DFC294E9FD56AD0156AECEB24C4EC69BFDFE7",
            "User-Agent": x_0x2afc0c,
            "X-Client-Info": "model=" + this.mod + ";os=Android;nqe-score=22;network=" + this.net + ";signal-strength=4;"
          },
          data: _0x14fa86
        });
        if (_0x428f12.errorMsg === "OK" && _0x428f12.feeds && _0x428f12.feeds[0] && _0x428f12.feeds[0].ad) {
          {
            const _0x40cb3f = _0x428f12.feeds[0].caption || _0x428f12.feeds[0].ad?.["caption"] || "";
            if (_0x40cb3f) {
              {
                let _0x25c2e5 = "璐﹀彿[" + this.nickname + "] 鎴愬姛鑾峰彇鍒板箍鍛婁俊鎭細" + _0x40cb3f;
                if (_0x428f12?.["feeds"][0]?.["ad"]?.["extData"]) {
                  const _0x107bf1 = JSON.parse(_0x428f12?.["feeds"][0]?.["ad"]["extData"]);
                  _0x25c2e5 = "璐﹀彿[" + this.nickname + "] 鑾峰彇鍒板箍鍛婁俊鎭細" + _0x40cb3f + "锛岄璁¤幏寰梉" + _0x107bf1.awardCoin + "]閲�甯�";
                }
                x_0x370ecc.log(_0x25c2e5);
              }
            } else {
              {
                x_0x370ecc.log("璐﹀彿[" + this.nickname + "] 鑾峰彇骞垮憡淇℃伅澶辫触");
                return null;
              }
            }
            const _0x173ab8 = _0x428f12.feeds[0].exp_tag || "";
            const _0x5bb13e = _0x173ab8.split("/")[1]?.["split"]("_")?.[0] || "";
            if (_0x428f12.feeds[0].streamManifest) {
              const _0x3462a8 = {
                cid: _0x428f12.feeds[0].ad.creativeId,
                llsid: _0x5bb13e,
                adExtInfo: _0x428f12.feeds[0].ad.adDataV2.inspireAdInfo.adExtInfo,
                materialTime: _0x428f12.feeds[0].streamManifest.adaptationSet[0].duration,
                watchAdTime: _0x428f12.feeds[0].ad.adDataV2.inspireAdInfo.inspireAdBillTime
              };
              return _0x3462a8;
            } else {
              const _0x5acfdb = {
                cid: _0x428f12.feeds[0].ad.creativeId,
                llsid: _0x5bb13e,
                adExtInfo: _0x428f12.feeds[0].ad.adDataV2.inspireAdInfo.adExtInfo,
                materialTime: 3000,
                watchAdTime: _0x428f12.feeds[0].ad.adDataV2.inspireAdInfo.inspireAdBillTime
              };
              return _0x5acfdb;
            }
          }
        } else {
          x_0x370ecc.log("璐﹀彿[" + this.nickname + "] 鑾峰彇骞垮憡淇℃伅澶辫触");
          return null;
        }
      }
    } catch (_0x5e6d17) {
      console.log("鍔犺浇骞垮憡淇℃伅澶辫触");
      return null;
    }
  }
  async subAd(_0x32ae51, _0x413974, _0x186d9b, _0x12eca1, _0x5f5664, _0x55bc5d, _0x5e29e0) {
    const _0x16e423 = _0x12eca1 + _0x5f5664 * 1000;
    const _0x35a97f = {
      bizStr: JSON.stringify({
        businessId: this.adinfo.businessId,
        endTime: _0x16e423,
        extParams: "",
        mediaScene: "video",
        neoInfos: [{
          clientExtInfo: "{\"serialPaySuccess\":false}",
          creativeId: _0x32ae51,
          extInfo: "",
          llsid: _0x413974,
          adExtInfo: _0x186d9b,
          materialTime: _0x55bc5d,
          watchAdTime: _0x5e29e0,
          requestSceneType: this.adinfo.requestSceneType,
          taskType: this.adinfo.taskType,
          watchExpId: "",
          watchStage: 0
        }],
        pageId: this.adinfo.pageId || 11101,
        posId: this.adinfo.posId,
        reportType: 0,
        sessionId: "adNeo-" + this.userId + "-" + this.adinfo.subPageId + "-" + _0x12eca1,
        startTime: _0x12eca1,
        subPageId: this.adinfo.subPageId
      }),
      cs: false,
      client_key: "2ac2a76d",
      videoModelCrowdTag: "1_52",
      os: "android",
      "kuaishou.api_st": this.api_st
    };
    const _0x7fff7b = await this.loadReqParams("/rest/r/ad/task/report", _0x35a97f, this.salt);
    if (_0x7fff7b == null) {
      console.log("鑾峰彇sign澶辫触 璇�閲嶈瘯");
      return 0;
    }
    try {
      let {
        data: _0x17a4f1
      } = await x_0x1cf3d4.request({
        url: "https://api.e.kuaishou.com/rest/r/ad/task/report",
        httpAgent: this.socks5,
        httpsAgent: this.socks5,
        proxy: false,
        timeout: 30000,
        params: _0x7fff7b,
        method: "POST",
        headers: {
          Host: "api.e.kuaishou.com",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          Cookie: "kuaishou.api_st=" + this.api_st,
          "User-Agent": x_0x2afc0c,
          "X-Client-Info": "model=" + this.mod + ";os=Android;nqe-score=22;network=" + this.net + ";signal-strength=4;"
        },
        data: _0x35a97f
      });
      if ([20107, 20108, 1003, 415].includes(_0x17a4f1.result)) {
        console.log("⚠️ 宸茶揪涓婇檺");
        console.log(_0x17a4f1);
        const _0x124ac4 = {
          neoAmount: 0,
          status: 3
        };
        return _0x124ac4;
      }
      if (_0x17a4f1.message == "鎴愬姛") {
        const _0x4d7513 = {
          neoAmount: _0x17a4f1.data.neoAmount,
          status: 1
        };
        return _0x4d7513;
      } else {
        console.log(_0x17a4f1);
        const _0x4dc46c = {
          neoAmount: 0,
          status: 2
        };
        return _0x4dc46c;
      }
    } catch (_0xe386d8) {
      {
        console.log(_0xe386d8);
        const _0x5ab87c = {
          neoAmount: 0,
          status: 1
        };
        return _0x5ab87c;
      }
    }
  }
}
function x_0x27d8b9(_0x5503a8) {
  return new class {
    constructor(_0x3060f7) {
      {
        this.userIdx = 1;
        this.userList = [];
        this.userCount = 0;
        this.name = _0x3060f7;
        this.time = 480;
        this.time1 = 120;
        this.sort = 1;
        this.wheelNum = 0;
        this.startTime = new Date().getTime();
        this.log(this.name + ",寮€濮�!");
        this.count = 999;
        this.ip = 1;
        this.failadnum = 3;
        this.failadnumobj = {};
        this.foodcount = 3;
        this.boxcount = 3;
        this.lookcount = 5;
      }
    }
    checkEnv() {
      {
        const _0x5c76b6 = [];
        if (this.isNode()) {
          Object.keys(process.env).forEach(_0x16a24e => {
            {
              if (_0x16a24e.startsWith("ksck")) {
                {
                  _0x5c76b6.push(_0x16a24e);
                }
              }
            }
          });
        }
        let _0x5075f3 = [];
        _0x5c76b6.forEach(_0x3b49e0 => {
          const _0xb7d15c = (this.isNode() ? process.env[_0x3b49e0] : "") || "";
          if (_0xb7d15c) {
            {
              _0x5075f3.push(_0xb7d15c);
            }
          }
        });
        const _0x4f9773 = _0x5075f3.join("&");
        this.userList = _0x4f9773.split(["&", "\n"].find(_0x43dbd7 => {
          {
            return _0x4f9773.includes(_0x43dbd7);
          }
        }) || "&").filter(_0x15ca0b => {
          {
            return _0x15ca0b;
          }
        });
        this.userCount = this.userList.length;
        const _0x3ead10 = (this.isNode() ? process.env.KS_COUNT : 999) || 999;
        this.count = _0x3ead10;
        const _0x197efe = (this.isNode() ? process.env.KS_AD_TYPE : "look,box,food") || "look,box,food";
        x_0x2272ef = _0x197efe;
        const _0x5e8d66 = (this.isNode() ? process.env.KS_KM : "") || "";
        x_0x284d1f.km = _0x5e8d66;
        const _0x313db2 = (this.isNode() ? process.env.KS_TIME : 480) || 480;
        this.time = Number(_0x313db2);
        const _0x1362e8 = (this.isNode() ? process.env.KS_TIME1 : 120) || 120;
        this.time1 = Number(_0x1362e8);
        const _0x438fed = (this.isNode() ? process.env.KS_SORT : 0) || 0;
        this.sort = Number(_0x438fed);
        const _0x11cad6 = (this.isNode() ? process.env.KS_IP : 1) || 1;
        this.ip = Number(_0x11cad6);
        const _0x22d01f = (this.isNode() ? process.env.KS_FAIL_NUM : 3) || 3;
        this.failadnum = Number(_0x22d01f);
        this.log({
          count: this.count,
          time: this.time,
          time1: this.time1,
          sort: this.sort
        });
        const _0x3f607a = (this.isNode() ? process.env.KS_AD_NUM : "3,3,5,1") || "3,3,5,1";
        const _0x4aa4d1 = _0x3f607a.split(",");
        this.foodcount = Number(_0x4aa4d1[Math.min(0, _0x4aa4d1.length - 1)]);
        this.boxcount = Number(_0x4aa4d1[Math.min(1, _0x4aa4d1.length - 1)]);
        this.lookcount = Number(_0x4aa4d1[Math.min(2, _0x4aa4d1.length - 1)]);
        this.sscount = Number(_0x4aa4d1[Math.min(3, _0x4aa4d1.length - 1)]);
        this.log("鍏辨壘鍒�" + this.userCount + "涓处鍙�,杩愯" + this.count + "杞�,鍏ㄥ眬骞垮憡绫诲瀷涓�" + _0x197efe);
        this.searchkeyword = (this.isNode() ? process.env.KS_SEARCH_KEYWORD : "鎹曢奔") || "鎹曢奔";
        console.log("鎼滅储鍏抽敭璇嶏細" + this.searchkeyword);
      }
    }
    isNode() {
      {
        return "undefined" != typeof module && !!module.exports;
      }
    }
    queryStr(_0xacde7f) {
      {
        const _0x678dd = require("querystring");
        return _0x678dd.stringify(_0xacde7f);
      }
    }
    uuid() {
      {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (_0x584738) {
          {
            var _0x2f5d01 = Math.random() * 16 | 0;
            var _0x18d3cb = _0x584738 == "x" ? _0x2f5d01 : _0x2f5d01 & 3 | 8;
            return _0x18d3cb.toString(16);
          }
        });
      }
    }
    log(_0x371f15) {
      {
        const _0x4224f5 = new Date();
        console.log(x_0x28c938(_0x4224f5, "MM-DD HH:mm:ss"), _0x371f15);
      }
    }
    wait(_0x2c86d2) {
      return new Promise(_0x1d1694 => {
        return setTimeout(_0x1d1694, _0x2c86d2);
      });
    }
    async done() {
      {
        const _0x27b9a0 = new Date().getTime();
        const _0x450caa = (_0x27b9a0 - this.startTime) / 1000;
        this.log(this.name + ",缁�鏉�!" + _0x450caa + "绉�");
        if (this.isNode()) {
          {
            process.exit(1);
          }
        }
      }
    }
  }(_0x5503a8);
}
const x_0x370ecc = new x_0x27d8b9("eva");
async function x_0x148449() {
  const _0x5c51a6 = {
    url: "https://gitee.com/fxg1997/open/raw/master/ksNotice.json",
    method: "GET"
  };
  const {
    data: _0x5bbd9d
  } = await x_0x1cf3d4.request(_0x5c51a6);
  console.log("⚠️【鍏嶈矗澹版槑銆慭x0a------------------------------------------\n1銆佹鑴氭湰浠呯敤浜庡涔犵爺绌讹紝涓嶄繚璇佸叾鍚堟硶鎬с€�鍑嗙‘鎬с€�鏈夋晥鎬э紝璇锋牴鎹儏鍐佃嚜琛屽垽鏂紝鏈汉瀵规涓嶆壙鎷呬换浣曚繚璇佽矗浠汇€�\n2銆佺敱浜庢鑴氭湰浠呯敤浜庡涔犵爺绌讹紝鎮ㄥ繀椤诲湪涓嬭浇鍚嶾x2024 灏�鏃跺唴灏嗘墍鏈夊唴瀹逛粠鎮ㄧ殑璁＄畻鏈烘垨鎵嬫満鎴栦换浣曞瓨鍌ㄨ澶囦腑瀹屽叏鍒犻櫎锛岃嫢杩濆弽瑙勫畾寮曡捣浠讳綍浜嬩欢鏈汉瀵规鍧囦笉璐熻矗銆俓x0a3銆�璇峰嬁灏嗘鑴氭湰鐢ㄤ簬浠讳綍鍟嗕笟鎴栭潪娉曠洰鐨勶紝鑻ヨ繚鍙嶈瀹氳鑷瀵规璐熻矗銆俓x0a4銆�姝よ剼鏈秹鍙婂簲鐢ㄤ笌鏈汉鏃犲叧锛屾湰浜哄鍥犳寮曡捣鐨勪换浣曢殣绉佹硠婕忔垨鍏朵粬鍚庢灉涓嶆壙鎷呬换浣曡矗浠汇€�\n5銆佹湰浜哄浠讳綍鑴氭湰寮曞彂鐨勯棶棰樻涓嶈礋璐ｏ紝鍖呮嫭浣嗕笉闄愪簬鐢辫剼鏈敊璇紩璧风殑浠讳綍鎹熷け鍜屾崯瀹炽€�\n6銆佸鏋滀换浣曞崟浣嶆垨涓汉璁や负姝よ剼鏈彲鑳芥秹瀚屼镜鐘叾鏉冨埄锛屽簲鍙婃椂閫氱煡骞舵彁渚涜韩浠借瘉鏄庯紝鎵€鏈�鏉冭瘉鏄庯紝鎴戜滑灏嗗湪鏀跺埌璁よ瘉鏂囦欢纭鍚庡垹闄ゆ鑴氭湰銆俓x0a7銆�鎵€鏈�鐩存帴鎴栭棿鎺ヤ娇鐢ㄣ€�鏌ョ湅姝よ剼鏈殑浜哄潎搴旇浠旂粏闃呰姝ゅ０鏄庛€�鏈汉淇濈暀闅忔椂鏇存敼鎴栬ˉ鍏呮澹版槑鐨勬潈鍒┿€�涓€鏃�鎮ㄤ娇鐢ㄦ垨澶嶅埗浜嗘鑴氭湰锛屽嵆瑙嗕负鎮ㄥ凡鎺ュ彈姝ゅ厤璐ｅ０鏄庛€�\n------------------------------------------*/");
  console.log(_0x5bbd9d);
  console.log("鈺斺晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晽");
  console.log("鈺慭x20                   📢 璐�鍗″湴鍧€鎻�绀篭x20鑰佺増鏈琝x20                    鈺�");
  console.log("鈺犫晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨暎");
  console.log("鈺慭x20                   璐�鍗″湴鍧€: 鍔�缇x20658120402                  鈺�");
  console.log("鈺犫晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨暎");
  console.log("鈺慭x20 ck妫€娴嬪湴鍧€: https://www.2eva.cn/cookies.html                鈺�");
  console.log("鈺氣晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨暆");
}
const x_0x5970e7 = async () => {
  let _0x35fc7b = true;
  let _0x2a991c = x_0x370ecc.userCount;
  for (let _0x348a97 in x_0x370ecc.failadnumobj) {
    if (x_0x370ecc.failadnumobj[_0x348a97] < x_0x370ecc.failadnum) {
      _0x35fc7b = false;
      break;
    }
  }
  if (Object.keys(x_0x370ecc.failadnumobj).length < _0x2a991c) {
    _0x35fc7b = false;
  }
  if (_0x35fc7b) {
    x_0x370ecc.log("鎵€鏈�璐﹀彿杩炵画浣庝环鍊煎箍鍛婅秴杩�" + x_0x370ecc.failadnum + "娆★紝鍋滄杩愯");
    x_0x370ecc.done();
    return;
  }
  x_0x370ecc.wheelNum++;
  x_0x370ecc.userIdx = 1;
  if (x_0x370ecc.sort == 1) {
    for (let _0x38c05d of x_0x370ecc.userList) {
      {
        await new x_0x36338c(_0x38c05d).run();
        const _0x1b7d36 = Math.floor(Math.random() * 20 + 30);
        await x_0x370ecc.wait(_0x1b7d36);
      }
    }
  } else {
    {
      await Promise.all(x_0x370ecc.userList.map(_0x5a01f9 => new x_0x36338c(_0x5a01f9).run()));
    }
  }
  if (x_0x370ecc.wheelNum < x_0x370ecc.count) {
    const _0x37e9dd = Math.floor(Math.random() * x_0x370ecc.time1 + x_0x370ecc.time);
    x_0x370ecc.log("绗�" + x_0x370ecc.wheelNum + "娆′换鍔″畬鎴怽x20绛夊緟" + _0x37e9dd + "绉掑悗缁х画鎵ц");
    await x_0x370ecc.wait(_0x37e9dd * 1000);
    await x_0x5970e7();
  } else {
    {
      x_0x370ecc.log("鎵€鏈�浠诲姟瀹屾垚");
      x_0x370ecc.done();
    }
  }
};
!(async () => {
  await x_0x148449();
  x_0x370ecc.checkEnv();
  await x_0x5970e7();
})().catch(_0x565306 => {
  return x_0x370ecc.log(_0x565306);
}).finally(() => {
  return x_0x370ecc.done();
});