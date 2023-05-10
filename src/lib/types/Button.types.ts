// declare global {
//   type ButtonType = {
//     className: string;
//     style: React.CSSProperties;
//     type: "button" | "submit" | "reset" | undefined;
//     onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
//     disabled: boolean;
//     label: string;
//   };
// }
// export default ButtonType;

export interface ButtonType {
  className?: string;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
  label?: string;
}
