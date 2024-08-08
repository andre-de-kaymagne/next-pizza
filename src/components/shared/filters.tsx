import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from '../ui/range-slider';

interface Props {
className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
        <Title text="Фильтрация" size='sm' className='mb-5 font-bold' />
        
        {/* Верхние чек-боксы */}
        <div className='flex flex-col gap-4'>
            <FilterCheckbox text="Популярное" value="1" />
            <FilterCheckbox text="Новинки" value="2" />
        </div>

        {/* Фильтр цены */}
        <div className='mt-5 border-y border-neutral-100 py-6 pb-7'>
          <p className='font-bold mb-3'>Цена от и до:</p>
          <div className='flex gap-3 mb-5'>
            <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
            <Input type="number"  min={100} max={1000} placeholder="1000" />
          </div>
          <RangeSlider min={100} max={5000} step={10} value={[0, 5000]} />
        </div>
    </div>
  );
};