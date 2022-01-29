import React, { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
	background-color: white;
	margin: 10% auto;
	padding: 20px;
	width: 25%;
	z-index: 2;
`;

export default function Modal({ children, showModal, setShowModal }) {
	console.count("modal");
	console.log("showModal :", showModal);
	return (
		<>
			{showModal && (
				<ModalBackground onClick={() => setShowModal(false)}>
					<ModalBody onClick={(e) => e.stopPropagation()}>
						{children}
						<button type="button" onClick={() => setShowModal(false)}>
							Cancel
						</button>
						<div className="modal-footer p-5">
							<button type="submit">Submit</button>
						</div>
					</ModalBody>
				</ModalBackground>
			)}
		</>
	);
}
