import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin,  faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPen } from "@fortawesome/free-solid-svg-icons";

export default function UserProfileCard() {
  const { isOpen, openModal, closeModal } = useModal();
  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 p-5 border border-gray-200 rounded-2xl dark:border-gray-500 lg:p-6">
        {/* Banner Image */}
        <div className="relative h-50  rounded-xl ">
          <img src="/images/profile/12.jpg" className="h-50 w-full" alt="" />
          {/* Profile Image Container */}
          <div className="absolute -bottom-10 left-[40%] md:left-6">
            <div className="w-24 h-24 overflow-hidden border-4 border-white rounded-full dark:border-gray-800">
              <img
                src="/images/user/owner.jpg"
                alt="Mitchell Shay"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Profile Info Section */}
        <div className=" flex flex-col gap-4  xl:flex-row xl:items-center xl:justify-between">

          <div className="flex flex-col items-start justify-between w-full gap-4  md:flex-row md:gap-0 md:px-0">
            {/* Left Side - Profile Info */}
            <div className="flex flex-col md:flex-row justify-center md:justify-between text-center w-full gap-10 pt-16 md:pt-4">
              <div className="md:ml-32">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white/90">
                  Aminul
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  UX / UI Designer
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  info@example.com
                </p>
              </div>
              {/* Right Side - Social Icons and Edit Button */}
              <div className="flex items-center gap-4  mx-auto md:mx-0">
                {/* Social Icons */}
                <div className="flex  gap-2">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03]"
                  >
                    <FontAwesomeIcon icon={faFacebook}/>
                   
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    rel="noopener"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03]"
                  >
                    <FontAwesomeIcon icon={faTwitter}/>
                   
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    rel="noopener"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03]"
                  >
                    <FontAwesomeIcon icon={faLinkedin}/>
                    
                  </a>
                   <a
                    href="#"
                    target="_blank"
                    rel="noopener"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03]"
                  >
                    <FontAwesomeIcon icon={faInstagram}/>                    
                  </a>
                </div>
                {/* Edit Button */}
                <button
                  onClick={openModal}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03]"
                >
                  <FontAwesomeIcon icon={faPen}/>
                
                  Edit
                </button>
              </div>



            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
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
    </>
  );
}