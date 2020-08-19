import React from 'react';
import "./aboutus.css";


function aboutus(){
    return(
        <section className="aboutus-section">
            <div className="aboutus-container">
                <div className="aboutus-text-container">
                  <h1 className="aboutusHeadersMAIN">About Us</h1>
                    <p className="aboutus-summary">
                        The uOttawa BioTalent program involves teams of students from many different faculties, leading their own projects to suggest solutions to a real-world biotechnology problem. In the first year of this program, 11 students were recruited to develop unique projects and specific project outcomes in order to create a team of students that can fill gaps in their knowledge and competencies, and contribute to the completion of their project.
                    </p>
                    <h1 className="aboutusHeaders">Our vision</h1>
                    <p className="aboutus-vision">
                        In partnership with BioTalent Canada, our vision is to provide students with a one of a kind co-op experience through the exploration of solutions to real-world problems in the biotechnology sector.
                    </p>
                    <h1 className="aboutusHeaders">Our mission</h1>
                    <p className="aboutus-mission">
                        Our mission is to give uOttawa students the opportunity to work collaboratively with other students from various backgrounds on a self-guided, hands-on project to acquire job-readiness training, while further developing their current skills.
                    </p>
                    <h1 className="aboutusHeaders">Our values</h1>
                    <p className='aboutus-values'>
                        We value the student's perspectives and trust them to come up with innovative solutions to a real-world problem in a self-guided research project.
                    </p>
                    <h1 className="aboutusHeaders">Our history</h1>
                    <p className="aboutus-history">
                        The Coronavirus pandemic was unprecedented and shocking to the whole world, forcing people to remain home in order to ensure their safety. As a result, many lost their jobs or/and found it difficult to find employment, specifically non essential workers, and college and university students. Fortunately, Mads Kaern got in touch with the BioTalent program in order to procure coop students with placements for the summer. Thus, the uOttawa BioTalent project was created.
                    </p>
                    <h1 className="aboutusHeaders">Our partners</h1>
                    <a className="biotalent-link" href="https://www.biotalent.ca/" target="_blank">
                        <img src="BTLogo.png" className="BTLogoIcon"/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default aboutus;
