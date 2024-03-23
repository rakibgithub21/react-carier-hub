import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const job = jobs.find(job => job.id === parseInt(id));

    const handleApplyJob = () => {
        saveJobApplication(parseInt(id))
        toast.success('You have applied succussfuly')
    }

    return (
        <div>
            <div className="md:grid grid-cols-5 gap-4">
                <div className="md:col-span-3 border border-lime-300">
                    <h2>Job details of: {job.job_title}</h2>
                    <h2>Job details coming here</h2>
                    <p>{job.company_name}</p>
                </div>
                <div className="md:col-span-2 border border-gray-900">
                    <h2 className="text-2xl">Side things</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">
                        Apply Now
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;