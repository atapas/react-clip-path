# react-clip-path
`react-clip-path` is a React-based open-source project to create shapes declaratively using `CSS` clip-path property. It is available as NPM to download and install.

# 🔥 Why do you need this?
You may need `react-clip-path` when,

- You need to show lightweight shapes in your React app. 
- You may not want to rely on any external graph or chart libraries to create shapes.
- You may want to create some custom shapes using a polygon, paths, etc.
- You need to create shapes declaratively by extending the out-of-the-box schema.

# 💻 Live Demo
A Live demo of the component is available here, 💻 [CLICK FOR DEMO](https://react-clip-path.netlify.app/)

## Demo Status on Netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/6c1a6fc5-7887-431f-ac7c-3c14135e5e6b/deploy-status)](https://app.netlify.com/sites/react-clip-path/deploys)

# ⭐ Want to Motivate?
Who doesn't need motivations? Please give the repository a star(⭐) to motivate.

## Many Thanks to all the `Stargazers` who has supported this project with stars(⭐)

[![Stargazers repo roster for @atapas/react-clip-path](https://reporoster.com/stars/atapas/react-clip-path)](https://github.com/atapas/react-clip-path/stargazers)

# ⚒️ How to use?
This section talks about the installation, usages, and configurations. Make sure you have Node.js(version 12.7.0 or higher) installed.
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
import Shape from 'react-clip-path';
```
## Usage
After import, we can now use it in any React component.

```js
<Shape
    name="Circle"
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
    <td> id </td>
    <td> The unique identifier of the shape </td>
    <td> No </td>
    <td>
      Please pass a unique string as id. If no value is passed, the shape name is used as the id value.
    </td>
  </tr>

  <tr>
    <td> name </td>
    <td> The shape Name </td>
    <td> Yes </td>
    <td>
  Supported Shapes(out-of-the-box) are, <code>circle</code>, <code>square</code>, <code>rectangle</code>, <code>rhombus</code>, <code>ellipse</code>, <code>triangle</code>, <code>parallelogram</code>, <code>trapezoid</code>, <code>pentagon</code>, <code>hexagon</code>, <code>heptagon</code>, <code>octagon</code>, <code>nonagon</code>, <code>decagon</code>, <code>cross</code>, <code>star</code>.
    </td>
  </tr>

  <tr>
    <td> formula </td>
    <td> The shape's clip-path formula. Please pass a CSS clip-path value using inset, circle, ellipse, polygon</td>
    <td> Yes - It is required if name is not passed.  </td>
    <td>
      <ul>
        <li>circle(50% at 50% 50%)</li>
        <li>polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td> backgroundColor </td>
    <td> The color of the shape </td>
    <td> No </td>
    <td>
      Any valid hex color code or rgb color code. The default color code is, <code>#12a8d6</code>.
    </td>
  </tr>

  <tr>
    <td> height </td>
    <td> The height of the shape </td>
    <td> No </td>
    <td>
      The default value is <code>100px</code>.
    </td>
  </tr>

  <tr>
    <td> width </td>
    <td> The width of the shape </td>
    <td> No </td>
    <td>
      The default value is <code>100px</code>.
    </td>
  </tr>

  <tr>
    <td> showShadow </td>
    <td> pass <code>true</code> if you want to show outside part of the clipped area. </td>
    <td> No </td>
    <td>
      <code>false</code>
    </td>
  </tr>

  <tr>
    <td> text </td>
    <td> Any text label about the shape </td>
    <td> No </td>
    <td>
      The label of the shape.
    </td>
  </tr>

  <tr>
    <td> showLabel </td>
    <td> Show the text label if <code>true</code>. </td>
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

- name of the shape
- shape type
- clip-path code of the shape
- number of vertices
- number of edges
- Any optional notes about the shape.

Here is an example of the `circle` shape in the schema file,

```js
{
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
import { getShape } from 'react-clip-path/schema';

getShape('Circle'); // returns the details of the Circle shape.
```

# 🏷️ License
Copyright © 2021 by [Tapas Adhikary](https://tapasadhikary.com/)

This project is licensed under MIT license.



