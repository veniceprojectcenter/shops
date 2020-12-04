import React from 'react';
import { withStyles} from "@material-ui/core/styles";
import { grey } from '@material-ui/core/colors';
import Radio from "@material-ui/core/Radio";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


function MapFilter(){

    //custom radio component to instead be colored white
    const WhiteRadio = withStyles({
        root: {
          color: grey[50],
          '&$checked': {
            color: grey[50],
          },
        },
        checked: {},
      })((props) => <Radio color="default" {...props} />);
    const animatedComponents= makeAnimated();

    const [selectedValue, setSelectedValue] = React.useState('2018');

    const handleChange = (event) =>{
        setSelectedValue(event.target.value);
    }
    

    const groupTypeOptions = [
        { value: 'Mixed', label: 'Mixed' },
        { value: 'Residential', label: 'Residential' },
        { value: 'Tourist', label: 'Tourist' }
    ]

    return(
        <div className="Filter-Container">
                <h1 id="filter-title"> Filters</h1>
                <div className="filter-type">
                    <h2 id="filter-type"> Year Collected</h2>
                    <div className="radio">
                    <div className="radio-row">
                        <div className="radio-year">
                            <WhiteRadio
                                checked={selectedValue === '2004'}
                                onChange={handleChange}
                                value="2004"
                                color="default"
                                name="2004"
                                inputProps={{ 'aria-label': '2004' }}
                            />
                            <h3 id="filter-year">2004</h3>
                        </div>
                        <div className="radio-year">
                            <WhiteRadio
                                checked={selectedValue === '2011'}
                                onChange={handleChange}
                                value="2011"
                                color="default"
                                name="2011"
                                inputProps={{ 'aria-label': '2011' }}
                            />
                            <h3 id="filter-year">2011</h3>
                        </div>
                    </div>
                    <div className="radio-row">
                        <div className="radio-year">
                            <WhiteRadio
                                checked={selectedValue === '2005'}
                                onChange={handleChange}
                                value="2005"
                                color="default"
                                name="2005"
                                inputProps={{ 'aria-label': '2005' }}
                            />
                            <h3 id="filter-year">2005</h3>
                        </div>
                        <div className="radio-year">
                            <WhiteRadio
                                checked={selectedValue === '2012'}
                                onChange={handleChange}
                                value="2012"
                                color="default"
                                name="2012"
                                inputProps={{ 'aria-label': '2012' }}
                            />
                            <h3 id="filter-year">2012</h3>
                        </div>
                    </div>
                    <div className="radio-row">
                        <div className="radio-year">
                            <WhiteRadio
                                checked={selectedValue === '2009'}
                                onChange={handleChange}
                                value="2009"
                                color="default"
                                name="2009"
                                inputProps={{ 'aria-label': '2009' }}
                            />
                            <h3 id="filter-year">2009</h3>
                        </div>
                        <div className="radio-year">
                            <WhiteRadio
                                checked={selectedValue === '2015'}
                                onChange={handleChange}
                                value="2015"
                                color="default"
                                name="2015"
                                inputProps={{ 'aria-label': '2015' }}
                            />
                            <h3 id="filter-year">2015</h3>
                        </div>
                    </div>
                    <div className="radio-row">
                        <div className="radio-year">
                            <WhiteRadio
                                checked={selectedValue === '2010'}
                                onChange={handleChange}
                                value="2010"
                                color="default"
                                name="2010"
                                inputProps={{ 'aria-label': '2010' }}
                            />
                            <h3 id="filter-year">2010</h3>
                        </div>
                        <div className="radio-year">
                            <WhiteRadio
                                checked={selectedValue === '2018'}
                                onChange={handleChange}
                                value="2018"
                                color="default"
                                name="2018"
                                inputProps={{ 'aria-label': '2018' }}
                            />
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
                    <Select isMulti components={animatedComponents} options={groupTypeOptions} className="search" classNamePrefix="shopType" controlShouldRenderValue="true" />
                </div>
        </div>
    );

}
export default MapFilter;
