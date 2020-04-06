var t,e,i,s,n,r=function(t,e,i){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,i),i},o=function(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)};class l{constructor(h,c=!1){t.set(this,l.getIntegerBlock()),e.set(this,{countX:0,countY:0}),this.containerResizedObserver=new ResizeObserver(this.containerResized.bind(this)),this.redraw=()=>{},i.set(this,void 0),s.set(this,void 0),n.set(this,void 0),r(this,i,h),this.registerListeners(),r(this,s,document.createElement("canvas"));const a=o(this,s).getContext("2d",{alpha:c});if(null==a)throw new TypeError('HTMLElement.getContext("2d") returned null!');r(this,n,a),h.appendChild(o(this,s))}static getIntegerBlock(){const t=window.devicePixelRatio;for(let e=1;e<l.integerBlockLimit;e++)if(Number.isInteger(t*e))return{css:e,display:t*e};return{css:1,display:1}}get integerBlock(){return{css:0|o(this,t).css,display:0|o(this,t).display}}get integerBlockCount(){return{countX:0|o(this,e).countX,countY:0|o(this,e).countY}}setCanvasCSSSize(t,e){o(this,s).style.width=`${t}px`,o(this,s).style.height=`${e}px`}setContextSize(t,e){o(this,s).width=t,o(this,s).height=e,this.redraw()}containerResized(t){const i=t[0].borderBoxSize,s=i.inlineSize,n=i.blockSize,{css:r,display:l}=this.integerBlock,h=s/r|0,c=n/r|0;o(this,e).countX=h,o(this,e).countY=c,this.setCanvasCSSSize(h*r,c*r),this.setContextSize(h*l,c*l)}registerListeners(){this.containerResizedObserver.observe(o(this,i)),window.addEventListener("resize",this.setIntegerBlock.bind(this))}setIntegerBlock(){r(this,t,l.getIntegerBlock())}get container(){return o(this,i)}get canvas(){return o(this,s)}get ctx(){return o(this,n)}set fillStyle(t){o(this,n).fillStyle=t}fillRectColor(t,e,i,s,r){o(this,n).fillStyle=r,o(this,n).fillRect(0|t,0|e,0|i,0|s)}fillRect(t,e,i,s){o(this,n).fillRect(0|t,0|e,0|i,0|s)}fillSquare(t,e,i){o(this,n).fillRect(0|t,0|e,0|i,0|i)}fillSquareColor(t,e,i,s){o(this,n).fillStyle=s,o(this,n).fillRect(0|t,0|e,0|i,0|i)}}t=new WeakMap,e=new WeakMap,i=new WeakMap,s=new WeakMap,n=new WeakMap,l.integerBlockLimit=100;export default l;
//# sourceMappingURL=lib.js.map
