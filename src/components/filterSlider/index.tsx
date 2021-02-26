import React, { ReactElement, SetStateAction, Dispatch } from 'react';
import { Box, Slider, Checkbox, Typography } from '@material-ui/core';

interface IPropTypes {
  filterName: string;
  isActive: boolean;
  setActive: Dispatch<SetStateAction<any>>;
  value: number[];
  setValue: Dispatch<SetStateAction<any>>;
}

const FilterSlider = (props: IPropTypes): ReactElement => {
  return (
    <Box display="flex" flexDirection="row" justifyContent="left" alignItems="center">
      <Box>
        <Checkbox
          id={props.filterName}
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
          id={`${props.filterName}Slider`}
          disabled={!props.isActive}
          value={props.value}
          onChange={(event, newValue) => {
            props.setValue(newValue as number[]);
          }}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={() => {
            return `${props.value}`;
          }}
          min={0}
          max={200}
        />
      </Box>
      <Box ml="2em">
        <Typography>{`${props.value[0]} - ${props.value[1]}`}</Typography>
      </Box>
    </Box>
  );
};

export default FilterSlider;
