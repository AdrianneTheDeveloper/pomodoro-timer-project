(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(3),c=t.n(s),i=(t(9),t(1));function o(e){var a=Math.floor(e).toString().padStart(2,"0");return"".concat(a,":00")}function l(e){var a=Math.floor(e%3600/60).toString().padStart(2,"0"),t=Math.round(e%60).toString().padStart(2,"0");return"".concat(a,":").concat(t)}var u=function(e){var a=e.isTimerRunning,t=e.focusDuration,n=e.setDuration,s=e.pause,c=function(e){e.target;n((function(e){return e+5}))},i=function(e){e.target;n((function(e){return e-5}))};return r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"input-group input-group-lg mb-2"},r.a.createElement("span",{className:"input-group-text","data-testid":"duration-focus"},"Focus Duration: ",o(t)),r.a.createElement("div",{className:"input-group-append"},t<=5||!0===a||!0===s?r.a.createElement("button",{disabled:!0,onClick:i,type:"button",className:"btn btn-secondary","data-testid":"decrease-focus"},r.a.createElement("span",{className:"oi oi-minus"})):r.a.createElement("button",{disabled:!1,onClick:i,type:"button",className:"btn btn-secondary","data-testid":"decrease-focus"},r.a.createElement("span",{className:"oi oi-minus"})),t>=60||!0===a||!0===s?r.a.createElement("button",{disabled:!0,onClick:c,type:"button",className:"btn btn-secondary","data-testid":"increase-focus"},r.a.createElement("span",{className:"oi oi-plus"})):r.a.createElement("button",{disabled:!1,onClick:c,type:"button",className:"btn btn-secondary","data-testid":"increase-focus"},r.a.createElement("span",{className:"oi oi-plus"})))))};var m=function(e){var a=e.isTimerRunning,t=e.breakDuration,n=e.setBreakDuration,s=e.pause,c=function(e){e.target;n((function(e){return e+60}))},i=function(e){e.target;n((function(e){return e-60}))};return r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"float-right"},r.a.createElement("div",{className:"input-group input-group-lg mb-2"},r.a.createElement("span",{className:"input-group-text","data-testid":"duration-break"},"Break Duration: ",l(t)),r.a.createElement("div",{className:"input-group-append"},t<=60||!0===a||!0===s?r.a.createElement("button",{disabled:!0,type:"button",className:"btn btn-secondary","data-testid":"decrease-break",onClick:i},r.a.createElement("span",{className:"oi oi-minus"})):r.a.createElement("button",{disabled:!1,type:"button",className:"btn btn-secondary","data-testid":"decrease-break",onClick:i},r.a.createElement("span",{className:"oi oi-minus"})),t>=900||!0===a||!0===s?r.a.createElement("button",{disabled:!0,type:"button",className:"btn btn-secondary","data-testid":"increase-break",onClick:c},r.a.createElement("span",{className:"oi oi-plus"})):r.a.createElement("button",{disabled:!1,type:"button",className:"btn btn-secondary","data-testid":"increase-break",onClick:c},r.a.createElement("span",{className:"oi oi-plus"}))))))};var d=function(e){var a=e.isTimerRunning,t=e.focusDuration,n=e.timeRemaining,s=e.toFocus,c=e.breakDuration,i=e.toBreak,u=e.elapsedTime,m=e.pause;return e.stop,e.progress,!0===s&&a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col"},r.a.createElement("h2",{"data-testid":"session-title"},"Focusing for ",o(t)," minutes"),r.a.createElement("p",{className:"lead","data-testid":"session-sub-title"},l(n)," remaining"))),r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"progress",style:{height:"20px"}},r.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":u,style:{width:"".concat(u,"%")}}))))):!0===i&&a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col"},r.a.createElement("h2",{"data-testid":"session-title"},"On Break for ",l(c)," minutes"),r.a.createElement("p",{className:"lead","data-testid":"session-sub-title"},l(n)," remaining"))),r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"progress",style:{height:"20px"}},r.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":u,style:{width:"".concat(u,"%")}}))))):!0!==m||a?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col"},r.a.createElement("h2",{"data-testid":"session-title"},!0===s?"Focusing for ".concat(o(t)," minutes"):"On Break for ".concat(l(c)," minutes")),r.a.createElement("p",{className:"lead","data-testid":"session-sub-title"},l(n)," remaining"),r.a.createElement("h3",null,"PAUSED"))),r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"progress",style:{height:"20px"}},r.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":u,style:{width:"".concat(u,"%")}})))))};var p=function(e){var a,t=e.isTimerRunning,n=e.playPause,s=e.stopTimer;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"btn-group btn-group-lg mb-2",role:"group","aria-label":"Timer controls"},r.a.createElement("button",{type:"button",className:"btn btn-primary","data-testid":"play-pause",title:"Start or pause timer",onClick:n},r.a.createElement("span",{className:(a={oi:!0,"oi-media-play":!t,"oi-media-pause":t},Object.entries(a).reduce((function(e,a){var t=Object(i.a)(a,2),n=t[0],r=t[1];return e.concat(r?n:void 0)}),[]).filter((function(e){return void 0!==e})).join(" "))})),!1===t?r.a.createElement("button",{disabled:!0,type:"button",className:"btn btn-secondary",title:"Stop the session"},r.a.createElement("span",{className:"oi oi-media-stop"})):r.a.createElement("button",{disabled:!1,type:"button",className:"btn btn-secondary",title:"Stop the session",onClick:s},r.a.createElement("span",{className:"oi oi-media-stop"})))))};var b=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],s=a[1],c=Object(n.useState)(25),o=Object(i.a)(c,2),l=o[0],b=o[1],E=Object(n.useState)(null),v=Object(i.a)(E,2),f=v[0],N=v[1],g=Object(n.useState)(null),y=Object(i.a)(g,2),k=y[0],h=y[1],O=Object(n.useState)(300),j=Object(i.a)(O,2),T=j[0],S=j[1],w=Object(n.useState)(!1),D=Object(i.a)(w,2),R=D[0],B=D[1],F=Object(n.useState)(0),C=Object(i.a)(F,2),x=C[0],P=C[1],A=Object(n.useState)(!1),M=Object(i.a)(A,2),I=M[0],J=M[1],U=Object(n.useState)(!1),q=Object(i.a)(U,2),z=q[0],G=q[1],H=f;function K(){s((function(e){return!e})),N(null===H?60*l:H),!0===k?h(!0):!0===R?B(!0):null===k&&h(!0),t&&(J(!0),s(!1),N(H)),!0===I&&J(!1)}return function(e,a){var t=Object(n.useRef)();Object(n.useEffect)((function(){t.current=e}),[e]),Object(n.useEffect)((function(){if(null!==a){var e=setInterval((function(){t.current()}),a);return function(){return clearInterval(e)}}}),[a])}((function(){if(N((function(){return H-1})),f<=0){s(!1);var e=new Audio("".concat("","/alarm/alarm.wav"));e.play(),setTimeout((function(){e.pause(),s((function(e){return!e})),h((function(e){return!e})),B((function(e){return!e})),N(!0===k?T:60*l)}),3e3)}!0===k?P((function(e){return e+100/(60*l)})):!0===R&&P((function(e){return e+100/T})),x>=99&&P((function(e){return 0}))}),t?1e3:null),r.a.createElement("div",{className:"pomodoro"},r.a.createElement("div",{className:"row"},r.a.createElement(u,{isTimerRunning:t,focusDuration:l,setDuration:b,pause:I}),r.a.createElement(m,{isTimerRunning:t,breakDuration:T,setBreakDuration:S,pause:I})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(p,{isTimerRunning:t,toFocus:k,playPause:K,focusDuration:l,breakDuration:T,timeRemaining:f,setToFocus:h,toBreak:R,setToBreak:B,elapsedTime:x,stopTimer:function(){J(!1),G(!0),N(null),P(0),b(25),S(300),s(!1)}}),r.a.createElement(d,{isTimerRunning:t,toFocus:k,playPause:K,focusDuration:l,breakDuration:T,timeRemaining:f,setToFocus:h,toBreak:R,setToBreak:B,elapsedTime:x,setElapsedTime:P,pause:I,stop:z}))))};var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header container"},r.a.createElement("h1",null,"Pomodoro Timer")),r.a.createElement("div",{className:"container"},r.a.createElement(b,null)))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.615b0c5a.chunk.js.map