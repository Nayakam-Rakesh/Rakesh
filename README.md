Introduction:
You are tasked with building a React-based web application with TypeScript. The project includes:

Counter Component: A component that lets the user interact with a numerical counter.
User Data Form: A form to collect and store user data (name, address, email, phone).
Rich Text Editor: A visual text editor that lets users format and edit text.
This web application will involve maintaining state across re-renders, storing data (using local storage or Redux Toolkit), and handling user input in a safe, structured way using TypeScript. The UI will be built with libraries like Material UI, Chakra UI, or Next UI, and animated with React Spring for smooth transitions.

Functional Breakdown:
1. Counter Component:
Purpose: Create a counter that can increase, decrease, and reset a value while dynamically changing the background color.

Key Features:

Increment/Decrement/Reset Buttons: Buttons to control the counter value.
State Persistence: The counter value must persist across page reloads (using local storage or a state management solution).
Dynamic Background Color: As the counter increases, the background color will change in a smooth (Bezier curve) animation. When reset, the background will return to the original state.
Reset Functionality: A reset button will bring the counter back to zero and reset the background color.
TypeScript Integration: TypeScript ensures that the counter's state (e.g., an integer) is correctly typed and helps catch any errors when interacting with it (e.g., trying to set a string value for the counter).

2. User Data Form:
Purpose: Collect user data through a form and store it safely.

Key Features:

Form Inputs: Fields to enter name, address, email, and phone number.
Auto-Generated User ID: Upon form submission, a unique user ID is generated (could use a UUID or a custom method) and stored.
Data Persistence: The form data should be saved to local storage or Redux Toolkit (RTK) so that data isn't lost even after a page refresh.
Unsaved Changes Warning: If the user tries to navigate away from the page with unsaved changes, a pop-up should appear warning them.
TypeScript Integration: By using TypeScript, you'll define clear types for the user data (e.g., name: string, email: string). TypeScript will catch any errors when handling the form data and ensure everything is correctly typed.

3. Rich Text Editor:
Purpose: Display user data in a visually editable format using a rich text editor.
Key Features:
Text Formatting: Provide options like bold, italic, underline, and lists (bulleted or numbered).
Data Persistence: When the user edits the text, the changes should be saved (either in the state or local storage).
TypeScript Integration: Using TypeScript, you can define types for the text content, ensuring that any user input or changes to the editor are safely managed and persist in the correct format.
Project Flow and Diagram:
User Interactions:

Users interact with the Counter Component by clicking the buttons to modify the counter value (increment, decrement, reset).
Users fill out the User Data Form by providing their name, address, email, and phone.
Users interact with the Rich Text Editor to format and edit the user data.
State Management:

Counter: State is stored in React's local state and is persisted in local storage or RTK.
User Data Form: Data is collected from the form fields, stored in a state variable, and saved to local storage or RTK on submission.
Rich Text Editor: The content of the editor is stored in the component's state and persists across sessions using local storage.
Data Flow:

When the form is submitted, the user data is saved to local storage or RTK.
If the user navigates away with unsaved changes, a pop-up will alert them.
When the counter's state changes, it updates both the background color and the displayed count value.
User Interface: This is where the user interacts with the app (via the counter, form, or text editor).
Counter Component: Allows the user to modify the counter value and see the changes in the UI and background color.
User Data Form: Collects user details, validates the input, generates a unique ID, and saves the data.
Rich Text Editor: Visualizes and allows editing of user data with text formatting options.
State Management: All data is managed via React state (or external state management like RTK), and changes are persisted using local storage or RTK.
Persisted Data: Data stored in local storage or Redux persists across page reloads.
Rendered UI Updates: As state changes (counter or form submission), the UI updates accordingly.
