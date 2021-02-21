import React, { useState, ReactElement, useEffect } from 'react';
import {
  Box,
  Typography,
  Table,
  ButtonGroup,
  Button,
  Paper,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  makeStyles,
} from '@material-ui/core';
import FilterSlider from '../../../components/filterSlider';
import { Ages } from '../../../utils/constants';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getAllUnitsStart, getFilteredUnitsStart } from '../../../actions/unitAction';
import { IUnit } from '../../../utils/interfaces';
import { RootState } from '../../../reducers/index';

const useStyles = makeStyles({
  table: {
    maxWidth: 1240,
  },
});

const Units = (): ReactElement => {
  const [isWoodFilterActive, setWoodFilterActive] = useState(false);
  const [woodFilterValue, setWoodFilterValue] = useState([0, 200]);

  const [isFoodFilterActive, setFoodFilterActive] = useState(false);
  const [foodFilterValue, setFoodFilterValue] = useState([0, 200]);

  const [isGoldFilterActive, setGoldFilterActive] = useState(false);
  const [goldFilterValue, setGoldFilterValue] = useState([0, 200]);

  const [selectedAgeValue, setSelectedAgeValue] = useState(Ages.All);
  const [selectedAgeValueText, setSelectedAgeValueText] = useState('All');

  const units: IUnit[] = useSelector(
    (storage: RootState) => storage.units.units,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUnitsStart());
  }, []);

  useEffect(() => {
    if (
      isWoodFilterActive ||
      isFoodFilterActive ||
      isGoldFilterActive ||
      selectedAgeValueText
    ) {
      dispatch(
        getFilteredUnitsStart(
          selectedAgeValueText,
          woodFilterValue,
          foodFilterValue,
          goldFilterValue
        )
      );
    }
  }, [woodFilterValue, foodFilterValue, goldFilterValue, selectedAgeValue]);

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
                    onClick={() => {
                      setSelectedAgeValue(index);
                      setSelectedAgeValueText(age);
                    }}
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

  const renderUnits = () => {
    const classes = useStyles();

    return (
      <Box display="flex" pt="2em">
        <TableContainer className={classes.table} component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Age</TableCell>
                <TableCell align="left">Costs</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {units.map((unit) => {
                return (
                  <TableRow key={unit.id}>
                    <TableCell component="th" scope="row">
                      {unit.id}
                    </TableCell>
                    <TableCell align="left">{unit.name}</TableCell>
                    <TableCell align="left">{unit.age}</TableCell>
                    <TableCell align="left">
                      {unit.cost ? (
                        <Box
                          display="flex"
                          flexDirection="row"
                          alignItems="left"
                          justifyContent="left"
                        >
                          <Box>{unit.cost.Gold && `Gold: ${unit.cost.Gold}`}&nbsp;</Box>
                          <Box>{unit.cost.Wood && ` ,Wood: ${unit.cost.Wood}`}&nbsp;</Box>
                          <Box>{unit.cost.Food && ` ,Food: ${unit.cost.Food}`}</Box>
                        </Box>
                      ) : (
                        '-'
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
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
      {renderUnits()}
    </Box>
  );
};

export default Units;
