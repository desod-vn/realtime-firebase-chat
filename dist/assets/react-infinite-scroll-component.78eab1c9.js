import{r as S}from"./react.64c06762.js";import{j as c,a as E}from"./react-cssfx-loading.092a2660.js";var p=function(o,r){return p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},p(o,r)};function _(o,r){p(o,r);function t(){this.constructor=o}o.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var a=function(){return a=Object.assign||function(r){for(var t,e=1,n=arguments.length;e<n;e++){t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i])}return r},a.apply(this,arguments)};function L(o,r,t,e){var n,i=!1,s=0;function u(){n&&clearTimeout(n)}function g(){u(),i=!0}typeof r!="boolean"&&(e=t,t=r,r=void 0);function f(){var w=this,d=Date.now()-s,y=arguments;if(i)return;function h(){s=Date.now(),t.apply(w,y)}function T(){n=void 0}e&&!n&&h(),u(),e===void 0&&d>o?h():r!==!0&&(n=setTimeout(e?T:h,e===void 0?o-d:o))}return f.cancel=g,f}var l={Pixel:"Pixel",Percent:"Percent"},m={unit:l.Percent,value:.8};function v(o){return typeof o=="number"?{unit:l.Percent,value:o*100}:typeof o=="string"?o.match(/^(\d*(\.\d+)?)px$/)?{unit:l.Pixel,value:parseFloat(o)}:o.match(/^(\d*(\.\d+)?)%$/)?{unit:l.Percent,value:parseFloat(o)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),m):(console.warn("scrollThreshold should be string or number"),m)}var x=function(o){_(r,o);function r(t){var e=o.call(this,t)||this;return e.lastScrollTop=0,e.actionTriggered=!1,e.startY=0,e.currentY=0,e.dragging=!1,e.maxPullDownDistance=0,e.getScrollableTarget=function(){return e.props.scrollableTarget instanceof HTMLElement?e.props.scrollableTarget:typeof e.props.scrollableTarget=="string"?document.getElementById(e.props.scrollableTarget):(e.props.scrollableTarget===null&&console.warn(`You are trying to pass scrollableTarget but it is null. This might
        happen because the element may not have been added to DOM yet.
        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.
      `),null)},e.onStart=function(n){e.lastScrollTop||(e.dragging=!0,n instanceof MouseEvent?e.startY=n.pageY:n instanceof TouchEvent&&(e.startY=n.touches[0].pageY),e.currentY=e.startY,e._infScroll&&(e._infScroll.style.willChange="transform",e._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},e.onMove=function(n){!e.dragging||(n instanceof MouseEvent?e.currentY=n.pageY:n instanceof TouchEvent&&(e.currentY=n.touches[0].pageY),!(e.currentY<e.startY)&&(e.currentY-e.startY>=Number(e.props.pullDownToRefreshThreshold)&&e.setState({pullToRefreshThresholdBreached:!0}),!(e.currentY-e.startY>e.maxPullDownDistance*1.5)&&e._infScroll&&(e._infScroll.style.overflow="visible",e._infScroll.style.transform="translate3d(0px, "+(e.currentY-e.startY)+"px, 0px)")))},e.onEnd=function(){e.startY=0,e.currentY=0,e.dragging=!1,e.state.pullToRefreshThresholdBreached&&(e.props.refreshFunction&&e.props.refreshFunction(),e.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){e._infScroll&&(e._infScroll.style.overflow="auto",e._infScroll.style.transform="none",e._infScroll.style.willChange="unset")})},e.onScrollListener=function(n){typeof e.props.onScroll=="function"&&setTimeout(function(){return e.props.onScroll&&e.props.onScroll(n)},0);var i=e.props.height||e._scrollableNode?n.target:document.documentElement.scrollTop?document.documentElement:document.body;if(!e.actionTriggered){var s=e.props.inverse?e.isElementAtTop(i,e.props.scrollThreshold):e.isElementAtBottom(i,e.props.scrollThreshold);s&&e.props.hasMore&&(e.actionTriggered=!0,e.setState({showLoader:!0}),e.props.next&&e.props.next()),e.lastScrollTop=i.scrollTop}},e.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},e.throttledOnScrollListener=L(150,e.onScrollListener).bind(e),e.onStart=e.onStart.bind(e),e.onMove=e.onMove.bind(e),e.onEnd=e.onEnd.bind(e),e}return r.prototype.componentDidMount=function(){if(typeof this.props.dataLength=="undefined")throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),typeof this.props.initialScrollY=="number"&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),typeof this.props.refreshFunction!="function"))throw new Error(`Mandatory prop "refreshFunction" missing.
          Pull Down To Refresh functionality will not work
          as expected. Check README.md for usage'`)},r.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},r.prototype.componentDidUpdate=function(t){this.props.dataLength!==t.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},r.getDerivedStateFromProps=function(t,e){var n=t.dataLength!==e.prevDataLength;return n?a(a({},e),{prevDataLength:t.dataLength}):null},r.prototype.isElementAtTop=function(t,e){e===void 0&&(e=.8);var n=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,i=v(e);return i.unit===l.Pixel?t.scrollTop<=i.value+n-t.scrollHeight+1:t.scrollTop<=i.value/100+n-t.scrollHeight+1},r.prototype.isElementAtBottom=function(t,e){e===void 0&&(e=.8);var n=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,i=v(e);return i.unit===l.Pixel?t.scrollTop+n>=t.scrollHeight-i.value:t.scrollTop+n>=i.value/100*t.scrollHeight},r.prototype.render=function(){var t=this,e=a({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),i=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return c("div",{style:i,className:"infinite-scroll-component__outerdiv",children:E("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(s){return t._infScroll=s},style:e,children:[this.props.pullDownToRefresh&&c("div",{style:{position:"relative"},ref:function(s){return t._pullDown=s},children:c("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance},children:this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent})}),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage]})})},r}(S.exports.Component);export{x as I};
