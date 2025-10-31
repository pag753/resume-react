import { useEffect } from 'react';
import english from './js/arrays/english';
import spanish from './js/arrays/spanish';
import axios from "axios";
const num = Math.floor(Math.random() * 6) + 1;
import(`./styles/pillar-${num}.css`);
function App(props) {
  const { languaje } = props;
  const { arr } = (languaje === 'english') ? english : spanish;
  useEffect(() => {
    const tipo = (languaje === 'english') ? 1 : 2;
    axios.post('/telegram', {
      tipo,
      device: navigator.userAgent
    }, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*"
      }
    });
  });
  return (
    <div className="App">
      <article className="resume-wrapper text-center position-relative">
        <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
          <header className="resume-header pt-4 pt-md-0">
            <div className="media flex-column flex-md-row">
              <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
                <div className="primary-info">
                  <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">Pablo de Jesús</h1>
                  <div className="title mb-3">{arr[1]}</div>
                  <ul className="list-unstyled">
                    <li className="mb-2"><a href="mailto:pablo.gonzalez.alvarado.753@gmail.com">
                      <i
                        className="far fa-envelope fa-fw mr-2"
                        data-fa-transform="grow-3"></i>pablo.gonzalez.alvarado.753@gmail.com</a></li>
                    <li><a href="tel:+52 55 48 66 36 98"><i className="fas fa-mobile-alt fa-fw mr-2"
                      data-fa-transform="grow-6"></i>+52 55 48 66 36 98</a></li>
                  </ul>
                </div>
                <div className="secondary-info ml-md-auto mt-2">
                  <ul className="resume-social list-unstyled">
                    <li className="mb-3"><a href="https://www.linkedin.com/in/pag753/" target="_blank" rel="noreferrer"><span
                      className="fa-container text-center mr-2"><i
                        className="fab fa-linkedin-in"></i></span>linkedin.com/in/pag753</a></li>
                    <li className="mb-3"><a href="https://github.com/pag753/" target="_blank" rel="noreferrer"><span
                      className="fa-container text-center mr-2"><i
                        className="fab fa-github-alt fa-fw"></i></span>github.com/pag753</a></li>
                    <li className="mb-3"><a href="https://t.me/pa_753" target="_blank" rel="noreferrer"><span
                      className="fa-container text-center mr-1"><i
                        className="fab fa-telegram"></i></span>Telegram</a></li>
                    <li><a href="https://resume.pgonzalez.casa" target="_blank" rel="noreferrer"><span
                      className="fa-container text-center mr-2"><i
                        className="fas fa-globe"></i></span>https://resume.pgonzalez.casa</a>
                    </li>
                  </ul>
                </div>
                <div className="secondary-info ml-md-auto mt-2">
                  <ul className="resume-social list-unstyled">
                    <li className="mb-3"><a href="whatsapp://send?abid=+5215548663698&text=Hello%2C%20Pablo!"
                      target="_blank" rel="noreferrer"><span className="fa-container text-center mr-1"><i
                        className="fab fa-whatsapp"></i></span></a></li>
                    <li className="mb-3"><a href="https://www.facebook.com/messages/t/PAdJGA" target="_blank" rel="noreferrer"><span
                      className="fa-container text-center mr-1"><i
                        className="fab fa-facebook-messenger"></i></span></a></li>
                    <li className="mb-3"><a href="https://www.instagram.com/pag753" target="_blank" rel="noreferrer"><span
                      className="fa-container text-center mr-1"><i
                        className="fab fa-instagram"></i></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
          <div className="resume-body p-5">
            <section className="resume-section summary-section mb-5">
              <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">{arr[2]}</h2>
              <div className="resume-section-content">
                <p className="mb-0">{arr[3]}</p>
              </div>
            </section>
            <div className="row">
              <div className="col-lg-9">
                <section className="resume-section experience-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">{arr[4]}</h2>
                  <div className="resume-section-content">
                    <div className="resume-timeline position-relative">


                      <article className="resume-timeline-item position-relative pb-5">
                        <div className="resume-timeline-item-header mb-2">
                          <div className="d-flex flex-column flex-md-row">
                            <h3 className="resume-position-title font-weight-bold mb-1">Full stack developer
                            </h3>
                            <div className="resume-company-name ml-auto">Oracle</div>
                          </div>
                          <div className="resume-position-time">{arr[53]}</div>
                        </div>
                        <div className="resume-timeline-item-desc">
                          <p>{arr[54]}</p>
                          <h4 className="resume-timeline-item-desc-heading font-weight-bold">{arr[17]}
                          </h4>
                          <p>{arr[55]}</p>
                          <h4 className="resume-timeline-item-desc-heading font-weight-bold">{arr[13]}
                          </h4>
                          <ul className="list-inline">
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">React</span></li>
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">OJET</span></li>
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">Nest.js</span></li>
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">Node.js</span></li>
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">Docker</span></li>
                          </ul>
                        </div>
                      </article>


                      <article className="resume-timeline-item position-relative pb-5">
                        <div className="resume-timeline-item-header mb-2">
                          <div className="d-flex flex-column flex-md-row">
                            <h3 className="resume-position-title font-weight-bold mb-1">{arr[43]}</h3>
                            <div className="resume-company-name ml-auto">{arr[49]}</div>
                          </div>
                          <div className="resume-position-time">{arr[50]}</div>
                        </div>
                        <div className="resume-timeline-item-desc">
                          <p>{arr[51]}</p>
                          <h4 className="resume-timeline-item-desc-heading font-weight-bold">{arr[17]}
                          </h4>
                          <p>{arr[52]}</p>
                          <h4 className="resume-timeline-item-desc-heading font-weight-bold">{arr[13]}
                          </h4>
                          <ul className="list-inline">
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">Node.js</span></li>
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">AWS</span></li>
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">Docker</span></li>
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">Java</span></li>
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">.Net Core</span></li>
                          </ul>
                        </div>
                      </article>

                      <article className="resume-timeline-item position-relative pb-5">
                        <div className="resume-timeline-item-header mb-2">
                          <div className="d-flex flex-column flex-md-row">
                            <h3 className="resume-position-title font-weight-bold mb-1">{arr[43]}</h3>
                            <div className="resume-company-name ml-auto">{arr[44]}</div>
                          </div>
                          <div className="resume-position-time">{arr[45]}</div>
                        </div>
                        <div className="resume-timeline-item-desc">
                          <p>{arr[46]}</p>
                          <h4 className="resume-timeline-item-desc-heading font-weight-bold">{arr[17]}
                          </h4>
                          <p>{arr[47]}</p>
                          <h4 className="resume-timeline-item-desc-heading font-weight-bold">{arr[13]}
                          </h4>
                          <ul className="list-inline">
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">Java</span></li>
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">Spring boot</span></li>
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">Struts</span></li>
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">jQuery</span></li>
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">HTML5</span></li>
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">JSP</span></li>
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">Vue.js</span></li>
                          </ul>
                        </div>
                      </article>


                      <article className="resume-timeline-item position-relative pb-5">
                        <div className="resume-timeline-item-header mb-2">
                          <div className="d-flex flex-column flex-md-row">
                            <h3 className="resume-position-title font-weight-bold mb-1">{arr[5]}</h3>
                            <div className="resume-company-name ml-auto">TecNM / Instituto Tecnológico de
															Tehuacán</div>
                          </div>
                          <div className="resume-position-time">{arr[6]}</div>
                        </div>
                        <div className="resume-timeline-item-desc">
                          <p>{arr[7]}</p>
                          <h4 className="resume-timeline-item-desc-heading font-weight-bold">{arr[8]}</h4>
                          <p>{arr[9]}</p>
                          <ul>
                            <li>{arr[10]}</li>
                            <li>{arr[11]}</li>
                            <li>{arr[12]}</li>
                          </ul>
                          <h4 className="resume-timeline-item-desc-heading font-weight-bold">{arr[13]}
                          </h4>
                          <ul className="list-inline">
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">PHP 7</span></li>
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">Yii 2</span></li>
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">jQuery</span></li>
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">MariaDB</span></li>
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">HTML5</span></li>
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">Bootstrap 4</span></li>
                          </ul>
                        </div>
                      </article>

                      <article className="resume-timeline-item position-relative pb-5">
                        <div className="resume-timeline-item-header mb-2">
                          <div className="d-flex flex-column flex-md-row">
                            <h3 className="resume-position-title font-weight-bold mb-1">{arr[14]}</h3>
                            <div className="resume-company-name ml-auto">Lavados Especiales</div>
                          </div>
                          <div className="resume-position-time">{arr[15]}</div>
                        </div>
                        <div className="resume-timeline-item-desc">
                          <p>{arr[16]}</p>
                          <h4 className="resume-timeline-item-desc-heading font-weight-bold">{arr[17]}
                          </h4>
                          <p>{arr[18]}</p>
                          <h4 className="resume-timeline-item-desc-heading font-weight-bold">{arr[13]}
                          </h4>
                          <ul className="list-inline">
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">PHP 7</span></li>
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">Codeigniter</span></li>
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">MySQL</span></li>
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">jQuery</span></li>
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">HTML5</span></li>
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">Bootstrap 4</span></li>
                            <li className="list-inline-item"><span
                              className="badge badge-primary badge-pill">Data Tables</span></li>
                          </ul>
                        </div>
                      </article>


                    </div>

                  </div>
                </section>

              </div>
              <div className="col-lg-3">
                <section className="resume-section skills-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">{arr[19]}</h2>
                  <div className="resume-section-content">

                    <div className="resume-skill-item">
                      <h4 className="resume-skills-cat font-weight-bold">{arr[20]}</h4>
                      <ul className="list-unstyled mb-4">
                        <li className="mb-2">
                          <div className="resume-skill-name">JavaScript</div>
                          <div className="progress resume-progress">
                            <div className="progress-bar theme-progress-bar-dark" role="progressbar"
                              style={{ width: '85%' }} aria-valuenow="25" aria-valuemin="0"
                              aria-valuemax="100"></div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">Typescript</div>
                          <div className="progress resume-progress">
                            <div className="progress-bar theme-progress-bar-dark" role="progressbar"
                              style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0"
                              aria-valuemax="100"></div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">PHP</div>
                          <div className="progress resume-progress">
                            <div className="progress-bar theme-progress-bar-dark" role="progressbar"
                              style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0"
                              aria-valuemax="100"></div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">Python</div>
                          <div className="progress resume-progress">
                            <div className="progress-bar theme-progress-bar-dark" role="progressbar"
                              style={{ width: '60%' }} aria-valuenow="25" aria-valuemin="0"
                              aria-valuemax="100"></div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">Java</div>
                          <div className="progress resume-progress">
                            <div className="progress-bar theme-progress-bar-dark" role="progressbar"
                              style={{ width: '60%' }} aria-valuenow="25" aria-valuemin="0"
                              aria-valuemax="100"></div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">C / C++ / C#</div>
                          <div className="progress resume-progress">
                            <div className="progress-bar theme-progress-bar-dark" role="progressbar"
                              style={{ width: '50%' }} aria-valuenow="25" aria-valuemin="0"
                              aria-valuemax="100"></div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="resume-skill-item">
                      <h4 className="resume-skills-cat font-weight-bold">Frontend</h4>
                      <ul className="list-unstyled mb-4">
                        <li className="mb-2">
                          <div className="resume-skill-name">React</div>
                          <div className="progress resume-progress">
                            <div className="progress-bar theme-progress-bar-dark" role="progressbar"
                              style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0"
                              aria-valuemax="100"></div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">jQuery</div>
                          <div className="progress resume-progress">
                            <div className="progress-bar theme-progress-bar-dark" role="progressbar"
                              style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0"
                              aria-valuemax="100"></div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">Bootstrap</div>
                          <div className="progress resume-progress">
                            <div className="progress-bar theme-progress-bar-dark" role="progressbar"
                              style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0"
                              aria-valuemax="100"></div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">HTML/CSS</div>
                          <div className="progress resume-progress">
                            <div className="progress-bar theme-progress-bar-dark" role="progressbar"
                              style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0"
                              aria-valuemax="100"></div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">Vue.js</div>
                          <div className="progress resume-progress">
                            <div className="progress-bar theme-progress-bar-dark" role="progressbar"
                              style={{ width: '50%' }} aria-valuenow="25" aria-valuemin="0"
                              aria-valuemax="100"></div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="resume-skill-item">
                      <h4 className="resume-skills-cat font-weight-bold">Backend</h4>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <div className="resume-skill-name">Nest.js</div>
                          <div className="progress resume-progress">
                            <div className="progress-bar theme-progress-bar-dark" role="progressbar"
                              style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0"
                              aria-valuemax="100"></div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">PHP Frameworks</div>
                          <div className="progress resume-progress">
                            <div className="progress-bar theme-progress-bar-dark" role="progressbar"
                              style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0"
                              aria-valuemax="100"></div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">Node.js</div>
                          <div className="progress resume-progress">
                            <div className="progress-bar theme-progress-bar-dark" role="progressbar"
                              style={{ width: '70%' }} aria-valuenow="25" aria-valuemin="0"
                              aria-valuemax="100"></div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">Python/Django</div>
                          <div className="progress resume-progress">
                            <div className="progress-bar theme-progress-bar-dark" role="progressbar"
                              style={{ width: '50%' }} aria-valuenow="25" aria-valuemin="0"
                              aria-valuemax="100"></div>
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">Java/Spring Boot</div>
                          <div className="progress resume-progress">
                            <div className="progress-bar theme-progress-bar-dark" role="progressbar"
                              style={{ width: '50%' }} aria-valuenow="25" aria-valuemin="0"
                              aria-valuemax="100"></div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="resume-skill-item">
                      <h4 className="resume-skills-cat font-weight-bold">{arr[21]}</h4>
                      <ul className="list-inline">
                        <li className="list-inline-item"><span className="badge badge-light">AWS</span></li>
                        <li className="list-inline-item"><span className="badge badge-light">Docker</span></li>
                        <li className="list-inline-item"><span className="badge badge-light">Intellij</span></li>
                        <li className="list-inline-item"><span className="badge badge-light">Git</span></li>
                        <li className="list-inline-item"><span className="badge badge-light">FontAwesome</span></li>
                        <li className="list-inline-item"><span className="badge badge-light">Linux</span></li>
                        <li className="list-inline-item"><span className="badge badge-light">Jira</span></li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="resume-section education-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">{arr[22]}</h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <div className="resume-degree font-weight-bold">{arr[23]}</div>
                        <div className="resume-degree-org"><a href="http://www.ittehuacan.edu.mx"
                          target="_blank" rel="noreferrer">TecNM / Instituto Tecnológico de Tehuacán</a></div>
                        <div className="resume-degree-time">2014 - 2018</div>
                      </li>
                    </ul>
                  </div>
                  <div className="resume-section-content">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <div className="resume-degree font-weight-bold">{arr[56]}</div>
                        <div className="resume-degree-org"><a href="https://tec.mx/es"
                          target="_blank" rel="noreferrer">ITESM Tecnológico de Monterrey</a></div>
                        <div className="resume-degree-time">2023 - 2025</div>
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="resume-section education-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">{arr[41]}</h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <div className="resume-degree font-weight-bold">Microsoft Technology Associate</div>
                        <div className="resume-degree-org">Software Development Fundamentals</div>
                        <div className="resume-degree-time">2015</div>
                      </li>
                    </ul>
                  </div>
                  <div className="resume-section-content">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <div className="resume-degree font-weight-bold">Microsoft Technology Associate</div>
                        <div className="resume-degree font-weight-bold"></div>
                        <div className="resume-degree-org">Database Fundamentals</div>
                        <div className="resume-degree-time">2015</div>
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="resume-section reference-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">{arr[24]}</h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled resume-awards-list">
                      <li className="mb-2 pl-4 position-relative">
                        <i className="resume-award-icon fas fa-trophy position-absolute"
                          data-fa-transform="shrink-2"></i>
                        <div className="resume-award-name">{arr[25]}</div>
                        <div className="resume-award-desc">{arr[26]} <a href="http://www.itpuebla.edu.mx"
                          target="_blank" rel="noreferrer">IT of Puebla</a> {arr[48]}</div>
                      </li>
                    </ul>
                  </div>
                  <div className="resume-section-content">
                    <ul className="list-unstyled resume-awards-list">
                      <li className="mb-2 pl-4 position-relative">
                        <i className="resume-award-icon fas fa-trophy position-absolute"
                          data-fa-transform="shrink-2"></i>
                        <div className="resume-award-name">{arr[39]}</div>
                        <div className="resume-award-desc">{arr[40]}</div>
                      </li>
                    </ul>
                  </div>
                  <div className="resume-section-content">
                    <ul className="list-unstyled resume-awards-list">
                      <li className="mb-2 pl-4 position-relative">
                        <i className="resume-award-icon fas fa-trophy position-absolute"
                          data-fa-transform="shrink-2"></i>
                        <div className="resume-award-name">ENEIT 2016</div>
                        <div className="resume-award-desc">{arr[42]}</div>
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="resume-section language-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">{arr[27]}</h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled resume-lang-list">
                      <li className="mb-2"><span className="resume-lang-name font-weight-bold">{arr[28]} </span>
                        <small className="text-muted font-weight-normal">({arr[29]})</small></li>
                      <li className="mb-2 align-middle"><span className="resume-lang-name font-weight-bold">{arr[30]
                      }</span> <small className="text-muted font-weight-normal">({arr[31]})</small>
                      </li>
                    </ul>
                  </div>
                </section>
                <section className="resume-section interests-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">{arr[32]}</h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled">
                      <li className="mb-1">{arr[33]}</li>
                      <li className="mb-1">{arr[34]}</li>
                      <li className="mb-1">{arr[35]}</li>
                    </ul>
                  </div>
                </section>
                <section className="resume-section education-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">{arr[36]}</h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <div className="resume-degree font-weight-bold">{arr[37]}</div>
                        <div className="resume-degree-org"><a href="https://www.campomision.org.mx/"
                          target="_blank" rel="noreferrer">Misioneros Servidores de la Palabra</a></div>
                        <div className="resume-degree-time">{arr[38]}</div>
                      </li>
                    </ul>
                  </div>
                </section>

              </div>
            </div>
          </div>


        </div>
      </article>
    </div>
  );
}

export default App;
