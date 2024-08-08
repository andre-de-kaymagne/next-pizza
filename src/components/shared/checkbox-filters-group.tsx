import React from 'react';
import { FilterChecboxProps } from './filter-checkbox';

type Item = FilterChecboxProps

interface Props {
title: string;
items: Item[];
defaultItems?: Item[];
limit?: number;
searchInputPlaceholder?: string;
onChange?: (values:string[]) => void;
defaultValue?: string[];
className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}></div>
  );
};