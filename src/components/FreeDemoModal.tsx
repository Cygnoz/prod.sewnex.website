import React, { useEffect, useState } from "react";
import ChevronDown from "../assets/icons/ChevronDown";
import toast from "react-hot-toast";
import useApi from "../Hooks/useApi";
import { endPoints } from "../service/apiEndpoints";

interface Props {
  onClose: () => void;
}

const FreeDemoModal: React.FC<Props> = ({ onClose }) => {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    project: "Sewnex",
    companyName: "",
    phone: "",
    companyAddress: "",
    email: "",
    country: "",
    regionId: "",
    areaId: "",
  });

  // State for dropdown options
  const [options, setOptions] = useState({
    country: [
      { value:'India', label: 'India' },
      { value: 'UAE', label: 'UAE' },
      { value: "Saudi Arabia", label:'Saudi Arabia' }
    ] as { value: string; label: string }[],
    region: [] as { value: string; label: string }[],
    area: [] as { value: string; label: string;regionId:string }[],
    filteredArea:[] as{ value: string; label:string; regionId:string }[],
  });
  const {request:getRegionArea}=useApi('get',3003)
  const {request:addWebsiteLead}=useApi('post',3001)

  const getAreaRegion=async()=>{
    try{
      console.log("end",endPoints.GET_REGION_AREA);
      
      const {response,error}=await getRegionArea(endPoints.GET_REGION_AREA)
      if(response && !error){
        console.log("res",response);
        const regionData=response.data?.regions.map((reg:any)=>({
          label:reg.regionName,
          value:reg._id
        }))
        const areaData=response.data?.areas.map((reg:any)=>({
          label:reg.areaName,
          value:reg._id,
          regionId:reg.region._id
        }))
        setOptions((prev)=>({
          ...prev,
          region:regionData,
          area:areaData
        }))
      }else{
        console.log("err",error)
      }
    }catch(err){
      console.log("err",err);  
    }
  }

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.firstName) {
      toast.error("First Name is required");
      return false;
    }
    if (!formData.lastName) {
      toast.error("Last Name is required");
      return false;
    }
    if (!formData.phone) {
      toast.error("Mobile Number is required");
      return false;
    }
    if (!formData.country) {
      toast.error("Country is required");
      return false;
    }
    if (!formData.regionId) {
      toast.error("Region is required");
      return false;
    }
    return true;
  };

  const handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
        console.log("Form Data:", formData);
      try{
        const {response,error}=await addWebsiteLead(endPoints.ADD_WEBSITE_LEAD,formData)
        console.log("res",response)
        console.log('err',error)
        if(response &&!error){
          toast.success(response.data.message)
          onClose()
        }else{
          toast.error(error.response.data.message)
        }
      }catch(err){
        console.log("err",err);
        
      }
      // Proceed with API call or other logic
    }
  };

  useEffect(()=>{
    getAreaRegion()
  },[])

  useEffect(() => {
    if (formData.regionId) {
      const filteredArea = options.area.filter((area) => area.regionId === formData.regionId);
  
      setOptions((prev) => ({
        ...prev,
        filteredArea, // Store the filtered list separately
      }));
    }
  }, [formData.regionId]);

  console.log("op",options.area)
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="grid grid-cols-12 w-[75%] max-lg:w-[90%] max-h-[90%] overflow-y-scroll   rounded-lg my-3">
        {/* Left Section */}
        <div className="flex flex-col max-[720px]:hidden  col-span-4 px-8 bg-[#003B3B] rounded-l-lg justify-center items-center">
          <h1 className="gradient-text text-[42px] font-bold">
            Get a Free Demo Today!
          </h1>
          <h2 className="text-white text-[24px] font-semibold">
            Experience how Sewnex can transform your tailoring business.
            Request a free demo now!
          </h2>
        </div>

        {/* Right Section */}
        <div className="col-span-8 max-[720px]:col-span-12 p-6 max-[720px]:rounded-lg h-fit bg-white rounded-r-lg">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 py-4">
              <div className="flex -space-x-2">
                <div className="rounded-full bg-[#32B271] w-10 h-10"></div>
                <div className="rounded-full bg-[#0BA158] w-10 h-10"></div>
              </div>
              <p className="text-[#232222] text-3xl font-medium">Sewnex</p>
            </div>
            <button
              onClick={onClose}
              className="text-black text-4xl -mt-16 hover:text-gray-900"
            >
              &times;
            </button>
          </div>

          {/* Form Section */}
          <h2 className="text-[24px] font-semibold my-4">Sign Up</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-2  text-[#2D3748] gap-6">
            {/* First Name */}
            <div className="col-span-1 max-[530px]:col-span-2">
              <label className="block text-sm font-medium">
                First name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full p-2 border-[#D1D1D1] border rounded-md"
              />
            </div>

            {/* Last Name */}
            <div className="col-span-1 max-[530px]:col-span-2">
              <label className="block text-sm font-medium">
                Last name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full p-2 border-[#D1D1D1] border rounded-md"
              />
            </div>

            {/* Company Name */}
            <div className="col-span-1 max-[530px]:col-span-2">
              <label className="block text-sm font-medium">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full p-2 border-[#D1D1D1] border rounded-md"
              />
            </div>

            {/* Mobile Number */}
            <div className="col-span-1 max-[530px]:col-span-2">
              <label className="block text-sm font-medium">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 border-[#D1D1D1] border rounded-md"
              />
            </div>

            {/* Company Address */}
            <div className="col-span-2">
              <label className="block text-sm font-medium">
                Company Address
              </label>
              <input
                type="text"
                name="companyAddress"
                value={formData.companyAddress}
                onChange={handleInputChange}
                className="w-full p-2 border-[#D1D1D1] border rounded-md"
              />
            </div>

            {/* Email */}
            <div className="col-span-1 max-[530px]:col-span-2">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border-[#D1D1D1] border rounded-md"
              />
            </div>

            {/* Country Dropdown */}
            <div className="col-span-1 max-[530px]:col-span-2">
              <label className="block text-sm font-medium">
                Country <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="block w-full h-9 px-3 pr-8 text-sm border border-[#D1D1D1] rounded-md appearance-none"
                >
                  <option value="">Select</option>
                  {options.country.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                  <ChevronDown color="gray" />
                </div>
              </div>
            </div>

            {/* Region Dropdown */}
            <div className="col-span-1 max-[530px]:col-span-2">
              <label className="block text-sm font-medium">
                Region <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  name="regionId"
                  value={formData.regionId}
                  onChange={handleInputChange}
                  className="block w-full h-9 px-3 pr-8 text-sm border border-[#D1D1D1] rounded-md appearance-none"
                >
                  <option value="">Select Region</option>
                  {options.region.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                  <ChevronDown color="gray" />
                </div>
              </div>
            </div>
            <div className="col-span-1 max-[530px]:col-span-2">
              <label className="block text-sm font-medium">
                Area<span className="text-red-500">*</span>
              </label>
              <div className="relative">
  <select
    name="areaId"
    value={formData.areaId}
    onChange={handleInputChange}
    className="block w-full h-9 px-3 pr-8 text-sm border border-[#D1D1D1] rounded-md appearance-none"
  >
    <option value="">
      {formData?.regionId === "" ? "Select Region" : "Select Area"}
    </option>
    {formData.regionId &&
      options?.filteredArea.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
  </select>
  <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
    <ChevronDown color="gray" />
  </div>
</div>

            </div>

            {/* Sign Up Button */}
            <div className="col-span-2 flex justify-start mt-4">
              <button type="submit" className="bg-[#19A761] text-white px-14 py-2 rounded-2xl hover:bg-green-600">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FreeDemoModal;
