import * as React from 'react';
import { DefaultComponentProps, OverrideProps, Simplify } from '@mui/types';
import { UseOptionRootSlotProps } from '../useOption';
import { SlotComponentProps } from '../utils';

export interface OptionRootSlotPropsOverrides {}

export interface OptionOwnProps<OptionValue> {
  /**
   * The value of the option.
   */
  value: OptionValue;
  children?: React.ReactNode;
  /**
   * If `true`, the option will be disabled.
   * @default false
   */
  disabled?: boolean;
  className?: string;
  /**
   * The props used for each slot inside the Option.
   * @default {}
   */
  slotProps?: {
    root?: SlotComponentProps<'li', OptionRootSlotPropsOverrides, OptionOwnerState<OptionValue>>;
  };
  /**
   * The components used for each slot inside the Option.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots?: OptionSlots;
  /**
   * A text representation of the option's content.
   * Used for keyboard text navigation matching.
   */
  label?: string;
}

export interface OptionSlots {
  /**
   * The component that renders the root.
   * @default 'li'
   */
  root?: React.ElementType;
}

export interface OptionTypeMap<
  OptionValue,
  AdditionalProps = {},
  RootComponentType extends React.ElementType = 'li',
> {
  props: OptionOwnProps<OptionValue> & AdditionalProps;
  defaultComponent: RootComponentType;
}

export type OptionProps<
  OptionValue,
  RootComponentType extends React.ElementType = OptionTypeMap<OptionValue>['defaultComponent'],
> = OverrideProps<OptionTypeMap<OptionValue, {}, RootComponentType>, RootComponentType> & {
  component?: RootComponentType;
};

export interface OptionType {
  <OptionValue, RootComponentType extends React.ElementType>(
    props: {
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: RootComponentType;
    } & OverrideProps<OptionTypeMap<OptionValue>, RootComponentType>,
  ): JSX.Element | null;
  <OptionValue>(props: DefaultComponentProps<OptionTypeMap<OptionValue>>): JSX.Element | null;
  propTypes?: any;
}

export type OptionOwnerState<OptionValue> = Simplify<
  OptionOwnProps<OptionValue> & {
    selected: boolean;
    highlighted: boolean;
    index: number;
  }
>;

export type OptionRootSlotProps<OptionValue> = Simplify<
  UseOptionRootSlotProps & {
    children?: React.ReactNode;
    className: string;
    ref: React.Ref<HTMLLIElement>;
    ownerState: OptionOwnerState<OptionValue>;
  }
>;
