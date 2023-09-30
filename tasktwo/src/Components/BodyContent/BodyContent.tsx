import React, { useState } from 'react';
import style from './BodyContent.module.css';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

function BodyContent() {
  const [filters, setFilters] = useState({
    personalInfoFilter: [] as string[],
    educationFilter: [] as string[],
  });

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: toggleFilter(prevFilters[filterType as keyof typeof prevFilters], value),
    }));
  };
  

  const toggleFilter = (filterList: string[], value: string) => {
    if (filterList.includes(value)) {
      return filterList.filter((item) => item !== value);
    } else {
      return [...filterList, value];
    }
  };

  return (
    <div className={style['mainbody__div']}>
      <LeftSide
        personalInfoFilter={filters.personalInfoFilter}
        educationFilter={filters.educationFilter}
        onFilterChange={handleFilterChange}
      />
      <RightSide filters={filters} />
    </div>
  );
}

export default BodyContent;
