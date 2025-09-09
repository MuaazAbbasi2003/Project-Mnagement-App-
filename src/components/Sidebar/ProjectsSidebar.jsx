import React from "react";

import styles from "./ProjectsSidebar.module.css";
export default function ProjectsSidebar({ result }) {
  const muaaz = true;
  return (
    <div className={styles.mainDivInside}>
      <button
        className={styles.addProjectButton}
        onClick={() => {
          result(muaaz);
        }}
      >
        +Add Project
      </button>
    </div>
  );
}
