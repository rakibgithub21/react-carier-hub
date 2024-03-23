import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
        .then(data =>setJobs(data))
    },[])
    return (
        <div>
            <div>
                <h2 className="text5xl text-center">
                    Featured Jobs
                </h2>
                <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div>
                {
                    jobs.map(job => <Job
                        job={job}
                        key={job.id}
                    ></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;