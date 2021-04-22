# react-clip-path
`react-clip-path` is a simple React-based package to create shapes declaratively using `CSS` clip-path property.

# 🔥 Why do you need this?
You may need `react-clip-path` when,

- You need to show lightweight shapes in your React app. 
- You may not want to rely on any external graph or chart libraries.
- You may want to create some custom shapes using a polygon, paths, etc.
- You need to create shapes declaratively by extending the out-of-the-box schema.

# ⭐ Want to Motivate?
Who doesn't need motivations? Please give the repository a start(⭐) to motivate.

# ⚒️ How to use?
This section talks about the installation, usage, and configurations. Make sure you have Node.js(version 12.7.0 or higher) installed.
## Install
To install, use the following command from your command prompt,

```shell
npm install react-clip-path

# Alternatively using yarn
yarn add react-clip-path
```

## Import
Next is to import the component from the library.

First import the `Shape` component,

```js
import Shape  from 'react-clip-path';
```
## Usage
After import, we can now use it in any React component.

```js
<Shape
    type="circle"
    width="300px"
    height="300px"
    showLabel={true}
    showShadow={true}
/>
```
### Properties & Configuration
This section provides details about the properties(props).
<details open><summary>Component Properties:</summary>
<p>

<table>
  <tr>
    <td> <b>Property</b> </td> 
    <td> <b>Description</b> </td>
    <td> <b>Required</b> </td>
    <td> <b>Example</b> </td>
  </tr>

  <tr>
    <td> type </td>
    <td> The shape type</td>
    <td> Yes </td>
    <td>
  Supported Shape Types out-of-the-box are <code>circle</code>, <code>square</code>, <code>rectangle</code>, <code>rhombus</code>, <code>ellipse</code>, <code>triangle</code>, <code>parallelogram</code>, <code>trapezoid</code>, <code>pentagon</code>, <code>hexagon</code>, <code>heptagon</code>, <code>octagon</code>, <code>nonagon</code>, <code>decagon</code>, <code>cross</code>, <code>star</code>.
    </td>
  </tr>

  <tr>
    <td> backgroundColor </td>
    <td> The color of the Shape </td>
    <td> No </td>
    <td>
      Any valid hex color code or rgb color code. The default color code is, <code>#12a8d6</code>.
    </td>
  </tr>

  <tr>
    <td> height </td>
    <td> The height of the Shape </td>
    <td> No </td>
    <td>
      The default value is <code>100px</code>.
    </td>
  </tr>

  <tr>
    <td> width </td>
    <td> The width of the Shape </td>
    <td> No </td>
    <td>
      The default value is <code>100px</code>.
    </td>
  </tr>

  <tr>
    <td> showShadow </td>
    <td> pass <code>true</code> if you want to show the unclipped part of the shape. </td>
    <td> No </td>
    <td>
      <code>false</code>
    </td>
  </tr>

  <tr>
    <td> text </td>
    <td> Any text about the Shape </td>
    <td> No </td>
    <td>
      The Shape type.
    </td>
  </tr>

  <tr>
    <td> showLabel </td>
    <td> Shoe the text label if <code>true</code>. </td>
    <td> No </td>
    <td>
      <code>true</code>
    </td>
  </tr>

</table>

</p>
</details>


# Schema & Extending it
The `react-clip-path` depends on a `schema` file to get the shape information. You can extend the schema by introducing a new shape definition. Shape information contains,

name of the shape
shape type
clip-path code of the shape
number of vertices
number of edges
Any optional notes about the shape.
Here is an example of the `circle`,

```js
'circle': {
      'name': 'Circle',
      'type': 'circle',
      'formula': 'circle(50% at 50% 50%)',
      'vertices': 0,
      'edges': 0,
      'notes': 'A circle is a round shaped figure that has no corners or edges. In geometry, a circle can be defined as a closed, two-dimensional curved shape.'
    }
```

The same schema file also contains a few utility methods. You can import them as,

```js
import { getAvailableShapeTypes, getShape } from 'react-clip-path/schema';
```

# 🏷️ License
Copyright © 2021 by [Tapas Adhikary](https://tapasadhikary.com/)

This project is licensed under MIT license.



