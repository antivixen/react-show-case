import { Children } from "react";

type ConditionalChildren = JSX.Element | JSX.Element[];

type WithConditionalChildren = {
  children: ConditionalChildren;
};

export type Props = {
  when: boolean;
} & WithConditionalChildren;

export const Show = ({ when, children }: Props) => {
  let fallback: JSX.Element | null = null;
  const conditionalChildren: JSX.Element[] = [];
  Children.map(children, (child) => {
    if (child.type.name === "Show_Fallback") {
      fallback = child;
    } else {
      conditionalChildren.push(child);
    }
  });

  if (when) {
    return <>{conditionalChildren}</>;
  }

  return fallback;
};

export const Fallback = function Show_Fallback({
  children,
}: WithConditionalChildren) {
  return <>{children}</>;
};
