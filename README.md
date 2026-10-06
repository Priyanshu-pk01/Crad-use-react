# 💼 Job Card Project

A simple React project that displays job listings using reusable components and JavaScript data.

The project demonstrates how to create reusable **Card components** and pass job information using **props**.

## 🚀 Features

- 💼 Display multiple job listings
- 🏢 Company name and logo
- 📅 Job posting date
- 👨‍💻 Job title
- 🏷️ Job type and experience level
- 💰 Salary information
- 📍 Job location
- ♻️ Reusable React Card component
- 📦 Data rendering using `.map()`
- 🔗 Props passing from parent to child component

## 🛠️ Technologies Used

- React.js
- JavaScript
- JSX
- CSS
- Vite

## 📚 React Concepts Used

This project helped me practice:

- React Components
- JSX
- Props
- Reusable Components
- JavaScript Arrays
- Objects
- `.map()` method
- `key` prop
- Component Import/Export
- Dynamic data rendering

## 🧠 How It Works

The job information is stored inside a JavaScript array:

```js
const jobData = [
  {
    company: "Amazon",
    posted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$250/hr",
    location: "Mumbai, India"
  }
]

The data is then rendered using the .map() method:
{jobData.map(function (elem, indx) {
  return (
    <div key={indx}>
      <Card
        img={elem.logo}
        company={elem.company}
        posted={elem.posted}
        post={elem.post}
        tag1={elem.tag1}
        tag2={elem.tag2}
        pay={elem.pay}
        location={elem.location}
      />
    </div>
  )
})} 


📂 Project Structure

Job-Card/
├── src/
│   ├── component/
│   │   └── card.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
├── vite.config.js
└── README.md

🔮 Future Improvements

- Add search functionality
- Add job filtering
- Add sorting
- Add job details page
- Add Apply button
- Fetch jobs from an API
- Add responsive design
- Add loading and error states

👨‍💻 Author
Priyanshu Kumar
GitHub: https://github.com/Priyanshu-pk01