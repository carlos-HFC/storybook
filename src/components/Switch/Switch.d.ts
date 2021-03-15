import { FC, LabelHTMLAttributes, MouseEvent, MouseEventHandler } from "react";

declare type TSwitch = FC<ISwitchProps>

export default interface ISwitchProps extends LabelHTMLAttributes<HTMLLabelElement> { }