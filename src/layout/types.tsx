import React from "react";

export interface IMenuItem {
  title: string;
  icon?: React.ReactNode;
  route: string;
  onClick?: () => void
}