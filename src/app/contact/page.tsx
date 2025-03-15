'use client'
import { Meteors } from "@/components/ui/meteors";
import { toast } from 'react-hot-toast';
import { useState, FormEvent } from "react";

function page() {

    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');

    const [formData, setFormData] = useState({ email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);


    // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     console.log('Submitted:', { email, message });
    // };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });
    
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to submit form');
          }
    
          toast.success('Message sent successfully!');
          setFormData({ email: '', message: '' });
    
        } catch (error) {
          toast.error(error instanceof Error ? error.message : 'An error occurred');
        } finally {
          setIsSubmitting(false);
        }
      };
    

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
            <Meteors number={20} />
            {' '}
            <div className="max-w-2xl mx-auto p-4 relative z-10">
                {' '}
                <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
                    Contact Us
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
                    We&apos;re here to help with any questions about our courses,
                    programs, or events. Reach out and let us know how we can assist you
                    in your musical journey.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <input
                        type="email"
                        name="email"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="Your email address"
                        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                        required
                    />
                    <textarea
                        // value={message}
                        // onChange={(e) => setMessage(e.target.value)}
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="Your message"
                        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                        rows={5}
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>

    )
}

export default page
