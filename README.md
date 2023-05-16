# React Footer Bar

React Footer Bar is an unique React.js component to provide animation. It is a ready to use for your React application.

## Preview

## Installation

```shell
npm install react-footer-bar
#or
yarn add react-footer-bar
```

## Usage

```jsx
import React from "react";
import Footer from "react-footer-bar";

function App() {
  return (
    <Footer
      textArray={["Copyright@2023", "Thanks for visiting", "All the best!"]}
      backGroundStyle={{
        backgroundColor: "Highlight",
      }}
      textStyle={{
        fontSize: 24,
      }}
      enableAnimation
    />
  );
}

export default App;
```

## Footer Props

|      Prop       |      Type       |                     Description                      |
| :-------------: | :-------------: | :--------------------------------------------------: |
|    textArray    | `Array[String]` | To pass the array of strings which wants to display. |
| enableAnimation |    `Boolean`    |      If it's true then animation will enabled.       |
| backGroundStyle |    `Object`     |    This is style object to apply for background.     |
|    textStyle    |    `Object`     |       This is style object to apply for text.        |
|    className    |    `String`     |           CSS class to apply on component.           |
|      style      |    `Object`     |           CSS style to apply on component.           |

## License

ISC
