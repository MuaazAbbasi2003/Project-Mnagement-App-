import React from "react";
import styles from "./form.module.css";

export default function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label className={styles.label}>TITLE</label>
        <input
          type="text"
          placeholder="Enter title"
          // value={title}
          // onChange={(e) => setTitle(e.target.value)}
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>DESCRIPTION</label>
        <textarea
          placeholder="Enter description"
          // value={description}
          // onChange={(e) => setDescription(e.target.value)}
          className={styles.textarea}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>DUE DATE</label>
        <input
          type="date"
          // value={dueDate}
          // onChange={(e) => setDueDate(e.target.value)}
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
