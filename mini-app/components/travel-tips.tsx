"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TravelTips() {
  const tips = [
    "Always carry a reusable water bottle to stay hydrated and reduce plastic waste.",
    "Learn a few key phrases in the local language; it shows respect and can open doors.",
    "Pack a small first‑aid kit with bandages, pain relievers, and any personal medications."
  ];

  const [randomTips, setRandomTips] = useState<string[]>([]);

  useEffect(() => {
    const shuffled = [...tips].sort(() => 0.5 - Math.random());
    setRandomTips(shuffled.slice(0, 3));
  }, []);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-xl">Random Travel Tips</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2">
          {randomTips.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
        <div className="mt-4 flex justify-end">
          <Button variant="outline" size="sm" onClick={() => {
            const shuffled = [...tips].sort(() => 0.5 - Math.random());
            setRandomTips(shuffled.slice(0, 3));
          }}>
            Refresh
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
