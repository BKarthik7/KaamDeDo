import { getJobs } from "@/api/apiJobs"
import useFetch from "@/hooks/use-fetch"
import { useUser } from "@clerk/clerk-react"
import { useState, useEffect } from "react";
import { BarLoader } from "react-spinners";

const JobListing = () => {
  const {isLoaded} = useUser();
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('')
  const [company_id, setCompanyId] = useState('')

  const {fn:fnJobs, data:dataJobs, loading:loadingJobs, } = useFetch(getJobs,{location, company_id, searchQuery})
  
  useEffect(() => {
    if(isLoaded){
      fnJobs()
    }
  }, [isLoaded, location, company_id, searchQuery])
  
  if(!isLoaded){
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />
  }
  return <div className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">Latest Jobs</div>
}

export default JobListing