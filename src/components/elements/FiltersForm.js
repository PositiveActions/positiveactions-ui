import React, { Component } from 'react';
import { FormControlLabel, Checkbox, TextField } from '@material-ui/core';
// import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

class FiltersForm extends Component {
    render() {

        const { events, filterEvents, categoryFilters } = this.props;

        return (
            <div className="filters-form-container">
                <div className="categories-filter">
                    <div className="filter-title">
                        CATEGORIES
                    </div>
                    <div className="categories-checkboxes">
                        {categoryFilters.map(filter => 
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={filter.checked}
                                    onChange={this.props.handleFilterChange.bind(this, filter.name)}
                                />
                            }
                            label={filter.name}
                        />    
                        )}
                    </div>
                </div>
                {/* <div className="dates-filter">
                    <div className="filter-title">
                        DATES
                    </div>
                    <div className="dates-checkboxes">
                        <form noValidate>
                            <TextField
                                label="Start"
                                type="date"
                                defaultValue="2019-02-25"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                label="End"
                                type="date"
                                defaultValue="2019-02-25"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                    </div>
                </div>
                <div className="apply-button-container">
                    <div className="apply-button-background"></div>
                    <div className="apply-button">
                        apply filters
                    </div>
                </div> */}
            </div>
        );
    }
}

export default FiltersForm;