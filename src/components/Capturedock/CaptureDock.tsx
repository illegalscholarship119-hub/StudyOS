import {
  Clipboard,
  Camera,
  FileText,
  Video,
  Plus,
} from "lucide-react";

function CaptureDock() {
  const actions = [
    { icon: Clipboard, label: "Paste" },
    { icon: Camera, label: "Screenshot" },
    { icon: Plus, label: "Add", primary: true },
    { icon: FileText, label: "PDF" },
    { icon: Video, label: "Video" },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-4 rounded-full border border-gray-200 bg-white px-5 py-3 shadow-2xl">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.label}
              title={action.label}
              className={
                action.primary
                  ? "flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition hover:scale-110"
                  : "flex h-12 w-12 items-center justify-center rounded-full text-gray-700 transition hover:bg-gray-100 hover:scale-105"
              }
            >
              <Icon size={24} />
            </button>
          );
        })}

      </div>
    </div>
  );
}

export default CaptureDock;