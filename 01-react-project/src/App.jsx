import { Fragment } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import CardProp from "./componentsWithProps/CardProp";
import CardPropDrill from "./propproject/CardPropDrill";

const App = () => {
  const name = "sample";

  const jobOpenings = [
    {
      brandLogo: "/logos/google.png",
      companyName: "Google",
      datePosted: "2 days ago",
      post: "Frontend Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "₹3,200/hour",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "/logos/meta.png",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "₹3,600/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "/logos/amazon.png",
      companyName: "Amazon",
      datePosted: "1 week ago",
      post: "Backend Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "₹4,100/hour",
      location: "Chennai, India"
    },
    {
      brandLogo: "/logos/apple.png",
      companyName: "Apple",
      datePosted: "3 days ago",
      post: "iOS Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "₹4,500/hour",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "/logos/netflix.png",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Full Stack Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "₹5,000/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "/logos/microsoft.png",
      companyName: "Microsoft",
      datePosted: "2 weeks ago",
      post: "Cloud Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "₹3,000/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "/logos/adobe.png",
      companyName: "Adobe",
      datePosted: "4 days ago",
      post: "UI Engineer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "₹2,700/hour",
      location: "Noida, India"
    },
    {
      brandLogo: "/logos/nvidia.png",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "AI/ML Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "₹5,500/hour",
      location: "Pune, India"
    },
    {
      brandLogo: "/logos/openai.png",
      companyName: "OpenAI",
      datePosted: "6 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "₹6,000/hour",
      location: "Remote, India"
    },
    {
      brandLogo: "/logos/uber.png",
      companyName: "Uber",
      datePosted: "5 weeks ago",
      post: "Android Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "₹3,100/hour",
      location: "Bengaluru, India"
    }
];
  
  return (
    <Fragment>
      <Navbar/>
      <Card/>
      <div>App</div>
      <h1>This is form curly {name}</h1>
      --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      <CardProp username="prerit" age={25} img="https://images.unsplash.com/photo-1773332585749-5146862ba746?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <CardProp username="surya" age={30} img="https://images.unsplash.com/photo-1783711394928-f93f63a6bf8e?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      
      
      {jobOpenings.map((job, idx) => {
        return (
          <div className="flex">
            <CardPropDrill key={idx} job={job} />
          </div>
        );
      })};

      
      
      



    </Fragment>
  );
}

export default App;