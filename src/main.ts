import "./style.scss";
// import { setupCounter } from "./counter.ts";

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
const bases: Record<string, string> = {
  blackTea: "#8B4513",
  greenTea: "#C8E6C9",
  coffee: "#6F4E37",
};

const creamers: Record<string, string> = {
  milk: "AliceBlue",
  cream: "#F5F5DC",
  half: "#FFFACD",
};

const syrups: Record<string, string> = {
  vanilla: "#FFEFD5",
  caramel: "#DAA520",
  hazelnut: "#6B4423",
};

function applyTemperature(input: HTMLInputElement): void {
  const container = document.getElementById(
    "condensation",
  ) as HTMLDivElement | null;
  if (!container) return;

  const children = container.children;

  for (let i = 0; i < children.length; i++) {
    const child = children[i] as HTMLElement;

    if (input.value === "hot") {
      child.className = "stream";
    } else {
      child.className = "flake";
    }
  }
}

function applyBase(input: HTMLInputElement): void {
  const baseElements = document.getElementsByClassName("base");

  if (baseElements.length === 0) return;

  const baseDiv = baseElements[0] as HTMLDivElement;

  const color = bases[input.value];
  if (!color) return;

  baseDiv.style.backgroundColor = color;
}

function applyCream(input: HTMLInputElement): void {
  const creamElements = document.getElementsByClassName("foam");

  if (creamElements.length === 0) return;

  const color = creamers[input.value];
  if (!color) return;
  for (let i = 0; i < creamElements.length; i++) {
    const element = creamElements[i] as HTMLDivElement;
    element.style.backgroundColor = color;
  }
}

function applySyrup(input: HTMLInputElement): void {
  const syrupDiv = document.querySelector(".syrup") as HTMLElement;

  const selectedSyrup = input.value;
  const syrupColor = syrups[selectedSyrup];

  syrupDiv.style.setProperty("--syrup-color", syrupColor);
}

function setupSyrupListeners(): void {
  const syrupInputs = document.querySelectorAll(
    'input[name="syrup"]'
  ) as NodeListOf<HTMLInputElement>;

  syrupInputs.forEach((input) => {
    input.addEventListener("change", () => applySyrup(input));
  });

  const checked = document.querySelector(
    'input[name="syrup"]:checked'
  ) as HTMLInputElement;

  if (checked) applySyrup(checked);
}

setupSyrupListeners();

function setupCreamListeners(): void {
  const creamInputs = document.querySelectorAll(
    'input[name="cream"]'
  ) as NodeListOf<HTMLInputElement>;

  creamInputs.forEach((input) => {
    input.addEventListener("change", () => applyCream(input));
  });

  const checked = document.querySelector(
    'input[name="cream"]:checked'
  ) as HTMLInputElement;

  if (checked) applyCream(checked);
}

setupCreamListeners();

function setupTemperatureListeners(): void {
  const tempInputs = document.querySelectorAll(
    'input[name="temperature"]'
  ) as NodeListOf<HTMLInputElement>;

  tempInputs.forEach((input) => {
    input.addEventListener("change", () => applyTemperature(input));
  });

  const checked = document.querySelector(
    'input[name="temperature"]:checked'
  ) as HTMLInputElement;

  if (checked) applyTemperature(checked);
}

setupTemperatureListeners();

function setupBaseListeners(): void {
  const baseInputs = document.querySelectorAll(
    'input[name="base"]'
  ) as NodeListOf<HTMLInputElement>;

  baseInputs.forEach((input) => {
    input.addEventListener("change", () => applyBase(input));
  });

  const checked = document.querySelector(
    'input[name="base"]:checked'
  ) as HTMLInputElement;

  if (checked) applyBase(checked);
}

setupBaseListeners();
