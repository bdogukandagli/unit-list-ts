import React, { useState, ReactElement } from 'react';
import { Box, Typography, Table, ButtonGroup, Button } from '@material-ui/core';
import FilterSlider from '../../../components/filterSlider';
import { Ages } from '../../../utils/constants';

const Units = (): ReactElement => {
  //Costs states
  const [isWoodFilterActive, setWoodFilterActive] = useState(false);
  const [woodFilterValue, setWoodFilterValue] = useState([0, 200]);

  const [isFoodFilterActive, setFoodFilterActive] = useState(false);
  const [foodFilterValue, setFoodFilterValue] = useState([0, 200]);

  const [isGoldFilterActive, setGoldFilterActive] = useState(false);
  const [goldFilterValue, setGoldFilterValue] = useState([0, 200]);

  //Ages states
  const [selectedAgeValue, setSelectedAgeValue] = useState(Ages.All);

  const renderAgesFilter = () => {
    return (
      <Box display="flex" flexDirection="column">
        <Box>
          <Typography variant="h5">Ages</Typography>
        </Box>
        <Box mt="0.5em">
          <ButtonGroup size="large" color="primary">
            {Object.keys(Ages)
              .filter((age) => {
                return isNaN(Number(age));
              })
              .map((age, index) => {
                return (
                  <Button
                    variant={selectedAgeValue == index ? 'contained' : 'outlined'}
                    onClick={() => setSelectedAgeValue(index)}
                    key={index}
                  >
                    {age}
                  </Button>
                );
              })}
          </ButtonGroup>
        </Box>
      </Box>
    );
  };

  const renderCostsFilter = () => {
    return (
      <Box mt="4em">
        <Box>
          <Typography variant="h5">Costs</Typography>
        </Box>
        <Box>
          <FilterSlider
            filterName={'Wood'}
            isActive={isWoodFilterActive}
            setActive={setWoodFilterActive}
            value={woodFilterValue}
            setValue={setWoodFilterValue}
          />
        </Box>
        <Box>
          <FilterSlider
            filterName={'Food'}
            isActive={isFoodFilterActive}
            setActive={setFoodFilterActive}
            value={foodFilterValue}
            setValue={setFoodFilterValue}
          />
        </Box>
        <Box>
          <FilterSlider
            filterName={'Gold'}
            isActive={isGoldFilterActive}
            setActive={setGoldFilterActive}
            value={goldFilterValue}
            setValue={setGoldFilterValue}
          />
        </Box>
      </Box>
    );
  };

  return (
    <Box
      pt="1em"
      px="3em"
      display="flex"
      flexDirection="column"
      alignItems="left"
      textAlign="left"
      justifyContent="left"
      width={1}
    >
      {renderAgesFilter()}
      {renderCostsFilter()}
    </Box>
  );
};

export default Units;
