import{_ as c,r as _,o as d,c as p,a as s,b as r,q as l,v as u,s as w,u as g,p as h,j as v}from"./index-0a2108c4.js";const y={name:"LoginForm",data(){return{loginForm:{username:"admin",password:"admin"},passwordType:"password"}},methods:{showPwd(){this.passwordType=this.passwordType==="password"?"text":"password"},handleLogin(){this.loginForm.username==="admin"&&this.loginForm.password==="admin"?this.$router.push("/admin-shop"):console.log("Неверное имя пользователя или пароль")}}},m=t=>(h("data-v-bd011244"),t=t(),v(),t),f={class:"login-container"},x=["model"],F=m(()=>s("div",{class:"title-container"},[s("h3",{class:"title"},"Форма Входа")],-1)),b={class:"form-item",prop:"username"},L={class:"svg-container"},T={class:"form-item pass-form",prop:"password"},V={class:"svg-container"},k=["type"],I=m(()=>s("div",{class:"tips"},[s("span",{style:{"margin-right":"20px"}},"имя пользователя: admin"),s("span",null,"пароль: admin")],-1));function B(t,o,C,M,e,i){const a=_("svg-icon");return d(),p("div",f,[s("form",{ref:"loginForm",model:e.loginForm,class:"login-form","auto-complete":"on","label-position":"left"},[F,s("div",b,[s("span",L,[r(a,{"icon-class":"user"})]),l(s("input",{ref:"username","onUpdate:modelValue":o[0]||(o[0]=n=>e.loginForm.username=n),placeholder:"Имя пользователя",name:"username",type:"text",tabindex:"1","auto-complete":"on"},null,512),[[u,e.loginForm.username]])]),s("div",T,[s("span",V,[r(a,{"icon-class":"password"})]),l((d(),p("input",{key:e.passwordType,ref:"password","onUpdate:modelValue":o[1]||(o[1]=n=>e.loginForm.password=n),type:e.passwordType,placeholder:"Пароль",name:"password",tabindex:"2","auto-complete":"on"},null,8,k)),[[w,e.loginForm.password]]),s("span",{class:"show-pwd",onClick:o[2]||(o[2]=(...n)=>i.showPwd&&i.showPwd(...n))},[r(a,{"icon-class":e.passwordType==="password"?"eye":"eye-open"},null,8,["icon-class"])])]),s("button",{type:"primary",style:{width:"100%","margin-bottom":"30px"},onClick:o[3]||(o[3]=g((...n)=>i.handleLogin&&i.handleLogin(...n),["prevent"]))},"Войти"),I],8,x)])}const S=c(y,[["render",B],["__scopeId","data-v-bd011244"]]);export{S as default};
