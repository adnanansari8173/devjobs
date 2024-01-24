import React, { useEffect, useRef, useState } from "react";
import Button from "./components/ui/button";
import jobData from "./data.json";
import Checkbox from "./components/ui/checkbox";
import Header from "./components/Header";
import { useNavigate } from "react-router-dom";

const Jobs = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [isFullTime, setIsFullTime] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filterRef = useRef(null);

  const [jobs, setJobs] = useState(jobData);

  const handleSearch = () => {
    let filteredJobs = jobData;
    if (search) {
      filteredJobs = filteredJobs.filter(
        (job) =>
          job.position.toLowerCase().includes(search.toLowerCase()) ||
          job.company.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (location) {
      filteredJobs = filteredJobs.filter((job) =>
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (isFullTime) {
      filteredJobs = filteredJobs.filter((job) => job.contract === "Full Time");
    }
    setJobs(filteredJobs);
    setIsFilterOpen(false);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    };
    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [search, location, isFullTime]);

  const handleOutsideClick = (e) => {
    if (filterRef.current && !filterRef.current.contains(e.target)) {
      setIsFilterOpen(false);
    }
  };

  const handleMobileSearch = () => {
    handleSearch();
    setLocation("");
  };

  return (
    <div
      className={`bg-light-grey dark:bg-midnight dark:text-white min-h-screen pb-[104px] ${
        isFilterOpen ? "fixed w-full" : ""
      }`}
    >
      <Header />
      <div className="px-6 md:px-10">
        <div className="hidden max-w-[1110px] h-[80px] mx-auto -mt-10 bg-white dark:bg-very-dark-blue md:flex rounded-md">
          <div className="flex items-center gap-3 px-6 lg:px-8 w-[222px] lg:w-[450px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="shrink-0"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.024 15.0588H17.1123L23.9435 21.9037L21.9037 23.9435L15.0588 17.1123V16.0308L14.6824 15.6544C13.1286 16.9891 11.1093 17.7968 8.89842 17.7968C3.98374 17.7968 0 13.8131 0 8.89842C0 3.98374 3.98381 0 8.89842 0C13.813 0 17.7968 3.98374 17.7968 8.89842C17.7968 11.1093 16.9891 13.1286 15.6475 14.6824L16.024 15.0588ZM2.73799 8.89842C2.73799 12.3003 5.49651 15.0588 8.89842 15.0588C12.3003 15.0588 15.0588 12.3003 15.0588 8.89842C15.0588 5.49651 12.3003 2.73799 8.89842 2.73799C5.49651 2.73799 2.73799 5.49651 2.73799 8.89842Z"
                fill="#5964E0"
              />
            </svg>
            <input
              type="text"
              placeholder="Title or company..."
              className="flex-1 outline-none bg-transparent"
              value={search}
              size="1"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3 border-s border-e w-[213px] lg:w-[300px] border-dark-grey/[0.2] px-6 lg:px-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="24"
              viewBox="0 0 17 24"
              fill="none"
              className="shrink-0"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.44766 0C10.6803 0 12.7796 0.870546 14.3584 2.45105C17.2802 5.37556 17.6433 10.8781 15.1348 14.2255L8.44766 23.894L1.75053 14.2119C-0.748035 10.8781 -0.384933 5.37556 2.53689 2.45105C4.11571 0.870546 6.21455 0 8.44766 0ZM5.47353 8.29091C5.47353 9.97484 6.84268 11.3455 8.52481 11.3455C10.2069 11.3455 11.5761 9.97484 11.5761 8.29091C11.5761 6.60698 10.2069 5.23636 8.52481 5.23636C6.84268 5.23636 5.47353 6.60698 5.47353 8.29091Z"
                fill="#5964E0"
              />
            </svg>
            <input
              type="text"
              placeholder="location..."
              className="flex-1 outline-none bg-transparent"
              value={location}
              size="1"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4 flex-1  pr-4 justify-between pl-5 lg:pl-8">
            <Checkbox
              checked={isFullTime}
              onClick={() => setIsFullTime(!isFullTime)}
            />
            <div className="font-bold lg:hidden whitespace-nowrap">
              Full Time
            </div>
            <div className="font-bold hidden lg:block">Full Time Only</div>
            <Button className="px-[14px] lg:px-9" onClick={handleSearch}>
              Search
            </Button>
          </div>
        </div>
        <div className="flex  bg-white dark:bg-very-dark-blue -mt-6 p-4 items-center rounded gap-6  md:hidden">
          <input
            type="text"
            placeholder="Filter by title..."
            className="flex-1 outline-none bg-transparent"
            value={search}
            size="1"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div
            onClick={() => setIsFilterOpen(true)}
            className="text-dark-grey dark:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M19.1076 1.50591e-06H0.860224C0.538187 -0.000593357 0.243138 0.175089 0.0960199 0.454871C-0.0531279 0.738422 -0.0269509 1.07987 0.163593 1.33883L6.84866 10.5411C6.85089 10.5443 6.85333 10.5473 6.85556 10.5504C7.09845 10.8709 7.22995 11.2591 7.23056 11.6579V19.1605C7.22914 19.3825 7.31842 19.5961 7.47853 19.7537C7.63884 19.9112 7.85677 20 8.08405 20C8.19951 19.9998 8.31396 19.9774 8.4207 19.934L12.1772 18.5345C12.5136 18.4339 12.7371 18.1236 12.7371 17.75V11.6579C12.7377 11.2591 12.8692 10.8709 13.1118 10.5504C13.1141 10.5473 13.1165 10.5443 13.1187 10.5411L19.804 1.33864C19.9946 1.07987 20.0207 0.73862 19.8716 0.45507C19.7247 0.175089 19.4294 -0.000593357 19.1076 1.50591e-06Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div onClick={handleMobileSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <rect width="48" height="48" rx="5" fill="#5964E0" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27.3533 26.549H28.2603L33.9529 32.2531L32.2531 33.9529L26.549 28.2603V27.359L26.2353 27.0453C24.9405 28.1576 23.2578 28.8307 21.4153 28.8307C17.3198 28.8307 14 25.5109 14 21.4153C14 17.3198 17.3198 14 21.4153 14C25.5109 14 28.8306 17.3198 28.8306 21.4153C28.8306 23.2578 28.1576 24.9405 27.0396 26.2353L27.3533 26.549ZM16.2817 21.4153C16.2817 24.2503 18.5804 26.549 21.4153 26.549C24.2503 26.549 26.549 24.2503 26.549 21.4153C26.549 18.5804 24.2503 16.2817 21.4153 16.2817C18.5804 16.2817 16.2817 18.5804 16.2817 21.4153Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        {isFilterOpen ? (
          <div
            className="md:hidden h-screen bg-black/50 fixed top-0 left-0 w-full z-10 flex justify-center items-center"
            onClick={handleOutsideClick}
          >
            <div
              className="bg-white dark:bg-very-dark-blue w-[327px] rounded-md z-20"
              ref={filterRef}
            >
              <div className="flex items-center gap-4 p-6 border-b border-dark-grey/20">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="24"
                    viewBox="0 0 17 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.44772 0C10.6804 0 12.7797 0.870546 14.3585 2.45105C17.2803 5.37556 17.6434 10.8781 15.1348 14.2255L8.44772 23.894L1.75059 14.2119C-0.747974 10.8781 -0.384871 5.37556 2.53695 2.45105C4.11577 0.870546 6.21462 0 8.44772 0ZM5.47359 8.29091C5.47359 9.97484 6.84274 11.3455 8.52487 11.3455C10.207 11.3455 11.5762 9.97484 11.5762 8.29091C11.5762 6.60698 10.207 5.23636 8.52487 5.23636C6.84274 5.23636 5.47359 6.60698 5.47359 8.29091Z"
                      fill="#5964E0"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  className="flex-1 outline-none bg-transparent"
                  placeholder="Filter by location..."
                  value={location}
                  size="1"
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-4 p-6">
                <div>
                  <Checkbox />
                </div>
                <div className="font-bold">Full Time Only</div>
              </div>
              <div className="px-6 pb-6">
                <Button onClick={handleMobileSearch} className="w-full">
                  Search
                </Button>
              </div>
            </div>
          </div>
        ) : null}
        <div className="max-w-[1110px] mt-[57px] md:mt-[105px] gap-x-[30px] gap-y-[65px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-auto">
          {jobs.map((job) => {
            return (
              <div
                onClick={() => navigate(`/job/${job.id}`)}
                className="bg-white rounded-md px-8 pt-[49px] dark:bg-very-dark-blue pb-9 relative cursor-pointer hover:scale-[0.98] hover:shadow-lg duration-300 transition-all"
              >
                <div
                  className={`w-[50px] absolute -top-7 rounded-2xl flex justify-center items-center  h-[50px]`}
                  style={{ backgroundColor: job.logoBackground }}
                >
                  <img src={job.logo} alt={job.company} />
                </div>
                <div className="flex items-center gap-3 ">
                  <div className="text-dark-grey">{job.postedAt}</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                  >
                    <circle cx="2" cy="2" r="2" fill="#6E8098" />
                  </svg>
                  <div className="text-dark-grey">{job.contract}</div>
                </div>
                <h3 className="mt-4">{job.position}</h3>
                <div className="text-dark-grey mt-[17px]">{job.company}</div>
                <h4 className="text-violet mt-11">{job.location}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Jobs;
