import { buildWorkflowItemStyles } from "./buildWorkflowItemStyles";
import styles from "./styles.module.css";

describe("buildWorkflowItemStyles", () => {
  it("returns the correct styles for the given conditions", () => {
    const currentStepIndex = 1;
    const currentColumnSize = 2;
    const nextColumnSize = 3;

    const result = buildWorkflowItemStyles({
      currentStepIndex,
      currentColumnSize,
      nextColumnSize,
    });

    expect(result).toContain(styles.item);
    expect(result).toContain(styles.leftLine);
    expect(result).toContain(styles.rightLine);
    expect(result).toContain(styles.decorateLeft);
    expect(result).toContain(styles.decorateRight);
  });

  it("should return the correct styles when stepIndex is zero and currentColumnSize is 1", () => {
    const currentStepIndex = 0;
    const currentColumnSize = 1;
    const nextColumnSize = 2;

    const result = buildWorkflowItemStyles({
      currentStepIndex,
      currentColumnSize,
      nextColumnSize,
    });

    expect(result).toContain(styles.item);
    expect(result).toContain(styles.rightLine);
  });

  it("should return the correct styles when stepIndex is zero and currentColumnSize > 1", () => {
    const currentStepIndex = 0;
    const currentColumnSize = 2;
    const nextColumnSize = 3;

    const result = buildWorkflowItemStyles({
      currentStepIndex,
      currentColumnSize,
      nextColumnSize,
    });

    console.log(result);

    expect(result).toContain(styles.item);
    expect(result).toContain(styles.decorateRight);
  });

  it("should apply the correct styles when currentStepIndex > 0, currentColumnSize > 1, and nextColumnSize > 0", () => {
    const currentStepIndex = 2;
    const currentColumnSize = 3;
    const nextColumnSize = 2;

    const result = buildWorkflowItemStyles({
      currentStepIndex,
      currentColumnSize,
      nextColumnSize,
    });

    expect(result).toContain(styles.item);
    expect(result).toContain(styles.decorateLeft);
    expect(result).toContain(styles.decorateRight);
  });
});
