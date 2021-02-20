import React, { ReactElement, useState, SetStateAction, Dispatch } from 'react';
import { Box, Slider, Checkbox, Typography } from '@material-ui/core';

interface IPropTypes {
  filterName: string;
  isActive: boolean;
  setActive: Dispatch<SetStateAction<any>>;
  value: number[];
  setValue: Dispatch<SetStateAction<any>>;
}

const FilterSlider = (props: IPropTypes): ReactElement => {
  const [value, setValue] = useState([0, 200]);

  return (
    <Box display="flex" flexDirection="row" justifyContent="left" alignItems="center">
      <Box>
        <Checkbox
          checked={props.isActive}
          onChange={() => props.setActive(!props.isActive)}
          color="primary"
        />
      </Box>
      <Box mr="1.5em" minWidth="50px">
        <Typography>{props.filterName}</Typography>
      </Box>
      <Box minWidth="240px">
        <Slider
          disabled={!props.isActive}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue as number[]);
          }}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={() => {
            return `${value}`;
          }}
        />
      </Box>
      <Box ml="2em">
        <Typography>{`${value[0]} - ${value[1]}`}</Typography>
      </Box>
    </Box>
  );
};

export default FilterSlider;
