YUI.add("slider-ticks",function(a){a.Plugin.SliderTicks=a.Base.create("ticks",a.Plugin.Base,[],{CONTAINER_TEMPLATE:'<table class="{tableClass}">'+"<thead><tr></tr></thead>"+"</table>",TICK_TEMPLATE:'<th class="{tickClass}">'+"<label>{value}</label>"+"</th>",initializer:function(){if(this.get("host").get("rendered")){this.renderUI();this.bindUI();this.syncUI();}else{this.afterHostMethod("renderUI",this.renderUI);this.afterHostMethod("bindUI",this.bindUI);}this.afterHostMethod("syncUI",this.syncUI);},renderUI:function(){this._renderTickContainer();},_renderTickContainer:function(){var b=this.get("host"),c=b.get("contentBox").one("."+b.getClassName("rail"));this._container=a.Node.create(a.Lang.sub(this.CONTAINER_TEMPLATE,{tableClass:b.getClassName("tick","container")}));c.insert(this._container,"before");},bindUI:function(){this.afterHostEvent("lengthChange",this._afterHostLengthChange);this.afterHostEvent("minChange",this._afterHostAttrChange);this.afterHostEvent("maxChange",this._afterHostAttrChange);this.after("valuesChange",this._afterValuesChange);if(this.get("stickyValues")){this._setThumbTicks(true);}},syncUI:function(){var c=this.get("host").get("length"),b=this.get("values");this._renderTicks();this._setContainerWidth(c,b);},_renderTicks:function(){var g=this.get("host"),d=this.get("values"),f=g.get("min"),b=g.get("max"),h=(b-f)/(d-1),c="",e;for(e=0;e<d;++e){c+=a.Lang.sub(this.TICK_TEMPLATE,{tickClass:g.getClassName("tick"),value:Math.min(Math.round(f+(e*h)),b)});}this._container.setContent(c);},_afterHostLengthChange:function(b){this._setContainerWidth(b.newVal,this.get("values"));},_afterHostAttrChange:function(b){this.syncUI();},_afterValuesChange:function(c){var b=this.get("host").get("length");this._setContainerWidth(b,c.newVal);},_setContainerWidth:function(e,b){e=parseInt(e,10);var d=this.get("host").thumb.get("offsetWidth")-this.get("thumbDelta"),c=b*Math.floor((e-d)/(b-1));this._container.setStyles({width:c+"px",marginLeft:(d/2)+"px"});},_setThumbTicks:function(b){if(b){}else{}},destructor:function(){this._container.remove().destroy(true);if(this.get("stickyValues")){this._setThumbTicks(false);}}},{NS:"ticks",ATTRS:{values:{value:5,validator:a.Lang.isNumber},stickyValues:{value:false,validator:a.Lang.isBoolean,writeOnce:true},thumbDelta:{value:2,validator:a.Lang.isNumber}}});},"@VERSION@",{requires:["range-slider","base-build","plugin"]});