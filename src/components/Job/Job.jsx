
// eslint-disable-next-line react/prop-types
const Job = ({ job }) => {
    // console.log(job);
    const { logo } = job;

    return (
        <div>
            <img className="w-[117px] h-[40px]" src={logo} alt="" />
            
        </div>
    );
};

export default Job;