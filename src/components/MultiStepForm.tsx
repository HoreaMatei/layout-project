import { useState } from "react";

const services = [
  "Brand Strategy",
  "Web Design",
  "Content Creation",
  "Digital Marketing",
  "Creative Direction",
];

export default function MultiStepForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    timeline: "",
    budget: "",
    selectedServices: [] as string[],
    moreInfo: "",
  });

  const handleCheckboxChange = (service: string) => {
    setFormData((prev) => {
      const isSelected = prev.selectedServices.includes(service);
      return {
        ...prev,
        selectedServices: isSelected
          ? prev.selectedServices.filter((s) => s !== service)
          : [...prev.selectedServices, service],
      };
    });
  };

  return (
    <form className="font-thin w-[90vw] sm:w-[40vw]  mx-auto uppercase shadow-lg rounded-lg space-y-4">
      <div className="uppercase ">
        <label className="block font-semibold">Full Name</label>
        <input
          type="text"
          placeholder="NAME SURNAME"
          className=" pb-3 pt-3 border-b-1 border-stone-600 hover:border-black mt-1 w-full"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
        />
      </div>

      <div>
        <label className="block font-semibold">Email Address</label>
        <input
          placeholder="MAIL@COMPANY.COM"
          type="email"
          className=" pb-3 pt-3 border-b-1 border-stone-600 hover:border-black mt-1 w-full"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label className="block font-semibold">Timeline</label>
        <input
          placeholder="2 WEEKS"
          type="text"
          className=" pb-3 pt-3 border-b-1 border-stone-600 hover:border-black mt-1 w-full"
          value={formData.timeline}
          onChange={(e) =>
            setFormData({ ...formData, timeline: e.target.value })
          }
        />
      </div>

      <div>
        <label className="block font-semibold">Budget</label>
        <input
          placeholder="$5.000, $10.000
"
          type="text"
          className=" pb-3 pt-3 border-b-1 border-stone-600 hover:border-black mt-1 w-full"
          value={formData.timeline}
          onChange={(e) =>
            setFormData({ ...formData, timeline: e.target.value })
          }
        />
      </div>
      <div>
        <label className="block font-semibold">Select Services</label>
        <div className="mt-2 space-y-1">
          {services.map((service) => (
            <label
              key={service}
              className="flex items-center space-x-2 text-stone-300"
            >
              <input
                type="checkbox"
                checked={formData.selectedServices.includes(service)}
                onChange={() => handleCheckboxChange(service)}
                className="w-4 h-4 appearance-none border-1 border-white bg-black checked:bg-stone-400 checked:border-stone-400"
              />
              <span>{service}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block font-semibold">More Information</label>
        <textarea
          placeholder="Hello, I'm looking for a agency to help me out with...
"
          className=" focus:border-black outline-none w-full border-b-1 border-stone-600 mt-1"
          rows={4}
          value={formData.moreInfo}
          onChange={(e) =>
            setFormData({ ...formData, moreInfo: e.target.value })
          }
        />
      </div>

      <button
        type="submit"
        className="w-full uppercase bg-blue-700 text-white p-2 hover:bg-blue-800 cursor-pointer font-medium"
      >
        Submit
      </button>
    </form>
  );
}
