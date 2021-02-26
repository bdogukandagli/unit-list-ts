import React, { ReactElement, useEffect } from 'react';
import { Box, Typography, Divider } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getUnitStart } from '../../../actions/unitAction';
import { IUnit } from '../../../utils/interfaces';
import { RootState } from '../../../reducers/index';

type TParams = { unitId: string };

const UnitDetail = ({ match }: RouteComponentProps<TParams>): ReactElement => {
  const { params } = match;

  const units: IUnit[] = useSelector(
    (storage: RootState) => storage.units.units,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUnitStart(parseInt(params.unitId)));
  }, []);

  return (
    <Box
      display="flex"
      p="2em 4em"
      flexDirection="column"
      justifyContent="left"
      alignItems="left"
      width={1}
      maxWidth="320px"
    >
      <Box py="2em">Unit Details</Box>
      {units[0] &&
        Object.entries(units[0]).map(([key, value], index) => {
          return (
            <Box key={index}>
              <Box border="1px solid lightGray">
                <Typography>{`${key}:${value}`}</Typography>
              </Box>
              <Divider />
            </Box>
          );
        })}
    </Box>
  );
};

export default UnitDetail;
