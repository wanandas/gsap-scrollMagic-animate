const updatePercentage = () => {
  tl.progress();
  console.log(tl.progress());
};

var tl = new TimelineMax({ onUpdate: updatePercentage });
var tl2 = new TimelineMax();

const controller = new ScrollMagic.Controller();

tl.from("#office", 1, { x: -200, opacity: 0 }, "=-.1");
tl.from("#building", 1, { x: 200, opacity: 0 }, "=-.7");

tl2.from("blockquote", 1, { x: 200, opacity: 0 });
tl2.from("span", 1, { width: 0 }, "=-.5");

const scene = new ScrollMagic.Scene({
  triggerElement: ".sticky",
  triggerHook: "onLeave",
  duration: "100%"
})
  .setPin(".sticky")
  .setTween(tl)
  .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: "blockquote",
  reverse: true
})
  .setTween(tl2)
  .addTo(controller);
