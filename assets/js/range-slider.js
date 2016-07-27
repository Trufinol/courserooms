$(function() {
  $("#price-range").ionRangeSlider({
    type: "double",
    force_edges: true,
    max_postfix: "+",
    min: 20,
    max: 199,
    from: 35,
    to: 180,
    prefix: "$"
  });
});
