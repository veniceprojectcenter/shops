import React from 'react';
import { withStyles} from "@material-ui/core/styles";
import { grey, teal, indigo, red, deepPurple, pink, brown, orange, green } from '@material-ui/core/colors';
// import Radio from "@material-ui/core/Radio";
import Select from 'react-select';
import Checkbox  from '@material-ui/core/Checkbox';
import makeAnimated from 'react-select/animated';



function MapFilter({filter, setFilter}){

    
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


    const handleYearChange = (event) => {
        setFilter({ ...filter, [event.target.name]: event.target.checked});
    };

    const animatedComponents= makeAnimated();

    const groupTypeOptions = [
        { value: 'Mixed', label: 'Mixed' },
        { value: 'Residential', label: 'Residential' },
        { value: 'Tourist', label: 'Tourist' }
    ]

    const handleGroupTypeChange = (groupTypeOptions) => {
        setFilter({groupType: groupTypeOptions})
    }
    

    return(
        <div className="Filter-Container">
                <h1 id="filter-title"> Filters</h1>
                <div className="filter-type">
                    <h2 id="filter-type"> Year Collected</h2>
                    <div className="radio">
                    <div className="radio-row">
                        <div className="radio-year">
                            <Checkbox2004 checked={filter.selected2004} onChange={handleYearChange} name="selected2004"/>
                            <h3 id="filter-year">2004</h3>
                        </div>
                        <div className="radio-year">
                            <Checkbox2005 checked={filter.selected2005} onChange={handleYearChange} name="selected2005"/>
                            <h3 id="filter-year">2005</h3>
                        </div>
                    </div>
                    <div className="radio-row">
                        <div className="radio-year">
                            <Checkbox2009 checked={filter.selected2009} onChange={handleYearChange} name="selected2009"/>
                            <h3 id="filter-year">2009</h3>
                        </div>
                        <div className="radio-year">
                            <Checkbox2010 checked={filter.selected2010} onChange={handleYearChange} name="selected2010"/>
                            <h3 id="filter-year">2010</h3>
                        </div>
                    </div>
                    <div className="radio-row">
                        <div className="radio-year">
                            <Checkbox2011 checked={filter.selected2011} onChange={handleYearChange} name="selected2011"/>
                            <h3 id="filter-year">2011</h3>
                        </div>
                        <div className="radio-year">
                            <Checkbox2012 checked={filter.selected2012} onChange={handleYearChange} name="selected2012"/>
                            <h3 id="filter-year">2012</h3>
                        </div>
                    </div>
                    <div className="radio-row">
                        <div className="radio-year">
                            <Checkbox2015 checked={filter.selected2015} onChange={handleYearChange} name="selected2015"/>
                            <h3 id="filter-year">2015</h3>
                        </div>
                        <div className="radio-year">
                            <Checkbox2018 checked={filter.selected2018} onChange={handleYearChange} name="selected2018"/>
                            <h3 id="filter-year">2018</h3>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="filter-type select">
                    <h2 id="filter-type"> Shop Type</h2>
                    <Select isMulti components={animatedComponents} options={groupTypeOptions} className="search" classNamePrefix="shopType" controlShouldRenderValue="true" />
                </div>
                <div className="filter-type select">
                    <h2 id="filter-type"> Group Type</h2>
                    <Select isMulti components={animatedComponents} options={groupTypeOptions} onChange={handleGroupTypeChange} className="search" classNamePrefix="shopType" controlShouldRenderValue="true" />
                </div>
        </div>
    );

}
export default MapFilter;
