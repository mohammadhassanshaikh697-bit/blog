function SingleComment({ className, comment }) {
  return (
    <div className={`flex items-start gap-4 ${className}`}>
      <div
        className="h-10 w-10 shrink-0 rounded-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuByUpGe6IAcp_gYfjjf3MvSNweCs2H3NFBoWi-8C9dXY0_xyO29cuQCBrURBUdbNcT0ShCFATjv4U9dm5VNsCx2jZPy2dRMzTkSl_K8Vg7W1cwESZsnMD0lJahL-zdFpUvJH3VM-BoTu01dDs7WYxY7QoO_fK6n_CGnGjwsFUOxGPCmpza1XSFbDv-_wBc47-MhSAuu48n3z-icxAjWn9JFE9oLoUBkVGi8J9FsPFYXPnBHA3JEA_HuVBGG0naPYv2D_UL4FyXhYQlB")',
        }}
      ></div>
      <div>
        <div className="flex items-baseline gap-2">
          <p className="text-sm font-semibold text-gray-900 ">Mark Johnson</p>
          <p className="text-xs text-gray-500">July 15, 2024</p>
        </div>
        <p className="mt-1 text-base text-gray-700">
          {comment ||
            "Great article! The insights into AI-driven testing frameworks are particularly interesting."}
        </p>
      </div>
    </div>
  );
}

export default SingleComment;
