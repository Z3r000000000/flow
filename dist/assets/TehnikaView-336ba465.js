import{_ as p,r as d,o as s,c as o,a,b as i,w as r,F as m,l as u,d as f,e as l,H as g,t as c,f as k,g as w,h as y,i as V,p as I,j as x,k as S}from"./index-0448054d.js";const n=t=>(I("data-v-8ab023b7"),t=t(),x(),t),N={class:"overlay"},T=n(()=>a("div",{class:"logo"},[a("img",{src:S,accesskey:"Логотп"})],-1)),j=n(()=>a("br",null,null,-1)),B={class:"collage"},C={class:"image-container"},F=["src","alt"],H={class:"container-block"},D={class:"description-container"},E={class:"description"},L={class:"price"},O=f('<footer data-v-8ab023b7><div class="footer" data-v-8ab023b7><div class="row" data-v-8ab023b7><a href="#" data-v-8ab023b7><img src="'+k+'" alt="" data-v-8ab023b7></a><a href="#" data-v-8ab023b7><img src="'+w+'" alt="" data-v-8ab023b7></a><a href="#" data-v-8ab023b7><img src="'+y+'" alt="" data-v-8ab023b7></a><a href="#" data-v-8ab023b7><img src="'+V+'" alt="" data-v-8ab023b7></a></div><div class="row" data-v-8ab023b7><ul data-v-8ab023b7><li data-v-8ab023b7><a href="#" data-v-8ab023b7>О компании</a></li><li data-v-8ab023b7><a href="#" data-v-8ab023b7>Новости</a></li><li data-v-8ab023b7><a href="#" data-v-8ab023b7>Запчасти и ремонт</a></li><li data-v-8ab023b7><a href="#" data-v-8ab023b7>Техника</a></li><li data-v-8ab023b7><a href="#" data-v-8ab023b7>Контакты</a></li></ul></div><div class="row" data-v-8ab023b7> Компания «НК Сервис» предоставляет спецтехнику в аренду по Красноярску и краю строительным организациям и частным лицам. </div></div></footer>',1),q={data(){return{items:[]}},created(){this.fetchItems()},methods:{fetchItems(){fetch("https://8962a1eb5edc700e.mokky.dev/items").then(t=>t.json()).then(t=>{this.items=t}).catch(t=>{console.error("Ошибка при получении данных:",t)})}}},z=Object.assign(q,{__name:"TehnikaView",setup(t){return(_,A)=>{const b=d("router-link"),v=d("p1");return s(),o("body",null,[a("header",null,[a("div",N,[i(b,{to:"/"},{default:r(()=>[T]),_:1}),i(v,{class:"telephone"},{default:r(()=>[l("+7 (391) 250-1662 "),j,l("+7 (391) 271-1662")]),_:1})])]),i(g),a("div",B,[(s(!0),o(m,null,u(_.items,(e,h)=>(s(),o("div",{key:h,class:"item-container"},[a("div",C,[a("img",{class:"main-image",src:e.images.length>0?e.images[0].url:"",alt:e.title},null,8,F)]),a("div",H,[a("h1",null,c(e.title),1),a("div",D,[a("p",E,c(e.description),1)]),a("p",L,"Цена: от "+c(e.price)+" р./час",1)])]))),128))]),O])}}}),J=p(z,[["__scopeId","data-v-8ab023b7"]]);export{J as default};
