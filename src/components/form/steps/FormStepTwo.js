import React from "react";
import Modal from "../../common/modals/Modal";

export default function FormStepTwo({ goToPrev, showModal, setShowModal }) {
	return (
		<div style={{ position: "relative" }}>
			<h1>STEP TWO</h1>
			<button type="button" onClick={() => goToPrev()}>
				Back
			</button>
			<button type="button" onClick={() => setShowModal(true)}>
				Continue
			</button>
			<Modal showModal={showModal} setShowModal={setShowModal}>
				<div className="modal-header">
					<h4>LogoInc</h4>
				</div>
				<hr />
				<div className="modal-content">
					<h3>Are you sure you want to continue?</h3>
				</div>
				<hr />
			</Modal>
		</div>
	);
}
