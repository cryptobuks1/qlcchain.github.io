(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{331:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"util"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#util"}},[t._v("#")]),t._v(" Util")]),t._v(" "),a("p",[a("strong",[t._v("Supported protocols:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("JSON-RPC 2.0")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Websocket")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("IPC")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Publish–subscribe")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("TBD")])])])]),t._v(" "),a("h2",{attrs:{id:"util-decrypt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#util-decrypt"}},[t._v("#")]),t._v(" util_decrypt")]),t._v(" "),a("p",[t._v("Decrypt the cryptograph string by passphrase")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Parameters")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("string")]),t._v("  : cryptograph, encoded by base64")]),t._v(" "),a("li",[a("code",[t._v("string")]),t._v("  : passphrase")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Returns")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("string")]),t._v("  : raw data")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Example")]),t._v(":")])])]),t._v(" "),a("demo",{staticClass:"custom-block-demo"},[a("template",{slot:"code"},[t._v('[{"type":"fence","tag":"code","attrs":null,"map":[23,36],"nesting":0,"level":1,"children":null,"content":"{\\n\\t\\"jsonrpc\\": \\"2.0\\",\\n\\t\\"id\\": 1,\\n\\t\\"method\\": \\"util_decrypt\\",\\n\\t\\"params\\": [\\n\\t\\t\\"eyJjcnlwdG8iOnsiY2lwaGVydGV4dCI6ImI3OTkwNmRlOGE0NzYzOTZjZmE2OTM4ZjFmZjMxMTdjMjVlZWVhNDMzNTJiNmM1MTA2MDA2ZGJiODFkN2FhNGY5NWIxMjEzYmE3ZDIzM2MyNTU0NGIyYzg1MDYwNGRjMyIsIm5vbmNlIjoiYzNkMzk1NDdhZGFhMWZlZWZmODBmMWI4Iiwic2NyeXB0cGFyYW1zIjp7Im4iOjI2MjE0NCwiciI6OCwicCI6MSwia2V5bGVuIjozMiwic2FsdCI6ImE0NGJiMmU0MTMxMDYyNTc1NWEyOWVkYzg3NGFmMzFkNTk1M2QzNzQyODMwNDk2YTUyZjdkMjY2ZWYxMzMzMTAifX0sInRpbWVzdGFtcCI6MTU1MzU4ODc5N30=\\",\\n\\t\\t\\"98qUb5Ud\\"\\n\\t]\\n}\\n\\n","markup":"```","info":"json tab:Request","meta":null,"block":true,"hidden":false},{"type":"fence","tag":"code","attrs":null,"map":[37,46],"nesting":0,"level":1,"children":null,"content":"{\\n  \\"jsonrpc\\": \\"2.0\\",\\n  \\"id\\": 1,\\n  \\"result\\": \\"a7bcc2785e93226699618087528c4fbc8990fc247f12743e2a9caea8590756a0\\"\\n}\\n\\n","markup":"```","info":"json tab:Response","meta":null,"block":true,"hidden":false},{"type":"fence","tag":"code","attrs":null,"map":[47,60],"nesting":0,"level":1,"children":null,"content":"{\\n\\t\\"jsonrpc\\": \\"2.0\\",\\n\\t\\"id\\": 1,\\n\\t\\"method\\": \\"util_decrypt\\",\\n\\t\\"params\\": [\\n\\t\\t\\"eyJjcnlwdG8iOnsiY2lwaGVydGV4dCI6ImI3OTkwNmRlOGE0NzYzOTZjZmE2OTM4ZjFmZjMxMTdjMjVlZWVhNDMzNTJiNmM1MTA2MDA2ZGJiODFkN2FhNGY5NWIxMjEzYmE3ZDIzM2MyNTU0NGIyYzg1MDYwNGRjMyIsIm5vbmNlIjoiYzNkMzk1NDdhZGFhMWZlZWZmODBmMWI4Iiwic2NyeXB0cGFyYW1zIjp7Im4iOjI2MjE0NCwiciI6OCwicCI6MSwia2V5bGVuIjozMiwic2FsdCI6ImE0NGJiMmU0MTMxMDYyNTc1NWEyOWVkYzg3NGFmMzFkNTk1M2QzNzQyODMwNDk2YTUyZjdkMjY2ZWYxMzMzMTAifX0sInRpbWVzdGFtcCI6MTU1MzU4ODc5N30=\\",\\n\\t\\t\\"98qUb5Ud\\"\\n\\t]\\n}\\n\\n","markup":"```","info":"json test","meta":null,"block":true,"hidden":false}]')]),t._v(" "),a("div",{staticClass:"language-json tab:Request extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"util_decrypt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJjcnlwdG8iOnsiY2lwaGVydGV4dCI6ImI3OTkwNmRlOGE0NzYzOTZjZmE2OTM4ZjFmZjMxMTdjMjVlZWVhNDMzNTJiNmM1MTA2MDA2ZGJiODFkN2FhNGY5NWIxMjEzYmE3ZDIzM2MyNTU0NGIyYzg1MDYwNGRjMyIsIm5vbmNlIjoiYzNkMzk1NDdhZGFhMWZlZWZmODBmMWI4Iiwic2NyeXB0cGFyYW1zIjp7Im4iOjI2MjE0NCwiciI6OCwicCI6MSwia2V5bGVuIjozMiwic2FsdCI6ImE0NGJiMmU0MTMxMDYyNTc1NWEyOWVkYzg3NGFmMzFkNTk1M2QzNzQyODMwNDk2YTUyZjdkMjY2ZWYxMzMzMTAifX0sInRpbWVzdGFtcCI6MTU1MzU4ODc5N30="')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"98qUb5Ud"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("div",{staticClass:"language-json tab:Response extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a7bcc2785e93226699618087528c4fbc8990fc247f12743e2a9caea8590756a0"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("div",{staticClass:"language-json test extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"util_decrypt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJjcnlwdG8iOnsiY2lwaGVydGV4dCI6ImI3OTkwNmRlOGE0NzYzOTZjZmE2OTM4ZjFmZjMxMTdjMjVlZWVhNDMzNTJiNmM1MTA2MDA2ZGJiODFkN2FhNGY5NWIxMjEzYmE3ZDIzM2MyNTU0NGIyYzg1MDYwNGRjMyIsIm5vbmNlIjoiYzNkMzk1NDdhZGFhMWZlZWZmODBmMWI4Iiwic2NyeXB0cGFyYW1zIjp7Im4iOjI2MjE0NCwiciI6OCwicCI6MSwia2V5bGVuIjozMiwic2FsdCI6ImE0NGJiMmU0MTMxMDYyNTc1NWEyOWVkYzg3NGFmMzFkNTk1M2QzNzQyODMwNDk2YTUyZjdkMjY2ZWYxMzMzMTAifX0sInRpbWVzdGFtcCI6MTU1MzU4ODc5N30="')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"98qUb5Ud"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])],2),t._v(" "),a("h2",{attrs:{id:"util-encrypt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#util-encrypt"}},[t._v("#")]),t._v(" util_encrypt")]),t._v(" "),a("p",[t._v("Encrypt encrypt raw data by passphrase")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Parameters")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("string")]),t._v("  : raw data, need a hex string")]),t._v(" "),a("li",[a("code",[t._v("string")]),t._v("  : passphrase")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Returns")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("string")]),t._v(" :  cryptograph , encoded by base64")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Example")]),t._v(":")])])]),t._v(" "),a("demo",{staticClass:"custom-block-demo"},[a("template",{slot:"code"},[t._v('[{"type":"fence","tag":"code","attrs":null,"map":[77,87],"nesting":0,"level":1,"children":null,"content":"{\\n  \\"jsonrpc\\": \\"2.0\\",\\n  \\"id\\":2,\\n  \\"method\\":\\"util_encrypt\\",\\n  \\"params\\":  [\\"a7bcc2785e93226699618087528c4fbc8990fc247f12743e2a9caea8590756a0\\",\\"98qUb5Ud\\"]\\n}\\n\\n","markup":"```","info":"json tab:Request","meta":null,"block":true,"hidden":false},{"type":"fence","tag":"code","attrs":null,"map":[88,97],"nesting":0,"level":1,"children":null,"content":"{\\n  \\"jsonrpc\\": \\"2.0\\",\\n  \\"id\\": 2,\\n  \\"result\\": \\"eyJjcnlwdG8iOnsiY2lwaGVydGV4dCI6ImI3OTkwNmRlOGE0NzYzOTZjZmE2OTM4ZjFmZjMxMTdjMjVlZWVhNDMzNTJiNmM1MTA2MDA2ZGJiODFkN2FhNGY5NWIxMjEzYmE3ZDIzM2MyNTU0NGIyYzg1MDYwNGRjMyIsIm5vbmNlIjoiYzNkMzk1NDdhZGFhMWZlZWZmODBmMWI4Iiwic2NyeXB0cGFyYW1zIjp7Im4iOjI2MjE0NCwiciI6OCwicCI6MSwia2V5bGVuIjozMiwic2FsdCI6ImE0NGJiMmU0MTMxMDYyNTc1NWEyOWVkYzg3NGFmMzFkNTk1M2QzNzQyODMwNDk2YTUyZjdkMjY2ZWYxMzMzMTAifX0sInRpbWVzdGFtcCI6MTU1MzU4ODc5N30=\\"\\n}\\n\\n","markup":"```","info":"json tab:Response","meta":null,"block":true,"hidden":false},{"type":"fence","tag":"code","attrs":null,"map":[98,108],"nesting":0,"level":1,"children":null,"content":"{\\n  \\"jsonrpc\\": \\"2.0\\",\\n  \\"id\\":2,\\n  \\"method\\":\\"util_encrypt\\",\\n  \\"params\\":  [\\"a7bcc2785e93226699618087528c4fbc8990fc247f12743e2a9caea8590756a0\\",\\"98qUb5Ud\\"]\\n}\\n\\n","markup":"```","info":"json test","meta":null,"block":true,"hidden":false}]')]),t._v(" "),a("div",{staticClass:"language-json tab:Request extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"util_encrypt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a7bcc2785e93226699618087528c4fbc8990fc247f12743e2a9caea8590756a0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"98qUb5Ud"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("div",{staticClass:"language-json tab:Response extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJjcnlwdG8iOnsiY2lwaGVydGV4dCI6ImI3OTkwNmRlOGE0NzYzOTZjZmE2OTM4ZjFmZjMxMTdjMjVlZWVhNDMzNTJiNmM1MTA2MDA2ZGJiODFkN2FhNGY5NWIxMjEzYmE3ZDIzM2MyNTU0NGIyYzg1MDYwNGRjMyIsIm5vbmNlIjoiYzNkMzk1NDdhZGFhMWZlZWZmODBmMWI4Iiwic2NyeXB0cGFyYW1zIjp7Im4iOjI2MjE0NCwiciI6OCwicCI6MSwia2V5bGVuIjozMiwic2FsdCI6ImE0NGJiMmU0MTMxMDYyNTc1NWEyOWVkYzg3NGFmMzFkNTk1M2QzNzQyODMwNDk2YTUyZjdkMjY2ZWYxMzMzMTAifX0sInRpbWVzdGFtcCI6MTU1MzU4ODc5N30="')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("div",{staticClass:"language-json test extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"util_encrypt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a7bcc2785e93226699618087528c4fbc8990fc247f12743e2a9caea8590756a0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"98qUb5Ud"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])],2),t._v(" "),a("h2",{attrs:{id:"util-rawtobalance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#util-rawtobalance"}},[t._v("#")]),t._v(" util_rawToBalance")]),t._v(" "),a("p",[t._v("Return balance by specific unit for raw value")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Parameters")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("string")]),t._v(" : raw value")]),t._v(" "),a("li",[a("code",[t._v("string")]),t._v(" : unit, if token is QLC ,need set  "),a("code",[t._v("qlc")]),t._v(" , "),a("code",[t._v("Kqlc")]),t._v(" , "),a("code",[t._v("QLC")]),t._v("  or  "),a("code",[t._v("MQLC")]),t._v(" , others should set empty string  "),a("code",[t._v('""')])]),t._v(" "),a("li",[a("code",[t._v("string")]),t._v(" :  "),a("code",[t._v("optional")]),t._v(" , token name , if not set , default is QLC")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Returns")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("string")]),t._v(" :  balance for the unit")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Example")]),t._v(":")])])]),t._v(" "),a("demo",{staticClass:"custom-block-demo"},[a("template",{slot:"code"},[t._v('[{"type":"fence","tag":"code","attrs":null,"map":[127,137],"nesting":0,"level":1,"children":null,"content":"{\\n  \\"jsonrpc\\": \\"2.0\\",\\n  \\"id\\":1,\\n  \\"method\\":\\"util_rawToBalance\\",\\n  \\"params\\":  [\\"200000000\\",\\"QLC\\"]\\n}\\n\\n","markup":"```","info":"json tab:Request","meta":null,"block":true,"hidden":false},{"type":"fence","tag":"code","attrs":null,"map":[138,147],"nesting":0,"level":1,"children":null,"content":"{\\n  \\"jsonrpc\\": \\"2.0\\",\\n  \\"id\\": 1,\\n  \\"result\\": \\"2\\"\\n}\\n\\n","markup":"```","info":"json tab:Response","meta":null,"block":true,"hidden":false},{"type":"fence","tag":"code","attrs":null,"map":[148,158],"nesting":0,"level":1,"children":null,"content":"{\\n  \\"jsonrpc\\": \\"2.0\\",\\n  \\"id\\":1,\\n  \\"method\\":\\"util_rawToBalance\\",\\n  \\"params\\":  [\\"200000000\\",\\"QLC\\"]\\n}\\n\\n","markup":"```","info":"json test","meta":null,"block":true,"hidden":false}]')]),t._v(" "),a("div",{staticClass:"language-json tab:Request extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"util_rawToBalance"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"200000000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"QLC"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("div",{staticClass:"language-json tab:Response extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("div",{staticClass:"language-json test extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"util_rawToBalance"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"200000000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"QLC"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])],2),t._v(" "),a("h2",{attrs:{id:"util-balancetoraw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#util-balancetoraw"}},[t._v("#")]),t._v(" util_balanceToRaw")]),t._v(" "),a("p",[t._v("Return raw value for the balance by specific unit")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Parameters")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("string")]),t._v("  : balance")]),t._v(" "),a("li",[a("code",[t._v("string")]),t._v("  : unit, if token is QLC ,need set  "),a("code",[t._v("qlc")]),t._v(" , "),a("code",[t._v("Kqlc")]),t._v(" , "),a("code",[t._v("QLC")]),t._v("  or  "),a("code",[t._v("MQLC")]),t._v(" , others should set empty string  "),a("code",[t._v('""')])]),t._v(" "),a("li",[a("code",[t._v("string")]),t._v("  :  "),a("code",[t._v("optional")]),t._v(" , token name, if not set , default is QLC")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Returns")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("string")]),t._v(" : raw value")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Example")]),t._v(":")])])]),t._v(" "),a("demo",{staticClass:"custom-block-demo"},[a("template",{slot:"code"},[t._v('[{"type":"fence","tag":"code","attrs":null,"map":[175,185],"nesting":0,"level":1,"children":null,"content":"{\\n  \\"jsonrpc\\": \\"2.0\\",\\n  \\"id\\":1,\\n  \\"method\\":\\"util_balanceToRaw\\",\\n  \\"params\\":  [\\"2\\",\\"QLC\\"]\\n}\\n\\n","markup":"```","info":"json tab:Request","meta":null,"block":true,"hidden":false},{"type":"fence","tag":"code","attrs":null,"map":[186,195],"nesting":0,"level":1,"children":null,"content":"{\\n  \\"jsonrpc\\": \\"2.0\\",\\n  \\"id\\": 1,\\n  \\"result\\": \\"200000000\\"\\n}\\n\\n","markup":"```","info":"json tab:Response","meta":null,"block":true,"hidden":false},{"type":"fence","tag":"code","attrs":null,"map":[196,206],"nesting":0,"level":1,"children":null,"content":"{\\n  \\"jsonrpc\\": \\"2.0\\",\\n  \\"id\\":1,\\n  \\"method\\":\\"util_balanceToRaw\\",\\n  \\"params\\":  [\\"2\\",\\"QLC\\"]\\n}\\n\\n","markup":"```","info":"json test","meta":null,"block":true,"hidden":false}]')]),t._v(" "),a("div",{staticClass:"language-json tab:Request extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"util_balanceToRaw"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"QLC"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("div",{staticClass:"language-json tab:Response extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"200000000"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("div",{staticClass:"language-json test extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"util_balanceToRaw"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"QLC"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])],2)],1)}),[],!1,null,null,null);s.default=e.exports}}]);