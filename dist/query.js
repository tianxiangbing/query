!function(e,t){"function"==typeof define&&define.amd?define(["$"],t):"object"==typeof exports?module.exports=t():e.Query=t(window.Zepto||window.jQuery||$)}(this,function(e){var t={getQuery:function(e,t,n){new RegExp("(^|&|#)"+e+"=([^&]*)(&|$|#)","i");n=n||window;var r,a,o=n.location.href,c="";if(r=o.split("#"==t?"#":"?"),a=1==r.length?"":r[1],""!=a){gg=a.split(/&|#/);var f=gg.length;for(str=arguments[0]+"=",i=0;i<f;i++)if(0==gg[i].indexOf(str)){c=gg[i].replace(str,"");break}}return decodeURI(c)},getForm:function(t){var i={};e(t).find("*[name]").each(function(t,n){var r,a=e(n).attr("name"),o=e.trim(e(n).val()),c=[],f={};if(""!=a){if(o=o==e(n).attr("placeholder")?"":o,"radio"==e(n).attr("type")){var u=null;e("input[name='"+a+"']:radio").each(function(){e(this).is(":checked")&&(u=e.trim(e(this).val()))}),o=u?u:""}if("checkbox"==e(n).attr("type")){var u=[];e("input[name='"+a+"']:checkbox").each(function(){e(this).is(":checked")&&u.push(e.trim(e(this).val()))}),o=u.length?u.join(","):""}a.match(/\./)?(c=a.split("."),r=c[0],f[c[1]]=o,i[r]=i[r]?e.extend({},i[r],f):f):i[a]=o}});var n={};for(var r in i){var a=i[r];n[r]="object"==typeof a?JSON.stringify(a):i[r]}return n}};return t});