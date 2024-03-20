import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
// Import the main component
import { Viewer, Worker } from "@react-pdf-viewer/core";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

interface IPDFViewer {
  title?: string;
  description?: string;
  author?: string;
  pdfURL?: String;
}

export const PDFDrawer = ({
  title,
  description,
  author,
  pdfURL,
}: IPDFViewer) => {
  return (
    <>
      <Sheet key={"bottom"}>
        <SheetTrigger asChild>
          <Button variant="outline">View PDF</Button>
        </SheetTrigger>

        <SheetContent side={"bottom"} className="h-3/4">
          <SheetHeader>
            <SheetTitle>Title : {title ?? `Title Info`}</SheetTitle>
            <SheetDescription>
              Description : {description ?? `Description Info`}
            </SheetDescription>
            <SheetDescription>
              Author : {author ?? `Author's Name`}
            </SheetDescription>
          </SheetHeader>

          <div className="grid gap-4 py-4 h-full overflow-auto">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
              <Viewer
                theme={{
                  theme: "dark",
                }}
                fileUrl={
                  (pdfURL as any) ??
                  "https://www.clickdimensions.com/links/TestPDFfile.pdf"
                }
              />
            </Worker>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
