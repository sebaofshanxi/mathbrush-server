MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){var t=MathJax.ElementJax.mml,a=MathJax.OutputJax["HTML-CSS"];t.ms.Augment({toHTML:function(t){t=this.HTMLhandleSize(this.HTMLcreateSpan(t));var a=this.getValues("lquote","rquote"),e=this.data.join("");return this.HTMLhandleVariant(t,this.HTMLgetVariant(),a.lquote+e+a.rquote),this.HTMLhandleSpace(t),this.HTMLhandleColor(t),this.HTMLhandleDir(t),t}}),t.ms.prototype.defaults.mathvariant="monospace",MathJax.Hub.Startup.signal.Post("HTML-CSS ms Ready"),MathJax.Ajax.loadComplete(a.autoloadDir+"/ms.js")});