import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import Input from '../../components/form/input/InputField';
import Label from '../../components/form/Label';

const AddUser = () => {
    const [activeTab, setActiveTab] = useState("account-setting");


    const [formData, setFormData] = useState({
        firstName: "John",
        lastName: "Lee",
        specialty: "Developer",  
        skills: "HTML, JavaScript, PHP",
        gender: "",
        birth: "",  
        phone: "123456789",
        email: "dsmog@gmail.com",
        country: "",
        city: ""
    });

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted with data:", formData);
        // Here you would typically send the data to an API
        alert("Form data logged to console!");
    };
    return (
        <div className="grid grid-cols-12 gap-4  items-start">
            {/* First Column - 3 columns */}
            <div className="col-span-12 lg:col-span-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-500 rounded-2xl">
                <div className="flex flex-col items-center mb-8">
                    <div className='flex flex-col items-center p-4'>
                        <div className="relative w-35 h-35 rounded-full mb-4 flex items-center justify-center text-gray-500">
                            <img className='rounded-full' src="/images/profile/user.jpg" alt="" />
                            <FontAwesomeIcon className='absolute bottom-3 right-2 cursor-pointer text-3xl text-blue-600' icon={faCamera} />
                        </div>
                        <h1 className="text-lg font-bold mb-2">Hello Vita</h1>
                        <span>Developer</span>
                    </div>

                    <div className="w-full flex flex-col  mb-6 mt-8">
                        <div className="flex justify-between text-center border-t-2 border-gray-300 py-3">
                            <p className="font-semibold px-6">Models</p>
                            <p className='px-6'>36</p>
                        </div>
                        <div className="flex justify-between text-center border-t-2 border-gray-300 py-3">
                            <p className="font-semibold px-6">Gallery</p>
                            <p className='px-6'>3</p>
                        </div>
                        <div className="flex justify-between text-center border-t-2 border-b-2 border-gray-300 py-3">
                            <p className="font-semibold px-6">Lessons</p>
                            <p className='px-6'>1</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="font-semibold">Portfolio</p>
                        <a href="#" className="text-blue-500">www.indiancoder.com</a>
                    </div>
                </div>
            </div>

            {/* Second Column - 9 columns */}
            <div className="col-span-12 lg:col-span-9 bg-white dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-500 rounded-2xl">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    {/* Tabs Navigation */}
                    <div className="border-b border-gray-200 dark:border-gray-700">
                        <div className="px-4">
                            <div className="flex">
                                <nav className="flex space-x-8">
                                    <button
                                        onClick={() => handleTabClick('account-setting')}
                                        className={`border-b-2 px-1 py-4 text-sm font-medium ${activeTab === 'account-setting'
                                            ? 'border-[#452B90] text-[#452B90]'
                                            : 'border-transparent text-gray-500 dark:text-white hover:text-[#452B90] hover:border-[#452B90] transition-all duration-400'
                                            }`}
                                    >
                                        Account Setting
                                    </button>
                                    <button
                                        onClick={() => handleTabClick('dummy-1')}
                                        className={`border-b-2 px-1 py-4 text-sm font-medium ${activeTab === 'dummy-1'
                                            ? 'border-[#452B90] text-[#452B90]'
                                            : 'border-transparent text-gray-500 dark:text-white hover:text-[#452B90] hover:border-[#452B90] transition-all duration-400'
                                            }`}
                                    >
                                        Dummy-1
                                    </button>
                                    <button
                                        onClick={() => handleTabClick('dummy-2')}
                                        className={`border-b-2 px-1 py-4 text-sm font-medium ${activeTab === 'dummy-2'
                                            ? 'border-[#452B90] text-[#452B90]'
                                            : 'border-transparent text-gray-500 dark:text-white hover:text-[#452B90] hover:border-[#452B90] transition-all duration-400'
                                            }`}
                                    >
                                        dummy-2
                                    </button>

                                </nav>
                            </div>
                        </div>
                    </div>

                    {/* Account setting Content */}
                    <div className="p-4">
                        {/* Account-setting Tab */}
                        <div id="account-setting" className={`space-y-6 ${activeTab === 'account-setting' ? 'block' : 'hidden'}`}>
                            {/* First Row */}
                            <form onSubmit={handleSubmit} >
                                <div className="flex flex-col md:flex-row gap-4 mb-4">
                                    <div className='w-full'>
                                        <Label className="block text-sm font-medium text-gray-700 mb-1">First Name</Label>
                                        <Input
                                            name="firstName"
                                            type="text"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border border-gray-300 rounded"

                                        />
                                    </div>
                                    <div className='w-full'>
                                        <Label className="block text-sm font-medium text-gray-700 mb-1">Last Name</Label>
                                        <Input
                                            name="lastName"
                                            type="text"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border border-gray-300 rounded"

                                        />
                                    </div>
                                </div>

                                {/* Second Row */}
                                <div className="flex flex-col md:flex-row gap-4 mb-4">
                                    <div className='w-full'>
                                        <Label className="block text-sm font-medium text-gray-700 mb-1">Specialty</Label>
                                        <Input
                                            name="specialty"  
                                            type="text"
                                            value={formData.specialty}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                    <div className='w-full'>
                                        <Label className="block text-sm font-medium text-gray-700 mb-1">Skills</Label>
                                        <Input
                                            name="skills"
                                            type="text"
                                            value={formData.skills}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border border-gray-300 rounded"

                                        />
                                    </div>
                                </div>

                                {/* Third Row */}
                                <div className="flex flex-col md:flex-row gap-4 mb-4">
                                    <div className='w-full'>
                                        <Label className="block text-sm font-medium text-gray-700 mb-1">Gender</Label>
                                        <select
                                            name='gender'
                                            value={formData.gender}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border border-gray-300 rounded bg-white">

                                            <option>Please select</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className='w-full'>
                                        <Label className="block text-sm font-medium text-gray-700 mb-1">Birth</Label>
                                        <Input
                                            name="birth"
                                            type="date"
                                            value={formData.birth}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border border-gray-300 rounded"

                                        />
                                    </div>
                                </div>

                                {/* Fourth Row */}
                                <div className="flex flex-col md:flex-row gap-4 mb-4">
                                    <div className='w-full'>
                                        <Label className="block text-sm font-medium text-gray-700 mb-1">Phone</Label>
                                        <Input
                                            name="phone"
                                            type="text"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border border-gray-300 rounded"

                                        />
                                    </div>
                                    <div className='w-full'>
                                        <Label className="block text-sm font-medium text-gray-700 mb-1">Email address</Label>
                                        <Input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border border-gray-300 rounded"

                                        />
                                    </div>
                                </div>

                                {/* Fifth Row */}
                                <div className="flex flex-col md:flex-row gap-4 mb-4">
                                    <div className='w-full'>
                                        <Label className="block text-sm font-medium text-gray-700 mb-1">Country</Label>
                                        <select
                                            name="country"
                                            value={formData.country}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border border-gray-300 rounded bg-white">
                                            <option>Please select</option>
                                            <option value="india">India</option>
                                            <option value="usa">USA</option>
                                            <option value="canada">Canada</option>
                                            <option value="uk">UK</option>
                                            <option value="australia">Australia</option>
                                            <option value="germany">Germany</option>
                                            <option value="france">France</option>
                                            <option value="japan">Japan</option>
                                        </select>
                                    </div>
                                    <div className='w-full'>
                                        <Label className="block text-sm font-medium text-gray-700 mb-1">City</Label>
                                        <select
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border border-gray-300 rounded bg-white">

                                            <option>Please select</option>
                                            <option value="delhi">Delhi</option>
                                            <option value="new-york">New York</option>
                                            <option value="toronto">Toronto</option>
                                            <option value="london">London</option>
                                            <option value="sydney">Sydney</option>
                                            <option value="berlin">Berlin</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="flex justify-between items-center">
                                    <button type='submit'
                                        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                        UPDATE
                                    </button>
                                    <a href="#" className="text-blue-500 hover:underline">
                                        Forgot your password?
                                    </a>
                                </div>
                            </form>
                        </div>

                        <div id="dummy-1" className={`${activeTab === 'dummy-1' ? 'block' : 'hidden'}`}>
                            <h2>dummy-1</h2>
                           
                        </div>

                        {/* Setting  Tab */}
                        <div id="dummy-2" className={`${activeTab === 'dummy-2' ? 'block' : 'hidden'}`}>
                            <h2>dummy-2</h2>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser
