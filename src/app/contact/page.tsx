'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import dynamic from 'next/dynamic';

// Import Map dynamically to avoid SSR issues
const FreeMap = dynamic(() => import('@/components/FreeMap'), { 
    ssr: false,
    loading: () => <div className="w-full h-full bg-gray-100 animate-pulse rounded-2xl" />
});

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(5, 'Please enter a valid phone number'),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';
      await axios.post(`${apiUrl}/contacts`, data);
      setIsSuccess(true);
      reset();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const defaultCenter: [number, number] = [25.2048, 55.2708]; // Dubai
  const markers: Array<{position: [number, number], title: string, address: string}> = [
    { position: [25.2048, 55.2708], title: 'ExpatCarBuyers Dubai', address: 'Sheikh Zayed Road, Dubai' },
    { position: [24.4539, 54.3773], title: 'ExpatCarBuyers Abu Dhabi', address: 'Airport Road, Abu Dhabi' },
    { position: [25.3463, 55.4209], title: 'ExpatCarBuyers Sharjah', address: 'Al Khan, Sharjah' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Get in <span className="text-blue-600">Touch</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about selling your car? Our team of experts is ready to help you across Dubai, Sharjah, and Abu Dhabi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-8 tracking-tight">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</p>
                      <p className="text-lg font-bold text-gray-900 tracking-tight">+971 50 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</p>
                      <p className="text-lg font-bold text-gray-900 tracking-tight">info@expatcarbuyers.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Visit Us</p>
                      <p className="text-lg font-bold text-gray-900 tracking-tight">Sheikh Zayed Road, Dubai, UAE</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Free Map Component */}
              <div className="h-64 rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white p-2">
                <FreeMap center={defaultCenter} markers={markers} zoom={10} />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl" />
                
                {isSuccess ? (
                  <div className="py-20 text-center animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h2>
                    <p className="text-gray-600 max-w-sm mx-auto mb-8">
                      Thank you for reaching out. One of our experts will contact you shortly.
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="px-8 py-3 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                        <input
                          {...register('name')}
                          placeholder="Your full name"
                          className={`w-full px-5 py-4 bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                        <input
                          {...register('email')}
                          placeholder="name@example.com"
                          className={`w-full px-5 py-4 bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                        <input
                          {...register('phone')}
                          placeholder="e.g. +971 50 123 4567"
                          className={`w-full px-5 py-4 bg-gray-50 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all`}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                        <input
                          {...register('subject')}
                          placeholder="How can we help?"
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Your Message</label>
                      <textarea
                        {...register('message')}
                        rows={5}
                        placeholder="Please tell us more about your inquiry..."
                        className={`w-full px-5 py-4 bg-gray-50 border ${errors.message ? 'border-red-500' : 'border-gray-200'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all resize-none`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1 ml-1">{errors.message.message}</p>}
                    </div>

                    {error && (
                      <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600">
                        <AlertCircle className="w-5 h-5" />
                        <p className="text-sm font-medium">{error}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
