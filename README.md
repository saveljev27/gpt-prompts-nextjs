## GPT Prompts

## About

- [Deployed version](https://gpt-prompts-nextjs.vercel.app/)

This project was made to create your own prompts for GPT chat. The project is made using React, Next.js and MongoDB to store the data. The user can sign up using a Google account. Each authorized user has a profile where they can create, update, or delete their own prompt. Unauthorized users can also view the prompts and visit other profiles.

## Installation

- git clone [git@github.com:saveljev27/gpt-prompts-nextjs.git]
- cd gpt-prompts-nextjs
- npm install
- npm run dev

## App

### Main Screen

![main](/desc/main.png)

### Profile

- Anyone can visit a user's profile

![profile](/desc/promptsProfileGif.gif)

### Prompt create

- To create a prompt the user must be authorized

![create](/desc/promptsCreate.gif)

### Prompt edit/delete

- Only the creator of the prompt can edit or delete it

#### Edit

![edit](/desc/promptsEdit.gif)

#### Delete

![delete](/desc/promptsDelete.gif)

### Prompt search

- Search for a prompt, tag or username

![delete](/desc/promptsSearch.gif)

### Prompt Copy

- To copy a prompt, it is necessary to click the folder icon

![copy](/desc//promptsCopy.gif)

## Models for DB

### Prompt

- creator: type: Schema.Types.ObjectId, ref: 'User'
- prompt: type: String, required
- tag: type: String, required

### User

- email: type: String, required, unique
- username: type: String, required
- image: type: String
- timestamps
