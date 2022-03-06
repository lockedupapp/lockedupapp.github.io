/* DECT - 2022*/
const e="v1.3.0",t="381cea6a3250425680af1bc61a0a7703",n="LockedUpDB",a=localforage.createInstance({name:n,storeName:"note"}),o=localforage.createInstance({name:n,storeName:"date"}),d=localforage.createInstance({name:n,storeName:"tag"});var l,r,c="LOADING",i="",m="",s="",u="#6599fE";function g(){var e=new Date;document.getElementById("monthYearInput").value=e.getFullYear()+"-"+(e.getMonth()<9?"0":"")+(e.getMonth()+1);const t=document.getElementById("tagContainer");d.iterate((function(e,n,a){t.append(Ce(n,e.name,e.color,e.when.length,e.when))})).then((function(){Ye()})),document.getElementById("newTag").addEventListener("click",(function(){B("HOME_NEW_TAG")})),document.getElementById("colorNewTag").addEventListener("click",(function(){s="HOME_NEW_TAG",b()})),document.getElementById("colorEditTag").addEventListener("click",(function(){s="HOME_EDIT_TAG",b()})),document.getElementById("monthYearInput").addEventListener("change",Ye),document.getElementById("addNewTag").addEventListener("click",Oe),document.getElementById("editTag").addEventListener("click",De),document.getElementById("removeTag").addEventListener("click",xe),document.getElementById("addTagData").addEventListener("click",_e),document.getElementById("shareCalendar").addEventListener("click",Ke),document.getElementById("confirmeRemoveDay").addEventListener("click",Ve),document.getElementById("confirmeRemoveTag").addEventListener("click",Ge)}function y(e){for(var t=document.getElementsByClassName("ui-page"),n=0;n<t.length;n++)t[n].style.display="none";document.getElementById(e).style.display="block",c=e,document.getElementById("currentPage").innerHTML="HOME"==e?"LockedUp":e.charAt(0)+String(e.slice(1)).replace("_"," ").toLocaleLowerCase()}function E(){document.getElementById("version").innerHTML=e}function I(){document.getElementById("btnSideBar").addEventListener("click",v),document.getElementById("btnAlert").addEventListener("click",g);for(var e=document.querySelectorAll("#ui-sideBar .linkSideBar"),t=0;t<e.length;t++)"false"!=e[t].dataset.expand?e[t].addEventListener("click",(function(){h(this.dataset.expand)})):e[t].addEventListener("click",(function(){y("LOADING"),v(),f(this.dataset.name)}));var n=document.querySelectorAll(".ui-secondarySideBar .linkSideBar");for(t=0;t<n.length;t++)"page"==n[t].dataset.kind?n[t].addEventListener("click",(function(){f(this.dataset.name)})):n[t].addEventListener("click",(function(){B(this.dataset.name)}));var a=document.querySelectorAll(".closePopUp");for(t=0;t<a.length;t++)a[t].addEventListener("click",p);var o=document.querySelectorAll(".btnCopy");for(t=0;t<o.length;t++)o[t].addEventListener("click",(function(){navigator.clipboard.writeText(this.dataset.address),p()}))}function f(e){y("LOADING"),v(),v();var t=document.getElementById("backupData");if(t.removeAttribute("href"),t.removeAttribute("download"),t.classList.add("off"),"HOME"==e)"false"==document.getElementById("HOME").dataset.built&&(document.getElementById("HOME").dataset.built=!0);else{if("TIMER"==e)return y(e),F(e),void K();"VIBRATOR"==e?"false"==document.getElementById("VIBRATOR").dataset.built&&(document.getElementById("VIBRATOR").dataset.built=!0,document.getElementById("startVibrator").addEventListener("click",$),document.getElementById("stopVibrator").addEventListener("change",z)):"RANDOM_NUMBER"==e?"false"==document.getElementById("RANDOM_NUMBER").dataset.built&&(document.getElementById("RANDOM_NUMBER").dataset.built=!0,Z()):"RANDOM_VALUE"==e?"false"==document.getElementById("RANDOM_VALUE").dataset.built&&(document.getElementById("RANDOM_VALUE").dataset.built=!0,oe()):"FEEDBACK"==e?document.getElementById("sendFeedback").addEventListener("click",me):"NOTES"==e?"false"==document.getElementById("NOTES").dataset.built&&(document.getElementById("NOTES").dataset.built=!0,ge()):"DATA"==e?("false"==document.getElementById("DATA").dataset.built&&(document.getElementById("DATA").dataset.built=!0,document.getElementById("resetData").addEventListener("click",Be),document.getElementById("restoreData").addEventListener("click",be),document.getElementById("fileRestore").addEventListener("change",Te)),he()):"RANDOM_CARD"==e&&"false"==document.getElementById("RANDOM_CARD").dataset.built&&(document.getElementById("RANDOM_CARD").dataset.built=!0,document.getElementById("card").addEventListener("click",Ne))}y(e)}function v(){if(""!=i)document.getElementById("ui-sideBar"+i).className="ui-secondarySideBar",document.getElementById("btnSideBar").className="open",document.getElementById("title").style.opacity=0,setTimeout((function(){document.getElementById("title").innerHTML="MENU",document.getElementById("title").style.opacity=1}),200),i="";else{var e="open"==document.getElementById("btnSideBar").className?"close":"open";document.getElementById("btnSideBar").className=e,document.getElementById("ui-sideBar").className=e,document.getElementById("currentPage").className=e,setTimeout((function(){document.getElementById("currentPage").style.display="open"==e?"none":"block"}),250)}}function h(e){""==i&&(document.getElementById("ui-sideBar"+e).className="ui-secondarySideBar open",document.getElementById("btnSideBar").className="open openSecond",document.getElementById("title").style.opacity=0,setTimeout((function(){document.getElementById("title").innerHTML=e,document.getElementById("title").style.opacity=1}),200),i=e)}function B(e){m=e,document.getElementById(m).style.display="block",setTimeout((function(){document.getElementById(m).className="ui-popUp open"}),5),e.includes("_POP")&&setTimeout((function(){p()}),1600)}function p(){if(document.getElementById(m).classList.add("close"),setTimeout((function(){document.getElementById(m).style.display="none"}),300),"PICK_COLOR"==m){var e=document.getElementById("setColor"),t=e.cloneNode(!0);e.parentNode.replaceChild(t,e)}if("HOME"==c&&""!=s)return setTimeout((function(){m=s,s=""}),300),null}function b(){navigator.vibrate(25),"false"==document.getElementById("PICK_COLOR").dataset.built&&(document.getElementById("PICK_COLOR").dataset.built=!0,r=new iro.ColorPicker("#colorpicker",{width:.85*screen.width-100,color:u}),u=r.color.hexString,r.on("color:change",(function(){l=r.color.hexString,document.getElementById("selectedColor").style.backgroundColor=l}))),"NOTES"==c?document.getElementById("setColor").addEventListener("click",ve):"HOME"==c&&document.getElementById("setColor").addEventListener("click",we),r.color.hexString=u,document.getElementById("selectedColor").style.backgroundColor=u,B("PICK_COLOR")}function T(e){return"#"+L((e=e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*\d+\.*\d+)?\)$/))[1])+L(e[2])+L(e[3])}function L(e){return("0"+parseInt(e).toString(16)).slice(-2)}function N(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}}function k(e){e+="AI",localStorage.hasOwnProperty(e)?null==localStorage.getItem(e)&&localStorage.setItem(e,"-1"):localStorage.setItem(e,"-1");var t=Number(localStorage.getItem(e))+1;return localStorage.setItem(e,t),t}window.onload=function(){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/serviceWorker.js").then((e=>{})).catch((e=>{}))})),E(),I(),localStorage.hasOwnProperty("LockedUp")||(localStorage.setItem("LockedUp",t),localStorage.setItem("valuesStorage",JSON.stringify(ne)),Ae()),"ontouchstart"in document.documentElement||localStorage.hasOwnProperty("LockedUp")?g():y("ALERT")};const M=document.getElementById("hrTime"),S=document.getElementById("minTime"),A=document.getElementById("secTime");var C,O,w,R,D,_,H,P,V=!1,x=100,G=0;function F(e){if("false"==document.getElementById(e).dataset.built){document.getElementById(e).dataset.built=!0;var t=document.querySelectorAll("#"+e+" .containerPicker .pickerNumbers"),n=document.querySelectorAll("#"+e+" .containerPicker .pickerIncrease"),a=document.querySelectorAll("#"+e+" .containerPicker .pickerDecrease");if(localStorage.hasOwnProperty("timerStorage")){var o=String(localStorage.getItem("timerStorage")).split(":");t[0].dataset.default=o[0],t[1].dataset.default=o[1],t[2].dataset.default=o[2]}for(var d=0;d<t.length;d++){t[d].innerHTML="";var l=t[d].dataset.default,r=document.createElement("input");r.setAttribute("id",e+"input"+d),r.setAttribute("type","hidden"),r.setAttribute("value",l),t[d].appendChild(r),t[d].appendChild(q());for(var c=0,i=0;i<=t[d].dataset.max;i++){var m=document.createElement("div");m.innerHTML=i<10?"0"+i:i,i==l?(m.className="numPicker selected",c=97*i):m.className="numPicker",t[d].appendChild(m)}t[d].appendChild(q()),t[d].scrollTop=c;var s,u,g,y,E=0,I=0,f=!1,v=3;t[d].addEventListener("touchstart",(function(e){E=e.touches[0].clientY,s=this.querySelector(".pickerNumbers input"),u=this.parentElement.querySelector(".pickerNumbers"),I=this.parentElement.querySelector(".pickerNumbers").dataset.max,g=setTimeout((function(){f=!0;var e=Number(s.value);y=setInterval((function(){if(f)if(1===v){if(e<I){u.children[Number(e)+2].className="numPicker",u.children[0].value=++e,u.children[Number(e)+2].className="numPicker selected";var t=0;n=setInterval((function(){u.scrollTop+=9.7,10===++t&&(u.scrollTop=97*e,clearInterval(n))}),10)}}else if(2===v&&e>0){u.children[Number(e)+2].className="numPicker",u.children[0].value=--e,u.children[Number(e)+2].className="numPicker selected";var n;t=0;n=setInterval((function(){u.scrollTop-=9.7,10===++t&&(u.scrollTop=97*e,clearInterval(n))}),10)}}),250)}),500)}),{passive:!0}),t[d].addEventListener("touchmove",(function(e){v=E-e.changedTouches[0].clientY>80?1:E-e.changedTouches[0].clientY<-80?2:3}),{passive:!0}),t[d].addEventListener("touchend",(function(e){if(clearTimeout(g),f)return f=!1,void clearInterval(y);var t=Number(s.value);if(E-e.changedTouches[0].clientY>80){if(t<I){u.children[Number(t)+2].className="numPicker",u.children[0].value=++t,u.children[Number(t)+2].className="numPicker selected";var n=0;a=setInterval((function(){u.scrollTop+=9.7,10===++n&&(u.scrollTop=97*t,clearInterval(a))}),10)}}else if(E-e.changedTouches[0].clientY<-80&&t>0){u.children[Number(t)+2].className="numPicker",u.children[0].value=--t,u.children[Number(t)+2].className="numPicker selected";var a;n=0;a=setInterval((function(){u.scrollTop-=9.7,10===++n&&(u.scrollTop=97*t,clearInterval(a))}),10)}})),n[d].addEventListener("click",(function(){var e=this.parentElement.querySelector(".pickerNumbers input").value,t=this.parentElement.querySelector(".pickerNumbers");if(e<Number(t.dataset.max)){t.children[Number(e)+2].className="numPicker",t.children[0].value=++e,t.children[Number(e)+2].className="numPicker selected";var n,a=0;n=setInterval((function(){t.scrollTop+=9.7,10===++a&&(t.scrollTop=97*e,clearInterval(n))}),10),navigator.vibrate(20)}})),a[d].addEventListener("click",(function(){var e=this.parentElement.querySelector(".pickerNumbers input").value,t=this.parentElement.querySelector(".pickerNumbers");if(e>0){t.children[Number(e)+2].className="numPicker",t.children[0].value=--e,t.children[Number(e)+2].className="numPicker selected";var n,a=0;n=setInterval((function(){t.scrollTop-=9.7,10===++a&&(t.scrollTop=97*e,clearInterval(n))}),10),navigator.vibrate(20)}})),document.getElementById("startTimer").addEventListener("click",U),document.getElementById("cancelTimer").addEventListener("click",J),document.getElementById("pauseResumeTimer").addEventListener("click",W)}}}function q(){var e=document.createElement("div");return e.innerHTML="00",e.className="numPicker empty",e}function U(){document.querySelector("#TIMER .containerPicker").classList.add("hide"),document.getElementById("startTimer").className="btn hide",document.getElementById("containerTimer").style.display="block",setTimeout((function(){document.querySelector("#TIMER .containerPicker").style.display="none",document.getElementById("containerTimer").style.opacity=1,document.getElementById("cancelTimer").classList.add("show"),document.getElementById("pauseResumeTimer").classList.add("show"),V=!0,D=Number(document.getElementById("TIMERinput0").value),_=Number(document.getElementById("TIMERinput1").value),H=Number(document.getElementById("TIMERinput2").value),localStorage.setItem("timerStorage",D+":"+_+":"+H),M.innerHTML=D<10?"0"+D:D,S.innerHTML=_<10?"0"+_:_,A.innerHTML=H<10?"0"+H:H,G=100/(3600*D+60*_+H),Q(x=100),R=new Date,O=window.requestAnimationFrame(Y)}),300)}function Y(){if(!V)return window.cancelAnimationFrame(O),null;var e=(new Date).getTime();if(e-R>=999){if(R=e,-1==--H){if(H=59,A.innerHTML="59",-1==--_){if(-1==--D)return M.innerHTML="00",S.innerHTML="00",A.innerHTML="00",Q(0),y("TIMER"),w=setInterval((function(){navigator.vibrate(300)}),600),window.cancelAnimationFrame(O),null;M.innerHTML=D<10?"0"+D:D,_=59}S.innerHTML=_<10?"0"+_:_}else A.innerHTML=H<10?"0"+H:H;Q(x-=G)}O=window.requestAnimationFrame(Y)}function W(){V?document.getElementById("pauseResumeTimer").innerHTML="Resume":(document.getElementById("pauseResumeTimer").innerHTML="Pause",O=window.requestAnimationFrame(Y)),V=!V}function J(){try{clearInterval(w)}catch(e){}V=!1,document.querySelector("#TIMER .containerPicker").classList.remove("hide"),document.getElementById("startTimer").className="btn",document.getElementById("containerTimer").style.display="none",setTimeout((function(){document.querySelector("#TIMER .containerPicker").style.display="block",document.getElementById("containerTimer").style.opacity=0,document.getElementById("cancelTimer").classList.remove("show"),document.getElementById("pauseResumeTimer").classList.remove("show"),document.getElementById("pauseResumeTimer").innerHTML="Pause"}),300)}function j(){var e=document.getElementById("barTimeBackground"),t=screen.width,n=e.getContext("2d");e.width=t,e.height=t,t/=2,n.translate(t,t),n.rotate(-.5*Math.PI),n.strokeStyle="#6599fE",n.lineCap="round",n.lineWidth=3,n.clear(),n.beginPath(),n.arc(0,0,149.5,0,6.283,!1),n.stroke()}function K(){var e=document.getElementById("barTime"),t=screen.width;C=e.getContext("2d"),e.width=t,e.height=t,t/=2,C.translate(t,t),C.rotate(-.5*Math.PI),C.strokeStyle="#18186C",C.lineCap="round",C.lineWidth=13,j(),Q(100)}function Q(e){C.clear(),C.beginPath(),C.arc(0,0,149.5,0,.06283*e,!1),C.stroke()}function $(){document.getElementById("startVibrator").classList.add("hide"),document.getElementById("stopVibrator").style.display="block",document.getElementById("btnSliderLabelStopVibrator").style.display="block",P=setInterval((function(){navigator.vibrate(1500)}),1500),setTimeout((function(){document.getElementById("startVibrator").style.display="none",document.getElementById("stopVibrator").classList.remove("hide"),document.getElementById("btnSliderLabelStopVibrator").classList.remove("hide")}),300)}function z(){var e=document.getElementById("stopVibrator").value;100==e&&(clearInterval(P),document.getElementById("startVibrator").style.display="block",document.getElementById("stopVibrator").classList.add("hide"),document.getElementById("btnSliderLabelStopVibrator").classList.add("hide"),setTimeout((function(){document.getElementById("startVibrator").classList.remove("hide"),document.getElementById("stopVibrator").style.display="none",document.getElementById("btnSliderLabelStopVibrator").style.display="none"}),300));var t=setInterval((function(){document.getElementById("stopVibrator").value=--e,0==e&&clearInterval(t)}),3)}CanvasRenderingContext2D.prototype.clear=function(){this.save(),this.setTransform(1,0,0,1,0,0),this.clearRect(0,0,this.canvas.width,this.canvas.height),this.restore()};var X=!0;function Z(){if(document.getElementById("inputMinId").addEventListener("focusin",(function(){document.getElementById("generateRandomNumber").style.display="none"})),document.getElementById("inputMaxId").addEventListener("focusin",(function(){document.getElementById("generateRandomNumber").style.display="none"})),document.getElementById("inputMinId").addEventListener("focusout",(function(){document.getElementById("generateRandomNumber").style.display="block"})),document.getElementById("inputMaxId").addEventListener("focusout",(function(){document.getElementById("generateRandomNumber").style.display="block"})),document.getElementById("generateRandomNumber").addEventListener("click",ee),localStorage.hasOwnProperty("numberRandomStorage")){var e=String(localStorage.getItem("numberRandomStorage")).split("-");document.getElementById("inputMinId").value=e[0],document.getElementById("inputMaxId").value=e[1]}}function ee(){if(X){X=!1,document.getElementById("generateRandomNumber").classList.add("off");var e=Number(document.getElementById("inputMinId").value),t=Number(document.getElementById("inputMaxId").value),n=[],a="shuffled";if(e<t){document.getElementById("numberGenerated").classList.add("off");for(var o=e;o<=t;o++)n.push(o);a=800/n.length,N(n)}else e==t?document.getElementById("numberGenerated").innerHTML=e:(document.getElementById("inputMinId").style.borderColor="#920637",document.getElementById("inputMaxId").style.borderColor="#920637",setTimeout((function(){document.getElementById("inputMinId").style.borderColor="#18186C",document.getElementById("inputMaxId").style.borderColor="#18186C"}),1e3));if("shuffled"===a)document.getElementById("numberGenerated").classList.remove("off"),document.getElementById("generateRandomNumber").classList.remove("off"),X=!0;else var d=0,l=setInterval((function(){document.getElementById("numberGenerated").innerHTML=n[d],++d==n.length-1&&(document.getElementById("numberGenerated").classList.remove("off"),document.getElementById("generateRandomNumber").classList.remove("off"),X=!0,navigator.vibrate([200,100,200]),clearInterval(l))}),a);localStorage.setItem("numberRandomStorage",e+"-"+t)}}var te,ne=["+3 days locked","-3 days locked","Unlock and ruin it","Edge 3x and denial","Spank balls 50x","Plug for 1 hour"],ae=!0;function oe(){document.getElementById("addValue").addEventListener("click",(function(){B("RANDOM_NUMBER_ADD_VALUE")})),document.getElementById("generateRandomValue").addEventListener("click",le),document.getElementById("addNewRandomValue").addEventListener("click",re),document.getElementById("removeRandomValue").addEventListener("click",ie),de()}function de(){var e=document.getElementById("containerValues");if(e.innerHTML="",(ne=JSON.parse(localStorage.getItem("valuesStorage"))).length>0){for(var t=0;t<ne.length;t++){var n=document.createElement("div");n.className="pill",n.innerHTML=ne[t],n.dataset.i=t,n.addEventListener("click",ce),e.prepend(n)}document.getElementById("generateRandomValue").classList.remove("off")}else document.getElementById("generateRandomValue").classList.add("off")}function le(){if(ae)if(ae=!1,ne.length>1){document.getElementById("generateRandomValue").classList.add("off"),document.getElementById("valueGenerated").classList.add("off");var e=ne,t=0;N(e);var n=800/e.length,a=setInterval((function(){document.getElementById("valueGenerated").innerHTML=e[t],++t==e.length-1&&(document.getElementById("generateRandomValue").classList.remove("off"),document.getElementById("valueGenerated").classList.remove("off"),ae=!0,navigator.vibrate([200,100,200]),clearInterval(a))}),n)}else 1==ne.length&&(document.getElementById("valueGenerated").innerHTML=ne[0],ae=!0)}function re(){var e=document.getElementById("newRandomValue").value;if(e.length>0){ne.push(e),localStorage.setItem("valuesStorage",JSON.stringify(ne)),document.getElementById("generateRandomValue").classList.remove("off"),p(),document.getElementById("newRandomValue").value="";var t=document.createElement("div");t.className="pill",t.innerHTML=e,t.dataset.i=ne.length-1,t.style.backgroundColor="#6599fE",t.addEventListener("click",ce),document.getElementById("containerValues").prepend(t),document.getElementById("containerValues").scrollTop=0,setTimeout((function(){t.style.backgroundColor="transparent"}),450)}else document.getElementById("newRandomValue").style.borderColor="#920637",document.getElementById("newRandomValue").style.borderColor="#920637",setTimeout((function(){document.getElementById("newRandomValue").style.borderColor="#18186C",document.getElementById("newRandomValue").style.borderColor="#18186C"}),1300)}function ce(){te=this.dataset.i,document.getElementById("removedRandomValue").value=this.innerHTML,B("RANDOM_VALUE_CONFIRM_REMOVE")}function ie(){ne.splice(te,1),localStorage.setItem("valuesStorage",JSON.stringify(ne)),document.getElementById("valueGenerated").innerHTML="-",p(),de()}function me(){if(navigator.onLine){var e=document.getElementById("msgFeedback").value;(e.trim().length||0)>0?(fetch("https://docs.google.com/forms/d/e/1FAIpQLSeersriSx1Osaa_n5fG7uJb7bu0UldW9LNStsy_U2D2EUPY2A/formResponse?&entry.1042543616="+e+"&submit=SUBMIT",{method:"POST",mode:"no-cors",redirect:"follow",referrer:"no-referrer"}),B("CONFIRM_POP"),document.getElementById("msgFeedback").value=""):(document.getElementById("msgFeedback").style.borderColor="#920637",document.getElementById("msgFeedback").style.borderColor="#920637",setTimeout((function(){document.getElementById("msgFeedback").style.borderColor="#18186C",document.getElementById("msgFeedback").style.borderColor="#18186C"}),1300))}else B("OFFLINE_POP")}var se,ue=!1;function ge(){document.getElementById("removeNote").addEventListener("click",(function(){navigator.vibrate(25),B("NOTE_CONFIRM_REMOVE")})),document.getElementById("confirmeRemoveNote").addEventListener("click",Ie),document.getElementById("colorNote").addEventListener("click",b),document.getElementById("closeNote").addEventListener("click",fe),document.getElementById("newNote").addEventListener("click",ye);var e=document.getElementById("NOTES");a.iterate((function(t,n,a){var o=document.createElement("textarea");o.className="note",o.innerHTML=t.text,o.readOnly=!0,o.placeholder="Empty",o.style.backgroundColor=t.color,o.style.borderColor=t.color,o.setAttribute("id",n),o.addEventListener("click",Ee),e.prepend(o)}))}function ye(){se="n"+k("note");var e={color:"#6599fE",text:""};a.setItem(se,e);var t=document.createElement("textarea");t.className="note",t.readOnly=!0,t.placeholder="Empty",t.style.backgroundColor=e.color,t.style.borderColor=e.color,t.setAttribute("id",se),t.addEventListener("click",Ee),document.getElementById("NOTES").prepend(t),t.click()}function Ee(){ue||(ue=!0,this.classList.add("open"),document.getElementById("btnBottomContainer").classList.add("open"),se=this.id,u=T(this.style.backgroundColor),setTimeout((function(){document.getElementById(se).readOnly=!1,document.getElementById(se).classList.add("noTransition")}),350))}function Ie(){p(),fe(),document.getElementById(se).remove(),a.removeItem(se)}function fe(){navigator.vibrate(25),a.getItem(se).then((function(e){try{e.text=document.getElementById(se).value}catch(e){}a.setItem(se,e)})),document.getElementById(se).readOnly=!0,document.getElementById(se).classList.remove("noTransition"),document.getElementById(se).classList.remove("open"),document.getElementById("btnBottomContainer").classList.remove("open"),ue=!1}function ve(){u=l,a.getItem(se).then((function(e){e.color=u,a.setItem(se,e)})),document.getElementById(se).style.backgroundColor=u,document.getElementById(se).style.borderColor=u,p()}function he(){var e='text/json;charset=utf-8, {"database":"LockedUpDB","note":[',t=!0;function n(n){t?e+='],"'+n+'":[':(e=e.slice(0,-1)+'],"'+n+'":[',t=!0)}function l(n,a){var o={};o[n]=a,e+=encodeURIComponent(JSON.stringify(o))+",",t=!1}a.iterate((function(e,t,n){l(t,e)})).then((function(){n("date"),o.iterate((function(e,t,n){l(t,e)})).then((function(){n("tag"),d.iterate((function(e,t,n){l(t,e)})).then((function(){n("localstorage");for(var t=Object.keys(localStorage),a=0;a<t.length;a++){var o={};o[t[a]]=localStorage.getItem(t[a]),e+=encodeURIComponent(JSON.stringify(o))+","}e=e.slice(0,-1)+"]}";var d=document.getElementById("backupData");d.href="data:"+e,d.download="LockedUpBackup_"+(new Date).toJSON().slice(0,10)+".json",d.classList.remove("off")}))}))}))}function Be(){localStorage.clear(),pe(!0)}function pe(e){a.dropInstance({name:n,storeName:"note"}).then((function(){d.dropInstance({name:n,storeName:"tag"}).then((function(){o.dropInstance({name:n,storeName:"date"}).then((function(){B("CONFIRM_POP"),e&&setTimeout((function(){window.location.href="/"}),1500)}))}))}))}function be(){document.getElementById("fileRestore").click()}function Te(){var e=new FileReader;e.onload=function(){var t=null;try{(t=JSON.parse(e.result)).database!=n&&(t=null)}catch(e){}null!=t?(y("LOADING"),pe(!1),localStorage.clear(),setTimeout((function(){for(var e=0;e<t.localstorage.length;e++){var n=Object.keys(t.localstorage[e])[0],a=t.localstorage[e][n];localStorage.setItem(n,a)}Le("note",t.note),Le("tag",t.tag),Le("date",t.date),setTimeout((function(){window.location.href="/"}),6e3)}),1500)):B("ERROR_POP")},e.readAsText(this.files[0])}function Le(e,t){for(var a=localforage.createInstance({name:n,storeName:e}),o=0;o<t.length;o++){var d=Object.keys(t[o])[0];a.setItem(d,t[o][d])}}function Ne(){document.getElementById("card").classList="";var e,t="",n=Math.floor(13*Math.random())+1;switch(n){case 1:t+="A";break;case 11:t+="J";break;case 12:t+="Q";break;case 13:t+="K";break;default:t+=n}switch(e=t,t="c"+t,n=Math.floor(4*Math.random())){case 0:t+=" spades";break;case 1:t+=" clubs";break;case 2:t+=" diams";break;case 3:t+=" hearts"}setTimeout((function(){document.getElementById("valCard1").innerHTML=e,document.getElementById("valCard2").innerHTML=e,document.getElementById("selectedCard").className=t,setTimeout((function(){document.getElementById("card").classList="show"}),200)}),250)}var ke="",Me="";function Se(e,t){return{name:e,when:[],color:t}}function Ae(){d.setItem("t"+k("tag"),Se("Locked","#18186C")).then((function(){d.setItem("t"+k("tag"),Se("Edging","#6599fE")).then((function(){d.setItem("t"+k("tag"),Se("Orgasm","#236B0D")).then((function(){d.setItem("t"+k("tag"),Se("Ruined orgasm","#920637")).then((function(){d.setItem("t"+k("tag"),Se("Locked/orgasm","#FFB54F")).then((function(){d.setItem("t"+k("tag"),Se("Locked/ruined","#A2A2A2")).then((function(){d.setItem("t"+k("tag"),Se("Handsfree","#F47255")).then((function(){d.setItem("t"+k("tag"),Se("Anal play","#F34E82")).then((function(){window.location.href="/"}))}))}))}))}))}))}))}))}function Ce(e,t,n,a,o){var d=document.createElement("div");d.className="tag",d.setAttribute("id",e),d.setAttribute("data-color",n),d.setAttribute("data-name",t),d.setAttribute("data-whenstamp",a>0?o[0]:0),d.addEventListener("click",Re);var l=document.createElement("div");l.className="color",l.style.backgroundColor=n;var r=document.createElement("div");return r.className="tagName",r.innerHTML=t,d.appendChild(l),d.appendChild(r),d}function Oe(){var e=document.getElementById("nameNewTag").value;if((e.trim().length||0)>0){var t="t"+k("tag"),n=document.getElementById("colorNewTag").dataset.color;d.setItem(t,Se(e,n)).then((function(){if(document.getElementById("tagContainer").appendChild(Ce(t,e,n,0)),p(),document.getElementById("nameNewTag").value="",document.getElementById("colorNewTag").dataset.color="#6599fE",document.getElementById("colorNewTag").style.backgroundColor="#6599fE","true"==document.getElementById("HOME_ADD_TAG_DATE").dataset.built){var a=document.createElement("div");a.className="pillTag",a.style.backgroundColor=n,a.innerHTML=e,a.setAttribute("id","a"+t),a.setAttribute("data-color",n),a.setAttribute("data-name",e),a.addEventListener("click",He),document.getElementById("allTags").appendChild(a)}}))}else document.getElementById("nameNewTag").style.borderColor="#920637",document.getElementById("nameNewTag").style.borderColor="#920637",setTimeout((function(){document.getElementById("nameNewTag").style.borderColor="#18186C",document.getElementById("nameNewTag").style.borderColor="#18186C"}),1300)}function we(){u=l,"HOME_NEW_TAG"==s?(document.getElementById("colorNewTag").style.backgroundColor=u,document.getElementById("colorNewTag").dataset.color=u,p()):"HOME_EDIT_TAG"==s&&(document.getElementById("colorEditTag").style.backgroundColor=u,document.getElementById("colorEditTag").dataset.color=u,p())}function Re(){document.getElementById("HOME_EDIT_TAG").dataset.idAux=this.id,document.getElementById("nameEditTag").value=this.dataset.name,document.getElementById("colorEditTag").style.backgroundColor=this.dataset.color,document.getElementById("colorEditTag").dataset.color=this.dataset.color,B("HOME_EDIT_TAG")}function De(){var e=document.getElementById("nameEditTag").value;if((e.trim().length||0)>0){var t=document.getElementById("HOME_EDIT_TAG").dataset.idAux,n=document.getElementById("colorEditTag").dataset.color;d.setItem(t,Se(e,n)).then((function(){document.getElementById(t).dataset.color=n,document.querySelector("#"+t+" .color").dataset.color=n,document.querySelector("#"+t+" .color").style.backgroundColor=n,document.querySelector("#"+t+" .tagName").innerHTML=e,"true"==document.getElementById("HOME_ADD_TAG_DATE").dataset.built&&(document.getElementById("a"+t).style.backgroundColor=n),document.querySelectorAll("."+t).forEach((function(e){e.style.backgroundColor=n})),p()}))}else document.getElementById("nameEditTag").style.borderColor="#920637",document.getElementById("nameEditTag").style.borderColor="#920637",setTimeout((function(){document.getElementById("nameEditTag").style.borderColor="#18186C",document.getElementById("nameEditTag").style.borderColor="#18186C"}),1300)}function _e(){if("false"==document.getElementById("HOME_ADD_TAG_DATE").dataset.built){document.getElementById("HOME_ADD_TAG_DATE").dataset.built=!0;const e=document.getElementById("allTags");d.iterate((function(t,n,a){var o=document.createElement("div");o.className="pillTag",o.style.backgroundColor=t.color,o.innerHTML=t.name,o.setAttribute("id","a"+n),o.setAttribute("data-color",t.color),o.setAttribute("data-name",t.name),o.addEventListener("click",He),e.appendChild(o)})).then((function(){s="HOME_SHOW_TAGS",B("HOME_ADD_TAG_DATE")}))}else s="HOME_SHOW_TAGS",B("HOME_ADD_TAG_DATE")}function He(){var e=String(this.id).substring(1),t=document.createElement("div");t.className="pillTag",t.innerHTML=this.dataset.name,t.style.backgroundColor=this.dataset.color,t.addEventListener("click",Pe),document.getElementById("tagsDate").appendChild(t);var n=document.createElement("div");n.className="tagDay "+e,n.style.backgroundColor=this.dataset.color,document.querySelector("#"+ke+" .dayTags").appendChild(n),o.getItem(ke).then((function(t){if(null==t)o.setItem(ke,[e]);else{var n=t;n.push(e),o.setItem(ke,n)}})),d.getItem(e).then((function(t){var n=String(ke).substring(1);n=Number(n),0==Number(document.getElementById(e).dataset.whenstamp)?(t.when.push(String(n)),t.when=t.when,document.getElementById(e).dataset.whenstamp=n):Number(document.getElementById(e).dataset.whenstamp)<n?(t.when.unshift(String(n)),t.when=t.when,document.getElementById(e).dataset.whenstamp=n):Number(document.getElementById(e).dataset.whenstamp)>n&&(t.when.push(String(n)),t.when=Fe(t.when)),d.setItem(e,t)})),p()}function Pe(){s="HOME_SHOW_TAGS",Me=this.dataset.idtemp,B("HOME_CONFIRM_REMOVE_DAY")}function Ve(){o.getItem(ke).then((function(e){e.splice(e.indexOf(Me),1),o.setItem(ke,e).then((function(){d.getItem(Me).then((function(e){var t=e.when,n=String(ke).substring(1);try{t.splice(t.indexOf(n),1)}catch(e){}e.when=t,d.setItem(Me,e).then((function(){window.location.href="/"}))}))}))}))}function xe(){s="HOME_EDIT_TAG",B("HOME_CONFIRM_REMOVE_TAG")}function Ge(){Me=document.getElementById("HOME_EDIT_TAG").dataset.idAux,d.getItem(Me).then((function(e){e.when.forEach((function(e,t){o.getItem("d"+e).then((function(t){for(var n=t.length,a=0;a<n;a++)t[a]==Me&&(t.splice(a,1),a--,n--);o.setItem("d"+e,t)}))}))})),d.removeItem(Me).then((function(){window.location.href="/"}))}function Fe(e){for(var t=Number(e[e.length-1]),n=0;n<e.length;n++)if(!(Number(e[n])>t)){e.splice(n,0,String(t)),e.pop();break}return e}function qe(){document.getElementById("tagsDate").innerHTML="",ke=this.id,o.getItem(ke).then((function(e){if(null!=e)for(var t=0;t<e.length;t++)Ue(e[t]);B("HOME_SHOW_TAGS")}))}async function Ue(e){const t=await d.getItem(e);var n=document.createElement("div");n.className="pillTag",n.innerHTML=t.name,n.style.backgroundColor=t.color,n.dataset.idtemp=e,n.addEventListener("click",Pe),tagsDate.appendChild(n)}function Ye(){y("LOADING");const e=document.getElementById("daysMonth");var t=new Date(document.getElementById("monthYearInput").value);t.setDate(1),t.setHours(0,0,0,0),t.setMonth(t.getMonth()+1);const n=new Date(t.getFullYear(),t.getMonth()+1,0).getDate();e.innerHTML="";for(var a=0;a<t.getDay();a++){var o=document.createElement("div");o.className="empty",e.appendChild(o)}var d=new Date;const l=t.getFullYear()==d.getFullYear()&&t.getMonth()==d.getMonth();d=d.getDate();var r=[];for(a=1;a<=n;a++){t.setDate(a);var c="d"+t.getTime();r.push(c);var i=document.createElement("div");i.className=l&&a==d?"day today":"day",i.setAttribute("id",c),i.addEventListener("click",qe);var m=document.createElement("div");m.className="dayNumber",m.innerHTML=a;var s=document.createElement("div");s.className="dayTags",i.appendChild(m),i.appendChild(s),e.appendChild(i)}We(r),f("HOME")}async function We(e){await e.forEach((async function(t,n){o.getItem(e[n]).then((function(e){null!=e&&Je(t,e,n)}))}))}async function Je(e,t,n){await t.forEach((async function(t,n){d.getItem(t).then((function(n){var a=document.createElement("div");a.className="tagDay "+t;try{a.style.backgroundColor=n.color}catch(e){return}document.querySelector("#"+e+" .dayTags").append(a)}))}))}const je=["January ","February ","March ","April ","May ","June ","July ","August ","September ","October ","November ","December "];function Ke(){document.getElementById("LOADING").style.display="block";var e=new Date(document.getElementById("monthYearInput").value);e=je[e.getMonth()+1]+e.getFullYear(),document.getElementById("monthYearInputText").innerHTML=e,document.getElementById("monthYearInputText").style.display="block",document.getElementById("printable").style.padding="0.8rem",document.getElementById("printable").style.paddingRight="1.2rem",document.getElementById("printable").style.width="400px",document.getElementById("tagContainer").scrollTop=0,document.getElementById("tagContainer").style.height="auto",document.getElementById("tagContainer").style.textAlign="center";try{document.querySelector(".today").style.fontWeight="500"}catch(e){}var t=document.querySelectorAll("#tagContainer .tag");(t=t[t.length-1]).style.marginBottom="15px",document.getElementById("logoPrint").style.display="block",html2canvas(document.querySelector("#printable")).then((n=>{document.getElementById("monthYearInputText").style.display="none",document.getElementById("printable").style.padding="0px",document.getElementById("printable").style.width="auto",document.getElementById("tagContainer").style.textAlign="left",document.getElementById("tagContainer").style.height="12.5rem",t.removeAttribute("style");try{document.querySelector(".today").removeAttribute("style")}catch(e){}document.getElementById("logoPrint").style.display="none",document.getElementById("LOADING").style.display="none";var a=document.createElement("a");a.href=n.toDataURL("image/jpeg").replace("image/jpeg","image/octet-stream"),a.download=e.replace(" ","_")+".jpg",a.click()}))}