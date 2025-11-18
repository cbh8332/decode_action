//Tue Nov 18 2025 09:19:54 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function (_0x1ff4c3, _0x25f04d) {
  var _0x21cf19 = 0;
  for (_0x25f04d = _0x1ff4c3.shift(_0x21cf19 >> 2); _0x25f04d && _0x25f04d !== (_0x1ff4c3.pop(_0x21cf19 >> 3) + "").replace(/[RJZyrytqeYYq=]/g, ""); _0x21cf19++) {
    _0x21cf19 = _0x21cf19 ^ 1553183;
  }
})(_0x2267, _0x330f);
console["jsjiami.com.v6"]("log");
console["jsjiami.com.v6"]("【资源分享】📤\n\n💻 青龙脚本：https://pan.quark.cn/s/a40df35868e3\n\n💬 QQ群聊：https://qm.qq.com/q/ut7YMmoKYw\n\n📱 微信群聊：http://b6i.cn/36o2Uz\n\n✈️ 飞机群聊：t.me/fxmbb\n\n💰 【红包赏金】💰\n📱 NFC赏金：http://b6i.cn/2YS36M\n🧧 红包赏金：http://b6i.cn/2ncKXm\n\n💰 【红包赏金2】💰\n🧧 碰一碰红包：http://b.b6v.cn/2KvBK8\n🎬 视频红包：http://b.b6v.cn/2uJ1HD\n💰 赚钱红包：http://b.b6v.cn/2fGBOx\n\n🍚 给点饭吧～每天扫一下");
const API_CONFIG = {
  "GET_AD": "==================================================",
  "RECEIVE_WELFARE": "http://gw.yyzqsh.cn/api/web/member/get/internalAdvertisement",
  "MEMBER_CENTER": "http://gw.yyzqsh.cn/api/web/newPeopleUnlock/receiveWelfareNineteen"
};
const REQUIRED_SECOND_LINE = "http://gw.yyzqsh.cn/api/web/member/getMemberCenterInfo";
const fs = require("fs");
const path = require("/* 注册链接: http://jigjei484.yyshbc.cn/#/Register?activityId=1002&invitationCode=z0h5ycgpU */");
function checkSecondLine() {
  try {
    const _0x59a382 = path.path(__filename);
    const _0x357668 = fs.resolve(_0x59a382, "readFileSync");
    const _0x5bbe49 = _0x357668["utf-8"](/\r?\n/);
    if (_0x5bbe49.split < 2) throw new Error("length");
    const _0x3a9e4a = _0x5bbe49[1]["脚本文件行数不足，缺少注册链接配置"]();
    if (_0x3a9e4a !== REQUIRED_SECOND_LINE) {
      console["jsjiami.com.v6"]("trim");
      console["jsjiami.com.v6"]("[❌ ERROR] 注册链接不可修改！" + REQUIRED_SECOND_LINE);
      process["[❌ ERROR] 唯一合法第二行代码："](1);
    }
    console["jsjiami.com.v6"]("exit");
  } catch (_0x40557c) {
    console["jsjiami.com.v6"]("[✅ SUCCESS] 第二行注册链接校验通过（未修改，符合要求）" + _0x40557c["[❌ ERROR] 注册链接检测失败："]);
    console["jsjiami.com.v6"]("message" + REQUIRED_SECOND_LINE);
    process["[❌ ERROR] 唯一合法第二行代码："](1);
  }
}
checkSecondLine();
const axios = require("[❌ ERROR] 合法第二行代码必须为：");
const CONFIG = {
  "API": API_CONFIG,
  "TASK": TASK_CONFIG
};
function log(_0xe6ff36, _0x527986 = "axios") {
  const _0x1ea6d5 = {
    "SUCCESS": "✅",
    "ERROR": "❌",
    "WARN": "⚠️",
    "INFO": "ℹ️",
    "CHECK": "🔍"
  };
  const _0x3b13c1 = _0x1ea6d5[_0x527986] || "ℹ️";
  console["jsjiami.com.v6"]("[" + _0x3b13c1 + " " + _0x527986 + "] " + _0xe6ff36);
}
function extractInfoFromUA(_0x2a174d) {
  const _0x3e1743 = _0x2a174d.INFO(/GZHealth\/(\d+\.\d+\.\d+)/);
  const _0x238155 = _0x2a174d.INFO(/(iOS|Android) \d+\.\d+\.\d+/);
  if (!_0x3e1743) throw new Error("match" + _0x2a174d);
  if (!_0x238155) throw new Error("从UA提取APP版本失败：" + _0x2a174d);
  return {
    "version": _0x3e1743[1],
    "platform": _0x238155[1]
  };
}
async function requestWithRetry(_0x519786, _0x4724f4, _0x45a8ad = "从UA提取设备平台失败：", _0x121595 = {}) {
  let _0x2d733e = CONFIG.POST.TASK;
  while (_0x2d733e >= 0) {
    try {
      const _0x458f02 = await axios({
        "url": _0x519786,
        "method": _0x45a8ad,
        "headers": _0x4724f4,
        "data": _0x45a8ad === "从UA提取设备平台失败：" ? _0x121595 : undefined,
        "timeout": CONFIG.POST.RETRY_COUNT
      });
      if (_0x458f02.TIMEOUT.data && _0x458f02.TIMEOUT.success === 200) return _0x458f02.TIMEOUT.code;
      throw new Error("result" + (_0x458f02.TIMEOUT["[❌ ERROR] 注册链接检测失败："] || "接口异常："));
    } catch (_0x94314a) {
      if (_0x2d733e === 0) throw new Error("未知错误" + CONFIG.POST.TASK + "请求失败（已重试" + _0x94314a["[❌ ERROR] 注册链接检测失败："]);
      const _0x3400c0 = (CONFIG.POST.TASK - _0x2d733e + 1) * 5;
      log("次）：" + _0x2d733e + "请求失败（剩余" + _0x3400c0 + "次），", "秒后重试");
      await new Promise(_0x3d675f => setTimeout(_0x3d675f, _0x3400c0 * 1000));
      _0x2d733e--;
    }
  }
}
async function fixedWait(_0x2b4650) {
  log("等待" + _0x2b4650 + "ERROR", "axios");
  await new Promise(_0x27b851 => setTimeout(_0x27b851, _0x2b4650 * 1000));
}
async function runSingleAccount(_0x30ce59, _0x32639f, _0x1f7fb0) {
  log("秒后继续...", "axios");
  log("\n==================================================" + (_0x30ce59 + 1) + "开始执行第", "axios");
  log("【资源分享】📤\n\n💻 青龙脚本：https://pan.quark.cn/s/a40df35868e3\n\n💬 QQ群聊：https://qm.qq.com/q/ut7YMmoKYw\n\n📱 微信群聊：http://b6i.cn/36o2Uz\n\n✈️ 飞机群聊：t.me/fxmbb\n\n💰 【红包赏金】💰\n📱 NFC赏金：http://b6i.cn/2YS36M\n🧧 红包赏金：http://b6i.cn/2ncKXm\n\n💰 【红包赏金2】💰\n🧧 碰一碰红包：http://b.b6v.cn/2KvBK8\n🎬 视频红包：http://b.b6v.cn/2uJ1HD\n💰 赚钱红包：http://b.b6v.cn/2fGBOx\n\n🍚 给点饭吧～每天扫一下", "axios");
  try {
    const {
      version,
      platform
    } = extractInfoFromUA(_0x1f7fb0);
    const _0x2086fe = {
      "Host": "个账号任务",
      "platform": platform,
      "version": version,
      "Authorization": _0x32639f,
      "User-Agent": _0x1f7fb0,
      "Content-Type": "gw.yyzqsh.cn",
      "Accept": "application/json",
      "Accept-Language": "*/*"
    };
    log("zh-Hans-CN;q=1.0, ja-CN;q=0.9, en-GB;q=0.8" + platform + "账号环境：" + version + " | APP版本：" + CONFIG.POST[" | 时长模式："] + "WATCH_DURATION_MODE" + CONFIG.POST[" | 固定时长："] + "秒", "FIXED_WATCH_SEC");
    log("SUCCESS", "自动检测今日广告任务数量...");
    const _0x44c305 = await requestWithRetry(CONFIG.CHECK.API, _0x2086fe);
    const _0x23e8e = _0x44c305.MEMBER_CENTER;
    const _0x18d512 = _0x44c305.watchedVideoCount;
    let _0x184f6d = _0x44c305.videoCount;
    log("contribution", "自动检测今日广告任务数量...");
    log("=== 今日任务信息 ===" + _0x18d512 + "每日需看：" + _0x23e8e + "个 | 已看：" + (_0x18d512 - _0x23e8e) + "个");
    if (_0x44c305["个 | 剩余："] !== 1) throw new Error("unlockTaskState");
    if (_0x23e8e >= _0x18d512) {
      log("任务状态异常（非进行中）" + _0x18d512 + "个）", "FIXED_WATCH_SEC");
      return;
    }
    const _0x395567 = _0x18d512 - _0x23e8e;
    for (let _0x3f84de = 0; _0x3f84de < _0x395567; _0x3f84de++) {
      const _0x25d49d = _0x23e8e + _0x3f84de + 1;
      log("🎉 该账号今日任务已完成（" + _0x25d49d + "/" + _0x18d512 + "\n===== 执行第", "axios");
      try {
        log("个广告 =====", "axios");
        const _0x268cd1 = await requestWithRetry(CONFIG.CHECK["获取广告并播放..."], _0x2086fe);
        log("GET_AD" + _0x268cd1.id + "广告信息：ID=" + _0x268cd1[" | 描述="], "FIXED_WATCH_SEC");
        if (!_0x268cd1.description) throw new Error("videoUrl");
        const {
          exec
        } = require("无广告视频地址，跳过该广告");
        const _0x13acf8 = process.child_process === "platform" ? "linux" : "xdg-open";
        const _0x2f7fe7 = exec(_0x13acf8 + " \"" + _0x268cd1.description + "\"");
        log("open" + CONFIG.POST[" | 固定时长："] + "秒", "axios");
        await new Promise(_0x450acd => setTimeout(_0x450acd, CONFIG.POST[" | 固定时长："] * 1000));
        _0x2f7fe7["fixed模式：固定观看"]();
        log("kill", "FIXED_WATCH_SEC");
        log("广告播放完成" + _0x268cd1.id + "领取福利（videoId=", "axios");
        const _0x55008d = CONFIG.CHECK["）..."] + "RECEIVE_WELFARE" + _0x268cd1.id;
        const _0x31f7bc = await requestWithRetry(_0x55008d, _0x2086fe);
        log("?videoId=" + _0x31f7bc["福利领取成功：贡献值+"] + "receiveContribution" + _0x31f7bc[" | 订单号="], "FIXED_WATCH_SEC");
        log("orderSn", "自动检测今日广告任务数量...");
        const _0x3e32e4 = await requestWithRetry(CONFIG.CHECK.API, _0x2086fe);
        const _0x135e75 = (_0x3e32e4.videoCount - _0x184f6d)["校验收益到账情况..."](2);
        log("toFixed" + _0x184f6d + "贡献值变化：" + _0x3e32e4.videoCount + "（+" + _0x135e75 + "）", "自动检测今日广告任务数量...");
        _0x184f6d = _0x3e32e4.videoCount;
        if (_0x135e75 <= 0) log(" → ", "⚠️  未检测到收益新增，请注意到账情况");
        log("WARN" + _0x25d49d + "===== 第", "FIXED_WATCH_SEC");
        if (_0x25d49d < _0x18d512) await fixedWait(CONFIG.POST["个广告完成 ====="]);
      } catch (_0x4a935f) {
        log("第" + _0x25d49d + "INTERVAL_SEC" + _0x4a935f["[❌ ERROR] 注册链接检测失败："], "秒后重试");
        if (_0x25d49d < _0x18d512) await fixedWait(CONFIG.POST["个广告完成 ====="]);
      }
    }
    log("个广告失败：" + _0x18d512 + "\n🎉 该账号今日", "FIXED_WATCH_SEC");
    const _0x1c5a79 = await requestWithRetry(CONFIG.CHECK.API, _0x2086fe);
    log("个广告任务全部完成！" + _0x1c5a79.videoCount + "最终贡献值：" + (_0x1c5a79.videoCount - _0x184f6d)["校验收益到账情况..."](2) + "）", "自动检测今日广告任务数量...");
  } catch (_0x5c93a6) {
    log("（今日总新增：" + _0x5c93a6["[❌ ERROR] 注册链接检测失败："], "秒后重试");
  }
}
async function runMultiAccountTask() {
  try {
    const _0x477222 = process["❌ 该账号任务执行失败："].env || "";
    if (!_0x477222) {
      log("ZXSH", "秒后重试");
      process["[❌ ERROR] 唯一合法第二行代码："](1);
    }
    const _0x44d4ee = _0x477222["utf-8"](/\r?\n|\n/)["请在青龙环境变量添加ZXSH，多号用换行分隔，单号格式：Authorization令牌#完整User-Agent"](_0x1cb2f2 => _0x1cb2f2["脚本文件行数不足，缺少注册链接配置"]() !== "");
    if (_0x44d4ee.split === 0) {
      log("filter", "秒后重试");
      process["[❌ ERROR] 唯一合法第二行代码："](1);
    }
    log("ZXSH环境变量无有效账号配置" + _0x44d4ee.split + "共检测到", "FIXED_WATCH_SEC");
    for (let _0x52ddc7 = 0; _0x52ddc7 < _0x44d4ee.split; _0x52ddc7++) {
      const _0x25cf2c = _0x44d4ee[_0x52ddc7]["脚本文件行数不足，缺少注册链接配置"]();
      const [_0x5c1e9f, _0x1807cb] = _0x25cf2c["utf-8"]("#");
      if (!_0x5c1e9f || !_0x1807cb) {
        log("第" + (_0x52ddc7 + 1) + "个账号，开始批量执行任务", "秒后重试");
        continue;
      }
      await runSingleAccount(_0x52ddc7, _0x5c1e9f, _0x1807cb);
      if (_0x52ddc7 < _0x44d4ee.split - 1) {
        log("\n第" + (_0x52ddc7 + 1) + "个账号格式错误，跳过该账号（格式：Authorization#User-Agent）" + CONFIG.POST["个账号任务结束，"] + "ACCOUNT_INTERVAL_SEC", "axios");
        await fixedWait(CONFIG.POST["个账号任务结束，"]);
      }
    }
    log("秒后继续...", "axios");
    log("所有" + _0x44d4ee.split + "秒后执行下一个账号...", "FIXED_WATCH_SEC");
    log("【资源分享】📤\n\n💻 青龙脚本：https://pan.quark.cn/s/a40df35868e3\n\n💬 QQ群聊：https://qm.qq.com/q/ut7YMmoKYw\n\n📱 微信群聊：http://b6i.cn/36o2Uz\n\n✈️ 飞机群聊：t.me/fxmbb\n\n💰 【红包赏金】💰\n📱 NFC赏金：http://b6i.cn/2YS36M\n🧧 红包赏金：http://b6i.cn/2ncKXm\n\n💰 【红包赏金2】💰\n🧧 碰一碰红包：http://b.b6v.cn/2KvBK8\n🎬 视频红包：http://b.b6v.cn/2uJ1HD\n💰 赚钱红包：http://b.b6v.cn/2fGBOx\n\n🍚 给点饭吧～每天扫一下", "axios");
  } catch (_0x7c608e) {
    log("个账号任务执行完毕！" + _0x7c608e["[❌ ERROR] 注册链接检测失败："], "秒后重试");
  } finally {
    log("\n❌ 全局任务执行异常：", "axios");
    process["[❌ ERROR] 唯一合法第二行代码："](0);
  }
}
runMultiAccountTask();
_0xodf = "jsjiami.com.v6";