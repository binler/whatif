"use client";
import { Button } from "@ui/components/button";
export default function Dashboard() {
    return (
        <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
            <div className="flex items-center space-x-2">
                {/* <CalendarDateRangePicker /> */}
                <Button>Download</Button>
            </div>
        </div>
    );
}
