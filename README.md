## ooloilabs-FullStackDev-Assignment Documentation: Dynamic Form Application

**Introduction**

This application is a dynamic form builder created using Node.js on the backend and React on the frontend. The backend serves JSON data that defines the structure of the form, and the frontend dynamically renders the form based on this data using components from the `oolib` library.


**Project Features:**

- **Node.js Backend:**
    - Sets up a simple Node.js server.
    - Provides an API endpoint (`/getComponentsForReact`) that serves JSON data containing form component configurations.
    - Each block in the JSON array represents a configuration for a form element (e.g., text input, checkbox, etc.).
- **React Frontend:**
    - Built using React to handle the user interface.
    - Fetches the JSON data from the Node.js backend server using an appropriate library (your choice).
    - Attempts to dynamically render form elements based on the received JSON data using `oolib` components.


**Current Status & Challenges Faced:**

While both the backend server and the React application are functional, the dynamic form rendering using `oolib` components is not fully completed due to limitations in the library's support for the specific form components defined in the JSON data. 


**Running the Application:**

**1. Node.js Backend:**

- Navigate to the server directory in your project.
- Install Node.js dependencies using the command:

   ```npm install```

- Start the server using the command:

   ```node server.js ```

This will start the server and make the API endpoint (`/getComponentsForReact`) available.




**React Frontend Setup:**

**Important Note:** Due to `oolib`'s compatibility with React version 17 only, ensure your React installation reflects this.

- **Pre-existing Compatible Node Modules:**

  React and `oolib` dependencies are already present in the `node_modules` folder within the client directory, and their versions meet the requirements (`react ^17`, `react-dom ^17`, `oolib ^2`), you can directly start the application using:

  ```bash
  npm start
  ```

- **Handling Incompatible Node Modules:**

  If you don't have compatible React dependencies or encounter issues during startup, follow these steps:

  1. **Delete Existing Modules:** Navigate to the client directory and delete the `node_modules` folder using:

     ```rm -rf node_modules```

  2. **Reinstall Compatible Modules:** Reinstall the required dependencies with specific version ranges using:

     ```npm install react@17 react-dom@17 oolib@2```

  3. **Start the Application:** Once the installation is complete, start the React application using:

     ```npm start```
   

This will start the React application, which will attempt to fetch data from the backend API endpoint and render the form dynamically. However, due to `oolib` limitations, the form might not be fully functional.


