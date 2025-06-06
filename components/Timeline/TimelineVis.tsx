import { useEffect, useRef } from "react";
import { DataSet, Timeline } from "vis-timeline/standalone";
import "vis-timeline/styles/vis-timeline-graph2d.min.css";
import { AIContributionDetail } from "@/types";

const colorMap: Record<string, string> = {
  "Text Complexity Poll": "#ff4d4f",
  "Text Clarity Comparison": "#1890ff",
  "Text Similarity Poll": "#52c41a",
  "Text Complexity Comparison": "#faad14",
};

const iconMap: Record<string, string> = {
  "Text Complexity Poll": "📊",
  "Text Clarity Comparison": "🧼",
  "Text Similarity Poll": "🔍",
  "Text Complexity Comparison": "🧠",
};

const truncate = (text: string, max = 20) =>
  text.length > max ? text.slice(0, max) + "…" : text;

export default function TimelineVis({ contributions }: { contributions: AIContributionDetail[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const groups = Array.from(new Set(contributions.map((c) => c.user))).map((user) => ({
      id: user,
      content: `<b>${user}</b>`,
    }));

    const items = contributions.map((c, index) => {
      const color = colorMap[c.prompt] || "#ccc";
      const icon = iconMap[c.prompt] || "🤖";

      return {
        id: index,
        group: c.user,
        start: c.timestamp,
        type: "box",
        content: `
          <div style="
            background:${color};
            padding:4px 8px;
            border-radius:6px;
            color:white;
            font-size:12px;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
          ">
            ${icon} ${truncate(c.prompt)}
          </div>`,
        title: `${c.prompt} used by ${c.user} at ${new Date(c.timestamp).toLocaleString()}`,
      };
    });

    const timeline = new Timeline(
      containerRef.current,
      new DataSet(items),
      new DataSet(groups),
      {
        stack: true, // ✅ prevent label overlap
        horizontalScroll: true,
        verticalScroll: true,
        zoomKey: "ctrlKey",
        zoomable: true,
        zoomMin: 1000 * 60 * 60 * 6,      // 6 hours
        zoomMax: 1000 * 60 * 60 * 24 * 30, // 30 days
        margin: { item: 10, axis: 5 },
        showCurrentTime: true,
        orientation: "top",
        tooltip: { followMouse: true },
      }
    );

    return () => timeline.destroy();
  }, [contributions]);

  return (
    <div style={{ marginTop: 40 }}>
      <h3 style={{ marginBottom: 12 }}>AI Usage Timeline</h3>
      <div ref={containerRef} style={{ height: "450px", border: "1px solid #ddd" }}></div>
    </div>
  );
}
