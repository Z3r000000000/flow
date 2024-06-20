import{_ as w}from"./sidebar-7ed2eb4e.js";import{_ as P,o as i,c as n,a as e,q as u,v as p,F as h,x as v,p as k,j as y,u as f,y as U,t as b,b as g}from"./index-0a2108c4.js";const x={name:"AddProduct",data(){return{product:{title:"",price:0,images:[{url:""}]}}},methods:{addImage(){this.product.images.push({url:""})},removeImage(t){this.product.images.splice(t,1)},saveProduct(){fetch("https://8962a1eb5edc700e.mokky.dev/items",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.product)}).then(t=>{t.ok?(console.log("Товар сохранен успешно"),this.product={title:"",price:0,images:[{url:""}]}):console.error("Ошибка при сохранении товара")}).catch(t=>{console.error("Ошибка при сохранении товара:",t)})}}},_=t=>(k("data-v-e277766a"),t=t(),y(),t),S={class:"add-product"},V={class:"product-form"},E=_(()=>e("h2",null,"Добавление Товара",-1)),T={class:"form-group"},D=_(()=>e("label",{for:"title"},"Название:",-1)),L={class:"form-group"},$=_(()=>e("label",{for:"price"},"Цена:",-1)),j={class:"form-group"},A=_(()=>e("label",null,"Изображения:",-1)),N=["onUpdate:modelValue"],B=["onClick"];function F(t,o,m,M,l,s){return i(),n("div",S,[e("div",V,[E,e("div",T,[D,u(e("input",{type:"text",id:"title","onUpdate:modelValue":o[0]||(o[0]=d=>l.product.title=d)},null,512),[[p,l.product.title]])]),e("div",L,[$,u(e("input",{type:"number",id:"price","onUpdate:modelValue":o[1]||(o[1]=d=>l.product.price=d)},null,512),[[p,l.product.price]])]),e("div",j,[A,(i(!0),n(h,null,v(l.product.images,(d,r)=>(i(),n("div",{key:r,class:"image-input"},[u(e("input",{type:"text","onUpdate:modelValue":a=>d.url=a,placeholder:"URL изображения"},null,8,N),[[p,d.url]]),e("button",{onClick:a=>s.removeImage(r)},"Удалить",8,B)]))),128)),e("button",{onClick:o[2]||(o[2]=(...d)=>s.addImage&&s.addImage(...d)),class:"add-image-btn"},"Добавить Изображение")]),e("button",{onClick:o[3]||(o[3]=(...d)=>s.saveProduct&&s.saveProduct(...d)),class:"save-btn"},"Сохранить")])])}const I=P(x,[["render",F],["__scopeId","data-v-e277766a"]]);const O={name:"ProductTable",data(){return{products:[],showModal:!1,editedProduct:{id:null,title:"",price:0,images:[]}}},mounted(){this.fetchProducts()},methods:{fetchProducts(){fetch("https://8962a1eb5edc700e.mokky.dev/items").then(t=>t.json()).then(t=>{this.products=t}).catch(t=>{console.error("Ошибка при получении товаров:",t)})},getImageUrl(t){return`https://8962a1eb5edc700e.mokky.dev/itemsimage?carId=${t}`},showEditModal(t){this.editedProduct={...t},this.showModal=!0},closeModal(){this.showModal=!1,this.editedProduct=null},addImage(){this.editedProduct.images.push(null)},removeImage(t){this.editedProduct.images.splice(t,1)},handleImageUpload(t,o){this.editedProduct.images[o]=t.target.files[0]},saveProduct(){const t=new FormData;t.append("title",this.editedProduct.title),t.append("price",this.editedProduct.price),this.editedProduct.images.forEach((o,m)=>{o&&t.append(`images[${m}]`,o)}),fetch(`https://8962a1eb5edc700e.mokky.dev/items?id=${this.editedProduct.id}`,{method:"PATCH",body:t}).then(()=>{console.log("Товар обновлен успешно"),this.fetchProducts(),this.closeModal()}).catch(o=>{console.error("Ошибка при обновлении товара:",o)})}},deleteProduct(t){fetch(`https://8962a1eb5edc700e.mokky.dev/items/${t}`,{method:"DELETE"}).then(()=>{console.log("Товар удален успешно"),this.fetchProducts()}).catch(o=>{console.error("Ошибка при удалении товара:",o)})}},c=t=>(k("data-v-28084479"),t=t(),y(),t),q={class:"list-table"},H={class:"product-table"},J=c(()=>e("h2",null,"Список Товаров",-1)),R=c(()=>e("thead",null,[e("tr",null,[e("th",null,"Изображение"),e("th",null,"Название"),e("th",null,"Цена"),e("th",null,"Действия")])],-1)),z=["src"],G=["onClick"],K=["onClick"],Q={key:0,class:"modal"},W={class:"modal-content"},X=c(()=>e("h2",null,"Редактирование товара",-1)),Y=c(()=>e("label",{for:"title"},"Название:",-1)),Z=c(()=>e("label",{for:"price"},"Цена:",-1)),ee=c(()=>e("h3",null,"Изображения",-1)),te=["onChange"],oe=["onClick"],de=c(()=>e("button",{type:"submit"},"Сохранить",-1));function se(t,o,m,M,l,s){return i(),n("div",q,[e("div",H,[J,e("table",null,[R,e("tbody",null,[(i(!0),n(h,null,v(l.products,d=>(i(),n("tr",{key:d.id},[e("td",null,[e("img",{src:s.getImageUrl(d.id),alt:"Product Image"},null,8,z)]),e("td",null,b(d.title),1),e("td",null,b(d.price),1),e("td",null,[e("button",{onClick:r=>s.showEditModal(d)},"Редактировать",8,G),e("button",{onClick:r=>t.deleteProduct(d.id)},"Удалить",8,K)])]))),128))])])]),l.showModal?(i(),n("div",Q,[e("div",W,[e("span",{class:"close-button",onClick:o[0]||(o[0]=(...d)=>s.closeModal&&s.closeModal(...d))},"×"),X,e("form",{onSubmit:o[4]||(o[4]=f((...d)=>s.saveProduct&&s.saveProduct(...d),["prevent"]))},[Y,u(e("input",{type:"text",id:"title","onUpdate:modelValue":o[1]||(o[1]=d=>l.editedProduct.title=d)},null,512),[[p,l.editedProduct.title]]),Z,u(e("input",{type:"number",id:"price","onUpdate:modelValue":o[2]||(o[2]=d=>l.editedProduct.price=d)},null,512),[[p,l.editedProduct.price]]),ee,(i(!0),n(h,null,v(l.editedProduct.images,(d,r)=>(i(),n("div",{key:r},[e("input",{type:"text",onChange:a=>s.handleImageUpload(a,r)},null,40,te),e("button",{onClick:f(a=>s.removeImage(r),["prevent"])},"Удалить",8,oe)]))),128)),e("button",{type:"button",onClick:o[3]||(o[3]=(...d)=>s.addImage&&s.addImage(...d))},"Добавить изображение"),de],32)])])):U("",!0)])}const C=P(O,[["render",se],["__scopeId","data-v-28084479"]]),le={name:"AdminShop",components:{AddItem:I,ItemList:C}},re=Object.assign(le,{setup(t){return(o,m)=>(i(),n(h,null,[g(w),g(I),g(C)],64))}});export{re as default};
