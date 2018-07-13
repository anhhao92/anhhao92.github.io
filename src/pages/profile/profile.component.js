import React from 'react';
import {
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar
} from 'reactstrap';

export default class ProfileComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <div className="cv-container">
        <Navbar
          dark
          fixed="top"
          expand="lg"
          id="sideNav"
          className="bg-primary--custom"
        >
          <a className="navbar-brand" href="#page-top">
            <span className="d-block d-lg-none">My Resume</span>
            <span className="d-none d-lg-block">
              <img
                className="img-fluid img-profile rounded-circle mx-auto mb-2"
                src="images/profile.svg"
                alt="avatar"
              />
            </span>
          </a>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#experience">Experience</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#skills">Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#education">Education</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#interests">Interests</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#awards">Awards</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <div className="container-fluid p-0">
          <section
            className="resume-section p-3 p-lg-5 d-flex d-column"
            id="about"
          >
            <div className="my-auto">
              <h1 className="mb-0 h1--custom">
                <span>Tran </span>
                <span className="text-primary--custom">Anh Hao</span>
              </h1>
              <div className="subheading mb-5">
                <span>
                  Tan Binh District · Ho Chi Minh City, Vietnam · (+84)
                  ****-**** ·
                </span>
                <a href="mailto:name@email.com">***hao****@gmail.com</a>
              </div>
              <ul className="mb-5 overview">
                <li>
                  I'm experienced in using javascript frameworks and .NET to
                  provide a robust web application.
                </li>
                <li>
                  4+ years of experience in developing web-based applications.
                </li>
                <li>
                  2+ years of experience working with C#/ASP.NET MVC, Entity
                  Framework, WebAPI, MSSQL.
                </li>
                <li>
                  2+ years of experience working with front-end frameworks like
                  Angular 2+ React, Redux, jQuery, ES6/7, Typescript, SCSS,
                  HTML5/CSS3, Bootstrap, Material, Node.js
                </li>
                <li>
                  Experienced in merging, branching & managing source code using
                  many source control systems: SVN, Git, TFS, Mercurial.
                </li>
              </ul>
              <ul className="list-inline list-social-icons mb-0">
                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x" />
                      <i className="fa fa-facebook fa-stack-1x fa-inverse" />
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://twitter.com/anhhao92"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x" />
                      <i className="fa fa-twitter fa-stack-1x fa-inverse" />
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/hao-tran-anh-637b57125/"
                    target="_blank"
                  >
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x" />
                      <i className="fa fa-linkedin fa-stack-1x fa-inverse" />
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://github.com/anhhao92"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x" />
                      <i className="fa fa-github fa-stack-1x fa-inverse" />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="experience"
          >
            <div className="my-auto">
              <h2 className="mb-5 h2--custom">Experience</h2>

              <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                  <h3 className="mb-0 h3--custom">Software Engineer</h3>
                  <div className="subheading mb-3">KMS Technology</div>
                  <p>
                    Develop front-end based on provided mockups and setup Jenkin
                    CI process using technology stacks: Angular 6, JWT,
                    NGRXStore, Bootstrap 4, WebSocket.
                  </p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary--custom">
                    May 2018 - Present
                  </span>
                </div>
              </div>

              <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                  <h3 className="mb-0 h3--custom">Front-end Developer</h3>
                  <div className="subheading mb-3">Knorex</div>
                  <p>
                    Develop new features for XPO platform using Angular 4,
                    Mongo, Docker, Python Selenium, Javascript, HTML, CSS,
                    Nodejs.
                  </p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary--custom">
                    June 2017 - March 2018
                  </span>
                </div>
              </div>

              <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                  <h3 className="mb-0 h3--custom">Front-end Developer</h3>
                  <div className="subheading mb-3">NFQ</div>
                  <p>
                    Building a front-end for ecommerce web application using
                    react, redux, bootstrap, webpack
                  </p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary--custom">
                    March 2017 - June 2017
                  </span>
                </div>
              </div>

              <div className="resume-item d-flex flex-column flex-md-row">
                <div className="resume-content mr-auto">
                  <h3 className="mb-0 h3--custom">Software Engineer</h3>
                  <div className="subheading mb-3">KMS Technology</div>
                  <p>
                    Redesigned Agency Front Office (AFO) web application in true
                    MVC web-based architecture utilizing latest technologies in
                    .NET, JavaScript, TypeScript, LESS, Kendo UI, HTML5, and
                    cross browser support.
                  </p>
                  <p>
                    Developed several modules of KBB web application using C#,
                    ASP.NET MVC, Javascript, SASS, Gulp.
                  </p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary--custom">
                    October 2014 - Febuary 2017
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="skills"
          >
            <div className="my-auto">
              <h2 className="mb-5 h2--custom">Skills</h2>

              <div className="subheading mb-3">
                Programming Languages &amp; Tools
              </div>
              <ul className="list-inline list-icons">
                <li className="list-inline-item">
                  <i className="devicons devicons-html5" />
                </li>
                <li className="list-inline-item">
                  <i className="devicons devicons-css3" />
                </li>
                <li className="list-inline-item">
                  <i className="devicons devicons-javascript" />
                </li>
                <li className="list-inline-item">
                  <i className="devicons devicons-jquery" />
                </li>
                <li className="list-inline-item">
                  <i className="devicons devicons-sass" />
                </li>
                <li className="list-inline-item">
                  <i className="devicons devicons-git" />
                </li>
                <li className="list-inline-item">
                  <i className="devicons devicons-bootstrap" />
                </li>
                <li className="list-inline-item">
                  <i className="devicons devicons-angular" />
                </li>
                <li className="list-inline-item">
                  <i className="devicons devicons-react" />
                </li>
                <li className="list-inline-item">
                  <i className="devicons devicons-npm" />
                </li>
                <li className="list-inline-item">
                  <i className="devicons devicons-netmagazine" />
                </li>
                <li className="list-inline-item">
                  <i className="devicons devicons-nodejs" />
                </li>
                <li className="list-inline-item">
                  <i className="devicons devicons-docker" />
                </li>
              </ul>

              <div className="subheading mb-3">Workflow</div>
              <ul className="fa-ul mb-0">
                <li>
                  <i className="fa-li fa fa-check" />
                  Mobile-First, Responsive Design
                </li>
                <li>
                  <i className="fa-li fa fa-check" />
                  Cross Browser Testing &amp; Debugging
                </li>
                <li>
                  <i className="fa-li fa fa-check" />
                  Cross Functional Teams
                </li>
                <li>
                  <i className="fa-li fa fa-check" />
                  Agile Development &amp; Scrum
                </li>
              </ul>
            </div>
          </section>
          <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="education"
          >
            <div className="my-auto">
              <h2 className="mb-5 h2--custom">Education</h2>

              <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                  <h3 className="mb-0 h3--custom">
                    Ho Chi Minh City University of Science
                  </h3>
                  <div className="subheading mb-3">Bachelor of Science</div>
                  <div>Information Technology</div>
                  <p>GPA: 3.55</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary--custom">
                    September 2010 - September 2014
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="interests"
          >
            <div className="my-auto">
              <h2 className="mb-5 h2--custom">Interests</h2>
              <p>
                Apart from being a web developer, I enjoy most of my time being
                outdoors.
              </p>
              <p className="mb-0">
                When forced indoors, I follow a number of sci-fi and fantasy
                genre movies and television shows, I spend a large amount of my
                free time exploring the latest technolgy advancements in the
                front-end web development world.
              </p>
            </div>
          </section>

          <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="awards"
          >
            <div className="my-auto">
              <h2 className="mb-5 h2--custom">Awards &amp; Certifications</h2>
              <ul className="fa-ul mb-0">
                <li>
                  <i className="fa-li fa fa-trophy text-warning" />
                  TOEIC - 650
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
