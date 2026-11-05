import { useRef } from "react";
import resumePdf from "data-url:../assets/Resume.pdf";
import resumePreview from "data-url:../assets/ResumePreview.png";

export default function ResumePage() {
  const previewDialog = useRef(null);

  return (
    <div className="resume-page">
      <h1>Resume</h1>
      <p className="resume-download">
        <a href={resumePdf} download="Resume.pdf">
          Download John&apos;s resume
        </a>
      </p>
      <button
        aria-label="Open larger resume preview"
        className="resume-preview-button"
        onClick={() => previewDialog.current?.showModal()}
        type="button"
      >
        <img
          alt="First page of John's resume. Select to enlarge."
          className="resume-preview"
          src={resumePreview}
        />
      </button>
      <dialog
        aria-label="Resume preview"
        className="resume-preview-dialog"
        ref={previewDialog}
      >
        <button
          aria-label="Close resume preview"
          className="resume-preview-close"
          onClick={() => previewDialog.current?.close()}
          type="button"
        >
          Close
        </button>
        <img
          alt="First page of John's resume"
          className="resume-preview-large"
          src={resumePreview}
        />
      </dialog>
    </div>
  );
}
