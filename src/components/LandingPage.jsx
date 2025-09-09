import React from "react";
import { useState } from "react";
import styles from "./LandingPage.module.css";
import ProjectsSidebar from "./Sidebar/ProjectsSidebar";
import Form from "./form/Form.jsx";
export default function LandingPage() {
  const [mz, setmz] = useState("");
  function handelChage(data) {
    setmz(data);
  }
  return (
    <>
      <div className={styles.mainTop}></div>
      <div className={styles.everythingInsideDiv}>
        <div className={styles.sidebarMain}>
          <ProjectsSidebar result={handelChage} />
        </div>
        <div className={styles.formDiv}>{mz && <Form />}</div>
      </div>
    </>
  );
}
