(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(49)},39:function(e,t,a){},42:function(e,t,a){},46:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(19),l=a.n(i),o=a(4),c=a(5),s=a(7),u=a(6),m=a(8),d=a(52),p=a(51),h=a(11),f=a(20),E=a.n(f),b=a(21),v=a.n(b),w=a(12),g=a.n(w),k=a(13),y=a.n(k),O=(a(39),a(50)),j=(a(42),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={hoveringOnLastItem:!1},a.hoverHandler=function(e){a.setState({hoveringOnLastItem:e})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.hoveringOnLastItem;return r.a.createElement("div",{className:"Navigation"},r.a.createElement("div",{className:"logo"},"BBBGLS"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(O.a,{to:"/"},"About me")),r.a.createElement("li",null,r.a.createElement(O.a,{to:"/abilities"},"Abilities")),r.a.createElement("li",null,r.a.createElement(O.a,{to:"/work"},"Work")),r.a.createElement("li",{className:t?"hover":""},r.a.createElement(O.a,{to:"/education"},"Education")),r.a.createElement("li",{onMouseEnter:function(){return e.hoverHandler(!0)},onMouseLeave:function(){return e.hoverHandler(!1)}},r.a.createElement(O.a,{to:"/contact"},"Contact"))))}}]),t}(n.PureComponent)),S=(a(46),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.title;return r.a.createElement("div",{className:"text-section"},r.a.createElement("span",{className:"text-section-title"},a),t)}}]),t}(n.PureComponent)),x=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.name,n=e.reference;return r.a.createElement("div",{className:"Block ".concat(a),ref:n},t)}}]),t}(n.PureComponent);x.defaultProps={children:null,reference:null},x.Text=S;var L=function(e){return r.a.createElement("span",{className:"bold"},e.children)},V=function(e){return r.a.createElement("span",{className:"italic"},e.children)},M=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement(L,null,"UI Libraries |")," Creation and maintenance of smaller reusable UI components that create efficiency and a consistent experience."),r.a.createElement("p",null,r.a.createElement(L,null,"JavaScript |")," Preferred programming language for web. Knowledge is up to  date with the latest ECMAScript standard and libraries like ReactJS and JQuery."),r.a.createElement("p",null,r.a.createElement(L,null,"UX |")," Understanding of user experience and how to improve it. Effective in communication with designers."),r.a.createElement("p",null,r.a.createElement(L,null,"Responsive Design |")," Ability to create layouts that work for different screen sizes."))},W=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"My name is Bob Beugels. I am a ",r.a.createElement(L,null,"Front-End Developer")," specialised in",r.a.createElement(L,null," user interfaces")," and a bachelor\u2019s degree in design."),r.a.createElement("p",null,"My ",r.a.createElement(L,null,"passion is creation"),". After building with Lego for several years as a child I took great interest in design & development. I have created many ",r.a.createElement(L,null,"web applications")," ever since."),r.a.createElement("p",null,"My character could be described as introverted, intu\xefve, confident, strategic, thoughtful, calm and independent. I like solving complex problems and often see possibilities for improvement."))},P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement(L,null,"DynaCommerce |")," ",r.a.createElement(V,null,"Employer, 2017\u2009\u2013\u2009now"),r.a.createElement("br",null),"Front-End Developer for product R&D and also working on project for VodafoneZiggo. A huge part of R&D was developing the component library and customer search. Worked agile (scrum) with new and old technologies like ReactJS, JQuery, Magento, PHP and Docker."),r.a.createElement("p",null,r.a.createElement(L,null,"Coolmix |")," ",r.a.createElement(V,null,"Client, 2015\u2009\u2013\u20092017"),r.a.createElement("br",null),"Did social media marketing including graphic design and product photography. Continuous Magento webshop front-end development including UI Design, UX and conversion optimalisation. First to second year a 400% growth in online revenue alone."))},C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement(L,null,"Visual Communication |")," ",r.a.createElement(V,null,"Bachelor of Arts, 2012\u2009\u2013\u20092015"),r.a.createElement("br",null),"Studied Visual Communication to learn more about digital and print design. Did research into cognitive psychology to get a better understanding of people behaviour and persuasion."),r.a.createElement("p",null,r.a.createElement(L,null,"Communication & Multimedia Design |")," ",r.a.createElement(V,null,"2010\u2009\u2013\u20092012"),r.a.createElement("br",null),"Learned the foundations of Usability, User Centered Design principles, UX Research, Interaction Design and Marketing."))},D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={scrollPosition:0,maxScrollValue:0,maxScrollbarValue:0,viewPortWidth:0,portrait:!1},a.snapToNearestSection=function(){var e=a.props,t=e.history,n=e.location,r=a.state,i=r.viewPortWidth,l=r.portrait,o=a.work.current.offsetLeft,c=a.abilities.current.offsetLeft,s=a.education.current.offsetLeft,u=a.contact.current.offsetLeft,m=a.scrollarea.current.scrollLeft,d=a.aboutMe.current.offsetWidth/2,p=l?.019:.007;m>=u-d&&"/contact"!==n.path?(t.push("/contact"),l?a.setView(u-i*p,0):a.setView(s-i*p,0)):m>=s-d&&"/education"!==n.path?(t.push("/education"),a.setView(s-i*p,0)):m>=o-d&&"/work"!==n.path?(t.push("/work"),a.setView(o-i*p,0)):m>=c-d&&"/abilities"!==n.path?(t.push("/abilities"),a.setView(c-i*p,0)):m<c-d&&"/"!==n.path&&(t.push("/"),a.setView(0,0))},a.scrollTo=function(e){var t=a.state,n=t.viewPortWidth,r=t.portrait,i=r?.019:.007;switch(e){case"/abilities":a.setView(a.abilities.current.offsetLeft-n*i,0);break;case"/work":a.setView(a.work.current.offsetLeft-n*i,0);break;case"/education":a.setView(a.education.current.offsetLeft-n*i,0);break;case"/contact":r?a.setView(a.contact.current.offsetLeft-n*i,0):a.setView(a.education.current.offsetLeft-n*i,0);break;default:a.setView(0,0)}},a.setView=function(e,t){g.a.left(a.scrollarea.current,e,{duration:250,ease:y.a.inOutSine}),g.a.top(a.scrollarea.current,t,{duration:250,ease:y.a.inOutSine})},a.calculateScrollbarPosition=function(){var e=a.state,t=e.maxScrollValue,n=e.maxScrollbarValue,r=a.scrollarea.current.scrollLeft/t*n;a.setState({scrollPosition:r})},a.updateWindowSizes=function(){var e=Math.max(document.documentElement.clientWidth,window.innerWidth||0),t=Math.max(document.documentElement.clientHeight,window.innerHeight||0),n=a.scrollarea.current.scrollWidth-e,r=e-a.scrollbar.current.offsetWidth;a.setState({viewPortWidth:e,maxScrollValue:n,maxScrollbarValue:r,portrait:t>e})},a.scrollarea=r.a.createRef(),a.scrollbar=r.a.createRef(),a.aboutMe=r.a.createRef(),a.abilities=r.a.createRef(),a.work=r.a.createRef(),a.education=r.a.createRef(),a.contact=r.a.createRef(),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location;this.scrollTo(e.pathname),this.updateWindowSizes(),window.addEventListener("resize",this.updateWindowSizes),this.scrollarea.current.addEventListener("scroll",v()(this.snapToNearestSection,50)),this.scrollarea.current.addEventListener("scroll",this.calculateScrollbarPosition)}},{key:"componentDidUpdate",value:function(e){var t=this.props.location;t.pathname!==e.location.pathname&&this.scrollTo(t.pathname)}},{key:"render",value:function(){var e=this.state.scrollPosition;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"scrollbar",ref:this.scrollbar,style:{left:e}}),r.a.createElement("div",{className:"scrollarea-outer",ref:this.scrollarea},r.a.createElement("div",{className:"scrollarea-inner"},r.a.createElement(j,null),r.a.createElement(x,{name:"about-me",reference:this.aboutMe},r.a.createElement(x.Text,{title:"Hello"},r.a.createElement(W,null))),r.a.createElement(x,{name:"abilities",reference:this.abilities},r.a.createElement(x.Text,{title:"Abilities"},r.a.createElement(M,null))),r.a.createElement(x,{name:"work",reference:this.work},r.a.createElement(x.Text,{title:"Work"},r.a.createElement(P,null))),r.a.createElement(x,{name:"education",reference:this.education},r.a.createElement(x.Text,{title:"Education"},r.a.createElement(C,null))),r.a.createElement(x,{name:"contact",reference:this.contact},r.a.createElement(x.Text,{title:"Contact"},r.a.createElement("p",null,"Form here"))))))}}]),t}(n.PureComponent),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={portrait:!1},a.viewportOrientation=function(){var e=Math.max(document.documentElement.clientWidth,window.innerWidth||0),t=Math.max(document.documentElement.clientHeight,window.innerHeight||0);a.setState({portrait:t>e})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.viewportOrientation(),window.addEventListener("resize",this.viewportOrientation)}},{key:"render",value:function(){var e=this.state.portrait;return r.a.createElement("div",{className:E()("device-wrapper",{portrait:e&&!h.isMobile,landscape:!e,mobile:h.isMobile})},r.a.createElement(d.a,null,r.a.createElement(p.a,{path:"/",component:D})))}}]),t}(n.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,2,1]]]);
//# sourceMappingURL=main.5b8dd713.chunk.js.map