# GitHub Classroom & Repository Setup Guide

## Overview

GitHub is used for:
1. **Version Control:** Track code changes
2. **Collaboration:** Work with peers
3. **Portfolio:** Showcase projects to employers
4. **GitHub Classroom:** Automated assignment distribution

---

## 🚀 Initial Setup

### 1. Create GitHub Account

**If you don't have one:**
1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Create account with university email
4. Verify email address
5. Add profile picture and bio

### 2. Accept GitHub Classroom Assignment

**Process:**
1. Instructor sends GitHub Classroom link
2. Click link → Authorize GitHub
3. Accept assignment
4. Repository created automatically
5. Clone to your computer

---

## 📦 Repository Structure

### Recommended Folder Layout

```
bca-client-side-scripting/
├── Week-1/
│   ├── Day1/
│   │   ├── day1_introduction.js
│   │   ├── day1_assignment.html
│   │   └── README.md
│   ├── Day2/
│   ├── Day3/
│   ├── Day4/
│   ├── Day5/
│   └── week1_project/
│       ├── index.html
│       ├── calculator.js
│       └── README.md
├── Week-2/
│   ├── Day1/
│   ├── ...
│   └── week2_project/
├── Week-3/
├── Week-4/
├── Week-5/
├── Week-6/
├── README.md (Main project description)
└── .gitignore
```

---

## 💻 Git Basics for Beginners

### Installation

**Windows:**
1. Download [Git for Windows](https://gitforwindows.org/)
2. Run installer, accept defaults
3. Open PowerShell → type `git --version`

**Mac:**
```bash
brew install git
```

**Linux:**
```bash
sudo apt-get install git
```

### Configure Git (First Time Only)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@meu.edu.in"
```

---

## 📝 Daily Workflow

### 1. Clone Repository (First Time)

```bash
# Copy repo link from GitHub
git clone https://github.com/MandsaurUniversity/BCA_IV_CSS_AY2025-26.git

# Navigate to folder
cd BCA_IV_CSS_AY2025-26
```

### 2. Create Your Work (Daily)

```bash
# Create new file or modify existing
# Example: Create Day 1 assignment
code Week-1/Day1/day1_assignment.js
```

### 3. Check Status

```bash
# See what files changed
git status
```

### 4. Stage Changes

```bash
# Add specific file
git add Week-1/Day1/day1_assignment.js

# Add all changes
git add .
```

### 5. Commit Changes

```bash
# Create checkpoint with message
git commit -m "Add Day 1 values and operators exercises"
```

**Good Commit Messages:**
- ✅ "Add BMI calculator with input validation"
- ✅ "Fix loop logic in day2 assignment"
- ✅ "Complete exercise 3.5 with detailed comments"
- ❌ "Fixed stuff"
- ❌ "asdfgh"

### 6. Push to GitHub

```bash
# Upload your changes
git push origin main
```

### 7. Verify on GitHub

Visit [github.com](https://github.com) → Your repo → Check your files are there!

---

## 🔄 Working with Changes

### Updating Your Local Copy

```bash
# Get latest changes from GitHub
git pull origin main
```

### Checking History

```bash
# See all commits
git log

# See changes in specific file
git diff filename.js
```

### Undoing Changes

```bash
# Undo uncommitted changes
git restore filename.js

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (delete changes)
git reset --hard HEAD~1
```

---

## 👥 Collaboration Features

### Creating Branches (Advanced)

```bash
# Create new branch for experimental feature
git checkout -b feature-name

# Switch between branches
git checkout main
git checkout feature-name

# Merge branch back to main
git checkout main
git merge feature-name
```

### Pull Requests (For Peer Review)

1. Push your branch to GitHub
2. Click "New Pull Request"
3. Select branches to compare
4. Add description of changes
5. Submit for review
6. Instructor comments, then merge

---

## 📋 Assignment Submission via GitHub Classroom

### How It Works

1. **Instructor creates assignment** on GitHub Classroom
2. **You get link** via Google Classroom
3. **Click link** → Repository created automatically
4. **Clone repository** to your computer
5. **Complete assignment** in the repo
6. **Push to GitHub** → Auto-graded and submitted

### Example GitHub Classroom Assignment

**Assignment:** `01-hello-world`

```bash
# Classroom creates: lastname-firstname-01-hello-world
git clone https://github.com/youruniversity/01-hello-world-yourname.git

# Add your code
echo "console.log('Hello World');" > solution.js

# Commit and push
git add solution.js
git commit -m "Complete hello world assignment"
git push origin main
```

### Autograding (If Enabled)

- Instructor can set up automatic tests
- Your code runs against test cases
- Feedback shows which tests passed/failed
- Grade updates automatically

---

## 🎯 Weekly Checklist

- [ ] Clone/pull latest code each week
- [ ] Create Week X folder if needed
- [ ] Add your daily work files
- [ ] Commit at end of each day
- [ ] Push before leaving class
- [ ] Verify files on GitHub website

---

## 🔐 GitHub Best Practices

### DO:
✅ Commit frequently (multiple times per day)  
✅ Use descriptive commit messages  
✅ Push at end of each session  
✅ Pull before starting work (if working with others)  
✅ Add `README.md` files explaining projects  

### DON'T:
❌ Push passwords or API keys  
❌ Commit large files (> 100 MB)  
❌ Use vague messages like "update"  
❌ Mix multiple features in one commit  
❌ Force push without good reason  

### .gitignore File

Create `.gitignore` in root to exclude files:

```
# node_modules (if you use npm)
node_modules/

# System files
.DS_Store
Thumbs.db

# IDE folders
.vscode/
.idea/

# Log files
*.log

# Environment variables
.env
```

---

## 📊 GitHub Profile Tips

### Make Your Profile Attractive

1. **Add Profile Picture** (Setup → Profile photo)
2. **Write Bio** ("4th Year BCA Student | JavaScript Enthusiast")
3. **Pin Top Repositories** (Show best projects)
4. **Add README** (In profile repo)
5. **Keep Active** (Regular commits look good)

### Profile Contributions Graph

- Shows your commit activity
- Green squares = commits that day
- Employers love seeing active profiles
- Aim for consistency!

---

## 🔗 Useful GitHub Features

### Markdown in README.md

```markdown
# Project Title
Description of project

## How to Run
- Steps to run the code

## Features
- Feature 1
- Feature 2

## Author
Your Name

## Date
February 2026
```

### Adding Issues (For Your Own Projects)

1. Click "Issues" tab
2. "New Issue"
3. Add title and description
4. Assign to yourself
5. Use for tracking bugs or feature ideas

### GitHub Pages (Showcase Projects)

```bash
# Enable in Settings → Pages
# Select main branch
# Your site published at https://yourusername.github.io/reponame
```

---

## 🆘 Troubleshooting

### Push rejected - "fetch first"
```bash
git pull origin main  # Get latest
git push origin main  # Try again
```

### Can't remember password?
```bash
# Use GitHub CLI for authentication
gh auth login
```

### Accidentally committed something?
```bash
git reset HEAD~1  # Undo last commit
git restore filename  # Undo specific file
```

### Branch conflicts?
```bash
git pull origin main
# Resolve conflicts in editor
git add .
git commit -m "Merge conflicts resolved"
git push origin main
```

---

## 📚 Additional Resources

- [GitHub Docs](https://docs.github.com)
- [Git Tutorial by Atlassian](https://www.atlassian.com/git)
- [GitHub Desktop](https://desktop.github.com/) (Visual alternative to command line)
- [VS Code Git Integration](https://code.visualstudio.com/docs/sourcecontrol/overview)

---

## 🎓 Learning Git Interactively

**Free Tutorials:**
- [Learn Git with Visualizations](https://git-school.github.io/visualizing-git/)
- [GitHub Learning Lab](https://github.com/skills)

---

## 📅 Expected Commit Pattern

**Week 1 Example:**
```
Feb 10: "Add Day 1 values exercises"
Feb 11: "Complete Day 2 operators assignment"
Feb 12: "Add Day 3 logical operators code"
Feb 13: "Finish Day 4 unary operators"
Feb 14: "Complete Week 1 mini project - expense calculator"
Feb 15: "Polish project and add documentation"
```

**Total Expected:** 20-30 commits per week

---

**Questions about GitHub? Ask in office hours or comment on Classroom!**
