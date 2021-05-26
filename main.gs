var channelToken = "";

var bitly_token = "";
var bitly_group_guid = "";

var quickReplyText = {
  'items': [
    {
      'type': 'action',
      'action': {
        'type': 'postback',
        'label': '自我介紹',
        'data': 'action=selfIntroduction'
      }
    },
    {
      'type': 'action',
      'action': {
        'type': 'postback',
        'label': '我做過的專案',
        'data': 'action=project'
      }
    },
    {
      'type': 'action',
      'action': {
        'type': 'postback',
        'label': '看看我與Line的邂逅',
        'data': 'action=withLine'
      }
    },
    {
      'type': 'action',
      'action': {
        'type': 'postback',
        'label': '我的語言能力',
        'data': 'action=language'
      }
    },
    {
      'type': 'action',
      'action': {
        'type': 'message',
        'label': '縮址功能',
        'text': '縮址教學'
      }
    },
    {
      'type': 'action',
      'action': {
        'type': 'uri',
        'label': '我的 Github',
        'uri': 'https://github.com/narihira2000'
      }
    },
  ]
};
var startText = [{
  'type': 'flex',
  'altText': 'profile flex message',
  'contents': {
    "type": "carousel",
    "contents": [
      {
        "type": "bubble",
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "image",
              "url": "https://i.imgur.com/toJBB0H.jpg",
              "size": "full",
              "aspectMode": "cover",
              "aspectRatio": "2:3",
              "gravity": "top"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": "楊子毅",
                      "size": "xl",
                      "color": "#ffffff",
                      "weight": "bold"
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "contents": [
                    {
                      "type": "text",
                      "text": "國立台灣科技大學\n資工系 大四",
                      "color": "#ebebeb",
                      "size": "sm",
                      "flex": 0,
                      "wrap": true
                    }
                  ],
                  "spacing": "lg"
                }
              ],
              "position": "absolute",
              "offsetBottom": "0px",
              "offsetStart": "0px",
              "offsetEnd": "0px",
              "backgroundColor": "#03303Acc",
              "paddingAll": "20px",
              "paddingTop": "18px"
            }
          ],
          "paddingAll": "0px"
        }
      }
    ]
  }
},
{
  'type': 'text',
  'text': "哈囉!!歡迎加我為好友!\n這是一個關於楊子毅的自我介紹Bot，您可以點擊下面的泡泡來對我進行更深入的了解喔:D"
},
{
  'type': 'sticker',
  'packageId': '789',
  'stickerId': '10855',
  'quickReply': quickReplyText
}];
var selfIntroductionText = [{
  'type': 'text',
  'text': "我是目前就讀於台灣科技大學資訊工程系大四的楊子毅，我認為我是一個會樂觀看待人生，積極面對事物的人，每當我遇到困難時，不會馬上放棄，而是換位去思考其他可能性，找出其他解以達成目標，這成為我個性的優點，不過，有時會為了追求完美，而過度鑽研於一項事物，使同學容易認為我吹毛求疵，這是我個性的缺點。"
},
{
  'type': 'text',
  'text': "關於專業領域的部分，我不僅主修資訊工程系，更雙主修資訊管理系，為的就是多方學習，開拓視野，且在資管系中學到了更多與他人和諧團隊合作的技能，也提升了我的溝通能力，讓我在專題中擔任PM職位時能夠更得心應手的與組員合作。",
  'quickReply': quickReplyText
},
{
  'type': 'text',
  'text': "而除了大學的專業課程外，我也熱衷於參加各種與資訊相關的交流活動，例如Facebook Developer Circles、LINE Developer Meetup、SITCON、COSCUP等社群活動，透過參與此類活動，聆聽講者講解各種不同專業領域的技術，來加深、加廣自己的見聞，也可以藉此獲取第一手的科技新知，了解業界真實情況，提早與之接軌，讓我能夠更清楚的知道目前產業的動向，也使自己可以更加了解未來想走的領域。",
  'quickReply': quickReplyText
}];
var withLineText = [{
  'type': 'text',
  'text': "我與LINE最初的邂逅是在LINE Developer Meetup #3，當時透過朋友得知此活動，在參加後收穫甚大，得知許多LINE的新技術與功能，例如Chatbot應用、LIFF、LINE Beacon、LINE Notify等等，讓我對LINE的多樣性肅然起敬，也因為有提早認識這些技術，讓我在後續接觸LINE Messaging API時可以更快上手。"
},
{
  'type': 'text',
  'text': "正式接觸LINE API是在今年2月，在開發一個公仔情報推播機器人時，為了服務到更多使用者而研究起LINE Messaging API與LINE Notify API，也在後續在LINE版本開發出關鍵字推播與黑名單等功能。"
},
{
  'type': 'text',
  'text': "而在實習期間，期望自己能夠在LINE學習到更多新技術，或是協助參與開發各種Project，為LINE做出微薄的貢獻，也讓自己的經歷更加豐富。",
  'quickReply': quickReplyText
}];
var projectText = message = [{
  'type': 'text',
  'text': '以下是我寫過的專案~~'
},
{
  'type': 'flex',
  'altText': '專案 flex message',
  'quickReply': quickReplyText,
  'contents': {
    "type": "carousel",
    "contents": [
      {
        "type": "bubble",
        "size": "kilo",
        "hero": {
          "type": "image",
          "url": "https://i.imgur.com/0dlIUcd.png",
          "size": "full",
          "aspectMode": "cover",
          "aspectRatio": "320:320"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "校園公佈欄推播系統",
              "weight": "bold",
              "size": "md",
              "wrap": true
            },
            {
              "type": "text",
              "text": "Line Bot & Line Notify",
              "size": "sm",
              "color": "#8c8c8c",
              "margin": "none"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "利用 Google App Script 將學校的公佈欄資訊推播給同學",
                      "wrap": true,
                      "color": "#595959",
                      "size": "sm",
                      "flex": 5
                    }
                  ]
                },
                {
                  "type": "separator",
                  "color": "#bdbdbd",
                  "margin": "md"
                },
                {
                  "type": "text",
                  "text": "850+ Users in LINE, \n150+ Users in Telegram",
                  "margin": "md",
                  "size": "sm",
                  "color": "#8c8c8c",
                  "wrap": true
                }
              ],
              "margin": "md"
            }
          ],
          "spacing": "sm",
          "paddingAll": "13px"
        },
        "footer": {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "button",
              "action": {
                "type": "uri",
                "label": "Github",
                "uri": "https://github.com/narihira2000/GAS-NTUST-bulletin"
              }
            },
            {
              "type": "button",
              "action": {
                "type": "uri",
                "label": "Try It!",
                "uri": "https://page.line.me/983txppi"
              }
            }
          ]
        }
      },
      {
        "type": "bubble",
        "size": "kilo",
        "hero": {
          "type": "image",
          "size": "full",
          "aspectMode": "cover",
          "aspectRatio": "320:320",
          "url": "https://i.imgur.com/xPgIGrU.png"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "模型情報推播機器人",
              "weight": "bold",
              "size": "md",
              "wrap": true
            },
            {
              "type": "text",
              "text": "Line Bot & Line Notify",
              "size": "sm",
              "color": "#8c8c8c",
              "margin": "none"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "利用 Google App Script 將模型情報推播給使用者\n並提供訂閱關鍵字及黑名單功能",
                      "wrap": true,
                      "color": "#595959",
                      "size": "sm",
                      "flex": 5
                    }
                  ]
                },
                {
                  "type": "separator",
                  "color": "#bdbdbd",
                  "margin": "md"
                },
                {
                  "type": "text",
                  "text": "200+ Users in LINE, \n60+ Users in Telegram",
                  "margin": "md",
                  "size": "sm",
                  "color": "#8c8c8c",
                  "wrap": true
                }
              ],
              "spacing": "md"
            }
          ],
          "spacing": "sm",
          "paddingAll": "13px"
        },
        "footer": {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "button",
              "action": {
                "type": "uri",
                "label": "Github",
                "uri": "https://github.com/narihira2000/GAS-Hpoi-Info-Bot"
              }
            },
            {
              "type": "button",
              "action": {
                "type": "uri",
                "label": "Try It!",
                "uri": "https://page.line.me/777pjgfs"
              }
            }
          ]
        }
      },
      {
        "type": "bubble",
        "size": "kilo",
        "hero": {
          "type": "image",
          "url": "https://i.imgur.com/Y3vcstE.png",
          "size": "full",
          "aspectMode": "cover",
          "aspectRatio": "320:320"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "校園線上點餐 App",
              "weight": "bold",
              "size": "md",
              "wrap": true
            },
            {
              "type": "text",
              "text": "React Native",
              "size": "sm",
              "color": "#8c8c8c",
              "margin": "none"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "使用 React Native 做出校園點餐App\n並實際與校園餐廳合作營運中",
                      "wrap": true,
                      "color": "#595959",
                      "size": "sm",
                      "flex": 5
                    }
                  ]
                },
                {
                  "type": "separator",
                  "color": "#bdbdbd",
                  "margin": "md"
                },
                {
                  "type": "text",
                  "margin": "md",
                  "size": "sm",
                  "color": "#8c8c8c",
                  "wrap": true,
                  "text": "在團隊中擔任PM與前端開發職位\n同時處理 Store 上架事宜"
                }
              ],
              "margin": "md"
            }
          ],
          "spacing": "sm",
          "paddingAll": "13px"
        },
        "footer": {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "button",
              "action": {
                "type": "uri",
                "label": "下載",
                "uri": "https://hungryntust.page.link/app"
              }
            },
            {
              "type": "button",
              "action": {
                "type": "uri",
                "label": "介紹文",
                "uri": "https://www.facebook.com/permalink.php?story_fbid=116273407022414&id=101344165182005"
              }
            }
          ]
        }
      },
      {
        "type": "bubble",
        "size": "kilo",
        "hero": {
          "type": "image",
          "url": "https://i.imgur.com/hUaISU7.jpg",
          "size": "full",
          "aspectMode": "fit",
          "aspectRatio": "320:320"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "動畫瘋爬蟲",
              "weight": "bold",
              "size": "md",
              "wrap": true
            },
            {
              "type": "text",
              "text": "Python",
              "size": "sm",
              "color": "#8c8c8c",
              "margin": "none"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "透過 python 爬蟲爬取巴哈姆特動畫瘋的動畫資訊",
                      "wrap": true,
                      "color": "#595959",
                      "size": "sm",
                      "flex": 5
                    }
                  ]
                }
              ],
              "spacing": "md"
            }
          ],
          "spacing": "sm",
          "paddingAll": "13px"
        },
        "footer": {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "button",
              "action": {
                "type": "uri",
                "label": "Github",
                "uri": "https://github.com/narihira2000/Bahamut-Anime-Info"
              }
            }
          ]
        }
      },
      {
        "type": "bubble",
        "size": "kilo",
        "hero": {
          "type": "image",
          "url": "https://camo.githubusercontent.com/6e7a363e640959596257e8cb89e66b95ed9296546c2b2b02395bc541b29b768e/68747470733a2f2f696d6775722e636f6d2f704766474930592e676966",
          "size": "full",
          "aspectMode": "fit",
          "aspectRatio": "320:320"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "少女歌劇鬧鐘 App",
              "weight": "bold",
              "size": "md",
              "wrap": true
            },
            {
              "type": "text",
              "text": "Android App",
              "size": "sm",
              "color": "#8c8c8c",
              "margin": "none"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "仿照動畫中出現的 App 將其實作出來，並加上鬧鐘功能",
                      "wrap": true,
                      "color": "#595959",
                      "size": "sm",
                      "flex": 5
                    }
                  ]
                },
                {
                  "type": "separator",
                  "color": "#bdbdbd",
                  "margin": "md"
                },
                {
                  "type": "text",
                  "margin": "md",
                  "size": "sm",
                  "color": "#8c8c8c",
                  "wrap": true,
                  "text": "從 Firebase 後台看好像被傳播到很多國家\n發布以來有1600+ Users"
                }
              ]
            }
          ],
          "spacing": "sm",
          "paddingAll": "13px"
        },
        "footer": {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "button",
              "action": {
                "type": "uri",
                "label": "Github",
                "uri": "https://github.com/narihira2000/shoujo-kageki-alarm"
              }
            },
            {
              "type": "button",
              "action": {
                "type": "uri",
                "label": "介紹文",
                "uri": "https://forum.gamer.com.tw/Co.php?bsn=60037&sn=975715"
              }
            }
          ]
        }
      },
      {
        "type": "bubble",
        "size": "kilo",
        "hero": {
          "type": "image",
          "url": "https://i.imgur.com/SNUuzYs.png",
          "size": "full",
          "aspectMode": "fit",
          "aspectRatio": "320:320"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "KKTV 字幕樣式調整",
              "weight": "bold",
              "size": "md",
              "wrap": true
            },
            {
              "type": "text",
              "text": "CSS & Stylus",
              "size": "sm",
              "color": "#8c8c8c",
              "margin": "none"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "調整 KKTV 中雙字幕的表現，\n提升觀影體驗",
                      "wrap": true,
                      "color": "#595959",
                      "size": "sm",
                      "flex": 5
                    }
                  ]
                }
              ]
            }
          ],
          "spacing": "sm",
          "paddingAll": "13px"
        },
        "footer": {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "button",
              "action": {
                "type": "uri",
                "label": "Gist",
                "uri": "https://gist.github.com/narihira2000/1992ab0b6202d9f1b6279bc43d30375e"
              }
            },
            {
              "type": "button",
              "action": {
                "type": "uri",
                "label": "介紹文",
                "uri": "https://www.ptt.cc/bbs/Japandrama/M.1600181605.A.172.html"
              }
            }
          ]
        }
      }
    ]
  }
}];
var languageText = [{
  'type': 'text',
  'text': '以下是我的語言能力'
},
{
  'type': 'flex',
  'altText': '語言能力 flex message',
  'quickReply': quickReplyText,
  'contents': {
    "type": "carousel",
    "contents": [
      {
        "type": "bubble",
        "size": "nano",
        "header": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "TOEIC",
              "color": "#4a4a4a",
              "align": "start",
              "size": "md",
              "gravity": "center"
            },
            {
              "type": "text",
              "text": "865分",
              "color": "#4a4a4a",
              "align": "start",
              "size": "sm",
              "gravity": "center",
              "margin": "lg"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "filler"
                    }
                  ],
                  "width": "87%",
                  "backgroundColor": "#ffd000",
                  "height": "6px"
                }
              ],
              "backgroundColor": "#ffe880",
              "height": "6px",
              "margin": "sm"
            }
          ],
          "backgroundColor": "#fffbd4",
          "paddingTop": "19px",
          "paddingAll": "12px",
          "paddingBottom": "16px"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "text",
                  "text": "通過時間:\n2021.04",
                  "color": "#8C8C8C",
                  "size": "sm",
                  "wrap": true
                }
              ],
              "flex": 1
            }
          ],
          "spacing": "md",
          "paddingAll": "12px"
        },
        "styles": {
          "footer": {
            "separator": false
          }
        }
      },
      {
        "type": "bubble",
        "size": "nano",
        "header": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "JLPT N1",
              "color": "#4a4a4a",
              "align": "start",
              "size": "md",
              "gravity": "center"
            },
            {
              "type": "text",
              "text": "通過",
              "color": "#4a4a4a",
              "align": "start",
              "size": "xs",
              "gravity": "center",
              "margin": "lg"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "filler"
                    }
                  ],
                  "width": "100%",
                  "backgroundColor": "#548fff",
                  "height": "6px"
                }
              ],
              "backgroundColor": "#80acff",
              "height": "6px",
              "margin": "sm"
            }
          ],
          "backgroundColor": "#e3f1ff",
          "paddingTop": "19px",
          "paddingAll": "12px",
          "paddingBottom": "16px"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "text",
                  "text": "通過時間:\n2020.12",
                  "color": "#8C8C8C",
                  "size": "sm",
                  "wrap": true
                }
              ],
              "flex": 1
            }
          ],
          "spacing": "md",
          "paddingAll": "12px"
        },
        "styles": {
          "footer": {
            "separator": false
          }
        }
      }
    ]
  }
}];
var instructionText = [{
  'type': 'text',
  'text': "基本上透過下面的泡泡就可以進行操作了\n\n另外這個機器人也有提供縮網址的服務喔!!\n用法為輸入「縮 <網址>」\n\n例如: 縮 https://google.com\n\n即可獲得縮網址囉",
  'quickReply': quickReplyText
}];
var shortenInstructionText = [{
  'type': 'text',
  'text': "這個機器人也有提供縮網址的服務喔!!\n用法為輸入「縮 <網址>」\n\n例如: 縮 https://google.com\n\n即可獲得縮網址囉",
  'quickReply': quickReplyText
}];
var defaultText = [{
  'type': 'text',
  'text': "請輸入「開始」或點擊下面的泡泡來進行更進一步的操作哦!\n也可以輸入「指令」查看指令列表",
  'quickReply': quickReplyText
}];

function getBitlyUrl(longUrl) {
  var apiUrl = "https://api-ssl.bitly.com/v4/shorten";
  const request_body = {
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + bitly_token,
    },
    'method': 'post',
    'payload': JSON.stringify({
      "group_guid": bitly_group_guid,
      "domain": "bit.ly",
      "long_url": longUrl
    })
  }
  var res = UrlFetchApp.fetch(apiUrl, request_body);
  if (res.getResponseCode() === 200) {
    var data = JSON.parse(res.getContentText());
    console.log(data.link);
    return data.link;
  }
  else {
    var res = UrlFetchApp.fetch(apiUrl, request_body);
    if (res.getResponseCode() === 200) {
      var data = JSON.parse(res.getContentText());
      console.log(data.link);
      return data.link;
    }
    return longUrl;
  }
}

function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!pattern.test(str);
}

function replyMsg(replyToken, userMessage) {

  userMessage = userMessage.trim();
  var ins = userMessage.split(/\s+/);

  var replyText = "123";
  var message = [];

  if (ins[0].includes("開始") || ins[0].includes("開始使用")) {
    message = startText;
  }
  else if (ins[0].includes("自我介紹")) {
    message = selfIntroductionText;
  }
  else if (ins[0].includes("關於我和Line")) {
    message = withLineText;
  }
  else if (ins[0].includes("專案") || ins[0].includes("project") || ins[0].includes("專題")) {
    message = projectText;
  }
  else if (ins[0].includes("語言") || ins[0].includes("英文") || ins[0].includes("日文")) {
    message = languageText;
  }
  else if (ins[0] === "縮") {
    if (ins.length > 1) {
      var arr = ins.slice(1);
      if (validURL(arr[0])) {
        var result = getBitlyUrl(arr[0]);
        replyText = result;
        if (result === arr[0]) {
          replyText = "目前縮網址服務不可用，請稍後再試";
        }
      }
      else {
        replyText = "請輸入網址";
      }
    }
    else {
      replyText = "縮網址資料為空，請在「縮」後面加上空格並貼上網址，或輸入「縮址教學」得到更詳細的說明";
    }
    message = [{
      'type': 'text',
      'text': replyText,
      'quickReply': quickReplyText
    }];
  }
  else if (ins[0].includes("指令")) {
    message = instructionText;
  }
  else if (ins[0].includes("縮址教學")) {
    message = shortenInstructionText;
  }
  else {
    message = defaultText;
  }

  var url = 'https://api.line.me/v2/bot/message/reply';
  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + channelToken,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replyToken,
      'messages': message
    }),
  });
}

function first_join(replyToken, type) {
  var url = 'https://api.line.me/v2/bot/message/reply';
  var message = startText;

  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + channelToken,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replyToken,
      'messages': message
    },
    )
  });
}

function postback_reply(replyToken, data) {
  var message = "";

  var action = data.split("=")[1];
  switch (action) {
    case ("selfIntroduction"):
      message = selfIntroductionText;
      break;
    case ("project"):
      message = projectText;
      break;
    case ("withLine"):
      message = withLineText;
      break;
    case ("language"):
      message = languageText;
      break;
    default:
      message = defaultText;
      break;
  }

  var url = 'https://api.line.me/v2/bot/message/reply';

  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + channelToken,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replyToken,
      'messages': message
    },
    )
  });
}

function doGet(e) {
  return ContentService.createTextOutput("hello!");
}

function doPost(e) {
  var msg = JSON.parse(e.postData.contents);

  var replyToken = msg.events[0].replyToken;
  var type = msg.events[0].type;
  if (type.includes("follow")) {
    Utilities.sleep(500);
    first_join(replyToken, type);
    return;
  }
  else if (type.includes("postback")) {
    Utilities.sleep(500);
    var data = msg.events[0].postback.data;
    postback_reply(replyToken, data);
  }
  var userMessage = msg.events[0].message.text;

  if (typeof replyToken === 'undefined') {
    return;
  }

  replyMsg(replyToken, userMessage);

}
