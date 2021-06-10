const shapes = [
    {
      'name': 'Circle',
      'type': 'circle',
      'formula': 'circle(45% at 50% 50%)',
      'vertices': 0,
      'edges': 0,
      'notes': 'A circle is a round shaped figure that has no corners or edges. In geometry, a circle can be defined as a closed, two-dimensional curved shape.'
    },
    {
      'name': 'Square',
      'type': 'polygon',
      'formula': 'polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)',
      'vertices': 4,
      'edges': 4,
      'notes': 'A square is closed, two-dimensional shape with 4 equal sides. A square is a quadrilateral.'
    },
    {
      'name': 'Rectangle',
      'type': 'polygon',
      'formula': 'polygon(10% 25%, 90% 25%, 90% 75%, 10% 75%)',
      'vertices': 4,
      'edges': 4,
      'notes': 'A Rectangle is a four sided-polygon, having all the internal angles equal to 90 degrees. The two sides at each corner or vertex, meet at right angles. The opposite sides of the rectangle are equal in length which makes it different from a square.'
    },
    {
      'name': 'Rhombus',
      'type': 'polygon',
      'formula': 'polygon(50% 5%,95% 50%,50% 95%,5% 50%)',
      'vertices': 4,
      'edges': 4,
      'notes': 'A rhombus is a quadrilateral whose four sides all have the same length. A square and a rhombus both have sides equal in length. But square has all its angles equal to 90 degrees, but a rhombus only has its opposite angles equal.'
    },
    {
      'name': 'Ellipse',
      'type': 'ellipse',
      'formula': 'ellipse(25% 40% at 50% 50%);',
      'vertices': 0,
      'edges': 0,
      'notes': 'An ellipse is a shape that looks like an oval or a flattened circle.'
    },
    {
      'name': 'Triangle',
      'type': 'polygon',
      'formula': 'polygon(50% 5%, 5% 95%, 95% 95%)',
      'vertices': 3,
      'edges': 3,
      'notes': ' a triangle is a three-sided polygon that consists of three edges and three vertices. The most important property of a triangle is that the sum of the internal angles of a triangle is equal to 180 degrees.'
    },
    {
      'name': 'Parallelogram',
      'type': 'polygon',
      'formula': 'polygon(25% 5%, 95% 5%, 75% 95%, 5% 95%)',
      'vertices': 4,
      'edges': 4,
      'notes': 'A parallelogram is a quadrilateral that has its opposite sides parallel and equal to each other. It has its interior opposite angles equal. Also, the angles on the same side of transversal sum up to 180 degrees or supplementary to each other.'
    },
    {
      'name': 'Trapezoid',
      'type': 'polygon',
      'formula': 'polygon(20% 5%, 80% 5%, 95% 95%, 5% 95%)',
      'vertices': 4,
      'edges': 4,
      'notes': 'A trapezoid(also called, trapezium) is a quadrilateral with at least one pair of parallel sides. No other features matter. The parallel sides may be vertical , horizontal , or slanting .'
    },
    {
      'name': 'Pentagon',
      'type': 'polygon',
      'formula': 'polygon(50% 5%, 95% 38%, 82% 95%, 18% 95%, 5% 38%)',
      'vertices': 5,
      'edges': 5,
      'notes': 'A pentagon is a geometrical shape, which has five sides and five angles. Here, “Penta” denotes five and “gon” denotes angle. An equilateral pentagon is a polygon with five sides of equal length.'
    },
    {
      'name': 'Hexagon',
      'type': 'polygon',
      'formula': 'polygon(25% 5%, 75% 5%, 95% 50%, 75% 95%, 25% 95%, 5% 50%)',
      'vertices': 6,
      'edges': 6,
      'notes': 'A hexagon can be defined as a polygon with six sides. The two-dimensional shape has 6 sides, 6 vertices and 6 angles.'
    },
    {
      'name': 'Heptagon',
      'type': 'polygon',
      'formula': 'polygon(50% 5%, 90% 20%, 95% 60%, 75% 95%, 25% 95%, 5% 60%, 10% 20%)',
      'vertices': 7,
      'edges': 7,
      'notes': 'Heptagon is a polygon ( a closed shape made up of line segments) made up of 7 sides and 7 angles. The word heptagon is made up of two words, hepta meaning seven and gon meaning sides.'
    },
    {
      'name': 'Octagon',
      'type': 'polygon',
      'formula': 'polygon(30% 5%, 70% 5%, 95% 30%, 95% 70%, 70% 95%, 30% 95%, 5% 70%, 5% 30%)',
      'vertices': 8,
      'edges': 8,
      'notes': 'An octagon is a polygon made up of 8 sides. It has eight angles. Octagon = Octa + gon where octa means eight and gon means sides. '
    },
    {
      'name': 'Nonagon',
      'type': 'polygon',
      'formula': 'polygon(50% 5%, 83% 12%, 95% 43%, 94% 78%, 68% 95%, 32% 95%, 6% 78%, 5% 43%, 17% 12%)',
      'vertices': 9,
      'edges': 9,
      'notes': 'A nonagon or enneagon is a nine-sided polygon or 9-gon.'
    },
    {
      'name': 'Decagon',
      'type': 'polygon',
      'formula': 'polygon(50% 5%, 80% 10%, 95% 35%, 95% 70%, 80% 90%, 50% 95%, 20% 90%, 5% 70%, 5% 35%, 20% 10%)',
      'vertices': 10,
      'edges': 10,
      'notes': 'A decagon is a ten-sided polygon or 10-gon. The total sum of the interior angles of a simple decagon is 1440°. A self-intersecting regular decagon is known as a decagram.'
    },
    {
      'name': 'Cross',
      'type': 'polygon',
      'formula': 'polygon(30% 5%, 70% 5%, 70% 30%, 95% 30%, 95% 60%, 70% 60%, 70% 95%, 30% 95%, 30% 60%, 5% 60%, 5% 30%, 30% 30%)',
      'vertices': 12,
      'edges': 12,
      'notes': 'A cross is a geometrical figure consisting of two intersecting lines or bars, usually perpendicular to each other. The lines usually run vertically and horizontally.'
    },
    {
      'name': 'Star',
      'type': 'polygon',
      'formula': 'polygon(10% 95%,50% 5%,90% 95%, 5% 40%, 95% 40%)',
      'vertices': 5,
      'edges': 5,
      'notes': 'A regular star pentagon, has five corner vertices and intersecting edges.'
    }
];
  
  const getAvailableShapeNames = () => {
    const shapeNames = shapes.map((element, index) => {
      return element.name;
    });

    return shapeNames;
  };

  const getAvailableShapeTypes = () => {
    const shapeTypes = shapes.map((element, index) => {
      return element.type;
    });

    return [...new Set(shapeTypes)];
  };
  
  const getShape = key => {
    let shape;
    if (key) {
      shape = shapes.find((elem, index) => {
        return elem.name.toLowerCase() === key.toLowerCase();
      });
    }
    return shape;
  };
  
  export { getShape, getAvailableShapeNames, getAvailableShapeTypes };
  