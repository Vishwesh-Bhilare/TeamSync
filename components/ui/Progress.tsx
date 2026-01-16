interface ProgressProps {
    value: number;
}

export function Progress({ value }: ProgressProps) {
    return (
        <div className="h-2 w-full rounded-full bg-disabled/30">
        <div
        className="h-full rounded-full bg-primary transition-all"
        style={{ width: `${Math.min(100, value)}%` }}
        />
        </div>
    );
}
