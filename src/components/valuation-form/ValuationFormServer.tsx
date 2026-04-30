import { serverFetch } from '@/lib/serverApi';
import ValuationForm from './ValuationForm';

interface Props {
    initialMakeId?: string;
    initialModelId?: string;
}

interface PreloadData {
    years: number[];
    latest_year: string | null;
    makes: any[];
    top_models?: Record<string, any[]>;
}

export default async function ValuationFormServer({ initialMakeId, initialModelId }: Props) {
    let preload: PreloadData | null = null;

    try {
        const res = await serverFetch<{ success: boolean; data: PreloadData }>('/v1/preload', 3600);
        if (res.success) preload = res.data;
    } catch {
        // Fall back to client-side fetching if preload fails
    }

    return (
        <ValuationForm
            initialMakeId={initialMakeId}
            initialModelId={initialModelId}
            initialYears={preload?.years}
            initialMakes={preload?.makes}
            initialLatestYear={preload?.latest_year ?? undefined}
            initialTopModels={preload?.top_models}
        />
    );
}
