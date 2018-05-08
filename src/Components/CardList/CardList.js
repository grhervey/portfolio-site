import React, { Component } from 'react';
import './CardList.css'
import image1 from '../../Images/1.png';
import image2 from '../../Images/2.png';
import image3 from '../../Images/3.png';
import ProjectCard from '../ProjectCard/ProjectCard';

class CardList extends Component {
    _getType = (i) => {
        let temp = ((i+1) % 3);
        let width = window.innerWidth;
        if(width < 900) {
            return 'Mobile';
        }
        if(temp === 1) {
            return 'Big';
        } else if(temp === 2) {
            return 'Medium';
        } else {
            return 'Small';
        }
    }

    _getImage = (i) =>{
        switch(i){
            case 0:
                return(image1);
            case 1:
                return(image2);
            case 2:
                return(image3);
            default:
                return(image1);
        }
    }
    projectCard = this.props.projects.map((project, i) => {
        const {projects} = this.props;
        console.log(projects);
        return (
        <ProjectCard
            id={i}
            type={this._getType(i)}
            name={projects[i].projectName}
            image={this._getImage(i)}
            link={projects[i].link}
            git={projects[i].git}
            />
        );
    })
    render() {
        console.log(this.props);
        return (
        <div className='cardList--container'>
           {this.projectCard}
        </div>
        );
    }
}


export default CardList;
