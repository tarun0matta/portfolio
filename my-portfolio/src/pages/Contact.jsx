import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaMedium, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/sstmatta',
    icon: <FaLinkedin />,
    color: 'hover:text-[#0077b5]'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/tarun0matta',
    icon: <FaGithub />,
    color: 'hover:text-white'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: <FaTwitter />,
    color: 'hover:text-[#1DA1F2]'
  }
];

const ContactLink = ({ icon, text, href, delay }) => (
  <motion.a
    href={href}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex items-center gap-4 text-[#8b8b8b] hover:text-white transition-colors duration-300 group"
  >
    <span className="text-2xl group-hover:text-green-400 transition-colors duration-300">
      {icon}
    </span>
    <span className="text-lg">{text}</span>
  </motion.a>
);

const SocialLink = ({ name, url, icon, color, index }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`flex items-center justify-between py-4 border-b border-white/5 group ${color}`}
  >
    <div className="flex items-center gap-3">
      <span className="text-xl text-[#8b8b8b] group-hover:text-inherit transition-colors duration-300">
        {icon}
      </span>
      <span className="text-[#8b8b8b] group-hover:text-white transition-colors duration-300">
        {name}
      </span>
    </div>
    <motion.span 
      className="text-[#8b8b8b] group-hover:text-white transition-colors duration-300"
      whileHover={{ x: 5 }}
    >
      →
    </motion.span>
  </motion.a>
);

const InputField = ({ label, type, name, placeholder, value, onChange, error, delay }) => (
  <div className="space-y-2">
    <label className="block text-white/80 text-sm sm:text-base">{label}</label>
    <motion.input
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full bg-white/5 rounded-lg border ${
        error ? 'border-red-500' : 'border-white/10'
      } p-3 text-white/80 focus:outline-none focus:border-white/20 transition-colors duration-300`}
    />
    {error && (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-red-500 text-xs sm:text-sm mt-1"
      >
        {error}
      </motion.p>
    )}
  </div>
);

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitStatus('submitting');
      
      try {
        // Replace these with your actual EmailJS service details
        const result = await emailjs.sendForm(
          'YOUR_SERVICE_ID', // Add your EmailJS service ID
          'YOUR_TEMPLATE_ID', // Add your EmailJS template ID
          form.current,
          'YOUR_PUBLIC_KEY' // Add your EmailJS public key
        );

        if (result.text === 'OK') {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        console.error('Error sending email:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-8 py-12 sm:py-24">
        {/* Header */}
        <div className="mb-12 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs sm:text-sm uppercase tracking-wider text-[#8b8b8b] mb-3 sm:mb-4"
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-light text-white mb-4 sm:mb-6"
          >
            Let's Work Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-[#8b8b8b] max-w-2xl"
          >
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-20">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-[#0f1922] to-[#0a1118] p-6 sm:p-8 rounded-xl border border-white/5"
          >
            <h2 className="text-xl sm:text-2xl font-light text-white mb-6 sm:mb-8">Send a Message</h2>
            <form ref={form} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <InputField
                label="Name"
                type="text"
                name="user_name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                error={errors.name}
                delay={0.4}
              />
              <InputField
                label="Email"
                type="email"
                name="user_email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                error={errors.email}
                delay={0.5}
              />
              <InputField
                label="Subject"
                type="text"
                name="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                error={errors.subject}
                delay={0.6}
              />
              <div className="space-y-2">
                <label className="block text-white/80 text-sm sm:text-base">Message</label>
                <motion.textarea
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full bg-white/5 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-white/10'
                  } p-3 text-white/80 focus:outline-none focus:border-white/20 transition-colors duration-300`}
                  rows="5"
                  placeholder="Your message here..."
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-xs sm:text-sm mt-1"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className={`w-full bg-white/10 hover:bg-white/15 text-white py-3 rounded-lg transition-all duration-300 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-500 text-sm sm:text-base text-center mt-4"
                >
                  Message sent successfully!
                </motion.p>
              )}

              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm sm:text-base text-center mt-4"
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Right Column - Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-[#0f1922] to-[#0a1118] p-6 sm:p-8 rounded-xl border border-white/5"
            >
              <h2 className="text-xl sm:text-2xl font-light text-white mb-6 sm:mb-8">Get in Touch</h2>
              <div className="space-y-4 sm:space-y-6">
                <ContactLink
                  icon={<FaEnvelope />}
                  text="sstmatta@gmail.com"
                  href="mailto:sstmatta@gmail.com"
                  delay={0.4}
                />
                <ContactLink
                  icon={<FaMapMarkerAlt />}
                  text="Dallas, TX"
                  href="#"
                  delay={0.5}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-[#0f1922] to-[#0a1118] p-6 sm:p-8 rounded-xl border border-white/5"
            >
              <h2 className="text-xl sm:text-2xl font-light text-white mb-6 sm:mb-8">Connect</h2>
              <div className="space-y-2">
                {socialLinks.map((link, index) => (
                  <SocialLink key={link.name} {...link} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
