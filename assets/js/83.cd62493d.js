(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{276:function(t,e,a){"use strict";a.r(e);var i=a(2),n=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("h2",{attrs:{id:"更新纪录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新纪录"}},[t._v("#")]),t._v(" 更新纪录")]),t._v(" "),a("p",[t._v("2019-9-25 update:")]),t._v(" "),a("ul",[a("li",[t._v("增加代表提取奖励合约")])]),t._v(" "),a("p",[t._v("2019-9-24 update :")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("修改 PoV 块结构")])]),t._v(" "),a("li",[a("p",[t._v("修改  "),a("code",[t._v("PoV")]),t._v("  模块")])])]),t._v(" "),a("p",[t._v("2019-6-20 更新 :")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("增加  "),a("code",[t._v("PoV")]),t._v("  and  "),a("code",[t._v("Miner")]),t._v("  模块")])]),t._v(" "),a("li",[a("p",[t._v("增加 PoV 块结构")])]),t._v(" "),a("li",[a("p",[t._v("账户块结构增加 PoV 高度和确认字段")])])]),t._v(" "),a("p",[t._v("2019-3-25 更新 :")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("ledger_accountsPending")]),t._v("  返回值增加时间戳")])]),t._v(" "),a("li",[a("p",[t._v("修改  "),a("code",[t._v("sms_messageBlocks")]),t._v("  返回值")])])]),t._v(" "),a("p",[t._v("2019-3-15 更新 :")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("修改 block 结构")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("ledger_accounts")]),t._v(" ,  "),a("code",[t._v("ledger_blocks")]),t._v(" ,  "),a("code",[t._v("ledger_accountHistoryTopn")]),t._v("  接口增加偏移量")])]),t._v(" "),a("li",[a("p",[t._v("增加  "),a("code",[t._v("SMS")]),t._v("  和  "),a("code",[t._v("Mintage")]),t._v("  模块")])]),t._v(" "),a("li",[a("p",[t._v("修改  "),a("code",[t._v("ledger_blocksCountByType")]),t._v(" ,  "),a("code",[t._v("ledger_delegators")]),t._v("  接口返回值")])]),t._v(" "),a("li",[a("p",[t._v("将  "),a("code",[t._v("ledger_accountsBalances")]),t._v("  名称修改为  "),a("code",[t._v("ledger_accountsBalance")])])])]),t._v(" "),a("h2",{attrs:{id:"account-block结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#account-block结构"}},[t._v("#")]),t._v(" Account Block 结构")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("字段")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("区块类型")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("token")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("交易的 token hash")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("address")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("产生区块的账户地址")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("balance")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("产生区块账户的余额")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("previous")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("前一个区块 hash")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("link")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("如果是发送区块，则为接收账户地址，如果是接收接收区块，则为发送区块的 hash")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("sender")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("短信发送者，使用 base64 编码，可空")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("receiver")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("短信接收者，使用 base64 编码，可空")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("message")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("短信 hash")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("data")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("合约产生的虚拟机指令，可空")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("quota")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("quota acquired from mortgaged assets")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("timestamp")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("int64")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("时间戳")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("extra")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("合约产生的额外数据")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("representative")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("代表账户的地址")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("work")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("工作量证明")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("signature")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("签名数据")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("tokenName")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("token 名称")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("amount")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("交易数目")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("hash")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("区块 hash")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("povHeight")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint64")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("PoV 块引用高度")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("povConfirmHeight")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint64")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("PoV 块确认高度")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("povConfirmCount")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint64")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("PoV 块确认次数")])])])]),t._v(" "),a("h2",{attrs:{id:"pov-block-struct"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pov-block-struct"}},[t._v("#")]),t._v(" PoV Block Struct")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("field")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("basHdr")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("block basic header")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("auxHdr")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("block aux pow header")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("cbtx")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("block coinbase tx")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("normBits")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("normalized target bits")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("algoName")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("pow algorithm name")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("algoEfficiency")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("pow algorithm efficiency")])])])]),t._v(" "),a("h3",{attrs:{id:"pov-basic-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pov-basic-header"}},[t._v("#")]),t._v(" PoV Basic Header")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("field")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("hash")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("block hash")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("height")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint64")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("block height")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("version")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("version")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("previous")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("previous block hash")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("merkleRoot")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("merkle root of all transactions")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("timestamp")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("timestamp, now is unix time")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("bits")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("target bits")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("nonce")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint64")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("nonce number")])])])]),t._v(" "),a("h3",{attrs:{id:"pov-auxpow-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pov-auxpow-header"}},[t._v("#")]),t._v(" PoV AuxPow Header")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("field")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("auxMerkleBranch")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("array")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("auxiliary chain merkle branch hashes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("auxMerkleIndex")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("auxiliary chain merkle index/mask")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("parCoinBaseTx")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("parent chain coinbase transaction")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("parCoinBaseMerkle")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("array")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("parent chain coinbase merkle branch hashes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("parMerkleIndex")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("parent chain merkle index/mask")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("parBlockHeader")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("parent chain block header")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("parentHash")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("parent chain block hash")])])])]),t._v(" "),a("h3",{attrs:{id:"pov-coinbase-transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pov-coinbase-transaction"}},[t._v("#")]),t._v(" PoV CoinBase Transaction")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("field")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("version")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("transaction version")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("txIns")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("array")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("transaction input list")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("txOuts")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("array")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("transaction output list")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("stateHash")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("state hash of transactions in pov block body")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("txNum")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("number of transactions in pov block body")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("hash")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("transaction hash")])])])]),t._v(" "),a("h3",{attrs:{id:"pov-coinbase-input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pov-coinbase-input"}},[t._v("#")]),t._v(" PoV CoinBase Input")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("field")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("prevTxHash")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("transaction version")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("prevTxIdx")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("transaction input list")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("extra")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("coinbase extra data (hex bytes)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("sequence")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("sequence number")])])])]),t._v(" "),a("h3",{attrs:{id:"pov-coinbase-output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pov-coinbase-output"}},[t._v("#")]),t._v(" PoV CoinBase Output")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("field")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("value")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("coinbase reward value")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("address")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("coinbase reward address")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);