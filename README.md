## 1. What is React and its Features?

React is an open-source JavaScript library developed by Meta for building fast, interactive, and reusable user interfaces, especially for single-page applications (SPAs).
1. Component-Based Architecture – UI is divided into small, reusable components.
2. Virtual DOM – Efficiently updates only the required parts of the UI. 
3. JSX – Allows writing HTML-like syntax inside JavaScript. 
4. Declarative UI – Describe what the UI should look like; React handles the updates. 
5. One-Way Data Flow – Data generally flows from parent to child through props. 
6. Reusable Components – Components can be reused across different parts of an application. 
7. State Management – Manages dynamic data using state. 
8. Hooks – Provides hooks like useState, useEffect, useContext, and useRef. 
9. Event Handling – Provides a consistent way to handle user interactions. 
10. Fast Rendering – Uses reconciliation to efficiently update the actual DOM. 
11. Strong Ecosystem – Supports libraries and tools such as React Router, Redux, and Next.js.

---

## 2. Why Use React When We Have HTML, CSS, and JS?

React is a JavaScript library that provides a component-based architecture for building complex and interactive (SPAs) user interfaces efficiently.
It simplifies UI development through reusable components, declarative programming, state management, and efficient DOM updates using reconciliation.

---

## 3. What is JSX? Rules to Write JSX

**JSX** stands for **JavaScript XML**. It is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript files. It was introduced by Facebook (Meta) for React.

### Rules

| #   | Rule                                                                       |
| --- | -------------------------------------------------------------------------- |
| 1   | Return only **one parent element**                                         |
| 2   | All tags (including self-closing) must be **properly closed**              |
| 3   | Use **camelCase** for attributes (e.g., `onClick`, `onChange`)             |
| 4   | JavaScript expressions go inside `{}`                                      |
| 5   | Comments use `{/* */}` syntax                                              |
| 6   | No `if-else` directly inside JSX; use **ternary** or **logical operators** |
| 7   | Use `className` instead of `class`                                         |
| 8   | Use `htmlFor` instead of `for` in `<label>` tags                           |

---

## 4. What is a Component in React? Types of Components

A **component** in React is a reusable, self-contained piece of code that returns JSX.

### Types

#### 1. Class Based Component (CBC)

- A JavaScript class that extends `React.Component`
- Has a `render()` method to return JSX
- Traditional way of writing components (before 2019)

#### 2. Function Based Component (FBC)

- A simple JavaScript function that returns JSX
- Recommended and most popular way in modern React

---

## 5. What is React.Fragment and Empty Fragment?

| Type                        | Description                                                                                                  |
| --------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `React.Fragment`            | A wrapper component that groups multiple elements without adding an extra DOM node. Supports the `key` prop. |
| `<>...</>` (Empty Fragment) | Shorthand for `React.Fragment`. Does the same thing but does **not** support the `key` prop.                 |

> **Note:** Neither fragment supports `id` or `className` attributes.

---

## 6. What is Component Composition?

**Component Composition** is the practice of calling one component inside another component.

```jsx
function Header() {
  return <h1>Welcome</h1>;
}

function App() {
  return (
    <div>
      <Header /> {/* Header component called inside App */}
    </div>
  );
}
```

---

## 7. What is Props?

**Props** (short for "properties") are a mechanism used to pass data from one component to another, in a **unidirectional (top-down)** flow from parent to child.

```jsx
// Parent passes props
<Greeting name="Alice" age={25} />;

// Child receives and uses them
function Greeting({ name, age }) {
  return (
    <h1>
      Hello, {name}! You are {age} years old.
    </h1>
  );
}
```

---

## 8. What is Default Props?

**Default props** allow you to define fallback values for a component's props when none are passed.

```jsx
function Greeting({ name = "Guest", age = 18 }) {
  return (
    <h1>
      Hello, {name}! You are {age} years old.
    </h1>
  );
}

// Called without any props
<Greeting />;
// Output: Hello, Guest! You are 18 years old.
```

---

## 9. Why We Use Props / Characteristics of Props

### Characteristics

| Property           | Description                                                      |
| ------------------ | ---------------------------------------------------------------- |
| **Immutable**      | A child component cannot modify its own props                    |
| **Unidirectional** | Data flows only from parent to child                             |
| **Any type**       | Strings, numbers, arrays, objects, functions, even JSX           |
| **Destructured**   | Commonly destructured in the function signature for cleaner code |

### Use Cases

- **Pass Data** - Send data from parent to child
- **Reusability** - Same component reused with different data
- **Dynamic Content** - Components show different content based on props
- **Avoid Repetition** - Write once, reuse anywhere
- **Communication** - The only way for a parent to communicate with a child

---

## 10. What is Children Prop?

`props.children` is a special, built-in prop that lets you pass content between the opening and closing tags of a component.

- Anything placed inside a component's tags is automatically passed as `props.children`
- Children can be strings, numbers, JSX elements, arrays, or even functions

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

// Usage
<Card>
  <h2>Title</h2>
  <p>Description here</p>
</Card>;
```

---

## 11. What is Props Drilling?

**Prop Drilling** is the process of passing data (props) through multiple layers of components to reach a deeply nested child that needs it, even if the intermediate components do not use that data.

> **To avoid prop drilling:** Use **Context API** or React state management libraries (Redux, Zustand, etc.)

```jsx
// Data starts here in Parent
function Parent() {
  const name = "Alice";
  const age = 25;
  return (
    <div>
      <h1>I am Parent</h1>
      <Child name={name} age={age} />
    </div>
  );
}

// Child receives and passes down to SubChild
function Child({ name, age }) {
  return (
    <div>
      <h2>I am Child</h2>
      <SubChild name={name} age={age} />
    </div>
  );
}

// SubChild finally uses the data
function SubChild({ name, age }) {
  return (
    <div>
      <h3>I am SubChild</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
```

---

## 12. What is Render Prop?

A **Render Prop** is when you pass a function as a prop to a component, and that component calls the function to render something.

```jsx
// Component accepts a function as a prop
function Greet({ render }) {
  return <div>{render("Alice")}</div>; // calls the function
}

// Passing a function as a prop
<Greet render={(name) => <h1>Hello, {name}!</h1>} />;

// Output: Hello, Alice!
```

---

## 13. What is Synthetic Event in React?

A **Synthetic Event** is a cross-browser wrapper around the browser's native event object.

- React normalizes events so they behave identically across all browsers
- Instead of a raw `MouseEvent` or `KeyboardEvent`, you get a `SyntheticEvent` object
- Has the same interface: `preventDefault()`, `stopPropagation()`, `target`, `currentTarget`, etc.

---

## 14. What is Virtual DOM?

The **Virtual DOM (VDOM)** is a lightweight, in-memory JavaScript representation (a tree of JavaScript objects) of the Real DOM.

- Instead of updating the Real DOM on every change, React maintains a virtual copy in memory
- On re-render, React creates a new virtual tree and **compares it with the previous one** to optimize DOM updates

---

## 15. What is Reconciliation?

**Reconciliation** is the process React uses to figure out how to efficiently update the DOM when changes occur in the UI.

---

## 16. What is Diffing Algorithm?

The **Diffing Algorithm** is React's heuristic-based `O(n)` comparison algorithm that efficiently finds differences between the new and old Virtual DOM trees.

---

## 17. What is Render Phase?

The **Render Phase** is the **first phase** of React's reconciliation process.

- React invokes the component functions (or `render()` in class components)
- Creates a new Virtual DOM tree
- Performs diffing to determine the minimal set of changes needed

**Key properties:**

- Pure and side-effect free
- React may pause, abort, or restart this phase (due to concurrent rendering in React 18+)
- No DOM mutations or side effects should occur here

![Render Phase and Commit Phase Diagram](./render_commit_phase.png)

---

## 18. What is Commit Phase?

The **Commit Phase** is the **second and final phase** of React's reconciliation process. React applies the calculated changes (mutations) to the real DOM in a single, synchronous batch.

- Runs after the Render Phase is complete
- Side effects are executed here:
  - `useLayoutEffect()` runs **before** browser paint
  - `useEffect()` runs **after** browser paint

---

## 19. What is State?

**State** in React is an internal, mutable data structure that represents the dynamic data of a component.

- Whenever a state variable changes, React **re-renders** the component

---

## 20. Difference Between State and Props

| Aspect     | Props                                 | State                                       |
| ---------- | ------------------------------------- | ------------------------------------------- |
| Mutability | Immutable                             | Mutable                                     |
| Purpose    | Pass data between components          | Manage internal component data              |
| Ownership  | Owned and controlled by parent        | Owned by the component that declares it     |
| Updates    | Child cannot modify props             | Component can read and update its own state |
| Re-render  | Does not trigger re-render on its own | State update triggers re-render             |

---

## 21. What is Hooks?

**Hooks** are special built-in functions in React that allow you to use state and other React features (like lifecycle methods, context, refs, etc.) in **functional components**.

### Key Features

- Introduced in **React 16.8**
- Allow Functional Components to be stateful
- Always start with `"use"` (e.g., `useState`, `useEffect`)
- Enable better code reuse

---

## 22. What is useState Hook?

`useState` is a built-in React Hook that allows you to add and manage local state in functional components. It returns an array with two elements: the current state value and a function to update it.

### Syntax

```js
const [state, setState] = useState(initialValue);
```

| Element        | Description                                                         |
| -------------- | ------------------------------------------------------------------- |
| `state`        | Current value of the state (read-only)                              |
| `setState`     | Function used to update the state                                   |
| `initialValue` | Initial value (can be number, string, boolean, object, array, etc.) |

---

## 23. What is Batching?

**Batching** in React is the process where React groups multiple state updates into a **single re-render** instead of re-rendering after every individual state update.

- Improves performance by reducing unnecessary re-renders

---

## 24. What is Conditional Rendering?

**Conditional Rendering** is the technique of rendering different UI elements or components based on certain conditions.

- Uses `if-else`, ternary operator `? :`, or logical (short-circuit) operator `&&`

---

## 25. Lazy Initialization in useState

**Lazy Initialization** is a technique where you pass a **function** as the initial value to `useState`. React calls this function only **once** during the initial render and uses its return value as the initial state.

This is useful for expensive computations that should not run on every re-render.

### Syntax

```js
const [state, setState] = useState(() => {
  // This function runs ONLY ONCE during initial render
  return expensiveComputation();
});
```

---

## 26. What is useEffect?

The `useEffect` hook is a built-in React function that allows you to perform **side effects** in functional components.

Side effects are operations that interact with systems outside of React (e.g., API calls, DOM manipulation, timers).

### Variants

#### 1. No dependency array - runs after every render

```js
useEffect(() => {
  console.log("Runs after every render");
});
```

#### 2. Empty dependency array - runs once on mount

```js
useEffect(() => {
  console.log("Runs once, like componentDidMount");
}, []);
```

#### 3. With dependencies - runs when those values change

```js
useEffect(() => {
  console.log("Runs when count or name changes");
}, [count, name]);
```

---

## 27. Difference Between useState and useEffect

| Aspect             | useState                         | useEffect                                          |
| ------------------ | -------------------------------- | -------------------------------------------------- |
| Purpose            | Add and manage state (data)      | Perform side effects                               |
| Returns            | `[currentState, setState]` array | `undefined` (nothing)                              |
| Triggers re-render | Yes, when `setState` is called   | No                                                 |
| Timing             | Synchronous during render        | Runs after render (and after paint)                |
| Common use         | Storing dynamic values           | API calls, subscriptions, timers, DOM manipulation |

---

## 28. React Lifecycle Methods in Function Based Component

Every React component goes through 3 phases:

```
MOUNT  -->  UPDATE  -->  UNMOUNT
(born)     (changes)     (dies)
```

### Phase 1: Mounting

Component is created and inserted into the DOM for the first time.

```js
useEffect(() => {
  console.log("Runs once after component mounts");
}, []);
```

### Phase 2: Updating

Component re-renders due to state or prop changes.

```js
useEffect(() => {
  console.log("Runs when count or name changes");
}, [count, name]);
```

### Phase 3: Unmounting

Component is removed from the DOM. The **cleanup function** runs at this point.

```js
useEffect(() => {
  console.log("Effect runs");

  return () => {
    console.log("Cleanup: component unmounted"); // Runs on unmount
  };
}, []);
```

---

## 29. What is a Single Page Application (SPA)?

A **Single Page Application** is a web app that loads a **single HTML document** and dynamically updates the DOM using JavaScript, instead of requesting new pages from the server on each navigation.

---

## 30. What is a Multi Page Application (MPA)?

A **Multi-Page Application** is a traditional web architecture where every user interaction (clicking a link, submitting a form) triggers a **full browser refresh** to load a completely new HTML page from the server.

---

## 31. Difference Between SPA and MPA

| Aspect       | SPA                  | MPA                          |
| ------------ | -------------------- | ---------------------------- |
| Page Loads   | One initial load     | Full reload per page         |
| Performance  | Faster navigation    | Slower navigation            |
| SEO          | Harder (needs SSR)   | Naturally good               |
| Development  | Usually one codebase | Traditional (multiple pages) |
| Initial Load | Slightly high        | Low                          |

---

## 32. What is Client Side Routing?

**Client-side routing** is when navigation between pages is handled by **JavaScript in the browser**. Instead of requesting a new page from the server, JavaScript libraries (like React Router, Vue Router) update the URL using the History API and render the appropriate component without reloading the page.

---

## 33. What is Server Side Routing?

**Server-side routing** is the traditional method where the browser sends a request to the server for every new URL. The server generates and sends back a complete HTML page, causing a **full browser refresh**.

---

## 34. What is react-router-dom?

**React Router DOM** is a popular library for client-side routing in React applications. It allows you to create a Single Page Application (SPA) and navigate between views without full page reloads.

---

## 35. createBrowserRouter vs BrowserRouter

### createBrowserRouter

- A function introduced in **React Router v6.4+**
- Creates a router instance using the History API
- **Recommended** approach
- Supports data APIs like `loaders`, `actions`, and `fetchers`

### BrowserRouter

- A component that wraps your app and enables client-side routing using the History API
- Does **not** support React Router v6.4+ data APIs like loaders and actions

---

## 36. Difference Between Link and NavLink

### Link

- Renders an anchor tag and navigates to a route without a full page reload
- Used for general navigation (e.g., "Read More" button, footer links)

### NavLink

- Same as `Link` but **applies an active class** when its route matches the current URL
- Used in Navbars or Dashboard tabs

---

## 37. What is Outlet?

`<Outlet />` is a component used in parent routes that acts as a **placeholder** where the matched child route's component gets rendered.

```jsx
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet /> {/* child route renders here */}
    </div>
  );
}
```

---

## 38. What is Index Prop?

The `index` prop is a boolean on a route that marks it as the **default child route**, rendered inside the parent's `<Outlet />` when no other child route matches.

```jsx
const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { index: true, element: <DashboardHome /> }, // renders at /dashboard
      { path: "settings", element: <Settings /> }, // renders at /dashboard/settings
    ],
  },
]);
```

---

## Test 2 - Question Bank

> Attempt any **11 questions**. Question 12 is **compulsory**.

1. What is VDOM, Reconciliation, and Diffing Algorithm?
2. What is Render Phase and Commit Phase?
3. What is State? Difference between State and Props?
4. What is Hooks? Explain useState Hook with syntax.
5. Can we write a function as an initial value in `useState`? (Lazy Initialization)
6. What is Batching and Conditional Rendering?
7. What is the `useEffect` Hook? Difference between `useState` and `useEffect`.
8. What is the React Lifecycle Method in Function Based Components?
9. Difference between SPA and MPA?
10. Difference between Client Side Routing and Server Side Routing?
11. What is the Key prop? When should we use index as a key prop?
12. **(Compulsory)** Explain the following terms:
    1. `createBrowserRouter`
    2. `BrowserRouter`
    3. `Link` vs `NavLink`
    4. `Index Prop`
    5. `Outlet`

---

## 39. What is useNavigate Hook?

- useNavigate is a hook that returns a navigate function used to navigate to different routes in your app.
- It replaces the old useHistory hook and allows navigation with options like replace, state, or delta

#### Example

```
    navigate('/dashboard', { replace: true })).
```

## 40. How to create 404 not Found page?

A 404 Not Found page is an error page that appears when a user tries to access a URL/route that doesn't exist on your website or application.

```
const router = createBrowserRouter([
  // Explicit 404 route
  {
    path: "*",
    element: <NotFound />,
  },
]);
```

## 41. What is Dynamic Routing?

- Dynamic Routing is a technique where routes are defined with dynamic segments (parameters) so that a single route can handle multiple URLs.

#### Example

```
      const router = createBrowserRouter([
        { path: "/", element: <Home /> },
        { path: "/notes/:id", element: <NoteDetail /> },   // Dynamic Route
        { path: "*", element: <NotFound /> }
      ]);
```

## 42. What is useParams Hook?

- useParams is a React Router hook that lets you access dynamic values from the URL.
- If your route is /notes/:id, then useParams() gives you the id value.

#### Syntax

```
  const { id } = useParams();
```

## 43. What is Navigate Component? Difference between Navigate vs useNavigate?

Navigate is a React Router component used to redirect users to another route declaratively when it is rendered.

### Navigate Componentuse

- It is a React component used for declarative redirection.
- It is mainly used for automatic redirects

### useNavigate Hook

- It is a React hook that returns a function to navigate programmatically.
- It is used inside event handlers like button clicks, form submissions, or after async operations.

## 44. What is useSearchParams Hook?

- useSearchParams is a React Router hook used to read and update the query parameters (search params) in the URL.
- It returns an array with the current search params object and a function to update.

#### Example

```
import { useSearchParams } from 'react-router-dom';

function Component() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read
  const page = searchParams.get('page');
  const filter = searchParams.get('filter');

  // Update
  const handleFilter = () => {
    setSearchParams({ filter: 'active', page: 1 });
  };

  return <div>...</div>;
}
```

## 45. Difference between useParams and useSearchParams?

### useParams Hook:

- It is used to access dynamic route parameters defined in the URL path.
- Works with routes like /users/:id or /notes/:noteId.
- Returns a simple object (e.g., { id: "45" }).
- Mainly used for unique page identification.

### useSearchParams Hook:

- It is used to read and modify query parameters (search params) in the URL.
- Works with URLs like /notes?search=react&page=2.
- Returns an array [searchParams, setSearchParams].
- Mainly used for filtering, searching, sorting, and pagination.

## 46. What is useRouteError Hook?

- useRouteError is a React Router hook that returns the error thrown while rendering, loading, or navigating to a route.
- It is used only inside an errorElement to display error messages to the user.

#### syntax

```
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops! Something went wrong</h1>
      <p>{error.status} - {error.statusText}</p>
      <p>{error.data || error.message}</p>
    </div>
  );
}
```

## 47. What is useLoaderData Hook?

- useLoaderData is a React Router hook that allows you to access the data returned by the loader function of the current route.
- It is used for data fetching before a component renders (great for SEO and performance).

#### syntax

```
import { useLoaderData } from 'react-router-dom';

function NoteDetail() {
  const note = useLoaderData();     // Get data from loader

  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.body}</p>
    </div>
  );
}
```

## 48. What is useOutletContext Hook?

- useOutletContext is a React Router hook that allows nested child routes to access data/context passed from their parent route.
- It helps in sharing data between parent and child components without using prop drilling.

#### syntax

```
 // Child Component
import { useOutletContext } from 'react-router-dom';

function ChildPage() {
  const context = useOutletContext();   // Get data from parent

  return <h1>{context.userName}</h1>;
}

// Parent Route
function Layout() {
  const user = { userName: "Chombu", role: "admin" };

  return <Outlet context={user} />;   // Passing data
}
```

## 49. What is Public Route?

A Public Route is a route that can be accessed by anyone, whether the user is logged in or not.

## 50. What is Protected Route?

A Protected Route is a route that can only be accessed by authenticated users (logged-in users).

## 51. What is CORS?

- CORS stands for Cross-Origin Resource Sharing.
- It is a security mechanism implemented by web browsers that allows or restricts web pages from making requests to a different domain
- Without proper CORS policy on the backend, the browser will block the request and show an error.

## 52. What is CORS Policy?

- CORS Policy is a set of rules defined by the server that tells the browser whether it should allow or block a cross-origin request.
  -It is sent by the server in the form of special HTTP headers (like Access-Control-Allow-Origin).

## 53. Why Does CORS Exist?

- Browsers follow the Same-Origin Policy (security feature) by default, which blocks requests from one domain to another to prevent malicious websites from accessing sensitive data.
- CORS is the controlled way to relax that restriction.

## 54. How to fix CORS?

#### Step-1: Install cors package

```
 npm install cors
```

#### Step-2: Use cors in backend

```
import cors from "cors";

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'],   // your frontend URLs
  credentials: true,                                            // if using cookies/auth
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],         // Allowed Methods
  allowedHeaders: ['Content-Type', 'Authorization']             // Allowed headers
}));
```

## 55. What is useActionData Hook?

useActionData is a React Router hook that returns the data returned by the most recently executed action function of the current route.

```
// Action function (returns data instead of redirecting)
export const handleSignup = async ({ request }) => {
    const form = await request.formData();
    const user = {
        email: form.get("email"),
        password: form.get("password")
    };

    const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    });

    if (!response.ok) {
        const err = await response.json();
        return { error: err.message }; // returned, not thrown
    }

    return redirect("/dashboard");
};
```

```
// Component consuming action data
import { useActionData } from "react-router-dom";

const Signup = () => {
    const data = useActionData();

    return (
        <Form method="post">
            <input name="email" type="email" />
            <input name="password" type="password" />
            {data?.error && <p>{data.error}</p>}
            <button type="submit">Register</button>
        </Form>
    );
};
```

## 56. Difference between useState and useRef ?

1. Purpose:

```
useState: Used to manage state that affects the UI (reactive state).
useRef: Used to store mutable values that persist across renders.
```

2. Re-rendering:

```
useState: Updating state causes the component to re-render.
useRef: Updating ref.current does not cause re-render.
```

3. Syntax:

```
useState: const [value, setValue] = useState(initialValue)
useRef: const ref = useRef(initialValue)
```

4. Access & Update:

```
useState: Update using setValue(newValue)
useRef: Update directly ref.current = newValue
```

5. Use Cases:

```
useState: Form inputs, counters, toggles, fetched data, UI-dependent values.
useRef: DOM references (focus, scroll), previous value tracking, timers, mutable flags.
```

6. Performance:

```
useState: Can be expensive due to re-renders on every update.
useRef: Lightweight, no re-renders.
```

7. When to Use:

```
Use useState when you want the UI to update when value changes.
Use useRef when you just need to "remember" a value without UI update.
```

## 57. Difference between Controlled Form and Uncontrolled Form?

**Controlled:** React controls the form using state + value + onChange.
Controlled needs more code but gives better control & validation.

**Uncontrolled:** DOM controls the form (using defaultValue or ref).
Uncontrolled is simpler and faster but harder to validate.

## 58. What is Context API?

- Context API is a built-in feature in React that allows you to share data (state, functions, etc.) across multiple components without passing props manually at every level
- It solves the prop drilling problem.

## 59. How Context API Works?

1. **Create Context** – Using React.createContext()
2. **Provide Context** – Wrap components with a Provider
3. **Consume Context** – Access the value using useContext() hook in FBC (or Consumer in class components), In class based component we use **consumer** to take values from the store.

## 60. What is Redux Tool Kit?

- Redux Toolkit is the official, modern, and recommended state management library by the Redux team to write Redux logic in a much simpler and efficient way.
- It was created to solve the main problem of traditional Redux — too much boilerplate code.

## 61. What is Store in RTK?

- The Store is the central container that holds the entire state of your application.
- It is the single source of truth for all global data.
- the store is created using **configureStore()**

## 62. What is slice in RTK?

- A Slice is like a mini-reducer that contains its own name,state, actions, and reducers for a specific part of your application.
- It is created using createSlice() function.
- Instead of writing separate files for actions, action types, and reducers (like in old Redux), you write everything in one slice file.

## 63. What is actions in RTK?

- An Action is a plain JavaScript object with a type (what happened) and an optional payload (data).

- In RTK, actions are automatically generated from the reducers you define inside createSlice.

**syntax**

```
   { type: "cart/addItem", payload: {id: 1, name: "Lays"}}
```

## 64. What is Reducer in RTK?

A Reducer is a pure function that takes the current state and an action, and returns the new state.

## 65. What is useDispatch Hook?

useDispatch is a React Redux hook that gives you access to the dispatch function. It is used to send actions to the Redux store to update the state.
**syntax**

```
   const dipatch = useDispatch();
```

## 66. What is useSelector Hook?

- useSelector is a React Redux hook that allows you to read data from the Redux store (state) inside your components.
- useSelector is used to subscribe(make in sync) your component to the Redux Store.
  **syntax**

```
const count = useSelector((state) => state.counter.value);
```

## 67. What is Lifting Up State?

When two or more components need to share the same state, instead of keeping the state in each child, you lift (move) the state up to their closest common parent. The parent manages the state and passes it down as props.

## 68. Why Do We Lift State Up?

- To share data between sibling components.
- To avoid duplicating state.
- To keep data flow predictable (one-way data flow).

## 69. What is useLocation in React Router Dom?

- useLocation Hook is a built-in hook provided by React Router.
- It returns the current location object, which contains information about the current URL.

## 70. How useLocation and useNavigate works together? (Simple Flow)

1. You call navigate(path, { state: data }) in one component.
2. React Router updates the URL and saves the state.
3. In the new component, you call useLocation() to access location.state.

## 71. How Redux Toolkit Works?

- Whenever we click on any button it will dispatch an action which will call the reducer function in the slice and update the state in the store.

- Once the store is updated, useSelector gets the latest state from the store and re-renders the component.

![RTK](./RTK.png)

## 72. What is Custom Middleware(Local Middleware)?

- Middleware is a function that sits between the dispatch of an action and the reducer. It can:
  - Log actions
  - Modify actions
  - Dispatch additional actions
  - Perform side effects (async logic)
  - Block or delay actions
  - Call APIs, etc.

## 73. What is createAsyncThunk?

1. createAsyncThunk is a utility function in Redux Toolkit that simplifies handling asynchronous operations (like API calls) in Redux.

2. It automatically generates three action types — pending, fulfilled, and rejected — and manages the lifecycle of async requests, reducing boilerplate code.

**What does it return?**
It returns an action creator that, when called, returns a special action with a payload promise.

## 74. What is useCallback hook?

It is used to memoize functions so that the same function reference is passed to child components, preventing them from re-rendering unnecessarily when the parent re-renders.

```
  const fn = useCallback((e) => {
    setData(e.target)
  })
```

## 75. What is useMemo hook?

It is used to memoize expensive calculations or large objects/arrays so they are not recomputed on every render."

```
  const val = useMemo(() => ({username: "Chombu singh", age: 24}))
```

## 76. What is React.memo ?

1. React.memo is a performance optimization tool in React that wraps a functional component and stops it from re-rendering when its props are the same as the previous render. It does a shallow comparison of props.

2. React.memo is Higher Order Component(HOC).

```
import React from 'react';

const MyComponent = React.memo(function MyComponent(props) {
  return <div>{props.name}</div>;
});

// Or using arrow function
const MyComponent = React.memo(({ name }) => {
  return <div>{name}</div>;
});
```

## 77. Difference between CBC and FBC?

**FBC:**

- A normal js function which returns some piece of jsx
- It is stateless component before 2019.We use hooks to create state inside FBC

**CBC:**

- A normal js class which extends React.component and has render method which returns some piece of jsx.
- It is statefull component

## 78. What is useId hook?

useId is a React hook that generates a stable, unique ID that is consistent between server and client renders. It solves the hydration mismatch problem that occurs when you manually assign IDs.

## 79. What is Error Boundary?

- An Error Boundary is a class component that catches JavaScript errors anywhere in its child component tree during render, lifecycle methods, and constructors, prevents the entire app from crashing, and displays a fallback UI instead.
- It uses two lifecycle methods:
  - getDerivedStateFromError - renders fallback UI
  - componentDidCatch - logs the error to a service

## 80. What is React Error Boundary Package?

- ErrorBoundary Component
- fallback
- fallbackRender
- FallbackComponent
- onError
- onReset
- useErrorBoundary Hook (for api calls error, event listeners)
- getErrorMessage
- withErrorBoundary HOC
- resetKeys

## 81. What is HOC?

A component which takes another component and must return enhanced component.
componet => HOC => Enhanced Component

## 82. What is React Portal?

React Portal is a way to render a child component outside its parent's DOM hierarchy while keeping it inside React's component tree.

```
import { createPortal } from 'react-dom';

function Modal({ children }) {
  return createPortal(
    <div className="modal">{children}</div>,
    document.body
  );
}
```

## 83. What is Activity Component?

<Activity> lets you hide and restore the UI and internal state of its children.

```
<Activity mode={status? "visible" : "hidden"}>
  <Sidebar />
</Activity>
```

## 84. What is useEffectEvent?

- useEffectEvent is a React Hook that lets you separate events from Effects.

```
const onEvent = useEffectEvent(callback);
```

## 85. What is useLayoutEffect?

useLayoutEffect is a React Hook that is a synchronous version of useEffect. It runs immediately after React has updated the DOM, but before the browser paints (renders) the screen.

useLayoutEffect(callback, [dependencies]);

callback: A function that runs after DOM mutations.
dependencies: Optional array — the effect runs again only if these values change (just like useEffect).

## 86. What is Custom Hooks

Custom Hooks in React are a powerful way to reuse stateful logic between components.

Key Rules:

Must start with the word use
Can only be called at the top level of a React function component or another custom hook
Follows all the Rules of Hooks

## 87.What is useTransition Hook?

The useTransition hook enables us to mark some state modifications as unimportant. These state updates will be performed in parallel with other state updates, but the rendering of the component will not be delayed.
**Syntax**
`const [isPending, startTransition] = useTransition();`
isPending (boolean): true while the transition is ongoing. Useful for showing loading indicators.
startTransition (function): Wraps a state update to mark it as a transition.

## 88. what is useDefferedValue Hook?

- useDeferredValue is a React Hook (introduced in React 18) that lets you defer (delay) a non-urgent value update until the browser is idle. It helps improve responsiveness by showing the old value while a new, expensive render is being prepared in the background.
- It is the value counterpart to useTransition().

## 89. What is useOptimistic Hook?

The useOptimistic hook allows you to make optimistic updates to your UI. This means you can update the user interface immediately, assuming a successful result of an asynchronous operation, and then revert it if the operation fails. This approach improves the user experience by making the UI feel more responsive.

**syntax**

```
const [optimisticState, applyOptimisticUpdate] = useOptimistic(initialState, updaterFunction);
```

initialState: The initial state before any optimistic updates.
updaterFunction: A function that defines how the state should be updated optimistically.

**Example**

```
import React, { useState, useTransition} from 'react';
import { useOptimistic } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [optimisticTodos, setOptimisticTodos] = useOptimistic(todos, (todos, newTodo) => [...todos, newTodo]);

 const handleAddTodo = async (newTodo) => {
    startTransition(() => {
      setOptimisticTodos({ type: "add", todo: newTodo });
    });

    try {
      await fakeApiCallToAddTodo(newTodo);
      setTodos((prevTodos) => [...prevTodos, newTodo]); // Persist update
    } catch (error) {
      console.error("Failed to add todo:", error);
    }
  };

  return (
    <div>
      <ul>
        {optimisticTodos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={() => handleAddTodo(`New Todo ${Date.now()}`)} disabled={isPending}>
        Add Todo
      </button>
    </div>
  );
}

const fakeApiCallToAddTodo = (todo) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.3 ? resolve() : reject(new Error("API Error"));
    }, 1000);
  });
export default TodoList;
```

**Medium Link**: https://medium.com/zestgeek/mastering-reacts-useoptimistic-hook-a-comprehensive-guide-with-examples-75b4637fe760

## 90. What is Polling?

RTK Query polling means automatically re-fetching a query at a fixed time interval.

```
const { data } = useGetPostsQuery(undefined, {
  pollingInterval: 3000, // re-fetches every 3 seconds
});
```

**It stops when the component unmounts.** The timer is tied to the component's subscription. No memory leaks.
**Multiple components, one request.** If two components poll the same endpoint at the same interval, RTK Query deduplicates it. One network request, not two.

**skipPollingIfUnfocused** stops polling when the browser tab loses focus. Useful for not hammering your server when nobody is looking at the page.

```
const { data } = useGetPostsQuery(undefined, {
  pollingInterval: 3000,
  skipPollingIfUnfocused: true,
});
```

## 91. currently anyone can access your host or prticpant page by copying the url, how will you stop this?

## 91. What is Code Splitting?

1. Code splitting is a technique that breaks down a large JavaScript bundle into smaller chunks that are loaded on demand.
2. Instead of loading the entire application at once, only the code needed for the current view is fetched.
3. This approach reduces initial load times and allows the application to scale better.

**Medium Link**: https://medium.com/@ignatovich.dm/optimizing-react-apps-with-code-splitting-and-lazy-loading-e8c8791006e3

## 92. What is Lazy Loading?

Lazy loading is a way to delay loading certain parts of the application until they are actually needed. React provides the React.lazy function, which allows you to define components that are loaded dynamically.

**React.lazy:** It dynamically imports the LazyComponent only when it's rendered.
**Suspense:** It provides a fallback UI while the component is loading.

**Syntax**

```
import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
```

## 93. What is Preloading ?

While lazy loading improves performance by deferring code, it may result in delays when loading critical components. Preloading can address this issue by fetching components before they’re needed, ensuring seamless transitions.

**Syntax**

```
import React, { useEffect, Suspense } from "react";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

**// Preload the component**
const preloadComponent = () => {
  import("./LazyComponent");
};

function App() {
  useEffect(() => {
    preloadComponent(); // Preload the component on app load
  }, []);

  return (
    <div>
      <h1>Welcome to My App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
```

## 94. What is Preloading in Vite

Vite includes a built-in preloading mechanism for prefetching critical assets. By default, <link rel="modulepreload"> is added for dynamically imported chunks, ensuring faster load times.

#### Example: Using Preloading in Vite

To preload additional assets or chunks, use dynamic imports with the **import.meta.glob** feature:

```
const preloadChunks = import.meta.glob("./components/*.js", { eager: true });
```

This preloads all components in the components directory, making them available before rendering.

## 95. What are the advantages and disadvantages of Code Splitting

#### Benefits:

1. **Improved Load Times:** Users download only the code they need.
2. **Reduced Bundle Size:** Smaller initial JavaScript payload.
3. **Scalability:** Easier to maintain and extend large applications.

#### Drawbacks:

1. **Initial Complexity:** Setting up lazy loading and code splitting requires additional effort.
2. **Flashing:** Users may see fallback content briefly during lazy loading.
3. **Testing:** Requires careful testing to ensure smooth transitions.

## 96. What is Suspense?

1. The Suspense component in ReactJS is a powerful tool that enables developers to handle asynchronous operations in a more declarative way.
2. Suspense provides a way to delay rendering components until certain conditions are met, such as data fetching, lazy loading, or other asynchronous tasks.
3. Suspense offers a more streamlined approach, allowing you to specify fallback content to be displayed while waiting for the asynchronous operation to complete.

**Example**

```
import React, { Suspense } from 'react';

const fetchUserData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'John Doe', age: 28 });
    }, 2000);
  });
};

const UserDetails = () => {
  const user = fetchUserData();
  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

const SuspenseUserDetails = () => {
  return (
    <Suspense fallback={<div>Loading user details...</div>}>
      <UserDetails />
    </Suspense>
  );
};

export default SuspenseUserDetails;
```

**Medium Link:** https://medium.com/zestgeek/understanding-the-suspense-component-in-reactjs-a-comprehensive-guide-with-real-life-examples-141d86b9ca9c

## 97. What is React Virtualization (Windowing)?

React Virtualization is a performance optimization technique that renders only the visible portion of a large dataset and dynamically updates the rendered items during scrolling.

- Virtualization is a technique used to efficiently render large lists or tables.
- It renders only the currently visible items in the viewport instead of rendering the entire dataset.
- As the user scrolls, visible items are added and removed dynamically.
- It reduces DOM nodes, memory usage, and rendering cost, improving performance.
- Common libraries: React Window and TanStack Virtual.

## 98. What is React Hydration?

React Hydration is the process of attaching React's JavaScript behavior and event handlers to server-rendered HTML in the browser, converting the static HTML into an interactive React application.

- Hydration is the process of attaching React's event handlers and component logic to HTML that was already rendered on the server.
- It is commonly used with SSR (Server-Side Rendering) frameworks such as Next.js.
- The server sends HTML to the browser, allowing the user to see the UI quickly.
- React then hydrates that HTML and makes it interactive.
- Hydration avoids completely rebuilding the existing server-rendered DOM when the markup matches.

## 99. What is use() Api in React?

React 19’s use() allows you to directly handle asynchronous operations and promises within your component without the need for useEffect or useState. When using use(), React suspends the component rendering until the promise resolves, drastically reducing boilerplate code and making your components more declarative.

**Medium Link**: https://medium.com/@ademyalcin27/the-new-use-hook-in-react-19-a-game-changer-for-simpler-data-fetching-and-context-management-cc45cc5ebd28

## 100. What is useSyncExternalStorage Hook?

useSyncExternalStore is a React hook introduced in React 18 that enables components to subscribe to external state sources and stay synchronized with them. It some kind of bridge between React's internal state management and external systems like Redux, Zustand, or browser APIs.
**Syntax**

```
useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)
```

**subscribe:** A function that receives a listener callback. It should attach the listener to the store and return an unsubscribe function.

**getSnapshot:** A function that returns the current state from the external store.

**getServerSnapshot (optional):** Used for server-side rendering. Returns the initial state snapshot.

**Medium Link:** https://medium.com/@ignatovich.dm/usesyncexternalstore-synchronizing-external-state-with-react-components-bc4e2b27338f

## 101. Difference between useEffect and useLayoutEffect ?

**useEffect**

- Runs after the browser paints the updated UI.
- Used for side effects such as API calls, subscriptions, timers, and event listeners.
- Does not normally block browser painting.
- Preferred for most side-effect operations.
  **useLayoutEffect**
- Runs after React updates the DOM but before the browser paints the updated UI.
- Used for DOM measurements and synchronous DOM manipulation.
- Blocks browser painting until its callback finishes.
- Should be used when the operation must complete before the user sees the updated UI.

## 102. Want to become Senior Frontend Engineer?

**Error Handling:** https://javascript.info/try-catch
**GraphQL with React:** https://www.apollographql.com/docs/react
**React Testing Library:** https://testing-library.com/docs/react-testing-library/intro/
**How to Use Cypress for End-to-End Testing:** https://docs.cypress.io/app/get-started/why-cypress
**Introduction to Debugging with Chrome DevTools:** https://developer.chrome.com/docs/devtools/

**Medium Article:** https://medium.com/@ignatovich.dm/what-senior-frontend-engineers-need-to-know-53cf15c4c611
