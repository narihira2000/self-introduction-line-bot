# self-introduction-line-bot
一個架在 Google App Script 上的自我介紹互動式Line bot，附加縮網址服務

## 機器人網址
- [Line](https://page.line.me/452zmjeo)

## 簡易說明
- 基本上使用 Bot 下面的泡泡就可以進行各項操作，但也可以用打字的方式來觸發機器人回應
- 因為泡泡幾乎都是使用 postback 的方式，所以點擊後要等一下才有回應
- 實作上使用了`flex message, actions, text`等東西，並且有偵測`webhook follow event`來傳送歡迎訊息
- 另外提供縮網址的服務，輸入「縮 `網址`」即可獲得縮網址
> 例如: `縮 https://google.com`
