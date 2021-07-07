import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import DateComponent from './DateComponent';
import IntroSentence from './IntroSentence';
import DearComponent from './DearComponent';
import ExperienceSummary from './ExperienceSummary';
import SecondParagraph from './SecondParagraph';
import RequirementSummary from './RequirementSummary';
import Ending from './Ending';

class OutputContainer extends Component {

    render() {
        let secondParagraph = (this.props.secondParagraph) ? <SecondParagraph /> : ''

        return (
            <div align="left">
                {/*<HeaderComponent />
                <DateComponent />*/}
                <DearComponent person={this.props.dearPerson} />
                <p>
                    <IntroSentence jobsite={this.props.jobsite} jobtitle={this.props.jobtitle} company={this.props.company} />
                    <ExperienceSummary arr={this.props.exp} />
                </p>
                <p>
                    {secondParagraph}
                </p>
                <RequirementSummary points={this.props.requirements} />
                <Ending />
            </div>
        );
    }
}

export default OutputContainer;
