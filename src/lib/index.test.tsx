import { render, screen, cleanup } from "@testing-library/react";
import { describe, expect, test, afterEach } from "vitest";
import { Show, Fallback } from "./";

describe("Show component standard behavior", () => {
  afterEach(() => {
    cleanup();
  });
  test("Will show the element inside when the condition is true", () => {
    render(
      <Show when={true}>
        <h1>This element will be shown</h1>
      </Show>
    );
    expect(screen.getByText("This element will be shown")).not.toBeNull();
  });
  test("Will not show the element inside when the condition is false", () => {
    render(
      <Show when={false}>
        <h1>This element will not be shown</h1>
      </Show>
    );
    expect(screen.queryByText("This element will not be shown")).toBeNull();
  });
  test("Will show the fallback element inside when the condition is false", () => {
    render(
      <Show when={false}>
        <h1 data-testid="not-shown">This element will not be shown</h1>
        <Fallback>
          <h1 data-testid="shown">This element will be shown</h1>
        </Fallback>
      </Show>
    );
    expect(screen.getByTestId("shown")).not.toBeNull();
  });
});
