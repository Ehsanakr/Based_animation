window.onload = function () {
  init();
};

(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [];
  (lib.AnMovieClip = function () {
    this.actionFrames = [];
    this.ignorePause = false;
    this.gotoAndPlay = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
    };
    this.play = function () {
      cjs.MovieClip.prototype.play.call(this);
    };
    this.gotoAndStop = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
    };
    this.stop = function () {
      cjs.MovieClip.prototype.stop.call(this);
    };
  }).prototype = p = new cjs.MovieClip();
  // symbols:
  (lib.Blur = function () {
    this.initialize(img.Blur);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 393, 173);
  (lib.brilho_branco = function () {
    this.initialize(img.brilho_branco);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 323, 123);
  (lib.fundo = function () {
    this.initialize(img.fundo);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 804, 598);
  (lib.head_front = function () {
    this.initialize(img.head_front);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 863, 810);
  (lib.left_head = function () {
    this.initialize(img.left_head);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 863, 810);

  function mc_symbol_clone() {
    var clone = this._cloneProps(
      new this.constructor(
        this.mode,
        this.startPosition,
        this.loop,
        this.reversed
      )
    );
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
  (lib.trade = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    // Camada_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(["#DD80DB", "#FFFFFF"], [0, 1], -1.6, 15.6, 20.8, 15.6)
      .s()
      .p("AgMA3IAAhsIAZAAIAAAAIAAAcIAAA1IAAAbg");
    this.shape.setTransform(200.5652, 35.9939, 1.4272, 1.4272);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .lf(["#DD80DB", "#FFFFFF"], [0, 1], -11.6, 0.4, 10.8, 0.4)
      .s()
      .p(
        "AgXBrIAAg0IhZAAIAAAAIAaAAIAAgbIBYAAIAAAoIBFhEIhFhBIAAAoIhYAAIAAgcIA/AAIAAg0IAaAAIBuBpIhpBrg"
      );
    this.shape_1.setTransform(214.8732, 35.9939, 1.4272, 1.4272);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .lf(["#D18ADE", "#FFFFFF"], [0, 1], -61.5, 11.5, -61.5, -9.9)
      .s()
      .p(
        "AFYB3QgTgHgJgJIASgeQAHAGAPAGQAOAHAOAAQAQAAAMgIQALgIgBgOQABgMgHgIQgGgIgHgFIgZgOIgagOQgfgUAAglQAAgfAUgRQAVgRAgAAQAhABAXATIgRAeQgGgHgLgEQgLgGgNAAQgRABgJAHQgJAIAAANQAAALAFAIQAGAIAJAGIAZAOIAWAMQAJAFAGAGQAJAJAHALQAFAMAAAOQAAAXgKAOQgKAQgRAIQgSAIgVAAQgVgBgTgGgAqUB0QgRgJgKgSQgKgSAAgYQAAgYAJgRQAIgRARgKQARgJAXgBQANAAALAFQALAFAIAGQAIAHADAHIAAgZIAiAAIAACUIghAAIgBgaQgFAMgPAJQgPAJgSAAQgUAAgSgKgAqJAMQgLAOAAAVQAAAWALAOQALAOAWAAQASAAANgOQAMgMAAgWIAAgCQABgNgGgMQgGgLgLgGQgKgGgLABQgWAAgLAMgAKNB6IAAjuIA6AAQBIgBAdAjQAdAiAAAwQAAAfgMAcQgNAcgcASQgdARguAAgAKyBaIAbAAQAtAAAUgaQAVgZgBgnQAAglgUgYQgVgYgsAAIgbAAgAH0B6IAAjuIBpAAIAAAfIhEAAIAABDIA3AAIAAAfIg3AAIAABNIBPAAIAAAggAEKB6IgVgvIhvAAIgUAvIgpAAIB1j2IB1D2gACWArIBRAAIgphcgAhkB6IAAjuIA+AAQAygBARASQARARAAAYQAAARgHAPQgHAOgQAHQAXAEALAOQALAPAAAVQAAAVgGAQQgHAPgVALQgUALgmgBgAhABbIAmAAQAdAAAKgLQALgMAAgTQgBgQgMgLQgLgIgXgBIgpAAgAhAgPIAfAAQAXAAAKgLQAKgMgBgQQAAgggrAAIgeAAgAkHB6IAAhGQAAgegGgMQgFgLgRAAQgKgBgLAGQgJAFgHAMQgHAMAAAPIAABKIgjAAIAAiUIAjAAIAAAaQAGgNANgJQANgIASgBQAYAAAMAKQAMAKAFAQQAEARAAAcIAABIgAnpB6IAAiUIAkAAIAAAcQAFgOAMgKQALgIAQgBQAJAAAEADIgEAiQgDgCgKAAQgQAAgMAKQgMAKAAAWIAABMgAtIB6IAAjuIBpAAIAAAfIhEAAIAABDIA3AAIAAAfIg3AAIAABNIBPAAIAAAgg"
      );
    this.shape_2.setTransform(164.35, 78.65);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .lf(["#D18ADE", "#FFFFFF"], [0, 1], 103.2, 11.1, 103.2, -10.3)
      .s()
      .p(
        "AE6BvQgSgKgJgSQgIgSAAgVQAAgYAKgSQAKgRASgKQARgJAWAAQAjAAARATQARASAAAjIgBASIhsAAQADAUALAJQAKAJATAAQARAAAJgDQAKgDAJgEIALAZQgJAFgOAEQgNAEgVAAQgaAAgSgLgAE8AfIBLAAQAAgUgJgIQgKgHgQAAQgjAAgFAjgAB0BwQgRgJgLgSQgJgSgBgYQABgjATgVQAVgVAhAAQAUAAAPAJQAQAJAFANIgCh2IAjAAIAADwIghAAIgBgbQgFAMgQAJQgOAJgSAAQgVAAgRgKgAB/AIQgMAOAAAVQAAAWAMAOQALANAVAAQATAAANgNQAMgNAAgVIAAgCQAAgOgFgLQgGgLgKgGQgLgFgMAAQgUAAgMAMgAhUBwQgRgJgLgSQgKgSAAgYQAAgXAJgSQAJgRARgJQAQgKAXAAQANAAAMAEQAKAFAJAHQAGAGADAHIAAgZIAjAAIAACVIgiAAIgBgbQgFAMgOAJQgPAJgSAAQgUAAgRgKgAhKAIQgLAOAAAWQAAAVALAOQAMAOAVAAQATAAAMgNQAMgNAAgVIAAgCQAAgOgFgMQgFgLgLgGQgKgFgMAAQgVAAgMAMgAjnB3IAAiVIAjAAIAAAdQAFgPAMgJQAMgJAPAAQAKAAAEACIgEAiQgEgCgKAAQgPAAgMAKQgNAKAAAWIAABNgAlqB3IAAjQIg+AAIAAgfICgAAIAAAfIg+AAIAADQg"
      );
    this.shape_3.setTransform(141.25, 34.875);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f()
      .ls(
        ["#5DC8FF", "#A596EF", "#F692E6", "#F0C8FB"],
        [0, 0.369, 0.698, 1],
        -161.2,
        -18.6,
        161.3,
        -18.6
      )
      .ss(4, 1, 1)
      .p(
        "A44jNIAAEJQAAA4AlAoQADAEADADQAoAoA3ADQAEAAAEAAMAtMAAAQAEAAAFAAQA3gDAogoQADgDADgDQAlgpAAg4IAAkJ"
      );
    this.shape_4.setTransform(159.25, 98.325);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f()
      .ls(
        ["#5DC8FF", "#A596EF", "#F692E6", "#F0C8FB"],
        [0, 0.369, 0.698, 1],
        -161.2,
        0.8,
        161.3,
        0.8
      )
      .ss(4, 1, 1)
      .p(
        "A1QmEIgUAAIg0ABIgOAAQg8AAgrArQgBABgBABQgpArAAA6IAADmIAAGPAY5GEIAAmPIAAjmQAAg7gpgqQgBgBgBgBQgsgrg8AAIgNAAIg+AAMgqXgAB"
      );
    this.shape_5.setTransform(159.25, 38.85);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#05001E")
      .s()
      .p(
        "A1/JVQgZAAgVgEIAHAAMAtMAAAIAIAAQgWAEgZAAgAWmJRMgtMAAAIgHAAQhBgLgggrQgggrAAhLIAAjxIgJAAIAAmOIAJAAIAAjKQAAhRAmgrQAhgoBBgJIAOgCIAZAAIAbAAIAUAAIAUAAMAqYAAAIA9AAIANACQBBAJAiAoQAlArAABRIAADKIAKAAIAAGOIgKAAIAADxQAABLgfArQghArhAALIgIAAgA2YpTIA0AAgA2tJRIAAAAgAVcpTIAjAAIAaAAg"
      );
    this.shape_6.setTransform(159.25, 59.65);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.trade,
    new cjs.Rectangle(-2, -2, 322.5, 123),
    null
  );
  (lib.Symbol41 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .ls(
        ["#5DC8FF", "#A596EF", "#F692E6", "#F0C8FB"],
        [0, 0.369, 0.698, 1],
        -64.3,
        0,
        64.4,
        0
      )
      .ss(11, 1, 1)
      .p(
        "AIRicIr/sAQg8g8hVAAQhVAAg8A8Qg8A8AABVQAABVA8A8IJ6J6Ip6J7Qg8A9ABBUQAABVA8A8QA8A8BVAAQBUgBA8g7IL/sAQA8g9AAhUQgBgFAAgEQABgHAAgHQAAhVg8g8g"
      );
    this.shape.setTransform(-0.025, 0);
    this.shape_1 = new cjs.Shape();
    this.shape_1.setTransform(-0.025, 0);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-64.4, -103.9, 128.8, 207.9);
  (lib.stake_based = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    // Camada_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(["#DD80DB", "#FFFFFF"], [0, 1], -1.7, 15.4, 20.7, 15.4)
      .s()
      .p("AgMA3IAAhsIAZAAIAAAAIAAAcIAAA1IAAAbg");
    this.shape.setTransform(250.6652, 36.4439, 1.4272, 1.4272);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .lf(["#DD80DB", "#FFFFFF"], [0, 1], -11.7, 0.6, 10.7, 0.6)
      .s()
      .p(
        "AgXBrIAAg0IhZAAIAAAAIAaAAIAAgbIBYAAIAAAoIBFhEIhFhBIAAAoIhYAAIAAgcIA/AAIAAg0IAaAAIBuBpIhpBrg"
      );
    this.shape_1.setTransform(264.9732, 36.4439, 1.4272, 1.4272);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .lf(["#DD80DB", "#FFFFFF"], [0, 1], -111.8, 10.9, -111.8, -13.5)
      .s()
      .p(
        "ADQB1QgUgHgIgIIARggQAHAHAPAHQAOAGAOAAQARAAALgIQALgIAAgPQAAgLgGgIQgGgIgIgFIgZgOIgZgNQgggVAAglQAAggAVgQQAUgQAgAAQAhgBAYAUIgSAdQgGgGgLgFQgLgEgNAAQgQgBgKAIQgJAHAAAPQAAAKAGAIQAGAIAJAGIAYAOIAXANQAIAEAGAHQAKAIAGAMQAGAMAAAOQAAAVgKAQQgKAPgSAIQgRAIgWgBQgUABgTgHgAgGBgQgVgbAAgzIAAiJIAkAAIAACKQAAAmALARQAMAQAaAAQAaAAALgQQAMgQAAgnIAAiKIAlAAIAACJQAAAzgWAbQgVAbgrAAQgtAAgTgbgApIByQgRgJgLgTQgKgRAAgYQAAgYAJgRQAJgRARgJQARgLAWABQANAAAMAEQALAEAIAIQAIAGACAGIABgZIAiAAIAACVIgiAAIAAgaQgGAMgPAJQgOAJgTgBQgUAAgRgJgAo9AKQgMAOAAAWQAAAVAMAOQALANAVAAQATABANgNQAMgOAAgUIAAgCQAAgOgFgMQgGgLgLgGQgKgFgMgBQgVAAgLANgAJ5BqQgbgQgPgdQgOgbAAgiQAAgjAPgcQAQgcAcgQQAcgPAkAAQAQAAAOADQAOADAJAEQAJAFADADIgQAhQgUgSggAAQgXAAgSALQgSALgLAVQgKAUAAAbQAAAZAJAUQAJAUASALQASANAZAAQAdgBAbgQIAKAfQgHAHgTAGQgTAFgUAAQglAAgbgQgAFrB4IAAjvIA6AAQBJABAdAhQAcAjAAAvQAAAhgMAbQgMAcgdASQgdARguAAgAGQBYIAbAAQAtAAAVgZQAUgaAAgmQAAgmgVgYQgUgYgtAAIgbAAgAi7B4IAAhHQAAgdgGgLQgFgMgSgBQgJABgLAFQgKAGgGALQgHALAAAQIAABKIgkAAIAAiVIAjAAIABAcQAGgOANgIQANgKASABQAYAAAMAJQAMAKAFAQQAEASAAAbIAABIgAmdB4IAAiVIAjAAIAAAdQAFgOAMgJQAMgKAPABQAKAAAEABIgEAjQgDgCgKAAQgQAAgMAKQgNAKAAAVIAABNgAr8B4IAAjvIBpAAIAAAgIhEAAIAABCIA3AAIAAAhIg3AAIAABMIBPAAIAAAgg"
      );
    this.shape_2.setTransform(154.225, 80.6);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .lf(["#DD80DB", "#FFFFFF"], [0, 1], 95.4, 11.1, 95.4, -13.3)
      .s()
      .p(
        "AGwB3QgUgHgIgIIARggQAHAHAOAHQAPAGANAAQASAAAKgIQAMgJAAgNQgBgMgGgIQgFgIgJgGIgYgNIgZgOQgggTAAgmQAAgfAVgRQAUgQAfAAQAiAAAYATIgSAdQgGgGgLgEQgLgGgOAAQgPAAgKAIQgJAHAAAOQAAALAGAIQAFAIAKAGIAYAOIAXAMQAIAFAGAGQAKAJAFAMQAHALAAAOQAAAWgKAQQgKAPgSAIQgRAHgXABQgUgBgSgGgAjzBzQgSgKgIgSQgJgSAAgWQAAgXAKgSQAKgRARgKQASgKAXABQAigBARAUQAQASAAAjIgBASIhrAAQADAUALAJQALAJATAAQAPAAALgDQAKgDAIgEIALAZQgIAFgOAEQgPADgTABQgbAAgSgLgAjxAjIBKAAQAAgUgJgIQgIgIgRABQgjAAgFAjgApdB0QgRgJgKgSQgKgSAAgYQAAgXAJgSQAIgRARgJQARgKAXAAQANgBALAFQALAFAIAGQAIAHADAHIAAgaIAiAAIAACWIghAAIgBgbQgFAMgPAJQgPAIgSABQgVgBgRgJgApSAMQgLAOAAAVQAAAWALAOQALAOAWAAQASgBANgNQAMgNAAgUIAAgDQABgOgGgLQgGgLgKgGQgLgFgLAAQgWAAgLAMgAuDB3QgUgHgIgIIASggQAGAHAPAHQAPAGANAAQARAAALgIQALgJAAgNQAAgMgGgIQgGgIgIgGIgYgNIgagOQgggTAAgmQABgfAUgRQAVgQAfAAQAhAAAYATIgRAdQgHgGgKgEQgMgGgNAAQgQAAgKAIQgIAHgBAOQAAALAGAIQAGAIAJAGIAYAOIAXAMQAIAFAHAGQAJAJAGAMQAGALAAAOQAAAWgKAQQgKAPgRAIQgSAHgWABQgUgBgTgGgALkB7IAAjwIA6AAQBJAAAdAjQAcAiAAAwQAAAfgMAdQgNAbgcASQgdASguAAgAMIBaIAbAAQAuAAAVgaQATgZABgnQAAglgVgYQgUgYguAAIgbAAgAJKB7IAAjwIBqAAIAAAgIhFAAIAABDIA3AAIAAAgIg3AAIAABMIBPAAIAAAhgAFgB7IgUgwIhvAAIgVAwIgoAAIB1j4IB1D4gADsArIBRAAIgohbgAgNB7IAAjwIA8AAQA0ABARARQARARAAAZQgBAQgHAOQgGAPgRAHQAXADALAPQAMAPAAAVQAAAVgGAQQgHAPgVALQgUALgoAAgAAWBbIAmAAQAdAAAKgLQALgMAAgSQAAgSgMgJQgLgJgZAAIgoAAgAAWgPIAfAAQAXAAAKgLQAKgMAAgQQAAgfgsgBIgeAAgAlTB7IgegyIgIgRIgUAWIAAAtIgiAAIAAjwIAiAAIgBCcIA5hCIAsAAIg5A+IA5BYgArdB7IAAh6IgaAAIAAgcIAaAAIAAg9IAkgIIAABFIAiAAIAAAcIgiAAIAAB6g"
      );
    this.shape_3.setTransform(143.5, 36.45);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f()
      .ls(
        ["#5DC8FF", "#A596EF", "#F692E6", "#F0C8FB"],
        [0, 0.369, 0.698, 1],
        -161.2,
        -18.6,
        161.3,
        -18.6
      )
      .ss(4, 1, 1)
      .p(
        "A44jNIAAEJQAAA4AlAoQADAEADADQAoAoA3ADQAEAAAEAAMAtMAAAQAEAAAFAAQA3gDAogoQADgDADgDQAlgpAAg4IAAkJ"
      );
    this.shape_4.setTransform(159.25, 98.325);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f()
      .ls(
        ["#5DC8FF", "#A596EF", "#F692E6", "#F0C8FB"],
        [0, 0.369, 0.698, 1],
        -161.2,
        0.8,
        161.3,
        0.8
      )
      .ss(4, 1, 1)
      .p(
        "A1QmEIgUAAIg0ABIgOAAQg8AAgrArQgBABgBABQgpArAAA6IAADmIAAGPAY5GEIAAmPIAAjmQAAg7gpgqQgBgBgBgBQgsgrg8AAIgNAAIg+AAMgqXgAB"
      );
    this.shape_5.setTransform(159.25, 38.85);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#05001E")
      .s()
      .p(
        "A1/JVQgZAAgVgEIAHAAMAtMAAAIAIAAQgWAEgZAAgAWmJRMgtMAAAIgHAAQhBgLgggrQgggrAAhLIAAjxIgJAAIAAmOIAJAAIAAjKQAAhRAmgrQAhgoBBgJIAOgCIAZAAIAbAAIAUAAIAUAAMAqYAAAIA9AAIANACQBBAJAiAoQAlArAABRIAADKIAKAAIAAGOIgKAAIAADxQAABLgfArQghArhAALIgIAAgA2YpTIA0AAgA2tJRIAAAAgAVcpTIAjAAIAaAAg"
      );
    this.shape_6.setTransform(159.25, 59.65);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.stake_based,
    new cjs.Rectangle(-2, -2, 322.5, 123),
    null
  );
  (lib.seta_rosa = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    // Camada_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#FF00CC")
      .ss(11, 1, 1)
      .p(
        "EBM3gBjInpnpQgmgmg2AAQg2AAgmAmQgnAnAAA2QAAA2AnAmIGTGTImTGUQgnAnABA1QAAA2AmAnQAmAlA2AAQA2AAAmglIHpnpQAmgnAAg2QgBgDAAgDQABgDAAgFQAAg2gmgmgEA0sgBjInonpQgngmg2AAQg2AAgmAmQgmAnAAA2QAAA2AmAmIGUGTImUGUQgmAnAAA1QAAA2AmAnQAnAlA2AAQA1AAAnglIHonpQAmgnAAg2QAAgDAAgDQAAgDAAgFQAAg2gmgmgAdNhjInonpQgngmg2AAQg2AAgmAmQgmAnAAA2QAAA2AmAmIGUGTImUGUQgmAnAAA1QAAA2AmAnQAnAlA2AAQA1AAAnglIHonpQAmgnAAg2QgBgDAAgDQABgDAAgFQAAg2gmgmgAE0hjInonpQgmgmg2AAQg3AAglAmQgnAnAAA2QAAA2AnAmIGSGTImSGUQgnAnABA1QAAA2AmAnQAmAlA2AAQA2AAAmglIHonpQAmgnAAg2QgBgDAAgDQABgDAAgFQAAg2gmgmgAyqhjInpnpQgngmg1AAQg2AAgmAmQgnAnAAA2QAAA2AnAmIGTGTImTGUQgnAnABA1QAAA2AmAnQAmAlA2AAQA1AAAnglIHpnpQAlgnAAg2QAAgDAAgDQAAgDAAgFQAAg2glgmgEgq1gBjInonpQgngmg2AAQg2AAgmAmQgmAnAAA2QAAA2AmAmIGTGTImTGUQgmAnAAA1QAAA2AmAnQAmAlA2AAQA2AAAnglIHonpQAmgnAAg2QgBgDAAgDQABgDAAgFQAAg2gmgmgEhCUgBjInpnpQgmgmg2AAQg2AAgmAmQgnAnAAA2QAAA2AnAmIGTGTImTGUQgnAnABA1QAAA2AmAnQAmAlA2AAQA2AAAmglIHpnpQAmgnAAg2QgBgDAAgDQABgDAAgFQAAg2gmgmg"
      );
    this.shape.setTransform(495.65, 62.65);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("rgba(255,0,204,0.6)")
      .s()
      .p(
        "EBCVAJNQglgngBg1QAAg2AmgnIGUmUImUmTQgmgmAAg2QAAg2AmgnQAngmA2AAQA2AAAmAmIHoHpQAmAnAAA2IAAAIIAAAFQAAA2gmAnInoHpQgmAlg2AAQg2ABgngmgEAqLAJNQgmgnAAg1QgBg2AngnIGTmUImTmTQgngmAAg2QAAg2AngnQAmgmA2AAQA2AAAmAmIHpHpQAmAnAAA2IAAAIIAAAFQAAA2gmAnInpHpQgmAlg1AAQg2ABgngmgASsJNQgmgnAAg1QgBg2AngnIGTmUImTmTQgngmAAg2QAAg2AngnQAmgmA2AAQA2AAAmAmIHpHpQAmAnAAA2IAAAIIAAAFQAAA2gmAnInpHpQgmAlg1AAQg2ABgngmgAltJNQgmgnABg1QgBg2AmgnIGTmUImTmTQgmgmAAg2QAAg2AmgnQAmgmA2AAQA2AAAnAmIHoHpQAmAngBA2IAAAIIAAAFQABA2gmAnInoHpQgnAlg1AAQg2ABgngmgA9MJNQgmgnABg1QgBg2AmgnIGUmUImUmTQgmgmAAg2QAAg2AmgnQAmgmA2AAQA2AAAnAmIHpHpQAmAngBA2IAAAIIAAAFQABA2gmAnInpHpQgnAlg1AAQg2ABgngmgEg1WAJNQgmgnAAg1QAAg2AmgnIGTmUImTmTQgngmABg2QgBg2AngnQAmgmA2AAQA2AAAnAmIHoHpQAmAnAAA2IgBAIIABAFQAAA2gmAnInoHpQgnAlg1AAQg2ABgngmgEhM1AJNQgmgnAAg1QAAg2AmgnIGTmUImTmTQgngmAAg2QAAg2AngnQAmgmA2AAQA2AAAnAmIHoHpQAmAnAAA2IgBAIIABAFQAAA2gmAnInoHpQgnAlg1AAQg2ABgngmg"
      );
    this.shape_1.setTransform(495.65, 62.65);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-5.5, -5.5, 1002.3, 136.3);
  (lib.seta_brilho_2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    // Camada_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#FFFFFF")
      .ss(11, 1, 1)
      .p(
        "EBM3gBjInpnpQgmgmg2AAQg2AAgmAmQgnAnAAA2QAAA2AnAmIGTGTImTGUQgnAnABA1QAAA2AmAnQAmAlA2AAQA2AAAmglIHpnpQAmgnAAg2QgBgDAAgDQABgDAAgFQAAg2gmgmgEA0sgBjInonpQgngmg2AAQg2AAgmAmQgmAnAAA2QAAA2AmAmIGUGTImUGUQgmAnAAA1QAAA2AmAnQAnAlA2AAQA1AAAnglIHonpQAmgnAAg2QAAgDAAgDQAAgDAAgFQAAg2gmgmgAdNhjInonpQgngmg2AAQg2AAgmAmQgmAnAAA2QAAA2AmAmIGUGTImUGUQgmAnAAA1QAAA2AmAnQAnAlA2AAQA1AAAnglIHonpQAmgnAAg2QgBgDAAgDQABgDAAgFQAAg2gmgmgAE0hjInonpQgmgmg2AAQg3AAglAmQgnAnAAA2QAAA2AnAmIGSGTImSGUQgnAnABA1QAAA2AmAnQAmAlA2AAQA2AAAmglIHonpQAmgnAAg2QgBgDAAgDQABgDAAgFQAAg2gmgmgAyqhjInpnpQgngmg1AAQg2AAgmAmQgnAnAAA2QAAA2AnAmIGTGTImTGUQgnAnABA1QAAA2AmAnQAmAlA2AAQA1AAAnglIHpnpQAlgnAAg2QAAgDAAgDQAAgDAAgFQAAg2glgmgEgq1gBjInonpQgngmg2AAQg2AAgmAmQgmAnAAA2QAAA2AmAmIGTGTImTGUQgmAnAAA1QAAA2AmAnQAmAlA2AAQA2AAAnglIHonpQAmgnAAg2QgBgDAAgDQABgDAAgFQAAg2gmgmgEhCUgBjInpnpQgmgmg2AAQg2AAgmAmQgnAnAAA2QAAA2AnAmIGTGTImTGUQgnAnABA1QAAA2AmAnQAmAlA2AAQA2AAAmglIHpnpQAmgnAAg2QgBgDAAgDQABgDAAgFQAAg2gmgmg"
      );
    this.shape.setTransform(495.65, 62.65);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "EBCVAJNQglgngBg1QAAg2AmgnIGUmUImUmTQgmgmAAg2QAAg2AmgnQAngmA2AAQA2AAAmAmIHoHpQAmAnAAA2IAAAIIAAAFQAAA2gmAnInoHpQgmAlg2AAQg2ABgngmgEAqLAJNQgmgnAAg1QgBg2AngnIGTmUImTmTQgngmAAg2QAAg2AngnQAmgmA2AAQA2AAAmAmIHpHpQAmAnAAA2IAAAIIAAAFQAAA2gmAnInpHpQgmAlg1AAQg2ABgngmgASsJNQgmgnAAg1QgBg2AngnIGTmUImTmTQgngmAAg2QAAg2AngnQAmgmA2AAQA2AAAmAmIHpHpQAmAnAAA2IAAAIIAAAFQAAA2gmAnInpHpQgmAlg1AAQg2ABgngmgAltJNQgmgnABg1QgBg2AmgnIGTmUImTmTQgmgmAAg2QAAg2AmgnQAmgmA2AAQA2AAAnAmIHoHpQAmAngBA2IAAAIIAAAFQABA2gmAnInoHpQgnAlg1AAQg2ABgngmgA9MJNQgmgnABg1QgBg2AmgnIGUmUImUmTQgmgmAAg2QAAg2AmgnQAmgmA2AAQA2AAAnAmIHpHpQAmAngBA2IAAAIIAAAFQABA2gmAnInpHpQgnAlg1AAQg2ABgngmgEg1WAJNQgmgnAAg1QAAg2AmgnIGTmUImTmTQgngmABg2QgBg2AngnQAmgmA2AAQA2AAAnAmIHoHpQAmAnAAA2IgBAIIABAFQAAA2gmAnInoHpQgnAlg1AAQg2ABgngmgEhM1AJNQgmgnAAg1QAAg2AmgnIGTmUImTmTQgngmAAg2QAAg2AngnQAmgmA2AAQA2AAAnAmIHoHpQAmAnAAA2IgBAIIABAFQAAA2gmAnInoHpQgnAlg1AAQg2ABgngmg"
      );
    this.shape_1.setTransform(495.65, 62.65);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-5.5, -5.5, 1002.3, 136.3);
  (lib.more_trading = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    // Camada_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(["#DD80DB", "#FFFFFF"], [0, 1], -1.7, 15.4, 20.7, 15.4)
      .s()
      .p("AgMA3IAAhsIAZAAIAAAAIAAAcIAAA1IAAAbg");
    this.shape.setTransform(255.6652, 40.6439, 1.4272, 1.4272);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .lf(["#DD80DB", "#FFFFFF"], [0, 1], -11.7, 0.6, 10.7, 0.6)
      .s()
      .p(
        "AgXBrIAAg0IhZAAIAAAAIAaAAIAAgbIBYAAIAAAoIBFhEIhFhBIAAAoIhYAAIAAgcIA/AAIAAg0IAaAAIBuBpIhpBrg"
      );
    this.shape_1.setTransform(269.9732, 40.6439, 1.4272, 1.4272);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .lf(["#DD80DB", "#FFFFFF"], [0, 1], -115.8, 7.9, -115.8, -19.4)
      .s()
      .p(
        "AnXCfQgRgFgHgEIAIghQAWAPAZAAQAVAAANgKQANgJAAgcIAAgbQgGANgQAIQgQAJgSAAQgUAAgQgKQgQgJgKgSQgJgSAAgYQAAgWAJgSQAJgSAQgJQARgKAWAAQANAAAMAEQAMAFAHAHQAJAGACAHIABgZIAhAAIAACUQAAAmgUAVQgTAUgqAAQgQAAgQgEgAnXgZQgMAOAAAUQAAAWAMAOQAKANAWAAQASAAAOgNQAMgNAAgVIAAgCQAAgNgFgLQgHgLgKgGQgKgGgMAAQgVAAgLANgAhjBNQgSgKgIgSQgJgSAAgVQABgXAJgSQALgSARgKQASgJAWAAQAiAAASATQAPATAAAiIgBASIhrAAQAEAUALAJQAKAJATAAQAQAAAKgDQAKgDAIgEIAKAZQgHAFgOAEQgOAEgUAAQgbAAgSgLgAhhgCIBLAAQAAgUgJgIQgJgIgRAAQgiAAgGAkgAL9BVIgwhaIgbABIgJAAIAABZIgkAAIAAjvIA3AAQApAAAbARQAaARAAAmQAAAZgLARQgLASgWAJIA5BigAKpgiIAXAAQAgAAAMgOQAMgOAAgTQAAgrg6AAIgVAAgAHYBVIAAjvIA1AAQAsAAAWATQAUATAAAhQAAAngWAUQgXAVgtAAIgMAAIAABYgAH9gkIANAAQAdAAAMgMQALgNABgSQgBgTgLgMQgLgNgaAAIgRAAgAGaBVIgVgvIhvAAIgUAvIgpAAIB1j3IB1D3gAEmAFIBRAAIgphbgAAvBVIAAiVIAjAAIAAAdQAGgPALgJQAMgJAPAAQAKAAAFACIgFAjQgDgCgKAAQgQAAgMAKQgNAKAAAVIAABNgAjNBVIAAhJQAAgSgCgLQgCgKgGgGQgHgFgMAAQgJAAgKAFQgLAGgGAMQgHALAAAOIAABLIgiAAIAAjvIAiAAIgBB1QAGgNANgJQAOgJATAAQAXAAANAJQAMAKAEARQAFASgBAaIAABJgApVBVIAAiVIAlAAIAACVgAqtBVIAAhvIhUAAIAABvIglAAIAAjvIAlAAIAABiIBUAAIAAhiIAlAAIAADvgApUhjQgHgHAAgKQAAgJAHgHQAHgGAKAAQAJAAAIAGQAGAHAAAJQAAAKgGAHQgHAHgKAAQgKAAgHgHg"
      );
    this.shape_2.setTransform(158.6, 84.475);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .lf(["#DD80DB", "#FFFFFF"], [0, 1], 100.2, 7.8, 100.2, -19.5)
      .s()
      .p(
        "ANSCfQgQgFgHgEIAIghQAWAPAZAAQAUgBANgJQANgKABgbIAAgbQgHANgQAIQgPAJgSAAQgUAAgQgKQgRgKgJgRQgJgTAAgXQgBgWAKgSQAIgSARgKQARgJAWgBQANAAAMAFQALAFAIAGQAIAHACAHIABgZIAiAAIAACTQAAAmgUAWQgTAUgqAAQgQAAgRgEgANSgZQgLAOAAAUQAAAWALANQALAOAWAAQASAAANgNQANgNAAgVIAAgCQAAgNgGgLQgGgLgLgHQgKgFgLAAQgVAAgMANgAFqBOQgRgKgKgRQgLgSABgYQAAgiATgWQAUgVAigBQATAAAQAKQAPAJAGANIgBh2IAiAAIAADvIgiAAIAAgaQgGAMgOAJQgPAJgTAAQgTAAgSgKgAF1gZQgLAOAAAUQAAAWALANQALAOAWAAQASAAANgNQANgNAAgVIAAgCQAAgNgGgLQgGgLgLgHQgKgFgLAAQgVAAgMANgAChBOQgSgKgKgRQgKgSAAgYQAAgXAJgRQAJgSAQgKQARgJAXgBQANAAALAFQAMAFAHAGQAJAHACAHIABgZIAhAAIAACUIghAAIAAgaQgGAMgPAJQgOAJgTAAQgUAAgRgKgACsgZQgMAOAAAUQAAAWAMAOQALAOAVAAQASAAAOgOQAMgMAAgWIAAgCQAAgMgFgMQgHgLgKgGQgKgHgMABQgVAAgLANgAlEBNQgSgKgIgTQgJgRAAgWQAAgWAKgSQAKgSASgKQARgKAWAAQAjAAARATQARAUAAAhIgBATIhsAAQAEATAKAKQAKAIAUABQAQAAAKgEQAJgCAJgEIALAZQgIAFgPAEQgOADgTABQgbAAgSgLgAlCgCIBKAAQABgUgKgIQgJgIgRAAQgigBgFAlgApxBOQgSgLgJgSQgKgSAAgWQAAgVAJgRQAKgTASgKQASgLAYAAQAXAAASALQASAKAJATQAKARAAAVQAAAWgKASQgJASgTALQgRAJgXABQgXgBgTgJgApngaQgKAPgBAUQABAVALAPQAMAOAUAAQASAAALgOQALgOAAgWQAAgTgMgPQgLgOgTAAQgTAAgMANgAuBg8IgdCQIgkAAIAyj2IBYCzIBYizIA0D2IgjAAIggiQIgNAiIg8BxgALaBUIAAhGQgBgdgFgMQgGgMgRAAQgKgBgKAHQgKAFgGAMQgIALABAPIAABKIgkAAIAAiUIAjAAIABAbQAFgOAOgJQANgIASgBQAYAAAMAKQAMAKAEARQAFARAAAbIAABIgAIZBUIAAiUIAkAAIAACUgAANBUIAAiUIAkAAIAAAdQAFgPAMgKQAMgIAPgBQAKAAAEADIgFAjQgDgCgJAAQgQAAgMAKQgNAKAAAVIAABMgAhUBUIAAh4IgaAAIAAgcIAaAAIAAg9IAkgJIAABGIAjAAIAAAcIgjAAIAAB4gAnVBUIAAiUIAjAAIAAAdQAGgPALgKQAMgIAPgBQALAAAEADIgFAjQgDgCgKAAQgQAAgMAKQgNAKAAAVIAABMgAIahjQgHgIAAgKQAAgJAHgGQAHgHAJABQALgBAGAHQAIAGgBAJQABAKgIAIQgGAGgLABQgJgBgHgGg"
      );
    this.shape_3.setTransform(144.25, 39.75);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f()
      .ls(
        ["#5DC8FF", "#A596EF", "#F692E6", "#F0C8FB"],
        [0, 0.369, 0.698, 1],
        -161.2,
        -18.6,
        161.3,
        -18.6
      )
      .ss(4, 1, 1)
      .p(
        "A44jNIAAEJQAAA4AlAoQADAEADADQAoAoA3ADQAEAAAEAAMAtMAAAQAEAAAFAAQA3gDAogoQADgDADgDQAlgpAAg4IAAkJ"
      );
    this.shape_4.setTransform(159.25, 98.325);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f()
      .ls(
        ["#5DC8FF", "#A596EF", "#F692E6", "#F0C8FB"],
        [0, 0.369, 0.698, 1],
        -161.2,
        0.8,
        161.3,
        0.8
      )
      .ss(4, 1, 1)
      .p(
        "A1QmEIgUAAIg0ABIgOAAQg8AAgrArQgBABgBABQgpArAAA6IAADmIAAGPAY5GEIAAmPIAAjmQAAg7gpgqQgBgBgBgBQgsgrg8AAIgNAAIg+AAMgqXgAB"
      );
    this.shape_5.setTransform(159.25, 38.85);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#05001E")
      .s()
      .p(
        "A1/JVQgZAAgVgEIAHAAMAtMAAAIAIAAQgWAEgZAAgAWmJRMgtMAAAIgHAAQhBgLgggrQgggrAAhLIAAjxIgJAAIAAmOIAJAAIAAjKQAAhRAmgrQAhgoBBgJIAOgCIA0AAIAUAAIAUAAMAqYAAAIA9AAIANACQBBAJAiAoQAlArAABRIAADKIAKAAIAAGOIgKAAIAADxQAABLgfArQghArhAALIgIAAgA2tJRIAAAAgAVcpTIAjAAIAaAAgA1/pTIAbAAIg0AAIAZAAg"
      );
    this.shape_6.setTransform(159.25, 59.65);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.more_trading,
    new cjs.Rectangle(-2, -2, 322.5, 123),
    null
  );
  (lib.more_staking = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    // Camada_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(["#DD80DB", "#FFFFFF"], [0, 1], -1.7, 15.5, 20.7, 15.5)
      .s()
      .p("AgMA3IAAhsIAZAAIAAAAIAAAcIAAA1IAAAbg");
    this.shape.setTransform(254.9652, 44.1939, 1.4272, 1.4272);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .lf(["#DD80DB", "#FFFFFF"], [0, 1], -11.7, 0.5, 10.7, 0.5)
      .s()
      .p(
        "AgXBrIAAg0IhZAAIAAAAIAaAAIAAgbIBYAAIAAAoIBFhEIhFhBIAAAoIhYAAIAAgcIA/AAIAAg0IAaAAIBuBpIhpBrg"
      );
    this.shape_1.setTransform(269.2732, 44.1939, 1.4272, 1.4272);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .lf(["#DD80DB", "#FFFFFF"], [0, 1], 159.1, 11.6, 159.1, -15.7)
      .s()
      .p(
        "AEIBzQgSgLgJgSQgIgRAAgWQAAgXAKgSQAKgRARgKQASgKAXAAQAiAAARATQAQATAAAiIgBATIhrAAQAEATAKAJQALAJASAAQAQAAAKgDQALgCAIgFIALAaQgJAFgNAEQgOADgVAAQgaAAgSgKgAEKAjIBLAAQgBgUgIgJQgKgHgQAAQgjAAgFAkgAgjBzQgTgKgJgSQgKgSAAgWQAAgWAKgSQAJgRASgKQASgLAWAAQAYAAASALQASAKAJARQAKASAAAWQAAAWgKASQgKASgRAKQgSAKgYAAQgVAAgSgKgAgZALQgLAPAAAVQAAAVAMAPQAMAOARAAQAUAAALgOQALgOAAgWQAAgVgMgOQgMgOgTAAQgSAAgLANgAk0gWIgeCQIgkAAIAzj2IBZCzIBWizIA1D2IgkAAIgfiQIgNAhIg7BygAB3B6IAAiVIAkAAIAAAdQAEgOANgKQAMgJAPAAQAKAAADACIgEAjQgDgCgKAAQgPAAgNAKQgMAKAAAVIAABNg"
      );
    this.shape_2.setTransform(79.7, 39.925);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .lf(["#DD80DB", "#FFFFFF"], [0, 1], -73.8, 7.9, -73.8, -16)
      .s()
      .p(
        "ALGCkIAAjlIAiAAIAAAcQASggAmAAQAfAAAUAUQAUAUAAAlQAAAYgKASQgKASgQAKQgRAJgUAAQgTAAgOgGQgNgHgIgMIAABmgAMAghQgKAGgGALQgGAKAAANIAAADQAAAOAGALQAGALAKAGQAKAGAMAAQAVAAAMgOQALgNAAgWQAAgVgLgNQgLgNgWAAQgMAAgKAFgAwrCeQgQgEgHgEIAIghQAVAOAaAAQAUAAANgKQANgJABgbIAAgbQgHANgQAIQgPAIgTAAQgTAAgRgJQgQgKgJgSQgKgSAAgYQAAgVAJgSQAJgSARgKQARgKAWAAQANAAALAFQAMAEAIAHQAIAHACAGIABgZIAhAAIAACUQAAAmgTAVQgUAVgpAAQgRAAgQgFgAwrgZQgMANAAAVQAAAWAMANQALAOAVAAQATAAANgNQAMgNAAgVIAAgCQAAgNgFgLQgGgLgLgHQgKgGgMAAQgVAAgLAOgAUMBNQgSgLgIgSQgJgRAAgWQAAgWAKgSQAKgSASgKQARgKAXAAQAiAAARATQARAUAAAhIgBATIhsAAQAEATAKAJQALAJATAAQAQAAAKgDQAKgCAIgFIALAaQgIAFgOAEQgOADgUAAQgbAAgSgKgAUOgCIBLAAQAAgUgJgJQgJgIgRAAQgjAAgFAlgAR4BOQgSgKgKgSQgLgSAAgZQAAgWAKgRQAJgSASgJQARgKAXAAQASAAAMAFQANAEAHAHIgQAcQgOgOgRAAQgVAAgLANQgLANAAAUQAAAYAMAOQALANAUAAQAKAAAKgDQAKgDAFgEIANAZQgIAGgMAEQgNAEgQAAQgWAAgSgJgABhBRQgTgHgJgJIASgfQAHAHAOAGQAPAHANAAQARAAALgIQALgJAAgOQAAgLgGgIQgGgHgIgGIgYgNIgagOQgfgVAAglQAAggAUgQQAVgRAfAAQAiAAAXAUIgRAdQgGgGgLgFQgMgFgNAAQgQAAgJAIQgJAHAAAOQAAALAFAIQAGAIAJAGIAZAOIAWANQAIAFAHAGQAJAJAGALQAGALAAAOQAAAWgKAPQgKAQgRAIQgSAHgWAAQgUAAgTgGgAq2BNQgSgLgJgSQgIgRAAgWQAAgWAKgSQAKgSARgKQASgKAWAAQAjAAARATQAQAUAAAhIgBATIhrAAQADATALAJQAKAJATAAQAQAAAKgDQAKgCAJgFIALAaQgJAFgOAEQgOADgUAAQgaAAgSgKgAq0gCIBKAAQAAgUgJgJQgJgIgRAAQgiAAgFAlgAQEBUIAAiVIAlAAIAACVgAOLBUIAAiVIAkAAIAAAeQAFgPAMgKQAMgJAPAAQAKAAAEACIgFAkQgDgCgKAAQgPAAgNAKQgMAKAAAUIAABNgAGWBUIAAjvIA6AAQBIAAAdAiQAdAjAAAvQAAAhgMAbQgNAcgcASQgdARguAAgAG6A0IAbAAQAuAAAUgaQAUgZAAgmQAAgmgUgYQgVgYgtAAIgbAAgAD9BUIAAjvIBpAAIAAAgIhFAAIAABCIA4AAIAAAhIg4AAIAABMIBQAAIAAAggAASBUIgTgvIhvAAIgUAvIgpAAIB1j3IB0D3gAhhAEIBRAAIgohbgAlbBUIAAjvIA9AAQA0AAARARQARASAAAYQAAARgHAOQgHAPgQAHQAXADALAQQALAPAAAUQAAAVgGAQQgHAPgVALQgUAKgnAAgAk3A1IAmAAQAeAAAKgLQAKgMAAgTQAAgQgMgKQgLgJgYAAIgpAAgAk3g1IAfAAQAXAAAKgLQAKgMAAgRQAAgfgsAAIgeAAgAokBUIAAiVIAkAAIAAAeQAFgPAMgKQAMgJAPAAQAKAAAEACIgFAkQgDgCgKAAQgPAAgNAKQgMAKAAAUIAABNgAsgBUIAAhIQAAgSgCgLQgDgLgGgFQgGgGgMAAQgKAAgKAGQgKAGgHALQgGALAAAPIAABKIgjAAIAAjvIAiAAIgBB2QAGgOAOgJQAOgJASAAQAXAAANAKQAMAKAEARQAFARAAAbIAABIgAypBUIAAiVIAlAAIAACVgA0ABUIAAhuIhVAAIAABuIglAAIAAjvIAlAAIAABiIBVAAIAAhiIAkAAIAADvgAQFhkQgHgHAAgKQAAgJAHgGQAHgHAKAAQAKAAAHAHQAHAGAAAJQAAAKgHAHQgHAHgKAAQgKAAgHgHgAyohkQgHgHAAgKQAAgJAHgGQAHgHAKAAQAKAAAHAHQAHAGAAAJQAAAKgHAHQgHAHgKAAQgKAAgHgHg"
      );
    this.shape_3.setTransform(161.025, 84.575);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .lf(["#DD80DB", "#FFFFFF"], [0, 1], 159.7, 7.8, 159.7, -16.1)
      .s()
      .p(
        "AGuCdQgQgFgHgEIAIghQAWAPAZAAQAUAAANgKQAOgJAAgcIAAgbQgHANgPAIQgQAJgSAAQgUAAgQgKQgQgJgKgSQgJgSAAgYQAAgWAJgSQAJgSAQgJQARgKAWAAQANAAAMAEQALAFAIAHQAIAGADAHIAAgZIAiAAIAACUQAAAmgUAVQgTAUgqAAQgQAAgRgEgAGugbQgLAOAAAUQAAAWALAOQALANAWAAQASAAANgNQANgNAAgVIAAgCQAAgNgGgLQgGgLgKgGQgKgGgMAAQgVAAgMANgAjdBMQgRgJgKgSQgKgSAAgYQAAgWAJgSQAJgSAQgJQARgKAXAAQANAAALAEQALAFAIAHQAIAGADAHIAAgZIAiAAIAACVIghAAIgBgbQgFAMgPAJQgPAJgSAAQgUAAgSgKgAjSgbQgLAOAAAVQAAAVALAOQALAOAWAAQASAAANgNQANgNAAgVIAAgCQAAgNgGgMQgGgLgKgGQgKgGgMAAQgVAAgMANgAoDBPQgTgHgJgIIASgfQAHAGAOAHQAPAGANAAQARAAALgIQALgIAAgOQAAgMgGgIQgGgHgIgFIgYgOIgagNQgfgVAAgmQAAgfAUgRQAVgQAfAAQAiAAAXATIgRAeQgGgHgLgEQgMgFgNAAQgQAAgJAHQgJAIAAAOQAAAKAFAIQAGAIAJAGIAZAOIAWANQAIAFAHAHQAJAIAGAMQAGALAAAOQAAAWgKAPQgKAPgRAIQgSAIgWAAQgUAAgTgHgAE2BTIAAhHQAAgcgGgMQgFgNgSAAQgJAAgLAGQgKAGgGALQgHAMAAAOIAABLIgkAAIAAiVIAjAAIABAbQAGgOANgIQANgJASAAQAYAAAMAJQAMAKAFARQAEASAAAaIAABJgAB1BTIAAiVIAkAAIAACVgAAtBTIgfgxIgIgRIgTAVIAAAtIgiAAIAAjvIAiAAIgBCcIA4hCIAsAAIg5A+IA5BXgAldBTIAAh5IgaAAIAAgcIAaAAIAAg9IAkgIIAABFIAjAAIAAAcIgjAAIAAB5gAB2hlQgHgHAAgKQAAgJAHgHQAGgGAKAAQAKAAAHAGQAHAHAAAJQAAAKgHAHQgGAHgLAAQgKAAgGgHg"
      );
    this.shape_4.setTransform(183.325, 43.375);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f()
      .ls(
        ["#5DC8FF", "#A596EF", "#F692E6", "#F0C8FB"],
        [0, 0.369, 0.698, 1],
        -161.2,
        -18.6,
        161.3,
        -18.6
      )
      .ss(4, 1, 1)
      .p(
        "A44jNIAAEJQAAA4AlAoQADAEADADQAoAoA3ADQAEAAAEAAMAtMAAAQAEAAAFAAQA3gDAogoQADgDADgDQAlgpAAg4IAAkJ"
      );
    this.shape_5.setTransform(159.25, 98.325);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f()
      .ls(
        ["#5DC8FF", "#A596EF", "#F692E6", "#F0C8FB"],
        [0, 0.369, 0.698, 1],
        -161.2,
        0.8,
        161.3,
        0.8
      )
      .ss(4, 1, 1)
      .p(
        "A1QmEIgUAAIg0ABIgOAAQg8AAgrArQgBABgBABQgpArAAA6IAADmIAAGPAY5GEIAAmPIAAjmQAAg7gpgqQgBgBgBgBQgsgrg8AAIgNAAIg+AAMgqXgAB"
      );
    this.shape_6.setTransform(159.25, 38.85);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#05001E")
      .s()
      .p(
        "A1/JVQgZAAgVgEIAHAAMAtMAAAIAIAAQgWAEgZAAgAWmJRMgtMAAAIgHAAQhBgLgggrQgggrAAhLIAAjxIgJAAIAAmOIAJAAIAAjKQAAhRAmgrQAhgoBBgJIAOgCIAZAAIAbAAIAUAAIAUAAMAqYAAAIA9AAIANACQBBAJAiAoQAlArAABRIAADKIAKAAIAAGOIgKAAIAADxQAABLgfArQghArhAALIgIAAgA2YpTIA0AAgA2tJRIAAAAgAVcpTIAjAAIAaAAg"
      );
    this.shape_7.setTransform(159.25, 59.65);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.more_staking,
    new cjs.Rectangle(-2, -2, 322.5, 123),
    null
  );
  (lib.left_head_1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    // Camada_1
    this.instance = new lib.left_head();
    this.instance.setTransform(111.6, 0, 0.2278, 0.2278, 37.2068);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 268.2, 265.9);
  (lib.higher_apr = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    // Camada_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(["#DD80DB", "#FFFFFF"], [0, 1], -1.6, 15.5, 20.8, 15.5)
      .s()
      .p("AgMA3IAAhsIAZAAIAAAAIAAAcIAAA1IAAAbg");
    this.shape.setTransform(239.9152, 39.4439, 1.4272, 1.4272);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .lf(["#DD80DB", "#FFFFFF"], [0, 1], -11.6, 0.5, 10.8, 0.5)
      .s()
      .p(
        "AgXBrIAAg0IhZAAIAAAAIAaAAIAAgbIBYAAIAAAoIBFhEIhFhBIAAAoIhYAAIAAgcIA/AAIAAg0IAaAAIBuBpIhpBrg"
      );
    this.shape_1.setTransform(254.2232, 39.4439, 1.4272, 1.4272);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .lf(["#DD80DB", "#FFFFFF"], [0, 1], -98.7, 7.2, -98.7, -16.4)
      .s()
      .p(
        "ANPCfQgQgFgHgEIAIghQAVAOAaAAQAUABANgKQANgKABgbIAAgbQgHANgQAIQgPAIgTAAQgTAAgRgJQgQgKgJgSQgKgRAAgZQAAgVAJgSQAJgSARgJQARgKAWAAQANgBALAFQAMAFAIAGQAIAHACAHIABgaIAhAAIAACVQAAAlgTAVQgUAVgpAAQgRAAgQgEgANPgZQgMANAAAVQAAAWAMANQALAOAVAAQATAAANgNQAMgNAAgVIAAgCQAAgNgFgLQgGgLgLgGQgKgHgMAAQgVAAgLAOgADCBOQgRgKgKgSQgKgRAAgYQAAgWAJgSQAJgSAQgJQARgKAXAAQANgBALAFQALAFAIAGQAIAHADAHIAAgaIAiAAIAACWIghAAIgBgbQgFAMgPAJQgPAIgSAAQgUAAgSgJgADNgZQgLAOAAAUQAAAWALAOQALAOAWAAQASgBANgNQANgNAAgUIAAgDQAAgNgGgLQgGgLgKgGQgKgGgMgBQgVAAgMAOgAhKBUQgRgEgHgGIAMgcQATAOAaAAQAZAAAAgPQAAgHgFgDQgGgDgNgGIgNgEQgTgHgMgLQgLgLAAgRQAAgVAQgMQAQgLAcAAQANAAANADQAMACAHAFIgMAcQgEgEgKgDQgJgEgLABQgYAAAAAOQAAAHAGAFQAHADAOAGIAKADQAVAHAJALQAKAKAAAQQAAAXgRAMQgQALgZgBQgQAAgRgDgAlBBNQgSgKgIgSQgJgSAAgWQAAgWAKgSQAKgSASgKQARgJAXAAQAigBARAUQARATAAAiIgBASIhsAAQAEATAKAJQALAKATgBQAQAAAKgCQAKgDAIgEIALAZQgIAFgOAEQgOADgUAAQgbAAgSgKgAk/gCIBLAAQAAgUgJgIQgJgJgRAAQgjAAgFAlgAptBOQgSgLgKgSQgKgSAAgWQAAgVAKgSQAJgRASgLQASgKAYAAQAXAAASAKQASALAKARQAJASAAAVQAAAWgJASQgKASgSALQgSAKgXgBQgXABgSgKgApjgaQgLAPAAAUQAAAWAMAOQAMAOATAAQATAAALgOQALgOAAgWQAAgTgMgPQgMgOgTAAQgTgBgLAOgAt+g7IgdCQIgkAAIAyj3IBZCzIBXizIA0D3IgjAAIggiQIgNAhIg7BxgALWBVIAAhHQAAgcgGgNQgFgNgSABQgJAAgLAGQgKAGgGALQgHAMAAAOIAABLIgkAAIAAiWIAjAAIABAcQAGgOANgIQANgJASAAQAYAAAMAJQAMAKAFARQAEASAAAaIAABJgAIVBVIAAiWIAlAAIAACWgAHNBVIgegyIgJgRIgTAWIAAAtIgiAAIAAjwIAhAAIAACdIA5hDIArAAIg4A/IA5BXgABCBVIAAh5IgaAAIAAgdIAaAAIAAg9IAkgIIAABFIAjAAIAAAdIgjAAIAAB5gAnSBVIAAiWIAkAAIAAAeQAFgPAMgJQAMgJAPAAQAKAAAEACIgFAjQgDgCgKAAQgPAAgNAKQgMAKAAAUIAABOgAIWhkQgHgGAAgLQAAgIAHgHQAHgGAKAAQAKAAAHAGQAHAHAAAIQAAALgHAGQgHAIgKgBQgKABgHgIg"
      );
    this.shape_2.setTransform(162.925, 79.45);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .lf(["#DD80DB", "#FFFFFF"], [0, 1], 114.1, 7.3, 114.1, -16.3)
      .s()
      .p(
        "AnYCfQgQgFgGgEIAHghQAWAPAaAAQATAAANgKQAOgJABgcIAAgbQgIANgPAIQgQAJgSAAQgTAAgRgKQgQgJgJgSQgKgSAAgYQAAgWAJgSQAJgSARgJQAQgKAXAAQAMAAAMAEQALAFAJAHQAHAGADAHIAAgZIAiAAIAACUQAAAmgTAVQgUAUgpAAQgRAAgRgEgAnYgZQgLAOAAAUQAAAWALAOQAMANAVAAQATAAAMgNQANgNAAgVIAAgCQAAgNgGgLQgGgLgKgGQgKgGgMAAQgVAAgMANgAhiBNQgTgKgIgSQgJgSABgVQAAgXAKgSQAKgSARgKQASgJAWAAQAiAAARATQAQATAAAiIgBASIhqAAQADAUAKAJQALAJATAAQAQAAAKgDQAKgDAJgEIAKAZQgIAFgOAEQgOAEgUAAQgbAAgRgLgAhggCIBKAAQAAgUgJgIQgJgIgRAAQgjAAgEAkgAL9BVIgxhaIgbABIgJAAIAABZIgjAAIAAjvIA2AAQAqAAAbARQAaARABAmQgBAZgKARQgMASgWAJIA5BigAKogiIAYAAQAgAAAMgOQAMgOAAgTQAAgrg5AAIgXAAgAHYBVIAAjvIA1AAQAtAAAUATQAVATAAAhQAAAngXAUQgWAVgsAAIgNAAIAABYgAH9gkIAOAAQAdAAALgMQAMgNgBgSQABgTgMgMQgLgNgaAAIgRAAgAGZBVIgUgvIhuAAIgVAvIgpAAIB1j3IB2D3gAElAFIBRAAIgohbgAAvBVIAAiVIAkAAIAAAdQAEgPANgJQAMgJAPAAQAJAAAEACIgEAjQgDgCgKAAQgPAAgNAKQgMAKAAAVIAABNgAjMBVIAAhJQAAgSgCgLQgDgKgGgGQgHgFgLAAQgKAAgLAFQgJAGgHAMQgGALAAAOIAABLIgjAAIAAjvIAiAAIgBB1QAGgNAOgJQAOgJASAAQAXAAAMAJQANAKAEARQAFASAAAaIAABJgApVBVIAAiVIAlAAIAACVgAqtBVIAAhvIhUAAIAABvIglAAIAAjvIAlAAIAABiIBUAAIAAhiIAlAAIAADvgApUhjQgGgHAAgKQAAgJAGgHQAHgGAKAAQAKAAAHAGQAHAHAAAJQAAAKgHAHQgHAHgKAAQgKAAgHgHg"
      );
    this.shape_3.setTransform(144.95, 42.025);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f()
      .ls(
        ["#5DC8FF", "#A596EF", "#F692E6", "#F0C8FB"],
        [0, 0.369, 0.698, 1],
        -161.2,
        -18.6,
        161.3,
        -18.6
      )
      .ss(4, 1, 1)
      .p(
        "A44jNIAAEJQAAA4AlAoQADAEADADQAoAoA3ADQAEAAAEAAMAtMAAAQAEAAAFAAQA3gDAogoQADgDADgDQAlgpAAg4IAAkJ"
      );
    this.shape_4.setTransform(159.25, 98.325);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f()
      .ls(
        ["#5DC8FF", "#A596EF", "#F692E6", "#F0C8FB"],
        [0, 0.369, 0.698, 1],
        -161.2,
        0.8,
        161.3,
        0.8
      )
      .ss(4, 1, 1)
      .p(
        "A1QmEIgUAAIg0ABIgOAAQg8AAgrArQgBABgBABQgpArAAA6IAADmIAAGPAY5GEIAAmPIAAjmQAAg7gpgqQgBgBgBgBQgsgrg8AAIgNAAIg+AAMgqXgAB"
      );
    this.shape_5.setTransform(159.25, 38.85);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#05001E")
      .s()
      .p(
        "A1/JVQgZAAgVgEIAHAAMAtMAAAIAIAAQgWAEgZAAgAWmJRMgtMAAAIgHAAQhBgLgggrQgggrAAhLIAAjxIgJAAIAAmOIAJAAIAAjKQAAhRAmgrQAhgoBBgJIAOgCIAZAAIAbAAIAUAAIAUAAMAqYAAAIA9AAIANACQBBAJAiAoQAlArAABRIAADKIAKAAIAAGOIgKAAIAADxQAABLgfArQghArhAALIgIAAgA2YpTIA0AAgA2tJRIAAAAgAVcpTIAjAAIAaAAg"
      );
    this.shape_6.setTransform(159.25, 59.65);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.higher_apr,
    new cjs.Rectangle(-2, -2, 322.5, 123),
    null
  );
  (lib.earn_USDC = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    // Camada_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(["#DD80DB", "#FFFFFF"], [0, 1], -1.8, 15.3, 20.5, 15.3)
      .s()
      .p("AgMA3IAAhsIAZAAIAAAAIAAAcIAAA1IAAAbg");
    this.shape.setTransform(234.9652, 38.8439, 1.4272, 1.4272);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .lf(["#DD80DB", "#FFFFFF"], [0, 1], -11.8, 0.7, 10.5, 0.7)
      .s()
      .p(
        "AgXBrIAAg0IhZAAIAAAAIAaAAIAAgbIBYAAIAAAoIBFhEIhFhBIAAAoIhYAAIAAgcIA/AAIAAg0IAaAAIBuBpIhpBrg"
      );
    this.shape_1.setTransform(249.2732, 38.8439, 1.4272, 1.4272);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .lf(["#DD80DB", "#FFFFFF"], [0, 1], 184, 15.7, 184, -12.7)
      .s()
      .p(
        "Ah9BwQgRgJgLgTQgKgRAAgYQAAgYAJgRQAJgRARgKQARgKAWAAQANABAMAEQALAEAIAIQAIAGACAGIABgZIAiAAIAACVIgiAAIAAgaQgGAMgPAJQgOAJgTgBQgUABgRgKgAhyAIQgMAOAAAWQAAAVAMAOQALANAVAAQATABANgNQAMgNAAgWIAAgBQAAgOgFgMQgGgLgLgGQgKgGgMAAQgVAAgLANgAEPB2IAAhHQAAgcgGgMQgFgMgSgBQgJABgLAFQgKAFgGAMQgHALAAAQIAABKIgkAAIAAiVIAjAAIABAcQAGgOANgJQANgJASAAQAYAAAMAKQAMAKAFAQQAEASAAAbIAABIgAAtB2IAAiVIAkAAIAAAeQAFgPAMgKQAMgJAPAAQAKAAAEACIgFAjQgDgCgKAAQgPAAgNAKQgMAKAAAWIAABMgAkxB2IAAjvIBpAAIAAAgIhEAAIAABCIA3AAIAAAgIg3AAIAABNIBPAAIAAAgg"
      );
    this.shape_2.setTransform(92.125, 38.55);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .lf(["#DD80DB", "#FFFFFF"], [0, 1], -118.2, 12.3, -118.2, -16.1)
      .s()
      .p(
        "ANSCfQgQgFgHgEIAIghQAWAPAZAAQAUgBANgJQANgKABgbIAAgbQgHANgPAIQgQAJgTAAQgTAAgRgKQgQgJgJgSQgKgTAAgYQABgVAIgSQAJgSARgJQARgLAWAAQANAAALAFQAMAFAIAGQAIAHACAHIABgZIAhAAIAACTQAAAmgTAVQgUAVgpAAQgQAAgRgEgANSgZQgMANAAAVQAAAWAMANQALAOAVAAQATAAANgNQAMgNAAgVIAAgCQAAgNgFgLQgGgLgKgHQgLgFgMAAQgUAAgMANgAFqBOQgRgJgLgSQgJgSgBgYQABgiATgWQAVgVAhgBQAUAAAPAKQAQAJAFANIgCh2IAjAAIAADwIghAAIgBgbQgFAMgQAJQgOAJgSAAQgVAAgRgKgAF1gZQgMANAAAVQAAAWAMANQALAOAVAAQATAAANgNQAMgNAAgVIAAgCQAAgNgFgLQgGgLgKgHQgLgFgMAAQgUAAgMANgAChBOQgRgJgLgSQgKgSAAgYQAAgXAJgRQAJgSARgJQAQgLAXAAQANAAAMAFQALAFAIAGQAHAHADAHIAAgZIAjAAIAACVIgiAAIgBgbQgFAMgPAJQgPAJgSAAQgUAAgRgKgACrgZQgLAOAAAUQAAAWALAOQAMAOAVAAQATAAAMgOQANgNAAgVIAAgCQAAgMgGgMQgFgLgLgGQgKgGgMAAQgVAAgMANgAlEBNQgSgLgJgRQgIgSAAgWQAAgWAKgSQAKgSARgKQASgKAXAAQAiAAARAUQAQATAAAiIgBASIhrAAQAEAUAKAJQALAIASABQAQAAAKgEQALgCAIgEIALAZQgJAFgNAEQgPADgUABQgaAAgSgLgAlCgCIBLAAQgBgUgIgIQgKgJgQABQgjAAgFAkgApwBOQgTgLgJgSQgKgSAAgWQAAgVAKgRQAJgTASgKQASgLAXAAQAYAAASALQASAKAKATQAJARAAAVQAAAWgJASQgLASgRALQgSAKgYAAQgWAAgSgKgApmgaQgLAPAAAUQAAAWAMAOQAMAOASAAQAUAAALgOQAKgOABgWQgBgTgLgPQgMgOgTAAQgTAAgLANgAuBg8IgeCRIgkAAIAzj3IBZCzIBWizIA1D3IgkAAIgfiRIgNAiIg7BxgALZBVIAAhHQABgcgGgNQgFgMgSAAQgJgBgLAHQgKAFgGAMQgIAMAAAOIAABLIgjAAIAAiVIAjAAIAAAbQAHgOAMgJQAOgIASgBQAXAAANAKQAMAKAFARQADARAAAbIAABJgAIZBVIAAiVIAlAAIAACVgAAOBVIAAiVIAjAAIAAAdQAFgPAMgKQAMgIAPgBQAKABAEACIgEAjQgEgCgKAAQgPAAgNAKQgMAKAAAUIAABOgAhTBVIAAh5IgbAAIAAgcIAbAAIAAg+IAkgIIAABGIAiAAIAAAcIgiAAIAAB5gAnVBVIAAiVIAkAAIAAAdQAEgPANgKQAMgIAPgBQAKABADACIgEAjQgDgCgKAAQgPAAgNAKQgMAKAAAUIAABOgAIahkQgHgHAAgKQAAgJAHgGQAHgHAKABQAKgBAHAHQAGAGAAAJQAAAKgGAHQgHAIgKAAQgKAAgHgIg"
      );
    this.shape_3.setTransform(154.25, 82.4);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .lf(["#DD80DB", "#FFFFFF"], [0, 1], 53.7, 15.9, 53.7, -12.5)
      .s()
      .p(
        "AifB1QgUgHgIgJIARgeQAHAGAPAGQAOAHAOAAQARAAALgIQALgIAAgPQAAgLgGgIQgGgIgIgFIgZgOIgZgNQgggVAAglQAAgfAVgRQAUgRAgAAQAhAAAYAUIgSAdQgGgGgLgFQgLgEgNAAQgQgBgKAIQgJAIAAAOQAAAKAGAIQAGAIAJAGIAYAOIAXANQAIAEAGAHQAKAIAGALQAGANAAAOQAAAWgKAOQgKAQgSAIQgRAIgWgBQgUABgTgHgAl3BgQgUgbAAgzIAAiJIAkAAIAACKQAAAmAMARQALAQAaAAQAbAAALgQQALgQAAgnIAAiKIAlAAIAACJQAAAzgVAbQgWAbgrAAQgtAAgUgbgAEIBqQgbgQgOgcQgPgdAAghQAAgjAQgcQAPgcAdgQQAcgQAjAAQAQABAOADQAOADAJAEQAJAFADADIgQAhQgUgSggAAQgWAAgTALQgSALgKAVQgLAVAAAaQAAAYAJAVQAKAUASALQASANAZAAQAcAAAbgRIALAfQgHAHgTAGQgTAFgUAAQglAAgcgQgAgEB4IAAjvIA5AAQBIABAdAhQAdAjAAAvQAAAhgMAbQgNAcgcASQgdARguAAgAAfBYIAbAAQAuAAAUgZQAUgaAAgmQAAgmgUgYQgVgYgtAAIgbAAg"
      );
    this.shape_4.setTransform(179.475, 38.35);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f()
      .ls(
        ["#5DC8FF", "#A596EF", "#F692E6", "#F0C8FB"],
        [0, 0.369, 0.698, 1],
        -161.2,
        -18.6,
        161.3,
        -18.6
      )
      .ss(4, 1, 1)
      .p(
        "A44jNIAAEJQAAA4AlAoQADAEADADQAoAoA3ADQAEAAAEAAMAtMAAAQAEAAAFAAQA3gDAogoQADgDADgDQAlgpAAg4IAAkJ"
      );
    this.shape_5.setTransform(159.25, 98.325);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f()
      .ls(
        ["#5DC8FF", "#A596EF", "#F692E6", "#F0C8FB"],
        [0, 0.369, 0.698, 1],
        -161.2,
        0.8,
        161.3,
        0.8
      )
      .ss(4, 1, 1)
      .p(
        "A1QmEIgUAAIg0ABIgOAAQg8AAgrArQgBABgBABQgpArAAA6IAADmIAAGPAY5GEIAAmPIAAjmQAAg7gpgqQgBgBgBgBQgsgrg8AAIgNAAIg+AAMgqXgAB"
      );
    this.shape_6.setTransform(159.25, 38.85);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#05001E")
      .s()
      .p(
        "A1/JVQgZAAgVgEIAHAAMAtMAAAIAIAAQgWAEgZAAgAWmJRMgtMAAAIgHAAQhBgLgggrQgggrAAhLIAAjxIgJAAIAAmOIAJAAIAAjKQAAhRAmgrQAhgoBBgJIAOgCIA0AAIAUAAIAUAAMAqYAAAIA9AAIANACQBBAJAiAoQAlArAABRIAADKIAKAAIAAGOIgKAAIAADxQAABLgfArQghArhAALIgIAAgA2tJRIAAAAgAVcpTIAjAAIAaAAgA1/pTIAbAAIg0AAIAZAAg"
      );
    this.shape_7.setTransform(159.25, 59.65);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.earn_USDC,
    new cjs.Rectangle(-2, -2, 322.5, 123),
    null
  );
  (lib.brilho_olhos2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    // Camada_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(255,0,255,0.498)")
      .s()
      .p(
        "AidCoQgKAAgGgJQgFgHADgKQACgIAIgEQAGgDAGABQAGABAFAEQAFAEABAHQACAGgDAGQgCAGgGAEQgFADgFAAIgCgBgACXiBQgHgCgEgGQgDgGABgHQABgIAGgFQAGgFAHAAQAIAAAFAFQAFAGACAHQAAAGgDAHQgDAHgHABIgHACIgHgCg"
      );
    this.shape.setTransform(33.0969, -9.3389);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("rgba(255,0,255,0.6)")
      .s()
      .p(
        "AidCoQgKAAgGgJQgFgHADgKQACgIAIgEQAGgDAGABQAGABAFAEQAFAEABAHQACAGgDAGQgCAGgGAEQgFADgFAAIgCgBgACXiBQgHgCgEgGQgDgGABgHQABgIAGgFQAGgFAHAAQAIAAAFAFQAFAGACAHQAAAGgDAHQgDAHgHABIgHACIgHgCg"
      );
    this.shape_1.setTransform(33.0969, -9.3389);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("rgba(255,0,255,0.698)")
      .s()
      .p(
        "AieCrQgMAAgGgLQgGgIADgLQADgKAJgEQAHgDAHABQAHABAGAEQAFAFABAIQACAIgDAGQgCAHgHAEQgGADgGAAIgCAAgACWh+QgIgDgEgHQgEgHACgJQABgIAGgFQAGgFAJAAQAIAAAGAFQAHAGABAHQACAIgFAIQgEAHgIADIgHABIgIgBg"
      );
    this.shape_2.setTransform(33.0528, -9.3222);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("rgba(255,0,255,0.898)")
      .s()
      .p(
        "AifCvQgNAAgIgMQgGgKADgLQADgLALgFQAHgEAIABQAJABAGAFQAGAGACAIQABAJgDAHQgDAIgHAEQgHAEgHAAIgCAAgACTh5QgJgDgFgJQgFgIACgKQABgKAIgHQAIgGAKAAQAKAAAIAGQAHAHACAKQACAJgFAJQgGAJgJADQgEACgFAAQgFAAgFgCg"
      );
    this.shape_3.setTransform(33.1536, -9.4225);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FF00FF")
      .s()
      .p(
        "AieC3QgRgBgKgQQgIgMAEgPQAEgPANgGQAKgFALABQALACAIAHQAHAHADALQACALgEAKQgEAJgKAGQgJAGgJAAIgCAAgACShzQgMgFgGgKQgGgKACgNQACgNAJgHQAKgJANAAQAMAAAKAJQAJAIACAMQADALgHAMQgGALgMAEQgFACgGAAQgGAAgGgCg"
      );
    this.shape_4.setTransform(33.0431, -9.3731);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f()
      .s("#FF00FF")
      .ss(2, 1, 1)
      .p("Am/GsIAWgTISswQAsCLTIAXgYIUD2N");
    this.shape_5.setTransform(88.125, -62.85);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FF00FF")
      .s()
      .p(
        "AieC3QgRgBgKgQQgIgMAEgPQAEgPANgGQAKgFALABQAIABAGAFIAFADQAHAHADALQACALgEAKQgEAJgKAGQgJAGgJAAIgCAAgAifCQIAWgYgACShzQgMgFgGgKQgGgKACgNQACgNAJgHQAKgJANAAQAMAAAKAJIAEAEQAGAHABAJQADALgHAMQgGALgMAEQgFACgGAAQgGAAgGgCgACiiWIAWgTg"
      );
    this.shape_6.setTransform(27.0931, -4.9731);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("rgba(255,0,255,0.498)")
      .s()
      .p(
        "AgHASQgFgCgDgFIgDgJQgBgEACgGQAFgJALAAIABgBQANAAAFAMQAEALgJAJQgGAFgHAAQgDAAgEgBg"
      );
    this.shape_7.setTransform(159.5723, -141.4074);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f()
      .s("#FFFFFF")
      .ss(2, 1, 1)
      .p(
        "AFgpmQACgDADgEQAAgBACgBAFKpUQADACACAAQAIgDADgHQACgFADgDAFppxQADgHAFgFQAEgFgEABACjmIQAEgGAFgDQAFgEAFgHQACgBABgCQACgCACgDQAFgIAFgHIALgMQABgBABgBQABgCABgCIABAAQAHgMAJgKQAFgEAEgFQAHgIAFgHQAEgIAEgHQAAgBABgBQACgIACgEQAHgOAOgLQAKgIAGgIQABgBABgBQAFgFAGgHQADgEACgBQACgCABgBQADgDADgBIABgBIADgCAJJoNQABgBABgCQAAgBABgBQAFgFAGgKQAAgBABgBQAFgFAGgFQACgBACgBQAHgCAJgFQABAAABgBQANgJAJgKQAGgGAHgFQACgCABgBQAEgFAFgDQAFgCAEgCQADgCADgCQACgBAEgDQAHgFAGgHQABgBACAAQAGABAEgDAAyguQAEgDAFgCQAGgBAEgFQAHgIAGgGQAEgDACgGIABAAQAAgBABgBQAGgFAEgFQAHgIALgHQABgBACgCQABgBACgBQABgBAAAAIABAAQAGgEAHgGQAKgIAOgIQAJgGAIgIQAHgGAIgHQACgBABgBQACgBACgBQABgBACgCQAMgPAMgQQAHgKAHgLQAFgIAHgEQABgBABgBQAKgPASgIQALgFAHgGQABgBACgBQADgBADgCQAOgIAKgGQADgCACgCQALgJAJgFQASgLAJgOQABgBABgBQAOgPALgJQAKgIAKgIQAEgDAGgGQAFgGAFgGQAIgKAIgGQAHgEAEgLIABAAQADgJAIgFQAGgEAHgGQAEgDAFgEQABgBACgBQAHgGAFgEIACgCQAIgGAIgEQANgGAJgMQACgBABgBQAJgGAEgJQABgCAAgCIABAAQAAgBABgBQABgBABAAAmmElIAPgSQACgBACgBQAGgEAEgJQABgCACgCQACgEAEgFQAKgPALgNQADgDAEgEQACgCACgBQAEgDADgDQAFgFAEgDQAHgGAGgEQAGgEAGgKQAGgJAEgLIAAAAQABgCAAgBQAEgJAFgHQALgOALgNQACgCABgBQAOgPAPgMQACgBACgCQAJgIAKgNQABgCABgBQACgCABgBQAIgHAFgGQABgBACgCQAOgMALgNQAIgIAIgIQAHgIAFgGQABgCABgCQACgHAGgGQAGgIAFgGQAEgGAEgHIAAgBQAAAAAAAAQAEgIAEgGQALgPAMgOQABgCACgBQACgBABgCQAFgEAEgFQACgBABgCQAFgEAFgDIAAAAQAIgFAFgEQABgCACgBQAGgEAHgIQADgCACgDQAEgEACgCQAFgFAHgGQAJgLAGgOQABgCABgDQAEgIAFgIQABgCABgCQACgEACgGQAFgOAHgMQAEgHAFgEQABAAABgCQADgHAHgDQABgBABgBQALgLAKgLQACgBACgCQAHgFAIgGQAHgGAFgGQACgCABgBQADgCACgBQAMgKAJgNQABgCABgCIABgBQAAAAAAgBAhcBQIADgCQABgBABgBQAFgDADgDQAdgSASgZQABgCABgCQABgCACgCQAHgNAOgJQAGgFAGgDQAFgCAFgDQAKgGAJgJQAEgDACgEQACgCABgBQADgDADgCArWKCQAHgGAGgKQADgEACgFQABgBABgCQADgHAIgGQAFgDAHgHQABgCABgCQADgGAEgIQACgEAFgDQACgBABgCQAFgGAJgEQAHgEAGgDQABgBACgBQABgCACgBQACgDADgCQAJgLAIgMQABgCABgBQAFgJAFgFQACgDACgCQADgFAEgFQAJgQANgJQAEgDAFgDQAGgFAFgFQACgDACgDQABgDADgCQABgBACgCQAFgFAGgIQAFgFADgFQACgDACgDQABgDABgDQAEgIAFgIQAGgKAIgHQACgDADgCQAHgHAFgIQABgBABgBQAHgGAJgIQAIgGAGgGQAFgFAEgFQACgDACgCAmTFcQABAFABgFQABgDAEgCQAEgCACgCQAAgBAAAAQAAgBABgBQAFgGAJgDQAFgCACgDQABgCABgBQAGgEAGgDQAEgCAEgBQADgCADgCQAJgEACgHQACgEACgEQADgFAEgEQADgDAEAAQAAAAABAAQAAgBABAAIAAgBQAAAAABAAQAEgDAHAAQABAAABgBQAGgGAGgIQAHgKAKgGQAKgHAHgLQABgBACAAQAIgDAFgGQABgBACAAQABgBABgBQACgEADgDQABAAAAgBQAGgDAFgHQAGgHAEgFQAGgGAHgEQAIgHAIgHQACgCABgBQACgCABgCQAHgGAFgDQACgBACgBQAEgBAEgDQAHgDAGgEQAEgCAEgEQACgCADgFQAGgKAHgKQADgEAEgEAjeDDQgDAFACAAACbl/IAGgH"
      );
    this.shape_8.setTransform(80.075, -51.5091);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f()
      .s("#FF00FF")
      .ss(4, 1, 1)
      .p(
        "ACqmgIB5iMIAPgSIAAAAIAAgBIACgBIAHgJQABgBAAAAIABgBIBXhnAIgnmIAEgCIBghWICDh0AicghIA7hEAsGKzIAVgYIBHhTIAcghIA2g/IAtg1IBKhXIANgPIACgCAiGB0IA6gzIAxgsIAZgVIAIgIIAAAAIAmgiAliE3IABgBIBXhNIB+hwIABgBQAAAAABgBQABAAAAgBAnDE5IAQgTIAtg1IAtg0IBDhPIB6iOAnHGRIAWgUIAjgfIAdgaIAOgMAG2mHIAxgrAhhhlIBShgIBih0IAXgaIABgCIAAAAQACgCACgDAB0lhIACgBIAkgrAAsgqIAlghAClmZIAEgGABRhLIBnhbIBUhLICqiWAHom0IA4gx"
      );
    this.shape_9.setTransform(84.525, -55.3);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FF00FF")
      .s()
      .p(
        "AieC3QgRgBgKgQQgIgMAEgPQAEgPANgGQAKgFALABQAJACAHAFQgGAKgHAGQAHgGAGgKIADACIABABIgUAYIAUgYQAHAHACAKQACALgEAKQgEAJgKAGQgJAGgJAAIgCAAgAiHB5IAAAAgACShzQgMgFgGgKQgGgKACgNQACgNAJgHQAKgJANAAQAMAAAKAJIAHAIIACAEIACAIQADALgHAMQgGALgMAEQgFACgGAAQgGAAgGgCgACmiNIAXgUgACwicQABgDAEgCQAEgCACgCQgCACgEACQgEACgBADIgBACIgBgCIABACIABgCg"
      );
    this.shape_10.setTransform(22.2931, -1.0231);
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f()
      .s("#FFFFFF")
      .ss(2, 1, 1)
      .p(
        "AEfoUQAOgNAPgUQABgBABgBQAGgFAEgHQABgBAAgBIACgCQACgEADgEQADgEADgGQADgIAJgDQACgBAAgBQACgCABgBQAEgCAEgBQABgBABgBQAJgIAKgIQAAgBABgBQAEgCAAgEQAAgBAAgBQAAgGADgDQAHgJAIgKIAAgCQADgEAEgDQAIgIAIgGAr3K8QAFgGADgGQAAgCAAgCQAAgBAAgCQAAgCABgBQABAAABgCQABgFADgDQAAAAABgBQAEgEADgFQABgDACgCQAHgFAHgFQABgBABgBQADgBACgDQAHgGAFgGQADgEACgFQAAgBABgBQAAgCABgBQABgIAGgEQABgBACgBQACgBACAAQABgBABAAQAAgBABAAQAMgIANgNQABgCACgBQAIgNAGgMIAAAAIAGgHQACgDADgEQABgBABgCQADgEAFgEQABgBABgBQADgCACgDQAHgHAHgFQAJgGAEgEQAHgIAFgGQACgBADgDQACgCABgCQAIgRAPgPQAEgEAIgGQAFgEADgCQAIgHAFgMQABgEACgEQAJgQAJgJQACgCABgBQACgHAIgFQABAAABgBQAIgJAIgCQABAAABgBQAKgLAEgSIAAAAQAAgDABgDQABgBAAgCQADgJAEgJQABgBABgBQAHgGAIgKQADgDACgCQACgCACgDQADgFAHgCQACgBADgCQAFgCAHgFIABgBQAAAAAAgBQAIgGADgGQABgBABgCQADgFACgIQAAgCABgCQAIgPAHgSQADgIAHgDQAEgCAEgBQACgBACgBQAFgFAHgEQAFgDAGgDQAFgDAEgDQABgBABgBQAEgDACgDQAFgHAHgGQABgBABgCQABgDAEgFQAAAAABgBIAAAAQAAgCABgBQACgGAEgHQABgEACgEQABgEACgEQAHgMAMgHQACgBACgBQABAAABgBQAJgHAKgGQAHgFAHgEQAGgEAEgHQACgFABgFQAAgBAAAAIAAgBIAAAAQACgEACgDQACgEACgDQACgDACgCQABgBACgBQAHgCAFgJQABgBABgBQAKgKALgOQAKgPAIgMQAFgIAFgHQAGgHAFgLQABgBABgBQAGgGAGgEQABgBABgBQAEgEAGgCQADAAACgBQAAAAABAAQAHgDAGgEQACgBACgBQAHgCADgGQAEgGADgDQAGgIACgGQABgDABgDQAAgEABgEQABgEACgEQACgDABgEQADgDABgCQACgEADgDQAGgGAFgFQANgNAGgKQAIgNALgKQAGgGAEgIQABgFACgDQAFgPANgIQAHgFAGgEQALgJALgKQACgBACgBQACgCABgBQAHgEAFgDQACgBABgEQACgHAFgEQABgBABgCQAAgBABgBQADgDACgEQAEgGABgHQAAgBAAgBQAFgLAFgGQAHgGAFgGQABgBACgBQAHgDAEgFQACgCAFgDQACAAABgBQABgBACgBQAFgEAGgEQAHgFAFgIQAFgHACgFQAAgBABgBQAHgGAEgIQACgFACgGQABgBABgBQAGgIAFgEQAHgFAFgEIAAgBAIlntQAFgHAIgHQAIgJAHgFQABgBABgBQAFgEAEgDQAEgDAGgDQABAAAAgBQABAAACgBQAIgEAKgEQAEgBADgDQABgBABgCQACgDACgDQAEgGAFgEQAFgEAHgIQAIgIAHgFQACgCADgDQABgBACgBQAGgGAGgEQAGgFAGgGQACgCABgCQAAgCACgCQADgDABgDQAAgBAAgBQABgEADgDQAEgFAKgFQAEgBADgCIAKgKQACgBAAgCQABgBABgBQADgCACgDQABgBABgBQABgBADABAi8CkQAGgIAFgLQADgGAFgIQAEgFAIgEQABgBABAAQAKgDAHgDQACgBACgBQACAAACgBQAHgCAFgDQADgCADgCQAJgEAGgKQAAgBABAAQAJgGAGgLQABgBAAgBQABgBAAgBQADgIAFgGQAFgIADgIQABgCABgBQAMgPANgLQAIgFAIgEQAHgEAHgEQAJgGAIgEQAKgFAHgIQABgBABgBQAIgEAEgFQAGgGAFgHQABgCACgBQAFgGAFgEQACgCABgCQAKgNAPgPQABgBACgCQAEgFAFgEQACgCABgBQAJgEAGgFQAEgDAEAAQAJgCAIgIQABgBADgBQAAgBACAAQAHgFAFgEQAFgGAEgFQACgCABgBQAIgIADgHQAAgBABgBQAKgQARgHQAFgDAFgCQACgCADAAIABgBQAHgDAGgEQABgCACgBQAGgDAHgIQAFgHAHgJQADgDADgEQALgNALgGQABgBACgBQAFgGAHgFQABgBAAgCQACgDACgCQACgBABgCQAKgIAKgNQAAgCACgBQABgFADgFQADgGAIgEQADgBADgCQACAAACgBQAHgCAIgCQABAAABAAQADgBABgBQACgBABgBQADgCADgCQAMgJAJgIQACgCACgBQAGgFAKgGQACgBABgCQAGgGAEgJQACgDACgDQACgDACgDQACgDABgDQAFgIAKgFQABAAABgBQADgHAKgCQADgBACgCQAAgBADgBIAAAAQAEgCAEgBQAPgFAIgOQACgCAAgCQAFgGAEgFAmxF+IAEgEQABgCABgEQAAAAAAgBQAAAAAAgCQACgJAFgEQACgBACgBQABAAABAAQAFgBAEgBQAEgCAFgCQABAAABgBQAHgDAGgFQABgBABgCQABgCABgCQAJgPALgOQADgFAHgFQAEgDAEgBQACAAACgBQAHgDAIgDIABAAQAAgBABAAQAFgCACgDQABgBACgBQADgBAGgDQAEgDAFgCQABgBABgBQAJgKAFgMQACgEABgFQABgBAAgBQADgGAGgGQAFgFAIgHQABgBACgBQAOgGAPgJQACgBACgBQABgBABgBQABgCACgCIANgLAjBCpQABAAAAgBQABgBACgBQAAAAAAgB"
      );
    this.shape_11.setTransform(76.65, -49.35);
    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f()
      .s("#FF00FF")
      .ss(4, 1, 1)
      .p(
        "AD7n6IABAAIAqgxAjPAeIB4iLIAug2ICJiiIAegjIA2g+IAqgyIAdghAEootIAcgiIA0g7ADHi6IApglIBzhmIBHg/IAtgoIAqglIAAgBQABgBAAAAIAxgrIBwhkIAZgXALGqCIAPgNIBOhFAF/qUIAtg0AnQGUIAEgDIAfgcIARgPIA5gyAnfGiIALgKAqXI0IAPgTICyjPIA+hIAjlDEQABgBAAAAIAEgEQABgBAAAAIA6g0IAzgtIDqjQIAVgUIA5gyAkjCBIA5hDIAbggAmXEIIANgPIBLhXIAcghAliEzIAtgoIA6g0IAJgIAsiLVIAQgSIAKgMIAYgcIAWgaIATgVIAqgx"
      );
    this.shape_12.setTransform(80.15, -51.9);
    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#FF00FF")
      .s()
      .p(
        "AieC3QgRgBgKgQQgIgMAEgPQAEgPANgGQAKgFALABQAJABAHAFIgBABQgDADgBAFIgCACQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABIgQASIAQgSIAAACIAAACIAAACQgDAGgFAGQAFgGADgGIAAgCIAAgCIAAgCIAKgNIABABQAHAHADALQACALgEAKQgEAJgKAGQgJAGgJAAIgCAAgACShzQgMgFgGgKQgGgKACgNQACgNAJgHQAKgJANAAQAMAAAKAJIgCAGIAEgEQAIAIABAKQADALgHAMQgGALgMAEQgFACgGAAQgGAAgGgCgACuijIgLAKIALgKIAEgEg"
      );
    this.shape_13.setTransform(15.8931, 5.3269);
    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("rgba(255,0,255,0.498)")
      .s()
      .p(
        "AihCXIACgDQABgEADgDIABgBIACACIgKANQAAgBAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAgAChiZIACACIgEADIACgFg"
      );
    this.shape_14.setTransform(17.775, 3.35);
    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f()
      .s("#FFFFFF")
      .ss(2, 1, 1)
      .p(
        "AsIK+QAGgIAEgMQABgBABgBQAGgEADgHQABgCAAgBQABgBABgBQAGgEAIgGQAKgHAHgJQABgCABgBQAAAAABAAIADgEQACgDABgDQACgEADgCQABgBAAgBQACgEACgEQABgCACgCQAEgGAIgEQADgCACgBQAGgEAHgEQAEgDADgDQANgMAIgQQABgCACgDQAEgHAFgGQABgBABgCQAAgBABgBQALgNAJgKQADgCACgDQACgBACgBQAPgJAKgJQACgCACgBQAIgEAFgMQABgCABgDQAFgGAEgGQABgDACgCQAFgIADgFQABgCABgBQAFgKAGgKQAEgFADgFQAEgFAEgEQACgCACgBQAAAAABAAQANgHAJgLQAEgGADgHQABgBABgCQAAgCABgCQABgDABgCQAFgOALgOQADgFAHgEQADgBADgDQAEgDAFgCQAAAAABAAQABgBACAAQABgBABgBQAFgIAHgKQAFgHADgJQABgEACgDQABgBABgCQAGgRANgEQAGgCAFgEQACgBADgBQACgBADAAQABAAABgBQAFgIADgGQAAgCABgBQADgHAEgHQAFgGACgIQAAgBABgBQAEgJAHgEQACgBACgBQABAAABgBQAFgCAHgDQACgBACgBQABgBABgBQAIgLAJgNQACgBABgCQAIgIAIgLQACgCABgCQAEgFACgEQAIgPAJgNQAAgBABgBQAJgMANgJQACgCABgBQAFgGAHgFQANgLAJgLQAKgPALgKQAFgEAEgHQACgDADgEQABgBACgDQAEgGAGgKQAHgLALgLQACgBACgBQAHgEAEgHQAAgBABgBQAIgFAFgJQAEgGAFgJQAJgOAKgKQAMgKAJgIQACgBACgBQABgBABAAQAEgCAGgDQAHgEAEgLQAAgBAAgBQAIgMAGgGQACgEADgEQABgCABgCQABgBABAAIAAAAIADgDQAAgBAAgBQAAgBAAgBQAEgLAGgGQALgMAMgIQABgBABgBQACgCACgBQAJgIAHgKQACgCABgCQADgFADgEQAEgGAEgGQABgCACgDQAAgCACgCQAEgHAIgHQAGgGAGgEQADgCAEgCQAAAAABgBQAMgGAJgMQAIgLANgQQACgDABgDQABgBABgBQAHgIAGgKQADgEACgEQAHgOANgHQAAAAABAAQABgBABgBQAJgMARgFQACAAACgCQAGgEADgKQAAgBABgBQAGgHADgJQABgBABgBQAJgMAFgKQABgCABgCIAAgBQAFgPANgJQABgBABgBQAEgDAEgDQADgDAEgDQAGgFAFgGQABgBAAgDQABgBABAAQAEgBABgGQAAgBAAgBQAAAAABgBIAAAAQABgIAFgGQAJgMAKgJQACgCABgBQAJgIAFgIQABgCAAgCQABgBAAgBQADgLAHgKQACgCABgEAnCGNQABgEAAAAQABgBABgCQAAgBABAAIAAgBQAEgIAEgFQAGgIAHgEQACgBACgBQABAAABgBQAFgGAIgBIAAAAQAAAAABAAQABAAABgBQALgIAHgKQADgEACgFQAAgBABAAQADgBABgEQABgCACgCQADgEAGgCQADAAACgCQAFgDADgDQADgBADgCQAAgBABAAQAAgBABAAQADgCADgCQADgCADgCQAHgGAGgIQAEgHAFgHQABgBABgCQACgBABgCQALgNALgGQAGgEAHgEQAEgCAEgCQAEgDAEgCQACgBACgBQABAAABgBQAKgFAKgLQAGgGAIgGQACgBABgBQAMgKAMgOQADgDAEgEQADgCADgDQADgCACgCQAGgFAGgHQAFgGAFgGQACgCACgCQAKgMAKgLQAEgFAFgGQABgBACAAQABgBABgBQAIgGAFgGQACgCAFgDQABAAABgBQAFgDAGgCQADgBADgBQABAAABgBQANgJANgHQAGgDADgDQAFgHADgEQAFgIAEgKQADgFACgHQADgHAFgFQABgDADgFQADgGAEgDQABAAABgBQAFgDAIAAQACAAACgBQAHgFAFgEQAJgHAKgIQADgDAEgCQAPgIAJgPQAGgIAJgKQACgDACgDQAEgFAFgFQACgBACgCQAHgEAFgEQACgBABgBQAGgDAIgGQALgKAQgHQABgBAAAAIABAAQABgBACAAQADgCADgCQAQgNAOgSQAGgIAGgIQACgDAEgEQAKgIAIgHQABgBACgCQALgHALgGQAEgDAFgCQABgBABAAQAOgGAJgLQABgCACgBQACgBABgCQAMgOAKgJQAGgFAEgHQABgBAAAAQAEgHAFgEQAKgIAHgIQACgCACgBQADgCAFgFQACgCACgBQAFgEAFgDIABAAQABgBAAAAQAJgFAHgIQAHgHAGgFQAJgHAHgFQABgCABgCQABgCABgBQAGgNAJgIQALgLAOgNQAHgHAEgGQABgBABgBQAIgEAJgGQAGgEAIgBQACAAACAAQABAAABgBQAUgNASgMQACgBABgBQAKgMAGgPQAAgBAAAAQAAgCABgBQAAgBABgBQAEgCABgIQAAgBABgBQAGgFADgHQABgBABgBQAGgEAGgGQAEgFAIgEQAHgDAHgDQAFgBAEgCQAEgCAEgCQACgCACgBQAMgHAKgKQACgCADgDQABgBACgCQAJgKAJgKQACgDADgDQACgCACgDQAHgIAKgGQABAAABgBQAJgFAGgJIAEgD"
      );
    this.shape_15.setTransform(78.225, -50.225);
    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f()
      .s("#FF00FF")
      .ss(4, 1, 1)
      .p(
        "AEJoJIAcghIAagfAF+ldIAygtIBUhKIA/g5IBBg6IBCg7IAVgSIARgPALwqnIAzgtAFApJIBsh/ArlKOIAignICii+IATgWIAhgmIArgzIASgVIAvg3IARgTIArgzIAYgcIATgWIDrkSIApgwIAFgFAmvF4IAUgTIApgkIACgCIAZgWIA5gzIB3hqIBEg8IA8g2IDBisIABgBIAogjIA8g3IBKhBIA0guAnfGiIAHgGIAMgLIAcgZAAAjUIAogvIATgWIAxg5IA+hJIAZgcIBGhSAsiLVIAageIAggl"
      );
    this.shape_16.setTransform(80.75, -52.5);
    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#FF00FF")
      .s()
      .p(
        "AieC3QgRgBgKgQQgIgMAEgPQAEgPANgGQAKgFALABQAHABAHAEQgEAIgGAEIgBACQgEAMgHAIIAagfIABABQAHAHADALQACALgEAKQgEAJgKAGQgJAGgJAAIgCAAgACShzQgMgFgGgKQgGgKACgNQACgNAJgHQAKgJANAAQAMAAAJAIQgFAGgEAIIAAAAIgHAHIAHgHIgBACIgBACIgCAEIACgEIABgCIABgCIAMgLQAIAIABAKQADALgHAMQgGALgMAEQgFACgGAAQgGAAgGgCg"
      );
    this.shape_17.setTransform(16.4931, 4.7269);
    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("rgba(255,0,255,0.498)")
      .s()
      .p(
        "AigCQIACgCQAGgEADgIIAFADIgaAfQAGgIAEgMgACfiVQAEgIAFgGIABABIACACIgMALg"
      );
    this.shape_18.setTransform(17.6, 3.625);
    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f()
      .s("#FFFFFF")
      .ss(2, 1, 1)
      .p(
        "AllDbQAHgEAFgJQAAgBAAAAQABgDABgCQABgEACgDQABgBABgCQAFgHABgHQABgDAEAAQABAAABgBQAGgFAGgFQABgBAAgCQABgBABgBQALgMAJgLQADgEADgFQAJgNAKgMQAFgFAEgGQAFgFAGgEQAEgDACgDQADgIAHgHQALgJAIgLQABgBABgBQAHgHAFgKQABgBABgBQAJgKAJgIQACgBABgCQAEgGAFgEQAVgTAQgWQAFgGAEgEQAEgFAFgIQAEgGAEgGQAIgKAIgIQABgBACgBQAGgFAHgDQABgBABgBIAFgGQABgCAAgBQABgBABgBQAFgIAEgGQABgCABgBQABgCABgCQACgBAAgCQAAgBACgCQAFgDAFgJQADgFAHgGQAKgJAMgIQABgBACgBQALgIAGgMQAAgBACgCQABgCACgDQAHgMAGgNQAFgJAFgFQAFgEAHgHQAHgHAMgGQADgCADgCQABAAABgBQAIgHAHgKQABAAAAgCQAGgGADgGQABgDACgDQACgCABgBQADgHACgEQAFgGADgFQABgCABgBQACgIAFgFQAJgKAKgJQAJgKAHgHQACgBACAAQABAAABgCQAEgDADgEQACgBACgBQANgMAKgQQACgBABAAQAGgFAEgHQACgDACgEQABgDACgFQAAgBAAgBQAJgQANgJQAGgEAFgGQADgCACgCQADgBACgBQACAAABgCQACgFAGgCQAIgDAFgIQABgBAAgBQAEgCABgEQACgCABgBQABgCAAgCQABAAAAgCQAHgGAEgKQABgBAAgBQABgEACgCQACgFADgEQABgBABgCQAGgNALgIQABgBACgCQACgCABgBQAFgDADgDIAHgIQACgEADgEQAAgBABgBQAIgJAGgOQADgGADgGQADgFAHgEAm1F8QACAAACAAQAIgCAEgFQABgBABgBQACgDADgCQACgCACAAQAEgCACgCQAGgGAEgHQADgDACgDQAEgFADgEQAIgKAHgHQACgCACgBQAFgEAGgEQAJgHALgHQACgCADgBQADgCADgDQAFgFAEgFQAEgFADgEQADgFADgCQACgBABgCQACgEAGgCQABgBABgBQAEgHAJgFQAGgDAGgEQARgJARgHQABgBACgBQAFgDAFgEQABgBABgBQAFgFAJgIQADgDACgFQAAgBABgCQAHgMAHgLQABgBABgCQACgBAAgBQAFgGAHgFQACgBABgCQAFgEAFgFQABgBABgCQAHgJAJgCQACgBAAgBQACgBABgBQAEgDAEgBQACgBACgBQAHgFAFgFQAFgEABgGQAAgBAAgBQACgCAAgCQAGgMAIgJQADgFAEgFQABgCADAAQACgBACgBQAHgEAJgDQAEgBABgBQACgBABgBQACAAAAgBQAFgDAFgEQAIgGAJgGQAGgEAEgFQABgBABgBQAGgHAGgHQAFgFADgGQAFgGAHgFQABgBABgCQAGgNAMgGQADgBACgCQADgCAFgCQADgBAFgCQAPgGAIgNQABgCABgBQACgEADgCQACgBAAgCQAFgHAHgHQADgCACgDQAIgIAHgHQABgBACgBQAFgDAFgHQALgMARgEQAAgBABAAQABAAABgBQAGgDAGgEQABgBABAAQACgEAEgBQAEgBADgDQALgLAEgLQAEgJAFgEQABgBABgDQAFgKAJgFQABgBABgBQAFgFAIgEQADgCACgCQAAAAADgBQACgBACAAQADgBACAAQAdgMAPgZQABgCABgBQAEgFADgEQACgBABgBQADgGAFgIQABAAABgCQAKgNAMgHQALgHAMgGQADgBAEgBQACgCACAAQABgBAAAAQAMgLALgJQABgBABgBQADgDACgCQACgDACgDQAAgBABgBQAEgEADgDQAIgLAHgHQACgCABgCQAKgNAKgMQAFgGAHgEQASgIALgIQAFgDAEgDQAJgGAHgIQADgCACgDQADgDACgEQAAgCACgBQAMgNAQgLQAHgEAGgGQACgBABgCQAEgDAFgDQACgBACgBQABAAADgCQAJgGAGgHQACgEAFgCQABgBACgCQACgBAEgDQAHgHAGgIQACgCABgCQAAgCAEgDQACgBACgBQACgCADgCQACgCADgDQAAgBABAAQACgDADgDQAKgIAGgGQAKgJAMgJALsqhQABgCACgCQAGgIAGgGAr6K0QALgCABgKQAAgBAAgBQAAgBABgBQACgDABgEQACgEABgDQABgBAAgBQACgDADgCQAIgIAIgEQABgBABAAQAHgEACgFQABgBABgBQAIgFADgKQABgCAAgCQABgBAAgBQAEgGAEgKQAAgBABgBQAIgLAPgLQAJgIAJgHQADgCADgCQAHgGAEgGQAAgBABgBQADgDADgEQABgCACgDQAAgBABgBQAKgLAIgKQAEgFADgFQAHgJAHgGQAAAAABAAIAEgFQAIgHAIgIQAEgEACgIQABgBAAgBQAFgMAHgIQAHgIAIgJQAKgKAJgKQADgCACgDQAHgGAEgMQAHgPALgKQACgCADgCQADgCADgBQAIgEAEgGQACgCABgBQABgCAAgCQABgCACgBQACgDABgEQADgHAEgGQABgBABgCQAEgKAHgDQACAAAAgCQAEgGAHgEQAIgFAGgLQABgCACgCQAGgGAFgEQADgCACgEQAAgBABgBQAEgFAHAAQABAAABgB"
      );
    this.shape_19.setTransform(77.5, -49.95);
    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f()
      .s("#FF00FF")
      .ss(4, 1, 1)
      .p(
        "AhlhdIA+hHIAagfIA1g/IAmgtIBHhTIArgyIAqgxIA2hAIAngtAngGjIAIgHIAMgLIAggcIA5gzIAUgSIAzguIBThKIA0guIAegaIBCg8IArgmIA7g1IAagWIBPhHIAugpIA5gyIA1gwIA6gzIA1gwIBZhPIAUgSIA8g1IA3gxIAJgIIAKgJIAsgnQABgBACgCQABAAAAgBQAIgFAFgGIBdhTAFNpZIBehuApkH4IAWgbIDCjiIAAAAIAMgOIEWlEAshLUIAMgOIANgPIASgVIAWgaIA0g9IAug1IAWgZ"
      );
    this.shape_20.setTransform(81.425, -53.175);
    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#FF00FF")
      .s()
      .p(
        "AieC3QgRgBgKgQQgIgMAEgPQAEgPANgGQAKgFALABQAHABAHAEIgBACIgDAHIgEAHIAAACIgMAOQALgCAAgKIABgCIAMgPIABABQAHAHADALQACALgEAKQgEAJgKAGQgJAGgJAAIgCAAgACShzQgMgFgGgKQgGgKACgNQACgNAJgHQAKgJANAAQAMAAAKAJIACACIgLALIgIAHIAIgHQAHgCAEgFIACgCQAGAHABAJQADALgHAMQgGALgMAEQgFACgGAAQgGAAgGgCgACrigIgEAAIAEAAg"
      );
    this.shape_21.setTransform(17.0931, 4.1269);
    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("rgba(255,0,255,0.498)")
      .s()
      .p(
        "AieCTIgBACQAAALgLACgAieCRIAEgHIADgHIABgCIAEAEIgMAOIAAgCgACpihIACACIgCACQgEAGgHABg"
      );
    this.shape_22.setTransform(18.375, 3.1);
    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f()
      .s("#FFFFFF")
      .ss(2, 1, 1)
      .p(
        "Ar3KvQALADABgIQAAgBABgBQADgCABgEQAAgCABgCQABgBAAgCQACgDACgEQABgCABgBQAAgDABgDQABgBAAgBQAHgOAQgHIABAAQABgBACgBQABAAABgBQADgIAHgFQABgCABgCQABgBAAgBQABgDACgBQACgDACgFQAEgIAHgIQAFgGAFgDQABAAABgBQADgCADgCQAEgCAFgCQADgCADgDQAEgEAHgIQACgCABgCQAHgLAJgOQAFgHAEgFQAAgBABgBQAEgGAGgJQACgCACgDQAGgJAFgIQABgBABgBQAOgLANgPQABgCACgBQACgBABgCQABAAAAAAIABgBQACgCABgCQAGgFAEgHQAEgFADgHQAGgNAJgMQACgCACgDQADgHAFgCQABgBAAgBQAFgGAIgEQABgBABgBQAIgJAGgLQAEgHAFgIQAAgBABgBQAOgLAMgMQACgBAAgCQABgDAEgBQADgBABgDQABgCABgCQAGgKAFgHQABgCABgBQACgEADgDQADgDADgFQABgBACgBQAPgIALgLQABgCABgCQADgGACgGQAAgBABgBQACgFADgFQAHgNANgKQABgBABgBQAKgIAGgGQALgJAJgMQACgCABgDQAFgHAFgGQALgOAIgMQADgEADgCQAGgGAGgFQAMgKAMgJQABAAABgBQAFgFAFgFQAHgHAGgKQADgFADgGQAEgGAEgHQACgFAEgDQABgBACgCQAUgbAVgYQAIgLAKgHQAOgLAKgJQACgCADgDQAQgWAMgXQABgBABgBQAIgMAMgLQALgKANgJQADgCACgCQAIgHAHgKQABgBABgBQAHgHAFgIQADgFADgFQAIgRAIgOQACgDACgDQAAgBABgBQALgMAJgLQAHgJAMgKQAIgIAFgFQAPgOAKgIQAIgGAFgIQABgCABgBQAFgFAFgFQAKgMAIgMQACgBAAgBQALgRAMgIQACgCACgCQADgCADgCQAEgDAGgDQAHgDAIgEQAAAAACgBQAFgKAIgNQAJgOAIgMQADgGAEgGQABgCABgDQABgBABgBQAGgIAEgGQAHgKAKgFQAAgBABAAQADgCADgCQAKgFAFgFQACgCABgBQAFgGAEgKQAEgJAEgHQAFgIAGgGQABgCABgBQAKgNAKgJQAAgBACgBQAAAAABAAIACgDQAAgCABgBQACgIAFgHQAEgFADgFQABgBAAgBQAAgCgBgCAmIFVQACgBACAAQAFgBABgEQABgCABgCQAAgBABgBQAEgIAFgGQAFgGAFgFQAHgGAKgIQACgBACgBQAGgDAHgGQACgBABgCQALgMAJgNQABgCABgCQACgDADgDQACgBACgBQAPgGALgLQACgCADgDQACgDADgCQAEgGAJgGQAEgDAGgEQAEgCAGgBQABAAABAAQAHgBADgFQACgBAAAAQAGgBABgEQAAgBABgBQAGgJAIgJQADgEADgDQAEgEADgEQAEgDAGgCQABgBABAAQAIgCAFgEQANgKAJgPQACgCACgDQAEgFADgEQACgCACgDQABgBABgCQABgBAAgBQAHgEAIgEQACgBABAAIABgBQABgBACgBQABgBACgBQAEgCAEgCQAHgEACgJIAAAAQAAgBABgBQAEgGADgIQAAgBABgBQAEgIAIgDQACAAACgBQACgBADAAQAGgCAFgDIAEgEQABgCACgBQAMgKAIgNQAFgGAHgIQALgLAOgKQAAgBABgBQADgFAIAAQABAAABgBQAEgCAEgCQAEgDAEgCQABgBABgCQAEgDADgEQAGgIAGgMQABgBAAgBQAIgJAHgFQAFgEAJgDQAGgBAFgDQAJgEAIgIQAIgHADgFQAAgBACgCQAIgLAJgIQABgBACgCQAHgEAGgFQABgBACAAIABAAQAQgGAJgJQABgCACgCQAAgBABgCQABgBABgBQACgFAFgFQABgCACgCQAJgLAKgPQADgGAIgEQABAAABgBQAHgEAIgDQACAAABgCQACgBADgBQACgBACgBQABAAABgBQAGgGAFgGQAGgJAEgIQAAgBABgBQAKgIANgMQADgDAFgCQABgBABgBQAFgEAIgFQAFgEAGgCQABgBACAAQABgBABgBQAIgHAEgFQADgCADgDQABgCADgCIABgBIABgBQACgDAEgDQABgCABgCQAEgHAJgDQAAgBACgBQACgDAFgBQADgCADgBQAKgBAHgFQAFgEACgDQAIgOAJgLQADgEAGgGQAGgGAIgFQABAAABgBQADgEADgEIADgCQADgDAFgCQABgBAAgBQAEgGAIgCQACgBABgBQACgEAFgHQABgCACgCQAHgNAMgMQAFgHAIgEQACgBABAAQAFgDAFgCQAEgBAFgDQACgBACgCQABgBACgBQABAAABgBQACgDAFgCQABAAABgBQAFgHAEgEQABgBAAgCIAAAAQAEgIAIgGQABgBACgBQABgBACgBQAGgDAEgDIACgDQABAAABgBIAAAAQABgBABAAQAGgEAFgEQACgCADgEQADgCACgDQADgFACgGQAAgCAAgBQAFgLAKgEQAFgCAEgEQABgBADgBQABAAABgBQANgMALgJQAFgFAGABAmyF6IADgDQAAgBABgBQADgFACgCQADgDACgCQAJgIALgGQABAAAAAAQABgBABgBIAEgE"
      );
    this.shape_23.setTransform(77.75, -49.9841);
    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f()
      .s("#FF00FF")
      .ss(4, 1, 1)
      .p(
        "ApDHRIAMgPIE5ltIAXgcIC/jdIAdgiIC1jVIBBhLIAfgkIAqgxIAjgpAHbmwIAggcIA4gyIAdgaIAbgZAJwo1IAWgTIBHhAIBVhMAFapoIBShgAmzF7IAAgBIANgLICciLIAlghIAWgUIApgkIAggdAnaGdIAOgMIASgQIACgCAngGiIAEgCAiEBtIAXgVIAogkAFslNIAegbIBPhGACaiSIAmgiIA6g0IARgPIBEg9IAbgXAhAAwIBShJIARgPIA0guIAegbIAkggArvKaIATgWIAjgqIA2g+IA/hKAshLUIAXgaIACgDIAZgd"
      );
    this.shape_24.setTransform(82, -53.75);
    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#FF00FF")
      .s()
      .p(
        "AieC3QgRgBgKgQQgIgMAEgPQAEgPANgGQAKgFALABQAKACAIAGIgCADIgXAbQALADABgIIABgCQADgCABgEIABgEIABgDIAEgHIACgDIABABQAHAHADALQACALgEAKQgEAJgKAGQgJAGgJAAIgCAAgACShzQgMgFgGgKQgGgKACgNQACgNAJgHQAKgJANAAQAMAAAKAJIAAAAIgFAFIgFAHIgBACIgDADIADgDIANgMQAIAIABAKQADALgHAMQgGALgMAEQgFACgGAAQgGAAgGgCgACjiZIADgDg"
      );
    this.shape_25.setTransform(17.6931, 3.5269);
    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("rgba(255,0,255,0.498)")
      .s()
      .p(
        "AiqCiIAYgbIgFAIIgBADIgBADQAAAEgEACIgBACQAAAGgGAAIgGgBgAiRCEIABABIgCACIABgDgACeiWIAFgIIAGgEIACACIgOAMIABgCg"
      );
    this.shape_26.setTransform(18.85, 2.4659);
    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f()
      .s("#FF00FF")
      .ss(2, 1, 1)
      .p("AnZGgITuxlAsVLGIS01/");
    this.shape_27.setTransform(83.25, -55.225);
    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f()
      .s("#FF00FF")
      .ss(4, 1, 1)
      .p("ACYiQIATgRAiqCiIAage");
    this.shape_28.setTransform(18.8, 2.575);
    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#FF00FF")
      .s()
      .p(
        "AieC3QgRgBgKgQQgIgMAEgPQAEgPANgGQAKgFALABQAKACAIAGIgaAfIAagfIABABQAHAHADALQACALgEAKQgEAJgKAGQgJAGgJAAIgCAAgAiFB6IAAAAgACShzQgMgFgGgKQgGgKACgNQACgNAJgHQAKgJANAAQAMAAAKAJIACACQAIAIABAKQADALgHAMQgGALgMAEQgFACgGAAQgGAAgGgCgACjiZIATgSg"
      );
    this.shape_29.setTransform(17.6931, 3.5269);
    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("rgba(255,0,255,0.898)")
      .s()
      .p(
        "AieC3QgRgBgKgQQgIgMAEgPQAEgPANgGQAKgFALABQALACAIAHQAHAHADALQACALgEAKQgEAJgKAGQgJAGgJAAIgCAAgACShzQgMgFgGgKQgGgKACgNQACgNAJgHQAKgJANAAQAMAAAKAJQAJAIACAMQADALgHAMQgGALgMAEQgFACgGAAQgGAAgGgCg"
      );
    this.shape_30.setTransform(17.8931, 3.7769);
    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("rgba(255,0,255,0.8)")
      .s()
      .p(
        "AifCxQgOgBgIgMQgGgKADgMQADgMALgFQAIgEAIABQAJABAHAGQAGAFACAJQABAJgDAIQgDAIgIAEQgGAFgIAAIgCAAgACTh3QgKgEgFgJQgEgGAAgIIAAgFQACgLAHgHQAJgHALAAQAKAAAIAHQAJAIABAKIABAGQAAAGgEAHQgGAKgKADQgEABgFAAQgFAAgFgBg"
      );
    this.shape_31.setTransform(18.4148, 3.3273);
    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("rgba(255,0,255,0.6)")
      .s()
      .p(
        "AifCoQgJAAgGgIQgEgHACgIQACgIAIgEQAFgCAFABQAHAAAEAEQAEAEABAGQABAGgCAFQgCAFgFADQgEADgFAAIgCAAgACVh+QgHgDgEgGQgEgGABgIQACgIAFgFQAHgFAHAAQAIAAAGAFQAGAFABAIQABAGgEAIQgEAHgHACIgHABIgHgBg"
      );
    this.shape_32.setTransform(18.6508, 3.1281);
    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("rgba(255,0,255,0.498)")
      .s()
      .p(
        "AidCjQgIAAgEgHQgEgFACgHQACgGAGgDQAEgCAEABQAFABADACQADADACAFQAAAFgCAEQgBAEgEADQgDACgEAAIgBAAgACZiGQgFgCgDgEQgCgEAAgGQABgFAEgEQAFgDAFAAQAFAAAEADQAEAEABAFQABAFgDAFQgDAFgEABIgFABIgFgBg"
      );
    this.shape_33.setTransform(19.3029, 2.5042);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape }] })
        .to({ state: [{ t: this.shape_1 }] }, 1)
        .to({ state: [{ t: this.shape_2 }] }, 2)
        .to({ state: [{ t: this.shape_3 }] }, 2)
        .to({ state: [{ t: this.shape_4 }] }, 1)
        .to(
          {
            state: [
              { t: this.shape_7 },
              { t: this.shape_6 },
              { t: this.shape_5 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_10 },
              { t: this.shape_9 },
              { t: this.shape_8 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_14 },
              { t: this.shape_13 },
              { t: this.shape_12 },
              { t: this.shape_11 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_18 },
              { t: this.shape_17 },
              { t: this.shape_16 },
              { t: this.shape_15 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_22 },
              { t: this.shape_21 },
              { t: this.shape_20 },
              { t: this.shape_19 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_26 },
              { t: this.shape_25 },
              { t: this.shape_24 },
              { t: this.shape_23 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_29 },
              { t: this.shape_28 },
              { t: this.shape_27 },
            ],
          },
          1
        )
        .to({ state: [{ t: this.shape_30 }] }, 1)
        .to({ state: [{ t: this.shape_31 }] }, 1)
        .to({ state: [{ t: this.shape_32 }] }, 1)
        .to({ state: [{ t: this.shape_33 }] }, 1)
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-3.3, -143.3, 169.5, 166.9);
  (lib.brilho_branco_caixa = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    // Camada_1
    this.instance = new lib.brilho_branco();
    this.instance.setTransform(0, 0, 0.5708, 0.5708);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 184.4, 70.2);
  (lib.blur_caixa = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    // Camada_1
    this.instance = new lib.Blur();
    this.instance.setTransform(0, 0, 0.613, 0.6844);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 240.9, 118.4);
  (lib.Tween4 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    // Layer_1
    this.instance = new lib.Symbol41("synched", 0);
    this.instance.setTransform(-103.45, 0, 0.6364, 0.6364, 0, 0, 0, 0.1, 0);
    this.instance_1 = new lib.Symbol41("synched", 0);
    this.instance_1.setTransform(-408.5, 0, 0.6364, 0.6364, 0, 0, 0, -0.1, 0);
    this.instance_2 = new lib.Symbol41("synched", 0);
    this.instance_2.setTransform(202.9, 0, 0.6364, 0.6364, 0, 0, 0, -0.1, 0);
    this.instance_3 = new lib.Symbol41("synched", 0);
    this.instance_3.setTransform(-253.75, 0, 0.6364, 0.6364, 0, 0, 0, 0.1, 0);
    this.instance_4 = new lib.Symbol41("synched", 0);
    this.instance_4.setTransform(-558.8, 0, 0.6364, 0.6364, 0, 0, 0, -0.1, 0);
    this.instance_5 = new lib.Symbol41("synched", 0);
    this.instance_5.setTransform(357.65, 0, 0.6364, 0.6364, 0, 0, 0, 0.1, 0);
    this.instance_6 = new lib.Symbol41("synched", 0);
    this.instance_6.setTransform(52.6, 0, 0.6364, 0.6364, 0, 0, 0, -0.1, 0);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.instance_6 },
            { t: this.instance_5 },
            { t: this.instance_4 },
            { t: this.instance_3 },
            { t: this.instance_2 },
            { t: this.instance_1 },
            { t: this.instance },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-599.7, -66.1, 998.3000000000001, 132.3);
  (lib.seta_brilho2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    // Layer_1
    this.instance = new lib.seta_brilho_2("synched", 0);
    this.instance.setTransform(-0.05, -0.05, 1, 1, 0, 0, 0, 596.2, 62.6);
    this.timeline.addTween(
      cjs.Tween.get(this.instance).to({ x: 123.65 }, 4).wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-601.7, -68.1, 1126, 136.3);
  (lib.seta_brilho = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    // Layer_1
    this.instance = new lib.seta_rosa("synched", 0);
    this.instance.setTransform(-0.05, -0.05, 1, 1, 0, 0, 0, 596.2, 62.6);
    this.timeline.addTween(
      cjs.Tween.get(this.instance).to({ x: 123.65 }, 4).wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-601.7, -68.1, 1126, 136.3);
  (lib.front_head = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    // Camada_1
    this.instance = new lib.head_front();
    this.instance.setTransform(17.95, 0, 0.2273, 0.2416, 5.2626);
    this.instance_1 = new lib.left_head_1("synched", 0);
    this.instance_1.setTransform(
      87.75,
      95.15,
      0.2696,
      0.2734,
      0,
      -36.5578,
      -39.9434,
      134.7,
      133.4
    );
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 213.3, 212.9);
  (lib.arrows = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    // Layer_1
    this.instance = new lib.Tween4("synched", 0);
    this.timeline.addTween(
      cjs.Tween.get(this.instance).to({ x: 123.7 }, 4).wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-599.7, -66.1, 1122, 132.3);
  // stage content:
  (lib.flywheel_v031 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    // brilho_caixa_branco_Cópia
    this.instance = new lib.brilho_branco_caixa("synched", 0);
    this.instance.setTransform(
      200.95,
      148.25,
      1.2507,
      1.2507,
      0,
      0,
      0,
      92.2,
      35.1
    );
    this.instance.alpha = 0;
    this.instance._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(9)
        .to({ _off: false }, 0)
        .to(
          { regX: 92.7, regY: 35.6, scaleX: 1.2509, scaleY: 1.2509, x: 202.75 },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 92.5,
            regY: 35.4,
            scaleX: 1.0629,
            scaleY: 1.0629,
            x: 201.4,
            y: 148.2,
            alpha: 0.75,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 92.3,
            regY: 35.2,
            scaleX: 1.2506,
            scaleY: 1.2506,
            x: 200.9,
            y: 148.15,
            alpha: 0,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 92.2,
            regY: 35.1,
            scaleX: 1.2507,
            scaleY: 1.2507,
            x: 651.5,
            y: 307.2,
          },
          36,
          cjs.Ease.quadInOut
        )
        .to({ x: 589.1, y: 148.2 }, 4, cjs.Ease.quadInOut)
        .to(
          { scaleX: 1.0627, scaleY: 1.0627, x: 587.7, y: 148.25, alpha: 0.75 },
          3,
          cjs.Ease.quadInOut
        )
        .to({ scaleX: 1, scaleY: 1, x: 587.2, alpha: 0 }, 1, cjs.Ease.quadInOut)
        .to(
          { scaleX: 1.2507, scaleY: 1.2507, x: 586.15, y: 457.4 },
          32,
          cjs.Ease.quadInOut
        )
        .to({ x: 651.5, y: 307.2 }, 2, cjs.Ease.quadInOut)
        .to(
          {
            regX: 92.6,
            regY: 35.6,
            scaleX: 1.2509,
            scaleY: 1.2509,
            x: 653.35,
            y: 307.15,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 92.5,
            regY: 35.4,
            scaleX: 1.0629,
            scaleY: 1.0629,
            x: 651.9,
            alpha: 0.75,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 92.2,
            regY: 35.2,
            scaleX: 1.2506,
            scaleY: 1.2506,
            x: 651.3,
            y: 307.1,
            alpha: 0,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          { regY: 35.1, scaleX: 1.2507, scaleY: 1.2507, x: 195.1, y: 457.4 },
          33,
          cjs.Ease.quadInOut
        )
        .to({ x: 586.15 }, 2, cjs.Ease.quadInOut)
        .to(
          {
            regX: 92.6,
            regY: 35.6,
            scaleX: 1.2509,
            scaleY: 1.2509,
            x: 587.9,
            y: 457.35,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 92.5,
            regY: 35.4,
            scaleX: 1.0629,
            scaleY: 1.0629,
            x: 586.55,
            y: 457.3,
            alpha: 0.75,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 92.2,
            regY: 35.2,
            scaleX: 1.2506,
            scaleY: 1.2506,
            x: 585.95,
            alpha: 0,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          { regY: 35.1, scaleX: 1.2507, scaleY: 1.2507, x: 145.35, y: 306.25 },
          36,
          cjs.Ease.quadInOut
        )
        .to({ x: 195.1, y: 457.4 }, 2, cjs.Ease.quadInOut)
        .to(
          {
            regX: 92.7,
            regY: 35.6,
            scaleX: 1.2509,
            scaleY: 1.2509,
            x: 196.8,
            y: 457.35,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 92.5,
            regY: 35.4,
            scaleX: 1.0629,
            scaleY: 1.0629,
            x: 195.5,
            y: 457.3,
            alpha: 0.75,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 92.3,
            regY: 35.2,
            scaleX: 1.2506,
            scaleY: 1.2506,
            x: 195.05,
            alpha: 0,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 92.2,
            regY: 35.1,
            scaleX: 1.2507,
            scaleY: 1.2507,
            x: 200.95,
            y: 148.25,
          },
          34,
          cjs.Ease.quadInOut
        )
        .to({ x: 145.35, y: 306.25 }, 2, cjs.Ease.quadInOut)
        .to(
          {
            regX: 92.8,
            regY: 35.6,
            scaleX: 1.2509,
            scaleY: 1.2509,
            x: 147.1,
            y: 306.15,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 92.5,
            regY: 35.4,
            scaleX: 1.0629,
            scaleY: 1.0629,
            x: 145.7,
            y: 306.25,
            alpha: 0.75,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 92.3,
            regY: 35.2,
            scaleX: 1.2506,
            scaleY: 1.2506,
            x: 145.25,
            y: 306.2,
            alpha: 0,
          },
          1,
          cjs.Ease.quadInOut
        )
        .wait(34)
    );
    // brilho_caixa_branco
    this.instance_1 = new lib.brilho_branco_caixa("synched", 0);
    this.instance_1.setTransform(587.2, 148.25, 1, 1, 0, 0, 0, 92.2, 35.1);
    this.instance_1.alpha = 0;
    this.instance_1._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(14)
        .to({ _off: false }, 0)
        .to(
          { scaleX: 1.0627, scaleY: 1.0627, x: 587.7, alpha: 1 },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          { scaleX: 1.2507, scaleY: 1.2507, x: 589.1, y: 148.2, alpha: 0 },
          3,
          cjs.Ease.quadInOut
        )
        .to({ x: 651.5, y: 307.2 }, 4, cjs.Ease.quadInOut)
        .to(
          { regY: 35.2, scaleX: 1.2506, scaleY: 1.2506, x: 651.3, y: 307.1 },
          32,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 92.5,
            regY: 35.4,
            scaleX: 1.0629,
            scaleY: 1.0629,
            x: 651.9,
            y: 307.15,
            alpha: 1,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 92.6,
            regY: 35.6,
            scaleX: 1.2509,
            scaleY: 1.2509,
            x: 653.35,
            alpha: 0,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 92.2,
            regY: 35.1,
            scaleX: 1.2507,
            scaleY: 1.2507,
            x: 651.5,
            y: 307.2,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to({ x: 586.15, y: 457.4 }, 2, cjs.Ease.quadInOut)
        .to(
          { regY: 35.2, scaleX: 1.2506, scaleY: 1.2506, x: 585.95, y: 457.3 },
          33,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 92.5,
            regY: 35.4,
            scaleX: 1.0629,
            scaleY: 1.0629,
            x: 586.55,
            alpha: 1,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 92.6,
            regY: 35.6,
            scaleX: 1.2509,
            scaleY: 1.2509,
            x: 587.9,
            y: 457.35,
            alpha: 0,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 92.2,
            regY: 35.1,
            scaleX: 1.2507,
            scaleY: 1.2507,
            x: 586.15,
            y: 457.4,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to({ x: 195.1 }, 2, cjs.Ease.quadInOut)
        .to(
          {
            regX: 92.3,
            regY: 35.2,
            scaleX: 1.2506,
            scaleY: 1.2506,
            x: 195.05,
            y: 457.3,
          },
          36,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 92.5,
            regY: 35.4,
            scaleX: 1.0629,
            scaleY: 1.0629,
            x: 195.5,
            alpha: 1,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 92.7,
            regY: 35.6,
            scaleX: 1.2509,
            scaleY: 1.2509,
            x: 196.8,
            y: 457.35,
            alpha: 0,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 92.2,
            regY: 35.1,
            scaleX: 1.2507,
            scaleY: 1.2507,
            x: 195.1,
            y: 457.4,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to({ x: 145.35, y: 306.25 }, 2, cjs.Ease.quadInOut)
        .to(
          {
            regX: 92.3,
            regY: 35.2,
            scaleX: 1.2506,
            scaleY: 1.2506,
            x: 145.25,
            y: 306.2,
          },
          34,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 92.5,
            regY: 35.4,
            scaleX: 1.0629,
            scaleY: 1.0629,
            x: 145.7,
            y: 306.25,
            alpha: 1,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 92.8,
            regY: 35.6,
            scaleX: 1.2509,
            scaleY: 1.2509,
            x: 147.1,
            y: 306.15,
            alpha: 0,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 92.2,
            regY: 35.1,
            scaleX: 1.2507,
            scaleY: 1.2507,
            x: 145.35,
            y: 306.25,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to({ x: 200.95, y: 148.25 }, 2, cjs.Ease.quadInOut)
        .to(
          {
            regX: 92.3,
            regY: 35.2,
            scaleX: 1.2506,
            scaleY: 1.2506,
            x: 200.9,
            y: 148.15,
          },
          41,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 92.5,
            regY: 35.4,
            scaleX: 1.0629,
            scaleY: 1.0629,
            x: 201.4,
            y: 148.2,
            alpha: 1,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 92.7,
            regY: 35.6,
            scaleX: 1.2509,
            scaleY: 1.2509,
            x: 202.75,
            y: 148.25,
            alpha: 0,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          { regX: 92.2, regY: 35.1, scaleX: 1.2507, scaleY: 1.2507, x: 200.95 },
          1,
          cjs.Ease.quadInOut
        )
        .wait(24)
    );
    // brilho_caixas_Cópia
    this.instance_2 = new lib.blur_caixa("synched", 0);
    this.instance_2.setTransform(587.15, 147.25, 1, 1, 0, 0, 0, 120.5, 59.2);
    this.instance_2.alpha = 0;
    this.instance_2._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(15)
        .to({ _off: false }, 0)
        .to(
          { scaleX: 1.2025, scaleY: 1.1655, y: 147.3, alpha: 1 },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          { regY: 59.3, scaleX: 1.3079, scaleY: 1.2677, y: 147.35 },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regY: 59.4,
            scaleX: 1.2677,
            scaleY: 1.2023,
            x: 587.2,
            y: 147.5,
            alpha: 0,
          },
          5,
          cjs.Ease.quadInOut
        )
        .to({ startPosition: 0 }, 24, cjs.Ease.quadInOut)
        .to({ x: 653.5, y: 306.45 }, 1, cjs.Ease.quadInOut)
        .to(
          { regY: 59.2, scaleX: 1.2675, scaleY: 1.2021, x: 653.3, y: 306.05 },
          6,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 120.8,
            regY: 59.5,
            scaleX: 1.2019,
            scaleY: 1.1649,
            x: 653.45,
            y: 306.3,
            alpha: 1,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 120.9,
            regY: 59.6,
            scaleX: 1.3079,
            scaleY: 1.2679,
            x: 653.35,
            y: 306.2,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 121,
            regY: 59.8,
            scaleX: 1.2678,
            scaleY: 1.2019,
            x: 653.4,
            y: 306.3,
            alpha: 0,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          { regX: 121.2, regY: 59.9, scaleY: 1.2018, x: 653.45 },
          26,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 120.5,
            regY: 59.4,
            scaleX: 1.2677,
            scaleY: 1.2023,
            x: 653.5,
            y: 306.45,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to({ x: 586.2, y: 456.65 }, 1, cjs.Ease.quadInOut)
        .to(
          { regY: 59.2, scaleX: 1.2675, scaleY: 1.2021, x: 586.05, y: 456.2 },
          5,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 120.8,
            regY: 59.5,
            scaleX: 1.2019,
            scaleY: 1.1649,
            x: 586.2,
            y: 456.45,
            alpha: 1,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 120.9,
            regY: 59.6,
            scaleX: 1.3079,
            scaleY: 1.2679,
            x: 586.1,
            y: 456.4,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 121.1,
            regY: 59.8,
            scaleX: 1.2678,
            scaleY: 1.2019,
            x: 586.3,
            y: 456.55,
            alpha: 0,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          { regX: 121.2, regY: 60, scaleY: 1.2018, x: 586.2, y: 456.65 },
          26,
          cjs.Ease.quadInOut
        )
        .to(
          { regX: 120.5, regY: 59.4, scaleX: 1.2677, scaleY: 1.2023 },
          1,
          cjs.Ease.quadInOut
        )
        .to({ x: 199 }, 1, cjs.Ease.quadInOut)
        .to(
          {
            regX: 120.6,
            regY: 59.2,
            scaleX: 1.2675,
            scaleY: 1.2021,
            x: 198.9,
            y: 456.2,
          },
          8,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 120.8,
            regY: 59.5,
            scaleX: 1.2019,
            scaleY: 1.1649,
            x: 199.1,
            y: 456.45,
            alpha: 1,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 120.9,
            regY: 59.6,
            scaleX: 1.3079,
            scaleY: 1.2679,
            x: 199,
            y: 456.4,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 121.1,
            regY: 59.8,
            scaleX: 1.2678,
            scaleY: 1.2019,
            y: 456.55,
            alpha: 0,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          { regX: 121.2, regY: 60, scaleY: 1.2018, x: 198.95, y: 456.65 },
          26,
          cjs.Ease.quadInOut
        )
        .to(
          { regX: 120.5, regY: 59.4, scaleX: 1.2677, scaleY: 1.2023, x: 199 },
          1,
          cjs.Ease.quadInOut
        )
        .to({ x: 142.45, y: 308.45 }, 1, cjs.Ease.quadInOut)
        .to(
          { regX: 120.3, scaleX: 1.2675, scaleY: 1.2021, x: 142.5, y: 308.2 },
          6,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 120.1,
            regY: 59.6,
            scaleX: 1.2019,
            scaleY: 1.1649,
            x: 142.55,
            y: 308.25,
            alpha: 1,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 120,
            regY: 59.7,
            scaleX: 1.3079,
            scaleY: 1.2679,
            x: 142.65,
            y: 308.2,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 119.8,
            regY: 59.9,
            scaleX: 1.2678,
            scaleY: 1.2019,
            y: 308.3,
            alpha: 0,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          { regX: 119.7, regY: 60, scaleY: 1.2018, x: 142.7 },
          26,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 120.5,
            regY: 59.4,
            scaleX: 1.2677,
            scaleY: 1.2023,
            x: 142.45,
            y: 308.45,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to({ x: 199, y: 148.5 }, 2, cjs.Ease.quadInOut)
        .to(
          { regX: 120.6, scaleX: 1.2675, scaleY: 1.2021, x: 198.9, y: 148.25 },
          12,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 120.8,
            regY: 59.6,
            scaleX: 1.2019,
            scaleY: 1.1649,
            x: 199.1,
            y: 148.3,
            alpha: 1,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 120.9,
            regY: 59.7,
            scaleX: 1.3079,
            scaleY: 1.2679,
            x: 199,
            y: 148.25,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 121.1,
            regY: 59.9,
            scaleX: 1.2678,
            scaleY: 1.2019,
            y: 148.3,
            alpha: 0,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          { regX: 121.2, regY: 60.1, scaleY: 1.2018, x: 198.95, y: 148.4 },
          20,
          cjs.Ease.quadInOut
        )
        .wait(1)
    );
    // trade
    this.instance_3 = new lib.trade();
    this.instance_3.setTransform(
      199.3,
      149.8,
      0.741,
      0.741,
      0,
      0,
      0,
      159.5,
      62
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .to(
          {
            regX: 159.6,
            regY: 62.1,
            scaleX: 0.7409,
            scaleY: 0.7409,
            x: 199.25,
            y: 149.75,
          },
          5
        )
        .to(
          { regX: 159.9, regY: 62.5, scaleX: 0.7249, scaleY: 0.7249, y: 149.8 },
          2
        )
        .to(
          {
            regX: 160.1,
            regY: 62.7,
            scaleX: 0.7569,
            scaleY: 0.7569,
            y: 149.65,
          },
          2
        )
        .to({ regX: 160.3, regY: 62.9, scaleX: 0.593, scaleY: 0.593 }, 3)
        .to(
          {
            regX: 162.9,
            regY: 63.8,
            scaleX: 0.573,
            scaleY: 0.5729,
            x: 201.5,
            y: 151,
          },
          1
        )
        .wait(214)
        .to({ regX: 158.6, regY: 61, scaleX: 0.5729, x: 198.85, y: 149.2 }, 0)
        .to(
          {
            regX: 158.8,
            regY: 61.2,
            scaleX: 0.7569,
            scaleY: 0.7569,
            y: 149.15,
          },
          4,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 159.1,
            regY: 61.5,
            scaleX: 0.7249,
            scaleY: 0.7249,
            x: 198.9,
            y: 149.3,
          },
          2,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 159.5,
            regY: 61.9,
            scaleX: 0.7409,
            scaleY: 0.7409,
            x: 198.85,
            y: 149.35,
          },
          2,
          cjs.Ease.quadInOut
        )
        .wait(20)
    );
    // higher_apr
    this.instance_4 = new lib.higher_apr();
    this.instance_4.setTransform(144, 310, 0.573, 0.5729, 0, 0, 0, 157.6, 63.9);
    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(179)
        .to({ regX: 158.6, regY: 61, scaleX: 0.5729, x: 144.4, y: 308.15 }, 0)
        .to(
          {
            regX: 158.8,
            regY: 61.2,
            scaleX: 0.7569,
            scaleY: 0.7569,
            x: 144.35,
            y: 308.1,
          },
          4,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 159.1,
            regY: 61.5,
            scaleX: 0.7249,
            scaleY: 0.7249,
            x: 144.4,
            y: 308.3,
          },
          2,
          cjs.Ease.quadInOut
        )
        .to(
          { regX: 159.3, regY: 61.8, scaleX: 0.7409, scaleY: 0.7409 },
          2,
          cjs.Ease.quadInOut
        )
        .to({ regX: 159.5, regY: 62 }, 26, cjs.Ease.quadInOut)
        .to(
          {
            regX: 159.8,
            regY: 62.3,
            scaleX: 0.7249,
            scaleY: 0.7249,
            x: 144.35,
            y: 308.2,
          },
          2,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 160,
            regY: 62.5,
            scaleX: 0.7569,
            scaleY: 0.7569,
            x: 144.3,
            y: 308.15,
          },
          2,
          cjs.Ease.quadInOut
        )
        .to(
          { regX: 160.2, regY: 62.6, scaleX: 0.593, scaleY: 0.593, y: 308.1 },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 157.6,
            regY: 63.9,
            scaleX: 0.573,
            scaleY: 0.5729,
            x: 144,
            y: 310,
          },
          1,
          cjs.Ease.quadInOut
        )
        .wait(34)
    );
    // more_trad
    this.instance_5 = new lib.more_trading();
    this.instance_5.setTransform(
      199.45,
      358.9,
      0.573,
      0.5729,
      0,
      0,
      0,
      159.3,
      -112.5
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(138)
        .to({ regX: 158.6, regY: 61, scaleX: 0.5729, x: 198.85, y: 458.1 }, 0)
        .to(
          { regX: 158.8, regY: 61.2, scaleX: 0.7569, scaleY: 0.7569 },
          4,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 159.1,
            regY: 61.5,
            scaleX: 0.7249,
            scaleY: 0.7249,
            x: 198.9,
            y: 458.25,
          },
          2,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 159.3,
            regY: 61.8,
            scaleX: 0.7409,
            scaleY: 0.7409,
            x: 198.85,
            y: 458.3,
          },
          2,
          cjs.Ease.quadInOut
        )
        .to({ regX: 159.5, regY: 61.9, y: 458.2 }, 26, cjs.Ease.quadInOut)
        .to(
          { regX: 159.8, regY: 62.2, scaleX: 0.7249, scaleY: 0.7249, x: 198.8 },
          2,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 160.1,
            regY: 62.4,
            scaleX: 0.7569,
            scaleY: 0.7569,
            x: 198.85,
            y: 458.15,
          },
          2,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 160.3,
            regY: 62.6,
            scaleX: 0.593,
            scaleY: 0.593,
            x: 198.8,
            y: 458.1,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 159.3,
            regY: -112.5,
            scaleX: 0.573,
            scaleY: 0.5729,
            x: 199.45,
            y: 358.9,
          },
          1,
          cjs.Ease.quadInOut
        )
        .wait(75)
    );
    // earn_us
    this.instance_6 = new lib.earn_USDC();
    this.instance_6.setTransform(
      588.15,
      455.55,
      0.573,
      0.5729,
      0,
      0,
      0,
      159.3,
      60.6
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(95)
        .to({ regX: 158.6, regY: 60.9, scaleX: 0.5729, x: 587.55, y: 455.6 }, 0)
        .to(
          { regX: 158.8, regY: 61.1, scaleX: 0.7569, scaleY: 0.7569 },
          4,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 159.1,
            regY: 61.4,
            scaleX: 0.7249,
            scaleY: 0.7249,
            x: 587.6,
            y: 455.7,
          },
          2,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 159.3,
            regY: 61.7,
            scaleX: 0.7409,
            scaleY: 0.7409,
            x: 587.55,
            y: 455.75,
          },
          2,
          cjs.Ease.quadInOut
        )
        .to({ regX: 159.5, regY: 61.8 }, 26, cjs.Ease.quadInOut)
        .to(
          {
            regX: 159.8,
            regY: 62.1,
            scaleX: 0.7249,
            scaleY: 0.7249,
            x: 587.5,
            y: 455.65,
          },
          2,
          cjs.Ease.quadInOut
        )
        .to(
          { regX: 160, regY: 62.3, scaleX: 0.7569, scaleY: 0.7569 },
          2,
          cjs.Ease.quadInOut
        )
        .to(
          { regX: 160.2, regY: 62.5, scaleX: 0.593, scaleY: 0.593 },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 159.3,
            regY: 60.6,
            scaleX: 0.573,
            scaleY: 0.5729,
            x: 588.15,
            y: 455.55,
          },
          1,
          cjs.Ease.quadInOut
        )
        .wait(118)
    );
    // more_staking
    this.instance_7 = new lib.more_staking();
    this.instance_7.setTransform(
      654,
      309.95,
      0.573,
      0.5729,
      0,
      0,
      0,
      159.3,
      63.8
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .wait(55)
        .to({ regX: 158.6, regY: 61, scaleX: 0.5729, x: 653.4, y: 308.15 }, 0)
        .to(
          { regX: 158.8, regY: 61.2, scaleX: 0.7569, scaleY: 0.7569, y: 308.1 },
          4,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 159.1,
            regY: 61.5,
            scaleX: 0.7249,
            scaleY: 0.7249,
            x: 653.45,
            y: 308.3,
          },
          2,
          cjs.Ease.quadInOut
        )
        .to(
          { regX: 159.3, regY: 61.8, scaleX: 0.7409, scaleY: 0.7409, x: 653.4 },
          2,
          cjs.Ease.quadInOut
        )
        .to({ regX: 159.5, regY: 62 }, 26, cjs.Ease.quadInOut)
        .to(
          {
            regX: 159.8,
            regY: 62.3,
            scaleX: 0.7249,
            scaleY: 0.7249,
            x: 653.35,
            y: 308.2,
          },
          2,
          cjs.Ease.quadInOut
        )
        .to(
          { regX: 160, regY: 62.5, scaleX: 0.7569, scaleY: 0.7569, y: 308.15 },
          2,
          cjs.Ease.quadInOut
        )
        .to(
          { regX: 160.2, regY: 62.6, scaleX: 0.593, scaleY: 0.593, y: 308.1 },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 159.3,
            regY: 63.8,
            scaleX: 0.573,
            scaleY: 0.5729,
            x: 654,
            y: 309.95,
          },
          1,
          cjs.Ease.quadInOut
        )
        .wait(158)
    );
    // stake_based
    this.instance_8 = new lib.stake_based();
    this.instance_8.setTransform(
      587.2,
      148.95,
      0.573,
      0.573,
      0,
      0,
      0,
      157.7,
      60.2
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_8)
        .wait(15)
        .to(
          {
            regX: 158.8,
            regY: 61.1,
            scaleX: 0.5924,
            scaleY: 0.5924,
            y: 148.85,
          },
          0
        )
        .to(
          {
            regX: 157.8,
            regY: 60.3,
            scaleX: 0.7573,
            scaleY: 0.7573,
            x: 587.25,
            y: 148.95,
          },
          4,
          cjs.Ease.quadInOut
        )
        .to(
          { regY: 60.4, scaleX: 0.7252, scaleY: 0.7252, y: 149.05 },
          2,
          cjs.Ease.quadInOut
        )
        .to(
          { regY: 60.5, scaleX: 0.7405, scaleY: 0.7405, y: 149.1 },
          2,
          cjs.Ease.quadInOut
        )
        .wait(26)
        .to(
          { regY: 60.4, scaleX: 0.7252, scaleY: 0.7252, y: 149.05 },
          2,
          cjs.Ease.quadInOut
        )
        .to(
          { regY: 60.3, scaleX: 0.7573, scaleY: 0.7573, y: 148.95 },
          2,
          cjs.Ease.quadInOut
        )
        .to(
          { regY: 60.2, scaleX: 0.5926, scaleY: 0.5926, y: 148.9 },
          3,
          cjs.Ease.quadInOut
        )
        .wait(199)
    );
    // eye_laser
    this.instance_9 = new lib.brilho_olhos2("synched", 0);
    this.instance_9.setTransform(442.65, 299.25, 1, 1, 13.2693, 0, 0, 34, -9.1);
    this.instance_9._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_9)
        .wait(8)
        .to({ _off: false }, 0)
        .wait(1)
        .to(
          {
            regX: 34.1,
            rotation: -0.2194,
            x: 437.1,
            y: 290.45,
            startPosition: 1,
          },
          0
        )
        .wait(6)
        .to(
          {
            regY: -9,
            scaleX: 1.2462,
            scaleY: 1.2908,
            rotation: -0.2188,
            x: 437.15,
            y: 290.55,
            startPosition: 7,
          },
          0
        )
        .to({ _off: true }, 11)
        .wait(23)
        .to(
          {
            _off: false,
            regY: -9.1,
            scaleX: 1,
            scaleY: 1,
            rotation: 43.2687,
            x: 432.8,
            y: 301.05,
            startPosition: 1,
          },
          0
        )
        .wait(6)
        .to(
          {
            scaleX: 1.2084,
            scaleY: 1.2276,
            rotation: 43.2684,
            x: 435.9,
            y: 300.5,
            startPosition: 7,
          },
          0
        )
        .wait(2)
        .to(
          {
            scaleX: 1.1644,
            scaleY: 1.1341,
            rotation: 43.269,
            x: 440.85,
            y: 301.05,
            startPosition: 9,
          },
          0
        )
        .to({ _off: true }, 9)
        .wait(23)
        .to(
          {
            _off: false,
            regX: 34,
            regY: -9.2,
            scaleX: 0.9999,
            scaleY: 0.9999,
            rotation: 83.5099,
            x: 428.4,
            y: 311.6,
            startPosition: 1,
          },
          0
        )
        .wait(6)
        .to(
          {
            regX: 34.1,
            regY: -9.3,
            scaleX: 1.1848,
            scaleY: 1.1947,
            rotation: 83.5104,
            x: 430.35,
            y: 314.2,
            startPosition: 7,
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 34,
            regY: -9.5,
            scaleX: 1.346,
            scaleY: 1.2725,
            x: 435.6,
            y: 318.45,
            startPosition: 8,
          },
          0
        )
        .to({ _off: true }, 10)
        .wait(26)
        .to(
          {
            _off: false,
            regX: 34.1,
            regY: -9.2,
            scaleX: 0.9999,
            scaleY: 0.9999,
            rotation: 0,
            skewX: -77.0205,
            skewY: 102.9795,
            x: 398.45,
            y: 330.4,
            startPosition: 1,
          },
          0
        )
        .wait(6)
        .to(
          {
            regX: 34.4,
            regY: -9,
            scaleX: 1.1876,
            scaleY: 1.1894,
            skewX: -77.9717,
            skewY: 102.0285,
            x: 394.8,
            y: 336.25,
            startPosition: 7,
          },
          0
        )
        .wait(1)
        .to({ x: 391.7, y: 337.5, startPosition: 8 }, 0)
        .wait(1)
        .to({ x: 385.45, y: 342.45, startPosition: 9 }, 0)
        .to({ _off: true }, 9)
        .wait(24)
        .to(
          {
            _off: false,
            regX: 34.1,
            regY: -9.1,
            scaleX: 1,
            scaleY: 1,
            skewX: -43.2687,
            skewY: 136.7313,
            x: 387.15,
            y: 313.5,
            startPosition: 1,
          },
          0
        )
        .wait(6)
        .to({ x: 382.65, startPosition: 7 }, 0)
        .wait(1)
        .to(
          {
            regY: -9,
            scaleX: 1.2229,
            scaleY: 1.2466,
            skewX: -43.269,
            skewY: 136.7312,
            x: 378.85,
            y: 314.65,
            startPosition: 8,
          },
          0
        )
        .wait(1)
        .to(
          {
            regX: 34,
            regY: -9.1,
            scaleX: 1.1084,
            scaleY: 1.1144,
            skewY: 136.7315,
            x: 374.75,
            y: 312.95,
            startPosition: 9,
          },
          0
        )
        .to({ _off: true }, 9)
        .wait(31)
        .to(
          {
            _off: false,
            scaleX: 1,
            scaleY: 1,
            skewX: 1.4192,
            skewY: 181.4192,
            x: 372.25,
            y: 287.9,
            startPosition: 1,
          },
          0
        )
        .wait(7)
        .to(
          {
            scaleX: 1.2653,
            scaleY: 1.2595,
            skewX: 1.419,
            skewY: 181.4187,
            x: 369.05,
            y: 285.95,
            startPosition: 8,
          },
          0
        )
        .wait(1)
        .to(
          {
            regY: -9,
            scaleX: 1.1903,
            scaleY: 1.1944,
            skewX: 1.4187,
            skewY: 181.4185,
            x: 366.55,
            y: 281.75,
            startPosition: 9,
          },
          0
        )
        .to({ _off: true }, 7)
        .wait(19)
    );
    // character
    this.instance_10 = new lib.left_head_1("synched", 0);
    this.instance_10.setTransform(390.8, 292.3, 1, 1, 0, 0, 0, 134.1, 132.9);
    this.instance_11 = new lib.front_head("synched", 0);
    this.instance_11.setTransform(397.05, 296.75, 1, 1, 0, 0, 0, 106.7, 106.4);
    this.instance_11._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_10)
        .to({ rotation: -38.2404, x: 382.25, y: 298.45 }, 3, cjs.Ease.quadInOut)
        .to(
          {
            _off: true,
            regX: 106.7,
            regY: 106.4,
            rotation: 0,
            x: 397.05,
            y: 296.75,
          },
          1,
          cjs.Ease.quadInOut
        )
        .wait(1)
        .to(
          {
            _off: false,
            regX: 134,
            regY: 132.9,
            skewX: 34.7287,
            skewY: -145.2713,
            x: 440.15,
            y: 300.75,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 133.9,
            regY: 133,
            skewX: -1.2556,
            skewY: -181.2556,
            x: 415.6,
            y: 294,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to({ skewX: -1.2556 }, 5, cjs.Ease.quadInOut)
        .to({ x: 397.9, y: 308.65 }, 3, cjs.Ease.quadInOut)
        .to({ x: 415.6, y: 294 }, 26, cjs.Ease.quadInOut)
        .to(
          {
            regX: 133.8,
            scaleX: 0.9999,
            scaleY: 0.9999,
            skewX: 34.4673,
            skewY: -145.5327,
            x: 415.7,
            y: 292.5,
          },
          6,
          cjs.Ease.quadInOut
        )
        .to({ startPosition: 0 }, 5, cjs.Ease.quadInOut)
        .to({ x: 401.05 }, 3, cjs.Ease.quadInOut)
        .to({ x: 415.7 }, 26, cjs.Ease.quadInOut)
        .to(
          {
            regX: 133.7,
            regY: 132.9,
            skewX: 77.2218,
            skewY: -102.7782,
            x: 418.85,
            y: 293.35,
          },
          6,
          cjs.Ease.quadInOut
        )
        .to({ startPosition: 0 }, 5, cjs.Ease.quadInOut)
        .to({ x: 409.6, y: 283.3 }, 4, cjs.Ease.quadInOut)
        .to(
          { skewX: 77.2233, skewY: -102.7767, x: 415.75, y: 290.05 },
          25,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 133.5,
            regY: 132.8,
            skewX: 47.6602,
            skewY: -132.3398,
            x: 431.65,
            y: 297.4,
          },
          4,
          cjs.Ease.quadInOut
        )
        .to(
          {
            _off: true,
            regX: 106.7,
            regY: 106.5,
            scaleX: 1,
            scaleY: 1,
            rotation: -1.9771,
            skewX: 0,
            skewY: 0,
            x: 417.75,
            y: 292.95,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          {
            _off: false,
            regX: 134.1,
            regY: 133.1,
            scaleX: 0.9999,
            scaleY: 0.9999,
            rotation: -50.2208,
            x: 401.75,
            y: 290,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 134.2,
            scaleX: 1,
            scaleY: 1,
            rotation: -71.4934,
            x: 410.15,
            y: 316.85,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to({ startPosition: 0 }, 6, cjs.Ease.quadInOut)
        .to({ x: 417.1, y: 309.15 }, 3, cjs.Ease.quadInOut)
        .to({ x: 410.15, y: 316.85 }, 25, cjs.Ease.quadInOut)
        .to(
          {
            scaleX: 0.9999,
            scaleY: 0.9999,
            rotation: -35.2728,
            x: 401.7,
            y: 305.35,
          },
          6,
          cjs.Ease.quadInOut
        )
        .to({ startPosition: 0 }, 6, cjs.Ease.quadInOut)
        .to({ x: 414.05 }, 3, cjs.Ease.quadInOut)
        .to({ x: 401.7 }, 35, cjs.Ease.quadInOut)
        .to(
          {
            regX: 134.1,
            regY: 132.9,
            scaleX: 1,
            scaleY: 1,
            rotation: 0,
            x: 390.8,
            y: 292.3,
          },
          5,
          cjs.Ease.quadInOut
        )
        .to({ startPosition: 0 }, 5, cjs.Ease.quadInOut)
        .to({ x: 402.35, y: 303.1 }, 3, cjs.Ease.quadInOut)
        .to({ x: 390.8, y: 292.3 }, 25, cjs.Ease.quadInOut)
        .wait(1)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_11)
        .wait(3)
        .to({ _off: false }, 1, cjs.Ease.quadInOut)
        .to(
          { regY: 106.5, rotation: -10.7117, x: 414.65, y: 298.35 },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          {
            _off: true,
            regX: 134,
            regY: 132.9,
            rotation: 0,
            skewX: 34.7287,
            skewY: -145.2713,
            x: 440.15,
            y: 300.75,
          },
          1,
          cjs.Ease.quadInOut
        )
        .wait(121)
        .to(
          {
            _off: false,
            regX: 106.7,
            regY: 106.5,
            rotation: -1.9771,
            skewX: 0,
            skewY: 0,
            x: 417.75,
            y: 292.95,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          {
            _off: true,
            regX: 134.1,
            regY: 133.1,
            scaleX: 0.9999,
            scaleY: 0.9999,
            rotation: -50.2208,
            x: 401.75,
            y: 290,
          },
          1,
          cjs.Ease.quadInOut
        )
        .wait(126)
    );
    // brilho_caixas
    this.instance_12 = new lib.blur_caixa("synched", 0);
    this.instance_12.setTransform(587.15, 147.25, 1, 1, 0, 0, 0, 120.5, 59.2);
    this.instance_12.alpha = 0;
    this.instance_12._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_12)
        .wait(15)
        .to({ _off: false }, 0)
        .to(
          { scaleX: 1.2025, scaleY: 1.1655, y: 147.3, alpha: 1 },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          { regY: 59.3, scaleX: 1.3079, scaleY: 1.2677, y: 147.35 },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          { regY: 59.4, scaleX: 1.2677, scaleY: 1.2023, x: 587.2, y: 147.5 },
          3,
          cjs.Ease.quadInOut
        )
        .to({ alpha: 0 }, 26, cjs.Ease.quadInOut)
        .to({ x: 653.5, y: 306.45 }, 1, cjs.Ease.quadInOut)
        .to(
          { regY: 59.2, scaleX: 1.2675, scaleY: 1.2021, x: 653.3, y: 306.05 },
          6,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 120.8,
            regY: 59.5,
            scaleX: 1.2019,
            scaleY: 1.1649,
            x: 653.45,
            y: 306.3,
            alpha: 1,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 120.9,
            regY: 59.6,
            scaleX: 1.3079,
            scaleY: 1.2679,
            x: 653.35,
            y: 306.2,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 121,
            regY: 59.8,
            scaleX: 1.2678,
            scaleY: 1.2019,
            x: 653.4,
            y: 306.3,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          { regX: 121.2, regY: 59.9, scaleY: 1.2018, x: 653.45, alpha: 0 },
          26,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 120.5,
            regY: 59.4,
            scaleX: 1.2677,
            scaleY: 1.2023,
            x: 653.5,
            y: 306.45,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to({ x: 586.2, y: 456.65 }, 1, cjs.Ease.quadInOut)
        .to(
          { regY: 59.2, scaleX: 1.2675, scaleY: 1.2021, x: 586.05, y: 456.2 },
          5,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 120.8,
            regY: 59.5,
            scaleX: 1.2019,
            scaleY: 1.1649,
            x: 586.2,
            y: 456.45,
            alpha: 1,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 120.9,
            regY: 59.6,
            scaleX: 1.3079,
            scaleY: 1.2679,
            x: 586.1,
            y: 456.4,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 121.1,
            regY: 59.8,
            scaleX: 1.2678,
            scaleY: 1.2019,
            x: 586.3,
            y: 456.55,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 121.2,
            regY: 60,
            scaleY: 1.2018,
            x: 586.2,
            y: 456.65,
            alpha: 0,
          },
          26,
          cjs.Ease.quadInOut
        )
        .to(
          { regX: 120.5, regY: 59.4, scaleX: 1.2677, scaleY: 1.2023 },
          1,
          cjs.Ease.quadInOut
        )
        .to({ x: 199 }, 1, cjs.Ease.quadInOut)
        .to(
          {
            regX: 120.6,
            regY: 59.2,
            scaleX: 1.2675,
            scaleY: 1.2021,
            x: 198.9,
            y: 456.2,
          },
          8,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 120.8,
            regY: 59.5,
            scaleX: 1.2019,
            scaleY: 1.1649,
            x: 199.1,
            y: 456.45,
            alpha: 1,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 120.9,
            regY: 59.6,
            scaleX: 1.3079,
            scaleY: 1.2679,
            x: 199,
            y: 456.4,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 121.1,
            regY: 59.8,
            scaleX: 1.2678,
            scaleY: 1.2019,
            y: 456.55,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 121.2,
            regY: 60,
            scaleY: 1.2018,
            x: 198.95,
            y: 456.65,
            alpha: 0,
          },
          26,
          cjs.Ease.quadInOut
        )
        .to(
          { regX: 120.5, regY: 59.4, scaleX: 1.2677, scaleY: 1.2023, x: 199 },
          1,
          cjs.Ease.quadInOut
        )
        .to({ x: 142.45, y: 308.45 }, 1, cjs.Ease.quadInOut)
        .to(
          { regX: 120.3, scaleX: 1.2675, scaleY: 1.2021, x: 142.5, y: 308.2 },
          6,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 120.1,
            regY: 59.6,
            scaleX: 1.2019,
            scaleY: 1.1649,
            x: 142.55,
            y: 308.25,
            alpha: 1,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 120,
            regY: 59.7,
            scaleX: 1.3079,
            scaleY: 1.2679,
            x: 142.65,
            y: 308.2,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          { regX: 119.8, regY: 59.9, scaleX: 1.2678, scaleY: 1.2019, y: 308.3 },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          { regX: 119.7, regY: 60, scaleY: 1.2018, x: 142.7, alpha: 0 },
          26,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 120.5,
            regY: 59.4,
            scaleX: 1.2677,
            scaleY: 1.2023,
            x: 142.45,
            y: 308.45,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to({ x: 199, y: 148.5 }, 2, cjs.Ease.quadInOut)
        .to(
          { regX: 120.6, scaleX: 1.2675, scaleY: 1.2021, x: 198.9, y: 148.25 },
          12,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 120.8,
            regY: 59.6,
            scaleX: 1.2019,
            scaleY: 1.1649,
            x: 199.1,
            y: 148.3,
            alpha: 1,
          },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 120.9,
            regY: 59.7,
            scaleX: 1.3079,
            scaleY: 1.2679,
            x: 199,
            y: 148.25,
          },
          1,
          cjs.Ease.quadInOut
        )
        .to(
          { regX: 121.1, regY: 59.9, scaleX: 1.2678, scaleY: 1.2019, y: 148.3 },
          3,
          cjs.Ease.quadInOut
        )
        .to(
          {
            regX: 121.2,
            regY: 60.1,
            scaleY: 1.2018,
            x: 198.95,
            y: 148.4,
            alpha: 0,
          },
          20,
          cjs.Ease.quadInOut
        )
        .wait(1)
    );
    // seta_rosa
    this.instance_13 = new lib.seta_brilho("synched", 0);
    this.instance_13.setTransform(
      169.2,
      228.2,
      0.2366,
      0.2366,
      -48.0479,
      0,
      0,
      -38.1,
      -0.1
    );
    this.instance_13.alpha = 0;
    this.instance_14 = new lib.seta_brilho("synched", 0);
    this.instance_14.setTransform(
      181.9,
      383.35,
      0.224,
      0.224,
      -129.1109,
      0,
      0,
      -38.6,
      -0.6
    );
    this.instance_14.alpha = 0;
    this.instance_15 = new lib.seta_brilho("synched", 0);
    this.instance_15.setTransform(
      401.3,
      457.4,
      0.2366,
      0.2366,
      -179.8559,
      0,
      0,
      -38.2,
      -0.6
    );
    this.instance_15.alpha = 0;
    this.instance_16 = new lib.seta_brilho("synched", 0);
    this.instance_16.setTransform(
      635.4,
      381.35,
      0.2366,
      0.2366,
      130.6935,
      0,
      0,
      -38.3,
      -0.5
    );
    this.instance_16.alpha = 0;
    this.instance_17 = new lib.seta_brilho("synched", 0);
    this.instance_17.setTransform(
      625.65,
      231.05,
      0.2367,
      0.2367,
      50.7218,
      0,
      0,
      -38.5,
      -0.1
    );
    this.instance_17.alpha = 0;
    this.instance_18 = new lib.seta_brilho("synched", 0);
    this.instance_18.setTransform(
      399.35,
      148.15,
      0.2367,
      0.2367,
      0,
      0,
      0,
      -38.6,
      0
    );
    this.instance_18.alpha = 0;
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0, startPosition: 0 } },
              { t: this.instance_17, p: { alpha: 0, startPosition: 0 } },
              { t: this.instance_16, p: { alpha: 0, startPosition: 0 } },
              { t: this.instance_15, p: { alpha: 0, startPosition: 0 } },
              { t: this.instance_14, p: { alpha: 0, startPosition: 0 } },
              { t: this.instance_13, p: { alpha: 0, startPosition: 0 } },
            ],
          },
          15
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.4609, startPosition: 3 } },
              { t: this.instance_17, p: { alpha: 0.4609, startPosition: 3 } },
              { t: this.instance_16, p: { alpha: 0.4609, startPosition: 3 } },
              { t: this.instance_15, p: { alpha: 0.4609, startPosition: 3 } },
              { t: this.instance_14, p: { alpha: 0.4609, startPosition: 3 } },
              { t: this.instance_13, p: { alpha: 0.4609, startPosition: 3 } },
            ],
          },
          3
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 1, startPosition: 4 } },
              { t: this.instance_17, p: { alpha: 1, startPosition: 4 } },
              { t: this.instance_16, p: { alpha: 1, startPosition: 4 } },
              { t: this.instance_15, p: { alpha: 1, startPosition: 4 } },
              { t: this.instance_14, p: { alpha: 1, startPosition: 4 } },
              { t: this.instance_13, p: { alpha: 1, startPosition: 4 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.6406, startPosition: 0 } },
              { t: this.instance_17, p: { alpha: 0.6406, startPosition: 0 } },
              { t: this.instance_16, p: { alpha: 0.6406, startPosition: 0 } },
              { t: this.instance_15, p: { alpha: 0.6406, startPosition: 0 } },
              { t: this.instance_14, p: { alpha: 0.6406, startPosition: 0 } },
              { t: this.instance_13, p: { alpha: 0.6406, startPosition: 0 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.8711, startPosition: 1 } },
              { t: this.instance_17, p: { alpha: 0.8711, startPosition: 1 } },
              { t: this.instance_16, p: { alpha: 0.8711, startPosition: 1 } },
              { t: this.instance_15, p: { alpha: 0.8711, startPosition: 1 } },
              { t: this.instance_14, p: { alpha: 0.8711, startPosition: 1 } },
              { t: this.instance_13, p: { alpha: 0.8711, startPosition: 1 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 1, startPosition: 2 } },
              { t: this.instance_17, p: { alpha: 1, startPosition: 2 } },
              { t: this.instance_16, p: { alpha: 1, startPosition: 2 } },
              { t: this.instance_15, p: { alpha: 1, startPosition: 2 } },
              { t: this.instance_14, p: { alpha: 1, startPosition: 2 } },
              { t: this.instance_13, p: { alpha: 1, startPosition: 2 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.6602, startPosition: 3 } },
              { t: this.instance_17, p: { alpha: 0.6602, startPosition: 3 } },
              { t: this.instance_16, p: { alpha: 0.6602, startPosition: 3 } },
              { t: this.instance_15, p: { alpha: 0.6602, startPosition: 3 } },
              { t: this.instance_14, p: { alpha: 0.6602, startPosition: 3 } },
              { t: this.instance_13, p: { alpha: 0.6602, startPosition: 3 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.4102, startPosition: 4 } },
              { t: this.instance_17, p: { alpha: 0.4102, startPosition: 4 } },
              { t: this.instance_16, p: { alpha: 0.4102, startPosition: 4 } },
              { t: this.instance_15, p: { alpha: 0.4102, startPosition: 4 } },
              { t: this.instance_14, p: { alpha: 0.4102, startPosition: 4 } },
              { t: this.instance_13, p: { alpha: 0.4102, startPosition: 4 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.1914, startPosition: 0 } },
              { t: this.instance_17, p: { alpha: 0.1914, startPosition: 0 } },
              { t: this.instance_16, p: { alpha: 0.1914, startPosition: 0 } },
              { t: this.instance_15, p: { alpha: 0.1914, startPosition: 0 } },
              { t: this.instance_14, p: { alpha: 0.1914, startPosition: 0 } },
              { t: this.instance_13, p: { alpha: 0.1914, startPosition: 0 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0, startPosition: 1 } },
              { t: this.instance_17, p: { alpha: 0, startPosition: 1 } },
              { t: this.instance_16, p: { alpha: 0, startPosition: 1 } },
              { t: this.instance_15, p: { alpha: 0, startPosition: 1 } },
              { t: this.instance_14, p: { alpha: 0, startPosition: 1 } },
              { t: this.instance_13, p: { alpha: 0, startPosition: 1 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.5, startPosition: 3 } },
              { t: this.instance_17, p: { alpha: 0.5, startPosition: 3 } },
              { t: this.instance_16, p: { alpha: 0.5, startPosition: 3 } },
              { t: this.instance_15, p: { alpha: 0.5, startPosition: 3 } },
              { t: this.instance_14, p: { alpha: 0.5, startPosition: 3 } },
              { t: this.instance_13, p: { alpha: 0.5, startPosition: 3 } },
            ],
          },
          32
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.8008, startPosition: 4 } },
              { t: this.instance_17, p: { alpha: 0.8008, startPosition: 4 } },
              { t: this.instance_16, p: { alpha: 0.8008, startPosition: 4 } },
              { t: this.instance_15, p: { alpha: 0.8008, startPosition: 4 } },
              { t: this.instance_14, p: { alpha: 0.8008, startPosition: 4 } },
              { t: this.instance_13, p: { alpha: 0.8008, startPosition: 4 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 1, startPosition: 0 } },
              { t: this.instance_17, p: { alpha: 1, startPosition: 0 } },
              { t: this.instance_16, p: { alpha: 1, startPosition: 0 } },
              { t: this.instance_15, p: { alpha: 1, startPosition: 0 } },
              { t: this.instance_14, p: { alpha: 1, startPosition: 0 } },
              { t: this.instance_13, p: { alpha: 1, startPosition: 0 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.8594, startPosition: 1 } },
              { t: this.instance_17, p: { alpha: 0.8594, startPosition: 1 } },
              { t: this.instance_16, p: { alpha: 0.8594, startPosition: 1 } },
              { t: this.instance_15, p: { alpha: 0.8594, startPosition: 1 } },
              { t: this.instance_14, p: { alpha: 0.8594, startPosition: 1 } },
              { t: this.instance_13, p: { alpha: 0.8594, startPosition: 1 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.6602, startPosition: 2 } },
              { t: this.instance_17, p: { alpha: 0.6602, startPosition: 2 } },
              { t: this.instance_16, p: { alpha: 0.6602, startPosition: 2 } },
              { t: this.instance_15, p: { alpha: 0.6602, startPosition: 2 } },
              { t: this.instance_14, p: { alpha: 0.6602, startPosition: 2 } },
              { t: this.instance_13, p: { alpha: 0.6602, startPosition: 2 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.4492, startPosition: 3 } },
              { t: this.instance_17, p: { alpha: 0.4492, startPosition: 3 } },
              { t: this.instance_16, p: { alpha: 0.4492, startPosition: 3 } },
              { t: this.instance_15, p: { alpha: 0.4492, startPosition: 3 } },
              { t: this.instance_14, p: { alpha: 0.4492, startPosition: 3 } },
              { t: this.instance_13, p: { alpha: 0.4492, startPosition: 3 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.3086, startPosition: 4 } },
              { t: this.instance_17, p: { alpha: 0.3086, startPosition: 4 } },
              { t: this.instance_16, p: { alpha: 0.3086, startPosition: 4 } },
              { t: this.instance_15, p: { alpha: 0.3086, startPosition: 4 } },
              { t: this.instance_14, p: { alpha: 0.3086, startPosition: 4 } },
              { t: this.instance_13, p: { alpha: 0.3086, startPosition: 4 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.1289, startPosition: 0 } },
              { t: this.instance_17, p: { alpha: 0.1289, startPosition: 0 } },
              { t: this.instance_16, p: { alpha: 0.1289, startPosition: 0 } },
              { t: this.instance_15, p: { alpha: 0.1289, startPosition: 0 } },
              { t: this.instance_14, p: { alpha: 0.1289, startPosition: 0 } },
              { t: this.instance_13, p: { alpha: 0.1289, startPosition: 0 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0, startPosition: 1 } },
              { t: this.instance_17, p: { alpha: 0, startPosition: 1 } },
              { t: this.instance_16, p: { alpha: 0, startPosition: 1 } },
              { t: this.instance_15, p: { alpha: 0, startPosition: 1 } },
              { t: this.instance_14, p: { alpha: 0, startPosition: 1 } },
              { t: this.instance_13, p: { alpha: 0, startPosition: 1 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.5, startPosition: 3 } },
              { t: this.instance_17, p: { alpha: 0.5, startPosition: 3 } },
              { t: this.instance_16, p: { alpha: 0.5, startPosition: 3 } },
              { t: this.instance_15, p: { alpha: 0.5, startPosition: 3 } },
              { t: this.instance_14, p: { alpha: 0.5, startPosition: 3 } },
              { t: this.instance_13, p: { alpha: 0.5, startPosition: 3 } },
            ],
          },
          32
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.8086, startPosition: 4 } },
              { t: this.instance_17, p: { alpha: 0.8086, startPosition: 4 } },
              { t: this.instance_16, p: { alpha: 0.8086, startPosition: 4 } },
              { t: this.instance_15, p: { alpha: 0.8086, startPosition: 4 } },
              { t: this.instance_14, p: { alpha: 0.8086, startPosition: 4 } },
              { t: this.instance_13, p: { alpha: 0.8086, startPosition: 4 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 1, startPosition: 0 } },
              { t: this.instance_17, p: { alpha: 1, startPosition: 0 } },
              { t: this.instance_16, p: { alpha: 1, startPosition: 0 } },
              { t: this.instance_15, p: { alpha: 1, startPosition: 0 } },
              { t: this.instance_14, p: { alpha: 1, startPosition: 0 } },
              { t: this.instance_13, p: { alpha: 1, startPosition: 0 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.8984, startPosition: 1 } },
              { t: this.instance_17, p: { alpha: 0.8984, startPosition: 1 } },
              { t: this.instance_16, p: { alpha: 0.8984, startPosition: 1 } },
              { t: this.instance_15, p: { alpha: 0.8984, startPosition: 1 } },
              { t: this.instance_14, p: { alpha: 0.8984, startPosition: 1 } },
              { t: this.instance_13, p: { alpha: 0.8984, startPosition: 1 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.7188, startPosition: 2 } },
              { t: this.instance_17, p: { alpha: 0.7188, startPosition: 2 } },
              { t: this.instance_16, p: { alpha: 0.7188, startPosition: 2 } },
              { t: this.instance_15, p: { alpha: 0.7188, startPosition: 2 } },
              { t: this.instance_14, p: { alpha: 0.7188, startPosition: 2 } },
              { t: this.instance_13, p: { alpha: 0.7188, startPosition: 2 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.5586, startPosition: 3 } },
              { t: this.instance_17, p: { alpha: 0.5586, startPosition: 3 } },
              { t: this.instance_16, p: { alpha: 0.5586, startPosition: 3 } },
              { t: this.instance_15, p: { alpha: 0.5586, startPosition: 3 } },
              { t: this.instance_14, p: { alpha: 0.5586, startPosition: 3 } },
              { t: this.instance_13, p: { alpha: 0.5586, startPosition: 3 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.4688, startPosition: 4 } },
              { t: this.instance_17, p: { alpha: 0.4688, startPosition: 4 } },
              { t: this.instance_16, p: { alpha: 0.4688, startPosition: 4 } },
              { t: this.instance_15, p: { alpha: 0.4688, startPosition: 4 } },
              { t: this.instance_14, p: { alpha: 0.4688, startPosition: 4 } },
              { t: this.instance_13, p: { alpha: 0.4688, startPosition: 4 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.2813, startPosition: 0 } },
              { t: this.instance_17, p: { alpha: 0.2813, startPosition: 0 } },
              { t: this.instance_16, p: { alpha: 0.2813, startPosition: 0 } },
              { t: this.instance_15, p: { alpha: 0.2813, startPosition: 0 } },
              { t: this.instance_14, p: { alpha: 0.2813, startPosition: 0 } },
              { t: this.instance_13, p: { alpha: 0.2813, startPosition: 0 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.1289, startPosition: 1 } },
              { t: this.instance_17, p: { alpha: 0.1289, startPosition: 1 } },
              { t: this.instance_16, p: { alpha: 0.1289, startPosition: 1 } },
              { t: this.instance_15, p: { alpha: 0.1289, startPosition: 1 } },
              { t: this.instance_14, p: { alpha: 0.1289, startPosition: 1 } },
              { t: this.instance_13, p: { alpha: 0.1289, startPosition: 1 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0, startPosition: 2 } },
              { t: this.instance_17, p: { alpha: 0, startPosition: 2 } },
              { t: this.instance_16, p: { alpha: 0, startPosition: 2 } },
              { t: this.instance_15, p: { alpha: 0, startPosition: 2 } },
              { t: this.instance_14, p: { alpha: 0, startPosition: 2 } },
              { t: this.instance_13, p: { alpha: 0, startPosition: 2 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.5, startPosition: 1 } },
              { t: this.instance_17, p: { alpha: 0.5, startPosition: 1 } },
              { t: this.instance_16, p: { alpha: 0.5, startPosition: 1 } },
              { t: this.instance_15, p: { alpha: 0.5, startPosition: 1 } },
              { t: this.instance_14, p: { alpha: 0.5, startPosition: 1 } },
              { t: this.instance_13, p: { alpha: 0.5, startPosition: 1 } },
            ],
          },
          34
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.8086, startPosition: 2 } },
              { t: this.instance_17, p: { alpha: 0.8086, startPosition: 2 } },
              { t: this.instance_16, p: { alpha: 0.8086, startPosition: 2 } },
              { t: this.instance_15, p: { alpha: 0.8086, startPosition: 2 } },
              { t: this.instance_14, p: { alpha: 0.8086, startPosition: 2 } },
              { t: this.instance_13, p: { alpha: 0.8086, startPosition: 2 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 1, startPosition: 3 } },
              { t: this.instance_17, p: { alpha: 1, startPosition: 3 } },
              { t: this.instance_16, p: { alpha: 1, startPosition: 3 } },
              { t: this.instance_15, p: { alpha: 1, startPosition: 3 } },
              { t: this.instance_14, p: { alpha: 1, startPosition: 3 } },
              { t: this.instance_13, p: { alpha: 1, startPosition: 3 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.8984, startPosition: 4 } },
              { t: this.instance_17, p: { alpha: 0.8984, startPosition: 4 } },
              { t: this.instance_16, p: { alpha: 0.8984, startPosition: 4 } },
              { t: this.instance_15, p: { alpha: 0.8984, startPosition: 4 } },
              { t: this.instance_14, p: { alpha: 0.8984, startPosition: 4 } },
              { t: this.instance_13, p: { alpha: 0.8984, startPosition: 4 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.7305, startPosition: 0 } },
              { t: this.instance_17, p: { alpha: 0.7305, startPosition: 0 } },
              { t: this.instance_16, p: { alpha: 0.7305, startPosition: 0 } },
              { t: this.instance_15, p: { alpha: 0.7305, startPosition: 0 } },
              { t: this.instance_14, p: { alpha: 0.7305, startPosition: 0 } },
              { t: this.instance_13, p: { alpha: 0.7305, startPosition: 0 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.5703, startPosition: 1 } },
              { t: this.instance_17, p: { alpha: 0.5703, startPosition: 1 } },
              { t: this.instance_16, p: { alpha: 0.5703, startPosition: 1 } },
              { t: this.instance_15, p: { alpha: 0.5703, startPosition: 1 } },
              { t: this.instance_14, p: { alpha: 0.5703, startPosition: 1 } },
              { t: this.instance_13, p: { alpha: 0.5703, startPosition: 1 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.3516, startPosition: 2 } },
              { t: this.instance_17, p: { alpha: 0.3516, startPosition: 2 } },
              { t: this.instance_16, p: { alpha: 0.3516, startPosition: 2 } },
              { t: this.instance_15, p: { alpha: 0.3516, startPosition: 2 } },
              { t: this.instance_14, p: { alpha: 0.3516, startPosition: 2 } },
              { t: this.instance_13, p: { alpha: 0.3516, startPosition: 2 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.1719, startPosition: 3 } },
              { t: this.instance_17, p: { alpha: 0.1719, startPosition: 3 } },
              { t: this.instance_16, p: { alpha: 0.1719, startPosition: 3 } },
              { t: this.instance_15, p: { alpha: 0.1719, startPosition: 3 } },
              { t: this.instance_14, p: { alpha: 0.1719, startPosition: 3 } },
              { t: this.instance_13, p: { alpha: 0.1719, startPosition: 3 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0, startPosition: 4 } },
              { t: this.instance_17, p: { alpha: 0, startPosition: 4 } },
              { t: this.instance_16, p: { alpha: 0, startPosition: 4 } },
              { t: this.instance_15, p: { alpha: 0, startPosition: 4 } },
              { t: this.instance_14, p: { alpha: 0, startPosition: 4 } },
              { t: this.instance_13, p: { alpha: 0, startPosition: 4 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.5, startPosition: 2 } },
              { t: this.instance_17, p: { alpha: 0.5, startPosition: 2 } },
              { t: this.instance_16, p: { alpha: 0.5, startPosition: 2 } },
              { t: this.instance_15, p: { alpha: 0.5, startPosition: 2 } },
              { t: this.instance_14, p: { alpha: 0.5, startPosition: 2 } },
              { t: this.instance_13, p: { alpha: 0.5, startPosition: 2 } },
            ],
          },
          33
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.8086, startPosition: 3 } },
              { t: this.instance_17, p: { alpha: 0.8086, startPosition: 3 } },
              { t: this.instance_16, p: { alpha: 0.8086, startPosition: 3 } },
              { t: this.instance_15, p: { alpha: 0.8086, startPosition: 3 } },
              { t: this.instance_14, p: { alpha: 0.8086, startPosition: 3 } },
              { t: this.instance_13, p: { alpha: 0.8086, startPosition: 3 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 1, startPosition: 4 } },
              { t: this.instance_17, p: { alpha: 1, startPosition: 4 } },
              { t: this.instance_16, p: { alpha: 1, startPosition: 4 } },
              { t: this.instance_15, p: { alpha: 1, startPosition: 4 } },
              { t: this.instance_14, p: { alpha: 1, startPosition: 4 } },
              { t: this.instance_13, p: { alpha: 1, startPosition: 4 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.8789, startPosition: 0 } },
              { t: this.instance_17, p: { alpha: 0.8789, startPosition: 0 } },
              { t: this.instance_16, p: { alpha: 0.8789, startPosition: 0 } },
              { t: this.instance_15, p: { alpha: 0.8789, startPosition: 0 } },
              { t: this.instance_14, p: { alpha: 0.8789, startPosition: 0 } },
              { t: this.instance_13, p: { alpha: 0.8789, startPosition: 0 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.7109, startPosition: 1 } },
              { t: this.instance_17, p: { alpha: 0.7109, startPosition: 1 } },
              { t: this.instance_16, p: { alpha: 0.7109, startPosition: 1 } },
              { t: this.instance_15, p: { alpha: 0.7109, startPosition: 1 } },
              { t: this.instance_14, p: { alpha: 0.7109, startPosition: 1 } },
              { t: this.instance_13, p: { alpha: 0.7109, startPosition: 1 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.5195, startPosition: 2 } },
              { t: this.instance_17, p: { alpha: 0.5195, startPosition: 2 } },
              { t: this.instance_16, p: { alpha: 0.5195, startPosition: 2 } },
              { t: this.instance_15, p: { alpha: 0.5195, startPosition: 2 } },
              { t: this.instance_14, p: { alpha: 0.5195, startPosition: 2 } },
              { t: this.instance_13, p: { alpha: 0.5195, startPosition: 2 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.3789, startPosition: 3 } },
              { t: this.instance_17, p: { alpha: 0.3789, startPosition: 3 } },
              { t: this.instance_16, p: { alpha: 0.3789, startPosition: 3 } },
              { t: this.instance_15, p: { alpha: 0.3789, startPosition: 3 } },
              { t: this.instance_14, p: { alpha: 0.3789, startPosition: 3 } },
              { t: this.instance_13, p: { alpha: 0.3789, startPosition: 3 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.1719, startPosition: 4 } },
              { t: this.instance_17, p: { alpha: 0.1719, startPosition: 4 } },
              { t: this.instance_16, p: { alpha: 0.1719, startPosition: 4 } },
              { t: this.instance_15, p: { alpha: 0.1719, startPosition: 4 } },
              { t: this.instance_14, p: { alpha: 0.1719, startPosition: 4 } },
              { t: this.instance_13, p: { alpha: 0.1719, startPosition: 4 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0, startPosition: 0 } },
              { t: this.instance_17, p: { alpha: 0, startPosition: 0 } },
              { t: this.instance_16, p: { alpha: 0, startPosition: 0 } },
              { t: this.instance_15, p: { alpha: 0, startPosition: 0 } },
              { t: this.instance_14, p: { alpha: 0, startPosition: 0 } },
              { t: this.instance_13, p: { alpha: 0, startPosition: 0 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.5, startPosition: 0 } },
              { t: this.instance_17, p: { alpha: 0.5, startPosition: 0 } },
              { t: this.instance_16, p: { alpha: 0.5, startPosition: 0 } },
              { t: this.instance_15, p: { alpha: 0.5, startPosition: 0 } },
              { t: this.instance_14, p: { alpha: 0.5, startPosition: 0 } },
              { t: this.instance_13, p: { alpha: 0.5, startPosition: 0 } },
            ],
          },
          40
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.8008, startPosition: 1 } },
              { t: this.instance_17, p: { alpha: 0.8008, startPosition: 1 } },
              { t: this.instance_16, p: { alpha: 0.8008, startPosition: 1 } },
              { t: this.instance_15, p: { alpha: 0.8008, startPosition: 1 } },
              { t: this.instance_14, p: { alpha: 0.8008, startPosition: 1 } },
              { t: this.instance_13, p: { alpha: 0.8008, startPosition: 1 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 1, startPosition: 2 } },
              { t: this.instance_17, p: { alpha: 1, startPosition: 2 } },
              { t: this.instance_16, p: { alpha: 1, startPosition: 2 } },
              { t: this.instance_15, p: { alpha: 1, startPosition: 2 } },
              { t: this.instance_14, p: { alpha: 1, startPosition: 2 } },
              { t: this.instance_13, p: { alpha: 1, startPosition: 2 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.8711, startPosition: 3 } },
              { t: this.instance_17, p: { alpha: 0.8711, startPosition: 3 } },
              { t: this.instance_16, p: { alpha: 0.8711, startPosition: 3 } },
              { t: this.instance_15, p: { alpha: 0.8711, startPosition: 3 } },
              { t: this.instance_14, p: { alpha: 0.8711, startPosition: 3 } },
              { t: this.instance_13, p: { alpha: 0.8711, startPosition: 3 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.6914, startPosition: 4 } },
              { t: this.instance_17, p: { alpha: 0.6914, startPosition: 4 } },
              { t: this.instance_16, p: { alpha: 0.6914, startPosition: 4 } },
              { t: this.instance_15, p: { alpha: 0.6914, startPosition: 4 } },
              { t: this.instance_14, p: { alpha: 0.6914, startPosition: 4 } },
              { t: this.instance_13, p: { alpha: 0.6914, startPosition: 4 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.5117, startPosition: 0 } },
              { t: this.instance_17, p: { alpha: 0.5117, startPosition: 0 } },
              { t: this.instance_16, p: { alpha: 0.5117, startPosition: 0 } },
              { t: this.instance_15, p: { alpha: 0.5117, startPosition: 0 } },
              { t: this.instance_14, p: { alpha: 0.5117, startPosition: 0 } },
              { t: this.instance_13, p: { alpha: 0.5117, startPosition: 0 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.3086, startPosition: 1 } },
              { t: this.instance_17, p: { alpha: 0.3086, startPosition: 1 } },
              { t: this.instance_16, p: { alpha: 0.3086, startPosition: 1 } },
              { t: this.instance_15, p: { alpha: 0.3086, startPosition: 1 } },
              { t: this.instance_14, p: { alpha: 0.3086, startPosition: 1 } },
              { t: this.instance_13, p: { alpha: 0.3086, startPosition: 1 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0.1484, startPosition: 2 } },
              { t: this.instance_17, p: { alpha: 0.1484, startPosition: 2 } },
              { t: this.instance_16, p: { alpha: 0.1484, startPosition: 2 } },
              { t: this.instance_15, p: { alpha: 0.1484, startPosition: 2 } },
              { t: this.instance_14, p: { alpha: 0.1484, startPosition: 2 } },
              { t: this.instance_13, p: { alpha: 0.1484, startPosition: 2 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_18, p: { alpha: 0, startPosition: 3 } },
              { t: this.instance_17, p: { alpha: 0, startPosition: 3 } },
              { t: this.instance_16, p: { alpha: 0, startPosition: 3 } },
              { t: this.instance_15, p: { alpha: 0, startPosition: 3 } },
              { t: this.instance_14, p: { alpha: 0, startPosition: 3 } },
              { t: this.instance_13, p: { alpha: 0, startPosition: 3 } },
            ],
          },
          1
        )
        .wait(17)
    );
    // seta_branca
    this.instance_19 = new lib.seta_brilho2("synched", 0);
    this.instance_19.setTransform(
      169.05,
      228.3,
      0.2366,
      0.2366,
      -48.0479,
      0,
      0,
      -38.1,
      -0.1
    );
    this.instance_19.alpha = 0;
    this.instance_20 = new lib.seta_brilho2("synched", 0);
    this.instance_20.setTransform(
      181.75,
      383.45,
      0.224,
      0.224,
      -129.1109,
      0,
      0,
      -38.6,
      -0.6
    );
    this.instance_20.alpha = 0;
    this.instance_21 = new lib.seta_brilho2("synched", 0);
    this.instance_21.setTransform(
      401.15,
      457.5,
      0.2366,
      0.2366,
      -179.8559,
      0,
      0,
      -38.2,
      -0.6
    );
    this.instance_21.alpha = 0;
    this.instance_22 = new lib.seta_brilho2("synched", 0);
    this.instance_22.setTransform(
      635.25,
      381.45,
      0.2366,
      0.2366,
      130.6935,
      0,
      0,
      -38.3,
      -0.5
    );
    this.instance_22.alpha = 0;
    this.instance_23 = new lib.seta_brilho2("synched", 0);
    this.instance_23.setTransform(
      625.5,
      231.15,
      0.2367,
      0.2367,
      50.7218,
      0,
      0,
      -38.5,
      -0.1
    );
    this.instance_23.alpha = 0;
    this.instance_24 = new lib.seta_brilho2("synched", 0);
    this.instance_24.setTransform(
      399.2,
      148.25,
      0.2367,
      0.2367,
      0,
      0,
      0,
      -38.6,
      0
    );
    this.instance_24.alpha = 0;
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.instance_24, p: { alpha: 0, startPosition: 0 } },
            { t: this.instance_23, p: { alpha: 0, startPosition: 0 } },
            { t: this.instance_22, p: { alpha: 0, startPosition: 0 } },
            { t: this.instance_21, p: { alpha: 0, startPosition: 0 } },
            { t: this.instance_20, p: { alpha: 0, startPosition: 0 } },
            { t: this.instance_19, p: { alpha: 0, startPosition: 0 } },
          ],
        })
        .to(
          {
            state: [
              { t: this.instance_24, p: { alpha: 0.1914, startPosition: 3 } },
              { t: this.instance_23, p: { alpha: 0.1914, startPosition: 3 } },
              { t: this.instance_22, p: { alpha: 0.1914, startPosition: 3 } },
              { t: this.instance_21, p: { alpha: 0.1914, startPosition: 3 } },
              { t: this.instance_20, p: { alpha: 0.1914, startPosition: 3 } },
              { t: this.instance_19, p: { alpha: 0.3008, startPosition: 3 } },
            ],
          },
          13
        )
        .to(
          {
            state: [
              { t: this.instance_24, p: { alpha: 0.7695, startPosition: 4 } },
              { t: this.instance_23, p: { alpha: 0.7695, startPosition: 4 } },
              { t: this.instance_22, p: { alpha: 0.7695, startPosition: 4 } },
              { t: this.instance_21, p: { alpha: 0.7695, startPosition: 4 } },
              { t: this.instance_20, p: { alpha: 0.7695, startPosition: 4 } },
              { t: this.instance_19, p: { alpha: 0.7695, startPosition: 4 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_24, p: { alpha: 1, startPosition: 0 } },
              { t: this.instance_23, p: { alpha: 1, startPosition: 0 } },
              { t: this.instance_22, p: { alpha: 1, startPosition: 0 } },
              { t: this.instance_21, p: { alpha: 1, startPosition: 0 } },
              { t: this.instance_20, p: { alpha: 1, startPosition: 0 } },
              { t: this.instance_19, p: { alpha: 1, startPosition: 0 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_24, p: { alpha: 0, startPosition: 2 } },
              { t: this.instance_23, p: { alpha: 0, startPosition: 2 } },
              { t: this.instance_22, p: { alpha: 0, startPosition: 2 } },
              { t: this.instance_21, p: { alpha: 0, startPosition: 2 } },
              { t: this.instance_20, p: { alpha: 0, startPosition: 2 } },
              { t: this.instance_19, p: { alpha: 0, startPosition: 2 } },
            ],
          },
          7
        )
        .to(
          {
            state: [
              { t: this.instance_24, p: { alpha: 0.2109, startPosition: 3 } },
              { t: this.instance_23, p: { alpha: 0.2109, startPosition: 3 } },
              { t: this.instance_22, p: { alpha: 0.2109, startPosition: 3 } },
              { t: this.instance_21, p: { alpha: 0.2109, startPosition: 3 } },
              { t: this.instance_20, p: { alpha: 0.2109, startPosition: 3 } },
              { t: this.instance_19, p: { alpha: 0.2109, startPosition: 3 } },
            ],
          },
          31
        )
        .to(
          {
            state: [
              { t: this.instance_24, p: { alpha: 0.6992, startPosition: 4 } },
              { t: this.instance_23, p: { alpha: 0.6992, startPosition: 4 } },
              { t: this.instance_22, p: { alpha: 0.6992, startPosition: 4 } },
              { t: this.instance_21, p: { alpha: 0.6992, startPosition: 4 } },
              { t: this.instance_20, p: { alpha: 0.6992, startPosition: 4 } },
              { t: this.instance_19, p: { alpha: 0.6992, startPosition: 4 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_24, p: { alpha: 1, startPosition: 0 } },
              { t: this.instance_23, p: { alpha: 1, startPosition: 0 } },
              { t: this.instance_22, p: { alpha: 1, startPosition: 0 } },
              { t: this.instance_21, p: { alpha: 1, startPosition: 0 } },
              { t: this.instance_20, p: { alpha: 1, startPosition: 0 } },
              { t: this.instance_19, p: { alpha: 1, startPosition: 0 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_24, p: { alpha: 0, startPosition: 2 } },
              { t: this.instance_23, p: { alpha: 0, startPosition: 2 } },
              { t: this.instance_22, p: { alpha: 0, startPosition: 2 } },
              { t: this.instance_21, p: { alpha: 0, startPosition: 2 } },
              { t: this.instance_20, p: { alpha: 0, startPosition: 2 } },
              { t: this.instance_19, p: { alpha: 0, startPosition: 2 } },
            ],
          },
          7
        )
        .to(
          {
            state: [
              { t: this.instance_24, p: { alpha: 0.6094, startPosition: 3 } },
              { t: this.instance_23, p: { alpha: 0.6094, startPosition: 3 } },
              { t: this.instance_22, p: { alpha: 0.6094, startPosition: 3 } },
              { t: this.instance_21, p: { alpha: 0.6094, startPosition: 3 } },
              { t: this.instance_20, p: { alpha: 0.6094, startPosition: 3 } },
              { t: this.instance_19, p: { alpha: 0.6094, startPosition: 3 } },
            ],
          },
          31
        )
        .to(
          {
            state: [
              { t: this.instance_24, p: { alpha: 0.8203, startPosition: 4 } },
              { t: this.instance_23, p: { alpha: 0.8203, startPosition: 4 } },
              { t: this.instance_22, p: { alpha: 0.8203, startPosition: 4 } },
              { t: this.instance_21, p: { alpha: 0.8203, startPosition: 4 } },
              { t: this.instance_20, p: { alpha: 0.8203, startPosition: 4 } },
              { t: this.instance_19, p: { alpha: 0.8203, startPosition: 4 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_24, p: { alpha: 1, startPosition: 0 } },
              { t: this.instance_23, p: { alpha: 1, startPosition: 0 } },
              { t: this.instance_22, p: { alpha: 1, startPosition: 0 } },
              { t: this.instance_21, p: { alpha: 1, startPosition: 0 } },
              { t: this.instance_20, p: { alpha: 1, startPosition: 0 } },
              { t: this.instance_19, p: { alpha: 1, startPosition: 0 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_24, p: { alpha: 0, startPosition: 2 } },
              { t: this.instance_23, p: { alpha: 0, startPosition: 2 } },
              { t: this.instance_22, p: { alpha: 0, startPosition: 2 } },
              { t: this.instance_21, p: { alpha: 0, startPosition: 2 } },
              { t: this.instance_20, p: { alpha: 0, startPosition: 2 } },
              { t: this.instance_19, p: { alpha: 0, startPosition: 2 } },
            ],
          },
          7
        )
        .to(
          {
            state: [
              { t: this.instance_24, p: { alpha: 0.6211, startPosition: 1 } },
              { t: this.instance_23, p: { alpha: 0.6211, startPosition: 1 } },
              { t: this.instance_22, p: { alpha: 0.6211, startPosition: 1 } },
              { t: this.instance_21, p: { alpha: 0.6211, startPosition: 1 } },
              { t: this.instance_20, p: { alpha: 0.6211, startPosition: 1 } },
              { t: this.instance_19, p: { alpha: 0.6211, startPosition: 1 } },
            ],
          },
          34
        )
        .to(
          {
            state: [
              { t: this.instance_24, p: { alpha: 0.9219, startPosition: 2 } },
              { t: this.instance_23, p: { alpha: 0.9219, startPosition: 2 } },
              { t: this.instance_22, p: { alpha: 0.9219, startPosition: 2 } },
              { t: this.instance_21, p: { alpha: 0.9219, startPosition: 2 } },
              { t: this.instance_20, p: { alpha: 0.9219, startPosition: 2 } },
              { t: this.instance_19, p: { alpha: 0.9219, startPosition: 2 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_24, p: { alpha: 1, startPosition: 3 } },
              { t: this.instance_23, p: { alpha: 1, startPosition: 3 } },
              { t: this.instance_22, p: { alpha: 1, startPosition: 3 } },
              { t: this.instance_21, p: { alpha: 1, startPosition: 3 } },
              { t: this.instance_20, p: { alpha: 1, startPosition: 3 } },
              { t: this.instance_19, p: { alpha: 1, startPosition: 3 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_24, p: { alpha: 0, startPosition: 0 } },
              { t: this.instance_23, p: { alpha: 0, startPosition: 0 } },
              { t: this.instance_22, p: { alpha: 0, startPosition: 0 } },
              { t: this.instance_21, p: { alpha: 0, startPosition: 0 } },
              { t: this.instance_20, p: { alpha: 0, startPosition: 0 } },
              { t: this.instance_19, p: { alpha: 0, startPosition: 0 } },
            ],
          },
          7
        )
        .to(
          {
            state: [
              { t: this.instance_24, p: { alpha: 0.6016, startPosition: 2 } },
              { t: this.instance_23, p: { alpha: 0.6016, startPosition: 2 } },
              { t: this.instance_22, p: { alpha: 0.6016, startPosition: 2 } },
              { t: this.instance_21, p: { alpha: 0.6016, startPosition: 2 } },
              { t: this.instance_20, p: { alpha: 0.6016, startPosition: 2 } },
              { t: this.instance_19, p: { alpha: 0.6016, startPosition: 2 } },
            ],
          },
          32
        )
        .to(
          {
            state: [
              { t: this.instance_24, p: { alpha: 0.8008, startPosition: 3 } },
              { t: this.instance_23, p: { alpha: 0.8008, startPosition: 3 } },
              { t: this.instance_22, p: { alpha: 0.8008, startPosition: 3 } },
              { t: this.instance_21, p: { alpha: 0.8008, startPosition: 3 } },
              { t: this.instance_20, p: { alpha: 0.8008, startPosition: 3 } },
              { t: this.instance_19, p: { alpha: 0.8008, startPosition: 3 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_24, p: { alpha: 1, startPosition: 4 } },
              { t: this.instance_23, p: { alpha: 1, startPosition: 4 } },
              { t: this.instance_22, p: { alpha: 1, startPosition: 4 } },
              { t: this.instance_21, p: { alpha: 1, startPosition: 4 } },
              { t: this.instance_20, p: { alpha: 1, startPosition: 4 } },
              { t: this.instance_19, p: { alpha: 1, startPosition: 4 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_24, p: { alpha: 0, startPosition: 1 } },
              { t: this.instance_23, p: { alpha: 0, startPosition: 1 } },
              { t: this.instance_22, p: { alpha: 0, startPosition: 1 } },
              { t: this.instance_21, p: { alpha: 0, startPosition: 1 } },
              { t: this.instance_20, p: { alpha: 0, startPosition: 1 } },
              { t: this.instance_19, p: { alpha: 0, startPosition: 1 } },
            ],
          },
          7
        )
        .to(
          {
            state: [
              { t: this.instance_24, p: { alpha: 0.6016, startPosition: 0 } },
              { t: this.instance_23, p: { alpha: 0.6016, startPosition: 0 } },
              { t: this.instance_22, p: { alpha: 0.6016, startPosition: 0 } },
              { t: this.instance_21, p: { alpha: 0.6016, startPosition: 0 } },
              { t: this.instance_20, p: { alpha: 0.6016, startPosition: 0 } },
              { t: this.instance_19, p: { alpha: 0.6016, startPosition: 0 } },
            ],
          },
          39
        )
        .to(
          {
            state: [
              { t: this.instance_24, p: { alpha: 0.8008, startPosition: 1 } },
              { t: this.instance_23, p: { alpha: 0.8008, startPosition: 1 } },
              { t: this.instance_22, p: { alpha: 0.8008, startPosition: 1 } },
              { t: this.instance_21, p: { alpha: 0.8008, startPosition: 1 } },
              { t: this.instance_20, p: { alpha: 0.8008, startPosition: 1 } },
              { t: this.instance_19, p: { alpha: 0.8008, startPosition: 1 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_24, p: { alpha: 1, startPosition: 2 } },
              { t: this.instance_23, p: { alpha: 1, startPosition: 2 } },
              { t: this.instance_22, p: { alpha: 1, startPosition: 2 } },
              { t: this.instance_21, p: { alpha: 1, startPosition: 2 } },
              { t: this.instance_20, p: { alpha: 1, startPosition: 2 } },
              { t: this.instance_19, p: { alpha: 1, startPosition: 2 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.instance_24, p: { alpha: 0, startPosition: 4 } },
              { t: this.instance_23, p: { alpha: 0, startPosition: 4 } },
              { t: this.instance_22, p: { alpha: 0, startPosition: 4 } },
              { t: this.instance_21, p: { alpha: 0, startPosition: 4 } },
              { t: this.instance_20, p: { alpha: 0, startPosition: 4 } },
              { t: this.instance_19, p: { alpha: 0, startPosition: 4 } },
            ],
          },
          7
        )
        .wait(21)
    );
    // arrows
    this.instance_25 = new lib.arrows("synched", 4);
    this.instance_25.setTransform(
      408.7,
      457.65,
      0.2346,
      0.2346,
      0,
      0,
      180,
      -100.6,
      0
    );
    this.instance_26 = new lib.arrows("synched", 4);
    this.instance_26.setTransform(
      640,
      375.1,
      0.2346,
      0.2346,
      0,
      -51.4665,
      128.5335,
      -100.4,
      0.1
    );
    this.instance_27 = new lib.arrows("synched", 4);
    this.instance_27.setTransform(
      186.35,
      388.9,
      0.2346,
      0.2346,
      -128.5335,
      0,
      0,
      -100.4,
      0.1
    );
    this.instance_28 = new lib.arrows("synched", 4);
    this.instance_28.setTransform(
      164.3,
      233.9,
      0.2346,
      0.2346,
      0,
      128.5335,
      -51.4665,
      -100.4,
      0.1
    );
    this.instance_29 = new lib.arrows("synched", 4);
    this.instance_29.setTransform(
      621,
      225.45,
      0.2346,
      0.2346,
      51.4665,
      0,
      0,
      -100.4,
      0.1
    );
    this.instance_30 = new lib.arrows("synched", 4);
    this.instance_30.setTransform(
      391.9,
      148.4,
      0.2346,
      0.2346,
      0,
      0,
      0,
      -100.6,
      0
    );
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.instance_30 },
            { t: this.instance_29 },
            { t: this.instance_28 },
            { t: this.instance_27 },
            { t: this.instance_26 },
            { t: this.instance_25 },
          ],
        })
        .wait(255)
    );
    // background
    this.instance_31 = new lib.fundo();
    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 0, 0);
  // library properties:
  lib.properties = {
    id: "5EEE019FF2060B40941A9CF2938A1CC9",
    width: 800,
    height: 600,
    fps: 24,
    manifest: [
      {
        src: "https://uploads-ssl.webflow.com/6581c8334ad79a7e19192c7e/65a91b73ff230bd1f7d333cc_Blur.png",
        id: "Blur",
      },
      {
        src: "https://uploads-ssl.webflow.com/6581c8334ad79a7e19192c7e/65a91b7798290e45b00296ae_brilho_branco.png",
        id: "brilho_branco",
      },
      {
        src: "https://uploads-ssl.webflow.com/6581c8334ad79a7e19192c7e/65a91b52e9cb6d99dee26590_fundo.png",
        id: "fundo",
      },
      {
        src: "https://uploads-ssl.webflow.com/6581c8334ad79a7e19192c7e/65a91af39112b74d0995c439_head_front.png",
        id: "head_front",
      },
      {
        src: "https://uploads-ssl.webflow.com/6581c8334ad79a7e19192c7e/65a91b2cf9ee88ede5c15ed8_left_head.png",
        id: "left_head",
      },
    ],
    preloads: [],
  };
  // bootstrap callback support:
  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();
  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };
  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };
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
  an.compositions["5EEE019FF2060B40941A9CF2938A1CC9"] = {
    getStage: function () {
      return exportRoot.stage;
    },
    getLibrary: function () {
      return lib;
    },
    getSpriteSheet: function () {
      return ss;
    },
    getImages: function () {
      return img;
    },
  };
  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };
  an.getComposition = function (id) {
    return an.compositions[id];
  };
  an.makeResponsive = function (
    isResp,
    respDim,
    isScale,
    scaleType,
    domContainers
  ) {
    var lastW,
      lastH,
      lastS = 1;
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    function resizeCanvas() {
      var w = lib.properties.width,
        h = lib.properties.height / 1.2;
      var iw = window.innerWidth,
        ih = window.innerHeight;
      var pRatio = window.devicePixelRatio,
        xRatio = iw / w,
        yRatio = ih / h,
        sRatio = 1;
      if (isResp) {
        sRatio = lastS;
      } else if (!isScale) {
        if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
      } else if (scaleType == 1) {
        sRatio = Math.min(xRatio, yRatio);
      } else if (scaleType == 2) {
        sRatio = Math.max(xRatio, yRatio);
      }
      domContainers[0].width = w * pRatio * sRatio;
      domContainers[0].height = h * pRatio * sRatio;
      domContainers.forEach(function (container) {});
      stage.scaleX = pRatio * sRatio;
      stage.scaleY = pRatio * sRatio;
      lastW = iw;
      lastH = ih;
      lastS = sRatio;
      stage.tickOnUpdate = false;
      stage.update();
      stage.tickOnUpdate = true;
    }
  };
  an.handleSoundStreamOnTick = function (event) {
    if (!event.paused) {
      var stageChild = stage.getChildAt(0);
      if (!stageChild.paused || stageChild.ignorePause) {
        stageChild.syncStreamSounds();
      }
    }
  };
  an.handleFilterCache = function (event) {
    if (!event.paused) {
      var target = event.target;
      if (target) {
        if (target.filterCacheList) {
          for (var index = 0; index < target.filterCacheList.length; index++) {
            var cacheInst = target.filterCacheList[index];
            if (
              cacheInst.startFrame <= target.currentFrame &&
              target.currentFrame <= cacheInst.endFrame
            ) {
              cacheInst.instance.cache(
                cacheInst.x,
                cacheInst.y,
                cacheInst.w,
                cacheInst.h
              );
            }
          }
        }
      }
    }
  };
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;
var canvas, stage, exportRoot, fnStartAnimation;
function init() {
  canvas = document.getElementById("canvas");
  var comp = AdobeAn.getComposition("5EEE019FF2060B40941A9CF2938A1CC9");
  var lib = comp.getLibrary();
  var loader = new createjs.LoadQueue(false);
  loader.addEventListener("fileload", function (evt) {
    handleFileLoad(evt, comp);
  });
  loader.addEventListener("complete", function (evt) {
    handleComplete(evt, comp);
  });
  var lib = comp.getLibrary();
  loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
  var images = comp.getImages();
  if (evt && evt.item.type == "image") {
    images[evt.item.id] = evt.result;
  }
}
function handleComplete(evt, comp) {
  //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
  var lib = comp.getLibrary();
  var ss = comp.getSpriteSheet();
  var queue = evt.target;
  var ssMetadata = lib.ssMetadata;
  for (i = 0; i < ssMetadata.length; i++) {
    ss[ssMetadata[i].name] = new createjs.SpriteSheet({
      images: [queue.getResult(ssMetadata[i].name)],
      frames: ssMetadata[i].frames,
    });
  }
  exportRoot = new lib.flywheel_v031();
  stage = new lib.Stage(canvas);
  //Registers the "tick" event listener.
  fnStartAnimation = function () {
    stage.addChild(exportRoot);
    createjs.Ticker.framerate = lib.properties.fps;
    createjs.Ticker.addEventListener("tick", stage);
  };
  //Code to support hidpi screens and responsive scaling.
  AdobeAn.makeResponsive(false, "both", false, 1, [canvas]);
  AdobeAn.compositionLoaded(lib.properties.id);
  fnStartAnimation();
}
