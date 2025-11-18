//Tue Nov 18 2025 09:37:11 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const REQUIRED_SECOND_LINE = "/* 注册链接: http://jigjei484.yyshbc.cn/#/Register?activityId=1002&invitationCode=nC0kbFnYU */";
const fs = require("fs");
const path = require("path");
function checkSecondLine() {
  try {
    const QQQ00O0 = path.resolve(__filename);
    const $$0O0Q = fs.readFileSync(QQQ00O0, "utf-8");
    const $QQ0QQ = $$0O0Q.split(/\r?\n/);
    if ($QQ0QQ.length < 2) {
      throw new Error("脚本文件行数不足，缺少注册链接配置");
    }
    const Q0$O0 = $QQ0QQ[1].trim();
    if (Q0$O0 !== REQUIRED_SECOND_LINE) {
      console.log("[❌ ERROR] 注册链接不可修改！");
      console.log("[❌ ERROR] 唯一合法第二行代码：" + REQUIRED_SECOND_LINE);
      process.exit(1);
    }
    console.log("[✅ SUCCESS] 第二行注册链接校验通过（未修改，符合要求）");
  } catch ($O0Q0$) {
    console.log("[❌ ERROR] 注册链接检测失败：" + $O0Q0$.message);
    console.log("[❌ ERROR] 合法第二行代码必须为：" + REQUIRED_SECOND_LINE);
    process.exit(1);
  }
}
checkSecondLine();
const axios = require("axios");
const CONFIG = {
  "API": {
    "GET_AD": "http://gw.yyzqsh.cn/api/web/member/get/internalAdvertisement",
    "RECEIVE_WELFARE": "http://gw.yyzqsh.cn/api/web/newPeopleUnlock/receiveWelfareNineteen",
    "MEMBER_CENTER": "http://gw.yyzqsh.cn/api/web/member/getMemberCenterInfo"
  },
  "HEADERS": {},
  "TASK": {
    "WATCH_DURATION_MODE": "fixed",
    "FIXED_WATCH_SEC": 100,
    "INTERVAL_SEC": 5,
    "RETRY_COUNT": 3,
    "TIMEOUT": 30000
  },
  "STATE": {
    "watchedCount": 0,
    "dailyTotal": 0,
    "initialContribution": 0,
    "checkCount": 0
  }
};
function log(OQ$QQQ, Q0Q$$O = "INFO") {
  const QQ$OQ = {
    "SUCCESS": "✅",
    "ERROR": "❌",
    "WARN": "⚠️",
    "INFO": "ℹ️",
    "CHECK": "🔍"
  };
  const Q000Q0Q = QQ$OQ[Q0Q$$O] || "ℹ️";
  console.log("[" + Q000Q0Q + " " + Q0Q$$O + "] " + OQ$QQQ);
}
function loadEnvironment() {
  const $0$$O$ = process.env.ZXSH || "";
  if (!$0$$O$) {
    log("请在青龙环境变量添加ZXSH，格式：Authorization令牌#完整User-Agent", "ERROR");
    process.exit(1);
  }
  const [Q$$$0Q, QOQ0000] = $0$$O$.split("#");
  if (!Q$$$0Q || !QOQ0000) {
    log("ZXSH格式错误！需用#分隔Authorization和完整User-Agent", "ERROR");
    process.exit(1);
  }
  function $0O$O$(O$OQ$Q) {
    const Q0O$$ = O$OQ$Q.match(/GZHealth\/(\d+\.\d+\.\d+)/);
    const Q$OOO0 = O$OQ$Q.match(/(iOS|Android) \d+\.\d+\.\d+/);
    if (!Q0O$$) throw new Error("从UA提取APP版本失败，请检查UA：" + O$OQ$Q);
    if (!Q$OOO0) throw new Error("从UA提取设备平台失败，请检查UA：" + O$OQ$Q);
    return {
      "version": Q0O$$[1],
      "platform": Q$OOO0[1]
    };
  }
  const {
    version,
    platform
  } = $0O$O$(QOQ0000);
  CONFIG.HEADERS = {
    "Host": "gw.yyzqsh.cn",
    "platform": platform,
    "version": version,
    "Authorization": Q$$$0Q,
    "User-Agent": QOQ0000,
    "Content-Type": "application/json",
    "Accept": "*/*",
    "Accept-Language": "zh-Hans-CN;q=1.0, ja-CN;q=0.9, en-GB;q=0.8"
  };
  log("环境加载成功：" + platform + " | APP版本：" + version + " | 时长模式：" + CONFIG.TASK.WATCH_DURATION_MODE + " | 固定时长：" + CONFIG.TASK.FIXED_WATCH_SEC + "秒", "SUCCESS");
}
loadEnvironment();
async function requestWithRetry(O0QO00, O$$$Q0 = "POST", $$OOO0 = {}) {
  let QOOQQ$ = CONFIG.TASK.RETRY_COUNT;
  while (QOOQQ$ >= 0) {
    try {
      const Q$Q$O = await axios({
        "url": O0QO00,
        "method": O$$$Q0,
        "headers": CONFIG.HEADERS,
        "data": O$$$Q0 === "POST" ? $$OOO0 : undefined,
        "timeout": CONFIG.TASK.TIMEOUT
      });
      if (Q$Q$O.data.success && Q$Q$O.data.code === 200) {
        return Q$Q$O.data.result;
      }
      throw new Error("接口异常：" + (Q$Q$O.data.message || "未知错误"));
    } catch (Q0$000) {
      if (QOOQQ$ === 0) throw new Error("请求失败（已重试" + CONFIG.TASK.RETRY_COUNT + "次）：" + Q0$000.message);
      const QQ00$Q = (CONFIG.TASK.RETRY_COUNT - QOOQQ$ + 1) * 5;
      log("请求失败（剩余" + QOOQQ$ + "次），" + QQ00$Q + "秒后重试", "ERROR");
      await new Promise(OQO$00 => setTimeout(OQO$00, QQ00$Q * 1000));
      QOOQQ$--;
    }
  }
}
async function fixedWait() {
  log("等待" + CONFIG.TASK.INTERVAL_SEC + "秒后继续...", "INFO");
  await new Promise(O000 => setTimeout(O000, CONFIG.TASK.INTERVAL_SEC * 1000));
}
async function dynamicCheckSecondLine() {
  CONFIG.STATE.checkCount++;
  log("执行第" + CONFIG.STATE.checkCount + "次第二行注册链接动态检测...", "CHECK");
  checkSecondLine();
}
async function autoDetectDailyCount() {
  log("自动检测今日广告任务数量...", "CHECK");
  const Q0OQQO0 = await requestWithRetry(CONFIG.API.MEMBER_CENTER, "POST", {});
  CONFIG.STATE.watchedCount = Q0OQQO0.watchedVideoCount;
  CONFIG.STATE.dailyTotal = Q0OQQO0.videoCount;
  CONFIG.STATE.initialContribution = Q0OQQO0.contribution;
  log("=== 今日任务信息 ===", "CHECK");
  log("每日需看：" + CONFIG.STATE.dailyTotal + "个 | 已看：" + CONFIG.STATE.watchedCount + "个 | 剩余：" + (CONFIG.STATE.dailyTotal - CONFIG.STATE.watchedCount) + "个");
  log("当前环境：" + CONFIG.HEADERS.platform + " | APP版本：" + CONFIG.HEADERS.version + " | 时长模式：" + CONFIG.TASK.WATCH_DURATION_MODE + " | 固定时长：" + CONFIG.TASK.FIXED_WATCH_SEC + "秒");
  if (Q0OQQO0.unlockTaskState !== 1) throw new Error("任务状态异常（非进行中），停止执行");
  if (CONFIG.STATE.watchedCount >= CONFIG.STATE.dailyTotal) {
    log("🎉 今日任务已完成（" + CONFIG.STATE.dailyTotal + "个），无需执行", "SUCCESS");
    process.exit(0);
  }
}
async function getAndPlayAd() {
  log("获取广告并播放...", "INFO");
  const QOOOQ$ = await requestWithRetry(CONFIG.API.GET_AD, "POST", "");
  log("广告信息：ID=" + QOOOQ$.id + " | 描述=" + QOOOQ$.description, "SUCCESS");
  if (!QOOOQ$.videoUrl) throw new Error("无广告视频地址，跳过该广告");
  const {
    exec
  } = require("child_process");
  const $$$QO0 = process.platform === "linux" ? "xdg-open" : "open";
  const Q$0OO$ = exec($$$QO0 + " \"" + QOOOQ$.videoUrl + "\"");
  const O0$0OQ = CONFIG.TASK.FIXED_WATCH_SEC;
  log("fixed模式：固定观看" + O0$0OQ + "秒", "INFO");
  await new Promise(OQO$0O => setTimeout(OQO$0O, O0$0OQ * 1000));
  Q$0OO$.kill();
  log("广告播放完成", "SUCCESS");
  return QOOOQ$;
}
async function receiveWelfare(O$$QO$) {
  log("领取福利（videoId=" + O$$QO$ + "）...", "INFO");
  const Q$$OQO = CONFIG.API.RECEIVE_WELFARE + "?videoId=" + O$$QO$;
  const OQOQOQO = await requestWithRetry(Q$$OQO, "POST", "");
  log("福利领取成功：贡献值+" + OQOQOQO.receiveContribution + " | 订单号=" + OQOQOQO.orderSn, "SUCCESS");
}
async function checkProfit() {
  log("校验收益到账情况...", "CHECK");
  const Q$$0O$ = await requestWithRetry(CONFIG.API.MEMBER_CENTER, "POST", {});
  const OQO00Q0 = (Q$$0O$.contribution - CONFIG.STATE.initialContribution).toFixed(2);
  log("贡献值变化：" + CONFIG.STATE.initialContribution + " → " + Q$$0O$.contribution + "（+" + OQO00Q0 + "）", "CHECK");
  CONFIG.STATE.initialContribution = Q$$0O$.contribution;
  if (OQO00Q0 <= 0) log("⚠️  未检测到收益新增，请注意到账情况", "WARN");
}
async function runFullTask() {
  try {
    await autoDetectDailyCount();
    const QQQO$$ = CONFIG.STATE.dailyTotal - CONFIG.STATE.watchedCount;
    for (let O0O$Q = 0; O0O$Q < QQQO$$; O0O$Q++) {
      const Q000OO = CONFIG.STATE.watchedCount + O0O$Q + 1;
      log("\n===== 执行第" + Q000OO + "/" + CONFIG.STATE.dailyTotal + "个广告 =====", "INFO");
      try {
        const $O0Q$$ = await getAndPlayAd();
        await receiveWelfare($O0Q$$.id);
        await checkProfit();
        log("===== 第" + Q000OO + "个广告完成 =====", "SUCCESS");
        dynamicCheckSecondLine();
        if (Q000OO < CONFIG.STATE.dailyTotal) await fixedWait();
      } catch ($$Q0OO) {
        log("第" + Q000OO + "个广告失败：" + $$Q0OO.message, "ERROR");
        if (Q000OO < CONFIG.STATE.dailyTotal) await fixedWait();
      }
    }
    log("\n🎉 今日" + CONFIG.STATE.dailyTotal + "个广告任务全部完成！", "SUCCESS");
    const Q00$0$ = await requestWithRetry(CONFIG.API.MEMBER_CENTER, "POST", {});
    log("最终贡献值：" + Q00$0$.contribution + "（今日总新增：" + (Q00$0$.contribution - CONFIG.STATE.initialContribution).toFixed(2) + "）", "CHECK");
  } catch ($QO0Q$) {
    log("\n❌ 任务全局失败：" + $QO0Q$.message, "ERROR");
  } finally {
    log("\n任务结束，退出脚本", "INFO");
    process.exit(0);
  }
}
runFullTask();
OＯ0$ = "jsjiami.com.v6";