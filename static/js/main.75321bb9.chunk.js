(this["webpackJsonpreact-image-board"]=this["webpackJsonpreact-image-board"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(10),r=a.n(c),s=(a(15),a(9)),l=a(3),o=a(4),u=a(5),d=a(2),b=a(7),h=a(6),m=a(0),j=[{caption:"Kill Bill 1",url:"https://i.ytimg.com/vi/c_dNIXwrbzY/maxresdefault.jpg"},{caption:"Kill Bill 2",url:"https://cbs6albany.com/resources/media/5f6814e5-2b26-428a-9bc7-5a4cd22834f6-large16x9_kllbillvolume2miramax.jpg?1589779632158"},{caption:"Cute Leo 3",url:"https://media.gq.com/photos/5582c196e52bc4b477a9be0a/master/w_628,h_434,c_limit/copilot-entertainment-201412-1418765571371_leonardo-dicaprio-saint-tropez-boating.jpg"}],g=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={url:"",caption:""},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"handleChange",value:function(e){e.preventDefault(),this.setState(Object(l.a)({},e.target.name,e.target.value)),console.log(e.target.value)}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.addImg(this.state)}},{key:"render",value:function(){var e;return Object(m.jsx)("form",{onSubmit:this.handleSubmit,children:Object(m.jsxs)("div",{className:"imgForm",children:[Object(m.jsx)("label",{htmlFor:"url",children:"Add an Image URL"}),Object(m.jsx)("input",(e={id:"url",name:"url"},Object(l.a)(e,"name","url"),Object(l.a)(e,"onChange",this.handleChange),Object(l.a)(e,"placeholder","enter url"),e)),Object(m.jsx)("label",{htmlFor:"caption",children:"Add an Image Caption"}),Object(m.jsx)("textarea",{rows:"2",id:"caption",name:"caption",onChange:this.handleChange,placeholder:"caption here"}),Object(m.jsx)("button",{children:"Submit Image"})]})})}}]),a}(n.Component),p=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.images.map((function(e,t){return Object(m.jsx)("div",{className:"imgList",children:Object(m.jsxs)("div",{className:"imgCard",children:[Object(m.jsx)("img",{src:e.url,alt:""}),Object(m.jsx)("span",{children:e.caption})]})},t)}));return Object(m.jsx)("div",{children:e})}}]),a}(n.Component),O=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={images:[]},n.addImg=n.addImg.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.setState({images:j})}},{key:"addCaption",value:function(e){var t=Object(s.a)(this.state.images);t.push(e),this.setState({images:t})}},{key:"addImg",value:function(e){var t=Object(s.a)(this.state.images);t.push(e),this.setState({images:t})}},{key:"render",value:function(){return console.log(this.state),Object(m.jsxs)("div",{className:"imgboard",children:[Object(m.jsx)(g,{addImg:this.addImg}),Object(m.jsx)(p,{images:this.state.images})]})}}]),a}(n.Component),v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),c(e),r(e)}))};r.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root")),v()}},[[17,1,2]]]);
//# sourceMappingURL=main.75321bb9.chunk.js.map