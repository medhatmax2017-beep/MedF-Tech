(function(){
window.gin=function(){alert("لم تُدخل إعدادات Firebase في ملف firebase-config.js بعد")};window.gout=function(){};
var C=window.FB_CONFIG;if(!C||!C.apiKey||C.apiKey.indexOf("PASTE")>=0)return;
function loadJs(u){return new Promise(function(res,rej){var s=document.createElement("script");s.src=u;s.onload=res;s.onerror=rej;document.head.appendChild(s)})}
var B="https://www.gstatic.com/firebasejs/10.12.2/";
var ready=loadJs(B+"firebase-app-compat.js").then(function(){return Promise.all([loadJs(B+"firebase-auth-compat.js"),loadJs(B+"firebase-firestore-compat.js")])}).then(function(){
firebase.initializeApp(C);var a=firebase.auth();return new Promise(function(r){var f=0;a.onAuthStateChanged(function(u){if(!f){f=1;r(u)}if(typeof acc=="function")acc()})})}).catch(function(){return null});
function cu(){return typeof firebase!="undefined"&&firebase.auth?firebase.auth().currentUser:null}
window.claude={use:async function(n){await ready;
if(n=="user")return{id:async function(){var x=cu();return x?x.uid:null},me:async function(){var x=cu();return x?{id:x.uid,name:x.displayName,email:x.email}:{id:null}}};
if(n=="db")return{collection:function(p){var col=firebase.firestore().collection("users").doc(p.split("/")[2]).collection("ms");return{doc:function(id){var d=col.doc(id);return{get:function(){return d.get().then(function(s){return{exists:s.exists,data:function(){return s.data()}}})},set:function(x){return d.set(x)}}}}}};
if(n=="downloads")return{save:function(o){var a=document.createElement("a");a.href=URL.createObjectURL(new Blob([o.data],{type:"text/csv;charset=utf-8"}));a.download=o.filename;document.body.appendChild(a);a.click();a.remove();return Promise.resolve()}};
return null}};
window.gin=async function(){await ready;if(typeof firebase=="undefined")return alert("تعذّر تحميل Firebase، تأكد من الإنترنت");var a=firebase.auth(),p=new firebase.auth.GoogleAuthProvider();a.signInWithPopup(p).catch(function(e){if(e.code=="auth/popup-blocked"||e.code=="auth/operation-not-supported-in-this-environment")a.signInWithRedirect(p);else if(e.code!="auth/popup-closed-by-user")alert("تعذّر الدخول: "+e.message)})};
window.gout=async function(){await ready;if(cu())firebase.auth().signOut()};
})();
