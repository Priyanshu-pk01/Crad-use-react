import Card from './component/card.jsx'

const App = () => {
  const jobData = [
  {
    logo: "https://imgs.search.brave.com/oOjknHr9q9qwZ4jFOlk2cXe6QclPCZcNXn529Ln7nK0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWFtYXpvbi1pY29u/LXN2Zy1kb3dubG9h/ZC1wbmctMTUxOTU5/MzMucG5nP2Y9d2Vi/cCZ3PTEyOA",
    company: "Amazon",
    posted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$250/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://imgs.search.brave.com/b2Pr0jt8kcxpoNmCHIGqA84IF-3D6_K3xlp8WBbj-jI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/MTM1LzMyMC9zbWFs/bC9tZXRhLXNvY2lh/bC1tZWRpYS1zeW1i/b2wtbG9nby1kZXNp/Z24taWxsdXN0cmF0/aW9uLWZyZWUtdmVj/dG9yLmpwZw",
    company: "Meta",
    posted: "1 day ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$320/hr",
    location: "Bangalore, India"
  },
  {
    logo: "https://imgs.search.brave.com/T_TTeYcGMVolhSURTvHNY99T9anFdgjoPsw6my9YKeQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC80/Ny8yMC9nb29nbGUt/bG9nby12ZWN0b3It/NTAwMTQ3MjAuanBn",
    company: "Google",
    posted: "3 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$350/hr",
    location: "Hyderabad, India"
  },
  {
    logo: "https://imgs.search.brave.com/acgl70pxDMi4kmqC8YxMUmL_FABZrP03rnsxg_nj2-8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly96b25h/bG9nby5jb20vYXNz/ZXRzL21pY3Jvc29m/dC1sb2dvLndlYnA_/YXNzZXQ9MTcyMQ",
    company: "Microsoft",
    posted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$280/hr",
    location: "Pune, India"
  },
  {
    logo: "https://imgs.search.brave.com/0bbzyBsMM03oOdswdoM3gKufevOE1CUbkjW3atyp8r4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E3Lzhj/LzQwL2E3OGM0MDZl/NGFkOTVmNjhiZDhi/MDE0NTgyZWYzZWNl/LmpwZw",
    company: "Apple",
    posted: "2 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$330/hr",
    location: "Bangalore, India"
  },
  {
    logo: "https://imgs.search.brave.com/u1Uqc8jkRSSmpNDivzHqVvO5f5q5XbyBCzw3_wOuW_I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzQ1LzIvbmV0Zmxp/eC1sb2dvLXBuZ19z/ZWVrbG9nby00NTE5/ODEucG5n",
    company: "Netflix",
    posted: "5 days ago",
    post: "UI/UX Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$290/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://imgs.search.brave.com/XLM3xr12iWzUxbo1gixkBy3LUK-aA8WBzxwuTMcxP1E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pcHJz/b2Z0d2FyZW1lZGlh/LmNvbS8yMTkvZmls/ZXMvMjAyNTEyLzY5/MmY1MDU1M2Q2MzMy/YjQ1M2JiYzVjMl9u/dmlkaWEtbG9nby12/ZXJ0LWJsay9udmlk/aWEtbG9nby12ZXJ0/LWJsa190aG1iLnBu/Zz92PTYzOTBjMzdm/LTk2MGItNDJiZC1h/MTc2LWI1MWNmYTZk/N2JhNA",
    company: "NVIDIA",
    posted: "1 day ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$400/hr",
    location: "Hyderabad, India"
  },
  {
    logo: "https://imgs.search.brave.com/VU5EJmhKET_k_5yR2WUXJJErG6TGJcyR34QwhbhyvTo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQ4LzA1/LzcwLzQ4MDU3MGQ5/ZjUwZjE1ODE3OTZi/YTBlOWRhMzczMGU5/LmpwZw",
    company: "Tesla",
    posted: "3 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$270/hr",
    location: "Delhi, India"
  },
  {
    logo: "https://imgs.search.brave.com/szwVYyj9nIXppAwe7H1Zy1A6DC2hAI6AaL4AIHcvVSA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0Fkb2JlLUxvZ28t/MTk5My01MDB4MzQ0/LmpwZw",
    company: "Adobe",
    posted: "6 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$260/hr",
    location: "Noida, India"
  },
  {
    logo: "https://imgs.search.brave.com/yNNWZcjN3_bZvBjiF9b9ndm9oVnFs5Y5X1ErVwif9DA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9vcmFjbGUtMS5z/dmc",
    company: "Oracle",
    posted: "2 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$300/hr",
    location: "Bangalore, India"
  }
];

  return (
    
    <div className="parent">
      {jobData.map(function(elem,indx) {
        return <div key={indx}>  <Card img = {elem.logo}company={elem.company} posted ={elem.posted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
        </div>
      })}
    
     </div>
  )
}

export default App