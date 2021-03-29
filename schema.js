
const shapes = {
    'circle': {
        'name': 'Circle',
        'type': 'circle',
        'formula': 'circle(50% at 50% 50%)',
        'vertices': 0,
        'edges': 0,
        'notes': 'A circle is a round shaped figure that has no corners or edges. In geometry, a circle can be defined as a closed, two-dimensional curved shape.'
    },
    'square': {
        'name': 'Square',
        'type': 'square',
        'formula': 'polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)',
        'vertices': 4,
        'edges': 4,
        'notes': 'A square is closed, two-dimensional shape with 4 equal sides. A square is a quadrilateral.'
    },
    'rectangle': {
        'name': 'Rectangle',
        'type': 'rectangle',
        'formula': 'polygon(10% 25%, 90% 25%, 90% 75%, 10% 75%)',
        'vertices': 4,
        'edges': 4,
        'notes': 'A Rectangle is a four sided-polygon, having all the internal angles equal to 90 degrees. The two sides at each corner or vertex, meet at right angles. The opposite sides of the rectangle are equal in length which makes it different from a square.'
    },
    'rhombus': {
        'name': 'Rhombus',
        'type': 'rhombus',
        'formula': 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        'vertices': 4,
        'edges': 4,
        'notes': 'A rhombus is a quadrilateral whose four sides all have the same length. A square and a rhombus both have sides equal in length. But square has all its angles equal to 90 degrees, but a rhombus only has its opposite angles equal.'
    },
    'ellipse': {
        'name': 'Ellipse',
        'type': 'ellipse',
        'formula': 'ellipse(25% 40% at 50% 50%);',
        'vertices': 0,
        'edges': 0,
        'notes': 'An ellipse is a shape that looks like an oval or a flattened circle.'
    },
    'triangle':{
        'name': 'Triangle',
        'type': 'triangle',
        'formula': 'polygon(50% 0%, 0% 100%, 100% 100%)',
        'vertices': 3,
        'edges': 3,
        'notes': ' a triangle is a three-sided polygon that consists of three edges and three vertices. The most important property of a triangle is that the sum of the internal angles of a triangle is equal to 180 degrees.'
    },
    'parallelogram': {
        'name': 'Parallelogram',
        'type': 'parallelogram',
        'formula': 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
        'vertices': 4,
        'edges': 4,
        'notes': 'A parallelogram is a quadrilateral that has its opposite sides parallel and equal to each other. It has its interior opposite angles equal. Also, the angles on the same side of transversal sum up to 180 degrees or supplementary to each other.'
    },
    'trapezoid': {
        'name': 'Trapezoid',
        'type': 'trapezoid',
        'formula': 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
        'vertices': 4,
        'edges': 4,
        'notes': 'A trapezoid(also called, trapezium) is a quadrilateral with at least one pair of parallel sides. No other features matter. The parallel sides may be vertical , horizontal , or slanting .'
    },
    'pentagon': {
        'name': 'Pentagon',
        'type': 'pentagon',
        'formula': 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
        'vertices': 5,
        'edges': 5,
        'notes': 'A pentagon is a geometrical shape, which has five sides and five angles. Here, “Penta” denotes five and “gon” denotes angle. An equilateral pentagon is a polygon with five sides of equal length.'
    },
    'hexagon': {
        'name': 'Hexagon',
        'type': 'hexagon',
        'formula': 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        'vertices': 6,
        'edges': 6,
        'notes': 'A hexagon can be defined as a polygon with six sides. The two-dimensional shape has 6 sides, 6 vertices and 6 angles.'
    },
    'heptagon': {
        'name': 'Heptagon',
        'type': 'heptagon',
        'formula': 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)',
        'vertices': 7,
        'edges': 7,
        'notes': 'Heptagon is a polygon ( a closed shape made up of line segments) made up of 7 sides and 7 angles. The word heptagon is made up of two words, hepta meaning seven and gon meaning sides.'
    },
    'octagon': {
        'name': 'Octagon',
        'type': 'octagon',
        'formula': 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
        'vertices': 8,
        'edges': 8,
        'notes': 'An octagon is a polygon made up of 8 sides. It has eight angles. Octagon = Octa + gon where octa means eight and gon means sides. '
    },
    'nonagon': {
        'name': 'Nonagon',
        'type': 'nonagon',
        'formula': 'polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)',
        'vertices': 9,
        'edges': 9,
        'notes': 'A nonagon or enneagon is a nine-sided polygon or 9-gon.'
    },
    'decagon': {
        'name': 'Decagon',
        'type': 'decagon',
        'formula': 'polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)',
        'vertices': 10,
        'edges': 10,
        'notes': 'a decagon is a ten-sided polygon or 10-gon. The total sum of the interior angles of a simple decagon is 1440°. A self-intersecting regular decagon is known as a decagram.'
    }
}

const getAvailableShapeTypes = () => {
    return Reflect.ownKeys(shapes);
}

const getShape = key => {
    return shapes[key];
}

export { getShape, getAvailableShapeTypes  };