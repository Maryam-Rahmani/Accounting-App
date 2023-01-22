import React from 'react';
import styled from 'styled-components';
import AddForm from '../../components/table/add-form';
import Login from '../login';

const CurrencyParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 0px;
  margin-top: 40px;
  gap: 40px;
  width: 100%;
  height: 100%;
  flex: none;
  order: 2;
  flex-grow: 1;
`;

const Currency = props => {
    return (
      <CurrencyParent>
        <AddForm />
      </CurrencyParent>
    );
};

export default Currency;