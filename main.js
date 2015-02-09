paper.install(window);

window.onload = function() {

  paper.setup('paper');

  var links = [
    {
      name: "Social",
      color: "#000",
      nodes: [
        {
          href: "#",
          image: "http://placekitten.com/250/250"
        }
      ]
    }
  ];

  function createNode(posX, posY, parent) {
    var fromPos = view.center;
    var size = 150;

    // if (typeof parent !== 'undefined') {
    //   posX += parent.x;
    //   posY += parent.y;
    //   fromPos = [parent.x, parent.y];
    // }

    var raster = new Raster({
      source: 'http://placeimg.com/'+size+'/'+size+'/animals',
      position: [posX, posY]
    });

    var shape = new Shape.Circle({
      position: [posX, posY],
      radius: size / 2
    });

    var group = new Group(shape, raster).clipped = true;

    var path = new Path.Line({
      from: fromPos,
      to: [posX, posY],
      strokeColor: 'black',
      strokeWidth: 5
    });

    path.sendToBack();

    console.log(raster)

    return group;
  }

  var raster = new Raster({
      source: 'http://placeimg.com/150/150/animals',
      position: view.center
  });

  var shape = new Shape.Circle({
      position: view.center,
      radius: 75
  });

  var group = new Group(shape, raster).clipped = true;

  // var kitty = createNode(view.center.x - 200, 100, 150);
  // createNode(80, 80, 50, kitty);
  createNode(view.center.x + 200, 100, 150);

  createNode(view.center.x - 300, 300, 150);
  createNode(view.center.x + 300, 300, 150);

  createNode(view.center.x - 400, 600, 150);
  createNode(view.center.x + 400, 600, 150);

  Object.keys(links).forEach(function(key) {
    console.log(key, links[key]);
  });

  view.draw();
}
