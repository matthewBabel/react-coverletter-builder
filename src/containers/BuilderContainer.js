import React, { Component } from 'react';
import UIContainer from './UI/UIContainer';
import OutputContainer from './Output/OutputContainer';

class BuilderContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dearPerson: 'Hiring Manager',
            jobsite: "indeed.com",
            jobtitle: "Software Developer",
            company: "your company",
            experience: [],
            requirementPoints: [],
            secondParagraph: true,
        }
    }

    dearInputChange = (value) => {
        this.setState({ dearPerson: value })
    }

    jobSiteChange = (value) => {
        this.setState({ jobsite: value })
    }

    jobTitleChange = (value) => {
        this.setState({ jobtitle: value })
    }

    companyChange = (value) => {
        this.setState({ company: value })
    }

    experienceChange = (value) => {
        this.setState({ experience: value })
    }

    requirementsChange = (value) => {
        console.log(JSON.stringify(value));
        this.setState({ requirementPoints: value })
    }

    secondParagraphChange = () => {
        this.setState({ secondParagraph: !this.state.secondParagraph })
    }

    render() {
        return (
            <div className="container-fluid mt-4">
                <div>
                    <h1>Cover Letter Builder</h1>
                </div>
                <div className="row">
                    <div className="col-md-6 text-left">
                        <UIContainer dearInputChange={this.dearInputChange} dearValue={this.state.dearPerson}
                            jobSiteChange={this.jobSiteChange} jobSiteValue={this.state.jobsite}
                            jobTitleChange={this.jobTitleChange} jobTitleValue={this.state.jobtitle}
                            companyChange={this.companyChange} companyValue={this.state.company}
                            experienceChange={this.experienceChange} requirementsChange={this.requirementsChange}
                            secondParagraphChange={this.secondParagraphChange}   secondParagraph={this.state.secondParagraph}
                        />
                    </div>
                    <div className="col-md-6">
                        <OutputContainer dearPerson={this.state.dearPerson}
                            jobsite={this.state.jobsite}
                            jobtitle={this.state.jobtitle}
                            company={this.state.company}
                            exp={this.state.experience}
                            requirements={this.state.requirementPoints}
                            secondParagraph={this.state.secondParagraph}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default BuilderContainer;
