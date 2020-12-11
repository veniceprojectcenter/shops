import React from 'react';
import { withStyles} from "@material-ui/core/styles";
import { grey, teal, indigo, red, deepPurple, pink, brown, orange, green } from '@material-ui/core/colors';
import Select from 'react-select';
import {components} from 'react-select';
import ShopTypeSelect from "../components/ShopTypeSelect.js";
import Checkbox  from '@material-ui/core/Checkbox';
import makeAnimated from 'react-select/animated';
import groupTypeOptions from "../data/groupTypeOptions.json"
import shopTypeOptions from "../data/shopTypeOptions.json"

/**
 * MapFilter({filter, setFilter})
 * @param filter for filter statehook
 * @param setFilter for filter statehook setter
 * Component is view and controller for Filter feature
 * Modifies checkbox components from material-ui for each year diplayed
 * Overrides reac-select component to create select all feature for shop type filter
 * 
 * Options data for group type and shop type are imported from local JSONs in /data
 */

function MapFilter({filter, setFilter}){

  // YEAR FILTER COMPONENT OVERRIDES
  const Checkbox2004 = withStyles({
      root: {
          color: grey[50],
        '&$checked': {
          color: teal[600],
        },
      },
      checked: {},
  })((props) => <Checkbox color="default" {...props} />);
    
  const Checkbox2005 = withStyles({
      root: {
          color: grey[50],
        '&$checked': {
          color: indigo[600],
        },
      },
      checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  const Checkbox2009 = withStyles({
      root: {
          color: grey[50],
        '&$checked': {
          color: red[600],
        },
      },
      checked: {},
  })((props) => <Checkbox color="default" {...props} />);
    
  const Checkbox2010 = withStyles({
      root: {
          color: grey[50],
        '&$checked': {
          color: deepPurple[600],
        },
      },
      checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  const Checkbox2011 = withStyles({
      root: {
          color: grey[50],
        '&$checked': {
          color: pink[600],
        },
      },
      checked: {},
  })((props) => <Checkbox color="default" {...props} />);
    
  const Checkbox2012 = withStyles({
      root: {
          color: grey[50],
        '&$checked': {
          color: brown[600],
        },
      },
      checked: {},
  })((props) => <Checkbox color="default" {...props} />);
  
  const Checkbox2015 = withStyles({
      root: {
          color: grey[50],
        '&$checked': {
          color: orange[600],
        },
      },
      checked: {},
  })((props) => <Checkbox color="default" {...props} />);
    
  const Checkbox2018 = withStyles({
    root: {
        color: grey[50],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  //YEAR FILTER CONTROLLER
  const handleYearChange = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.checked});
  };
//---------------------------------------------------------------------

  //GROUPTYPE FILTER CONTROLLER
  const animatedComponents= makeAnimated();

  const handleGroupTypeChange = (value) => {
    if (value === null) {
      value = [];
    }
    setFilter({...filter, shopType: filter.shopType.splice(0, filter.shopType.length)})
    setFilter({...filter, groupType: value})
  };
//---------------------------------------------------------------------

  //IMPLEMENTING SHOPTYPE FILTER
  //shopTypeSelect.js overrrides react-select select component in order to have select all feature
  const allOption = {
    label: "Select All",
    value:"*"
  }

  const ValueContainer = ({ children, ...props }) => {
    const currentValues = props.getValue();
    let toBeRendered = children;
    if (currentValues.some(val => val.value === allOption.value)) {
      toBeRendered = [[children[0][0]], children[1]];
    }
  
    return (
      <components.ValueContainer {...props}>
        {toBeRendered}
      </components.ValueContainer>
    );
  };

  const MultiValue = props => {
    let labelToBeDisplayed = `${props.data.label}, `;
    if (props.data.value === allOption.value) {
      labelToBeDisplayed = "All selected";
    }
    return (
      <components.MultiValue {...props}>
        <span>{labelToBeDisplayed}</span>
      </components.MultiValue>
    );
  };

  const handleShopTypeChange = (value) => {
    if (value === null) {
      value = [];
    }
    setFilter({...filter, groupType: filter.groupType.splice(0, filter.groupType.length)})
    setFilter({...filter, shopType: value})
  };
//---------------------------------------------------------------------
  return(
      <div className="Filter-Container">
            <h1 id="filter-title"> Filters</h1>
            <div className="filter-type">
                <h2 id="filter-type"> Year Collected</h2>
                <div className="checkbox">
                <div className="checkbox-row">
                    <div className="checkbox-year">
                        <Checkbox2004 checked={filter.selected2004} onChange={handleYearChange} name="selected2004"/>
                        <h3 id="filter-year">2004</h3>
                    </div>
                    <div className="checkbox-year">
                        <Checkbox2005 checked={filter.selected2005} onChange={handleYearChange} name="selected2005"/>
                        <h3 id="filter-year">2005</h3>
                    </div>
                </div>
                <div className="checkbox-row">
                    <div className="checkbox-year">
                        <Checkbox2009 checked={filter.selected2009} onChange={handleYearChange} name="selected2009"/>
                        <h3 id="filter-year">2009</h3>
                    </div>
                    <div className="checkbox-year">
                        <Checkbox2010 checked={filter.selected2010} onChange={handleYearChange} name="selected2010"/>
                        <h3 id="filter-year">2010</h3>
                    </div>
                </div>
                <div className="checkbox-row">
                    <div className="checkbox-year">
                        <Checkbox2011 checked={filter.selected2011} onChange={handleYearChange} name="selected2011"/>
                        <h3 id="filter-year">2011</h3>
                    </div>
                    <div className="checkbox-year">
                        <Checkbox2012 checked={filter.selected2012} onChange={handleYearChange} name="selected2012"/>
                        <h3 id="filter-year">2012</h3>
                    </div>
                </div>
                <div className="checkbox-row">
                    <div className="checkbox-year">
                        <Checkbox2015 checked={filter.selected2015} onChange={handleYearChange} name="selected2015"/>
                        <h3 id="filter-year">2015</h3>
                    </div>
                    <div className="checkbox-year">
                        <Checkbox2018 checked={filter.selected2018} onChange={handleYearChange} name="selected2018"/>
                        <h3 id="filter-year">2018</h3>
                    </div>
                </div>
                </div>
            </div>
            <div className="filter-type select">
                <h2 id="filter-type"> Group Type</h2>
                <Select isMulti components={animatedComponents} value={filter.groupType} options={groupTypeOptions} onChange={handleGroupTypeChange} className="search" controlShouldRenderValue="true" />
            </div>
            <div className="filter-type select">
                <h2 id="filter-type"> Shop Type</h2>
                <ShopTypeSelect
                  options={shopTypeOptions}
                  isMulti
                  hideSelectedOptions= {false}
                  components={{
                    MultiValue, 
                    ValueContainer,
                    animatedComponents
                  }}
                  onChange={handleShopTypeChange}
                  allowSelectAll={true}
                  value={filter.shopType}
                  className="search"
                  />
            </div>
      </div>
  );
}
export default MapFilter;
