"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Button = function Button(props) {
  var className = props.className,
    style = props.style,
    type = props.type,
    onClick = props.onClick,
    disabled = props.disabled,
    label = props.label;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: className,
    style: style,
    type: type,
    onClick: onClick,
    disabled: disabled
  }, label);
};
var _default = Button;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiQnV0dG9uIiwicHJvcHMiLCJjbGFzc05hbWUiLCJzdHlsZSIsInR5cGUiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJsYWJlbCIsImNyZWF0ZUVsZW1lbnQiLCJfZGVmYXVsdCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvQnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b25UeXBlIH0gZnJvbSBcIi4uL3R5cGVzL0J1dHRvbi50eXBlc1wiO1xuY29uc3QgQnV0dG9uID0gKHByb3BzOiBCdXR0b25UeXBlKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBzdHlsZSwgdHlwZSwgb25DbGljaywgZGlzYWJsZWQsIGxhYmVsIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIHR5cGU9e3R5cGV9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgID5cbiAgICAgIHtsYWJlbH1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSxNQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFBMEIsU0FBQUQsdUJBQUFFLEdBQUEsV0FBQUEsR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsR0FBQUQsR0FBQSxLQUFBRSxPQUFBLEVBQUFGLEdBQUE7QUFFMUIsSUFBTUcsTUFBTSxHQUFHLFNBQVRBLE1BQU1BLENBQUlDLEtBQWlCLEVBQUs7RUFDcEMsSUFBUUMsU0FBUyxHQUE0Q0QsS0FBSyxDQUExREMsU0FBUztJQUFFQyxLQUFLLEdBQXFDRixLQUFLLENBQS9DRSxLQUFLO0lBQUVDLElBQUksR0FBK0JILEtBQUssQ0FBeENHLElBQUk7SUFBRUMsT0FBTyxHQUFzQkosS0FBSyxDQUFsQ0ksT0FBTztJQUFFQyxRQUFRLEdBQVlMLEtBQUssQ0FBekJLLFFBQVE7SUFBRUMsS0FBSyxHQUFLTixLQUFLLENBQWZNLEtBQUs7RUFDeEQsb0JBQ0ViLE1BQUEsQ0FBQUssT0FBQSxDQUFBUyxhQUFBO0lBQ0VOLFNBQVMsRUFBRUEsU0FBVTtJQUNyQkMsS0FBSyxFQUFFQSxLQUFNO0lBQ2JDLElBQUksRUFBRUEsSUFBSztJQUNYQyxPQUFPLEVBQUVBLE9BQVE7SUFDakJDLFFBQVEsRUFBRUE7RUFBUyxHQUVsQkMsS0FDSyxDQUFDO0FBRWIsQ0FBQztBQUFDLElBQUFFLFFBQUEsR0FDYVQsTUFBTTtBQUFBVSxPQUFBLENBQUFYLE9BQUEsR0FBQVUsUUFBQSJ9