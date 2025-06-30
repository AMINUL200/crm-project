import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPen, faPencil } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

export default function UserInfoCard() {
  const { isOpen,  closeModal } = useModal();
  const [activeTab, setActiveTab] = useState("emp_profile");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };


  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };
  return (
    <div className=" ">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-2">
        {/* Left Column - Full width on medium, 4 columns on large+ */}
        <div className="xl:col-span-5 space-y-4  p-2 lg:pr-2 mt-4">
          {/* Row 1 */}
          <div className=" bg-white dark:bg-gray-800 border border-gray-200 rounded-2xl dark:border-gray-500 p-4 mb-4">
            <div className="flex flex-col sm:flex-row gap-2 items-center justify-between px-4">
              <div className="col text-center text-gray-500 dark:text-white">
                <h3>150</h3>
                <span>Follower</span>
              </div>
              <div className="col text-center text-gray-500 dark:text-white">
                <h3>150</h3>
                <span>Pace Stay</span>
              </div>
              <div className="col text-center text-gray-500 dark:text-white">
                <h3>45</h3>
                <span>Reviews</span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center space-x-3 gap-3">
              <button className=" px-3 py-2 rounded text-white bg-[#452B90] hover:bg-[#3f3858] ">Follow</button>
              <button className="px-3 py-2 rounded text-white bg-[#452B90] hover:bg-[#3f3858]">Send Message</button>
            </div>
          </div>

          {/* Row 2 */}
          <div className="space-y-6">
            {/* Today Highlights Card */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 rounded-2xl dark:border-gray-500 overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-medium text-[#452B90] dark:text-white/90 mb-2">Today Highlights</h3>
                <div className="  rounded-lg w-full h-48 flex items-center justify-center mb-3">
                  <img className="w-full h-full rounded-2xl" src="/images/profile/1.jpg" alt="" />
                </div>
                <h4 className="text-md font-medium text-[#452B90] dark:text-white/90 mb-2">Sales Ethics and Compliance</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  A small river named Duden flows by their place and supplies it with the necessary regelidita.
                  It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
            </div>


          </div>

          {/* Row 3 */}
          <div className="space-y-6">
            {/* Our Latest News Section */}
            <div className=" bg-white dark:bg-gray-800 border border-gray-200 rounded-2xl dark:border-gray-500 p-4">
              <h3 className="text-lg font-medium text-[#452B90] dark:text-white/90 mb-4">Our Latest News</h3>

              <div className="space-y-4">
                {/* News Item 1 */}
                <div className="flex gap-4">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg w-24 h-24 flex-shrink-0 flex items-center justify-center">
                    <img src="/images/profile/5.jpg" className="w-full h-full rounded-2xl" alt="" />
                  </div>
                  <div>
                    <h4 className="text-md font-medium text-[#312a2a] dark:text-white/90 mb-1">Collection of textile samples</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      I shared this on my fb wall a few months back, and I thought.
                    </p>
                  </div>
                </div>

                {/* News Item 2 */}
                <div className="flex gap-4">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg w-24 h-24 flex-shrink-0 flex items-center justify-center">
                    <img src="/images/profile/5.jpg" className="w-full h-full rounded-2xl" alt="" />
                  </div>
                  <div>
                    <h4 className="text-md font-medium text-gray-800 dark:text-white/90 mb-1">Sales Team Collaboration</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      I shared this on my fb wall a few months back, and I thought.
                    </p>
                  </div>
                </div>

                {/* News Item 3 */}
                <div className="flex gap-4">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg w-24 h-24 flex-shrink-0 flex items-center justify-center">
                     <img src="/images/profile/5.jpg" className="w-full h-full rounded-2xl" alt="" />
                  </div>
                  <div>
                    <h4 className="text-md font-medium text-gray-800 dark:text-white/90 mb-1">Adapting to Technological Changes</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      I shared this on my fb wall a few months back, and I thought.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Full width on medium, 8 columns on large+ */}
        <div className="xl:col-span-7 space-y-4  p-2 lg:p-6">

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            {/* Tabs Navigation */}
            <div className="border-b border-gray-200 dark:border-gray-700">
              <div className="px-4">
                <div className="flex">
                  <nav className="flex space-x-8">
                    <button
                      onClick={() => handleTabClick('emp_profile')}
                      className={`border-b-2 px-1 py-4 text-sm font-medium ${activeTab === 'emp_profile'
                        ? 'border-[#452B90] text-[#452B90]'
                        : 'border-transparent text-gray-500 dark:text-white hover:text-[#452B90] hover:border-[#452B90] transition-all duration-400'
                        }`}
                    >
                      Profile
                    </button>
                    <button
                      onClick={() => handleTabClick('emp_about_me')}
                      className={`border-b-2 px-1 py-4 text-sm font-medium ${activeTab === 'emp_about_me'
                        ? 'border-[#452B90] text-[#452B90]'
                        : 'border-transparent text-gray-500 dark:text-white hover:text-[#452B90] hover:border-[#452B90] transition-all duration-400'
                        }`}
                    >
                      About Me
                    </button>
                    <button
                      onClick={() => handleTabClick('setting')}
                      className={`border-b-2 px-1 py-4 text-sm font-medium ${activeTab === 'setting'
                        ? 'border-[#452B90] text-[#452B90]'
                        : 'border-transparent text-gray-500 dark:text-white hover:text-[#452B90] hover:border-[#452B90] transition-all duration-400'
                        }`}
                    >
                      Setting
                    </button>

                  </nav>
                </div>
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-4">
              {/* Profile Tab */}
              <div id="emp_profile" className={`space-y-6 ${activeTab === 'emp_profile' ? 'block' : 'hidden'}`}>
                {/* First Row */}
                <div className="grid grid-cols-1 gap-6 ">
                  {/* Personal Information Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Personal Information</h3>
                      <button className="text-blue-600 hover:text-blue-800">
                        <FontAwesomeIcon icon={faPencil} className="h-4 w-4" />
                      </button>
                    </div>
                    <ul className="space-y-3">
                      {[
                        { title: "Passport No.", text: "9876543210" },
                        { title: "Passport Exp Date.", text: "9876543210" },
                        { title: "Tel", text: "9876543210" },
                        { title: "Nationality", text: "Indian" },
                        { title: "Religion", text: "Christian" },
                        { title: "Marital status", text: "Married" },
                        { title: "Employment of spouse", text: "No" },
                        { title: "No. of children", text: "2" }
                      ].map((item, index) => (
                        <li key={index} className="flex">
                          <div className="w-1/3 text-sm text-gray-500 dark:text-white/90">{item.title}</div>
                          <div className="w-2/3 text-sm pl-4 text-gray-900 dark:text-white/100">{item.text}</div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Emergency Contact Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Emergency Contact</h3>
                      <button className="text-blue-600 hover:text-blue-800">
                        <FontAwesomeIcon icon={faPencil} className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-md font-medium text-gray-900 dark:text-white mb-3">Primary</h4>
                      <ul className="space-y-3">
                        {[
                          { title: "Name", text: "John Doe" },
                          { title: "Relationship", text: "Father" },
                          { title: "Phone", text: "9876543210, 9876543210" }
                        ].map((item, index) => (
                          <li key={index} className="flex">
                            <div className="w-1/3 text-sm text-gray-500 dark:text-white/85">{item.title}</div>
                            <div className="w-2/3 text-sm text-gray-900 dark:text-white/100">{item.text}</div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <hr className="my-4" />

                    <div>
                      <h4 className="text-md font-medium text-gray-900 mb-3 dark:text-white/85">Secondary</h4>
                      <ul className="space-y-3">
                        {[
                          { title: "Name", text: "Karen Wills" },
                          { title: "Relationship", text: "Brother" },
                          { title: "Phone", text: "9876543210, 9876543210" }
                        ].map((item, index) => (
                          <li key={index} className="flex">
                            <div className="w-1/3 text-sm text-gray-500 dark:text-white/85">{item.title}</div>
                            <div className="w-2/3 text-sm text-gray-900 dark:text-white/85">{item.text}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bank Information Card */}
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white/85 mb-4">Bank information</h3>
                  <ul className="space-y-3">
                    {[
                      { title: "Bank name", text: "ICICI Bank" },
                      { title: "Bank account No.", text: "159843014641" },
                      { title: "IFSC Code", text: "ICI24504" },
                      { title: "PAN No", text: "TC000Y56" }
                    ].map((item, index) => (
                      <li key={index} className="flex">
                        <div className="w-1/3 text-sm text-gray-500 dark:text-white/85">{item.title}</div>
                        <div className="w-2/3 text-sm text-gray-900 dark:text-white/85">{item.text}</div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Family Information Card */}
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white/85">Family Informations</h3>
                    <button className="text-blue-600 hover:text-blue-800">
                      <FontAwesomeIcon icon={faPencil} className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Name</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Relationship</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Date of Birth</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Phone</th>
                          <th className="relative px-4 py-3"><span className="sr-only">Actions</span></th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                        <tr>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-white ">Leo</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-white ">Brother</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-white ">Feb 16th, 2019</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-white ">9876543210</td>
                          <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">

                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Education Information Card */}
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-[#452B90] dark:text-white">Education Informations</h3>
                    <button className="text-blue-500 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                      <FontAwesomeIcon icon={faPen} className="h-4 w-4" />
                    </button>
                  </div>
                  <ul className="relative">
                    {/* Single continuous vertical line */}
                    <div className="absolute left-[15px] top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-600"></div>

                    {/* Education Item 1 */}
                    <li className="relative pl-8 pb-6">
                      <div className="absolute left-2 top-2 h-4 w-4 rounded-full bg-[#452B90] border-4 border-white dark:border-gray-800 z-10"></div>
                      <div className="pl-6">
                        <a href="#/" className="block text-sm font-medium text-[#452B90] dark:text-blue-400">
                          International College of Arts and Science (UG)
                        </a>
                        <div className="text-sm text-gray-500 dark:text-gray-300">Bsc Computer Science</div>
                        <span className="text-xs text-gray-400 dark:text-gray-400">2000 - 2003</span>
                      </div>
                    </li>

                    {/* Education Item 2 */}
                    <li className="relative pl-8">
                      <div className="absolute left-2 top-1 h-4 w-4 rounded-full bg-[#452B90] border-4 border-white dark:border-gray-800 z-10"></div>
                      <div className="pl-6">
                        <a href="#/" className="block text-sm font-medium text-[#452B90] dark:text-blue-400">
                          International College of Arts and Science (PG)
                        </a>
                        <div className="text-sm text-gray-500 dark:text-gray-300">Msc Computer Science</div>
                        <span className="text-xs text-gray-400 dark:text-gray-400">2000 - 2003</span>
                      </div>
                    </li>
                  </ul>
                </div>


                {/* Experience Card */}
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-[#452B90] dark:text-white">Experience</h3>
                    <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                      <FontAwesomeIcon icon={faPen} className="h-4 w-4" />
                    </button>
                  </div>
                  <ul className="relative">
                    {/* Single continuous vertical line */}
                    <div className="absolute left-[15px] top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-600"></div>

                    {/* Experience Item 1 */}
                    <li className="relative pl-8 pb-6">
                      <div className="absolute left-2 top-2 h-4 w-4 rounded-full bg-[#452B90] border-4 border-white dark:border-gray-800 z-10"></div>
                      <div className="pl-6">
                        <a href="#/" className="block text-sm font-medium text-[#452B90] dark:text-blue-400">
                          Web Designer at Zen Corporation
                        </a>
                        <span className="text-xs text-gray-400 dark:text-gray-300">
                          Jan 2013 - Present (5 years 2 months)
                        </span>
                      </div>
                    </li>

                    {/* Experience Item 2 */}
                    <li className="relative pl-8 pb-6">
                      <div className="absolute left-2 top-1 h-4 w-4 rounded-full bg-[#452B90] border-4 border-white dark:border-gray-800 z-10"></div>
                      <div className="pl-6">
                        <a href="#/" className="block text-sm font-medium text-[#452B90] dark:text-blue-400">
                          Web Designer at Ron-tech
                        </a>
                        <span className="text-xs text-gray-400 dark:text-gray-300">
                          Jan 2013 - Present (5 years 2 months)
                        </span>
                      </div>
                    </li>

                    {/* Experience Item 3 */}
                    <li className="relative pl-8">
                      <div className="absolute left-2 top-1 h-4 w-4 rounded-full bg-[#452B90] border-4 border-white dark:border-gray-800 z-10"></div>
                      <div className="pl-6">
                        <a href="#/" className="block text-sm font-medium text-[#452B90] dark:text-blue-400">
                          Web Designer at Dalt Technology
                        </a>
                        <span className="text-xs text-gray-400 dark:text-gray-300">
                          Jan 2013 - Present (5 years 2 months)
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>

              </div>

              <div id="emp_about_me" className={`${activeTab === 'emp_about_me' ? 'block' : 'hidden'}`}>
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-medium text-[#452B90] mb-4">About Me</h3>

                  <div className="space-y-6">
                    <div>
                      <p className="text-gray-500 mb-4 text-sm">
                        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence was created for the bliss of souls like mine.I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.
                      </p>
                      <p className="text-gray-500 text-sm">
                        A collection of textile samples lay spread out on the table – Samsa was a travelling salesman – and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-[#452B90] mb-3">Skills</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {['Admin', 'Dashboard', 'Photoshop', 'Bootstrap', 'Responsive', 'Crypto'].map((skill) => (
                          <span key={skill} className="bg-gray-100 text-[#452B90] text-sm px-4 py-2 rounded border border-gray-300 dark:bg-gray-700 dark:text-white hover:bg-[#452B90] hover:text-white cursor-pointer transition-all duration-500 ">
                            {skill}
                          </span>
                        ))}
                      </div>

                      <h4 className="font-medium text-[#452B90] mb-3">Language</h4>
                      <div className="flex flex-wrap gap-2">
                        {['English', 'French', 'Bengia'].map((lang) => (
                          <span key={lang} className="bg-gray-100 text-gray-800 text-sm px-4 py-2 rounded">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-[#452B90] mb-3">Personal Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        {[
                          { label: "Name", value: "Mitchell C.Shay" },
                          { label: "Email", value: "example@exampleI.com" },
                          { label: "Availability", value: "Full Time (Free Lancer)" },
                          { label: "Age", value: "27" },
                          { label: "Location", value: "Rosemont Avenue Melbourne, Florida" },
                          { label: "Year Experience", value: "07 Year Experiences" }
                        ].map((item, index) => (
                          <div key={index} className="flex">
                            <span className="text-gray-600 w-32">{item.label} :</span>
                            <span className="text-gray-900 pl-3">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Setting  Tab */}
              <div id="setting" className={`${activeTab === 'setting' ? 'block' : 'hidden'}`}>
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-medium text-[#452B90] mb-6">Account Setting</h3>

                  <div className="space-y-6">
                    {/* Email & Password Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="Email"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="password"
                        />
                      </div>
                    </div>

                    {/* Address Section */}
                    <div>
                      <h4 className="font-medium text-gray-700 mb-4">Address</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            value="1234 Main St"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Address 2</label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="Apartment, studio, or floor"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
                              <option>Choose...</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Zip</label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Checkbox and Button */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                          Check me out
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="px-4 py-2 bg-[#452B90] text-white rounded-md hover:bg-[#493f6b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Sign in
                      </button>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>


        </div>
      </div>



      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Edit Personal Information
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Update your details to keep your profile up-to-date.
            </p>
          </div>
          <form className="flex flex-col">
            <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
              <div>
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                  Social Links
                </h5>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div>
                    <Label>Facebook</Label>
                    <Input
                      type="text"
                      value="https://www.facebook.com/PimjoHQ"
                    />
                  </div>

                  <div>
                    <Label>X.com</Label>
                    <Input type="text" value="https://x.com/PimjoHQ" />
                  </div>

                  <div>
                    <Label>Linkedin</Label>
                    <Input
                      type="text"
                      value="https://www.linkedin.com/company/pimjo"
                    />
                  </div>

                  <div>
                    <Label>Instagram</Label>
                    <Input type="text" value="https://instagram.com/PimjoHQ" />
                  </div>
                </div>
              </div>
              <div className="mt-7">
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                  Personal Information
                </h5>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div className="col-span-2 lg:col-span-1">
                    <Label>First Name</Label>
                    <Input type="text" value="Musharof" />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Last Name</Label>
                    <Input type="text" value="Chowdhury" />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Email Address</Label>
                    <Input type="text" value="randomuser@pimjo.com" />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Phone</Label>
                    <Input type="text" value="+09 363 398 46" />
                  </div>

                  <div className="col-span-2">
                    <Label>Bio</Label>
                    <Input type="text" value="Team Manager" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal}>
                Close
              </Button>
              <Button size="sm" onClick={handleSave}>
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
