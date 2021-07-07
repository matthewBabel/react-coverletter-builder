import React, { Component } from 'react';
import CustomListBox from './CustomListBox';
import experience from '../../experience.json';

class UIContainer extends Component {
    render() {
        return (
            <div>
                <label for="dear">Dear input: </label>
                <input type="text" id="dear" name="dear" required
                    minLength="4" maxLength="30" size="30" value={this.props.dearValue}
                    onChange={(e) => this.props.dearInputChange(e.target.value)}></input>

                <br></br>
                <label for="jobsite">Job Site: </label>
                <input type="text" id="jobsite" name="jobsite" required
                    minLength="4" maxLength="50" size="30" value={this.props.jobSiteValue}
                    onChange={(e) => this.props.jobSiteChange(e.target.value)}></input>
                <br></br>
                <label for="jobtitle">Job Title: </label>
                <input type="text" id="jobtitle" name="jobtitle" required
                    minLength="4" maxLength="50" size="30" value={this.props.jobTitleValue}
                    onChange={(e) => this.props.jobTitleChange(e.target.value)}></input>
                <br></br>
                <label for="company">Company Name: </label>
                <input type="text" id="company" name="company" required
                    minLength="4" maxLength="50" size="30" value={this.props.companyValue}
                    onChange={(e) => this.props.companyChange(e.target.value)}></input>
                <CustomListBox update={this.props.experienceChange} data={experience}
                               addHeader={"Add Thing to Say"} 
                               boxOneHeader={"Possible Things to Say"} boxTwoHeader={"Currently Saying"}
                               boxOneHeight={400} boxTwoHeight={300}
                />
                <br></br>
                <input type="checkbox" id="secondParagraph" name="secondParagraph" checked={this.props.secondParagraph} onChange={this.props.secondParagraphChange}></input>
                <label for="secondParagraph">&emsp;Second Paragraph</label>
                <CustomListBox update={this.props.requirementsChange} data={[]}
                               addHeader={"Add Highlighted Requirement"} 
                               boxOneHeader={"Possible Requirements"} boxTwoHeader={"Current Requirements"}
                               boxOneHeight={250} boxTwoHeight={250}
                />
            </div>
        );
    }
}

export default UIContainer;
