import React, { Component } from 'react';
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import SurveyCards from './SurveyCard'
import { Menu, Card, Image } from 'semantic-ui-react'
import './profile.css'

class Profile extends Component {
    
    showSurveys = () => {
        let surveys = this.props.surveys.filter(survey=> survey.user_id === this.props.user.id)
        return (
        <Card.Group itemsPerRow={3}>
            {surveys.map(survey => <SurveyCards user={this.props.user} token={this.props.token} deleteSurvey={this.props.deleteSurvey} key={survey.id} survey={survey}/>)}
        </Card.Group >
        )
    }

  render() {
      let {user} = this.props
    return (
        <div className="profile">
            <h1>Welcome {user.username}!</h1>
            <Image src={`${user.image}`} size='small'/>
            <div className="profile-details">Interests: {user.interest}<br></br>
            Email: {user.email}</div>
            <h3>My Surveys</h3>
            { this.showSurveys() }
            <br></br>
            <Menu>
                <Menu.Item> 
                    <NavLink to="/createsurvey">Create Survey</NavLink>
                </Menu.Item>
            </Menu>
        </div>
    )
  }

}

const MSTP = (state) => {
    return {surveys: state.dataReducer.surveys} 
}

export default connect(MSTP)(Profile);