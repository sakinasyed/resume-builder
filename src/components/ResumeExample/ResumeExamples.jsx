import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ResumeExample.css";

function ResumeExamples(props) {
  const responsive = {
    desktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
    },

    tablet: {
      breakpoint: { max: 1200, min: 780 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 780, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Container ClassName="resume-example">
        <h1>Best Resume Examples for 2023: 20+ CV Examples by Industry</h1>

        <button>BUILD YOUR RESUME</button>
        <Carousel
          responsive={responsive}
          infinite={true}
          className="owl-carousel owl-theme help-slider"
        >
          <div className="item">
            <img
              className="example-img"
              src="https://i.pinimg.com/736x/00/39/da/0039dab480b1623749b748384900b0a8.jpg"
              alt="Image"
            ></img>
          </div>
          <div className="item">
            <img
              className="example-img"
              src="https://d1xn1bcogdo8ve.cloudfront.net/185/image.png"
              alt="Image"
            ></img>
          </div>
          <div className="item">
            <img
              className="example-img"
              src="https://www.coolfreecv.com/images/cv-template-06.jpg"
              alt="Image"
            ></img>
          </div>
          <div className="item">
            <img
              className="example-img"
              src="https://s3.resume.io/cdn-cgi/image/width=544,height=480,fit=crop,gravity=top,quality=75,format=auto/uploads/local_template_image/image/2081/persistent-resource/new-york-cv-templates.jpg"
              alt="Image"
            ></img>
          </div>

          <div className="item">
            <img
              className="example-img"
              src="https://s3-eu-west-1.amazonaws.com/samples-kickresume-com/161/thumbnail.png"
              alt="Image"
            ></img>
          </div>
          <div className="item">
            <img
              className="example-img"
              src="https://d25zcttzf44i59.cloudfront.net/business-resume-example.png"
              alt="Image"
            ></img>
          </div>
          <div className="item">
            <img
              className="example-img"
              src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-intro-1@3x.png"
              alt="Image"
            ></img>
          </div>
          <div className="item">
            <img
              className="example-img"
              src="https://cultivatedculture.com/wp-content/themes/x5-child/assets/images/templates/template5.jpg"
              alt="Image"
            ></img>
          </div>
          <div className="item">
            <img
              className="example-img"
              src="https://resumegenius.com/wp-content/uploads/Internship-Resume-Example-v4.png"
              alt="Image"
            ></img>
          </div>
          <div className="item">
            <img
              className="example-img"
              src="https://www.livecareer.com/wp-content/uploads/images/uploaded/resume-examples-expanded/human-resources-human-resources-contemporary-5.jpg"
              alt="Image"
            ></img>
          </div>
          <div className="item">
            <img
              className="example-img"
              src="https://www.jobseeker.com/api/media/documents/3542c818-422a-4652-b2e9-a183e7ea2d90/College-Student-Resume-Example.svg"
              alt="Image"
            ></img>
          </div>
          <div className="item">
            <img
              className="example-img"
              src="https://cdn-images.zety.com/pages/student_resume_template_iconic.png"
              alt="Image"
            ></img>
          </div>
          <div className="item">
            <img
              className="example-img"
              src="https://www.coolfreecv.com/images/cv_templates_with_photo.jpg"
              alt="Image"
            ></img>
          </div>
          <div className="item">
            <img
              className="example-img"
              src="https://global-uploads.webflow.com/5e9b599e716f9d94b6c84f43/606faed39472eb276636b8f5_pdf-resume-template-format.png"
              alt="Image"
            ></img>
          </div>
          <div className="item">
            <img
              className="example-img"
              src="https://www.resumecoach.com/wp-content/themes/cv-wp-theme-resumecoach/library/images/slider/cf/johannesburg.png"
              alt="Image"
            ></img>
          </div>
          <div className="item">
            <img
              className="example-img"
              src="https://i.pinimg.com/736x/2e/9e/c5/2e9ec5437fe9b407a4fcdffc9c48c165.jpg"
              alt="Image"
            ></img>
          </div>
          <div className="item">
            <img
              className="example-img"
              src="https://global-uploads.webflow.com/5e9b599e716f9d94b6c84f43/606fba57ac140558ab440120_cv-template-format.png"
              alt="Image"
            ></img>
          </div>
          <div className="item">
            <img
              className="example-img"
              src="https://www.cvmaker.com/storage/Tom-Franklin-Substitute-Teacher-Resume-Sample.jpg"
              alt="Image"
            ></img>
          </div>
          <div className="item">
            <img
              className="example-img"
              src="https://images.template.net/25733/Developmental-Specialist-Resume-Template-1-0.jpg"
              alt="Image"
            ></img>
          </div>
          <div className="item">
            <img
              className="example-img"
              src="https://www.livecareer.com/wp-content/uploads/2021/07/IT_Project_Manager_Distinguished.png"
              alt="Image"
            ></img>
          </div>
        </Carousel>
        <p>
          The best CV samples will always: <br />
          <ol>
            <li>
              <h5>Display contact details correctly.</h5> Your CV must include
              your name, location, phone number and email address. As our sample
              CV shows, you must place it at the very top of the CV template.
              Add links to your LinkedIn profile and professional website or
              portfolio if you have them.
            </li>
            <li>
              <h5>Have a professional summary.</h5> Also called a CV statement
              or a CV profile, this short paragraph falls directly under the
              contact information section of a curriculum vitae. It introduces
              you to employers while highlighting your most significant
              qualifications for the job.{" "}
            </li>
            <li>
              <h5>Include a range of skills.</h5>
              Every CV example should have a skills section. Employers want to
              see a mix of soft skills, hard skills, technical skills, and —
              depending on your experience level and career goals — transferable
              skills. Make your CV ATS-friendly by highlighting keywords from
              the job description that match your abilities. Review your
              academic and work experience and add other skills you know will
              help you excel at the job
            </li>
            <li>
              <h5>Provide educational details.</h5>
              An education section is a must on a CV. Add the schools you
              attended, their locations and the dates you were there, in reverse
              chronological order, as our professional curriculum vitae example
              demonstrates. There is no need to add your high school unless this
              is your first job.
            </li>
            <li>
              <h5>
                Present professional experience in reverse-chronological order.
              </h5>
              When writing the CV work experience section, spotlight your key
              accomplishments rather than your duties. Begin your work history
              section with your most recent job and work your way backward. Only
              include employment that is relevant to the position.
              <p>
                When listing your achievements in the employment section of your
                CV, write them as measurable achievements so employers can see
                the impact of your work. For example, “Implemented new lab
                procedure” has less value than “Implemented a new lab procedure
                that increased overall efficiency by 30%, resulting in 15% fewer
                mistakes in 3 months.”
              </p>
            </li>
            <li>
              <h5>Publications.</h5>
              Job seekers in science, academic, medical and legal fields should
              place this section on their curriculum vitae. Include published or
              pending theses, dissertations, articles, reviews, research, or
              books.
            </li>
            <li>
              <h5>Honors and awards.</h5>
              Potential employers will surely notice an awards section on a CV.
              It’s a great way to show your most significant achievements — just
              be sure only to add accolades that pertain to the job.
            </li>
            <li>
              <h5>Volunteer activities.</h5>
              Applicants can get a leg up by including this section on their CVs
              because it shows interest in the broader community and conveys a
              selfless mindset. A desire to give to others selflessly is
              essential in the medical, educational and legal fields.
            </li>
            <li>
              <h5>Professional memberships.</h5>
              Some job applicants like to add these to their curriculum vitae to
              show hiring managers they are invested in their fields.
            </li>
            <li>
              <h5>Training, certifications and licenses.</h5>
              Suppose you have professional training, certifications, or
              licenses that have prepared you for the job. In that case, you
              might consider creating a separate section for them on your CV.
            </li>
            <li>
              <h5>Presentations.</h5>
              If you have a history of giving presentations or speaking publicly
              on topics about your field, describe them in this curriculum vitae
              section.
            </li>
            <li>
              <h5>
                Conferences, conventions, or seminars relevant to your industry.
              </h5>
              Having this section on your CV can help you stand out because it
              demonstrates your interest and depth of knowledge.
            </li>
            <li>
              <h5>Languages. </h5>
              No matter what industry you’re in or job you want, showing
              proficiency in more than one language on your curriculum vitae
              will get you noticed by prospective employers because it shows
              your ability to communicate effectively to a diverse range of
              people. It also hints to knowledge of other cultures and an
              interest in the world around you.
            </li>
          </ol>
        </p>
      </Container>
    </div>
  );
}

export default ResumeExamples;
