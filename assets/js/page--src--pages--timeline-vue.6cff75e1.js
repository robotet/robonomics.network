(window.webpackJsonp=window.webpackJsonp||[]).push([[14,1],{"/RBj":function(t,e,i){"use strict";i("KnIi")},"9qaU":function(t,e,i){"use strict";i.r(e);var o={props:{pageTitle:{type:String,default:""},pageDescription:{type:String,default:""},pageImage:{type:String,default:""},pageImageWidth:{type:String,default:"1280"},pageImageHeight:{type:String,default:"765"}},mounted:function(){this.url=window.location.href},computed:{image:function(){return""!=this.pageImage?this.$static.metadata.siteUrl+this.pageImage:this.$static.metadata.siteUrl+"/website_cover.png"},title:function(){return this.pageTitle+" / "+this.$static.metadata.siteName}},metaInfo:function(){return{title:this.title,meta:[{key:"description",name:"description",content:this.pageDescription},{property:"og:type",content:"website"},{property:"og:site_name",content:this.$static.metadata.siteName},{property:"og:title",content:this.title},{property:"og:description",content:this.pageDescription},{property:"og:image",content:this.image},{property:"og:image:width",content:this.pageImageWidth},{property:"og:image:height",content:this.pageImageHeight},{property:"og:url",content:this.$static.metadata.siteUrl},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:this.title},{name:"twitter:image",content:this.image},{name:"twitter:description",content:this.pageDescription},{name:"twitter:site",content:"@AIRA_Robonomics"},{name:"twitter:creator",content:"@AIRA_Robonomics"}]}}},a=i("KHd+"),n=i("Kw5r"),s=n.a.config.optionMergeStrategies.computed,r={metadata:{siteName:"Robonomics Network",siteUrl:"https://robonomics.network"}},c=function(t){var e=t.options;e.__staticData?e.__staticData.data=r:(e.__staticData=n.a.observable({data:r}),e.computed=s({$static:function(){return e.__staticData.data}},e.computed))},l=Object(a.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);"function"==typeof c&&c(l);e.default=l.exports},KnIi:function(t,e,i){},URwv:function(t,e,i){"use strict";i.r(e);var o={components:{MetaInfo:i("9qaU").default}},a=(i("/RBj"),i("KHd+")),n=Object(a.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("layout",[i("MetaInfo",{attrs:{pageTitle:"Timeline",pageDescription:"Robonomics in the past and nowadays, some important checkpoints of evolution."}}),i("div",{staticClass:"layout layout__title"},[i("h1",[t._v("Infrastructure && tech development timeline")])]),i("section",{staticClass:"layout layout__text"},[i("div",{staticClass:"timelineContainer"},[i("article",{staticClass:"timeline timeline__current"},[i("h3",{staticClass:"timeline__time"},[t._v("Robonomics Today")]),i("h2",{staticClass:"timeline__title"},[t._v("On top of two world computers and Aragon DAO for the Community")]),i("div",{staticClass:"hyphens"},[i("p",[t._v("We continue to work with developing the Robonomics platform over Ethereum and Polkadot networks as universal L2 solution for Robot-as-a-Service/IoT nodes. There are more releases on GitHub and new cool tech under armor. We invite developers to our community to spread web3+robotics. Besides the community is welcome to participate in our project life from spring 2020 due to Aragon DAO.")]),t._v("\n          Find more in "),i("g-link",{attrs:{to:"https://static.robonomics.network/docs/presentations/Robonomics.Keypoint.updated.August.2020.pdf"}},[t._v("Robonomics Keypoint presentation")])],1)]),i("article",{staticClass:"timeline"},[i("h3",{staticClass:"timeline__time"},[t._v("2019")]),i("h2",{staticClass:"timeline__title"},[t._v("Robonomics as web3 framework")]),i("div",{staticClass:"hyphens"},[i("p",[t._v("By November 2018, Airalab had alfa version of the Robonomics network running in Ethereum mainnet. Also we published on GitHub a set of tools for creating projects in the Robot-as-a-Service format and decentralized applications or serverless applications to work with the network.")])])]),i("article",{staticClass:"timeline"},[i("h3",{staticClass:"timeline__time"},[t._v("2018")]),i("h2",{staticClass:"timeline__title"},[t._v("Alfa network over Ethereum and IPFS")]),i("div",{staticClass:"hyphens"},[i("p",[t._v("The IoT market is only growing up, which means that for connecting robots there is a huge opportunity to use web3 technologies straight away to organize human-to-machine and m2m communication. Cryptocurrencies, smart contracts, sovereign identification can be a strong driver for the development of Robot-as-a-Service around the world.")]),i("g-link",{attrs:{to:"http://dapp.robonomics.network/"}},[t._v("Go to Robonomics Dapp")])],1)]),i("article",{staticClass:"timeline"},[i("h3",{staticClass:"timeline__time"},[t._v("2017")]),i("h2",{staticClass:"timeline__title"},[t._v("Robonomics network concept")]),i("div",{staticClass:"hyphens"},[i("p",[t._v("We formed a common concept for creating a decentralized network of providers for servicing Smart cities — the Robonomics network.")]),i("g-link",{attrs:{to:"https://static.robonomics.network/docs/whitepaper/Robonomics-whitepaper-en.pdf"}},[t._v("Read Robonomics whitepaper")])],1)]),i("article",{staticClass:"timeline"},[i("h3",{staticClass:"timeline__time"},[t._v("2015 - 2017")]),i("h2",{staticClass:"timeline__title"},[t._v("Ethereum + Robot operating system R&D stage")]),i("div",{staticClass:"hyphens"},[i("p",[t._v("We identified a range of tasks, in which p2p technologies have capabilities that were not previously available for robotics, such as money for robots and smart contracts. These are examples of Robot-as-a-Service under decentralized computer control, i.e. economic agents on digital markets. That was our common vision of the next 4 years in work.")]),i("g-link",{attrs:{to:"https://wiki.robonomics.network/"}},[t._v("Find our R&D in Wiki")])],1)])])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);