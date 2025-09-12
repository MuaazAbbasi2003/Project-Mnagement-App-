import React, { useState } from "react";
import styles from "./form.module.css";

export default function Form({ handleSubmit, formData, onChange }) {
  // Initialize form state

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.label}>TITLE</label>
        <input
          type="text"
          placeholder="Enter title"
          value={formData.title}
          onChange={(e) => onChange("title", e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>DESCRIPTION</label>
        <textarea
          placeholder="Enter description"
          value={formData.description}
          onChange={(e) => onChange("description", e.target.value)}
          className={styles.textarea}
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>DUE DATE</label>
        <input
          type="date"
          value={formData.dueDate}
          onChange={(e) => onChange("dueDate", e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.actions}>
        <button type="button" className={styles.cancel}>
          Cancel
        </button>
        <button type="submit" className={styles.save}>
          Save
        </button>
      </div>
    </form>
  );
}
