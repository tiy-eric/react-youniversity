import React, { Component } from 'react';
import { FormGroup, Button, FormControl, ControlLabel, HelpBlock, Panel, Alert } from 'react-bootstrap';

//model that represents data that is needed to create a user
import {User} from '../models/User'
import {Preferences} from '../models/Preferences'

//since we have a model the represents the preferences that need to be set
//for each user, I use object.keys to get the properties on the object as an array for when 
//I need to check if the field i am working with belongs in preferences
//see line 64
const preferencesFields = Object.keys(new Preferences());

const states = ['AK', 'AL', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV','WY'];

const majors = ['education', 'mathematics', 'business_marketing', 'communications_technology', 'language', 'visual_performing', 'engineering_technology', 'parks_recreation_fitness', 'agriculture', 'security_law_enforcement', 'computer', 'precision_production', 'humanities', 'library', 'psychology', 'social_science', 'legal', 'english', 'construction', 'military', 'communication', 'public_administration_social_service', 'architecture', 'ethnic_cultural_gender', 'resources', 'health', 'engineering', 'history', 'theology_religious_vocation', 'transportation', 'physical_science', 'science_technology', 'biological', 'family_consumer_science', 'philosophy_religious', 'personal_culinary', 'multidiscipline', 'mechanic_repair_technology']

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class EditUser extends Component {

    currentLocations = this.props.currentUser.preferences.location.split(",");
    currentMajors = this.props.currentUser.preferences.major.split(",");
    //method to render the option values for a dropdown
    //used for states, cost, and majors
    renderOptions = (value, key) => {
        return <option key={key} value={value}>{value}</option>
    }

    //method that runs when the form is submitted
    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        
        //new UserModel object that we populate with the form data to make the api request
        let formData = new User();

        //looping over all the fields from the form and working with each one 
        //the variable input represents the form field we are currently working with
        for (const input of formSubmitEvent.target) {
            //lets skip this iteration of the loop if they field was left blank
            if(!input.value){
                if(preferencesFields.includes(input.name)){
                    delete(formData.preferences[input.name])
                }else{
                    delete(formData[input.name])
                }
                continue;
            }
            
            //using a switch to handle building the data for majors and location properly.
            //needs to be a comma separated string with all the selected values together
            switch(input.name){

                case 'major':
                case "location":
                    var value = "";
                    for (var i = 0; i < input.length; i++) {
                    
                        if (input[i].selected) {
                        value += input[i].value + ","
                        }
                    }

                    //get index of the last comma from the generated comma separated list
                    let lastComma =  value.lastIndexOf(',');
                    
                    //set the matching property in formDate.preferences minus the last comma
                    formData.preferences[input.name] = value.substring(0, lastComma);
                    break;

            default:
                //if the input field we are working with has a name that is in preferencesFields array
                //lets make sure it gets put inside the preferences property of the UserModel
                if(preferencesFields.includes(input.name)){
                    formData.preferences[input.name] = input.value
                }else{
                    formData[input.name] = input.value
                }
                
            }
                
        }

        //make the api call
        this.props.updateUser(formData)

    }

  render() {

    let statusMessage = "";
    if(this.props.updatedUser){
        statusMessage =  (
            <Alert bsStyle="success">
                User Updated Successfully
            </Alert>
        )
    }
    
    return (
        <div className="container">
            {statusMessage}
            <Panel header="YOUniversity Update User">

                <form onSubmit={this.handleFormSubmit}>
                <input type="hidden" name="username" defaultValue={this.props.currentUser.username} />
                <FieldGroup
                    className="form-field"
                    id="formControlsFirstName"
                    type="string"
                    label="First Name"
                    placeholder="First Name"
                    name="firstName"
                    defaultValue={this.props.currentUser.firstName}
                />
                <FieldGroup
                    className="form-field"
                    id="formControlsLastName"
                    type="string"
                    label="Last Name"
                    placeholder="Last Name"
                    name="lastName"
                    defaultValue={this.props.currentUser.lastName}
                />

                <FieldGroup
                    className="form-field"
                    id="formControlsPassword"
                    type="password"
                    label="Password"
                    placeholder="Password"
                    name="password"
                />
                
                <label>Major</label>
                <div className="form-group">
                    <select defaultValue={this.currentMajors} multiple="true" name="major">
                        {majors.map(this.renderOptions)}
                    </select>
                </div>
        
                <label>Location</label>
                <div className="form-group">
                    <select defaultValue={this.currentLocations} multiple="true" name="location">
                        {states.map(this.renderOptions)}
                    </select> 
                </div>

                <Button  className="btn btn-default"type="submit">Create Profile</Button>

                </form>
            </Panel>
        </div>

    );
  }
}


export default EditUser;