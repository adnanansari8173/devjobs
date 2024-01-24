import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./components/Header";
import Button from "./components/ui/button";
import jobs from "./data.json";

const Job = () => {
  const { jobId } = useParams();
  const jobData = jobs.find((item) => item.id === parseInt(jobId));
  const navigate = useNavigate();

  useEffect(() => {
    if (!jobData) {
      navigate("/");
    }
  }, [jobData, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!jobData) {
    return;
  }

  const {
    postedAt,
    location,
    position,
    company,
    contract,
    website,
    description,
    logo,
    logoBackground,
    requirements,
    role,
  } = jobData;

  return (
    <div className="bg-light-grey  dark:bg-midnight dark:text-white min-h-screen">
      <Header />
      <div className="px-6 md:px-10">
        <div className="max-w-[730px]  relative md:h-[140px] flex pb-8 md:pb-0  rounded-md dark:bg-very-dark-blue pt-[49px] md:pt-0  md:overflow-hidden bg-white mx-auto -mt-10">
          <div
            className="w-[50px] h-[50px] -top-6 rounded-2xl md:rounded-none md:w-[140px] md:h-[140px] left-1/2 -translate-x-1/2 md:translate-x-0 flex absolute md:static justify-center items-center"
            style={{ background: logoBackground }}
          >
            <img src={`../${logo}`} alt={company} />
          </div>
          <div className=" flex flex-col md:flex-row justify-between items-center px-10  flex-1">
            <div>
              <h2>{company}</h2>
              <p className="text-dark-grey mt-3 mb-7 md:mb-0 lowercase">
                {company}.com
              </p>
            </div>
            <Button light>
              <a href={website} target="_blank" rel="noreferrer">
                Company Site
              </a>
            </Button>
          </div>
        </div>
        <div className="max-w-[730px] px-6 py-10 md:p-12 bg-white dark:bg-very-dark-blue rounded-md mt-8 mx-auto">
          <div className="flex justify-between flex-col gap-[54px] md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-3 ">
                <div className="text-dark-grey">{postedAt}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="#6E8098" />
                </svg>
                <div className="text-dark-grey">{contract}</div>
              </div>
              <h3 className="mt-2">{position}</h3>
              <h4 className="mt-[14px] text-violet">{location}</h4>
            </div>

            <Button className="w-full md:w-auto">
              <a href={website} target="_blank" rel="noreferrer">
                Apply Now
              </a>
            </Button>
          </div>

          <p className="mt-11">{description}</p>
          <h3 className="mt-10">Requirements</h3>
          <p className="mt-7">{requirements.content}</p>
          <ul className="mt-6 space-y-2">
            {requirements.items.map((item) => {
              return (
                <li className="flex gap-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                    className="shrink-0 mt-2.5"
                  >
                    <circle cx="2" cy="2" r="2" fill="#5964E0" />
                  </svg>
                  <p>{item}</p>
                </li>
              );
            })}
          </ul>
          <h3 className="mt-12">What You Will Do</h3>
          <p className="mt-7">{role.content}</p>
          <ol className="mt-6 space-y-2">
            {role.items.map((item, index) => {
              return (
                <li className="flex gap-8">
                  <p className="font-bold text-violet">{index + 1}</p>
                  <p>{item}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      <div className="bg-white sticky dark:bg-very-dark-blue bottom-0 left-0 right-0  mt-20">
        <div className="flex max-w-[730px] items-center p-6 md:px-0 justify-between mx-auto">
          <div className="hidden md:block">
            <h3>{position}</h3>
            <p className="mt-3">So Digital Inc.</p>
          </div>
          <Button className="w-full md:w-auto">
            <a href={website} target="_blank" rel="noreferrer">
              Apply Now
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Job;
