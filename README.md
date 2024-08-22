# EduFlare

## Description
EduFlare is a project that allows students to get personalized flashcards for quizzes, tests, and study sessions. 

## Getting Started

### Prerequisites
Before you begin, ensure you have met the following requirements:
- **Git**: Install the latest version of [Git](https://git-scm.com/downloads).
- **Node.js**: Make sure you have [Node.js](https://nodejs.org/) installed (preferably the LTS version).
- **Code Editor**: Install a code editor like [VSCode](https://code.visualstudio.com/) or any editor of your choice.

### Cloning the Repository
Follow these steps to clone the repository to your local machine:

1. **Open your terminal** (or Git Bash, Command Prompt, etc.).

2. **Navigate to the directory** where you want to clone the repository by using the `cd` command:
   ```bash
   cd path/to/your/folder
   ```

3. **Clone the repository** by running the following command:
   ```bash
   git clone https://github.com/myranoor/EduFlare.git
   ```

4. **Navigate into the cloned repository**:
   ```bash
   cd EduFlare
   ```

### Installing Dependencies
Install the required dependencies using npm:
```bash
npm install
```

### Running the Development Server
Start the development server with:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` to view the app.

### Making Changes
To make edits to the project:

1. **Create a new branch** for your changes (recommended):
   ```bash
   git checkout -b your-branch-name
   ```
   Replace `your-branch-name` with a descriptive name for your branch.

2. **Make your changes** in your code editor.

3. **Stage your changes** for commit:
   ```bash
   git add .
   ```

4. **Commit your changes** with a meaningful commit message:
   ```bash
   git commit -m "Your commit message"
   ```

5. **Push your branch** to the remote repository:
   ```bash
   git push origin your-branch-name
   ```

### Submitting Changes
To submit your changes for review:

1. **Go to the EduFlare repository on GitHub**.
2. **Create a Pull Request** from your branch to the `main` branch (or the appropriate branch).
3. **Describe your changes** in the Pull Request description.
4. **Submit the Pull Request** for review.

## Known Issues and Solutions

### Merging Another Repository

**Problem**: When trying to merge another repository into this one, I encountered issues with conflicting changes and history divergence.

**Solution**:
1. **Add the other repository as a remote**:
   ```bash
   git remote add other-repo https://github.com/username/other-repo.git
   ```

2. **Fetch the changes from the other repository**:
   ```bash
   git fetch other-repo
   ```

3. **Merge the changes** into your branch:
   ```bash
   git merge other-repo/main
   ```
   Resolve any merge conflicts that arise. Use `git status` to see which files need attention.

4. **Commit the merge**:
   ```bash
   git add .
   git commit -m "Merged changes from other-repo"
   ```
5. **Pull the latest changes** from the remote repository to ensure your branch is up to date:
```bash
git pull origin main
```
6. **Push the merged changes** to your repository:
   ```bash
   git push origin main
   ```
  
### Recovering Lost Backend Data

In case of accidentally losing backend data that wasn't pushed to GitHub and can't be found in the local repository, follow these steps to recover the data using `git reflog`:

1. **Identify the Issue:**
   - We noticed that our backend data was missing, and it was neither available in the local repository nor pushed to GitHub.

2. **Use `git reflog` to Track Commits:**
   - `git reflog` is a powerful command that tracks all the changes made to the branch, even those not pushed to a remote repository.
   - Run the following command in the terminal:
     ```bash
     git reflog
     ```
   - This will display a list of all the recent changes and commits in your local repository.

3. **Locate the Desired Commit:**
   - Review the list of commits and identify the one where the backend data was last available.
   - Each entry will have a reference number, commit hash, and a brief description of the change.

4. **Check Out the Required Commit:**
   - Once you've identified the correct commit, you can check it out using the commit hash:
     ```bash
     git checkout <commit-hash>
     ```
   - Replace `<commit-hash>` with the actual hash of the commit you want to recover.

5. **Restore the Lost Data:**
   - After checking out the commit, the backend data should be available again. You can now create a new branch or revert the changes as needed.

6. **Commit the Recovered Data:**
   - If necessary, create a new branch to preserve the recovered state:
     ```bash
     git checkout -b <new-branch-name>
     ```
   - Commit the recovered data to your repository:
     ```bash
     git add .
     git commit -m "Recovered backend data"
     ```
   - Push the changes to GitHub to ensure they are saved remotely.

### Notes:
- Always ensure your changes are regularly committed and pushed to avoid data loss.
- `git reflog` is a powerful tool for recovering lost commits or changes; however, it's important to act quickly before the reflog entries expire.
