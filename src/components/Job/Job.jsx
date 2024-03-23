import { CiLocationOn } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Job = ({ job }) => {
    // console.log(job);
    // eslint-disable-next-line react/prop-types
    const { logo, company_name, job_title, remote_or_onsite, job_type, location, salary ,id} = job;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="w-[130px] h-[50px] objec" src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] ml-5 text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="mt-4 flex gap-5">
                    <h2 className="flex items-center gap-2"><CiLocationOn className="text-2xl" />{location}</h2>
                    <h2 className="flex items-center gap-2"><FaDollarSign className="text-2xl" />{ salary}</h2>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Job;