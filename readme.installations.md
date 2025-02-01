# Installations

---

## **Table of Contents**

1. [Installing Git](#installing-git)
2. [Installing Node.js](#installing-nodejs)
3. [Installing Docker](#installing-docker)
4. [Installing Visual Studio Code (VS Code)](#installing-visual-studio-code-vs-code)
5. [Verifying Installations](#verifying-installations)

---

## **Installing Git**

1. **Download Git**:

   - Visit the [official Git website](https://git-scm.com/) and download the installer for Windows.

2. **Run the Installer**:

   - Double-click the downloaded file to start the installation process.
   - Follow the prompts:
     - Choose the default editor (e.g., **VS Code** or **Vim**).
     - Leave the default options selected unless you have specific preferences.
     - Ensure "Git from the command line and also from 3rd-party software" is selected.

3. **Complete Installation**:

   - Click "Install" and wait for the process to finish.

4. **Verify Installation**:
   - Open the Command Prompt or PowerShell and type:
     ```bash
     git --version
     ```
   - You should see the installed Git version.

---

## **Installing Node.js**

1. **Download Node.js**:

   - Go to the [official Node.js website](https://nodejs.org/).
   - Download the **LTS (Long-Term Support)** version for stability.

2. **Run the Installer**:

   - Double-click the downloaded `.msi` file.
   - Follow the installation prompts:
     - Accept the license agreement.
     - Choose the installation directory (default is recommended).
     - Check the option to automatically install tools for native modules if prompted.

3. **Complete Installation**:

   - Finish the setup and close the installer.

4. **Verify Installation**:
   - Open the Command Prompt or PowerShell and type:
     ```bash
     node --version
     npm --version
     ```
   - You should see the installed versions of Node.js and npm (Node Package Manager).

---

## **Installing Docker**

1. **Download Docker Desktop**:

   - Visit the [Docker Desktop website](https://www.docker.com/products/docker-desktop/) and download the installer for Windows.

2. **Run the Installer**:

   - Double-click the downloaded `.exe` file to begin the installation.
   - Follow the prompts:
     - Ensure the **"Enable WSL 2"** option is selected during installation.
   - Restart your system if prompted.

3. **Complete Setup**:

   - After installation, start Docker Desktop and sign in with your Docker Hub account (or create one if you don’t have it).

4. **Verify Installation**:
   - Open the Command Prompt or PowerShell and type:
     ```bash
     docker --version
     ```
   - You should see the installed Docker version.

---

## **Installing Visual Studio Code (VS Code)**

1. **Download VS Code**:

   - Go to the [Visual Studio Code website](https://code.visualstudio.com/) and download the installer for Windows.

2. **Run the Installer**:

   - Double-click the downloaded `.exe` file.
   - Follow the installation prompts:
     - Accept the license agreement.
     - Choose the installation directory (default is recommended).
     - Check the options to add VS Code to the system PATH and register it as the default editor.

3. **Complete Installation**:

   - Finish the setup and launch VS Code.

4. **Install Extensions (Optional)**:
   - Open VS Code and navigate to the Extensions view (`Ctrl + Shift + X`).
   - Install useful extensions like:
     - **ESLint** (for linting).
     - **Prettier** (for code formatting).
     - **Docker** (for Docker integration).
     - **Node.js** (for JavaScript and Node.js support).

---

## **Verifying Installations**

After completing all installations, verify that everything is set up correctly:

1. **Git**:

   ```bash
   git --version
   ```

2. **Node.js and npm**:

   ```bash
   node --version
   npm --version
   ```

3. **Docker**:

   ```bash
   docker --version
   docker run hello-world
   ```

4. **VS Code**:
   - Open VS Code and ensure it launches without errors.

---

### Extensions and environment

1. Auto save
2. format on save

```json
ESLint	dbaeumer.vscode-eslint
Prettier - Code Formatter	esbenp.prettier-vscode
JavaScript (ES6) Code Snippets	xabikos.javascriptsnippets
React Developer Tools	msjsdiag.vscode-react-native
Tailwind CSS IntelliSense	bradlc.vscode-tailwindcss
Path IntelliSense	christian-kohler.path-intellisense
VSCode Icons	vscode-icons-team.vscode-icons
GitLens	eamodio.gitlens
TypeScript Hero	rbbit.typescript-hero
```
