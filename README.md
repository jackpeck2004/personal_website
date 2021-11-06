# NextJS base template

This is an alternative to <code>create-next-app</code> just much more barebones and with all the requirements I need for a project already installed.

## Project structure

**\*NOTE:** This structure is not needed but it's the one I choose to implement in order to maintain my code organized consistently.\*

- <code>/public</code>: all the files which the client will access directly (_eg: images, illustrations, logos, etc._)
- <code>/pages</code>: all the pages (_route is the name of the file. eg: about.js will be routed to /about_)
- <code>/components</code>: all the specific components
- <code>/components/layouts</code>: general layouts for pages
- <code>/lib</code>: general utilities
- <code>/styles</code>: all the styles (_if using css or scss, the files will be placed in this directory_)

## Usage

### Method 1: Repo Template

1. Create a new repo selecting this repo as a template.
2. Clone the newly created repo
3. Modify <code>/components/layouts/main.js</code> to add the apropriate head tags
4. Modify <code>/pages/\_app.js</code> by adding your css files if needed
5. Have fun!

### Cloning the repo

1. Clone the repo
2. Run <code>rm -rf .git</code> (\*or remove the <code>.git</code> directory however you prefer)
3. Modify <code>/components/layouts/main.js</code> to add the apropriate head tags
4. Modify <code>/pages/\_app.js</code> by adding your css files if needed
5. Have fun!
