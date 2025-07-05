import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaMedium, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';

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
    name: 'Medium',
    url: 'https://medium.com/@yourusername',
    icon: <FaMedium />,
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

const InputField = ({ label, type, placeholder, value, onChange, error, delay }) => (
  <motion.div
    className="relative"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <label className="block text-sm text-[#8b8b8b] mb-2">{label}</label>
    {type === 'textarea' ? (
      <textarea
        className={`w-full bg-white/5 border ${error ? 'border-red-500/50' : 'border-white/10'} rounded-lg p-3 text-white focus:outline-none focus:border-green-500/50 transition-colors duration-300 resize-none h-32`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    ) : (
      <input
        type={type}
        className={`w-full bg-white/5 border ${error ? 'border-red-500/50' : 'border-white/10'} rounded-lg p-3 text-white focus:outline-none focus:border-green-500/50 transition-colors duration-300`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    )}
    {error && (
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs text-red-500 mt-1 block"
      >
        {error}
      </motion.span>
    )}
  </motion.div>
);

const Contact = () => {
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
      
      // Simulate API call
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (error) {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-8 py-24">
        {/* Header */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-wider text-[#8b8b8b] mb-4"
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-light text-white mb-6"
          >
            Let's Work Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[#8b8b8b] max-w-2xl"
          >
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-[#0f1922] to-[#0a1118] p-8 rounded-xl border border-white/5"
          >
            <h2 className="text-2xl font-light text-white mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField
                label="Name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                error={errors.name}
                delay={0.4}
              />
              <InputField
                label="Email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                error={errors.email}
                delay={0.5}
              />
              <InputField
                label="Subject"
                type="text"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                error={errors.subject}
                delay={0.6}
              />
              <InputField
                label="Message"
                type="textarea"
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                error={errors.message}
                delay={0.7}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg text-white font-light
                    ${isSubmitting 
                      ? 'bg-white/10 cursor-not-allowed' 
                      : 'bg-white/10 hover:bg-white/20'
                    } transition-all duration-300 relative overflow-hidden`}
                >
                  <span className={`transition-all duration-300 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                    Send Message
                  </span>
                  {isSubmitting && (
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    </motion.div>
                  )}
                </button>
              </motion.div>
              
              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-center mt-4"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}
              
              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-center mt-4"
                >
                  Something went wrong. Please try again later.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Right Column - Contact Info & Social Links */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-[#0f1922] to-[#0a1118] p-8 rounded-xl border border-white/5"
            >
              <h2 className="text-2xl font-light text-white mb-8">Get in Touch</h2>
              <div className="space-y-6">
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
              className="bg-gradient-to-br from-[#0f1922] to-[#0a1118] p-8 rounded-xl border border-white/5"
            >
              <h2 className="text-2xl font-light text-white mb-8">Connect</h2>
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
