import * as React from 'react';
import { TreeNodeProps } from './TreeNode';
export { ScrollTo } from 'rc-virtual-list/lib/List';


// 字段名称的抽象接口
export interface BasicDataNode {
  checkable?: boolean; // 选择
  disabled?: boolean;
  disableCheckbox?: boolean;
  icon?: IconType;
  isLeaf?: boolean;
  selectable?: boolean;
  switcherIcon?: IconType;

  // 样式
  className?: string;
  style?: React.CSSProperties;
}

// 提供
export type FieldDataNode<T, ChildFieldName extends string = 'children'> = BasicDataNode &
  T &
  Partial<Record<ChildFieldName, FieldDataNode<T, ChildFieldName>[]>>;

// 
export type IconType = React.ReactNode | ((props: TreeNodeProps) => React.ReactNode);

export type DataNode = FieldDataNode<{

}>










