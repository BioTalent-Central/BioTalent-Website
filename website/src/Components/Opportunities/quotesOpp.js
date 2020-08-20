import React from 'react'
import "shards-ui/dist/css/shards.min.css"

export default class contentAboutUs extends React.Component{
    render() {
        return (
          <div>
            <div className="content-title"><h1>Testimonials</h1></div>
            <div className="quotesContainer">
              <div className="quote-row">
                <div className="row">
                    <div className="two columns">
                      <div className="quote-image">
                        <img src='images/project-six/Laberge.jpg' alt="StudentPic"/>
                      </div>
                    </div>
                    <div className="ten columns">
                      <div className="quote">
                        <h4 className="quote-name">
                          Marie-Pier Laberge
                        </h4>
                        <p className ="quote-description">
                          Research Assistant, BioMakerSpace
                        </p>
                          <p className="statement">
                            "The BioTalent Program is a remarkable learning experience for students. By offering student-led projects, this program gave me the opportunity to develop my leadership and my organization skills. Working with students from different faculties allowed me to acquire a lot of new knowledge and benefit from the different strengths all individuals can bring to a project. I am grateful to the BioTalent Program for giving me such a great work experience."
                          </p>
                      </div>
                    </div>
                </div>
              </div>
              <div className="quote-row">
                <div className="row">
                    <div className="ten columns">
                      <div className="quote">
                        <h4 className="quote-name">
                          Sireen Hallal
                        </h4>
                        <p className ="quote-description">
                          Research Assistant, BioMakerSpace
                        </p>
                          <p className="statement">
                            "I participated in the uOttawa BioTalent program during my first CO-OP work term, and it was a phenomenal experience. Not only did I learn how to apply my academic knowledge to the workplace, but I also gained valuable knowledge from different areas of study since I was part of an interdisciplinary student team. For instance, I learned quite a lot about biotechnology, mechanical engineering, business, and entrepreneurship. I further obtained critical skills in project development and management, and I significantly improved my teamwork and leadership skills. Overall, it has been a truly rewarding experience; I am grateful that I was given this opportunity, especially during a worldwide pandemic. My sincere thanks go to Dr. Mads Kaern, the University of Ottawa’s CO-OP Office, and BioTalent Canada, who worked together to provide us with this wonderful learning experience!"
                          </p>
                      </div>
                    </div>
                    <div className="two columns">
                      <div className="quote-image">
                        <img src='images/project-six/Hallal.png' alt="StudentPic"/>
                      </div>
                    </div>
                </div>
              </div>
              <div className="quote-row">
                <div className="row">
                  <div className="two columns">
                    <div className="quote-image">
                        <img src='images/project-eight/Hwang.png' alt="StudentPic"/>
                    </div>
                  </div>
                    <div className="ten columns">
                      <div className="quote">
                        <h4 className="quote-name">
                          Roy Hwang
                        </h4>
                        <p className ="quote-description">
                          Research Assistant, Biocomputing
                        </p>
                          <p className="statement">
                              "The Biotalent program aids students to apply their current understanding learned from school to an application-based student led project with a team of passionate peers. I enjoyed my work term discovering more about RNA-based biocomputing and how the aspects of engineering and biology come together to modernize computable technology. I would highly recommend this program to any student interested in research project development and curious about the advancement of synthetic biology and the biotechnology industry."
                          </p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
