(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{295:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"rewards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rewards","aria-hidden":"true"}},[t._v("#")]),t._v(" Rewards")]),t._v(" "),a("p",[a("strong",[t._v("支持的调用方式:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("JSON-RPC 2.0")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Websocket")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("IPC")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Publish–subscribe")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("TBD")])])])]),t._v(" "),a("h2",{attrs:{id:"rewards-gettotalrewards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rewards-gettotalrewards","aria-hidden":"true"}},[t._v("#")]),t._v(" rewards_getTotalRewards")]),t._v(" "),a("p",[t._v("根据抵押的交易ID查询获得的空投gas总量")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Parameters")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("string")]),t._v(":  抵押的交易ID")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Returns")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("uint64")]),t._v(": 获得的空投总量")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Example")]),t._v(":")])])]),t._v(" "),a("demo",{staticClass:"custom-block-demo"},[a("template",{slot:"code"},[t._v('[{"type":"fence","tag":"code","attrs":null,"map":[21,33],"nesting":0,"level":1,"children":null,"content":"{\\n\\t\\"jsonrpc\\": \\"2.0\\",\\n\\t\\"id\\": 1,\\n\\t\\"method\\": \\"rewards_getTotalRewards\\",\\n\\t\\"params\\": [\\n        \\"04223e8259cf00b84cfe31ef895073a4154ac88c66c43efa977b9c8c714fbeda\\"\\n\\t]\\n}","markup":"```","info":"json tab:Request","meta":null,"block":true,"hidden":false},{"type":"fence","tag":"code","attrs":null,"map":[34,43],"nesting":0,"level":1,"children":null,"content":"{\\n  \\"jsonrpc\\": \\"2.0\\",\\n  \\"id\\": 1,\\n  \\"result\\": 14000000000\\n}","markup":"```","info":"json tab:Response","meta":null,"block":true,"hidden":false},{"type":"fence","tag":"code","attrs":null,"map":[44,55],"nesting":0,"level":1,"children":null,"content":"{\\n\\t\\"jsonrpc\\": \\"2.0\\",\\n\\t\\"id\\": 1,\\n\\t\\"method\\": \\"rewards_getTotalRewards\\",\\n\\t\\"params\\": [\\n\\t]\\n}","markup":"```","info":"json test","meta":null,"block":true,"hidden":false}]')]),t._v(" "),a("div",{staticClass:"language-json tab:Request extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rewards_getTotalRewards"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"04223e8259cf00b84cfe31ef895073a4154ac88c66c43efa977b9c8c714fbeda"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),a("div",{staticClass:"language-json tab:Response extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14000000000")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),a("div",{staticClass:"language-json test extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rewards_getTotalRewards"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])])],2),t._v(" "),a("h2",{attrs:{id:"rewards-getconfidantrewords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rewards-getconfidantrewords","aria-hidden":"true"}},[t._v("#")]),t._v(" rewards_getConfidantRewords")]),t._v(" "),a("p",[t._v("根据confidant地址查询获得的空投总量")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Parameters")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("string")]),t._v(": confidant地址")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Returns")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("map[string]uint64")]),t._v(": 各个设备获得的空投总量\n"),a("ul",[a("li",[a("code",[t._v("key")]),t._v(": 设备ID的hash")]),t._v(" "),a("li",[a("code",[t._v("value")]),t._v(": 获得的空投量")])])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Example")]),t._v(":")])])]),t._v(" "),a("demo",{staticClass:"custom-block-demo"},[a("template",{slot:"code"},[t._v('[{"type":"fence","tag":"code","attrs":null,"map":[77,89],"nesting":0,"level":1,"children":null,"content":"{\\n\\t\\"jsonrpc\\": \\"2.0\\",\\n\\t\\"id\\": 1,\\n\\t\\"method\\": \\"rewards_getConfidantRewords\\",\\n\\t\\"params\\": [\\n        \\"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4\\"\\n\\t]\\n}","markup":"```","info":"json tab:Request","meta":null,"block":true,"hidden":false},{"type":"fence","tag":"code","attrs":null,"map":[90,102],"nesting":0,"level":1,"children":null,"content":"{\\n\\t\\"jsonrpc\\": \\"2.0\\",\\n\\t\\"id\\": 3,\\n\\t\\"result\\": {\\n\\t\\t\\"657b75d793dbb31d8db4716e53590e54712ac235afd33b9cd1711333e094c101\\": 10000000,\\n\\t\\t\\"31774e65e074922542fa76f0980e6a55437ea44dfa573812d2d247e380f575ee\\": 20000000\\n\\t}\\n}","markup":"```","info":"json tab:Response","meta":null,"block":true,"hidden":false},{"type":"fence","tag":"code","attrs":null,"map":[103,114],"nesting":0,"level":1,"children":null,"content":"{\\n\\t\\"jsonrpc\\": \\"2.0\\",\\n\\t\\"id\\": 1,\\n\\t\\"method\\": \\"rewards_getConfidantRewords\\",\\n\\t\\"params\\": [\\n\\t]\\n}","markup":"```","info":"json test","meta":null,"block":true,"hidden":false}]')]),t._v(" "),a("div",{staticClass:"language-json tab:Request extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rewards_getConfidantRewords"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qlc_3hw8s1zubhxsykfsq5x7kh6eyibas9j3ga86ixd7pnqwes1cmt9mqqrngap4"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),a("div",{staticClass:"language-json tab:Response extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"657b75d793dbb31d8db4716e53590e54712ac235afd33b9cd1711333e094c101"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"31774e65e074922542fa76f0980e6a55437ea44dfa573812d2d247e380f575ee"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20000000")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),a("div",{staticClass:"language-json test extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rewards_getConfidantRewords"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])])],2)],1)},[],!1,null,null,null);s.default=n.exports}}]);