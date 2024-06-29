import React, { useState } from 'react';
import Photo from "../../assets/drive-download-20240615T053340Z-001/bg1.jpg";
import logo from "../../assets/drive-download-20240615T053340Z-001/logo.png";

const HotelRoomBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkInDate: '',
    checkOutDate: '',
    roomType: 'Single',
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.checkInDate) errors.checkInDate = 'Check-in date is required';
    if (!formData.checkOutDate) {
      errors.checkOutDate = 'Check-out date is required';
    } else if (formData.checkOutDate <= formData.checkInDate) {
      errors.checkOutDate = 'Check-out date must be after check-in date';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setFormSubmitted(true);
      // Construct WhatsApp message link
      const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0ACheck-in Date: ${formData.checkInDate}%0ACheck-out Date: ${formData.checkOutDate}%0ARoom Type: ${formData.roomType}`;
      const whatsappLink = `https://wa.me/+919007062180?text=${whatsappMessage}`;
      // Open WhatsApp link in a new tab
      window.open(whatsappLink, '_blank');
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className='h-full px-80 bg-[url(./assets/drive-download-20240615T053340Z-001/header.jpg)] bg-cover bg-fixed  '>
    <div className="h-full  flex ">
      <div className="max-w-4xl mx-auto flex flex-col justify-center  h-full w-full p-8 bg-transparent rounded-lg shadow-lg">
        <div className='flex justify-center'>
          <img src={logo} alt='' className="h-24 text-center brightness-200" />
        </div>
        <div className="flex flex-col md:flex-row mb-8">
          <div className="md:w-full md:pl-8">
            {formSubmitted ? (
              <div className="text-center mt-8 md:mt-0">
                <p className="text-green-500 font-bold">Thank you for your booking!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 block bg-transparent w-full border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-2`}
                    placeholder="Your Name"
                    required
                  />
                  {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md bg-transparent shadow-sm p-2`}
                    placeholder="Your Email"
                    required
                  />
                  {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Check-in Date</label>
                  <input
                    type="date"
                    name="checkInDate"
                    value={formData.checkInDate}
                    onChange={handleChange}
                    className={`mt-1 block bg-transparent w-full border ${formErrors.checkInDate ? 'border-red-500 ' : 'border-gray-300'} rounded-md shadow-sm p-2`}
                    required
                  />
                  {formErrors.checkInDate && <p className="text-red-500 text-sm">{formErrors.checkInDate}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Check-out Date</label>
                  <input
                    type="date"
                    name="checkOutDate"
                    value={formData.checkOutDate}
                    onChange={handleChange}
                    className={`mt-1 block bg-transparent w-full border ${formErrors.checkOutDate ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-2`}
                    required
                  />
                  {formErrors.checkOutDate && <p className="text-red-500 text-sm">{formErrors.checkOutDate}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 ">Room Type</label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="mt-1 block w-full bg-transparent border border-gray-300 rounded-md shadow-sm p-2"
                    required
                  >
                    <option className='text-black' value="Single">Single</option>
                    <option className='text-black' value="Double">Double</option>
                    <option className='text-black' value="Suite">Suite</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white border-2 border-white font-bold py-2 px-4 rounded-lg hover:bg-transparent hover:text-yellow-500 transition duration-200"
                >
                  Book Now
                </button>
                <div class="terms-container text-gray-300 tracking-widest italic font-serif border-2 w-full border-white p-4">
            <h3>Terms and Policies</h3>
            <p><strong>Cancellation Policy:</strong> Cancellations made within 48 hours of the check-in date will incur a cancellation fee of one night's stay. No-shows will be charged the full amount of the reservation.</p>
            <p><strong>Payment Policy:</strong> A deposit of 50% of the total booking amount is required at the time of booking. The remaining balance will be charged upon check-in. We accept all major credit cards.</p>
            <p><strong>Check-in/Check-out:</strong> Check-in time is 3:00 PM and check-out time is 11:00 AM. Early check-in and late check-out are subject to availability and may incur additional charges.</p>
            <p><strong>Privacy Policy:</strong> We are committed to protecting your privacy. Your personal information will be used solely for the purpose of processing your booking and will not be shared with third parties.</p>
            <p><strong>Additional Policies:</strong> No pets are allowed in the guest house. Smoking is prohibited in all rooms and public areas. Guests are responsible for any damage caused to hotel property during their stay.</p>
        </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HotelRoomBooking;
