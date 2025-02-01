# useReducer & useContext

## Part 1: Using `useContext` and `useReducer`

### **1. `useContext`**

`useContext` is a React hook that allows components to access and share state from a context. It simplifies prop drilling by providing a global context that any component in the tree can access.

#### Key Points:

- Used for sharing state or functions globally in a React app.
- Works well for themes, authentication, or other global data.

#### Example:

```jsx
import React, { createContext, useContext, useState } from "react";

// Create a context
const RentalContext = createContext();

const RentalProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    carType: "Sedan",
  });

  return (
    <RentalContext.Provider value={{ formData, setFormData }}>
      {children}
    </RentalContext.Provider>
  );
};

const Form = () => {
  const { formData, setFormData } = useContext(RentalContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address"
      />
    </form>
  );
};

const App = () => (
  <RentalProvider>
    <Form />
  </RentalProvider>
);

export default App;
```

---

### **2. `useReducer`**

`useReducer` is a React hook that manages complex state logic by using a reducer function. It’s an alternative to `useState` for state transitions that depend on the current state.

#### Key Points:

- Suitable for managing state with multiple transitions or dependencies.
- Similar to Redux reducers but works within a component.

#### Example:

```jsx
import React, { useReducer } from "react";

// Define initial state and reducer
const initialState = { name: "", email: "", carType: "Sedan" };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="Full Name"
      />
      <input
        type="email"
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="Email Address"
      />
    </form>
  );
};

const App = () => <Form />;

export default App;
```

---

## Comparison of `useContext` and `useReducer`

| Feature              | `useContext`                            | `useReducer`                                |
| -------------------- | --------------------------------------- | ------------------------------------------- |
| **Purpose**          | Share state globally across components. | Manage complex or dependent state logic.    |
| **State Management** | Uses a single shared state object.      | Manages state with defined actions.         |
| **Complexity**       | Simple, lightweight.                    | More structured but adds complexity.        |
| **Use Case**         | Ideal for themes, authentication, etc.  | Best for state transitions or dynamic apps. |

---

## Summary

- **`useContext`**: Simplifies sharing state across the app.
- **`useReducer`**: Simplifies managing complex state transitions.
- Combine **`useContext` + `useReducer`** for advanced global state management.

# Compare redux Jotai and zustand

### 1. **Core Philosophy**

| Feature        | **Jotai**                                                   | **Zustand**                                                                                      | **Redux Toolkit**                                                                                      |
| -------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| **Philosophy** | Minimal, atomic state management with React-first approach. | Lightweight, flexible state management, often used for simple to medium complexity applications. | Opinionated, batteries-included version of Redux for managing global state with structure and tooling. |

---

### 2. **State Management Model**

| Feature             | **Jotai**                                                       | **Zustand**                                                    | **Redux Toolkit**                                                                                 |
| ------------------- | --------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **State Structure** | Atomic state: each state piece is independent and subscribable. | Single global store with modular slices and updates.           | Single global store split into slices, strongly adhering to reducers and immutability principles. |
| **Mutations**       | Mutations occur through atom updaters (`set` functions).        | Direct mutations via functions (no immutability requirements). | Reducers define how the state is updated (requires immutability).                                 |

---

### 3. **Developer Experience**

| Feature         | **Jotai**                                                       | **Zustand**                                                                       | **Redux Toolkit**                                                                               |
| --------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **Boilerplate** | Minimal; highly declarative with hooks like `useAtom`.          | Minimal; uses hooks (`useStore`) for accessing and updating state.                | More boilerplate, though significantly reduced compared to traditional Redux.                   |
| **Tooling**     | Minimal native tooling; relies on React DevTools for debugging. | Native DevTools support for debugging via middleware (like `zustand/middleware`). | Comprehensive DevTools integration, including Redux DevTools and middleware like `redux-thunk`. |

---

### 4. **Performance**

| Feature              | **Jotai**                                                    | **Zustand**                                                                         | **Redux Toolkit**                                                                |
| -------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **Granular Updates** | Updates only affect components subscribed to specific atoms. | Updates only affect components accessing the specific slice of state being updated. | Updates may re-render all components subscribed to the affected slices.          |
| **Reactivity**       | Excellent reactivity due to atom-based state segregation.    | Good reactivity with selective state subscription.                                  | Reactivity can lead to over-rendering unless slices and selectors are optimized. |

---

### 5. **Complexity and Scalability**

| Feature         | **Jotai**                                                       | **Zustand**                                                             | **Redux Toolkit**                                                                 |
| --------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| **Simple Apps** | Ideal for small to medium apps with localized state management. | Great for small to medium apps or when a global state is sufficient.    | Overkill for very simple apps but excellent for structured, complex applications. |
| **Large Apps**  | Becomes harder to manage with many atoms; needs organization.   | Works well for large apps but may need extensions for complex patterns. | Excellent scalability with slices, middleware, and dev tools.                     |

---

### 6. **Integration with React**

| Feature           | **Jotai**                                  | **Zustand**                                        | **Redux Toolkit**                                                                                    |
| ----------------- | ------------------------------------------ | -------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **React Focus**   | Designed specifically for React.           | Framework-agnostic but integrates well with React. | Redux itself is framework-agnostic; Redux Toolkit includes React integration via `@reduxjs/toolkit`. |
| **Hooks Support** | Provides hooks out of the box (`useAtom`). | Provides hooks out of the box (`useStore`).        | Works with `react-redux` hooks (`useSelector`, `useDispatch`).                                       |

---

### 7. **Ecosystem and Community**

| Feature               | **Jotai**                                         | **Zustand**                   | **Redux Toolkit**                                                          |
| --------------------- | ------------------------------------------------- | ----------------------------- | -------------------------------------------------------------------------- |
| **Ecosystem**         | Smaller, focused ecosystem.                       | Smaller, modular ecosystem.   | Large ecosystem with many middleware and libraries for advanced use cases. |
| **Community Support** | Growing, but smaller community compared to Redux. | Smaller but active community. | Established, large community with extensive resources.                     |

---

### Summary

| **Use Case**                 | **Jotai**                 | **Zustand**               | **Redux Toolkit**             |
| ---------------------------- | ------------------------- | ------------------------- | ----------------------------- |
| **Simplicity**               | ✅ Great for small apps.  | ✅ Great for small apps.  | ❌ Overkill for simple apps.  |
| **Complex Apps**             | ❌ Can be hard to scale.  | ✅ Scalable with effort.  | ✅ Designed for complexity.   |
| **Developer Experience**     | ✅ Minimal and intuitive. | ✅ Minimal and intuitive. | ✅ Well-structured tools.     |
| **Performance Optimization** | ✅ Granular updates.      | ✅ Granular updates.      | ❌ Needs optimization effort. |

# Exercise: Create a Car Rental Order Page in HTML and Integrate State Management

## Objective

The goal of this exercise is to create a car rental order page and manage the application's state using **Jotai** and **Zustand**. This includes building a form and integrating state management libraries to handle form data dynamically.

---

## Part 1: HTML Form

Follow the steps from the previous exercise to build your car rental form in HTML.

---

## Part 2: Jotai Integration

### Installation

Run the following command to install Jotai:

```bash
npm install jotai
```

### Example: Managing Form State with Jotai

```jsx
// App.jsx
import React from "react";
import { atom, useAtom } from "jotai";

// Define atoms for form fields
const nameAtom = atom("");
const emailAtom = atom("");
const carTypeAtom = atom("Sedan");
const extrasAtom = atom([]);

const App = () => {
  const [name, setName] = useAtom(nameAtom);
  const [email, setEmail] = useAtom(emailAtom);
  const [carType, setCarType] = useAtom(carTypeAtom);
  const [extras, setExtras] = useAtom(extrasAtom);

  const handleExtrasChange = (extra) => {
    setExtras((prev) =>
      prev.includes(extra) ? prev.filter((e) => e !== extra) : [...prev, extra]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, carType, extras });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email Address:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Car Type:
        <select value={carType} onChange={(e) => setCarType(e.target.value)}>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Truck">Truck</option>
          <option value="Convertible">Convertible</option>
        </select>
      </label>
      <br />
      <label>
        Extras:
        <input
          type="checkbox"
          checked={extras.includes("GPS")}
          onChange={() => handleExtrasChange("GPS")}
        />
        GPS
        <input
          type="checkbox"
          checked={extras.includes("Child Seat")}
          onChange={() => handleExtrasChange("Child Seat")}
        />
        Child Seat
        <input
          type="checkbox"
          checked={extras.includes("Additional Driver")}
          onChange={() => handleExtrasChange("Additional Driver")}
        />
        Additional Driver
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
```

---

## Part 3: Zustand Integration

### Installation

Run the following command to install Zustand:

```bash
npm install zustand
```

### Example: Managing Form State with Zustand

```jsx
// store.js
import create from "zustand";

const useStore = create((set) => ({
  name: "",
  email: "",
  carType: "Sedan",
  extras: [],
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setCarType: (carType) => set({ carType }),
  toggleExtra: (extra) =>
    set((state) => ({
      extras: state.extras.includes(extra)
        ? state.extras.filter((e) => e !== extra)
        : [...state.extras, extra],
    })),
}));

export default useStore;
```

```jsx
// App.jsx
import React from "react";
import useStore from "./store";

const App = () => {
  const {
    name,
    email,
    carType,
    extras,
    setName,
    setEmail,
    setCarType,
    toggleExtra,
  } = useStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, carType, extras });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email Address:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Car Type:
        <select value={carType} onChange={(e) => setCarType(e.target.value)}>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Truck">Truck</option>
          <option value="Convertible">Convertible</option>
        </select>
      </label>
      <br />
      <label>
        Extras:
        <input
          type="checkbox"
          checked={extras.includes("GPS")}
          onChange={() => toggleExtra("GPS")}
        />
        GPS
        <input
          type="checkbox"
          checked={extras.includes("Child Seat")}
          onChange={() => toggleExtra("Child Seat")}
        />
        Child Seat
        <input
          type="checkbox"
          checked={extras.includes("Additional Driver")}
          onChange={() => toggleExtra("Additional Driver")}
        />
        Additional Driver
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
```

---

## Comparison

- **Jotai** is more granular and works well for independent states like individual form fields.
- **Zustand** provides a centralized state, which can be easier to manage for medium-sized applications.

Here's a concise implementation of **Redux Toolkit** with an example:

---

### Step 1: Install Redux Toolkit and React-Redux

```bash
npm install @reduxjs/toolkit react-redux
```

---

### Step 2: Create a Redux Store with a Slice

**`store.ts`**:

```javascript
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Create a slice
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Export actions and reducer
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
const store = configureStore({ reducer: { counter: counterSlice.reducer } });

export default store;
```

---

### Step 3: Provide the Store to Your App

**`index.ts`**:

```javascript
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

---

### Step 4: Create a Component to Use Redux State

**`App.js`**:

```javascript
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./store";

function App() {
  const count = useSelector((state) => state.counter.value); // Access state
  const dispatch = useDispatch(); // Dispatch actions

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
}

export default App;
```

```typescript
// connect state to component => into component
// connect dispatch to component => out from component

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from ".";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

### Explanation

1. **`createSlice`**: Combines `actions` and `reducers` in one place.
2. **`configureStore`**: Automatically sets up the Redux store.
3. **`Provider`**: Makes the Redux store available to your entire app.
4. **`useSelector`**: Accesses the state from the Redux store.
5. **`useDispatch`**: Dispatches actions to update the state.

---

# Note

1. subscribe only what you need
2. shallowEqual


## EX - redux
1. convert the settings useReducer / useContext to work with redux
2. isLocalTime
3. dateFormat
4. isPrettyNumber
