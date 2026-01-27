# IASA Student Council Articles

Welcome to the IASA Student Council Articles repository. This guide will help you understand how to publish new articles, edit drafts, and manage the website.

***You can read the articles on our [website](https://iasastudentcouncil.github.io/iasa-sc-blog/blog).***

## Move to the content
- [How to Publish New Articles](#how-to-publish-new-articles)
  - [Prerequisites](#prerequisites)
  - [Steps to Publish](#steps-to-publish)
- [Editing Drafts](#editing-drafts)
- [About](#about)
- [Development and Deployment](#development-and-deployment)
- [Notice](#notice)

## How to Publish New Articles

### Prerequisites
1. **Install Git:** Follow the instructions to [install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) on your computer.
2. **Create a GitHub Account:** If you don't already have a GitHub account, [sign up here](https://github.com/signup).
3. **Connect Git with GitHub:** Follow this [quickstart guide](https://docs.github.com/en/get-started/quickstart/set-up-git) to connect Git with your GitHub account.
4. **Learn Git Basics:** Familiarize yourself with Git basics by reading the [Git Basics](https://supersimpledev.github.io/references/git-github-reference.pdf).

### Steps to Publish
1. **Request Access**
   - Become an IASA Student Council Copywriter.
   - Contact the IASA Student Council GitHub owner (typically the IT-department head) to obtain `write` access to the repository.
   - Ask them to add you to the [authors list](blog/authors.yml). You need to provide:
     - Your full name.
     - A link to your Telegram account or your [link tree](https://linktr.ee).
     - Your profile image.

2. **Clone the Repository**
   - Clone the repository to your desired folder. Open a terminal and run the following command:
     ```bash
     git clone https://github.com/IASAStudentCouncil/iasa-sc-blog.git
     ```

3. **Create a New Article**
   - Navigate to the `blog` folder inside the cloned repository.
   - Create a new folder with a descriptive name for your article.
   - Inside this new folder, create an `index.md` or `index.mdx` file where you will write your article.

4. **Add Metadata**
   - At the top of your `index.md` or `index.mdx` file, add the following metadata:
     ```markdown
     ---
     slug: [The URL endpoint for the article. Example: `https://iasastudentcouncil.github.io/iasa-sc-blog/blog/{slug}`]
     title: [The title of the article]
     authors: [A list of authors. You can grab them from the `authors.yml` file in the `blog` folder]
     tags: [A list of tags to help users find articles]
     date: [The publication date, which determines the article's position in the blog list]
     keywords: [A list of keywords to improve searchability]
     ---
     ```

     **Example Metadata:**
     ```markdown
     ---
     slug: elected-ai-3-2023
     title: Вибіркові дисципліни ШІ 3 курс
     authors: [sonya, andrew, olya, karina]
     tags: [IASA SC, ІПСА, ШІ, Вибіркові, 3 курс]
     date: 2023-03-11T11:00
     keywords: [ІПСА, Вибіркові дисципліни, ШІ, 3 курс]
     ---
     ```

5. **Write the Article**
   - Write your article using Markdown. Refer to the [Markdown Guide](https://www.markdownguide.org/basic-syntax/) for syntax help.
   - Ensure your content is clear, concise, and well-organized.

6. **Add Multiple Images in a Line**
   - To display multiple images in a line, use the following HTML snippet within your Markdown file:
     ```html
     <ul className="images">
         <li>
             <img alt="{Alt text}" src="{First image URL}" className="center" />
             <p className="center">{Caption}</p>
         </li>
         <li className="top">
             <img alt="{Alt text}" src="{Second image URL}" className="center" />
             <a href="{Second caption link}"><p className="center"><b>{Bold caption with link}</b></p></a>
         </li>
         <li className="middle">
             <img alt="{Alt text}" src="{Third image URL}" className="center" />
             <p className="center"><i>{Italic caption}</i></p>
         </li>
     </ul>
     ```

7. **Publish the Article**
   - Use the following Git commands to publish your article:
     ```bash
     git add .
     git commit -m "{Describe your changes}"
     git pull
     git push
     ```
   - **Explanation:**
     - `git add .`: Adds all changes to the staging area.
     - `git commit -m "{Describe your changes}"`: Commits the changes with a descriptive message.
     - `git pull`: Fetches and merges changes from the remote repository.
     - `git push`: Pushes your local commits to the remote repository.

### Editing Drafts
1. **Save as Draft**
   - To save your article as a draft, add `.txt` to your Markdown file name (e.g., `index.md.txt`). This prevents the article from being displayed on the live site, but allows others to edit it.
   - Once ready, remove the `.txt` extension to publish the article.

2. **Create a Branch**
   - Create and work on a new branch for your draft.
   - Refer to [Git Branching Basics](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) for more details.
   - Once the article is ready, create a pull request to merge the branch into the `main` branch. 

## About
This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. Refer to the [Docusaurus documentation](https://docusaurus.io/docs/blog) for more information.

## Development and Deployment
1. Installation

   To install the necessary dependencies, run:
      ```
      $ npm install
      ```

2. Local Development

   To start a local development server, run:
      ```
      $ npm start
      ```
   This command starts a local development server and opens a browser window. Most changes are reflected live without needing to restart the server.

3. Build
   
   To generate static content, run:
      ```
      $ npm run build
      ```
   This command generates static content in the build directory, which can be served using any static content hosting service.

4. Deployment

   Just push your commits to the `main` branch.

## Notice
Developed and maintained by the IASA Student Council IT department.

> ***Analyze and conquer!***
