/* import { useJobRecommendations } from "../../hooks/useJobRecommendations.js";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Job from "../job/Job";
const JobRecommend = () => {
  const { loading, error, recommendations, getRecommendations } =
    useJobRecommendations();
  const user = useSelector((state) => state.auth.user);
  const jobsToDisplay = allJobs.slice(0, 6);
  useEffect(() => {
    if (user?._id) {
      getRecommendations(user._id);
    }
  }, [user, getRecommendations]);

  if (loading) return <div>Loading recommendations...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-7xl mx-auto my-20">
      <div className="grid grid-cols-3 gap-4 my-5">
        <h2>Recommended Jobs</h2>
        {recommendations.map((job) => (
          <div key={job._id}>
            {/* Display job recommendation details */
/* (jobsToDisplay.map((job) => {" "}
            <jobrecommendations key={job._id} job={job} />) 
            <Job job={job} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default JobRecommend; */
{
  /* <Job job={job} />; */
}
/* import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Job from "../job/Job";
// import api from "@/utils/api"; 

const JobRecommend = ({ userId }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useSelector((state) => state.auth);

  /* useEffect(() => {
    const fetchRecommendations = async () => {
      try {
          setLoading(true);
        const token = localStorage.getItem("token");

        const response = await axios.post(
          "https://internova-api.onrender.com/job-recommendations",
          {
            userId: user._id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        ); 

        setRecommendations(response.data.recommendations);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching job recommendations:", err);
      } finally {
        setLoading(false);
      }
  const getRecommendations = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/recommendations/job-recommendations",
        {
          userId,
        }
      );
      setRecommendations(response.data.recommendations);
      console.log("Job Recommendations:", response.data.recommendations);
      /* return response.data.recommendations; 
    } catch (error) {
      console.error("Error fetching job recommendations:", error);
    }
  };
  /* 
    if (user) {
      fetchRecommendations();
    }
  }, [user]); 

  if (loading) return <div>Loading recommendations...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    // <div className="recommendations-container">
    //  <h2>Recommended Jobs for You</h2>
    //  <div className="recommendations-grid">
    //    {recommendations.map((job) => (
    //      <Job key={job._id} job={job} />
     //   ))}
     // </div>
  //  </div> 
    <div>
      <button onClick={getRecommendations}>Get Job Recommendations</button>
      <ul>
        {recommendations.map((job, index) => (
          <li key={index}>{job.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobRecommend;
 */
