import React, { useState } from 'react';
import { Selector } from './Selector';
import {
  categorySelectorItems,
  circaSelectorItems,
  availabilitySelectorOptions,
} from '@/types/types';

export interface SelectorsState {
  selectedCategory: string;
  selectedCirca: string;
  selectedAvailability: string;
}

interface AntiqueSelectorProps {
  onSelectorsChange: (state: SelectorsState) => void;
}

export const AntiqueSelector: React.FC<AntiqueSelectorProps> = ({ onSelectorsChange }) => {
  const [selectorsState, setSelectorsState] = useState<SelectorsState>({
    selectedCategory: 'all',
    selectedCirca: 'all',
    selectedAvailability: 'all',
  });

  const handleValueChange = (type: keyof SelectorsState, value: string) => {
    const newState = { ...selectorsState, [type]: value };
    setSelectorsState(newState);
    onSelectorsChange(newState);
  };

  return (
    <div className="flex w-full items-center justify-evenly p-2 sm:w-3/4">
      <Selector
        items={categorySelectorItems}
        type="Category"
        value={selectorsState.selectedCategory}
        onValueChange={(value) => handleValueChange('selectedCategory', value)}
      />
      <Selector
        items={circaSelectorItems}
        type="Circa"
        value={selectorsState.selectedCirca}
        onValueChange={(value) => handleValueChange('selectedCirca', value)}
      />
      <Selector
        items={availabilitySelectorOptions}
        type="Availability"
        value={selectorsState.selectedAvailability}
        onValueChange={(value) => handleValueChange('selectedAvailability', value)}
      />
    </div>
  );
};