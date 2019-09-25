(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{285:function(a,e,t){"use strict";t.r(e);var s=t(2),r=Object(s.a)({},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[a._v("#")]),a._v(" Install")]),a._v(" "),t("h2",{attrs:{id:"prepare-executable-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prepare-executable-file","aria-hidden":"true"}},[a._v("#")]),a._v(" Prepare  executable file")]),a._v(" "),t("p",[a._v("There are three ways to get  executable file：")]),a._v(" "),t("ul",[t("li",[a._v("Compile go-qlc  source code")]),a._v(" "),t("li",[a._v("Download from go-qlc release page")]),a._v(" "),t("li",[a._v("Download the docker image from docker hub")])]),a._v(" "),t("h3",{attrs:{id:"compile-go-qlc-source-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compile-go-qlc-source-code","aria-hidden":"true"}},[a._v("#")]),a._v(" Compile go-qlc  source code")]),a._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",[a._v("Go 1.11.1 or above version is required. See Go installation guild: "),t("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[a._v("go installation"),t("OutboundLink")],1)])]),a._v(" "),t("h4",{attrs:{id:"get-go-qlc-source-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-go-qlc-source-code","aria-hidden":"true"}},[a._v("#")]),a._v(" Get go-qlc source code")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Use  "),t("code",[a._v("go get")]),a._v(" ：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("go get github.com/qlcchain/go-qlc\n")])])]),t("p",[a._v("source code is downloaded at：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$GOPATH")]),a._v("/src/github.com/qlcchain/go-qlc/\n")])])])]),a._v(" "),t("li",[t("p",[a._v("Use  "),t("code",[a._v("git clone")]),a._v(" ：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/qlcchain/go-qlc.git\n")])])]),t("p",[a._v("source code is downloaded at current directory")])])]),a._v(" "),t("h4",{attrs:{id:"compile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compile","aria-hidden":"true"}},[a._v("#")]),a._v(" Compile")]),a._v(" "),t("div",{staticClass:"language-bashthen you can get the executable file for all platforms，like this： extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("make clean all\n")])])]),t("p",[a._v("then you can get the executable file for all platforms，like this：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("gqlc-darwin-amd64-v1.0.1-9406ee2\t\t\t    // go-qlc mainnet server "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" mac OS\ngqlc-linux-amd64-v1.0.1-9406ee2                  // go-qlc mainnet server "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" linux OS\ngqlc-windows-386-v1.0.1-9406ee2.exe              // go-qlc mainnet server "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" Windows "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("386")]),a._v(" OS\ngqlc-windows-amd64-v1.0.1-9406ee2.exe            // go-qlc mainnet server "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" Windows amd64\n")])])]),t("p",[a._v("Select the files you need based on your own operating system.")]),a._v(" "),t("h3",{attrs:{id:"download-from-go-qlc-release-page"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download-from-go-qlc-release-page","aria-hidden":"true"}},[a._v("#")]),a._v(" Download from  go-qlc release page")]),a._v(" "),t("p",[a._v("Link is：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("https://github.com/qlcchain/go-qlc/releases\n")])])]),t("h3",{attrs:{id:"download-the-docker-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download-the-docker-image","aria-hidden":"true"}},[a._v("#")]),a._v(" Download the docker image")]),a._v(" "),t("p",[a._v("You can access "),t("a",{attrs:{href:"https://hub.docker.com/r/qlcchain/go-qlc/tags",target:"_blank",rel:"noopener noreferrer"}},[a._v("go-qlc dockerhub"),t("OutboundLink")],1),a._v(" to find  latest release version and download it.")]),a._v(" "),t("p",[a._v("for example，now our latest release version is v1.0.1，use command")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker pull qlcchain/go-qlc:v1.0.1\n")])])]),t("h2",{attrs:{id:"start-go-qlc-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-go-qlc-node","aria-hidden":"true"}},[a._v("#")]),a._v(" Start go-qlc node")]),a._v(" "),t("h3",{attrs:{id:"start-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-node","aria-hidden":"true"}},[a._v("#")]),a._v(" Start node")]),a._v(" "),t("h4",{attrs:{id:"start-a-normal-node-without-an-account"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-a-normal-node-without-an-account","aria-hidden":"true"}},[a._v("#")]),a._v(" start a normal node without an account")]),a._v(" "),t("p",[a._v("example：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("gqlc-windows-amd64-v1.0.1-9406ee2.exe\n")])])]),t("h4",{attrs:{id:"start-an-account-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-an-account-node","aria-hidden":"true"}},[a._v("#")]),a._v(" start an account node")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("by seed")]),a._v(" "),t("p",[a._v("example：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("gqlc-windows-amd64-v1.0.1-9406ee2.exe "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--seed ff62d09ca04c6941a6d09ad0e83b8fb57914b5f76f79a62e18f84eccc3440e50\n")])])])]),a._v(" "),t("li",[t("p",[a._v("by privateKey")]),a._v(" "),t("p",[a._v("example：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("gqlc-windows-amd64-v1.0.1-9406ee2.exe "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--privateKey 9ca95e184d99769a3e324bbcf57906d04a9c221db72c5af491fc8e7c958f1c6526691fd4b19f28cf279f188769c672cdde577c8360498083da653e02b53f5a8a\n")])])])]),a._v(" "),t("li",[t("p",[a._v("by account")]),a._v(" "),t("p",[a._v("if you want start a node by account ，you need first import account into wallet")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Import account into wallet")]),a._v(" "),t("p",[a._v("example：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("gqlc-windows-amd64-v1.0.1-9406ee2.exe walletimport "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--seed ff62d09ca04c6941a6d09ad0e83b8fb57914b5f76f79a62e18f84eccc3440e50 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--password "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("123456")]),a._v("\n")])])]),t("p",[a._v("if you cat")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("import")]),a._v(" seed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("ff62d09ca04c6941a6d09ad0e83b8fb57914b5f76f79a62e18f84eccc3440e50"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\npassword"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("123456")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" qlc_1h14ymitgs6x5895b57wdi7gedop7jmnihxwryhgnr8ry1ecmpg9io6kkbha "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nsuccess\n")])])]),t("p",[a._v("prove that the import was successful")])]),a._v(" "),t("li",[t("p",[a._v("start a node")]),a._v(" "),t("p",[a._v("example：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("gqlc-windows-amd64-v1.0.1-9406ee2.exe "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--account qlc_1h14ymitgs6x5895b57wdi7gedop7jmnihxwryhgnr8ry1ecmpg9io6kkbha "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--password "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("123456")]),a._v("\n")])])])])])])]),a._v(" "),t("h3",{attrs:{id:"start-node-by-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-node-by-docker","aria-hidden":"true"}},[a._v("#")]),a._v(" Start  node by Docker")]),a._v(" "),t("p",[a._v("If you want to start a node by docker, you need to refer to  "),t("code",[a._v("Prepare executable file")]),a._v("  and download the docker image from docker hub .")]),a._v(" "),t("p",[a._v("You can choose to start a normal node without an account or start an account node.")]),a._v(" "),t("h4",{attrs:{id:"start-a-normal-node-without-an-account-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-a-normal-node-without-an-account-2","aria-hidden":"true"}},[a._v("#")]),a._v(" start a normal node without an account")]),a._v(" "),t("p",[a._v("example：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker container run -d --name go-qlc "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--restart always "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("19734")]),a._v(":19734 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("19735")]),a._v(":19735 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("19736")]),a._v(":19736 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-v /root/.gqlcchain:/root/.gqlcchain "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nqlcchain/go-qlc:v1.0.1\n\n")])])]),t("blockquote",[t("p",[t("code",[a._v("--restart always")]),a._v("  for more docker docs, please refer to the docker "),t("a",{attrs:{href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("website"),t("OutboundLink")],1)])]),a._v(" "),t("h4",{attrs:{id:"start-an-account-node-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-an-account-node-2","aria-hidden":"true"}},[a._v("#")]),a._v(" start an account node")]),a._v(" "),t("p",[a._v("You only need to assign a value to the environment variable  "),t("code",[a._v("seed")]),a._v("  to start an account node")]),a._v(" "),t("p",[a._v("example：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker container run -d --name go-qlc "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--restart always "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("seed")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ff62d09ca04c6941a6d09ad0e83b8fb57914b5f76f79a62e18f84eccc3440e50"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("19734")]),a._v(":19734 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("19735")]),a._v(":19735 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("19736")]),a._v(":19736 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-v /root/.gqlcchain:/root/.gqlcchain "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nqlcchain/go-qlc:v1.0.1\n\n")])])])])},[],!1,null,null,null);e.default=r.exports}}]);