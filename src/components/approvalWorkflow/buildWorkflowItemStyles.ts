import styles from "./styles.module.css";

/**
 * Drawing lines rules:
 * - when stepIndex zero and single item: render line to the right
 * - when stepIndex > zero and multiple items: render square to the left
 *    - when more columns to right also render square to right
 * - when stepIndex > zero and single item: render line to the left
 *    - when more column to right also render line to the right
 */

export function buildWorkflowItemStyles({
  currentStepIndex,
  currentColumnSize,
  nextColumnSize,
}: {
  currentStepIndex: number;
  currentColumnSize: number;
  nextColumnSize: number;
}) {
  let stylesClasses = styles.item;

  if (currentStepIndex > 0) {
    stylesClasses = `${stylesClasses} ${styles.leftLine}`;
  }

  if (currentStepIndex > 0 && nextColumnSize > 1) {
    stylesClasses = `${stylesClasses} ${styles.rightLine}`;
  }

  if (currentStepIndex === 0 && currentColumnSize === 1) {
    stylesClasses = `${stylesClasses} ${styles.rightLine}`;
  }

  if (currentStepIndex > 0 && nextColumnSize > 1) {
    stylesClasses = `${stylesClasses} ${styles.rightLine}`;
  }

  if (currentStepIndex > 0 && currentColumnSize > 1) {
    stylesClasses = `${stylesClasses} ${styles.decorateLeft}`;
    if (nextColumnSize) {
      stylesClasses = `${stylesClasses} ${styles.decorateRight}`;
    }
  }

  return stylesClasses;
}
