

(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {}; var ss = {}; var img = {};
  lib.ssMetadata = [];
  (lib.AnMovieClip = function () {
      this.actionFrames = [];
      this.ignorePause = false;
      this.gotoAndPlay = function (positionOrLabel) {
          cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
      }
      this.play = function () {
          cjs.MovieClip.prototype.play.call(this);
      }
      this.gotoAndStop = function (positionOrLabel) {
          cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
      }
      this.stop = function () {
          cjs.MovieClip.prototype.stop.call(this);
      }
  }).prototype = p = new cjs.MovieClip();
  // symbols:
  // helper functions:
  function mc_symbol_clone() {
      var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
      clone.gotoAndStop(this.currentFrame);
      clone.paused = this.paused;
      clone.framerate = this.framerate;
      return clone;
  }
  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
      var prototype = cjs.extend(symbol, cjs.MovieClip);
      prototype.clone = mc_symbol_clone;
      prototype.nominalBounds = nominalBounds;
      prototype.frameBounds = frameBounds;
      return prototype;
  }
  (lib.Tween24 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);
      // Layer_1
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#37FF08").s().p("AJcCVIiBgzQhOgfh2gdQh3geiJgFQiJgEg8AHQg8AHgYAEQgZADhXAVQhXAUheAkQheAkAKgaQAJgaAwgpQAvgpAxgeQAygeBVgfQBUggA/gNQA/gMCKgEQCLgFBuAjQBvAiBDApQBDAoAzAkQAyAlAeA1QAVAlgUAAQgIAAgPgGg");
      this.shape.setTransform(1.7108, -57.5239);
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f().s("#000000").ss(3, 1, 1).p("AlULYQAkALAmAJIBOAOQBRAKBXgEQAXgBAYgCQAjgDAigFQA7gIA4gNQBHgQBDgYQAYgJAXgKQAGgCAGgDQA2gYA0gdQABgBACgBQASgKASgLQAXgOAYgQQAVgPAVgQQCDhkA/iAQBHiTgTi3QgklZjfi4QgrgkgvgdQgTgMgUgLQgegRgggOIifg5QgCgBgCAAQgbgIgcgGQhQgRhXgHQgQgDhLAHIgrACIiXAWQh+AfhxBEQgSALgSAMQhhA/hXBcQjNDVAFESQAEESD0DzQAKAKAKAKQA/A7BIAqIBEAjQACABADABQAiAOAjAMQADABADABg");
      this.shape_1.setTransform(0.0196, -0.1255);
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#009999").s().p("Ai8L6IhOgOQgmgJgkgLIgGgCQgjgMgigOIgFgCIhEgjQhIgqg/g7IgUgUQj0jzgEkSQgFkSDNjVQBXhcBhg/IAkgXQBxhEB+gfICXgWIArgCQBLgHAQADQBXAHBQARQAcAGAbAIIAEABICfA5QAgAOAeARIAnAXQAvAdArAkQDfC4AkFZQATC3hHCTQg/CAiDBkIgqAfIgvAeIgkAVIgDACQg0Adg2AYIgMAFQgXAKgYAJQhDAYhHAQQg4ANg7AIQgiAFgjADIgvADIgzABQg8AAg5gHg");
      this.shape_2.setTransform(0.0196, -0.1255);
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#009999").s().p("AkMAdQBRAJBXgEIAwgDQAjgDAhgEQA7gIA4gNQBHgPBDgZIAAAFQjUBGi+AAQhFAAhCgJg");
      this.shape_3.setTransform(8.025, 73.2293);
      this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));
      this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-90.7, -78.5, 181.5, 156.8);
  (lib.Tween22 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);
      // Layer_1
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#37FF08").s().p("AiZCdQAMgpBgh/QBihsAlgWQAkgXAQgIQAQgJACAHQACAHgFBFQgFBFgjAKQgkAKhSAlIAAAAQgcAPg2A1QgxAvgcAjIAHgVg");
      this.shape.setTransform(-34.4964, -52.2081);
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f().s("#000000").ss(3, 1, 1).p("AkdNVQCfmEA4hwQBDiFA6hVQALgPAKgOQAxg/ArgeQBOANB0gBQASAAARgCQBfgKBPg/QBehMCMiHQCMiHjRAtQjSAtiEAgQiEAgh8AJQh9AIg/AeQhBAegfAoQgQATgQAYQgSAYgTAbQglA2giBbQgiBbgLAqQgLAogKAoQgOA4gNA5QgKAqhLDqAqxJNIE5p6QAJgTAJgSQAWguATgvQBXjOAtjaQAkiRgGhXQgLgmgrAdQiMA6h1CvQh5CfhQCvQgXAxgUAxQgTAugQAvQg0CMgfCPQgIAjgGAjQgZCGAJCE");
      this.shape_1.setTransform(0.0099, 12.102);
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#2B635D").s().p("AhJI8IAaAAIgggiIABgTIACgkIAziaQCbnRBchjQBph0BTANIBAADQh9BphKBqQhNBth8FnIgsCTIgZBWgAnYDVQgPipCHlNQCIlPA9A5QA8A4hiDRQhkDSh3Fmg");
      this.shape_2.setTransform(-33.5998, 45.1423);
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#37FF08").s().p("AgBBwQg2gIg8gEQg9gFg4gCQg5gChVAOQhVAOAIgQQAIgQALgHQAMgIAggNQAhgOCPgMQCagOBPgTQAmgKCWguQCVgvAvgFQAugGACAFQABAEgeAPQgfAPgVANIiqBhQiKBOg4AAIgJgBg");
      this.shape_3.setTransform(36.8693, -10.1544);
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#009999").s().p("AnQLFQBLjqAKgqIAbhxIAVhQQALgqAihbQAihbAlg2IAlgzQAQgYAQgTQAfgoBBgeQA/geB9gIQB8gJCEggQCEggDSgtQDRgtiMCHQiMCHheBMQhPA/hfAKQgRACgSAAQh0ABhOgNQgrAegxA/IgVAdQg6BVhDCFQg4BwifGEIgRgaIgDgGIAsiTQB8lnBNhuQBJhqB9hoIhBgDQhRgNhpBzQhcBjicHSIgzCaIgCAkIgFASQgvhpACgugACHiIQA5ACA8AFQA8AEA2AIQA2AICWhVICrhiQAVgNAegPQAfgPgCgEQgBgFgvAGQgvAFiVAvQiVAugnAKQhQAUiaAOQiPAMgfAOQghANgLAIQgMAHgIAQQgIAQBWgOQBJgMA1AAIAOAAgArsJNQB3lnBjjSQBjjQg8g4Qg9g5iIFOQiHFOAPCpIgzAAIABgGQgJiEAZiGIAOhGQAfiPA0iMQAQgvATguQAUgxAXgxQBQivB5ifQB1ivCMg6QArgdALAmQAGBXgkCRQgtDahXDOQgTAvgWAuIgSAlIk5J6IgVAvg");
      this.shape_4.setTransform(0.0099, 12.802);
      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f("#37FF08").s().p("AiZCdQAMgpBgh/QBihsAlgWQAkgXAQgIQAQgJACAHQACAHgFBFQgFBFgjAKQgkAKhSAlIAAAAQgcAPg2A1QgxAvgcAjIAHgVg");
      this.shape_5.setTransform(-34.4964, -52.2081);
      this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));
      this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-87.6, -74.7, 175.3, 177.5);
  (lib.Tween21 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);
      // Layer_1
      this.shape = new cjs.Shape();
      this.shape.graphics.f().s("#000000").ss(3, 1, 1).p("AgcHcQgShTgGiuQgHi8AejVQAdjVA2hQ");
      this.shape.setTransform(-0.244, 0);
      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
      this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-7.1, -49.1, 13.8, 98.2);
  (lib.Tween6 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);
      // Layer_1
      this.shape = new cjs.Shape();
      this.shape.graphics.f().s("#000000").ss(3, 1, 1).p("AlULYQAkALAmAJIBOAOQBRAKBXgEQAXgBAYgCQAjgDAigFQA7gIA4gNQBHgQBDgYQAYgJAXgKQAGgCAGgDQA2gYA0gdQABgBACgBQASgKASgLQAXgOAYgQQAVgPAVgQQCDhkA/iAQBHiTgTi3QgklZjfi4QgrgkgvgdQgTgMgUgLQgegRgggOIifg5QgCgBgCAAQgbgIgcgGQhQgRhXgHQgQgDhLAHIgrACIiXAWQh+AfhxBEQgSALgSAMQhhA/hXBcQjNDVAFESQAEESD0DzQAKAKAKAKQA/A7BIAqIBEAjQACABADABQAiAOAjAM");
      this.shape.setTransform(0.0196, -0.0255);
      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
      this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-90.7, -78.4, 181.5, 156.8);
  (lib.Tween4 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);
      // Layer_2
      this.shape = new cjs.Shape();
      this.shape.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape.setTransform(-9.775, 19.8, 1, 1, 0, 0, 180);
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_1.setTransform(-11.375, -14.35, 1, 1, 0, 0, 180);
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_2.setTransform(-11.575, 0.5, 1, 1, 0, 0, 180);
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_3.setTransform(-9.575, -7, 1, 1, 0, 0, 180);
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_4.setTransform(-10.325, 7.6, 1, 1, 0, 0, 180);
      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_5.setTransform(-14.875, 14.3, 1, 1, 0, 0, 180);
      this.shape_6 = new cjs.Shape();
      this.shape_6.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_6.setTransform(-33.275, 13.2, 1, 1, 0, 0, 180);
      this.shape_7 = new cjs.Shape();
      this.shape_7.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_7.setTransform(-40.525, 14.75, 1, 1, 0, 0, 180);
      this.shape_8 = new cjs.Shape();
      this.shape_8.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_8.setTransform(-26.075, 19.1, 1, 1, 0, 0, 180);
      this.shape_9 = new cjs.Shape();
      this.shape_9.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_9.setTransform(-23.925, 9.5, 1, 1, 0, 0, 180);
      this.shape_10 = new cjs.Shape();
      this.shape_10.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_10.setTransform(-21.975, 4.2, 1, 1, 0, 0, 180);
      this.shape_11 = new cjs.Shape();
      this.shape_11.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_11.setTransform(-17.425, -4.4, 1, 1, 0, 0, 180);
      this.shape_12 = new cjs.Shape();
      this.shape_12.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_12.setTransform(-20.375, -10.85, 1, 1, 0, 0, 180);
      this.shape_13 = new cjs.Shape();
      this.shape_13.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_13.setTransform(-21.475, -16.55, 1, 1, 0, 0, 180);
      this.shape_14 = new cjs.Shape();
      this.shape_14.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_14.setTransform(-27.275, -6.15, 1, 1, 0, 0, 180);
      this.shape_15 = new cjs.Shape();
      this.shape_15.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_15.setTransform(-32.875, 2.7, 1, 1, 0, 0, 180);
      this.shape_16 = new cjs.Shape();
      this.shape_16.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_16.setTransform(-37.625, -3.45, 1, 1, 0, 0, 180);
      this.shape_17 = new cjs.Shape();
      this.shape_17.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_17.setTransform(-32.925, -9.5, 1, 1, 0, 0, 180);
      this.shape_18 = new cjs.Shape();
      this.shape_18.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_18.setTransform(-30.275, -16.75, 1, 1, 0, 0, 180);
      this.shape_19 = new cjs.Shape();
      this.shape_19.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_19.setTransform(-44.025, 7.05, 1, 1, 0, 0, 180);
      this.shape_20 = new cjs.Shape();
      this.shape_20.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_20.setTransform(-45.325, -0.65, 1, 1, 0, 0, 180);
      this.shape_21 = new cjs.Shape();
      this.shape_21.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_21.setTransform(-41.075, -14.65, 1, 1, 0, 0, 180);
      this.shape_22 = new cjs.Shape();
      this.shape_22.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_22.setTransform(-59.825, -4.15, 1, 1, 0, 0, 180);
      this.shape_23 = new cjs.Shape();
      this.shape_23.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_23.setTransform(-44.125, 7, 1, 1, 0, 0, 180);
      this.shape_24 = new cjs.Shape();
      this.shape_24.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_24.setTransform(-45.075, -0.3, 1, 1, 0, 0, 180);
      this.shape_25 = new cjs.Shape();
      this.shape_25.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_25.setTransform(-41.175, -14.7, 1, 1, 0, 0, 180);
      this.shape_26 = new cjs.Shape();
      this.shape_26.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_26.setTransform(-60.125, 2.5, 1, 1, 0, 0, 180);
      this.shape_27 = new cjs.Shape();
      this.shape_27.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_27.setTransform(-53.725, 2.4, 1, 1, 0, 0, 180);
      this.shape_28 = new cjs.Shape();
      this.shape_28.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_28.setTransform(-52.375, -5.25, 1, 1, 0, 0, 180);
      this.shape_29 = new cjs.Shape();
      this.shape_29.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_29.setTransform(-52.475, -13.7, 1, 1, 0, 0, 180);
      this.shape_30 = new cjs.Shape();
      this.shape_30.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_30.setTransform(-62.925, -10.7, 1, 1, 0, 0, 180);
      this.shape_31 = new cjs.Shape();
      this.shape_31.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_31.setTransform(-69.925, -5.55, 1, 1, 0, 0, 180);
      this.shape_32 = new cjs.Shape();
      this.shape_32.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_32.setTransform(-71.375, -11.1, 1, 1, 0, 0, 180);
      this.shape_33 = new cjs.Shape();
      this.shape_33.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_33.setTransform(-77.825, -22, 1, 1, 0, 0, 180);
      this.shape_34 = new cjs.Shape();
      this.shape_34.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_34.setTransform(-72.975, -16.85, 1, 1, 0, 0, 180);
      this.shape_35 = new cjs.Shape();
      this.shape_35.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_35.setTransform(-64.025, -20.5, 1, 1, 0, 0, 180);
      this.shape_36 = new cjs.Shape();
      this.shape_36.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_36.setTransform(-2.875, 21.85);
      this.shape_37 = new cjs.Shape();
      this.shape_37.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_37.setTransform(-3.225, -14.4);
      this.shape_38 = new cjs.Shape();
      this.shape_38.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_38.setTransform(-1.075, 2.55);
      this.shape_39 = new cjs.Shape();
      this.shape_39.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_39.setTransform(-3.075, -4.95);
      this.shape_40 = new cjs.Shape();
      this.shape_40.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_40.setTransform(-2.325, 9.65);
      this.shape_41 = new cjs.Shape();
      this.shape_41.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_41.setTransform(2.225, 16.35);
      this.shape_42 = new cjs.Shape();
      this.shape_42.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_42.setTransform(20.625, 15.25);
      this.shape_43 = new cjs.Shape();
      this.shape_43.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_43.setTransform(27.875, 16.8);
      this.shape_44 = new cjs.Shape();
      this.shape_44.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_44.setTransform(13.425, 21.15);
      this.shape_45 = new cjs.Shape();
      this.shape_45.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_45.setTransform(11.275, 11.55);
      this.shape_46 = new cjs.Shape();
      this.shape_46.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_46.setTransform(9.325, 6.25);
      this.shape_47 = new cjs.Shape();
      this.shape_47.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_47.setTransform(4.775, -2.35);
      this.shape_48 = new cjs.Shape();
      this.shape_48.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_48.setTransform(7.725, -8.8);
      this.shape_49 = new cjs.Shape();
      this.shape_49.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_49.setTransform(8.825, -14.5);
      this.shape_50 = new cjs.Shape();
      this.shape_50.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_50.setTransform(14.625, -4.1);
      this.shape_51 = new cjs.Shape();
      this.shape_51.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_51.setTransform(20.225, 4.75);
      this.shape_52 = new cjs.Shape();
      this.shape_52.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_52.setTransform(24.975, -1.4);
      this.shape_53 = new cjs.Shape();
      this.shape_53.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_53.setTransform(20.275, -7.45);
      this.shape_54 = new cjs.Shape();
      this.shape_54.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_54.setTransform(17.625, -14.7);
      this.shape_55 = new cjs.Shape();
      this.shape_55.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_55.setTransform(31.375, 9.1);
      this.shape_56 = new cjs.Shape();
      this.shape_56.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_56.setTransform(32.675, 1.4);
      this.shape_57 = new cjs.Shape();
      this.shape_57.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_57.setTransform(28.425, -12.6);
      this.shape_58 = new cjs.Shape();
      this.shape_58.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_58.setTransform(47.175, -2.1);
      this.shape_59 = new cjs.Shape();
      this.shape_59.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_59.setTransform(31.475, 9.05);
      this.shape_60 = new cjs.Shape();
      this.shape_60.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_60.setTransform(32.425, 1.75);
      this.shape_61 = new cjs.Shape();
      this.shape_61.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_61.setTransform(28.525, -12.65);
      this.shape_62 = new cjs.Shape();
      this.shape_62.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_62.setTransform(49.525, 6.7);
      this.shape_63 = new cjs.Shape();
      this.shape_63.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_63.setTransform(41.075, 4.45);
      this.shape_64 = new cjs.Shape();
      this.shape_64.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_64.setTransform(39.725, -3.2);
      this.shape_65 = new cjs.Shape();
      this.shape_65.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_65.setTransform(39.825, -11.65);
      this.shape_66 = new cjs.Shape();
      this.shape_66.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_66.setTransform(50.275, -8.65);
      this.shape_67 = new cjs.Shape();
      this.shape_67.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_67.setTransform(57.275, -3.5);
      this.shape_68 = new cjs.Shape();
      this.shape_68.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_68.setTransform(62.875, -7.45);
      this.shape_69 = new cjs.Shape();
      this.shape_69.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_69.setTransform(68.575, -18.2);
      this.shape_70 = new cjs.Shape();
      this.shape_70.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_70.setTransform(60.325, -14.8);
      this.shape_71 = new cjs.Shape();
      this.shape_71.graphics.f().s("#005757").ss(3, 1, 1).p("AACAAIgDAB");
      this.shape_71.setTransform(51.375, -18.45);
      this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_71 }, { t: this.shape_70 }, { t: this.shape_69 }, { t: this.shape_68 }, { t: this.shape_67 }, { t: this.shape_66 }, { t: this.shape_65 }, { t: this.shape_64 }, { t: this.shape_63 }, { t: this.shape_62 }, { t: this.shape_61 }, { t: this.shape_60 }, { t: this.shape_59 }, { t: this.shape_58 }, { t: this.shape_57 }, { t: this.shape_56 }, { t: this.shape_55 }, { t: this.shape_54 }, { t: this.shape_53 }, { t: this.shape_52 }, { t: this.shape_51 }, { t: this.shape_50 }, { t: this.shape_49 }, { t: this.shape_48 }, { t: this.shape_47 }, { t: this.shape_46 }, { t: this.shape_45 }, { t: this.shape_44 }, { t: this.shape_43 }, { t: this.shape_42 }, { t: this.shape_41 }, { t: this.shape_40 }, { t: this.shape_39 }, { t: this.shape_38 }, { t: this.shape_37 }, { t: this.shape_36 }, { t: this.shape_35 }, { t: this.shape_34 }, { t: this.shape_33 }, { t: this.shape_32 }, { t: this.shape_31 }, { t: this.shape_30 }, { t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }, { t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));
      this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-79.5, -23.5, 149.8, 46.9);
  (lib.Tween3 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);
      // Layer_1
      this.shape = new cjs.Shape();
      this.shape.graphics.f().s("#000000").ss(3, 1, 1).p("AgngVQBRgDgCAv");
      this.shape.setTransform(45.3218, -7.8986, 0.9307, 0.7431);
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f().s("#000000").ss(3, 1, 1).p("AAvgWQhagHgDA1");
      this.shape_1.setTransform(-44.6763, -7.4159, 0.9307, 0.7431);
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f().s("#000000").ss(3, 1, 1).p("ACrg3IAABiQg1ANhqgBQhWAChggLIAAhj");
      this.shape_2.setTransform(2.598, 1.445, 0.8901, 0.7431);
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f().s("#000000").ss(3, 1, 1).p("AiOg+IFOgCQADAAAEgBQCYgJCCgZQgfCYj7AkQitASiegMQkwgggsiaQDIAXCKAGg");
      this.shape_3.setTransform(0.128, 2.0857, 0.8901, 0.7431);
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f().s("#666666").ss(3, 1, 1).p("AAAg2IAABt");
      this.shape_4.setTransform(3.6264, 1.4691, 0.9307, 0.7432);
      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f("#0D4045").s().p("Ah+BfQkjgggqiaQDAAXCDAGIAABjQBcAMBSgCQBlABAzgNIAAhiIg9AAIA2gBIAHgBQCSgJB8gZQgdCYjxAkQhjALhdAAQg/AAg9gFg");
      this.shape_5.setTransform(0.0664, 2.0838, 0.9307, 0.7432);
      this.shape_6 = new cjs.Shape();
      this.shape_6.graphics.f("#FFFFFF").s().p("AiiAuIAAhjIAAgBICtAAIBbgBIA9AAIAABiQgzANhlgBIAAhtIAABtIgXABQhJAAhNgKg");
      this.shape_6.setTransform(2.5561, 1.443, 0.9307, 0.7432);
      this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));
      this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-50.5, -11, 101.1, 22);
  (lib.Tween2 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);
      // Layer_1
      this.shape = new cjs.Shape();
      this.shape.graphics.f().s("#000000").ss(3, 1, 1).p("ACpguQgiA1g6AUQg7AUhLAAQgiAAgfgLQgOgEgMgGQgLgGgJgI");
      this.shape.setTransform(-119.35, -0.025, 1, 1, 0, 0, 180);
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f().s("#000000").ss(3, 1, 1).p("ACpguQgiA1g6AUQg7AUhLAAQgiAAgfgLQgOgEgMgGQgLgGgJgI");
      this.shape_1.setTransform(0, -0.025);
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f().s("#000000").ss(3, 1, 1).p("ACxgMIgIABIgLADIgxAIQhMAThwgIIgkgEIg9gN");
      this.shape_2.setTransform(-116.4, -6.4792, 1, 1, 0, 0, 180);
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#009999").s().p("AgGA0QgcgCgJgGQgJgGgXgHQgXgIgGgFIgxgaQgogWAXgCQAXgCAcAFIAkAEIAGAAQAfACAcAAIAAAAIAAAAQBBAAAzgLIAHgCIAFAHIAsgRIAPgFIgFADQAYAFgNASQgMAUgXARQgYASgSAHQgXAKggAEQgOABgQAAIgTAAgACaguIAKgCgAgSgXQgcAAgfgCIgGAAQgQgNAOAAQBLABBVgGQAVgBAHAHIACABIgHACQgzALhBAAIAAAAIAAAAgAhTgZgAh3gdQAEgDAEgCQACgBAaAKgAh3gdg");
      this.shape_3.setTransform(-116.8019, -2.7719, 1, 1, 0, 0, 180);
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f().s("#000000").ss(3, 1, 1).p("ACxgMIgIABIgLADIgxAIQhMAThwgIIgkgEIg9gN");
      this.shape_4.setTransform(-3, -6.4792);
      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f("#009999").s().p("AgGA0QgcgCgJgGQgJgGgXgHQgXgIgGgFIgxgaQgogWAXgCQAXgCAcAFIAkAEIAGAAQAfACAcAAIAAAAIAAAAQBBAAAzgLIAHgCIAFAHIAsgRIAPgFIgFADQAYAFgNASQgMAUgXARQgYASgSAHQgXAKggAEQgOABgQAAIgTAAgACaguIAKgCgAgSgXQgcAAgfgCIgGAAQgQgNAOAAQBLABBVgGQAVgBAHAHIACABIgHACQgzALhBAAIAAAAIAAAAgAhTgZgAh3gdQAEgDAEgCQACgBAaAKgAh3gdg");
      this.shape_5.setTransform(-2.5981, -2.7719);
      this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }] }, 1).wait(1));
      this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-137.7, -9.3, 156.1, 15.5);
  (lib.Tween1 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);
      // Layer_1
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#37FF08").s().p("AiZCdQAMgpBgh/QBihsAlgWQAkgXAQgIQAQgJACAHQACAHgFBFQgFBFgjAKQgkAKhSAlIAAAAQgcAPg2A1QgxAvgcAjIAHgVg");
      this.shape.setTransform(35.1811, -51.0013, 0.9999, 0.9999, -8.7328);
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f().s("#000000").ss(3, 1, 1).p("Ag7LwIDTqjQAGgUAFgTQAQgwALgxQA3jaALjdQAOiVgThVQgRgkgmAjQiBBPhYC+QhgCwg1C5QgPA0gMAzQgMAwgJAxQgdCSgJCTQgDAkgBAjQgECJAdCA");
      this.shape_1.setTransform(25.9417, 0.7934);
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#2B635D").s().p("AhrGHQgpilBUleQBSlgBEAvQBFAuhCDeQhCDeg0F2g");
      this.shape_2.setTransform(18.1192, 34.2232);
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#37FF08").s().p("AiECyQAGgqBLiNQBRh5AhgcQAggcAPgKQAOgLADAGQADAGAGBFQAFBFghAQQgiAPhLAyIAAgBQgaATgtA9QgpA1gXAoIAEgWg");
      this.shape_3.setTransform(35.6138, -50.9957);
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#009999").s().p("AhrLyQA1l2BBjfQBCjdhFguQhDgvhTFfQhUFfApClIgyAHIAAgGQgdiBAEiIQABgkADgjQAJiTAdiTQAJgwAMgwQAMg0APg0QA1i5BgivQBYi/CBhPQAmgjARAlQATBUgOCVQgLDeg3DZQgLAygQAvIgLAoIjTKiIAMhIQgWBngWAAQgIAAgIgNgADPrVQgPAKggAcQghAchSB5QhKCOgGAqIgEAWQAXgoAog1QAtg9AagTIAAABQBMgzAigPQAhgQgFhFQgGhFgDgGQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAgBAAQgEAAgJAHg");
      this.shape_4.setTransform(25.9417, 2.3329);
      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f("#37FF08").s().p("AiZCdQAMgpBgh/QBihsAlgWQAkgXAQgIQAQgJACAHQACAHgFBFQgFBFgjAKQgkAKhSAlIAAAAQgcAPg2A1QgxAvgcAjIAHgVg");
      this.shape_5.setTransform(-31.0091, -53.7508, 0.9996, 0.9996, -17.9225);
      this.shape_6 = new cjs.Shape();
      this.shape_6.graphics.f().s("#000000").ss(3, 1, 1).p("AiQKbIETorQAJgSAJgTQAWguAUguQBWjOAtjaQAkiRgGhWQgKgngrAdQiMA7h1CuQh4CfhRCvQgWAxgUAxQgTAugRAuQgzCNgfCQQgIAjgHAjQgZCGAJCD");
      this.shape_6.setTransform(-31.6373, -2.6887, 1, 1, -17.9215);
      this.shape_7 = new cjs.Shape();
      this.shape_7.graphics.f("#2B635D").s().p("AgwhrQCHlPA9A4QA8A4hjDSQhjDQhOEdIhkAWQgPipCHlNg");
      this.shape_7.setTransform(-34.7064, 30.5586, 1, 1, -17.9215);
      this.shape_8 = new cjs.Shape();
      this.shape_8.graphics.f("#009999").s().p("AlfK6IABgGQgJiEAZiGIAPhGQAfiPAziNQARgvATgtQAUgxAWgxQBRivB4ifQB1ivCMg6QArgdAKAmQAGBXgkCRQgtDahWDOQgUAugWAuIgSAlIkTIrIgMAKIgrACQBOkcBkjSQBijQg9g4Qg8g5iHFOQiIFOAPCpgAEyqVQgRAIgkAXQgkAXhkBrQhfCBgNApIgHAVQAdgkAwgvQA2g1AdgOIgBAAQBUgmAjgKQAjgLAGhFQAFhFgCgGQgBgDgEAAQgEAAgJAEg");
      this.shape_8.setTransform(-31.5373, -2.3795, 1, 1, -17.9215);
      this.shape_9 = new cjs.Shape();
      this.shape_9.graphics.f("#37FF08").s().p("AiZCdQAMgpBgh/QBihsAlgWQAkgXAQgIQAQgJACAHQACAHgFBFQgFBFgjAKQgkAKhSAlIAAAAQgcAPg2A1QgxAvgcAjIAHgVg");
      this.shape_9.setTransform(-31.0194, -53.8452, 1, 1, -17.9215);
      this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));
      this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-53.6, -80.6, 107.2, 159.7);
  (lib.Symbol2 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);
      // Layer_1
      this.shape = new cjs.Shape();
      this.shape.graphics.f().s("#00FF00").ss(3, 0, 1).p("ADQARIjXjIIjDAoIFeDmIAEALAjKiPIBRC7IEWCO");
      this.shape.setTransform(-0.2641, -0.0571);
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#009B72").s().p("Ah7ArIhSi7IFeDmIAFALIAdA1IgYAjgACCA2IAPAgIlejmIDEgoIDXDIQgHBWgYAAQgSAAgbgwg");
      this.shape_1.setTransform(-0.025, 0.025);
      this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).wait(1));
      this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-22.1, -20, 44.2, 40.1), null);
  (lib.Symbol1 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);
      // Layer_1
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#69DD4D").s().p("AA/A4IgMgGIgLgEIgKgEQgEgCgFgGQgLgMgMgIIgOgIIgKgEIgLgCQgJAAgMgHIgMgGQgMgGgEgHQgHgLAHgLQAHgLAMACQAGABAJAGIAPAIIAVAFQAIACANAHQAYANAMAKIANALIAXANQANAIAAAMQABAKgKAGQgEADgFAAQgFAAgEgCg");
      this.shape.setTransform(120.3546, -174.3827);
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#69DD4D").s().p("AgGAUQgMAAgFgCQgLgFAAgNQAAgLAMgFQADgBAQgBIAUgBQAMABAEAKQACAFgBAEQgBALgIAFQgFADgKAAg");
      this.shape_1.setTransform(103.6071, -171.625);
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#69DD4D").s().p("AgIAVQgIgBgFgDQgFgDgDgGQgDgGAAgFQABgMALgEQADgBAGABIAJABIANABQAIABAFADQAJAHgBAKQgBALgKAEQgFACgLAAIgNAAg");
      this.shape_2.setTransform(95.1514, -174.4083);
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#69DD4D").s().p("AgWAfQgLgBgGgFQgGgFgBgJQgBgLAIgIQAGgGAJAAIALACQAGABAHgEIALgIQAPgLALAFQAGADADAIQACAHgDAHQgEALgRAJQgYAPgUAAIgCAAg");
      this.shape_3.setTransform(81.9538, -172.6895);
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#69DD4D").s().p("AAFA7QgVgCgmgSQgRgIgFgGIgKgMQgJgNgDgJQgDgIAAgOQABgUALgGQAJgEAIAFQAIAFABAKQgBAOADAGIAIAIIAIAJQAEAEAOAGQAUAJAGACQAQAFAUgDIALgBQAHgCAIgEIARgHQAHgBAGACQAGACADAFQAEAGgCAIQgCAIgFAFQgIAIgSAFQgMAEgKACIgUABIgWgBg");
      this.shape_4.setTransform(55.0975, -149.9842);
      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f("#69DD4D").s().p("AAiAlQgEAAgGgDQgHgEgEAAQgFgBgIABIgNABQgNgBgQgQQgQgOgBgNQAAgGAEgGQAEgGAGgDQAIgDAKABIAYAFQAYAHAKAEQAPAHAHAIQAFAFABAIQACAIgDAGQgCAHgHAFQgGADgGAAIgDAAg");
      this.shape_5.setTransform(40.2281, -113.8634);
      this.shape_6 = new cjs.Shape();
      this.shape_6.graphics.f("#69DD4D").s().p("ACIBkQg/gJgmgPQgTgIgfgSIhQgtIgagOQgUgLgKgIQgPgMgFgOQgIgVALgQQAGgHALgCQAKgBAHAGQAEADADAHIAGAMQAGAJAQAJQAxAdBBAjQAgASAXAHQARAFAWAEIAbAFQAeAFAHANQAEAJgDAKQgEAKgJAEQgEACgIAAIgNgBg");
      this.shape_6.setTransform(47.0125, -129.725);
      this.shape_7 = new cjs.Shape();
      this.shape_7.graphics.f("#69DD4D").s().p("AlcLQQDDosAEgQQAFgRAGgOQAnhPAMggQA3iNA4jvQAshfBLjIQBFi4AAgKQjsCpA+hYQA/hZBthgQBthgAwAAQAgAAAaAeQArAygNDuQgNDtgQgRQgRgSgMhRQgNhSgMgEIgUgIIgYAeIjnJtQiiFSgbAoQgcAog7B3Qg7B3iZFYQg6CDgHAAQgNAAB5lYg");
      this.shape_7.setTransform(0.0047, 0.0088);
      this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));
      this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-45.8, -180.2, 175.2, 286.6), null);
  (lib.eye1 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);
      // Layer_1
      this.shape = new cjs.Shape();
      this.shape.graphics.f().s("#000000").ss(3, 1, 1).p("ACZgNIgLABIhFAHIjVASIgMAB");
      this.shape.setTransform(-2.775, -26.525);
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#009999").s().p("AicA8IAMgCIgEABIgGABIgCAAgAicA8QgMgBgBgJQAAgNAFgMQAfgsAWgLQAkgSAbgEQBRgTBIAnQBIAmgIAMQgJAMgEgDQgEgDgMAHIgCABIhFAHIgcgBQgwgBhLAOQgTAEgKAAIghADIgMACIAAAAgAiQA6IAAAAgABKAoIgFgBIBFgHQgNAHgTABIgLAAIgVAAgACKAgIAAAAg");
      this.shape_1.setTransform(-2.3932, -31.0503);
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f().s("#000000").ss(3, 1, 1).p("ABKACQAAAjgWAYQgVAZgfAAQgeAAgXgZQgVgYAAgjQAAgiAVgZQAXgYAeAAQAfAAAVAYQAWAZAAAigADpAAQAABthEBNQhEBNhhAAQhgAAhEhNQhEhNAAhtQAAhsBEhNQBEhNBgAAQBhAABEBNQBEBNAABsg");
      this.shape_2.setTransform(0, -2.9);
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#000000").s().p("Ag0A7QgVgYAAgjQAAgiAVgZQAWgYAeAAQAfAAAVAYQAXAZgBAiQABAjgXAYQgVAZgfAAQgeAAgWgZg");
      this.shape_3.setTransform(-0.05, -2.725);
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#FFFFFF").s().p("Ai4A7QgCgGAIggQAHgfAygqQAygqBEACIABAAQA1gDA0AnQA0AmASAqQASAqgJAOQgJAOgNgZQgNgagwgnQgxgngzADQgmACgsAiQgnAfgEAMQggAugOAAQgMAAAAgig");
      this.shape_4.setTransform(0.3702, -18.4267);
      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f("#FFCC00").s().p("AikC6QhEhNAAhtQAAhsBEhNQBFhNBfAAQBhAABEBNQBEBNAABsQAABthEBNQhEBNhhAAQhfAAhFhNgAg0g5QgWAZAAAiQAAAjAWAXQAWAaAeAAQAfAAAUgaQAXgXAAgjQAAgigXgZQgUgYgfAAQgeAAgWAYgAh1jPQgyApgIAhQgIAgADAGQgBBKA7hXQAEgMAngeQAsgkAlgCQA0gDAxAoQAvAoAOAaQANAZAJgOQAJgPgSgpQgTgrg0gmQgzgng2ADIgBAAIgEgBQhBAAgwApg");
      this.shape_5.setTransform(0, -2.9);
      this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).to({ state: [] }, 1).wait(1));
      this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-24.8, -37, 49.6, 64.2);
  (lib.brow2 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);
      // Layer_2
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#37FF08").s().p("AikAlQAbg6BUgZQAvgOAxAFQBVALAhA2QAFAHADALQAEATgWgGIgagNQgqgUhCgBQhKgBhAAnQgTAMgXABQgKgCAJgTg");
      this.shape.setTransform(-0.9169, -6.1141);
      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
      // Layer_1
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f().s("#000000").ss(5, 1, 1).p("ADCAAIAUAAAjUAAIGIAA");
      this.shape_1.setTransform(-28.35, 11.7, 1.0676, 1, 0, 0, 0, -24, 0.5);
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#009999").s().p("ACxB9IgFAAQgJgBgUgHQgUgGgKgBQgLgBgPABIgZADQgXACgpgCQgtgCgUABIgoAEQgYACgQAAQgwgBgbgWQgagUAVgjQAUgjAIgZQAHgaAyghQAygiBLgJQBcgLBEApQBGBuANAoQAPAsgFAEQgEAFgFADQgSAKgSABg");
      this.shape_2.setTransform(-1.735, -0.0111);
      this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }] }).wait(1));
      this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-28.1, -12.5, 50.6, 26.2);
  (lib.Tween26 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);
      // Layer_1
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#89FF6E").s().p("Ai6HNQg/gWAWgTQAVgSAWgXQAVgWAdgoIA0hFQBDhZAYg3QAZg3AZhGQAahHBNgTQBNgThbCsQggBigHALQgTAZgIAOQgQAYgJAMIgSAUQgOAQgFAJQgEAKgQAWIgtBFQgeAvgYAgQgPATgcAAQgTAAgZgJgACCiUQgEgGgOgJQgDgCgGgJQgEgGgBgGQgDgMAKgGQALgHAKAHIAEADIAGABQALgBAVgGIAVgBQAFABAFgCIAIgCIAIgDQAIAAAHAJQAEAFAAAGIgCAHQgEAKgKAHQgGAFgNAGIgnAQgACJlGQgEgFgBgHQAAgFADgJIAFgPIABgMQACgHAFgJIAJgPIALgWIAKgWQAHgLAGgCQALgFAJAJQAJAIgFAMIgCAFIAAAGIgBAMIgCAOIAAALIADAKQACAJgHAHIgFAFIgHAJQgFAJgHAHQgMAMgOAFIgKABQgGAAgFgFg");
      this.shape.setTransform(23.4122, -39.7224);
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f().s("#FFFFFF").ss(3, 1, 1).p("ACCmbIAghiABKkrIAXhdAA6AYQgZAYALAaAiMEzQgUgSgBhZQgBhVAQiSAARhaIAWhcAhGH+IAVha");
      this.shape_1.setTransform(-51.6279, 63.125);
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f().s("#000000").ss(3, 1, 1).p("Ahog1QAGgDAGgCQgBgKAFgIQAFgMASgQQBJhDAfghQA4g7Afg4QAPgaASgqQAqheARgwQAXg7ADgHQAPggACgKQACgLABgWQADgbARgeQACgFAEgHQAAAAABgBQACgMAEgXQABgJgBgTQAAgWAKgkQAVhGAng8QAJgOAJgIQABgSASgRQAXgWAjgGQAhgGAhAKQADABAEACQAbAKAXAUQAYAUAUAdQALAQASAgQgDAsA8C+QA7C+g0A1Qg1A2jwFZQgOAWgKARQgPAZgOAUQhfBmgMADQgIACgFAAQgFgEgFgDQgggXghgRQgEgCgDgBACnBqIADgLIADgOIABgGACnBqIAAAAQAJADAJACQAdAIAiAFQADABADABIAAAAQABAAACAAQgBAAAAgBAhog1QCpBMAoASQABABABAAQAIAEACABQAEACAEACQABAAAAAAIAAAAQAFACAEACQAOAHAOAHQAFADAGADACjB+IACgIIACgMAjpCEQAgAKExBOQAFgSAEgTQAHgdADghIAoAFAh6AFQASAKAbANQAVALAbAMQBUAoBsAjADoGJIAGgaIAXhkIAGgaIg/AIIgBAAIgUgEQghgLgSgHQgMgEgIgCAgsFFQABgCACgBQAIgMAJgKQASgUAIAAQARAAAHAGQAJAGAAAQQAAAHgCALQgBADgCAFQADAAAAABQgCABAAABQgBABgBABQAAgDABgCAAdFTQgEAKgFAMQgQAkgfgBQggAAgKgMQgFgGABgHQgFAAgEAAQgZAQgUgDQgbgEgIgEQgJgEAAgLQAAgEABgEQgCgBgCAAQABgFABgEQACgOAAgOQgBAAgBAAAAxFGQAQAGAOAEQADABACABQAJACAIADQA0ASAYAFIATAaQAGgBANACQAEAAADAAAh6AFQgJgFgIgDIAFgXQAJgCAVgZAjpCEQABgCABgBQABgBABgBQAFgHAGgIQArg5A1gyAo3HkIAQhQQAGgZAFgQQADgNAEgGQADgKAGgbIA2ANIARhJIgzgLIAgiOIAeAHQAKgWAKglQAJghAGgKQAIgTARgGQAKgDAPABQAMAAAOADQAwALARAKQAcATgIAkQgDALgLASIgKAsIAiAHQAAAAADABAkKE0QgPgBgQAAIgVBQQgDAIgFAQQgFATgEAbIgBABQgBAIgBAJIAAADQgCAIgCAIQACACABACQAJAKABAPQAAARABAWQAAABAAABIAAAAQAaAGAnALQALACALADQAYAGARADQALADAJACQgWA+gZA4QgWAygYAuQgnBIgrA8QgOAMg7gEQgHAAgJgBQgLAAgLgCQACABACAAQAKABAIAAAkKE0QgEAFgDAGQgEAHgDAHQgDAHgCAIQgGATgFAaQgNgKAMhMAiSE9QgCgBgBAAQgKgBgLAAQAAgEAAgDQAAgKgCgIQgKgbgrAHQgZANgQAZAioFUQgCAHAAAGAinFOQgBADAAADAiSE9QgJANgNAKAgsFFQgEAAgFgBQAAgBABgCQACgQgEgQQgHgjgfgIQgdAAgKAkQgFATgKAQAhCFmQgGAHgBAGAhSFzQAIgGAIgHQAKgRADgRAgsFFQgLAPgLASAjnCBQgDgBgkgEAo3HkQAFgGAFgFQAFgEAFgEQADgDAIgEQABgBABgBIAAABQAKgGAPgIQAHgFAHgCQAYgKAdAEQAlAEAXAQQAKAGATAXQABACACACQADADADAFQABABABABQAAABAAAAApJIBQADgFADgFIAMgTApJIBQgCAGgFANQAAAAAAABQgCAEgBAFQgHAUgCAVQgBAWAGAYQABAEABAEQABABAAACQAJATAWAbQAKALAOAHQApAUAlACQAlACAqggQArggAIgnQAHgjgBgUQgBgDAAgCQAAgBAAAAAnoKCQAbAJAagNQAagMAIgbQAFgNAAgOQgCgNgGgNQgFgKgHgIQgLgLgQgFQgcgKgaAMQgIAFgIAGQgJAJgGALQgCAFgCAFQgJAbANAZQANAaAbAJgAprOKQgogUgugXQgsgZAFiBQAAgEAAgEQAGiMASh+QAXAUA2AbQAnAUATALAiuFgQgFAUgKASQgCAEgDAEQgDAFgEAFQgZAfglAAQgKAAgNgDQgNgEgFAAQAEgVAEgSAnXO3QABgBABABIABAAQABAAABAAAnXO3QAAgBgBABIgBgBIiSgsAnUO3IgDAAAnOO4IgGgBAnZO2IgpB8QhFAVhDg7QARhVAOgt");
      this.shape_2.setTransform(3.2994, 11.4165);
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#00C0C0").s().p("AmZJiQgGgHgJgBQgGgCgIgEIALgOQArg5A1gyIAuAXIgugXIgRgKIAFgWQAJgCAVgaIDSBgIjShgIAMgFQAAgJAEgIQAFgMASgQQBKhEAfggQA4g7Afg4QAPgbASgpQAqhdAQgwIAahCQAPggACgLQACgKABgWQADgcARgeIAHgLIAAgCIAGgiIAAgdQAAgWAKgjQAVhGAng8QAJgOAJgJQACgSARgQQAXgXAjgGQAhgGAhALIAHACQAaAEAZAaIAKAMQAeAlASA8QASA7hDE2QkxIyh5BBIgFADIgcgOIgIgEIgBAAIABAAIgCAAIgIgEIgKgEIgCgBIAAAAIgIABIgOgFIgMgJIgEACIgLgEQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgHgGIgKAAQgHgDgFgGQgLgBgLgDQgJgDgHgNQgWAMgQANQgOALgMgGIAAAHIgBADIgHALIgBADQgBAHgFAFIgBADIgKAJIgRAbQgEAPgVAOIgaAPgACACwQgEAHgBAIIAAAEIAHgVIgCACgADbAEIACABIABgFgAF5o6QgYgUgbgKQAbAKAYAUgAhlIAIAKAEIAIAEIgEAAgAhlIAIAAAAg");
      this.shape_3.setTransform(24.1576, -35.5091);
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#009999").s().p("AqKP4QARhUAOguICSAsIgpB8QgTAGgSAAQgyAAgxgsgAprPvIAVhagAmsOnIgQgBIgWgCIAEABIgGgBIACAAIgCAAIgBgBIgCAAIgBAAIgBgBIiSgsIhWgrQgsgYAFiBIAAgJQAGiMASh9QAXATA2AcQAmATAUAMIgHASIAAABIgDAJQgHAUgCAWIAAAJQAAARAFATIACAJIABACQAJAUAWAbQAKAKAOAIQApATAlADIABAAIADAAIAAAAIABAAQAhAAAlgbIAAAAIABgBIAAAAIADgCQArghAIgmQAGgdAAgTIAAgIIgBgEIAAgCIAAABQAaAFAnALIAWAFIApAKIAUAFQgWA+gZA3QgWAzgYAtQgnBIgrA8QgLAKglAAIgZgBgArGK6QABBYAUATQgUgTgBhYIgBgLQABhUAPiJQgPCJgBBUIABALgAnXOjIACAAIABABgAnZOigAnLLDIgDAAIgBAAQglgDgpgTQgOgIgKgKQgWgbgJgUIgBgCIgCgJQgFgTAAgRIAAgJQACgWAHgUIADgJIAAgBIAHgSIABgCIAFgJIgGALIAGgLIAMgTIAKgLIAKgHIALgIIACgBIAAAAIAZgOQAHgEAHgCQgHACgHAEIgZAOIAAAAIgCABIgLAIIgKAHIgKALIAQhPQAGgaAFgPQADgNAEgGQADgKAGgcIA2ANIARhIIgzgMIAgiNIAeAHQAKgWAKgmQAJgfAGgMQAIgSARgGQAKgEAPABQAMABAOADQAwALARAKQAcAUgIAjQgDALgLASIgKArIAiAIIACABIABAAIACgEIACgCQAHAEAHACQAJABAGAHIAeAAIAagPQAVgOAEgPIARgbIAKgJIABgDQAFgFABgHIABgDIAHgLIAAgDIABgHQAMAGAOgKQAQgNAWgMQAHANAIADQALADALABQAFAGAHACIAKAAIAHAGQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIALAEIAEgCIAMAJIAOAFIAIgBIAAAAIACABIAOAIIAEAAIACAAIgBAAIAAAAIAJAEIAcAOIAFgDQB6hAExozQBDk2gSg7QgTg7gdgmIgLgMQAYAUAUAeQALAQASAgQgDArA8C+QA7C+g0A1Qg1A2jwFZIgYAnIgdAuQhfBlgMADIgNADIgKgIQgggXghgRIgHgDIAHADQAhARAgAXIAKAIIABAAIgDAAIAAAAIgGgBIAAgBIgDgBQgIgEgTgLIgtgbIABgGIgLgGIALAGIgBAGIgDAOIgDAMIADgMIgDAMIAAAAIgCALIgCAJQhsgkhUgnIgwgXIAwAXQBUAnBsAkIgogFQgDAhgHAcIgJAlQkxhNgggKQAgAKExBNIAIACIAUAGIAzASIAUAEIABAAQAsgDANAVQARAcgoBHIAXhjIgXBjIgQAaIgHAAQgNgBgGABIgTgaQgYgGg0gRIgRgFIgFgCIgegKIgQgBQACgKAAgHQAAgQgJgHQgHgGgRAAQgIAAgSAVQgJAJgIAMQAIgMAJgJQASgVAIAAQARAAAHAGQAJAHAAAQQAAAHgCAKIgDAIIADABIgCADIgCACIABgGIgBAGIgJAVQgQAkgfAAQgggBgKgMQgFgGABgGQABgHAGgHIgQANQgZARgUgDQgbgFgIgEQgJgEAAgLIABgHIgEgCIACgJQACgNAAgPQAAAPgCANIgCAJQgFAVgKARIgFAIIgHALQgZAfglAAQgKAAgNgEQgNgDgFAAIAIgoQgNgJAMhNIAfACIgfgCIgVBQIgIAYQgFATgEAbIgBABQgEAZgNgEQgTgXgKgFQgXgQglgEQgdgEgYAKQA9gQBFAzQgIgHgJgOQAKAFATAXIgEgBIAHAFIAMgHIAAADIgEAQIADADQAJALABAPIABAmIAAACIAAACIABAEIAAAIQAAATgGAdQgIAmgrAhIgDACIAAAAIgBABIAAAAQglAbghAAIgBAAIAAAAgAnRJyQAPAAAPgIQAagLAIgcQAFgNAAgOQgCgNgGgNQgFgKgHgIQgLgLgQgFIgDgBQgLgDgLAAIAAAAIAAAAQgPAAgOAHQgIAEgIAHQAIgHAIgEQAOgHAPAAIAAAAIAAAAQALAAALADIADABQAQAFALALQAHAIAFAKQAGANACANQAAAOgFANQgIAcgaALQgPAIgPAAIgBAAIAAAAQgKAAgKgDIgCgBQgbgJgNgaQgIgOAAgPQAAgLAEgMIAEgJQAGgMAJgIIgMgBIgDAVIgEAJQgEAMAAALQAAAPAIAOQANAaAbAJIACABQAKADAKAAIAAAAIABAAgAn4I8QgEgIAAgIQAAgSASgQQgSAQAAASQAAAIAEAIgAogHRQgSAFgVAWQAFAEAEAAQAEAAADgEIACgDQAEgOARgJIAEgCIgEABgAlYHXIACACIAAACIAAgCIgCgCIgGgIIAGAIgAoTGXIAWhcgAjhD7QgZANgQAZIgHAKIgHAPIgFAPQgGASgFAaQAFgaAGgSIAFgPIAHgPIAHgKQAQgZAZgNIACgBIAOgBIAAAAIABAAQAbAAAIAUIABABQACAIAAALIAAAGIAVACIADAAIgDAAIgVgCIAAgGQAAgLgCgIIgBgBQgIgUgbAAIgBAAIAAAAIgOABIgCABgAhCFSQALgSALgOQgLAOgLASgAhCFSQAKgQADgRQgDARgKAQgAioFAIgCAOIACgOIABgGIgBAGgAioFAQANgKAJgNQgJANgNAKgAg0EuIgBADIAJABIADgEIgLAAIAAgMQAAgKgCgKQgHgjgfgIIgBAAIgBAAQgaAAgKAgIAAAAIAAACIgBACQgFATgKAPQAKgPAFgTIABgCIAAgCIAAAAQAKggAaAAIABAAIABAAQAfAIAHAjQACAKAAAKIAAAMIAAAAgAiqEnIgCAAIACAAgAnaDGIAXhdgAmiBVIAghggAB+AfIgBAAIABAAgABrAXIgCgBIACABgAlIIgIAAgCIAAADgAlIIggAlIIggAlIIgIAAAAgAlWHbIAEgQQgCAIABALIgDgDgAhSFfIAQgNQgGAHgBAHIgJgBgADuFbgABSE/IgDgCIAFACIARAFQgCACgDAAQgGAAgIgHgABPE9IAAAAgACnBXIAAAAIgCALgACnBXgACqBLgACuA3IAAAAgAFMkpQABgIAEgHIABgCIgGAVIAAgEgAGsnkIADgFIgBAGg");
      this.shape_4.setTransform(3.2994, 13.3881);
      this.instance = new lib.Symbol2();
      this.instance.setTransform(-60.85, 32.45);
      this.instance.shadow = new cjs.Shadow("#006600", 0, 0, 17);
      this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));
      this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-91.9, -98, 171.3, 218.9);
  (lib.Tween23 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);
      // Layer_1
      this.instance = new lib.eye1("synched", 0);
      this.instance.setTransform(-56.3, 0, 1, 1, 0, 0, 180);
      this.instance_1 = new lib.eye1("synched", 0);
      this.instance_1.setTransform(56.35, 0);
      this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_1 }, { t: this.instance }] }).wait(1));
      this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-81.1, -37, 162.3, 61.9);
  (lib.Tween20 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);
      // Layer_1
      this.instance = new lib.brow2("synched", 0);
      this.instance.setTransform(58.05, 0.6, 0.9953, 1, 0, 0, 0, -0.1, 0.6);
      this.instance_1 = new lib.brow2("synched", 0);
      this.instance_1.setTransform(-54.35, 0.6, 1, 1, 0, 0, 0, -0.2, 0.6);
      this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_1 }, { t: this.instance }] }).wait(1));
      this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-82.2, -12.5, 162.8, 26.2);
  (lib.Symbol3 = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);
      // Layer_11
      this.shape = new cjs.Shape();
      this.shape.graphics.f().s("#000000").ss(3, 1, 1).p("AnrAiIgEAAIAAhLQAwmNBikNQACgFACgEQAGgSAHgQQAAgCABgCQABgCABgBQAAgBAAAAIAAgBQADgGACgFQAAgBAAAAQA4iGBChWQAJgMAJgLQABAAABgBQAXgbAYgWQAGgFAGgFQA0g1A5gCQBwAYAcARQA1AhAHAsIgiAAQgWAEgSAMQBLAuAEADQAqAdAmAqIgCAKQgHgCgIgBQgPgDgHAAQhiAAg/BlQgEAGgEAHQg3BgAABpQAAAmAKAvQABAIASBGQACAGAZBSQAYBLAAAHQg3BIg2BJQhBBWgbApQgSAcAAAGIACAFIAJAcQgnAPgWAtQgSAlgGA5QgBALgBALQAVAFA9ADQAIABAJAAQBKADA5AqQA5ApAeAdIAQAAIAeATIABAJQAAAFAAAFIABAHQgDADAAACIAAABQAAAMAAAkQgBAhgFAOQgEAMinAyQgSgHgRgGQhzgtg0gOQgFg7gShHQgThHgGgcIBBgfAEWtfQgDgBgFgBQAAAAgBAAAChFMQABABABABQABABACACIADADQANAMACADQABABABABQAAAAAHADQFPnGAAg7QAAgdhtk0QhdkEgnhkAA4ulQgWAngWBXQgrAJgiAHQgtAJgcAGQhVASggAQQARAJCRBuQhSB6hbCPQiLDbg6ByQgSAigKAZQgKA/gCAyQAAAXgBAlQgBArgBA/QAAAIAAAIQgMBsAAANQAAANgCAuQgBAIAAAJQAAAIgBAJQgBAZgBAiQgDBVAAAJQAABtALCfQAEA5ACBSIEiAbIDhgBQAagCBPgmQBQgnBRgoQgkhHgljKQgZiMgPiDIAAgBIgDABAhgBtQATANAcAUQBXBAAUAXQADACACADIAFAFQAHAIAIAIQAjAkAqAcQADADADACAiBBYQAAgBABgCAhgBtQgNACgLAFAiDBTIADACQAHAGAZASACNE5IgRA0IAAAyIACABACcGzIABAAIAAATAB8GfQAcAOAEAFQABABAAAAACeHNQAAADAAABABYjfQCCg4B7A4ABwvjQghAUgXAqg");
      this.shape.setTransform(67.8464, 97.875);
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#89FF6E").s().p("ACbMLQhehAicgCQgKAAgHgHQgIgIAAgKQAAgKAIgHQAHgIALAAQCtACBoBIQAJAGACAKQACAKgGAJQgGAIgKACIgFABQgHAAgHgEgAA5F+IAshKIAhg5IAAAAQAegvANgQQA2hFBbAAQAaAAAsAKIAAAAQApAPAQAHQAOAGgNAmIgiAmIgsAwQgSAVhSBnIgfABQhOAAhqgYgAnLhaQAJACAFAEQAJAGgBAJQAAAKgJAEIgGACIgDAEIgEAFgAFomPQgog4gkgGQgkgHAXgNQAVgOAegDQAcgCAPAAQAQgBABAUQACAUARAwIAAAAIAgA8QAPAbACALIAKA/Qg9hdgng2gAgtkTQgcgHgdgYQgdgZgOgQQgPgRgFgQQgEgQARALQARALAaAVIAbAWQAmAkANAGQANAGAAAIQAAAEgHAAQgHAAgNgEgACqpOQAZg1AogGQg6gIAxAHQAyAGAYAZQAXAZADAJQABAJACAEQADAEAbAOQAbANgrAIIgYAFQhahOg7AQgACqqcIh1ggQgcgIgZAEIATgTQA6g9AdACQAcACAhAFQAhAEAmAQQAmAQAHALQAHALABATQABATgNAGQgNAFgdAFQgJABgMAAQgVAAgZgGg");
      this.shape_1.setTransform(56.1, 63.9735);
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#009999").s().p("AgCEBQhzgsgzgPQgFg6gThHQgThGgGgcIBCggIACgVQAFg6ATglQAVgsAngQQAMgEAMgCIAuAhQBYA/AUAXIAFAFIAFAGIAOAQIABAAQAkAjApAdIgCAKIAFAEIgGgCQgDAOgNggIgRAzIAAAxIACACIAeATIAAACIAAAGIABAAIAAAKIABAIQgDACAAACIAAABIAAAxQAAAggGAOQgEANioAyIgigOgAhMkOIAEADIgCADg");
      this.shape_2.setTransform(62.3, 133.225);
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#00C0C0").s().p("Aj1RoQgugDgxgCIiogSIAAggIgIhtQgLifAAhtIADheIACg7IABgRIABgRIACg7QAAgNAMhsIAAgQIAChqIABg8QACgyAKg/IgEAAIAAhLQAwmNBikNIAEgJIANgiIABgEIACgDIAAgBIAAgBIAFgLIAAgBQA4iGBChWIAUgYIAAADIAvg0IAMgKQA2gYA0gdIADgCQBwAYAcARQA1AhAHAsIgiAAQgWAEgSAMIBPAxQAqAdAmAqIgCAKIABAAIAIACIAJANQAnBkBdEEQBtE0AAAdQAAA7lPHGIgHgDIgCgCIgPgPIgDgDIgFgFIAFgIIgGgFQgqgcgjgkIgPgQIgFgFIgFgFQgUgXhXhAIgvghIgggYIgDgCIACAFIAJAcQgnAPgWAtQgSAlgGA5IgCAWIhBAfQAGAcATBHQASBHAFA7QA0AOBzAtIAjANQCngyAEgMQAFgOABghIAAgwIAAgBIADgBIAAABQAPCDAZCMQAlDKAkBHIihBPQhPAmgaACIjhABIgZgCgAA4ulIA4g+QghAUgXAqg");
      this.shape_3.setTransform(67.8464, 97.875);
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f().s("#000000").ss(3, 1, 1).p("AnrAiIgEAAIAAhLQAwmNBikNQACgFACgEQAGgSAHgQQAAgCABgCQABgCABgBQAAgBAAAAIAAgBQADgGACgFQAAgBAAAAQA4iGBChWQAJgMAJgLQABAAABgBQAXgbAYgWQAGgFAGgFQA0g1A5gCQBwAYAcARQA1AhAHAsIgiAAQgWAEgSAMQBLAuAEADQAqAdAmAqIgCAKQgHgCgIgBQgPgDgHAAQhiAAg/BlQgEAGgEAHQg3BgAABpQAAAmAKAvQABAIASBGQACAGAZBSQAYBLAAAHQg3BIg2BJQhBBWgbApQgSAcAAAGIACAFQAAgBABgCQAHAGAZASQATANAcAUQBXBAAUAXQADACACADIAFAFQAHAIAIAIQAjAkAqAcQADADADACAEWtfQgDgBgFgBQAAAAgBAAAChFMQABABABABQABABACACIADADQANAMACADQABABABABQAAAAAHADQFPnGAAg7QAAgdhtk0QhdkEgnhkAA4ulQgWAngWBXQgrAJgiAHQgtAJgcAGQhVASggAQQARAJCRBuQhSB6hbCPQiLDbg6ByQgSAigKAZQgKA/gCAyQAAAXgBAlQgBArgBA/QAAAIAAAIQgMBsAAANQAAANgCAuQgBAIAAAJQAAAIgBAJQgBAZgBAiQgDBVAAAJQAABtALCfQAEA5ACBSIEiAbIDhgBQAagCBPgmQBQgnBRgoQgkhHgljKQgZiMgPiDIAAgBIgDABIAAABQAAAMAAAkQgBAhgFAOQgEAMinAyQgSgHgRgGQhzgtg0gOQgFg7gShHQgThHgGgcIBBgfQAVAFA9ADQAIABAJAAQBKADA5AqQA5ApAeAdIAQAAIAeATIABAJQAAAFAAAFIABAHQAAADAAABAiBBYIAJAcQgnAPgWAtQgSAlgGA5QgBALgBALAiDBTIADACAhgBtQgNACgLAFACNE5IgRA0IAAAyIACABACcGzIABAAIAAATAB8GfQAcAOAEAFQABABAAAAACeHNQgDADAAACABYjfQCCg4B7A4ABwvjQghAUgXAqg");
      this.shape_4.setTransform(67.8464, 97.875);
      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f().s("#000000").ss(3, 1, 1).p("AnrAiIgEAAIAAhLQAwmNBikNQACgFACgEQAGgSAHgQQAAgCABgCQABgCABgBQAAgBAAAAIAAgBQADgGACgFQAAgBAAAAQA4iGBChWQAJgMAJgLQABAAABgBQAXgbAYgWQAGgFAGgFQA0g1A5gCQBwAYAcARQA1AhAHAsIgiAAQgWAEgSAMQBLAuAEADQAqAdAmAqIgCAKAChFMQABABABABQABABACACIADADQANAMACADQABABABABQAAAAAHADQFPnGAAg7QAAgdhtk0QhdkEgnhkAEWtfQgDgBgFgBQAAAAgBAAQgHgCgIgBQgPgDgHAAQhiAAg/BlQgEAGgEAHQg3BgAABpQAAAmAKAvQABAIASBGQACAGAZBSQAYBLAAAHQg3BIg2BJQhBBWgbApQgSAcAAAGIADACQAHAGAZASQATANAcAUQBXBAAUAXQADACACADIAFAFQAHAIAIAIQAjAkAqAcQADADADACAA4ulQgWAngWBXQgrAJgiAHQgtAJgcAGQhVASggAQQARAJCRBuQhSB6hbCPQiLDbg6ByQgSAigKAZQgKA/gCAyQAAAXgBAlQgBArgBA/QAAAIAAAIQgMBsAAANQAAANgCAuQgBAIAAAJQAAAIgBAJQgBAZgBAiQgDBVAAAJQAABtALCfQAEA5ACBSIEiAbIDhgBQAagCBPgmQBQgnBRgoQgkhHgljKQgZiMgPiDIAAgBIgDABIAAABQAAAMAAAkQgBAhgFAOQgEAMinAyQgSgHgRgGQhzgtg0gOQgFg7gShHQgThHgGgcIBBgfQAVAFA9ADQAIABAJAAQBKADA5AqQA5ApAeAdIAQAAIAeATIABAJQAAAFAAAFIABAHQAAADAAABAhgBtQgNACgLAFAiDBTIACAFQAAgBABgCAiBBYIAJAcQgnAPgWAtQgSAlgGA5QgBALgBALAB8GfIACABACNE5IgRA0IAAAyQAcAOAEAFQABABAAAAIAAATACcGzIABAAACeHNQgDADAAACABYjfQCCg4B7A4AA4ulIA4g+QghAUgXAqg");
      this.shape_5.setTransform(67.8464, 97.875);
      this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape_4 }] }, 15).to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape_5 }] }, 114).to({ state: [] }, 1).wait(90));
      // Layer_4
      this.shape_6 = new cjs.Shape();
      this.shape_6.graphics.f().s("#000000").ss(3, 1, 1).p("ACHyPQgPhZgjg2QgFgHgFgFQgWgfgdgRQhAAkgUAJQgNAHgTADQgOADgRABQgFg1AkgkQAGgFAGgFQC+gNC8grAkP1aQAgAuASAIQAJAFBIAAQAJAAAHAAQgigQgmgvQgDgEgYgWQgXgXgwgDQgvgDgUgGQgTgHgEgEABL0ZQhAApgrAfQgiAYgaASQglAagSAPQhaDdgSAsQgTArgVA9QgVA8APBLQAGAjAOAIQgZAagcAWQg0Aqg6AXQgig7gLgqQgMgqARhJQARhJAZg6QAYg6BUhwQABgBAAgBQBVhygEgaQgFgagBgVIAAgIIgJgrQgDgLgZhKQgCgHgMgPQAQgNAWgDIA5gMAAY1aQghgVhHgTAgUj8QglAGgjAFQhwAQhWAFQgXABgVAAQgeAAgbgBQiRgGhag2ApEimQBTAhBIALQApAIAyADQAVAAAXAAQBHAABZgLQATAAATgCQAhgCAlgFAgkBCQgSgNgTgKQgJgEgKgEQgYgKgcgFQgzgJg9AGAI2UHQATAaATAsQAEALAGAOQAGAPAHASIAAANQhBAbg0AHQg1AHhEgDQhDgDgPgEQg/gIglgbIAAgrQADgqAOggQAIgUALgMQgcAUhCAzIgOAAQAJkgADiMQAChigChWQgBglgCgiAHmKdQACAiABAfQAICAAHBEQAVDLA+B4IAABDQgHgSgOgPQgTgVgegQQg3gehBAAQhEAAhDApQgBABgBAAQgDACgOALQAHgKAMgEAmBzvQAUgiAMgPQAJgLAKgKQAMgLANgKAnoQrQAEg9AFhrQABgVAAgSQADg7AAgOQAAgagZinAiTx+QhZAzgWhp");
      this.shape_6.setTransform(19.35, 143.92);
      this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(129).to({ _off: true }, 1).wait(90));
      // Layer_13
      this.instance = new lib.Tween3("synched", 0);
      this.instance.setTransform(16.5, -34.8);
      this.instance._off = true;
      this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({ _off: false }, 0).to({ scaleX: 0.9476, scaleY: 1.451, x: 16.65, y: -41.2 }, 5, cjs.Ease.get(1)).to({ regX: 0.1, regY: -0.1, scaleX: 0.9805, x: 16.4, y: -38.55 }, 5).to({ startPosition: 0 }, 42).to({ scaleY: 1.1865, y: -39.05 }, 1).to({ _off: true }, 1).wait(122));
      // brow
      this.instance_1 = new lib.Tween20("synched", 0);
      this.instance_1.setTransform(20.5, -108.5, 1, 0.696);
      this.instance_1._off = true;
      this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({ _off: false }, 0).to({ regX: 0.1, regY: -0.2, scaleX: 0.9902, scaleY: 0.9321, x: 19, y: -101.4 }, 4, cjs.Ease.get(1)).to({ startPosition: 0 }, 15, cjs.Ease.get(1)).to({ regX: 0, regY: 0, scaleX: 0.9277, scaleY: 1, x: 19.8, y: -110.25 }, 5, cjs.Ease.get(1)).to({ regX: 0.1, regY: -0.2, scaleX: 0.961, scaleY: 0.9321, x: 19.7, y: -104.55 }, 5).wait(1).to({ regX: -0.8, regY: 0.6, x: 18.85, y: -103.8 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ regX: 0.1, regY: -0.2, x: 19.7, y: -104.55 }, 0).to({ regY: -0.3, scaleY: 0.6726, x: 16.45, y: -107.85 }, 1, cjs.Ease.get(1)).to({ _off: true }, 1).wait(120));
      // Layer_8
      this.shape_7 = new cjs.Shape();
      this.shape_7.graphics.f().s("#000000").ss(3, 1, 1).p("AmLARQBsgpEnAAQBnAABaAJQCBANBCAb");
      this.shape_7.setTransform(8.675, -52.225);
      this.shape_8 = new cjs.Shape();
      this.shape_8.graphics.f().s("#000000").ss(3, 1, 1).p("AmLARQBrgoEmgBQBmAABbAJQCDAMBCAc");
      this.shape_8.setTransform(8.775, -52.225);
      this.shape_9 = new cjs.Shape();
      this.shape_9.graphics.f().s("#000000").ss(3, 1, 1).p("AmLARQBqgoEgAAQBlgBBbAJQCJAMBEAb");
      this.shape_9.setTransform(9.075, -52.2264);
      this.shape_10 = new cjs.Shape();
      this.shape_10.graphics.f().s("#000000").ss(3, 1, 1).p("AmLASQBngnEWgCQBkgBBcAIQCTALBHAd");
      this.shape_10.setTransform(9.625, -52.2306);
      this.shape_11 = new cjs.Shape();
      this.shape_11.graphics.f().s("#000000").ss(3, 1, 1).p("AmLASQBjgmEIgCQBjgCBdAHQCiALBKAd");
      this.shape_11.setTransform(10.325, -52.2222);
      this.shape_12 = new cjs.Shape();
      this.shape_12.graphics.f().s("#000000").ss(3, 1, 1).p("AmLAUQBfglD0gDQBigEBeAGQC1AJBPAg");
      this.shape_12.setTransform(11.275, -52.25);
      this.shape_13 = new cjs.Shape();
      this.shape_13.graphics.f().s("#000000").ss(3, 1, 1).p("AmLAVQBZgjDegFQBggEBgAFQDMAHBUAh");
      this.shape_13.setTransform(12.375, -52.2889);
      this.shape_14 = new cjs.Shape();
      this.shape_14.graphics.f().s("#000000").ss(3, 1, 1).p("AmLAWQBSggDEgIQBfgFBhADQDmAFBbAj");
      this.shape_14.setTransform(13.725, -52.2681);
      this.shape_15 = new cjs.Shape();
      this.shape_15.graphics.f().s("#000000").ss(3, 1, 1).p("AmLAXQBLgeCkgKQBdgHBjACQEFADBjAl");
      this.shape_15.setTransform(15.275, -52.2222);
      this.shape_16 = new cjs.Shape();
      this.shape_16.graphics.f().s("#000000").ss(3, 1, 1).p("AGMARQhsgpknAAQhnAAhaAJQiBANhCAb");
      this.shape_16.setTransform(17.025, -52.225);
      this.shape_17 = new cjs.Shape();
      this.shape_17.graphics.f().s("#000000").ss(3, 1, 1).p("AmSALQBLgLCEgFQBrgCCDgCQEAgCBoAO");
      this.shape_17.setTransform(16.575, -46.9118);
      this.shape_18 = new cjs.Shape();
      this.shape_18.graphics.f().s("#000000").ss(3, 1, 1).p("AmYACQBTACCGABQB5ABCZgDQDggDBmgF");
      this.shape_18.setTransform(16.225, -43.05);
      this.shape_19 = new cjs.Shape();
      this.shape_19.graphics.f().s("#000000").ss(3, 1, 1).p("AmcgFQBZALCHAFQCCAFCpgEQDKgFBkgT");
      this.shape_19.setTransform(15.975, -40.1111);
      this.shape_20 = new cjs.Shape();
      this.shape_20.graphics.f().s("#000000").ss(3, 1, 1).p("AmfgKQBcARCJAHQCHAHC0gFQC8gFBjgc");
      this.shape_20.setTransform(15.825, -38.325);
      this.shape_21 = new cjs.Shape();
      this.shape_21.graphics.f().s("#000000").ss(3, 1, 1).p("AGhgTQhjAfi4AGQi2AFiJgIQiJgIhegS");
      this.shape_21.setTransform(15.775, -37.7288);
      this.shape_22 = new cjs.Shape();
      this.shape_22.graphics.f().s("#000000").ss(3, 1, 1).p("AmggLQBeASCJAIQCJAIC2gFQC4gGBjgf");
      this.shape_22.setTransform(15.775, -37.7288);
      this.shape_22._off = true;
      this.shape_23 = new cjs.Shape();
      this.shape_23.graphics.f().s("#000000").ss(3, 1, 1).p("AmggFQBeASCOAAQCOAACzABQCzAABhgb");
      this.shape_23.setTransform(15.775, -38.9246);
      this.shape_24 = new cjs.Shape();
      this.shape_24.graphics.f().s("#000000").ss(3, 1, 1).p("AmggCQBeASCTgIQCUgHCuAGQCwAHBegX");
      this.shape_24.setTransform(15.775, -39.8565);
      this.shape_25 = new cjs.Shape();
      this.shape_25.graphics.f().s("#000000").ss(3, 1, 1).p("AmgAAQBeASCZgQQCZgPCqANQCsALBbgT");
      this.shape_25.setTransform(15.775, -40.6018);
      this.shape_26 = new cjs.Shape();
      this.shape_26.graphics.f().s("#000000").ss(3, 1, 1).p("AmgAFQBeATCegYQCegWCnASQCnARBZgP");
      this.shape_26.setTransform(15.775, -41.8077);
      this.shape_27 = new cjs.Shape();
      this.shape_27.graphics.f().s("#000000").ss(3, 1, 1).p("AGhAEQhWAMikgXQijgZijAgQijAfhegT");
      this.shape_27.setTransform(15.775, -43.1103);
      this.shape_28 = new cjs.Shape();
      this.shape_28.graphics.f().s("#000000").ss(3, 1, 1).p("AmegIQBfAMCZAHQCGAHCtgEQCygDBggZ");
      this.shape_28.setTransform(15.075, -39.1667);
      this.shape_29 = new cjs.Shape();
      this.shape_29.graphics.f().s("#000000").ss(3, 1, 1).p("AmcgGQBhAGCoAGQCDAHCkgCQCtgCBcgT");
      this.shape_29.setTransform(14.35, -40.5765);
      this.shape_30 = new cjs.Shape();
      this.shape_30.graphics.f().s("#000000").ss(3, 1, 1).p("AmagEQBiABC5AFQB+AFCcAAQCmAABagN");
      this.shape_30.setTransform(13.65, -41.9979);
      this.shape_31 = new cjs.Shape();
      this.shape_31.graphics.f().s("#000000").ss(3, 1, 1).p("AmXAAQBjgFDJAEQB6AECSABQCiACBVgH");
      this.shape_31.setTransform(12.925, -43.4616);
      this.shape_32 = new cjs.Shape();
      this.shape_32.graphics.f().s("#000000").ss(3, 1, 1).p("AmVADQBkgKDZAEQB3ADCJACQCcAEBSgC");
      this.shape_32.setTransform(12.225, -45.092);
      this.shape_33 = new cjs.Shape();
      this.shape_33.graphics.f().s("#000000").ss(3, 1, 1).p("AmTAHQBmgRDoAEQB0ADB/ADQCXAEBPAE");
      this.shape_33.setTransform(11.525, -46.5542);
      this.shape_34 = new cjs.Shape();
      this.shape_34.graphics.f().s("#000000").ss(3, 1, 1).p("AmRAJQBngWD5ACQBwADB2AEQCSAGBLAK");
      this.shape_34.setTransform(10.8, -47.962);
      this.shape_35 = new cjs.Shape();
      this.shape_35.graphics.f().s("#000000").ss(3, 1, 1).p("AmPALQBogcEJACQBsABBuAGQCMAIBIAQ");
      this.shape_35.setTransform(10.1, -49.3787);
      this.shape_36 = new cjs.Shape();
      this.shape_36.graphics.f().s("#000000").ss(3, 1, 1).p("AmNAOQBqgiEZABQBpABBkAHQCGALBFAV");
      this.shape_36.setTransform(9.375, -50.8014);
      this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_7 }] }).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_8 }] }, 1).to({ state: [{ t: this.shape_9 }] }, 1).to({ state: [{ t: this.shape_10 }] }, 1).to({ state: [{ t: this.shape_11 }] }, 1).to({ state: [{ t: this.shape_12 }] }, 1).to({ state: [{ t: this.shape_13 }] }, 1).to({ state: [{ t: this.shape_14 }] }, 1).to({ state: [{ t: this.shape_15 }] }, 1).to({ state: [{ t: this.shape_16 }] }, 1).to({ state: [{ t: this.shape_17 }] }, 1).to({ state: [{ t: this.shape_18 }] }, 1).to({ state: [{ t: this.shape_19 }] }, 1).to({ state: [{ t: this.shape_20 }] }, 1).to({ state: [{ t: this.shape_21 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_21 }] }, 1).to({ state: [{ t: this.shape_23 }] }, 1).to({ state: [{ t: this.shape_24 }] }, 1).to({ state: [{ t: this.shape_25 }] }, 1).to({ state: [{ t: this.shape_26 }] }, 1).to({ state: [{ t: this.shape_27 }] }, 1).to({ state: [{ t: this.shape_26 }] }, 1).to({ state: [{ t: this.shape_25 }] }, 1).to({ state: [{ t: this.shape_24 }] }, 1).to({ state: [{ t: this.shape_23 }] }, 1).to({ state: [{ t: this.shape_21 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_22 }] }, 1).to({ state: [{ t: this.shape_21 }] }, 1).to({ state: [{ t: this.shape_28 }] }, 1).to({ state: [{ t: this.shape_29 }] }, 1).to({ state: [{ t: this.shape_30 }] }, 1).to({ state: [{ t: this.shape_31 }] }, 1).to({ state: [{ t: this.shape_32 }] }, 1).to({ state: [{ t: this.shape_33 }] }, 1).to({ state: [{ t: this.shape_34 }] }, 1).to({ state: [{ t: this.shape_35 }] }, 1).to({ state: [{ t: this.shape_36 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [] }, 1).wait(90));
      this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(15).to({ _off: true }, 1).wait(92).to({ _off: false }, 0).wait(21).to({ _off: true }, 1).wait(90));
      this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(30).to({ _off: false }, 0).wait(13).to({ _off: true }, 1).wait(11).to({ _off: false }, 0).wait(42).to({ _off: true }, 1).wait(122));
      // Layer_18
      this.instance_2 = new lib.Tween6("synched", 0);
      this.instance_2.setTransform(14.75, -75.7);
      this.timeline.addTween(cjs.Tween.get(this.instance_2).to({ startPosition: 0 }, 15, cjs.Ease.get(-1)).to({ startPosition: 0 }, 9, cjs.Ease.get(-1)).to({ regX: 0.2, regY: -0.2, scaleX: 1.0139, scaleY: 0.9629, x: 14.2, y: -71.45 }, 5, cjs.Ease.get(-1)).to({ startPosition: 0 }, 15).to({ regX: 0.5, regY: -0.5, scaleX: 0.9799, scaleY: 0.9889, x: 14.25, y: -76.1 }, 5).to({ regX: 0.8, regY: -0.8, scaleX: 1.0139, scaleY: 0.9629, x: 14.75, y: -73.55 }, 5).to({ startPosition: 0 }, 44).to({ regY: -0.9, scaleX: 1.0043, scaleY: 1.0009, x: 15.2, y: -77.7 }, 10, cjs.Ease.get(1)).wait(1).to({ regX: 0, regY: 0, x: 14.4, y: -76.8 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ regX: 0.8, regY: -0.9, x: 15.2, y: -77.7 }, 0).to({ _off: true }, 1).wait(90));
      // stubble
      this.instance_3 = new lib.Tween4("synched", 0);
      this.instance_3.setTransform(14.4, -27.15);
      this.timeline.addTween(cjs.Tween.get(this.instance_3).to({ startPosition: 0 }, 15).to({ x: 20.3 }, 9, cjs.Ease.quadIn).to({ regX: 0.1, regY: -0.1, scaleX: 1.0262, scaleY: 0.8963, x: 19.7, y: -18.6 }, 5, cjs.Ease.get(1)).to({ scaleX: 1.0261 }, 15).to({ scaleX: 1.0067, x: 19.5, y: -21.85 }, 5).to({ scaleX: 1.0261, x: 19.7, y: -18.6 }, 5).to({ startPosition: 0 }, 44).to({ regX: 0, regY: 0, scaleX: 1, scaleY: 1, x: 14.4, y: -27.15 }, 10, cjs.Ease.get(1)).to({ startPosition: 0 }, 21).to({ _off: true }, 1).wait(90));
      // Layer_7
      this.instance_4 = new lib.Tween21("synched", 0);
      this.instance_4.setTransform(11.15, -102.75);
      this.timeline.addTween(cjs.Tween.get(this.instance_4).to({ startPosition: 0 }, 15, cjs.Ease.get(-1)).to({ regY: -0.1, skewY: 180, x: 16.95, y: -102.8 }, 9, cjs.Ease.get(-1)).to({ scaleX: 1.0534, scaleY: 1.0608, x: 17.2, y: -88.5 }, 5, cjs.Ease.get(1)).to({ startPosition: 0 }, 15).to({ y: -96.5 }, 5).to({ y: -88.5 }, 5).to({ startPosition: 0 }, 44).to({ regY: 0, scaleX: 1, scaleY: 1, skewY: 0, x: 11.15, y: -102.75 }, 10, cjs.Ease.get(1)).wait(1).to({ regX: -0.2, x: 10.95 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ regX: 0, x: 11.15 }, 0).to({ _off: true }, 1).wait(90));
      // Layer_6
      this.instance_5 = new lib.Tween2("single", 0);
      this.instance_5.setTransform(70.6, -58.15, 1, 1, 0, 0, 0, 0, 1);
      this.timeline.addTween(cjs.Tween.get(this.instance_5).to({ startPosition: 0 }, 15, cjs.Ease.get(-1)).to({ x: 79.85 }, 9, cjs.Ease.get(-1)).to({ regX: 0.2, regY: 0.8, scaleX: 0.9909, scaleY: 0.9319, x: 78.85, y: -48.85 }, 5, cjs.Ease.get(1)).to({ startPosition: 0 }, 14).to({ regX: 0.3, regY: 0.7, y: -42.55, startPosition: 1 }, 1).to({ regX: 0.5, regY: 0.5, scaleX: 0.9589, scaleY: 0.9318, x: 76.85, y: -55.45 }, 5, cjs.Ease.get(0.88)).to({ regX: 0.8, regY: 0.2, scaleX: 0.9909, x: 78.95, y: -52.05 }, 5).to({ scaleX: 0.9922, scaleY: 0.9415, x: 79.15, y: -52.6 }, 43).to({ scaleX: 0.9935, scaleY: 0.9512, x: 79.25, y: -59.65, startPosition: 0 }, 1).to({ x: 71.25 }, 10, cjs.Ease.get(1)).wait(1).to({ regX: -59.7, regY: -1.6, x: 11.15, y: -61.35 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ regX: 0.8, regY: 0.2, x: 71.25, y: -59.65 }, 0).to({ _off: true }, 1).wait(90));
      // Layer_9
      this.instance_6 = new lib.Tween23("single", 0);
      this.instance_6.setTransform(11.25, -83.5);
      this.timeline.addTween(cjs.Tween.get(this.instance_6).to({ startPosition: 0 }, 15, cjs.Ease.get(-1)).to({ x: 20.55 }, 9, cjs.Ease.get(-1)).to({ regX: 0.1, regY: -0.1, scaleX: 0.9908, scaleY: 0.9321, x: 19.55, y: -74.1 }, 5, cjs.Ease.get(1)).to({ startPosition: 0 }, 15).to({ regX: 0.3, regY: -0.2, scaleX: 0.9587, x: 19.75, y: -78.95 }, 5).to({ regX: 0.1, regY: -0.1, scaleX: 0.9908, x: 19.55, y: -77.25, mode: "synched" }, 5).to({ startPosition: 0 }, 44).to({ regX: 0, regY: 0, scaleX: 1, scaleY: 1, x: 11.25, y: -83.5, mode: "single" }, 10, cjs.Ease.get(1)).wait(1).to({ regY: -6.1, y: -89.6 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ regY: 0, y: -83.5 }, 0).to({ _off: true }, 1).wait(90));
      // head
      this.instance_7 = new lib.Tween24("synched", 0);
      this.instance_7.setTransform(14.6, -76.75);
      this.timeline.addTween(cjs.Tween.get(this.instance_7).to({ startPosition: 0 }, 15, cjs.Ease.get(-1)).to({ startPosition: 0 }, 9, cjs.Ease.get(-1)).to({ regX: 0.2, regY: -0.2, scaleX: 1.0142, scaleY: 0.9626, x: 14, y: -71.45 }, 5, cjs.Ease.get(-1)).to({ startPosition: 0 }, 15).to({ regX: 0.3, scaleX: 0.9802, scaleY: 0.989, x: 14.15, y: -75.95 }, 5).to({ regX: 0.2, scaleX: 1.0142, scaleY: 0.9626, x: 14, y: -72.95 }, 5).to({ startPosition: 0 }, 44).to({ regX: 0, regY: 0, scaleX: 1, scaleY: 1, x: 14.6, y: -76.75 }, 10, cjs.Ease.get(1)).wait(1).to({ regY: -0.1, y: -76.85 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ regY: 0, y: -76.75 }, 0).to({ _off: true }, 1).wait(90));
      // ears
      this.instance_8 = new lib.Tween22("synched", 0);
      this.instance_8.setTransform(3.25, -151.9, 1.0534, 0.9321, -31.2096, 0, 0, -55.5, 71.1);
      this.instance_8._off = true;
      this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(25).to({ _off: false }, 0).to({ regX: -55.6, rotation: 0, x: 12.5, y: -131.95 }, 9, cjs.Ease.quadInOut).to({ startPosition: 0 }, 10).to({ regX: -55.2, regY: 70.9, scaleX: 1.0393, scaleY: 1.0137, skewX: -8.402, skewY: -5.9827, x: 13.1, y: -136.3 }, 6).to({ regX: -55.6, regY: 71.1, scaleX: 1.0534, scaleY: 0.9321, skewX: 0, skewY: 0, x: 12.5, y: -131.95 }, 10, cjs.Ease.quadInOut).wait(1).to({ regX: 0, regY: 14, x: 71.05, y: -185.15 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ regX: -55.6, regY: 71.1, x: 12.5, y: -131.95 }, 0).to({ _off: true }, 1).wait(121));
      // ears
      this.instance_9 = new lib.Tween1("synched", 0);
      this.instance_9.setTransform(37.45, -217.55);
      this.timeline.addTween(cjs.Tween.get(this.instance_9).to({ startPosition: 0 }, 15, cjs.Ease.quadInOut).to({ rotation: -13.1957, x: 2.35 }, 9, cjs.Ease.quadInOut).to({ _off: true }, 1).wait(74).to({ _off: false, regX: -2.8, regY: 70.4, rotation: 20.4453, x: 26, y: -134.05 }, 0).to({ regX: -2.7, regY: 70.2, scaleY: 1.0445, rotation: 0, skewX: -4.1645, skewY: -2.0533, x: 35.2, y: -145.85 }, 6, cjs.Ease.quadInOut).to({ regX: -2.8, regY: 70.4, scaleY: 1, rotation: 0.1845, skewX: 0, skewY: 0, x: 33.9, y: -145.75 }, 9, cjs.Ease.quadInOut).wait(1).to({ regX: -17.4, regY: -1.3, x: 19.55, y: -217.5 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ startPosition: 0 }, 0).wait(1).to({ regX: -2.8, regY: 70.4, x: 33.9, y: -145.75 }, 0).to({ _off: true }, 1).wait(90));
      // Layer_17
      this.shape_37 = new cjs.Shape();
      this.shape_37.graphics.f("#89FF6E").s().p("AiYIxQgKgFgDgJQgEgKAEgJQACgGAQgZIAJgQIAFgOQADgKAKgFQAJgFAKADQAJADAFAKQAFAJgDAKQgGATgNAWIAAABIgPAYQgFAJgJAEIgFABIgEABQgFAAgFgCgAAlnOQAEAAArgjQArgjAFgGQAGgJAPgLQAOgKABARQABAQgVAWQgVAWgUANQgUANgbAIQgKADgGAAQgKAAADgIg");
      this.shape_37.setTransform(-42.1168, 82.6793);
      this.shape_38 = new cjs.Shape();
      this.shape_38.graphics.f().s("#000000").ss(3, 1, 1).p("ADNvrQgZhKg2AJIhCAAQgNAIgMAJQggAYgXAvQggA+gUBlQgBACAAADQAAAAABABQAJADAXAKQAaAKAqAQQgBAFgCAFIBgAZQg2gUgngPADJvqQAAgBABgBQABAAACABQABAAACABQgCAAgBABQgCgBgCAAgADNvrQAAABAAABAhBggQAAABAAAAQATieAXgvQAXgvAMgXQANgWAWggQAWgfAdgiQAmgsAVhDQAihRALg4QAKg5gBg1QAAgCAAgCQgCgzgKgiQgHgaAHhSQABgLABgLAB5rhQgtAkgXATQgjAcgWANQgDACgEACQACAIABAHQAOBUgdBhQgGAQgGAQQgIAYgHAYQgTBDAEEGAAZr6Ig8gRQgHAIgGAJQgeArgDAvQAAAAAAABQgEA4gBBeQgBBCgVBYQgKAlgNApQg3CugOB2IgBAIQgDAcAAAaQgBAOABANQAAACAAACQACAqAAAzQgBBPgHBkQAAAAAAgBQAEgBAAgBQAIgSAHgOAi6H/QABADABAEQAEDIgEBzQgDBzADBFIB+A1IBYAAQgHkdAHh2QAGh2gDhDQgCg2gBgaQgCgxgMgsQgCgJgDgJQgNgrgbg1QgFgLgHgLQghg+AJiPAjMHFQAAgEgBgFIgEgFAjSFwQAAABABATIAEA4AjEFQIABgBIADgBQAAgBABAAQADgGAEgGQAKgPAIgLQAXgiADgEQAHgHAFgEQACACABACQAyBLAEBMQAEBPAEAbQADAbgMACQgMACgUAAQgGAAgMgBQgOgCgIgCQgBAAgCABIAAgBQgCABgBAAIAAAAQgWgBgOgWAjEFQIgKARQADgEACgDQABgBABgBQAAgBAAgBQACgDABgDgAjHFYQADgGAEgEAjOFtQACgKAFgLAjRG3QADAHACAHQAKAdAIAdAiTIWIAAgBIAAAAAiWIWQABAAACAA");
      this.shape_38.setTransform(-40.1587, 98.9012);
      this.shape_39 = new cjs.Shape();
      this.shape_39.graphics.f("#009999").s().p("AhMKOIgVgDIgEAAIAAAAIAAAAIgDAAIAAAAQgWgBgNgWQANAWAWABIgBAAQgTABgNgRIgCgHQgIgdgKgcQAKAcAIAdIACAHQgJgLgGgSQgHgXgDgbIAFAPIgCgJIgDgGQgEgXAAgaIAAgBQABgHAGA/IgDg4IgBgWIAEgOIAJgRIABgBIADgBIABgBIAHgMIASgaIAaglIANgMIADAEQAxBLAFBNQADBOAEAbQADAbgLADQgNABgUAAIgSgBgAijHkIAEgCIgEACgAifHiIAOggIgOAgQACgKAEgLQgEALgCAKIAAAAgAiYHLIgBACIgBACIgFAHIAFgHIABgCIABgCIACgGIgCAGgAiZHNIAHgKIgHAKgAifHiIAAAAgABIqFIACgJIBdAig");
      this.shape_39.setTransform(-44.8, 87.2);
      this.shape_40 = new cjs.Shape();
      this.shape_40.graphics.f("#89FF6E").s().p("Ai7IaQAOALgNAQQgBgNAAgOgAAsoNQAbgpA4ADQAJALAdAKQAeAJgKAMQgJAMggAAQggAAhGAIIgPACIARgag");
      this.shape_40.setTransform(-41.9426, 51.6428);
      this.shape_41 = new cjs.Shape();
      this.shape_41.graphics.f("#00C0C0").s().p("AglQuIh+g1QgEhGAEhzQADhygDjIQANAQATgBIABAAIABAAIADAAIADAAIAVAEIASABQAUAAANgCQAMgCgEgcQgDgagEhPQgFhNgxhKIgDgFIgMAMIgaAmIgSAaIgIALIgBACIgDAAIAAABIgKARIAEgLIAEgFQAchXgMAAQgJgBgMg7IAAgTQAAgogBgiIAAgFQANgPgOgMQABgZADgdIABgIQANh1A4iuQANgpAJgmIAGhAIAAABQAKgtABgzQADh+AHgSQgEA4gBBeQAABCgWBXQAWhXAAhCQABheAEg4IAAgCQAEguAegsIAMgRIA9ARIBfAaIhcgjIhEgbIgggMIgCgBIABgFQAVhlAfg+QAYgvAfgYQANgJANgJQBDAnBKAZIAAACIgCAXQgIBRAIAbQAKAiACAyIAAAFQABA1gLA4QgLA5ghBQQgWBEglAsQgeAhgVAgQgWAggNAWQgOAXgWAvQgXAvgSCeIAAgCIgBhVQAAi8AQg3QAGgYAJgZIAMgfQAShBAAg8QAAgcgEgcIgDgPIAHgEQAXgOAjgbIBDg3IhDA3QgjAbgXAOIgHAEIADAPQAEAcAAAcQAAA8gSBBIgMAfQgJAZgGAYQgQA3AAC8IABBVQgJCQAhA9IAMAXQAaA1ANArIAGARQAMAtACAxIADBQQACBCgGB2QgGB2AGEegAAvvmIgRAaIAPgCQBGgJAgABQAgAAAJgMQAKgMgegKQgdgJgJgLIgGgBQg0AAgZAngAi8G3IgOACIAOgDIADAGIACAJIgFgOgAi2C9QgGgggGgyIgBgFIACgCIAKgJIAAAFQABAiAAAoIAAATIAAAAgAi4BAIgDgCIAHg0QgDAdgBAZIAAAAgAjmi/IADgKIAKgJQgMATgBAAIAAAAgAAur7Ig9gRIgMARQAGgWACgOIBEAbIgDAJgAAxsEIAAAAg");
      this.shape_41.setTransform(-42.2025, 98.95);
      this.shape_42 = new cjs.Shape();
      this.shape_42.graphics.f().s("#000000").ss(3, 1, 1).p("ADNvrQgZhKg2AJIhCAAQgNAIgMAJQggAYgXAvQggA+gUBlQgBACAAADQAAAAABABQAJADAXAKQAaAKAqAQQgBAFgCAFIBgAZQgtAkgXATQgjAcgWANQgDACgEACQACAIABAHQAOBUgdBhQgGAQgGAQQgIAYgHAYQgTBDAEEGQAAABAAAAQATieAXgvQAXgvAMgXQANgWAWggQAWgfAdgiQAmgsAVhDQAihRALg4QAKg5gBg1QAAgCAAgCQgCgzgKgiQgHgaAHhSQABgLABgLQAAgBABgBQABAAACABQAAABAAABQgCgBgCAAADNvrQABAAACABQgCAAgBABAB5rhQg2gUgngPAAZr6Ig8gRQgHAIgGAJQgeArgDAvQAAAAAAABQgEA4gBBeQgBBCgVBYQgKAlgNApQg3CugOB2IgBAIQgDAcAAAaQgBAOABANQAAACAAACQACAqAAAzQgBBPgHBkQAAAAAAgBQAEgBAAgBQAIgSAHgOAi6H/QABADABAEQAEDIgEBzQgDBzADBFIB+A1IBYAAQgHkdAHh2QAGh2gDhDQgCg2gBgaQgCgxgMgsQgCgJgDgJQgNgrgbg1QgFgLgHgLQghg+AJiPAjMHFQAAgEgBgFIgEgFAjSFwQAAABABATIAEA4AjEFQIABgBIADgBQAAgBABAAQADgGAEgGQAKgPAIgLQAXgiADgEQAHgHAFgEQACACABACQAyBLAEBMQAEBPAEAbQADAbgMACQgMACgUAAQgGAAgMgBQgOgCgIgCQgBAAgCABIAAgBIAAAAQgCABgBAAQABAAACAAIAAgBAjEFQIgKARQADgEACgDQABgBABgBQAAgBAAgBQACgDABgDgAjHFYQADgGAEgEAjOFtQACgKAFgLAjRG3QADAHACAHQAKAdAIAdAiWIWIAAAAQgWgBgOgW");
      this.shape_42.setTransform(-40.1587, 98.9012);
      this.shape_43 = new cjs.Shape();
      this.shape_43.graphics.f("#00C0C0").s().p("AglQuIh+g1QgEhGAEhzQADhygDjIQANAQATgBIABAAIABAAIADAAIADAAIAVAEIASABQAUAAANgCQAMgCgEgcQgDgagEhPQgFhNgxhKIgDgFIgMAMIgaAmIgSAaIgIALIgBACIgDAAIAAABIgKARIAEgLIAEgFQAchXgMAAQgJgBgMg7IAAgTQAAgogBgiIAAgFQANgPgOgMQABgZADgdIABgIQANh1A4iuQANgpAJgmQAWhXAAhCQABheAEg4IAAgCQAEguAegsIAMgRIA9ARIBfAaIhDA3QgjAbgXAOIgHAEIADAPQAEAcAAAcQAAA8gSBBIgMAfQgJAZgGAYQgQA3AAC8IABBVQgJCQAhA9IAMAXQAaA1ANArIAGARQAMAtACAxIADBQQACBCgGB2QgGB2AGEegAi8G3IgOACIAOgDIADAGIACAJIgFgOgAi2C9QgGgggGgyIgBgFIACgCIAKgJIAAAFQABAiAAAoIAAATIAAAAgAi7A+IAHg0QgDAdgBAZIgDgCgAgsghIgBhVQAAi8AQg3QAGgYAJgZIAMgfQAShBAAg8QAAgcgEgcIgDgPIAHgEQAXgOAjgbIBDg3IhcgjIhEgbIgggMIgCgBIABgFQAVhlAfg+QAYgvAfgYQANgJANgJQBDAnBKAZIAAACIgCAXQgIBRAIAbQAKAiACAyIAAAFQABA1gLA4QgLA5ghBQQgWBEglAsQgeAhgVAgQgWAggNAWQgOAXgWAvQgXAvgSCeIAAgCgAAvvmIgRAaIAPgCQBGgJAgABQAgAAAJgMQAKgMgegKQgdgJgJgLIgGgBQg0AAgZAngAjmi/IADgKIAKgJQgMATgBAAIAAAAgAhSmwIAAABQAKgtABgzQADh+AHgSQgEA4gBBeQAABCgWBXIAGhAgACNrhgAgPsMIgMARQAGgWACgOIBEAbIgDAJgAAxsEIAAAAg");
      this.shape_43.setTransform(-42.2025, 98.95);
      this.shape_44 = new cjs.Shape();
      this.shape_44.graphics.f().s("#000000").ss(3, 1, 1).p("ADNvrQgZhKg2AJIhCAAQgNAIgMAJQggAYgXAvQggA+gUBlQgBACAAADQAAAAABABQAJADAXAKQAaAKAqAQQgBAFgCAFIBgAZQgtAkgXATQgjAcgWANQgDACgEACQACAIABAHQAOBUgdBhQgGAQgGAQQgIAYgHAYQgTBDAEEGQAAABAAAAQATieAXgvQAXgvAMgXQANgWAWggQAWgfAdgiQAmgsAVhDQAihRALg4QAKg5gBg1QAAgCAAgCQgCgzgKgiQgHgaAHhSQABgLABgLQAAgBABgBQABAAACABQABAAACABQgCAAgBABQgCgBgCAAADNvrQAAABAAABAB5rhQg2gUgngPAAZr6Ig8gRQgHAIgGAJQgeArgDAvQAAAAAAABQgEA4gBBeQgBBCgVBYQgKAlgNApQg3CugOB2IgBAIQgDAcAAAaQgBAOABANQAAACAAACQACAqAAAzQgBBPgHBkQAAAAAAgBQAEgBAAgBQACgKAFgLQADgGAEgEAi6H/QABADABAEQAEDIgEBzQgDBzADBFIB+A1IBYAAQgHkdAHh2QAGh2gDhDQgCg2gBgaQgCgxgMgsQgCgJgDgJQgNgrgbg1QgFgLgHgLQghg+AJiPAjMHFQAAgEgBgFIgEgFAjSFwQAAABABATIAEA4AjEFQIABgBIADgBQAAgBABAAQADgGAEgGQAKgPAIgLQAXgiADgEQAHgHAFgEQACACABACQAyBLAEBMQAEBPAEAbQADAbgMACQgMACgUAAQgGAAgMgBQgOgCgIgCQgBAAgCABIAAgBIAAAAQgCABgBAAQABAAACAAIAAgBAjEFQIgKARQADgEACgDQABgBABgBQAAgBAAgBQACgDABgDgAjRG3QADAHACAHQAKAdAIAdAjOFtQAIgSAHgOAiWIWIAAAAQgWgBgOgW");
      this.shape_44.setTransform(-40.6587, 98.9012);
      this.shape_45 = new cjs.Shape();
      this.shape_45.graphics.f("#009999").s().p("AhMKOIgVgDIgEAAIAAAAIAAAAIgDAAIAAAAQgWgBgNgWIACAHIgCgHQANAWAWABIgBAAQgTABgNgRQgJgLgGgSQgHgXgDgbIAFAPIgCgJIgDgGQgEgXAAgaIAAgBQABgHAGA/IgDg4IgBgWIAEgOIAJgRIABgBIADgBIABgBIAHgMIASgaIAaglIANgMIADAEQAxBLAFBNQADBOAEAbQADAbgLADQgNABgUAAIgSgBgAiLJ0QgIgdgKgcQAKAcAIAdgAijHkIAEgCIgEACgAifHiIAOggIgOAggAiZHNQgEALgCAKQACgKAEgLIAHgKIgHAKgAiYHLIgBACIgBACIgFAHIAFgHIABgCIABgCIACgGIgCAGgABIqFIACgJIBdAig");
      this.shape_45.setTransform(-45.3, 87.2);
      this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_41, p: { x: -42.2025 } }, { t: this.shape_40, p: { x: -41.9426 } }, { t: this.shape_39, p: { x: -44.8 } }, { t: this.shape_38, p: { x: -40.1587 } }, { t: this.shape_37, p: { x: -42.1168 } }] }).to({ state: [{ t: this.shape_43, p: { x: -42.2025 } }, { t: this.shape_40, p: { x: -41.9426 } }, { t: this.shape_39, p: { x: -44.8 } }, { t: this.shape_42 }, { t: this.shape_37, p: { x: -42.1168 } }] }, 15).to({ state: [{ t: this.shape_41, p: { x: -42.7025 } }, { t: this.shape_40, p: { x: -42.4426 } }, { t: this.shape_39, p: { x: -45.3 } }, { t: this.shape_38, p: { x: -40.6587 } }, { t: this.shape_37, p: { x: -42.6168 } }] }, 39).to({ state: [{ t: this.shape_43, p: { x: -42.7025 } }, { t: this.shape_40, p: { x: -42.4426 } }, { t: this.shape_45 }, { t: this.shape_44 }, { t: this.shape_37, p: { x: -42.6168 } }] }, 75).to({ state: [] }, 1).wait(90));
      // Layer_3
      this.shape_46 = new cjs.Shape();
      this.shape_46.graphics.f("#62A751").s().p("AqDUxQgmgCAGgJQAGgJAUgKIAcgPQBJguApgVQBOgoBJAAQA5AAASAOIAAAAIA7AoQAJAFAQAPQAQAOAKANQAJANgngGQgogHgagRQgagQgQgBQgQgBhLAKQhLAKgYAKQgZAJhHAsQgHAEgVAAIgUgBgAFoUkQABgLAHgGIAHgGQAmgjAVgKIABAAQAhgSA1AAQAjAAA7AZQAuAUAGARQAEAOAGACIgVACQgeAEgdgIQgkgKgfgGQgfgGg1APIhFAbQgRgDAAgHgAk7sgQgFgEgBgGQgBgMAMgIIADgCQAAgJAGgMQAFgMAIgKIAOgTQAHgHAHgKIAHgKIAEgJIAhgqIAFgGIAGgHQAIgFAJAAQAEABAEADQADAEAAAEQAIgGAIACQAKADABAJIAAAJIADAHIADAGQABACgDAJIAAACQACAEAAAEQgBAEgEAIIgHAUIgEAGQgHATgJAVIgGALQgHAJgQAEIgGABIgWABQgfACgaARQgIAGgFABIgDAAQgEAAgFgDgAjeuTIAAAAIAAAAgAhLzwQgogLgLgZQgKgaASAGQASAFAKABIAwADIAAAAIACABQApgCAUgDIAJgCQATgDAHgEIAAAAQAkgRgeAnQgRAWgPAHIgBAAQgQAHgYAHQgJACgLAAQgTAAgZgHg");
      this.shape_46.setTransform(7.1281, 145.3205);
      this.shape_47 = new cjs.Shape();
      this.shape_47.graphics.f("#69DD4D").s().p("AhMAiQgTgEAHgKQAGgKAigTQAhgUAWgDQAXgCAZABQAZACAIALQAJAMgSAGQgSAFgLABIgtAGQgXADgUAMQgRAJgOAAIgHAAg");
      this.shape_47.setTransform(-24.2232, 253.9279);
      this.shape_48 = new cjs.Shape();
      this.shape_48.graphics.f("#89FF6E").s().p("ABEAwQgHgFAAgIQABgJAHgEQgIgLAFgLIADgHIABgJQACgRAVgIQAGgDAcgDQATgDAFABQAIAAAIABQAdAEASAFIABAAIAAAtIgGAFQgLAHgKADQgIADgNABIgjADQgQADgMAIIgRAKQgFABgFAAQgFAAgEgCgAjKAjQgGgCgDgEQgDgEAAgGQAAgGADgEIAGgGIAGgKIAFgEIAcgZIAJgFQAIgEAIADQAGAEABAHQABAHgEAGIgCAEIgCAFIgFAJIgLAPIgFAEIgFAFQgIAGgJgFQgEAGgEACQgDACgEAAIgDAAg");
      this.shape_48.setTransform(-11.425, 58.79);
      this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_48 }, { t: this.shape_47 }, { t: this.shape_46 }] }).to({ state: [{ t: this.shape_48 }, { t: this.shape_47 }, { t: this.shape_46 }] }, 15).to({ state: [{ t: this.shape_48 }, { t: this.shape_47 }, { t: this.shape_46 }] }, 39).to({ state: [{ t: this.shape_46 }, { t: this.shape_48 }, { t: this.shape_47 }] }, 75).to({ state: [] }, 1).wait(90));
      // Layer_2
      this.shape_49 = new cjs.Shape();
      this.shape_49.graphics.f().s("#37FF08").ss(5, 1, 1).p("AABAAQgBAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAAAA");
      this.shape_49.setTransform(4.2375, 16.7375);
      this.shape_50 = new cjs.Shape();
      this.shape_50.graphics.f().s("#37FF08").ss(5, 1, 1).p("AABAAIAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAABAA");
      this.shape_50.setTransform(4.2375, 16.7375);
      this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_49 }] }).to({ state: [{ t: this.shape_50 }] }, 15).to({ state: [{ t: this.shape_49 }] }, 39).to({ state: [{ t: this.shape_49 }] }, 75).to({ state: [] }, 1).wait(90));
      // Layer_1
      this.shape_51 = new cjs.Shape();
      this.shape_51.graphics.f().s("#000000").ss(3, 1, 1).p("AkthsQBTAhBIALQAoAIAzADQAVAAAWAAQBHAABZgLQASAAAUgCQAhgCAlgFQAAgIAAgIQABg+ABgrQgBAAgCAAQABgiABgVQABgzALg+IgFAAIAAhNQAwmNBjkMQACgFABgFQAHgRAGgQQABgCABgCQABgCAAgCQAAgBABAAIAAAAQACgGADgGQAAAAAAgBQA3iGBDhWQAJgMAKgMIAAgfIr8AAQAhAPAjAMQADABADABQgBAAgBABQgCgBgCAAQgBALgBALQgIBSAIAaQAKAiACAzQAAACAAACQABA1gLA5QgLA4ghBRQgWBDglAsQgeAigVAfQgWAggNAWQgOAXgXAvQgXAvgSCeQAAAAAAgBQgJCQAhA+QAGALAGALQAEADAEACQAXAvAMAnQADAJADAJQAMAsACAxQABAZACA2QACAVACAPQAEAiAAAYQgBAXAAABQAABMAXCoQAFAvADAxQADAxAWBRQAYCnAAAaQAAAOgCA7QgBASgBAVQgEBrgFA9IAFAIQAHgEAIgEADJBsQgIAPgHAOQgyBjgJAzQgKA6gGCjQgHCiAEEPQAEEQAPA+QAPA/gMAaQgMAbgNAAIgBAAQgPgBgYgPIgCAiQkHAjiWABIgBAAQghAAgcgCQiYgIgMghQAKgLAPgMQAtgkBSgqQBfgxBWgdQgRAAgRACIAAgOQAAglARgNQAbgNAcgPAAqVPQgsgngdgVQhlhKhrgCQgCAAgCAAAAwVNQgBABgCAAQgBAAgCABABBVfQgEgCgEgDQgGgEgFgEQgCgCgCgB");
      this.shape_51.setTransform(-8.5, 138.125);
      this.shape_52 = new cjs.Shape();
      this.shape_52.graphics.f("#083B42").s().p("AH4NkQhEgDgPgEQg/gIglgbIAAgrQADgqAOggQAIgUALgMIASgNIABgBQBEgpBDAAQBCAAA2AeQAfAQATAVQASAaATAsIAKAZIANAhIAAANQhAAbg0AHQgmAFgsAAIgngBgAoDMVQghAAgcgCQiYgIgMghQALgLAPgMQAsgkBSgqQBfgxBWgdIAEAAQBsACBkBKQAdAVAtAnIADADIALAIIAJAFIgDAiQkHAjiWABgAjbrFQgzgDgogIQhIgLhTghIgFgSQgNgngXgvQBYAyCKAFQAtACA4gCQBygGCcgaIAAgFIADAAIgCBpIAAAQQglAFghACIglACQhZALhHAAIgHAAIglAAg");
      this.shape_52.setTransform(7.9, 203.72);
      this.shape_53 = new cjs.Shape();
      this.shape_53.graphics.f("#2B635D").s().p("ACEVGIALmsQADhigDhWIgChHQAxABAtAEIAZACIDegBIAEBBQAHCAAIBEQAVDLA+B4IAAAiIgVAAQgTgVgfgQQg2gehCAAQhDAAhEApQgLAEgIAKQgcAUhCAzgAixU5QgPgBgYgPIgJgFIgIgNIgDABIgDABQgtgngdgVQhkhKhsgCIgEAAQgRAAgRACIAAgOQAAglARgNIA3gcIgEgIQAEg9AFhrIABgnIAChJQABgagZinQgWhRgDgxQgDgxgFgvQgWiogBhMIABgYQAAgYgDgiIgFgkIgDhPQgCgxgMgsQBTAhBIALQAoAJAzACIAsAAQBHAABZgLIAmgCQAhgCAlgFQgMBsAAANIgCA6IAAASQgSgNgTgKIgEAHIgPAdQgyBjgJAzQgKA6gHCjQgGCiAEEPQAEEQAPA+QAPA/gMAaQgMAbgNAAgAnnQ3IAQgIIgQAIgAnspLQgMgqARhJQAQhJAag6IAKgXIBIhvIAYghIAkgyIAig3QAPgcgBgMIgFghQAaBUBQgvIhsEJQgSArgVA9QgVA8AOBLQAHAiANAIQgYAYgZAUQg0Aqg6AXQgjg7gKgqgAjQx4QgagJgMgaQgEgJgDgOIgEgXQgJgegDgQIAAgLIgCgCIgIgLIgIgRQgGgIgDgFIgBgGQAAgHABgEIABgBQAEgFAIgBQALgCAHAKIADAHIAFAGIAFAJQAFAKAGAJIAKAEQARAGAiAAQBQAAAtgVIAJgEIADgCIAUgNIAMgKQAFgEAGgCQAJgEAHABQAKAAAQAQIAKAKIAGAHQAEAFgCAHIgBAFIgCABQgEAFgIAAIgFAAIgCAFIgBAAIgBAFQgGAIgNAHIhcA6IgUANQgYAQgLAKQgUASgGADQgPAJgQAAQgKAAgLgDg");
      this.shape_53.setTransform(19.7, 143.5152);
      this.shape_54 = new cjs.Shape();
      this.shape_54.graphics.f("#009999").s().p("AjSKDQiKgGhYgxIgIgFIgMgWQghg+AJiQIAAABQASieAXgvQAXgvAOgXQANgWAWggQAVgeAegiQAlgsAWhDQAhhRALg4QALg5gBg1IAAgEQgCgzgKgiQgIgaAIhSIACgWIAEABIACgBIgGgCQgjgMghgPIL8AAIAAAfIgUAYQhCBWg4CGIAAABIgFAMIAAAAIAAABIgCAEIgBAEIgNAhIgEAKQhiEMgwGMIAABNIAEAAQgKA+gCAzIgBA3IAAAFQieAahwAGIg6ABIgrgBgAhMlMQABAVAEAaQACAKgMAZIgiA3IgkAyIgZAhIhHBvQgIAOgGANQgZA6gQBJQgRBJALAqQALAqAiA7QBZgkBLhNIgBgBQgNgIgHgiQgOhLAVg8QAVg9ASgqIBrkJQhPAugahTIgFgRgAhfnuQgIABgEAFIgEAGQgBAEAAAHIABAGQACAFAHAIIAIARIAIALIACACIAAALQADAQAIAeIAFAXQACAOAEAJQANAaAaAJQAbAJAXgPQAHgDATgSQAQgOAogZIBdg6QARgKAFgLIABgEIABAAIAEAAQAHAAAFgFQADgDACgEIABgEQABgHgDgFIgGgHIgKgKQgQgQgKAAQgHgBgKAEQgGACgFAEIgNAKIgTANIgDACIgJAEQguAVhPAAQghAAgSgGIgJgEQgHgJgEgKIgFgJIgFgGIgDgHQgGgJgJAAIgDABg");
      this.shape_54.setTransform(0.9036, 58.0444);
      this.shape_55 = new cjs.Shape();
      this.shape_55.graphics.f().s("#000000").ss(3, 1, 1).p("AkthsQBTAhBIALQAoAIAzADQAVAAAWAAQBHAABZgLQASAAAUgCQAhgCAlgFQAAgIAAgIQABg+ABgrQgBAAgCAAQABgiABgVQABgzALg+IgFAAIAAhNQAwmNBjkMQACgFABgFQAHgRAGgQQABgCABgCQABgCAAgCQAAgBABAAIAAAAQACgGADgGQAAAAAAgBQA3iGBDhWQAJgMAKgMIAAgfIr8AAQAhAPAjAMQADABADABQgBAAgBABQgCgBgCAAQgBALgBALQgIBSAIAaQAKAiACAzQAAACAAACQABA1gLA5QgLA4ghBRQgWBDglAsQgeAigVAfQgWAggNAWQgOAXgXAvQgXAvgSCeQAAAAAAgBQgJCQAhA+QAGALAGALQAEADAEACQAXAvAMAnQADAJADAJQAMAsACAxQABAZACA2QACAVACAPQAEAiAAAYQgBAXAAABQAABMAXCoQAFAvADAxQADAxAWBRQAYCnAAAaQAAAOgCA7QgBASgBAVQgEBrgFA9IAFAIQAHgEAIgEADJBsQgIAPgHAOQgyBjgJAzQgKA6gGCjQgHCiAEEPQAEEQAPA+QAPA/gMAaQgMAbgNAAIgBAAQgPgBgYgPIgCAiQkHAjiWABIgBAAQghAAgcgCQiYgIgMghQAKgLAPgMQAtgkBSgqQBfgxBWgdQgRAAgRACIAAgOQAAglARgNQAbgNAcgPAAqVPQgsgngdgVQhlhKhrgCQgCAAgCAAABBVfQgEgCgEgDQgGgEgFgEQgCgCgCgBAAwVNQgBABgCAAQgBAAgCAB");
      this.shape_55.setTransform(-8.5, 138.125);
      this.shape_56 = new cjs.Shape();
      this.shape_56.graphics.f("#2B635D").s().p("ACEVGIALmsQADhigDhWIgChHQAxABAtAEIAZACIDegBIAEBBQAHCAAIBEQAVDLA+B4IAAAiIgVAAQgTgVgfgQQg2gehCAAQhDAAhEApQgLAEgIAKQgcAUhCAzgAixU5QgPgBgYgPIgJgFIgIgNIgDABIgDABQgtgngdgVQhkhKhsgCIgEAAQgRAAgRACIAAgOQAAglARgNIA3gcIAQgIIgQAIIgEgIQAEg9AFhrIABgnIAChJQABgagZinQgWhRgDgxQgDgxgFgvQgWiogBhMIABgYQAAgYgDgiIgFgkIgDhPQgCgxgMgsQBTAhBIALQAoAJAzACIAsAAQBHAABZgLIAmgCQAhgCAlgFQgMBsAAANIgCA6IAAASQgSgNgTgKIgEAHIgPAdQgyBjgJAzQgKA6gHCjQgGCiAEEPQAEEQAPA+QAPA/gMAaQgMAbgNAAgAnspLQgMgqARhJQAQhJAag6IAKgXIBIhvIAYghIAkgyIAig3QAPgcgBgMIgFghQAaBUBQgvIhsEJQgSArgVA9QgVA8AOBLQAHAiANAIQgYAYgZAUQg0Aqg6AXQgjg7gKgqgAjQx4QgagJgMgaQgEgJgDgOIgEgXQgJgegDgQIAAgLIgCgCIgIgLIgIgRQgGgIgDgFIgBgGQAAgHABgEIABgBQAEgFAIgBQALgCAHAKIADAHIAFAGIAFAJQAFAKAGAJIAKAEQARAGAiAAQBQAAAtgVIAJgEIADgCIAUgNIAMgKQAFgEAGgCQAJgEAHABQAKAAAQAQIAKAKIAGAHQAEAFgCAHIgBAFIgCABQgEAFgIAAIgFAAIgCAFIgBAAIgBAFQgGAIgNAHIhcA6IgUANQgYAQgLAKQgUASgGADQgPAJgQAAQgKAAgLgDg");
      this.shape_56.setTransform(19.7, 143.5152);
      this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_54 }, { t: this.shape_53 }, { t: this.shape_52 }, { t: this.shape_51 }] }).to({ state: [{ t: this.shape_54 }, { t: this.shape_56 }, { t: this.shape_52 }, { t: this.shape_55 }] }, 15).to({ state: [{ t: this.shape_54 }, { t: this.shape_53 }, { t: this.shape_52 }, { t: this.shape_51 }] }, 39).to({ state: [{ t: this.shape_54 }, { t: this.shape_53 }, { t: this.shape_52 }, { t: this.shape_51 }] }, 75).to({ state: [] }, 1).wait(90));
      // Layer_15
      this.instance_10 = new lib.Symbol1();
      this.instance_10.setTransform(-211.15, 320.15);
      this.instance_10.shadow = new cjs.Shadow("rgba(51,153,0,1)", 0, 0, 38);
      this.shape_57 = new cjs.Shape();
      this.shape_57.graphics.f("#69DD4D").s().p("Au2ZpQgzhoHHsbQHHsbBNhPIEwpkQBmjOA6hjIAohDQAWgmAPgeQARghAFgIQAOgXAOgOQASgRBbidQBbiegHBcQgHBcgaCJQgaCJgVBRQgOA0gkBbIipGmQgVA0gMAZQgTAoguBMIhDBuQgjA6mWNWQmXNYizBSQhOAlg2AAQhFAAgcg7gAJNn/QC3lWAHggQADgLAGgPIALgZQAJgXAIgrQAKgvAGgTQAOgkAHgXQADgMBki6IAAANQAABKgFArQgEAmgOA7QgXBegbBaQgcBag7B5Qg7B5imDOQg+BOgNAAQgVAAByjVgABVsvQA6itALgaIBJioQAUgtAIgOQATgjAogzIBBhSQArg1AOgXIAUgjQAFgJDOiWQjzEWgyCYQguA+gWAwQgKAXgGAVIgMAmQgKAegdAzQgRAfhECMQhECLgdAMIgEABQgWAAA2iigANn6EQAGgOAMgJQAHgGAJgCQgfAggDAAIAAgBg");
      this.shape_57.setTransform(-262.0818, 403.6199);
      this.shape_58 = new cjs.Shape();
      this.shape_58.graphics.f("#69DD4D").s().p("Av8dpQgzhoHHsbQHHscBNhPIEwpjQBmjOA6hjIAohDQAWgmAPgeQARghAFgIQAOgXAOgOQASgRERnOQERnPh5EaQh5EaheD8QheD8gVBRQgOA0gkBbIipGmQgVA0gMAZQgTAoguBMIhDBtQgjA6mWNXQmXNYizBSQhOAkg2AAQhFAAgcg6gAFpAUQFVppAHggQADgLAGgPIALgZQAJgXAIgrQAKgvAGgTQAOgkAHgXIDzshQiMJiAAAGQAABKgFArQgEAmgOA7QgXBegbBaQgcBahHCOQhHCNk4HNQiFDFgOAAQgSAADDlhgAheiqQCXn5AbhTIBJioQAUgtAIgOQATgjAogzIBBhSQArg1AOgXIAUgjQAFgJJUqpQp5MpgyCYQguA+gWAwQgKAXgGAVIgMAmQgKAegdAzQgRAfhECMQhECLiCF1Qg4CdgFAAQgGAABXkig");
      this.shape_58.setTransform(-345.0818, 545.7449);
      this.shape_59 = new cjs.Shape();
      this.shape_59.graphics.f("#69DD4D").s().p("Av8dpQgzhoHHsbQHHscBNhPIEwpjQBmjOA6hjIAohDQAWgmAPgeQARghAFgIQAOgXAOgOQASgRERnOQERnOh5EaQh5EZheD8QheD8gVBRQgOA0gkBbIipGmQgVA0gMAZQgTAoguBMIhDBtQgjA6mWNXQmXNYizBSQhOAkg2AAQhFAAgcg6gAFpAUQFVppAHggQADgLAGgPIALgZQAJgXAIgrQAKgvAGgTQAOgkAHgXIDzshQiMJiAAAGQAABKgFArQgEAmgOA7QgXBegbBaQgcBahHCOQhHCNk4HNQiFDFgOAAQgSAADDlhgAheiqQCXn5AbhTIBJioQAUgtAIgOQATgjAogzIBBhSQArg1AOgXIAUgjQAFgJJUqpQp5MpgyCYQguA+gWAwQgKAXgGAVIgMAmQgKAegdAzQgRAfhECMQhECLiCF1Qg4CdgFAAQgGAABXkig");
      this.shape_59.setTransform(-490.1318, 817.1449);
      this.shape_60 = new cjs.Shape();
      this.shape_60.graphics.f("#69DD4D").s().p("AiqE8QgVgFgPgUQgNgSgFgZQgMg7AahGQARguAuhKICTjzQARgbAMgNQASgVAVgHQAXgJAaAIQAZAHAUATQAeAcAUA8QAUA4gDAqQgCAWgJAcQgGAQgNAgIhdDTQgLAbgKAPQgNAVgSAKQgWAMgpgBQgzgBgRADIguARQgUAHgPAAIgMgCg");
      this.shape_60.setTransform(-600.117, 1022.9759);
      this.shape_61 = new cjs.Shape();
      this.shape_61.graphics.f("#69DD4D").s().p("AhVCfQgLgCgHgKQgHgKgCgMQgGgeANgjQAIgXAXglIBKh6QAJgOAGgHQAJgKAKgEQAMgEANAEQANADAKAKQAPAOAKAeQAKAcgCAVQAAAMgFAOIgKAYIguBqQgGAOgFAHQgHALgJAFQgLAGgUgBQgaAAgIABIgYAJQgJADgIAAIgGgBg");
      this.shape_61.setTransform(-616.3095, 1047.2225);
      this.timeline.addTween(cjs.Tween.get({}).to({ state: [] }).to({ state: [{ t: this.instance_10 }] }, 44).to({ state: [{ t: this.shape_57 }] }, 1).to({ state: [{ t: this.shape_58 }] }, 1).to({ state: [{ t: this.shape_59 }] }, 1).to({ state: [{ t: this.shape_60 }] }, 1).to({ state: [{ t: this.shape_61 }] }, 1).to({ state: [{ t: this.shape_61 }] }, 80).to({ state: [] }, 1).wait(90));
      // Layer_12
      this.instance_11 = new lib.Tween26("synched", 0);
      this.instance_11.setTransform(-33.3, 28.7, 1, 1, -6.7404, 0, 0, 58.4, -79.9);
      this.timeline.addTween(cjs.Tween.get(this.instance_11).to({ startPosition: 0 }, 15, cjs.Ease.quadInOut).to({ rotation: 7.4946 }, 14, cjs.Ease.quadInOut).to({ rotation: 7.4946 }, 15).to({ regX: 58.3, regY: -79.8, rotation: 14.9354, x: -27.05, y: 23.6 }, 3, cjs.Ease.get(1)).to({ regX: 58.4, regY: -79.9, rotation: 7.4946, x: -33.3, y: 28.7 }, 11).to({ startPosition: 0 }, 40).to({ rotation: -6.7404 }, 8, cjs.Ease.get(1)).to({ rotation: -6.7404 }, 23).to({ _off: true }, 1).wait(90));
      // Layer_14
      this.shape_62 = new cjs.Shape();
      this.shape_62.graphics.f().s("#000000").ss(3, 1, 1).p("AnyGSQgUhYgZifQgYifAChBQACgoAKhPQATiSAehYQAPgqARgcQAPgXAigkQBwhyCQhHQAXgLANAEQAMAEAGANQAGANgDANQgCAMgHANQgEAHgKAPQgRAcgWA9Qg8ClgdBZQgSA3gIAkQgLAyABArQAAAnAKAzQAGAdHCDwQHDDxg9CSQg+CRl2gXQl1gYgNANQgIAIgQAFQgEABgTgEQgTgEhDgZQhAgZgJhjQgJhjgUhXg");
      this.shape_62.setTransform(-5.068, 110.7144);
      this.shape_63 = new cjs.Shape();
      this.shape_63.graphics.f("#009999").s().p("AB7LmQl1gYgNANQgIAIgQAFQgEABgTgEQgTgEhDgZQhAgZgJhjQgJhjgUhXQgUhYgZifQgYifAChBQACgoAKhPQATiSAehYQAPgqARgcQAPgXAigkQBwhyCQhHQAXgLANAEQAMAEAGANQAGANgDANQgCAMgHANIgOAWQgRAcgWA9Qg8ClgdBZQgSA3gIAkQgLAyABArQAAAnAKAzQAGAdHCDwQHDDxg9CSQg1B9kdAAQguAAg0gDg");
      this.shape_63.setTransform(-5.068, 110.7144);
      this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_63 }, { t: this.shape_62 }] }).to({ state: [{ t: this.shape_63 }, { t: this.shape_62 }] }, 15).to({ state: [{ t: this.shape_63 }, { t: this.shape_62 }] }, 43).to({ state: [{ t: this.shape_63 }, { t: this.shape_62 }] }, 71).to({ state: [] }, 1).wait(90));
      this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-627.8, -305.6, 791.0999999999999, 1368.9);
  // stage content:
  (lib.bighopper = function (mode, startPosition, loop, reversed) {
      if (loop == null) { loop = true; }
      if (reversed == null) { reversed = false; }
      var props = new Object();
      props.mode = mode;
      props.startPosition = startPosition;
      props.labels = {};
      props.loop = loop;
      props.reversed = reversed;
      cjs.MovieClip.apply(this, [props]);
      // Layer_1
      this.instance = new lib.Symbol3("synched", 0, false);
      this.instance.setTransform(134.25, 589.7, 1.0024, 1.0024, 0, 0, 180, 48.6, 286.6);
      this.timeline.addTween(cjs.Tween.get(this.instance).to({ startPosition: 26 }, 26).to({ regY: 286.7, scaleX: 1.009, scaleY: 0.9869, x: 134.2, y: 589.8, startPosition: 35 }, 9, cjs.Ease.get(1)).to({ startPosition: 43 }, 8).to({ regX: 48.4, regY: 286.8, scaleX: 1.0079, scaleY: 0.999, skewX: -1.2113, x: 134.25, y: 589.9, startPosition: 44 }, 1).to({ regX: 48.6, regY: 286.6, scaleX: 1.0024, scaleY: 0.9935, skewX: 0, y: 589.75, startPosition: 49 }, 5).to({ regY: 286.7, scaleX: 1.009, scaleY: 0.9869, x: 134.2, y: 589.8, startPosition: 55 }, 6).to({ startPosition: 98 }, 43).to({ regY: 286.6, scaleX: 1.0024, scaleY: 1.0024, x: 134.25, y: 589.7, startPosition: 109 }, 11).wait(21));
      this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(207.9, 321, 608.9, 1047.3);
  // library properties:
  lib.properties = {
      id: '367C7A929D59DB45BEA40A799CC821FC',
      width: 400,
      height: 650,
      fps: 30,
      color: "#FFFFFF",
      opacity: 0.00,
      manifest: [],
      preloads: []
  };
  // bootstrap callback support:
  (lib.Stage = function (canvas) {
      createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();
  p.setAutoPlay = function (autoPlay) {
      this.tickEnabled = autoPlay;
  }
  p.play = function () { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
  p.stop = function (ms) { if (ms) this.seek(ms); this.tickEnabled = false; }
  p.seek = function (ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
  p.getDuration = function () { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }
  p.getTimelinePosition = function () { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }
  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
      an.bootstrapListeners = [];
  }
  an.bootstrapCallback = function (fnCallback) {
      an.bootstrapListeners.push(fnCallback);
      if (an.bootcompsLoaded.length > 0) {
          for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
              fnCallback(an.bootcompsLoaded[i]);
          }
      }
  };
  an.compositions = an.compositions || {};
  an.compositions['367C7A929D59DB45BEA40A799CC821FC'] = {
      getStage: function () { return exportRoot.stage; },
      getLibrary: function () { return lib; },
      getSpriteSheet: function () { return ss; },
      getImages: function () { return img; }
  };
  an.compositionLoaded = function (id) {
      an.bootcompsLoaded.push(id);
      for (var j = 0; j < an.bootstrapListeners.length; j++) {
          an.bootstrapListeners[j](id);
      }
  }
  an.getComposition = function (id) {
      return an.compositions[id];
  }
  an.makeResponsive = function ( domContainers) {
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();
      function resizeCanvas() {
          var w = lib.properties.width, h = lib.properties.height;
          var iw = window.innerWidth, ih = window.innerHeight;
          var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
          sRatio = Math.min(xRatio, yRatio);
          domContainers[0].width = w * pRatio * sRatio;
          domContainers[0].height = h * pRatio * sRatio;
          domContainers.forEach(function (container) {
              container.style.width = w * sRatio + 'px';
              container.style.height = h * sRatio + 'px';
          });
          stage.scaleX = pRatio * sRatio;
          stage.scaleY = pRatio * sRatio;
          stage.tickOnUpdate = false;
          stage.update();
          stage.tickOnUpdate = true;
      }
  }
  an.handleSoundStreamOnTick = function (event) {
      if (!event.paused) {
          var stageChild = stage.getChildAt(0);
          if (!stageChild.paused || stageChild.ignorePause) {
              stageChild.syncStreamSounds();
          }
      }
  }
  an.handleFilterCache = function (event) {
      if (!event.paused) {
          var target = event.target;
          if (target) {
              if (target.filterCacheList) {
                  for (var index = 0; index < target.filterCacheList.length; index++) {
                      var cacheInst = target.filterCacheList[index];
                      if ((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)) {
                          cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
                      }
                  }
              }
          }
      }
  }
})(createjs = createjs || {}, AdobeAnMainHopper = AdobeAnMainHopper || {});
var createjsMainHopper, AdobeAnMainHopper;
function initMainHopper() {
  canvasMainHopper = document.getElementById("canvasMainHopper");
  var comp = AdobeAnMainHopper.getComposition("367C7A929D59DB45BEA40A799CC821FC");
  handleCompleteMainHopper({}, comp);
}
function handleCompleteMainHopper(evt, comp) {
  //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
  var lib = comp.getLibrary();
  var ss = comp.getSpriteSheet();
  exportRoot = new lib.bighopper();
  stage = new lib.Stage(canvasMainHopper);
  //Registers the "tick" event listener.
  fnStartAnimation = function () {
      stage.addChild(exportRoot);
      createjs.Ticker.framerate = lib.properties.fps;
      createjs.Ticker.addEventListener("tick", stage);
  }
  //Code to support hidpi screens and responsive scaling.
  AdobeAnMainHopper.makeResponsive([canvasMainHopper]);
  AdobeAnMainHopper.compositionLoaded(lib.properties.id);
  fnStartAnimation();
}
