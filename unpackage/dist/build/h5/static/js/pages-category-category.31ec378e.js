(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-category-category"],{"10ca":function(e,t,i){var a=i("6367");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=i("4f06").default;o("56e74f66",a,!0,{sourceMap:!1,shadowMode:!1})},"27dd":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{cateids:0,currentMenuIndex:0,cateInfo:[],categoryInfo:[]}},created:function(){var e=this,t=e.serverUrl;e.loadData(e,t)},onLoad:function(){var e=this,t=e.serverUrl;e.getCategoryList(e,t)},methods:{getCategoryList:function(e,t){uni.request({url:t+"categories",method:"get",success:function(t){if(200==t.statusCode){var i=t.data.data;uni.setStorageSync("ids0",t.data.data[0].id),e.categoryInfo=i}}})},loadData:function(e,t){var i=uni.getStorageSync("ids0");e.getCate(e,t,i)},changeCategory:function(e){var t=this,i=t.serverUrl,a=e.currentTarget.dataset.index,o=e.currentTarget.dataset.cateid;t.currentMenuIndex=a,t.getCate(t,i,o)},getCate:function(e,t,i){uni.showLoading({mask:!0,title:"请稍后..."}),uni.showNavigationBarLoading(),uni.request({url:t+"cateArticels?id="+i,method:"get",success:function(t){if(200==t.statusCode){var i=t.data.data;e.cateInfo=i}},complete:function(){uni.hideLoading(),uni.hideNavigationBarLoading()}})},getFileUrl:function(e){return this.fileUrl+e}}};t.default=a},"4f82":function(e,t,i){"use strict";i.r(t);var a=i("27dd"),o=i.n(a);for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);t["default"]=o.a},6367:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'.category-box[data-v-4f77f90e]{display:-webkit-box;display:-webkit-flex;display:flex;height:100%;overflow:hidden}.left-box[data-v-4f77f90e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:0;-webkit-flex:0 0 %?10?%;flex:0 0 %?10?%;border-right:%?1?% solid #d8d8d8}.menu-item[data-v-4f77f90e]{min-width:%?68?%;height:%?50?%;padding:%?20?% %?15?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;border-left:%?6?% solid #fff}.menu-item.selected[data-v-4f77f90e]{color:#ab956d;border-left-color:#ab956d}.right-box[data-v-4f77f90e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-transition:all .5s ease-in-out;transition:all .5s ease-in-out;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.foods-type-box[data-v-4f77f90e]{height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.category-detail-box[data-v-4f77f90e]{overflow:hidden;padding:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:left;-webkit-justify-content:left;justify-content:left}.category-header[data-v-4f77f90e]{height:%?200?%;text-align:center}.category-header uni-image[data-v-4f77f90e]{border-radius:%?5?%;width:%?520?%;max-height:100%}.category-title[data-v-4f77f90e]{margin:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.category-title uni-text[data-v-4f77f90e]{font-size:%?24?%;color:#ab956d}.category-title uni-text[data-v-4f77f90e]::before,.category-title uni-text[data-v-4f77f90e]::after{content:"";display:inline-block;position:relative;top:%?-6?%;width:%?70?%;height:%?2?%;margin:0 %?20?%;background-color:#979797}.category-main[data-v-4f77f90e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?10?% %?10?%}.category-goods-items[data-v-4f77f90e]{\r\n/* \twidth: 25%; */margin-bottom:%?20?%}.category-goods-items.middle[data-v-4f77f90e]{margin:0 %?20?%}.category-goods-items uni-image[data-v-4f77f90e]{height:%?130?%;width:%?130?%;border-radius:%?10?%}.category-goods-items uni-view[data-v-4f77f90e]{color:#333;font-size:%?18?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;width:%?130?%}',""]),e.exports=t},"8c77":function(e,t,i){"use strict";var a,o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"container category-container"},[i("v-uni-view",{staticClass:"category-box"},[i("v-uni-view",{staticClass:"left-box"},e._l(e.categoryInfo,(function(t,a){return i("v-uni-view",{key:a,staticClass:"menu-item"},[i("v-uni-view",{class:e.currentMenuIndex==a?"selected":"",attrs:{"data-cateid":t.id,"data-index":a},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeCategory.apply(void 0,arguments)}}},[e._v(e._s(t.name))])],1)})),1),i("v-uni-view",{staticClass:"right-box"},[i("v-uni-view",{staticClass:"foods-type-box"},[i("v-uni-view",{staticClass:"category-detail-box"},e._l(e.cateInfo,(function(t){return i("v-uni-view",{key:t.id,staticClass:"category-main"},[i("v-uni-navigator",{attrs:{"open-type":"navigate",url:"../show/show?searchId="+t.id}},[i("v-uni-view",{staticClass:"category-goods-items"},[i("v-uni-image",{attrs:{src:e.getFileUrl(t.file_url),mode:"aspectFill"}}),i("v-uni-view",[e._v(e._s(t.article_name))])],1)],1)],1)})),1)],1)],1)],1)],1)},n=[];i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return a}))},"91a2":function(e,t,i){"use strict";var a=i("10ca"),o=i.n(a);o.a},fff4:function(e,t,i){"use strict";i.r(t);var a=i("8c77"),o=i("4f82");for(var n in o)"default"!==n&&function(e){i.d(t,e,(function(){return o[e]}))}(n);i("91a2");var r,d=i("f0c5"),l=Object(d["a"])(o["default"],a["b"],a["c"],!1,null,"4f77f90e",null,!1,a["a"],r);t["default"]=l.exports}}]);