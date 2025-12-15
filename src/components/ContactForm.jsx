import { useState, useEffect, useRef } from "react";
import leafIcon from "../../Jasons Tree/assets/svg/mobildeMenuLeafsvg.svg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
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
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
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
        service: "",
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
      className="w-full py-16 sm:py-24 px-4 sm:px-16 bg-transparent relative z-50"
    >
      <div className="max-w-6xl mx-auto">
        {isSubmitted ? (
          <div className="bg-white p-12 rounded-2xl shadow-xl flex flex-col items-center justify-center gap-6 min-h-[400px] border-2 border-[#6DC642]">
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
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
            {/* Left Side - Info */}
            <div className="w-full sm:w-[45%] flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <img src={leafIcon} alt="" className="w-8" />
                <h2 className="Akria text-3xl sm:text-4xl text-[#0F0F0F]">
                  Book an <span className="text-[#6DC642]">Appointment</span>
                </h2>
              </div>
              
              <p className="AvantLight text-base sm:text-lg leading-7 text-[#2C2C2C] font-medium">
                Ready to transform your landscape? Fill out the form and our expert team will contact you within 24 hours to schedule your free estimate.
              </p>

              <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#6DC642] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white AvantBold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="AvantBold text-lg text-[#0F0F0F]">Free Estimate</h3>
                    <p className="AvantLight text-sm text-[#2C2C2C]">No obligation, detailed quote for your project</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#6DC642] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white AvantBold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="AvantBold text-lg text-[#0F0F0F]">Fast Response</h3>
                    <p className="AvantLight text-sm text-[#2C2C2C]">24-hour callback, same-day estimates available</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#6DC642] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white AvantBold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="AvantBold text-lg text-[#0F0F0F]">Professional Service</h3>
                    <p className="AvantLight text-sm text-[#2C2C2C]">Licensed, insured, and fully equipped crew</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full sm:w-[55%]">
              <form 
                onSubmit={handleSubmit} 
                className={`flex flex-col gap-5 bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl transition-all duration-500 ${
                  isHighlighted 
                    ? 'border-4 border-[#6DC642] shadow-[0_0_30px_rgba(109,198,66,0.6)]' 
                    : 'border border-gray-200'
                }`}
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
                      placeholder="(805) 535-3739"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1 AvantLight">{errors.phone}</p>
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
                    <option value="tree-trimming">Tree Trimming</option>
                    <option value="tree-removal">Tree Removal</option>
                    <option value="tree-pruning">Tree Pruning</option>
                    <option value="stump-grinding">Stump Grinding</option>
                    <option value="palm-care">Palm Tree Care</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-xs mt-1 AvantLight">{errors.service}</p>
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

