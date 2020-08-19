import React from 'react'
import "shards-ui/dist/css/shards.min.css"
import Picture from './images/image1.jpg'

export default class contentAboutUs extends React.Component{
    render() {
        return (
            <div className="quotesContainer">
                <div className="row">
                    <div className="two columns">
                        <img src={Picture} style={{width: 100}}/>
                    </div>
                    <div className="ten columns">
                        <p className="quote">
                        The BioTalent Program is a remarkable learning experience for students. By offering student-led projects, this program gave me the opportunity to develop my leadership and my organization skills. Working with students from different faculties allowed me to acquire a lot of new knowledge and benefit from the different strengths all individuals can bring to a project. I am grateful to the BioTalent Program for giving me such a great work experience.
                                        Marie-Pier Laberge

                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="ten columns">
                    <p className="quote">
                    I participated in the uOttawa BioTalent program during my first CO-OP work term, and it was a phenomenal experience. Not only did I learn how to apply my academic knowledge to the workplace, but I also gained valuable knowledge from different areas of study since I was part of an interdisciplinary student team. For instance, I learned quite a lot about biotechnology, mechanical engineering, business, and entrepreneurship. I further obtained critical skills in project development and management, and I significantly improved my teamwork and leadership skills. Overall, it has been a truly rewarding experience; I am grateful that I was given this opportunity, especially during a worldwide pandemic. My sincere thanks go to Dr. Mads Kaern, the University of Ottawa’s CO-OP Office, and BioTalent Canada, who worked together to provide us with this wonderful learning experience! 
                                        Sireen Hallal

                        </p>
                    </div>
                    <div className="two columns">
                        <img src={Picture} style={{width: 100}}/>
                    </div>
                </div>

                <div className="row">
                    <div className="two columns">
                        <img src={Picture} style={{width: 100}}/>
                    </div>

                    <div className="ten columns">
                        <p className="quote">
                        The Biotalent program aids students to apply their current understanding learned from school to an application-based student led project with a team of passionate peers. I enjoyed my work term discovering more about RNA-based biocomputing and how the aspects of engineering and biology come together to modernize computable technology. I would highly recommend this program to any student interested in research project development and curious about the advancement of synthetic biology and the biotechnology industry.
                                Roy Hwang

                        </p>
                    </div>
                </div>
            </div>
        )
    }
}