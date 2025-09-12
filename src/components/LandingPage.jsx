import React from "react";
import { useState } from "react";
import styles from "./LandingPage.module.css";
import ProjectsSidebar from "./Sidebar/ProjectsSidebar";
import Form from "./form/Form.jsx";
export default function LandingPage() {
  const [mz, setmz] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  function handelChage(data) {
    setmz(data);
  }

  function stateChnage1(index, newvalue) {
    setFormData((prev) => {
      return { ...prev, [index]: newvalue };
    });
  }
  return (
    <>
      <div className={styles.mainTop}></div>
      <div className={styles.everythingInsideDiv}>
        <div className={styles.sidebarMain}>
          <ProjectsSidebar result={handelChage} />
        </div>
        <div className={styles.formDiv}>
          {mz && (
            <Form
              handleSubmit={handleSubmit}
              formData={formData}
              onChange={stateChnage1}
            />
          )}
        </div>
      </div>
    </>
  );
}
