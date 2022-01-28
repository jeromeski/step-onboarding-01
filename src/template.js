// eslint-disable-next-line
<div>
  <div className="wrapper">
    <div id="content" style={{ marginLeft: 0 }}>
      <div className="container su-containerMain">
        <div className="row mb-4">
          <div className="col-md-12 su-header-mobile">
            <img
              src="https://online.valenzuela.gov.ph/Valenzuela/OnlineServices/public/img/valenzuelal.png"
              className="left-logo pl-5 col-md-3 su-logo"
              style={{ width: 130 }}
            />
            <label
              className="font-weight-bold pl-0 col-md-9 align-middle su-labelHeader"
              style={{ letterSpacing: 3, fontSize: 23 }}
            >
              VALENZUELA CITY
              <div
                className="col-md-13 font-weight-normal pl-0 pt-0 mt-0 su-labelHeader"
                style={{ fontSize: 15 }}
              >
                Online Services &gt; Sign Up
              </div>
            </label>
          </div>
        </div>
        {/*content*/}
        <div className="container su-container" style={{ textAlign: "left" }}>
          <div
            className="card shadow-lg"
            style={{ background: "white !important" }}
          >
            <div
              className="col-md-12 pt-0"
              style={{ fontSize: "20px !important" }}
            >
              <div className="form-group row">
                <a
                  onclick="window.close()"
                  className="back col-md-1 pl-3 border-bottom border-danger su-back"
                  style={{ float: "left !important" }}
                >
                  <i className="fa fa-arrow-left text-danger pt-3" />
                </a>
                <div className="step col-md-5 px-0 pb-3 border-bottom border-danger su-div-step bg-danger">
                  <div className="step-icon text-center pt-3">
                    <span className="step-num active rounded-circle text-center bg-secondary text-white px-2 mr-4 su-iconCircle">
                      ✔
                    </span>
                    <b className="text-white">ACCOUNT INFORMATION</b>
                  </div>
                </div>
                <div className="step col-md-6 px-0 pb-3 border-bottom border-muted su-div-step">
                  <div className="step-icon text-center pt-3">
                    <span className="step-num rounded-circle text-center bg-secondary text-white px-2 mr-4 su-iconCircle">
                      ✔
                    </span>
                    <b className="text-secondary">CHECK SENT E-MAIL</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div>
                <div className="pl-3 pr-3">
                  <div id="<!-- div-1 -->">
                    <div className="" id="ContactForm">
                      <div className="">
                        <center>
                          <div className="su-label" style={{ fontSize: 18 }}>
                            <label className="control-label col-lg-4">
                              Account ownership:{" "}
                            </label>
                            <nobr>
                              <label className="radio-inline col-lg-3">
                                <input
                                  type="radio"
                                  name="radType"
                                  id="radType1"
                                  defaultValue={1}
                                  defaultChecked=""
                                  autoComplete="off"
                                />
                                &nbsp;&nbsp;<strong>Individual</strong>
                              </label>
                            </nobr>
                            <label className="radio-inline">
                              <input
                                type="radio"
                                name="radType"
                                id="radType2"
                                defaultValue={2}
                                autoComplete="off"
                              />
                              &nbsp;&nbsp;<strong>Business</strong>
                            </label>
                          </div>
                        </center>
                      </div>
                      <br />
                      <h5
                        className="text-danger su-label"
                        style={{ fontWeight: "bolder", fontSize: 20 }}
                      >
                        Basic details ( * - Required to be filled out )
                      </h5>
                      <hr />
                      <div
                        style={{ fontSize: 16 }}
                        className="text-secondary su-label"
                      >
                        <div className="form-group row">
                          <div className="col-lg-6 mt-3">
                            <label
                              htmlFor="email"
                              className="labelText"
                              id="email"
                            >
                              * Email ID
                            </label>
                            <input
                              type="email"
                              id="emailadd"
                              name="emailadd"
                              placeholder=""
                              className="form-control textInput"
                              autoComplete="off"
                            />
                          </div>{" "}
                          {/*fg*/}
                          <div className="col-lg-6 mt-3">
                            <label htmlFor="cemail" className="labelText">
                              * Confirm Email ID{" "}
                            </label>
                            <input
                              type="email"
                              id="cemail"
                              name="cemail"
                              placeholder=""
                              className="form-control textInput"
                              autoComplete="off"
                            />
                          </div>{" "}
                          {/*fg*/}
                        </div>
                        {/* <hr/> */}
                        <div className="form-group row">
                          <div className="col-lg-4">
                            <label htmlFor="fname" className="labelText">
                              * Owner/Representative:
                            </label>
                            <input
                              type="text"
                              id="fname"
                              name="fname"
                              placeholder="First Name (Required)"
                              className="form-control textInput"
                              autoComplete="off"
                            />
                          </div>
                          <div className="col-lg-4">
                            <label htmlFor="fname" className="labelText">
                              &nbsp;
                            </label>
                            <input
                              type="text"
                              id="mname"
                              placeholder="Middle Name"
                              className="form-control textInput"
                              autoComplete="off"
                            />
                          </div>
                          <div className="col-lg-4">
                            <label htmlFor="fname" className="labelText">
                              &nbsp;
                            </label>
                            <input
                              type="text"
                              id="lname"
                              name="lname"
                              placeholder="Last Name (Required)"
                              className="form-control textInput"
                              autoComplete="off"
                            />
                          </div>
                          {/* <div class="col-lg-1">
                                                  <input type="text" id="ename" placeholder="Suffix" class="form-control" />
                                              </div> */}
                        </div>
                        <div className="form-group row">
                          <div className="col-lg-6">
                            <label htmlFor="gender" className="labelText">
                              * Gender{" "}
                            </label>
                            <select
                              name="gender"
                              id="gender"
                              placeholder="Select a gender"
                              className="form-control textInput"
                            >
                              <option value={1}> Male </option>
                              <option value={2}> Female </option>
                            </select>
                          </div>
                          <div className="col-lg-6">
                            <label htmlFor="mobileNo" className="labelText">
                              * Contact Number
                            </label>
                            <input
                              id="mobileNo"
                              type="text"
                              name="mobileNo"
                              className="form-control textInput"
                              placeholder="09XXXXXXXXX"
                              maxLength={11}
                              autoComplete="off"
                            />
                          </div>
                        </div>
                        <br />
                        <hr />
                        <div className="form-group row">
                          <div
                            className="col-lg-6 mt-3"
                            style={{ position: "relative" }}
                          >
                            <label htmlFor="password" className="labelText">
                              * Password
                            </label>
                            <a
                              className="su-showPass"
                              type="text"
                              style={{
                                height: 20,
                                cursor: "pointer",
                                position: "absolute",
                                right: 25,
                                top: 42
                              }}
                              onmousedown="mousedown();"
                              onmouseup="mouseup();"
                              onmouseout="mouseout();"
                            >
                              SHOW
                            </a>
                            <input
                              id="password"
                              type="password"
                              name="password"
                              className="form-control textInput"
                              autoComplete="off"
                            />
                          </div>
                          <div
                            className="col-lg-6 mt-3"
                            style={{ position: "relative" }}
                          >
                            <label htmlFor="cpassword" className="labelText">
                              * Confirm Password
                            </label>
                            <a
                              className="su-showPass"
                              type="text"
                              style={{
                                height: 20,
                                cursor: "pointer",
                                position: "absolute",
                                right: 25,
                                top: 42
                              }}
                              onmousedown="mousedown_1();"
                              onmouseup="mouseup_1();"
                              onmouseout="mouseout_1();"
                            >
                              SHOW
                            </a>
                            <input
                              type="password"
                              id="password-confirm"
                              name="password-confirm"
                              className="form-control textInput"
                              autoComplete="off"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 pr-0">
                          <div id="message">
                            <label>Password must contain the following:</label>
                            <br />
                            <label id="letter" className="invalid">
                              A <b>lowercase</b> letter
                            </label>
                            <br />
                            <label id="capital" className="invalid">
                              A <b>capital (uppercase)</b> letter
                            </label>
                            <br />
                            <label id="number" className="invalid">
                              A <b>number</b>
                            </label>
                            <br />
                            <label id="length" className="invalid">
                              Minimum <b>8 characters</b>
                            </label>
                            <br />
                            <label id="special" className="invalid">
                              A <b>special</b> character
                            </label>
                            <br />
                          </div>
                        </div>
                        {/* <div id="message"> */}
                        {/* <label>Password must contain the following:</label><br> */}
                        {/* <label id="letter" class="invalid">A <b>lowercase</b> letter</label><br> */}
                        {/* <label id="capital" class="invalid">A <b>capital (uppercase)</b> letter</label><br> */}
                        {/* <label id="number" class="invalid">A <b>number</b></label><br> */}
                        {/* <label id="length" class="invalid">Minimum <b>8 characters</b></label><br> */}
                        {/* </div> */}
                        {/* <br> */}
                        {/* <div class="form-group row">
													<div class="col-md-6 mt-3">
														<label for="text1" class="control-label">* Security Question:</label>
														<select id="securityq" class="form-control su-textInput" onchange="connectConsoSignup('checkSecQ')">
															<option value="What was your favorite childhood cartoon?" >What was your favorite childhood cartoon?</option>                   
															<option value="What was your favorite food as a child?" >What was your favorite food as a child?</option>                   
															<option value="Who is your all-time favorite movie character?" >Who is your all-time favorite movie character?</option>                   
															<option value="Who is your favorite author?">Who is your favorite author?</option>                   
															<option value="What is the name of your all-time favorite sports team?" >What is the name of your all-time favorite sports team?</option>
															<option value="What is the first name of your all-time favorite musician?" >What is the first name of your all-time favorite musician?</option>
															<option value="What is the title of your favorite book?">What is the title of your favorite book?</option>                                      
														</select>
													</div>
													<div class="col-md-6 mt-3">
														<label for="securitya" class="control-label">* Answer:</label>
														<input type="text" id="securitya" name="securitya" class="form-control textInput" onchange="connectConsoSignup('checkSecA')" />
													</div>
												</div> */}
                        <h5 className="text-danger font-weight-bold mt-5 su-label">
                          Terms and Conditions
                        </h5>
                        <hr />
                        <div className="form-group">
                          <div
                            className="col-lg-12 su-label"
                            style={{ fontSize: 14 }}
                          >
                            <label>
                              {" "}
                              <b>REGISTRATION:</b>{" "}
                            </label>{" "}
                            <br />
                            <label>
                              1. The information provided is certified as{" "}
                              <b>TRUE</b> and <b>CORRECT</b>.{" "}
                            </label>{" "}
                            <br />
                            <label>
                              2. Registrant should validate their account by
                              clicking the <b>CONFIRMATION LINK</b> sent to the
                              supplied email address.{" "}
                            </label>
                            <label>
                              3. Registrant should not create multiple{" "}
                              <b>FALSE ACCOUNTS</b>.{" "}
                            </label>
                            <label>
                              4. Registrant should keep their account
                              credentials and will <b>NOT SHARE</b> to anyone.{" "}
                            </label>
                          </div>
                        </div>
                        <h5 className="text-danger font-weight-bold su-label">
                          Data Privacy
                        </h5>
                        <hr />
                        <div className="form-group ">
                          <div className="col-lg-12 su-label">
                            <label
                              style={{ textAlign: "justify", fontSize: 14 }}
                            >
                              {" "}
                              I hereby agree that all Personal Data (as defined
                              under the Data Privacy Law of 2012 and its
                              implementing rules and regulations), customer data
                              and account or transaction information or records
                              (collectively, the "information") which may be
                              with City Government from time to time relating to
                              us may be processed, profiled or shared to
                              requesting parties or for the purpose of any
                              court, legal process, examination, inquiry, audit
                              or investigation of any Authority. The aforesaid
                              terms shall apply notwithstanding any applicable
                              non-disclosure agreement. We acknowledge that such
                              information may be processed or profiled by or
                              shared with jurisdictions which do not have strict
                              data protection or data privacy laws.{" "}
                            </label>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className="form-group ">
                        <div className="col-md-12 p-3">
                          <center>
                            <div
                              id="cpcha"
                              className="g-recaptcha"
                              data-callback="correctCaptcha"
                              data-sitekey="6LdIDiQaAAAAAGfwz7thPuq4tuG31gNQojTJYXJM"
                            >
                              <div style={{ width: 304, height: 78 }}>
                                <div>
                                  <iframe
                                    title="reCAPTCHA"
                                    src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LdIDiQaAAAAAGfwz7thPuq4tuG31gNQojTJYXJM&co=aHR0cHM6Ly9vbmxpbmUudmFsZW56dWVsYS5nb3YucGg6NDQz&hl=en&v=dPctOHA2ifhWm5WzFM_B5TjT&size=normal&cb=isdyp9wawuis"
                                    width={304}
                                    height={78}
                                    role="presentation"
                                    name="a-lptpkg7sug3s"
                                    frameBorder={0}
                                    scrolling="no"
                                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                                  />
                                </div>
                                <textarea
                                  id="g-recaptcha-response"
                                  name="g-recaptcha-response"
                                  className="g-recaptcha-response"
                                  style={{
                                    width: 250,
                                    height: 40,
                                    border: "1px solid rgb(193, 193, 193)",
                                    margin: "10px 25px",
                                    padding: 0,
                                    resize: "none",
                                    display: "none"
                                  }}
                                  defaultValue={""}
                                />
                              </div>
                              <iframe style={{ display: "none" }} />
                            </div>
                          </center>
                        </div>
                      </div>
                      <br />
                      <div className="form-group">
                        <a
                          href=""
                          className="float-left text-secondary su-label"
                          style={{ cursor: "pointer", fontSize: 15 }}
                          id="resetButt"
                          name="resetButt"
                        >
                          <b>Reset All</b>
                        </a>
                        <button
                          className="btn btn-danger float-right su-label"
                          id="registerButt"
                          style={{ fontSize: 14, borderRadius: 20 }}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="over" />
                <div id="lay" />
              </div>
              {/*box*/}
            </div>
          </div>
        </div>
      </div>
      {/*footer*/}
      <div className="text-center mt-0 w-100">
        <label className="font-weight-light text-danger col-md-12 mt-3 su-label">
          © 2019 CITY GOVERNMENT OF VALENZUELA
        </label>
      </div>
    </div>
  </div>
</div>;
