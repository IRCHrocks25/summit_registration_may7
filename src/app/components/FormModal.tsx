import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
} from "./ui/dialog";

interface FormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FormModal({ open, onOpenChange }: FormModalProps) {
  useEffect(() => {
    // Load the form embed script when modal opens
    if (open) {
      // Check if script already exists
      const existingScript = document.querySelector(
        'script[src="https://l.industryrockstars.ch/js/form_embed.js"]'
      );
      
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://l.industryrockstars.ch/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] sm:max-w-[600px] w-full p-0 border-none bg-transparent">
        <div className="w-full h-[593px] rounded-[32px] overflow-hidden bg-white">
          <iframe
            src="https://l.industryrockstars.ch/widget/form/fzCQlAmoUcjf5ymPGPzp"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "32px",
            }}
            id="inline-fzCQlAmoUcjf5ymPGPzp"
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="AI Change Management"
            data-height="593"
            data-layout-iframe-id="inline-fzCQlAmoUcjf5ymPGPzp"
            data-form-id="fzCQlAmoUcjf5ymPGPzp"
            title="AI Change Management"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

