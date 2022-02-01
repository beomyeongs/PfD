import React, { useState } from "react";
import Modal from "react-modal";
import "Css/ProjectDetail.scss";

function ProjectDetail({ project }) {
  const [modalTrigger, setModalTrigger] = useState(false);
  Modal.setAppElement("#root");

  const customStyles = {
    overlay: {
      background: "rgba(127, 127, 127, 0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "1px solid black",
      borderRadius: "20px",
    },
  };

  const use_for = (arr) => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      result.push(<li key={i}>{arr[i]}</li>);
    }

    return result;
  };

  return (
    <div>
      <button onClick={() => setModalTrigger(true)}>Open</button>
      <Modal
        isOpen={modalTrigger}
        onRequestClose={() => setModalTrigger(false)}
        shouldCloseOnOverlayClick={false}
        style={customStyles}
      >
        <div className="header">
          <p>프로젝트 상세 설명 </p>
          <button onClick={() => setModalTrigger(false)}>X</button>
        </div>
        <div className="body">
          <table>
            <tr>
              <td>프로젝트 이름</td>
              <td>{project.name}</td>
            </tr>
            <tr>
              <td>프로젝트 내용</td>
              <td>{project.content}</td>
            </tr>
            <tr>
              <td>기술 스택</td>
              <td>{use_for(project.tech_stack)}</td>
            </tr>
            <tr>
              <td>맡은 업무</td>
              <td>{use_for(project.did)}</td>
            </tr>
          </table>
        </div>
        <div className="bottom">
          <button onClick={() => setModalTrigger(false)}>close</button>
        </div>
      </Modal>
    </div>
  );
}

export default ProjectDetail;
