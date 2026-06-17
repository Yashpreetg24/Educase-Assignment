# PopX UI Assignment - By Yashpreet Gupta

Hi! Welcome to my assignment submission for the PopX UI React project. I really enjoyed building this.

Here is a quick overview of what I did and how I built it.

## 🛠 What I Built

I created a fully responsive, pixel-perfect mobile web application using **React.js**. Instead of using heavy component libraries, I wanted to show my raw frontend skills, so I wrote all the styling from scratch using **Vanilla CSS**. 

Here’s a breakdown of what I worked on:
1. **Scaffolded with Vite**: I chose Vite instead of Create-React-App because it's much faster and cleaner.
2. **React Router setup**: I implemented navigation across 4 main pages (`/`, `/signup`, `/login`, and `/account`).
3. **Reusable Components**: Instead of copying and pasting code, I created a reusable `<Button />` and `<Input />` component to keep the codebase modular and DRY.
4. **Form Handling**: I built controlled forms using React `useState`. When a user types in their info on the Sign Up or Login page, it safely saves in the state and passes it directly to the Account profile page.
5. **Pixel-Perfect CSS Layout**: I made sure the app is perfectly centered on desktop screens inside a mobile container (max-width of 375px), exactly how the reference app behaved.
6. **Cleaned up the Code**: I removed all unnecessary boilerplate code (like unused logos, routes, and `import React` statements) to make sure my code is interview-ready.

## 🚀 How to Run It

If you'd like to test the project locally on your machine, it's super easy!

1. Install all the required packages:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open the `localhost` link shown in your terminal to see the app!

*(P.S. I've also added the `vercel.json` and `_redirects` files to the repository so routing works perfectly when deployed online!)*
