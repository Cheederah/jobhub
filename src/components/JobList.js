import React from 'react';
import JobTest from './JobTest/JobTest'

const JobList = ({ jobs }) => {
    return(
        <div >
            {jobs.map((job, i) => {
                console.log(job)
                return(
                    <JobTest 
                    key={i}
                    id={job.id}
                    title={job.title}
                    description={job.description}
                    joblink={job.url}
                    location={job.location}
                    />
                )
            })}
      </div>
      
    )
}

export default JobList;