import React, { Component } from 'react';
import Collapse from '@material-ui/core/Collapse';
// import FilterListIcon from '@material-ui/icons/FilterList';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FiltersForm from './FiltersForm';

class Filters extends Component {

    state = {
        collapsedFilters: false
    }

    onCollapse = () => {
        if (!this.state.collapsedFilters) {
            document.getElementsByClassName('filters-container')[0].getElementsByClassName('MuiSvgIcon-root-1')[0].style.transform = 'rotate(90deg)';
        } else {
            document.getElementsByClassName('filters-container')[0].getElementsByClassName('MuiSvgIcon-root-1')[0].style.transform = 'rotate(0deg)';
        }
        this.setState({collapsedFilters: !this.state.collapsedFilters});
    }

    render() {
        return (
            <div className="filters-container" id="filters-container">
                <div className="filters-title" onClick={this.onCollapse}>
                    <div className="left-part">
                        {/* <FilterListIcon></FilterListIcon>  */}
                        <span className="title">Filters</span>
                    </div>
                    <div className="right-part">
                        <svg width="40" height="40" className="circle-svg">
                            <circle className="outer" cx="20" cy="20" r="15"/>
                        </svg>
                        <ExpandMoreIcon></ExpandMoreIcon>
                    </div>
                </div>
                <Collapse in={this.state.collapsedFilters} className="collapse-container"><FiltersForm events={this.props.events} filterEvents={this.props.filterEvents} categoryFilters={this.props.categoryFilters}handleFilterChange={this.props.handleFilterChange} dateFilterEdate={this.props.dateFilterEdate} dateFilterSdate={this.props.dateFilterSdate} handleDateFilterChange={this.props.handleDateFilterChange}></FiltersForm></Collapse>
            </div>
        );
    }
}

export default Filters;