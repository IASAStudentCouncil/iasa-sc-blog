# Website

## How to publish new articles?
 
0. [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [create your GitHub account](https://github.com/signup). [Connect](https://docs.github.com/en/get-started/quickstart/set-up-git) them.
1. Get access to this repo: contact IASA Student Council GitHub owner (probably IT-department head) and ask for `write` rights in this repo.
2. Clone this repository into desired folder on your computer: `git clone https://github.com/IASAStudentCouncil/iasa-sc-blog.git`.
3. To add new article, create new folder inside `blog` folder. Create `index.md` or `index.mdx` file inside it.
4. Add metadata to `index.md` or `index.mdx` like this:
    ```
    ---
    slug: elected-ai-3-2023
    title: Вибіркові дисципліни ШІ 3 курс
    authors: [sonya, andrew, olya, karina]
    tags: [IASA SC, ІПСА, ШІ, Вибіркові, 3 курс]
    date: 2023-03-11T11:00
    ---
    ```
    - `slug` means end of the article's URL. It will look like this: `https://iasastudentcouncil.github.io/iasa-sc-blog/blog/{slug}`.
    - `title` is just a title of your article.
    - `authors` is list of authors of the article. You can add new in `authors.yml` file of `blog` folder. `url` field of author can be ommited if you don't want to give any contacts of the person. It is better to add new authors to file in alphabetically sorted manner.
    - `tags` is a list of tags. It will help users to find desired articels.
    - `date` is posting date. It regulates article's position in `https://iasastudentcouncil.github.io/iasa-sc-blog/blog/`. The newest articles are going first.
5. Write article, using Markdown. You can read about basic syntax [here](https://www.markdownguide.org/basic-syntax/).
6. If you want to add two or more images in a line, you can use following code snippet:
    ```
    <ul className="images">
        <li>
            <img alt="{Alter text to show if image won't be downloaded to user}" src="{Link to the first image}" className="center" />
            <p className="center">{Caption text}</p>
        </li>
        <li className="top">
            <img alt="{Alter text to show if image won't be downloaded to user}" src="{Link to the second image}" className="center" />
            <a href="{Link of the second caption text}"><p className="center"><b>{Bold caption text with link}</b></p></a>
        </li>
        <li className="middle">
            <img alt="{Alter text to show if image won't be downloaded to user}" src="{Link to the third image}" className="center" />
            <p className="center"><i>{Italic caption text}</i></p>
        </li>
    </ul>
    ```
7. When you want to publish an article or exchange data with your coworkers, use the following sequence of commands:
    ```
    git add .
    git commit -m "{Write shortly about changes that were made}"
    git pull
    git push
    ```

If you want to edit new article without publishing it, you have two ways:

1. Add `.txt` to your markdown file name. Then it won't be displayed, but it can be edited by other people. Also, they will have an opportunity to delete `.txt` part and run site locally using **About** part.
2. Create new branch in your git and github (Branching basics [here](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)). Create and edit folder and `index.md` file there. You can try to see how article looks and run site locally using **About** part. After article is ready, you can merge this new branch to `main` branch.

## About

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. You can read docs [here](https://docusaurus.io/docs/blog).

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Just push your commit to `main` branch
