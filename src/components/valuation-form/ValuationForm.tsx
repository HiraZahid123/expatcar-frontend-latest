"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Car,
    ChevronRight,
    ChevronLeft,
    Check,
    Loader2,
    Hash,
    User,
    Phone,
    Mail,
    Search,
    Copy,
    ClipboardCheck,
    Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';
import api from '@/lib/api';
import { usePathname } from 'next/navigation';

const formSchema = z.object({
    year: z.string().min(1, "Year is required"),
    make_id: z.string().min(1, "Make is required"),
    model_id: z.string().min(1, "Model is required"),
    variant_id: z.string().min(1, "Variant is required"),
    mileage: z.string().min(1, "Mileage is required"),
    specs: z.string().min(1, "Regional spec is required"),

    name: z.string().min(2, "Name is required"),
    phone: z.string().min(8, "Phone is required"),
    email: z.string().email("Valid email is required"),
});

type FormData = z.infer<typeof formSchema>;

interface ValuationFormProps {
    initialMakeId?: string;
    initialModelId?: string;
    /** Server-provided years list — skips the /years fetch on mount */
    initialYears?: number[];
    /** Server-provided makes for initialLatestYear — pre-populates client cache */
    initialMakes?: any[];
    /** The year that initialMakes was fetched for */
    initialLatestYear?: string;
}

export default function ValuationForm({
    initialMakeId,
    initialModelId,
    initialYears,
    initialMakes,
    initialLatestYear,
}: ValuationFormProps) {
    const pathname = usePathname();
    const isHome = pathname === '/';
    const [step, setStep] = useState(1);
    const [years, setYears] = useState<number[]>(initialYears ?? []);
    const [makes, setMakes] = useState<any[]>([]);
    const [models, setModels] = useState<any[]>([]);
    const [variants, setVariants] = useState<any[]>([]);
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [refNum, setRefNum] = useState("");
    const [copied, setCopied] = useState(false);
    const [utmData, setUtmData] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState({ makes: false, models: false, variants: false });
    // Pre-populate cache with server-fetched makes so the first year selection is instant
    const cache = useRef<Record<string, any>>(
        initialMakes?.length && initialLatestYear
            ? { [`makes_${initialLatestYear}`]: initialMakes }
            : {}
    );

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            year: "",
            make_id: initialMakeId || "",
            model_id: initialModelId || "",
            variant_id: "",
            mileage: "",
            specs: "GCC",

            name: "",
            phone: "",
            email: "",
        }
    });

    const { watch, setValue, handleSubmit, formState: { errors } } = form;

    const selectedYear = watch('year');
    const selectedMake = watch('make_id');
    const selectedModel = watch('model_id');

    useEffect(() => {
        // Skip network fetch when years were injected server-side
        if (!initialYears?.length) fetchYears();

        const params = new URLSearchParams(window.location.search);
        const utm: Record<string, string> = {};
        ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(key => {
            const val = params.get(key);
            if (val) utm[key] = val;
        });
        if (Object.keys(utm).length) setUtmData(utm);
    }, []);

    useEffect(() => {
        if (selectedYear) fetchMakes(selectedYear);
    }, [selectedYear]);

    useEffect(() => {
        if (initialMakeId && !selectedYear) {
            // If make is pre-filled but year isn't, we still want to show the make
            // but models won't load until year is picked.
            // This is handled by fetchMakes if we remove the year requirement or 
            // the backend handles year-less make listing.
        }
    }, [initialMakeId]);

    useEffect(() => {
        if (selectedMake && selectedYear) fetchModels(selectedMake, selectedYear);
    }, [selectedMake, selectedYear]);

    useEffect(() => {
        if (selectedModel && selectedYear) fetchVariants(selectedModel, selectedYear);
    }, [selectedModel, selectedYear]);

    const fetchYears = async () => {
        try {
            const res = await api.get('/years');
            setYears(res.data.data);
        } catch (e) {
            console.error("Error fetching years", e);
        }
    };

    const fetchMakes = async (year: string) => {
        if (cache.current[`makes_${year}`]) {
            setMakes(cache.current[`makes_${year}`]);
            return;
        }
        setLoading(prev => ({ ...prev, makes: true }));
        try {
            const res = await api.get(`/makes?year=${year}`);
            const data = res.data.data;
            setMakes(data);
            cache.current[`makes_${year}`] = data;
        } catch (e) {
            console.error("Error fetching makes", e);
        } finally {
            setLoading(prev => ({ ...prev, makes: false }));
        }
    };

    const fetchModels = async (makeId: string, year: string) => {
        const cacheKey = `models_${makeId}_${year}`;
        if (cache.current[cacheKey]) {
            setModels(cache.current[cacheKey]);
            return;
        }
        setLoading(prev => ({ ...prev, models: true }));
        try {
            const res = await api.get(`/models?make_id=${makeId}&year=${year}`);
            const data = res.data.data;
            setModels(data);
            cache.current[cacheKey] = data;
        } catch (e) {
            console.error("Error fetching models", e);
        } finally {
            setLoading(prev => ({ ...prev, models: false }));
        }
    };

    const fetchVariants = async (modelId: string, year: string) => {
        const cacheKey = `variants_${modelId}_${year}`;
        if (cache.current[cacheKey]) {
            setVariants(cache.current[cacheKey]);
            return;
        }
        setLoading(prev => ({ ...prev, variants: true }));
        try {
            const res = await api.get(`/variants?model_id=${modelId}&year=${year}`);
            const data = res.data.data;
            setVariants(data);
            cache.current[cacheKey] = data;
        } catch (e) {
            console.error("Error fetching variants", e);
        } finally {
            setLoading(prev => ({ ...prev, variants: false }));
        }
    };

    const onSubmit = async (data: FormData) => {
        setSubmitting(true);
        setError(null);
        try {
            const res = await api.post('/bookings', {
                ...data,
                ...(Object.keys(utmData).length ? { utm_data: utmData } : {}),
            });
            setSuccess(true);
            setRefNum(res.data.data.reference_number);
        } catch (e: any) {
            console.error("Error submitting booking", e);
            setError(e.response?.data?.message || "Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    const nextStep = () => {
        if (step === 1 && (!selectedYear || !selectedMake || !selectedModel || !watch('variant_id'))) {
            return;
        }
        setStep(prev => prev + 1);
    };

    const prevStep = () => setStep(prev => prev - 1);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(refNum);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (success) {
        return (
            <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md mx-auto border border-green-50">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Valuation Submitted!</h2>
                <p className="text-gray-600 mb-6">Our experts will call you within 15 minutes.</p>
                <div className="bg-gray-50 p-4 rounded-xl border border-dashed border-gray-300 mb-8 relative group">
                    <span className="text-xs uppercase tracking-widest text-gray-600 font-bold block mb-1">Reference Number</span>
                    <div className="flex items-center justify-center gap-3">
                        <span className="text-xl font-mono font-bold text-[#f24026] transition-all">{refNum}</span>
                        <button
                            onClick={copyToClipboard}
                            className={cn(
                                "p-2 rounded-lg transition-all duration-200 flex items-center justify-center",
                                copied 
                                    ? "bg-green-100 text-green-600 scale-110" 
                                    : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 active:scale-95"
                            )}
                            title="Copy to clipboard"
                        >
                            {copied ? <ClipboardCheck className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
                <button
                    onClick={() => window.location.reload()}
                    className="w-full bg-[#f24026] text-white font-bold py-4 rounded-xl hover:bg-[#d6351f] transition"
                >
                    Valuate Another Car
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden max-w-xl mx-auto">
            {/* Progress Bar */}
            <div className="h-2 w-full bg-gray-100 flex">
                <motion.div
                    className="h-full bg-[#f24026]"
                    initial={isHome ? { width: "33.33%" } : { width: step === 1 ? "33.33%" : step === 2 ? "66.66%" : "100%" }}
                    animate={{ width: step === 1 ? "33.33%" : step === 2 ? "66.66%" : "100%" }}
                    transition={isHome ? { duration: 0.3 } : { duration: 0 }}
                />
            </div>

            <div className="p-8">
                <header className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                        {step === 1 ? "Select Your Car" : step === 2 ? "Usage Details" : "Your Contact Info"}
                    </h2>
                    <p className="text-gray-600 font-medium">
                        {step === 1 ? "Start your instant valuation" : step === 2 ? "Tell us about your car's condition" : "Where should we send the valuation?"}
                    </p>
                </header>

                {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)}>
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={isHome ? { opacity: 0, x: 20 } : {}}
                                animate={isHome ? { opacity: 1, x: 0 } : {}}
                                exit={isHome ? { opacity: 0, x: -20 } : {}}
                                transition={isHome ? { duration: 0.3 } : { duration: 0 }}
                                className="space-y-4"
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-800 font-bold">
                                            <Hash className="w-4 h-4 text-[#f24026]" /> Year
                                        </label>
                                        <select
                                            {...form.register('year')}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#f24026]/20 focus:border-[#f24026] transition text-gray-900"
                                        >
                                            <option value="">Select Year</option>
                                            {years.map(y => <option key={y} value={y}>{y}</option>)}
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-800 font-bold">
                                            <Search className="w-4 h-4 text-[#f24026]" /> Make
                                        </label>
                                        <select
                                        {...form.register('make_id')}
                                        disabled={loading.makes}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#f24026]/20 focus:border-[#f24026] transition text-gray-900 disabled:opacity-50"
                                    >
                                        <option value="">{loading.makes ? "Loading Makes..." : "Select Make"}</option>
                                        {makes.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                                    </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-800 font-bold">
                                        <Car className="w-4 h-4 text-[#f24026]" /> Model
                                    </label>
                                    <select
                                        {...form.register('model_id')}
                                        disabled={loading.models}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#f24026]/20 focus:border-[#f24026] transition text-gray-900 disabled:opacity-50"
                                    >
                                        <option value="">{loading.models ? "Loading Models..." : "Select Model"}</option>
                                        {models.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-800 font-bold">
                                        <Hash className="w-4 h-4 text-[#f24026]" /> Variant
                                    </label>
                                    <select
                                        {...form.register('variant_id')}
                                        disabled={loading.variants}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#f24026]/20 focus:border-[#f24026] transition text-gray-900 disabled:opacity-50"
                                    >
                                        <option value="">{loading.variants ? "Loading Variants..." : "Select Variant"}</option>
                                        {variants.map(v => <option key={v.id} value={v.id}>{v.name} ({v.engine})</option>)}
                                    </select>
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={isHome ? { opacity: 0, x: 20 } : {}}
                                animate={isHome ? { opacity: 1, x: 0 } : {}}
                                exit={isHome ? { opacity: 0, x: -20 } : {}}
                                transition={isHome ? { duration: 0.3 } : { duration: 0 }}
                                className="space-y-6"
                            >
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-800 font-bold flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-[#f24026]" /> Current Odometer (KMS)
                                    </label>
                                    <div className="grid grid-cols-2 gap-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                        {[
                                            "0 - 10,000",
                                            "10,000 - 20,000",
                                            "20,000 - 40,000",
                                            "40,000 - 60,000",
                                            "60,000 - 90,000",
                                            "90,000 - 120,000",
                                            "120,000 - 150,000",
                                            "150,000 - 180,000",
                                            "180,000 - 220,000",
                                            "220,000 - 250,000",
                                            "250,000+",
                                        ].map((range) => (
                                            <button
                                                key={range}
                                                type="button"
                                                onClick={() => setValue('mileage', range)}
                                                className={cn(
                                                    "py-3 px-2 rounded-xl border-2 transition font-bold text-xs text-center",
                                                    watch('mileage') === range 
                                                        ? "border-[#f24026] bg-[#f24026]/5 text-[#f24026]" 
                                                        : "border-gray-100 bg-gray-50 text-gray-500 hover:border-gray-200"
                                                )}
                                            >
                                                {range} kms
                                            </button>
                                        ))}
                                    </div>
                                    {errors.mileage && <p className="text-xs text-red-500">{errors.mileage.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-800 font-bold flex items-center gap-2">
                                        <Car className="w-4 h-4 text-[#f24026]" /> Regional Specs
                                    </label>
                                    <div className="grid grid-cols-2 gap-4">
                                        {['GCC', 'NON-GCC'].map((s) => (
                                            <button
                                                key={s}
                                                type="button"
                                                onClick={() => setValue('specs', s)}
                                                className={cn(
                                                    "py-3 px-4 rounded-xl border-2 transition font-bold text-sm",
                                                    watch('specs') === s 
                                                        ? "border-[#f24026] bg-[#f24026]/5 text-[#f24026]" 
                                                        : "border-gray-100 bg-gray-50 text-gray-500 hover:border-gray-200"
                                                )}
                                            >
                                                {s === 'GCC' ? 'GCC Spec' : 'NON-GCC'}
                                            </button>
                                        ))}
                                    </div>
                                    {errors.specs && <p className="text-xs text-red-500">{errors.specs.message}</p>}
                                </div>


                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={isHome ? { opacity: 0, x: 20 } : {}}
                                animate={isHome ? { opacity: 1, x: 0 } : {}}
                                exit={isHome ? { opacity: 0, x: -20 } : {}}
                                transition={isHome ? { duration: 0.3 } : { duration: 0 }}
                                className="space-y-4"
                            >
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-800 font-bold">
                                        <User className="w-4 h-4 text-[#f24026]" /> Full Name
                                    </label>
                                    <input
                                        {...form.register('name')}
                                        placeholder="Expat Car Buyer"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#f24026]/20 focus:border-[#f24026] transition text-gray-900"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-800 font-bold">
                                        <Phone className="w-4 h-4 text-[#f24026]" /> Phone Number (UAE)
                                    </label>
                                    <input
                                        {...form.register('phone')}
                                        placeholder="05X XXX XXXX"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#f24026]/20 focus:border-[#f24026] transition text-gray-900"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-800 font-bold">
                                        <Mail className="w-4 h-4 text-[#f24026]" /> Email Address
                                    </label>
                                    <input
                                        {...form.register('email')}
                                        placeholder="name@example.com"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#f24026]/20 focus:border-[#f24026] transition text-gray-900"
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <footer className="mt-10 flex gap-4">
                        {step > 1 && (
                            <button
                                type="button"
                                onClick={prevStep}
                                className="px-6 py-4 border border-gray-200 rounded-xl text-gray-600 font-medium hover:bg-gray-50 transition flex items-center gap-2"
                            >
                                <ChevronLeft className="w-5 h-5" /> Back
                            </button>
                        )}

                        {step < 3 ? (
                            <button
                                type="button"
                                onClick={nextStep}
                                disabled={step === 1 && !watch('variant_id')}
                                className="flex-1 bg-[#f24026] text-white py-4 rounded-xl font-bold hover:bg-[#d6351f] disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2 shadow-lg shadow-red-500/30"
                            >
                                Continue <ChevronRight className="w-5 h-5" />
                            </button>
                        ) : (
                            <button
                                type="submit"
                                disabled={submitting}
                                className="flex-1 bg-[#f24026] text-white py-4 rounded-xl font-bold hover:bg-[#d6351f] disabled:opacity-50 transition flex items-center justify-center gap-2 shadow-lg shadow-red-500/30"
                            >
                                {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Get Instant Valuation"}
                            </button>
                        )}
                    </footer>
                </form>
            </div>
        </div>
    );
}
