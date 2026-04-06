import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { portfolioData } from '../data/mock';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';
import { SectionHeading } from './SectionHeading';

const BACKEND_URL = (import.meta.env.VITE_BACKEND_URL || '').replace(/\/$/, '');
const API = BACKEND_URL ? `${BACKEND_URL}/api` : '';

const Contact = () => {
  const { personal } = portfolioData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!API) {
      toast({
        title: 'Message not sent',
        description: 'Set VITE_BACKEND_URL in .env and run the API, or reach out via email above.',
        variant: 'destructive',
      });
      return;
    }
    setIsSubmitting(true);
    
    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      toast({
        title: "Message Sent!",
        description: response.data.message,
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-t border-slate-100/80 bg-white py-24 md:py-2">
      <div className="container mx-auto max-w-6xl px-6">
        <SectionHeading
          //kicker="Contact"
          description="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions."
        >
          Get In <span className="gradient-text">Touch</span>
        </SectionHeading>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-100 rounded-lg">
                  <Mail className="text-emerald-600" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Email</p>
                  <a href={`mailto:${personal.email}`} className="text-slate-800 hover:text-emerald-600 transition-colors">
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-100 rounded-lg">
                  <Phone className="text-emerald-600" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Phone</p>
                  <a href={`tel:${personal.phone}`} className="text-slate-800 hover:text-emerald-600 transition-colors">
                    {personal.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-100 rounded-lg">
                  <MapPin className="text-emerald-600" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Location</p>
                  <p className="text-slate-800">{personal.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="rounded-2xl border border-slate-100/90 p-8 shadow-lg shadow-slate-200/40">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  rows={5}
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/20 hover:from-emerald-700 hover:to-teal-700"
                disabled={isSubmitting}
              >
                <Send className="mr-2" size={20} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;