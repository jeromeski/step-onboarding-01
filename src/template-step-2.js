<div className="wrapper">
	<div id="content" style={{ marginLeft: 0 }}>
		<div className="container">
			<div className="row mb-4">
				<div className="col-md-12 su-header-mobile">
					<img
						src="https://online.valenzuela.gov.ph/Valenzuela/OnlineServices/public/img/valenzuelal.png"
						className="left-logo pl-5 col-md-3 su-logo"
						style={{ width: 130 }}
					/>
					<label
						className="font-weight-bold pl-0 col-md-9 align-middle su-labelHeader"
						style={{ letterSpacing: 3, fontSize: 23 }}>
						VALENZUELA CITY
						<div
							className="col-md-13 font-weight-normal pl-0 pt-0 mt-0 su-labelHeader"
							style={{ fontSize: 15 }}>
							Online Services &gt; Sign Up
						</div>
					</label>
				</div>
			</div>
			{/*content*/}
			<div className="container" style={{ textAlign: "left" }}>
				<div className="card shadow-lg" style={{ background: "white !important" }}>
					<div className="col-md-12 pt-0" style={{ fontSize: "20px !important" }}>
						<div className="form-group row">
							<a
								href="https://online.valenzuela.gov.ph/Valenzuela/OnlineServices/login"
								className="back col-md-1 pl-3 border-bottom border-danger su-back"
								style={{ float: "left !important" }}>
								<i className="fa fa-arrow-left text-danger pt-3" />
							</a>
							<div className="step col-md-5 px-0 pb-3 border-bottom border-danger su-div-step">
								<div className="step-icon text-center pt-3">
									<span className="step-num active rounded-circle text-center bg-secondary text-white px-2 mr-4 su-iconCircle">
										✔
									</span>
									<b className="text-secondary">ACCOUNT INFORMATION</b>
								</div>
							</div>
							<div className="step col-md-6 px-0 pb-3 border-bottom border-muted su-div-step  bg-danger">
								<div className="step-icon text-center pt-3">
									<span className="step-num rounded-circle text-center bg-secondary text-white px-2 mr-4 su-iconCircle">
										✔
									</span>
									<b className="text-white">CHECK SENT E-MAIL</b>
								</div>
							</div>
						</div>
					</div>
					<div className="card-body text-center">
						<br />
						{/* <img src="https://online.valenzuela.gov.ph/Valenzuela/OnlineServices/public/img/checkmark.png" class="center thanks-logo" width="17%"> */}
						<img
							src="https://online.valenzuela.gov.ph/Valenzuela/OnlineServices/public/img/checkmark.png"
							style={{ width: "10rem" }}
							alt="Congratulations"
							className="center thanks-logo"
						/>
						<br />
						<br />
						<h1 className="text-danger">Congratulations!</h1>
						<br />
						<div>
							<div className="pl-3 pr-3">
								<div className="col-lg-12 thanks-label">
									<p>
										{" "}
										We've sent an email to{" "}
										<font className="text-danger">
											<b>analycruz8329@gmail.com</b>
										</font>
										, confirming your
										<b>ONLINE SERVICES</b> Account. Please check your inbox or your spam folder and
										click on the confirmation link.
										<br />
										<br />
										<br />
										<a
											className="btn btn-danger text-white thanks-label"
											name="mailButt"
											id="mailButt"
											onclick="thankyou('directMail')"
											style={{ borderRadius: 7, fontSize: 14 }}>
											Continue
										</a>
									</p>
								</div>
								<div id="over" />
								<div id="lay" />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*endcontent*/}
		</div>
		{/*footer*/}
		<div className="text-center mt-2 w-100">
			<label className="font-weight-light text-danger col-md-12 mt-3 thanks-label">
				© 2019 CITY GOVERNMENT OF VALENZUELA
			</label>
		</div>
	</div>
</div>;
