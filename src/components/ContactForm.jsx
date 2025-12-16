import { useState, useEffect, useRef } from "react";
import leafIcon from "../../Jasons Tree/assets/svg/mobildeMenuLeafsvg.svg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    city: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    photo: null,
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isHighlighted, setIsHighlighted] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const handleHighlight = () => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setIsHighlighted(true);
      setTimeout(() => {
        setIsHighlighted(false);
      }, 2000);
    };

    window.addEventListener('highlightContactForm', handleHighlight);
    
    return () => {
      window.removeEventListener('highlightContactForm', handleHighlight);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, photo: file });
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name should only contain letters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (phoneDigits.length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits";
    } else if (phoneDigits.length > 11) {
      newErrors.phone = "Phone number is too long";
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.propertyType) {
      newErrors.propertyType = "Please select a property type";
    }

    if (!formData.city) {
      newErrors.city = "Please select a city or area";
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = "Pick a preferred date";
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = "Pick a preferred time";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        propertyType: "",
        city: "",
        service: "",
        preferredDate: "",
        preferredTime: "",
        photo: null,
        message: "",
      });
      setIsSubmitted(false);
      setErrors({});
    }, 5000);
  };

  return (
    <div 
      id="contact-form" 
      ref={formRef}
      className="w-full py-0 px-4 sm:px-16 bg-transparent relative z-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4 mb-10 sm:mb-14">
          <div className="flex items-center gap-3">
            <img src={leafIcon} alt="" className="w-8" />
            <h2 className="Akria text-3xl sm:text-4xl text-[#0F0F0F]">
              Book an <span className="text-[#6DC642]">Appointment</span>
            </h2>
          </div>
          
          <p className="AvantLight text-base sm:text-lg leading-7 text-[#2C2C2C] font-medium max-w-3xl">
            Ready to transform your landscape? Fill out the form and our expert team will contact you within 24 hours to schedule your free estimate for Los Angeles County tree service.
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-12 rounded-2xl shadow-xl flex flex-col items-center justify-center gap-6 min-h-[400px] border-2 border-[#6DC642]" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
            <div className="w-20 h-20 rounded-full bg-[#6DC642] flex items-center justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="Akria text-3xl sm:text-4xl text-[#6DC642] text-center">
              Awesome!
            </h3>
            <p className="AvantLight text-xl text-center text-[#2C2C2C] leading-relaxed">
              We'll be in contact with you as soon as possible
            </p>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 sm:gap-8 lg:gap-10">
            {/* Left Side - Google Map */}
            <div className="w-full lg:w-[45%] order-1 lg:order-1 flex">
              <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border border-gray-200/50 w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-full">
                <iframe
                  title="Jason's Tree Service Location - Los Angeles, CA"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2746123736!2d-118.74137277477829!3d34.02073049552527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1734220800000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Google map showing Jason's Tree Service location in Los Angeles, CA"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-[55%] order-2 lg:order-2">
              <form 
                onSubmit={handleSubmit} 
            className={`flex flex-col gap-5 p-6 sm:p-8 rounded-2xl shadow-xl transition-all duration-500 ${
              isHighlighted 
                ? 'border-4 border-[#6DC642] shadow-[0_0_30px_rgba(109,198,66,0.6)]' 
                : 'border border-gray-200/50'
            }`}
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}
              >
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="flex-1">
                    <label htmlFor="name" className="AvantBold text-sm text-[#0F0F0F] block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:border-[#6DC642] focus:outline-none transition-colors duration-300 AvantLight ${
                        errors.name ? "border-red-500" : "border-gray-200"
                      }`}
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1 AvantLight">{errors.name}</p>
                    )}
                  </div>
                  <div className="flex-1">
                    <label htmlFor="phone" className="AvantBold text-sm text-[#0F0F0F] block mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:border-[#6DC642] focus:outline-none transition-colors duration-300 AvantLight ${
                        errors.phone ? "border-red-500" : "border-gray-200"
                      }`}
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                      placeholder="(805) 535-3739"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1 AvantLight">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="flex-1">
                    <label htmlFor="propertyType" className="AvantBold text-sm text-[#0F0F0F] block mb-2">
                      Property Type *
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:border-[#6DC642] focus:outline-none transition-colors duration-300 AvantLight ${
                        errors.propertyType ? "border-red-500" : "border-gray-200"
                      }`}
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                    >
                      <option value="">Select property type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                    </select>
                    {errors.propertyType && (
                      <p className="text-red-500 text-xs mt-1 AvantLight">{errors.propertyType}</p>
                    )}
                  </div>
                  <div className="flex-1">
                    <label htmlFor="city" className="AvantBold text-sm text-[#0F0F0F] block mb-2">
                      City / Area *
                    </label>
                    <select
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:border-[#6DC642] focus:outline-none transition-colors duration-300 AvantLight ${
                        errors.city ? "border-red-500" : "border-gray-200"
                      }`}
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                    >
                      <option value="">Select area</option>
                      <option value="la-county">Los Angeles County</option>
                      <option value="orange-county">Orange County</option>
                      <option value="irvine">Irvine</option>
                    </select>
                    {errors.city && (
                      <p className="text-red-500 text-xs mt-1 AvantLight">{errors.city}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="AvantBold text-sm text-[#0F0F0F] block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:border-[#6DC642] focus:outline-none transition-colors duration-300 AvantLight ${
                        errors.email ? "border-red-500" : "border-gray-200"
                      }`}
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                      placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 AvantLight">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="AvantBold text-sm text-[#0F0F0F] block mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:border-[#6DC642] focus:outline-none transition-colors duration-300 AvantLight bg-white ${
                      errors.service ? "border-red-500" : "border-gray-200"
                    }`}
                  >
                    <option value="">Select a service</option>
                    <optgroup label="Tree Care & Maintenance">
                      <option value="tree-trimming">Tree Trimming</option>
                      <option value="tree-pruning">Tree Pruning</option>
                      <option value="crown-reduction">Crown Reduction / Thinning</option>
                      <option value="tree-health">Tree Health & Maintenance</option>
                    </optgroup>
                    <optgroup label="Removal, Clearing & Cleanups">
                      <option value="tree-removal">Tree Removal</option>
                      <option value="stump-grinding">Stump Removal / Grinding</option>
                      <option value="lot-clearing">Lot / Land Clearing</option>
                      <option value="storm-cleanup">Storm Damage Cleanup</option>
                    </optgroup>
                    <optgroup label="Special & Commercial">
                      <option value="palm-tree">Palm Tree Trimming / Skinning</option>
                      <option value="commercial-tree">Commercial Tree Maintenance</option>
                      <option value="emergency">Emergency Tree Service LA</option>
                      <option value="fire-protection">Fire Protection Cleanups</option>
                    </optgroup>
                    <option value="other">Other</option>
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-xs mt-1 AvantLight">{errors.service}</p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="flex-1">
                    <label htmlFor="preferredDate" className="AvantBold text-sm text-[#0F0F0F] block mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:border-[#6DC642] focus:outline-none transition-colors duration-300 AvantLight ${
                        errors.preferredDate ? "border-red-500" : "border-gray-200"
                      }`}
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                    />
                    {errors.preferredDate && (
                      <p className="text-red-500 text-xs mt-1 AvantLight">{errors.preferredDate}</p>
                    )}
                  </div>
                  <div className="flex-1">
                    <label htmlFor="preferredTime" className="AvantBold text-sm text-[#0F0F0F] block mb-2">
                      Preferred Time *
                    </label>
                    <input
                      type="time"
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:border-[#6DC642] focus:outline-none transition-colors duration-300 AvantLight ${
                        errors.preferredTime ? "border-red-500" : "border-gray-200"
                      }`}
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                    />
                    {errors.preferredTime && (
                      <p className="text-red-500 text-xs mt-1 AvantLight">{errors.preferredTime}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="photo" className="AvantBold text-sm text-[#0F0F0F] block mb-2">
                    Photo Upload (optional)
                  </label>
                  <input
                    type="file"
                    id="photo"
                    name="photo"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 border-2 border-dashed rounded-lg border-gray-200 focus:border-[#6DC642] focus:outline-none transition-colors duration-300 AvantLight file:mr-4 file:px-4 file:py-2 file:rounded-lg file:border-0 file:bg-[#6DC642] file:text-white file:font-bold file:cursor-pointer"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                    aria-label="Upload a photo of the tree or property"
                  />
                  {formData.photo && (
                    <p className="text-xs text-[#2C2C2C] mt-1 AvantLight">Selected: {formData.photo.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="AvantBold text-sm text-[#0F0F0F] block mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#6DC642] focus:outline-none transition-colors duration-300 AvantLight resize-none"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                    placeholder="Tell us about your tree service needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 text-lg font-bold AvantBold bg-[#6DC642] rounded-2xl text-white rounded-tr-none transition-all duration-300 hover:bg-[#5AB032] hover:scale-105 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
                >
                  Request Free Estimate
                </button>

                <p className="AvantLight text-xs text-[#2C2C2C] mt-2">
                  By submitting this form, you agree to be contacted by Jayson's Tree Service regarding your inquiry.
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;

